// Collega il modulo al calcolo: ricalcola a ogni modifica.

const form = document.getElementById('dati');
const risultato = document.getElementById('risultato');
const titolo = document.getElementById('titolo');
const righe = document.getElementById('righe');
const dettagli = document.getElementById('dettagli');
const barra = document.getElementById('barra');
const sceltaLingua = document.getElementById('lingua');
const pulsanteTema = document.getElementById('tema');

let t = TESTI.it; // testi della lingua scelta

// le preferenze restano nel browser; se lo spazio locale non è disponibile si va avanti senza
function ricorda(chiave, valore) {
  try { localStorage.setItem(chiave, valore); } catch {}
}
function ricordato(chiave) {
  try { return localStorage.getItem(chiave); } catch { return null; }
}

const controlli = {
  positivo: v => v > 0,
  intero: v => Number.isInteger(v) && v >= 1,
  nonNegativo: v => v >= 0,
  temperatura: v => v >= 10 && v <= 35, // campo prudenziale per il modello di temperatura
};

// numero dal campo, con il punto o la virgola come separatore decimale (NaN se non valido)
function leggi(input) {
  const testo = input.value.trim().replace(',', '.');
  return /^-?\d*\.?\d+$/.test(testo) ? Number(testo) : NaN;
}

// legge i campi visibili e segna quelli non validi; null se qualcosa non va
function dati() {
  const p = { tipo: form.tipo.value, unitaSale: form.unitaSale.value };
  let validi = true;
  for (const input of form.querySelectorAll('input')) {
    if (input.closest('[hidden]')) continue;
    const v = leggi(input);
    const ok = !Number.isNaN(v) && controlli[input.dataset.check](v);
    input.setAttribute('aria-invalid', !ok);
    p[input.name] = v;
    validi &&= ok;
  }
  return validi ? p : null;
}

const g = (x, cifre = 0) =>
  x.toLocaleString(t.locale, { minimumFractionDigits: cifre, maximumFractionDigits: cifre });

const NOMI_LIEVITO = { fresco: 'lievitoFresco', secco: 'lievitoSecco' };

// ingredienti come [nome, nome breve, grammi, cifre decimali, nota, classe della nota];
// i primi quattro sono quelli mostrati nella barra del telefono
function ingredienti(p, r) {
  const lista = [];
  if (r.madre) {
    const acqua = r.acqua - r.madre.acqua;
    lista.push([t.farina, t.farina, r.farina - r.madre.farina, 0, t.tot(g(r.farina))]);
    lista.push(acqua >= 0
      ? [t.acqua, t.acqua, acqua, 0, `${t.tot(g(r.acqua))}, ${g(p.idratazione, 1)}%`]
      : [t.acqua, t.acqua, 0, 0, t.troppaAcqua, 'avviso']);
    lista.push([t.lievitoMadre, t.lievitoBreve, r.lievito, 0, `${g(p.percentualeMadre, 1)}%`]);
  } else {
    lista.push([t.farina, t.farina, r.farina, 0]);
    lista.push([t.acqua, t.acqua, r.acqua, 0, `${g(p.idratazione, 1)}%`]);
    lista.push([t[NOMI_LIEVITO[p.tipo]], t.lievitoBreve, r.lievito, 1, `${g(r.pct, 2)}%`]);
  }
  const unita = p.unitaSale === 'gl' ? 'g/L' : '%';
  lista.push([t.sale, t.sale, r.sale, 1, `${p.sale.toLocaleString(t.locale)} ${unita}`]);
  if (r.olio > 0) lista.push([t.olio, t.olio, r.olio, 0, `${g(p.olio, 1)}%`]);
  if (r.zucchero > 0) lista.push([t.zucchero, t.zucchero, r.zucchero, 0, `${g(p.zucchero, 1)}%`]);
  return lista;
}

