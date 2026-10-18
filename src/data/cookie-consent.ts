import type { Translation } from 'vanilla-cookieconsent';
import { pageUrl, type Locale } from '../lib/i18n';
import { consentConfig } from '../lib/consent-config';

export function getConsentTranslation(lang: Locale): Translation {
  const l = (it: string, en: string) => lang === 'it' ? it : en;
  const policy = `${pageUrl('legal', lang)}#cookie`;
  return {
    consentModal: {
      title: l('La tua scelta sui cookie.', 'Your cookie choice.'),
      description: l(
        'Usiamo strumenti tecnici per ricordare la tua scelta. Con il tuo consenso attiviamo le statistiche di Google Analytics e le mappe Google, che potrai poi aprire nelle schede. Puoi rifiutare e continuare a esplorare la guida. Chiudere con la X mantiene attivi solo i necessari.',
        'We use technical tools to remember your choice. With your consent, we enable Google Analytics statistics and Google maps, which you can then open on place pages. You can reject and keep exploring the guide. Closing with the X keeps only necessary tools active.',
      ),
      acceptAllBtn: l('Accetta tutto', 'Accept all'),
      acceptNecessaryBtn: l('Rifiuta non necessari', 'Reject optional'),
      showPreferencesBtn: l('Personalizza', 'Customise'),
      closeIconLabel: l('Chiudi e rifiuta i cookie non necessari', 'Close and reject optional cookies'),
      footer: `<a href="${policy}">${l('Cookie e dati personali', 'Cookies and personal data')}</a><a href="mailto:helloagira@gmail.com">${l('Contatta il titolare', 'Contact the controller')}</a>`,
    },
    preferencesModal: {
      title: l('Le tue preferenze.', 'Your preferences.'),
      acceptAllBtn: l('Accetta tutto', 'Accept all'),
      acceptNecessaryBtn: l('Rifiuta non necessari', 'Reject optional'),
      savePreferencesBtn: l('Salva le preferenze', 'Save preferences'),
      closeIconLabel: l('Chiudi senza modificare la scelta', 'Close without changing your choice'),
      sections: [
        {
          title: l('Scegli come esplorare Hello Agira', 'Choose how to explore Hello Agira'),
          description: l(
            `Il titolare è Giuseppe Ricceri, contattabile a helloagira@gmail.com. Statistiche e mappe Google sono facoltative e disattivate fino al consenso. Puoi cambiare o revocare la scelta dal footer. <a href="${policy}">Leggi finalità, strumenti e durate.</a>`,
            `The controller is Giuseppe Ricceri, reachable at helloagira@gmail.com. Statistics and Google maps are optional and remain off until consent. Change or withdraw your choice using the footer. <a href="${policy}">Read about purposes, tools and durations.</a>`,
          ),
        },
        {
          title: l('Necessari · sempre attivi', 'Necessary · always active'),
          description: l(
            `Il cookie ${consentConfig.cookieName} conserva categorie scelte, data, identificativo e revisione per ${consentConfig.preferenceDays} giorni. Non viene inviato a un servizio esterno di gestione del consenso.`,
            `The ${consentConfig.cookieName} cookie stores selected categories, date, identifier and revision for ${consentConfig.preferenceDays} days. It is not sent to an external consent-management service.`,
          ),
          linkedCategory: 'necessary',
        },
        {
          title: l('Statistiche · Google Analytics', 'Statistics · Google Analytics'),
          description: l(
            'Ci aiutano a capire quali pagine vengono visitate e come viene usata la guida. Se rifiuti, non carichiamo Google Tag Manager né Google Analytics e non inviamo misurazioni senza cookie. Le impostazioni pubblicitarie del consenso rimangono disattivate.',
            'They help us understand which pages are visited and how the guide is used. If you reject, we load neither Google Tag Manager nor Google Analytics and send no cookieless measurements. Advertising consent settings remain denied.',
          ),
          linkedCategory: 'analytics',
          cookieTable: {
            headers: { name: l('Nome', 'Name'), purpose: l('Finalità', 'Purpose'), duration: l('Durata', 'Duration') },
            body: [
              { name: '_ga', purpose: l('Distinguere le visite', 'Distinguish visits'), duration: l('Fino a 180 giorni', 'Up to 180 days') },
              { name: '_ga_*', purpose: l('Stato della sessione', 'Session state'), duration: l('Fino a 180 giorni', 'Up to 180 days') },
            ],
          },
        },
        {
          title: l('Mappe Google', 'Google maps'),
          description: l(
            'Consentono di incorporare una mappa nelle schede dei luoghi, solo quando premi il relativo pulsante. Google riceve dati tecnici come IP e browser e può usare cookie propri. La scelta è separata dalle statistiche. La mappa OpenStreetMap della home resta disponibile su richiesta anche senza questo consenso.',
            'Allow a map to be embedded on place pages, only when you press its button. Google receives technical data such as IP and browser information and may use its own cookies. This choice is separate from statistics. The OpenStreetMap home-page map remains available on request without this consent.',
          ),
          linkedCategory: 'maps',
        },
      ],
    },
  };
}
