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
    frame.src = 'https://www.youtube-nocookie.com/embed/4jQFX7mSD-A';
    frame.hidden = false;
    cover.hidden = true;
    frame.focus();
  });
});
