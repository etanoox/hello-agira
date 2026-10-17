import type { Locale } from '../lib/i18n';
export function getLegal(lang: Locale) {
  const l = (it: string, en: string) => lang === 'it' ? it : en;
  return {
    title: l('Note legali e condizioni d’uso | Hello Agira', 'Legal notice and terms of use | Hello Agira'),
    heading: l('Note legali e condizioni d’uso.', 'Legal notice and terms of use.'),
    description: l('Informazioni su Hello Agira, uso dei contenuti, servizi di terzi e contatti per segnalazioni e richieste sui materiali.', 'Information about Hello Agira, use of its content, third-party services and contacts for reports and requests concerning materials.'),
    updated: l('Ultimo aggiornamento: 17/10/2026', 'Last updated: 17 October 2026'),
    introduction: l('Hello Agira è una guida indipendente su Agira, curata da Giuseppe Ricceri. Il progetto è gratuito e autofinanziato e non è il sito istituzionale del Comune.', 'Hello Agira is an independent guide to Agira, curated by Giuseppe Ricceri. The project is free and self-funded and is not the municipality’s official website.'),
    contact: l('Per contatti, segnalazioni o richieste sui materiali:', 'For enquiries, reports or requests concerning materials:'),
    sections: [
      { id: 'informazioni', title: l('Informazioni e servizi citati', 'Information and services mentioned'), paragraphs: [
        l('Il sito propone contenuti culturali e indicazioni pratiche. Orari, accessibilità dei luoghi, programmi degli eventi e servizi delle attività possono cambiare: prima di organizzare una visita verifica le informazioni con il referente o l’organizzatore indicato. La presenza di una scheda non equivale a un rapporto commerciale o a una garanzia sui servizi di terzi.', 'The website provides cultural content and practical information. Opening hours, accessibility of places, event programmes and services offered by businesses may change: before planning a visit, check the information with the contact person or organiser indicated. Inclusion in a listing does not imply a commercial relationship or a guarantee of third-party services.'),
        l('Hello Agira non gestisce prenotazioni o pagamenti per le attività elencate. Gli eventuali accordi con strutture, esercenti e organizzatori avvengono direttamente con questi soggetti.', 'Hello Agira does not handle bookings or payments for the businesses and activities listed. Any arrangements with accommodation providers, businesses and organisers are made directly with those parties.'),
      ] },
      { id: 'materiali', title: l('Testi, fotografie e audioguide', 'Texts, photographs and audio guides'), paragraphs: [
        l('I materiali appartengono ai rispettivi titolari e sono pubblicati sulla base dei diritti e delle autorizzazioni disponibili. I crediti riportati nelle pagine identificano autori e contributori; non costituiscono automaticamente una licenza generale di riutilizzo.', 'Materials belong to their respective rights holders and are published on the basis of the rights and permissions available. Credits on the pages identify authors and contributors; they do not automatically grant a general licence for reuse.'),
        l('È possibile condividere i collegamenti alle pagine. Per ripubblicare fotografie, registrazioni, testi integrali o altri materiali protetti occorre rispettare la licenza specifica, ottenere l’autorizzazione del titolare dei diritti oppure rientrare in un uso consentito dalla legge.', 'Links to the pages may be shared. Republishing photographs, recordings, complete texts or other protected materials requires compliance with the applicable licence, permission from the rights holder, or a use permitted by law.'),
      ] },
      { id: 'segnalazioni', title: l('Segnalazioni e collegamenti', 'Reports and links'), paragraphs: [
        l('Puoi segnalare errori, aggiornamenti, problemi di accessibilità o questioni relative ai diritti sui contenuti scrivendo al gestore e indicando la pagina interessata. I collegamenti esterni rimandano a servizi gestiti dai rispettivi soggetti.', 'You can report errors, updates, accessibility issues or questions about content rights by contacting the website operator and specifying the page concerned. External links lead to services operated by their respective providers.'),
        l('Queste note non limitano diritti inderogabili né escludono responsabilità che la legge non consente di escludere.', 'These notes do not restrict statutory rights that cannot be waived or exclude liability that cannot lawfully be excluded.'),
      ] },
    ],
  };
}
