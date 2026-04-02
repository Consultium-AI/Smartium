// Blok 9 · Week 4 · Casus 8 · LME 37 Lineare regressielijn — oefenvragen (vragen 9–15)
export const blok9Week4Casus8LineareRegressielijnQuestionsPart02 = [
  {
    id: 9,
    question: 'Een onderzoeker codeert rokers als 1 en niet-rokers als 0 en voorspelt systolische bloeddruk met een lineair regressiemodel. Wat klopt het best?',
    options: [
      { letter: 'A', text: 'De regressiecoëfficiënt is het verschil tussen de gemiddelde bloeddruk van rokers en niet-rokers' },
      { letter: 'B', text: 'Het intercept is altijd het verschil tussen de twee groepsgemiddelden' },
      { letter: 'C', text: 'Deze analyse is inhoudelijk iets heel anders dan een t-toets, ook al lijken de uitkomsten soms op elkaar' },
      { letter: 'D', text: 'De helling geeft aan hoeveel de bloeddruk verandert per extra eenheid bloeddruk' },
    ],
    correctAnswer: 'A',
  },
  {
    id: 10,
    question: 'Welke uitspraak over R² is juist?',
    options: [
      { letter: 'A', text: 'R² kan negatief zijn als het model slecht past' },
      { letter: 'B', text: 'R² laat zien welk deel van de variantie in Y door X wordt verklaard' },
      { letter: 'C', text: 'R² geeft de richting van het verband aan' },
      { letter: 'D', text: 'R² is alleen bruikbaar bij correlatie, niet bij regressie' },
    ],
    correctAnswer: 'B',
  },
  {
    id: 11,
    question: 'Wat geldt bij enkelvoudige lineaire regressie?',
    options: [
      { letter: 'A', text: '\\(R^2 = r\\)' },
      { letter: 'B', text: '\\(R^2 = 1 - r^2\\)' },
      { letter: 'C', text: '\\(R^2 = r^2\\)' },
      { letter: 'D', text: '\\(R^2 = \\sqrt{r}\\)' },
    ],
    correctAnswer: 'C',
  },
  {
    id: 12,
    question: 'Welke aanname van lineaire regressie kun je vooral controleren met een residuplot?',
    options: [
      { letter: 'A', text: 'Of de uitkomstvariabele absoluut normaal verdeeld is' },
      { letter: 'B', text: 'Of de relatie tussen X en Y ongeveer lineair is en of de spreiding ongeveer constant blijft' },
      { letter: 'C', text: 'Of er geen enkele meetfout in de data zit' },
      { letter: 'D', text: 'Of de steekproef groot genoeg is voor causaliteit' },
    ],
    correctAnswer: 'B',
  },
  {
    id: 13,
    question: 'Welke situatie past het best bij etiologisch onderzoek?',
    options: [
      { letter: 'A', text: 'Je wilt een uitkomst zo goed mogelijk voorspellen, ongeacht de onderliggende oorzaak' },
      { letter: 'B', text: 'Je wilt patronen samenvatten zonder rekening te houden met andere variabelen' },
      { letter: 'C', text: 'Je wilt onderzoeken of een hogere BMI samenhangt met hogere bloeddruk, waarbij je confounders meeneemt' },
      { letter: 'D', text: 'Je wilt alleen beschrijven hoe twee groepen gemiddeld verschillen zonder verdere interpretatie' },
    ],
    correctAnswer: 'C',
  },
  {
    id: 14,
    question: 'Waarom wordt een RCT vaak als betrouwbaarder gezien voor causaliteitsonderzoek?',
    options: [
      { letter: 'A', text: 'Omdat randomisatie confounding vermindert' },
      { letter: 'B', text: 'Omdat correlatie daarin altijd hoger uitvalt' },
      { letter: 'C', text: 'Omdat regressie daar niet meer nodig is' },
      { letter: 'D', text: 'Omdat een RCT per definitie een lineair verband bewijst' },
    ],
    correctAnswer: 'A',
  },
  {
    id: 15,
    question: 'Welke combinatie past het best bij predictief onderzoek?',
    options: [
      { letter: 'A', text: 'Variabelen kiezen op basis van hun bijdrage aan de voorspelprestatie van het model' },
      { letter: 'B', text: 'Alleen variabelen opnemen die theoretisch zeker confounders zijn' },
      { letter: 'C', text: 'Altijd zo weinig mogelijk variabelen gebruiken om vertekening te vermijden' },
      { letter: 'D', text: 'Voorspelling is niet het doel; het gaat vooral om causale interpretatie' },
    ],
    correctAnswer: 'A',
  },
]
