// Dettaglio della ricetta «jam-tarts-hollywood»: quantità, dosi, note e procedimento (vedi ricette.js per le regole).
DETTAGLI['jam-tarts-hollywood'] = {
  pezzi: {
    numero: 20, peso: 13,
    nota: {
      it: 'La ricetta è per 20 crostatine; il peso è quello della pasta.',
      en: 'The recipe makes 20 tarts; the weight is of the pastry.',
      fr: 'La recette donne 20 tartelettes ; le poids est celui de la pâte.',
      es: 'La receta es para 20 tartaletas; el peso es el de la masa.',
      de: 'Das Rezept ergibt 20 Törtchen; das Gewicht ist das des Teigs.',
    },
  },
  dosi: [
    { nome: GRUPPI.impasto,
      ingredienti: [['burro', 85], ['farinaAutolievitante', 170], ['acqua']] },
    { nome: GRUPPI.ripieno, fuoriPeso: true,
      ingredienti: [['confettura']] },
  ],
  notaDosi: {
    it: 'Al posto del burro si può usare margarina. L’acqua è qualche cucchiaio; la marmellata un cucchiaino per crostatina.',
    en: 'Margarine can replace the butter. The water is a few tablespoons; the jam one teaspoon per tart.',
    fr: 'La margarine peut remplacer le beurre. L’eau fait quelques cuillères à soupe ; la confiture une cuillère à café par tartelette.',
    es: 'La margarina puede sustituir a la mantequilla. El agua son unas cucharadas; la mermelada una cucharadita por tartaleta.',
    de: 'Statt Butter geht auch Margarine. Wasser einige Esslöffel; Marmelade ein Teelöffel pro Törtchen.',
  },
  passi: [
    {
      it: 'Scaldare il forno a 200 °C (180 °C ventilato). Sabbiare burro e farina, poi aggiungere qualche cucchiaio d’acqua fino a formare una pasta.',
      en: 'Heat the oven to 200 °C (180 °C fan). Rub the butter into the flour to crumbs, then add a few tablespoons of water to form a dough.',
      fr: 'Chauffer le four à 200 °C (180 °C chaleur tournante). Sabler beurre et farine, puis ajouter quelques cuillères d’eau pour former une pâte.',
      es: 'Calentar el horno a 200 °C (180 °C con ventilador). Arenar la mantequilla con la harina y añadir unas cucharadas de agua hasta formar una masa.',
      de: 'Den Ofen auf 200 °C (180 °C Umluft) heizen. Butter und Mehl zu Bröseln reiben, dann einige Esslöffel Wasser zu einem Teig einarbeiten.',
    },
    {
      it: 'Stenderla sul piano infarinato e ritagliare circa 20 dischi; sistemarli nello stampo e mettere un cucchiaino di marmellata in ognuno, senza esagerare. Con i ritagli si possono fare coperchi a stella.',
      en: 'Roll it out on a floured surface and cut about 20 rounds; put them in the tin and add a teaspoon of jam to each, not too much. The trimmings can make star-shaped lids.',
      fr: 'L’abaisser sur un plan fariné et découper environ 20 disques ; les mettre dans le moule et ajouter une cuillère à café de confiture dans chacun, sans excès. Les chutes peuvent faire des couvercles en étoile.',
      es: 'Estirarla en la mesa enharinada y cortar unos 20 discos; ponerlos en el molde con una cucharadita de mermelada en cada uno, sin pasarse. Con los recortes se pueden hacer tapas en forma de estrella.',
      de: 'Auf bemehlter Fläche ausrollen und etwa 20 Kreise ausstechen; in die Form legen und je einen Teelöffel Marmelade hineingeben, nicht zu viel. Aus den Resten lassen sich Sterndeckel ausstechen.',
    },
    {
      it: 'Cuocere circa 30 minuti, finché la pasta è appena dorata, controllando dopo 20.',
      en: 'Bake for about 30 minutes, until the pastry is pale golden, checking after 20.',
      fr: 'Cuire environ 30 minutes, jusqu’à ce que la pâte soit légèrement dorée, en vérifiant après 20.',
      es: 'Hornear unos 30 minutos, hasta que la masa esté ligeramente dorada, comprobando a los 20.',
      de: 'Etwa 30 Minuten backen, bis der Teig hellbraun ist; nach 20 Minuten nachsehen.',
    },
  ],
};
