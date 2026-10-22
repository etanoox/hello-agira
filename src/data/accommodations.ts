export type AccommodationCategory = 'shortStay' | 'bedBreakfast' | 'farmStay';
export type AccommodationRating = 'threeStars' | 'threeSpighe';

export interface Accommodation {
  id: string;
  name: string;
  category: AccommodationCategory;
  rating?: AccommodationRating;
  address?: string;
  bookingUrl?: string;
  websiteUrl?: string;
  cir: string;
  cin: string;
  coordinates: [number, number];
  approximateLocation?: boolean;
}

// Where public map data resolves only a street or area, the pin is indicative.
export const accommodations: Accommodation[] = [
  { id: 'aghere', name: 'Agherè', address: 'Via S. Giacomo, 19, 94011 Agira (EN)', bookingUrl: 'https://www.booking.com/Share-BhMWNxl', category: 'shortStay', cir: '19086001C261476', cin: 'IT086001C2V5YGMY4L', coordinates: [14.5224721, 37.6543329], approximateLocation: true },
  { id: 'agira-royal-central-rooms', name: 'Agira Royal Central Rooms', address: 'Piazza Garibaldi, 2, 94011 Agira (EN)', bookingUrl: 'https://www.booking.com/Share-FW78MqH', category: 'shortStay', cir: '19086001C242814', cin: 'IT086001C2VLD3GJOW', coordinates: [14.52213, 37.6568985] },
  { id: 'terza-stella', name: 'Casa Albergo La Terza Stella', address: 'Via Palazzo, 16, 94011 Agira (EN)', bookingUrl: 'https://www.booking.com/Share-yEfXqJ9', category: 'bedBreakfast', rating: 'threeStars', cir: '19086001C102613', cin: 'IT086001C1RC4RZZ35', coordinates: [14.5261138, 37.6574399] },
  { id: 'casa-don-raffaele', name: 'Casa Don Raffaele', address: 'Via Rametta, 21, 94011 Agira (EN)', bookingUrl: 'https://www.booking.com/Share-UcgaurS', category: 'shortStay', cir: '19086001C230932', cin: 'IT086001C256YVMWF6', coordinates: [14.5286584, 37.6566996], approximateLocation: true },
  // Existing pins are retained; supplied street addresses can differ from map results.
  { id: 'central-rooms', name: 'Central Rooms', address: 'Piazza Garibaldi, 5, 94011 Agira (EN)', bookingUrl: 'https://www.booking.com/Share-pnnvSqo', category: 'shortStay', cir: '19086001C213513', cin: 'IT086001C2MW8JFA8Z', coordinates: [14.52213, 37.6568985] },
  { id: 'domus-teja', name: 'Domus Teja', address: 'Via Pozzillo, 11, 94011 Agira (EN)', bookingUrl: 'https://www.booking.com/Share-7bAZYt', category: 'shortStay', cir: '19086001C218663', cin: 'IT086001C2IPXD2AA6', coordinates: [14.5221756, 37.6555227], approximateLocation: true },
  { id: 'gli-amici-di-filippo-2', name: 'Gli Amici di Filippo', address: 'Via Luigi Sturzo, 53, primo piano, 94011 Agira (EN)', bookingUrl: 'https://www.booking.com/Share-Dyyw0n', category: 'shortStay', cir: '19086001C255182', cin: 'IT086001C2MKSWDCVX', coordinates: [14.5191939, 37.6585186], approximateLocation: true },
  { id: 'kasakarma', name: 'Kasakarma', address: 'Via Castello, 15, 94011 Agira (EN)', bookingUrl: 'https://www.booking.com/Share-ai0eCA8', category: 'shortStay', cir: '19086001C208835', cin: 'IT086001C2EDRJIFRL', coordinates: [14.5280294, 37.6545607], approximateLocation: true },
  { id: 'mama-bb', name: 'Mamà B&B', address: 'Via Luigi Sturzo, 1, 94011 Agira (EN)', bookingUrl: 'https://www.booking.com/Share-bupaGm', category: 'bedBreakfast', rating: 'threeStars', cir: '19086001C131613', cin: 'IT086001C1W6DOZLCE', coordinates: [14.519759, 37.6586766] },
  { id: 'mariu', name: 'Mariù', address: 'Via Sandro Pertini, 34, secondo piano, 94011 Agira (EN)', bookingUrl: 'https://www.booking.com/hotel/it/mariu-agira.it.html', category: 'shortStay', cir: '19086001C245971', cin: 'IT086001C2S9NT694M', coordinates: [14.5206862, 37.6585235] },
  { id: 'sopra-la-piazza', name: 'Sopra La Piazza', address: 'Via San Francesco di Paola, 94011 Agira (EN)', bookingUrl: 'https://www.booking.com/Share-Wvjm7w', category: 'shortStay', cir: '19086001C229472', cin: 'IT086001C2DTBTKF6V', coordinates: [14.5219002, 37.6570892] },
  { id: 'talia', name: 'Talìa', address: 'Via Giacomo Matteotti, 3, 94011 Agira (EN)', bookingUrl: 'https://www.booking.com/Share-GkgCxS', category: 'bedBreakfast', rating: 'threeStars', cir: '19086001C102325', cin: 'IT086001C18NX829PZ', coordinates: [14.5185843, 37.65899] },
];
