import { socialProfiles } from '../data/social';
import photos from '../data/photos.json';
import { imageRightsSectionIds } from '../data/legal';
import { pageUrl, type Locale } from './i18n';

// Rights are explicit editorial data, independent of the photographer's name.
export interface PhotoMetadata {
  width: number;
  height: number;
  widths: number[];
  alt: Record<Locale, string>;
  credit?: Partial<Record<Locale, string>>;
  author?: string | null;
  authorType?: string | null;
  licenseUrl?: string | null;
  copyrightHolder?: string | null;
  licenseContactUrl?: string | null;
}

// Syntax validation only: editors must verify the page and its rights/contact
// information before entering a URL. Never infer it from authorUrl or source.
function imageRightsUrl(value: string | null | undefined) {
  if (!value?.trim()) return undefined;
  const url = new URL(value.trim());
  if (!['https:', 'http:'].includes(url.protocol) || url.username || url.password) {
    throw new Error('Image rights URLs must be absolute HTTP(S) pages without credentials.');
  }
  return url.href;
}

export function imageObject(origin: URL, lang: Locale, name: keyof typeof photos, maxWidth = 1800) {
  const photo: PhotoMetadata = photos[name];
  const candidates = photo.widths.filter(width => width <= maxWidth);
  const width = candidates.length ? Math.max(...candidates) : Math.min(...photo.widths);
  const contentUrl = new URL(`/images/${name}-${width}.webp`, origin).href;
  const author = photo.author?.trim();
  const authorType = photo.authorType ?? 'Person';
  if (author && !['Person', 'Organization'].includes(authorType)) {
    throw new Error('An image creator must be a Person or Organization.');
  }
  const creditText = photo.credit?.[lang]?.trim();
  const copyrightHolder = photo.copyrightHolder?.trim();
  const acquireLicensePage = imageRightsUrl(photo.licenseContactUrl);
  return {
    '@type': 'ImageObject', '@id': `${contentUrl}#image`,
    contentUrl, url: contentUrl,
    width, height: Math.round(photo.height * width / photo.width),
    caption: photo.alt[lang],
    ...(creditText ? { creditText } : {}),
    ...(author ? { creator: { '@type': authorType, name: author } } : {}),
    ...(copyrightHolder ? { copyrightNotice: `© ${copyrightHolder}` } : {}),
    license: imageRightsUrl(photo.licenseUrl)
      ?? new URL(`${pageUrl('legal', lang)}#${imageRightsSectionIds[lang]}`, origin).href,
    ...(acquireLicensePage ? { acquireLicensePage } : {}),
  };
}

export function websiteGraph(origin: URL, lang: Locale, title: string, pagePath = `/${lang}/`) {
  const root = origin.origin;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      { '@type': 'WebSite', '@id': `${root}/#website`, url: `${root}/`, name: 'Hello Agira', sameAs: socialProfiles.map(profile => profile.url), inLanguage: ['it', 'en'] },
      { '@type': 'WebPage', '@id': `${root}${pagePath}#page`, url: `${root}${pagePath}`, name: title, inLanguage: lang, isPartOf: { '@id': `${root}/#website` }, about: { '@type': 'Place', name: 'Agira', address: { '@type': 'PostalAddress', addressLocality: 'Agira', addressRegion: 'Sicilia', addressCountry: 'IT' } } },
    ],
  };
}
export const serializeSchema = (value: unknown) => JSON.stringify(value).replace(/</g, '\\u003c');
