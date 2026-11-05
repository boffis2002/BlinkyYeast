// Controlla i dati delle ricette prima di pubblicare: node controlla-ricette.js [cartella]
// Carica i18n.js e ricette.js come fa il browser e segnala traduzioni mancanti, chiavi sbagliate,
// numeri non validi e categorie senza colore o disegno. Esce con codice 1 se trova errori.

const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const cartella = process.argv[2] || __dirname;
const leggiFile = nome => fs.readFileSync(path.join(cartella, nome), 'utf8');

const contesto = vm.createContext({});
for (const nome of ['i18n.js', 'ricette.js']) vm.runInContext(leggiFile(nome), contesto, { filename: nome });
const { TESTI, INGREDIENTI, RICETTE } = vm.runInContext('({ TESTI, INGREDIENTI, RICETTE })', contesto);

const LINGUE = Object.keys(TESTI);
const errori = [];
const errore = (dove, cosa) => errori.push(`${dove}: ${cosa}`);

const numero = x => typeof x === 'number' && Number.isFinite(x);
const testo = x => typeof x === 'string' && x.trim() !== '';

// un campo tradotto deve avere tutte le lingue, e solo quelle
function tradotto(dove, valore) {
  if (typeof valore !== 'object' || valore === null) return errore(dove, 'manca o non è un testo tradotto');
  for (const l of LINGUE) if (!testo(valore[l])) errore(dove, `manca la lingua ${l}`);
  for (const l of Object.keys(valore)) if (!LINGUE.includes(l)) errore(dove, `lingua sconosciuta ${l}`);
}

function ingrediente(dove, chiave) {
  if (!Object.hasOwn(INGREDIENTI, chiave)) errore(dove, `ingrediente sconosciuto «${chiave}»`);
}

// --- testi dell'interfaccia: ogni lingua deve avere le stesse chiavi dell'italiano ---

for (const l of LINGUE) {
  for (const chiave of Object.keys(TESTI.it)) if (!(chiave in TESTI[l])) errore(`i18n.js › ${l}`, `manca «${chiave}»`);
  for (const chiave of Object.keys(TESTI[l])) if (!(chiave in TESTI.it)) errore(`i18n.js › ${l}`, `«${chiave}» non esiste in it`);
}

for (const [chiave, nomi] of Object.entries(INGREDIENTI)) tradotto(`INGREDIENTI › ${chiave}`, nomi);

// --- ricette ---

const css = leggiFile('style.css');
const paginaRicette = leggiFile('pagina-ricette.js');
const visti = new Set();

for (const [i, r] of RICETTE.entries()) {
  const dove = `ricetta ${r.id ?? `n. ${i + 1}`}`;

  if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(r.id ?? '')) errore(dove, 'id mancante o non valido (minuscole, cifre e trattini)');
  if (visti.has(r.id)) errore(dove, 'id ripetuto');
  visti.add(r.id);

  // una categoria nuova ha bisogno del nome in ogni lingua, del colore nei tre temi e del disegno segnaposto
  const cat = r.categoria;
  for (const l of LINGUE) if (!testo(TESTI[l].categorie?.[cat])) errore(dove, `categoria «${cat}» senza nome in ${l} (i18n.js)`);
  const colori = css.match(new RegExp(`--cat-${cat}:`, 'g'))?.length ?? 0;
  if (colori < 3) errore(dove, `categoria «${cat}»: --cat-${cat} definito ${colori} volte su 3 in style.css`);
  if (!new RegExp(`^\\s*${cat}:`, 'm').test(paginaRicette)) errore(dove, `categoria «${cat}» senza disegno in DISEGNI (pagina-ricette.js)`);

  tradotto(`${dove} › titolo`, r.titolo);
  tradotto(`${dove} › descrizione`, r.descrizione);
  tradotto(`${dove} › notaDosi`, r.notaDosi);

  if (!Array.isArray(r.ingredienti) || r.ingredienti.length === 0) errore(dove, 'ingredienti della card mancanti');
  else r.ingredienti.forEach(chiave => ingrediente(`${dove} › ingredienti`, chiave));

  const { min, max, almeno } = r.tempo ?? {};
  if (!(Number.isInteger(min) && min > 0)) errore(`${dove} › tempo`, 'min deve essere un numero intero di minuti');
  if (max !== undefined && !(Number.isInteger(max) && max > min)) errore(`${dove} › tempo`, 'max deve essere maggiore di min');
  if (max !== undefined && almeno) errore(`${dove} › tempo`, 'max e almeno insieme non hanno senso');

  if (!testo(r.fonte?.nome)) errore(`${dove} › fonte`, 'nome mancante');
  if (!/^https:\/\//.test(r.fonte?.url ?? '')) errore(`${dove} › fonte`, 'url mancante o non https');

  if (r.immagine !== null && !testo(r.immagine)) errore(`${dove} › immagine`, 'deve essere null o un percorso');

  if (!(Number.isInteger(r.pezzi?.numero) && r.pezzi.numero >= 1)) errore(`${dove} › pezzi`, 'numero deve essere un intero ≥ 1');
  if (!(numero(r.pezzi?.peso) && r.pezzi.peso > 0)) errore(`${dove} › pezzi`, 'peso deve essere > 0');
  tradotto(`${dove} › pezzi › nota`, r.pezzi?.nota);

  // dosi: un solo gruppo principale; un gruppo con `da` deve corrispondere a un ingrediente del principale
  const gruppi = Array.isArray(r.dosi) ? r.dosi : [];
  if (gruppi.length === 0) errore(dove, 'dosi mancanti');
  const principali = gruppi.filter(g => !g.da);
  if (gruppi.length && principali.length !== 1) errore(`${dove} › dosi`, `serve un solo gruppo senza «da», ce ne sono ${principali.length}`);
  for (const [j, g] of gruppi.entries()) {
    const doveGruppo = `${dove} › dosi[${j}]`;
    tradotto(`${doveGruppo} › nome`, g.nome);
    if (!Array.isArray(g.ingredienti) || g.ingredienti.length === 0) { errore(doveGruppo, 'ingredienti mancanti'); continue; }
    for (const voce of g.ingredienti) {
      const [chiave, quanto, finoA = quanto] = Array.isArray(voce) ? voce : [];
      ingrediente(doveGruppo, chiave);
      if (!(numero(quanto) && quanto > 0 && numero(finoA) && finoA >= quanto)) {
        errore(doveGruppo, `quantità non valida per «${chiave}» (serve [ingrediente, quantità] o [ingrediente, min, max])`);
      }
    }
    if (g.da && !principali[0]?.ingredienti?.some(([chiave]) => chiave === g.da)) {
      errore(doveGruppo, `«da: ${g.da}» non è un ingrediente del gruppo principale`);
    }
  }

  if (!Array.isArray(r.passi) || r.passi.length === 0) errore(dove, 'procedimento mancante');
  else r.passi.forEach((passo, j) => tradotto(`${dove} › passi[${j}]`, passo));
}

if (errori.length) {
  console.error(`${errori.length} ${errori.length === 1 ? 'problema' : 'problemi'}:\n` + errori.map(e => `  - ${e}`).join('\n'));
  process.exit(1);
}
console.log(`Tutto a posto: ${RICETTE.length} ricette, ${Object.keys(INGREDIENTI).length} ingredienti, ${LINGUE.length} lingue.`);
