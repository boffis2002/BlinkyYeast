// Ricette di prodotti da forno famosi, da fonti attendibili (maestri pasticceri, panificatori e pizzaioli
// pubblicati da testate riconosciute): ogni dato viene dalla fonte indicata.
// Il tempo è in minuti, dall'impasto alla fine della cottura; `almeno` se la fonte dà solo minimi, null se non lo indica.
// Le dosi sono in grammi: [ingrediente, quantità], [ingrediente, minimo, massimo] se la fonte dà un intervallo,
// [ingrediente] se la fonte non dà la quantità (q.b.). Uova e tuorli indicati a pezzo sono convertiti con i pesi
// della pastiera di Sal De Riso (1 uovo = 55 g, 1 tuorlo = 20 g, quindi 1 albume = 35 g); i liquidi in ml valgono
// 1 g/ml, l'olio 0,92 g/ml. Cucchiai, bustine e frutti interi restano q.b., con la quantità della fonte nella nota.
// I gruppi senza `da` (impasto, ripieno…) scalano insieme; quelli `fuoriPeso` (la glassa) scalano con gli altri
// ma non contano nel peso dei pezzi; un gruppo con `da` si prepara a parte, nella quantità che serve agli altri.
// Qui c'è l'indice usato dalle card; quantità, dosi e procedimento di ogni ricetta stanno in ricette/<id>.js
// e si caricano solo nella sua pagina. `pezzi` (numero e peso) e/o `contenitore` (la teglia o lo stampo per cui la fonte dà le dosi) dicono come si
// sceglie la quantità. `difficolta` va da 1 a 5:
//   1 un impasto senza lievitazioni lunghe; 2 una lievitazione o una sola preparazione; 3 più fasi o tempi lunghi
//   (pre-impasti, riposi in frigo, frolla e ripieno); 4 tecniche delicate (temperature controllate, laminazione,
//   forno a legna); 5 grandi lievitati con più impasti e giorni di lavoro.

