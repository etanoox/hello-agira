# Cookie e statistiche senza abbonamenti

## Funzionamento

Il sito include `vanilla-cookieconsent` 3.1.0, con licenza MIT, nei propri file. Non utilizza Cookiebot, CDN per il banner o servizi esterni a pagamento per conservare le scelte. Non introduce un limite al numero di pagine o lingue.

La licenza completa della libreria è conservata in `public/licenses/cookieconsent.txt` e distribuita con il sito.

Categorie:

- **Necessari:** il cookie tecnico `hello_agira_consent` ricorda categorie, identificativo, date e revisione per 365 giorni.
- **Statistiche:** GTM e GA4 si caricano soltanto dopo consenso a questa categoria, secondo un'implementazione Basic. Prima del consenso e dopo un rifiuto non vengono caricati nemmeno per inviare misurazioni senza cookie.
- **Mappe Google:** categoria indipendente dalle statistiche. Le mappe rimangono su richiesta anche se la categoria è autorizzata. Il pulsante della singola mappa può autorizzare questa categoria conservando la scelta sulle statistiche.

La mappa OpenStreetMap della home rimane su richiesta e non attiva Analytics. Audio, immagini e font continuano a essere serviti dal sito.

Il footer e la sezione cookie delle note legali offrono il comando per modificare le preferenze. Rifiuto, X e salvataggio senza categorie facoltative mantengono il sito utilizzabile. Quando si revocano statistiche già attive, la pagina viene aggiornata: questo interrompe i tag già caricati, che non si fermerebbero semplicemente rimuovendo l'elemento `script`. I cookie GA di prima parte leggibili dal sito vengono rimossi anche sui percorsi e domini superiori accessibili.

## Configurazione

`src/lib/consent-config.ts` contiene:

- container `GTM-TG2VSHS8` e misurazione `G-031R4X4H1P`;
- nome e durata della preferenza;
- revisione del consenso;
- durata dei cookie Analytics, impostata a 180 giorni senza rinnovo a ogni visita.

Il bootstrap locale nel layout parte con tutti i consensi Google negati e con la raccolta della proprietà disabilitata. Dopo una scelta valida viene consentita la sola categoria Analytics; i tre consensi pubblicitari restano negati. Google Signals e personalizzazione pubblicitaria vengono disabilitati anche mediante impostazioni globali del tag.

Il vecchio iframe GTM `noscript` è rimosso: senza JavaScript non è possibile raccogliere la scelta e non viene caricato alcun tag Google.

Non copiare un secondo snippet GTM o un secondo banner nel sito o nel container. Il contenitore pubblico esaminato contiene un solo Google tag GA4, attivato all'inizializzazione: il suo avvio avviene dopo il caricamento consentito del contenitore. Se si aggiungono in futuro altri tag, occorre valutarne categoria, basi giuridiche e condizioni di consenso. Il consenso alle statistiche non autorizza automaticamente nuovi strumenti pubblicitari o di profilazione.

La revisione va incrementata soltanto in presenza di cambiamenti sostanziali a finalità, fornitori o condizioni del consenso, non per normali modifiche editoriali. La scelta non viene richiesta nuovamente a ogni pagina o visita.

## Verifiche gratuite nei pannelli Google

La modifica al sito non può cambiare le impostazioni amministrative degli account. Prima di completare le informative generali:

1. Verificare che il container contenga solo i tag previsti e che non esistano installazioni duplicate.
2. In GA4 verificare la conservazione dei dati utente/evento. Una configurazione iniziale proporzionata per il progetto è 2 mesi, senza rinnovo del periodo per nuova attività, da decidere e applicare nel pannello. La durata degli eventi è distinta da quella dei cookie e non copre tutti i report aggregati standard.
3. Verificare Google Signals, collegamenti Ads, condivisioni non necessarie e altri controlli di raccolta. L'implementazione lascia i consensi pubblicitari negati; non deve essere scambiata per una verifica di tutte le impostazioni dell'account.
4. Verificare i termini di trattamento accettati e i trasferimenti effettivi, anche per Cloudflare e per le comunicazioni Gmail, per completare la privacy policy generale.

La sezione cookie pubblicata descrive il comportamento del sito. Le verifiche sopra e il completamento dell'informativa generale restano distinti dal blocco tecnico dei tag; nessuna libreria certifica automaticamente la conformità dell'intero progetto.

## Controlli

```sh
SITE_URL=https://helloagira.it npm run build
npm run verify
npm run preview
```

Nel browser, con profilo pulito, controllare la scheda Rete:

1. Prima della scelta, rifiutando o chiudendo con X: nessuna richiesta verso `googletagmanager.com` o `google-analytics.com` e nessun cookie `_ga*`.
2. Aprendo Personalizza, le categorie facoltative sono disattivate. Salvare così equivale a mantenere solo i necessari.
3. Dopo consenso alle sole statistiche: un solo caricamento del container, cookie Analytics coerenti con le durate dichiarate e nessuna mappa incorporata prima del clic.
4. Dopo revoca delle statistiche: aggiornamento della pagina, rimozione dei cookie gestibili e nessuna nuova misurazione, inclusi i ping senza cookie.
5. Sulla scheda di un luogo, autorizzare una mappa dopo aver rifiutato le statistiche: viene caricata la sola mappa. Revocare Mappe Google e verificare che l'iframe sia chiuso; la mappa deve poter essere riaperta con una nuova azione.
6. Passando tra italiano e inglese o tra pagine: lingua corretta del pannello e scelta mantenuta. Controllare anche due schede dello stesso browser e il ritorno a una pagina dalla cronologia.
7. Senza JavaScript: contenuti e audioguide leggibili, senza iframe GTM o mappe caricate automaticamente.

I controlli automatici della build impediscono il reinserimento di risorse Google statiche negli HTML e verificano i collegamenti per le preferenze. Un controllo reale del sito pubblicato serve anche a rilevare script aggiunti dai pannelli esterni o modifiche successive del container.

## Riferimenti

- [CookieConsent e licenza MIT](https://github.com/orestbida/cookieconsent)
- [Google Consent Mode Basic](https://developers.google.com/tag-platform/security/guides/consent?consentmode=basic)
- [Configurazione dei cookie Google](https://developers.google.com/tag-platform/security/guides/customize-cookies)
- [Garante: FAQ cookie](https://www.garanteprivacy.it/faq/Cookie)
