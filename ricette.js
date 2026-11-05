// Ricette tratte da disciplinari ufficiali (STG, DOP): ogni dato viene dalla fonte indicata.
// Il tempo è in minuti, dall'impasto alla fine della cottura; `almeno` se il disciplinare dà solo minimi.
// Le dosi sono proporzioni: [ingrediente, quantità] o [ingrediente, minimo, massimo] se il disciplinare dà un intervallo.
// Un gruppo con `da` (per esempio la biga) si prepara a parte, nella quantità che serve al gruppo principale.

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
  biga: { it: 'Biga', en: 'Biga', fr: 'Biga', es: 'Biga', de: 'Biga' },
};

// nomi dei gruppi di dosi
const GRUPPI = {
  impasto: { it: 'Impasto', en: 'Dough', fr: 'Pâte', es: 'Masa', de: 'Teig' },
  biga: { it: 'Biga', en: 'Biga', fr: 'Biga', es: 'Biga', de: 'Biga' },
};

const RICETTE = [
  {
    // Reg. (UE) n. 97/2010, allegato: per 1 L d'acqua 50–55 g di sale marino, 3 g di lievito, 1,8 kg di farina;
    // impasto 10 + 20 min, lievitazione 2 h + 4–6 h, panetti da 180–250 g, disco fino a 35 cm spesso 0,4 cm ± 10%
    // con cornicione di 1–2 cm, senza mattarello; cottura a circa 485 °C per 60–90 s
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
    pezzi: {
      numero: 4, peso: 250,
      nota: {
        it: 'Il disciplinare prevede panetti da 180 a 250 g.',
        en: 'The specification calls for dough balls of 180 to 250 g.',
        fr: 'Le cahier des charges prévoit des pâtons de 180 à 250 g.',
        es: 'El pliego prevé bolas de 180 a 250 g.',
        de: 'Die Spezifikation sieht Teiglinge von 180 bis 250 g vor.',
      },
    },
    dosi: [
      { nome: GRUPPI.impasto,
        ingredienti: [['farinaTenero', 1800], ['acqua', 1000], ['saleMarino', 50, 55], ['lievitoBirra', 3]] },
    ],
    notaDosi: {
      it: "Per 1 litro d'acqua: 1,8 kg di farina, 50–55 g di sale marino e 3 g di lievito di birra. Il regolamento non " +
          "chiarisce se gli 1,8 kg comprendano il 10% di farina aggiunto all'inizio: qui sono il totale.",
      en: "Per litre of water: 1.8 kg of flour, 50–55 g of sea salt and 3 g of brewer's yeast. The regulation does not " +
          'say whether the 1.8 kg includes the 10% of flour added first: here it is the total.',
      fr: "Pour 1 litre d'eau : 1,8 kg de farine, 50 à 55 g de sel marin et 3 g de levure. Le règlement ne précise pas " +
          "si les 1,8 kg comprennent les 10 % de farine ajoutés au début : ici, c'est le total.",
      es: 'Por 1 litro de agua: 1,8 kg de harina, 50–55 g de sal marina y 3 g de levadura de cerveza. El reglamento no ' +
          'aclara si los 1,8 kg incluyen el 10 % de harina añadido al principio: aquí son el total.',
      de: 'Pro Liter Wasser: 1,8 kg Mehl, 50–55 g Meersalz und 3 g Backhefe. Die Verordnung sagt nicht, ob die 1,8 kg ' +
          'die zuerst zugegebenen 10 % Mehl enthalten: hier sind sie die Gesamtmenge.',
    },
    passi: [
      { it: "Versare 1 litro d'acqua nell'impastatrice e sciogliervi 50–55 g di sale marino. Aggiungere il 10% della " +
            'farina, poi sciogliere 3 g di lievito di birra.',
        en: 'Pour 1 litre of water into the mixer and dissolve 50–55 g of sea salt in it. Add 10% of the flour, then ' +
            "dissolve 3 g of brewer's yeast.",
        fr: "Verser 1 litre d'eau dans le pétrin et y dissoudre 50 à 55 g de sel marin. Ajouter 10 % de la farine, " +
            'puis dissoudre 3 g de levure de boulanger.',
        es: 'Verter 1 litro de agua en la amasadora y disolver 50–55 g de sal marina. Añadir el 10 % de la harina y ' +
            'luego disolver 3 g de levadura de cerveza.',
        de: '1 Liter Wasser in die Knetmaschine geben und darin 50–55 g Meersalz auflösen. 10 % des Mehls zugeben, ' +
            'dann 3 g Backhefe auflösen.' },
      { it: "Avviare l'impastatrice e aggiungere gradualmente la farina (W 220–380) fino al «punto pasta», in circa 10 minuti.",
        en: 'Start the mixer and gradually add the flour (W 220–380) until the dough point, in about 10 minutes.',
        fr: "Mettre le pétrin en marche et ajouter progressivement la farine (W 220–380) jusqu'au « point de pâte », " +
            'en 10 minutes environ.',
        es: 'Poner en marcha la amasadora y añadir poco a poco la harina (W 220–380) hasta el «punto de masa», ' +
            'en unos 10 minutos.',
        de: 'Die Maschine starten und das Mehl (W 220–380) nach und nach zugeben, bis der Teig die richtige Konsistenz ' +
            'hat, in etwa 10 Minuten.' },
      { it: 'Impastare per 20 minuti a bassa velocità.',
        en: 'Knead for 20 minutes at low speed.',
        fr: 'Pétrir 20 minutes à vitesse lente.',
        es: 'Amasar 20 minutos a velocidad baja.',
        de: '20 Minuten bei niedriger Geschwindigkeit kneten.' },
      { it: 'Prima lievitazione: 2 ore sul banco, coperto da un panno umido.',
        en: 'First rise: 2 hours on the work surface, covered with a damp cloth.',
        fr: 'Première pousse : 2 heures sur le plan de travail, sous un linge humide.',
        es: 'Primera fermentación: 2 horas sobre la mesa, cubierta con un paño húmedo.',
        de: 'Erste Gare: 2 Stunden auf der Arbeitsfläche, mit einem feuchten Tuch bedeckt.' },
      { it: 'Formare a mano i panetti da 180–250 g e lasciarli lievitare 4–6 ore in cassette a temperatura ambiente. ' +
            'Usarli entro le 6 ore successive.',
        en: 'Shape the 180–250 g balls by hand and let them rise for 4–6 hours in containers at room temperature. ' +
            'Use them within the next 6 hours.',
        fr: 'Former à la main les pâtons de 180 à 250 g et les laisser lever 4 à 6 heures en bacs à température ' +
            'ambiante. Les utiliser dans les 6 heures suivantes.',
        es: 'Formar a mano las bolas de 180–250 g y dejarlas fermentar 4–6 horas en cajas a temperatura ambiente. ' +
            'Usarlas en las 6 horas siguientes.',
        de: 'Teiglinge von 180–250 g von Hand formen und 4–6 Stunden in Behältern bei Raumtemperatur gehen lassen. ' +
            'Innerhalb der folgenden 6 Stunden verwenden.' },
      { it: 'Stendere il panetto solo a mano, senza mattarello: un disco fino a 35 cm, spesso 0,4 cm al centro, con un ' +
            'cornicione di 1–2 cm.',
        en: 'Stretch the ball by hand only, without a rolling pin: a disc up to 35 cm, 0.4 cm thick in the centre, ' +
            'with a 1–2 cm rim.',
        fr: 'Étaler le pâton uniquement à la main, sans rouleau : un disque de 35 cm au plus, épais de 0,4 cm au ' +
            'centre, avec un bord de 1 à 2 cm.',
        es: 'Estirar la bola solo a mano, sin rodillo: un disco de hasta 35 cm, de 0,4 cm de grosor en el centro, ' +
            'con un borde de 1–2 cm.',
        de: 'Den Teigling nur von Hand ausbreiten, ohne Nudelholz: eine Scheibe bis 35 cm, in der Mitte 0,4 cm dick, ' +
            'mit einem Rand von 1–2 cm.' },
      { it: 'Cuocere in forno a legna a circa 485 °C per 60–90 secondi.',
        en: 'Bake in a wood-fired oven at about 485 °C for 60–90 seconds.',
        fr: 'Cuire au four à bois à environ 485 °C pendant 60 à 90 secondes.',
        es: 'Hornear en horno de leña a unos 485 °C durante 60–90 segundos.',
        de: 'Im Holzofen bei etwa 485 °C 60–90 Sekunden backen.' },
    ],
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
    pezzi: {
      numero: 1, peso: 1000,
      nota: {
        it: "Il disciplinare prevede pagnotte da almeno 0,5 kg di pane cotto, ma non indica quanto peso perde l'impasto " +
            'in cottura: qui si sceglie il peso dell\'impasto.',
        en: 'The specification calls for loaves of at least 0.5 kg of baked bread, but does not say how much weight the ' +
            'dough loses in baking: here you choose the dough weight.',
        fr: "Le cahier des charges prévoit des miches d'au moins 0,5 kg de pain cuit, mais n'indique pas la perte de " +
            'poids à la cuisson : ici, on choisit le poids de pâte.',
        es: 'El pliego prevé hogazas de al menos 0,5 kg de pan cocido, pero no indica cuánto peso pierde la masa al ' +
            'hornearse: aquí se elige el peso de la masa.',
        de: 'Die Spezifikation sieht Laibe von mindestens 0,5 kg gebackenem Brot vor, nennt aber nicht den ' +
            'Gewichtsverlust beim Backen: hier wählt man das Teiggewicht.',
      },
    },
    dosi: [
      { nome: GRUPPI.impasto,
        ingredienti: [['semolaRimacinata', 100], ['lievitoMadre', 20], ['saleMarino', 2], ['acqua', 60]] },
    ],
    notaDosi: {
      it: "Per 100 kg di semola: 20 kg di lievito madre, 2 kg di sale marino e circa 60 litri d'acqua a 18 °C.",
      en: 'Per 100 kg of semolina: 20 kg of sourdough starter, 2 kg of sea salt and about 60 litres of water at 18 °C.',
      fr: "Pour 100 kg de semoule : 20 kg de levain, 2 kg de sel marin et environ 60 litres d'eau à 18 °C.",
      es: 'Por 100 kg de sémola: 20 kg de masa madre, 2 kg de sal marina y unos 60 litros de agua a 18 °C.',
      de: 'Pro 100 kg Grieß: 20 kg Sauerteig, 2 kg Meersalz und etwa 60 Liter Wasser mit 18 °C.',
    },
    passi: [
      { it: 'Preparare il lievito madre con almeno tre rinfreschi di acqua e semola di grano duro.',
        en: 'Build the sourdough starter with at least three refreshments of water and durum wheat semolina.',
        fr: "Préparer le levain avec au moins trois rafraîchis d'eau et de semoule de blé dur.",
        es: 'Preparar la masa madre con al menos tres refrescos de agua y sémola de trigo duro.',
        de: 'Den Sauerteig mit mindestens drei Auffrischungen aus Wasser und Hartweizengrieß ansetzen.' },
      { it: "Impastare semola, lievito madre, sale marino e acqua a 18 °C per 20 minuti, con un'impastatrice a bracci tuffanti.",
        en: 'Mix semolina, starter, sea salt and water at 18 °C for 20 minutes in a plunging-arm mixer.',
        fr: 'Pétrir semoule, levain, sel marin et eau à 18 °C pendant 20 minutes, dans un pétrin à bras plongeants.',
        es: 'Amasar sémola, masa madre, sal marina y agua a 18 °C durante 20 minutos, con una amasadora de brazos.',
        de: 'Grieß, Sauerteig, Meersalz und Wasser mit 18 °C 20 Minuten in einer Knetmaschine mit Tauchknetarmen kneten.' },
      { it: "Coprire l'impasto con un telo di cotone spesso e lasciarlo riposare almeno 90 minuti.",
        en: 'Cover the dough with a thick cotton cloth and let it rest for at least 90 minutes.',
        fr: "Couvrir la pâte d'un linge de coton épais et la laisser reposer au moins 90 minutes.",
        es: 'Cubrir la masa con un paño de algodón grueso y dejarla reposar al menos 90 minutos.',
        de: 'Den Teig mit einem dicken Baumwolltuch abdecken und mindestens 90 Minuten ruhen lassen.' },
      { it: 'Pesare e modellare a mano le pagnotte, poi lasciarle riposare 30 minuti.',
        en: 'Weigh and shape the loaves by hand, then let them rest for 30 minutes.',
        fr: 'Peser et façonner les miches à la main, puis les laisser reposer 30 minutes.',
        es: 'Pesar y formar a mano las hogazas, luego dejarlas reposar 30 minutos.',
        de: 'Die Laibe abwiegen und von Hand formen, dann 30 Minuten ruhen lassen.' },
      { it: 'Rimodellare a mano e lasciar riposare almeno 15 minuti.',
        en: 'Reshape by hand and let rest for at least 15 minutes.',
        fr: 'Refaçonner à la main et laisser reposer au moins 15 minutes.',
        es: 'Volver a formarlas a mano y dejarlas reposar al menos 15 minutos.',
        de: 'Von Hand nachformen und mindestens 15 Minuten ruhen lassen.' },
      { it: 'Capovolgere la pagnotta e infornare a 250 °C: 15 minuti a forno aperto, poi 45 minuti a forno chiuso.',
        en: 'Turn the loaf over and bake at 250 °C: 15 minutes with the oven open, then 45 minutes with it closed.',
        fr: 'Retourner la miche et enfourner à 250 °C : 15 minutes four ouvert, puis 45 minutes four fermé.',
        es: 'Dar la vuelta a la hogaza y hornear a 250 °C: 15 minutos con el horno abierto y luego 45 minutos cerrado.',
        de: 'Den Laib wenden und bei 250 °C backen: 15 Minuten bei offenem Ofen, dann 45 Minuten bei geschlossenem.' },
      { it: 'Lasciare la bocca del forno aperta almeno 5 minuti per far uscire il vapore, poi sfornare su assi di legno.',
        en: 'Leave the oven mouth open for at least 5 minutes to let the steam out, then unload onto wooden boards.',
        fr: 'Laisser la bouche du four ouverte au moins 5 minutes pour évacuer la vapeur, puis défourner sur des ' +
            'planches en bois.',
        es: 'Dejar la boca del horno abierta al menos 5 minutos para que salga el vapor y luego deshornear sobre ' +
            'tablas de madera.',
        de: 'Die Ofenöffnung mindestens 5 Minuten offen lassen, damit der Dampf entweicht, dann auf Holzbretter legen.' },
    ],
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
    pezzi: {
      numero: 1, peso: 600,
      nota: {
        it: 'Il disciplinare prevede pane cotto da 0,45–0,55 kg (filoncino) o da 0,90–1,10 e 1,80–2,20 kg (filone), ' +
            "ma non indica quanto peso perde l'impasto in cottura: qui si sceglie il peso dell'impasto.",
        en: 'The specification calls for baked bread of 0.45–0.55 kg (filoncino) or 0.90–1.10 and 1.80–2.20 kg (filone), ' +
            'but does not say how much weight the dough loses in baking: here you choose the dough weight.',
        fr: 'Le cahier des charges prévoit un pain cuit de 0,45 à 0,55 kg (filoncino) ou de 0,90 à 1,10 et 1,80 à 2,20 kg ' +
            "(filone), mais n'indique pas la perte de poids à la cuisson : ici, on choisit le poids de pâte.",
        es: 'El pliego prevé pan cocido de 0,45–0,55 kg (filoncino) o de 0,90–1,10 y 1,80–2,20 kg (filone), pero no ' +
            'indica cuánto peso pierde la masa al hornearse: aquí se elige el peso de la masa.',
        de: 'Die Spezifikation sieht gebackenes Brot von 0,45–0,55 kg (Filoncino) oder 0,90–1,10 und 1,80–2,20 kg ' +
            '(Filone) vor, nennt aber nicht den Gewichtsverlust beim Backen: hier wählt man das Teiggewicht.',
      },
    },
    dosi: [
      { nome: GRUPPI.biga, da: 'biga',
        ingredienti: [['farinaTenero0', 1000], ['acqua', 500], ['lievitoMadre', 200]] },
      { nome: GRUPPI.impasto,
        ingredienti: [['farinaTenero0', 1000], ['acqua', 550], ['biga', 200]] },
    ],
    notaDosi: {
      it: "Il disciplinare fissa dei minimi: per la biga almeno 500 ml d'acqua e 200 g di lievito madre per kg di " +
          "farina, per l'impasto almeno 550 ml d'acqua e 200 g di biga. Qui sono usati i minimi. Senza sale.",
      en: 'The specification sets minimums: for the biga at least 500 ml of water and 200 g of starter per kg of flour, ' +
          'for the dough at least 550 ml of water and 200 g of biga. The minimums are used here. No salt.',
      fr: "Le cahier des charges fixe des minimums : pour la biga au moins 500 ml d'eau et 200 g de levain par kg de " +
          "farine, pour la pâte au moins 550 ml d'eau et 200 g de biga. Les minimums sont utilisés ici. Sans sel.",
      es: 'El pliego fija mínimos: para la biga al menos 500 ml de agua y 200 g de masa madre por kg de harina, para ' +
          'la masa al menos 550 ml de agua y 200 g de biga. Aquí se usan los mínimos. Sin sal.',
      de: 'Die Spezifikation legt Mindestwerte fest: für die Biga mindestens 500 ml Wasser und 200 g Sauerteig pro kg ' +
          'Mehl, für den Teig mindestens 550 ml Wasser und 200 g Biga. Hier werden die Mindestwerte verwendet. Ohne Salz.',
    },
    passi: [
      { it: "Biga: impastare la farina tipo 0 con almeno 500 ml d'acqua e 200 g di lievito madre per kg di farina, " +
            'poi lasciarla riposare almeno 8 ore.',
        en: 'Biga: mix the type 0 flour with at least 500 ml of water and 200 g of starter per kg of flour, then let it ' +
            'rest for at least 8 hours.',
        fr: "Biga : pétrir la farine type 0 avec au moins 500 ml d'eau et 200 g de levain par kg de farine, puis la " +
            'laisser reposer au moins 8 heures.',
        es: 'Biga: amasar la harina tipo 0 con al menos 500 ml de agua y 200 g de masa madre por kg de harina y dejarla ' +
            'reposar al menos 8 horas.',
        de: 'Biga: Das Mehl Type 0 mit mindestens 500 ml Wasser und 200 g Sauerteig pro kg Mehl mischen und mindestens ' +
            '8 Stunden ruhen lassen.' },
      { it: "Impasto: per ogni kg di farina aggiungere almeno 550 ml d'acqua e 200 g di biga, senza sale. " +
            'Si può lavorare a mano o a macchina.',
        en: 'Dough: for each kg of flour add at least 550 ml of water and 200 g of biga, without salt. ' +
            'It can be mixed by hand or by machine.',
        fr: "Pâte : pour chaque kg de farine, ajouter au moins 550 ml d'eau et 200 g de biga, sans sel. " +
            'Le pétrissage peut se faire à la main ou à la machine.',
        es: 'Masa: por cada kg de harina añadir al menos 550 ml de agua y 200 g de biga, sin sal. ' +
            'Se puede amasar a mano o a máquina.',
        de: 'Teig: Pro kg Mehl mindestens 550 ml Wasser und 200 g Biga zugeben, ohne Salz. ' +
            'Er kann von Hand oder mit der Maschine geknetet werden.' },
      { it: "Lasciar riposare l'impasto almeno 20 minuti.",
        en: 'Let the dough rest for at least 20 minutes.',
        fr: 'Laisser reposer la pâte au moins 20 minutes.',
        es: 'Dejar reposar la masa al menos 20 minutos.',
        de: 'Den Teig mindestens 20 Minuten ruhen lassen.' },
      { it: "Dividere l'impasto nelle pezzature volute e lasciar riposare almeno 15 minuti.",
        en: 'Divide the dough into the desired pieces and let rest for at least 15 minutes.',
        fr: 'Diviser la pâte en pâtons du poids voulu et laisser reposer au moins 15 minutes.',
        es: 'Dividir la masa en las piezas deseadas y dejar reposar al menos 15 minutos.',
        de: 'Den Teig in Stücke der gewünschten Größe teilen und mindestens 15 Minuten ruhen lassen.' },
      { it: 'Formare i panetti: filoncino romboidale o filone rettangolare con angoli smussati.',
        en: 'Shape the loaves: a diamond-shaped filoncino or a rectangular filone with rounded corners.',
        fr: 'Façonner les pains : filoncino en losange ou filone rectangulaire aux angles arrondis.',
        es: 'Formar los panes: filoncino romboidal o filone rectangular con esquinas redondeadas.',
        de: 'Die Brote formen: rautenförmiger Filoncino oder rechteckiger Filone mit abgerundeten Ecken.' },
      { it: 'Lasciar lievitare i panetti almeno 2 ore e 30 minuti, fino alla lievitazione ottimale, poi cuocere. ' +
            'Il disciplinare non indica temperatura e durata della cottura.',
        en: 'Let the loaves rise for at least 2 hours and 30 minutes, until optimally proofed, then bake. ' +
            'The specification does not state baking temperature or time.',
        fr: "Laisser lever les pains au moins 2 heures et 30 minutes, jusqu'à la pousse optimale, puis cuire. " +
            "Le cahier des charges n'indique ni la température ni la durée de cuisson.",
        es: 'Dejar fermentar los panes al menos 2 horas y 30 minutos, hasta el punto óptimo, y luego hornear. ' +
            'El pliego no indica la temperatura ni la duración de la cocción.',
        de: 'Die Brote mindestens 2 Stunden und 30 Minuten bis zur optimalen Gare gehen lassen, dann backen. ' +
            'Die Spezifikation nennt weder Backtemperatur noch Backzeit.' },
    ],
  },
];
