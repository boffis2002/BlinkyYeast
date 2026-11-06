// Controlla i dati delle ricette prima di pubblicare: node controlla-ricette.js [cartella]
// Carica i18n.js e ricette.js come fa il browser e segnala traduzioni mancanti, chiavi sbagliate,
// numeri non validi, strumenti sconosciuti e categorie senza colore o disegno. Esce con codice 1 se trova errori.

const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const cartella = process.argv[2] || __dirname;
const leggiFile = nome => fs.readFileSync(path.join(cartella, nome), 'utf8');

const contesto = vm.createContext({});
for (const nome of ['i18n.js', 'ricette.js']) vm.runInContext(leggiFile(nome), contesto, { filename: nome });
// i dettagli (dosi, procedimento) stanno in ricette/<id>.js: si caricano tutti e si uniscono all'indice
const fileDettagli = fs.readdirSync(path.join(cartella, 'ricette')).filter(f => f.endsWith('.js')).sort();
for (const nome of fileDettagli) vm.runInContext(leggiFile(path.join('ricette', nome)), contesto, { filename: nome });
const { TESTI, INGREDIENTI, STRUMENTI, DETTAGLI, RICETTE: INDICE } =
  vm.runInContext('({ TESTI, INGREDIENTI, STRUMENTI, DETTAGLI, RICETTE })', contesto);

const LINGUE = Object.keys(TESTI);
const errori = [];
const errore = (dove, cosa) => errori.push(`${dove}: ${cosa}`);

