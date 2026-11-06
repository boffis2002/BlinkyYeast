// Dettaglio della ricetta «calzone-siciliano-schmuck»: quantità, dosi, note e procedimento (vedi ricette.js per le regole).
DETTAGLI['calzone-siciliano-schmuck'] = {
  pezzi: {
    numero: 4, peso: 423,
    nota: {
      it: 'La ricetta è per 4 calzoni grandi. Il ripieno non conta nel peso dei panetti.',
      en: 'The recipe makes 4 large calzoni. The filling is not counted in the weight of the dough balls.',
      fr: 'La recette donne 4 grands calzoni. La garniture ne compte pas dans le poids des pâtons.',
      es: 'La receta es para 4 calzoni grandes. El relleno no cuenta en el peso de las bolas.',
      de: 'Das Rezept ergibt 4 große Calzoni. Die Füllung zählt nicht zum Gewicht der Teiglinge.',
    },
  },
  dosi: [
    { nome: GRUPPI.impasto,
      ingredienti: [['farinaTenero', 900], ['farinaGranoDuro', 100], ['acqua', 650], ['lievitoBirra', 3], ['sale', 20], ['olioEvo', 20]] },
    { nome: GRUPPI.ripieno, fuoriPeso: true,
      ingredienti: [['senape', 800], ['pomodoriSecchi', 200], ['tuma', 400], ['porchetta', 400], ['semiSesamo'], ['aglio'], ['olioSesamo'], ['acciughe']] },
  ],
  notaDosi: {
    it: 'La farina di grano tenero ideale è siciliana di varietà Maiorca, quella di grano duro Timilia; il sesamo di Ispica, l’aglio di Nubia. Della senape si usano le foglie; il pomodoro è ciliegino secco e la tuma è fresca e senza sale.',
    en: 'The ideal soft wheat flour is Sicilian Maiorca, the durum wheat Timilia; Ispica sesame, Nubia garlic. Only the mustard leaves are used; the tomatoes are dried cherry tomatoes and the tuma is fresh and unsalted.',
    fr: 'La farine de blé tendre idéale est sicilienne de variété Maiorca, celle de blé dur Timilia ; sésame d’Ispica, ail de Nubia. On utilise les feuilles de moutarde ; la tomate est cerise séchée et la tuma fraîche et sans sel.',
    es: 'La harina de trigo blando ideal es siciliana de la variedad Maiorca, la de trigo duro Timilia; sésamo de Ispica, ajo de Nubia. De la mostaza se usan las hojas; el tomate es cherry seco y la tuma fresca y sin sal.',
    de: 'Ideal ist sizilianisches Weichweizenmehl der Sorte Maiorca und Hartweizen Timilia; Sesam aus Ispica, Knoblauch aus Nubia. Vom Senf werden die Blätter verwendet; die Tomaten sind getrocknete Kirschtomaten, der Tuma ist frisch und ungesalzen.',
  },
  passi: [
    {
      it: 'In planetaria impastare le farine con circa il 77% dell’acqua a velocità media finché è assorbita, poi lasciar riposare 20 minuti.',
      en: 'In the stand mixer mix the flours with about 77% of the water at medium speed until absorbed, then rest for 20 minutes.',
      fr: 'Au robot, pétrir les farines avec environ 77 % de l’eau à vitesse moyenne jusqu’à absorption, puis laisser reposer 20 minutes.',
      es: 'En la batidora amasar las harinas con un 77 % del agua a velocidad media hasta que se absorba y dejar reposar 20 minutos.',
      de: 'In der Küchenmaschine die Mehle mit etwa 77 % des Wassers auf mittlerer Stufe kneten, bis es aufgenommen ist, dann 20 Minuten ruhen lassen.',
    },
    {
      it: 'Aggiungere il lievito, versare a filo l’acqua rimanente con il sale e infine l’olio.',
      en: 'Add the yeast, trickle in the remaining water with the salt and finally the oil.',
      fr: 'Ajouter la levure, verser en filet le reste de l’eau avec le sel et enfin l’huile.',
      es: 'Añadir la levadura, verter en hilo el agua restante con la sal y por último el aceite.',
      de: 'Die Hefe zugeben, das restliche Wasser mit dem Salz einlaufen lassen und zuletzt das Öl.',
    },
    {
      it: 'Lasciar riposare a temperatura ambiente 2–3 ore con 2 pieghe, una ogni mezz’ora, finché è cresciuto di 2 cm; poi formare le palline e lasciarle riposare altre 2 ore.',
      en: 'Rest at room temperature for 2–3 hours with 2 folds, one every half hour, until it has risen by 2 cm; then shape the balls and rest them 2 more hours.',
      fr: 'Laisser reposer 2 à 3 heures à température ambiante avec 2 rabats, un toutes les demi-heures, jusqu’à ce qu’elle ait monté de 2 cm ; former ensuite les pâtons et les laisser reposer encore 2 heures.',
      es: 'Dejar reposar 2–3 horas a temperatura ambiente con 2 pliegues, uno cada media hora, hasta que crezca 2 cm; luego formar las bolas y dejarlas reposar otras 2 horas.',
      de: '2–3 Stunden bei Raumtemperatur mit 2 Faltungen im Halbstundentakt ruhen lassen, bis der Teig 2 cm gestiegen ist; dann Kugeln formen und weitere 2 Stunden ruhen lassen.',
    },
    {
      it: 'Sbollentare qualche minuto le foglie di senape e saltarle in padella con olio di sesamo, aglio e un’acciuga.',
      en: 'Blanch the mustard leaves for a few minutes and sauté them with sesame oil, garlic and an anchovy.',
      fr: 'Blanchir quelques minutes les feuilles de moutarde et les faire sauter avec huile de sésame, ail et un anchois.',
      es: 'Escaldar unos minutos las hojas de mostaza y saltearlas con aceite de sésamo, ajo y una anchoa.',
      de: 'Die Senfblätter einige Minuten blanchieren und mit Sesamöl, Knoblauch und einer Sardelle dünsten.',
    },
    {
      it: 'Stendere la pasta con i polpastrelli in forma ovale e farcire con senape, pomodoro, porchetta e per ultima la tuma; chiudere, cospargere di sesamo e bucare la superficie.',
      en: 'Press the dough with your fingertips into an oval and fill with the mustard greens, tomato, porchetta and finally the tuma; close, sprinkle with sesame and prick the top.',
      fr: 'Étaler la pâte du bout des doigts en ovale et garnir de moutarde, tomate, porchetta et enfin la tuma ; fermer, parsemer de sésame et piquer le dessus.',
      es: 'Estirar la masa con las yemas de los dedos en forma ovalada y rellenar con mostaza, tomate, porchetta y por último la tuma; cerrar, espolvorear con sésamo y pinchar la superficie.',
      de: 'Den Teig mit den Fingerspitzen oval ausbreiten und mit Senfkraut, Tomaten, Porchetta und zuletzt Tuma füllen; schließen, mit Sesam bestreuen und die Oberfläche einstechen.',
    },
    {
      it: 'Cuocere in teglia alla massima temperatura, nella parte bassa del forno, per 5 minuti, fino a doratura.',
      en: 'Bake on a tray at maximum temperature in the bottom of the oven for 5 minutes, until golden.',
      fr: 'Cuire sur plaque à température maximale, en bas du four, 5 minutes, jusqu’à dorure.',
      es: 'Hornear en bandeja a la temperatura máxima, en la parte baja del horno, 5 minutos, hasta que se dore.',
      de: 'Auf einem Blech bei Höchsttemperatur im unteren Ofenbereich 5 Minuten goldbraun backen.',
    },
  ],
};
