// Collega il modulo al calcolo: ricalcola a ogni modifica.

const form = document.getElementById('dati');
const titolo = document.getElementById('titolo');
const righe = document.getElementById('righe');
const dettagli = document.getElementById('dettagli');

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
  x.toLocaleString('it-IT', { minimumFractionDigits: cifre, maximumFractionDigits: cifre });

function riga(nome, grammi, cifre, info = '', classe = 'info') {
  return `<tr><td>${nome}</td><td class="g">${g(grammi, cifre)} g</td><td class="${classe}">${info}</td></tr>`;
}

function aggiorna() {
  form.querySelector('#madre').hidden = form.tipo.value !== 'madre';
  const p = dati();
  if (!p) {
    titolo.textContent = 'Controlla i valori evidenziati';
    righe.innerHTML = '';
    dettagli.textContent = '';
    return;
  }

  const r = calcola(p);
  titolo.textContent = `Per ${p.panetti} panett${p.panetti === 1 ? 'o' : 'i'} da ${g(p.peso)} g ` +
                       `(${g(r.totale)} g di impasto)`;

  const unita = p.unitaSale === 'gl' ? 'g/L' : '%';
  let html;
  if (r.madre) {
    const acqua = r.acqua - r.madre.acqua;
    html = riga('Farina', r.farina - r.madre.farina, 0, `tot. ${g(r.farina)} g`) +
           (acqua >= 0
             ? riga('Acqua', acqua, 0, `tot. ${g(r.acqua)} g, ${g(p.idratazione, 1)}%`)
             : riga('Acqua', 0, 0, 'il madre ha già più acqua del necessario', 'avviso')) +
           riga('Lievito madre', r.lievito, 0, `${g(p.percentualeMadre, 1)}%`);
  } else {
    html = riga('Farina', r.farina, 0) +
           riga('Acqua', r.acqua, 0, `${g(p.idratazione, 1)}%`) +
           riga(`Lievito ${p.tipo}`, r.lievito, 1, `${g(r.pct, 2)}%`);
  }
  html += riga('Sale', r.sale, 1, `${p.sale.toLocaleString('it-IT')} ${unita}`);
  if (r.olio > 0) html += riga('Olio / grassi', r.olio, 0, `${g(p.olio, 1)}%`);
  if (r.zucchero > 0) html += riga('Zucchero', r.zucchero, 0, `${g(p.zucchero, 1)}%`);
  righe.innerHTML = html;

  const equivalenti = p.temp !== 22 ? ` (≈ ${g(r.ore, 1)} h a 22 °C)` : '';
  const fuoriTabella = !r.madre && (r.ore < TABELLA[0][0] || r.ore > TABELLA[TABELLA.length - 1][0]);
  dettagli.textContent = `${g(p.ore, 1)} h a ${g(p.temp, 1)} °C${equivalenti}.` +
    (fuoriTabella ? ` Attenzione: la tabella copre da ${g(TABELLA[0][0], 1)} a ${TABELLA[TABELLA.length - 1][0]} h ` +
                    'a 22 °C, quindi la dose è quella al limite e non è affidabile.' : '') +
    (r.madre ? ' Con il lievito madre ore e temperatura non cambiano la dose.' : '') +
    (p.zucchero > 0 ? ' Lo zucchero rallenta il lievito, ma la dose non è corretta: vedi Fonti e limiti.' : '');
}

// cambiando unità del sale, converte il valore così che la quantità resti la stessa
form.unitaSale.addEventListener('change', () => {
  const sale = leggi(form.sale);
  const idr = leggi(form.idratazione) / 100;
  if (!(sale >= 0 && idr > 0)) return;
  const nuovo = form.unitaSale.value === 'pct' ? sale * idr / 10 : sale * 10 / idr;
  form.sale.value = String(Math.round(nuovo * 100) / 100).replace('.', ',');
  aggiorna();
});

form.addEventListener('input', aggiorna);
aggiorna();
