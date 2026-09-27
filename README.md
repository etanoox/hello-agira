# Hello Agira — edizione animata 0.5.0 · IT / EN

Progetto editoriale indipendente bilingue dedicato ad Agira. Il sito è pubblicato su [helloagira.it](https://helloagira.it/). Questa versione comprende la homepage e sei pagine editoriali in italiano e inglese, con sorgenti e build statica per la prova locale.

## Provarla in locale

Installa **Node.js 24** (versione minima: 22.12), estrai lo ZIP e apri un terminale nella cartella `hello-agira`.

```sh
npm ci
npm run dev
```

Apri `http://localhost:14321/it/` oppure `http://localhost:14321/en/`. Hello Agira usa la porta 14321 per distinguerlo dagli altri progetti. La porta è fissata: se è già occupata, il server si fermerà con un errore chiaro. Il percorso `/` porta alla versione italiana. Non aprire i file HTML con un doppio clic: il progetto usa percorsi assoluti dalla radice del sito.

Per controllare la build:

```sh
npm run build
npm run verify
npm run preview
```

L'anteprima della build viene servita su `http://localhost:14322/`. In alternativa, se hai Python 3, puoi vedere la build già inclusa senza installare le dipendenze:

```sh
python3 -m http.server 8000 --directory dist
```

Apri `http://localhost:8000/it/`. La cartella `dist` inclusa è una **build locale non indicizzabile**.

## GitHub e Cloudflare Pages

Carica il contenuto della cartella `hello-agira` nel tuo repository GitHub. La cartella `node_modules` va ricreata con `npm ci`; `dist` viene rigenerata dalla build ed è esclusa da Git.

Impostazioni del progetto Cloudflare Pages:

| Campo | Valore |
| --- | --- |
| Directory radice | Radice del repository, se contiene `package.json` |
| Comando di build | `npm run build` |
| Cartella di output | `dist` |
| Variabile `NODE_VERSION` | `24` |
| Variabile `SITE_URL` | `https://helloagira.it` |

`SITE_URL` deve contenere l'origine HTTPS pubblica, senza percorsi. Per la produzione usa `https://helloagira.it`; quando cambia il dominio, aggiorna la variabile e ripeti la build.

Puoi impostare la stessa variabile in locale copiando `.env.example` in `.env`. Senza `SITE_URL`, la build resta volutamente `noindex`, non genera canonical o hreflang e non include URL nella sitemap. Con un'origine HTTPS genera canonical separati IT/EN, hreflang reciproci, x-default italiano, sitemap, robots e dati strutturati WebSite/WebPage/Place. Per gli ambienti di anteprima lascia `SITE_URL` vuota.

`public/_redirects` configura il redirect permanente `/` → `/it/` su Pages; il redirect HTML permette anche la prova su un server statico generico. `public/_headers` contiene gli header essenziali. La pagina di errore è `404.html`.

## Cosa contiene

- Homepage `/it/` e `/en/`, con navigazione per sezioni e cambio lingua.
- Pagina Itinerari `/it/itinerari/` e `/en/itineraries/`, con canonical, hreflang e voci sitemap localizzate.
- Pagina Cosa vedere `/it/cosa-vedere/` e `/en/things-to-see/`, con cinque luoghi in una griglia fotografica editoriale, fonti, gallery e collegamenti alla mappa e agli itinerari.
- Pagina Storia `/it/storia/` e `/en/history/`, con una lettura per temi e fonti su Agyrion, Diodoro Siculo, l’Abbazia di San Filippo e le memorie delle chiese.
- Hub Mangiare `/it/mangiare/` e `/en/food-and-drink/`, con una prima ricognizione di ristoranti, bar e dolci.
- Hub Dormire e informazioni pratiche `/it/dormire/` e `/en/where-to-stay/`; non presenta strutture ricettive senza informazioni verificabili.
- Pagina della Sagra della Cassatella `/it/sagra-cassatella/` e `/en/cassatella-festival/`, con l’edizione 2026 indicata per l’8 novembre e programma da aggiornare.
- Entrata graduale della hero e comparsa delle schede durante lo scorrimento, disattivate con la preferenza di sistema per ridurre il movimento.
- Hero fotografica animata con panorama che si apre durante lo scorrimento, introduzione, quattro accessi tematici, luoghi, Cassatella, idee di visita, mangiare, dormire, tradizioni, mappa, storia e informazioni pratiche.
- Gallery fotografica con trascinamento, swipe, frecce e apertura a tutto schermo; chiusura con Esc e navigazione da tastiera.
- Movimento editoriale della Cassatella e comparsa progressiva delle sezioni, realizzati con GSAP.
- Animazioni più contenute su mobile e rispetto della preferenza di sistema per ridurre il movimento. I contenuti restano leggibili senza JavaScript.
- Layout responsive, menu mobile, focus visibile, collegamento per saltare al contenuto e pannelli nativi utilizzabili da tastiera.
- Fotografie reali ottimizzate in WebP, varianti responsive, dimensioni esplicite e caricamento differito sotto la prima schermata.
- Mappa MapLibre caricata su richiesta, con due punti documentati e collegamenti OpenStreetMap alternativi.
- Font ospitati nel progetto, nessuna chiamata a Google Fonts, nessuna libreria React.

## Dove intervenire

| File | Contenuto |
| --- | --- |
| `src/content/home/it.md`, `en.md` | Titolo SEO, descrizione e introduzione Markdown per lingua |
| `src/data/copy.ts` | Testi delle sezioni e dell'interfaccia, in coppie IT/EN |
| `src/pages/[lang]/index.astro` | Struttura condivisa delle due homepage |
| `src/pages/[lang]/[slug].astro` | Instradamento delle pagine editoriali IT/EN |
| `src/components/SightsLanding.astro`, `EatingLanding.astro`, `StayLanding.astro`, `HistoryLanding.astro`, `FestivalLanding.astro` | Pagine Cosa vedere, Mangiare, Dormire, Storia e Sagra |
| `src/data/history.ts` | Testi bilingui e fonti della pagina Storia |
| `src/components/SiteHeader.astro`, `SiteFooter.astro` | Navigazione e footer condivisi |
| `src/styles/global.css`, `cinematic.css` | Palette, tipografia, composizioni e adattamenti responsive |
| `src/components/JourneyHero.astro`, `PhotoGallery.astro` | Hero e gallery a tutto schermo |
| `src/scripts/motion.ts`, `gallery.ts`, `sights-reveal.ts` | Animazioni e interazioni fotografiche |
| `src/lib/i18n.ts` | Lingue e ancore localizzate |
| `src/data/places.ts` | Luoghi della mappa, coordinate e fonti |
| `src/data/photos.json` | Metadati, varianti e testi alternativi delle fotografie |
| `src/data/sources.ts` | Fonti editoriali mostrate nel footer |
| `src/components/Map.astro`, `src/scripts/map*.ts` | Interfaccia e caricamento della mappa |

La direzione visiva usa **Bricolage Grotesque** per i titoli e **DM Sans** per il testo, verde profondo `#073e38`, verde scuro `#032e2a`, grano `#f2c66d` e pietra chiara `#f6f6f0`. Foto ampie, griglia sfalsata e cambi di fondo scandiscono la lettura.

## Contenuti e sviluppo successivo

Questa versione comprende homepage, Itinerari, Cosa vedere, Storia, Mangiare, Dormire e informazioni pratiche, e Sagra della Cassatella. Le schede dei luoghi includono brevi approfondimenti; non sono ancora presenti pagine complete per ciascun luogo, né calendari aggiornati.

Non sono stati inventati recensioni, prezzi, orari o programmi aggiornati. Mangiare è una prima ricognizione; la pagina Dormire offre criteri di scelta ma non elenca alloggi finché non ci sono dati verificabili. Le tradizioni rinviano agli organizzatori. Le durate degli itinerari sono idee di visita e non misurazioni dei percorsi. La mappa contiene solo il centro abitato e l'Abbazia, con le fonti delle coordinate nel codice.

Per ampliare il progetto, aggiungi per ogni luogo, attività o evento una scheda con ID stabile, traduzioni, fonti, data di verifica e stato editoriale. Le due voci della collection `home` condividono già `entityId: agira`. La sitemap include tutte le pagine pubblicate in entrambe le lingue. Orari, accessibilità, servizi e programmi richiedono conferma locale prima di essere presentati come aggiornati.

## Fotografie, font e servizi esterni

Le cinque fotografie provenienti da Wikimedia Commons restano soggette a **CC BY-SA 4.0**. Le immagini della Grotta e della Collegiata sono riprese dalle schede della Pro Loco e riportano la relativa attribuzione e il link alla fonte; le pagine non indicano una licenza aperta. Crediti e fonti sono in `docs/PHOTO-LICENSES.md` e nel footer. I file sono ridimensionamenti WebP; i ritagli sono applicati via CSS. Le fotografie non attestano le condizioni attuali dei luoghi.

Per sostituire le fotografie, aggiorna i file in `public/images/` e i metadati in `src/data/photos.json`: mantieni varianti responsive, dimensioni e testi alternativi IT/EN. Aggiorna anche i crediti in `docs/PHOTO-LICENSES.md`.

Le licenze dei font sono in `docs/fonts/`. GSAP 3.15.0 usa la [licenza standard GSAP](https://gsap.com/standard-license/), indicata anche nel suo pacchetto. Le dipendenze software mantengono le rispettive licenze; il progetto non attribuisce alle fotografie la licenza del codice.

Non sono integrati analytics, moduli, account o geolocalizzazione. Le tessere OpenStreetMap vengono richieste soltanto dopo l'attivazione della mappa. MapLibre richiede WebGL2; in sua assenza resta il collegamento esterno. Prima di un uso con traffico elevato valuta un servizio di cartografia adeguato e rispetta la [policy delle tessere OpenStreetMap](https://operations.osmfoundation.org/policies/tiles/). Non aggiungere prefetch o download offline delle tessere standard.

## Verifiche eseguite

- Controllo Astro/TypeScript e generazione statica di homepage e sei coppie di pagine editoriali IT/EN.
- Controllo di link e ancore locali, immagini, metadati, JSON-LD, sitemap, redirect e pagina 404.
- Build locale e con origine HTTPS di prova: canonical, alternate hreflang e sitemap verificati per tutte le pagine IT/EN. L'origine di prova non è inclusa nella build consegnata.
- Ispezione visiva desktop della pagina Itinerari; menu e navigazione verso homepage e pagina dedicate verificati. Il layout mobile eredita i breakpoint responsive del progetto.
- Verificato il fallback della mappa. Il browser di prova non supporta WebGL2: il rendering interattivo e le tessere vanno confermati in un browser compatibile.

La libreria della mappa produce un avviso di dimensione del chunk durante la build; viene scaricata soltanto premendo il pulsante della mappa. Non sono stati misurati o promessi punteggi Lighthouse o Core Web Vitals sul sito pubblicato.

Le versioni delle dipendenze sono fissate nel lockfile. `npm run verify` controlla i file di `dist` dopo la build. La cartella temporanea usata per la revisione mobile non fa parte della consegna.
