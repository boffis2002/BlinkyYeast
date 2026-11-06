// Dettaglio della ricetta «maritozzi-barone»: quantità, dosi, note e procedimento (vedi ricette.js per le regole).
DETTAGLI['maritozzi-barone'] = {
  pezzi: {
    numero: 12, peso: 80,
    nota: {
      it: 'La ricetta è per 12 maritozzi, con palline da 80 g.',
      en: 'The recipe makes 12 maritozzi, from 80 g balls.',
      fr: 'La recette donne 12 maritozzi, avec des boules de 80 g.',
      es: 'La receta es para 12 maritozzi, con bolas de 80 g.',
      de: 'Das Rezept ergibt 12 Maritozzi aus Teigkugeln von 80 g.',
    },
  },
  dosi: [
    { nome: GRUPPI.impasto,
      ingredienti: [['farinaForte', 500], ['latte', 150], ['zucchero', 100], ['acqua', 100], ['burro', 90],
                    ['uova', 110], ['lievitoBirra', 8], ['sale', 8], ['miele'], ['scorzaLimone']] },
    { nome: GRUPPI.ganache, fuoriPeso: true,
      ingredienti: [['massaCacao', 400], ['panna', 200], ['zuccheroPanela', 80], ['scorzaArancia']] },
  ],
  notaDosi: {
    it: "Per 12 maritozzi servono 2 uova medie (qui 55 g l'una), un cucchiaino di miele e la scorza di un limone; " +
        "nella ganache la scorza di un'arancia. La ganache non conta nel peso. La ricetta li serve con una zuppa di " +
        'latte di capra, qui omessa.',
    en: 'For 12 maritozzi you need 2 medium eggs (55 g each here), a teaspoon of honey and the zest of one lemon; the ' +
        'ganache takes the zest of one orange. The ganache is not counted in the weight. The recipe serves them with ' +
        "a goat's milk soup, left out here.",
    fr: 'Pour 12 maritozzi, il faut 2 œufs moyens (ici 55 g chacun), une cuillère à café de miel et le zeste d’un ' +
        'citron ; la ganache prend le zeste d’une orange. La ganache ne compte pas dans le poids. La recette les sert ' +
        'avec une soupe de lait de chèvre, omise ici.',
    es: 'Para 12 maritozzi hacen falta 2 huevos medianos (aquí 55 g cada uno), una cucharadita de miel y la ralladura ' +
        'de un limón; la ganache lleva la ralladura de una naranja. La ganache no cuenta en el peso. La receta los ' +
        'sirve con una sopa de leche de cabra, aquí omitida.',
    de: 'Für 12 Maritozzi braucht man 2 mittlere Eier (hier je 55 g), einen Teelöffel Honig und die Schale einer ' +
        'Zitrone; die Ganache bekommt die Schale einer Orange. Die Ganache zählt nicht zum Gewicht. Das Rezept serviert ' +
        'sie mit einer Ziegenmilchsuppe, die hier weggelassen ist.',
  },
  passi: [
    { it: 'Lievitino: mescolare un quinto della farina con il lievito, tutta l’acqua e un cucchiaino di zucchero; ' +
          'coprire con pellicola e lasciar raddoppiare.',
      en: 'Starter dough: mix a fifth of the flour with the yeast, all the water and a teaspoon of sugar; cover with ' +
          'cling film and let it double.',
      fr: 'Levain express : mélanger un cinquième de la farine avec la levure, toute l’eau et une cuillère à café de ' +
          'sucre ; couvrir de film et laisser doubler.',
      es: 'Prefermento: mezclar una quinta parte de la harina con la levadura, toda el agua y una cucharadita de ' +
          'azúcar; tapar con film y dejar que doble.',
      de: 'Vorteig: Ein Fünftel des Mehls mit der Hefe, dem ganzen Wasser und einem Teelöffel Zucker mischen; mit ' +
          'Folie abdecken und auf das Doppelte gehen lassen.' },
    { it: 'In planetaria con la foglia aggiungere la farina rimasta, lo zucchero, il latte, la scorza di limone e il ' +
          'miele; unire le uova una alla volta e il burro morbido, e impastare finché l’impasto si incorda. Unire il ' +
          'sale e continuare a velocità media.',
      en: 'In the stand mixer with the paddle add the remaining flour, sugar, milk, lemon zest and honey; add the eggs ' +
          'one at a time and the soft butter, and mix until the dough comes together. Add the salt and keep mixing at ' +
          'medium speed.',
      fr: 'Au robot avec la feuille, ajouter le reste de farine, le sucre, le lait, le zeste de citron et le miel ; ' +
          'incorporer les œufs un à un et le beurre mou, et pétrir jusqu’à ce que la pâte se corde. Ajouter le sel et ' +
          'continuer à vitesse moyenne.',
      es: 'En la batidora con la pala añadir la harina restante, el azúcar, la leche, la ralladura de limón y la miel; ' +
          'incorporar los huevos de uno en uno y la mantequilla blanda, y amasar hasta que la masa ligue. Añadir la sal ' +
          'y seguir a velocidad media.',
      de: 'In der Küchenmaschine mit dem Flachrührer restliches Mehl, Zucker, Milch, Zitronenschale und Honig ' +
          'zugeben; die Eier einzeln und die weiche Butter einarbeiten und kneten, bis der Teig bindet. Salz zugeben ' +
          'und auf mittlerer Stufe weiterkneten.' },
    { it: "Rovesciare l'impasto, morbido e liscio, sul piano, dare qualche piega con le mani infarinate e pirlarlo.",
      en: 'Turn the soft, smooth dough out onto the work surface, give it a few folds with floured hands and round it.',
      fr: 'Renverser la pâte, souple et lisse, sur le plan de travail, lui donner quelques rabats avec les mains ' +
          'farinées et la bouler.',
      es: 'Volcar la masa, blanda y lisa, sobre la mesa, darle unos pliegues con las manos enharinadas y bolearla.',
      de: 'Den weichen, glatten Teig auf die Arbeitsfläche geben, mit bemehlten Händen einige Male falten und rund wirken.' },
    { it: 'Lasciarlo triplicare, poi dividerlo in palline da 80 g e lasciarle raddoppiare.',
      en: 'Let it triple, then divide it into 80 g balls and let them double.',
      fr: 'La laisser tripler, puis la diviser en boules de 80 g et les laisser doubler.',
      es: 'Dejar que triplique, luego dividirla en bolas de 80 g y dejar que doblen.',
      de: 'Auf das Dreifache gehen lassen, dann in Kugeln von 80 g teilen und auf das Doppelte gehen lassen.' },
    { it: 'Cuocere in forno statico a 180 °C per circa 25 minuti.',
      en: 'Bake in a conventional oven at 180 °C for about 25 minutes.',
      fr: 'Cuire au four statique à 180 °C pendant environ 25 minutes.',
      es: 'Hornear en horno estático a 180 °C durante unos 25 minutos.',
      de: 'Bei 180 °C Ober-/Unterhitze etwa 25 Minuten backen.' },
    { it: "Ganache: scaldare la panna con la scorza d'arancia, unirla alla massa di cacao e allo zucchero e mescolare " +
          'fino a un composto liscio. Farcire i maritozzi.',
      en: 'Ganache: heat the cream with the orange zest, pour it over the cocoa mass and sugar and stir until smooth. ' +
          'Fill the maritozzi.',
      fr: 'Ganache : chauffer la crème avec le zeste d’orange, l’ajouter à la pâte de cacao et au sucre et mélanger ' +
          'jusqu’à obtenir un mélange lisse. Garnir les maritozzi.',
      es: 'Ganache: calentar la nata con la ralladura de naranja, unirla a la pasta de cacao y al azúcar y mezclar ' +
          'hasta que quede lisa. Rellenar los maritozzi.',
      de: 'Ganache: Die Sahne mit der Orangenschale erhitzen, zur Kakaomasse und zum Zucker geben und glatt rühren. ' +
          'Die Maritozzi füllen.' },
  ],

};
