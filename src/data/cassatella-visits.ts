import { sightUrl, type Locale } from '../lib/i18n';

// Visitor contacts and shuttle departure for the 2026 edition.
// This information supplements the existing festival programme.
export function getCassatellaVisits(lang: Locale) {
  const l = (it: string, en: string) => lang === 'it' ? it : en;
  return {
    visits: [
      {
        title: l('L’Aron ebraico', 'The Jewish Aron'),
        text: l('Prenota la visita all’Aron in pietra, custodito nella Collegiata del SS. Salvatore.', 'Book a visit to the stone Aron, housed in the Collegiate Church of SS. Salvatore.'),
        phone: '+39 338 1302639', href: 'tel:+393381302639',
        action: l('Prenota la visita', 'Book a visit'),
        detailUrl: sightUrl('aron', lang),
      },
      {
        title: 'Palazzo Manmano Gussio',
        text: l('Prenota la visita al palazzo baronale e scopri gli ambienti della dimora.', 'Book a visit to the baronial palace and discover the residence’s rooms.'),
        phone: '+39 328 7797235', href: 'tel:+393287797235',
        action: l('Prenota la visita', 'Book a visit'),
        detailUrl: sightUrl('manmanoGussio', lang),
      },
      {
        title: l('Ecomuseo di Cultura Materiale', 'Ecomuseo di Cultura Materiale'),
        text: l('Prenota la visita all’Ecomuseo di Cultura Materiale durante il tuo soggiorno ad Agira.', 'Book a visit to the museum of material culture during your stay in Agira.'),
        phone: '+39 380 1881164', href: 'tel:+393801881164',
        action: l('Prenota la visita', 'Book a visit'),
      },
      {
        title: 'CassatellArt',
        text: l('Scopri la mostra d’arte siciliana CassatellArt. Contatta il referente per informazioni sulla visita.', 'Discover CassatellArt, an exhibition of Sicilian art. Contact the organiser for visitor information.'),
        phone: '+39 370 1205284', href: 'tel:+393701205284',
        action: l('Informazioni sulla mostra', 'Exhibition information'),
      },
    ],
    shuttle: {
      organizer: l('Associazione I Castelli di Enna', 'I Castelli di Enna association'),
      departure: 'Piazza Emanuele Basile',
      phone: '+39 388 8037673', href: 'tel:+393888037673',
    },
  };
}
