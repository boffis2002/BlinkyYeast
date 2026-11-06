// Dettaglio della ricetta «foresta-nera-berry»: quantità, dosi, note e procedimento (vedi ricette.js per le regole).
DETTAGLI['foresta-nera-berry'] = {
  contenitore: {
    forma: 'tondo', diametro: 23, numero: 2,
    nota: {
      it: 'La torta si monta con due pan di spagna cotti in due tortiere da 23 cm: le dosi indicate sono per una tortiera, cioè metà torta.',
      en: 'The cake is built from two sponges baked in two 23 cm tins: the amounts shown are for one tin, that is half the cake.',
      fr: 'Le gâteau se monte avec deux génoises cuites dans deux moules de 23 cm : les doses indiquées sont pour un moule, soit la moitié du gâteau.',
      es: 'La tarta se monta con dos bizcochos horneados en dos moldes de 23 cm: las dosis indicadas son para un molde, es decir media tarta.',
      de: 'Die Torte wird aus zwei Böden aus zwei 23-cm-Formen gebaut: Die Mengen gelten für eine Form, also die halbe Torte.',
    },
  },
  dosi: [
    { nome: GRUPPI.impasto,
      ingredienti: [['uova', 165], ['zucchero', 75], ['farinaAutolievitante', 50], ['cacao', 25]] },
    { nome: GRUPPI.ripieno,
      ingredienti: [['ciliegieKirsch', 250], ['amidoMais'], ['panna', 375]] },
    { nome: GRUPPI.guarnizione, fuoriPeso: true,
      ingredienti: [['cioccolatoBianco', 75], ['cioccolatoFondente', 125], ['ciliegie', 12]] },
  ],
  notaDosi: {
    it: 'Per tutta la torta: 6 uova grandi, 2 vasetti da 390 g di ciliegie nere al kirsch (500 g sgocciolate, tenendo il succo), 2 cucchiai colmi di amido, 750 ml di panna, 150 g di cioccolato bianco, 250 g di cioccolato fondente (circa 46%) e 24 ciliegie fresche con il gambo. Le dosi mostrate sono la metà.',
    en: 'For the whole cake: 6 large eggs, 2 × 390 g jars of black cherries in kirsch (500 g drained, keeping the juice), 2 heaped tablespoons of cornflour, 750 ml of cream, 150 g of white chocolate, 250 g of plain chocolate (about 46%) and 24 fresh cherries with stalks. The amounts shown are half.',
    fr: 'Pour tout le gâteau : 6 gros œufs, 2 bocaux de 390 g de cerises noires au kirsch (500 g égouttées, en gardant le jus), 2 cuillères à soupe bombées d’amidon, 750 ml de crème, 150 g de chocolat blanc, 250 g de chocolat noir (environ 46 %) et 24 cerises fraîches avec la queue. Les doses affichées sont la moitié.',
    es: 'Para toda la tarta: 6 huevos grandes, 2 tarros de 390 g de cerezas negras al kirsch (500 g escurridas, guardando el jugo), 2 cucharadas colmadas de almidón, 750 ml de nata, 150 g de chocolate blanco, 250 g de chocolate negro (un 46 %) y 24 cerezas frescas con rabo. Las dosis mostradas son la mitad.',
    de: 'Für die ganze Torte: 6 große Eier, 2 Gläser à 390 g Schattenmorellen in Kirschwasser (500 g abgetropft, Saft auffangen), 2 gehäufte Esslöffel Stärke, 750 ml Sahne, 150 g weiße Schokolade, 250 g Zartbitterschokolade (etwa 46 %) und 24 frische Kirschen mit Stiel. Die angezeigten Mengen sind die Hälfte.',
  },
  passi: [
    {
      it: 'Scaldare il forno a 180 °C (160 °C ventilato) e foderare le tortiere. Montare uova e zucchero finché sono chiari e lasciano una scia, incorporare farina e cacao setacciati e dividere nelle tortiere; cuocere 25–30 minuti.',
      en: 'Heat the oven to 180 °C (160 °C fan) and line the tins. Whisk the eggs and sugar until pale and thick enough to leave a trail, fold in the sifted flour and cocoa and divide between the tins; bake for 25–30 minutes.',
      fr: 'Chauffer le four à 180 °C (160 °C chaleur tournante) et chemiser les moules. Fouetter œufs et sucre jusqu’à ce qu’ils blanchissent et fassent le ruban, incorporer farine et cacao tamisés et répartir dans les moules ; cuire 25 à 30 minutes.',
      es: 'Calentar el horno a 180 °C (160 °C con ventilador) y forrar los moldes. Batir huevos y azúcar hasta que blanqueen y dejen rastro, incorporar harina y cacao tamizados y repartir en los moldes; hornear 25–30 minutos.',
      de: 'Den Ofen auf 180 °C (160 °C Umluft) heizen und die Formen auslegen. Eier und Zucker hell und dick schlagen, bis eine Spur bleibt, gesiebtes Mehl und Kakao unterheben und auf die Formen verteilen; 25–30 Minuten backen.',
    },
    {
      it: 'Sgocciolare le ciliegie tenendo il succo e tagliarle in quarti. Stemperare l’amido nel succo, portare a bollore mescolando, cuocere 2 minuti, unire le ciliegie e far rassodare in frigo.',
      en: 'Drain the cherries, keeping the juice, and quarter them. Mix the cornflour into the juice, bring to the boil stirring, simmer for 2 minutes, add the cherries and chill until firm.',
      fr: 'Égoutter les cerises en gardant le jus et les couper en quatre. Délayer l’amidon dans le jus, porter à ébullition en remuant, cuire 2 minutes, ajouter les cerises et laisser prendre au frais.',
      es: 'Escurrir las cerezas guardando el jugo y cortarlas en cuartos. Desleír el almidón en el jugo, llevar a ebullición removiendo, cocer 2 minutos, añadir las cerezas y enfriar hasta que estén firmes.',
      de: 'Die Kirschen abtropfen lassen, den Saft auffangen, und vierteln. Die Stärke mit dem Saft anrühren, unter Rühren aufkochen, 2 Minuten köcheln, die Kirschen zugeben und kalt fest werden lassen.',
    },
    {
      it: 'Sciogliere separatamente i due cioccolati, intingervi le ciliegie fresche (metà in ciascuno) e decorarle a fili con l’altro; con il fondente in un cornetto disegnare 12 alberelli su carta forno e lasciarli indurire.',
      en: 'Melt the two chocolates separately, dip the fresh cherries (half in each) and drizzle them with lines of the other; with the plain chocolate in a piping bag draw 12 little trees on baking paper and let them set.',
      fr: 'Faire fondre les deux chocolats séparément, y tremper les cerises fraîches (moitié dans chacun) et les décorer de filets de l’autre ; avec le noir dans un cornet, dessiner 12 petits sapins sur papier cuisson et laisser durcir.',
      es: 'Fundir por separado los dos chocolates, bañar las cerezas frescas (la mitad en cada uno) y decorarlas con hilos del otro; con el negro en una manga dibujar 12 arbolitos sobre papel de horno y dejar que endurezcan.',
      de: 'Die beiden Schokoladen getrennt schmelzen, die frischen Kirschen eintauchen (je die Hälfte) und mit Fäden der anderen verzieren; mit der dunklen Schokolade im Spritzbeutel 12 Bäumchen auf Backpapier zeichnen und fest werden lassen.',
    },
    {
      it: 'Montare la panna a punte morbide. Tagliare ogni pan di spagna in due e alternare quattro dischi con tre strati di ciliegie e metà della panna; coprire i lati con la panna e gli alberelli, decorare il bordo con ciuffi di panna e le ciliegie.',
      en: 'Whip the cream to soft peaks. Split each sponge in two and stack the four layers with three layers of cherries and half the cream; cover the sides with cream and the chocolate trees, pipe rosettes around the top and add the cherries.',
      fr: 'Fouetter la crème en pics souples. Couper chaque génoise en deux et monter les quatre disques avec trois couches de cerises et la moitié de la crème ; couvrir les côtés de crème et de sapins, pocher des rosaces sur le bord et ajouter les cerises.',
      es: 'Montar la nata a picos suaves. Cortar cada bizcocho en dos y alternar los cuatro discos con tres capas de cerezas y la mitad de la nata; cubrir los lados con nata y los arbolitos, hacer rosetas en el borde y poner las cerezas.',
      de: 'Die Sahne weich schlagen. Jeden Boden halbieren und die vier Böden mit drei Schichten Kirschen und der Hälfte der Sahne stapeln; die Seiten mit Sahne und den Bäumchen bedecken, am Rand Rosetten spritzen und die Kirschen daraufsetzen.',
    },
  ],
};
