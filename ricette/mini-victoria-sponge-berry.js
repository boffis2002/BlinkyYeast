// Dettaglio della ricetta «mini-victoria-sponge-berry»: quantità, dosi, note e procedimento (vedi ricette.js per le regole).
DETTAGLI['mini-victoria-sponge-berry'] = {
  pezzi: {
    numero: 12, peso: 59,
    nota: {
      it: 'La ricetta è per 12 tortine in uno stampo da mini sandwich; il peso è quello dell’impasto.',
      en: 'The recipe makes 12 mini cakes in a mini sandwich tin; the weight is of the batter.',
      fr: 'La recette donne 12 petits gâteaux dans un moule à mini-génoises ; le poids est celui de la pâte.',
      es: 'La receta es para 12 bizcochitos en un molde de mini bizcochos; el peso es el de la masa.',
      de: 'Das Rezept ergibt 12 Törtchen in einem Mini-Sandwich-Blech; das Gewicht ist das des Teigs.',
    },
  },
  dosi: [
    { nome: GRUPPI.impasto,
      ingredienti: [['burro', 175], ['zucchero', 175], ['uova', 180], ['estrattoVaniglia'], ['farinaAutolievitante', 175]] },
    { nome: GRUPPI.marmellataFragole, fuoriPeso: true,
      ingredienti: [['fragole', 500], ['zuccheroGelificante', 500]] },
    { nome: GRUPPI.farcitura, fuoriPeso: true,
      ingredienti: [['panna', 300], ['zuccheroVelo']] },
  ],
  notaDosi: {
    it: 'Le uova sono 3 grandi (qui 60 g l’una), la vaniglia un cucchiaino; le fragole sono pulite e tagliate a metà. La marmellata viene più di quanta ne serve. La panna è da montare.',
    en: 'There are 3 large eggs (60 g each here) and a teaspoon of vanilla; the strawberries are hulled and halved. The jam makes more than you need. The cream is double cream.',
    fr: 'Il y a 3 gros œufs (ici 60 g chacun) et une cuillère à café de vanille ; les fraises sont équeutées et coupées en deux. La confiture donne plus que nécessaire. La crème est épaisse.',
    es: 'Son 3 huevos grandes (aquí 60 g cada uno) y una cucharadita de vainilla; las fresas limpias y en mitades. La mermelada sale más de la necesaria. La nata es para montar.',
    de: 'Es sind 3 große Eier (hier je 60 g) und ein Teelöffel Vanille; die Erdbeeren geputzt und halbiert. Die Marmelade ergibt mehr als nötig. Die Sahne ist Double Cream.',
  },
  passi: [
    {
      it: 'Schiacciare le fragole, unire lo zucchero gelificante e scaldare piano finché si scioglie; portare a bollore pieno e bollire 4 minuti esatti. Far raffreddare.',
      en: 'Crush the strawberries, add the jam sugar and heat gently until dissolved; bring to a full rolling boil and boil for exactly 4 minutes. Leave to cool.',
      fr: 'Écraser les fraises, ajouter le sucre à confiture et chauffer doucement jusqu’à dissolution ; porter à pleine ébullition et bouillir exactement 4 minutes. Laisser refroidir.',
      es: 'Aplastar las fresas, añadir el azúcar gelificante y calentar suave hasta que se disuelva; llevar a ebullición fuerte y hervir 4 minutos exactos. Dejar enfriar.',
      de: 'Die Erdbeeren zerdrücken, den Gelierzucker zugeben und sanft erhitzen, bis er sich löst; sprudelnd aufkochen und genau 4 Minuten kochen. Abkühlen lassen.',
    },
    {
      it: 'Scaldare il forno a 190 °C (170 °C ventilato) e imburrare gli stampini. Montare burro e zucchero, unire le uova poco alla volta e la vaniglia, poi incorporare la farina setacciata; dividere negli stampini e cuocere circa 15 minuti.',
      en: 'Heat the oven to 190 °C (170 °C fan) and butter the tins. Cream the butter and sugar, add the eggs a little at a time and the vanilla, then fold in the sifted flour; divide between the cups and bake for about 15 minutes.',
      fr: 'Chauffer le four à 190 °C (170 °C chaleur tournante) et beurrer les moules. Crémer beurre et sucre, ajouter les œufs peu à peu et la vanille, puis incorporer la farine tamisée ; répartir dans les alvéoles et cuire environ 15 minutes.',
      es: 'Calentar el horno a 190 °C (170 °C con ventilador) y engrasar los moldes. Batir mantequilla y azúcar, añadir los huevos poco a poco y la vainilla e incorporar la harina tamizada; repartir en los huecos y hornear unos 15 minutos.',
      de: 'Den Ofen auf 190 °C (170 °C Umluft) heizen und die Förmchen buttern. Butter und Zucker cremig rühren, nach und nach die Eier und die Vanille, dann das gesiebte Mehl unterheben; auf die Mulden verteilen und etwa 15 Minuten backen.',
    },
    {
      it: 'Far raffreddare, tagliare ogni tortina a metà e decorare la base con ciuffetti di panna montata e un filo di marmellata; chiudere e spolverare di zucchero a velo.',
      en: 'Cool, slice each cake in half and pipe dots of whipped cream on the base with a drizzle of jam; replace the tops and dust with icing sugar.',
      fr: 'Laisser refroidir, couper chaque gâteau en deux, pocher des points de crème fouettée sur la base avec un filet de confiture ; refermer et saupoudrer de sucre glace.',
      es: 'Dejar enfriar, cortar cada bizcochito por la mitad, poner puntos de nata montada en la base con un hilo de mermelada; tapar y espolvorear con azúcar glas.',
      de: 'Abkühlen lassen, jedes Törtchen halbieren, Sahnetupfen auf den Boden spritzen und Marmelade darüberträufeln; Deckel aufsetzen und mit Puderzucker bestäuben.',
    },
  ],
};
