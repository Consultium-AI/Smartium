/** Blok 9 oefententamen 1 — casussen 4–6 */

const LAB_CASUS4 = `EAI rechts | 0,54
EAI links | 0,71
Teendruk rechts | 58 mmHg
Teendruk links | 76 mmHg`

const LAB_CASUS5 = `Natrium | 145 mmol/L | 135–145
Kalium | 2,8 mmol/L | 3,5–5,0
Chloride | 97 mmol/L | 98–107
Bicarbonaat | 31 mmol/L | 22–29
Creatinine | 74 µmol/L | 50–90
Glucose | 5,1 mmol/L | 4,0–7,8`

const LAB_CASUS6 = `Bloeddruk | 148/86 mmHg
LDL | 3,8 mmol/L
HbA1c | 61 mmol/mol
BMI | 31 kg/m²
Rust-ECG | geen acute ischemische afwijkingen`

export const blok9Tentamen1PartB = [
  {
    id: 'casus-4',
    title: 'Casus 4 – De vrouw die maar 20 meter kan lopen',
    totalPoints: 15,
    scenario: `Een 59-jarige vrouw rookt sinds haar 16e en heeft hypertensie en diabetes mellitus. Zij klaagt over pijn in beide kuiten, rechts erger dan links. De klachten ontstaan na korte loopafstanden en nemen af in rust. Er zijn geen ulcera. De voeten voelen koud aan. Er is geen duidelijke rustpijn in bed.
Aanvullend onderzoek
${LAB_CASUS4}`,
    questions: [
      {
        id: '4a',
        type: 'meerkeuze',
        points: 2,
        question: 'Welke klinische beschrijving past het best?',
        options: [
          { letter: 'A', text: 'Asymptomatisch perifeer arterieel vaatlijden' },
          { letter: 'B', text: 'Claudicatio intermittens' },
          { letter: 'C', text: 'Kritieke ischemie' },
          { letter: 'D', text: 'Acute arteriële afsluiting' },
        ],
        correctAnswer: 'B',
        explanation: 'Claudicatio intermittens.',
      },
      {
        id: '4b',
        type: 'open',
        points: 3,
        question:
          'Wat is de meest passende eerste niet-invasieve test bij verdenking op perifeer arterieel vaatlijden?\n Maximaal 40 woorden.',
        wordLimit: 40,
        rubric: '2p EAI/ABI noemen; 1p benoemen dat dit eerste niet-invasieve diagnostiek is.',
        modelAnswer:
          'De enkel-armindex is de meest passende eerste niet-invasieve test bij verdenking op perifeer arterieel vaatlijden.',
        explanation: 'Bij open vragen geldt: inhoudelijk gelijkwaardige formuleringen ook goed rekenen.',
      },
      {
        id: '4c',
        type: 'koppelvraag',
        points: 4,
        question:
          'Koppel elke bevinding aan de best passende klinische categorie. Gebruik elke categorie maximaal één keer.\nCategorieën\nClaudicatio intermittens\nKritieke ischemie\nAcute ischemie\nDiabetische voet met ischemische component\nBevindingen\n a. Pijn bij lopen na 50 meter, afname in rust\n b. Plotseling pijnlijk, bleek en koud been met uitval\n c. Ulcus met infectie, teendruk 10 mmHg\n d. Rustpijn/nachtpijn en niet-genezende wond',
        items: [
          'a. Pijn bij lopen na 50 meter, afname in rust',
          'b. Plotseling pijnlijk, bleek en koud been met uitval',
          'c. Ulcus met infectie, teendruk 10 mmHg',
          'd. Rustpijn/nachtpijn en niet-genezende wond',
        ],
        matchOptions: [
          { letter: 'A', text: 'Claudicatio intermittens' },
          { letter: 'B', text: 'Kritieke ischemie' },
          { letter: 'C', text: 'Acute ischemie' },
          { letter: 'D', text: 'Diabetische voet met ischemische component' },
        ],
        correctMapping: { 0: 'A', 1: 'C', 2: 'D', 3: 'B' },
        explanation: 'a→1 Claudicatio, b→3 Acute ischemie, c→4 Diabetische voet, d→2 Kritieke ischemie. 1 punt per juiste koppeling.',
      },
      {
        id: '4d',
        type: 'meerkeuze',
        points: 2,
        question: 'Wat is de belangrijkste pijler van conservatieve behandeling bij symptomatisch PAV?',
        options: [
          { letter: 'A', text: 'Bedrust' },
          { letter: 'B', text: 'Gesuperviseerde looptraining en risicofactorbehandeling' },
          { letter: 'C', text: 'Meteen een amputatie' },
          { letter: 'D', text: 'Uitsluitend pijnstilling' },
        ],
        correctAnswer: 'B',
        explanation: 'Gesuperviseerde looptraining en risicofactorbehandeling.',
      },
      {
        id: '4e',
        type: 'open',
        points: 4,
        question:
          'Noem 4 onderdelen van secundaire preventie/behandeling die je bij deze patiënt actief zou inzetten.\n Maximaal 100 woorden.',
        wordLimit: 100,
        rubric:
          '1 punt per goed onderdeel, max 4: o.a. stoppen roken; looptraining; statine; trombocytenaggregatieremming; diabetes; bloeddruk; leefstijl/gewicht; voetzorg.',
        modelAnswer:
          'Stoppen met roken, gesuperviseerde looptraining, intensieve cardiovasculaire risicoreductie met statine en bloeddrukbehandeling, en optimaliseren van diabetesregulatie. Daarnaast aandacht voor antitrombotisch beleid en goede voetcontrole.',
        explanation: 'Bij open vragen geldt: inhoudelijk gelijkwaardige formuleringen ook goed rekenen.',
      },
    ],
  },
  {
    id: 'casus-5',
    title: 'Casus 5 – Patiënt met hypertensie',
    totalPoints: 12,
    scenario: `Een 37-jarige vrouw wordt verwezen vanwege moeilijk instelbare hypertensie. Zij gebruikt amlodipine en hydrochloorthiazide. Haar bloeddruk is herhaaldelijk rond 176/108 mmHg. Zij heeft spierkrampen en af en toe hoofdpijn. In de familie komt nauwelijks hypertensie voor.
Laboratorium
${LAB_CASUS5}`,
    questions: [
      {
        id: '5a',
        type: 'meerkeuze',
        points: 2,
        question: 'Welke bevinding maakt een secundaire oorzaak het meest waarschijnlijk?',
        options: [
          { letter: 'A', text: 'Leeftijd 37 jaar met resistente hypertensie' },
          { letter: 'B', text: 'Alleen een systolische bloeddruk boven 140 mmHg' },
          { letter: 'C', text: 'Normale creatininewaarde' },
          { letter: 'D', text: 'Afwezigheid van diabetes mellitus' },
        ],
        correctAnswer: 'A',
        explanation: 'Leeftijd 37 jaar met resistente hypertensie.',
      },
      {
        id: '5b',
        type: 'meerdere_antwoorden',
        points: 3,
        question:
          'Welke bevindingen passen het best bij primair hyperaldosteronisme?\n Meerdere antwoorden mogelijk.',
        options: [
          { letter: 'A', text: 'Hypokaliëmie' },
          { letter: 'B', text: 'Hoge aldosteron-renine-ratio' },
          { letter: 'C', text: 'Metabole alkalose' },
          { letter: 'D', text: 'Sterk verhoogd TSH' },
          { letter: 'E', text: 'Jonge patiënt met hypertensie' },
        ],
        correctAnswers: ['A', 'B', 'C', 'E'],
        partialCreditNoWrong: true,
        pointsPerCorrect: 0.75,
        explanation:
          'A, B, C en E. 0,75 punt per juiste keuze, max 3. Fout TSH D aankruisen: 0 punten voor de vraag.',
      },
      {
        id: '5c',
        type: 'meerkeuze',
        points: 2,
        question: 'Wat is de meest passende volgende stap in de diagnostiek?',
        options: [
          { letter: 'A', text: 'Alleen een X-thorax' },
          { letter: 'B', text: 'Screening met aldosteron-renine-ratio' },
          { letter: 'C', text: 'Urine-antigeentest voor pneumokokken' },
          { letter: 'D', text: 'Direct starten met dialyse' },
        ],
        correctAnswer: 'B',
        explanation: 'Screening met aldosteron-renine-ratio.',
      },
      {
        id: '5d',
        type: 'open',
        points: 3,
        question:
          'Waarom is hydrochloorthiazide in deze casus geen logische voorkeurskeuze voor voortzetting zonder herbeoordeling?\n Maximaal 50 woorden.',
        wordLimit: 50,
        rubric:
          '1p thiazide verergert hypokaliëmie; 1p koppeling aan hyperaldosteronisme; 1p alkalose/renaal kaliumverlies.',
        modelAnswer:
          'Hydrochloorthiazide kan hypokaliëmie verergeren. Bij verdenking op primair hyperaldosteronisme is dat ongunstig, omdat er al renaal kaliumverlies en vaak metabole alkalose bestaan.',
        explanation: 'Bij open vragen geldt: inhoudelijk gelijkwaardige formuleringen ook goed rekenen.',
      },
      {
        id: '5e',
        type: 'meerkeuze',
        points: 2,
        question: 'Welke situatie past het best bij een hypertensief spoedgeval?',
        options: [
          { letter: 'A', text: 'Bloeddruk 186/112 mmHg zonder klachten' },
          { letter: 'B', text: 'Bloeddruk 178/104 mmHg met lichte spanningshoofdpijn' },
          { letter: 'C', text: 'Bloeddruk 224/132 mmHg met acuut visusverlies en neurologische symptomen' },
          { letter: 'D', text: 'Bloeddruk 168/96 mmHg bij gezonde 24-jarige sporter' },
        ],
        correctAnswer: 'C',
        explanation: 'Bloeddruk 224/132 mmHg met acuut visusverlies en neurologische symptomen.',
      },
    ],
  },
  {
    id: 'casus-6',
    title: 'Casus 6 – Volwassene met pijn op de borst',
    totalPoints: 13,
    scenario: `Een 58-jarige man komt op het spreekuur vanwege drukkende pijn op de borst bij traplopen. De klachten verdwijnen binnen enkele minuten in rust. Hij rookt, heeft diabetes mellitus type 2 en zijn vader kreeg op 54-jarige leeftijd een myocardinfarct. Hij heeft geen koorts en geen pleuritische pijn. In rust is hij klachtenvrij.
Overige gegevens
${LAB_CASUS6}`,
    questions: [
      {
        id: '6a',
        type: 'meerkeuze',
        points: 2,
        question: 'Wat is op basis van deze casus de meest waarschijnlijke werkdiagnose?',
        options: [
          { letter: 'A', text: 'Stabiele angina pectoris op basis van atherosclerose' },
          { letter: 'B', text: 'Longembolie' },
          { letter: 'C', text: 'Pneumothorax' },
          { letter: 'D', text: 'Acute pericarditis' },
        ],
        correctAnswer: 'A',
        explanation: 'Stabiele angina pectoris op basis van atherosclerose.',
      },
      {
        id: '6b',
        type: 'open',
        points: 3,
        question:
          'Noem 4 cardiovasculaire risicofactoren die in deze casus aanwezig zijn.\n Maximaal 50 woorden.',
        wordLimit: 50,
        rubric:
          '0,75 punt per juiste risicofactor, max 3: roken; DM; positieve familieanamnese vroege HVZ; hypertensie; obesitas; verhoogd LDL.',
        modelAnswer:
          'Roken, diabetes mellitus type 2, positieve familieanamnese voor vroege HVZ en obesitas. Ook de verhoogde bloeddruk en verhoogde LDL-waarde verhogen het cardiovasculaire risico.',
        explanation: 'Bij open vragen geldt: inhoudelijk gelijkwaardige formuleringen ook goed rekenen.',
      },
      {
        id: '6c',
        type: 'meerkeuze',
        points: 2,
        question: 'Welke uitspraak over CVRM is het meest juist?',
        options: [
          { letter: 'A', text: 'Alleen de LDL-waarde bepaalt het beleid' },
          { letter: 'B', text: 'Alleen bestaande ziekte telt; risicoschatting is verder niet relevant' },
          { letter: 'C', text: 'Het totale cardiovasculaire risico bepaalt mede of leefstijl alleen voldoende is of dat medicatie nodig is' },
          { letter: 'D', text: 'CVRM is niet relevant zolang iemand nog geen infarct heeft gehad' },
        ],
        correctAnswer: 'C',
        explanation:
          'Het totale cardiovasculaire risico bepaalt mede of leefstijl alleen voldoende is of dat medicatie nodig is.',
      },
      {
        id: '6d',
        type: 'meerkeuze',
        points: 2,
        question:
          'Wat is de meest passende vervolgstap bij verdenking op stabiel coronair lijden in deze setting?',
        options: [
          { letter: 'A', text: 'Geen aanvullend onderzoek, want het rust-ECG is normaal' },
          { letter: 'B', text: 'Passende niet-invasieve coronairdiagnostiek overwegen' },
          { letter: 'C', text: 'Meteen trombolyse' },
          { letter: 'D', text: 'Uitsluitend antibiotica starten' },
        ],
        correctAnswer: 'B',
        explanation: 'Passende niet-invasieve coronairdiagnostiek overwegen.',
      },
      {
        id: '6e',
        type: 'open',
        points: 4,
        question:
          'Formuleer een eerste behandelplan met aandacht voor leefstijl én medicamenteuze preventie.\n Maximaal 100 woorden.',
        wordLimit: 100,
        rubric:
          '1p leefstijl; 1p LDL/statine; 1p bloeddruk/diabetesoptimalisatie; 1p diagnostiek/follow-up.',
        modelAnswer:
          'Adviseer stoppen met roken, gewichtsreductie, meer bewegen en dieetverbetering. Start of intensiveer statinetherapie. Optimaliseer bloeddruk- en diabetesbehandeling. Zet passende niet-invasieve coronairdiagnostiek in en koppel vervolgbeleid aan de uitkomst en het totale CVRM-profiel.',
        explanation: 'Bij open vragen geldt: inhoudelijk gelijkwaardige formuleringen ook goed rekenen.',
      },
    ],
  },
]
