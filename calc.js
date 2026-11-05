// Calcolo di farina, acqua, sale e lievito per un impasto (versione web di lievito.sh).
// Le fonti di ogni valore sono citate nei commenti accanto alle costanti.

// [ore di lievitazione, % di lievito fresco sulla farina a 22 °C]
// Regola pratica ereditata da lievito.sh: non viene dalla letteratura scientifica
const TABELLA = [[2.5, 2.0], [7.0, 0.65], [14.0, 0.25], [24.0, 0.12], [48.0, 0.05]];

const TEMPERATURA_RIFERIMENTO = 22.0; // °C, temperatura a cui vale la tabella

// Temperature cardinali di crescita di S. cerevisiae: medie dei 10 ceppi della tabella 2 di
// Salvadó et al. 2011, Appl. Environ. Microbiol. 77(7):2292–2302, doi:10.1128/AEM.01861-10
const T_MIN = 2.8;  // °C
const T_OPT = 32.3; // °C
const T_MAX = 45.4; // °C

// Lievito secco istantaneo: Lesaffre indica una dose da 3 a 4 volte inferiore al fresco
const FRESCO_PER_SECCO = 3;

// Velocità di crescita relativa (a meno di una costante) secondo il modello CTMI
// di Rosso et al. 1993, J. Theor. Biol. 162:447–463
function velocita(T) {
  if (T <= T_MIN || T >= T_MAX) return 0;
  return (T - T_MAX) * (T - T_MIN) ** 2 /
    ((T_OPT - T_MIN) * ((T_OPT - T_MIN) * (T - T_OPT) - (T_OPT - T_MAX) * (T_OPT + T_MIN - 2 * T)));
}

// % di lievito fresco per `ore` a 22 °C:
// interpolazione lineare in scala logaritmica tra i punti della tabella
function percentualeTabella(ore) {
  const n = TABELLA.length;
  if (ore <= TABELLA[0][0]) return TABELLA[0][1];
  if (ore >= TABELLA[n - 1][0]) return TABELLA[n - 1][1];
  for (let i = 0; i < n - 1; i++) {
    const [t0, p0] = TABELLA[i];
    const [t1, p1] = TABELLA[i + 1];
    if (t0 <= ore && ore <= t1) {
      const f = Math.log(ore / t0) / Math.log(t1 / t0);
      return Math.exp(Math.log(p0) + f * Math.log(p1 / p0));
    }
  }
}

// ore a `temp` convertite in ore a 22 °C: il lievito lavora in proporzione alla sua velocità
function oreA22(ore, temp) {
  return ore * velocita(temp) / velocita(TEMPERATURA_RIFERIMENTO);
}

// p: peso, panetti, idratazione, sale, unitaSale ('gl' | 'pct'), olio, zucchero,
//    ore, temp, tipo ('fresco' | 'secco' | 'madre'), percentualeMadre, idratazioneMadre
function calcola(p) {
  const totale = p.peso * p.panetti;
  const idr = p.idratazione / 100;
  // 1 litro di acqua = 1000 g, quindi in g/L il sale è acqua * sale / 1000
  const sale = p.unitaSale === 'gl' ? idr * p.sale / 1000 : p.sale / 100;
  const olio = p.olio / 100;
  const zucchero = p.zucchero / 100;
  const ore = oreA22(p.ore, p.temp);

  // % di lievito sulla farina; il madre è già farina e acqua, quindi non si somma a parte
  let pct = 0;
  if (p.tipo !== 'madre') {
    pct = percentualeTabella(ore);
    if (p.tipo === 'secco') pct /= FRESCO_PER_SECCO;
  }

  // impasto = farina + acqua + sale + olio + zucchero + lievito, tutti in proporzione alla farina
  const farina = totale / (1 + idr + sale + olio + zucchero + pct / 100);
  const r = {
    totale, farina, ore, pct,
    acqua: farina * idr,
    sale: farina * sale,
    olio: farina * olio,
    zucchero: farina * zucchero,
    lievito: farina * pct / 100,
    madre: null,
  };

  if (p.tipo === 'madre') {
    const massa = farina * p.percentualeMadre / 100;
    const farinaMadre = massa / (1 + p.idratazioneMadre / 100);
    r.lievito = massa;
    r.madre = { farina: farinaMadre, acqua: massa - farinaMadre };
  }
  return r;
}

if (typeof module !== 'undefined') module.exports = { calcola, percentualeTabella, velocita };
