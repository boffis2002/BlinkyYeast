// Dettaglio della ricetta «povitica-hollywood»: quantità, dosi, note e procedimento (vedi ricette.js per le regole).
DETTAGLI['povitica-hollywood'] = {
  pezzi: {
    numero: 1, peso: 1132,
    nota: {
      it: 'La ricetta è per un dolce in uno stampo a cassetta da 1 kg (2 lb).',
      en: 'The recipe makes one loaf in a 1 kg (2 lb) loaf tin.',
      fr: 'La recette donne un pain dans un moule à cake de 1 kg (2 lb).',
      es: 'La receta es para un pan en un molde de 1 kg (2 lb).',
      de: 'Das Rezept ergibt ein Brot in einer 1-kg-Kastenform (2 lb).',
    },
  },
  dosi: [
    { nome: GRUPPI.impasto,
      ingredienti: [['farina00', 300], ['zucchero', 40], ['sale', 7], ['lievitoSecco', 10], ['burro', 30], ['uova', 60], ['vaniglia'], ['latte', 150]] },
    { nome: GRUPPI.ripieno,
      ingredienti: [['burro', 60], ['latte', 60], ['noci', 280], ['vaniglia'], ['zucchero', 100], ['cacao'], ['tuorli', 20], ['burro', 15]] },
    { nome: GRUPPI.finitura, fuoriPeso: true,
      ingredienti: [['albume', 35]] },
    { nome: GRUPPI.glassa, fuoriPeso: true,
      ingredienti: [['zuccheroVelo', 100], ['acqua']] },
  ],
  notaDosi: {
    it: 'L’uovo dell’impasto è grande (qui 60 g); la vaniglia è mezza bacca per l’impasto e mezza per il ripieno. Nel ripieno il latte è 4 cucchiai, il cacao 2 cucchiai, e gli ultimi 15 g di burro fuso servono a spennellare la pasta stesa. Serve una tovaglia pulita su cui tirare la pasta.',
    en: 'The egg in the dough is large (60 g here); the vanilla is half a pod for the dough and half for the filling. In the filling the milk is 4 tablespoons, the cocoa 2 tablespoons, and the last 15 g of melted butter is for brushing the stretched dough. You need a clean sheet to stretch the dough on.',
    fr: 'L’œuf de la pâte est gros (ici 60 g) ; la vanille est une demi-gousse pour la pâte et une demie pour la garniture. Dans la garniture, le lait fait 4 cuillères à soupe, le cacao 2, et les derniers 15 g de beurre fondu servent à badigeonner la pâte étirée. Il faut un drap propre pour étirer la pâte.',
    es: 'El huevo de la masa es grande (aquí 60 g); la vainilla es media vaina para la masa y media para el relleno. En el relleno la leche son 4 cucharadas, el cacao 2, y los últimos 15 g de mantequilla derretida son para pintar la masa estirada. Hace falta un mantel limpio para estirar la masa.',
    de: 'Das Ei im Teig ist groß (hier 60 g); die Vanille ist eine halbe Schote für den Teig und eine halbe für die Füllung. In der Füllung sind es 4 Esslöffel Milch und 2 Esslöffel Kakao; die letzten 15 g geschmolzene Butter sind zum Bestreichen des ausgezogenen Teigs. Man braucht ein sauberes Tuch zum Ausziehen.',
  },
  passi: [
    {
      it: 'In planetaria con il gancio mettere farina e zucchero, sale e lievito ai lati opposti, burro fuso, uovo, vaniglia e latte tiepido; impastare piano e poi 5–8 minuti a velocità media. Lasciar raddoppiare circa un’ora.',
      en: 'In a stand mixer with the hook put the flour and sugar, the salt and yeast on opposite sides, the melted butter, egg, vanilla and warm milk; mix slowly, then 5–8 minutes at medium speed. Let it double for about an hour.',
      fr: 'Au robot avec le crochet, mettre farine et sucre, sel et levure de part et d’autre, beurre fondu, œuf, vanille et lait tiède ; pétrir lentement puis 5 à 8 minutes à vitesse moyenne. Laisser doubler environ une heure.',
      es: 'En la batidora con el gancho poner harina y azúcar, sal y levadura en lados opuestos, mantequilla derretida, huevo, vainilla y leche tibia; amasar despacio y luego 5–8 minutos a velocidad media. Dejar que doble una hora aprox.',
      de: 'In der Küchenmaschine mit Knethaken Mehl und Zucker, Salz und Hefe auf gegenüberliegenden Seiten, geschmolzene Butter, Ei, Vanille und warme Milch langsam, dann 5–8 Minuten auf mittlerer Stufe kneten. Etwa eine Stunde auf das Doppelte gehen lassen.',
    },
    {
      it: 'Per il ripieno sciogliere 60 g di burro nel latte; frullare noci, vaniglia, zucchero e cacao fino a una sabbia, poi unire il tuorlo e il burro con il latte.',
      en: 'For the filling melt 60 g of the butter in the milk; blitz the walnuts, vanilla, sugar and cocoa to a sandy powder, then add the yolk and the butter and milk.',
      fr: 'Pour la garniture, faire fondre 60 g de beurre dans le lait ; mixer noix, vanille, sucre et cacao en poudre sableuse, puis ajouter le jaune et le mélange beurre-lait.',
      es: 'Para el relleno derretir 60 g de mantequilla en la leche; triturar nueces, vainilla, azúcar y cacao hasta una arena y añadir la yema y la mezcla de mantequilla y leche.',
      de: 'Für die Füllung 60 g Butter in der Milch schmelzen; Walnüsse, Vanille, Zucker und Kakao sandig mahlen, dann Eigelb und die Butter-Milch zugeben.',
    },
    {
      it: 'Su una tovaglia infarinata stendere la pasta a 50 × 30 cm e spennellarla con il burro fuso; con il dorso delle mani tirarla fino a circa 1 m × 60 cm, così sottile da vedere la tovaglia.',
      en: 'On a floured sheet roll the dough to 50 × 30 cm and brush with the melted butter; with the backs of your hands stretch it to about 1 m × 60 cm, thin enough to see the sheet through it.',
      fr: 'Sur un drap fariné, abaisser la pâte à 50 × 30 cm et la badigeonner de beurre fondu ; du dos des mains, l’étirer à environ 1 m × 60 cm, assez fine pour voir le drap au travers.',
      es: 'Sobre un mantel enharinado estirar la masa a 50 × 30 cm y pintarla con la mantequilla derretida; con el dorso de las manos estirarla hasta 1 m × 60 cm aprox., tan fina que se vea el mantel.',
      de: 'Auf einem bemehlten Tuch den Teig auf 50 × 30 cm ausrollen und mit der geschmolzenen Butter bestreichen; mit den Handrücken auf etwa 1 m × 60 cm ausziehen, so dünn, dass man das Tuch durchsieht.',
    },
    {
      it: 'Stendere il ripieno, arrotolare dal lato lungo sollevando la tovaglia e adagiare il rotolo nello stampo imburrato a U, poi ripiegarlo sopra a formare una seconda U. Lasciar lievitare un’ora in un sacchetto.',
      en: 'Spread over the filling, roll up from the long side by lifting the sheet and lay the roll in the buttered tin in a U, then fold it back over itself in a second U. Let it rise for an hour inside a bag.',
      fr: 'Étaler la garniture, rouler depuis le grand côté en soulevant le drap et poser le rouleau en U dans le moule beurré, puis le replier dessus en un second U. Laisser lever une heure dans un sac.',
      es: 'Extender el relleno, enrollar desde el lado largo levantando el mantel y colocar el rollo en U en el molde engrasado, luego doblarlo encima en una segunda U. Dejar fermentar una hora dentro de una bolsa.',
      de: 'Die Füllung verstreichen, von der Längsseite her mithilfe des Tuchs aufrollen und die Rolle U-förmig in die gebutterte Form legen, dann in einem zweiten U darüber zurücklegen. In einem Beutel eine Stunde gehen lassen.',
    },
    {
      it: 'Spennellare con l’albume e cuocere 15 minuti a 180 °C (160 °C ventilato), poi 45 a 150 °C. Lasciar raffreddare 30 minuti nello stampo e glassare con zucchero a velo e poche gocce d’acqua.',
      en: 'Brush with the egg white and bake for 15 minutes at 180 °C (160 °C fan), then 45 at 150 °C. Cool for 30 minutes in the tin and drizzle with icing made from the icing sugar and a few drops of water.',
      fr: 'Badigeonner de blanc d’œuf et cuire 15 minutes à 180 °C (160 °C chaleur tournante), puis 45 à 150 °C. Laisser refroidir 30 minutes dans le moule et napper d’un glaçage de sucre glace et de quelques gouttes d’eau.',
      es: 'Pintar con la clara y hornear 15 minutos a 180 °C (160 °C con ventilador) y luego 45 a 150 °C. Dejar enfriar 30 minutos en el molde y glasear con azúcar glas y unas gotas de agua.',
      de: 'Mit Eiweiß bestreichen und 15 Minuten bei 180 °C (160 °C Umluft), dann 45 Minuten bei 150 °C backen. 30 Minuten in der Form abkühlen lassen und mit einem Guss aus Puderzucker und wenigen Tropfen Wasser beträufeln.',
    },
  ],
};
