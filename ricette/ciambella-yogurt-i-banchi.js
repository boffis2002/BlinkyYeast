// Dettaglio della ricetta «ciambella-yogurt-i-banchi»: quantità, dosi, note e procedimento (vedi ricette.js per le regole).
DETTAGLI['ciambella-yogurt-i-banchi'] = {
  contenitore: {
    forma: 'tondo', diametro: 26,
    nota: {
      it: 'Le dosi della ricetta sono per uno stampo a ciambella di 26 cm di diametro.',
      en: 'The recipe amounts are for a ring mould 26 cm in diameter.',
      fr: 'Les doses de la recette sont pour un moule à savarin de 26 cm de diamètre.',
      es: 'Las dosis de la receta son para un molde de rosca de 26 cm de diámetro.',
      de: 'Die Mengen des Rezepts gelten für eine Kranzform mit 26 cm Durchmesser.',
    },
  },
  dosi: [
    { nome: GRUPPI.impasto,
      ingredienti: [['yogurt', 150], ['zucchero', 200], ['olioRiso', 125], ['farinaDebole', 310], ['tuorli', 60],
                    ['albume', 90], ['bicarbonato', 3], ['sale', 2], ['scorzaAgrumi', 2]] },
    { nome: GRUPPI.glassa, fuoriPeso: true,
      ingredienti: [['acqua', 10], ['gin', 20], ['zuccheroVelo', 250], ['succoLimone', 20]] },
  ],
  notaDosi: {
    it: 'La farina è debole (W 160). La ricetta monta i tuorli con lo zucchero e gli albumi con «il resto», senza dire ' +
        'come dividerlo. Per lo stampo servono burro e farina a parte.',
    en: 'The flour is weak (W 160). The recipe whips the yolks with the sugar and the whites with "the rest", without ' +
        'saying how to split it. You also need butter and flour for the mould.',
    fr: 'La farine est faible (W 160). La recette monte les jaunes avec le sucre et les blancs avec « le reste », sans ' +
        'dire comment le répartir. Il faut aussi du beurre et de la farine pour le moule.',
    es: 'La harina es floja (W 160). La receta monta las yemas con el azúcar y las claras con «el resto», sin decir ' +
        'cómo repartirlo. Para el molde hace falta mantequilla y harina aparte.',
    de: 'Das Mehl ist schwach (W 160). Das Rezept schlägt das Eigelb mit dem Zucker und das Eiweiß mit „dem Rest“ auf, ' +
        'ohne zu sagen, wie er aufgeteilt wird. Für die Form braucht man zusätzlich Butter und Mehl.',
  },
  passi: [
    { it: 'Montare i tuorli con lo zucchero, il sale e la scorza di agrumi fino a un composto filante.',
      en: 'Whisk the yolks with the sugar, salt and citrus zest until the mixture falls in ribbons.',
      fr: 'Monter les jaunes avec le sucre, le sel et le zeste d’agrumes jusqu’à ce que le mélange fasse le ruban.',
      es: 'Montar las yemas con el azúcar, la sal y la ralladura de cítricos hasta que la mezcla haga hilo.',
      de: 'Eigelb mit Zucker, Salz und Zitrusschale aufschlagen, bis die Masse bandartig fließt.' },
    { it: 'Unire a mano lo yogurt con una spatola morbida, poi la farina e il bicarbonato.',
      en: 'Fold in the yoghurt by hand with a soft spatula, then the flour and bicarbonate.',
      fr: 'Incorporer à la main le yaourt avec une spatule souple, puis la farine et le bicarbonate.',
      es: 'Incorporar a mano el yogur con una espátula blanda y luego la harina y el bicarbonato.',
      de: 'Den Joghurt mit einem weichen Teigschaber von Hand unterheben, dann Mehl und Natron.' },
    { it: "Montare gli albumi con il resto dello zucchero fino a una consistenza setosa e unirli delicatamente; infine " +
          "aggiungere l'olio di riso.",
      en: 'Whip the whites with the rest of the sugar until silky and fold them in gently; finally add the rice oil.',
      fr: 'Monter les blancs avec le reste du sucre jusqu’à une consistance soyeuse et les incorporer délicatement ; ' +
          'ajouter enfin l’huile de riz.',
      es: 'Montar las claras con el resto del azúcar hasta que estén sedosas e incorporarlas con cuidado; por último ' +
          'añadir el aceite de arroz.',
      de: 'Eiweiß mit dem restlichen Zucker seidig aufschlagen und vorsichtig unterheben; zuletzt das Reisöl zugeben.' },
    { it: 'Versare in uno stampo a ciambella imburrato e infarinato.',
      en: 'Pour into a buttered and floured ring mould.',
      fr: 'Verser dans un moule à savarin beurré et fariné.',
      es: 'Verter en un molde de rosca engrasado y enharinado.',
      de: 'In eine gefettete und bemehlte Kranzform füllen.' },
    { it: 'Cuocere in forno preriscaldato a 175 °C per circa 30 minuti, o fino a 89 °C al cuore; sformare e far ' +
          'raffreddare su una griglia.',
      en: 'Bake in an oven preheated to 175 °C for about 30 minutes, or until the core reaches 89 °C; unmould and cool ' +
          'on a rack.',
      fr: 'Cuire au four préchauffé à 175 °C pendant environ 30 minutes, ou jusqu’à 89 °C à cœur ; démouler et ' +
          'laisser refroidir sur une grille.',
      es: 'Hornear en horno precalentado a 175 °C durante unos 30 minutos, o hasta 89 °C en el centro; desmoldar y ' +
          'dejar enfriar sobre una rejilla.',
      de: 'Im auf 175 °C vorgeheizten Ofen etwa 30 Minuten backen oder bis zu 89 °C Kerntemperatur; aus der Form ' +
          'lösen und auf einem Gitter abkühlen lassen.' },
    { it: 'Glassa: mescolare con una spatola acqua, gin, zucchero a velo e succo di limone e versarla sulla ciambella. ' +
          'Per una glassa più croccante, lasciarla rapprendere e ripassare la ciambella qualche minuto nel forno ' +
          'ancora caldo, poi cospargere di scorza di limone.',
      en: 'Glaze: stir together the water, gin, icing sugar and lemon juice with a spatula and pour it over the cake. ' +
          'For a crisper glaze, let it set and put the cake back in the still-warm oven for a few minutes, then ' +
          'sprinkle with lemon zest.',
      fr: 'Glaçage : mélanger à la spatule l’eau, le gin, le sucre glace et le jus de citron et le verser sur la ' +
          'couronne. Pour un glaçage plus croquant, le laisser figer et remettre la couronne quelques minutes dans le ' +
          'four encore chaud, puis parsemer de zeste de citron.',
      es: 'Glaseado: mezclar con una espátula el agua, la ginebra, el azúcar glas y el zumo de limón y verterlo sobre ' +
          'la rosca. Para un glaseado más crujiente, dejar que cuaje y volver a meter la rosca unos minutos en el horno ' +
          'aún caliente; luego espolvorear con ralladura de limón.',
      de: 'Glasur: Wasser, Gin, Puderzucker und Zitronensaft mit einem Teigschaber verrühren und über den Kranz geben. ' +
          'Für eine knusprigere Glasur fest werden lassen, den Kranz einige Minuten in den noch warmen Ofen stellen und ' +
          'mit Zitronenschale bestreuen.' },
  ],

};
