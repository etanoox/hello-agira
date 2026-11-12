import type { ImageKey } from '../lib/image-metadata';
import type { Locale } from '../lib/i18n';

// Default validity for every current and future menu in this edition.
export const cassatellaMenuDates = {
  from: '2026-11-14',
  through: '2026-11-15',
  label: { it: '14 e 15 novembre 2026', en: '14–15 November 2026' },
};

// Add a venue here and its image keys to photos.json to extend the section.
interface FestivalMenuVenue {
  id: string;
  name: string;
  category: Record<Locale, string>;
  validFrom?: string;
  validThrough?: string;
  dates?: Record<Locale, string>;
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
}, {
  id: 'number-one',
  name: 'Number One',
  category: { it: 'Ristorante · Pizzeria', en: 'Restaurant · Pizzeria' },
  menus: [
    { image: 'sagra2026NumberOne', title: { it: 'Menù della Sagra · 25 €', en: 'Festival menu · €25' } },
  ],
}, {
  id: 'etoile',
  name: 'Ètoile',
  category: { it: 'Bar · Pasticceria · Gelateria', en: 'Café · Pastry shop · Ice cream' },
  menus: [
    { image: 'sagra2026Etoile', title: { it: 'Menù della Sagra', en: 'Festival menu' } },
  ],
}, {
  id: 'sale-pepe',
  name: 'Sale & Pepe',
  category: { it: 'Rosticceria · Gastronomia', en: 'Rosticceria · Deli' },
  menus: [
    { image: 'sagra2026SalePepeRosticceria', title: { it: 'Rosticceria', en: 'Rosticceria offers' } },
    { image: 'sagra2026SalePepeCucina', title: { it: 'Menù cucina', en: 'Kitchen menu' } },
  ],
}, {
  id: 'agora',
  name: 'Agorà',
  category: { it: 'Pasticceria · Pizzeria', en: 'Pastry shop · Pizzeria' },
  menus: [
    { image: 'sagra2026AgoraCompleto', title: { it: 'Menù completo · 25 € a persona', en: 'Full menu · €25 per person' } },
    { image: 'sagra2026AgoraAsporto', title: { it: 'Menù da asporto', en: 'Takeaway menu' } },
  ],
}, {
  id: 'crystal-pub',
  name: 'Crystal Pub',
  category: { it: 'Bar · Pub', en: 'Bar · Pub' },
  menus: [
    { image: 'sagra2026CrystalPub', title: { it: 'Menù della Sagra', en: 'Festival menu' } },
  ],
}, {
  id: 'malucchiffari-jolly',
  name: 'Malucchiffari RistoPub e Jolly Bar',
  category: { it: 'RistoPub · Bar', en: 'RistoPub · Bar' },
  validFrom: '2026-11-15',
  validThrough: '2026-11-15',
  dates: { it: '15 novembre 2026 · solo domenica', en: '15 November 2026 · Sunday only' },
  menus: [
    { image: 'sagra2026MalucchiffariJolly', title: { it: 'Menù condiviso · 25 €', en: 'Joint menu · €25' } },
  ],
}, {
  id: 'the-bun-stop',
  name: 'The Bun Stop',
  category: { it: 'Panineria · Steak house', en: 'Sandwich shop · Steakhouse' },
  validFrom: '2026-11-13',
  validThrough: '2026-11-15',
  dates: { it: '13, 14 e 15 novembre 2026', en: '13–15 November 2026' },
  menus: [
    { image: 'sagra2026TheBunStop', title: { it: 'Menù della Sagra', en: 'Festival menu' } },
  ],
}, {
  id: 'da-gaetano',
  name: 'Da Gaetano',
  category: { it: 'Pizzeria d’asporto', en: 'Takeaway pizzeria' },
  validFrom: '2026-11-13',
  validThrough: '2026-11-15',
  dates: { it: '13, 14 e 15 novembre 2026', en: '13–15 November 2026' },
  menus: [
    { image: 'sagra2026DaGaetano', title: { it: 'Menù della Sagra', en: 'Festival menu' } },
  ],
}, {
  id: 'bar-europa',
  name: 'Bar Europa',
  category: { it: 'Bar', en: 'Café' },
  menus: [
    { image: 'sagra2026BarEuropa', title: { it: 'Menù panini', en: 'Sandwich menu' } },
  ],
}, {
  id: 'nessun-dorma',
  name: 'Nessun Dorma',
  category: { it: 'Pub', en: 'Pub' },
  validFrom: '2026-11-15',
  validThrough: '2026-11-15',
  dates: { it: '15 novembre 2026 · solo domenica a pranzo', en: '15 November 2026 · Sunday lunch only' },
  menus: [
    { image: 'sagra2026NessunDorma', title: { it: 'Componi la tua focaccia · Via Cairoli 21, Agira', en: 'Build your own focaccia · Via Cairoli 21, Agira' } },
  ],
}];
