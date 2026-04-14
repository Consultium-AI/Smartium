/** Blok 4 oefententamen 4 — casussen 9–10 */

export const blok4Tentamen4PartD = [
  {
    id: 'casus-9',
    title: 'Casus 9 – Cytokinen en immunomodulatie',
    totalPoints: 12,
    scenario: `Een 58-jarige vrouw met reumatoïde artritis gebruikt een anti-TNF-biological. Later start zij ook een JAK-remmer. De docent vraagt hoe deze therapieën samenhangen met cytokinebiologie.`,
    questions: [
      {
        id: '9a',
        type: 'meerkeuze',
        points: 2,
        question: `9a. Welke cytokinen zijn het meest klassiek pro-inflammatoir in dit blok besproken? (2.0p)`,
        options: [
          { letter: 'A', text: 'IL-10 en TGF-β' },
          { letter: 'B', text: 'TNF-α en IL-6' },
          { letter: 'C', text: 'IgM en IgG' },
          { letter: 'D', text: 'C3 en C5' },
        ],
        correctAnswer: 'B',
        explanation: 'TNF-α en IL-6 zijn klassieke pro-inflammatoire cytokinen.',
      },
      {
        id: '9b',
        type: 'meerkeuze',
        points: 2,
        question: `9b. Wat doet een JAK-remmer in essentie? (2.0p)`,
        options: [
          {
            letter: 'A',
            text: 'Remt cytokinesignalering via de JAK-STAT-route',
          },
          { letter: 'B', text: 'Verhoogt antigeenvariatie van virussen' },
          { letter: 'C', text: 'Activeert alleen neutrofielen' },
          { letter: 'D', text: 'Neutraliseert direct bacteriën' },
        ],
        correctAnswer: 'A',
        explanation: 'JAK-remmers remmen cytokinesignalering via de JAK-STAT-route.',
      },
      {
        id: '9c',
        type: 'meerkeuze',
        points: 2,
        question: `9c. Welke uitspraak over IL-10 is juist? (2.0p)`,
        options: [
          { letter: 'A', text: 'IL-10 is vooral anti-inflammatoir' },
          {
            letter: 'B',
            text: 'IL-10 veroorzaakt vooral hypotensie bij sepsis',
          },
          { letter: 'C', text: 'IL-10 is een malariaparasiet' },
          { letter: 'D', text: 'IL-10 is een antibioticaklasse' },
        ],
        correctAnswer: 'A',
        explanation: 'IL-10 is overwegend anti-inflammatoir.',
      },
      {
        id: '9d',
        type: 'meerkeuze',
        points: 2,
        question: `9d. Wat is een logisch klinisch gevolg van krachtige immuunsuppressie? (2.0p)`,
        options: [
          { letter: 'A', text: 'Minder kans op opportunistische infecties' },
          {
            letter: 'B',
            text: 'Meer kans op infecties door verminderde afweer',
          },
          { letter: 'C', text: 'Volledig verdwijnen van cytokinen' },
          { letter: 'D', text: 'Altijd steriliserende immuniteit' },
        ],
        correctAnswer: 'B',
        explanation: 'Bij immuunsuppressie neemt het risico op infecties toe.',
      },
      {
        id: '9e',
        type: 'open',
        points: 4,
        question: `9e. Leg in maximaal 45 woorden uit wat het verschil is tussen immunostimulatie en immunosuppressie. (4.0p)`,
        wordLimit: 45,
        rubric:
          'Kern: stimulatie versterkt afweer (vaccinatie); suppressie remt afweer (auto-immuun/ontsteking).',
        modelAnswer:
          'Immunostimulatie versterkt of activeert de afweer, bijvoorbeeld bij vaccinatie. Immunosuppressie remt onderdelen van de afweer, bijvoorbeeld om auto-immuunziekten of overmatige ontsteking te behandelen.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-10',
    title: 'Casus 10 – Antibioticaresistentie als puzzel',
    totalPoints: 13,
    scenario: `Een patiënt heeft een urineweginfectie door een gramnegatieve bacterie. Het antibiogram laat zien dat de bacterie resistent is tegen meerdere penicillines en cefalosporines. Bij een tweede isolaat is bovendien sprake van verminderde porine-expressie.`,
    questions: [
      {
        id: '10a',
        type: 'meerkeuze',
        points: 2,
        question: `10a. Welk mechanisme past het best bij resistentie tegen veel beta-lactam antibiotica? (2.0p)`,
        options: [
          { letter: 'A', text: 'ESBL-productie' },
          { letter: 'B', text: 'Verlies van mitochondriën' },
          { letter: 'C', text: 'Monospot-positiviteit' },
          { letter: 'D', text: 'Syncytiumvorming' },
        ],
        correctAnswer: 'A',
        explanation:
          'ESBL-productie verklaart resistentie tegen veel penicillines en cefalosporines.',
      },
      {
        id: '10b',
        type: 'meerkeuze',
        points: 2,
        question: `10b. Wat is het effect van minder porines in een gramnegatieve bacterie? (2.0p)`,
        options: [
          { letter: 'A', text: 'Meer influx van antibioticum' },
          { letter: 'B', text: 'Minder influx van antibioticum' },
          { letter: 'C', text: 'Meer fagocytose' },
          { letter: 'D', text: 'Meer IgG-productie' },
        ],
        correctAnswer: 'B',
        explanation: 'Minder porines betekent minder influx van antibioticum.',
      },
      {
        id: '10c',
        type: 'meerkeuze',
        points: 3,
        question: `10c. Welke uitspraak over natuurlijke versus verkregen resistentie is juist? (3.0p)`,
        options: [
          {
            letter: 'A',
            text: 'Natuurlijke resistentie ontstaat altijd door recent antibioticagebruik',
          },
          {
            letter: 'B',
            text: 'Verkregen resistentie kan ontstaan door mutaties of opname van resistentiegenen',
          },
          {
            letter: 'C',
            text: 'Natuurlijke resistentie en verkregen resistentie betekenen hetzelfde',
          },
          {
            letter: 'D',
            text: 'Verkregen resistentie komt alleen voor bij virussen',
          },
        ],
        correctAnswer: 'B',
        explanation:
          'Verkregen resistentie kan ontstaan door mutaties of opname van resistentiegenen, bijvoorbeeld via plasmiden.',
      },
      {
        id: '10d',
        type: 'meerkeuze',
        points: 2,
        question: `10d. Wat verklaart het ontstaan van een resistente bacteriepopulatie tijdens antibioticagebruik het best? (2.0p)`,
        options: [
          { letter: 'A', text: 'Antibiotica maken alle bacteriën gevoeliger' },
          {
            letter: 'B',
            text: 'Gevoelige bacteriën worden gedood, resistente bacteriën blijven over en vermenigvuldigen zich',
          },
          {
            letter: 'C',
            text: 'Antibiotica stimuleren altijd horizontale genoverdracht',
          },
          {
            letter: 'D',
            text: 'Resistente bacteriën sterven sneller dan gevoelige',
          },
        ],
        correctAnswer: 'B',
        explanation:
          'Antibiotica doden gevoelige bacteriën, waardoor resistente overblijven en zich uitbreiden.',
      },
      {
        id: '10e',
        type: 'open',
        points: 4,
        question: `10e. Leg in maximaal 50 woorden uit wat het verschil is tussen een natuurlijk resistentiemechanisme en een selectieproces door antibioticagebruik. (4.0p)`,
        wordLimit: 50,
        rubric:
          'Kern: natuurlijk = intrinsiek (bijv. ontbreken celwand); selectie = gevoeligen weg, resistenten domineren.',
        modelAnswer:
          'Een natuurlijk resistentiemechanisme is een intrinsieke eigenschap van een soort, zoals ontbreken van een celwand. Het selectieproces door antibioticagebruik betekent dat antibiotica gevoelige bacteriën wegselecteren, waardoor al aanwezige resistente bacteriën relatief overblijven en uitgroeien.',
        explanation: '',
      },
    ],
  },
]
