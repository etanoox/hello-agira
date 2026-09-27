import type { APIRoute } from 'astro';
export const GET: APIRoute = ({ site }) => new Response(site?.protocol === 'https:' ? `User-agent: *\nAllow: /\nSitemap: ${site.origin}/sitemap.xml\n` : 'User-agent: *\nDisallow: /\n', { headers: { 'Content-Type': 'text/plain' } });
