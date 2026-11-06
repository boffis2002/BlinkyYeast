// Dettaglio della ricetta «calzone-romano-casa»: quantità, dosi, note e procedimento (vedi ricette.js per le regole).
DETTAGLI['calzone-romano-casa'] = {
  pezzi: {
    numero: 4, peso: 200,
    nota: {
      it: 'La ricetta è per 4 calzoni da panetti di 200 g, stesi a 30 cm. Il ripieno non conta nel peso dei panetti.',
      en: 'The recipe makes 4 calzoni from 200 g dough balls, stretched to 30 cm. The filling is not counted in the weight of the dough balls.',
      fr: 'La recette donne 4 calzoni à partir de pâtons de 200 g, abaissés à 30 cm. La garniture ne compte pas dans le poids des pâtons.',
      es: 'La receta es para 4 calzoni con bolas de 200 g, estiradas a 30 cm. El relleno no cuenta en el peso de las bolas.',
      de: 'Das Rezept ergibt 4 Calzoni aus Teiglingen von 200 g, auf 30 cm ausgerollt. Die Füllung zählt nicht zum Gewicht der Teiglinge.',
    },
  },
  dosi: [
    { nome: GRUPPI.impasto,
      ingredienti: [['acqua', 320], ['farinaTenero0', 400], ['farinaIntegrale', 80], ['sale', 10], ['olioEvo', 10], ['lievitoSecco', 1.5]] },
    { nome: GRUPPI.ripieno, fuoriPeso: true,
      ingredienti: [['fiordilatte', 360], ['prosciuttoCrudo', 60], ['tuorli', 120]] },
  ],
  notaDosi: {
    it: 'Al posto di 1,5 g di lievito secco se ne possono usare 4 di fresco. I tuorli sono 6 (qui 20 g l’uno).',
    en: 'Instead of 1.5 g of dried yeast you can use 4 g of fresh. There are 6 yolks (20 g each here).',
    fr: 'On peut remplacer 1,5 g de levure sèche par 4 g de fraîche. Il y a 6 jaunes (ici 20 g chacun).',
    es: 'En lugar de 1,5 g de levadura seca se pueden usar 4 g de fresca. Son 6 yemas (aquí 20 g cada una).',
    de: 'Statt 1,5 g Trockenhefe kann man 4 g Frischhefe nehmen. Es sind 6 Eigelb (hier je 20 g).',
  },
  passi: [
    {
      it: 'In una ciotola mettere metà dell’acqua e della farina con il lievito e lavorare con una spatola, aggiungendo poco alla volta il resto; unire il sale.',
      en: 'In a bowl put half the water and flour with the yeast and work with a spatula, gradually adding the rest; add the salt.',
      fr: 'Dans un saladier, mettre la moitié de l’eau et de la farine avec la levure et travailler à la spatule en ajoutant peu à peu le reste ; ajouter le sel.',
      es: 'En un bol poner la mitad del agua y de la harina con la levadura y trabajar con una espátula, añadiendo poco a poco el resto; agregar la sal.',
      de: 'Die Hälfte von Wasser und Mehl mit der Hefe in eine Schüssel geben und mit einem Teigschaber verrühren, nach und nach den Rest zufügen; Salz zugeben.',
    },
    {
      it: 'Trasferire sul piano, lavorare a mano aggiungendo l’olio a filo fino a un panetto compatto e farlo riposare 2 ore sotto un panno umido.',
      en: 'Turn out, knead by hand trickling in the oil until compact and rest for 2 hours under a damp cloth.',
      fr: 'Transférer sur le plan, pétrir à la main en ajoutant l’huile en filet jusqu’à un pâton compact et laisser reposer 2 heures sous un linge humide.',
      es: 'Pasar a la mesa, amasar a mano añadiendo el aceite en hilo hasta una masa compacta y dejar reposar 2 horas bajo un paño húmedo.',
      de: 'Auf die Arbeitsfläche geben, unter Zugabe des Öls von Hand zu einem kompakten Teig kneten und 2 Stunden unter einem feuchten Tuch ruhen lassen.',
    },
    {
      it: 'Chiudere in una ciotola con pellicola e tenere in frigo, nella zona meno fredda, fino al giorno dopo.',
      en: 'Seal in a bowl with film and keep in the least cold part of the fridge until the next day.',
      fr: 'Fermer dans un saladier sous film et garder dans la zone la moins froide du réfrigérateur jusqu’au lendemain.',
      es: 'Cerrar en un bol con film y guardar en la zona menos fría de la nevera hasta el día siguiente.',
      de: 'In einer Schüssel mit Folie verschlossen im wärmsten Teil des Kühlschranks bis zum nächsten Tag lagern.',
    },
    {
      it: 'Toglierlo dal frigo 3 ore prima della cottura; dopo 30 minuti dividerlo in 4 panetti da 200 g e lasciarli lievitare 2 ore sotto un panno umido.',
      en: 'Take it out 3 hours before baking; after 30 minutes divide into 4 balls of 200 g and let them rise for 2 hours under a damp cloth.',
      fr: 'Le sortir 3 heures avant la cuisson ; après 30 minutes, le diviser en 4 pâtons de 200 g et les laisser lever 2 heures sous un linge humide.',
      es: 'Sacarla 3 horas antes de hornear; a los 30 minutos dividirla en 4 bolas de 200 g y dejarlas fermentar 2 horas bajo un paño húmedo.',
      de: '3 Stunden vor dem Backen herausnehmen; nach 30 Minuten in 4 Teiglinge à 200 g teilen und 2 Stunden unter einem feuchten Tuch gehen lassen.',
    },
    {
      it: 'Stendere ogni panetto, prima a mano e poi con il matterello, in un disco di 30 cm e farlo rilassare 10 minuti. Su metà disco mettere il fior di latte asciugato, il tuorlo e il prosciutto, e chiudere bene.',
      en: 'Stretch each ball, first by hand then with a rolling pin, into a 30 cm disc and let it relax for 10 minutes. On half the disc put the drained fior di latte, the yolk and the prosciutto, and seal well.',
      fr: 'Abaisser chaque pâton, d’abord à la main puis au rouleau, en un disque de 30 cm et le laisser détendre 10 minutes. Sur une moitié, mettre le fior di latte égoutté, le jaune et le jambon, et bien fermer.',
      es: 'Estirar cada bola, primero a mano y luego con rodillo, en un disco de 30 cm y dejarlo relajar 10 minutos. Sobre la mitad poner el fior di latte escurrido, la yema y el jamón, y cerrar bien.',
      de: 'Jeden Teigling erst von Hand, dann mit dem Nudelholz zu einer 30-cm-Scheibe ausrollen und 10 Minuten entspannen lassen. Auf eine Hälfte den abgetropften Fior di Latte, das Eigelb und den Schinken legen und gut verschließen.',
    },
    {
      it: 'Cuocere a 300 °C, o al massimo, meglio su pietra refrattaria preriscaldata, per 8–13 minuti, finché è dorato.',
      en: 'Bake at 300 °C, or the maximum, ideally on a preheated baking stone, for 8–13 minutes, until golden.',
      fr: 'Cuire à 300 °C, ou au maximum, de préférence sur une pierre préchauffée, 8 à 13 minutes, jusqu’à dorure.',
      es: 'Hornear a 300 °C, o al máximo, mejor sobre piedra precalentada, durante 8–13 minutos, hasta que se dore.',
      de: 'Bei 300 °C oder Höchststufe, am besten auf einem vorgeheizten Pizzastein, 8–13 Minuten goldbraun backen.',
    },
  ],
};
