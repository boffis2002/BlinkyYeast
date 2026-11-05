// Pagina di una ricetta (ricetta.html?id=…): procedimento e dosi scalate sul peso d'impasto scelto.

const ricetta = RICETTE.find(r => r.id === new URLSearchParams(location.search).get('id'));
const porzioni = document.getElementById('porzioni');

// numero dal campo, con il punto o la virgola come separatore decimale (NaN se non valido)
function leggi(input) {
  const testo = input.value.trim().replace(',', '.');
  return /^\d*\.?\d+$/.test(testo) ? Number(testo) : NaN;
}

// grammi: un decimale sotto i 10 g, dove l'arrotondamento conterebbe troppo
const grammi = x => x.toLocaleString(t.locale, { maximumFractionDigits: x < 10 ? 1 : 0 });

// --- dosi ---

const media = ([, min, max = min]) => (min + max) / 2;
const somma = ingredienti => ingredienti.reduce((tot, voce) => tot + media(voce), 0);

// scala un gruppo perché il suo totale (con i valori medi degli intervalli) sia `peso`
const scala = (gruppo, peso) =>
  gruppo.ingredienti.map(([chiave, min, max = min]) => {
    const k = peso / somma(gruppo.ingredienti);
    return [chiave, min * k, max * k];
  });

// il gruppo principale fa il peso totale; un gruppo con `da` (la biga) fa la quantità
// di quell'ingrediente che serve al gruppo principale
function dosi(totale) {
  const principale = ricetta.dosi.find(g => !g.da);
  const quantitaPrincipale = scala(principale, totale);
  return ricetta.dosi.map(gruppo => {
    if (gruppo === principale) return [gruppo, quantitaPrincipale];
    const voce = quantitaPrincipale.find(([chiave]) => chiave === gruppo.da);
    return [gruppo, scala(gruppo, media(voce))];
  });
}

function quantita([, min, max]) {
  return max - min >= 0.05 ? `${grammi(min)}–${grammi(max)} g` : `${grammi(min)} g`;
}

function mostraDosi() {
  const numero = leggi(porzioni.numero);
  const peso = leggi(porzioni.peso);
  const numeroOk = Number.isInteger(numero) && numero >= 1;
  const pesoOk = peso > 0;
  porzioni.numero.setAttribute('aria-invalid', !numeroOk);
  porzioni.peso.setAttribute('aria-invalid', !pesoOk);

  const elenco = document.getElementById('dosi');
  const totale = document.getElementById('totale');
  if (!numeroOk || !pesoOk) {
    totale.innerHTML = `<span class="avviso">${t.controlla}</span>`;
    elenco.innerHTML = '';
    return;
  }

  totale.textContent = t.impastoTotale(grammi(numero * peso));
  elenco.innerHTML = dosi(numero * peso).map(([gruppo, voci]) =>
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
    `<dt>${t.fonte}</dt><dd><a href="${ricetta.fonte.url}" target="_blank" rel="noopener">${ricetta.fonte.nome}</a></dd>`;
  document.getElementById('notaPezzi').textContent = ricetta.pezzi.nota[l];
  document.getElementById('notaDosi').textContent = ricetta.notaDosi[l];
  document.getElementById('passi').innerHTML = ricetta.passi.map(passo => `<li>${passo[l]}</li>`).join('');
  mostraDosi();
}

if (ricetta) {
  document.getElementById('ricetta').hidden = false;
  porzioni.numero.value = ricetta.pezzi.numero;
  porzioni.peso.value = ricetta.pezzi.peso;
  porzioni.addEventListener('input', mostraDosi);
  avviaPagina(mostraRicetta);
} else {
  document.getElementById('nonTrovata').hidden = false;
  avviaPagina(() => {});
}