function aggiorna() {
  form.querySelector('#madre').hidden = form.tipo.value !== 'madre';
  const p = dati();
  if (!p) {
    titolo.textContent = t.controlla;
    righe.innerHTML = '';
    dettagli.textContent = '';
    barra.innerHTML = `<span>${t.controlla}</span>`;
    return;
  }

  const r = calcola(p);
  titolo.textContent = t.per(p.panetti, g(p.peso), g(r.totale));

  const lista = ingredienti(p, r);
  righe.innerHTML = lista.map(([nome, , grammi, cifre, info, classe = '']) =>
    `<tr><th scope="row">${nome}${info ? `<small class="${classe}">${info}</small>` : ''}</th>` +
    `<td class="g">${g(grammi, cifre)} g</td></tr>`).join('');
  barra.innerHTML = lista.slice(0, 4).map(([, breve, grammi, cifre]) =>
    `<span><small>${breve}</small><b>${g(grammi, cifre)} g</b></span>`).join('');

  const fuoriTabella = !r.madre && (r.ore < TABELLA[0][0] || r.ore > TABELLA[TABELLA.length - 1][0]);
  dettagli.textContent = t.oreA(g(p.ore, 1), g(p.temp, 1)) +
    (p.temp !== 22 ? t.equivalenti(g(r.ore, 1)) : '') + '.' +
    (fuoriTabella ? t.fuoriTabella(g(TABELLA[0][0], 1), g(TABELLA[TABELLA.length - 1][0])) : '') +
    (r.madre ? t.notaMadre : '') +
    (p.zucchero > 0 ? t.notaZucchero : '');
}

// --- lingua ---

function linguaIniziale() {
  const salvata = ricordato('lingua');
  if (Object.hasOwn(TESTI, salvata ?? '')) return salvata;
  const browser = (navigator.language || '').slice(0, 2);
  return Object.hasOwn(TESTI, browser) ? browser : 'it';
}

function applicaLingua(lingua) {
  t = TESTI[lingua];
  sceltaLingua.value = lingua;
  document.documentElement.lang = lingua;
  document.title = t.titoloPagina;
  for (const el of document.querySelectorAll('[data-t]')) el.textContent = t[el.dataset.t];
  for (const el of document.querySelectorAll('[data-t-aria]')) el.setAttribute('aria-label', t[el.dataset.tAria]);
  mostraTema();
  aggiorna();
}

sceltaLingua.addEventListener('change', () => {
  ricorda('lingua', sceltaLingua.value);
  applicaLingua(sceltaLingua.value);
});

// --- tema chiaro/scuro: senza scelta segue il sistema (vedi style.css) ---

const sistemaScuro = matchMedia('(prefers-color-scheme: dark)');
const temaAttuale = () => document.documentElement.dataset.theme || (sistemaScuro.matches ? 'dark' : 'light');

// il pulsante mostra il tema a cui si passa
function mostraTema() {
  const scuro = temaAttuale() === 'dark';
  pulsanteTema.textContent = scuro ? '☀' : '☾';
  pulsanteTema.setAttribute('aria-label', scuro ? t.temaChiaro : t.temaScuro);
}

pulsanteTema.addEventListener('click', () => {
  const nuovo = temaAttuale() === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = nuovo;
  ricorda('tema', nuovo);
  mostraTema();
});
sistemaScuro.addEventListener('change', mostraTema);

// --- eventi del modulo e barra ---

// cambiando unità del sale, converte il valore così che la quantità resti la stessa
form.unitaSale.addEventListener('change', () => {
  const sale = leggi(form.sale);
  const idr = leggi(form.idratazione) / 100;
  if (!(sale >= 0 && idr > 0)) return;
  const nuovo = form.unitaSale.value === 'pct' ? sale * idr / 10 : sale * 10 / idr;
  form.sale.value = nuovo.toLocaleString(t.locale, { maximumFractionDigits: 2, useGrouping: false });
  aggiorna();
});

// la barra porta alla ricetta e sparisce quando la ricetta è già a vista
barra.addEventListener('click', () => risultato.scrollIntoView({ behavior: 'smooth' }));
new IntersectionObserver(([voce]) => barra.classList.toggle('nascosta', voce.isIntersecting))
  .observe(risultato);

form.addEventListener('input', aggiorna);
applicaLingua(linguaIniziale());
