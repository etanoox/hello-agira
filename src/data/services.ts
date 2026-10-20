interface ServicePlace {
  name: string;
  address?: string;
  phone?: string;
  mapUrl?: string;
}

interface ServiceGroup {
  id: string;
  title: { it: string; en: string };
  places: ServicePlace[];
}

export const serviceGroups: ServiceGroup[] = [
  {
    id: 'pharmacies', title: { it: 'Farmacie', en: 'Pharmacies' },
    places: [
      { name: 'Farmacia Buttafuoco Campagna', address: 'Via V. Emanuele, 150', phone: '0935 691117' },
      { name: 'Farmacia Dr.ssa Vaccaro Maria Teresa', address: 'Via Diodorea, 7', phone: '0935 960766' },
      { name: 'Farmacia ML Pharma SRL Dott. Cannizzaro', address: 'Piazza F. Fedele, 20', phone: '0935 691085' },
    ],
  },
  {
    id: 'tobacconists', title: { it: 'Tabaccherie', en: 'Tobacconists' },
    places: [
      { name: 'Bar Tabacchi Etoile di Stella Giuseppe', address: 'Piazza Garibaldi, 29/30/31', phone: '0935 692621' },
      { name: 'Caffetteria Tabaccheria Trinacria', address: 'Via V. Emanuele, 404', phone: '349 187 8771' },
      { name: 'Tabacchino', address: 'Via V. Emanuele, 24', phone: '334 290 3963' },
      { name: 'Tabacchi Corrente Irene', address: 'Via V. Emanuele, 317/319', phone: '0935 575088' },
      { name: 'Rivendita Tabacchi Licciardo Gaetano', address: 'Via Raddusa, 87', phone: '0935 690316' },
      { name: 'Tabacchino Biondi', address: 'Piazza F. Fedele, 20', phone: '0935 692106' },
    ],
  },
  {
    id: 'post-office', title: { it: 'Ufficio postale', en: 'Post office' },
    places: [
      { name: 'Ufficio Postale Poste Italiane', address: 'Piazza F. Fedele, 1', phone: '0935 691499' },
    ],
  },
  {
    id: 'atm', title: { it: 'ATM / Bancomat', en: 'ATMs / Cash machines' },
    places: [
      { name: 'Banca Cred. Coop. La Riscossa di Regalbuto', mapUrl: 'https://maps.app.goo.gl/MU7ZQd7dc3ekFg5d9' },
      { name: 'UniCredit', mapUrl: 'https://maps.app.goo.gl/6nkzkdcJWDfUohEE7' },
      { name: 'Poste Italiane · ATM', mapUrl: 'https://maps.app.goo.gl/qSf21YL3FGqVoXLJA' },
    ],
  },
];

export const serviceMapUrl = (place: ServicePlace) => place.mapUrl ??
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent([place.name, place.address, 'Agira', 'Sicilia', 'Italia'].filter(Boolean).join(', '))}`;
