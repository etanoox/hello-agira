import { Map as MapLibreMap, Marker, Popup, NavigationControl, AttributionControl } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { places } from '../data/places';
import type { Locale } from '../lib/i18n';
export async function mountMap(root: HTMLElement) {
  const lang = root.dataset.lang === 'en' ? 'en' : 'it' as Locale;
  const canvas = root.querySelector<HTMLElement>('[data-map-canvas]')!;
  const cover = root.querySelector<HTMLElement>('[data-map-cover]')!;
  const status = root.querySelector<HTMLElement>('[data-map-status]')!;
  canvas.hidden=false; cover.hidden=true;
  const map = new MapLibreMap({
    container: canvas,
    center: [14.5200,37.6560], zoom:14.2, minZoom:5, maxZoom:18,
    cooperativeGestures:true,
    attributionControl:false,
    style: {version:8,sources:{osm:{type:'raster',tiles:['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],tileSize:256,maxzoom:19,attribution:'© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>'}},layers:[{id:'osm',type:'raster',source:'osm'}]},
  });
  map.addControl(new NavigationControl({showCompass:false}), 'top-right');
  map.addControl(new AttributionControl({compact:false}));
  const clear = () => {map.remove();canvas.hidden=true;cover.hidden=false;};
  await new Promise<void>((resolve,reject)=>{
    const cleanup = () => {
      window.clearTimeout(timer);
      map.off('load', onLoad);
      map.off('error', onError);
    };
    const onLoad = () => {cleanup();resolve();};
    const onError = () => {cleanup();clear();reject(new Error('Map resources failed'));};
    const timer=window.setTimeout(()=>{cleanup();clear();reject(new Error('Map timed out'));},18000);
    map.once('load',onLoad);
    map.once('error',onError);
  });
  map.on('error',()=>{status.textContent=root.dataset.error || '';});
  const markers = new Map<string,Marker>();
  places.forEach((place,i)=>{
    const el=document.createElement('button');
    el.className='map-marker';el.type='button';el.textContent=String(i+1);el.setAttribute('aria-label',place.name[lang]);
    const content=document.createElement('div');
    const title=document.createElement('strong');title.textContent=place.name[lang];
    const link=document.createElement('a');link.textContent=lang==='it'?'Apri su OpenStreetMap':'Open in OpenStreetMap';link.href=`https://www.openstreetmap.org/?mlat=${place.coordinates[1]}&mlon=${place.coordinates[0]}#map=17/${place.coordinates[1]}/${place.coordinates[0]}`;
    content.append(title,document.createElement('br'),link);
    const marker=new Marker({element:el}).setLngLat(place.coordinates).setPopup(new Popup({offset:20,closeButton:true}).setDOMContent(content)).addTo(map);
    markers.set(place.id,marker);
  });
  root.querySelectorAll<HTMLAnchorElement>('[data-place]').forEach(link=>{
    link.addEventListener('click',event=>{
      const place=places.find(p=>p.id===link.dataset.place);if(!place)return;
      event.preventDefault();
      const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
      map.flyTo({center:place.coordinates,zoom:16,duration:reduceMotion?0:600});
      markers.forEach(m=>{if(m.getPopup()?.isOpen())m.togglePopup();});
      markers.get(place.id)?.togglePopup();
      canvas.scrollIntoView({behavior:reduceMotion?'instant':'smooth',block:'nearest'});
    });
  });
}
