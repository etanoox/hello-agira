import { Map as MapLibreMap, Marker, Popup, NavigationControl, AttributionControl, LngLatBounds } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { places } from '../data/places';
import type { Locale } from '../lib/i18n';
export type MapFilter = 'all' | 'sights' | 'accommodation';
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
  const placeGroups = new Map<string, typeof places>();
  places.forEach(place=>{
    const key = place.coordinates.map(value => value.toFixed(6)).join(',');
    const group = placeGroups.get(key) ?? [];
    group.push(place);
    placeGroups.set(key, group);
  });
  const markersByPlace = new Map<string,Marker>();
  const markerGroups: { places: typeof places; marker: Marker }[] = [];
  [...placeGroups.values()].forEach(group=>{
    const firstIndex = places.findIndex(place=>place.id===group[0].id);
    const el=document.createElement('button');
    el.className=group[0].kind==='accommodation'?'map-marker map-marker--accommodation':'map-marker';el.type='button';el.textContent=String(firstIndex+1);el.setAttribute('aria-label',group.map(place=>place.name[lang]).join(', '));
    const content=document.createElement('div');
    group.forEach((place,index)=>{
      if(index)content.append(document.createElement('hr'));
      const title=document.createElement('strong');title.textContent=place.name[lang];
      content.append(title);
      if(place.approximateLocation){const note=document.createElement('p');note.textContent=root.dataset.approximate || '';content.append(note);}
      const link=document.createElement('a');link.textContent=lang==='it'?'Apri su OpenStreetMap':'Open in OpenStreetMap';link.href=`https://www.openstreetmap.org/?mlat=${place.coordinates[1]}&mlon=${place.coordinates[0]}#map=17/${place.coordinates[1]}/${place.coordinates[0]}`;
      content.append(document.createElement('br'),link);
    });
    const marker=new Marker({element:el}).setLngLat(group[0].coordinates).setPopup(new Popup({offset:20,closeButton:true}).setDOMContent(content)).addTo(map);
    markerGroups.push({places:group,marker});
    group.forEach(place=>markersByPlace.set(place.id,marker));
  });
  const setFilter = (filter: MapFilter) => {
    const isVisible = (place: typeof places[number]) => filter==='all' || (filter==='accommodation' ? place.kind==='accommodation' : place.kind!=='accommodation');
    markerGroups.forEach(group=>{
      const visible=group.places.some(isVisible);
      group.marker.getElement().style.display=visible?'':'none';
      if(!visible&&group.marker.getPopup()?.isOpen())group.marker.togglePopup();
    });
    const visiblePlaces=places.filter(isVisible);
    if(!visiblePlaces.length)return;
    const bounds=new LngLatBounds();
    visiblePlaces.forEach(place=>bounds.extend(place.coordinates));
    const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
    map.fitBounds(bounds,{padding:52,maxZoom:14,duration:reduceMotion?0:500});
  };
  root.querySelectorAll<HTMLAnchorElement>('[data-place]').forEach(link=>{
    link.addEventListener('click',event=>{
      const place=places.find(p=>p.id===link.dataset.place);if(!place)return;
      event.preventDefault();
      const reduceMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
      map.flyTo({center:place.coordinates,zoom:16,duration:reduceMotion?0:600});
      markerGroups.forEach(({marker})=>{if(marker.getPopup()?.isOpen())marker.togglePopup();});
      markersByPlace.get(place.id)?.togglePopup();
      canvas.scrollIntoView({behavior:reduceMotion?'instant':'smooth',block:'nearest'});
    });
  });
  return {setFilter};
}
