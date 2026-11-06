// Dettaglio della ricetta «colomba-morandin»: quantità, dosi, note e procedimento (vedi ricette.js per le regole).
DETTAGLI['colomba-morandin'] = {
  pezzi: {
    numero: 3, peso: 750,
    nota: {
      it: 'La ricetta è per tre colombe da 750 g.',
      en: 'The recipe makes three 750 g colombe.',
      fr: 'La recette donne trois colombe de 750 g.',
      es: 'La receta es para tres colombas de 750 g.',
      de: 'Das Rezept ergibt drei Colombe zu 750 g.',
    },
  },
  dosi: [
    { nome: GRUPPI.primoImpasto,
      ingredienti: [['zucchero', 185], ['acqua', 150], ['tuorli', 250], ['lievitoMadre', 200],
                    ['farinaGrandiLievitati', 400], ['burro', 250]] },
    { nome: GRUPPI.secondoImpasto,
      ingredienti: [['farinaGrandiLievitati', 150], ['tuorli', 60], ['zucchero', 55], ['mieleMillefiori', 20],
                    ['burro', 60], ['sale', 12], ['vaniglia'], ['aranciaCandita', 500]] },
    { nome: GRUPPI.glassa, fuoriPeso: true,
      ingredienti: [['farinaNocciole', 150], ['zucchero', 100], ['fecola', 60], ['sale', 2], ['albume', 100],
                    ['mandorle'], ['granellaZucchero']] },
  ],
  notaDosi: {
    it: "Il lievito madre è al terzo rinfresco; la vaniglia è l'interno di una bacca. Nel primo impasto acqua e tuorli " +
        'si aggiungono in due volte. La glassa non conta nel peso delle colombe.',
    en: 'The starter is at its third refreshment; the vanilla is the seeds of one pod. In the first dough the water ' +
        'and yolks go in two additions. The glaze is not counted in the weight of the colombe.',
    fr: 'Le levain en est à son troisième rafraîchi ; la vanille est l’intérieur d’une gousse. Dans la première pâte, ' +
        'l’eau et les jaunes s’ajoutent en deux fois. Le glaçage ne compte pas dans le poids des colombe.',
    es: 'La masa madre está en su tercer refresco; la vainilla es el interior de una vaina. En el primer amasado el ' +
        'agua y las yemas se añaden en dos veces. El glaseado no cuenta en el peso de las colombas.',
    de: 'Der Sauerteig ist dreimal aufgefrischt; die Vanille ist das Mark einer Schote. Im ersten Teig werden Wasser ' +
        'und Eigelb in zwei Portionen zugegeben. Die Glasur zählt nicht zum Gewicht der Colombe.',
  },
  passi: [
    { it: 'Bagno: immergere il lievito madre solido in acqua a 38 °C con 2 g di zucchero per litro, finché torna a ' +
          'galla (20–30 minuti).',
      en: 'Bath: soak the stiff starter in water at 38 °C with 2 g of sugar per litre until it floats (20–30 minutes).',
      fr: 'Bain : plonger le levain dur dans de l’eau à 38 °C avec 2 g de sucre par litre, jusqu’à ce qu’il remonte ' +
          '(20 à 30 minutes).',
      es: 'Baño: sumergir la masa madre sólida en agua a 38 °C con 2 g de azúcar por litro, hasta que flote ' +
          '(20–30 minutos).',
      de: 'Bad: Den festen Sauerteig in 38 °C warmes Wasser mit 2 g Zucker pro Liter legen, bis er aufschwimmt ' +
          '(20–30 Minuten).' },
    { it: 'Primo rinfresco: per ogni kg di lievito 900 g di farina 00 e acqua a 24–26 °C pari al 30% del peso della ' +
          'farina; ripetere il bagno e lasciar lievitare 3 ore a 30 °C.',
      en: 'First refreshment: for each kg of starter, 900 g of 00 flour and water at 24–26 °C equal to 30% of the ' +
          'flour weight; repeat the bath and let it rise for 3 hours at 30 °C.',
      fr: 'Premier rafraîchi : pour chaque kg de levain, 900 g de farine 00 et de l’eau à 24–26 °C égale à 30 % du ' +
          'poids de la farine ; refaire le bain et laisser lever 3 heures à 30 °C.',
      es: 'Primer refresco: por cada kg de masa madre, 900 g de harina 00 y agua a 24–26 °C igual al 30 % del peso ' +
          'de la harina; repetir el baño y dejar fermentar 3 horas a 30 °C.',
      de: 'Erste Auffrischung: Pro kg Sauerteig 900 g Mehl Type 00 und 24–26 °C warmes Wasser in Höhe von 30 % des ' +
          'Mehlgewichts; das Bad wiederholen und 3 Stunden bei 30 °C gehen lassen.' },
    { it: "Secondo e terzo rinfresco come il primo, ma con l'acqua al 40% della farina: in tutto 9 ore di " +
          'lievitazione a 30 °C.',
      en: 'Second and third refreshments as the first, but with water at 40% of the flour: 9 hours of rising at ' +
          '30 °C in all.',
      fr: 'Deuxième et troisième rafraîchis comme le premier, mais avec de l’eau à 40 % de la farine : 9 heures de ' +
          'pousse à 30 °C au total.',
      es: 'Segundo y tercer refresco como el primero, pero con agua al 40 % de la harina: en total 9 horas de ' +
          'fermentación a 30 °C.',
      de: 'Zweite und dritte Auffrischung wie die erste, aber mit Wasser zu 40 % des Mehls: insgesamt 9 Stunden ' +
          'Gare bei 30 °C.' },
    { it: "Primo impasto: in planetaria far girare qualche minuto lo zucchero, due terzi dell'acqua e metà dei " +
          'tuorli; aggiungere il lievito madre (circa 1 minuto), poi tutta la farina, finché si forma la maglia glutinica.',
      en: 'First dough: run the sugar, two thirds of the water and half the yolks in the stand mixer for a few ' +
          'minutes; add the starter (about 1 minute), then all the flour, until the gluten network forms.',
      fr: 'Première pâte : faire tourner quelques minutes au robot le sucre, les deux tiers de l’eau et la moitié des ' +
          'jaunes ; ajouter le levain (environ 1 minute), puis toute la farine, jusqu’à former le réseau de gluten.',
      es: 'Primer amasado: batir unos minutos en la batidora el azúcar, dos tercios del agua y la mitad de las yemas; ' +
          'añadir la masa madre (1 minuto aprox.) y luego toda la harina, hasta formar la red de gluten.',
      de: 'Erster Teig: Zucker, zwei Drittel des Wassers und die Hälfte des Eigelbs einige Minuten in der ' +
          'Küchenmaschine laufen lassen; den Sauerteig zugeben (etwa 1 Minute), dann das ganze Mehl, bis sich das ' +
          'Klebergerüst bildet.' },
    { it: "Aggiungere il resto dei tuorli, poi il resto dell'acqua e, assorbiti i liquidi, il burro. Tutti gli " +
          'ingredienti vanno a temperatura ambiente.',
      en: 'Add the rest of the yolks, then the rest of the water and, once the liquids are absorbed, the butter. ' +
          'All ingredients should be at room temperature.',
      fr: 'Ajouter le reste des jaunes, puis le reste de l’eau et, une fois les liquides absorbés, le beurre. Tous ' +
          'les ingrédients doivent être à température ambiante.',
      es: 'Añadir el resto de las yemas, luego el resto del agua y, absorbidos los líquidos, la mantequilla. Todos ' +
          'los ingredientes a temperatura ambiente.',
      de: 'Den Rest des Eigelbs, dann den Rest des Wassers und, wenn die Flüssigkeit aufgenommen ist, die Butter ' +
          'zugeben. Alle Zutaten sollten Raumtemperatur haben.' },
    { it: "Mettere l'impasto in una ciotola che ne contenga il triplo, ungerne la superficie di burro e lasciarlo " +
          'triplicare a non più di 26 °C; poi farlo raffreddare circa 30 minuti in frigorifero.',
      en: 'Put the dough in a bowl three times its size, brush the top with butter and let it triple at no more ' +
          'than 26 °C; then chill it for about 30 minutes in the fridge.',
      fr: 'Mettre la pâte dans un bol trois fois plus grand, beurrer la surface et la laisser tripler à 26 °C au ' +
          'plus ; puis la refroidir environ 30 minutes au réfrigérateur.',
      es: 'Poner la masa en un bol que la triplique, untar la superficie con mantequilla y dejar que triplique a no ' +
          'más de 26 °C; luego enfriarla unos 30 minutos en la nevera.',
      de: 'Den Teig in eine Schüssel mit dreifachem Volumen geben, die Oberfläche mit Butter bestreichen und bei ' +
          'höchstens 26 °C auf das Dreifache gehen lassen; dann etwa 30 Minuten kühlen.' },
    { it: 'Secondo impasto: in planetaria far legare bene la farina con il primo impasto, poi aggiungere uno alla ' +
          "volta tuorlo, zucchero e miele, aspettando che ciascuno sia assorbito; il sale va insieme al burro e alla " +
          "vaniglia, l'arancia candita per ultima.",
      en: 'Second dough: in the stand mixer let the flour bind well with the first dough, then add the yolk, sugar ' +
          'and honey one at a time, waiting for each to be absorbed; the salt goes in with the butter and vanilla, ' +
          'the candied orange last.',
      fr: 'Deuxième pâte : au robot, bien lier la farine avec la première pâte, puis ajouter un à un le jaune, le sucre ' +
          'et le miel en attendant que chacun soit absorbé ; le sel va avec le beurre et la vanille, l’orange confite ' +
          'en dernier.',
      es: 'Segundo amasado: en la batidora ligar bien la harina con el primer amasado y añadir de uno en uno la yema, ' +
          'el azúcar y la miel, esperando a que cada uno se absorba; la sal va con la mantequilla y la vainilla, la ' +
          'naranja confitada al final.',
      de: 'Zweiter Teig: In der Küchenmaschine das Mehl gut mit dem ersten Teig verbinden, dann nacheinander Eigelb, ' +
          'Zucker und Honig zugeben und jeweils warten, bis alles aufgenommen ist; das Salz kommt mit Butter und ' +
          'Vanille, das Orangeat zuletzt.' },
    { it: "Lasciar puntare l'impasto circa 1 ora, dividerlo nel peso voluto, pirlarlo e metterlo negli stampi.",
      en: 'Let the dough rest for about 1 hour, divide it to the desired weight, round it and put it in the moulds.',
      fr: 'Laisser pointer la pâte environ 1 heure, la diviser au poids voulu, la bouler et la mettre dans les moules.',
      es: 'Dejar reposar la masa 1 hora aprox., dividirla al peso deseado, bolearla y ponerla en los moldes.',
      de: 'Den Teig etwa 1 Stunde ruhen lassen, auf das gewünschte Gewicht teilen, rund wirken und in die Formen geben.' },
    { it: 'Lasciar lievitare a 30 °C per 4–5 ore, o a temperatura ambiente, finché arriva 2–3 cm sotto il bordo ' +
          'dello stampo.',
      en: 'Let it rise at 30 °C for 4–5 hours, or at room temperature, until it is 2–3 cm below the rim of the mould.',
      fr: 'Laisser lever à 30 °C pendant 4 à 5 heures, ou à température ambiante, jusqu’à 2–3 cm sous le bord du moule.',
      es: 'Dejar fermentar a 30 °C durante 4–5 horas, o a temperatura ambiente, hasta 2–3 cm por debajo del borde del ' +
          'molde.',
      de: 'Bei 30 °C 4–5 Stunden oder bei Raumtemperatur gehen lassen, bis der Teig 2–3 cm unter dem Formrand steht.' },
    { it: 'Glassa: mescolare farina di nocciole o mandorle, zucchero, fecola, sale e albume; coprire ogni colomba e ' +
          'guarnire con mandorle e granella di zucchero.',
      en: 'Glaze: mix the ground hazelnuts or almonds, sugar, starch, salt and egg white; cover each colomba and ' +
          'decorate with almonds and sugar nibs.',
      fr: 'Glaçage : mélanger la poudre de noisettes ou d’amandes, le sucre, la fécule, le sel et le blanc d’œuf ; ' +
          'napper chaque colomba et décorer d’amandes et de sucre en grains.',
      es: 'Glaseado: mezclar la harina de avellana o almendra, el azúcar, la fécula, la sal y la clara; cubrir cada ' +
          'colomba y decorar con almendras y granillo de azúcar.',
      de: 'Glasur: Gemahlene Haselnüsse oder Mandeln, Zucker, Stärke, Salz und Eiweiß mischen; jede Colomba damit ' +
          'bedecken und mit Mandeln und Hagelzucker bestreuen.' },
    { it: 'Cuocere 10 minuti a 130 °C, poi a 150 °C fino a 92 °C al cuore. Sfornare e capovolgere subito.',
      en: 'Bake for 10 minutes at 130 °C, then at 150 °C until the core reaches 92 °C. Take out and turn upside down ' +
          'immediately.',
      fr: 'Cuire 10 minutes à 130 °C, puis à 150 °C jusqu’à 92 °C à cœur. Défourner et retourner aussitôt.',
      es: 'Hornear 10 minutos a 130 °C y luego a 150 °C hasta 92 °C en el centro. Sacar y dar la vuelta enseguida.',
      de: '10 Minuten bei 130 °C backen, dann bei 150 °C bis zu einer Kerntemperatur von 92 °C. Herausnehmen und ' +
          'sofort umdrehen.' },
  ],

};
