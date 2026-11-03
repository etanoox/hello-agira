# Metadati delle immagini

`src/data/photos.json` è il catalogo unico di fotografie, illustrazioni e
locandine. Include testi IT/EN, dimensioni, varianti e dati editoriali già
presenti; non viene compilato con diritti presunti.

## Generazione per pagina

1. `Photo.astro` registra la chiave dell'immagine in `Astro.locals.imageKeys`.
2. `src/middleware.ts` aspetta il rendering completo e genera un grafo JSON-LD
   con l'helper esistente `imageObject()` di `src/lib/schema.ts`.
3. Il `Set` appartiene alla singola richiesta/build page: la stessa foto in
   hero, galleria e miniature produce un solo `ImageObject` per pagina. Una
   foto presente in pagine diverse riceve il markup in ciascuna pagina.
4. Eventi e `primaryImageOfPage` usano `imageReference()`. L'identificativo
   `https://helloagira.it/#image-CHIAVE` resta uguale tra lingue e risoluzioni;
   `contentUrl` e `url` indicano il file reale della variante scelta.

Il grafo è nell'HTML statico, senza JavaScript aggiuntivo nel browser. È emesso
solo nelle pagine localizzate con canonical e sito HTTPS, come gli altri
metadati del progetto. Non si inserisce l'intero catalogo in tutte le pagine.

Le icone SVG dell'interfaccia non vengono incluse. Per un'immagine puramente
decorativa si può usare `decorative` su `Photo`, che produce `alt=""` e la
esclude dalla raccolta. Non usare questo flag sulle fotografie editoriali.

## Dati condivisi e ruoli distinti

`src/data/image-rights.json` contiene profili condivisi e assegnazioni per
immagine. I nomi dei profili riprendono quelli già nel progetto; un nome da solo non
attesta una verifica manuale, una titolarità o un contatto.

| Campo | Uso |
| --- | --- |
| `people.ID.name` / `type` | Nome e tipo `Person` o `Organization`. |
| `people.ID.licenseContactUrl` | URL pubblico verificato per contattare direttamente quel soggetto o ottenere informazioni sull'uso. |
| `images.CHIAVE.creatorId` | Autore effettivo. Se omesso conserva `author` del catalogo; `null` lo omette dal JSON-LD. |
| `images.CHIAVE.copyrightHolderId` | Titolare confermato: genera `copyrightNotice`. Non viene dedotto dall'autore. |
| `images.CHIAVE.licenseContactId` | Soggetto da contattare per questa immagine: usa il suo URL verificato. Non viene dedotto dagli altri ruoli. |
| `images.CHIAVE.creditIsAttribution: false` | Omette dal JSON-LD un testo che descrive la scena anziché attribuirla; non cambia il testo visibile. |

Restano compatibili i campi per immagine `author`, `authorType`, `credit`,
`copyrightHolder`, `licenseContactUrl` e `licenseUrl` in `photos.json`.
I riferimenti espliciti nel registro hanno precedenza. Caption (`alt`) e
credito (`credit`) restano localizzati nel catalogo; identità, titolarità e
contatti si condividono tra le lingue.

Non dedurre copyright da `author`, `credit`, `source`, filigrane o dal nome del
sito. Non trasformare `authorUrl`/`source` automaticamente in un contatto di
licenza. Non assegnare Creative Commons o `© Hello Agira` automaticamente.
`license` nel catalogo è una vecchia etichetta editoriale: Schema.org riceve
l'URL `licenseUrl`, non quell'etichetta.

URL relativi, schemi diversi da HTTP(S) e credenziali fanno fallire la build.
Questa è solo una validazione sintattica: identità, accessibilità pubblica e
pertinenza del contatto vanno controllate prima di inserire il dato.

## Revisione delle immagini esistenti

