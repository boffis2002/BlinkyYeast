// Dettaglio della ricetta «tortine-frutta-hollywood»: quantità, dosi, note e procedimento (vedi ricette.js per le regole).
DETTAGLI['tortine-frutta-hollywood'] = {
  pezzi: {
    numero: 12, peso: 32,
    nota: {
      it: 'La ricetta è per 12 tortine in una teglia da tortine basse; il peso è quello della frolla.',
      en: 'The recipe makes 12 small pies in a shallow bun tray; the weight is of the pastry.',
      fr: 'La recette donne 12 petites tourtes dans un moule à tartelettes peu profond ; le poids est celui de la pâte.',
      es: 'La receta es para 12 pastelitos en una bandeja de moldes bajos; el peso es el de la masa.',
      de: 'Das Rezept ergibt 12 kleine Pies in einem flachen Törtchenblech; das Gewicht ist das des Teigs.',
    },
  },
  dosi: [
    { nome: GRUPPI.frolla,
      ingredienti: [['farina00', 200], ['zuccheroVelo'], ['burro', 100], ['uova', 55], ['succoLimone'], ['acqua', 30]] },
    { nome: GRUPPI.ripieno, fuoriPeso: true,
      ingredienti: [['mele', 1000], ['burro', 25], ['zucchero', 75], ['scorzaLimone'], ['calvados', 50], ['mascarpone', 30]] },
    { nome: GRUPPI.finitura, fuoriPeso: true,
      ingredienti: [['latte'], ['zucchero']] },
  ],
  notaDosi: {
    it: 'Nella frolla zucchero a velo 2 cucchiai, succo di limone un cucchiaino, acqua 2 cucchiai. Le mele sono 7 da tavola (circa 1 kg) sbucciate e a pezzi di 1 cm, la scorza di un limone, il mascarpone 2 cucchiai. La fonte propone anche pere con sidro di pere, o 9 albicocche (500 g) con amaretto e senza scorza né mascarpone. Per finire 2–3 cucchiai di latte e zucchero semolato.',
    en: 'In the pastry, 2 tablespoons of icing sugar, a teaspoon of lemon juice, 2 tablespoons of water. The apples are 7 eating apples (about 1 kg), peeled and cut into 1 cm pieces, the zest of one lemon, 2 tablespoons of mascarpone. The source also offers pears with perry, or 9 apricots (500 g) with amaretto and no zest or mascarpone. To finish 2–3 tablespoons of milk and granulated sugar.',
    fr: 'Dans la pâte, 2 cuillères à soupe de sucre glace, une cuillère à café de jus de citron, 2 cuillères d’eau. Les pommes sont 7 pommes à croquer (environ 1 kg), pelées et en morceaux de 1 cm, le zeste d’un citron, 2 cuillères de mascarpone. La source propose aussi des poires au poiré, ou 9 abricots (500 g) à l’amaretto sans zeste ni mascarpone. Pour finir 2 à 3 cuillères de lait et du sucre cristallisé.',
    es: 'En la masa, 2 cucharadas de azúcar glas, una cucharadita de zumo de limón y 2 cucharadas de agua. Las manzanas son 7 de mesa (1 kg aprox.), peladas y en trozos de 1 cm, la ralladura de un limón y 2 cucharadas de mascarpone. La fuente propone también peras con sidra de pera, o 9 albaricoques (500 g) con amaretto, sin ralladura ni mascarpone. Para terminar 2–3 cucharadas de leche y azúcar granulado.',
    de: 'Im Teig 2 Esslöffel Puderzucker, ein Teelöffel Zitronensaft, 2 Esslöffel Wasser. Die Äpfel sind 7 Tafeläpfel (etwa 1 kg), geschält und in 1-cm-Stücken, die Schale einer Zitrone, 2 Esslöffel Mascarpone. Die Quelle bietet auch Birnen mit Birnenmost oder 9 Aprikosen (500 g) mit Amaretto ohne Schale und Mascarpone an. Zum Schluss 2–3 Esslöffel Milch und Kristallzucker.',
  },
  passi: [
    {
      it: 'Sabbiare farina, zucchero a velo e burro freddo; unire uovo, succo e acqua e compattare la frolla. Lasciarla in frigo almeno 15 minuti.',
      en: 'Rub the flour, icing sugar and cold butter to crumbs; add the egg, juice and water and bring the pastry together. Chill for at least 15 minutes.',
      fr: 'Sabler farine, sucre glace et beurre froid ; ajouter œuf, jus et eau et rassembler la pâte. Réserver au moins 15 minutes au frais.',
      es: 'Arenar harina, azúcar glas y mantequilla fría; añadir huevo, zumo y agua y unir la masa. Refrigerar al menos 15 minutos.',
      de: 'Mehl, Puderzucker und kalte Butter zu Bröseln reiben; Ei, Saft und Wasser zugeben und zu einem Teig verbinden. Mindestens 15 Minuten kühlen.',
    },
    {
      it: 'Sciogliere il burro in padella, aggiungere mele, zucchero, scorza e calvados e cuocere circa 10 minuti, finché la frutta è tenera e il liquido quasi evaporato; farla raffreddare, unire il mascarpone e metterla in frigo.',
      en: 'Melt the butter in a pan, add the apples, sugar, zest and calvados and simmer for about 10 minutes, until the fruit is tender and most of the liquid has gone; cool, stir in the mascarpone and chill.',
      fr: 'Faire fondre le beurre dans une poêle, ajouter pommes, sucre, zeste et calvados et cuire environ 10 minutes, jusqu’à ce que les fruits soient tendres et le liquide presque évaporé ; laisser refroidir, ajouter le mascarpone et réserver au frais.',
      es: 'Derretir la mantequilla en la sartén, añadir manzana, azúcar, ralladura y calvados y cocer unos 10 minutos, hasta que la fruta esté tierna y casi sin líquido; dejar enfriar, añadir el mascarpone y refrigerar.',
      de: 'Die Butter in der Pfanne schmelzen, Äpfel, Zucker, Schale und Calvados zugeben und etwa 10 Minuten köcheln, bis das Obst weich und die Flüssigkeit fast verdampft ist; abkühlen lassen, Mascarpone unterrühren und kühlen.',
    },
    {
      it: 'Scaldare il forno a 200 °C. Stendere la frolla a 2–3 mm, ritagliare 12 dischi da 8,5 cm per foderare la teglia e 12 da 6 cm per i coperchi; riempire senza esagerare, chiudere sigillando i bordi bagnati e fare due forellini.',
      en: 'Heat the oven to 200 °C. Roll the pastry to 2–3 mm, cut 12 rounds of 8.5 cm to line the tray and 12 of 6 cm for the lids; fill without overfilling, cover, sealing the dampened edges, and make two small steam holes.',
      fr: 'Chauffer le four à 200 °C. Abaisser la pâte à 2 ou 3 mm, découper 12 disques de 8,5 cm pour foncer le moule et 12 de 6 cm pour les couvercles ; garnir sans excès, couvrir en soudant les bords humidifiés et faire deux petits trous.',
      es: 'Calentar el horno a 200 °C. Estirar la masa a 2–3 mm, cortar 12 discos de 8,5 cm para forrar la bandeja y 12 de 6 cm para las tapas; rellenar sin pasarse, tapar sellando los bordes humedecidos y hacer dos agujeritos.',
      de: 'Den Ofen auf 200 °C heizen. Den Teig 2–3 mm dick ausrollen, 12 Kreise von 8,5 cm für das Blech und 12 von 6 cm für die Deckel ausstechen; nicht zu voll füllen, mit angefeuchteten Rändern verschließen und zwei kleine Löcher stechen.',
    },
    {
      it: 'Spennellare di latte, cospargere di zucchero e cuocere 25–30 minuti, fino a doratura; lasciarle 5 minuti nello stampo. Vanno mangiate entro 24 ore.',
      en: 'Brush with milk, sprinkle with sugar and bake for 25–30 minutes, until golden; leave 5 minutes in the tin. Eat within 24 hours.',
      fr: 'Badigeonner de lait, saupoudrer de sucre et cuire 25 à 30 minutes, jusqu’à ce qu’elles soient dorées ; laisser 5 minutes dans le moule. À manger dans les 24 heures.',
      es: 'Pintar con leche, espolvorear azúcar y hornear 25–30 minutos, hasta que se doren; dejar 5 minutos en el molde. Se comen en 24 horas.',
      de: 'Mit Milch bestreichen, mit Zucker bestreuen und 25–30 Minuten goldbraun backen; 5 Minuten in der Form lassen. Innerhalb von 24 Stunden essen.',
    },
  ],
};
