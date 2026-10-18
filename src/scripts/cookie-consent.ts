import * as CookieConsent from 'vanilla-cookieconsent';
import { getConsentTranslation } from '../data/cookie-consent';
import { consentConfig } from '../lib/consent-config';

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    [key: `ga-disable-${string}`]: boolean;
  }
}

const lang = document.documentElement.lang === 'en' ? 'en' : 'it';
const disableKey = `ga-disable-${consentConfig.measurementId}` as const;
let analyticsStarted = false;
let reloading = false;
let lastChoice = '';
let channel: BroadcastChannel | undefined;
try {
  if (typeof BroadcastChannel === 'function') channel = new BroadcastChannel('hello-agira-consent');
} catch { /* Cross-tab messaging can be unavailable in restricted browsers. */ }

function storedChoice(): string {
  return document.cookie.split('; ').find(cookie => cookie.startsWith(`${consentConfig.cookieName}=`)) ?? '';
}

/** Remove legacy/current first-party GA cookies, including parent-domain cookies. */
function clearAnalyticsCookies(): void {
  const domains = ['', window.location.hostname];
  const labels = window.location.hostname.split('.');
  for (let index = 0; index < labels.length - 1; index++) domains.push(`.${labels.slice(index).join('.')}`);
  const paths = new Set(['/']);
  const segments = window.location.pathname.split('/').filter(Boolean);
  for (let index = 1; index <= segments.length; index++) {
    const path = `/${segments.slice(0, index).join('/')}`;
    paths.add(path);
    paths.add(`${path}/`);
  }
  const names = document.cookie.split(';').map(cookie => cookie.trim().split('=')[0]);
  for (const name of names.filter(name => /^(?:_ga(?:_|$)|_gid$|_gat(?:_|$))/.test(name))) {
    for (const domain of new Set(domains)) for (const path of paths) {
      document.cookie = `${name}=; Max-Age=0; Path=${path}; SameSite=Lax${domain ? `; Domain=${domain}` : ''}`;
    }
  }
}

function unloadGoogleMaps(): void {
  document.querySelectorAll<HTMLElement>('[data-place-map]').forEach(root => {
    const frame = root.querySelector<HTMLIFrameElement>('iframe');
    if (!frame) return;
    frame.removeAttribute('src');
    frame.hidden = true;
    const cover = root.querySelector<HTMLElement>('[data-map-cover]');
    if (cover) cover.hidden = false;
  });
}

function reloadWithoutAnalytics(clearCookies = true): void {
  if (reloading) return;
  reloading = true;
  window[disableKey] = true;
  if (clearCookies) clearAnalyticsCookies();
  // Removing a script cannot stop timers/listeners it has already installed.
  // Reload with the saved denial instead of sending Consent Mode denied pings.
  window.location.reload();
}

function startAnalytics(): void {
  if (analyticsStarted) return;
  analyticsStarted = true;
  window[disableKey] = false;
  window.gtag('set', {
    cookie_expires: consentConfig.analyticsCookieDays * 24 * 60 * 60,
    cookie_update: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
  });
  window.gtag('consent', 'update', {
    analytics_storage: 'granted',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
  });
  window.dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });
  const script = document.createElement('script');
  script.async = true;
  script.dataset.helloagiraGtm = '';
  script.src = `https://www.googletagmanager.com/gtm.js?id=${consentConfig.containerId}`;
  document.head.append(script);
}

function syncConsent(): void {
  const valid = CookieConsent.validConsent();
  if (valid && CookieConsent.acceptedCategory('analytics')) {
    startAnalytics();
  } else {
    window[disableKey] = true;
    clearAnalyticsCookies();
    if (analyticsStarted) {
      reloadWithoutAnalytics();
      return;
    }
  }
  if (!valid || !CookieConsent.acceptedCategory('maps')) unloadGoogleMaps();
  lastChoice = storedChoice();
}

function notifyOtherTabs(): void {
  channel?.postMessage('choice-changed');
}

async function initialiseConsent(): Promise<void> {
  await CookieConsent.run({
    revision: consentConfig.revision,
    mode: 'opt-in',
    disablePageInteraction: false,
    manageScriptTags: false,
    cookie: {
      name: consentConfig.cookieName,
      path: '/',
      secure: true,
      sameSite: 'Lax',
      expiresAfterDays: consentConfig.preferenceDays,
    },
    guiOptions: {
      consentModal: { layout: 'box wide', position: 'bottom center', equalWeightButtons: true },
      preferencesModal: { layout: 'box', equalWeightButtons: true },
    },
    categories: {
      necessary: { enabled: true, readOnly: true },
      analytics: { enabled: false },
      maps: { enabled: false },
    },
    language: {
      default: lang,
      translations: { it: getConsentTranslation('it'), en: getConsentTranslation('en') },
    },
    onConsent: syncConsent,
    onFirstConsent: notifyOtherTabs,
    onChange: () => { notifyOtherTabs(); syncConsent(); },
  });
  syncConsent();
  document.querySelectorAll<HTMLElement>('[data-cc="show-preferencesModal"]').forEach(control => { control.hidden = false; });

  // Respect a changed/expired choice in another tab and on bfcache restores.
  // The next page load clears GA cookies if consent was withdrawn. Preserve
  // them if only Maps changed and Analytics is still authorised in another tab.
  const checkChoice = () => { if (storedChoice() !== lastChoice) reloadWithoutAnalytics(false); };
  window.addEventListener('focus', checkChoice);
  window.addEventListener('pageshow', checkChoice);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) checkChoice(); });
  if (channel) channel.onmessage = checkChoice;
}

// A failure in the optional banner must never enable Google scripts.
initialiseConsent().catch(error => {
  window[disableKey] = true;
  clearAnalyticsCookies();
  console.warn('Cookie preferences unavailable', error instanceof Error ? error.message : error);
});
