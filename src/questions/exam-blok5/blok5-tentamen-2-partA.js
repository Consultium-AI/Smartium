/** Blok 5 oefententamen 2 — casussen 1–4 (bron: docx; 100 punten totaal) */

export const blok5Tentamen2PartA = [
  {
    id: 'casus-1',
    title: 'Casus 1 – Kwetsbare huid bij de start van het leven',
    totalPoints: 8,
    scenario:
      'Een meisje wordt geboren na 25 weken zwangerschap. Op de NICU valt op dat haar huid dun en glanzend is. Bij het verwijderen van pleisters ontstaan snel oppervlakkige huiddefecten. De verpleegkundige vraagt zich af waarom men bij deze prematuur zo voorzichtig is met wassen, zalven en huidcontact.',
    questions: [
      {
        id: '1a',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Welke verklaring past het best bij het verhoogde risico op dehydratie en hypothermie bij deze patiënte?',
        options: [
          { letter: 'A', text: 'Prematuren hebben een relatief dikke epidermis en daardoor meer warmteverlies via vasodilatatie' },
          { letter: 'B', text: 'Prematuren hebben verhoogd transepidermaal waterverlies door een onrijpe huidbarrière' },
          { letter: 'C', text: 'Prematuren hebben een lage pH van de huid en daardoor meer vochtverlies' },
          { letter: 'D', text: 'Prematuren zweten direct na geboorte overmatig en verliezen daardoor veel water' },
        ],
        correctAnswer: 'B',
        explanation:
          'Prematuren hebben een onrijpe huidbarrière met verhoogd transepidermaal waterverlies, waardoor dehydratie en hypothermie sneller optreden.',
      },
      {
        id: '1b',
        type: 'koppelvraag',
        points: 2.0,
        question: `Beeldvraag.Buitenlucht
│
│  A  = laag met afgeplatte, dode, verhoornde cellen
│
│  B  = laag met korrelige keratinocyten
│
│  C  = laag met meerdere polygonale "stekelcellen"
│
│  D  = diepste epidermale laag, één rij delende cellen op de basale membraan
│
└── Basaalmembraan
   Dermis
Figuur 1 is een schematische doorsnede van de epidermis. Van oppervlakkig naar diep zijn vier lagen gemarkeerd: A, B, C, D.Koppel elke letter aan de juiste structuur:`,
        items: ['stratum basale', 'stratum spinosum', 'stratum granulosum', 'stratum corneum'],
        matchOptions: [
          { letter: 'A', text: 'laag met afgeplatte, dode, verhoornde cellen' },
          { letter: 'B', text: 'laag met korrelige keratinocyten' },
          { letter: 'C', text: 'laag met meerdere polygonale "stekelcellen"' },
          { letter: 'D', text: 'diepste epidermale laag, één rij delende cellen op de basale membraan' },
        ],
        correctMapping: { 0: 'D', 1: 'C', 2: 'B', 3: 'A' },
        explanation: 'A = 4, B = 3, C = 2, D = 1 (corneum–granulosum–spinosum–basale).',
      },
      {
        id: '1c',
        type: 'open',
        points: 2.0,
        question: 'Leg in maximaal 40 woorden uit waarom men een pasgeborene niet grondig moet wassen als er nog vernix caseosa aanwezig is.',
        wordLimit: 40,
        rubric: 'Inhoudelijke kern: vernix ondersteunt barrière, waterafstotend/antibacterieel; grondig wassen verwijdert beschermlaag.',
        modelAnswer:
          'Vernix caseosa ondersteunt de huidbarrière, werkt waterafstotend en antibacterieel. Grondig wassen verwijdert deze beschermlaag juist.',
        explanation: 'Bij open vragen zijn andere formuleringen goed zolang de inhoudelijke kern klopt.',
      },
      {
        id: '1d',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Welke uitspraak over atopisch eczeem en voedselallergie is het meest juist?',
        options: [
          { letter: 'A', text: 'Voedselallergie is meestal de primaire oorzaak van atopisch eczeem' },
          { letter: 'B', text: 'Atopisch eczeem verlaagt de kans op voedselallergie door vroege tolerantie' },
          { letter: 'C', text: 'Atopisch eczeem en voedselallergie horen beide bij atopie, maar voedselallergie is niet automatisch de oorzaak van eczeem' },
          { letter: 'D', text: 'Vroege introductie van allergenen verhoogt de kans op voedselallergie' },
        ],
        correctAnswer: 'C',
        explanation:
          'Atopisch eczeem en voedselallergie horen beide bij atopie, maar voedselallergie is niet automatisch de oorzaak van eczeem.',
      },
    ],
  },
  {
    id: 'casus-2',
    title: 'Casus 2 – Bloedingsneiging op de poli',
    totalPoints: 8,
    scenario:
      'Een 19-jarige vrouw meldt zich met frequente neusbloedingen, hevige menstruaties en langdurig nabloeden na tandheelkundige ingrepen. Haar broer heeft nooit bloedingsproblemen gehad. Ze gebruikt geen anticoagulantia.',
    questions: [
      {
        id: '2a',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Welk bloedingspatroon past het best bij de ziekte van Von Willebrand?',
        options: [
          { letter: 'A', text: 'Vooral hemartrosen en spierbloedingen' },
          { letter: 'B', text: 'Vooral slijmvliesbloedingen en menorragie' },
          { letter: 'C', text: 'Alleen postoperatieve bloedingen, verder geen spontane klachten' },
          { letter: 'D', text: 'Uitsluitend petechiën bij normaal trombocytenaantal' },
        ],
        correctAnswer: 'B',
        explanation: 'Von Willebrandziekte geeft vooral slijmvliesbloedingen, zoals epistaxis en menorragie.',
      },
      {
        id: '2b',
        type: 'meerdere_antwoorden',
        points: 2.0,
        maxSelections: 2,
        requireExactSet: true,
        question:
          'Welke TWEE onderzoeken zijn het meest logisch in de eerste gerichte diagnostiek als je hemofilie en Von Willebrandziekte wilt onderscheiden? (2.0p)\nNoteer twee letters.',
        options: [
          { letter: 'A', text: 'D-dimeer' },
          { letter: 'B', text: 'aPTT' },
          { letter: 'C', text: 'Factor VIII' },
          { letter: 'D', text: 'Creatinine' },
          { letter: 'E', text: 'VWF-bepaling' },
        ],
        correctAnswers: ['B', 'E'],
        explanation:
          'Primair beoogd: B en E — aPTT en VWF zijn de meest logische eerste gerichte combinatie. Nakijkopmerking: C (factor VIII) is inhoudelijk ook verdedigbaar als aanvullend kernonderzoek.',
      },
      {
        id: '2c',
        type: 'open',
        points: 2.0,
        question:
          'Een patiënt met milde hemofilie A krijgt desmopressine. Leg in maximaal 35 woorden uit wat het werkingsprincipe is.',
        wordLimit: 35,
        rubric: 'Kern: vrijmaking lichaamseigen VWF en factor VIII uit endothel; tijdelijke verbetering hemostase.',
        modelAnswer:
          'Desmopressine zorgt voor vrijmaking van lichaamseigen VWF en factor VIII uit het endotheel, waardoor de hemostase tijdelijk verbetert.',
        explanation: 'Bij open vragen zijn andere formuleringen goed zolang de inhoudelijke kern klopt.',
      },
      {
        id: '2d',
        type: 'meerkeuze',
        points: 2.0,
        question:
          'Bij een patiënt met verdenking op Von Willebrandziekte is de verhouding VWF RCo/Ag = 0,5. Welke conclusie past het best?',
        options: [
          { letter: 'A', text: 'Dit past het best bij type 1 Von Willebrandziekte' },
          { letter: 'B', text: 'Dit past eerder bij een kwalitatieve afwijking van VWF dan bij een puur relatief tekort' },
          { letter: 'C', text: 'Dit sluit Von Willebrandziekte uit' },
          { letter: 'D', text: 'Dit bewijst hemofilie B' },
        ],
        correctAnswer: 'B',
        explanation: 'Een lage VWF RCo/Ag-ratio past eerder bij een kwalitatieve VWF-afwijking dan bij een puur relatief tekort.',
      },
    ],
  },
  {
    id: 'casus-3',
    title: 'Casus 3 – Paarse vlekken op de onderbenen',
    totalPoints: 8,
    scenario:
      'Een 27-jarige patiënt presenteert zich met sinds drie dagen paarsrode vlekken op beide onderbenen. De plekken zijn niet wegdrukbaar. Er is lichte buikpijn, maar geen recent trauma.',
    questions: [
      {
        id: '3a',
        type: 'meerkeuze',
        points: 2.0,
        question: `Beeldvraag.Figuur 2:-Onderbenen, symmetrisch verdeeld:
- meerdere paarsrode puntvormige en kleine confluerende laesies
- niet wegdrukbaar bij glasdruk
- licht palpabel
- geen blaasvorming
- geen teleangiëctasieën
 toont meerdere kleine paarsrode laesies op de onderbenen, deels samenvloeiend, niet wegdrukbaar en licht palpabel. Welke term past het best?`,
        options: [
          { letter: 'A', text: 'Erytheem' },
          { letter: 'B', text: 'Purpura' },
          { letter: 'C', text: 'Urticaria' },
          { letter: 'D', text: 'Teleangiëctasieën' },
        ],
        correctAnswer: 'B',
        explanation: 'Niet-wegdrukbare paarsrode laesies passen bij purpura.',
      },
      {
        id: '3b',
        type: 'koppelvraag',
        points: 2.0,
        question: 'Koppel het type vasculitis aan het meest typische huidbeeld. (2.0p)',
        items: ['Kleine-vatenvasculitis', 'Middelgrote-vatenvasculitis'],
        matchOptions: [
          { letter: 'a', text: 'palpabele purpura / petechiën' },
          { letter: 'b', text: 'livedo racemosa / diepe ulcera / subcutane noduli' },
        ],
        correctMapping: { 0: 'a', 1: 'b' },
        explanation: '1 = a, 2 = b',
      },
      {
        id: '3c',
        type: 'open',
        points: 2.0,
        question:
          'Leg in maximaal 35 woorden uit waarom huidafwijkingen bij kleine-vatenvasculitis vaak juist op de onderbenen worden gezien.',
        wordLimit: 35,
        rubric: 'Kern: tragere doorstroming/zwaartekracht; immuuncomplexen slaan neer in vaatwand.',
        modelAnswer:
          'Op de onderbenen is de doorstroming relatief trager en speelt de zwaartekracht mee, waardoor immuuncomplexen daar makkelijker in de vaatwand neerslaan.',
        explanation: 'Bij open vragen zijn andere formuleringen goed zolang de inhoudelijke kern klopt.',
      },
      {
        id: '3d',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Welke combinatie past het best bij immuuncomplex-vasculitis?',
        options: [
          { letter: 'A', text: 'Granulomatosis with polyangiitis – ANCA – vooral kleine vaten' },
          { letter: 'B', text: 'IgA-vasculitis – neerslag van immuuncomplexen in de vaatwand' },
          { letter: 'C', text: 'Grote-vatenvasculitis – purpura op de onderbenen' },
          { letter: 'D', text: 'Microscopic polyangiitis – altijd uitsluitend cutaan en nooit systemisch' },
        ],
        correctAnswer: 'B',
        explanation: 'IgA-vasculitis is een immuuncomplex-vasculitis.',
      },
    ],
  },
  {
    id: 'casus-4',
    title: 'Casus 4 – De verdachte plek op de wang',
    totalPoints: 8,
    scenario:
      'Een 71-jarige man met lichte huid, veel buitenwerk in het verleden en jarenlange zonblootstelling heeft een langzaam groeiend glanzend roze noduletje op de linkerwang. Bij inspectie zie je teleangiëctasieën. De laesie is niet pijnlijk.',
    questions: [
      {
        id: '4a',
        type: 'meerkeuze',
        points: 2.0,
        question: `Beeldvraag.Figuur 3:Linkerwang:
- glanzend huidkleurig tot roze noduletje
- teleangiëctasieën zichtbaar
- licht opgeworpen rand
- langzaam gegroeid
- geen duidelijke schilfering
- niet pijnlijk
toont een glanzend huidkleurig-roze noduletje met teleangiëctasieën en een licht opgeworpen rand. Welke diagnose is het meest waarschijnlijk?`,
        options: [
          { letter: 'A', text: 'Nodulair basaalcelcarcinoom' },
          { letter: 'B', text: 'Actinische keratose' },
          { letter: 'C', text: 'Morbus Bowen' },
          { letter: 'D', text: 'Cutaan plaveiselcelcarcinoom' },
        ],
        correctAnswer: 'A',
        explanation: 'Een glanzend roze noduletje met teleangiëctasieën past het best bij een nodulair basaalcelcarcinoom.',
      },
      {
        id: '4b',
        type: 'meerdere_antwoorden',
        points: 2.0,
        maxSelections: 2,
        requireExactSet: true,
        question:
          'Welke TWEE factoren verhogen in het bijzonder het risico op cutaan plaveiselcelcarcinoom? (2.0p)\nNoteer twee letters.',
        options: [
          { letter: 'A', text: 'Chronische zonblootstelling' },
          { letter: 'B', text: 'Lichte huid en snel verbranden' },
          { letter: 'C', text: 'Hoge luchtvochtigheid binnenshuis' },
          { letter: 'D', text: 'Immunosuppressie' },
          { letter: 'E', text: 'Lage BMI' },
        ],
        correctAnswers: ['A', 'D'],
        explanation:
          'Primair beoogd: A en D — chronische zonblootstelling en immunosuppressie zijn de zwaarst benadrukte risicofactoren. Nakijkopmerking: B is ook inhoudelijk juist en kan bij mild nakijken meegewogen worden.',
      },
      {
        id: '4c',
        type: 'open',
        points: 2.0,
        question:
          'Leg in maximaal 30 woorden uit waarom bij verdenking op uitbreiding langs een zenuw soms eerder voor MRI dan voor CT wordt gekozen.',
        wordLimit: 30,
        rubric: 'Kern: MRI beter voor weke delen/perineurale uitbreiding; CT beter voor bot.',
        modelAnswer:
          'MRI laat weke delen en perineurale uitbreiding beter zien dan CT, terwijl CT juist beter is voor botbetrokkenheid.',
        explanation: 'Bij open vragen zijn andere formuleringen goed zolang de inhoudelijke kern klopt.',
      },
      {
        id: '4d',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Welke behandeling is het meest passend voor meerdere oppervlakkige basaalcelcarcinomen op de romp?',
        options: [
          { letter: 'A', text: 'Alleen Mohs-chirurgie' },
          { letter: 'B', text: 'Topicale therapie met imiquimod of 5-fluorouracil' },
          { letter: 'C', text: 'Altijd radiotherapie' },
          { letter: 'D', text: 'Onmiddellijke systemische hedgehog-remmer' },
        ],
        correctAnswer: 'B',
        explanation: 'Bij meerdere oppervlakkige BCC’s op de romp is topicale therapie passend.',
      },
    ],
  },
]
