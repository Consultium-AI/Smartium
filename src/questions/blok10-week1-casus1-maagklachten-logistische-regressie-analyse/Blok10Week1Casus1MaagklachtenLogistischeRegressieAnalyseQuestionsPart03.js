// Bron: SS1B10-smartium/Oefenvragen/Week 1/Casus 1 - Maagklachten/LME 4 - Logistische regressie analyse - oefenvragen.docx (vragen 11–15)

export const blok10Week1Casus1MaagklachtenLogistischeRegressieAnalyseQuestionsPart03 = [
  {
    id: 11,
    question:
      'Je hebt 15 events en wilt 5 voorspellers in een logistisch model opnemen. Wat is hier het belangrijkste probleem?',
    options: [
      { letter: 'A', text: 'De kans is groot dat de odds ratio’s te klein worden' },
      { letter: 'B', text: 'De uitkomst wordt dan niet meer binair' },
      { letter: 'C', text: 'De events-per-variable is laag, waardoor schattingen instabiel kunnen zijn' },
      { letter: 'D', text: 'De Wald-toets kan dan niet meer worden gebruikt' },
    ],
    correctAnswer: 'C',
  },
  {
    id: 12,
    question: 'Wat gebeurt er bij complete separatie?',
    options: [
      {
        letter: 'A',
        text: 'De uitkomst wordt niet langer meetbaar, waardoor een lineair model nodig is',
      },
      {
        letter: 'B',
        text: 'Eén voorspeller splitst de uitkomst perfect op, waardoor een coëfficiënt in principe naar oneindig gaat',
      },
      { letter: 'C', text: 'De odds ratio wordt automatisch precies 1' },
      { letter: 'D', text: 'De AUC wordt dan altijd 0,5' },
    ],
    correctAnswer: 'B',
  },
  {
    id: 13,
    question: 'Welke keuze past het best bij een etiologische onderzoeksvraag naar BMI en GORZ?',
    options: [
      { letter: 'A', text: 'Alleen BMI opnemen, omdat extra variabelen het effect altijd vertekenen' },
      {
        letter: 'B',
        text: 'Zo veel mogelijk variabelen zonder selectie opnemen, om elk verband af te vangen',
      },
      {
        letter: 'C',
        text: 'Alleen variabelen opnemen die het model zo eenvoudig mogelijk maken',
      },
      {
        letter: 'D',
        text: 'Naast BMI ook mogelijke confounders zoals leeftijd, geslacht en roken meenemen',
      },
    ],
    correctAnswer: 'D',
  },
  {
    id: 14,
    question: 'In een meervoudig logistisch regressiemodel is de OR van BMI 1,13. Wat is de juiste interpretatie?',
    options: [
      {
        letter: 'A',
        text: 'Per punt BMI nemen de odds op de uitkomst met 13% toe, terwijl de andere variabelen constant blijven',
      },
      {
        letter: 'B',
        text: 'Per punt BMI neemt de kans op de uitkomst met 13 procentpunten toe',
      },
      { letter: 'C', text: 'BMI verdubbelt de odds op de uitkomst' },
      { letter: 'D', text: 'Per punt BMI nemen de odds af met 13%' },
    ],
    correctAnswer: 'A',
  },
  {
    id: 15,
    question: 'Welke uitspraak over het 95%-betrouwbaarheidsinterval van een odds ratio is juist?',
    options: [
      {
        letter: 'A',
        text: 'Als het interval 1,0 niet bevat, wijst dat op statistische significantie',
      },
      { letter: 'B', text: 'Als het interval breed is, betekent dat altijd een sterk effect' },
      {
        letter: 'C',
        text: 'Als het interval 1,0 bevat, is het effect per definitie klinisch irrelevant',
      },
      { letter: 'D', text: 'Een interval onder 1,0 betekent altijd dat er geen verband is' },
    ],
    correctAnswer: 'A',
  },
]
