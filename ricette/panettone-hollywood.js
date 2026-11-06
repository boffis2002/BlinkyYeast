// Dettaglio della ricetta «panettone-hollywood»: quantità, dosi, note e procedimento (vedi ricette.js per le regole).
DETTAGLI['panettone-hollywood'] = {
  contenitore: {
    forma: 'tondo', diametro: 18,
    nota: {
      it: 'Le dosi della ricetta sono per uno stampo da panettone di 18 cm.',
      en: 'The recipe amounts are for an 18 cm panettone tin.',
      fr: 'Les doses de la recette sont pour un moule à panettone de 18 cm.',
      es: 'Las dosis de la receta son para un molde de panettone de 18 cm.',
      de: 'Die Mengen gelten für eine 18-cm-Panettoneform.',
    },
  },
  dosi: [
    { nome: GRUPPI.impasto,
      ingredienti: [['farinaForte', 500], ['sale', 7], ['zucchero', 50], ['lievitoSecco', 14], ['latte', 140], ['uova', 275], ['burro', 250], ['ciliegieSecche', 120], ['uvetta', 120], ['uvettaCorinto', 120], ['mandorle', 100]] },
    { nome: GRUPPI.finitura, fuoriPeso: true,
      ingredienti: [['uova']] },
  ],
  notaDosi: {
    it: 'Le uova sono 5, a temperatura ambiente (qui 55 g l’una), più uno per spennellare; il lievito è istantaneo (due bustine) e il latte tiepido. Le mandorle sono intere e pelate. Il tempo non comprende la notte in frigo.',
    en: 'There are 5 eggs at room temperature (55 g each here), plus one for brushing; the yeast is instant (two sachets) and the milk warm. The almonds are whole and blanched. The time excludes the night in the fridge.',
    fr: 'Il y a 5 œufs à température ambiante (ici 55 g chacun), plus un pour dorer ; la levure est instantanée (deux sachets) et le lait tiède. Les amandes sont entières et mondées. La durée ne comprend pas la nuit au frais.',
    es: 'Son 5 huevos a temperatura ambiente (aquí 55 g cada uno), más uno para pintar; la levadura es instantánea (dos sobres) y la leche tibia. Las almendras son enteras y peladas. El tiempo no incluye la noche en la nevera.',
    de: 'Es sind 5 zimmerwarme Eier (hier je 55 g), dazu eines zum Bestreichen; die Hefe ist Instanthefe (zwei Päckchen), die Milch warm. Die Mandeln sind ganz und geschält. Die Zeit ohne die Nacht im Kühlschrank.',
  },
  passi: [
    {
      it: 'In planetaria con il gancio mettere farina, sale, zucchero, lievito, latte e uova; impastare 2 minuti piano e 6–8 a velocità media, fino a una pasta morbida.',
      en: 'Put the flour, salt, sugar, yeast, milk and eggs in a stand mixer with the hook; mix for 2 minutes slowly and 6–8 at medium speed, to a soft dough.',
      fr: 'Au robot avec le crochet, mettre farine, sel, sucre, levure, lait et œufs ; pétrir 2 minutes lentement et 6 à 8 à vitesse moyenne, jusqu’à une pâte souple.',
      es: 'En la batidora con el gancho poner harina, sal, azúcar, levadura, leche y huevos; amasar 2 minutos despacio y 6–8 a velocidad media, hasta una masa blanda.',
      de: 'Mehl, Salz, Zucker, Hefe, Milch und Eier in die Küchenmaschine mit Knethaken geben; 2 Minuten langsam und 6–8 Minuten auf mittlerer Stufe zu einem weichen Teig kneten.',
    },
    {
      it: 'Aggiungere il burro morbido e impastare altri 5–8 minuti, raschiando la ciotola; unire frutta secca e mandorle.',
      en: 'Add the soft butter and mix for another 5–8 minutes, scraping down the bowl; add the dried fruit and almonds.',
      fr: 'Ajouter le beurre mou et pétrir encore 5 à 8 minutes en raclant la cuve ; ajouter fruits secs et amandes.',
      es: 'Añadir la mantequilla blanda y amasar otros 5–8 minutos, rascando el bol; incorporar la fruta seca y las almendras.',
      de: 'Die weiche Butter zugeben und weitere 5–8 Minuten kneten, dabei die Schüssel ausschaben; Trockenfrüchte und Mandeln unterkneten.',
    },
    {
      it: 'Coprire e lasciare in frigo una notte, finché l’impasto si rassoda.',
      en: 'Cover and leave in the fridge overnight, until the dough has firmed up.',
      fr: 'Couvrir et laisser une nuit au réfrigérateur, jusqu’à ce que la pâte se raffermisse.',
      es: 'Tapar y dejar una noche en la nevera, hasta que la masa se endurezca.',
      de: 'Abdecken und über Nacht in den Kühlschrank stellen, bis der Teig fest geworden ist.',
    },
    {
      it: 'Sgonfiare, formare una palla e metterla nello stampo imburrato; lasciar lievitare 2–3 ore, finché fa la cupola sopra il bordo.',
      en: 'Knock back, shape into a ball and put it in the buttered tin; prove for 2–3 hours, until it domes above the rim.',
      fr: 'Dégazer, bouler et mettre dans le moule beurré ; laisser lever 2 à 3 heures, jusqu’à ce qu’il bombe au-dessus du bord.',
      es: 'Desgasificar, formar una bola y ponerla en el molde engrasado; dejar fermentar 2–3 horas, hasta que haga cúpula sobre el borde.',
      de: 'Entgasen, zu einer Kugel formen und in die gebutterte Form legen; 2–3 Stunden gehen lassen, bis er sich über den Rand wölbt.',
    },
    {
      it: 'Spennellare con l’uovo e cuocere 25 minuti a 180 °C, poi altri 35 minuti a 150 °C, finché uno stecchino esce pulito; sformare subito.',
      en: 'Brush with egg and bake for 25 minutes at 180 °C, then 35 more at 150 °C, until a skewer comes out clean; unmould at once.',
      fr: 'Dorer à l’œuf et cuire 25 minutes à 180 °C, puis encore 35 minutes à 150 °C, jusqu’à ce qu’un pique ressorte propre ; démouler aussitôt.',
      es: 'Pintar con huevo y hornear 25 minutos a 180 °C y otros 35 a 150 °C, hasta que un palillo salga limpio; desmoldar enseguida.',
      de: 'Mit Ei bestreichen und 25 Minuten bei 180 °C, dann weitere 35 Minuten bei 150 °C backen, bis ein Stäbchen sauber herauskommt; sofort aus der Form nehmen.',
    },
  ],
};
