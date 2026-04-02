/** Blok 9 oefententamen 4 — casussen 7–9 */

const LAB7 = `Creatinine | 146 µmol/L | 60–110
Ureum | 6.1 mmol/L | 3.0–8.0
Kalium | 4.4 mmol/L | 3.5–5.0
Natrium | 140 mmol/L | 135–145
Urinestrip | geen bloed, geen eiwit | —`

const LAB8 = `Natrium | 140 mmol/L | 135–145
Chloride | 100 mmol/L | 98–107
HCO₃⁻ | 10 mmol/L | 22–29
Glucose | 24 mmol/L | 4.0–7.8
Lactaat | licht verhoogd | normaal
Ketonen | positief | negatief`

const GAS8 = `pH | 7.18 | 7.35–7.45
pCO₂ | verlaagd | normaal`

const LAB9 = `Creatinine | 186 µmol/L | 50–100
Eosinofielen | verhoogd | normaal
CRP | licht verhoogd | <5`

const URINE9 = `Leukocyten | positief
Nitriet | negatief
Eiwit | spoor
Erytrocyten | negatief`

export const blok9Tentamen4PartC = [
  {
    id: 'casus-7',
    title: 'Casus 7 – Verhoogd creatinine na sport en supplementen',
    totalPoints: 12,
    scenario: `Een 26-jarige krachtsporter laat via de huisarts bloed prikken “voor de zekerheid”. Hij voelt zich goed. Hij gebruikt creatine-monohydraat en eet vrijwel dagelijks grote porties lang gestoofd vlees. Geen klachten van oligurie, dyspneu of oedeem.
Laboratorium
${LAB7}`,
    questions: [
      {
        id: '7a',
        type: 'meerkeuze',
        points: 2,
        question:
          '7a. Enkelvoudige meerkeuzevraag (2p)\nWelke interpretatie is het meest passend?',
        options: [
          { letter: 'A', text: 'Verhoogd creatinine betekent altijd acute nierschade' },
          { letter: 'B', text: 'Er zijn hier ook niet-renale verklaringen voor het verhoogde creatinine mogelijk' },
          { letter: 'C', text: 'De afwezigheid van proteïnurie bewijst glomerulonefritis' },
          { letter: 'D', text: 'Dit past automatisch bij postrenale obstructie' },
        ],
        correctAnswer: 'B',
        explanation: '',
      },
      {
        id: '7b',
        type: 'open',
        points: 3,
        question:
          '7b. Open vraag (3p, max. 50 woorden)\nNoem twee niet-renale oorzaken uit de stof die in deze casus het creatinine kunnen verhogen.',
        wordLimit: 50,
        rubric: '1,5p per juiste oorzaak, max 3p.',
        modelAnswer:
          'Twee niet-renale oorzaken zijn creatine-inname en lang gekookt vlees. Beide kunnen het serumcreatinine verhogen zonder dat er per se echte acute nierschade is.',
        explanation: '',
      },
      {
        id: '7c',
        type: 'meerkeuze',
        points: 2,
        question:
          '7c. Enkelvoudige meerkeuzevraag (2p)\nWaarom is een eGFR op basis van CKD-EPI bij acute veranderingen beperkt bruikbaar?',
        options: [
          { letter: 'A', text: 'Omdat CKD-EPI alleen voor kinderen bedoeld is' },
          { letter: 'B', text: 'Omdat de formule een stabiele creatininewaarde veronderstelt' },
          { letter: 'C', text: 'Omdat ureum er niet in voorkomt' },
          { letter: 'D', text: 'Omdat de formule alleen geldt bij hematurie' },
        ],
        correctAnswer: 'B',
        explanation: '',
      },
      {
        id: '7d',
        type: 'meerdere_antwoorden',
        points: 3,
        question:
          '7d. Meerkeuzevraag, meerdere antwoorden mogelijk (3p)\nWelke omstandigheden uit de stof kunnen serumcreatinine verhogen zonder dat er per se echte acute nierschade is?',
        options: [
          { letter: 'A', text: 'Creatine-inname' },
          { letter: 'B', text: 'Lang gekookt vlees' },
          { letter: 'C', text: 'Trimethoprim of cimetidine' },
          { letter: 'D', text: 'Urinelekkage in weefsel' },
          { letter: 'E', text: 'Elk verhoogd creatinine is altijd renaal' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.75,
        explanation: 'Juiste antwoorden: A, B, C, D. 0,75p per juiste optie.',
      },
      {
        id: '7e',
        type: 'meerkeuze',
        points: 2,
        question:
          '7e. Enkelvoudige meerkeuzevraag (2p)\nWelk alternatief kan volgens de stof nuttig zijn als je denkt dat de nierfunctie intact is maar creatinine misleidend is?',
        options: [
          { letter: 'A', text: 'eGFR op basis van cystatine C' },
          { letter: 'B', text: 'Alleen CRP' },
          { letter: 'C', text: 'Alleen HbA1c' },
          { letter: 'D', text: 'Troponine' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-8',
    title: 'Casus 8 – Zuur-baseanalyse op de SEH',
    totalPoints: 14,
    scenario: `Een 58-jarige man presenteert zich met buikpijn, sufheid en snelle diepe ademhaling. Er is verdenking op metabole ontregeling.
Laboratorium
Bloedgas
${LAB8}
${GAS8}`,
    questions: [
      {
        id: '8a',
        type: 'rekenvraag',
        points: 4,
        question:
          '8a. Rekenvraag (4p)\nBereken het anion gap.',
        correctValue: 30,
        tolerance: 0.51,
        unit: ' mmol/L',
        rubric:
          '1p juiste formule; 1p juiste invulling; 2p juiste uitkomst (Anion gap = Na − (Cl + HCO₃⁻)).',
        modelAnswer: 'Berekening: 140 - (100 + 10) = 30. Anion gap = 30.',
        explanation: '',
      },
      {
        id: '8b',
        type: 'meerkeuze',
        points: 2,
        question:
          '8b. Enkelvoudige meerkeuzevraag (2p)\nWelke primaire zuur-baseafwijking is het meest waarschijnlijk?',
        options: [
          { letter: 'A', text: 'Metabole acidose' },
          { letter: 'B', text: 'Metabole alkalose' },
          { letter: 'C', text: 'Respiratoire acidose' },
          { letter: 'D', text: 'Respiratoire alkalose' },
        ],
        correctAnswer: 'A',
        explanation: 'Laag HCO₃⁻ en lage pH.',
      },
      {
        id: '8c',
        type: 'open',
        points: 3,
        question:
          '8c. Open vraag (3p, max. 50 woorden)\nLeg uit wat een hoog anion gap in de kern betekent.',
        wordLimit: 50,
        rubric:
          '1p: extra zuur aanwezig; 1p: verbruik bicarbonaat; 1p: niet-gemeten anionen/zuren.',
        modelAnswer:
          'Een hoog anion gap betekent in de kern dat er extra zuur aanwezig is dat bicarbonaat heeft verbruikt. Het wijst dus meestal op ophoping van niet-gemeten zuren.',
        explanation: '',
      },
      {
        id: '8d',
        type: 'meerdere_antwoorden',
        points: 3,
        question:
          '8d. Meerkeuzevraag, meerdere antwoorden mogelijk (3p)\nWelke oorzaken noemt de stof als passend bij een hoog anion gap metabole acidose?',
        options: [
          { letter: 'A', text: 'Lactaatacidose' },
          { letter: 'B', text: 'Keto-acidose' },
          { letter: 'C', text: 'Methanol' },
          { letter: 'D', text: 'Ernstige diarree als standaardvoorbeeld' },
          { letter: 'E', text: 'Nierinsufficiëntie' },
        ],
        correctAnswers: ['A', 'B', 'C', 'E'],
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.75,
        explanation:
          'Juiste antwoorden: A, B, C, E. 0,75p per juiste optie. Diarree past typisch bij normaal anion gap.',
      },
      {
        id: '8e',
        type: 'meerkeuze',
        points: 2,
        question:
          '8e. Enkelvoudige meerkeuzevraag (2p)\nWanneer is bicarbonaatsuppletie volgens de stof vooral te overwegen?',
        options: [
          { letter: 'A', text: 'Altijd bij elke metabole acidose' },
          { letter: 'B', text: 'Nooit' },
          { letter: 'C', text: 'Bij zeer lage pH, ongeveer < 7–7,1' },
          { letter: 'D', text: 'Alleen bij hypertensie' },
        ],
        correctAnswer: 'C',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-9',
    title: 'Casus 9 – Nierfunctiedaling met leukocyturie na medicatiewissel',
    totalPoints: 12,
    scenario: `Een 47-jarige vrouw meldt zich met lichte koorts, moeheid en jeukende huidafwijkingen. Twee weken geleden is gestart met een protonpompremmer en NSAID’s. Zij heeft geen duidelijke mictieklachten.
Laboratorium
${LAB9}
Urine
${URINE9}`,
    questions: [
      {
        id: '9a',
        type: 'meerkeuze',
        points: 2,
        question:
          '9a. Enkelvoudige meerkeuzevraag (2p)\nWelke diagnose is het meest waarschijnlijk?',
        options: [
          { letter: 'A', text: 'Tubulo-interstitiële nefritis' },
          { letter: 'B', text: 'Simpele cystitis als enige verklaring' },
          { letter: 'C', text: 'Nefrotisch syndroom' },
          { letter: 'D', text: 'Longembolie' },
        ],
        correctAnswer: 'A',
        explanation:
          'Medicatie, huidafwijkingen, eosinofilie en leukocyturie zonder duidelijke UWI-klachten passen hierbij.',
      },
      {
        id: '9b',
        type: 'open',
        points: 3,
        question:
          '9b. Open vraag (3p, max. 50 woorden)\nWaarom past in deze casus TIN beter dan een urineweginfectie?',
        wordLimit: 50,
        rubric:
          '1p: medicatie als trigger; 1p: huidafwijkingen/eosinofilie; 1p: ontbreken typische UWI-klachten.',
        modelAnswer:
          'De combinatie van recent gestarte medicatie, huidafwijkingen, eosinofilie en het ontbreken van duidelijke mictieklachten past beter bij TIN dan bij een urineweginfectie.',
        explanation: '',
      },
      {
        id: '9c',
        type: 'meerkeuze',
        points: 2,
        question:
          '9c. Enkelvoudige meerkeuzevraag (2p)\nWelk mechanisme past het best bij TIN?',
        options: [
          { letter: 'A', text: 'Primaire immuunreactie tegen tubulus/interstitium' },
          { letter: 'B', text: 'Alleen postrenale obstructie' },
          { letter: 'C', text: 'Alleen glomerulaire basaalmembraanschade' },
          { letter: 'D', text: 'Louter verhoogde hydrostatische druk' },
        ],
        correctAnswer: 'A',
        explanation: 'TIN is volgens de stof immuun-gemedieerd.',
      },
      {
        id: '9d',
        type: 'meerdere_antwoorden',
        points: 3,
        question:
          '9d. Meerkeuzevraag, meerdere antwoorden mogelijk (3p)\nWelke middelen noemt de stof als bekende uitlokkende factoren voor TIN?',
        options: [
          { letter: 'A', text: 'Penicillines' },
          { letter: 'B', text: 'NSAID’s' },
          { letter: 'C', text: 'Protonpompremmers' },
          { letter: 'D', text: 'Immuun-checkpointremmers' },
          { letter: 'E', text: 'Alleen statines' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.75,
        explanation:
          'Juiste antwoorden: A, B, C, D. 0,75p per juiste optie.',
      },
      {
        id: '9e',
        type: 'meerkeuze',
        points: 2,
        question:
          '9e. Enkelvoudige meerkeuzevraag (2p)\nWat is volgens de stof het belangrijkste verschil tussen ATN en TIN?',
        options: [
          { letter: 'A', text: 'ATN is vooral ischemisch/toxisch, TIN vooral immuun-gemedieerd' },
          { letter: 'B', text: 'TIN geeft nooit leukocyturie' },
          { letter: 'C', text: 'ATN geeft altijd nefrotisch syndroom' },
          { letter: 'D', text: 'Er is geen relevant verschil' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
    ],
  },
]

