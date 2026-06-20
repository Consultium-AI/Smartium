/** Blok 10 oefententamen 2 (Tentamen D) — casussen 3–4 · bron: VRAGEN + antwoordmodel (25 p totaal) */

const PANCREAS_ENZYME_CORRECT = [
  'Acinaire cellen scheiden enzymen uit in inactieve vorm',
  'Ductcellen voegen bicarbonaatrijke vloeistof toe',
  'Pancreassap komt in het duodenum',
  'Enteropeptidase activeert trypsinogeen tot trypsine',
  'Trypsine activeert andere proteasen',
]

const PANCREAS_ENZYME_SHUFFLED = [
  'Trypsine activeert andere proteasen',
  'Pancreassap komt in het duodenum',
  'Acinaire cellen scheiden enzymen uit in inactieve vorm',
  'Enteropeptidase activeert trypsinogeen tot trypsine',
  'Ductcellen voegen bicarbonaatrijke vloeistof toe',
]

export const blok10Tentamen2PartB = [
  {
    id: 'casus-3',
    title: 'Casus 3 – Exocriene pancreasfysiologie: acinaire cel, ductcel en enzymactivatie',
    totalPoints: 12,
    scenario:
      'Een docent bespreekt met studenten een patiënt met postprandiale buikklachten. Er zijn geen aanwijzingen voor acute pancreatitis: geen typische acute pijn, geen sterk verhoogde lipasewaarde en geen alarmsignalen. De casus wordt gebruikt om normale exocriene pancreasfysiologie te toetsen.',
    questions: [
      {
        id: '3a',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Wat is de belangrijkste functie van de acinaire pancreascel?',
        options: [
          { letter: 'A', text: 'Productie van verteringsenzymen en pro-enzymen' },
          { letter: 'B', text: 'Productie van galzouten' },
          { letter: 'C', text: 'Productie van intrinsic factor' },
          { letter: 'D', text: 'Productie van albumine' },
        ],
        correctAnswer: 'A',
        explanation: 'Acinaire cellen produceren verteringsenzymen en pro-enzymen.',
      },
      {
        id: '3b',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Wat is de belangrijkste functie van ductale epitheelcellen in de pancreas?',
        options: [
          { letter: 'A', text: 'Productie van bicarbonaatrijke, waterige secretie' },
          { letter: 'B', text: 'Productie van hemoglobine' },
          { letter: 'C', text: 'Productie van colonpoliepen' },
          { letter: 'D', text: 'Productie van maagzuur' },
        ],
        correctAnswer: 'A',
        explanation: 'Ductale epitheelcellen produceren bicarbonaatrijke, waterige secretie.',
      },
      {
        id: '3c',
        type: 'koppelvraag',
        points: 2.0,
        question: 'Vul de tabel aan.',
        items: [
          'Acinaire cel — belangrijkste product',
          'Acinaire cel — belangrijkste functie',
          'Ductale epitheelcel — belangrijkste product',
          'Ductale epitheelcel — belangrijkste functie',
          'Centroacinair/ductaal begin — belangrijkste product',
          'Centroacinair/ductaal begin — belangrijkste functie',
        ],
        matchOptions: [
          { letter: 'A', text: 'Verteringsenzymen/pro-enzymen' },
          { letter: 'B', text: 'Enzymatische vertering in het duodenum' },
          { letter: 'C', text: 'Bicarbonaatrijke vloeistof' },
          {
            letter: 'D',
            text: 'Neutraliseren van maagzuur en spoelen/transporteren van enzymen',
          },
          { letter: 'E', text: 'Water-, bicarbonaat- en ionenrijke secretie' },
          {
            letter: 'F',
            text: 'Begin van ductale secretie en transport richting duodenum',
          },
        ],
        correctMapping: { 0: 'A', 1: 'B', 2: 'C', 3: 'D', 4: 'E', 5: 'F' },
        explanation:
          'Acinaire cel → enzymen/vertering; ductcel → bicarbonaat/neutralisatie; centroacinair → begin ductale secretie.',
      },
      {
        id: '3d',
        type: 'meerdere_antwoorden',
        points: 2.0,
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.5,
        question:
          'Welke prikkels stimuleren de exocriene pancreas volgens de stof?\n\nLet op: meerdere antwoorden kunnen juist zijn.',
        options: [
          { letter: 'A', text: 'Secretine stimuleert bicarbonaatafgifte door ductcellen' },
          { letter: 'B', text: 'CCK stimuleert enzymsecretie door acini' },
          { letter: 'C', text: 'Nervus vagus draagt bij aan enzymproductie' },
          {
            letter: 'D',
            text: 'Vetzuren en aminozuren in het duodenum stimuleren entero-endocriene signalen',
          },
          { letter: 'E', text: 'FIT stimuleert trypsinogeenactivatie' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        explanation:
          'Secretine, CCK, vagus en entero-endocriene signalen stimuleren de exocriene pancreas.',
      },
      {
        id: '3e',
        type: 'beeldvraag',
        points: 2.0,
        question:
          'Zet de stappen van pancreasenzymsecretie en activatie in de juiste volgorde.\n\nStappen:\n• Trypsine activeert andere proteasen\n• Acinaire cellen scheiden enzymen uit in inactieve vorm\n• Pancreassap komt in het duodenum\n• Enteropeptidase activeert trypsinogeen tot trypsine\n• Ductcellen voegen bicarbonaatrijke vloeistof toe',
        gradingMethod: 'order',
        orderIntro: 'Juiste volgorde (1 = eerste stap):',
        orderOptions: [...PANCREAS_ENZYME_SHUFFLED],
        correctOrder: [...PANCREAS_ENZYME_CORRECT],
        expectedAnswer: '2 → 5 → 3 → 4 → 1',
        rubric: 'Alleen volledig juiste volgorde = 2p.',
        modelAnswer: '2 → 5 → 3 → 4 → 1',
        explanation:
          'Eerst zymogenen, dan bicarbonaat, duodenum, enteropeptidase/trypsine, daarna andere proteasen.',
      },
      {
        id: '3f',
        type: 'open',
        points: 1.0,
        question:
          'Leg in maximaal 50 woorden uit waarom het belangrijk is dat proteasen als zymogenen worden uitgescheiden.',
        wordLimit: 50,
        rubric:
          '0,5p voor voorkomen van autodigestie; 0,5p voor activatie pas in duodenum/door enteropeptidase.',
        modelAnswer:
          'Proteasen worden als inactieve zymogenen uitgescheiden om te voorkomen dat ze de pancreas zelf verteren. Pas in het duodenum activeert enteropeptidase trypsinogeen tot trypsine, waarna trypsine andere enzymen activeert.',
        explanation: 'Zymogenen voorkomen autodigestie; activatie pas in duodenum.',
      },
      {
        id: '3g',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Welke uitspraak over CCK is juist?',
        options: [
          {
            letter: 'A',
            text: 'CCK stimuleert enzymsecretie van de pancreas en contractie van de galblaas',
          },
          { letter: 'B', text: 'CCK remt altijd alle pancreasenzymen' },
          { letter: 'C', text: 'CCK is hetzelfde als FIT' },
          { letter: 'D', text: 'CCK wordt alleen door de nier gemaakt' },
        ],
        correctAnswer: 'A',
        explanation: 'CCK stimuleert enzymsecretie van de pancreas en contractie van de galblaas.',
      },
      {
        id: '3h',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Welke negatieve feedback past bij trypsine in het duodenum?',
        options: [
          {
            letter: 'A',
            text: 'Trypsine breekt factoren af die secretine- en CCK-afgifte stimuleren',
          },
          {
            letter: 'B',
            text: 'Trypsine stimuleert onbeperkt nieuwe enzymsecretie zonder remming',
          },
          { letter: 'C', text: 'Trypsine maakt direct coloncarcinoom' },
          { letter: 'D', text: 'Trypsine zet ethanol om in acetaldehyde' },
        ],
        correctAnswer: 'A',
        explanation: 'Trypsine breekt factoren af die secretine- en CCK-afgifte stimuleren.',
      },
      {
        id: '3i',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Welke histologische combinatie past het best bij pancreasweefsel?',
        options: [
          { letter: 'A', text: 'Acini, ducten en eilandjes van Langerhans' },
          { letter: 'B', text: 'Alleen galzouten en villi' },
          { letter: 'C', text: 'Alleen pariëtale cellen' },
          { letter: 'D', text: 'Alleen crypten van Lieberkühn zonder acini' },
        ],
        correctAnswer: 'A',
        explanation: 'Pancreasweefsel bevat acini, ducten en eilandjes van Langerhans.',
      },
    ],
  },
  {
    id: 'casus-4',
    title: 'Casus 4 – Diabetische gastroparese, refluxbevorderende factoren en maagmotiliteit',
    totalPoints: 13,
    scenario:
      'Een 56-jarige man met langdurige diabetes mellitus type 2 komt op de polikliniek met misselijkheid, snel vol zitten, opgeblazen gevoel en braken na maaltijden. Hij merkt dat zijn glucosewaarden wisselend zijn en dat eten soms lang blijft liggen. Daarnaast heeft hij soms branderige retrosternale klachten, vooral na grote maaltijden en als hij kort na het eten gaat liggen. Hij heeft geen progressieve dysfagie, geen hematemesis en geen gewichtsverlies. De arts denkt aan diabetische gastroparese met refluxachtige klachten.',
    questions: [
      {
        id: '4a',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Wat betekent gastroparese?',
        options: [
          { letter: 'A', text: 'Vertraagde maagontlediging' },
          { letter: 'B', text: 'Versnelde colonpassage' },
          { letter: 'C', text: 'Ontsteking van de galblaas' },
          { letter: 'D', text: 'Afwezigheid van maagzuur' },
        ],
        correctAnswer: 'A',
        explanation: 'Gastroparese betekent vertraagde maagontlediging.',
      },
      {
        id: '4b',
        type: 'meerdere_antwoorden',
        points: 2.0,
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.5,
        question:
          'Welke klachten passen bij diabetische gastroparese volgens de stof?\n\nLet op: meerdere antwoorden kunnen juist zijn.',
        options: [
          { letter: 'A', text: 'Misselijkheid' },
          { letter: 'B', text: 'Braken' },
          { letter: 'C', text: 'Vol gevoel in de maag' },
          { letter: 'D', text: 'Refluxklachten of zuurbranden' },
          { letter: 'E', text: 'Rectaal bloedverlies als standaardklacht' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        explanation:
          'Misselijkheid, braken, vol gevoel en refluxklachten passen bij diabetische gastroparese.',
      },
      {
        id: '4c',
        type: 'koppelvraag',
        points: 2.0,
        question: 'Vul de tabel aan.',
        items: [
          'Veel dorst en ontregelde glucose',
          'Misselijkheid en braken na maaltijden',
          'Vol gevoel in de maag',
          'Pijn bij eten en drinken met zuurbranden',
        ],
        matchOptions: [
          { letter: 'A', text: 'Diabetes/ontregelde glucosehuishouding' },
          { letter: 'B', text: 'Gastroparese/vertraagde maaglediging' },
          { letter: 'C', text: 'Maagretentie/gastroparese' },
          { letter: 'D', text: 'Refluxachtige klachten bij gastroparese' },
        ],
        correctMapping: { 0: 'A', 1: 'B', 2: 'C', 3: 'D' },
        explanation:
          'Dorst/glucose → diabetes; misselijkheid/braken → gastroparese; vol gevoel → maagretentie; pijn/zuurbranden → refluxachtig.',
      },
      {
        id: '4d',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Welke verklaring past het best bij refluxklachten tijdens zwangerschap?',
        options: [
          {
            letter: 'A',
            text: 'Progesteron verlaagt de spanning van glad spierweefsel, maaglediging kan trager worden en buikdruk neemt later toe',
          },
          { letter: 'B', text: 'Zwangerschap voorkomt reflux volledig' },
          {
            letter: 'C',
            text: 'De onderste slokdarmsfincter sluit altijd sterker door progesteron',
          },
          { letter: 'D', text: 'Reflux tijdens zwangerschap komt alleen door colonpoliepen' },
        ],
        correctAnswer: 'A',
        explanation:
          'Progesteron verlaagt glad spierweefselspanning; maaglediging trager; buikdruk neemt later toe.',
      },
      {
        id: '4e',
        type: 'meerdere_antwoorden',
        points: 2.0,
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.5,
        question:
          'Welke factoren of situaties kunnen refluxklachten bevorderen of verergeren?\n\nLet op: meerdere antwoorden kunnen juist zijn.',
        options: [
          { letter: 'A', text: 'Vertraagde maaglediging' },
          { letter: 'B', text: 'Toenemende buikdruk' },
          { letter: 'C', text: 'Liggen kort na een grote maaltijd' },
          { letter: 'D', text: 'Minder spanning van de onderste slokdarmsfincter' },
          { letter: 'E', text: 'Een perfecte lege maag zonder druk of refluxbarrièreprobleem' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        explanation:
          'Vertraagde maaglediging, buikdruk, liggen na maaltijd en verminderde slokdarmsfincterspanning bevorderen reflux.',
      },
      {
        id: '4f',
        type: 'open',
        points: 1.0,
        question:
          'Leg in maximaal 50 woorden uit waarom vertraagde maaglediging refluxachtige klachten kan versterken.',
        wordLimit: 50,
        rubric:
          '0,5p voor maag blijft voller/langer gevuld; 0,5p voor meer terugstroming/reflux door druk of retentie.',
        modelAnswer:
          'Bij vertraagde maaglediging blijft voedsel langer in de maag. Daardoor nemen maagvulling en druk toe, waardoor maaginhoud makkelijker richting slokdarm kan terugstromen. Dit kan refluxachtige klachten versterken.',
        explanation: 'Langere retentie verhoogt druk en terugstroming naar slokdarm.',
      },
      {
        id: '4g',
        type: 'meerkeuze',
        points: 1.0,
        question:
          'Welke klacht past relatief sterker bij gastroparese dan bij geïsoleerde klassieke reflux?',
        options: [
          {
            letter: 'A',
            text: 'Snel vol zitten en het gevoel dat voedsel lang in de maag blijft',
          },
          { letter: 'B', text: 'Alleen zure oprispingen na koffie' },
          { letter: 'C', text: 'Alleen jeukende huid' },
          { letter: 'D', text: 'Alleen pijn bij de enkel' },
        ],
        correctAnswer: 'A',
        explanation:
          'Snel vol zitten en het gevoel dat voedsel lang in de maag blijft passen sterker bij gastroparese.',
      },
      {
        id: '4h',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Welke uitspraak over ontregelde diabetes en gastroparese past het best?',
        options: [
          {
            letter: 'A',
            text: 'Ontregelde diabetes kan gastroparese verergeren en gestoorde maaglediging kan de glucosehuishouding verder ontregelen',
          },
          { letter: 'B', text: 'Diabetes beschermt altijd tegen maagledigingsproblemen' },
          { letter: 'C', text: 'Gastroparese komt alleen bij kinderen voor' },
          { letter: 'D', text: 'Glucosewaarden hebben geen enkele relatie met maaglediging' },
        ],
        correctAnswer: 'A',
        explanation:
          'Ontregelde diabetes en gastroparese kunnen elkaar wederzijds verergeren.',
      },
      {
        id: '4i',
        type: 'open',
        points: 1.0,
        question:
          'Waarom is een slokdarmobstructie als hoofddiagnose in deze casus minder waarschijnlijk? Beantwoord in maximaal 50 woorden.',
        wordLimit: 50,
        rubric:
          '0,5p voor geen progressieve dysfagie/obstructie-alarm; 0,5p voor klachten passen beter bij gastroparese/maagretentie.',
        modelAnswer:
          'Er is geen progressieve dysfagie of alarmsymptoom dat centraal staat. De klachten bestaan vooral uit misselijkheid, braken na maaltijden, snel vol zitten en het gevoel dat voedsel lang blijft liggen, passend bij gastroparese en maagretentie.',
        explanation: 'Geen dysfagie; klachten passen bij gastroparese/maagretentie.',
      },
      {
        id: '4j',
        type: 'open',
        points: 1.0,
        question:
          'Leg in maximaal 50 woorden uit waarom alleen zuurremming niet altijd voldoende is bij refluxachtige klachten door gastroparese.',
        wordLimit: 50,
        rubric:
          '0,5p voor vertraagde maaglediging/retentie; 0,5p voor zuurremming behandelt niet de motiliteitsstoornis.',
        modelAnswer:
          'Bij gastroparese is het probleem niet alleen zuur, maar ook vertraagde maaglediging en retentie. Zuurremming kan zuurklachten verminderen, maar corrigeert de motiliteitsstoornis en maagretentie niet volledig.',
        explanation: 'Zuurremming corrigeert niet vertraagde maaglediging en retentie.',
      },
    ],
  },
]
