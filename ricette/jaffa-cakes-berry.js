// Dettaglio della ricetta «jaffa-cakes-berry»: quantità, dosi, note e procedimento (vedi ricette.js per le regole).
DETTAGLI['jaffa-cakes-berry'] = {
  pezzi: {
    numero: 12, peso: 9,
    nota: {
      it: 'La ricetta è per 12 jaffa cakes in una teglia da tortine basse; il peso è quello del pan di spagna.',
      en: 'The recipe makes 12 jaffa cakes in a shallow bun tin; the weight is of the sponge.',
      fr: 'La recette donne 12 jaffa cakes dans un moule à tartelettes peu profond ; le poids est celui de la génoise.',
      es: 'La receta es para 12 jaffa cakes en una bandeja de moldes bajos; el peso es el del bizcocho.',
      de: 'Das Rezept ergibt 12 Jaffa Cakes in einem flachen Törtchenblech; das Gewicht ist das des Biskuits.',
    },
  },
  dosi: [
    { nome: GRUPPI.impasto,
      ingredienti: [['uova', 60], ['zucchero', 25], ['farinaAutolievitante', 25]] },
    { nome: GRUPPI.gelatina, fuoriPeso: true,
      ingredienti: [['gelatinaArancia', 135], ['acqua', 150], ['scorzaArancia']] },
    { nome: GRUPPI.guarnizione, fuoriPeso: true,
      ingredienti: [['cioccolatoFondente', 180]] },
  ],
  notaDosi: {
    it: 'La gelatina è un panetto da 135 g in cubetti, l’acqua bollente; la scorza è di una piccola arancia. L’uovo è grande (qui 60 g); il cioccolato ha circa il 36% di cacao.',
    en: 'The jelly is a 135 g packet of cubes, the water boiling; the zest is from one small orange. The egg is large (60 g here); the chocolate is about 36% cocoa solids.',
    fr: 'La gelée est une tablette de 135 g en cubes, l’eau bouillante ; le zeste d’une petite orange. L’œuf est gros (ici 60 g) ; le chocolat a environ 36 % de cacao.',
    es: 'La gelatina es un paquete de 135 g en cubos, el agua hirviendo; la ralladura de una naranja pequeña. El huevo es grande (aquí 60 g); el chocolate tiene un 36 % de cacao.',
    de: 'Das Gelee ist ein 135-g-Päckchen Würfel, das Wasser kochend; die Schale einer kleinen Orange. Das Ei ist groß (hier 60 g); die Schokolade hat etwa 36 % Kakao.',
  },
  passi: [
    {
      it: 'Sciogliere la gelatina nell’acqua bollente, unire la scorza, versarla in una teglia bassa da 30 × 20 cm e farla rassodare in frigo un’ora.',
      en: 'Dissolve the jelly in the boiling water, add the zest, pour into a shallow 30 × 20 cm tray and chill for an hour until set.',
      fr: 'Dissoudre la gelée dans l’eau bouillante, ajouter le zeste, verser dans un plat peu profond de 30 × 20 cm et laisser prendre une heure au frais.',
      es: 'Disolver la gelatina en el agua hirviendo, añadir la ralladura, verter en una bandeja baja de 30 × 20 cm y dejar cuajar una hora en la nevera.',
      de: 'Das Gelee im kochenden Wasser auflösen, die Schale zugeben, in eine flache 30 × 20 cm große Form gießen und eine Stunde im Kühlschrank fest werden lassen.',
    },
    {
      it: 'Scaldare il forno a 180 °C (160 °C ventilato) e imburrare gli stampini. Montare uovo e zucchero 4–5 minuti, incorporare la farina e riempire gli stampini per tre quarti; cuocere 7–9 minuti e far raffreddare.',
      en: 'Heat the oven to 180 °C (160 °C fan) and butter the tin. Whisk the egg and sugar for 4–5 minutes, fold in the flour and fill the holes three-quarters full; bake for 7–9 minutes and cool.',
      fr: 'Chauffer le four à 180 °C (160 °C chaleur tournante) et beurrer le moule. Fouetter œuf et sucre 4 à 5 minutes, incorporer la farine et remplir les alvéoles aux trois quarts ; cuire 7 à 9 minutes et laisser refroidir.',
      es: 'Calentar el horno a 180 °C (160 °C con ventilador) y engrasar el molde. Batir huevo y azúcar 4–5 minutos, incorporar la harina y llenar los huecos tres cuartos; hornear 7–9 minutos y dejar enfriar.',
      de: 'Den Ofen auf 180 °C (160 °C Umluft) heizen und das Blech buttern. Ei und Zucker 4–5 Minuten aufschlagen, das Mehl unterheben und die Mulden zu drei Vierteln füllen; 7–9 Minuten backen und abkühlen lassen.',
    },
    {
      it: 'Rovesciare la gelatina su carta forno, ritagliare 12 dischi da 5 cm e posarne uno su ogni pan di spagna. Coprire con il cioccolato fuso e intiepidito, segnarlo a reticolo con una forchetta e lasciarlo solidificare.',
      en: 'Turn the jelly out onto baking paper, cut 12 discs of 5 cm and put one on each sponge. Spoon over the melted, slightly cooled chocolate, mark a criss-cross with a fork and leave to set.',
      fr: 'Démouler la gelée sur du papier cuisson, découper 12 disques de 5 cm et en poser un sur chaque génoise. Napper de chocolat fondu et tiédi, le marquer en croisillons à la fourchette et laisser prendre.',
      es: 'Volcar la gelatina sobre papel de horno, cortar 12 discos de 5 cm y poner uno sobre cada bizcocho. Cubrir con el chocolate fundido y templado, marcarlo en cuadrícula con un tenedor y dejar que endurezca.',
      de: 'Das Gelee auf Backpapier stürzen, 12 Scheiben von 5 cm ausstechen und je eine auf einen Biskuit legen. Mit der geschmolzenen, leicht abgekühlten Schokolade überziehen, mit einer Gabel ein Gitter ziehen und fest werden lassen.',
    },
  ],
};
