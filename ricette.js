// Ricette tratte da disciplinari ufficiali (STG, DOP): ogni dato viene dalla fonte indicata.
// Il tempo è in minuti, dall'impasto alla fine della cottura; `almeno` se il disciplinare dà solo minimi.

// nomi degli ingredienti, condivisi tra le ricette
const INGREDIENTI = {
  farinaTenero: { it: 'Farina di grano tenero', en: 'Soft wheat flour', fr: 'Farine de blé tendre',
                  es: 'Harina de trigo blando', de: 'Weichweizenmehl' },
  farinaTenero0: { it: 'Farina di grano tenero tipo 0', en: 'Type 0 soft wheat flour', fr: 'Farine de blé tendre type 0',
                   es: 'Harina de trigo blando tipo 0', de: 'Weichweizenmehl Type 0' },
  semolaRimacinata: { it: 'Semola rimacinata di grano duro', en: 'Re-milled durum wheat semolina',
                      fr: 'Semoule de blé dur remoulue', es: 'Sémola remolida de trigo duro',
                      de: 'Doppelt gemahlener Hartweizengrieß' },
  acqua: { it: 'Acqua', en: 'Water', fr: 'Eau', es: 'Agua', de: 'Wasser' },
  saleMarino: { it: 'Sale marino', en: 'Sea salt', fr: 'Sel marin', es: 'Sal marina', de: 'Meersalz' },
  lievitoBirra: { it: 'Lievito di birra', en: "Brewer's yeast", fr: 'Levure de boulanger', es: 'Levadura de cerveza',
                  de: 'Backhefe' },
  lievitoMadre: { it: 'Lievito madre', en: 'Sourdough starter', fr: 'Levain', es: 'Masa madre', de: 'Sauerteig' },
};

