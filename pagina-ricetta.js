// Pagina di una ricetta (ricetta.html?id=…): procedimento e dosi scalate sulla quantità scelta,
// a pezzi (numero × peso) o in teglia o stampo (in proporzione alla superficie del contenitore della fonte).

// l'indice (ricette.js) ha i dati della card; il resto sta in ricette/<id>.js, caricato solo qui
const voceIndice = RICETTE.find(r => r.id === new URLSearchParams(location.search).get('id'));
let ricetta = null;
const porzioni = document.getElementById('porzioni');

// numero dal campo, con il punto o la virgola come separatore decimale (NaN se non valido)
function leggi(input) {
  const testo = input.value.trim().replace(',', '.');
  return /^\d*\.?\d+$/.test(testo) ? Number(testo) : NaN;
}

// grammi: un decimale sotto i 10 g, dove l'arrotondamento conterebbe troppo
const grammi = x => x.toLocaleString(t.locale, { maximumFractionDigits: x < 10 ? 1 : 0 });

// --- dosi ---
// una voce è [ingrediente, quantità], [ingrediente, minimo, massimo] o [ingrediente] quando la fonte
// non dà la quantità (q.b.): le voci q.b. restano tali e non contano nei totali

const qb = voce => voce.length === 1;
const media = ([, min, max = min]) => (min === undefined ? 0 : (min + max) / 2);
const somma = ingredienti => ingredienti.reduce((tot, voce) => tot + media(voce), 0);
const scala = (ingredienti, k) =>
  ingredienti.map(voce => (qb(voce) ? voce : [voce[0], voce[1] * k, (voce[2] ?? voce[1]) * k]));

// i gruppi senza `da` (impasto, ripieno, glassa…) tengono le proporzioni della fonte e insieme fanno il totale,
// tranne quelli `fuoriPeso` (per esempio la glassa), che scalano con gli altri ma non contano nel peso;
// un gruppo con `da` (la biga) fa la quantità di quell'ingrediente che serve agli altri gruppi
const indipendenti = () => ricetta.dosi.filter(g => !g.da);
const totaleFonte = () => indipendenti().filter(g => !g.fuoriPeso).reduce((tot, g) => tot + somma(g.ingredienti), 0);

function dosi(totale) {
  const k = totale / totaleFonte();
  const scalati = new Map(indipendenti().map(g => [g, scala(g.ingredienti, k)]));
  const voci = [...scalati.values()].flat();
  return ricetta.dosi.map(g => {
    if (!g.da) return [g, scalati.get(g)];
    const voce = voci.find(([chiave]) => chiave === g.da);
    return [g, scala(g.ingredienti, media(voce) / somma(g.ingredienti))];
  });
}

function quantita(voce) {
  if (qb(voce)) return t.qb;
  const [, min, max] = voce;
  return max - min >= 0.05 ? `${grammi(min)}–${grammi(max)} g` : `${grammi(min)} g`;
}

// --- quantità scelta: a pezzi o in teglia/stampo ---

const area = c => (c.forma === 'tondo' ? Math.PI * (c.diametro / 2) ** 2 : c.lunghezza * c.larghezza);
const modoScelto = () => porzioni.modo.value;

// segna i campi non validi e restituisce il peso totale, o NaN
function impastoScelto() {
  const valido = (input, ok) => { input.setAttribute('aria-invalid', !ok); return ok; };
  const intero = input => { const n = leggi(input); return valido(input, Number.isInteger(n) && n >= 1) ? n : NaN; };
  const positivo = input => { const x = leggi(input); return valido(input, x > 0) ? x : NaN; };

  if (modoScelto() === 'pezzi') return intero(porzioni.numero) * positivo(porzioni.peso);

  const forma = porzioni.forma.value;
  const scelto = forma === 'tondo'
    ? { forma, diametro: positivo(porzioni.diametro) }
    : { forma, lunghezza: positivo(porzioni.lunghezza), larghezza: positivo(porzioni.larghezza) };
  return totaleFonte() * intero(porzioni.contenitori) * area(scelto) / area(ricetta.contenitore);
}

