// Pagina delle ricette: card filtrate per testo e categoria.

const campoCerca = document.getElementById('cerca');
const filtri = document.getElementById('categorie');
const elenco = document.getElementById('elenco');
const nessuna = document.getElementById('nessuna');

let categoriaScelta = 'tutte';

// segnaposto finché una ricetta non ha la sua foto: un disegno per categoria
const DISEGNI = {
  pizza: '<svg viewBox="0 0 48 48" aria-hidden="true"><circle cx="24" cy="24" r="19" fill="none" stroke="currentColor" ' +
         'stroke-width="3"/><circle cx="17" cy="19" r="3" fill="currentColor"/><circle cx="29" cy="17" r="3" ' +
         'fill="currentColor"/><circle cx="25" cy="30" r="3" fill="currentColor"/></svg>',
  pane: '<svg viewBox="0 0 48 48" aria-hidden="true"><rect x="5" y="14" width="38" height="22" rx="11" fill="none" ' +
        'stroke="currentColor" stroke-width="3"/><path d="M15 30l6-10M23 30l6-10M31 30l6-10" stroke="currentColor" ' +
        'stroke-width="3" stroke-linecap="round"/></svg>',
};

const lingua = () => document.documentElement.lang;

// minuscolo e senza accenti, così "semola" trova anche "sémola"
const normalizza = s => s.normalize('NFD').replace(/\p{Diacritic}/gu, '').toLowerCase();

function durata(minuti) {
  const h = Math.floor(minuti / 60);
  const m = minuti % 60;
  return [h && `${h} h`, m && `${m} min`].filter(Boolean).join(' ');
}

function tempo({ min, max, almeno }) {
  if (almeno) return t.almeno(durata(min));
  return max ? `${durata(min)} – ${durata(max)}` : durata(min);
}

const nomiIngredienti = r => r.ingredienti.map(chiave => INGREDIENTI[chiave][lingua()]);

const testoCercabile = r =>
  normalizza([r.titolo[lingua()], r.descrizione[lingua()], ...nomiIngredienti(r)].join(' '));

function card(r) {
  const immagine = r.immagine ? `<img src="${r.immagine}" alt="" loading="lazy">` : DISEGNI[r.categoria];
  return `<article class="card" style="--c: var(--cat-${r.categoria})">
    <div class="card-immagine">${immagine}</div>
    <div class="card-corpo">
      <p class="card-categoria">${t.categorie[r.categoria]}</p>
      <h2>${r.titolo[lingua()]}</h2>
      <p class="card-descrizione">${r.descrizione[lingua()]}</p>
      <ul class="card-ingredienti">${nomiIngredienti(r).map(nome => `<li>${nome}</li>`).join('')}</ul>
      <dl class="card-dati">
        <dt>${t.tempoTotale}</dt><dd>${tempo(r.tempo)}</dd>
        <dt>${t.fonte}</dt><dd><a href="${r.fonte.url}" target="_blank" rel="noopener">${r.fonte.nome}</a></dd>
      </dl>
    </div>
  </article>`;
}

// tutte le parole cercate devono comparire nel nome, nella descrizione o negli ingredienti
function filtra() {
  const parole = normalizza(campoCerca.value).split(/\s+/).filter(Boolean);
  const trovate = RICETTE.filter(r =>
    (categoriaScelta === 'tutte' || r.categoria === categoriaScelta) &&
    parole.every(parola => testoCercabile(r).includes(parola)));
  elenco.innerHTML = trovate.map(card).join('');
  nessuna.hidden = trovate.length > 0;
}

// i pulsanti si ricreano solo al cambio di lingua; un clic cambia solo quale è premuto
function mostraFiltri() {
  const categorie = ['tutte', ...new Set(RICETTE.map(r => r.categoria))];
  filtri.innerHTML = categorie.map(c =>
    `<button type="button" data-categoria="${c}" aria-pressed="${c === categoriaScelta}">` +
    `${c === 'tutte' ? t.tutte : t.categorie[c]}</button>`).join('');
}

filtri.addEventListener('click', evento => {
  const pulsante = evento.target.closest('button');
  if (!pulsante) return;
  categoriaScelta = pulsante.dataset.categoria;
  for (const b of filtri.children) b.setAttribute('aria-pressed', b === pulsante);
  filtra();
});
campoCerca.addEventListener('input', filtra);

avviaPagina(() => {
  mostraFiltri();
  filtra();
});
