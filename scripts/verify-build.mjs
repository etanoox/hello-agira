import fs from 'node:fs';
import path from 'node:path';
import assert from 'node:assert/strict';
const directory = 'dist';
for (const name of fs.readdirSync(path.join(directory, 'images'))) {
  const file = path.join(directory, 'images', name);
  if (fs.statSync(file).isFile()) assert.ok(fs.statSync(file).size > 0, `Empty image: ${file}`);
}
const read = file => fs.readFileSync(path.join(directory,file),'utf8');
const htmlPages = ['it/index.html','en/index.html','it/itinerari/index.html','en/itineraries/index.html','it/cosa-vedere/index.html','en/things-to-see/index.html','it/mangiare/index.html','en/food-and-drink/index.html','it/dormire/index.html','en/where-to-stay/index.html','it/storia/index.html','en/history/index.html','it/eventi/index.html','en/events/index.html','it/sagra-cassatella/index.html','en/cassatella-festival/index.html'];
const detailPairs = [
  { it: '/it/cosa-vedere/chiesa-santa-margherita/', en: '/en/things-to-see/santa-margherita-church/' },
  { it: '/it/cosa-vedere/collegiata-santa-maria-maggiore/', en: '/en/things-to-see/santa-maria-maggiore-collegiate-church/' },
  { it: '/it/itinerari/i-palazzi-baronali/', en: '/en/itineraries/baronial-palaces/' },
  { it: '/it/itinerari/sui-passi-di-san-filippo/', en: '/en/itineraries/in-saint-philips-footsteps/' },
  { it: '/it/note-legali/', en: '/en/legal-notice/' },
  { it: '/it/ringraziamenti/', en: '/en/acknowledgements/' },
  { it: '/it/presepe-vivente/', en: '/en/living-nativity/' },
  { it: '/it/cosa-vedere/collegiata-ss-salvatore/', en: '/en/things-to-see/ss-salvatore-collegiate-church/' },
  { it: '/it/cosa-vedere/quartiere-delle-rocche/', en: '/en/things-to-see/rocche-quarter/' },
  { it: '/it/festa-san-filippo/', en: '/en/saint-philip-festival/' },
  { it: '/it/cassatella-di-agira/', en: '/en/cassatella-di-agira/' },
  { it: '/it/cosa-vedere/palazzo-baronale-manmano-gussio/', en: '/en/things-to-see/palazzo-baronale-manmano-gussio/' },
  { it: '/it/cosa-vedere/cimitero-militare-canadese/', en: '/en/things-to-see/agira-canadian-war-cemetery/' },
  { it: '/it/cosa-vedere/aron-memoria-ebraica/', en: '/en/things-to-see/aron-jewish-heritage/' },
  { it: '/it/cosa-vedere/chiesa-sant-antonio-di-padova/', en: '/en/things-to-see/saint-anthony-of-padua-church/' },
  { it: '/it/cosa-vedere/abbazia-san-filippo/', en: '/en/things-to-see/san-filippo-abbey/' },
  { it: '/it/cosa-vedere/castello-di-agira/', en: '/en/things-to-see/agira-castle/' },
  { it: '/it/itinerari/un-primo-incontro/', en: '/en/itineraries/a-first-encounter/' },
  { it: '/it/itinerari/prendila-con-calma/', en: '/en/itineraries/take-your-time/' },
  { it: '/it/itinerari/resta-un-po-di-piu/', en: '/en/itineraries/stay-a-little-longer/' },
];
htmlPages.push(...detailPairs.flatMap(pair => [pair.it, pair.en].map(url => url.slice(1) + 'index.html')));
const titles=[];
let totalAssets=0, totalLinks=0;
for (const file of htmlPages) {
  const lang=file.slice(0,2), html=read(file);
  for (const resource of html.matchAll(/<(?:script|iframe)\b[^>]*\ssrc="([^"]+)"/g)) {
    assert.ok(!/^https?:\/\/[^/]*(?:googletagmanager\.com|google-analytics\.com|google\.com)(?:\/|$)/.test(resource[1]), `${file}: no Google resources before consent`);
  }
  assert.ok(html.includes('data-cc="show-preferencesModal"'), `${file}: cookie preferences remain reachable`);
  assert.match(html,new RegExp(`<html[^>]+lang="${lang}"`),`${lang}: language`);
  assert.equal((html.match(/<h1[\s>]/g)||[]).length,1,`${lang}: one H1`);
  assert.match(html,/<main[^>]*id="main"/,`${lang}: main landmark`);
  const title=html.match(/<title>([^<]+)<\/title>/)?.[1];assert.ok(title);titles.push(title);
  assert.match(html,/<meta name="description" content="[^"]{30,}"/,`${lang}: description`);
  const ids=[...html.matchAll(/\sid="([^"]+)"/g)].map(m=>m[1]);assert.equal(new Set(ids).size,ids.length,`${lang}: unique IDs`);
  const pageUrl=`https://test.invalid/${file.replace(/index\.html$/, '')}`;
  for(const match of html.matchAll(/<(?:a|link)\b[^>]*href="([^"]*)"/g)){
    const href=match[1]; if(href.startsWith('http')||href.startsWith('mailto:')||href.startsWith('tel:'))continue;
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
    const events=file.includes('/eventi/')||file.includes('/events/');
    const detailPair=detailPairs.find(pair=>pair.it===expectedPath||pair.en===expectedPath);
    const alternatePaths=detailPair?{...detailPair,'x-default':detailPair.it}:itineraries?{it:'/it/itinerari/',en:'/en/itineraries/','x-default':'/it/itinerari/'}:sights?{it:'/it/cosa-vedere/',en:'/en/things-to-see/','x-default':'/it/cosa-vedere/'}:eating?{it:'/it/mangiare/',en:'/en/food-and-drink/','x-default':'/it/mangiare/'}:stay?{it:'/it/dormire/',en:'/en/where-to-stay/','x-default':'/it/dormire/'}:history?{it:'/it/storia/',en:'/en/history/','x-default':'/it/storia/'}:events?{it:'/it/eventi/',en:'/en/events/','x-default':'/it/eventi/'}:festival?{it:'/it/sagra-cassatella/',en:'/en/cassatella-festival/','x-default':'/it/sagra-cassatella/'}:{it:'/it/',en:'/en/','x-default':'/it/'};
    for(const code of ['it','en','x-default']){
      const alternate=html.match(new RegExp(`<link rel="alternate" hreflang="${code}" href="([^"]+)"`))?.[1];
      assert.ok(alternate,`${lang}: ${code} alternate`);
      assert.equal(new URL(alternate).pathname,alternatePaths[code],`${lang}: ${code} alternate path`);
    }
    if(detailPair) {
      for(const code of ['it','en']) {
        const visibleLinks=[...html.matchAll(new RegExp(`<a[^>]+href="([^"]+)"[^>]+hreflang="${code}"`, 'g'))];
        assert.equal(visibleLinks.length, 2, `${file}: header and footer language links`);
        for(const link of visibleLinks) assert.equal(link[1],detailPair[code],`${file}: translated itinerary link`);
      }
    }
    assert.ok(!html.includes('noindex,nofollow'));
    assert.ok(read('sitemap.xml').includes(canonical));
    const graph=JSON.parse(html.match(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/)?.[1]||'{}');
    const page=graph['@graph']?.find(node=>node['@type']==='WebPage');
    assert.equal(page?.url,canonical,`${lang}: WebPage structured URL`);
  }else assert.ok(html.includes('noindex,nofollow'));
}
for (const file of ['it/cosa-vedere/castello-di-agira/index.html','en/things-to-see/agira-castle/index.html']) {
  const html=read(file);
  assert.ok(html.includes('data-audio-guide'), 'Castle audio guide is available');
  assert.equal((html.match(/<a\b[^>]*\sdata-audio-chapter(?:\s|>)/g) || []).length, 7, 'Castle guide has seven chapters');
  for (const match of html.matchAll(/href="(\/audio\/castello\/en\/[^"]+\.mp3)"/g)) {
    assert.ok(fs.existsSync(path.join(directory, match[1])), `Missing castle audio: ${match[1]}`);
  }
  const iframeSources = [...html.matchAll(/<iframe\b[^>]*\ssrc="([^"]+)"/g)].map(match => match[1]);
  assert.equal(iframeSources.length, 0, 'No Google or map iframe loads before consent');
  if(html.includes('rel="canonical"')) assert.ok(html.includes('TouristAttraction') && html.includes('BreadcrumbList'), 'Place structured data');
}
assert.notEqual(titles[0],titles[1],'Localized titles must differ');
for(const file of ['404.html','robots.txt','sitemap.xml','_redirects','_headers','favicon.svg'])assert.ok(fs.existsSync(path.join(directory,file)),`Required ${file}`);
assert.match(read('_redirects'),/^\/ \/it\/ 301/m);
assert.ok(!read('sitemap.xml').includes('404'));
console.log('PASS: IT/EN home, seven editorial page pairs and five itinerary pairs and three place pairs, ' + totalLinks + ' local links, ' + totalAssets + ' image uses, metadata, JSON-LD, hreflang, sitemap, redirect and 404.');

