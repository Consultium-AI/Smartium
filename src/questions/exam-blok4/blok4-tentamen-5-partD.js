/** Blok 4 oefententamen 5 — casus 9 */

export const blok4Tentamen5PartD = [
  {
    id: 'casus-9',
    title: 'Casus 9 – Antibioticaresistentie als eindpuzzel',
    totalPoints: 15,
    scenario: `Een urinekweek toont een gramnegatieve bacterie die resistent is tegen meerdere penicillines en cefalosporines. Een tweede isolaat van dezelfde soort laat daarnaast verminderde porine-expressie zien.`,
    questions: [
      {
        id: '9a',
        type: 'meerkeuze',
        points: 2,
        question: `9a. Welk resistentiemechanisme past het best bij resistentie tegen veel beta-lactam antibiotica? (2.0p)`,
        options: [
          { letter: 'A', text: 'ESBL-productie' },
          { letter: 'B', text: 'Syncytiumvorming' },
          { letter: 'C', text: 'Monospot-positiviteit' },
          { letter: 'D', text: 'Productie van surfactant' },
        ],
        correctAnswer: 'A',
        explanation:
          'ESBL-productie is een klassiek mechanisme voor resistentie tegen veel beta-lactam antibiotica.',
      },
      {
        id: '9b',
        type: 'meerkeuze',
        points: 2,
        question: `9b. Wat is het effect van minder porines in een gramnegatieve bacterie? (2.0p)`,
        options: [
          { letter: 'A', text: 'Meer influx van antibioticum' },
          { letter: 'B', text: 'Minder influx van antibioticum' },
          { letter: 'C', text: 'Meer fagocytose' },
          { letter: 'D', text: 'Meer antistofproductie' },
        ],
        correctAnswer: 'B',
        explanation:
          'Minder porines betekent minder influx van antibioticum in de bacterie.',
      },
      {
        id: '9c',
        type: 'meerkeuze',
        points: 3,
        question: `9c. Welke uitspraak over natuurlijke en verkregen resistentie is juist? (3.0p)`,
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
            text: 'Natuurlijke en verkregen resistentie betekenen hetzelfde',
          },
          {
            letter: 'D',
            text: 'Verkregen resistentie komt alleen voor bij virussen',
          },
        ],
        correctAnswer: 'B',
        explanation:
          'Verkregen resistentie kan ontstaan door mutaties of door opname van mobiele resistentiegenen, bijvoorbeeld plasmiden.',
      },
      {
        id: '9d',
        type: 'meerkeuze',
        points: 2,
        question: `9d. Wat verklaart het ontstaan van een resistente populatie tijdens antibioticagebruik het best? (2.0p)`,
        options: [
          { letter: 'A', text: 'Antibiotica maken alle bacteriën gevoeliger' },
          {
            letter: 'B',
            text: 'Gevoelige bacteriën worden gedood, resistente bacteriën blijven over en groeien uit',
          },
          { letter: 'C', text: 'Resistente bacteriën verdwijnen sneller' },
          { letter: 'D', text: 'Antibiotica voorkomen selectie' },
        ],
        correctAnswer: 'B',
        explanation:
          'Antibiotica doden gevoelige bacteriën, waardoor resistente bacteriën overblijven en uitgroeien.',
      },
      {
        id: '9e',
        type: 'meerkeuze',
        points: 2,
        question: `9e. Welke uitspraak past het best bij de Nederlandse context uit de stof? (2.0p)`,
        options: [
          {
            letter: 'A',
            text: "ESBL's worden uitsluitend via vee overgedragen",
          },
          {
            letter: 'B',
            text: 'Mens-op-mens overdracht speelt een belangrijke rol',
          },
          {
            letter: 'C',
            text: 'Kritieke antibiotica worden op grote schaal routinematig in alle diersectoren gebruikt',
          },
          {
            letter: 'D',
            text: 'Antibioticagebruik in de dierhouderij is de laatste jaren alleen maar toegenomen',
          },
        ],
        correctAnswer: 'B',
        explanation:
          'In de Nederlandse context spelen mensen ESBL’s vooral aan elkaar door; overdracht via dierhouderij/vlees is beperkt.',
      },
      {
        id: '9f',
        type: 'open',
        points: 4,
        question: `9f. Leg in maximaal 50 woorden uit wat het verschil is tussen een intrinsiek natuurlijk resistentiemechanisme en selectie door antibioticagebruik. (4.0p)`,
        wordLimit: 50,
        rubric:
          'Kern: intrinsiek = soorteigenschap (bijv. geen celwand); selectie = gevoeligen dood, resistenten domineren.',
        modelAnswer:
          'Een intrinsiek natuurlijk resistentiemechanisme is een eigenschap die een soort van nature heeft, zoals ontbreken van een celwand. Selectie door antibioticagebruik betekent dat gevoelige bacteriën worden gedood, waardoor al aanwezige resistente bacteriën relatief overblijven en dominanter worden.',
        explanation: '',
      },
    ],
  },
]