// nomi degli ingredienti, condivisi tra le ricette
const INGREDIENTI = {
  farinaTenero0: { it: 'Farina di grano tenero tipo 0', en: 'Type 0 soft wheat flour', fr: 'Farine de blé tendre type 0',
                   es: 'Harina de trigo blando tipo 0', de: 'Weichweizenmehl Type 0' },
  farinaTenero: { it: 'Farina di grano tenero', en: 'Soft wheat flour', fr: 'Farine de blé tendre',
                  es: 'Harina de trigo blando', de: 'Weichweizenmehl' },
  farina00: { it: 'Farina 00', en: 'Type 00 flour', fr: 'Farine type 00', es: 'Harina 00', de: 'Mehl Type 00' },
  farina00W180: { it: 'Farina 00 (W 180)', en: 'Type 00 flour (W 180)', fr: 'Farine type 00 (W 180)',
                  es: 'Harina 00 (W 180)', de: 'Mehl Type 00 (W 180)' },
  farinaForte: { it: 'Farina forte', en: 'Strong flour', fr: 'Farine de force', es: 'Harina de fuerza',
                 de: 'Starkes Weizenmehl' },
  farinaDebole: { it: 'Farina debole', en: 'Weak (soft) flour', fr: 'Farine faible', es: 'Harina floja',
                  de: 'Schwaches Weizenmehl' },
  farinaGrandiLievitati: { it: 'Farina per grandi lievitati (W 370–390)', en: 'Strong flour for enriched doughs (W 370–390)',
                           fr: 'Farine pour grandes brioches (W 370–390)', es: 'Harina de gran fuerza (W 370–390)',
                           de: 'Starkes Mehl für Hefegebäck (W 370–390)' },
  semolaRimacinata: { it: 'Semola rimacinata di grano duro', en: 'Re-milled durum wheat semolina',
                      fr: 'Semoule de blé dur remoulue', es: 'Sémola remolida de trigo duro',
                      de: 'Doppelt gemahlener Hartweizengrieß' },
  farinaMandorle: { it: 'Farina di mandorle', en: 'Ground almonds', fr: "Poudre d'amandes", es: 'Harina de almendra',
                    de: 'Gemahlene Mandeln' },
  polvereNocciole: { it: 'Farina di nocciole', en: 'Ground hazelnuts', fr: 'Poudre de noisettes', es: 'Harina de avellana',
                     de: 'Gemahlene Haselnüsse' },
  farinaNocciole: { it: 'Farina di nocciole o di mandorle', en: 'Ground hazelnuts or almonds',
                    fr: 'Poudre de noisettes ou d’amandes', es: 'Harina de avellana o de almendra',
                    de: 'Gemahlene Haselnüsse oder Mandeln' },
  fecola: { it: 'Fecola di patate', en: 'Potato starch', fr: 'Fécule de pomme de terre', es: 'Fécula de patata',
            de: 'Kartoffelstärke' },
  amidoMais: { it: 'Amido di mais', en: 'Cornflour', fr: 'Amidon de maïs', es: 'Almidón de maíz', de: 'Maisstärke' },
  acqua: { it: 'Acqua', en: 'Water', fr: 'Eau', es: 'Agua', de: 'Wasser' },
  sale: { it: 'Sale', en: 'Salt', fr: 'Sel', es: 'Sal', de: 'Salz' },
  saleMarino: { it: 'Sale marino', en: 'Sea salt', fr: 'Sel marin', es: 'Sal marina', de: 'Meersalz' },
  lievitoBirra: { it: 'Lievito di birra fresco', en: "Fresh brewer's yeast", fr: 'Levure de boulanger fraîche',
                  es: 'Levadura de cerveza fresca', de: 'Frischhefe' },
  lievitoSecco: { it: 'Lievito di birra secco', en: "Dried brewer's yeast", fr: 'Levure de boulanger sèche',
                  es: 'Levadura de cerveza seca', de: 'Trockenhefe' },
  lievitoMadre: { it: 'Lievito madre', en: 'Sourdough starter', fr: 'Levain', es: 'Masa madre', de: 'Sauerteig' },
  lievitoChimico: { it: 'Lievito chimico', en: 'Baking powder', fr: 'Levure chimique', es: 'Levadura química',
                    de: 'Backpulver' },
  bicarbonato: { it: 'Bicarbonato di sodio', en: 'Bicarbonate of soda', fr: 'Bicarbonate de soude',
                 es: 'Bicarbonato sódico', de: 'Natron' },
  malto: { it: "Malto d'orzo", en: 'Barley malt', fr: "Malt d'orge", es: 'Malta de cebada', de: 'Gerstenmalz' },
  zucchero: { it: 'Zucchero', en: 'Sugar', fr: 'Sucre', es: 'Azúcar', de: 'Zucker' },
  zuccheroCanna: { it: 'Zucchero di canna', en: 'Cane sugar', fr: 'Sucre de canne', es: 'Azúcar de caña',
                   de: 'Rohrzucker' },
  zuccheroPanela: { it: 'Zucchero panela', en: 'Panela sugar', fr: 'Sucre panela', es: 'Panela', de: 'Panela-Zucker' },
  zuccheroVelo: { it: 'Zucchero a velo', en: 'Icing sugar', fr: 'Sucre glace', es: 'Azúcar glas', de: 'Puderzucker' },
  granellaZucchero: { it: 'Granella di zucchero', en: 'Sugar nibs', fr: 'Sucre en grains', es: 'Granillo de azúcar',
                      de: 'Hagelzucker' },
  miele: { it: 'Miele', en: 'Honey', fr: 'Miel', es: 'Miel', de: 'Honig' },
  mieleMillefiori: { it: 'Miele millefiori', en: 'Wildflower honey', fr: 'Miel toutes fleurs', es: 'Miel milflores',
                     de: 'Blütenhonig' },
  burro: { it: 'Burro', en: 'Butter', fr: 'Beurre', es: 'Mantequilla', de: 'Butter' },
  olioEvo: { it: "Olio extravergine d'oliva", en: 'Extra virgin olive oil', fr: "Huile d'olive vierge extra",
             es: 'Aceite de oliva virgen extra', de: 'Natives Olivenöl extra' },
  olioRiso: { it: 'Olio di riso', en: 'Rice bran oil', fr: 'Huile de riz', es: 'Aceite de arroz', de: 'Reiskeimöl' },
  latte: { it: 'Latte', en: 'Milk', fr: 'Lait', es: 'Leche', de: 'Milch' },
  panna: { it: 'Panna fresca', en: 'Fresh cream', fr: 'Crème fraîche liquide', es: 'Nata fresca', de: 'Sahne' },
  yogurt: { it: 'Yogurt magro', en: 'Low-fat yoghurt', fr: 'Yaourt maigre', es: 'Yogur desnatado',
            de: 'Magerjoghurt' },
  uova: { it: 'Uova', en: 'Eggs', fr: 'Œufs', es: 'Huevos', de: 'Eier' },
  tuorli: { it: 'Tuorli', en: 'Egg yolks', fr: "Jaunes d'œufs", es: 'Yemas', de: 'Eigelb' },
  albume: { it: 'Albume', en: 'Egg white', fr: "Blanc d'œuf", es: 'Clara de huevo', de: 'Eiweiß' },
  ricottaVaccina: { it: 'Ricotta di mucca', en: "Cow's milk ricotta", fr: 'Ricotta de vache', es: 'Ricotta de vaca',
                    de: 'Kuhmilch-Ricotta' },
  formaggioGeorgiano: { it: 'Formaggio georgiano (sulguni e imeruli) o mozzarella e feta',
                        en: 'Georgian cheese (sulguni and imeruli) or mozzarella and feta',
                        fr: 'Fromage géorgien (sulguni et imeruli) ou mozzarella et feta',
                        es: 'Queso georgiano (sulguni e imeruli) o mozzarella y feta',
                        de: 'Georgischer Käse (Sulguni und Imeruli) oder Mozzarella und Feta' },
  cremaPasticcera: { it: 'Crema pasticcera', en: 'Pastry cream', fr: 'Crème pâtissière', es: 'Crema pastelera',
                     de: 'Konditorcreme' },
  granoCotto: { it: 'Grano cotto', en: 'Cooked wheat berries', fr: 'Blé cuit', es: 'Trigo cocido',
                de: 'Gekochter Weizen' },
  cioccolatoFondente: { it: 'Cioccolato fondente 70%', en: 'Dark chocolate 70%', fr: 'Chocolat noir 70 %',
                        es: 'Chocolate negro 70 %', de: 'Zartbitterschokolade 70 %' },
  massaCacao: { it: 'Massa di cacao amaro', en: 'Unsweetened cocoa mass', fr: 'Pâte de cacao', es: 'Pasta de cacao pura',
                de: 'Kakaomasse' },
  mele: { it: 'Mele', en: 'Apples', fr: 'Pommes', es: 'Manzanas', de: 'Äpfel' },
  pomodorini: { it: 'Pomodorini', en: 'Cherry tomatoes', fr: 'Tomates cerises', es: 'Tomates cherry',
                de: 'Kirschtomaten' },
  olive: { it: 'Olive', en: 'Olives', fr: 'Olives', es: 'Aceitunas', de: 'Oliven' },
  origano: { it: 'Origano', en: 'Oregano', fr: 'Origan', es: 'Orégano', de: 'Oregano' },
  aranciaCandita: { it: 'Arancia candita', en: 'Candied orange', fr: 'Orange confite', es: 'Naranja confitada',
                    de: 'Orangeat' },
  mandorle: { it: 'Mandorle', en: 'Almonds', fr: 'Amandes', es: 'Almendras', de: 'Mandeln' },
  scorzaLimone: { it: 'Scorza di limone', en: 'Lemon zest', fr: 'Zeste de citron', es: 'Ralladura de limón',
                  de: 'Zitronenschale' },
  scorzaArancia: { it: "Scorza d'arancia", en: 'Orange zest', fr: "Zeste d'orange", es: 'Ralladura de naranja',
                   de: 'Orangenschale' },
  scorzaAgrumi: { it: 'Scorza di agrumi', en: 'Citrus zest', fr: "Zeste d'agrumes", es: 'Ralladura de cítricos',
                  de: 'Zitrusschale' },
  succoLimone: { it: 'Succo di limone', en: 'Lemon juice', fr: 'Jus de citron', es: 'Zumo de limón', de: 'Zitronensaft' },
  gin: { it: 'Gin', en: 'Gin', fr: 'Gin', es: 'Ginebra', de: 'Gin' },
  vaniglia: { it: 'Vaniglia (bacca)', en: 'Vanilla (pod)', fr: 'Vanille (gousse)', es: 'Vainilla (vaina)',
              de: 'Vanille (Schote)' },
  cannella: { it: 'Cannella', en: 'Cinnamon', fr: 'Cannelle', es: 'Canela', de: 'Zimt' },
  acquaFiorArancio: { it: "Acqua di fiori d'arancio", en: 'Orange blossom water', fr: "Eau de fleur d'oranger",
                      es: 'Agua de azahar', de: 'Orangenblütenwasser' },
  pinoli: { it: 'Pinoli', en: 'Pine nuts', fr: 'Pignons de pin', es: 'Piñones', de: 'Pinienkerne' },
  semiAnice: { it: 'Semi di anice', en: 'Aniseed', fr: "Graines d'anis", es: 'Semillas de anís', de: 'Anissamen' },
  paneRaffermo: { it: 'Pane raffermo senza crosta', en: 'Stale bread without crust', fr: 'Pain rassis sans croûte',
                  es: 'Pan duro sin corteza', de: 'Altbackenes Brot ohne Rinde' },
  uvetta: { it: 'Uvetta sultanina', en: 'Sultanas', fr: 'Raisins secs', es: 'Pasas sultanas', de: 'Sultaninen' },
  cedroCandito: { it: 'Cedro candito', en: 'Candied citron', fr: 'Cédrat confit', es: 'Cidra confitada', de: 'Zitronat' },
  rum: { it: 'Rum', en: 'Rum', fr: 'Rhum', es: 'Ron', de: 'Rum' },
  grappa: { it: 'Grappa', en: 'Grappa', fr: 'Grappa', es: 'Grappa', de: 'Grappa' },
  anisetta: { it: 'Liquore all’anice', en: 'Anise liqueur', fr: 'Liqueur d’anis', es: 'Licor de anís', de: 'Anislikör' },
  formaggioSpalmabile: { it: 'Formaggio fresco spalmabile', en: 'Cream cheese', fr: 'Fromage frais à tartiner',
                         es: 'Queso crema', de: 'Frischkäse' },
  riso: { it: 'Riso Arborio', en: 'Arborio rice', fr: 'Riz arborio', es: 'Arroz arborio', de: 'Arborio-Reis' },
  farinaSaraceno: { it: 'Farina di grano saraceno', en: 'Buckwheat flour', fr: 'Farine de sarrasin',
                    es: 'Harina de trigo sarraceno', de: 'Buchweizenmehl' },
  burroSalato: { it: 'Burro salato', en: 'Salted butter', fr: 'Beurre salé', es: 'Mantequilla salada',
                 de: 'Gesalzene Butter' },
  confetturaMirtilliRossi: { it: 'Confettura di mirtilli rossi', en: 'Lingonberry jam', fr: "Confiture d'airelles",
                             es: 'Mermelada de arándanos rojos', de: 'Preiselbeermarmelade' },
  olioSemi: { it: 'Olio di semi', en: 'Vegetable oil', fr: 'Huile végétale', es: 'Aceite de semillas', de: 'Pflanzenöl' },
  noceMoscata: { it: 'Noce moscata', en: 'Nutmeg', fr: 'Noix de muscade', es: 'Nuez moscada', de: 'Muskatnuss' },
  carote: { it: 'Carote grattugiate', en: 'Grated carrots', fr: 'Carottes râpées', es: 'Zanahorias ralladas',
            de: 'Geraspelte Karotten' },
  noci: { it: 'Noci sgusciate', en: 'Shelled walnuts', fr: 'Cerneaux de noix', es: 'Nueces peladas', de: 'Walnusskerne' },
  paneTostato: { it: 'Pane tostato nel burro', en: 'Bread toasted in butter', fr: 'Pain grillé au beurre', es: 'Pan tostado con mantequilla', de: 'In Butter geröstetes Brot' },
  pere: { it: 'Pere', en: 'Pears', fr: 'Poires', es: 'Peras', de: 'Birnen' },
  cacao: { it: 'Cacao amaro in polvere', en: 'Unsweetened cocoa powder', fr: 'Cacao amer en poudre', es: 'Cacao puro en polvo', de: 'Ungesüßtes Kakaopulver' },
  semiSesamo: { it: 'Semi di sesamo', en: 'Sesame seeds', fr: 'Graines de sésame', es: 'Semillas de sésamo', de: 'Sesam' },
  sugna: { it: 'Sugna (strutto)', en: 'Lard', fr: 'Saindoux', es: 'Manteca de cerdo', de: 'Schweineschmalz' },
  salumiMisti: { it: 'Salumi misti (soppressata, pancetta, mortadella…)', en: 'Mixed cured meats (soppressata, pancetta, mortadella…)', fr: 'Charcuterie variée (soppressata, pancetta, mortadelle…)', es: 'Embutidos variados (soppressata, panceta, mortadela…)', de: 'Gemischte Wurstwaren (Soppressata, Pancetta, Mortadella…)' },
  provolonePiccante: { it: 'Provolone piccante', en: 'Sharp provolone', fr: 'Provolone piquant', es: 'Provolone picante', de: 'Pikanter Provolone' },
  pecorinoRomano: { it: 'Pecorino romano grattugiato', en: 'Grated pecorino romano', fr: 'Pecorino romano râpé', es: 'Pecorino romano rallado', de: 'Geriebener Pecorino Romano' },
  pepe: { it: 'Pepe nero', en: 'Black pepper', fr: 'Poivre noir', es: 'Pimienta negra', de: 'Schwarzer Pfeffer' },
  ricotta: { it: 'Ricotta', en: 'Ricotta', fr: 'Ricotta', es: 'Ricotta', de: 'Ricotta' },
  aromaFiorArancio: { it: 'Aroma ai fiori d\'arancio', en: 'Orange blossom flavouring', fr: 'Arôme fleur d\'oranger', es: 'Aroma de azahar', de: 'Orangenblütenaroma' },
  strutto: { it: 'Strutto o burro', en: 'Lard or butter', fr: 'Saindoux ou beurre', es: 'Manteca de cerdo o mantequilla', de: 'Schmalz oder Butter' },
  pastaArancia: { it: 'Pasta d\'arancia', en: 'Orange paste', fr: 'Pâte d\'orange', es: 'Pasta de naranja', de: 'Orangenpaste' },
  pastaFrolla: { it: 'Pasta frolla', en: 'Shortcrust pastry', fr: 'Pâte sablée', es: 'Masa quebrada', de: 'Mürbeteig' },
  farinaManitoba: { it: 'Farina Manitoba', en: 'Manitoba (strong) flour', fr: 'Farine Manitoba', es: 'Harina Manitoba', de: 'Manitoba-Mehl' },
  parmigiano: { it: 'Parmigiano grattugiato', en: 'Grated Parmesan', fr: 'Parmesan râpé', es: 'Parmesano rallado', de: 'Geriebener Parmesan' },
  farinaDolci: { it: 'Farina per dolci', en: 'Cake flour', fr: 'Farine à gâteaux', es: 'Harina de repostería', de: 'Kuchenmehl' },
  zucca: { it: 'Polpa di zucca cruda', en: 'Raw pumpkin flesh', fr: 'Chair de potiron crue', es: 'Pulpa de calabaza cruda', de: 'Rohes Kürbisfleisch' },
  zenzero: { it: 'Zenzero in polvere', en: 'Ground ginger', fr: 'Gingembre en poudre', es: 'Jengibre en polvo', de: 'Ingwerpulver' },
  chiodiGarofano: { it: 'Chiodi di garofano in polvere', en: 'Ground cloves', fr: 'Clous de girofle moulus', es: 'Clavo molido', de: 'Gemahlene Nelken' },
  latteCondensato: { it: 'Latte condensato', en: 'Condensed milk', fr: 'Lait concentré sucré', es: 'Leche condensada', de: 'Kondensmilch' },
  fragole: { it: 'Fragole', en: 'Strawberries', fr: 'Fraises', es: 'Fresas', de: 'Erdbeeren' },
  gelatina: { it: 'Gelatina in fogli', en: 'Leaf gelatine', fr: 'Gélatine en feuilles', es: 'Gelatina en láminas', de: 'Blattgelatine' },
  margarinaBurroStrutto: { it: 'Margarina, burro o strutto', en: 'Margarine, butter or lard', fr: 'Margarine, beurre ou saindoux', es: 'Margarina, mantequilla o manteca', de: 'Margarine, Butter oder Schmalz' },
  liquoreStrega: { it: 'Liquore Strega', en: 'Strega liqueur', fr: 'Liqueur Strega', es: 'Licor Strega', de: 'Strega-Likör' },
  sambuca: { it: 'Sambuca', en: 'Sambuca', fr: 'Sambuca', es: 'Sambuca', de: 'Sambuca' },
  fruttaCandita: { it: 'Frutta candita', en: 'Candied fruit', fr: 'Fruits confits', es: 'Fruta confitada', de: 'Kandierte Früchte' },
  farinaIntegrale: { it: 'Farina integrale', en: 'Wholemeal flour', fr: 'Farine complète', es: 'Harina integral', de: 'Vollkornmehl' },
  farinaTipo1: { it: 'Farina di tipo 1', en: 'Type 1 flour', fr: 'Farine de type 1', es: 'Harina tipo 1', de: 'Mehl Type 1' },
  farinaGranoDuro: { it: 'Farina di grano duro', en: 'Durum wheat flour', fr: 'Farine de blé dur', es: 'Harina de trigo duro', de: 'Hartweizenmehl' },
  lievitoMadreSecco: { it: 'Lievito madre disidratato', en: 'Dried sourdough starter', fr: 'Levain déshydraté', es: 'Masa madre deshidratada', de: 'Trockensauerteig' },
  fiordilatte: { it: 'Fior di latte a cubetti', en: 'Diced fior di latte', fr: 'Fior di latte en dés', es: 'Fior di latte en dados', de: 'Fior di Latte in Würfeln' },
  prosciuttoCrudo: { it: 'Prosciutto crudo', en: 'Prosciutto', fr: 'Jambon cru', es: 'Jamón curado', de: 'Rohschinken' },
  scarola: { it: 'Scarola', en: 'Escarole', fr: 'Scarole', es: 'Escarola', de: 'Escariol' },
  capperi: { it: 'Capperi', en: 'Capers', fr: 'Câpres', es: 'Alcaparras', de: 'Kapern' },
  acciughe: { it: 'Filetti di acciuga', en: 'Anchovy fillets', fr: 'Filets d\'anchois', es: 'Filetes de anchoa', de: 'Sardellenfilets' },
  mozzarellaAffumicata: { it: 'Mozzarella affumicata', en: 'Smoked mozzarella', fr: 'Mozzarella fumée', es: 'Mozzarella ahumada', de: 'Geräucherter Mozzarella' },
  aglio: { it: 'Aglio', en: 'Garlic', fr: 'Ail', es: 'Ajo', de: 'Knoblauch' },
  senape: { it: 'Foglie di senape selvatica', en: 'Wild mustard leaves', fr: 'Feuilles de moutarde sauvage', es: 'Hojas de mostaza silvestre', de: 'Blätter von wildem Senf' },
  pomodoriSecchi: { it: 'Pomodorini ciliegini secchi', en: 'Sun-dried cherry tomatoes', fr: 'Tomates cerises séchées', es: 'Tomates cherry secos', de: 'Getrocknete Kirschtomaten' },
  tuma: { it: 'Tuma fresca senza sale', en: 'Fresh unsalted tuma cheese', fr: 'Tuma fraîche sans sel', es: 'Tuma fresca sin sal', de: 'Frischer ungesalzener Tuma-Käse' },
  porchetta: { it: 'Porchetta', en: 'Porchetta', fr: 'Porchetta', es: 'Porchetta', de: 'Porchetta' },
  olioSesamo: { it: 'Olio di sesamo', en: 'Sesame oil', fr: 'Huile de sésame', es: 'Aceite de sésamo', de: 'Sesamöl' },
  bietole: { it: 'Bietole a costa piccola', en: 'Small-ribbed chard', fr: 'Blettes à petites côtes', es: 'Acelgas de penca pequeña', de: 'Schmalrippiger Mangold' },
  prescinseua: { it: 'Prescinseua (cagliata acida genovese)', en: 'Prescinseua (Genoese sour curd)', fr: 'Prescinseua (caillé acide génois)', es: 'Prescinseua (cuajada ácida genovesa)', de: 'Prescinseua (genuesischer Sauermilchquark)' },
  cipolla: { it: 'Cipolla', en: 'Onion', fr: 'Oignon', es: 'Cebolla', de: 'Zwiebel' },
  maggiorana: { it: 'Maggiorana', en: 'Marjoram', fr: 'Marjolaine', es: 'Mejorana', de: 'Majoran' },
  ricottaPecora: { it: 'Ricotta di pecora', en: 'Sheep\'s milk ricotta', fr: 'Ricotta de brebis', es: 'Ricotta de oveja', de: 'Schafsricotta' },
  lenticchie: { it: 'Lenticchie di Castelluccio', en: 'Castelluccio lentils', fr: 'Lentilles de Castelluccio', es: 'Lentejas de Castelluccio', de: 'Castelluccio-Linsen' },
  lenticchieCotte: { it: 'Lenticchie cotte', en: 'Cooked lentils', fr: 'Lentilles cuites', es: 'Lentejas cocidas', de: 'Gegarte Linsen' },
  essenzaArancio: { it: 'Essenza d\'arancio', en: 'Orange essence', fr: 'Essence d\'orange', es: 'Esencia de naranja', de: 'Orangenessenz' },
  essenzaGelsomino: { it: 'Essenza di gelsomino', en: 'Jasmine essence', fr: 'Essence de jasmin', es: 'Esencia de jazmín', de: 'Jasminessenz' },
  salameFinocchio: { it: 'Salamino lucano al finocchio', en: 'Lucanian fennel salami', fr: 'Saucisson lucanien au fenouil', es: 'Salami lucano al hinojo', de: 'Lukanische Fenchelsalami' },
  zafferano: { it: 'Zafferano', en: 'Saffron', fr: 'Safran', es: 'Azafrán', de: 'Safran' },
  grana: { it: 'Grana grattugiato', en: 'Grated grana cheese', fr: 'Grana râpé', es: 'Grana rallado', de: 'Geriebener Grana' },
  pepeBianco: { it: 'Pepe bianco', en: 'White pepper', fr: 'Poivre blanc', es: 'Pimienta blanca', de: 'Weißer Pfeffer' },
};

