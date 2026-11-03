import { socialProfiles } from '../data/social.ts';
import { imageRightsSectionIds } from '../data/legal.ts';
import { pageUrl, type Locale } from './i18n.ts';
import { imageFile, imageMetadata, type ImageKey } from './image-metadata.ts';

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

export function imageReference(origin: URL, name: ImageKey) {
  return { '@id': `${origin.origin}/#image-${name}` };
}

export function imageObject(origin: URL, lang: Locale, name: ImageKey, maxWidth = 1800) {
  const photo = imageMetadata(name);
  const candidates = photo.widths.filter(width => width <= maxWidth);
  const width = candidates.length ? Math.max(...candidates) : Math.min(...photo.widths);
  const contentUrl = new URL(imageFile(name, width), origin).href;
  const author = photo.author?.trim();
  const authorType = photo.authorType ?? 'Person';
  if (author && !['Person', 'Organization'].includes(authorType)) {
    throw new Error('An image creator must be a Person or Organization.');
  }
  const creditText = photo.credit?.[lang]?.trim();
  const copyrightHolder = photo.copyrightHolder?.trim();
  const acquireLicensePage = imageRightsUrl(photo.licenseContactUrl);
  return {
    '@type': 'ImageObject', ...imageReference(origin, name),
    contentUrl, url: contentUrl,
    width, height: photo.variantHeights?.[width] ?? Math.round(photo.height * width / photo.width),
    caption: photo.alt[lang],
    ...(creditText ? { creditText } : {}),
    ...(author ? { creator: { '@type': authorType, name: author } } : {}),
    ...(copyrightHolder ? { copyrightNotice: `© ${copyrightHolder}` } : {}),
    license: imageRightsUrl(photo.licenseUrl)
      ?? new URL(`${pageUrl('legal', lang)}#${imageRightsSectionIds[lang]}`, origin).href,
    ...(acquireLicensePage ? { acquireLicensePage } : {}),
    ...(photo.source ? { isBasedOn: photo.source } : {}),
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
