// Dettaglio della ricetta «pretzel-hollywood»: quantità, dosi, note e procedimento (vedi ricette.js per le regole).
DETTAGLI['pretzel-hollywood'] = {
  pezzi: {
    numero: 12, peso: 74,
    nota: {
      it: 'La ricetta è per 12 pretzel, 6 salati e 6 dolci.',
      en: 'The recipe makes 12 pretzels, 6 savoury and 6 sweet.',
      fr: 'La recette donne 12 bretzels, 6 salés et 6 sucrés.',
      es: 'La receta es para 12 pretzels, 6 salados y 6 dulces.',
      de: 'Das Rezept ergibt 12 Brezeln, 6 herzhafte und 6 süße.',
    },
  },
  dosi: [
    { nome: GRUPPI.impasto,
      ingredienti: [['farinaForte', 500], ['sale', 10], ['lievitoSecco', 7], ['burro', 40], ['estrattoMalto'], ['latte', 280], ['scorzaArancia'], ['semiPapavero', 50]] },
    { nome: GRUPPI.bagno, fuoriPeso: true,
      ingredienti: [['acqua', 7000], ['bicarbonato', 21]] },
    { nome: GRUPPI.finitura, fuoriPeso: true,
      ingredienti: [['saleGrosso', 20], ['semiSesamo', 50]] },
    { nome: GRUPPI.glassa, fuoriPeso: true,
      ingredienti: [['succoArancia'], ['scorzaArancia'], ['zucchero', 125]] },
  ],
  notaDosi: {
    it: 'L’estratto di malto è un cucchiaio. Scorza di 2 arance e papavero vanno solo nella metà dolce dell’impasto; sale grosso e sesamo sui pretzel salati. La glassa è il succo di 3 arance con la scorza di una a filetti; 100 g di zucchero nello sciroppo, il resto per i filetti.',
    en: 'The malt extract is a tablespoon. The zest of 2 oranges and the poppy seeds go only into the sweet half of the dough; rock salt and sesame on the savoury pretzels. The glaze is the juice of 3 oranges with the zest of one in slivers; 100 g of sugar in the syrup, the rest for the slivers.',
    fr: 'L’extrait de malt fait une cuillère à soupe. Le zeste de 2 oranges et le pavot vont seulement dans la moitié sucrée de la pâte ; gros sel et sésame sur les bretzels salés. Le glaçage est le jus de 3 oranges avec le zeste d’une en fines lanières ; 100 g de sucre dans le sirop, le reste pour les lanières.',
    es: 'El extracto de malta es una cucharada. La ralladura de 2 naranjas y la amapola van solo en la mitad dulce de la masa; sal gruesa y sésamo en los pretzels salados. El glaseado es el zumo de 3 naranjas con la piel de una en tiras finas; 100 g de azúcar en el almíbar y el resto para las tiras.',
    de: 'Der Malzextrakt ist ein Esslöffel. Die Schale von 2 Orangen und der Mohn kommen nur in die süße Teighälfte; Hagelsalz und Sesam auf die herzhaften Brezeln. Die Glasur ist der Saft von 3 Orangen mit der Schale von einer in feinen Streifen; 100 g Zucker in den Sirup, der Rest für die Streifen.',
  },
  passi: [
    {
      it: 'Mettere farina, sale, lievito e burro in una ciotola; sciogliere il malto nel latte e aggiungerlo poco alla volta. Impastare 10 minuti, senza aggiungere farina, fino a una pasta soda, liscia e lucida.',
      en: 'Put the flour, salt, yeast and butter in a bowl; dissolve the malt in the milk and add it gradually. Knead for 10 minutes, without extra flour, to a stiff, smooth, glossy dough.',
      fr: 'Mettre farine, sel, levure et beurre dans un saladier ; dissoudre le malt dans le lait et l’ajouter peu à peu. Pétrir 10 minutes, sans ajouter de farine, jusqu’à une pâte ferme, lisse et brillante.',
      es: 'Poner harina, sal, levadura y mantequilla en un bol; disolver la malta en la leche y añadirla poco a poco. Amasar 10 minutos, sin añadir harina, hasta una masa firme, lisa y brillante.',
      de: 'Mehl, Salz, Hefe und Butter in eine Schüssel geben; den Malz in der Milch lösen und nach und nach zugeben. 10 Minuten ohne zusätzliches Mehl zu einem festen, glatten, glänzenden Teig kneten.',
    },
    {
      it: 'Dividere in due, impastare una metà con scorza e papavero e lasciare semplice l’altra; far raddoppiare circa 45 minuti in due ciotole unte. Scaldare il forno a 200 °C.',
      en: 'Divide in two, knead the zest and poppy seeds into one half and leave the other plain; let both double for about 45 minutes in two oiled bowls. Heat the oven to 200 °C.',
      fr: 'Diviser en deux, incorporer zeste et pavot à une moitié et laisser l’autre nature ; laisser doubler environ 45 minutes dans deux saladiers huilés. Chauffer le four à 200 °C.',
      es: 'Dividir en dos, incorporar ralladura y amapola en una mitad y dejar la otra natural; dejar que doblen unos 45 minutos en dos boles aceitados. Calentar el horno a 200 °C.',
      de: 'Halbieren, Schale und Mohn in eine Hälfte einkneten, die andere natur lassen; in zwei geölten Schüsseln etwa 45 Minuten auf das Doppelte gehen lassen. Den Ofen auf 200 °C heizen.',
    },
    {
      it: 'Dividere ogni impasto in 6 e allungare cordoni di 40–50 cm, più spessi al centro e affusolati alle punte (lasciandoli riposare se si ritirano). Formare a U, attorcigliare due volte le estremità e fissarle ai lati della pancia.',
      en: 'Divide each dough into 6 and roll ropes of 40–50 cm, thicker in the middle and tapered at the ends (resting them if they spring back). Form a U, twist the ends twice and press them onto either side of the belly.',
      fr: 'Diviser chaque pâte en 6 et rouler des boudins de 40 à 50 cm, plus épais au centre et effilés aux bouts (en les laissant reposer s’ils se rétractent). Former un U, torsader deux fois les extrémités et les fixer de part et d’autre du ventre.',
      es: 'Dividir cada masa en 6 y estirar cordones de 40–50 cm, más gruesos en el centro y afilados en las puntas (dejándolos reposar si encogen). Formar una U, retorcer dos veces los extremos y pegarlos a ambos lados de la panza.',
      de: 'Jeden Teig in 6 Stücke teilen und 40–50 cm lange Stränge rollen, in der Mitte dicker, an den Enden spitz (ruhen lassen, wenn sie zurückschnellen). Zu einem U legen, die Enden zweimal verdrehen und links und rechts am Bauch andrücken.',
    },
    {
      it: 'Sciogliere il bicarbonato in 7 litri d’acqua bollente e immergervi ogni pretzel per circa 5 secondi; metterli sulla teglia, cospargere i salati ancora bagnati di sale grosso e sesamo, fare un taglio profondo nella parte più spessa e cuocere 20–25 minuti, fino a un bruno scuro.',
      en: 'Dissolve the bicarbonate in 7 litres of boiling water and dip each pretzel for about 5 seconds; put them on the tray, sprinkle the savoury ones with rock salt and sesame while wet, slash the thickest part deeply and bake for 20–25 minutes, until deep brown.',
      fr: 'Dissoudre le bicarbonate dans 7 litres d’eau bouillante et y plonger chaque bretzel environ 5 secondes ; les poser sur la plaque, parsemer les salés encore mouillés de gros sel et de sésame, entailler profondément la partie la plus épaisse et cuire 20 à 25 minutes, jusqu’à un brun foncé.',
      es: 'Disolver el bicarbonato en 7 litros de agua hirviendo y sumergir cada pretzel unos 5 segundos; ponerlos en la bandeja, espolvorear los salados aún mojados con sal gruesa y sésamo, hacer un corte profundo en la parte más gruesa y hornear 20–25 minutos, hasta que estén bien tostados.',
      de: 'Das Natron in 7 Litern kochendem Wasser lösen und jede Brezel etwa 5 Sekunden eintauchen; aufs Blech legen, die herzhaften noch nass mit Hagelsalz und Sesam bestreuen, an der dicksten Stelle tief einschneiden und 20–25 Minuten dunkelbraun backen.',
    },
    {
      it: 'Bollire il succo d’arancia con 100 g di zucchero e la scorza un minuto, togliere la scorza e passarla nel resto dello zucchero; ridurre lo sciroppo finché è appiccicoso. Spennellare i pretzel dolci e cospargerli di scorza candita.',
      en: 'Boil the orange juice with 100 g of the sugar and the zest for a minute, lift out the zest and roll it in the rest of the sugar; reduce the syrup until sticky. Brush the sweet pretzels and scatter with the candied zest.',
      fr: 'Faire bouillir le jus d’orange avec 100 g de sucre et le zeste une minute, retirer le zeste et le rouler dans le reste du sucre ; réduire le sirop jusqu’à ce qu’il colle. En badigeonner les bretzels sucrés et parsemer de zeste confit.',
      es: 'Hervir el zumo de naranja con 100 g de azúcar y la piel un minuto, sacar la piel y rebozarla en el resto del azúcar; reducir el almíbar hasta que esté pegajoso. Pintar los pretzels dulces y esparcir la piel confitada.',
      de: 'Den Orangensaft mit 100 g Zucker und der Schale eine Minute kochen, die Schale herausnehmen und im restlichen Zucker wälzen; den Sirup einkochen, bis er klebrig ist. Die süßen Brezeln bestreichen und mit der kandierten Schale bestreuen.',
    },
  ],
};
