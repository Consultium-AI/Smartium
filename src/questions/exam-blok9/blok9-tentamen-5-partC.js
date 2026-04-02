/** Blok 9 oefententamen 5 — casussen 8–10 */

const GAS8 = `Parameter | Uitslag | Referentie
pH | 7,31 | 7,35–7,45
pCO2 | 4,9 kPa | 4,7–6,0
pO2 | laag | —
HCO3- | 18 mmol/L | 22–29
Lactaat | 5,2 mmol/L | <2,0`

const PLEUR9 = `Parameter | Uitslag
Pleuravocht-eiwit | 41 g/L
Serum-eiwit | 62 g/L
Pleuravocht-LDH | 480 U/L
Serum-LDH | 230 U/L
Bovengrens normaal serum-LDH | 240 U/L`

const ORDER_8D = [
  'Stabiliseren van luchtweg/ademhaling/circulatie',
  'Oorzaakgerichte behandeling starten',
  'Verdere interpretatie en vervolgdifferentiatie',
]

export const blok9Tentamen5PartC = [
  {
    id: 'casus-8',
    title: 'Casus 8 – Respiratoire insufficiëntie en shock',
    totalPoints: 14,
    scenario: `Een 70-jarige man wordt opgenomen met ernstige dyspneu en sufheid. Hij heeft een pneumonie. De saturatie is 84% aan kamerlucht, ademfrequentie 34/min, pols 124/min en bloeddruk 86/54 mmHg.
Bloedgas
${GAS8}
Figuur 3 – Schematische beeldvraag
Schema-beschrijving: alveoli met wel perfusie maar zeer slechte ventilatie.`,
    questions: [
      {
        id: '8a',
        type: 'meerkeuze',
        points: 2,
        question: `8a. (2p)
Welke vorm van gaswisselingsprobleem past het best bij de figuur?`,
        options: [
          { letter: 'A', text: 'Shunt' },
          { letter: 'B', text: 'Dode ruimte' },
          { letter: 'C', text: 'Hyperventilatie zonder V/Q-probleem' },
          { letter: 'D', text: 'Alleen psychogene dyspneu' },
        ],
        correctAnswer: 'A',
        explanation: 'Wel perfusie maar slechte/geen ventilatie past bij shunt.',
      },
      {
        id: '8b',
        type: 'meerkeuze',
        points: 2,
        question: `8b. (2p)
Waarom is deze patiënt waarschijnlijk circulatoir bedreigd?`,
        options: [
          { letter: 'A', text: 'Alleen omdat hij koorts heeft' },
          { letter: 'B', text: 'Hypotensie en verhoogd lactaat passen bij gestoorde weefselperfusie' },
          { letter: 'C', text: 'Alleen omdat zijn creatinine onbekend is' },
          { letter: 'D', text: 'Alleen omdat hij man is' },
        ],
        correctAnswer: 'B',
        explanation: '',
      },
      {
        id: '8c',
        type: 'open',
        points: 3,
        question: `8c. (3p)
Welke 3 ABCDE-prioriteiten hebben hier de meeste urgentie?
Maximaal 50 woorden.`,
        wordLimit: 50,
        rubric:
          '1 punt per goed ABCDE-prioriteit, max 3. Goede antwoorden: luchtweg/ademhaling stabiliseren; zuurstof/ventilatoire ondersteuning; circulatie herstellen/vocht/vasopressoren afhankelijk context; monitoring vitale functies; sepsis-/pneumoniebehandeling vroeg starten.',
        modelAnswer:
          'Prioriteit hebben ademhaling en oxygenatie, circulatoire stabilisatie bij hypotensie en snelle monitoring/ABCDE-herbeoordeling. Daarna moet oorzaakgerichte behandeling van de pneumonie direct worden gestart.',
        explanation: '',
      },
      {
        id: '8d',
        type: 'beeldvraag',
        points: 3,
        question: `8d. (3p)
Welke volgorde van handelen is het meest logisch?
Stabiliseren van luchtweg/ademhaling/circulatie
Oorzaakgerichte behandeling starten
Verdere interpretatie en vervolgdifferentiatie`,
        gradingMethod: 'order',
        orderIntro: 'Meest logische volgorde (1 = eerste, 3 = laatste):',
        orderOptions: [...ORDER_8D],
        correctOrder: [...ORDER_8D],
        expectedAnswer: '1 → 2 → 3',
        rubric: 'Alleen volledig juiste volgorde = 3p.',
        modelAnswer: 'Antwoord: 1 → 2 → 3',
        explanation: '',
      },
      {
        id: '8e',
        type: 'open',
        points: 4,
        question: `8e. (4p)
Beschrijf in hoofdlijnen waarom een pneumonie hypoxemie kan geven.
Maximaal 80 woorden.`,
        wordLimit: 80,
        rubric:
          '1p alveoli slecht geventileerd; 1p perfusie blijft relatief aanwezig; 1p V/Q-mismatch of shunt benoemen; 1p koppeling aan hypoxemie.',
        modelAnswer:
          'Bij pneumonie zijn delen van de long slecht geventileerd door inflammatie en vulling van alveoli, terwijl perfusie relatief blijft bestaan. Daardoor ontstaat V/Q-mismatch of zelfs shunt, waardoor zuurstofopname afneemt en hypoxemie ontstaat.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-9',
    title: 'Casus 9 – Longkanker en pleuravocht',
    totalPoints: 14,
    scenario: `Een 68-jarige man met 50 pack years presenteert zich met gewichtsverlies, hemoptoë en aanhoudende hoest. De CT-thorax toont een centrale pulmonale massa met mediastinale klieren. Er is ook pleuravocht.
Figuur 4 – Beeldvraag
CT-beschrijving: centrale massa, verdachte mediastinale lymfeklieren, rechts pleuravocht.
Pleuravochtanalyse
${PLEUR9}`,
    questions: [
      {
        id: '9a',
        type: 'meerkeuze',
        points: 2,
        question: `9a. (2p)
Wat is de meest waarschijnlijke hoofddiagnose?`,
        options: [
          { letter: 'A', text: 'Longcarcinoom' },
          { letter: 'B', text: 'Astma' },
          { letter: 'C', text: 'Onschuldige virale bronchitis' },
          { letter: 'D', text: 'Geïsoleerde sinusitis' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
      {
        id: '9b',
        type: 'meerkeuze',
        points: 2,
        question: `9b. (2p)
Welk type pleuravocht is hier het meest waarschijnlijk?`,
        options: [
          { letter: 'A', text: 'Transsudaat' },
          { letter: 'B', text: 'Exsudaat' },
          { letter: 'C', text: 'Niet te classificeren' },
          { letter: 'D', text: 'Pseudohyponatriëmie' },
        ],
        correctAnswer: 'B',
        explanation:
          'eiwitratio = 41/62 = 0,66 > 0,5; LDH-ratio = 480/230 = 2,09 > 0,6; pleuravocht-LDH > 2/3 bovengrens normaal serum-LDH. Dus exsudaat.',
      },
      {
        id: '9c',
        type: 'open',
        points: 3,
        question: `9c. (3p)
Welke 3 klachten of kenmerken passen goed bij longkanker?
Maximaal 40 woorden.`,
        wordLimit: 40,
        rubric:
          '1 punt per goed kenmerk, max 3. Goede kenmerken: hoesten; hemoptoë; gewichtsverlies; dyspneu; thoracale pijn; rookanamnese als risicofactor.',
        modelAnswer:
          'Typische kenmerken zijn hemoptoë, gewichtsverlies en aanhoudend hoesten. Ook dyspneu en een forse rookanamnese passen sterk bij longkanker.',
        explanation: '',
      },
      {
        id: '9d',
        type: 'meerdere_antwoorden',
        points: 3,
        question: `9d. (3p)
Welke onderzoeken of disciplines spelen een belangrijke rol in de verdere diagnostische route?
Meerdere antwoorden mogelijk.`,
        options: [
          { letter: 'A', text: 'Weefseldiagnostiek / biopt' },
          { letter: 'B', text: 'Pathologie' },
          { letter: 'C', text: 'PET-CT of verdere stadiëring' },
          { letter: 'D', text: 'Alleen bloeddrukmeting is voldoende' },
          { letter: 'E', text: 'Longarts / MDO' },
        ],
        correctAnswers: ['A', 'B', 'C', 'E'],
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.75,
        explanation:
          'Juiste antwoorden: A, B, C en E. Puntenverdeling: 0,75 punt per juiste keuze, max 3.',
      },
      {
        id: '9e',
        type: 'open',
        points: 4,
        question: `9e. (4p)
Leg in hoofdlijnen uit waar T, N en M in de TNM-classificatie voor staan.
Maximaal 60 woorden.`,
        wordLimit: 60,
        rubric:
          '1p T goed; 1p N goed; 1p M goed; 1p noemen dat dit stadium/behandeling/prognose bepaalt.',
        modelAnswer:
          'T staat voor grootte en lokale uitbreiding van de primaire tumor. N staat voor regionale lymfeklierbetrokkenheid. M staat voor metastasen op afstand. Samen bepalen deze componenten het stadium en beïnvloeden ze behandeling en prognose.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-10',
    title: 'Casus 10 – Atriumfibrilleren en ECG',
    totalPoints: 14,
    scenario: `Een 69-jarige man presenteert zich met hartkloppingen en vermoeidheid. Hij is hemodynamisch stabiel. Op het ECG zijn geen duidelijke P-toppen zichtbaar, de RR-intervallen zijn onregelmatig en de QRS-complexen zijn smal.
Figuur 5 – Beeldvraag
ECG-beschrijving: onregelmatig-irregulair ritme zonder duidelijke P-toppen.`,
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
          { letter: 'C', text: 'Volledig AV-blok' },
          { letter: 'D', text: 'Ventrikelfibrilleren' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
      {
        id: '10b',
        type: 'meerdere_antwoorden',
        points: 3,
        question: `10b. (3p)
Welke kenmerken ondersteunen deze diagnose?
Meerdere antwoorden mogelijk.`,
        options: [
          { letter: 'A', text: 'Geen duidelijke P-toppen' },
          { letter: 'B', text: 'Onregelmatig-irregulaire RR-intervallen' },
          { letter: 'C', text: 'Smalle QRS-complexen kunnen passen' },
          { letter: 'D', text: 'Altijd regelmatige frequentie' },
          { letter: 'E', text: 'Volledig iso-elektrisch ECG' },
        ],
        correctAnswers: ['A', 'B', 'C'],
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 1,
        explanation:
          'Juiste antwoorden: A, B en C. Puntenverdeling: 1 punt per juiste keuze, max 3.',
      },
      {
        id: '10c',
        type: 'meerkeuze',
        points: 2,
        question: `10c. (2p)
Wat is de directe voorkeursbehandeling bij een instabiele patiënt met snelle AF?`,
        options: [
          { letter: 'A', text: 'Synchroniseerde elektrische cardioversie' },
          { letter: 'B', text: 'Alleen leefstijladvies' },
          { letter: 'C', text: 'Alleen een thoraxfoto' },
          { letter: 'D', text: 'Geen acute behandeling nodig' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
      {
        id: '10d',
        type: 'open',
        points: 3,
        question: `10d. (3p)
Noem 3 pijlers van de langetermijnaanpak van atriumfibrilleren.
Maximaal 40 woorden.`,
        wordLimit: 40,
        rubric:
          '1 punt per juiste pijler, max 3. Goede pijlers: trombo-embolisch risico / antistolling; frequentiecontrole; ritmecontrole; aanpak uitlokkende factoren/comorbiditeit.',
        modelAnswer:
          'Belangrijke pijlers zijn beoordeling van antistolling, keuze voor frequentie- of ritmecontrole en behandeling van uitlokkende factoren of comorbiditeit.',
        explanation: '',
      },
      {
        id: '10e',
        type: 'open',
        points: 4,
        question: `10e. (4p)
Noem 4 factoren of comorbiditeiten die AF kunnen onderhouden of verergeren.
Maximaal 50 woorden.`,
        wordLimit: 50,
        rubric:
          '1 punt per goed genoemde factor, max 4. Goede factoren: hypertensie; obesitas; alcoholgebruik; OSAS; hartfalen; ischemisch hartlijden; andere cardiovasculaire comorbiditeit; leefstijlproblematiek.',
        modelAnswer:
          'AF kan worden onderhouden door hypertensie, obesitas, alcoholgebruik en OSAS. Ook hartfalen en ischemisch hartlijden kunnen bijdragen.',
        explanation: '',
      },
    ],
  },
]
