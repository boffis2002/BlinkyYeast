// Parti comuni a tutte le pagine: preferenze salvate, lingua e tema della navbar.

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

// --- lingua ---

const lingua = () => document.documentElement.lang;

function linguaIniziale() {
  const salvata = ricordato('lingua');
  if (Object.hasOwn(TESTI, salvata ?? '')) return salvata;
  const browser = (navigator.language || '').slice(0, 2);
  return Object.hasOwn(TESTI, browser) ? browser : 'it';
}

// traduce gli elementi marcati (data-t, data-t-aria, data-t-placeholder), poi lascia
// alla pagina il resto; il titolo della scheda è la chiave in <body data-titolo>
function avviaPagina(aggiornaPagina) {
  function applicaLingua(lingua) {
    t = TESTI[lingua];
    sceltaLingua.value = lingua;
    document.documentElement.lang = lingua;
    document.title = t[document.body.dataset.titolo];
    for (const el of document.querySelectorAll('[data-t]')) el.textContent = t[el.dataset.t];
    for (const el of document.querySelectorAll('[data-t-aria]')) el.setAttribute('aria-label', t[el.dataset.tAria]);
    for (const el of document.querySelectorAll('[data-t-placeholder]')) el.placeholder = t[el.dataset.tPlaceholder];
    mostraTema();
    aggiornaPagina();
  }

  sceltaLingua.addEventListener('change', () => {
    ricorda('lingua', sceltaLingua.value);
    applicaLingua(sceltaLingua.value);
  });
  applicaLingua(linguaIniziale());
}

// --- durate delle ricette (minuti → "3 h 40 min") ---

function durata(minuti) {
  const h = Math.floor(minuti / 60);
  const m = minuti % 60;
  return [h && `${h} h`, m && `${m} min`].filter(Boolean).join(' ');
}

// null quando la fonte non indica i tempi
function tempo(intervallo) {
  if (!intervallo) return t.nonIndicato;
  const { min, max, almeno } = intervallo;
  if (almeno) return t.almeno(durata(min));
  return max ? `${durata(min)} – ${durata(max)}` : durata(min);
}

// --- difficoltà (1–5) e strumenti, comuni a card e pagina della ricetta ---

const difficolta = n =>
  `<span class="difficolta" role="img" aria-label="${t.difficoltaSu(n)}">${'●'.repeat(n)}${'○'.repeat(5 - n)}</span>`;

const nomiStrumenti = r => r.strumenti.map(chiave => STRUMENTI[chiave][lingua()]).join(', ');

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