Il catalogo contiene 140 immagini, comprese le cinque locandine 2022–2026.
La revisione personale procede per immagine, salvo conferma esplicita
dell’editore per un gruppo identificato; il solo nome dell’autore non basta. Per ogni immagine raccogliere:

- conferma/correzione di autore, didascalia e credito visibile;
- titolare dei diritti, oppure sconosciuto;
- URL pubblico diretto verificato, oppure nessun contatto disponibile;
- eventuali condizioni o licenza specifica documentata.

Aggiornare anche i crediti visibili nel catalogo quando la revisione li
corregge. L'assenza di informazioni deve restare tale: i due avvisi facoltativi
Google non si risolvono con valori inventati.

I testi descrittivi di Manmano Gussio, della grafica Motor Expo e del pub
Nessun Dorma non vengono presentati come attribuzioni. Per `grotta`, il
credito Pro Loco viene conservato, ma il fotografo resta da verificare: il
registro omette `creator` finché l'attribuzione effettiva non è confermata.
Il documento storico `docs/PHOTO-LICENSES.md` è discordante con il catalogo:
non usarlo per attribuire diritti senza verificare la provenienza del file.

## Conferma delle fotografie di Filippo Anello

Il 3 novembre 2026 Giuseppe Ricceri ha confermato autore, crediti, didascalie e
copyright delle 78 fotografie già attribuite a Filippo Anello nel catalogo.
Il registro assegna esplicitamente a queste immagini i tre ruoli del profilo
`filippo-anello`; l'URL è salvato una sola volta nel profilo:
`https://www.facebook.com/FilippoAnelloStudio/`.

Questo contatto pubblico è confermato dall'editore, che segnala la presenza
dei recapiti; il recupero automatico della pagina Facebook non è disponibile.
Sostituisce il precedente sito proposto `filippoanello.it`, rimasto in verifica.
La conferma del gruppo non viene estesa ad altri fotografi o alle locandine.
Per nuove foto confermate di Anello riusare lo stesso profilo e contatto;
verificare comunque la titolarità della nuova fotografia prima di assegnarla.

## Diritti generali e localizzazione

In assenza di `licenseUrl` specifico, l'helper usa `pageUrl('legal', lang)` e
`imageRightsSectionIds` di `src/data/legal.ts`:

- `/it/note-legali/#diritti-immagini`;
- `/en/legal-notice/#image-rights`.

La nota copre fotografie, locandine e illustrazioni. Non concede permessi
generali e non presenta Hello Agira come intermediario per il riutilizzo.

## Aggiungere immagini

Inserire l'immagine nel catalogo e mostrarla con `Photo`. I normali file sono
`/images/CHIAVE-LARGHEZZA.webp`; `files` permette di conservare nomi esistenti,
come le locandine. `variantHeights` serve soltanto quando la dimensione reale
di una variante differisce dall'arrotondamento del rapporto originale.
Non duplicare nodi JSON-LD nei componenti: usare `imageReference()` per i
collegamenti da Event/WebPage, assicurandosi che l'immagine sia nella pagina.

## Controlli

```sh
SITE_URL=https://helloagira.it npm run build
npm run verify
npm run test:images
```

`verify` controlla tutte le pagine IT/EN, confronta gli `img` con il catalogo
e con i nodi JSON-LD, rileva duplicati, immagini mancanti o estranee alla
pagina, riferimenti non risolti, file mancanti e URL/ancore legali errati.
`test:images` copre i ruoli separati, i campi mancanti, URL non validi,
localizzazione, licenze specifiche, risoluzioni e serializzazione sicura.

Riferimento: [Google Search Central — Image metadata](https://developers.google.com/search/docs/appearance/structured-data/image-license-metadata).
Google richiede `contentUrl` e almeno uno tra `creator`, `creditText`,
`copyrightNotice` e `license`. Il test locale non garantisce indicizzazione
o risultati avanzati: dopo la pubblicazione verificare gli URL live anche
con Rich Results Test e Search Console.