const RICETTE = [
  {
    // Reg. (UE) n. 97/2010, allegato: per 1 L d'acqua 50–55 g di sale marino, 3 g di lievito, 1,8 kg di farina;
    // impasto 10 + 20 min, lievitazione 2 h + 4–6 h, panetti da 180–250 g, cottura a circa 485 °C per 60–90 s
    id: 'pizza-napoletana',
    categoria: 'pizza',
    titolo: { it: 'Pizza Napoletana STG', en: 'Pizza Napoletana TSG', fr: 'Pizza Napoletana STG',
              es: 'Pizza Napoletana ETG', de: 'Pizza Napoletana g.t.S.' },
    descrizione: {
      it: 'Impasto lievitato in due fasi, panetti da 180–250 g, cottura in forno a legna a circa 485 °C per 60–90 secondi.',
      en: 'Dough leavened in two stages, 180–250 g balls, baked in a wood-fired oven at about 485 °C for 60–90 seconds.',
      fr: 'Pâte levée en deux phases, pâtons de 180 à 250 g, cuisson au feu de bois à environ 485 °C pendant 60 à 90 secondes.',
      es: 'Masa fermentada en dos fases, bolas de 180–250 g, cocción en horno de leña a unos 485 °C durante 60–90 segundos.',
      de: 'Teig mit zweistufiger Gare, Teiglinge von 180–250 g, gebacken im Holzofen bei etwa 485 °C für 60–90 Sekunden.',
    },
    ingredienti: ['farinaTenero', 'acqua', 'saleMarino', 'lievitoBirra'],
    tempo: { min: 390, max: 510 }, // 30 min di impasto + 2 h + 4–6 h; la cottura dura meno di 2 minuti
    fonte: { nome: 'Reg. (UE) n. 97/2010', url: 'https://eur-lex.europa.eu/eli/reg/2010/97/oj' },
    immagine: null,
  },
  {
    // Disciplinare DOP, art. 6: per 100 kg di semola 20 kg di lievito naturale, 2 kg di sale marino, 60 L d'acqua a 18 °C;
    // impasto 20 min, riposo ≥ 90 min, modellatura + 30 min, rimodellatura + ≥ 15 min, forno a 250 °C 15 + 45 min,
    // 5 min a bocca aperta; art. 7: pagnotte da almeno 0,5 kg
    id: 'pane-altamura',
    categoria: 'pane',
    titolo: { it: 'Pane di Altamura DOP', en: 'Pane di Altamura PDO', fr: 'Pane di Altamura AOP',
              es: 'Pane di Altamura DOP', de: 'Pane di Altamura g.U.' },
    descrizione: {
      it: 'Pane di semola rimacinata di grano duro a lievito madre, in pagnotte da almeno 0,5 kg, cotto a 250 °C. ' +
          'Il tempo non comprende i rinfreschi del lievito madre.',
      en: 'Re-milled durum wheat semolina bread made with sourdough, in loaves of at least 0.5 kg, baked at 250 °C. ' +
          'The time does not include refreshing the starter.',
      fr: "Pain de semoule de blé dur remoulue au levain, en miches d'au moins 0,5 kg, cuit à 250 °C. " +
          'La durée ne comprend pas les rafraîchis du levain.',
      es: 'Pan de sémola remolida de trigo duro con masa madre, en hogazas de al menos 0,5 kg, cocido a 250 °C. ' +
          'El tiempo no incluye los refrescos de la masa madre.',
      de: 'Brot aus doppelt gemahlenem Hartweizengrieß mit Sauerteig, Laibe von mindestens 0,5 kg, gebacken bei 250 °C. ' +
          'Die Zeit enthält nicht das Auffrischen des Sauerteigs.',
    },
    ingredienti: ['semolaRimacinata', 'lievitoMadre', 'saleMarino', 'acqua'],
    tempo: { min: 220, almeno: true }, // 20 + 90 + 30 + 15 + 60 + 5 min
    fonte: {
      nome: 'Disciplinare DOP «Pane di Altamura»',
      url: 'https://ec.europa.eu/geographical-indications-register/eambrosia-public-api/api/v1/attachments/59722',
    },
    immagine: null,
  },
  {
    // Disciplinare DOP, art. 5.3: biga con almeno 500 ml d'acqua e 200 g di lievito madre per kg di farina, riposo ≥ 8 h;
    // impasto con almeno 550 ml d'acqua e 200 g di biga per kg, riposo ≥ 20 min, spezzatura + ≥ 15 min,
    // lievitazione dei panetti ≥ 2 h 30 min; senza sale; art. 2: filoncino 0,45–0,55 kg, filone 0,90–1,10 o 1,80–2,20 kg.
    // Il disciplinare non indica temperatura e durata della cottura.
    id: 'pane-toscano',
    categoria: 'pane',
    titolo: { it: 'Pane Toscano DOP', en: 'Pane Toscano PDO', fr: 'Pane Toscano AOP',
              es: 'Pane Toscano DOP', de: 'Pane Toscano g.U.' },
    descrizione: {
      it: 'Pane senza sale a lievito madre, con una biga di almeno 8 ore, in filoncini da 0,45–0,55 kg o filoni più grandi. ' +
          'Il disciplinare non indica la cottura, esclusa dal tempo.',
      en: 'Salt-free sourdough bread with a biga of at least 8 hours, shaped into 0.45–0.55 kg filoncini or larger filoni. ' +
          'The specification does not state the baking, which is excluded from the time.',
      fr: "Pain sans sel au levain, avec une biga d'au moins 8 heures, en filoncini de 0,45 à 0,55 kg ou en filoni plus grands. " +
          "Le cahier des charges n'indique pas la cuisson, exclue de la durée.",
      es: 'Pan sin sal con masa madre y una biga de al menos 8 horas, en filoncini de 0,45–0,55 kg o filoni más grandes. ' +
          'El pliego no indica la cocción, excluida del tiempo.',
      de: 'Salzloses Sauerteigbrot mit einer Biga von mindestens 8 Stunden, als Filoncini von 0,45–0,55 kg oder größere Filoni. ' +
          'Die Spezifikation nennt das Backen nicht; es ist in der Zeit nicht enthalten.',
    },
    ingredienti: ['farinaTenero0', 'acqua', 'lievitoMadre'],
    tempo: { min: 665, almeno: true }, // 8 h + 20 + 15 min + 2 h 30 min
    fonte: {
      nome: 'Disciplinare DOP «Pane Toscano»',
      url: 'https://www.panetoscanodop.it/media/Disciplinare_Pane_Toscano_DOP.pdf',
    },
    immagine: null,
  },
];
