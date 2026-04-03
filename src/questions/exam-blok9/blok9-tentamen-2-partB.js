/** Blok 9 oefententamen 2 - casussen 4-6 */

const LAB5 = `Parameter | Uitslag | Referentie
Natrium | 144 mmol/L | 135-145
Kalium | 3,0 mmol/L | 3,5-5,0
Creatinine | 70 umol/L | 50-90
Bicarbonaat | 30 mmol/L | 22-29`

export const blok9Tentamen2PartB = [
  {
    id: 'casus-4',
    title: 'Casus 4 - Perifeer arterieel vaatlijden',
    totalPoints: 13,
    scenario: `Een 59-jarige man rookt al jarenlang en heeft hypertensie. Hij heeft pijn in het rechterbeen bij lopen. Na ongeveer 60 meter moet hij stilstaan. In rust zakt de pijn weg. De rechtervoet voelt kouder aan dan links.`,
    questions: [
      {
        id: '4a',
        type: 'meerkeuze',
        points: 2,
        question: `4a. (2p)
Welke diagnose past het best?`,
        options: [
          { letter: 'A', text: 'Claudicatio intermittens' },
          { letter: 'B', text: 'Acute arteriele afsluiting' },
          { letter: 'C', text: 'DVT' },
          { letter: 'D', text: 'Jichtaanval' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
      {
        id: '4b',
        type: 'meerkeuze',
        points: 2,
        question: `4b. (2p)
Waarom past pijn die optreedt na een vaste loopafstand goed bij PAV?`,
        options: [
          { letter: 'A', text: 'Omdat de zuurstofvraag stijgt terwijl de doorbloeding onvoldoende toeneemt' },
          { letter: 'B', text: 'Omdat een zenuw altijd precies na 60 meter geirriteerd raakt' },
          { letter: 'C', text: 'Omdat het vooral een infectieus proces is' },
          { letter: 'D', text: 'Omdat het altijd door veneuze stuwing komt' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
      {
        id: '4c',
        type: 'meerdere_antwoorden',
        points: 3,
        question: `4c. (3p)
Welke symptomen maken de situatie ernstiger dan gewone claudicatio?
Meerdere antwoorden mogelijk.`,
        options: [
          { letter: 'A', text: 'Rust- of nachtpijn' },
          { letter: 'B', text: 'Wonden of ulcera' },
          { letter: 'C', text: 'Koude voet' },
          { letter: 'D', text: 'Pijnloze zwelling van beide enkels' },
          { letter: 'E', text: 'Doofheid in rust' },
        ],
        correctAnswers: ['A', 'B', 'C'],
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 1,
        explanation:
          'Juiste antwoorden: A, B en C. Puntenverdeling: 1 punt per juiste keuze; foutieve extra keuzes leveren geen punten op.',
      },
      {
        id: '4d',
        type: 'meerkeuze',
        points: 2,
        question: `4d. (2p)
Wat is de meest passende eerste niet-invasieve test?`,
        options: [
          { letter: 'A', text: 'Enkel-armindex (EAI)' },
          { letter: 'B', text: 'Colonoscopie' },
          { letter: 'C', text: 'EEG' },
          { letter: 'D', text: 'Fundoscopie' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
      {
        id: '4e',
        type: 'open',
        points: 4,
        question: `4e. (4p)
Noem 4 onderdelen van basisbehandeling of risicoreductie bij PAV.
Maximaal 80 woorden.`,
        wordLimit: 80,
        rubric:
          '1 punt per goed onderdeel, max 4. Goede antwoorden: stoppen met roken; looptraining; bloeddrukbehandeling; statine; diabetes optimaliseren; trombocytenaggregatieremming in passende context; gewichtsreductie/leefstijl; voetzorg.',
        modelAnswer:
          'Stoppen met roken, gesuperviseerde looptraining, goede bloeddruk- en diabetesregulatie en behandeling van cardiovasculaire risicofactoren zoals met een statine.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-5',
    title: 'Casus 5 - Hypertensie',
    totalPoints: 12,
    scenario: `Een 34-jarige vrouw wordt verwezen vanwege herhaald gemeten bloeddrukwaarden rond 172/104 mmHg. Zij gebruikt nog geen antihypertensiva. In de familie komt weinig hypertensie voor. Ze vertelt dat de bloeddruk de afgelopen maanden vrij plotseling hoog is geworden.
Laboratorium
${LAB5}`,
    questions: [
      {
        id: '5a',
        type: 'meerkeuze',
        points: 2,
        question: `5a. (2p)
Wat maakt een secundaire oorzaak hier het meest waarschijnlijk?`,
        options: [
          { letter: 'A', text: 'Jonge leeftijd en plots ontstaan' },
          { letter: 'B', text: 'Alleen dat de patient vrouw is' },
          { letter: 'C', text: 'Alleen het ontbreken van nierfalen' },
          { letter: 'D', text: 'Alleen het normale creatinine' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
      {
        id: '5b',
        type: 'meerkeuze',
        points: 2,
        question: `5b. (2p)
Welke secundaire oorzaak past hier het best?`,
        options: [
          { letter: 'A', text: 'Primair hyperaldosteronisme' },
          { letter: 'B', text: 'Hyperthyreoidie is de enige mogelijkheid' },
          { letter: 'C', text: 'Alleen stress zonder verdere evaluatie' },
          { letter: 'D', text: 'Pleurale infectie' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
      {
        id: '5c',
        type: 'meerdere_antwoorden',
        points: 3,
        question: `5c. (3p)
Welke bevindingen passen bij primair hyperaldosteronisme?
Meerdere antwoorden mogelijk.`,
        options: [
          { letter: 'A', text: 'Hypertensie' },
          { letter: 'B', text: 'Hypokaliemie' },
          { letter: 'C', text: 'Vaak hoge aldosteron-renine-ratio' },
          { letter: 'D', text: 'Bradycardie als kernsymptoom' },
          { letter: 'E', text: 'Soms metabole alkalose' },
        ],
        correctAnswers: ['A', 'B', 'C', 'E'],
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.75,
        explanation: 'Juiste antwoorden: A, B, C en E. Puntenverdeling: 0,75 punt per juiste keuze, max 3.',
      },
      {
        id: '5d',
        type: 'open',
        points: 3,
        question: `5d. (3p)
Wat is het verschil tussen ernstige hypertensie en een hypertensief spoedgeval?
Maximaal 40 woorden.`,
        wordLimit: 40,
        rubric:
          '1p ernstige hypertensie zonder acute orgaanschade; 1p spoedgeval met acute orgaanschade; 1p voorbeeld van eindorgaanschade noemen.',
        modelAnswer:
          'Ernstige hypertensie betekent een hoge bloeddruk zonder acute eindorgaanschade. Een hypertensief spoedgeval is een ernstige bloeddrukstijging met acute schade aan bijvoorbeeld hersenen, hart, nieren of retina.',
        explanation: '',
      },
      {
        id: '5e',
        type: 'meerkeuze',
        points: 2,
        question: `5e. (2p)
Welke klacht past het meest bij een hypertensief spoedgeval?`,
        options: [
          { letter: 'A', text: 'Acute neurologische uitval' },
          { letter: 'B', text: 'Jarenlange lichte moeheid zonder andere symptomen' },
          { letter: 'C', text: 'Alleen dorst na sporten' },
          { letter: 'D', text: 'Jeukende huid zonder verdere afwijkingen' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-6',
    title: 'Casus 6 - Pijn op de borst en CVRM',
    totalPoints: 14,
    scenario: `Een 57-jarige man heeft drukkende pijn op de borst bij traplopen. In rust verdwijnen de klachten binnen enkele minuten. Hij rookt, heeft diabetes mellitus type 2 en obesitas. Zijn vader kreeg op 53-jarige leeftijd een myocardinfarct.`,
    questions: [
      {
        id: '6a',
        type: 'meerkeuze',
        points: 2,
        question: `6a. (2p)
Wat is de meest waarschijnlijke werkdiagnose?`,
        options: [
          { letter: 'A', text: 'Stabiele angina pectoris' },
          { letter: 'B', text: 'Acute appendicitis' },
          { letter: 'C', text: 'Pneumothorax' },
          { letter: 'D', text: 'Sepsis' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
      {
        id: '6b',
        type: 'meerdere_antwoorden',
        points: 3,
        question: `6b. (3p)
Welke factoren in deze casus verhogen het cardiovasculaire risico?
Meerdere antwoorden mogelijk.`,
        options: [
          { letter: 'A', text: 'Roken' },
          { letter: 'B', text: 'Diabetes mellitus' },
          { letter: 'C', text: 'Positieve familieanamnese voor vroege HVZ' },
          { letter: 'D', text: 'Obesitas' },
          { letter: 'E', text: 'Leeftijd 57 jaar' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D', 'E'],
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.6,
        explanation: 'Alle opties zijn juist. Puntenverdeling: 0,6 punt per juiste keuze, maximaal 3 punten.',
      },
      {
        id: '6c',
        type: 'meerkeuze',
        points: 2,
        question: `6c. (2p)
Wat betekent CVRM het best?`,
        options: [
          { letter: 'A', text: 'Alleen cholesterol verlagen' },
          { letter: 'B', text: 'Cardiovasculair risicomanagement' },
          { letter: 'C', text: 'Controle van veneuze refluxmechanismen' },
          { letter: 'D', text: 'Chronische volumeregulatie met medicatie' },
        ],
        correctAnswer: 'B',
        explanation: '',
      },
      {
        id: '6d',
        type: 'open',
        points: 3,
        question: `6d. (3p)
Waarom is het totale risicoprofiel belangrijker dan een losse waarde?
Maximaal 40 woorden.`,
        wordLimit: 40,
        rubric:
          '1p meerdere factoren samen; 1p een losse waarde is onvoldoende; 1p koppeling aan beleid/risicoschatting.',
        modelAnswer:
          'Cardiovasculair risico wordt bepaald door meerdere factoren samen. Een losse waarde, zoals alleen LDL of alleen bloeddruk, geeft minder goede informatie dan het totale risicoprofiel.',
        explanation: '',
      },
      {
        id: '6e',
        type: 'open',
        points: 4,
        question: `6e. (4p)
Noem 4 onderdelen van een passend eerste beleid.
Maximaal 80 woorden.`,
        wordLimit: 80,
        rubric:
          '1 punt per goed onderdeel, max 4. Goede antwoorden: stoppen met roken; gewichtsreductie/bewegen/dieet; bloeddruk optimaliseren; diabetesregulatie verbeteren; statine/lipidenverlaging; verdere niet-invasieve diagnostiek; leefstijl en follow-up.',
        modelAnswer:
          'Adviseer stoppen met roken, meer bewegen en gewichtsreductie. Optimaliseer diabetes en bloeddruk. Start of intensiveer lipidenverlagende behandeling. Verricht passende verdere coronairdiagnostiek.',
        explanation: '',
      },
    ],
  },
]
