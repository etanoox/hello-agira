# Quanto conosci Agira?

- Gioco italiano: `/it/quiz/`.
- `/en/quiz/` spiega in inglese che le domande sono per ora in italiano e collega al gioco.
- Collegamento nel footer. Nessuna registrazione, timer, classifica o salvataggio delle risposte.
- Ogni partita estrae 10 domande senza ripetizioni. Una nuova partita può riproporre domande già incontrate.

## Aggiornare le domande

L’unica fonte è **`src/data/quiz/questions.csv`**. Modifica questo file e pubblica normalmente il sito: Astro legge il CSV a ogni build. Non occorre modificare la pagina, il codice del gioco o un secondo file JSON.

Il file iniziale conserva tutte le 60 righe del CSV fornito. Le tre domande Q028, Q031 e Q057, segnate “Da rivedere”, sono escluse dall’estrazione: la disponibilità iniziale è di 57 domande.

Mantieni le intestazioni e aggiungi una riga per ogni nuova domanda, con un **ID univoco**. Sono obbligatorie:

| Colonna | Contenuto |
| --- | --- |
| `id` | Identificatore unico, ad esempio Q061 |
| `domanda` | Testo della domanda |
| `risposta_A` … `risposta_D` | Quattro risposte diverse |
| `risposta_corretta` | A, B, C oppure D |

`categoria` e `spiegazione` sono facoltative. Se presente, `risposta_corretta_testo` deve corrispondere alla risposta indicata dalla lettera. Le altre colonne del CSV originale restano utilizzabili per la revisione editoriale e non vengono inviate al gioco.

Le righe con `stato_verifica` o `stato_verifica_giuseppe` impostato a `Da rivedere`, `Bozza`, `Da verificare` o `Non verificata` vengono escluse. La dicitura `Non verificata personalmente` non esclude una domanda già verificata sulle fonti. Per riattivare una domanda correggi gli eventuali stati di sospensione in entrambe le colonne. È supportata anche una colonna facoltativa `attiva`: `FALSE`, `NO` o `0` disattivano la riga.

Il CSV può usare virgole o punti e virgola. Le celle contenenti il delimitatore, virgolette o ritorni a capo devono essere racchiuse tra virgolette; una virgoletta interna si scrive `""`. È possibile esportare il file come CSV UTF-8 da un foglio di calcolo.

La build si interrompe con un messaggio esplicito se trova ID duplicati, righe attive incomplete, risposte incoerenti o meno di 10 domande utilizzabili. Non usare i dati di verifica come semplice conferma formale: approva la correttezza del contenuto prima di riattivarlo.

## Verifica prima di pubblicare

```bash
npm run test:quiz
SITE_URL=https://helloagira.it npm run build
npm run verify
```

Prova anche una partita completa su smartphone, il risultato, il riepilogo e “Gioca ancora”. Tutti i dati della partita rimangono nella memoria della pagina e si azzerano ricaricandola. L’aggiornamento del CSV diventa visibile dopo il nuovo deploy; una scheda già aperta conserva la versione caricata fino al refresh.
