import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import { existsSync } from 'node:fs';
const localEnv = new URL('.env', import.meta.url);
if (existsSync(localEnv)) process.loadEnvFile(localEnv);

const raw = process.env.SITE_URL;
if (raw && (!/^https:\/\//.test(raw) || new URL(raw).pathname !== '/')) {
  throw new Error('SITE_URL deve essere una origine HTTPS, senza percorso: https://example.com');
}
export default defineConfig({
  site: raw || 'http://localhost:4321',
  output: 'static',
  devToolbar: { enabled: false },
  // Give Hello Agira its own predictable port so other running Astro projects
  // cannot make the browser show a different local site.
  server: { host: '0.0.0.0', port: 14321 },
  trailingSlash: 'always',
  i18n: { locales: ['it', 'en'], defaultLocale: 'it', routing: { prefixDefaultLocale: true, redirectToDefaultLocale: false } },
  vite: { plugins: [tailwindcss()], server: { allowedHosts: ['terminal.local'], strictPort: true } },
});
