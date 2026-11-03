# Metadati Schema.org delle immagini

## Punto unico

`imageObject(origin, lang, photoKey, maxWidth?)` in `src/lib/schema.ts` costruisce
gli `ImageObject` dal catalogo esistente `src/data/photos.json`. I cinque
generatori della Sagra, degli eventi religiosi, del Natale al Nessun Dorma,
del Motor Expo e dei Borghi usano questo helper. Nessun markup per immagini
va ricostruito a mano nei componenti.

Il catalogo resta condiviso tra le lingue. `alt.it/en` alimenta `caption`;
`credit.it/en` alimenta `creditText`. Autore, titolare e URL sono indipendenti
dalla lingua. Non si ricava l'autore dal testo del credito: una fonte o chi
ha fornito il file non è necessariamente il fotografo.

## Campi del catalogo

| Campo | Uso |
| --- | --- |
| `author` | Nome effettivo dell'autore; se assente, omettere `creator`. |
| `authorType` (opzionale) | `Person` (predefinito) oppure `Organization`, solo quando è effettivamente l'autore. |
| `credit.it/en` | Credito editoriale localizzato, mantenuto separato dal copyright. |
| `licenseUrl` (già esistente) | URL della licenza specifica verificata; prevale sulla nota generale. |
| `copyrightHolder` (opzionale) | Nome del titolare attuale, senza simbolo ©; produce `copyrightNotice: "© …"`. |
| `licenseContactUrl` (opzionale) | Pagina pubblica verificata per contattare direttamente l'autore/titolare o richiedere l'utilizzo; produce `acquireLicensePage`. |

I campi facoltativi possono essere omessi, `null` o vuoti. Nessun titolare
è dedotto da `author`, `credit`, `source` o dal nome del sito. Non vengono
assegnate licenze Creative Commons automaticamente. `license` nel catalogo
è un'etichetta editoriale preesistente; Schema.org riceve l'URL, non l'etichetta.

Non usare automaticamente `authorUrl` o `source` come `acquireLicensePage`:
una fonte non prova la possibilità di richiedere diritti sull'immagine.
Controllare che il contatto sia quello dell'autore/titolare corretto e che
la pagina sia pubblicamente accessibile. La validazione del codice controlla
solo la sintassi HTTP(S), non identità, proprietà, disponibilità o contenuto
della pagina; URL relativi, `mailto:`, credenziali e altri schemi fanno fallire
la build. Un URL non ancora verificato va lasciato assente.

Non sono stati aggiunti titolari o contatti alle fotografie esistenti perché
il catalogo non li documenta. L'attribuzione a Filippo Anello, per esempio,
non è stata trasformata automaticamente in una dichiarazione di copyright.
Il documento storico `docs/PHOTO-LICENSES.md` contiene dati discordanti con
il catalogo attuale: non usarlo per assegnare diritti senza verificare il file
effettivamente pubblicato e la sua provenienza.

## Nota generale e internazionalizzazione

In assenza di `licenseUrl` si usa `pageUrl('legal', lang)` con l'ancora
condivisa `imageRightsSectionIds` di `src/data/legal.ts`:

- italiano: `/it/note-legali/#diritti-immagini`;
- inglese: `/en/legal-notice/#image-rights`.

La sezione descrive i diritti riservati ai rispettivi titolari e indirizza le
richieste direttamente a loro. Non concede un permesso generale, non
sostituisce licenze specifiche e non presenta Hello Agira come intermediario.

## Nuove immagini e pagine

Per un nuovo `ImageObject`, inserire la foto nel catalogo e chiamare l'helper:

```ts
const image = imageObject(origin, lang, cassatellaEvent.image);
// Inserire image una sola volta nel grafo e usare { '@id': image['@id'] }
// nei riferimenti Event.image e WebPage.primaryImageOfPage.
```

Il parametro `maxWidth` seleziona una variante WebP realmente elencata in
`widths`; il valore predefinito è 1800. I generatori migrati conservano le
varianti precedenti, incluse quelle fino a 2048 degli eventi religiosi.

Questo intervento uniforma tutti gli `ImageObject` già emessi. `Photo.astro`
continua a produrre il solo elemento visivo: aggiungere una foto a una
galleria non emette automaticamente un nuovo `ImageObject`. I campi `image`
che contengono solo URL restano validi e non sono stati convertiti. Per
estendere la copertura a nuove pagine o fotografie, usare sempre l'helper
per le immagini effettivamente presenti nella pagina, senza duplicare nodi.

## Controlli

```sh
SITE_URL=https://helloagira.it npm run build
npm run verify
```

`verify` percorre tutte le pagine IT/EN generate, analizza anche gli
`ImageObject` annidati, controlla file immagine, dati del catalogo,
localizzazione, assenza di copyright/contatti dedotti, URL e frammenti legali.

Riferimento: [Google Search Central — Image metadata](https://developers.google.com/search/docs/appearance/structured-data/image-license-metadata).
Il requisito è `contentUrl` con almeno uno tra `creator`, `creditText`,
`copyrightNotice` e `license`. Gli altri campi possono restare raccomandati
nel Rich Results Test. Non riempirli con valori ipotetici per eliminare un
avviso. Dopo la pubblicazione, verificare anche gli URL live con il Rich
Results Test; una validazione locale non equivale a un test Google eseguito.