// strumenti necessari, ricavati dal procedimento della fonte
const STRUMENTI = {
  forno: { it: 'Forno', en: 'Oven', fr: 'Four', es: 'Horno', de: 'Backofen' },
  planetaria: { it: 'Planetaria', en: 'Stand mixer', fr: 'Robot pâtissier', es: 'Batidora amasadora',
                de: 'Küchenmaschine' },
  pietraRefrattaria: { it: 'Pietra refrattaria e pala', en: 'Baking stone and peel', fr: 'Pierre réfractaire et pelle',
                       es: 'Piedra refractaria y pala', de: 'Pizzastein und Schieber' },
  contenitori: { it: 'Contenitori con coperchio', en: 'Lidded containers', fr: 'Boîtes à couvercle',
                 es: 'Recipientes con tapa', de: 'Behälter mit Deckel' },
  teglia: { it: 'Teglia da forno', en: 'Baking tray', fr: 'Plaque de cuisson', es: 'Bandeja de horno',
            de: 'Backblech' },
  tortiera: { it: 'Tortiera', en: 'Cake tin', fr: 'Moule à gâteau', es: 'Molde para tartas', de: 'Kuchenform' },
  stampoCiambella: { it: 'Stampo a ciambella', en: 'Ring mould', fr: 'Moule à savarin', es: 'Molde de rosca',
                     de: 'Kranzform' },
  stampini: { it: 'Stampini monoporzione', en: 'Individual moulds', fr: 'Moules individuels', es: 'Moldes individuales',
              de: 'Portionsförmchen' },
  stampoColomba: { it: 'Stampo da colomba', en: 'Colomba mould', fr: 'Moule à colomba', es: 'Molde de colomba',
                   de: 'Colomba-Form' },
  matterello: { it: 'Matterello', en: 'Rolling pin', fr: 'Rouleau à pâtisserie', es: 'Rodillo', de: 'Nudelholz' },
  tagliapasta: { it: 'Tagliapasta', en: 'Pastry wheel', fr: 'Roulette à pâtisserie', es: 'Cortapastas de rueda',
                 de: 'Teigrädchen' },
  saccaPoche: { it: 'Sac à poche', en: 'Piping bag', fr: 'Poche à douille', es: 'Manga pastelera', de: 'Spritzbeutel' },
  spatola: { it: 'Spatola', en: 'Spatula', fr: 'Spatule', es: 'Espátula', de: 'Teigschaber' },
  pentolino: { it: 'Pentolino per il bagnomaria', en: 'Saucepan for a bain-marie', fr: 'Casserole pour le bain-marie',
               es: 'Cazo para el baño maría', de: 'Topf für das Wasserbad' },
  pentola: { it: 'Pentola', en: 'Saucepan', fr: 'Casserole', es: 'Cazo', de: 'Kochtopf' },
  termometro: { it: 'Termometro a sonda', en: 'Probe thermometer', fr: 'Thermomètre à sonde', es: 'Termómetro de sonda',
                de: 'Einstichthermometer' },
  frusta: { it: 'Frusta', en: 'Whisk', fr: 'Fouet', es: 'Varillas', de: 'Schneebesen' },
  mixer: { it: 'Mixer', en: 'Food processor', fr: 'Mixeur', es: 'Picadora', de: 'Mixer' },
  tortieraApribile: { it: 'Tortiera apribile', en: 'Springform tin', fr: 'Moule à charnière', es: 'Molde desmontable',
                      de: 'Springform' },
  grattugia: { it: 'Grattugia', en: 'Grater', fr: 'Râpe', es: 'Rallador', de: 'Reibe' },
  frullatore: { it: 'Frullatore a immersione', en: 'Hand blender', fr: 'Mixeur plongeant', es: 'Batidora de mano', de: 'Stabmixer' },
  padella: { it: 'Padella', en: 'Frying pan', fr: 'Poêle', es: 'Sartén', de: 'Pfanne' },
  stampoCassetta: { it: 'Stampo a cassetta', en: 'Loaf tin', fr: 'Moule à cake', es: 'Molde de pan', de: 'Kastenform' },
};

// nomi dei gruppi di dosi
const GRUPPI = {
  impasto: { it: 'Impasto', en: 'Dough', fr: 'Pâte', es: 'Masa', de: 'Teig' },
  ripieno: { it: 'Ripieno', en: 'Filling', fr: 'Garniture', es: 'Relleno', de: 'Füllung' },
  condimento: { it: 'Condimento', en: 'Topping', fr: 'Garniture', es: 'Cobertura', de: 'Belag' },
  frolla: { it: 'Pasta frolla', en: 'Shortcrust pastry', fr: 'Pâte sablée', es: 'Masa quebrada', de: 'Mürbeteig' },
  frollaMontata: { it: 'Frolla montata alle nocciole', en: 'Whipped hazelnut shortcrust', fr: 'Pâte sablée montée aux noisettes',
                   es: 'Masa quebrada batida de avellana', de: 'Gerührter Haselnussmürbeteig' },
  composta: { it: 'Composta di mele', en: 'Apple compote', fr: 'Compote de pommes', es: 'Compota de manzana',
              de: 'Apfelkompott' },
  crumble: { it: 'Crumble alle mandorle', en: 'Almond crumble', fr: 'Crumble aux amandes', es: 'Crumble de almendra',
             de: 'Mandelstreusel' },
  ganache: { it: 'Ganache', en: 'Ganache', fr: 'Ganache', es: 'Ganache', de: 'Ganache' },
  primoImpasto: { it: 'Primo impasto', en: 'First dough', fr: 'Première pâte', es: 'Primer amasado', de: 'Erster Teig' },
  secondoImpasto: { it: 'Secondo impasto', en: 'Second dough', fr: 'Deuxième pâte', es: 'Segundo amasado',
                    de: 'Zweiter Teig' },
  glassa: { it: 'Glassa', en: 'Glaze', fr: 'Glaçage', es: 'Glaseado', de: 'Glasur' },
  farcitura: { it: 'Farcitura', en: 'Filling', fr: 'Garniture', es: 'Relleno', de: 'Füllung' },
  glassaFormaggio: { it: 'Glassa al formaggio', en: 'Cream cheese frosting', fr: 'Glaçage au fromage frais',
                     es: 'Glaseado de queso crema', de: 'Frischkäse-Frosting' },
  pastello: { it: 'Pastello', en: 'Dough', fr: 'Détrempe', es: 'Masa base', de: 'Grundteig' },
  panetto: { it: 'Panetto di burro', en: 'Butter block', fr: 'Beurrage', es: 'Bloque de mantequilla', de: 'Butterplatte' },
  finitura: { it: 'Per spennellare e decorare', en: 'For brushing and decorating', fr: 'Pour dorer et décorer', es: 'Para pintar y decorar', de: 'Zum Bestreichen und Verzieren' },
  crema: { it: 'Crema pasticcera', en: 'Pastry cream', fr: 'Crème pâtissière', es: 'Crema pastelera', de: 'Konditorcreme' },
  cremaCioccolato: { it: 'Crema al cioccolato', en: 'Chocolate custard', fr: 'Crème au chocolat', es: 'Crema de chocolate', de: 'Schokoladencreme' },
  guarnizione: { it: 'Guarnizione', en: 'Topping', fr: 'Garniture', es: 'Cobertura', de: 'Belag' },
  base: { it: 'Base', en: 'Base', fr: 'Fond', es: 'Base', de: 'Boden' },
  lenticchie: { it: 'Lenticchie cotte nel latte', en: 'Lentils cooked in milk', fr: 'Lentilles cuites au lait', es: 'Lentejas cocidas en leche', de: 'In Milch gegarte Linsen' },
};

// dettagli caricati da ricette/<id>.js
const DETTAGLI = {};

