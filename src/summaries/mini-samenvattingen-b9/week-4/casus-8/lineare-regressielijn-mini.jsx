// Auto-generated from: LME 37 – Lineare regressielijn.docx
// Regenerate: node scripts/generate-blok9-mini-summaries.mjs

const sections = [
  {
    id: "mini-sect-01",
    title: "Lineaire regressie gebruik je om de relatie tussen variabelen te beschrijven, een…",
    icon: "BookOpen",
    html: `<p>Lineaire regressie gebruik je om de relatie tussen variabelen te beschrijven, een uitkomst te voorspellen en hypothesen te toetsen. De afhankelijke variabele heet Y; de onafhankelijke variabele(n) heet X. Bij enkelvoudige lineaire regressie is er één verklarende variabele, bij meervoudige lineaire regressie meerdere. Het model schat de verwachte waarde van Y als functie van X. De algemene vorm is:</p>`,
  },
  {
    id: "mini-sect-02",
    title: "\\[\\hat{Y} = b_0 + b_1X\\]",
    icon: "Layers",
    html: `<p>\\[<br />\\hat{Y} = b_0 + b_1X<br />\\]</p>`,
  },
  {
    id: "mini-sect-03",
    title: "Hierin is b0 het intercept: de verwachte waarde van Y als X = 0.",
    icon: "Stethoscope",
    html: `<p>Hierin is b0 het intercept: de verwachte waarde van Y als X = 0. b1 is de helling of regressiecoëfficiënt: de gemiddelde verandering in Y als X met één eenheid toeneemt. De helling geeft dus aan hoeveel de verwachte waarde van Y gemiddeld verandert bij een toename van X met 1.</p>`,
  },
  {
    id: "mini-sect-04",
    title: "Het verschil tussen correlatie en regressie is belangrijk.",
    icon: "Activity",
    html: `<p>Het verschil tussen correlatie en regressie is belangrijk. Correlatie, meestal uitgedrukt met Pearson’s r, beschrijft de sterkte en richting van een lineaire samenhang tussen twee continue variabelen. r ligt tussen -1 en 1. Een positieve correlatie betekent dat hogere waarden van X gemiddeld samengaan met hogere waarden van Y; een negatieve correlatie betekent het omgekeerde. Als r ongeveer 0 is, is er geen duidelijke lineaire samenhang, al kan er wel een niet-lineair verband bestaan. Correlatie is symmetrisch: X en Y spelen dezelfde rol. Regressie gaat verder, omdat het een model geeft waarmee je Y kunt verklaren of voorspellen op basis van X. Correlatie zegt niets over voorspelling van Y en ook niet over causaliteit.</p>`,
  },
  {
    id: "mini-sect-05",
    title: "Correlatie en regressie bewijzen geen causaliteit.",
    icon: "ShieldAlert",
    html: `<p>Correlatie en regressie bewijzen geen causaliteit. Een gevonden verband betekent niet automatisch dat X oorzaak is van Y. Een andere variabele kan het verband vertekenen, bijvoorbeeld door confounding. Een confounder is een variabele die samenhangt met zowel de blootstelling als de uitkomst. Daarom is de onderzoeksopzet van groot belang. Een randomized controlled trial (RCT) vermindert confounding door randomisatie en is daardoor vaak geschikter om causaliteit te onderzoeken.</p>`,
  },
  {
    id: "mini-sect-06",
    title: "Bij regressie toets je vaak een hypothese over de regressiecoëfficiënt van X.",
    icon: "ClipboardList",
    html: `<p>Bij regressie toets je vaak een hypothese over de regressiecoëfficiënt van X. De nulhypothese is meestal dat er geen lineair verband is tussen X en Y:</p>`,
  },
  {
    id: "mini-sect-07",
    title: "\\[H_0: \\beta_1 = 0\\]",
    icon: "GitBranch",
    html: `<p>\\[<br />H_0: \\beta_1 = 0<br />\\]</p>`,
  },
  {
    id: "mini-sect-08",
    title: "De alternatieve hypothese is:",
    icon: "Microscope",
    html: `<p>De alternatieve hypothese is:</p>`,
  },
  {
    id: "mini-sect-09",
    title: "\\[H_A: \\beta_1 \\neq 0\\]",
    icon: "FlaskConical",
    html: `<p>\\[<br />H_A: \\beta_1 \\neq 0<br />\\]</p>`,
  },
  {
    id: "mini-sect-10",
    title: "De p-waarde geeft aan: als H0 waar is, hoe groot is dan de kans op dit resultaat of iets…",
    icon: "Pill",
    html: `<p>De p-waarde geeft aan: als H0 waar is, hoe groot is dan de kans op dit resultaat of iets extremers? Bij een kleine p-waarde is het resultaat onwaarschijnlijk onder H0 en verwerp je H0 vaak. In de praktijk geldt vaak: p &lt; 0.05, verwerp H0; p &gt; 0.05, verwerp H0 niet. Daarbij kun je fouten maken. Een type I-fout betekent dat je H0 verwerpt terwijl H0 in werkelijkheid waar is; de kans daarop is alpha (α), het significantieniveau. Een type II-fout betekent dat je H0 niet verwerpt terwijl H0 in werkelijkheid onwaar is; de kans daarop is beta (β). Power is 1 - β.</p>`,
  },
  {
    id: "mini-sect-11",
    title: "Een regressielijn schat je met de methode van de kleinste kwadraten.",
    icon: "Heart",
    html: `<p>Een regressielijn schat je met de methode van de kleinste kwadraten. Voor elk datapunt bereken je een residu:</p>`,
  },
  {
    id: "mini-sect-12",
    title: "\\[e_i = Y_i - \\hat{Y}_i\\]",
    icon: "Dna",
    html: `<p>\\[<br />e_i = Y_i - \\hat{Y}_i<br />\\]</p>`,
  },
  {
    id: "mini-sect-13",
    title: "Een residu is het verschil tussen de geobserveerde waarde en de door het model voorspelde…",
    icon: "Droplets",
    html: `<p>Een residu is het verschil tussen de geobserveerde waarde en de door het model voorspelde waarde; het is dus de verticale afstand tot de regressielijn. De beste lijn is de lijn waarvoor de som van de gekwadrateerde residuen zo klein mogelijk is:</p>`,
  },
  {
    id: "mini-sect-14",
    title: "\\[SSE = \\sum_{i=1}^{n}(Y_i - \\hat{Y}_i)^2\\]",
    icon: "HeartPulse",
    html: `<p>\\[<br />SSE = \\sum_{i=1}^{n}(Y_i - \\hat{Y}_i)^2<br />\\]</p>`,
  },
  {
    id: "mini-sect-15",
    title: "Door te kwadrateren heffen positieve en negatieve afwijkingen elkaar niet op, en tellen…",
    icon: "Brain",
    html: `<p>Door te kwadrateren heffen positieve en negatieve afwijkingen elkaar niet op, en tellen grote afwijkingen zwaarder mee. Residuen laten zien wat het model niet verklaart. Dat kan komen door meetfout, biologische variatie of niet-gemeten factoren.</p>`,
  },
  {
    id: "mini-sect-16",
    title: "Een voorbeeld van interpretatie is:",
    icon: "Syringe",
    html: `<p>Een voorbeeld van interpretatie is:</p>`,
  },
  {
    id: "mini-sect-17",
    title: "\\[\\hat{Y} = 95 + 0.75 \\times \\text{leeftijd}\\]",
    icon: "Target",
    html: `<p>\\[<br />\\hat{Y} = 95 + 0.75 \\times \\text{leeftijd}<br />\\]</p>`,
  },
  {
    id: "mini-sect-18",
    title: "Hier betekent b0 = 95 de geschatte interceptwaarde en b1 = 0.75 dat de systolische…",
    icon: "Sparkles",
    html: `<p>Hier betekent b0 = 95 de geschatte interceptwaarde en b1 = 0.75 dat de systolische bloeddruk volgens dit model gemiddeld met 0.75 mmHg toeneemt per extra levensjaar. Het intercept is de verwachte waarde van Y als X = 0. Soms is dat inhoudelijk relevant, maar soms is X = 0 in de praktijk niet zinvol en is het intercept vooral een wiskundig onderdeel van het model.</p>`,
  },
  {
    id: "mini-sect-19",
    title: "Een bijzonder geval is lineaire regressie met een dichotome onafhankelijke variabele, dus…",
    icon: "Gauge",
    html: `<p>Een bijzonder geval is lineaire regressie met een dichotome onafhankelijke variabele, dus een variabele met alleen 0 en 1. Bijvoorbeeld: niet-rokers X = 0 en rokers X = 1. Dan geldt voor niet-rokers Y = b0 en voor rokers Y = b0 + b1. Het verschil tussen beide groepen is dus precies b1. Daarmee is lineaire regressie met een dichotome variabele wiskundig equivalent aan een Student’s t-toets voor onafhankelijke groepen. Ook de toetsing is dan gelijk: H0: b1 = 0 is equivalent aan H0: μ1 = μ2. De t-waarde, p-waarde en betrouwbaarheidsintervallen zijn dan identiek, mits dezelfde aannames worden gebruikt.</p>`,
  },
  {
    id: "mini-sect-20",
    title: "Om te beoordelen hoe goed het model past, gebruik je R-squared (R²).",
    icon: "Lightbulb",
    html: `<p>Om te beoordelen hoe goed het model past, gebruik je R-squared (R²). R² laat zien welk deel van de variantie in Y wordt verklaard door X binnen het lineaire model. R² is een proportie tussen 0 en 1. Bij R² = 0 verklaart X geen enkele variatie in Y; bij R² = 1 liggen alle punten exact op de regressielijn. Hoe hoger R², hoe beter het lineaire model de variatie in Y beschrijft. Bij enkelvoudige lineaire regressie geldt bovendien:</p>`,
  },
  {
    id: "mini-sect-21",
    title: "\\[R^2 = r^2\\]",
    icon: "FileText",
    html: `<p>\\[<br />R^2 = r^2<br />\\]</p>`,
  },
  {
    id: "mini-sect-22",
    title: "Correlatie laat de sterkte én richting van de lineaire samenhang zien, terwijl R² laat…",
    icon: "Search",
    html: `<p>Correlatie laat de sterkte én richting van de lineaire samenhang zien, terwijl R² laat zien hoeveel variantie in Y door X wordt verklaard. Het teken van het verband zit in r, maar gaat verloren in R², omdat R² altijd positief is.</p>`,
  },
  {
    id: "mini-sect-23",
    title: "Lineaire regressie berust op enkele aannames: lineariteit, onafhankelijkheid, constante…",
    icon: "Zap",
    html: `<p>Lineaire regressie berust op enkele aannames: lineariteit, onafhankelijkheid, constante variantie van de fouten en normaliteit van de fouten. De relatie tussen X en Y moet ongeveer door een rechte lijn te beschrijven zijn. Observaties moeten onafhankelijk zijn. De spreiding van de fouten moet ongeveer gelijk zijn voor alle waarden van X. De fouten ε, en bij benadering de residuen, moeten normaal verdeeld zijn. Deze aannames beoordeel je conceptueel met bijvoorbeeld een residuplot en een normaliteitscontrole.</p>`,
  },
  {
    id: "mini-sect-24",
    title: "Welke regressie je gebruikt, hangt af van de onderzoeksvraag.",
    icon: "CircleDot",
    html: `<p>Welke regressie je gebruikt, hangt af van de onderzoeksvraag. Bij beschrijvend onderzoek ligt de nadruk op het samenvatten van patronen en verbanden in de data, zonder expliciete causale of voorspellende ambitie. Je kunt bijvoorbeeld bekijken hoe bloeddruk gemiddeld verschilt met leeftijd en eventueel geslacht opnemen om verschillen tussen groepen zichtbaar te maken. Bij etiologisch onderzoek wil je nagaan of er een causaal verband is tussen een variabele en de uitkomst. Dan is confounding belangrijk en neem je vaak meerdere relevante variabelen op om het effect van de variabele van interesse te schatten, gecorrigeerd voor andere factoren. Mogelijke confounders zijn bijvoorbeeld geslacht, roken, cholesterol en leeftijd. Bij predictief onderzoek wil je de uitkomst zo goed mogelijk voorspellen. Dan kies je voorspellers op basis van hun bijdrage aan de voorspelprestatie. Confounding is hierbij niet het hoofddoel.</p>`,
  },
  {
    id: "mini-sect-25",
    title: "Samengevat: lineaire regressie beschrijft en voorspelt een uitkomst Y op basis van één of…",
    icon: "CheckCircle2",
    html: `<p>Samengevat: lineaire regressie beschrijft en voorspelt een uitkomst Y op basis van één of meer verklarende variabelen X. Belangrijke kernbegrippen zijn het intercept, de helling, residuen, p-waarden en R². Correlatie beschrijft samenhang, regressie geeft een model voor de verwachte waarde van Y. Geen van beide bewijst causaliteit. Let daarom steeds op de aannames, de interpretatie van de coëfficiënten en het onderscheid tussen beschrijvend, etiologisch en predictief gebruik.</p>`,
  }
]

const config = {
  baseLmeId: "blok9-week4-casus8-lineare-regressielijn",
  title: "Lineare regressielijn",
  description: "Lineaire regressie gebruik je om de relatie tussen variabelen te beschrijven, een uitkomst te voorspellen en hypothesen te toetsen. De afhankelijke variabele heet Y; de onafhankelijke variabele(n) heet X. Bij enkelvoudige lineaire regressie is er één verklarende variabele, bij meervoudige lineaire regressie meerdere. Het model schat de verwachte…",
  caseLabel: "Week 4 · Casus 8: Een leuk feestje",
  practiceLink: "/oefenvragen?lme=blok9-week4-casus8-lineare-regressielijn",
  sections,
}

export default config