function mostraCampi() {
  const pezzi = modoScelto() === 'pezzi';
  const tondo = porzioni.forma.value === 'tondo';
  document.getElementById('campiPezzi').hidden = !pezzi;
  document.getElementById('campiContenitore').hidden = pezzi;
  document.getElementById('campoDiametro').hidden = !tondo;
  document.getElementById('campoLunghezza').hidden = tondo;
  document.getElementById('campoLarghezza').hidden = tondo;
  const nota = pezzi ? ricetta.pezzi.nota[lingua()] : `${ricetta.contenitore.nota[lingua()]} ${t.notaSuperficie}`;
  document.getElementById('notaPezzi').textContent = nota;
}

function mostraDosi() {
  mostraCampi();
  const elenco = document.getElementById('dosi');
  const totale = document.getElementById('totale');
  const peso = impastoScelto();
  if (!(peso > 0)) {
    totale.innerHTML = `<span class="avviso">${t.controlla}</span>`;
    elenco.innerHTML = '';
    return;
  }

  totale.textContent = t.impastoTotale(grammi(peso));
  elenco.innerHTML = dosi(peso).map(([gruppo, voci]) =>
    `<h3>${gruppo.nome[lingua()]}</h3><table class="tabella-dosi"><tbody>` +
    voci.map(voce => `<tr><th scope="row">${INGREDIENTI[voce[0]][lingua()]}</th><td>${quantita(voce)}</td></tr>`).join('') +
    '</tbody></table>').join('');
}

// --- pagina ---

function mostraRicetta() {
  const l = lingua();
  document.title = ricetta.titolo[l];
  const categoria = document.getElementById('categoria');
  categoria.textContent = t.categorie[ricetta.categoria];
  categoria.style.setProperty('--c', `var(--cat-${ricetta.categoria})`);
  document.getElementById('nome').textContent = ricetta.titolo[l];
  document.getElementById('descrizione').textContent = ricetta.descrizione[l];
  document.getElementById('dati').innerHTML =
    `<dt>${t.tempoTotale}</dt><dd>${tempo(ricetta.tempo)}</dd>` +
    `<dt>${t.difficolta}</dt><dd>${difficolta(ricetta.difficolta)}</dd>` +
    `<dt>${t.strumenti}</dt><dd>${nomiStrumenti(ricetta)}</dd>` +
    `<dt>${t.fonte}</dt><dd><a href="${ricetta.fonte.url}" target="_blank" rel="noopener">${ricetta.fonte.nome}</a></dd>`;
  const haQb = ricetta.dosi.some(g => g.ingredienti.some(qb));
  document.getElementById('notaDosi').textContent = ricetta.notaDosi[l] + (haQb ? ` ${t.notaQb}` : '');
  document.getElementById('passi').innerHTML = ricetta.passi.map(passo => `<li>${passo[l]}</li>`).join('');
  mostraDosi();
}

function avviaRicetta() {
  ricetta = { ...voceIndice, ...DETTAGLI[voceIndice.id] };
  document.getElementById('ricetta').hidden = false;
  // la scelta tra pezzi e teglia compare solo se la fonte permette entrambe
  document.getElementById('modo').hidden = !(ricetta.pezzi && ricetta.contenitore);
  porzioni.modo.value = ricetta.pezzi ? 'pezzi' : 'contenitore';
  if (ricetta.pezzi) {
    porzioni.numero.value = ricetta.pezzi.numero;
    porzioni.peso.value = ricetta.pezzi.peso;
  }
  const c = ricetta.contenitore;
  if (c) {
    // si parte dal contenitore della fonte; l'altra forma parte dalla stessa superficie
    const a = area(c);
    porzioni.contenitori.value = c.numero ?? 1; // quante teglie usa la fonte (le dosi sono per una)
    porzioni.forma.value = c.forma;
    porzioni.diametro.value = c.diametro ?? Math.round(2 * Math.sqrt(a / Math.PI));
    porzioni.lunghezza.value = c.lunghezza ?? Math.round(Math.sqrt(a));
    porzioni.larghezza.value = c.larghezza ?? Math.round(Math.sqrt(a));
  }
  porzioni.addEventListener('input', mostraDosi);
  avviaPagina(mostraRicetta);
}

function nonTrovata() {
  document.getElementById('nonTrovata').hidden = false;
  avviaPagina(() => {});
}

// l'id viene dall'indice, quindi il percorso del file è sempre uno dei nostri
if (voceIndice) {
  const script = document.createElement('script');
  script.src = `ricette/${voceIndice.id}.js`;
  script.onload = () => (DETTAGLI[voceIndice.id] ? avviaRicetta() : nonTrovata());
  script.onerror = nonTrovata;
  document.head.append(script);
} else {
  nonTrovata();
}
