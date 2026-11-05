// Collega il modulo al calcolo: ricalcola a ogni modifica.

const form = document.getElementById('dati');
const titolo = document.getElementById('titolo');
const letture = document.getElementById('letture');
const composizione = document.getElementById('composizione');
const dettagli = document.getElementById('dettagli');
const finestra = document.getElementById('finestra');

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

// ingredienti come [colore (--c-…), nome, grammi, cifre decimali, nota, classe della nota]
function ingredienti(p, r) {
  const lista = [];
  if (r.madre) {
    const acqua = r.acqua - r.madre.acqua;
    lista.push(['farina', t.farina, r.farina - r.madre.farina, 0, t.tot(g(r.farina))]);
    lista.push(acqua >= 0
      ? ['acqua', t.acqua, acqua, 0, `${t.tot(g(r.acqua))}, ${g(p.idratazione, 1)}%`]
      : ['acqua', t.acqua, 0, 0, t.troppaAcqua, 'avviso']);
    lista.push(['lievito', t.lievitoMadre, r.lievito, 0, `${g(p.percentualeMadre, 1)}%`]);
  } else {
    lista.push(['farina', t.farina, r.farina, 0, '100%']);
    lista.push(['acqua', t.acqua, r.acqua, 0, `${g(p.idratazione, 1)}%`]);
    lista.push(['lievito', t[NOMI_LIEVITO[p.tipo]], r.lievito, 1, `${g(r.pct, 2)}%`]);
  }
  const unita = p.unitaSale === 'gl' ? 'g/L' : '%';
  lista.push(['sale', t.sale, r.sale, 1, `${p.sale.toLocaleString(t.locale)} ${unita}`]);
  if (r.olio > 0) lista.push(['olio', t.olio, r.olio, 0, `${g(p.olio, 1)}%`]);
  if (r.zucchero > 0) lista.push(['zucchero', t.zucchero, r.zucchero, 0, `${g(p.zucchero, 1)}%`]);
  return lista;
}

function aggiorna() {
  form.querySelector('#madre').hidden = form.tipo.value !== 'madre';
  // Nota sul momento di infornare: con il lievito fresco il tempo a cui l'impasto inizia a perdere gas
  // dipende dalla velocità di formazione del gas; con il secco istantaneo no, e il madre non era studiato.
  // "Impact of gas formation kinetics on dough development and bread quality" (misure al reofermentometro)
  finestra.hidden = form.tipo.value !== 'fresco';
  const p = dati();
  if (!p) {
    titolo.innerHTML = `<span class="avviso">${t.controlla}</span>`;
    letture.innerHTML = '';
    composizione.innerHTML = '';
    dettagli.textContent = '';
    return;
  }

  const r = calcola(p);
  titolo.textContent = t.per(p.panetti, g(p.peso), g(r.totale));

  const lista = ingredienti(p, r);
  letture.innerHTML = lista.map(([colore, nome, grammi, cifre, info, classe = '']) =>
    `<div class="lettura" style="--c: var(--c-${colore})">` +
    `<span class="nome">${nome}</span><span class="valore">${g(grammi, cifre)} g</span>` +
    `<span class="info ${classe}">${info}</span></div>`).join('');
  composizione.innerHTML = lista.map(([colore, , grammi]) =>
    `<span style="flex-grow: ${grammi}; --c: var(--c-${colore})"></span>`).join('');

  const fuoriTabella = !r.madre && (r.ore < TABELLA[0][0] || r.ore > TABELLA[TABELLA.length - 1][0]);
  dettagli.textContent = t.oreA(g(p.ore, 1), g(p.temp, 1)) +
    (p.temp !== 22 ? t.equivalenti(g(r.ore, 1)) : '') + '.' +
    (fuoriTabella ? t.fuoriTabella(g(TABELLA[0][0], 1), g(TABELLA[TABELLA.length - 1][0])) : '') +
    (r.madre ? t.notaMadre : '') +
    (p.zucchero > 0 ? t.notaZucchero : '');
}

// cambiando unità del sale, converte il valore così che la quantità resti la stessa
form.unitaSale.addEventListener('change', () => {
  const sale = leggi(form.sale);
  const idr = leggi(form.idratazione) / 100;
  if (!(sale >= 0 && idr > 0)) return;
  const nuovo = form.unitaSale.value === 'pct' ? sale * idr / 10 : sale * 10 / idr;
  form.sale.value = nuovo.toLocaleString(t.locale, { maximumFractionDigits: 2, useGrouping: false });
  aggiorna();
});

form.addEventListener('input', aggiorna);
avviaPagina(aggiorna);
