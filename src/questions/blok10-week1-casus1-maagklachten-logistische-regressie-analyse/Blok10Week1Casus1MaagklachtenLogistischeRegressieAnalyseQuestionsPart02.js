// Bron: SS1B10-smartium/Oefenvragen/Week 1/Casus 1 - Maagklachten/LME 4 - Logistische regressie analyse - oefenvragen.docx (vragen 6–10)

export const blok10Week1Casus1MaagklachtenLogistischeRegressieAnalyseQuestionsPart02 = [
  {
    id: 6,
    question:
      'In een logistisch regressiemodel is de coëfficiënt voor leeftijd 0,05. Wat is de bijbehorende odds ratio per extra jaar leeftijd?',
    options: [
      { letter: 'A', text: '1,05' },
      { letter: 'B', text: '0,95' },
      { letter: 'C', text: '5,00' },
      { letter: 'D', text: '1,50' },
    ],
    correctAnswer: 'A',
  },
  {
    id: 7,
    question: 'Waarom is lineaire regressie ongeschikt voor een binaire uitkomst?',
    options: [
      {
        letter: 'A',
        text: 'De voorspelde waarden kunnen onder 0 of boven 1 uitkomen, en dat past niet bij een kans',
      },
      { letter: 'B', text: 'De uitkomst is dan per definitie niet numeriek' },
      { letter: 'C', text: 'De methode kan alleen met categorische voorspellers werken' },
      { letter: 'D', text: 'De kans wordt dan automatisch te hoog ingeschat bij lage waarden' },
    ],
    correctAnswer: 'A',
  },
  {
    id: 8,
    question: 'Wat gebeurt er meestal als je bij een classificatiemodel de afkapwaarde verlaagt?',
    options: [
      { letter: 'A', text: 'De specificiteit stijgt en de sensitiviteit daalt' },
      { letter: 'B', text: 'Zowel sensitiviteit als specificiteit stijgen' },
      { letter: 'C', text: 'De sensitiviteit stijgt en de specificiteit daalt' },
      { letter: 'D', text: 'De AUC daalt direct altijd met dezelfde hoeveelheid' },
    ],
    correctAnswer: 'C',
  },
  {
    id: 9,
    question:
      'Welke maat past het best bij de vraag of een model patiënten mét en zonder uitkomst goed kan onderscheiden?',
    options: [
      { letter: 'A', text: 'Calibratie' },
      { letter: 'B', text: 'Odds ratio' },
      { letter: 'C', text: 'Wald-toets' },
      { letter: 'D', text: 'AUC' },
    ],
    correctAnswer: 'D',
  },
  {
    id: 10,
    question:
      'Een model werkt goed in de dataset waarmee het is gebouwd. Welke vorm van toetsing gaat over de vraag of het ook goed blijft werken bij nieuwe patiënten?',
    options: [
      { letter: 'A', text: 'Externe validatie' },
      { letter: 'B', text: 'Interne validatie' },
      { letter: 'C', text: 'Confounding' },
      { letter: 'D', text: 'Multicollineariteit' },
    ],
    correctAnswer: 'A',
  },
]
