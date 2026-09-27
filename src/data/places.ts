import type { Locale } from '../lib/i18n';
export interface Place { id: string; name: Record<Locale, string>; kind: 'town' | 'sight'; coordinates: [number, number]; source: string; }
// Coordinates are the location of the place, not the camera position of its photograph.
export const places: Place[] = [
  { id: 'agira', name: { it: 'Agira · centro abitato', en: 'Agira · town' }, kind: 'town', coordinates: [14.5197, 37.6555], source: 'https://it.wikipedia.org/wiki/Agira' },
  { id: 'san-filippo', name: { it: 'Abbazia di San Filippo', en: 'San Filippo Abbey' }, kind: 'sight', coordinates: [14.518561111, 37.657130556], source: 'https://commons.wikimedia.org/wiki/Category:San_Filippo_(Agira)' },
];
