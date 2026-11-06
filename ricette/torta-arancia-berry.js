// Dettaglio della ricetta «torta-arancia-berry»: quantità, dosi, note e procedimento (vedi ricette.js per le regole).
DETTAGLI['torta-arancia-berry'] = {
  contenitore: {
    forma: 'tondo', diametro: 20, numero: 2,
    nota: {
      it: 'La torta si fa con due tortiere a fondo mobile da 20 cm: le dosi indicate sono per una tortiera, cioè metà torta.',
      en: 'The cake uses two 20 cm loose-bottomed sandwich tins: the amounts shown are for one tin, that is half the cake.',
      fr: 'Le gâteau se fait dans deux moules à fond amovible de 20 cm : les doses indiquées sont pour un moule, soit la moitié du gâteau.',
      es: 'La tarta se hace con dos moldes de fondo desmontable de 20 cm: las dosis indicadas son para un molde, es decir media tarta.',
      de: 'Der Kuchen wird in zwei 20-cm-Formen mit Hebeboden gebacken: Die Mengen gelten für eine Form, also den halben Kuchen.',
    },
  },
  dosi: [
    { nome: GRUPPI.impasto,
      ingredienti: [['burro', 112.5], ['zucchero', 112.5], ['uova', 110], ['farinaAutolievitante', 110], ['lievitoChimico'], ['scorzaArancia']] },
    { nome: GRUPPI.farcitura, fuoriPeso: true,
      ingredienti: [['burro', 37.5], ['zuccheroVelo', 75], ['scorzaArancia'], ['succoArancia', 15]] },
  ],
  notaDosi: {
    it: 'Per tutta la torta: 225 g di burro e di zucchero, 4 uova, 220 g di farina, 2 cucchiaini rasi di lievito e la scorza di un’arancia; per la crema 75 g di burro, 150 g di zucchero a velo, scorza di un’arancia e 2 cucchiai di succo, più scorza a spirale per decorare. Le dosi mostrate sono la metà.',
    en: 'For the whole cake: 225 g each of butter and sugar, 4 eggs, 220 g of flour, 2 level teaspoons of baking powder and the zest of one orange; for the icing 75 g of butter, 150 g of icing sugar, the zest of an orange and 2 tablespoons of juice, plus spiralled zest to decorate. The amounts shown are half.',
    fr: 'Pour tout le gâteau : 225 g de beurre et de sucre, 4 œufs, 220 g de farine, 2 cuillères à café rases de levure et le zeste d’une orange ; pour la crème 75 g de beurre, 150 g de sucre glace, le zeste d’une orange et 2 cuillères de jus, plus des zestes en spirale pour décorer. Les doses affichées sont la moitié.',
    es: 'Para toda la tarta: 225 g de mantequilla y de azúcar, 4 huevos, 220 g de harina, 2 cucharaditas rasas de levadura y la ralladura de una naranja; para la crema 75 g de mantequilla, 150 g de azúcar glas, la ralladura de una naranja y 2 cucharadas de zumo, más piel en espiral para decorar. Las dosis mostradas son la mitad.',
    de: 'Für den ganzen Kuchen: je 225 g Butter und Zucker, 4 Eier, 220 g Mehl, 2 gestrichene Teelöffel Backpulver und die Schale einer Orange; für die Creme 75 g Butter, 150 g Puderzucker, Schale einer Orange und 2 Esslöffel Saft, dazu Schalenspiralen zum Verzieren. Die angezeigten Mengen sind die Hälfte.',
  },
  passi: [
    {
      it: 'Scaldare il forno a 180 °C (160 °C ventilato), imburrare le tortiere e foderarne il fondo. Battere 2 minuti burro, zucchero, uova, farina, lievito e scorza.',
      en: 'Heat the oven to 180 °C (160 °C fan), butter the tins and line the bases. Beat the butter, sugar, eggs, flour, baking powder and zest for 2 minutes.',
      fr: 'Chauffer le four à 180 °C (160 °C chaleur tournante), beurrer les moules et en chemiser le fond. Battre 2 minutes beurre, sucre, œufs, farine, levure et zeste.',
      es: 'Calentar el horno a 180 °C (160 °C con ventilador), engrasar los moldes y forrar la base. Batir 2 minutos mantequilla, azúcar, huevos, harina, levadura y ralladura.',
      de: 'Den Ofen auf 180 °C (160 °C Umluft) heizen, die Formen buttern und die Böden auslegen. Butter, Zucker, Eier, Mehl, Backpulver und Schale 2 Minuten schlagen.',
    },
    {
      it: 'Dividere nelle tortiere, livellare e cuocere 25 minuti, finché la superficie torna su se premuta; sformare dopo 5 minuti e far raffreddare.',
      en: 'Divide between the tins, level and bake for 25 minutes, until the tops spring back; turn out after 5 minutes and cool.',
      fr: 'Répartir dans les moules, lisser et cuire 25 minutes, jusqu’à ce que le dessus reprenne sa forme ; démouler après 5 minutes et laisser refroidir.',
      es: 'Repartir en los moldes, nivelar y hornear 25 minutos, hasta que la superficie recupere su forma al presionar; desmoldar a los 5 minutos y dejar enfriar.',
      de: 'Auf die Formen verteilen, glätten und 25 Minuten backen, bis die Oberfläche zurückfedert; nach 5 Minuten stürzen und abkühlen lassen.',
    },
    {
      it: 'Lavorare gli ingredienti della crema, spalmarne metà su un disco capovolto, coprire con l’altro e spalmare il resto sopra; decorare con scorza a spirale.',
      en: 'Beat the icing ingredients together, spread half over one upturned cake, top with the other and spread the rest on top; decorate with spiralled zest.',
      fr: 'Battre les ingrédients de la crème, en étaler la moitié sur un disque retourné, couvrir de l’autre et étaler le reste dessus ; décorer de zestes en spirale.',
      es: 'Batir los ingredientes de la crema, extender la mitad sobre un bizcocho boca abajo, cubrir con el otro y extender el resto encima; decorar con piel en espiral.',
      de: 'Die Cremezutaten verrühren, die Hälfte auf einen umgedrehten Boden streichen, den zweiten daraufsetzen und den Rest obenauf streichen; mit Schalenspiralen verzieren.',
    },
  ],
};
