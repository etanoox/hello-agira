import type { ItineraryMapStop } from '../data/itineraries';
export type RouteMapStop = ItineraryMapStop & { title: string; number: number };
export interface RouteMapController { select: (id: string) => void; fit: () => void; locate: () => void; recenter: () => void; resize: () => void; stop: () => void }

for (const root of document.querySelectorAll<HTMLElement>('[data-route-map-root]')) {
  const en = root.dataset.lang === 'en';
  const l = (it: string, english: string) => en ? english : it;
  const stops: RouteMapStop[] = JSON.parse(root.querySelector('[data-route-map-data]')!.textContent!);
  const shell = root.querySelector<HTMLElement>('[data-map-shell]')!;
  const load = root.querySelector<HTMLButtonElement>('[data-route-map-load]')!;
  const expand = root.querySelector<HTMLButtonElement>('[data-map-expand]')!;
  const canvas = root.querySelector<HTMLElement>('[data-route-map-canvas]')!;
  const cover = root.querySelector<HTMLElement>('[data-route-map-cover]')!;
  const status = root.querySelector<HTMLElement>('[data-route-map-status]')!;
  const controls = root.querySelector<HTMLElement>('[data-route-map-controls]')!;
  const locate = root.querySelector<HTMLButtonElement>('[data-route-map-locate]')!;
  const fit = root.querySelector<HTMLButtonElement>('[data-route-map-fit]')!;
  let controller: RouteMapController | undefined;
  let selected = stops[0].id;
  let priorOverflow = '';
  let expanded = false;
  let returnFocus: HTMLElement | null = null;
  const select = (id: string) => {
    selected = id;
    root.querySelectorAll<HTMLElement>('[data-route-map-card]').forEach(card => { card.hidden = card.dataset.routeMapCard !== id; });
    root.querySelectorAll<HTMLButtonElement>('[data-route-map-stop]').forEach(button => {
      button.setAttribute('aria-pressed', String(button.dataset.routeMapStop === id));
    });
  };
  const toggleExpanded = (value: boolean) => {
    if (expanded === value) return;
    expanded = value;
    if (value) { returnFocus = document.activeElement as HTMLElement; priorOverflow = document.body.style.overflow; document.body.style.overflow = 'hidden'; }
    else document.body.style.overflow = priorOverflow;
    shell.classList.toggle('is-expanded', value);
    expand.setAttribute('aria-expanded', String(value));
    expand.textContent = value ? l('Chiudi mappa', 'Close map') : l('Espandi mappa', 'Expand map');
    if (value) { shell.setAttribute('role', 'dialog'); shell.setAttribute('aria-modal', 'true'); expand.focus(); }
    else { shell.removeAttribute('role'); shell.removeAttribute('aria-modal'); returnFocus?.focus({ preventScroll: true }); }
    requestAnimationFrame(() => controller?.resize());
  };
  root.classList.add('route-map-enhanced');
  load.hidden = false; expand.hidden = false;
  root.querySelectorAll<HTMLButtonElement>('[data-route-map-stop]').forEach(button => {
    button.hidden = false;
    button.addEventListener('click', () => { select(button.dataset.routeMapStop!); controller?.select(selected); });
  });
  select(selected);
  expand.addEventListener('click', () => toggleExpanded(!expanded));
  shell.addEventListener('keydown', event => {
    if (!expanded) return;
    if (event.key === 'Escape') { toggleExpanded(false); return; }
    if (event.key !== 'Tab') return;
    const focusable = [...shell.querySelectorAll<HTMLElement>('button:not(:disabled),a[href],canvas[tabindex]')].filter(el => el.getClientRects().length);
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
  });
  root.querySelectorAll<HTMLAnchorElement>('[data-map-read]').forEach(link => link.addEventListener('click', () => { if (expanded) toggleExpanded(false); }));
  load.addEventListener('click', async () => {
    load.disabled = true;
    status.textContent = l('Caricamento della mappa…', 'Loading the map…');
    try {
      const { mountItineraryMap } = await import('./itinerary-map');
      controller = await mountItineraryMap(root, stops, select);
      controller.select(selected);
      controller.fit();
      controls.hidden = false; locate.disabled = false; fit.disabled = false;
      status.textContent = l('Mappa pronta. Seleziona una tappa o attiva la tua posizione.', 'Map ready. Choose a stop or turn on your location.');
    } catch {
      canvas.hidden = true; cover.hidden = false; load.disabled = false;
      status.textContent = l('La mappa non è disponibile. Riprova oppure usa i collegamenti alle indicazioni nelle schede.', 'The map is unavailable. Try again or use the directions links in the stop cards.');
    }
  });
  fit.addEventListener('click', () => controller?.fit());
  locate.addEventListener('click', () => controller?.locate());
  root.querySelector('[data-route-map-recenter]')!.addEventListener('click', () => controller?.recenter());
  window.addEventListener('pagehide', () => { controller?.stop(); if (expanded) toggleExpanded(false); });
}
