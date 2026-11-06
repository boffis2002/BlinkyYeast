// Dettaglio della ricetta «galette-des-rois-berry»: quantità, dosi, note e procedimento (vedi ricette.js per le regole).
DETTAGLI['galette-des-rois-berry'] = {
  contenitore: {
    forma: 'tondo', diametro: 23,
    nota: {
      it: 'Le dosi della ricetta sono per una galette di 23 cm, fatta con due dischi di sfoglia ritagliati attorno a una tortiera, 8 porzioni.',
      en: 'The recipe amounts are for a 23 cm galette made of two pastry discs cut around a cake tin, serving 8.',
      fr: 'Les doses de la recette sont pour une galette de 23 cm faite de deux disques de pâte découpés autour d’un moule, 8 parts.',
      es: 'Las dosis de la receta son para una galette de 23 cm hecha con dos discos de hojaldre cortados alrededor de un molde, 8 raciones.',
      de: 'Die Mengen gelten für eine 23-cm-Galette aus zwei um eine Kuchenform ausgeschnittenen Teigscheiben, 8 Stücke.',
    },
  },
  dosi: [
    { nome: GRUPPI.impasto,
      ingredienti: [['pastaSfoglia', 750]] },
    { nome: GRUPPI.ripieno,
      ingredienti: [['burro', 100], ['zucchero', 100], ['uova', 60], ['tuorli', 20], ['farinaMandorle', 100], ['mandorleLamelle', 50], ['estrattoMandorla']] },
    { nome: GRUPPI.finitura, fuoriPeso: true,
      ingredienti: [['uova']] },
  ],
  notaDosi: {
    it: 'La sfoglia è pronta, tutta burro, fredda: dai ritagli resta della pasta in più. Nel ripieno un uovo grande più un tuorlo, a temperatura ambiente, ed estratto di mandorla un cucchiaino; un uovo sbattuto per lucidare.',
    en: 'The pastry is ready-made all-butter puff, chilled: there will be trimmings left over. The filling has one large egg plus a yolk, at room temperature, and a teaspoon of almond extract; a beaten egg to glaze.',
    fr: 'La pâte est une pâte feuilletée pur beurre prête, froide : il restera des chutes. La garniture a un gros œuf plus un jaune, à température ambiante, et une cuillère à café d’extrait d’amande ; un œuf battu pour dorer.',
    es: 'El hojaldre es listo, de mantequilla, frío: sobrarán recortes. El relleno lleva un huevo grande más una yema, a temperatura ambiente, y una cucharadita de extracto de almendra; un huevo batido para pintar.',
    de: 'Der Teig ist fertiger Butterblätterteig, gekühlt: Es bleiben Reste. Die Füllung hat ein großes Ei plus ein Eigelb, zimmerwarm, und einen Teelöffel Mandelextrakt; ein verquirltes Ei zum Bestreichen.',
  },
  passi: [
    {
      it: 'Stendere metà sfoglia a circa 25 × 25 cm e ritagliare un disco di 23 cm attorno a una tortiera; metterlo su una teglia con carta forno e coprire. Ripetere con l’altra metà, sovrapponendo con la pellicola, e tenere in frigo.',
      en: 'Roll half the pastry to about 25 × 25 cm and cut a 23 cm circle around a cake tin; put it on a lined tray and cover. Repeat with the other half, layering with cling film, and chill.',
      fr: 'Abaisser la moitié de la pâte à environ 25 × 25 cm et découper un disque de 23 cm autour d’un moule ; le poser sur une plaque chemisée et couvrir. Répéter avec l’autre moitié en intercalant du film et réserver au frais.',
      es: 'Estirar la mitad del hojaldre a unos 25 × 25 cm y cortar un disco de 23 cm alrededor de un molde; ponerlo en una bandeja con papel y tapar. Repetir con la otra mitad, separando con film, y refrigerar.',
      de: 'Die Hälfte des Teigs auf etwa 25 × 25 cm ausrollen und um eine Kuchenform eine 23-cm-Scheibe ausschneiden; auf ein ausgelegtes Blech legen und abdecken. Mit der anderen Hälfte wiederholen, mit Folie dazwischen, und kühlen.',
    },
    {
      it: 'Montare burro e zucchero, unire a cucchiaiate l’uovo sbattuto con il tuorlo, poi mandorle in polvere, lamelle ed estratto; tenere in frigo 15–20 minuti.',
      en: 'Cream the butter and sugar, beat in the egg and yolk a spoonful at a time, then the ground almonds, flaked almonds and extract; chill for 15–20 minutes.',
      fr: 'Crémer beurre et sucre, incorporer par cuillerées l’œuf battu avec le jaune, puis poudre d’amande, amandes effilées et extrait ; réserver 15 à 20 minutes au frais.',
      es: 'Batir mantequilla y azúcar, añadir a cucharadas el huevo batido con la yema y luego la almendra molida, las láminas y el extracto; refrigerar 15–20 minutos.',
      de: 'Butter und Zucker cremig rühren, Ei und Eigelb löffelweise einschlagen, dann gemahlene Mandeln, Mandelblättchen und Extrakt; 15–20 Minuten kühlen.',
    },
    {
      it: 'Ammucchiare il ripieno su un disco lasciando 2 cm di bordo, spennellare il bordo d’uovo, coprire con l’altro disco e premere. Segnare il bordo con il coltello e smerlarlo ogni 2 cm, spennellare d’uovo e tenere 30 minuti in frigo.',
      en: 'Mound the filling on one disc leaving a 2 cm border, brush the border with egg, cover with the other disc and press. Knock up the edge with a knife and scallop it every 2 cm, brush with egg and chill for 30 minutes.',
      fr: 'Disposer la garniture en dôme sur un disque en laissant 2 cm de bord, dorer le bord, couvrir de l’autre disque et presser. Chiqueter le bord au couteau et le festonner tous les 2 cm, dorer et réserver 30 minutes au frais.',
      es: 'Amontonar el relleno sobre un disco dejando 2 cm de borde, pintar el borde con huevo, cubrir con el otro disco y presionar. Marcar el borde con el cuchillo y festonearlo cada 2 cm, pintar con huevo y refrigerar 30 minutos.',
      de: 'Die Füllung auf eine Scheibe häufen, 2 cm Rand frei lassen, den Rand mit Ei bestreichen, mit der zweiten Scheibe bedecken und andrücken. Den Rand mit dem Messer einkerben und alle 2 cm einbuchten, mit Ei bestreichen und 30 Minuten kühlen.',
    },
    {
      it: 'Scaldare il forno a 220 °C (200 °C ventilato). Spennellare ancora d’uovo, incidere a rombi con la punta del coltello, fare un paio di forellini al centro e cuocere 25–30 minuti, finché è croccante e dorata.',
      en: 'Heat the oven to 220 °C (200 °C fan). Brush again with egg, score a criss-cross pattern with the tip of a knife, make a couple of steam holes in the centre and bake for 25–30 minutes, until crisp and golden.',
      fr: 'Chauffer le four à 220 °C (200 °C chaleur tournante). Dorer de nouveau, rayer en losanges à la pointe du couteau, faire deux petits trous au centre et cuire 25 à 30 minutes, jusqu’à ce qu’elle soit croustillante et dorée.',
      es: 'Calentar el horno a 220 °C (200 °C con ventilador). Pintar otra vez con huevo, marcar rombos con la punta del cuchillo, hacer un par de agujeritos en el centro y hornear 25–30 minutos, hasta que esté crujiente y dorada.',
      de: 'Den Ofen auf 220 °C (200 °C Umluft) heizen. Nochmals mit Ei bestreichen, mit der Messerspitze ein Rautenmuster ritzen, in der Mitte zwei kleine Löcher stechen und 25–30 Minuten knusprig goldbraun backen.',
    },
  ],
};