// indice e dettagli devono corrispondere uno a uno, e ogni campo stare nel file giusto
const CAMPI_DETTAGLIO = ['pezzi', 'contenitore', 'dosi', 'notaDosi', 'passi'];
for (const r of INDICE) {
  for (const c of CAMPI_DETTAGLIO) if (c in r) errore(`ricetta ${r.id}`, `«${c}» va in ricette/${r.id}.js, non nell'indice`);
  if (!DETTAGLI[r.id]) errore(`ricetta ${r.id}`, `manca il file ricette/${r.id}.js (o non assegna DETTAGLI['${r.id}'])`);
}
for (const id of Object.keys(DETTAGLI)) {
  if (!INDICE.some(r => r.id === id)) errore(`ricette/${id}.js`, 'non c\'è una voce con questo id nell\'indice');
  for (const c of Object.keys(DETTAGLI[id])) if (!CAMPI_DETTAGLIO.includes(c)) errore(`ricette/${id}.js`, `campo «${c}» non previsto`);
}
for (const nome of fileDettagli) {
  if (!Object.hasOwn(DETTAGLI, nome.slice(0, -3))) errore(`ricette/${nome}`, 'il nome del file deve essere l\'id della ricetta');
}
const RICETTE = INDICE.map(r => ({ ...r, ...DETTAGLI[r.id] }));

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
for (const [chiave, nomi] of Object.entries(STRUMENTI)) tradotto(`STRUMENTI › ${chiave}`, nomi);

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

  // tempo: null se la fonte non lo indica
  if (r.tempo !== null) {
    const { min, max, almeno } = r.tempo ?? {};
    if (!(Number.isInteger(min) && min > 0)) errore(`${dove} › tempo`, 'min deve essere un numero intero di minuti (o tempo: null)');
    if (max !== undefined && !(Number.isInteger(max) && max > min)) errore(`${dove} › tempo`, 'max deve essere maggiore di min');
    if (max !== undefined && almeno) errore(`${dove} › tempo`, 'max e almeno insieme non hanno senso');
  }

  if (!(Number.isInteger(r.difficolta) && r.difficolta >= 1 && r.difficolta <= 5)) {
    errore(`${dove} › difficolta`, 'deve essere un intero da 1 a 5');
  }
  if (!Array.isArray(r.strumenti) || r.strumenti.length === 0) errore(dove, 'strumenti mancanti');
  else {
    for (const s of r.strumenti) if (!Object.hasOwn(STRUMENTI, s)) errore(`${dove} › strumenti`, `strumento sconosciuto «${s}»`);
    if (new Set(r.strumenti).size !== r.strumenti.length) errore(`${dove} › strumenti`, 'strumento ripetuto');
  }

  if (!testo(r.fonte?.nome)) errore(`${dove} › fonte`, 'nome mancante');
  if (!/^https:\/\//.test(r.fonte?.url ?? '')) errore(`${dove} › fonte`, 'url mancante o non https');

  if (r.immagine !== null && !testo(r.immagine)) errore(`${dove} › immagine`, 'deve essere null o un percorso');

  // quantità: a pezzi, in teglia/stampo, o entrambe
  if (!r.pezzi && !r.contenitore) errore(dove, 'serve almeno uno tra pezzi e contenitore');
  if (r.pezzi) {
    if (!(Number.isInteger(r.pezzi.numero) && r.pezzi.numero >= 1)) errore(`${dove} › pezzi`, 'numero deve essere un intero ≥ 1');
    if (!(numero(r.pezzi.peso) && r.pezzi.peso > 0)) errore(`${dove} › pezzi`, 'peso deve essere > 0');
    tradotto(`${dove} › pezzi › nota`, r.pezzi.nota);
  }
  if (r.contenitore) {
    const c = r.contenitore;
    const positivo = x => numero(x) && x > 0;
    if (c.forma === 'tondo') { if (!positivo(c.diametro)) errore(`${dove} › contenitore`, 'diametro deve essere > 0'); }
    else if (c.forma === 'rettangolare') {
      if (!positivo(c.lunghezza) || !positivo(c.larghezza)) errore(`${dove} › contenitore`, 'lunghezza e larghezza devono essere > 0');
    } else errore(`${dove} › contenitore`, 'forma deve essere «tondo» o «rettangolare»');
    tradotto(`${dove} › contenitore › nota`, c.nota);
    if (c.numero !== undefined && !(Number.isInteger(c.numero) && c.numero >= 1)) errore(`${dove} › contenitore`, 'numero deve essere un intero ≥ 1');
  }

  // dosi: almeno un gruppo senza `da`; un gruppo con `da` deve corrispondere a un ingrediente con quantità
  // di un gruppo senza `da`. Voci: [ingrediente] (q.b.), [ingrediente, q > 0] o [ingrediente, min ≥ 0, max > min]
  const gruppi = Array.isArray(r.dosi) ? r.dosi : [];
  if (gruppi.length === 0) errore(dove, 'dosi mancanti');
  const indipendenti = gruppi.filter(g => !g.da);
  if (gruppi.length && indipendenti.length === 0) errore(`${dove} › dosi`, 'serve almeno un gruppo senza «da»');
  let totale = 0;
  for (const [j, g] of gruppi.entries()) {
    const doveGruppo = `${dove} › dosi[${j}]`;
    tradotto(`${doveGruppo} › nome`, g.nome);
    if (!Array.isArray(g.ingredienti) || g.ingredienti.length === 0) { errore(doveGruppo, 'ingredienti mancanti'); continue; }
    for (const voce of g.ingredienti) {
      const [chiave, quanto, finoA] = Array.isArray(voce) ? voce : [];
      ingrediente(doveGruppo, chiave);
      const ok = !Array.isArray(voce) ? false
        : voce.length === 1 ? true
        : voce.length === 2 ? numero(quanto) && quanto > 0
        : voce.length === 3 && numero(quanto) && quanto >= 0 && numero(finoA) && finoA > quanto;
      if (!ok) errore(doveGruppo, `voce non valida per «${chiave}» (serve [ingrediente], [ingrediente, quantità] o [ingrediente, min, max])`);
      if (!g.da && !g.fuoriPeso && ok && voce.length > 1) totale += quanto + (finoA ?? quanto);
    }
    if (g.fuoriPeso !== undefined && (g.fuoriPeso !== true || g.da)) errore(doveGruppo, '«fuoriPeso» va solo a true, e non con «da»');
    if (g.da && !indipendenti.some(p => p.ingredienti?.some(v => v[0] === g.da && v.length > 1))) {
      errore(doveGruppo, `«da: ${g.da}» non è un ingrediente con quantità di un gruppo senza «da»`);
    }
  }
  if (gruppi.length && !(totale > 0)) errore(`${dove} › dosi`, 'i gruppi che contano nel peso non hanno nessuna quantità');

  if (!Array.isArray(r.passi) || r.passi.length === 0) errore(dove, 'procedimento mancante');
  else r.passi.forEach((passo, j) => tradotto(`${dove} › passi[${j}]`, passo));
}

if (errori.length) {
  console.error(`${errori.length} ${errori.length === 1 ? 'problema' : 'problemi'}:\n` + errori.map(e => `  - ${e}`).join('\n'));
  process.exit(1);
}
console.log(`Tutto a posto: ${RICETTE.length} ricette, ${Object.keys(INGREDIENTI).length} ingredienti, ` +
            `${Object.keys(STRUMENTI).length} strumenti, ${LINGUE.length} lingue.`);
