// Dettaglio della ricetta «tortano-peppe-guida»: quantità, dosi, note e procedimento (vedi ricette.js per le regole).
DETTAGLI['tortano-peppe-guida'] = {
  contenitore: {
    forma: 'tondo', diametro: 28,
    nota: {
      it: 'Le dosi della ricetta sono per uno stampo a ciambella da 28 cm a bordi alti.',
      en: 'The recipe amounts are for a 28 cm high-sided ring mould.',
      fr: 'Les doses de la recette sont pour un moule en couronne de 28 cm à bords hauts.',
      es: 'Las dosis de la receta son para un molde de rosca de 28 cm de bordes altos.',
      de: 'Die Mengen gelten für eine hohe Kranzform von 28 cm.',
    },
  },
  dosi: [
    { nome: GRUPPI.impasto,
      ingredienti: [['farina00', 500], ['farinaManitoba', 500], ['acqua', 600], ['lievitoBirra', 4], ['sale', 20], ['zucchero']] },
    { nome: GRUPPI.ripieno,
      ingredienti: [['strutto', 200], ['salumiMisti', 300], ['uova'], ['parmigiano'], ['pecorinoRomano'], ['pepe']] },
    { nome: GRUPPI.finitura, fuoriPeso: true,
      ingredienti: [['uova']] },
  ],
  notaDosi: {
    it: 'Nel ripieno vanno 5–6 uova sode a pezzetti; sopra 4 uova crude intere. Lo zucchero è un cucchiaino; servono strutto per lo stampo e, a piacere, formaggi a dadini.',
    en: 'The filling takes 5–6 chopped hard-boiled eggs; on top go 4 whole raw eggs. The sugar is one teaspoon; you need lard for the mould and, if you like, diced cheese.',
    fr: 'La garniture prend 5 à 6 œufs durs en morceaux ; dessus, 4 œufs crus entiers. Le sucre est une cuillère à café ; il faut du saindoux pour le moule et, au choix, des fromages en dés.',
    es: 'El relleno lleva 5–6 huevos duros troceados; encima, 4 huevos crudos enteros. El azúcar es una cucharadita; hace falta manteca para el molde y, si se quiere, quesos en dados.',
    de: 'Die Füllung enthält 5–6 gehackte harte Eier; obenauf kommen 4 ganze rohe Eier. Der Zucker ist ein Teelöffel; man braucht Schmalz für die Form und nach Belieben Käsewürfel.',
  },
  passi: [
    {
      it: 'Impastare farina e lievito con metà dell’acqua e lo zucchero; aggiungere lentamente il resto dell’acqua e verso la fine il sale, fino a un panetto liscio.',
      en: 'Mix the flour and yeast with half the water and the sugar; slowly add the rest of the water and, towards the end, the salt, until smooth.',
      fr: 'Pétrir la farine et la levure avec la moitié de l’eau et le sucre ; ajouter lentement le reste de l’eau et, vers la fin, le sel, jusqu’à un pâton lisse.',
      es: 'Amasar la harina y la levadura con la mitad del agua y el azúcar; añadir despacio el resto del agua y al final la sal, hasta una masa lisa.',
      de: 'Mehl und Hefe mit der Hälfte des Wassers und dem Zucker verkneten; langsam das restliche Wasser und gegen Ende das Salz zugeben, bis der Teig glatt ist.',
    },
    {
      it: 'Lasciar riposare coperto 20 minuti e fare delle pieghe; ripetere 3 volte ogni 20 minuti.',
      en: 'Rest covered for 20 minutes and give folds; repeat 3 times every 20 minutes.',
      fr: 'Laisser reposer couvert 20 minutes et rabattre ; recommencer 3 fois toutes les 20 minutes.',
      es: 'Dejar reposar tapado 20 minutos y hacer pliegues; repetir 3 veces cada 20 minutos.',
      de: 'Abgedeckt 20 Minuten ruhen lassen und falten; dreimal alle 20 Minuten wiederholen.',
    },
    {
      it: 'Lasciar lievitare un’ora in una ciotola unta, poi far maturare un giorno in frigo, coperto con pellicola unta a contatto.',
      en: 'Let it rise for an hour in an oiled bowl, then mature it in the fridge for a day, covered with oiled film.',
      fr: 'Laisser lever une heure dans un saladier huilé, puis maturer un jour au réfrigérateur sous film huilé au contact.',
      es: 'Dejar fermentar una hora en un bol aceitado y luego madurar un día en la nevera, tapada con film aceitado en contacto.',
      de: 'Eine Stunde in einer geölten Schüssel gehen lassen, dann einen Tag im Kühlschrank unter geölter Folie reifen lassen.',
    },
    {
      it: 'Riportare a temperatura ambiente, fare due giri di pieghe ogni 20 minuti e lasciar raddoppiare.',
      en: 'Bring back to room temperature, give two rounds of folds 20 minutes apart and let it double.',
      fr: 'Remettre à température ambiante, rabattre deux fois à 20 minutes d’intervalle et laisser doubler.',
      es: 'Llevar a temperatura ambiente, hacer dos tandas de pliegues cada 20 minutos y dejar que doble.',
      de: 'Auf Raumtemperatur bringen, zweimal im Abstand von 20 Minuten falten und auf das Doppelte gehen lassen.',
    },
    {
      it: 'Allargare la pasta a mano in un rettangolo, ungerla di strutto e distribuire, lasciando liberi i bordi, salumi, uova sode, parmigiano, pecorino e pepe; arrotolare dal lato lungo.',
      en: 'Stretch the dough by hand into a rectangle, spread it with lard and, leaving the edges free, scatter the meats, hard-boiled eggs, Parmesan, pecorino and pepper; roll up from the long side.',
      fr: 'Étirer la pâte à la main en rectangle, la graisser de saindoux et répartir, en laissant les bords libres, charcuterie, œufs durs, parmesan, pecorino et poivre ; rouler depuis le grand côté.',
      es: 'Estirar la masa a mano en un rectángulo, untarla con manteca y repartir, dejando libres los bordes, embutidos, huevos duros, parmesano, pecorino y pimienta; enrollar por el lado largo.',
      de: 'Den Teig von Hand zu einem Rechteck ziehen, mit Schmalz bestreichen und mit freiem Rand Wurst, harte Eier, Parmesan, Pecorino und Pfeffer verteilen; von der Längsseite aufrollen.',
    },
    {
      it: 'Sistemarlo nello stampo unto, saldando le estremità, e lasciar lievitare fino al bordo.',
      en: 'Place it in the greased mould, sealing the ends, and let it rise to the rim.',
      fr: 'Le placer dans le moule graissé en soudant les extrémités et laisser lever jusqu’au bord.',
      es: 'Colocarlo en el molde engrasado, uniendo los extremos, y dejar fermentar hasta el borde.',
      de: 'In die gefettete Form legen, die Enden verbinden und bis zum Rand gehen lassen.',
    },
    {
      it: 'Inserire le 4 uova crude ben sciacquate, bloccate con due striscioline di pasta, e cuocere a 170 °C per 45 minuti.',
      en: 'Set the 4 well-rinsed raw eggs on top, held with two thin strips of dough, and bake at 170 °C for 45 minutes.',
      fr: 'Placer les 4 œufs crus bien rincés, maintenus par deux fines bandes de pâte, et cuire à 170 °C pendant 45 minutes.',
      es: 'Colocar los 4 huevos crudos bien lavados, sujetos con dos tiras de masa, y hornear a 170 °C durante 45 minutos.',
      de: 'Die 4 gut abgespülten rohen Eier mit zwei Teigstreifen fixieren und bei 170 °C 45 Minuten backen.',
    },
  ],
};
