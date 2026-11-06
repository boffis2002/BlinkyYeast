// Dettaglio della ricetta «pavlova-berry»: quantità, dosi, note e procedimento (vedi ricette.js per le regole).
DETTAGLI['pavlova-berry'] = {
  pezzi: {
    numero: 1, peso: 560,
    nota: {
      it: 'La ricetta è per una corona di meringa di 30 cm con il centro vuoto di 15 cm, 12–15 porzioni.',
      en: 'The recipe makes one 30 cm meringue ring with a 15 cm hollow centre, serving 12–15.',
      fr: 'La recette donne une couronne de meringue de 30 cm au centre vide de 15 cm, 12 à 15 parts.',
      es: 'La receta es para una corona de merengue de 30 cm con el centro vacío de 15 cm, 12–15 raciones.',
      de: 'Das Rezept ergibt einen 30-cm-Baiserkranz mit 15 cm freier Mitte, 12–15 Stücke.',
    },
  },
  dosi: [
    { nome: GRUPPI.meringa,
      ingredienti: [['albume', 210], ['zucchero', 350], ['acetoVino'], ['amidoMais']] },
    { nome: GRUPPI.farcitura, fuoriPeso: true,
      ingredienti: [['panna', 600], ['estrattoVaniglia'], ['zuccheroVelo', 50]] },
    { nome: GRUPPI.guarnizione, fuoriPeso: true,
      ingredienti: [['fragole', 200], ['lamponi', 300], ['mirtilli', 200], ['melograno', 50], ['menta'], ['zuccheroVelo']] },
  ],
  notaDosi: {
    it: 'Gli albumi sono 6 grandi (qui 35 g l’uno); aceto di vino bianco e amido un cucchiaino ciascuno. La panna è da montare, la vaniglia un cucchiaino di pasta; le fragole sono in quarti, la menta facoltativa. Il tempo comprende un’ora nel forno spento (si può lasciare una notte).',
    en: 'There are 6 large egg whites (35 g each here); a teaspoon each of white wine vinegar and cornflour. The cream is double cream, the vanilla a teaspoon of paste; the strawberries are quartered, the mint optional. The time includes an hour in the switched-off oven (it can be left overnight).',
    fr: 'Il y a 6 gros blancs (ici 35 g chacun) ; une cuillère à café de vinaigre de vin blanc et d’amidon. La crème est épaisse, la vanille une cuillère à café de pâte ; les fraises en quartiers, la menthe facultative. La durée comprend une heure dans le four éteint (on peut laisser une nuit).',
    es: 'Son 6 claras grandes (aquí 35 g cada una); una cucharadita de vinagre de vino blanco y de almidón. La nata es para montar, la vainilla una cucharadita de pasta; las fresas en cuartos y la menta opcional. El tiempo incluye una hora en el horno apagado (se puede dejar una noche).',
    de: 'Es sind 6 große Eiweiß (hier je 35 g); je ein Teelöffel Weißweinessig und Stärke. Die Sahne ist Double Cream, die Vanille ein Teelöffel Paste; die Erdbeeren geviertelt, die Minze nach Belieben. Die Zeit enthält eine Stunde im ausgeschalteten Ofen (gern über Nacht).',
  },
  passi: [
    {
      it: 'Scaldare il forno a 160 °C (140 °C ventilato) e disegnare sulla carta forno un cerchio di 30 cm con dentro uno di 15 cm. Montare gli albumi a punte morbide e aggiungere lo zucchero poco alla volta, alla massima velocità, fino a una meringa soda e lucida.',
      en: 'Heat the oven to 160 °C (140 °C fan) and draw a 30 cm circle with a 15 cm one inside on baking paper. Whisk the whites to soft peaks and add the sugar a little at a time at full speed, to a stiff, glossy meringue.',
      fr: 'Chauffer le four à 160 °C (140 °C chaleur tournante) et tracer sur le papier cuisson un cercle de 30 cm avec un de 15 cm à l’intérieur. Monter les blancs en pics souples et ajouter le sucre peu à peu à pleine vitesse, jusqu’à une meringue ferme et brillante.',
      es: 'Calentar el horno a 160 °C (140 °C con ventilador) y dibujar en el papel un círculo de 30 cm con uno de 15 cm dentro. Montar las claras a picos suaves y añadir el azúcar poco a poco a velocidad máxima, hasta un merengue firme y brillante.',
      de: 'Den Ofen auf 160 °C (140 °C Umluft) heizen und auf Backpapier einen 30-cm-Kreis mit einem 15-cm-Kreis darin zeichnen. Das Eiweiß weich schlagen und den Zucker nach und nach auf höchster Stufe zu einem steifen, glänzenden Baiser einschlagen.',
    },
    {
      it: 'Incorporare aceto e amido stemperati, stendere la meringa sull’anello e scavare un solco con un cucchiaio. Infornare, abbassare subito a 140 °C (120 °C ventilato) e cuocere 1 ora–1 ora e 15, finché è dura fuori ma ancora bianca; lasciarla un’ora nel forno spento.',
      en: 'Fold in the vinegar mixed with the cornflour, spread the meringue on the ring and make a trench with a spoon. Put in the oven, lower at once to 140 °C (120 °C fan) and bake for 1 hour–1 hour 15, until hard outside but still white; leave for an hour in the switched-off oven.',
      fr: 'Incorporer le vinaigre délayé avec l’amidon, étaler la meringue sur l’anneau et creuser une rigole à la cuillère. Enfourner, baisser aussitôt à 140 °C (120 °C chaleur tournante) et cuire 1 h à 1 h 15, jusqu’à ce qu’elle soit dure dehors mais encore blanche ; la laisser une heure dans le four éteint.',
      es: 'Incorporar el vinagre mezclado con el almidón, extender el merengue sobre el anillo y hacer un surco con una cuchara. Hornear, bajar enseguida a 140 °C (120 °C con ventilador) y cocer 1 hora–1 hora y 15, hasta que esté duro por fuera pero aún blanco; dejarlo una hora en el horno apagado.',
      de: 'Essig und Stärke verrührt unterheben, das Baiser auf den Ring streichen und mit einem Löffel eine Mulde formen. In den Ofen schieben, sofort auf 140 °C (120 °C Umluft) herunterschalten und 1 Stunde bis 1 Stunde 15 backen, bis es außen hart, aber noch weiß ist; eine Stunde im ausgeschalteten Ofen lassen.',
    },
    {
      it: 'Montare la panna con vaniglia e zucchero a velo a punte ferme, versarla nel solco e coprire con fragole, lamponi, mirtilli, melograno e menta; spolverare di zucchero a velo.',
      en: 'Whip the cream with the vanilla and icing sugar to stiff peaks, spoon into the trench and top with the strawberries, raspberries, blueberries, pomegranate and mint; dust with icing sugar.',
      fr: 'Fouetter la crème avec vanille et sucre glace en pics fermes, la verser dans la rigole et couvrir de fraises, framboises, myrtilles, grenade et menthe ; saupoudrer de sucre glace.',
      es: 'Montar la nata con la vainilla y el azúcar glas a picos firmes, ponerla en el surco y cubrir con fresas, frambuesas, arándanos, granada y menta; espolvorear azúcar glas.',
      de: 'Die Sahne mit Vanille und Puderzucker steif schlagen, in die Mulde geben und mit Erdbeeren, Himbeeren, Blaubeeren, Granatapfel und Minze belegen; mit Puderzucker bestäuben.',
    },
  ],
};
