// Dettaglio della ricetta «pane-aglio-hollywood»: quantità, dosi, note e procedimento (vedi ricette.js per le regole).
DETTAGLI['pane-aglio-hollywood'] = {
  pezzi: {
    numero: 2, peso: 234,
    nota: {
      it: 'La ricetta è per 2 mini baguette.',
      en: 'The recipe makes 2 mini baguettes.',
      fr: 'La recette donne 2 mini-baguettes.',
      es: 'La receta es para 2 mini baguettes.',
      de: 'Das Rezept ergibt 2 Mini-Baguettes.',
    },
  },
  dosi: [
    { nome: GRUPPI.impasto,
      ingredienti: [['farinaForte', 250], ['sale', 5], ['lievitoSecco', 5], ['olioOliva', 28], ['acqua', 180]] },
    { nome: GRUPPI.ripieno, fuoriPeso: true,
      ingredienti: [['aglio'], ['olioOliva'], ['sale'], ['zucchero']] },
    { nome: GRUPPI.guarnizione, fuoriPeso: true,
      ingredienti: [['mozzarellaBufala', 125]] },
  ],
  notaDosi: {
    it: 'L’olio dell’impasto è 30 ml (circa 28 g). L’aglio è una testa intera, arrostita con un filo d’olio e un pizzico di sale e di zucchero; se ne usa a piacere. La fonte non indica la durata della seconda lievitazione.',
    en: 'The oil in the dough is 30 ml (about 28 g). The garlic is a whole head, roasted with a splash of oil and a pinch each of salt and sugar; use as much as you like. The source does not give the length of the second prove.',
    fr: 'L’huile de la pâte fait 30 ml (environ 28 g). L’ail est une tête entière, rôtie avec un filet d’huile et une pincée de sel et de sucre ; on en met à son goût. La source n’indique pas la durée de la seconde pousse.',
    es: 'El aceite de la masa son 30 ml (unos 28 g). El ajo es una cabeza entera, asada con un chorrito de aceite y una pizca de sal y azúcar; se usa al gusto. La fuente no indica la duración de la segunda fermentación.',
    de: 'Das Öl im Teig sind 30 ml (etwa 28 g). Der Knoblauch ist eine ganze Knolle, mit etwas Öl und je einer Prise Salz und Zucker geröstet; nach Geschmack verwenden. Die Quelle nennt keine Dauer für die zweite Gare.',
  },
  passi: [
    {
      it: 'In planetaria con il gancio mettere farina, sale, lievito (non a contatto), olio e quasi tutta l’acqua; impastare piano aggiungendo il resto, per circa 5 minuti. Lasciar lievitare 2 ore in una ciotola unta e coperta.',
      en: 'In a stand mixer with the hook put the flour, salt, yeast (not touching), oil and most of the water; mix slowly, adding the rest, for about 5 minutes. Leave to prove for 2 hours in an oiled, covered bowl.',
      fr: 'Au robot avec le crochet, mettre farine, sel, levure (sans contact), huile et presque toute l’eau ; pétrir lentement en ajoutant le reste, environ 5 minutes. Laisser lever 2 heures dans un saladier huilé et couvert.',
      es: 'En la batidora con el gancho poner harina, sal, levadura (sin que se toquen), aceite y casi toda el agua; amasar despacio añadiendo el resto, unos 5 minutos. Dejar fermentar 2 horas en un bol aceitado y tapado.',
      de: 'In der Küchenmaschine mit Knethaken Mehl, Salz, Hefe (ohne Kontakt), Öl und fast das ganze Wasser langsam etwa 5 Minuten kneten, dabei den Rest zugeben. 2 Stunden in einer geölten, abgedeckten Schüssel gehen lassen.',
    },
    {
      it: 'Arrostire gli spicchi d’aglio con la buccia, un filo d’olio, sale e zucchero a 200 °C per 20 minuti, finché caramellano; spremerli fuori dalla buccia.',
      en: 'Roast the garlic cloves in their skins with a splash of oil, salt and sugar at 200 °C for 20 minutes, until caramelised; squeeze them out of their skins.',
      fr: 'Rôtir les gousses d’ail en chemise avec un filet d’huile, du sel et du sucre à 200 °C pendant 20 minutes, jusqu’à ce qu’elles caramélisent ; les presser hors de leur peau.',
      es: 'Asar los dientes de ajo con piel, un chorrito de aceite, sal y azúcar a 200 °C 20 minutos, hasta que se caramelicen; sacarlos de la piel apretando.',
      de: 'Die Knoblauchzehen in der Schale mit etwas Öl, Salz und Zucker bei 200 °C 20 Minuten rösten, bis sie karamellisieren; aus der Schale drücken.',
    },
    {
      it: 'Dividere l’impasto in due su un piano unto, sgonfiarlo, piegarlo e formare due baguette premendo gli spicchi d’aglio dentro mentre si arrotolano. Lasciarle raddoppiare coperte su una teglia.',
      en: 'Divide the dough in two on an oiled surface, knock back, stretch and fold and shape two baguettes, pressing the garlic cloves in as you roll. Let them double, covered, on a tray.',
      fr: 'Diviser la pâte en deux sur un plan huilé, la dégazer, la plier et façonner deux baguettes en y enfonçant les gousses d’ail en roulant. Les laisser doubler à couvert sur une plaque.',
      es: 'Dividir la masa en dos sobre una superficie aceitada, desgasificar, plegar y formar dos baguettes metiendo los ajos al enrollarlas. Dejar que doblen tapadas en una bandeja.',
      de: 'Den Teig auf einer geölten Fläche halbieren, entgasen, dehnen und falten und zwei Baguettes formen, dabei die Knoblauchzehen beim Aufrollen eindrücken. Abgedeckt auf einem Blech auf das Doppelte gehen lassen.',
    },
    {
      it: 'Scaldare il forno statico a 220 °C con una teglia d’acqua sul fondo. Fare tre tagli su ogni baguette e cuocere 30 minuti, poi 10 a 200 °C. Una volta fredde, affettarle, coprirle di mozzarella e gratinarle finché fa le bolle.',
      en: 'Heat the conventional oven to 220 °C with a tray of water at the bottom. Slash each baguette three times and bake for 30 minutes, then 10 at 200 °C. Once cool, slice, top with the mozzarella and grill until bubbling.',
      fr: 'Chauffer le four statique à 220 °C avec un plat d’eau en bas. Grigner chaque baguette trois fois et cuire 30 minutes, puis 10 à 200 °C. Une fois froides, les trancher, les couvrir de mozzarella et gratiner jusqu’à ce qu’elle bouillonne.',
      es: 'Calentar el horno sin ventilador a 220 °C con una bandeja de agua abajo. Hacer tres cortes en cada baguette y hornear 30 minutos y luego 10 a 200 °C. Ya frías, cortarlas, cubrirlas de mozzarella y gratinar hasta que burbujee.',
      de: 'Den Ofen ohne Umluft mit einer Schale Wasser unten auf 220 °C heizen. Jedes Baguette dreimal einschneiden und 30 Minuten, dann 10 Minuten bei 200 °C backen. Abgekühlt in Scheiben schneiden, mit Mozzarella belegen und grillen, bis er blubbert.',
    },
  ],
};
