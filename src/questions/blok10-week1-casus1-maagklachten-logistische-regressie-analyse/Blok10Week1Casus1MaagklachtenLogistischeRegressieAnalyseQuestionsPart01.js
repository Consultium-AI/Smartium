// Bron: SS1B10-smartium/Oefenvragen/Week 1/Casus 1 - Maagklachten/LME 4 - Logistische regressie analyse - oefenvragen.docx (vragen 1–5)

export const blok10Week1Casus1MaagklachtenLogistischeRegressieAnalyseQuestionsPart01 = [
  {
    id: 1,
    question:
      'Welke analyse past het best bij een uitkomst als “wel/niet complicaties”, als je ook meerdere voorspellers tegelijk wilt meenemen?',
    options: [
      { letter: 'A', text: 'Lineaire regressie, omdat die direct met percentages werkt' },
      { letter: 'B', text: 'Logistische regressie, omdat die een binaire uitkomst en een kans tussen 0 en 1 gebruikt' },
      { letter: 'C', text: 'Correlatieanalyse, omdat die verbanden tussen twee variabelen laat zien' },
      { letter: 'D', text: 'Kaplan-Meier-analyse, omdat die geschikt is voor elke binaire uitkomst' },
    ],
    correctAnswer: 'B',
  },
  {
    id: 2,
    question: 'In een groep van 420 personen hebben 138 personen de uitkomst. Wat zijn de odds op deze uitkomst?',
    options: [
      { letter: 'A', text: '0,33' },
      { letter: 'B', text: '0,49' },
      { letter: 'C', text: '0,67' },
      { letter: 'D', text: '1,47' },
    ],
    correctAnswer: 'B',
  },
  {
    id: 3,
    question: 'Wat betekent een risk ratio van 1,72 het meest precies?',
    options: [
      { letter: 'A', text: 'De kans op de uitkomst is 72% hoger in de blootgestelde groep dan in de andere groep' },
      { letter: 'B', text: 'De odds op de uitkomst zijn 72% hoger in de blootgestelde groep' },
      { letter: 'C', text: 'De kans op de uitkomst is 1,72 keer zo groot, maar alleen als de uitkomst zeldzaam is' },
      { letter: 'D', text: 'De odds en de kans zijn allebei 1,72 keer zo groot in de blootgestelde groep' },
    ],
    correctAnswer: 'A',
  },
  {
    id: 4,
    question: 'Welke uitspraak over risk ratio en odds ratio is het meest juist bij een frequent voorkomende uitkomst?',
    options: [
      { letter: 'A', text: 'RR en OR liggen dan meestal dichter bij elkaar dan bij zeldzame uitkomsten' },
      { letter: 'B', text: 'OR is dan altijd precies gelijk aan RR' },
      { letter: 'C', text: 'OR wijkt dan meestal sterker af van 1 dan RR' },
      { letter: 'D', text: 'RR kan dan niet meer worden berekend, alleen OR' },
    ],
    correctAnswer: 'C',
  },
  {
    id: 5,
    question:
      'In een model staat:\n\n\\[   \\ln\\left(\\frac{p}{1-p}\\right)= -0{,}9 + 0{,}67 \\cdot \\text{roken}   \\]   Wat betekent de coëfficiënt van roken?',
    options: [
      { letter: 'A', text: 'Rokers hebben 0,67 keer zo veel kans op de uitkomst' },
      { letter: 'B', text: 'Rokers hebben een kans van 67% op de uitkomst' },
      { letter: 'C', text: 'De kans op de uitkomst neemt met 67% toe door roken' },
      { letter: 'D', text: 'De odds op de uitkomst zijn bij rokers ongeveer 2 keer zo groot als bij niet-rokers' },
    ],
    correctAnswer: 'D',
  },
]
