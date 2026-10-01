const root = document.querySelector<HTMLElement>('[data-map-root]');
const button = root?.querySelector<HTMLButtonElement>('[data-map-load]');
if (root && button) {
  const status=root.querySelector<HTMLElement>('[data-map-status]')!;
  type MapFilter = 'all' | 'sights' | 'accommodation';
  let updateMountedMap: ((filter: MapFilter) => void) | undefined;
  const applyFilter = (filter: MapFilter) => {
    root.dataset.mapFilter = filter;
    root.querySelectorAll<HTMLButtonElement>('[data-map-filter-button]').forEach(filterButton => {
      filterButton.setAttribute('aria-pressed', String(filterButton.dataset.mapFilterButton === filter));
    });
    root.querySelectorAll<HTMLElement>('[data-map-place-row]').forEach(row => {
      row.hidden = filter !== 'all' && row.dataset.kind !== filter;
    });
    updateMountedMap?.(filter);
  };
  root.querySelectorAll<HTMLButtonElement>('[data-map-filter-button]').forEach(filterButton => {
    filterButton.addEventListener('click', () => {
      const filter = filterButton.dataset.mapFilterButton;
      if (filter === 'all' || filter === 'sights' || filter === 'accommodation') applyFilter(filter);
    });
  });
  applyFilter(root.dataset.mapFilter === 'all' || root.dataset.mapFilter === 'accommodation' ? root.dataset.mapFilter : 'sights');
  button.addEventListener('click', async () => {
    button.disabled = true;
    status.textContent = root.dataset.loading || '';
    try {
      const { mountMap } = await import('./map');
      const controller = await mountMap(root);
      updateMountedMap = controller.setFilter;
      controller.setFilter(root.dataset.mapFilter === 'all' || root.dataset.mapFilter === 'accommodation' ? root.dataset.mapFilter : 'sights');
      status.textContent = root.dataset.ready || '';
    } catch (error) {
      root.querySelector<HTMLElement>('[data-map-canvas]')!.hidden=true;
      root.querySelector<HTMLElement>('[data-map-cover]')!.hidden=false;
      button.disabled=false;
      status.textContent=root.dataset.error || '';
      console.warn('Map unavailable', error instanceof Error ? error.message : error);
    }
  });
}
export {};
