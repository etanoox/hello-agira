import { defineMiddleware } from 'astro:middleware';
import { imageObject, serializeSchema } from './lib/schema';

// Per-request collection works for static generation too. Consume Astro's
// streamed response before reading the set, so all child slots have rendered.
export const onRequest = defineMiddleware(async (context, next) => {
  const lang = context.url.pathname.split('/')[1];
  const site = import.meta.env.SITE ? new URL(import.meta.env.SITE) : undefined;
  if (site?.protocol !== 'https:' || (lang !== 'it' && lang !== 'en')) return next();
  context.locals.imageKeys = new Set();
  const response = await next();
  if (!response.ok || !response.headers.get('content-type')?.includes('text/html')) return response;
  const html = await response.text();
  let output = html;
  if (context.locals.imageKeys.size && html.includes('rel="canonical"')) {
    const end = html.lastIndexOf('</body>');
    if (end < 0) throw new Error(`Missing body for image metadata: ${context.url.pathname}`);
    const graph = {
      '@context': 'https://schema.org',
      '@graph': [...context.locals.imageKeys].sort().map(name => imageObject(site, lang, name)),
    };
    output = html.slice(0, end) + `<script type="application/ld+json" data-image-metadata>${serializeSchema(graph)}</script>` + html.slice(end);
  }
  const headers = new Headers(response.headers);
  headers.delete('content-length');
  return new Response(output, { status: response.status, statusText: response.statusText, headers });
});
