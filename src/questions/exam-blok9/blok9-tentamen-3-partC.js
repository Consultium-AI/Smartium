/** Blok 9 oefententamen 3 — casussen 7–8 */

const LAB8 = `Hb | 8.5 mmol/L | 8.5–11.0
Leukocyten | 16.2 x10^9/L | 4.0–10.0
CRP | 248 mg/L | <5
Ureum | 11.4 mmol/L | 3.0–8.0
Creatinine | 118 µmol/L | 60–110
Natrium | 133 mmol/L | 135–145
Glucose | 11.8 mmol/L | 4.0–7.8`

export const blok9Tentamen3PartC = [
  {
    id: 'casus-7',
    title: 'Casus 7 – Secundaire hypertensie of hypertensief spoedgeval?',
    totalPoints: 12,
    scenario: `Een 34-jarige vrouw meldt zich op de SEH met wazig zien en drukkende hoofdpijn. Zij gebruikt al 3 antihypertensiva. Bloeddruk 224/132 mmHg. Fundoscopie toont retinale afwijkingen passend bij acute hypertensieve schade. In de voorgeschiedenis staan recidiverende spierkrampen. Laboratorium toont kalium 2.8 mmol/L.`,
    questions: [
      {
        id: '7a',
        type: 'meerkeuze',
        points: 2,
        question: '7a. Enkelvoudige meerkeuzevraag (2p)\nWat is de beste typering van deze situatie?',
        options: [
          { letter: 'A', text: 'Ernstige hypertensie zonder acute orgaanschade' },
          { letter: 'B', text: 'Hypertensief spoedgeval' },
          { letter: 'C', text: 'Wittejassenhypertensie' },
          { letter: 'D', text: 'Alleen secundaire hypertensie, geen spoed' },
        ],
        correctAnswer: 'B',
        explanation: 'Zeer hoge bloeddruk mét acute eindorgaanschade aan retina/visus.',
      },
      {
        id: '7b',
        type: 'open',
        points: 3,
        question:
          '7b. Open vraag (3p, max. 50 woorden)\nNoem twee kenmerken uit deze casus die ook aan een secundaire oorzaak van hypertensie doen denken.',
        wordLimit: 50,
        rubric:
          '1,5p per goed kenmerk, max 3p: jonge leeftijd; therapieresistentie; hypokaliëmie; spierkrampen; zeer ernstige hypertensie.',
        modelAnswer:
          'De jonge leeftijd en therapieresistente hypertensie maken een secundaire oorzaak waarschijnlijker. Ook hypokaliëmie met spierkrampen past goed bij primair hyperaldosteronisme.',
        explanation: '',
      },
      {
        id: '7c',
        type: 'meerkeuze',
        points: 2,
        question:
          '7c. Enkelvoudige meerkeuzevraag (2p)\nWelke secundaire oorzaak past het best bij therapieresistente hypertensie in combinatie met hypokaliëmie?',
        options: [
          { letter: 'A', text: 'OSAS' },
          { letter: 'B', text: 'Primair hyperaldosteronisme' },
          { letter: 'C', text: 'Coarctatio aortae' },
          { letter: 'D', text: 'Essentiale hypertensie' },
        ],
        correctAnswer: 'B',
        explanation: '',
      },
      {
        id: '7d',
        type: 'meerdere_antwoorden',
        points: 3,
        question:
          '7d. Meerkeuzevraag, meerdere antwoorden mogelijk (3p)\nWelke clues maken secundaire hypertensie waarschijnlijker?',
        options: [
          { letter: 'A', text: 'Jonge leeftijd' },
          { letter: 'B', text: 'Plotseling ontstaan of plotseling verergeren' },
          { letter: 'C', text: 'Therapieresistentie' },
          { letter: 'D', text: 'Negatieve familie-anamnese' },
          { letter: 'E', text: 'Afwezigheid van klachten sluit secundaire hypertensie uit' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.75,
        explanation:
          'Juiste antwoorden: A, B, C, D. 0,75p per juiste optie. E fout.',
      },
      {
        id: '7e',
        type: 'meerkeuze',
        points: 2,
        question:
          '7e. Enkelvoudige meerkeuzevraag (2p)\nWaarom worden renine- en aldosteronwaarden in de acute setting van een hypertensief spoedgeval vaak niet meteen betrouwbaar geïnterpreteerd?',
        options: [
          { letter: 'A', text: 'Omdat ze alleen bij ouderen zinvol zijn' },
          { letter: 'B', text: 'Omdat sympathische activatie en RAAS-stimulatie de waarden acuut kunnen vertekenen' },
          { letter: 'C', text: 'Omdat renine alleen in urine bepaald mag worden' },
          { letter: 'D', text: 'Omdat aldosteron nooit stijgt bij hypertensie' },
        ],
        correctAnswer: 'B',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-8',
    title: 'Casus 8 – Pneumonie en respiratoire insufficiëntie',
    totalPoints: 14,
    scenario: `Een 71-jarige man presenteert zich met koorts, productieve hoest en toenemende dyspneu sinds 3 dagen. Voorgeschiedenis: COPD en diabetes mellitus. Bij onderzoek: T 38,8°C, bloeddruk 102/62 mmHg, pols 112/min, ademfrequentie 32/min, verward, saturatie 88% bij kamerlucht.
Laboratorium
${LAB8}
X-thorax
Rechts onderkwabair infiltraat met pleurale reactie.`,
    questions: [
      {
        id: '8a',
        type: 'rekenvraag',
        points: 4,
        question:
          '8a. Reken-/scorevraag (4p)\nBereken de CURB-65-score van deze patiënt.',
        correctValue: 4,
        tolerance: 0.01,
        unit: '',
        rubric:
          '1p per correct CURB-onderdeel / juiste totaalscore: C verward=1; U>7=1; R≥30=1; B bloeddruk te laag=0; leeftijd≥65=1 → totaal 4.',
        modelAnswer:
          'C: verward = 1; U: ureum > 7 = 1; R: RR 32 = 1; B: bloeddruk voldoet net niet voor punt; 65: leeftijd ≥ 65 = 1; Totaal CURB-65 = 4.',
        explanation: '',
      },
      {
        id: '8b',
        type: 'meerkeuze',
        points: 2,
        question:
          '8b. Enkelvoudige meerkeuzevraag (2p)\nWelke uitspraak is het meest correct op basis van deze score en casus?',
        options: [
          { letter: 'A', text: 'Past het meest bij milde CAP, ambulante behandeling is waarschijnlijk voldoende' },
          { letter: 'B', text: 'Past het meest bij matig-ernstige CAP' },
          { letter: 'C', text: 'Past het meest bij ernstige CAP' },
          { letter: 'D', text: 'CAP kan niet worden ingeschat met klinische gegevens' },
        ],
        correctAnswer: 'C',
        explanation: '',
      },
      {
        id: '8c',
        type: 'meerdere_antwoorden',
        points: 3,
        question:
          '8c. Meerkeuzevraag, meerdere antwoorden mogelijk (3p)\nWelke verwekkers of groepen zijn bij CAP relatief waarschijnlijk en relevant in de differentiaaldiagnose?',
        options: [
          { letter: 'A', text: 'Streptococcus pneumoniae' },
          { letter: 'B', text: 'Haemophilus influenzae' },
          { letter: 'C', text: 'Legionella pneumophila' },
          { letter: 'D', text: 'Altijd alleen virale verwekker' },
          { letter: 'E', text: 'Atypische verwekkers kunnen ook passen' },
        ],
        correctAnswers: ['A', 'B', 'C', 'E'],
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.75,
        explanation:
          'Juiste antwoorden: A, B, C, E. 0,75p per juiste optie. D fout.',
      },
      {
        id: '8d',
        type: 'open',
        points: 3,
        question:
          '8d. Open vraag (3p, max. 50 woorden)\nLeg uit welk mechanisme van respiratoire insufficiëntie het best past bij een pneumonie en waarom extra zuurstof daarbij soms maar beperkt effect heeft.',
        wordLimit: 50,
        rubric:
          '1p V/Q-mismatch of shunt; 1p slechte ventilatie bij perfusie; 1p beperkte respons O2.',
        modelAnswer:
          'Bij pneumonie past vooral een V/Q-mismatch met vaak ook een shuntcomponent. Ontstoken of met exsudaat gevulde alveoli ventileren slecht, terwijl er nog wel perfusie is. Daarom is de zuurstofopname verminderd en corrigeert extra zuurstof soms maar beperkt.',
        explanation: '',
      },
      {
        id: '8e',
        type: 'meerkeuze',
        points: 2,
        question:
          '8e. Enkelvoudige meerkeuzevraag (2p)\nWanneer is een urine-legionella-antigeentest in het bijzonder zinvol?',
        options: [
          { letter: 'A', text: 'Bij iedere banale verkoudheid' },
          { letter: 'B', text: 'Alleen bij gezonde kinderen' },
          { letter: 'C', text: 'Bij ernstige CAP of bij specifieke risicofactoren zoals reisgeschiedenis of therapiefalen onder bèta-lactam' },
          { letter: 'D', text: 'Nooit, want legionella is gemakkelijk te kweken' },
        ],
        correctAnswer: 'C',
        explanation: '',
      },
    ],
  },
]
