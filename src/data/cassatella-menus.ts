import type { ImageKey } from '../lib/image-metadata';
import type { Locale } from '../lib/i18n';

// Add a venue here and its image keys to photos.json to extend the section.
interface FestivalMenuVenue {
  id: string;
  name: string;
  category: Record<Locale, string>;
  validFrom: string;
  validThrough: string;
  dates: Record<Locale, string>;
  menus: { image: ImageKey; title: Record<Locale, string> }[];
}

export const cassatellaMenus: FestivalMenuVenue[] = [{
  id: 'ndo-sicilianu',
  name: 'N’do Sicilianu',
  category: { it: 'Rosticceria', en: 'Rosticceria · Sicilian takeaway' },
  validFrom: '2026-11-14',
  validThrough: '2026-11-15',
  dates: { it: '14 e 15 novembre 2026', en: '14–15 November 2026' },
  menus: [
    { image: 'sagra2026NdoRosticceria', title: { it: 'Rosticceria', en: 'Rosticceria offers' } },
    { image: 'sagra2026NdoCucina', title: { it: 'Menù cucina', en: 'Kitchen menu' } },
  ],
}];
