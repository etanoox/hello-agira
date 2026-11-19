import { acceptCategory, acceptedCategory, getUserPreferences, hide, validConsent } from 'vanilla-cookieconsent';

document.querySelectorAll<HTMLElement>('[data-nativity-video]').forEach(root => {
  const button = root.querySelector<HTMLButtonElement>('[data-load-video]');
  const frame = root.querySelector<HTMLIFrameElement>('iframe');
  const cover = root.querySelector<HTMLElement>('[data-video-cover]');
  if (!button || !frame || !cover) return;
  button.hidden = false;
  button.addEventListener('click', () => {
    if (!validConsent() || !acceptedCategory('youtube')) {
      acceptCategory([...new Set([...getUserPreferences().acceptedCategories, 'youtube'])]);
    }
    if (!validConsent() || !acceptedCategory('youtube')) return;
    hide();
    const id = root.dataset.videoId;
    if (!id || !['4jQFX7mSD-A', 'TTNHiWpcQ_c', '4h8SvJhhEnQ'].includes(id)) return;
    frame.src = 'https://www.youtube-nocookie.com/embed/' + id;
    frame.hidden = false;
    cover.hidden = true;
    frame.focus();
  });
});
