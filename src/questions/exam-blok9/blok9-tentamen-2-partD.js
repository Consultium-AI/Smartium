/** Blok 9 oefententamen 2 - casussen 9-10 */

const PLEURA9 = `Parameter | Uitslag
Pleuravocht-eiwit | 39 g/L
Serum-eiwit | 61 g/L
Pleuravocht-LDH | 390 U/L
Serum-LDH | 220 U/L
Bovengrens normaal serum-LDH | 240 U/L`

export const blok9Tentamen2PartD = [
  {
    id: 'casus-9',
    title: 'Casus 9 - Longkanker en pleuravocht',
    totalPoints: 14,
    scenario: `Een 69-jarige man met 45 pack years heeft gewichtsverlies, hoesten en af en toe hemoptoe. Op de thoraxfoto wordt een suspecte massa gezien. Er is ook pleuravocht.
Figuur 2 - Beeldvraag
Thoraxfoto-beschrijving: massa in de rechter bovenlong, verbrede hilus en rechts basaal vochtige afgrenzing passend bij pleuravocht.
Pleuravochtanalyse
${PLEURA9}`,
    questions: [
      {
        id: '9a',
        type: 'meerkeuze',
        points: 2,
        question: `9a. (2p)
Wat is de meest waarschijnlijke overkoepelende diagnose?`,
        options: [
          { letter: 'A', text: 'Longcarcinoom' },
          { letter: 'B', text: 'Astma' },
          { letter: 'C', text: 'Pneumothorax' },
          { letter: 'D', text: 'Alleen ribcontusie' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
      {
        id: '9b',
        type: 'meerkeuze',
        points: 2,
        question: `9b. (2p)
Wat is het belangrijkste preventieve advies bij longkankerrisico?`,
        options: [
          { letter: 'A', text: 'Meer zout eten' },
          { letter: 'B', text: 'Stoppen met roken' },
          { letter: 'C', text: 'Dagelijks 4 liter water drinken' },
          { letter: 'D', text: 'Vitamine K vermijden' },
        ],
        correctAnswer: 'B',
        explanation: '',
      },
      {
        id: '9c',
        type: 'meerdere_antwoorden',
        points: 3,
        question: `9c. (3p)
Welke symptomen passen klassiek bij longkanker?
Meerdere antwoorden mogelijk.`,
        options: [
          { letter: 'A', text: 'Hoesten' },
          { letter: 'B', text: 'Gewichtsverlies' },
          { letter: 'C', text: 'Hemoptoe' },
          { letter: 'D', text: 'Dyspneu' },
          { letter: 'E', text: 'Altijd alleen jeuk' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.75,
        explanation: 'Juiste antwoorden: A, B, C en D. Puntenverdeling: 0,75 punt per juiste keuze, max 3.',
      },
      {
        id: '9d',
        type: 'meerkeuze',
        points: 3,
        question: `9d. (3p)
Classificeer het pleuravocht.`,
        options: [
          { letter: 'A', text: 'Transsudaat' },
          { letter: 'B', text: 'Exsudaat' },
          { letter: 'C', text: 'Niet te beoordelen' },
          { letter: 'D', text: 'Altijd chylothorax' },
        ],
        correctAnswer: 'B',
        explanation:
          'Eiwitratio = 39/61 = 0,64 (> 0,5); LDH-ratio = 390/220 = 1,77 (> 0,6); pleuravocht-LDH > 2/3 bovengrens normaal serum-LDH. Dus exsudaat.',
      },
      {
        id: '9e',
        type: 'open',
        points: 4,
        question: `9e. (4p)
Noem 4 stappen of onderdelen van de verdere diagnostische route.
Maximaal 80 woorden.`,
        wordLimit: 80,
        rubric:
          '1 punt per goed onderdeel, max 4. Goede antwoorden: verdere beeldvorming/CT thorax-bovenbuik; PET-CT/stadiering; weefseldiagnostiek/biopsie; bronchoscopie/EBUS/punctie; pleuravochtcytologie; histologie/pathologie; multidisciplinair overleg.',
        modelAnswer:
          'Verdere stadiering met CT en vaak PET-CT. Diagnose bevestigen met weefseldiagnostiek via bronchoscopie, EBUS of punctie. Pleuravocht kan cytologisch onderzocht worden. Daarna volgt beoordeling van histologie en bespreking in MDO.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-10',
    title: 'Casus 10 - Atriumfibrilleren',
    totalPoints: 13,
    scenario: `Een 68-jarige man komt met hartkloppingen en vermoeidheid. De pols is onregelmatig. Hij is hemodynamisch stabiel.
Figuur 3 - Beeldvraag
ECG-beschrijving: geen duidelijke P-toppen, onregelmatig-irregulaire RR-intervallen, smalle QRS-complexen.`,
    questions: [
      {
        id: '10a',
        type: 'meerkeuze',
        points: 2,
        question: `10a. (2p)
Wat is de meest waarschijnlijke ritmestoornis?`,
        options: [
          { letter: 'A', text: 'Atriumfibrilleren' },
          { letter: 'B', text: 'Sinusritme' },
          { letter: 'C', text: '3e-graads AV-blok' },
          { letter: 'D', text: 'Ventrikelfibrilleren' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
      {
        id: '10b',
        type: 'meerdere_antwoorden',
        points: 2,
        question: `10b. (2p)
Welke 2 ECG-kenmerken ondersteunen de diagnose het meest?
Meerdere antwoorden mogelijk.`,
        options: [
          { letter: 'A', text: 'Geen duidelijke P-toppen' },
          { letter: 'B', text: 'Volledig onregelmatig ritme' },
          { letter: 'C', text: 'Altijd breed QRS nodig' },
          { letter: 'D', text: 'Smalle QRS-complexen kunnen passen' },
        ],
        correctAnswers: ['A', 'B', 'D'],
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.67,
        explanation: 'Juiste antwoorden: A, B en D. Puntenverdeling: 0,67 punt per juiste keuze, max 2.',
      },
      {
        id: '10c',
        type: 'meerkeuze',
        points: 2,
        question: `10c. (2p)
Wat is bij een instabiele patient met snelle AF de meest passende directe behandeling?`,
        options: [
          { letter: 'A', text: 'Synchroniseerde elektrische cardioversie' },
          { letter: 'B', text: 'Alleen afwachten' },
          { letter: 'C', text: 'Alleen statine' },
          { letter: 'D', text: 'Alleen leefstijdfolder' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
      {
        id: '10d',
        type: 'open',
        points: 3,
        question: `10d. (3p)
Noem 3 pijlers van de behandeling van atriumfibrilleren.
Maximaal 30 woorden.`,
        wordLimit: 30,
        rubric:
          '1 punt per juiste pijler, max 3. Goede antwoorden: trombo-embolisch risico/antistolling; frequentiecontrole; ritmecontrole; behandeling uitlokkende factoren/comorbiditeit.',
        modelAnswer:
          'Antistolling beoordelen, frequentie- of ritmecontrole kiezen en uitlokkende factoren of comorbiditeit behandelen.',
        explanation: '',
      },
      {
        id: '10e',
        type: 'open',
        points: 4,
        question: `10e. (4p)
Noem 4 leefstijl- of risicofactoren die AF kunnen onderhouden of verergeren.
Maximaal 50 woorden.`,
        wordLimit: 50,
        rubric:
          '1 punt per goed genoemde factor, max 4. Goede antwoorden: alcoholgebruik, obesitas, hypertensie, OSAS, hartfalen, ischemisch hartlijden, weinig beweging/leefstijlproblematiek.',
        modelAnswer:
          'Alcoholgebruik, obesitas, hypertensie en OSAS kunnen AF onderhouden. Ook andere cardiovasculaire comorbiditeit en ongunstige leefstijl spelen vaak mee.',
        explanation: '',
      },
    ],
  },
]
