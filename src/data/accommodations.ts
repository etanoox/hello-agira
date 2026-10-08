export type AccommodationCategory = 'shortStay' | 'bedBreakfast' | 'farmStay';
export type AccommodationRating = 'threeStars' | 'threeSpighe';

export interface Accommodation {
  id: string;
  name: string;
  category: AccommodationCategory;
  rating?: AccommodationRating;
  cir: string;
  cin: string;
  coordinates: [number, number];
  approximateLocation?: boolean;
}

// Where public map data resolves only a street or area, the pin is indicative.
export const accommodations: Accommodation[] = [
  { id: 'aghere', name: "AGHERE'", category: 'shortStay', cir: '19086001C261476', cin: 'IT086001C2V5YGMY4L', coordinates: [14.5224721, 37.6543329], approximateLocation: true },
  { id: 'agira-royal-central-rooms', name: 'AGIRA ROYAL CENTRAL ROOMS', category: 'shortStay', cir: '19086001C242814', cin: 'IT086001C2VLD3GJOW', coordinates: [14.52213, 37.6568985] },
  { id: 'casale-salerno', name: 'Azienda Agrituristica Casale Salerno', category: 'farmStay', rating: 'threeSpighe', cir: '19086001B501950', cin: 'IT086001B54O8NBO4L', coordinates: [14.6493218, 37.5626189] },
  { id: 'terza-stella', name: 'Casa Albergo la Terza Stella', category: 'bedBreakfast', rating: 'threeStars', cir: '19086001C102613', cin: 'IT086001C1RC4RZZ35', coordinates: [14.5261138, 37.6574399] },
  { id: 'casa-don-raffaele', name: 'Casa Don Raffaele', category: 'shortStay', cir: '19086001C230932', cin: 'IT086001C256YVMWF6', coordinates: [14.5286584, 37.6566996], approximateLocation: true },
  // These two listings share the address Piazza Garibaldi 5 and therefore one pin.
  { id: 'central-rooms', name: 'Central Rooms', category: 'shortStay', cir: '19086001C213513', cin: 'IT086001C2MW8JFA8Z', coordinates: [14.52213, 37.6568985] },
  { id: 'domus-teja', name: 'Domus Teja', category: 'shortStay', cir: '19086001C218663', cin: 'IT086001C2IPXD2AA6', coordinates: [14.5221756, 37.6555227], approximateLocation: true },
  { id: 'gli-amici-di-filippo-2', name: 'Gli Amici di Filippo', category: 'shortStay', cir: '19086001C255182', cin: 'IT086001C2MKSWDCVX', coordinates: [14.5191939, 37.6585186], approximateLocation: true },
  { id: 'kasakarma', name: 'kasakarma', category: 'shortStay', cir: '19086001C208835', cin: 'IT086001C2EDRJIFRL', coordinates: [14.5280294, 37.6545607], approximateLocation: true },
  { id: 'la-casa-dei-sogni', name: 'La Casa dei Sogni', category: 'shortStay', cir: '19086001C220594', cin: 'IT086001C2BF456HXP', coordinates: [14.484235, 37.660851], approximateLocation: true },
  { id: 'mama-bb', name: 'Mamà B&B', category: 'bedBreakfast', rating: 'threeStars', cir: '19086001C131613', cin: 'IT086001C1W6DOZLCE', coordinates: [14.519759, 37.6586766] },
  { id: 'mariu', name: 'Mariù', category: 'shortStay', cir: '19086001C245971', cin: 'IT086001C2S9NT694M', coordinates: [14.5206862, 37.6585235] },
  { id: 'sopra-la-piazza', name: 'Sopra La Piazza', category: 'shortStay', cir: '19086001C229472', cin: 'IT086001C2DTBTKF6V', coordinates: [14.5219002, 37.6570892] },
  { id: 'talia', name: 'Talia', category: 'bedBreakfast', rating: 'threeStars', cir: '19086001C102325', cin: 'IT086001C18NX829PZ', coordinates: [14.5185843, 37.65899] },
  { id: 'via-roma-home-relax', name: 'VIA ROMA HOME RELAX', category: 'shortStay', cir: '19086001C266102', cin: 'IT086001C2PDJVYNP2', coordinates: [14.520537, 37.6566352], approximateLocation: true },
];
