import type { APIRoute } from 'astro';
import { pageUrl, itinerarySlugs, itineraryUrl, type ItineraryId } from '../lib/i18n';
export const GET: APIRoute = ({ site }) => {
  const pairs = [
    ...Object.keys(itinerarySlugs).map(id => ({ it: itineraryUrl(id as ItineraryId, 'it'), en: itineraryUrl(id as ItineraryId, 'en') })),
    { it: '/it/', en: '/en/' },
    { it: pageUrl('routes', 'it'), en: pageUrl('routes', 'en') },
    { it: pageUrl('sights', 'it'), en: pageUrl('sights', 'en') },
    { it: pageUrl('eat', 'it'), en: pageUrl('eat', 'en') },
    { it: pageUrl('stay', 'it'), en: pageUrl('stay', 'en') },
    { it: pageUrl('history', 'it'), en: pageUrl('history', 'en') },
    { it: pageUrl('events', 'it'), en: pageUrl('events', 'en') },
    { it: pageUrl('festival', 'it'), en: pageUrl('festival', 'en') },
  ];
  const urls = site?.protocol === 'https:' ? pairs.flatMap(pair => ['it', 'en'].map(lang => {
    const current = pair[lang as 'it' | 'en'];
    return `<url><loc>${site.origin}${current}</loc><xhtml:link rel="alternate" hreflang="it" href="${site.origin}${pair.it}"/><xhtml:link rel="alternate" hreflang="en" href="${site.origin}${pair.en}"/><xhtml:link rel="alternate" hreflang="x-default" href="${site.origin}${pair.it}"/></url>`;
  })).join('') : '';
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">${urls}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