for (const file of ['it/cosa-vedere/aron-memoria-ebraica/index.html', 'en/things-to-see/aron-jewish-heritage/index.html']) {
  const html = read(file);
  assert.ok(html.includes('data-audio-guide'));
  assert.equal((html.match(/<a\b[^>]*\sdata-audio-chapter(?:\s|>)/g) || []).length, 3);
}

for (const file of ['it/cosa-vedere/cimitero-militare-canadese/index.html', 'en/things-to-see/agira-canadian-war-cemetery/index.html']) {
  const html = read(file);
  const lang = file.startsWith('it/') ? 'it' : 'en';
  const expectedChapters = lang === 'it' ? 6 : 5;
  assert.ok(html.includes('data-audio-guide'), 'Cemetery audio is available');
  assert.equal((html.match(/<a\b[^>]*\sdata-audio-chapter(?:\s|>)/g) || []).length, expectedChapters, 'Cemetery chapter count matches the language');
  assert.equal((html.match(/<details\b[^>]*id="audioguida-transcript-/g) || []).length, expectedChapters, 'Every cemetery chapter has a transcript');
  assert.ok(html.includes(`/audio/cimitero-canadese/${lang}/`), 'Cemetery audio matches the page language');
}

for (const lang of ['it','en']) {
 const folder = lang === 'it' ? 'cosa-vedere' : 'things-to-see';
 assert.ok(!read(`${lang}/${folder}/palazzo-baronale-manmano-gussio/index.html`).includes('data-audio-guide'), 'Palace audio is not yet available');
}

// The Saint Philip map must work as a stop directory before map/GPS activation.
for (const [lang, folder, slug] of [['it', 'itinerari', 'sui-passi-di-san-filippo'], ['en', 'itineraries', 'in-saint-philips-footsteps']]) {
  const html = read(`${lang}/${folder}/${slug}/index.html`);
  const mapData = JSON.parse(html.match(/<script[^>]*data-route-map-data[^>]*>([\s\S]*?)<\/script>/)?.[1] || '[]');
  assert.equal(mapData.length, 6, 'Saint Philip itinerary has six map stops');
  assert.deepEqual(mapData.map(stop => stop.mode), ['walking', 'walking', 'walking', 'walking', 'walking', 'driving'], 'Fountain is a separate driving stop');
  assert.deepEqual(mapData[5].coordinates, [14.508555, 37.6545727], 'Fountain uses the supplied pin');
  assert.deepEqual(mapData[3].coordinates, [14.530211, 37.6551686], 'Castle chapel uses the supplied pin');
  assert.deepEqual(mapData[4].coordinates, [14.518169, 37.657765], 'Piazza Europa chapel uses the supplied pin');
  assert.match(html, /data-route-map-load[^>]*hidden/, 'Map loads only after activation');
  assert.match(html, /data-route-map-locate[^>]*disabled/, 'GPS starts inactive');
  assert.equal((html.match(/travelmode=walking/g) || []).length, 5, 'Five walking directions links');
  assert.equal((html.match(/travelmode=driving/g) || []).length, 1, 'One driving directions link');
  assert.ok(!html.includes('maps.googleapis.com/maps/api/streetview'), 'No extracted Street View imagery');
}
assert.match(read('_headers'), /geolocation=\(self\)/, 'Same-origin geolocation is permitted');

// Check every localized page, including pages added outside htmlPages.
let socialPages = 0;
for (const locale of ['it', 'en']) {
  for (const relative of fs.readdirSync(path.join(directory, locale), { recursive: true })) {
    if (!relative.endsWith('.html')) continue;
    const file = path.join(locale, relative);
    const html = read(file);
    if (!html.includes('rel="canonical"')) continue;
    const meta = name => html.match(new RegExp(`<meta (?:property|name)="${name}" content="([^"]+)"`))?.[1];
    const image = meta('og:image');
    assert.ok(image, `${file}: social image`);
    const url = new URL(image);
    assert.equal(url.protocol, 'https:', `${file}: HTTPS social image`);
    const canonical = html.match(/rel="canonical" href="([^"]+)"/)?.[1];
    assert.equal(url.origin, new URL(canonical).origin, `${file}: absolute image on site origin`);
    const imagePath = path.join(directory, url.pathname);
    assert.ok(fs.existsSync(imagePath) && fs.statSync(imagePath).size > 0, `${file}: social image exists`);
    assert.equal(meta('twitter:image'), image, `${file}: matching social images`);
    assert.equal(meta('twitter:card'), 'summary_large_image', `${file}: large X card`);
    assert.ok(meta('og:image:alt') && meta('twitter:image:alt'), `${file}: localized image descriptions`);
    const hero = [...html.matchAll(/<img\b[^>]*>/g)].find(match => match[0].includes('fetchpriority="high"'))?.[0];
    if (hero) {
      const heroSrc = hero.match(/src="([^"]+)"/)?.[1];
      const photoKey = src => src.replace(/-\d+\.webp$/, '');
      assert.equal(photoKey(url.pathname), photoKey(heroSrc), `${file}: social photo matches hero`);
    }
    socialPages++;
  }
}
console.log(`PASS: social metadata and hero images on ${socialPages} localized pages.`);

// One confirmed festival edition, described consistently in both languages.
const cassatellaEventIds = [];
for (const file of ['it/sagra-cassatella/index.html', 'en/cassatella-festival/index.html']) {
  const html = read(file);
  const nodes = [...html.matchAll(/<script[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)]
    .flatMap(match => { const data = JSON.parse(match[1]); return data['@graph'] || [data]; });
  const events = nodes.filter(node => node['@type'] === 'FoodEvent');
  assert.equal(events.length, 1, `${file}: one festival event`);
  const event = events[0];
  cassatellaEventIds.push(event['@id']);
  assert.equal(event.startDate, '2026-11-13T19:00:00+01:00', 'Confirmed opening in Italian standard time');
  assert.equal(event.endDate, '2026-11-15', 'End date without an invented closing time');
  assert.equal(event.isAccessibleForFree, true, 'Free festival admission');
  assert.ok(!event.offers, 'No fictitious ticket offer');
  const organizer = nodes.find(node => node['@id'] === event.organizer['@id']);
  assert.equal(organizer?.name, 'Etna Eventi Management', 'Actual organizer');
  assert.equal(organizer?.url, 'https://etnaeventimanagement.it/');
  const venue = nodes.find(node => node['@id'] === event.location['@id']);
  assert.equal(venue?.name, 'Piazza Europa');
  assert.deepEqual([venue?.geo.latitude, venue?.geo.longitude], [37.658005, 14.518352], 'Supplied venue pin');
  assert.equal(venue?.address.addressLocality, 'Agira');
  assert.ok(html.includes(venue.hasMap) && html.includes(organizer.url), 'Venue and organizer links are visible');
  const page = nodes.find(node => node['@type'] === 'WebPage' && node.mainEntity);
  assert.equal(page?.mainEntity['@id'], event['@id'], 'The festival is the page’s main entity');
  const breadcrumb = nodes.find(node => node['@type'] === 'BreadcrumbList');
  assert.equal(breadcrumb?.itemListElement.length, 3, 'Home, events and festival breadcrumb');
  const image = nodes.find(node => node['@id'] === event.image['@id']);
  assert.equal(image?.['@type'], 'ImageObject');
  assert.ok(image.creator.name && image.creditText, 'Event photograph has author and credit');
  assert.ok(fs.existsSync(path.join(directory, new URL(image.contentUrl).pathname)), 'Event photo exists');
}
assert.equal(cassatellaEventIds[0], cassatellaEventIds[1], 'Translations identify the same festival edition');
console.log('PASS: Cassatella FoodEvent, confirmed dates, venue, organizer, free admission, photograph and breadcrumbs in IT/EN.');
