// Blok 9 · Week 4 · Casus 8 · LME 37 Lineare regressielijn — oefenvragen (vragen 1–8)
export const blok9Week4Casus8LineareRegressielijnQuestionsPart01 = [
  {
    id: 1,
    question: 'Wat beschrijft lineaire regressie het best?',
    options: [
      { letter: 'A', text: 'De sterkte van samenhang tussen twee variabelen, zonder onderscheid tussen verklarende en uitkomstvariabele' },
      { letter: 'B', text: 'Een manier om de verwachte waarde van Y te schatten op basis van één of meer X-variabelen' },
      { letter: 'C', text: 'Een methode om alleen causale verbanden vast te stellen' },
      { letter: 'D', text: 'Een techniek die uitsluitend gebruikt wordt bij dichotome uitkomsten' },
    ],
    correctAnswer: 'B',
  },
  {
    id: 2,
    question: 'Je ziet het model: \\(\\hat{Y} = 95 + 0.75 \\times \\text{leeftijd}\\). Wat betekent de helling het best?',
    options: [
      { letter: 'A', text: 'Als leeftijd met 1 jaar stijgt, stijgt de verwachte Y gemiddeld met 0.75 eenheid' },
      { letter: 'B', text: 'Als Y met 1 eenheid stijgt, neemt leeftijd gemiddeld toe met 0.75 jaar' },
      { letter: 'C', text: 'De verwachte Y is 0.75 wanneer leeftijd 95 is' },
      { letter: 'D', text: 'Bij elke toename van leeftijd met 1 jaar stijgt Y precies met 0.75 eenheid in alle gevallen' },
    ],
    correctAnswer: 'A',
  },
  {
    id: 3,
    question: 'Wat is het belangrijkste verschil tussen correlatie en regressie?',
    options: [
      { letter: 'A', text: 'Correlatie kan alleen gebruikt worden bij continue variabelen, regressie niet' },
      { letter: 'B', text: 'Correlatie zegt niets over de richting, regressie wel' },
      { letter: 'C', text: 'Correlatie vat samen hoe sterk en in welke richting variabelen samenhangen; regressie modelleert hoe Y verandert als X verandert' },
      { letter: 'D', text: 'Regressie bewijst causaliteit, correlatie niet' },
    ],
    correctAnswer: 'C',
  },
  {
    id: 4,
    question: 'Welke uitspraak past het best bij een correlatie van \\(r = -0.82\\)?',
    options: [
      { letter: 'A', text: 'Er is een sterke positieve lineaire samenhang' },
      { letter: 'B', text: 'Er is een sterke negatieve lineaire samenhang' },
      { letter: 'C', text: 'Er is geen lineaire samenhang, maar wel per definitie causaliteit' },
      { letter: 'D', text: 'Y neemt altijd af als X toeneemt' },
    ],
    correctAnswer: 'B',
  },
  {
    id: 5,
    question: 'Een p-waarde is:',
    options: [
      { letter: 'A', text: 'De kans dat de nulhypothese waar is' },
      { letter: 'B', text: 'De kans dat het gevonden effect toevallig precies nul is' },
      { letter: 'C', text: 'De kans op het gevonden resultaat of een extremer resultaat, aangenomen dat H0 waar is' },
      { letter: 'D', text: 'De kans dat de alternatieve hypothese onwaar is' },
    ],
    correctAnswer: 'C',
  },
  {
    id: 6,
    question: 'Welke combinatie klopt?',
    options: [
      { letter: 'A', text: 'Type I-fout: H0 niet verwerpen terwijl H0 waar is' },
      { letter: 'B', text: 'Type II-fout: H0 verwerpen terwijl H0 waar is' },
      { letter: 'C', text: 'Type I-fout: H0 verwerpen terwijl H0 waar is' },
      { letter: 'D', text: 'Type II-fout: H0 verwerpen terwijl H0 onwaar is' },
    ],
    correctAnswer: 'C',
  },
  {
    id: 7,
    question: 'Wat is een residu?',
    options: [
      { letter: 'A', text: 'De afstand tussen twee geobserveerde waarden in de dataset' },
      { letter: 'B', text: 'Het verschil tussen de geobserveerde waarde en de door het model voorspelde waarde' },
      { letter: 'C', text: 'De gemiddelde afwijking van alle punten samen' },
      { letter: 'D', text: 'De helling van de regressielijn bij een bepaald punt' },
    ],
    correctAnswer: 'B',
  },
  {
    id: 8,
    question: 'Waarom worden bij de methode van kleinste kwadraten de residuen gekwadrateerd?',
    options: [
      { letter: 'A', text: 'Daardoor wordt elke afwijking automatisch even zwaar' },
      { letter: 'B', text: 'Omdat positieve en negatieve afwijkingen elkaar dan niet opheffen en grote afwijkingen zwaarder meetellen' },
      { letter: 'C', text: 'Omdat de residuen dan normaal verdeeld moeten zijn' },
      { letter: 'D', text: 'Omdat de regressielijn daardoor altijd door alle punten heen loopt' },
    ],
    correctAnswer: 'B',
  },
]
