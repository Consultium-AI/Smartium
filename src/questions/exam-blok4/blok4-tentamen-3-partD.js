/** Blok 4 oefententamen 3 — casussen 9–10 */

export const blok4Tentamen3PartD = [
  {
    id: 'casus-9',
    title: 'Casus 9 – Cytokinen en immunomodulatie',
    totalPoints: 11,
    scenario: `Een 56-jarige vrouw met reumatoïde artritis gebruikt een anti-TNF-biological. Later start zij een JAK-remmer.`,
    questions: [
      {
        id: '9a',
        type: 'meerkeuze',
        points: 2,
        question: `9a. Welke cytokinen zijn klassiek pro-inflammatoir? (2.0p)`,
        options: [
          { letter: 'A', text: 'TNF-α en IL-6' },
          { letter: 'B', text: 'IL-10 en TGF-β' },
          { letter: 'C', text: 'IgM en IgG' },
          { letter: 'D', text: 'C3 en C5' },
        ],
        correctAnswer: 'A',
        explanation: 'TNF-α en IL-6 zijn klassiek pro-inflammatoire cytokinen.',
      },
      {
        id: '9b',
        type: 'meerkeuze',
        points: 2,
        question: `9b. Welke uitspraak over IL-10 is juist? (2.0p)`,
        options: [
          { letter: 'A', text: 'IL-10 is overwegend anti-inflammatoir' },
          { letter: 'B', text: 'IL-10 is een antibioticum' },
          { letter: 'C', text: 'IL-10 is een antistof' },
          { letter: 'D', text: 'IL-10 veroorzaakt vooral malariasekwestratie' },
        ],
        correctAnswer: 'A',
        explanation: 'IL-10 werkt overwegend anti-inflammatoir.',
      },
      {
        id: '9c',
        type: 'meerkeuze',
        points: 2,
        question: `9c. Wat is de kern van JAK-STAT-signalering? (2.0p)`,
        options: [
          {
            letter: 'A',
            text: 'Cytokinebinding leidt via JAK en STAT tot verandering in genexpressie',
          },
          { letter: 'B', text: 'Het is een bacterieel resistentiemechanisme' },
          { letter: 'C', text: 'Het komt alleen in erytrocyten voor' },
          { letter: 'D', text: 'Het activeert alleen complement' },
        ],
        correctAnswer: 'A',
        explanation:
          'Bij JAK-STAT leidt cytokinebinding via JAK en STAT tot verandering in genexpressie.',
      },
      {
        id: '9d',
        type: 'meerkeuze',
        points: 2,
        question: `9d. Wat is een logisch gevolg van immuunsuppressie? (2.0p)`,
        options: [
          { letter: 'A', text: 'Meer kans op infecties' },
          { letter: 'B', text: 'Minder kans op infecties' },
          { letter: 'C', text: 'Altijd een betere vaccinatierespons' },
          { letter: 'D', text: 'Geen effect op de afweer' },
        ],
        correctAnswer: 'A',
        explanation: 'Immuunsuppressie verhoogt het infectierisico.',
      },
      {
        id: '9e',
        type: 'open',
        points: 3,
        question: `9e. Leg in maximaal 35 woorden uit wat het verschil is tussen immunostimulatie en immunosuppressie. (3.0p)`,
        wordLimit: 35,
        rubric:
          'Kern: stimulatie versterkt afweer (bijv. vaccinatie); suppressie remt afweer (biologicals/JAK bij auto-immuun).',
        modelAnswer:
          'Immunostimulatie versterkt de afweer, bijvoorbeeld bij vaccinatie. Immunosuppressie remt de afweer, bijvoorbeeld met biologicals of JAK-remmers bij auto-immuunziekten.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-10',
    title: 'Casus 10 – Antibioticaresistentie',
    totalPoints: 11,
    scenario: `Bij een gramnegatieve bacterie uit een urinekweek wordt resistentie tegen meerdere beta-lactam antibiotica gevonden. Een tweede isolaat van dezelfde soort laat verminderde porine-expressie zien.`,
    questions: [
      {
        id: '10a',
        type: 'meerkeuze',
        points: 2,
        question: `10a. Welk mechanisme past het best bij resistentie tegen veel beta-lactam antibiotica? (2.0p)`,
        options: [
          { letter: 'A', text: 'ESBL-productie' },
          { letter: 'B', text: 'Syncytiumvorming' },
          { letter: 'C', text: 'Monospot-positiviteit' },
          { letter: 'D', text: 'Surfactantverlies' },
        ],
        correctAnswer: 'A',
        explanation:
          'ESBL-productie is een klassiek mechanisme van resistentie tegen veel beta-lactam antibiotica.',
      },
      {
        id: '10b',
        type: 'meerkeuze',
        points: 2,
        question: `10b. Wat is het effect van minder porines? (2.0p)`,
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
        points: 2,
        question: `10c. Welke uitspraak over natuurlijke en verkregen resistentie is juist? (2.0p)`,
        options: [
          {
            letter: 'A',
            text: 'Verkregen resistentie kan ontstaan door mutaties of opname van resistentiegenen',
          },
          { letter: 'B', text: 'Natuurlijke en verkregen resistentie zijn hetzelfde' },
          { letter: 'C', text: 'Natuurlijke resistentie ontstaat alleen na antibioticagebruik' },
          { letter: 'D', text: 'Verkregen resistentie komt alleen voor bij virussen' },
        ],
        correctAnswer: 'A',
        explanation:
          'Verkregen resistentie kan ontstaan door mutaties of opname van resistentiegenen.',
      },
      {
        id: '10d',
        type: 'meerkeuze',
        points: 2,
        question: `10d. Hoe ontstaat door antibioticagebruik een resistente populatie? (2.0p)`,
        options: [
          { letter: 'A', text: 'Antibiotica maken alle bacteriën gevoeliger' },
          {
            letter: 'B',
            text: 'Gevoelige bacteriën verdwijnen, resistente blijven over en groeien uit',
          },
          { letter: 'C', text: 'Resistente bacteriën sterven sneller' },
          { letter: 'D', text: 'Antibiotica voorkomen selectie' },
        ],
        correctAnswer: 'B',
        explanation:
          'Gevoelige bacteriën verdwijnen, resistente blijven over en groeien uit.',
      },
      {
        id: '10e',
        type: 'open',
        points: 3,
        question: `10e. Leg in maximaal 40 woorden uit wat het verschil is tussen natuurlijke resistentie en selectie door antibioticagebruik. (3.0p)`,
        wordLimit: 40,
        rubric:
          'Kern: natuurlijk = intrinsiek soorteigenschap; selectie = gevoeligen dood, resistenten domineren.',
        modelAnswer:
          'Natuurlijke resistentie is een intrinsieke eigenschap van een bacteriesoort. Selectie door antibioticagebruik betekent dat gevoelige bacteriën worden gedood, waardoor al aanwezige resistente bacteriën relatief overblijven en domineren.',
        explanation: '',
      },
    ],
  },
]
