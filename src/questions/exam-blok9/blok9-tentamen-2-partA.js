/** Blok 9 oefententamen 2 - casussen 1-3 */

const LAB1 = `Parameter | Uitslag | Referentie
Creatinine | 241 umol/L | 60-110
Ureum | 21,0 mmol/L | 3,0-8,0
Kalium | 5,0 mmol/L | 3,5-5,0
Natrium | 147 mmol/L | 135-145
Bicarbonaat | 20 mmol/L | 22-29
Hb | 10,4 mmol/L | 8,5-11,0`

const LAB2 = `Parameter | Uitslag | Referentie
Creatinine | 135 umol/L | 50-90
eGFR | 41 mL/min/1,73m2 | >60
UACR | 18 mg/mmol | <3
Kalium | 4,7 mmol/L | 3,5-5,0
HbA1c | 60 mmol/mol | <53`

const LAB3 = `Parameter | Uitslag | Referentie
Natrium | 124 mmol/L | 135-145
Kalium | 3,8 mmol/L | 3,5-5,0
Glucose | 5,1 mmol/L | 4,0-7,8
Ureum | 4,5 mmol/L | 3,0-8,0
Creatinine | 98 umol/L | 50-90
Serumosmolaliteit | 266 mosmol/kg | 275-295`

export const blok9Tentamen2PartA = [
  {
    id: 'casus-1',
    title: 'Casus 1 - Acute nierschade',
    totalPoints: 12,
    scenario: `Een 79-jarige man komt op de SEH met 3 dagen braken en weinig drinken. Hij gebruikt lisinopril en furosemide. Sinds vanochtend heeft hij nog maar weinig geplast. Bij lichamelijk onderzoek heeft hij droge slijmvliezen en orthostase. De bladderscan toont 40 mL residu.
Laboratorium
${LAB1}
Oude creatinine 2 maanden geleden: 88 umol/L.`,
    questions: [
      {
        id: '1a',
        type: 'meerkeuze',
        points: 2,
        question: `1a. (2p)
Wat is de meest waarschijnlijke hoofdcategorie van deze acute nierschade?`,
        options: [
          { letter: 'A', text: 'Prerenaal' },
          { letter: 'B', text: 'Intrinsiek renaal' },
          { letter: 'C', text: 'Postrenaal' },
          { letter: 'D', text: 'Chronische nierschade zonder acute component' },
        ],
        correctAnswer: 'A',
        explanation:
          'Braken, weinig intake, droge slijmvliezen, orthostase en laag residu passen het best bij volumedepletie met prerenale acute nierschade.',
      },
      {
        id: '1b',
        type: 'open',
        points: 3,
        question: `1b. (3p)
Noem 3 aanwijzingen uit de casus die jouw antwoord ondersteunen.
Maximaal 40 woorden.`,
        wordLimit: 40,
        rubric:
          '1 punt per juiste aanwijzing, max 3. Goede antwoorden: 3 dagen braken; weinig drinken; droge slijmvliezen; orthostase; afname urineproductie; laag residu; stijging creatinine t.o.v. oude waarde; ACE-remmer/diureticum als versterkende factoren.',
        modelAnswer:
          'Braken en weinig drinken passen bij volumedepletie. Droge slijmvliezen en orthostase ondersteunen dehydratie. Het lage residu maakt postrenale obstructie minder waarschijnlijk.',
        explanation: '',
      },
      {
        id: '1c',
        type: 'meerdere_antwoorden',
        points: 2,
        question: `1c. (2p)
Welke 3 aanvullende onderzoeken zijn bij acute nierschade klassiek het belangrijkst?
Meerdere antwoorden mogelijk.`,
        options: [
          { letter: 'A', text: 'Urineonderzoek' },
          { letter: 'B', text: 'Basaal bloedonderzoek' },
          { letter: 'C', text: 'Echografie' },
          { letter: 'D', text: 'Spirometrie' },
          { letter: 'E', text: 'Fundoscopie' },
        ],
        correctAnswers: ['A', 'B', 'C'],
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.67,
        explanation:
          'Juiste antwoorden: A, B en C. Puntenverdeling: 0,67 punt per juiste keuze (zonder foutieve keuze), maximaal 2 punten.',
      },
      {
        id: '1d',
        type: 'open',
        points: 3,
        question: `1d. (3p)
Waarom is de CKD-EPI-eGFR bij acute nierschade minder betrouwbaar?
Maximaal 30 woorden.`,
        wordLimit: 30,
        rubric:
          '1p stabiele creatininewaarde noemen; 1p acute verandering benoemen; 1p koppeling aan onbetrouwbare eGFR.',
        modelAnswer:
          'De formule gaat uit van een stabiele creatininewaarde. Bij acute nierschade verandert creatinine juist snel, waardoor de berekende eGFR geen betrouwbare weergave van de echte nierfunctie is.',
        explanation: '',
      },
      {
        id: '1e',
        type: 'meerkeuze',
        points: 2,
        question: `1e. (2p)
Welke eerste stap is het meest logisch?`,
        options: [
          { letter: 'A', text: 'Meteen starten met dialyse' },
          { letter: 'B', text: 'Oorzaakgericht behandelen en vermoedelijk uitlokkende medicatie herbeoordelen' },
          { letter: 'C', text: 'Alleen afwachten' },
          { letter: 'D', text: 'Alleen kaliumsuppletie geven' },
        ],
        correctAnswer: 'B',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-2',
    title: 'Casus 2 - Chronische nierschade',
    totalPoints: 13,
    scenario: `Een 64-jarige vrouw met diabetes mellitus type 2 en hypertensie heeft al meer dan 4 maanden afwijkende nierwaarden. Ze voelt zich redelijk goed. Er is geen macrohematurie.
Laboratorium
${LAB2}`,
    questions: [
      {
        id: '2a',
        type: 'meerkeuze',
        points: 2,
        question: `2a. (2p)
Welke uitspraak is het meest juist?`,
        options: [
          { letter: 'A', text: 'Dit past niet bij chronische nierschade, want de patient voelt zich goed' },
          { letter: 'B', text: 'Chronische nierschade vereist persisterende afwijkingen, meestal >= 3 maanden' },
          { letter: 'C', text: 'Alleen albuminurie telt, eGFR niet' },
          { letter: 'D', text: 'Alleen een nierbiopt kan chronische nierschade aantonen' },
        ],
        correctAnswer: 'B',
        explanation: '',
      },
      {
        id: '2b',
        type: 'meerkeuze',
        points: 2,
        question: `2b. (2p)
Welke G-klasse past het best bij een eGFR van 41 mL/min/1,73m2?`,
        options: [
          { letter: 'A', text: 'G2' },
          { letter: 'B', text: 'G3a' },
          { letter: 'C', text: 'G3b' },
          { letter: 'D', text: 'G4' },
        ],
        correctAnswer: 'B',
        explanation: '',
      },
      {
        id: '2c',
        type: 'meerkeuze',
        points: 2,
        question: `2c. (2p)
Welke A-klasse past het best bij een UACR van 18 mg/mmol?`,
        options: [
          { letter: 'A', text: 'A1' },
          { letter: 'B', text: 'A2' },
          { letter: 'C', text: 'A3' },
          { letter: 'D', text: 'Niet te classificeren' },
        ],
        correctAnswer: 'B',
        explanation: '',
      },
      {
        id: '2d',
        type: 'open',
        points: 3,
        question: `2d. (3p)
Waarom is de combinatie van eGFR en albuminurie nuttig?
Maximaal 40 woorden.`,
        wordLimit: 40,
        rubric:
          '1p eGFR = functie; 1p albuminurie = schade/progressierisico; 1p combinatie geeft betere prognostische waarde.',
        modelAnswer:
          'eGFR zegt iets over filtratiefunctie, albuminurie over nierschade en progressierisico. Samen geven ze een betere inschatting van ernst, prognose en follow-up dan een van beide alleen.',
        explanation: '',
      },
      {
        id: '2e',
        type: 'open',
        points: 4,
        question: `2e. (4p)
Noem 4 logische behandeldoelen of aandachtspunten bij chronische nierschade.
Maximaal 80 woorden.`,
        wordLimit: 80,
        rubric:
          '1 punt per goed aandachtspunt, max 4. Goede antwoorden: bloeddruk optimaliseren; albuminurie verminderen met RAAS-remming indien passend; diabetesregulatie verbeteren; cardiovasculaire risicoreductie; leefstijl; follow-up van eGFR/albuminurie/kalium; screenen op CKD-complicaties.',
        modelAnswer:
          'Optimaliseer bloeddruk en verminder albuminurie. Verbeter diabetesregulatie. Doe cardiovasculaire risicoreductie en leefstijladvies. Controleer nierfunctie, albuminurie en kalium in de follow-up.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-3',
    title: 'Casus 3 - Elektrolyten en waterbalans',
    totalPoints: 12,
    scenario: `Een 82-jarige vrouw woont alleen. Ze eet al weken slecht: vooral thee en toast. Haar dochter merkt dat ze traag reageert en erg veel water drinkt. Bij onderzoek is zij niet duidelijk oedemateus en niet ernstig gedehydreerd.
Laboratorium
${LAB3}
Termuitleg: osmolaliteit = maat voor het aantal opgeloste deeltjes in een vloeistof.`,
    questions: [
      {
        id: '3a',
        type: 'meerkeuze',
        points: 2,
        question: `3a. (2p)
Wat is de meest waarschijnlijke overkoepelende stoornis?`,
        options: [
          { letter: 'A', text: 'Hyponatriemie' },
          { letter: 'B', text: 'Hypernatriemie' },
          { letter: 'C', text: 'Hyperkaliemie' },
          { letter: 'D', text: 'Respiratoire alkalose' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
      {
        id: '3b',
        type: 'meerkeuze',
        points: 2,
        question: `3b. (2p)
Welke uitspraak is het meest juist?`,
        options: [
          { letter: 'A', text: 'Een laag serum-natrium zegt meestal vooral iets over de waterbalans' },
          { letter: 'B', text: 'Natrium heeft nauwelijks invloed op osmolaliteit' },
          { letter: 'C', text: 'Ureum is altijd de belangrijkste determinant van toniciteit' },
          { letter: 'D', text: 'Hyponatriemie betekent altijd te weinig natrium in het lichaam' },
        ],
        correctAnswer: 'A',
        explanation:
          'In de kliniek weerspiegelt een natriumstoornis vaak een verstoring van de waterbalans.',
      },
      {
        id: '3c',
        type: 'meerkeuze',
        points: 3,
        question: `3c. (3p)
Wat past het best bij een tea-and-toast-situatie?`,
        options: [
          { letter: 'A', text: 'Veel osmolen, normale wateruitscheiding' },
          { letter: 'B', text: 'Weinig osmolen, beperkte wateruitscheiding en risico op hyponatriemie' },
          { letter: 'C', text: 'Altijd hypernatriemie' },
          { letter: 'D', text: 'Altijd massaal kaliumverlies' },
        ],
        correctAnswer: 'B',
        explanation: '',
      },
      {
        id: '3d',
        type: 'open',
        points: 3,
        question: `3d. (3p)
Waarom kan een standaardadvies als "drink altijd 2 liter per dag" bij sommige ouderen onveilig zijn?
Maximaal 50 woorden.`,
        wordLimit: 50,
        rubric:
          '1p weinig osmolen noemen; 1p verminderde wateruitscheiding noemen; 1p risico op verergering hyponatriemie noemen.',
        modelAnswer:
          'Bij een lage inname van osmolen kan de nier minder vrij water uitscheiden. Extra veel drinken kan dan juist hyponatriemie verergeren, vooral bij kwetsbare ouderen met beperkte reserve.',
        explanation: '',
      },
      {
        id: '3e',
        type: 'meerkeuze',
        points: 2,
        question: `3e. (2p)
Wat is in deze casus het meest logische eerste algemene beleid?`,
        options: [
          { letter: 'A', text: 'Alleen nog meer water laten drinken' },
          { letter: 'B', text: 'Drinkgedrag, voeding en kliniek gericht herbeoordelen' },
          { letter: 'C', text: 'Direct starten met thrombolyse' },
          { letter: 'D', text: 'Meteen dialyse' },
        ],
        correctAnswer: 'B',
        explanation: '',
      },
    ],
  },
]
