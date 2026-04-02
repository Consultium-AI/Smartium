/** Blok 9 oefententamen 4 — casussen 1–3 · totaal examen 113 p */

const LAB2 = `Natrium | 137 mmol/L | 135–145
Kalium | 6.8 mmol/L | 3.5–5.0
Creatinine | 242 µmol/L | 60–110
Ureum | 19.4 mmol/L | 3.0–8.0
Bicarbonaat | 20 mmol/L | 22–29
Glucose | 6.2 mmol/L | 4.0–7.8`

export const blok9Tentamen4PartA = [
  {
    id: 'casus-1',
    title: 'Casus 1 – Dyspneu op de spoed: welk mechanisme?',
    totalPoints: 13,
    scenario: `Een 63-jarige man presenteert zich met acuut ontstane dyspneu en pijn rechts thoracaal sinds enkele uren. Hij heeft 10 dagen geleden een knieprothese gekregen. Bij onderzoek: ademfrequentie 30/min, pols 118/min, saturatie 89% bij kamerlucht, temperatuur 37,2°C. Auscultatie: geen duidelijke crepitaties. X-thorax toont geen infiltraten of pleuravocht.`,
    questions: [
      {
        id: '1a',
        type: 'meerkeuze',
        points: 2,
        question:
          '1a. Enkelvoudige meerkeuzevraag (2p)\nWelk mechanisme van respiratoire insufficiëntie past op basis van deze casus het best?',
        options: [
          { letter: 'A', text: 'Shunt' },
          { letter: 'B', text: 'Dode ruimte' },
          { letter: 'C', text: 'Diffusiestoornis' },
          { letter: 'D', text: 'Hyperventilatie zonder gaswisselingsprobleem' },
        ],
        correctAnswer: 'B',
        explanation: 'Bij longembolie is er ventilatie zonder adequate perfusie, dus dode ruimte.',
      },
      {
        id: '1b',
        type: 'open',
        points: 3,
        question:
          '1b. Open vraag (3p, max. 50 woorden)\nLeg uit waarom jouw antwoord bij 1a het best past bij deze casus.',
        wordLimit: 50,
        rubric:
          '1p: acute context passend bij longembolie; 1p: ventilatie zonder perfusie; 1p: koppeling aan dode ruimte.',
        modelAnswer:
          'De casus past bij longembolie: acute dyspneu, thoracale pijn en recente operatie. Daarbij is er ventilatie van alveoli terwijl de perfusie lokaal wegvalt. Dat geeft een doderuimteprobleem.',
        explanation: '',
      },
      {
        id: '1c',
        type: 'meerkeuze',
        points: 2,
        question:
          '1c. Enkelvoudige meerkeuzevraag (2p)\nWelk voorbeeld hoort klassiek bij een shuntmechanisme?',
        options: [
          { letter: 'A', text: 'Longembolie' },
          { letter: 'B', text: 'Pneumonie' },
          { letter: 'C', text: 'Asbestose' },
          { letter: 'D', text: 'Silicose' },
        ],
        correctAnswer: 'B',
        explanation: 'Pneumonie past klassiek bij shunt/VQ-mismatch.',
      },
      {
        id: '1d',
        type: 'koppelvraag',
        points: 4,
        question:
          '1d. Matrixvraag (4p)\nKoppel het mechanisme aan het best passende voorbeeld.\nDiffusiestoornis\nDode ruimte\nShunt\nHypoventilatie\nAntwoordopties:\nA. Pneumonie\nB. Longembolie\nC. Propofol/sedatie\nD. Longfibrose',
        items: ['Diffusiestoornis', 'Dode ruimte', 'Shunt', 'Hypoventilatie'],
        matchOptions: [
          { letter: 'A', text: 'Pneumonie' },
          { letter: 'B', text: 'Longembolie' },
          { letter: 'C', text: 'Propofol/sedatie' },
          { letter: 'D', text: 'Longfibrose' },
        ],
        correctMapping: { 0: 'D', 1: 'B', 2: 'A', 3: 'C' },
        explanation: '1p per juiste koppeling.',
      },
      {
        id: '1e',
        type: 'meerkeuze',
        points: 2,
        question:
          '1e. Enkelvoudige meerkeuzevraag (2p)\nBij welk mechanisme helpt extra zuurstof vaak relatief goed?',
        options: [
          { letter: 'A', text: 'Diffusiestoornis' },
          { letter: 'B', text: 'Volledige shunt' },
          { letter: 'C', text: 'Dode ruimte nooit' },
          { letter: 'D', text: 'Geen van bovenstaande' },
        ],
        correctAnswer: 'A',
        explanation:
          'Bij diffusiestoornis helpt extra zuurstof vaak relatief goed; bij volledige shunt veel minder.',
      },
    ],
  },
  {
    id: 'casus-2',
    title: 'Casus 2 – Hyperkaliëmie bij chronische nierschade',
    totalPoints: 12,
    scenario: `Een 74-jarige man met chronische nierschade en hartfalen wordt op de spoedeisende hulp gezien na controlelab. Medicatie: lisinopril, spironolacton, furosemide, metoprolol. Hij voelt zich wat slap, maar heeft geen thoracale pijn.
Laboratorium
${LAB2}
ECG-beschrijving: spitse T-toppen.`,
    questions: [
      {
        id: '2a',
        type: 'meerkeuze',
        points: 2,
        question:
          '2a. Enkelvoudige meerkeuzevraag (2p)\nWat is in deze situatie de belangrijkste acute bedreiging?',
        options: [
          { letter: 'A', text: 'Nefrotisch syndroom' },
          { letter: 'B', text: 'Hartritmestoornissen' },
          { letter: 'C', text: 'Pleurale infectie' },
          { letter: 'D', text: 'Hypertensieve encefalopathie' },
        ],
        correctAnswer: 'B',
        explanation: 'Het grootste acute gevaar van ernstige hyperkaliëmie zijn ritmestoornissen.',
      },
      {
        id: '2b',
        type: 'meerkeuze',
        points: 2,
        question:
          '2b. Enkelvoudige meerkeuzevraag (2p)\nWat is de meest logische eerste acute medicamenteuze stap?',
        options: [
          { letter: 'A', text: 'Natriumbicarbonaat als enige therapie' },
          { letter: 'B', text: 'Calciumgluconaat' },
          { letter: 'C', text: 'Direct ACE-remmer ophogen' },
          { letter: 'D', text: 'Alleen dieetadvies' },
        ],
        correctAnswer: 'B',
        explanation: 'Dit stabiliseert het myocard snel.',
      },
      {
        id: '2c',
        type: 'meerdere_antwoorden',
        points: 3,
        question:
          '2c. Meerkeuzevraag, meerdere antwoorden mogelijk (3p)\nWelke stappen passen goed in de acute behandeling van ernstige hyperkaliëmie?',
        options: [
          { letter: 'A', text: 'Hartritmebewaking' },
          { letter: 'B', text: 'Insuline met glucose' },
          { letter: 'C', text: 'Overweeg dialyse bij onvoldoende diurese of ernstige nierfunctiestoornis' },
          { letter: 'D', text: 'Altijd direct alle RAAS-remming definitief staken' },
          { letter: 'E', text: 'Eerst zoeken naar de oorzaak, maar het myocard niet acuut beschermen' },
        ],
        correctAnswers: ['A', 'B', 'C'],
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 1,
        explanation:
          'Juiste antwoorden: A, B, C. 1p per juiste optie, geen negatieve punten.',
      },
      {
        id: '2d',
        type: 'open',
        points: 3,
        question:
          '2d. Open vraag (3p, max. 50 woorden)\nWaarom is “direct de RAAS-remmer stoppen” volgens de stof niet altijd de beste langetermijnreactie bij hyperkaliëmie?',
        wordLimit: 50,
        rubric:
          '1p: niet reflexmatig direct stoppen de voorkeur; 1p: eerst andere oorzaken/maatregelen; 1p: nadeel onderbehandeling bij sterke indicatie.',
        modelAnswer:
          'De stof benadrukt dat RAAS-remming niet reflexmatig direct moet worden gestopt. Eerst kijk je naar andere medicatie, dieet en aanvullende maatregelen zoals diuretica of kaliumbinders. Anders raken patiënten met een sterke indicatie onderbehandeld.',
        explanation: '',
      },
      {
        id: '2e',
        type: 'meerkeuze',
        points: 2,
        question:
          '2e. Enkelvoudige meerkeuzevraag (2p)\nWelke valkuil moet je bij een verhoogde kaliumwaarde altijd overwegen?',
        options: [
          { letter: 'A', text: 'Pseudohyperkaliëmie' },
          { letter: 'B', text: 'Pseudohyponatriëmie' },
          { letter: 'C', text: 'Pseudoproteïnurie' },
          { letter: 'D', text: 'Pseudonefrotisch syndroom' },
        ],
        correctAnswer: 'A',
        explanation: 'Altijd overwegen bij een verhoogde kaliumwaarde.',
      },
    ],
  },
  {
    id: 'casus-3',
    title: 'Casus 3 – Longkanker: stadiëring via beeldvorming',
    totalPoints: 13,
    scenario: `Een 68-jarige man met forse rookanamnese ondergaat CT en PET/CT wegens een verdachte longafwijking.
Beschreven beeldvraag
CT-thorax toont een spiculaire massa van 7,4 cm in de rechter bovenkwab met doorgroei richting mediastinum. Er zijn FDG-avide ipsilaterale mediastinale en subcarinale klieren. Daarnaast is er een FDG-avide afwijking in de contralaterale long. Er zijn geen lever- of bijnierafwijkingen beschreven.`,
    questions: [
      {
        id: '3a',
        type: 'meerkeuze',
        points: 2,
        question:
          '3a. Enkelvoudige meerkeuzevraag (2p)\nWelk maligne beeldkenmerk wordt in de casus expliciet genoemd?',
        options: [
          { letter: 'A', text: 'Afgeplatte costofrenische hoek' },
          { letter: 'B', text: 'Spiculae' },
          { letter: 'C', text: 'Lucht-vloeistofspiegel' },
          { letter: 'D', text: 'Ground glass zonder solide component' },
        ],
        correctAnswer: 'B',
        explanation: 'Expliciet maligne beeldkenmerk.',
      },
      {
        id: '3b',
        type: 'open',
        points: 4,
        question:
          '3b. Open vraag (4p, max. 100 woorden)\nBepaal de meest waarschijnlijke globale TNM-classificatie op basis van de beschreven beeldvorming en licht kort toe.',
        wordLimit: 100,
        rubric: '1p: T4; 1p: N2; 1p: M1a; 1p: korte juiste toelichting.',
        modelAnswer:
          'Meest waarschijnlijk: T4N2M1a. T4 omdat de tumor >7 cm is en doorgroei richting mediastinum heeft. N2 door ipsilaterale mediastinale en subcarinale klieren. M1a omdat er een afwijking in de contralaterale long is.',
        explanation: '',
      },
      {
        id: '3c',
        type: 'meerkeuze',
        points: 2,
        question:
          '3c. Enkelvoudige meerkeuzevraag (2p)\nWat is de grootste meerwaarde van PET/CT ten opzichte van alleen CT?',
        options: [
          { letter: 'A', text: 'PET/CT vervangt altijd weefseldiagnostiek' },
          { letter: 'B', text: 'PET/CT laat metabole activiteit zien naast anatomie' },
          { letter: 'C', text: 'PET/CT toont geen fout-positieven' },
          { letter: 'D', text: 'PET/CT is beter dan MRI voor hersenmetastasen' },
        ],
        correctAnswer: 'B',
        explanation: '',
      },
      {
        id: '3d',
        type: 'meerdere_antwoorden',
        points: 3,
        question:
          '3d. Meerkeuzevraag, meerdere antwoorden mogelijk (3p)\nWelke uitspraken over PET/CT zijn correct?',
        options: [
          { letter: 'A', text: 'PET/CT kan fout-positief zijn bij infectie of ontsteking' },
          { letter: 'B', text: 'Kleine metastasen kunnen fout-negatief zijn' },
          { letter: 'C', text: 'Hersenmetastasen zijn op PET altijd goed zichtbaar' },
          { letter: 'D', text: 'Bij twijfel over klieren kan EBUS nuttig zijn' },
          { letter: 'E', text: 'CT geeft geen informatie over grootte of invasie' },
        ],
        correctAnswers: ['A', 'B', 'D'],
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 1,
        explanation: 'Juiste antwoorden: A, B, D. 1p per juiste optie.',
      },
      {
        id: '3e',
        type: 'meerkeuze',
        points: 2,
        question:
          '3e. Enkelvoudige meerkeuzevraag (2p)\nWelke techniek is vooral geschikt voor het beoordelen en aanprikken van mediastinale klieren rond trachea en bronchiën?',
        options: [
          { letter: 'A', text: 'EBUS/EUS' },
          { letter: 'B', text: 'Urinecytologie' },
          { letter: 'C', text: 'Duplex nierarteriën' },
          { letter: 'D', text: 'Rectoscopie' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
    ],
  },
]
