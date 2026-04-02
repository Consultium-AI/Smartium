/** Blok 9 oefententamen 4 — casussen 4–6 */

const LAB4 = `Albumine | 18 g/L | 35–50
Totaal cholesterol | verhoogd | normaal
Creatinine | 102 µmol/L | 50–100
Urine-eiwit | fors verhoogd | negatief/spoor`

const LAB5 = `Kalium | 3.0 mmol/L | 3.5–5.0
Natrium | 142 mmol/L | 135–145
Creatinine | 81 µmol/L | 50–100`

const PLEUR6 = `pH | 7.08
Glucose | laag
Kweek | positief`

export const blok9Tentamen4PartB = [
  {
    id: 'casus-4',
    title: 'Casus 4 – Oedeem, schuimende urine en laag albumine',
    totalPoints: 12,
    scenario: `Een 36-jarige vrouw presenteert zich met progressief enkeloedeem en schuimende urine. Geen koorts. Bloeddruk 148/92 mmHg.
Laboratorium
${LAB4}`,
    questions: [
      {
        id: '4a',
        type: 'meerkeuze',
        points: 2,
        question:
          '4a. Enkelvoudige meerkeuzevraag (2p)\nWelk syndroom past het best bij deze presentatie?',
        options: [
          { letter: 'A', text: 'Nefritisch syndroom' },
          { letter: 'B', text: 'Nefrotisch syndroom' },
          { letter: 'C', text: 'Tubulo-interstitiële nefritis' },
          { letter: 'D', text: 'Prerenale nierschade' },
        ],
        correctAnswer: 'B',
        explanation:
          'Oedeem, forse proteïnurie, hypoalbuminemie en hypercholesterolemie passen hierbij.',
      },
      {
        id: '4b',
        type: 'open',
        points: 3,
        question:
          '4b. Open vraag (3p, max. 50 woorden)\nWaarom helpt een albumine-infuus volgens de stof meestal niet goed tegen het oedeem bij nefrotisch syndroom?',
        wordLimit: 50,
        rubric:
          '1p: laag albumine niet het hoofdprobleem; 1p: natrium- en waterretentie; 1p: eNaC of equivalent.',
        modelAnswer:
          'Volgens de stof is het kernprobleem niet vooral het lage albumine, maar sterke natrium- en waterretentie via eNaC. Daarom corrigeert een albumine-infuus het oedeem meestal niet goed.',
        explanation: '',
      },
      {
        id: '4c',
        type: 'meerdere_antwoorden',
        points: 3,
        question:
          '4c. Meerkeuzevraag, meerdere antwoorden mogelijk (3p)\nWelke symptomatische behandelingen passen bij nefrotisch syndroom?',
        options: [
          { letter: 'A', text: 'Zoutbeperking' },
          { letter: 'B', text: 'Diuretica' },
          { letter: 'C', text: 'ACE-remmer of ARB om proteïnurie te remmen' },
          { letter: 'D', text: 'Sterke eiwitbeperking als standaard' },
          { letter: 'E', text: 'Statine overwegen bij dyslipidemie' },
        ],
        correctAnswers: ['A', 'B', 'C', 'E'],
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.75,
        explanation:
          'Juiste antwoorden: A, B, C, E. 0,75p per juiste optie. Geen sterke eiwitbeperking als standaard.',
      },
      {
        id: '4d',
        type: 'meerkeuze',
        points: 2,
        question:
          '4d. Enkelvoudige meerkeuzevraag (2p)\nBij welk subtype of welke situatie wordt profylactische antistolling volgens de stof relatief snel overwogen?',
        options: [
          { letter: 'A', text: 'Elke vorm van microhematurie' },
          { letter: 'B', text: 'Membraneuze nefropathie met zeer laag serumalbumine' },
          { letter: 'C', text: 'Prerenale dehydratie' },
          { letter: 'D', text: 'Isolerende cystitis' },
        ],
        correctAnswer: 'B',
        explanation: '',
      },
      {
        id: '4e',
        type: 'meerkeuze',
        points: 2,
        question:
          '4e. Enkelvoudige meerkeuzevraag (2p)\nWelk mechanisme ligt primair ten grondslag aan de proteïnurie van het nefrotisch syndroom?',
        options: [
          { letter: 'A', text: 'Podocytschade' },
          { letter: 'B', text: 'Urethra-obstructie' },
          { letter: 'C', text: 'Alleen hemolyse' },
          { letter: 'D', text: 'Longembolie' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-5',
    title: 'Casus 5 – Jonge patiënt met ernstige hypertensie',
    totalPoints: 13,
    scenario: `Een 29-jarige vrouw wordt verwezen wegens moeilijk instelbare hypertensie. Zij gebruikt al twee middelen. Ze heeft geregeld spierkrampen en voelt zich soms slap. Familieanamnese is negatief voor hypertensie. Lichamelijk onderzoek: bloeddruk 178/106 mmHg.
Laboratorium
${LAB5}`,
    questions: [
      {
        id: '5a',
        type: 'meerkeuze',
        points: 2,
        question:
          '5a. Enkelvoudige meerkeuzevraag (2p)\nWelke secundaire oorzaak is het meest waarschijnlijk?',
        options: [
          { letter: 'A', text: 'Primair hyperaldosteronisme' },
          { letter: 'B', text: 'Primaire hypertensie' },
          { letter: 'C', text: 'Viral bronchitis' },
          { letter: 'D', text: 'Pleurale infectie' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
      {
        id: '5b',
        type: 'open',
        points: 3,
        question:
          '5b. Open vraag (3p, max. 50 woorden)\nNoem drie clues uit deze casus die een secundaire oorzaak van hypertensie waarschijnlijk maken.',
        wordLimit: 50,
        rubric:
          '1p per goed genoemde clue, max 3p: jonge leeftijd; moeilijk instelbaar; hypokaliëmie mogelijk (spierkrampen); negatieve familie-anamnese.',
        modelAnswer:
          'Clues zijn de jonge leeftijd, moeilijk instelbare hypertensie, hypokaliëmie, spierkrampen en negatieve familie-anamnese. Dat maakt een secundaire oorzaak waarschijnlijker.',
        explanation: '',
      },
      {
        id: '5c',
        type: 'meerkeuze',
        points: 2,
        question:
          '5c. Enkelvoudige meerkeuzevraag (2p)\nWelk patroon past klassiek bij primair hyperaldosteronisme?',
        options: [
          { letter: 'A', text: 'Hoog renine, laag aldosteron' },
          { letter: 'B', text: 'Hoog aldosteron, laag renine' },
          { letter: 'C', text: 'Hoog calcium, laag glucose' },
          { letter: 'D', text: 'Hoog CRP, laag Hb' },
        ],
        correctAnswer: 'B',
        explanation: '',
      },
      {
        id: '5d',
        type: 'koppelvraag',
        points: 4,
        question:
          '5d. Matrixvraag (4p)\nKoppel de oorzaak van secundaire hypertensie aan het best passende aanvullende onderzoek.\nFeochromocytoom\nCoarctatio aortae\nRenovasculaire hypertensie\nCushing\nAntwoordopties:\nA. (Nor)metanefrines / CT-bijnier\nB. Bloeddrukverschil en echo doppler\nC. Duplex doppler / CT-angiografie\nD. 24-uurs urinecortisol',
        items: [
          'Feochromocytoom',
          'Coarctatio aortae',
          'Renovasculaire hypertensie',
          'Cushing',
        ],
        matchOptions: [
          { letter: 'A', text: '(Nor)metanefrines / CT-bijnier' },
          { letter: 'B', text: 'Bloeddrukverschil en echo doppler' },
          { letter: 'C', text: 'Duplex doppler / CT-angiografie' },
          { letter: 'D', text: '24-uurs urinecortisol' },
        ],
        correctMapping: { 0: 'A', 1: 'B', 2: 'C', 3: 'D' },
        explanation: '1p per juiste koppeling.',
      },
      {
        id: '5e',
        type: 'meerkeuze',
        points: 2,
        question:
          '5e. Enkelvoudige meerkeuzevraag (2p)\nWelk middel is bij bilaterale hyperplasie een logische behandeling volgens de stof?',
        options: [
          { letter: 'A', text: 'Spironolacton' },
          { letter: 'B', text: 'Hydrochloorthiazide als eerste keuze om hypokaliëmie te verbeteren' },
          { letter: 'C', text: 'Alleen nitrofurantoïne' },
          { letter: 'D', text: 'Calciumgluconaat als onderhoudstherapie' },
        ],
        correctAnswer: 'A',
        explanation: 'Bij bilaterale hyperplasie medicamenteus behandelen; thiaziden kunnen hypokaliëmie verergeren.',
      },
    ],
  },
  {
    id: 'casus-6',
    title: 'Casus 6 – Pneumonie met pleuravocht: geïnfecteerd of niet?',
    totalPoints: 12,
    scenario: `Een 67-jarige man ligt opgenomen met een bacteriële pneumonie. Ondanks antibiotica blijft hij koortsig en dyspnoïsch. Beeldvorming toont links basaal pleuravocht. Er wordt een pleurapunctie verricht.
Pleuravochtanalyse
${PLEUR6}`,
    questions: [
      {
        id: '6a',
        type: 'meerkeuze',
        points: 2,
        question:
          '6a. Enkelvoudige meerkeuzevraag (2p)\nWat is op basis van deze gegevens het meest waarschijnlijk?',
        options: [
          { letter: 'A', text: 'Onschuldig transsudaat zonder verdere actie' },
          { letter: 'B', text: 'Pleurale infectie' },
          { letter: 'C', text: 'Enkel cardiogeen pleuravocht' },
          { letter: 'D', text: 'Pseudopleuravocht' },
        ],
        correctAnswer: 'B',
        explanation: 'Lage pH, laag glucose en positieve kweek passen hierbij.',
      },
      {
        id: '6b',
        type: 'open',
        points: 3,
        question:
          '6b. Open vraag (3p, max. 50 woorden)\nWaarom is beeldvorming alleen niet genoeg om in deze situatie een pleurale infectie te bewijzen?',
        wordLimit: 50,
        rubric:
          '1p: beeldvorming toont wel vocht; 1p: bewijst geen infectie; 1p: punctie pH/glucose/kweek.',
        modelAnswer:
          'Beeldvorming toont alleen dat er pleuravocht aanwezig is. Je kunt op de foto niet zien of het vocht geïnfecteerd is. Daarvoor zijn punctiegegevens zoals pH, glucose en kweek nodig.',
        explanation: '',
      },
      {
        id: '6c',
        type: 'meerdere_antwoorden',
        points: 3,
        question:
          '6c. Meerkeuzevraag, meerdere antwoorden mogelijk (3p)\nWelke bevindingen zijn volgens de stof aanwijzingen voor een pleurale infectie?',
        options: [
          { letter: 'A', text: 'Lage pH, vooral < 7,2' },
          { letter: 'B', text: 'Laag glucose' },
          { letter: 'C', text: 'Positieve kweek van pleuravocht' },
          { letter: 'D', text: 'Alleen dyspneu zonder punctiegegevens' },
          { letter: 'E', text: 'Alleen een afgeplatte sinus op X-thorax' },
        ],
        correctAnswers: ['A', 'B', 'C'],
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 1,
        explanation: 'Juiste antwoorden: A, B, C. 1p per juiste optie.',
      },
      {
        id: '6d',
        type: 'meerkeuze',
        points: 2,
        question:
          '6d. Enkelvoudige meerkeuzevraag (2p)\nWat is een belangrijke behandelpijler bij pleurale infectie?',
        options: [
          { letter: 'A', text: 'Zoveel mogelijk geïnfecteerd vocht verwijderen, vaak met thoraxdrain' },
          { letter: 'B', text: 'Alleen zoutbeperking' },
          { letter: 'C', text: 'Alleen 1 gift amoxicilline' },
          { letter: 'D', text: 'Geen antibiotica nodig' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
      {
        id: '6e',
        type: 'meerkeuze',
        points: 2,
        question:
          '6e. Enkelvoudige meerkeuzevraag (2p)\nWelke algemene procedure wordt gebruikt om recidiverend pleuravocht tegen te gaan door de pleurale ruimte op te heffen?',
        options: [
          { letter: 'A', text: 'Pleurodese' },
          { letter: 'B', text: 'Lobectomie' },
          { letter: 'C', text: 'Dialyse' },
          { letter: 'D', text: 'Tracheostomie' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
    ],
  },
]
