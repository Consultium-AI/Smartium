/** Blok 9 oefententamen 3 — casussen 9–10 */

const PLEURA9 = `Eiwit | 38 g/L | 62 g/L | —
LDH | 310 U/L | 420 U/L | bovengrens serum-LDH 250 U/L
Glucose | 5.0 mmol/L | 6.2 mmol/L | —
Cytologie | nog niet bekend | — | —`

export const blok9Tentamen3PartD = [
  {
    id: 'casus-9',
    title: 'Casus 9 – Pleuravocht op de longafdeling',
    totalPoints: 13,
    scenario: `Een 67-jarige vrouw met dyspneu en drukkend gevoel rechts thoracaal wordt opgenomen. X-thorax toont een rechtszijdig pleuravocht. Bij onderzoek: verminderd ademgeruis rechts basaal en gedempte percussie.
Pleuravochtanalyse
${PLEURA9}`,
    questions: [
      {
        id: '9a',
        type: 'meerkeuze',
        points: 2,
        question:
          '9a. Enkelvoudige meerkeuzevraag (2p)\nWelk lichamelijk onderzoeksbeeld past het best bij pleuravocht?',
        options: [
          { letter: 'A', text: 'Versterkt ademgeruis en hypersonore percussie' },
          { letter: 'B', text: 'Verminderd ademgeruis en gedempte percussie' },
          { letter: 'C', text: 'Stridor en inspiratoire piepen' },
          { letter: 'D', text: 'Normaal ademgeruis en tympanie' },
        ],
        correctAnswer: 'B',
        explanation: '',
      },
      {
        id: '9b',
        type: 'meerkeuze',
        points: 2,
        question:
          '9b. Enkelvoudige meerkeuzevraag (2p)\nIs hier op basis van de Light-criteria het meest waarschijnlijk sprake van een transsudaat of exsudaat?',
        options: [
          { letter: 'A', text: 'Transsudaat' },
          { letter: 'B', text: 'Exsudaat' },
          { letter: 'C', text: 'Niet te beoordelen' },
          { letter: 'D', text: 'Pseudopleuravocht' },
        ],
        correctAnswer: 'B',
        explanation: '',
      },
      {
        id: '9c',
        type: 'open',
        points: 4,
        question:
          '9c. Open vraag (4p, max. 100 woorden)\nLaat met de Light-criteria zien hoe je tot je antwoord bij 9b komt.',
        wordLimit: 100,
        rubric:
          '1p correcte eiwitratio; 1p correcte LDH-ratio; 1p LDH-afkapwaarde t.o.v. 2/3 serum-bovengrens; 1p conclusie exsudaat.',
        modelAnswer:
          'eiwitratio = 38 / 62 = 0,61 → positief; LDH-ratio = 310 / 420 = 0,74 → positief; 2/3 van 250 = 167; pleuravocht-LDH 310 > 167 → positief. Aan meerdere Light-criteria voldaan → exsudaat.',
        explanation: '',
      },
      {
        id: '9d',
        type: 'meerdere_antwoorden',
        points: 3,
        question:
          '9d. Meerkeuzevraag, meerdere antwoorden mogelijk (3p)\nWelke aandoeningen passen relatief vaak bij een exsudatief pleuravocht?',
        options: [
          { letter: 'A', text: 'Maligniteit' },
          { letter: 'B', text: 'Infectie' },
          { letter: 'C', text: 'Hartfalen' },
          { letter: 'D', text: 'Reumatoïde artritis' },
          { letter: 'E', text: 'Hypoalbuminemie zonder pleurale ontsteking' },
        ],
        correctAnswers: ['A', 'B', 'D'],
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 1,
        explanation: 'Juiste antwoorden: A, B, D. 1p per juiste optie. C en E fout.',
      },
      {
        id: '9e',
        type: 'meerkeuze',
        points: 2,
        question:
          '9e. Enkelvoudige meerkeuzevraag (2p)\nWat is een belangrijk aandachtspunt bij een eenmalige drainage van pleuravocht?',
        options: [
          { letter: 'A', text: 'Er mag altijd onbeperkt vocht worden afgezogen' },
          { letter: 'B', text: 'Meer dan ongeveer 1,5 liter ineens verhoogt het risico op re-expansie-oedeem' },
          { letter: 'C', text: 'Pleuravocht mag alleen chirurgisch worden verwijderd' },
          { letter: 'D', text: 'Drainage heeft nooit diagnostische waarde' },
        ],
        correctAnswer: 'B',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-10',
    title: 'Casus 10 – Longkanker: verdenking, stadiëring en beleid',
    totalPoints: 15,
    scenario: `Een 66-jarige man, 45 pack years, presenteert zich met hoesten, 7 kg gewichtsverlies, hemoptoë en sinds enkele weken heesheid. Op de X-thorax is een verdachte afwijking links boven te zien.
Figuur 1 – beschreven beeldvraag
CT-thorax toont een spiculaire solide massa van 4,6 cm in de linker bovenkwab, met pleurale intrekking. Er zijn vergrote ipsilaterale mediastinale en subcarinale lymfeklieren. PET-CT toont sterke FDG-opname in de tumor en in deze klieren. Er is één FDG-avide leverlaesie passend bij metastase. Geen hersenbeeldvorming verricht.`,
    questions: [
      {
        id: '10a',
        type: 'meerkeuze',
        points: 2,
        question:
          '10a. Enkelvoudige meerkeuzevraag (2p)\nWelke combinatie van symptomen uit de casus past goed bij een primaire longtumor?',
        options: [
          { letter: 'A', text: 'Hoesten, gewichtsverlies en hemoptoë' },
          { letter: 'B', text: 'Alleen polyurie en polydipsie' },
          { letter: 'C', text: 'Alleen icterus en melena' },
          { letter: 'D', text: 'Alleen diarree zonder respiratoire klachten' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
      {
        id: '10b',
        type: 'open',
        points: 4,
        question:
          '10b. Open vraag (4p, max. 100 woorden)\nBepaal op basis van de beschreven beeldvorming het meest waarschijnlijke globale TNM-stadium en licht je redenering kort toe.',
        wordLimit: 100,
        rubric:
          '1p T2b (4,6 cm); 1p N2 ipsilateraal mediastinaal/subcarinaal; 1p M1b levermetastase; 1p globaal stadium IV.',
        modelAnswer:
          'Meest waarschijnlijk: T2bN2M1b, dus globaal stadium IV. T2b omdat de tumor 4,6 cm is. N2 door ipsilaterale mediastinale en subcarinale lymfeklieren. M1b door één metastase op afstand in de lever.',
        explanation: '',
      },
      {
        id: '10c',
        type: 'meerdere_antwoorden',
        points: 3,
        question:
          '10c. Meerkeuzevraag, meerdere antwoorden mogelijk (3p)\nWelke kenmerken maken een laesie op CT verdachter voor maligniteit?',
        options: [
          { letter: 'A', text: 'Spiculae' },
          { letter: 'B', text: 'Cavitatie/centrale necrose' },
          { letter: 'C', text: 'Pleurale intrekking' },
          { letter: 'D', text: 'Botdestructie bij perifere tumor' },
          { letter: 'E', text: 'Volledig gladde, altijd benigne begrenzing bewijst maligniteit' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.75,
        explanation:
          'Juiste antwoorden: A, B, C, D. 0,75p per juiste optie. E fout.',
      },
      {
        id: '10d',
        type: 'meerkeuze',
        points: 2,
        question:
          '10d. Enkelvoudige meerkeuzevraag (2p)\nWelke weefseldiagnostische techniek is vooral geschikt om verdachte mediastinale klieren rond trachea en bronchiën te beoordelen en aan te prikken?',
        options: [
          { letter: 'A', text: 'EBUS/EUS' },
          { letter: 'B', text: 'Urinekweek' },
          { letter: 'C', text: 'Colonoscopie' },
          { letter: 'D', text: 'Duplex van de nierarteriën' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
      {
        id: '10e',
        type: 'meerkeuze',
        points: 2,
        question:
          '10e. Enkelvoudige meerkeuzevraag (2p)\nWelke uitspraak over PET-CT is het meest correct?',
        options: [
          { letter: 'A', text: 'Positieve FDG-opname bewijst altijd maligniteit' },
          { letter: 'B', text: 'PET-CT is volledig ongeschikt voor stadiëring' },
          { letter: 'C', text: 'PET-CT voegt metabole informatie toe, maar kent ook fout-positieven en fout-negatieven' },
          { letter: 'D', text: 'PET-CT vervangt altijd weefseldiagnostiek' },
        ],
        correctAnswer: 'C',
        explanation: '',
      },
      {
        id: '10f',
        type: 'meerkeuze',
        points: 2,
        question:
          '10f. Enkelvoudige meerkeuzevraag (2p)\nWelk paraneoplastisch syndroom is klassiek geassocieerd met kleincellig longcarcinoom?',
        options: [
          { letter: 'A', text: 'SIADH' },
          { letter: 'B', text: 'Graves' },
          { letter: 'C', text: 'Addison' },
          { letter: 'D', text: 'Diabetes insipidus' },
        ],
        correctAnswer: 'A',
        explanation: 'Klassiek paraneoplastisch bij kleincellig longcarcinoom.',
      },
    ],
  },
]
