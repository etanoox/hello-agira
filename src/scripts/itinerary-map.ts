import { Map as MapLibreMap, Marker, NavigationControl, AttributionControl, LngLatBounds, type GeoJSONSource } from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import type { RouteMapStop, RouteMapController } from './itinerary-map-loader';

export async function mountItineraryMap(root: HTMLElement, stops: RouteMapStop[], onSelect: (id: string) => void): Promise<RouteMapController> {
  const l = (it: string, en: string) => root.dataset.lang === 'en' ? en : it;
  const canvas = root.querySelector<HTMLElement>('[data-route-map-canvas]')!;
  const cover = root.querySelector<HTMLElement>('[data-route-map-cover]')!;
  const status = root.querySelector<HTMLElement>('[data-route-map-status]')!;
  const gpsStatus = root.querySelector<HTMLElement>('[data-route-map-gps-status]')!;
  const locateButton = root.querySelector<HTMLButtonElement>('[data-route-map-locate]')!;
  const recenterButton = root.querySelector<HTMLButtonElement>('[data-route-map-recenter]')!;
  const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const bounds = new LngLatBounds();
  stops.forEach(stop => bounds.extend(stop.coordinates));
  canvas.hidden = false; cover.hidden = true;
  const map = new MapLibreMap({
    container: canvas, bounds, fitBoundsOptions: { padding: 52, maxZoom: 16 },
    minZoom: 3, maxZoom: 19, attributionControl: false, cooperativeGestures: true,
    locale: { 'NavigationControl.ZoomIn': l('Ingrandisci', 'Zoom in'), 'NavigationControl.ZoomOut': l('Riduci', 'Zoom out'), 'Map.Title': l('Mappa dei luoghi di San Filippo', 'Map of Saint Philip’s places') },
    style: { version: 8, sources: { osm: { type: 'raster', tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'], tileSize: 256, maxzoom: 19, attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap contributors</a>' } }, layers: [{ id: 'osm', type: 'raster', source: 'osm' }] },
  });
  map.addControl(new NavigationControl({ showCompass: false }), 'top-right');
  map.addControl(new AttributionControl({ compact: false }));
  try {
    await new Promise<void>((resolve, reject) => {
      const cleanup = () => { window.clearTimeout(timer); map.off('load', ready); map.off('error', failed); };
      const ready = () => { cleanup(); resolve(); };
      const failed = () => { cleanup(); reject(new Error('Map unavailable')); };
      const timer = window.setTimeout(() => { cleanup(); reject(new Error('Map timeout')); }, 18000);
      map.once('load', ready); map.once('error', failed);
    });
  } catch (error) { map.remove(); throw error; }
  map.on('error', () => { status.textContent = l('Alcune parti della mappa non sono disponibili. Le indicazioni delle tappe restano accessibili.', 'Some map areas are unavailable. Stop directions remain available.'); });
  const markers = stops.map(stop => {
    const button = document.createElement('button');
    button.type = 'button'; button.className = 'route-stop-marker' + (stop.mode === 'driving' ? ' route-stop-marker--driving' : '');
    button.textContent = String(stop.number);
    button.setAttribute('aria-label', `${stop.number}. ${stop.title}${stop.mode === 'driving' ? l(' · auto consigliata', ' · driving recommended') : ''}`);
    button.setAttribute('aria-controls', `map-card-${stop.id}`);
    button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', () => select(stop.id));
    const marker = new Marker({ element: button }).setLngLat(stop.coordinates).addTo(map);
    return { stop, marker, button };
  });
  function select(id: string) {
    const selected = stops.find(stop => stop.id === id);
    if (!selected) return;
    onSelect(id);
    markers.forEach(item => item.button.setAttribute('aria-pressed', String(item.stop.id === id)));
    map.easeTo({ center: selected.coordinates, zoom: Math.max(15.5, map.getZoom()), duration: reduceMotion ? 0 : 400 });
  }
  const empty = { type: 'FeatureCollection' as const, features: [] };
  map.addSource('location-accuracy', { type: 'geojson', data: empty });
  map.addLayer({ id: 'location-accuracy-fill', type: 'fill', source: 'location-accuracy', paint: { 'fill-color': '#1976c9', 'fill-opacity': .14 } });
  map.addLayer({ id: 'location-accuracy-line', type: 'line', source: 'location-accuracy', paint: { 'line-color': '#1976c9', 'line-width': 1 } });
  let watchId: number | undefined;
  let generation = 0;
  let userMarker: Marker | undefined;
  let lastPosition: [number, number] | undefined;
  let awaitingFirstPosition = false;
  function clearLocation() {
    generation++;
    if (watchId !== undefined) navigator.geolocation.clearWatch(watchId);
    watchId = undefined; lastPosition = undefined; awaitingFirstPosition = false;
    userMarker?.remove(); userMarker = undefined;
    (map.getSource('location-accuracy') as GeoJSONSource).setData(empty);
    locateButton.setAttribute('aria-pressed', 'false');
    locateButton.textContent = l('Mostra la mia posizione', 'Show my location');
    recenterButton.hidden = true;
  }
  function recenter() {
    if (lastPosition) map.easeTo({ center: lastPosition, zoom: Math.max(15.5, map.getZoom()), duration: reduceMotion ? 0 : 400 });
  }
  function locate() {
    if (watchId !== undefined) {
      clearLocation(); gpsStatus.textContent = l('Posizione disattivata.', 'Location turned off.'); return;
    }
    if (!window.isSecureContext || !navigator.geolocation) {
      gpsStatus.textContent = l('La posizione non è disponibile su questo browser. Puoi comunque esplorare le tappe.', 'Location is unavailable in this browser. You can still explore the stops.'); return;
    }
    const currentGeneration = ++generation;
    awaitingFirstPosition = true;
    gpsStatus.textContent = l('Ricerca della posizione: autorizza l’accesso quando richiesto dal telefono.', 'Finding your location: allow access when your phone asks.');
    locateButton.setAttribute('aria-pressed', 'true');
    locateButton.textContent = l('Disattiva posizione', 'Turn off location');
    watchId = navigator.geolocation.watchPosition(position => {
      if (currentGeneration !== generation) return;
      const { longitude, latitude, accuracy } = position.coords;
      lastPosition = [longitude, latitude];
      if (!userMarker) {
        const point = document.createElement('span'); point.className = 'route-user-marker'; point.setAttribute('role', 'img'); point.setAttribute('aria-label', l('La tua posizione', 'Your location'));
        userMarker = new Marker({ element: point }).setLngLat(lastPosition).addTo(map);
      } else userMarker.setLngLat(lastPosition);
      const radius = Math.min(accuracy, 1000000) / 6371008.8;
      const phi = latitude * Math.PI / 180, lambda = longitude * Math.PI / 180;
      const ring = Array.from({ length: 65 }, (_, index) => {
        const bearing = (index % 64) * Math.PI * 2 / 64;
        const lat = Math.asin(Math.sin(phi) * Math.cos(radius) + Math.cos(phi) * Math.sin(radius) * Math.cos(bearing));
        const lng = lambda + Math.atan2(Math.sin(bearing) * Math.sin(radius) * Math.cos(phi), Math.cos(radius) - Math.sin(phi) * Math.sin(lat));
        return [lng * 180 / Math.PI, lat * 180 / Math.PI];
      });
      (map.getSource('location-accuracy') as GeoJSONSource).setData({ type: 'Feature', properties: {}, geometry: { type: 'Polygon', coordinates: [ring] } });
      recenterButton.hidden = false;
      gpsStatus.textContent = l(`Posizione attiva · precisione indicativa ±${Math.round(accuracy)} m. Il cerchio azzurro mostra il margine di accuratezza.`, `Location on · approximate accuracy ±${Math.round(accuracy)} m. The blue circle shows the accuracy range.`);
      if (awaitingFirstPosition) { recenter(); awaitingFirstPosition = false; }
    }, error => {
      if (currentGeneration !== generation) return;
      if (error.code === 1) { clearLocation(); gpsStatus.textContent = l('Accesso alla posizione negato. Puoi usare la mappa senza GPS o modificare il permesso nelle impostazioni del browser.', 'Location access denied. Use the map without GPS or change permission in your browser settings.'); }
      else gpsStatus.textContent = error.code === 3
        ? l('La posizione tarda ad arrivare. Controlla il GPS; la ricerca è ancora attiva e puoi interromperla.', 'Location is taking longer. Check GPS; the search is still active and you can turn it off.')
        : l('Posizione momentaneamente non disponibile. Puoi esplorare le tappe o interrompere la ricerca.', 'Location is temporarily unavailable. Explore the stops or turn off the search.');
    }, { enableHighAccuracy: true, maximumAge: 5000, timeout: 15000 });
  }
  document.addEventListener('visibilitychange', () => {
    if (document.hidden && watchId !== undefined) { clearLocation(); gpsStatus.textContent = l('Posizione sospesa: riattivala quando riprendi la visita.', 'Location paused: turn it on again when you resume your visit.'); }
  });
  return {
    select, recenter, locate, resize: () => map.resize(), stop: clearLocation,
    fit: () => map.fitBounds(bounds, { padding: 52, maxZoom: 16, duration: reduceMotion ? 0 : 400 }),
  };
}
