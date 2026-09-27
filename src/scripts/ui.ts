const toggle = document.querySelector<HTMLButtonElement>('.nav-toggle');
const nav = document.getElementById('main-nav');
if (toggle && nav) {
  document.documentElement.classList.add('js');
  const setOpen = (open: boolean) => {
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', (open ? toggle.dataset.closeLabel : toggle.dataset.menuLabel) || 'Menu');
    nav.dataset.open = String(open);
  };
  toggle.addEventListener('click', () => setOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  nav.addEventListener('click', event => { if ((event.target as Element).closest('a')) setOpen(false); });
  document.addEventListener('keydown', event => { if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { setOpen(false); toggle.focus(); } });
  document.addEventListener('click', event => { if (!(event.target as Element).closest('.site-header')) setOpen(false); });
}
// Translate homepage sections only; internal pages keep their server-rendered language links.
const sectionPairs = [ ['scopri','discover'],['cosa-vedere','sights'],['cassatella','cassatella'],['itinerari','itineraries'],['mangiare','food'],['dormire','stay'],['eventi','events'],['mappa','map'],['storia','history'],['informazioni','information'],['progetto','about'] ];
const updateLanguageLinks = () => {
  if (!['/it/', '/en/'].includes(location.pathname)) return;
  const current = location.hash.slice(1);
  const pair = sectionPairs.find(p => p.includes(current));
  document.querySelectorAll<HTMLAnchorElement>('a[hreflang]').forEach(link => {
    const locale=link.hreflang;
    if (locale !== 'it' && locale !== 'en') return;
    const target = new URL(link.href, location.href);
    if (target.origin !== location.origin || target.pathname !== `/${locale}/`) return;
    target.hash = pair ? pair[locale === 'it' ? 0 : 1] : '';
    link.href = target.href;
  });
};
window.addEventListener('hashchange', updateLanguageLinks);
updateLanguageLinks();
// A credits anchor also opens the native disclosure for mouse and keyboard users.
const revealCredits = () => { if (location.hash === '#credits') { const credits=document.querySelector<HTMLDetailsElement>('#credits'); if(credits) credits.open=true; } };
window.addEventListener('hashchange', revealCredits); revealCredits();
export {};
