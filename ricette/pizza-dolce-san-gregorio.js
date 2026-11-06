// Dettaglio della ricetta «pizza-dolce-san-gregorio»: quantità, dosi, note e procedimento (vedi ricette.js per le regole).
DETTAGLI['pizza-dolce-san-gregorio'] = {
  pezzi: {
    numero: 1, peso: 4310,
    nota: {
      it: 'La ricetta è per una teglia, ma non ne indica la misura: la ricotta va a strati di circa 2 cm.',
      en: 'The recipe makes one tray but does not give its size: the ricotta goes in layers about 2 cm thick.',
      fr: 'La recette donne une plaque, sans en indiquer la taille : la ricotta se met en couches d’environ 2 cm.',
      es: 'La receta es para una bandeja, pero no indica su tamaño: la ricotta va en capas de unos 2 cm.',
      de: 'Das Rezept ergibt ein Blech, nennt aber keine Größe: Der Ricotta kommt in etwa 2 cm dicken Schichten.',
    },
  },
  dosi: [
    { nome: GRUPPI.frolla,
      ingredienti: [['farinaTenero', 1000], ['zucchero', 300], ['margarinaBurroStrutto', 300], ['tuorli']] },
    { nome: GRUPPI.ripieno,
      ingredienti: [['ricotta', 1000], ['zucchero', 300], ['albume'], ['cannella'], ['liquoreStrega'], ['sambuca'], ['fruttaCandita']] },
    { nome: GRUPPI.cremaCioccolato,
      ingredienti: [['uova', 110], ['zucchero', 200], ['amidoMais', 100], ['latte', 1000], ['cioccolatoFondente']] },
    { nome: GRUPPI.finitura, fuoriPeso: true,
      ingredienti: [['rum'], ['zucchero']] },
  ],
  notaDosi: {
    it: 'La fonte lascia «quanto basta» tuorli della frolla, albume della ricotta, liquori, canditi e cioccolato; la ricotta va passata e deve risultare cremosa. Nella crema le uova sono 2 (qui 55 g l’una); la cannella è in stecche.',
    en: 'The source leaves the pastry yolks, the egg white in the ricotta, the liqueurs, candied fruit and chocolate "to taste"; the ricotta is sieved and should be creamy. The custard has 2 eggs (55 g each here); the cinnamon is in sticks.',
    fr: 'La source laisse « à volonté » les jaunes de la pâte, le blanc de la ricotta, les liqueurs, les fruits confits et le chocolat ; la ricotta est passée et doit être crémeuse. La crème contient 2 œufs (ici 55 g chacun) ; la cannelle est en bâtons.',
    es: 'La fuente deja «a ojo» las yemas de la masa, la clara de la ricotta, los licores, la fruta confitada y el chocolate; la ricotta va pasada y debe quedar cremosa. La crema lleva 2 huevos (aquí 55 g cada uno); la canela es en rama.',
    de: 'Die Quelle lässt Eigelb im Teig, Eiweiß im Ricotta, Liköre, kandierte Früchte und Schokolade „nach Bedarf“; der Ricotta wird passiert und soll cremig sein. In der Creme sind 2 Eier (hier je 55 g); der Zimt ist in Stangen.',
  },
  passi: [
    {
      it: 'Frolla: impastare farina, zucchero, grasso e i tuorli che servono.',
      en: 'Pastry: mix the flour, sugar, fat and as many yolks as needed.',
      fr: 'Pâte : pétrir la farine, le sucre, la matière grasse et les jaunes nécessaires.',
      es: 'Masa: amasar la harina, el azúcar, la grasa y las yemas necesarias.',
      de: 'Teig: Mehl, Zucker, Fett und so viel Eigelb wie nötig verkneten.',
    },
    {
      it: 'Ripieno: amalgamare la ricotta passata con albume, zucchero, cannella, liquore Strega, Sambuca e canditi, fino a un composto cremoso.',
      en: 'Filling: mix the sieved ricotta with egg white, sugar, cinnamon, Strega, Sambuca and candied fruit until creamy.',
      fr: 'Garniture : mélanger la ricotta passée avec le blanc, le sucre, la cannelle, la Strega, la Sambuca et les fruits confits, jusqu’à obtenir une crème.',
      es: 'Relleno: mezclar la ricotta pasada con clara, azúcar, canela, licor Strega, Sambuca y fruta confitada, hasta que quede cremoso.',
      de: 'Füllung: Den passierten Ricotta mit Eiweiß, Zucker, Zimt, Strega, Sambuca und kandierten Früchten cremig mischen.',
    },
    {
      it: 'Crema al cioccolato: cuocere latte, uova, zucchero e amido mescolando finché si addensa, poi unire il cioccolato.',
      en: 'Chocolate custard: cook the milk, eggs, sugar and starch, stirring, until thick, then add the chocolate.',
      fr: 'Crème au chocolat : cuire lait, œufs, sucre et amidon en remuant jusqu’à épaississement, puis ajouter le chocolat.',
      es: 'Crema de chocolate: cocer leche, huevos, azúcar y almidón removiendo hasta que espese y añadir el chocolate.',
      de: 'Schokoladencreme: Milch, Eier, Zucker und Stärke unter Rühren eindicken, dann die Schokolade zugeben.',
    },
    {
      it: 'Stendere la frolla in una teglia, versare uno strato di ricotta di circa 2 cm, coprirlo con la crema al cioccolato (meglio con la sac à poche), poi un secondo strato di ricotta e infine strisce di frolla incrociate.',
      en: 'Roll the pastry into a tray, add a layer of ricotta about 2 cm thick, cover with the chocolate custard (best with a piping bag), then a second layer of ricotta and finally a lattice of pastry strips.',
      fr: 'Abaisser la pâte dans une plaque, verser une couche de ricotta d’environ 2 cm, la couvrir de crème au chocolat (de préférence à la poche), puis une deuxième couche de ricotta et enfin des bandes de pâte croisées.',
      es: 'Extender la masa en una bandeja, poner una capa de ricotta de unos 2 cm, cubrirla con la crema de chocolate (mejor con manga), luego una segunda capa de ricotta y por último tiras de masa cruzadas.',
      de: 'Den Teig in ein Blech legen, eine etwa 2 cm dicke Ricottaschicht einfüllen, mit der Schokoladencreme (am besten mit dem Spritzbeutel) bedecken, dann eine zweite Ricottaschicht und zum Schluss ein Gitter aus Teigstreifen.',
    },
    {
      it: 'Cuocere a 200 °C per circa un’ora. Appena sfornata, bagnarla con poche gocce di rum e spolverarla di zucchero.',
      en: 'Bake at 200 °C for about an hour. As soon as it is out, sprinkle with a few drops of rum and dust with sugar.',
      fr: 'Cuire à 200 °C environ une heure. Dès la sortie du four, l’arroser de quelques gouttes de rhum et la saupoudrer de sucre.',
      es: 'Hornear a 200 °C una hora aprox. Al sacarla, rociarla con unas gotas de ron y espolvorear con azúcar.',
      de: 'Bei 200 °C etwa eine Stunde backen. Direkt danach mit ein paar Tropfen Rum beträufeln und mit Zucker bestreuen.',
    },
  ],
};
