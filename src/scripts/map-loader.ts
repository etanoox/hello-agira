const root = document.querySelector<HTMLElement>('[data-map-root]');
const button = root?.querySelector<HTMLButtonElement>('[data-map-load]');
if (root && button) {
  const status=root.querySelector<HTMLElement>('[data-map-status]')!;
  button.addEventListener('click', async () => {
    button.disabled = true;
    status.textContent = root.dataset.loading || '';
    try {
      const { mountMap } = await import('./map');
      await mountMap(root);
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