// indice delle ricette: i dati che servono alle card e alla ricerca
const RICETTE = [
  {
    // Jacopo Mercuro su Gambero Rosso («Pizza e fichi: le ricette di tre pizzaioli»): impasto per 5 pizze tonde,
    // 24 h in frigo, 1 h a temperatura ambiente, palline da 160 g, ~2 h, pietra a 250 °C preriscaldata 45 min
    id: 'pizza-romana-mercuro',
    categoria: 'pizza',
    titolo: { it: 'Pizza romana di Jacopo Mercuro', en: 'Roman pizza by Jacopo Mercuro', fr: 'Pizza romaine de Jacopo Mercuro',
              es: 'Pizza romana de Jacopo Mercuro', de: 'Römische Pizza von Jacopo Mercuro' },
    descrizione: {
      it: 'Pizza tonda romana sottile e senza cornicione, con impasto maturato 24 ore in frigo e cotto su pietra. ' +
          'Ricetta del pizzaiolo Jacopo Mercuro.',
      en: 'Thin Roman round pizza with no raised rim, from a dough matured 24 hours in the fridge and baked on a stone. ' +
          'Recipe by pizza maker Jacopo Mercuro.',
      fr: 'Pizza ronde romaine fine et sans bord, à la pâte maturée 24 heures au réfrigérateur et cuite sur pierre. ' +
          'Recette du pizzaïolo Jacopo Mercuro.',
      es: 'Pizza redonda romana fina y sin borde, con masa madurada 24 horas en la nevera y cocida sobre piedra. ' +
          'Receta del pizzero Jacopo Mercuro.',
      de: 'Dünne römische Pizza ohne Rand, aus einem 24 Stunden im Kühlschrank gereiften Teig, auf dem Stein gebacken. ' +
          'Rezept des Pizzaiolo Jacopo Mercuro.',
    },
    ingredienti: ['farinaTenero0', 'acqua', 'sale', 'olioEvo', 'lievitoSecco'],
    difficolta: 3,
    strumenti: ['contenitori', 'pietraRefrattaria', 'forno'],
    tempo: { min: 1620, almeno: true }, // 24 h in frigo + 1 h + 2 h; la cottura dipende dal forno
    fonte: {
      nome: 'Jacopo Mercuro, su Gambero Rosso',
      url: 'https://www.gamberorosso.it/ristoranti/pizza-e-fichi-le-ricette-di-tre-pizzaioli-da-fare-in-casa/',
    },
    immagine: null,
  },
  {
    // Panificio Adriatico di Bari su Gambero Rosso («Storia e ricetta della focaccia barese»): riposo ≥ 1 h,
    // pezzi da circa 300 g, 20 min, stesura in teglia, 15 min, forno a 250 °C per 15–20 min
    id: 'focaccia-barese-adriatico',
    categoria: 'salati',
    titolo: { it: 'Focaccia barese del Panificio Adriatico', en: 'Focaccia barese by Panificio Adriatico',
              fr: 'Focaccia barese du Panificio Adriatico', es: 'Focaccia barese del Panificio Adriatico',
              de: 'Focaccia barese vom Panificio Adriatico' },
    descrizione: {
      it: 'Focaccia alta e soffice di semola e farina, con pomodorini, olive e origano, cotta in teglia a 250 °C. ' +
          'Ricetta del Panificio Adriatico di Bari.',
      en: 'Tall, soft focaccia of semolina and flour with cherry tomatoes, olives and oregano, baked in a pan at 250 °C. ' +
          'Recipe by Panificio Adriatico in Bari.',
      fr: 'Focaccia haute et moelleuse à la semoule et à la farine, avec tomates cerises, olives et origan, cuite en ' +
          'plaque à 250 °C. Recette du Panificio Adriatico de Bari.',
      es: 'Focaccia alta y esponjosa de sémola y harina, con tomates cherry, aceitunas y orégano, cocida en bandeja a ' +
          '250 °C. Receta del Panificio Adriatico de Bari.',
      de: 'Hohe, weiche Focaccia aus Grieß und Mehl mit Kirschtomaten, Oliven und Oregano, im Blech bei 250 °C ' +
          'gebacken. Rezept des Panificio Adriatico in Bari.',
    },
    ingredienti: ['semolaRimacinata', 'farinaTenero0', 'pomodorini', 'olive', 'origano'],
    difficolta: 2,
    strumenti: ['teglia', 'forno'],
    tempo: { min: 110, almeno: true }, // ≥ 1 h + 20 min + 15 min + 15–20 min di cottura
    fonte: {
      nome: 'Panificio Adriatico, su Gambero Rosso',
      url: 'https://www.gamberorosso.it/rubriche/storie/focaccia-barese-ricetta-storia/',
    },
    immagine: null,
  },
  {
    // Ristorante Aisi (Roma) su Gambero Rosso: impasto per 4 khachapuri, lievitazione 1,5–2 h, ovali di 20–25 cm,
    // forno statico a 250 °C per 10–12 min, poi tuorlo e altri 2–3 min, burro all'uscita
    id: 'khachapuri-adjaruli',
    categoria: 'salati',
    titolo: { it: 'Khachapuri adjaruli', en: 'Adjarian khachapuri', fr: 'Khatchapouri adjarien', es: 'Khachapuri adjaruli',
              de: 'Adscharisches Chatschapuri' },
    descrizione: {
      it: 'Pane georgiano a forma di barca ripieno di formaggio, con un tuorlo morbido e burro al centro. Ricetta del ' +
          'ristorante georgiano Aisi di Roma.',
      en: 'Boat-shaped Georgian bread filled with cheese, with a soft egg yolk and butter in the middle. Recipe by the ' +
          'Georgian restaurant Aisi in Rome.',
      fr: 'Pain géorgien en forme de barque garni de fromage, avec un jaune d’œuf coulant et du beurre au centre. ' +
          'Recette du restaurant géorgien Aisi à Rome.',
      es: 'Pan georgiano en forma de barca relleno de queso, con una yema blanda y mantequilla en el centro. Receta del ' +
          'restaurante georgiano Aisi de Roma.',
      de: 'Georgisches Brot in Bootsform mit Käsefüllung, weichem Eigelb und Butter in der Mitte. Rezept des ' +
          'georgischen Restaurants Aisi in Rom.',
    },
    ingredienti: ['farina00', 'formaggioGeorgiano', 'tuorli', 'burro'],
    difficolta: 2,
    strumenti: ['teglia', 'forno'],
    tempo: { min: 112, max: 145 }, // 10 min + 1,5–2 h + 10–12 min + 2–3 min
    fonte: {
      nome: 'Ristorante Aisi, su Gambero Rosso',
      url: 'https://www.gamberorosso.it/notizie/ricette/khachapuri-adjaruli-ricetta-pane-georgiano/',
    },
    immagine: null,
  },
  {
    // Francesca Barone su Gambero Rosso («Maritozzo, latte, panna e cioccolato»): 12 maritozzi da 80 g, lievitino,
    // impasto in planetaria, fino al triplo, palline, fino al doppio, forno statico a 180 °C per circa 25 min
    id: 'maritozzi-barone',
    categoria: 'dolci',
    titolo: { it: 'Maritozzi di Francesca Barone', en: 'Maritozzi by Francesca Barone', fr: 'Maritozzi de Francesca Barone',
              es: 'Maritozzi de Francesca Barone', de: 'Maritozzi von Francesca Barone' },
    descrizione: {
      it: 'Panini dolci lievitati romani al burro e limone, qui farciti di ganache al cacao. Ricetta della chef ' +
          'Francesca Barone.',
      en: 'Roman sweet buns with butter and lemon, here filled with cocoa ganache. Recipe by chef Francesca Barone.',
      fr: 'Brioches romaines au beurre et au citron, ici garnies de ganache au cacao. Recette de la cheffe Francesca Barone.',
      es: 'Bollos dulces romanos de mantequilla y limón, aquí rellenos de ganache de cacao. Receta de la chef Francesca Barone.',
      de: 'Römische süße Hefebrötchen mit Butter und Zitrone, hier mit Kakao-Ganache gefüllt. Rezept der Köchin ' +
          'Francesca Barone.',
    },
    ingredienti: ['farinaForte', 'latte', 'burro', 'uova', 'lievitoBirra'],
    difficolta: 3,
    strumenti: ['planetaria', 'teglia', 'pentola', 'forno'],
    tempo: null, // la ricetta dà solo i 25 min di cottura; le lievitazioni vanno «fino al doppio» e «fino al triplo»
    fonte: {
      nome: 'Francesca Barone, su Gambero Rosso',
      url: 'https://www.gamberorosso.it/ricette/scheda-ricetta/maritozzo-latte-panna-e-cioccolato/',
    },
    immagine: null,
  },
  {
    // Iginio Massari su Gambero Rosso («Pan di Spagna for dummies»): massa montata in planetaria, tortiere riempite
    // per 2/3, forno a 180 °C con la valvola aperta per circa 22 min
    id: 'pan-di-spagna-massari',
    categoria: 'dolci',
    titolo: { it: 'Pan di Spagna di Iginio Massari', en: 'Sponge cake by Iginio Massari', fr: 'Génoise d’Iginio Massari',
              es: 'Bizcocho de Iginio Massari', de: 'Biskuit von Iginio Massari' },
    descrizione: {
      it: 'La base classica delle torte farcite, con albumi montati, tuorli, farina e fecola. Ricetta del maestro ' +
          'pasticciere Iginio Massari.',
      en: 'The classic base for layer cakes, with whipped egg whites, yolks, flour and starch. Recipe by master pastry ' +
          'chef Iginio Massari.',
      fr: 'La base classique des gâteaux fourrés, avec blancs montés, jaunes, farine et fécule. Recette du maître ' +
          'pâtissier Iginio Massari.',
      es: 'La base clásica de las tartas rellenas, con claras montadas, yemas, harina y fécula. Receta del maestro ' +
          'pastelero Iginio Massari.',
      de: 'Die klassische Grundlage für Torten, mit Eischnee, Eigelb, Mehl und Stärke. Rezept des Konditormeisters ' +
          'Iginio Massari.',
    },
    ingredienti: ['albume', 'zucchero', 'tuorli', 'farinaDebole', 'fecola'],
    difficolta: 2,
    strumenti: ['planetaria', 'spatola', 'tortiera', 'forno'],
    tempo: { min: 22, almeno: true }, // circa 22 min di cottura, più il tempo per montare
    fonte: {
      nome: 'Iginio Massari, su Gambero Rosso',
      url: 'https://www.gamberorosso.it/notizie/ricette/pan-di-spagna-for-dummies-la-ricetta-del-maestro-iginio-massari/',
    },
    immagine: null,
  },
  {
    // LuLa Pane e Dessert (Trani) su Gambero Rosso («Torte per la colazione»): caprese senza farina di frumento,
    // 100 g di composto per stampo, forno a 160 °C per 20 min
    id: 'caprese-pugliese-lula',
    categoria: 'dolci',
    titolo: { it: 'Torta caprese alla pugliese di LuLa', en: 'Apulian-style torta caprese by LuLa',
              fr: 'Torta caprese à la pouillaise de LuLa', es: 'Torta caprese a la apuliana de LuLa',
              de: 'Torta caprese nach apulischer Art von LuLa' },
    descrizione: {
      it: "Tortine al cioccolato e mandorle senza farina di frumento, con olio extravergine al posto del burro. " +
          'Ricetta della pasticceria LuLa di Trani.',
      en: 'Little chocolate and almond cakes with no wheat flour, made with extra virgin olive oil instead of butter. ' +
          'Recipe by the LuLa pastry shop in Trani.',
      fr: 'Petits gâteaux au chocolat et aux amandes sans farine de blé, à l’huile d’olive à la place du beurre. ' +
          'Recette de la pâtisserie LuLa de Trani.',
      es: 'Tartitas de chocolate y almendra sin harina de trigo, con aceite de oliva virgen extra en lugar de ' +
          'mantequilla. Receta de la pastelería LuLa de Trani.',
      de: 'Kleine Schokoladen-Mandel-Küchlein ohne Weizenmehl, mit Olivenöl statt Butter. Rezept der Konditorei LuLa ' +
          'in Trani.',
    },
    ingredienti: ['cioccolatoFondente', 'farinaMandorle', 'uova', 'olioEvo', 'zuccheroCanna'],
    difficolta: 2,
    strumenti: ['planetaria', 'pentolino', 'termometro', 'stampini', 'forno'],
    tempo: { min: 20, almeno: true }, // 20 min di cottura, più preparazione e raffreddamento a 15 °C
    fonte: {
      nome: 'LuLa Pane e Dessert, su Gambero Rosso',
      url: 'https://www.gamberorosso.it/attualita/torte-per-la-colazione-alcune-ricette-da-rifare-a-casa-con-i-consigli-dei-pasticceri/',
    },
    immagine: null,
  },
  {
    // Francesca Castignani (Belle Hélène, Tarquinia) su Gambero Rosso («Torte per la colazione»): crumble, composta,
    // frolla montata stesa con la sac à poche, forno a 170 °C per 30–40 min
    id: 'torta-mele-nocciole-belle-helene',
    categoria: 'dolci',
    titolo: { it: 'Torta di mele e nocciole di Belle Hélène', en: 'Apple and hazelnut cake by Belle Hélène',
              fr: 'Gâteau aux pommes et aux noisettes de Belle Hélène', es: 'Tarta de manzana y avellana de Belle Hélène',
              de: 'Apfel-Haselnuss-Kuchen von Belle Hélène' },
    descrizione: {
      it: 'Frolla montata alle nocciole con composta di mele e crumble alle mandorle. Ricetta di Francesca Castignani, ' +
          'pasticceria Belle Hélène di Tarquinia.',
      en: 'Whipped hazelnut shortcrust with apple compote and almond crumble. Recipe by Francesca Castignani, Belle ' +
          'Hélène pastry shop in Tarquinia.',
      fr: 'Pâte sablée montée aux noisettes, compote de pommes et crumble aux amandes. Recette de Francesca Castignani, ' +
          'pâtisserie Belle Hélène à Tarquinia.',
      es: 'Masa quebrada batida de avellana con compota de manzana y crumble de almendra. Receta de Francesca ' +
          'Castignani, pastelería Belle Hélène de Tarquinia.',
      de: 'Gerührter Haselnussmürbeteig mit Apfelkompott und Mandelstreuseln. Rezept von Francesca Castignani, ' +
          'Konditorei Belle Hélène in Tarquinia.',
    },
    ingredienti: ['mele', 'polvereNocciole', 'burro', 'farina00', 'farinaMandorle'],
    difficolta: 3,
    strumenti: ['planetaria', 'pentola', 'saccaPoche', 'tortiera', 'forno'],
    tempo: { min: 35, almeno: true }, // circa 5 min per la composta + 30–40 min di cottura
    fonte: {
      nome: 'Francesca Castignani (Belle Hélène), su Gambero Rosso',
      url: 'https://www.gamberorosso.it/attualita/torte-per-la-colazione-alcune-ricette-da-rifare-a-casa-con-i-consigli-dei-pasticceri/',
    },
    immagine: null,
  },
  {
    // Ciccio Sultano e Fabrizio Fiorani (I Banchi, Ragusa) su Gambero Rosso («Torte per la colazione»), dal libro
    // «Perfetto ma non troppo»: stampo a ciambella Ø 26 cm, forno a 175 °C per circa 30 min o fino a 89 °C al cuore
    id: 'ciambella-yogurt-i-banchi',
    categoria: 'dolci',
    titolo: { it: "Ciambella all'olio di riso e yogurt de I Banchi", en: 'Rice oil and yoghurt ring cake by I Banchi',
              fr: "Couronne à l'huile de riz et au yaourt d'I Banchi", es: 'Rosca de aceite de arroz y yogur de I Banchi',
              de: 'Reisöl-Joghurt-Kranz von I Banchi' },
    descrizione: {
      it: 'Ciambella soffice senza burro, con yogurt e olio di riso e una glassa al limone e gin. Ricetta di Ciccio ' +
          'Sultano e Fabrizio Fiorani per I Banchi di Ragusa.',
      en: 'Soft butter-free ring cake with yoghurt and rice oil and a lemon and gin glaze. Recipe by Ciccio Sultano and ' +
          'Fabrizio Fiorani for I Banchi in Ragusa.',
      fr: 'Couronne moelleuse sans beurre, au yaourt et à l’huile de riz, avec un glaçage citron et gin. Recette de ' +
          'Ciccio Sultano et Fabrizio Fiorani pour I Banchi à Raguse.',
      es: 'Rosca esponjosa sin mantequilla, con yogur y aceite de arroz y un glaseado de limón y ginebra. Receta de ' +
          'Ciccio Sultano y Fabrizio Fiorani para I Banchi de Ragusa.',
      de: 'Lockerer Kranz ohne Butter, mit Joghurt und Reisöl und einer Zitronen-Gin-Glasur. Rezept von Ciccio Sultano ' +
          'und Fabrizio Fiorani für I Banchi in Ragusa.',
    },
    ingredienti: ['yogurt', 'olioRiso', 'farinaDebole', 'zucchero', 'tuorli'],
    difficolta: 2,
    strumenti: ['planetaria', 'spatola', 'stampoCiambella', 'termometro', 'forno'],
    tempo: { min: 30, almeno: true }, // circa 30 min di cottura, più preparazione e glassa
    fonte: {
      nome: 'Ciccio Sultano e Fabrizio Fiorani (I Banchi), su Gambero Rosso',
      url: 'https://www.gamberorosso.it/attualita/torte-per-la-colazione-alcune-ricette-da-rifare-a-casa-con-i-consigli-dei-pasticceri/',
    },
    immagine: null,
  },
  {
    // Sal De Riso su Gambero Rosso: frolla e ripieno per una tortiera Ø 22 cm alta 4 cm; frolla in frigo ≥ 4 h,
    // cottura in forno ventilato a 180 °C per 45 min
    id: 'pastiera-sal-de-riso',
    categoria: 'dolci',
    titolo: { it: 'Pastiera napoletana di Sal De Riso', en: 'Neapolitan pastiera by Sal De Riso',
              fr: 'Pastiera napolitaine de Sal De Riso', es: 'Pastiera napolitana de Sal De Riso',
              de: 'Neapolitanische Pastiera von Sal De Riso' },
    descrizione: {
      it: 'Torta pasquale di pasta frolla con ripieno di ricotta, grano cotto e arancia candita, cotta a 180 °C. ' +
          'Ricetta del maestro pasticciere Sal De Riso.',
      en: 'Easter tart of shortcrust pastry filled with ricotta, cooked wheat and candied orange, baked at 180 °C. ' +
          'Recipe by master pastry chef Sal De Riso.',
      fr: 'Tarte de Pâques en pâte sablée garnie de ricotta, de blé cuit et d’orange confite, cuite à 180 °C. ' +
          'Recette du maître pâtissier Sal De Riso.',
      es: 'Tarta de Pascua de masa quebrada rellena de ricotta, trigo cocido y naranja confitada, horneada a 180 °C. ' +
          'Receta del maestro pastelero Sal De Riso.',
      de: 'Ostertorte aus Mürbeteig mit Füllung aus Ricotta, gekochtem Weizen und Orangeat, gebacken bei 180 °C. ' +
          'Rezept des Konditormeisters Sal De Riso.',
    },
    ingredienti: ['ricottaVaccina', 'granoCotto', 'farina00W180', 'burro', 'uova'],
    difficolta: 3,
    strumenti: ['planetaria', 'tortiera', 'matterello', 'tagliapasta', 'forno'],
    tempo: { min: 285, almeno: true }, // frolla in frigo ≥ 4 h + 45 min di cottura
    fonte: {
      nome: 'Sal De Riso, su Gambero Rosso',
      url: 'https://www.gamberorosso.it/rubriche/storie/storia-e-leggenda-della-pastiera-napoletana-con-la-ricetta-di-sal-de-riso/',
    },
    immagine: null,
  },
  {
    // Rolando Morandin su Gambero Rosso: tre rinfreschi (9 h a 30 °C), primo impasto fino al triplo a ≤ 26 °C,
    // 30 min in frigo, secondo impasto, puntatura 1 h, lievitazione 4–5 h a 30 °C; cottura 10 min a 130 °C,
    // poi a 150 °C fino a 92 °C al cuore; tre colombe da 750 g
    id: 'colomba-morandin',
    categoria: 'dolci',
    titolo: { it: 'Colomba di Rolando Morandin', en: 'Colomba by Rolando Morandin', fr: 'Colomba de Rolando Morandin',
              es: 'Colomba de Rolando Morandin', de: 'Colomba von Rolando Morandin' },
    descrizione: {
      it: 'Colomba pasquale a lievito madre con tre rinfreschi, arancia candita e glassa di nocciole o mandorle. ' +
          'Ricetta del maestro pasticciere Rolando Morandin.',
      en: 'Easter colomba made with sourdough refreshed three times, candied orange and a hazelnut or almond glaze. ' +
          'Recipe by master pastry chef Rolando Morandin.',
      fr: 'Colomba de Pâques au levain rafraîchi trois fois, à l’orange confite et au glaçage aux noisettes ou aux ' +
          'amandes. Recette du maître pâtissier Rolando Morandin.',
      es: 'Colomba de Pascua con masa madre de tres refrescos, naranja confitada y glaseado de avellana o almendra. ' +
          'Receta del maestro pastelero Rolando Morandin.',
      de: 'Oster-Colomba mit dreimal aufgefrischtem Sauerteig, Orangeat und Haselnuss- oder Mandelglasur. ' +
          'Rezept des Konditormeisters Rolando Morandin.',
    },
    ingredienti: ['farinaGrandiLievitati', 'burro', 'tuorli', 'lievitoMadre', 'aranciaCandita'],
    difficolta: 5,
    strumenti: ['planetaria', 'stampoColomba', 'termometro', 'forno'],
    tempo: { min: 870, almeno: true }, // rinfreschi 9 h + frigo 30 min + puntatura 1 h + 4 h; primo impasto e cottura a parte
    fonte: {
      nome: 'Rolando Morandin, su Gambero Rosso',
      url: 'https://www.gamberorosso.it/notizie/ricette/colomba-pasqua-fatta-in-casa/',
    },
    immagine: null,
  },
  {
    // Maurizio Santin su Gambero Rosso: due filoncini, 180 °C per circa 20 min, fette a 45°, 160 °C per circa 15 min
    id: 'cantucci-santin',
    categoria: 'dolci',
    titolo: {
      it: 'Cantucci di Maurizio Santin',
      en: 'Cantucci by Maurizio Santin',
      fr: 'Cantucci de Maurizio Santin',
      es: 'Cantucci de Maurizio Santin',
      de: 'Cantucci von Maurizio Santin',
    },
    descrizione: {
      it: 'Biscotti toscani secchi alle mandorle e pinoli, cotti due volte. Ricetta del pasticciere Maurizio Santin.',
      en: 'Dry Tuscan almond and pine nut biscuits, baked twice. Recipe by pastry chef Maurizio Santin.',
      fr: 'Biscuits toscans secs aux amandes et aux pignons, cuits deux fois. Recette du pâtissier Maurizio Santin.',
      es: 'Galletas toscanas secas de almendra y piñones, horneadas dos veces. Receta del pastelero Maurizio Santin.',
      de: 'Trockene toskanische Mandel-Pinienkern-Kekse, zweimal gebacken. Rezept des Konditors Maurizio Santin.',
    },
    ingredienti: ['farina00', 'zucchero', 'mandorle', 'uova', 'pinoli'],
    difficolta: 2,
    strumenti: ['teglia', 'forno'],
    tempo: { min: 35, almeno: true },
    fonte: {
      nome: 'Maurizio Santin, su Gambero Rosso',
      url: 'https://www.gamberorosso.it/ricette/dolci/cantucci/',
    },
    immagine: null,
  },
  {
    // Max Mariola su Gambero Rosso: impasto in planetaria con albumi montati, 170 °C per 45–60 min
    id: 'torta-paradiso-mariola',
    categoria: 'dolci',
    titolo: {
      it: 'Torta paradiso di Max Mariola',
      en: 'Torta paradiso by Max Mariola',
      fr: 'Torta paradiso de Max Mariola',
      es: 'Torta paradiso de Max Mariola',
      de: 'Torta paradiso von Max Mariola',
    },
    descrizione: {
      it: 'Torta soffice pavese al burro e limone, con farina e fecola, coperta di zucchero a velo. Ricetta dello chef Max Mariola.',
      en: 'Soft butter and lemon cake from Pavia, with flour and starch, dusted with icing sugar. Recipe by chef Max Mariola.',
      fr: 'Gâteau moelleux de Pavie au beurre et au citron, farine et fécule, saupoudré de sucre glace. Recette du chef Max Mariola.',
      es: 'Bizcocho esponjoso de Pavía de mantequilla y limón, con harina y fécula, cubierto de azúcar glas. Receta del chef Max Mariola.',
      de: 'Lockerer Butter-Zitronen-Kuchen aus Pavia mit Mehl und Stärke, mit Puderzucker bestäubt. Rezept des Kochs Max Mariola.',
    },
    ingredienti: ['burro', 'zucchero', 'uova', 'farina00', 'fecola'],
    difficolta: 2,
    strumenti: ['planetaria', 'tortiera', 'forno'],
    tempo: { min: 45, max: 60 },
    fonte: {
      nome: 'Max Mariola, su Gambero Rosso',
      url: 'https://www.gamberorosso.it/ricette/dolci/torta-paradiso/',
    },
    immagine: null,
  },
  {
    // Maurizio Santin su Gambero Rosso: pane ammollato nel latte, tortiera con pinoli, cedro e uvetta, 180 °C per oltre 1 h
    id: 'torta-nicolotta-santin',
    categoria: 'dolci',
    titolo: {
      it: 'Torta nicolotta di Maurizio Santin',
      en: 'Torta nicolotta by Maurizio Santin',
      fr: 'Torta nicolotta de Maurizio Santin',
      es: 'Torta nicolotta de Maurizio Santin',
      de: 'Torta nicolotta von Maurizio Santin',
    },
    descrizione: {
      it: 'Dolce veneziano di pane raffermo e latte con uvetta, cedro e pinoli. Ricetta del pasticciere Maurizio Santin.',
      en: 'Venetian cake of stale bread and milk with sultanas, citron and pine nuts. Recipe by pastry chef Maurizio Santin.',
      fr: 'Gâteau vénitien de pain rassis et de lait aux raisins secs, cédrat et pignons. Recette du pâtissier Maurizio Santin.',
      es: 'Dulce veneciano de pan duro y leche con pasas, cidra y piñones. Receta del pastelero Maurizio Santin.',
      de: 'Venezianischer Kuchen aus altbackenem Brot und Milch mit Sultaninen, Zitronat und Pinienkernen. Rezept des Konditors Maurizio Santin.',
    },
    ingredienti: ['paneRaffermo', 'latte', 'uova', 'uvetta', 'pinoli'],
    difficolta: 1,
    strumenti: ['mixer', 'tortiera', 'forno'],
    tempo: { min: 60, almeno: true },
    fonte: {
      nome: 'Maurizio Santin, su Gambero Rosso',
      url: 'https://www.gamberorosso.it/ricette/dolci/torta-nicolotta/',
    },
    immagine: null,
  },
  {
    // Maurizio Santin su Gambero Rosso: briciole di frolla alle mandorle in tortiera da 24 cm, 180 °C per circa 45 min
    id: 'torta-fregoloti-santin',
    categoria: 'dolci',
    titolo: {
      it: 'Torta de fregoloti di Maurizio Santin',
      en: 'Torta de fregoloti by Maurizio Santin',
      fr: 'Torta de fregoloti de Maurizio Santin',
      es: 'Torta de fregoloti de Maurizio Santin',
      de: 'Torta de fregoloti von Maurizio Santin',
    },
    descrizione: {
      it: 'Torta trentina sbriciolata di mandorle e burro, simile alla sbrisolona, da spezzare con le mani. Ricetta del pasticciere Maurizio Santin.',
      en: 'Crumbly Trentino cake of almonds and butter, like sbrisolona, broken by hand. Recipe by pastry chef Maurizio Santin.',
      fr: 'Gâteau friable du Trentin aux amandes et au beurre, proche de la sbrisolona, à casser à la main. Recette du pâtissier Maurizio Santin.',
      es: 'Tarta desmigada del Trentino de almendra y mantequilla, parecida a la sbrisolona, que se parte con las manos. Receta del pastelero Maurizio Santin.',
      de: 'Krümeliger Trentiner Mandel-Butter-Kuchen, ähnlich der Sbrisolona, der mit den Händen gebrochen wird. Rezept des Konditors Maurizio Santin.',
    },
    ingredienti: ['farina00', 'burro', 'mandorle', 'zucchero'],
    difficolta: 1,
    strumenti: ['mixer', 'tortiera', 'forno'],
    tempo: { min: 45, almeno: true },
    fonte: {
      nome: 'Maurizio Santin, su Gambero Rosso',
      url: 'https://www.gamberorosso.it/ricette/dolci/torta-de-fregoloti/',
    },
    immagine: null,
  },
  {
    // Hirohiko Shoda su Gambero Rosso: albumi montati, bagnomaria a 160 °C per 20 min e 125 °C per 40 min
    id: 'cheesecake-giapponese-shoda',
    categoria: 'dolci',
    titolo: {
      it: 'Cheesecake giapponese di Hirohiko Shoda',
      en: 'Japanese cheesecake by Hirohiko Shoda',
      fr: 'Cheesecake japonais de Hirohiko Shoda',
      es: 'Cheesecake japonesa de Hirohiko Shoda',
      de: 'Japanischer Käsekuchen von Hirohiko Shoda',
    },
    descrizione: {
      it: 'Cheesecake sofficissima con albumi montati, cotta a bagnomaria a bassa temperatura. Ricetta dello chef Hirohiko Shoda.',
      en: 'Very fluffy cheesecake with whipped egg whites, baked in a water bath at low temperature. Recipe by chef Hirohiko Shoda.',
      fr: 'Cheesecake très aérien aux blancs montés, cuit au bain-marie à basse température. Recette du chef Hirohiko Shoda.',
      es: 'Cheesecake muy esponjosa con claras montadas, cocida al baño maría a baja temperatura. Receta del chef Hirohiko Shoda.',
      de: 'Sehr luftiger Käsekuchen mit Eischnee, bei niedriger Temperatur im Wasserbad gebacken. Rezept des Kochs Hirohiko Shoda.',
    },
    ingredienti: ['formaggioSpalmabile', 'latte', 'uova', 'zucchero'],
    difficolta: 4,
    strumenti: ['pentola', 'frusta', 'tortiera', 'teglia', 'termometro', 'forno'],
    tempo: { min: 60, almeno: true },
    fonte: {
      nome: 'Hirohiko Shoda, su Gambero Rosso',
      url: 'https://www.gamberorosso.it/ricette/dolci/cheesecake-giapponese/',
    },
    immagine: null,
  },
  {
    // Giorgione su Gambero Rosso: riso cotto nel latte 14–15 min, uova e anisetta, teglia a 160 °C per 40–50 min
    id: 'torta-di-riso-giorgione',
    categoria: 'dolci',
    titolo: {
      it: 'Torta di riso di Giorgione',
      en: 'Rice cake by Giorgione',
      fr: 'Gâteau de riz de Giorgione',
      es: 'Tarta de arroz de Giorgione',
      de: 'Reiskuchen von Giorgione',
    },
    descrizione: {
      it: 'Dolce di riso cotto nel latte con vaniglia, limone e liquore all’anice, cotto in teglia. Ricetta dello chef Giorgio Barchiesi (Giorgione).',
      en: 'Rice cooked in milk with vanilla, lemon and anise liqueur, baked in a tray. Recipe by chef Giorgio Barchiesi (Giorgione).',
      fr: 'Riz cuit au lait avec vanille, citron et liqueur d’anis, cuit au four en plaque. Recette du chef Giorgio Barchiesi (Giorgione).',
      es: 'Arroz cocido en leche con vainilla, limón y licor de anís, horneado en bandeja. Receta del chef Giorgio Barchiesi (Giorgione).',
      de: 'In Milch gekochter Reis mit Vanille, Zitrone und Anislikör, im Blech gebacken. Rezept des Kochs Giorgio Barchiesi (Giorgione).',
    },
    ingredienti: ['riso', 'latte', 'zucchero', 'uova', 'anisetta'],
    difficolta: 2,
    strumenti: ['pentola', 'frusta', 'teglia', 'forno'],
    tempo: { min: 55, max: 65 },
    fonte: {
      nome: 'Giorgione, su Gambero Rosso',
      url: 'https://www.gamberorosso.it/ricette/dolci/torta-di-riso/',
    },
    immagine: null,
  },
  {
    // Annalisa Barbagli su Gambero Rosso: tortiera da 26 cm, 180 °C per circa 45 min, farcita di confettura di mirtilli rossi
    id: 'torta-de-poia-barbagli',
    categoria: 'dolci',
    titolo: {
      it: 'Torta di grano saraceno (torta de poia)',
      en: 'Buckwheat cake (torta de poia)',
      fr: 'Gâteau au sarrasin (torta de poia)',
      es: 'Tarta de trigo sarraceno (torta de poia)',
      de: 'Buchweizentorte (torta de poia)',
    },
    descrizione: {
      it: 'Torta altoatesina di grano saraceno e mandorle, farcita di confettura di mirtilli rossi e servita con panna. Ricetta di Annalisa Barbagli.',
      en: 'South Tyrolean buckwheat and almond cake filled with lingonberry jam and served with cream. Recipe by Annalisa Barbagli.',
      fr: 'Gâteau du Haut-Adige au sarrasin et aux amandes, fourré de confiture d’airelles et servi avec de la crème. Recette d’Annalisa Barbagli.',
      es: 'Tarta del Alto Adigio de trigo sarraceno y almendra, rellena de mermelada de arándanos rojos y servida con nata. Receta de Annalisa Barbagli.',
      de: 'Südtiroler Buchweizen-Mandel-Torte mit Preiselbeermarmelade, mit Sahne serviert. Rezept von Annalisa Barbagli.',
    },
    ingredienti: ['farinaSaraceno', 'farinaMandorle', 'burroSalato', 'uova', 'confetturaMirtilliRossi'],
    difficolta: 2,
    strumenti: ['frusta', 'tortiera', 'forno'],
    tempo: { min: 45, almeno: true },
    fonte: {
      nome: 'Annalisa Barbagli, su Gambero Rosso',
      url: 'https://www.gamberorosso.it/ricette/dolci/torta-de-poia-torta-di-grano-saraceno/',
    },
    immagine: null,
  },
  {
    // Ricetta di Laura su Gambero Rosso: tortiera apribile da 20–22 cm, 180 °C per 1 h, glassa al formaggio
    id: 'torta-di-carote-gambero',
    categoria: 'dolci',
    titolo: {
      it: 'Torta di carote',
      en: 'Carrot cake',
      fr: 'Carrot cake',
      es: 'Tarta de zanahoria',
      de: 'Karottenkuchen',
    },
    descrizione: {
      it: 'Il classico anglosassone con carote, noci e spezie, farcito con una crema al formaggio e limone.',
      en: 'The English-speaking classic with carrots, walnuts and spices, filled with a lemony cream cheese frosting.',
      fr: 'Le classique anglo-saxon aux carottes, noix et épices, fourré d’une crème au fromage citronnée.',
      es: 'El clásico anglosajón con zanahoria, nueces y especias, relleno de crema de queso y limón.',
      de: 'Der angelsächsische Klassiker mit Karotten, Walnüssen und Gewürzen, mit Frischkäse-Zitronen-Creme gefüllt.',
    },
    ingredienti: ['carote', 'farina00', 'zuccheroCanna', 'noci', 'formaggioSpalmabile'],
    difficolta: 1,
    strumenti: ['grattugia', 'frusta', 'tortieraApribile', 'spatola', 'forno'],
    tempo: { min: 60, almeno: true },
    fonte: {
      nome: 'Gambero Rosso',
      url: 'https://www.gamberorosso.it/ricette/dolci/torta-di-carote/',
    },
    immagine: null,
  },
  {
    // Richard Wieser (I Dolci di Ricky, Bolzano) su Gambero Rosso: frolla a riposo una notte, rettangoli 30 × 40 cm, 160 °C per circa 55 min
    id: 'strudel-mele-wieser',
    categoria: 'dolci',
    titolo: {
      it: 'Strudel di mele con pasta frolla di Richard Wieser',
      en: 'Apple strudel with shortcrust by Richard Wieser',
      fr: 'Strudel aux pommes en pâte sablée de Richard Wieser',
      es: 'Strudel de manzana con masa quebrada de Richard Wieser',
      de: 'Apfelstrudel mit Mürbeteig von Richard Wieser',
    },
    descrizione: {
      it: 'Strudel altoatesino di frolla con mele, uvetta e pinoli; la frolla riposa una notte. Ricetta del pasticciere Richard Wieser.',
      en: 'South Tyrolean shortcrust strudel with apples, sultanas and pine nuts; the pastry rests overnight. Recipe by pastry chef Richard Wieser.',
      fr: 'Strudel du Haut-Adige en pâte sablée aux pommes, raisins secs et pignons ; la pâte repose une nuit. Recette du pâtissier Richard Wieser.',
      es: 'Strudel del Alto Adigio de masa quebrada con manzana, pasas y piñones; la masa reposa una noche. Receta del pastelero Richard Wieser.',
      de: 'Südtiroler Mürbeteigstrudel mit Äpfeln, Sultaninen und Pinienkernen; der Teig ruht über Nacht. Rezept des Konditors Richard Wieser.',
    },
    ingredienti: ['mele', 'farinaTenero', 'burro', 'uvetta', 'pinoli'],
    difficolta: 3,
    strumenti: ['matterello', 'teglia', 'forno'],
    tempo: null,
    fonte: {
      nome: 'Richard Wieser (I Dolci di Ricky), su Gambero Rosso',
      url: 'https://www.gamberorosso.it/rubriche/storie/strudel-di-mele-origini-ricetta-tradizionale-e-varianti-golose/',
    },
    immagine: null,
  },
  {
    // Richard Wieser su Gambero Rosso: sfoglia al cacao con pastello e panetto, pieghe con riposi di 20 min, 160 °C per circa 70 min
    id: 'strudel-pere-noci-wieser',
    categoria: 'dolci',
    titolo: {
      it: 'Strudel di pere e noci con sfoglia al cacao di Richard Wieser',
      en: 'Pear and walnut strudel with cocoa puff pastry by Richard Wieser',
      fr: 'Strudel poires-noix en feuilletage au cacao de Richard Wieser',
      es: 'Strudel de pera y nueces con hojaldre de cacao de Richard Wieser',
      de: 'Birnen-Walnuss-Strudel mit Kakao-Blätterteig von Richard Wieser',
    },
    descrizione: {
      it: 'Strudel con pasta sfoglia al cacao fatta in casa, ripieno di pere, noci e cannella. Ricetta del pasticciere Richard Wieser.',
      en: 'Strudel with homemade cocoa puff pastry and a filling of pears, walnuts and cinnamon. Recipe by pastry chef Richard Wieser.',
      fr: 'Strudel en pâte feuilletée maison au cacao, garni de poires, noix et cannelle. Recette du pâtissier Richard Wieser.',
      es: 'Strudel de hojaldre casero de cacao relleno de pera, nueces y canela. Receta del pastelero Richard Wieser.',
      de: 'Strudel aus selbst gemachtem Kakao-Blätterteig mit Birnen, Walnüssen und Zimt. Rezept des Konditors Richard Wieser.',
    },
    ingredienti: ['pere', 'burro', 'farinaTenero', 'cacao', 'noci'],
    difficolta: 4,
    strumenti: ['matterello', 'teglia', 'forno'],
    tempo: { min: 150, almeno: true },
    fonte: {
      nome: 'Richard Wieser (I Dolci di Ricky), su Gambero Rosso',
      url: 'https://www.gamberorosso.it/rubriche/storie/strudel-di-mele-origini-ricetta-tradizionale-e-varianti-golose/',
    },
    immagine: null,
  },
  {
    // Gambero Rosso: riposo 2 h, treccia a quattro capi, 40 min, forno a 180 °C per 35 min
    id: 'challah-gambero',
    categoria: 'pane',
    titolo: {
      it: 'Challah',
      en: 'Challah',
      fr: 'Hallah',
      es: 'Jalá',
      de: 'Challa',
    },
    descrizione: {
      it: 'Il pane intrecciato ebraico dello Shabbat e di Hanukkah, all’uovo e olio, con semi di sesamo.',
      en: 'The braided Jewish bread for Shabbat and Hanukkah, with egg and oil and topped with sesame seeds.',
      fr: 'Le pain tressé juif du chabbat et de Hanoukka, aux œufs et à l’huile, parsemé de sésame.',
      es: 'El pan trenzado judío del Shabat y de Janucá, con huevo y aceite y semillas de sésamo.',
      de: 'Das geflochtene jüdische Brot für Schabbat und Chanukka, mit Ei und Öl und Sesam bestreut.',
    },
    ingredienti: ['farinaTenero', 'uova', 'olioEvo', 'lievitoSecco'],
    difficolta: 2,
    strumenti: ['teglia', 'forno'],
    tempo: { min: 205 },
    fonte: {
      nome: 'Gambero Rosso',
      url: 'https://www.gamberorosso.it/rubriche/storie/ricetta-challah-pane-intrecciato/',
    },
    immagine: null,
  },
  {
    // Peppe Guida su Gambero Rosso: lievitazione ≥ 1 h, rotolo farcito in stampo a ciambella ≥ 28 cm, uova sopra, 170 °C per circa 50 min
    id: 'casatiello-peppe-guida',
    categoria: 'salati',
    titolo: {
      it: 'Casatiello di Peppe Guida',
      en: 'Casatiello by Peppe Guida',
      fr: 'Casatiello de Peppe Guida',
      es: 'Casatiello de Peppe Guida',
      de: 'Casatiello von Peppe Guida',
    },
    descrizione: {
      it: 'Il pane pasquale napoletano con sugna, salumi e formaggi, a ciambella con le uova intere ingabbiate sopra. Ricetta dello chef Peppe Guida.',
      en: 'The Neapolitan Easter bread with lard, cured meats and cheese, ring-shaped with whole eggs set on top. Recipe by chef Peppe Guida.',
      fr: 'Le pain de Pâques napolitain au saindoux, charcuterie et fromage, en couronne avec des œufs entiers sur le dessus. Recette du chef Peppe Guida.',
      es: 'El pan de Pascua napolitano con manteca, embutidos y quesos, en forma de rosca con huevos enteros encima. Receta del chef Peppe Guida.',
      de: 'Das neapolitanische Osterbrot mit Schmalz, Wurst und Käse, als Kranz mit ganzen Eiern obenauf. Rezept des Kochs Peppe Guida.',
    },
    ingredienti: ['farina00', 'sugna', 'salumiMisti', 'provolonePiccante', 'pecorinoRomano'],
    difficolta: 3,
    strumenti: ['matterello', 'stampoCiambella', 'forno'],
    tempo: { min: 110, almeno: true },
    fonte: {
      nome: 'Peppe Guida, su Gambero Rosso',
      url: 'https://www.gamberorosso.it/rubriche/storie/casatiello-ricetta-beppe-guida/',
    },
    immagine: null,
  },
  {
    // Peppe Guida su Gambero Rosso: dosi per due stampi da 24 cm (qui dimezzate), 170 °C per 50–60 min
    id: 'pastiera-peppe-guida',
    categoria: 'dolci',
    titolo: {
      it: 'Pastiera della famiglia di Peppe Guida',
      en: 'Pastiera from Peppe Guida’s family',
      fr: 'Pastiera de la famille de Peppe Guida',
      es: 'Pastiera de la familia de Peppe Guida',
      de: 'Pastiera der Familie von Peppe Guida',
    },
    descrizione: {
      it: 'Pastiera napoletana con frolla allo strutto e pasta d’arancia fatta in casa. Ricetta di famiglia dello chef Peppe Guida.',
      en: 'Neapolitan pastiera with lard shortcrust and homemade orange paste. Family recipe of chef Peppe Guida.',
      fr: 'Pastiera napolitaine en pâte sablée au saindoux et pâte d’orange maison. Recette familiale du chef Peppe Guida.',
      es: 'Pastiera napolitana con masa quebrada de manteca y pasta de naranja casera. Receta familiar del chef Peppe Guida.',
      de: 'Neapolitanische Pastiera mit Schmalz-Mürbeteig und hausgemachter Orangenpaste. Familienrezept des Kochs Peppe Guida.',
    },
    ingredienti: ['ricotta', 'granoCotto', 'pastaFrolla', 'uova', 'pastaArancia'],
    difficolta: 3,
    strumenti: ['pentola', 'mixer', 'tortiera', 'forno'],
    tempo: { min: 90, almeno: true },
    fonte: {
      nome: 'Peppe Guida, su Gambero Rosso',
      url: 'https://www.gamberorosso.it/attualita/pasqua-ricetta-pastiera-peppe-guida/',
    },
    immagine: null,
  },
  {
    // Peppe Guida su Gambero Rosso: pieghe ogni 20 min, 1 h, 24 h in frigo, pieghe, stampo a ciambella da 28 cm, 170 °C per 45 min
    id: 'tortano-peppe-guida',
    categoria: 'salati',
    titolo: {
      it: 'Tortano della famiglia di Peppe Guida',
      en: 'Tortano from Peppe Guida’s family',
      fr: 'Tortano de la famille de Peppe Guida',
      es: 'Tortano de la familia de Peppe Guida',
      de: 'Tortano der Familie von Peppe Guida',
    },
    descrizione: {
      it: 'Ciambella pasquale napoletana di pasta di pane farcita di strutto, salumi, uova sode e formaggi, maturata un giorno in frigo. Ricetta di famiglia dello chef Peppe Guida.',
      en: 'Neapolitan Easter ring of bread dough filled with lard, cured meats, hard-boiled eggs and cheese, matured for a day in the fridge. Family recipe of chef Peppe Guida.',
      fr: 'Couronne de Pâques napolitaine en pâte à pain garnie de saindoux, charcuterie, œufs durs et fromages, maturée un jour au frais. Recette familiale du chef Peppe Guida.',
      es: 'Rosca de Pascua napolitana de masa de pan rellena de manteca, embutidos, huevos duros y quesos, madurada un día en la nevera. Receta familiar del chef Peppe Guida.',
      de: 'Neapolitanischer Osterkranz aus Brotteig mit Schmalz, Wurst, harten Eiern und Käse, einen Tag im Kühlschrank gereift. Familienrezept des Kochs Peppe Guida.',
    },
    ingredienti: ['farina00', 'farinaManitoba', 'strutto', 'salumiMisti', 'uova'],
    difficolta: 3,
    strumenti: ['stampoCiambella', 'forno'],
    tempo: { min: 1645, almeno: true },
    fonte: {
      nome: 'Peppe Guida, su Gambero Rosso',
      url: 'https://www.gamberorosso.it/attualita/pasqua-ricetta-pastiera-peppe-guida/',
    },
    immagine: null,
  },
  {
    // Gambero Rosso: base all’olio in tortiera da 20–22 cm, zucca arrostita, 220 °C per 15 min e 180 °C per 45 min
    id: 'pumpkin-pie-gambero',
    categoria: 'dolci',
    titolo: {
      it: 'Pumpkin pie',
      en: 'Pumpkin pie',
      fr: 'Tarte au potiron (pumpkin pie)',
      es: 'Pumpkin pie (tarta de calabaza)',
      de: 'Pumpkin Pie (Kürbiskuchen)',
    },
    descrizione: {
      it: 'La torta di zucca speziata del Ringraziamento americano, con latte condensato e una base all’olio senza burro.',
      en: 'The spiced pumpkin pie of American Thanksgiving, with condensed milk and a butter-free oil crust.',
      fr: 'La tarte au potiron épicée de Thanksgiving, au lait concentré et à la pâte à l’huile sans beurre.',
      es: 'La tarta de calabaza especiada del Acción de Gracias estadounidense, con leche condensada y una base de aceite sin mantequilla.',
      de: 'Der gewürzte Kürbiskuchen zu Thanksgiving, mit Kondensmilch und einem Ölteig ohne Butter.',
    },
    ingredienti: ['zucca', 'latteCondensato', 'farinaDolci', 'uova', 'cannella'],
    difficolta: 2,
    strumenti: ['teglia', 'frullatore', 'tortiera', 'forno'],
    tempo: { min: 80, almeno: true },
    fonte: {
      nome: 'Gambero Rosso',
      url: 'https://www.gamberorosso.it/attualita/pumpkin-pie-la-ricetta-della-torta-di-zucca-made-in-usa/',
    },
    immagine: null,
  },
  {
    // Annalisa Zordan su Gambero Rosso: frolla a riposo 30 min, tortiera da 25 cm, cottura in bianco a 180 °C per 20–25 min
    id: 'crostata-fragole-zordan',
    categoria: 'dolci',
    titolo: {
      it: 'Crostata di fragole',
      en: 'Strawberry tart',
      fr: 'Tarte aux fraises',
      es: 'Tarta de fresas',
      de: 'Erdbeertarte',
    },
    descrizione: {
      it: 'La classica crostata di frolla cotta in bianco, con crema pasticcera e fragole lucidate con la gelatina.',
      en: 'The classic blind-baked shortcrust tart with pastry cream and strawberries glazed with gelatine.',
      fr: 'La tarte classique en pâte sablée cuite à blanc, crème pâtissière et fraises nappées de gélatine.',
      es: 'La clásica tarta de masa quebrada horneada en blanco, con crema pastelera y fresas abrillantadas con gelatina.',
      de: 'Die klassische blind gebackene Mürbeteigtarte mit Konditorcreme und mit Gelatine glasierten Erdbeeren.',
    },
    ingredienti: ['fragole', 'farinaTenero', 'burro', 'latte', 'tuorli'],
    difficolta: 3,
    strumenti: ['frusta', 'matterello', 'tortiera', 'pentola', 'forno'],
    tempo: { min: 90, almeno: true },
    fonte: {
      nome: 'Annalisa Zordan, su Gambero Rosso',
      url: 'https://www.gamberorosso.it/attualita/prodotti-del-mese-aprile-le-fragole-e-la-ricetta-della-classica-crostata/',
    },
    immagine: null,
  },
  {
    // Rosetta Tozzi (Panificio 82, San Gregorio Magno) su Gambero Rosso: frolla, ricotta, crema al cioccolato, 200 °C per circa 1 h
    id: 'pizza-dolce-san-gregorio',
    categoria: 'dolci',
    titolo: {
      it: 'Pizza dolce di San Gregorio Magno',
      en: 'Sweet pizza of San Gregorio Magno',
      fr: 'Pizza douce de San Gregorio Magno',
      es: 'Pizza dulce de San Gregorio Magno',
      de: 'Süße Pizza aus San Gregorio Magno',
    },
    descrizione: {
      it: 'Crostata alta campana a strati di ricotta e crema al cioccolato, chiusa da strisce di frolla. Ricetta di Rosetta Tozzi del Panificio 82.',
      en: 'Tall Campanian tart layered with ricotta and chocolate custard, topped with a pastry lattice. Recipe by Rosetta Tozzi of Panificio 82.',
      fr: 'Tarte haute de Campanie en couches de ricotta et de crème au chocolat, fermée par des bandes de pâte. Recette de Rosetta Tozzi du Panificio 82.',
      es: 'Tarta alta de Campania en capas de ricotta y crema de chocolate, cerrada con tiras de masa. Receta de Rosetta Tozzi del Panificio 82.',
      de: 'Hohe kampanische Tarte mit Schichten aus Ricotta und Schokoladencreme und einem Teiggitter. Rezept von Rosetta Tozzi vom Panificio 82.',
    },
    ingredienti: ['ricotta', 'farinaTenero', 'cioccolatoFondente', 'latte', 'zucchero'],
    difficolta: 3,
    strumenti: ['matterello', 'pentola', 'saccaPoche', 'teglia', 'forno'],
    tempo: { min: 60, almeno: true },
    fonte: {
      nome: 'Rosetta Tozzi (Panificio 82), su Gambero Rosso',
      url: 'https://www.gamberorosso.it/notizie/rubriche/storie/pizza-dolce-san-gregorio-magno-ricetta/',
    },
    immagine: null,
  },
  {
    // Giancarlo Casa (La Gatta Mangiona) su Gambero Rosso: 2 h, frigo fino al giorno dopo, panetti da 200 g, 2 h, forno a 300 °C per 8–13 min
    id: 'calzone-romano-casa',
    categoria: 'pizza',
    titolo: {
      it: 'Calzone romano di Giancarlo Casa',
      en: 'Roman calzone by Giancarlo Casa',
      fr: 'Calzone romain de Giancarlo Casa',
      es: 'Calzone romano de Giancarlo Casa',
      de: 'Römischer Calzone von Giancarlo Casa',
    },
    descrizione: {
      it: 'Calzone al forno con fior di latte, tuorlo e prosciutto crudo, da impasto a lunga lievitazione. Ricetta del pizzaiolo Giancarlo Casa, La Gatta Mangiona di Roma.',
      en: 'Baked calzone with fior di latte, egg yolk and prosciutto, from a long-fermented dough. Recipe by pizza maker Giancarlo Casa, La Gatta Mangiona in Rome.',
      fr: 'Calzone au four au fior di latte, jaune d’œuf et jambon cru, à la pâte longuement levée. Recette du pizzaïolo Giancarlo Casa, La Gatta Mangiona à Rome.',
      es: 'Calzone al horno con fior di latte, yema y jamón curado, de masa de larga fermentación. Receta del pizzero Giancarlo Casa, La Gatta Mangiona de Roma.',
      de: 'Gebackener Calzone mit Fior di Latte, Eigelb und Rohschinken aus lang gereiftem Teig. Rezept des Pizzaiolo Giancarlo Casa, La Gatta Mangiona in Rom.',
    },
    ingredienti: ['farinaTenero0', 'farinaIntegrale', 'fiordilatte', 'prosciuttoCrudo', 'tuorli'],
    difficolta: 3,
    strumenti: ['spatola', 'matterello', 'pietraRefrattaria', 'forno'],
    tempo: { min: 1440, almeno: true },
    fonte: {
      nome: 'Giancarlo Casa, su Gambero Rosso',
      url: 'https://www.gamberorosso.it/attualita/calzone-ripieno-al-forno-le-ricette-dei-grandi-pizzaioli-per-prepararlo-in-casa/',
    },
    immagine: null,
  },
  {
    // Roberta Esposito (La Contrada, Aversa) su Gambero Rosso: 48 h in frigo, palline da 260 g, 3–4 h, tegami a 250 °C
    id: 'calzone-scarola-esposito',
    categoria: 'pizza',
    titolo: {
      it: 'Calzone napoletano con scarola di Roberta Esposito',
      en: 'Neapolitan escarole calzone by Roberta Esposito',
      fr: 'Calzone napolitain à la scarole de Roberta Esposito',
      es: 'Calzone napolitano de escarola de Roberta Esposito',
      de: 'Neapolitanischer Escariol-Calzone von Roberta Esposito',
    },
    descrizione: {
      it: 'Pizza di scarola in crosta, con olive, capperi, pinoli, uvetta, acciughe e mozzarella affumicata. Ricetta della pizzaiola Roberta Esposito, La Contrada di Aversa.',
      en: 'Escarole pizza in a crust, with olives, capers, pine nuts, raisins, anchovies and smoked mozzarella. Recipe by pizza maker Roberta Esposito, La Contrada in Aversa.',
      fr: 'Pizza de scarole en croûte, aux olives, câpres, pignons, raisins secs, anchois et mozzarella fumée. Recette de la pizzaïola Roberta Esposito, La Contrada à Aversa.',
      es: 'Pizza de escarola en costra, con aceitunas, alcaparras, piñones, pasas, anchoas y mozzarella ahumada. Receta de la pizzera Roberta Esposito, La Contrada de Aversa.',
      de: 'Escariol-Pizza im Teigmantel mit Oliven, Kapern, Pinienkernen, Rosinen, Sardellen und geräuchertem Mozzarella. Rezept der Pizzaiola Roberta Esposito, La Contrada in Aversa.',
    },
    ingredienti: ['farinaTipo1', 'scarola', 'olive', 'capperi', 'mozzarellaAffumicata'],
    difficolta: 3,
    strumenti: ['padella', 'teglia', 'forno'],
    tempo: { min: 3060, almeno: true },
    fonte: {
      nome: 'Roberta Esposito, su Gambero Rosso',
      url: 'https://www.gamberorosso.it/attualita/calzone-ripieno-al-forno-le-ricette-dei-grandi-pizzaioli-per-prepararlo-in-casa/',
    },
    immagine: null,
  },
  {
    // Friedrich Schmuck (Piano B, Siracusa) su Gambero Rosso: autolisi 20 min, 2–3 h con 2 pieghe, palline, 2 h, forno al massimo per 5 min
    id: 'calzone-siciliano-schmuck',
    categoria: 'pizza',
    titolo: {
      it: 'Calzone siciliano di Friedrich Schmuck',
      en: 'Sicilian calzone by Friedrich Schmuck',
      fr: 'Calzone sicilien de Friedrich Schmuck',
      es: 'Calzone siciliano de Friedrich Schmuck',
      de: 'Sizilianischer Calzone von Friedrich Schmuck',
    },
    descrizione: {
      it: 'Calzone al sesamo con senape selvatica, pomodoro secco, porchetta e tuma. Ricetta del pizzaiolo Friedrich Schmuck, Piano B di Siracusa.',
      en: 'Sesame calzone with wild mustard greens, sun-dried tomato, porchetta and tuma cheese. Recipe by pizza maker Friedrich Schmuck, Piano B in Syracuse.',
      fr: 'Calzone au sésame avec moutarde sauvage, tomate séchée, porchetta et tuma. Recette du pizzaïolo Friedrich Schmuck, Piano B à Syracuse.',
      es: 'Calzone con sésamo, mostaza silvestre, tomate seco, porchetta y tuma. Receta del pizzero Friedrich Schmuck, Piano B de Siracusa.',
      de: 'Sesam-Calzone mit wildem Senfkraut, getrockneten Tomaten, Porchetta und Tuma-Käse. Rezept des Pizzaiolo Friedrich Schmuck, Piano B in Syrakus.',
    },
    ingredienti: ['farinaTenero', 'farinaGranoDuro', 'porchetta', 'tuma', 'semiSesamo'],
    difficolta: 3,
    strumenti: ['planetaria', 'pentola', 'padella', 'teglia', 'forno'],
    tempo: { min: 280, almeno: true },
    fonte: {
      nome: 'Friedrich Schmuck, su Gambero Rosso',
      url: 'https://www.gamberorosso.it/attualita/calzone-ripieno-al-forno-le-ricette-dei-grandi-pizzaioli-per-prepararlo-in-casa/',
    },
    immagine: null,
  },
  {
    // La Brinca (Ne, Genova) su Gambero Rosso: sfoglie all’olio, bietole e prescinseua, 4 uova intere, 200 °C per circa 50 min
    id: 'torta-pasqualina-brinca',
    categoria: 'salati',
    titolo: {
      it: 'Torta pasqualina de La Brinca',
      en: 'Torta pasqualina by La Brinca',
      fr: 'Torta pasqualina de La Brinca',
      es: 'Torta pasqualina de La Brinca',
      de: 'Torta pasqualina von La Brinca',
    },
    descrizione: {
      it: 'Torta salata ligure di sfoglie all’olio con bietole, prescinseua e uova intere. Ricetta della trattoria La Brinca di Ne.',
      en: 'Ligurian savoury pie of oil pastry sheets with chard, prescinseua curd and whole eggs. Recipe by the La Brinca trattoria in Ne.',
      fr: 'Tourte salée ligure en feuilles de pâte à l’huile, aux blettes, prescinseua et œufs entiers. Recette de la trattoria La Brinca à Ne.',
      es: 'Tarta salada ligur de láminas de masa con aceite, acelgas, prescinseua y huevos enteros. Receta de la trattoria La Brinca de Ne.',
      de: 'Ligurische herzhafte Torte aus Ölteigblättern mit Mangold, Prescinseua und ganzen Eiern. Rezept der Trattoria La Brinca in Ne.',
    },
    ingredienti: ['bietole', 'prescinseua', 'parmigiano', 'uova', 'olioEvo'],
    difficolta: 3,
    strumenti: ['matterello', 'padella', 'tortiera', 'forno'],
    tempo: { min: 50, almeno: true },
    fonte: {
      nome: 'La Brinca, su Gambero Rosso',
      url: 'https://www.gamberorosso.it/attualita/pasqua-le-ricette-del-tortano-della-pizza-pasqualina-pizza-di-formaggio-e-della-crostata-di-ricotta-e-lenticchie/',
    },
    immagine: null,
  },
  {
    // Valentino Palmisano (Vespasia, Norcia) su Gambero Rosso: frolla in stampo da 24 cm, lenticchie cotte nel latte, 160 °C per 45 min
    id: 'crostata-ricotta-lenticchie-palmisano',
    categoria: 'dolci',
    titolo: {
      it: 'Crostata di ricotta e lenticchie di Valentino Palmisano',
      en: 'Ricotta and lentil tart by Valentino Palmisano',
      fr: 'Tarte ricotta et lentilles de Valentino Palmisano',
      es: 'Tarta de ricotta y lentejas de Valentino Palmisano',
      de: 'Ricotta-Linsen-Tarte von Valentino Palmisano',
    },
    descrizione: {
      it: 'Crostata umbra di ricotta di pecora con lenticchie di Castelluccio cotte nel latte. Ricetta dello chef Valentino Palmisano, Vespasia di Norcia.',
      en: 'Umbrian sheep’s ricotta tart with Castelluccio lentils cooked in milk. Recipe by chef Valentino Palmisano, Vespasia in Norcia.',
      fr: 'Tarte ombrienne à la ricotta de brebis et aux lentilles de Castelluccio cuites au lait. Recette du chef Valentino Palmisano, Vespasia à Norcia.',
      es: 'Tarta umbra de ricotta de oveja con lentejas de Castelluccio cocidas en leche. Receta del chef Valentino Palmisano, Vespasia de Norcia.',
      de: 'Umbrische Schafsricotta-Tarte mit in Milch gegarten Castelluccio-Linsen. Rezept des Kochs Valentino Palmisano, Vespasia in Norcia.',
    },
    ingredienti: ['ricottaPecora', 'lenticchie', 'panna', 'tuorli', 'farinaTenero'],
    difficolta: 3,
    strumenti: ['matterello', 'pentola', 'frullatore', 'tortiera', 'forno'],
    tempo: { min: 145, almeno: true },
    fonte: {
      nome: 'Valentino Palmisano, su Gambero Rosso',
      url: 'https://www.gamberorosso.it/attualita/pasqua-le-ricette-del-tortano-della-pizza-pasqualina-pizza-di-formaggio-e-della-crostata-di-ricotta-e-lenticchie/',
    },
    immagine: null,
  },
  {
    // Max Mariola su Gambero Rosso: frolla, ripieno di ricotta, salame e formaggi, 180 °C per 30–40 min
    id: 'torta-ricotta-lucana-mariola',
    categoria: 'salati',
    titolo: {
      it: 'Torta di ricotta lucana di Max Mariola',
      en: 'Lucanian ricotta pie by Max Mariola',
      fr: 'Tourte lucanienne à la ricotta de Max Mariola',
      es: 'Tarta lucana de ricotta de Max Mariola',
      de: 'Lukanische Ricottatorte von Max Mariola',
    },
    descrizione: {
      it: 'Torta salata pasquale della Basilicata: frolla con ricotta di pecora, mozzarella, pecorino e salamino al finocchio. Ricetta dello chef Max Mariola.',
      en: 'Easter savoury pie from Basilicata: shortcrust with sheep’s ricotta, mozzarella, pecorino and fennel salami. Recipe by chef Max Mariola.',
      fr: 'Tourte salée de Pâques de Basilicate : pâte sablée, ricotta de brebis, mozzarella, pecorino et saucisson au fenouil. Recette du chef Max Mariola.',
      es: 'Tarta salada de Pascua de Basilicata: masa quebrada con ricotta de oveja, mozzarella, pecorino y salami al hinojo. Receta del chef Max Mariola.',
      de: 'Herzhafte Ostertorte aus der Basilikata: Mürbeteig mit Schafsricotta, Mozzarella, Pecorino und Fenchelsalami. Rezept des Kochs Max Mariola.',
    },
    ingredienti: ['ricottaPecora', 'fiordilatte', 'salameFinocchio', 'pecorinoRomano', 'farinaTenero'],
    difficolta: 2,
    strumenti: ['matterello', 'tortiera', 'forno'],
    tempo: { min: 30, max: 40 },
    fonte: {
      nome: 'Max Mariola, su Gambero Rosso',
      url: 'https://www.gamberorosso.it/ricette/pane-pizze-e-torte-salate/torta-di-ricotta-lucana/',
    },
    immagine: null,
  },
  {
    // Sabrine d’Aubergine («Il fornaio della domenica») su Gambero Rosso: stampo a cassetta 10 × 20 cm, 1–1,5 h, treccia, 40–50 min, 220 °C per 40–45 min
    id: 'pane-semi-integrale-aubergine',
    categoria: 'pane',
    titolo: {
      it: 'Pane semi-integrale in cassetta di Sabrine d’Aubergine',
      en: 'Half-wholemeal tin loaf by Sabrine d’Aubergine',
      fr: 'Pain mi-complet en moule de Sabrine d’Aubergine',
      es: 'Pan semiintegral de molde de Sabrine d’Aubergine',
      de: 'Halbvollkorn-Kastenbrot von Sabrine d’Aubergine',
    },
    descrizione: {
      it: 'Pane quotidiano con Manitoba, grano duro e integrale, intrecciato e cotto in stampo. Ricetta di Sabrine d’Aubergine dal libro «Il fornaio della domenica».',
      en: 'Everyday bread of Manitoba, durum and wholemeal flour, braided and baked in a tin. Recipe by Sabrine d’Aubergine from the book "Il fornaio della domenica".',
      fr: 'Pain du quotidien à la Manitoba, au blé dur et à la farine complète, tressé et cuit en moule. Recette de Sabrine d’Aubergine, tirée du livre « Il fornaio della domenica ».',
      es: 'Pan de diario con harina Manitoba, de trigo duro e integral, trenzado y cocido en molde. Receta de Sabrine d’Aubergine del libro «Il fornaio della domenica».',
      de: 'Alltagsbrot aus Manitoba-, Hartweizen- und Vollkornmehl, geflochten und in der Kastenform gebacken. Rezept von Sabrine d’Aubergine aus dem Buch „Il fornaio della domenica“.',
    },
    ingredienti: ['farinaManitoba', 'farinaGranoDuro', 'farinaIntegrale', 'lievitoBirra', 'malto'],
    difficolta: 2,
    strumenti: ['frusta', 'stampoCassetta', 'forno'],
    tempo: { min: 160, max: 210 },
    fonte: {
      nome: 'Sabrine d’Aubergine, su Gambero Rosso',
      url: 'https://www.gamberorosso.it/ricette/pane-pizze-e-torte-salate/il-pane-semi-integrale-di-casa-nostra/',
    },
    immagine: null,
  },
  {
    // Gambero Rosso: sfoglia all’uovo, riso cotto nel latte con zafferano e grana, 2 teglie, 160 °C per circa 30 min
    id: 'torta-salata-di-riso-gambero',
    categoria: 'salati',
    titolo: {
      it: 'Torta salata di riso',
      en: 'Savoury rice pie',
      fr: 'Tourte salée au riz',
      es: 'Tarta salada de arroz',
      de: 'Herzhafte Reistorte',
    },
    descrizione: {
      it: 'Torta piemontese di sfoglia sottile ripiena di riso cotto nel latte con zafferano e grana.',
      en: 'Piedmontese pie of thin pastry filled with rice cooked in milk with saffron and grana cheese.',
      fr: 'Tourte piémontaise en pâte fine garnie de riz cuit au lait avec safran et grana.',
      es: 'Tarta piamontesa de masa fina rellena de arroz cocido en leche con azafrán y grana.',
      de: 'Piemontesische Torte aus dünnem Teig, gefüllt mit in Milch gegartem Reis mit Safran und Grana.',
    },
    ingredienti: ['riso', 'latte', 'grana', 'zafferano', 'farinaTenero'],
    difficolta: 2,
    strumenti: ['pentola', 'matterello', 'teglia', 'forno'],
    tempo: { min: 30, almeno: true },
    fonte: {
      nome: 'Gambero Rosso',
      url: 'https://www.gamberorosso.it/ricette/pane-pizze-e-torte-salate/torta-salata-di-riso/',
    },
    immagine: null,
  },
];
