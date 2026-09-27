import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const directory = 'dist';
const read = file => fs.readFileSync(path.join(directory,file),'utf8');
const htmlPages = ['it/index.html','en/index.html','it/itinerari/index.html','en/itineraries/index.html','it/cosa-vedere/index.html','en/things-to-see/index.html','it/mangiare/index.html','en/food-and-drink/index.html','it/dormire/index.html','en/where-to-stay/index.html','it/storia/index.html','en/history/index.html','it/sagra-cassatella/index.html','en/cassatella-festival/index.html'];
const titles=[];
let totalAssets=0, totalLinks=0;
for (const file of htmlPages) {
  const lang=file.slice(0,2), html=read(file);
  assert.match(html,new RegExp(`<html[^>]+lang="${lang}"`),`${lang}: language`);
  assert.equal((html.match(/<h1[\s>]/g)||[]).length,1,`${lang}: one H1`);
  assert.match(html,/<main[^>]*id="main"/,`${lang}: main landmark`);
  const title=html.match(/<title>([^<]+)<\/title>/)?.[1];assert.ok(title);titles.push(title);
  assert.match(html,/<meta name="description" content="[^"]{30,}"/,`${lang}: description`);
  const ids=[...html.matchAll(/\sid="([^"]+)"/g)].map(m=>m[1]);assert.equal(new Set(ids).size,ids.length,`${lang}: unique IDs`);
  const pageUrl=`https://test.invalid/${file.replace(/index\.html$/, '')}`;
  for(const match of html.matchAll(/<(?:a|link)\b[^>]*href="([^"]*)"/g)){
    const href=match[1]; if(href.startsWith('http')||href.startsWith('mailto:'))continue;
    assert.ok(href&&href!=='#',`${lang}: no empty links`);
    const url=new URL(href,pageUrl);
    const target=url.pathname.endsWith('/')?url.pathname+'index.html':url.pathname;
    assert.ok(fs.existsSync(path.join(directory,target)),`${lang}: local target ${target}`);
    if(url.hash){const targetHtml=read(target);assert.ok(targetHtml.includes(`id="${url.hash.slice(1)}"`),`${lang}: fragment ${url.hash}`);}
    totalLinks++;
  }
  for(const image of html.matchAll(/<img\b[^>]*>/g)){
    for(const attribute of ['alt','width','height','srcset'])assert.ok(image[0].includes(`${attribute}="`),`${lang}: image ${attribute}`);
    const src=image[0].match(/src="([^"]+)"/)?.[1];assert.ok(src&&fs.existsSync(path.join(directory,src)),`${lang}: image exists`);
    totalAssets++;
  }
  for (const m of html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)) JSON.parse(m[1]);
  const canonical=html.match(/<link rel="canonical" href="([^"]+)"/)?.[1];
  if(canonical){
    const expectedPath=`/${file.replace(/index\.html$/, '')}`;
    assert.equal(new URL(canonical).pathname,expectedPath,`${lang}: canonical path`);
    const itineraries=file.includes('itinerari')||file.includes('itineraries');
    const sights=file.includes('cosa-vedere')||file.includes('things-to-see');
    const eating=file.includes('mangiare')||file.includes('food-and-drink');
    const stay=file.includes('dormire')||file.includes('where-to-stay');
    const history=file.includes('storia')||file.includes('/history/');
    const festival=file.includes('sagra-cassatella')||file.includes('cassatella-festival');
    const alternatePaths=itineraries?{it:'/it/itinerari/',en:'/en/itineraries/','x-default':'/it/itinerari/'}:sights?{it:'/it/cosa-vedere/',en:'/en/things-to-see/','x-default':'/it/cosa-vedere/'}:eating?{it:'/it/mangiare/',en:'/en/food-and-drink/','x-default':'/it/mangiare/'}:stay?{it:'/it/dormire/',en:'/en/where-to-stay/','x-default':'/it/dormire/'}:history?{it:'/it/storia/',en:'/en/history/','x-default':'/it/storia/'}:festival?{it:'/it/sagra-cassatella/',en:'/en/cassatella-festival/','x-default':'/it/sagra-cassatella/'}:{it:'/it/',en:'/en/','x-default':'/it/'};
    for(const code of ['it','en','x-default']){
      const alternate=html.match(new RegExp(`<link rel="alternate" hreflang="${code}" href="([^"]+)"`))?.[1];
      assert.ok(alternate,`${lang}: ${code} alternate`);
      assert.equal(new URL(alternate).pathname,alternatePaths[code],`${lang}: ${code} alternate path`);
    }
    assert.ok(!html.includes('noindex,nofollow'));
    assert.ok(read('sitemap.xml').includes(canonical));
    const graph=JSON.parse(html.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/)?.[1]||'{}');
    const page=graph['@graph']?.find(node=>node['@type']==='WebPage');
    assert.equal(page?.url,canonical,`${lang}: WebPage structured URL`);
  }else assert.ok(html.includes('noindex,nofollow'));
}
assert.notEqual(titles[0],titles[1],'Localized titles must differ');
for(const file of ['404.html','robots.txt','sitemap.xml','_redirects','_headers','favicon.svg'])assert.ok(fs.existsSync(path.join(directory,file)),`Required ${file}`);
assert.match(read('_redirects'),/^\/ \/it\/ 301/m);
assert.ok(!read('sitemap.xml').includes('404'));
console.log(`PASS: IT/EN home and six editorial page pairs, ${totalLinks} local links, ${totalAssets} image uses, metadata, JSON-LD, hreflang, sitemap, redirect and 404.`);
