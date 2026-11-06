// Dettaglio della ricetta «savarin-hollywood»: quantità, dosi, note e procedimento (vedi ricette.js per le regole).
DETTAGLI['savarin-hollywood'] = {
  contenitore: {
    forma: 'tondo', diametro: 23,
    nota: {
      it: 'Le dosi della ricetta sono per uno stampo a ciambella (o da savarin) di 23 cm.',
      en: 'The recipe amounts are for a 23 cm ring (savarin or bundt) mould.',
      fr: 'Les doses de la recette sont pour un moule à savarin de 23 cm.',
      es: 'Las dosis de la receta son para un molde de rosca de 23 cm.',
      de: 'Die Mengen gelten für eine 23-cm-Savarin- oder Gugelhupfform.',
    },
  },
  dosi: [
    { nome: GRUPPI.impasto,
      ingredienti: [['farina00', 350], ['zucchero', 50], ['lievitoSecco', 10], ['sale'], ['latte', 45], ['uova', 330], ['burro', 180], ['scorzaArancia'], ['scorzaLimone']] },
    { nome: GRUPPI.sciroppo, fuoriPeso: true,
      ingredienti: [['zucchero', 300], ['succoLimone'], ['acqua', 150], ['liquoreArancia', 100]] },
    { nome: GRUPPI.chantilly, fuoriPeso: true,
      ingredienti: [['panna', 300], ['zuccheroVelo', 15], ['estrattoVaniglia']] },
    { nome: GRUPPI.finitura, fuoriPeso: true,
      ingredienti: [['fruttaFresca']] },
  ],
  notaDosi: {
    it: 'Le uova sono 6 (qui 55 g l’una), il latte 3 cucchiai, il sale mezzo cucchiaino; le scorze sono di un’arancia e di un limone, il succo di un limone, la vaniglia mezzo cucchiaino di pasta. La fonte decora anche con un disco di cioccolato temperato e schegge di caramello, qui omessi.',
    en: 'There are 6 eggs (55 g each here), 3 tablespoons of milk, half a teaspoon of salt; the zests are from one orange and one lemon, the juice from one lemon, the vanilla half a teaspoon of paste. The source also decorates with a tempered chocolate disc and caramel shards, left out here.',
    fr: 'Il y a 6 œufs (ici 55 g chacun), 3 cuillères à soupe de lait, une demi-cuillère à café de sel ; les zestes d’une orange et d’un citron, le jus d’un citron, une demi-cuillère à café de pâte de vanille. La source décore aussi d’un disque de chocolat tempéré et d’éclats de caramel, omis ici.',
    es: 'Son 6 huevos (aquí 55 g cada uno), 3 cucharadas de leche, media cucharadita de sal; las ralladuras de una naranja y un limón, el zumo de un limón, media cucharadita de pasta de vainilla. La fuente decora también con un disco de chocolate templado y trozos de caramelo, omitidos aquí.',
    de: 'Es sind 6 Eier (hier je 55 g), 3 Esslöffel Milch, ein halber Teelöffel Salz; die Schale einer Orange und einer Zitrone, der Saft einer Zitrone, ein halber Teelöffel Vanillepaste. Die Quelle verziert zusätzlich mit einer temperierten Schokoladenscheibe und Karamellsplittern, hier weggelassen.',
  },
  passi: [
    {
      it: 'Mescolare farina, zucchero e lievito; unire sale, latte e uova sbattuti insieme e battere con un cucchiaio di legno circa 5 minuti, fino a una pastella densa e appiccicosa.',
      en: 'Mix the flour, sugar and yeast; add the salt, milk and eggs beaten together and beat with a wooden spoon for about 5 minutes, to a thick, sticky batter.',
      fr: 'Mélanger farine, sucre et levure ; ajouter sel, lait et œufs battus ensemble et battre à la cuillère en bois environ 5 minutes, jusqu’à une pâte épaisse et collante.',
      es: 'Mezclar harina, azúcar y levadura; añadir sal, leche y huevos batidos juntos y batir con una cuchara de madera unos 5 minutos, hasta una masa espesa y pegajosa.',
      de: 'Mehl, Zucker und Hefe mischen; Salz, Milch und verquirlte Eier zugeben und mit einem Holzlöffel etwa 5 Minuten zu einem dicken, klebrigen Teig schlagen.',
    },
    {
      it: 'Incorporare il burro a pezzi poco alla volta, fino a una pasta liscia, elastica e lucida; unire le scorze, coprire e lasciar lievitare un’ora. Intanto sciogliere zucchero, succo e acqua, poi aggiungere il liquore e far raffreddare.',
      en: 'Beat in the butter a little at a time, to a smooth, elastic, shiny dough; fold in the zests, cover and let it rise for an hour. Meanwhile dissolve the sugar in the juice and water, then add the liqueur and let it cool.',
      fr: 'Incorporer le beurre en morceaux peu à peu, jusqu’à une pâte lisse, élastique et brillante ; ajouter les zestes, couvrir et laisser lever une heure. Pendant ce temps, dissoudre sucre, jus et eau, puis ajouter la liqueur et laisser refroidir.',
      es: 'Incorporar la mantequilla en trozos poco a poco, hasta una masa lisa, elástica y brillante; añadir las ralladuras, tapar y dejar fermentar una hora. Mientras, disolver azúcar, zumo y agua, añadir el licor y dejar enfriar.',
      de: 'Die Butter stückweise einarbeiten, bis der Teig glatt, elastisch und glänzend ist; die Schalen unterheben, abdecken und eine Stunde gehen lassen. Inzwischen Zucker in Saft und Wasser lösen, den Likör zugeben und abkühlen lassen.',
    },
    {
      it: 'Versare la pasta nello stampo imburrato, coprire e lasciar lievitare 45–60 minuti, fino a tre quarti dell’altezza; cuocere a 180 °C (160 °C ventilato) per 20–25 minuti.',
      en: 'Spoon the dough into the buttered mould, cover and let it rise for 45–60 minutes, to three quarters of the way up; bake at 180 °C (160 °C fan) for 20–25 minutes.',
      fr: 'Verser la pâte dans le moule beurré, couvrir et laisser lever 45 à 60 minutes, jusqu’aux trois quarts de la hauteur ; cuire à 180 °C (160 °C chaleur tournante) 20 à 25 minutes.',
      es: 'Poner la masa en el molde engrasado, tapar y dejar fermentar 45–60 minutos, hasta tres cuartos de la altura; hornear a 180 °C (160 °C con ventilador) 20–25 minutos.',
      de: 'Den Teig in die gebutterte Form geben, abdecken und 45–60 Minuten gehen lassen, bis er drei Viertel der Höhe erreicht; bei 180 °C (160 °C Umluft) 20–25 Minuten backen.',
    },
    {
      it: 'Dopo 5–10 minuti sformare, versare metà dello sciroppo nello stampo e rimettervi il savarin perché lo assorba; poi bagnarlo 5 minuti nel resto dello sciroppo.',
      en: 'After 5–10 minutes turn it out, pour half the syrup into the mould and put the savarin back to soak it up; then soak it for 5 minutes in the rest of the syrup.',
      fr: 'Après 5 à 10 minutes, démouler, verser la moitié du sirop dans le moule et y remettre le savarin pour qu’il l’absorbe ; puis l’imbiber 5 minutes dans le reste du sirop.',
      es: 'A los 5–10 minutos desmoldar, verter la mitad del almíbar en el molde y volver a poner el savarin para que lo absorba; luego empaparlo 5 minutos en el resto del almíbar.',
      de: 'Nach 5–10 Minuten stürzen, die Hälfte des Sirups in die Form gießen und den Savarin zurücksetzen, damit er ihn aufsaugt; dann 5 Minuten im restlichen Sirup tränken.',
    },
    {
      it: 'Montare la panna con zucchero a velo e vaniglia a punte morbide; decorare il bordo con la sac à poche e riempire il centro con il resto e la frutta.',
      en: 'Whip the cream with the icing sugar and vanilla to soft peaks; pipe it around the top and fill the centre with the rest and the fruit.',
      fr: 'Fouetter la crème avec le sucre glace et la vanille en pics souples ; en pocher le dessus et garnir le centre avec le reste et les fruits.',
      es: 'Montar la nata con el azúcar glas y la vainilla a picos suaves; decorar el borde con la manga y rellenar el centro con el resto y la fruta.',
      de: 'Die Sahne mit Puderzucker und Vanille weich schlagen; den Rand damit bespritzen und die Mitte mit dem Rest und dem Obst füllen.',
    },
  ],
};
