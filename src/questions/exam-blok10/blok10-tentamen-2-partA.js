/** Blok 10 oefententamen 2 (Tentamen D) — casussen 1–2 · bron: VRAGEN + antwoordmodel (25 p totaal) */

export const blok10Tentamen2PartA = [
  {
    id: 'casus-1',
    title: 'Casus 1 – Lever als metabole fabriek: CYP-interacties, fase I/II en alcoholmetabolisme',
    totalPoints: 12,
    scenario:
      'Een 42-jarige vrouw gebruikt orale anticonceptie. Zij krijgt rifampicine voorgeschreven vanwege een infectie. De arts-assistent moet uitleggen waarom levermetabolisme belangrijk is voor geneesmiddelspiegels en interacties. In een tweede situatie gebruikt een patiënt na transplantatie ciclosporine en wordt vanwege een schimmelinfectie itraconazol overwogen. Daarnaast komt alcoholmetabolisme aan bod.',
    questions: [
      {
        id: '1a',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Wat wordt bedoeld met het first-pass effect?',
        options: [
          {
            letter: 'A',
            text: 'Orale geneesmiddelen passeren eerst darm en lever voordat ze de systemische circulatie bereiken',
          },
          { letter: 'B', text: 'Geneesmiddelen worden pas in de nier actief gemaakt' },
          { letter: 'C', text: 'Geneesmiddelen slaan de lever volledig over' },
          { letter: 'D', text: 'Alleen intraveneuze middelen worden in de lever gemetaboliseerd' },
        ],
        correctAnswer: 'A',
        explanation:
          'Orale geneesmiddelen passeren eerst darm en lever voordat ze de systemische circulatie bereiken.',
      },
      {
        id: '1b',
        type: 'koppelvraag',
        points: 2.0,
        question: 'Vul de tabel aan.',
        items: [
          'Fase I — wat gebeurt er?',
          'Fase I — belangrijk gevolg',
          'Fase II — wat gebeurt er?',
          'Fase II — belangrijk gevolg',
        ],
        matchOptions: [
          {
            letter: 'A',
            text: 'Oxidatie, reductie of hydrolyse, vaak via CYP-enzymen',
          },
          {
            letter: 'B',
            text: 'Maakt stoffen reactiever/polairder en bereidt ze voor op verdere verwerking',
          },
          {
            letter: 'C',
            text: 'Conjugatie, bijvoorbeeld koppeling aan glucuronzuur/sulfaat',
          },
          {
            letter: 'D',
            text: 'Maakt stoffen beter wateroplosbaar voor uitscheiding',
          },
        ],
        correctMapping: { 0: 'A', 1: 'B', 2: 'C', 3: 'D' },
        explanation:
          'Fase I: oxidatie/reductie/hydrolyse via CYP → reactiever/polairder. Fase II: conjugatie → wateroplosbaar.',
      },
      {
        id: '1c',
        type: 'meerdere_antwoorden',
        points: 2.0,
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.5,
        question:
          'Welke CYP-enzymen worden in de stof genoemd als belangrijk voor geneesmiddelmetabolisme?\n\nLet op: meerdere antwoorden kunnen juist zijn.',
        options: [
          { letter: 'A', text: 'CYP3A4' },
          { letter: 'B', text: 'CYP2D6' },
          { letter: 'C', text: 'CYP2C9' },
          { letter: 'D', text: 'CYP2C19' },
          { letter: 'E', text: 'Lactase' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        explanation: 'Belangrijke CYP-enzymen: CYP3A4, CYP2D6, CYP2C9 en CYP2C19.',
      },
      {
        id: '1d',
        type: 'meerkeuze',
        points: 1.0,
        question:
          'Rifampicine is een sterke CYP3A4-inductor. Wat is het meest waarschijnlijke effect op orale anticonceptie die via CYP3A4 wordt gemetaboliseerd?',
        options: [
          { letter: 'A', text: 'Snellere afbraak en lagere werking' },
          { letter: 'B', text: 'Langzamere afbraak en meer bijwerkingen' },
          {
            letter: 'C',
            text: 'Geen effect, want anticonceptie wordt nooit in de lever gemetaboliseerd',
          },
          { letter: 'D', text: 'Directe omzetting in acetaldehyde' },
        ],
        correctAnswer: 'A',
        explanation:
          'Rifampicine induceert CYP3A4, waardoor orale anticonceptie sneller wordt afgebroken en minder goed kan werken.',
      },
      {
        id: '1e',
        type: 'koppelvraag',
        points: 2.0,
        question: 'Vul de tabel aan.',
        items: [
          'Substraat — betekenis',
          'Substraat — effect op geneesmiddelspiegel van een ander substraat',
          'Remmer — betekenis',
          'Remmer — effect op geneesmiddelspiegel van een ander substraat',
          'Inductor — betekenis',
          'Inductor — effect op geneesmiddelspiegel van een ander substraat',
        ],
        matchOptions: [
          { letter: 'A', text: 'Geneesmiddel dat door een CYP-enzym wordt afgebroken' },
          {
            letter: 'B',
            text: 'Verhoogt of verlaagt niet automatisch de spiegel van een ander middel',
          },
          { letter: 'C', text: 'Remt het CYP-enzym' },
          { letter: 'D', text: 'Afbraak wordt trager, spiegel stijgt' },
          { letter: 'E', text: 'Verhoogt CYP-activiteit/-expressie' },
          { letter: 'F', text: 'Afbraak wordt sneller, spiegel daalt' },
        ],
        correctMapping: { 0: 'A', 1: 'B', 2: 'C', 3: 'D', 4: 'E', 5: 'F' },
        explanation: 'Substraat → A/B; remmer → C/D; inductor → E/F.',
      },
      {
        id: '1f',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Wat is het verwachte effect van itraconazol op ciclosporine?',
        options: [
          { letter: 'A', text: 'Ciclosporine wordt sneller afgebroken, waardoor de spiegel daalt' },
          {
            letter: 'B',
            text: 'Ciclosporine wordt langzamer afgebroken, waardoor de spiegel stijgt',
          },
          { letter: 'C', text: 'Ciclosporine wordt omgezet in galzouten' },
          { letter: 'D', text: 'Er is geen interactie mogelijk via CYP3A4' },
        ],
        correctAnswer: 'B',
        explanation:
          'Itraconazol remt CYP3A4, waardoor ciclosporine langzamer wordt afgebroken en de spiegel stijgt.',
      },
      {
        id: '1g',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Welke volgorde past bij alcoholmetabolisme in de lever?',
        options: [
          { letter: 'A', text: 'Ethanol → acetaldehyde → acetaat' },
          { letter: 'B', text: 'Acetaat → ethanol → acetaldehyde' },
          { letter: 'C', text: 'Ethanol → galzout → lactase' },
          { letter: 'D', text: 'Acetaldehyde → ethanol → glucose' },
        ],
        correctAnswer: 'A',
        explanation: 'Ethanol → acetaldehyde → acetaat.',
      },
      {
        id: '1h',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Welke enzymen passen het best bij de twee hoofdstappen van alcoholmetabolisme?',
        options: [
          { letter: 'A', text: 'ADH/MEOS en daarna ALDH' },
          { letter: 'B', text: 'Lactase en daarna amylase' },
          { letter: 'C', text: 'Trypsine en daarna enteropeptidase' },
          { letter: 'D', text: 'CYP3A4 en daarna FIT' },
        ],
        correctAnswer: 'A',
        explanation: 'ADH/MEOS en daarna ALDH.',
      },
      {
        id: '1i',
        type: 'open',
        points: 1.0,
        question:
          'Leg in maximaal 60 woorden uit waarom alcoholmetabolisme metabool belastend kan zijn, ook zonder directe DILI-casus te maken.',
        wordLimit: 60,
        rubric:
          '0,5p voor acetaldehyde/toxische tussenstof; 0,5p voor metabole belasting/NADH-NAD+-verschuiving.',
        modelAnswer:
          'Alcoholmetabolisme belast de lever doordat ethanol wordt omgezet in acetaldehyde, een toxische tussenstof. Daarnaast verandert de NADH/NAD+-balans, waardoor vet- en energiemetabolisme verstoord kunnen raken. Dit kan metabole stress geven zonder dat je direct een DILI-casus hoeft te maken.',
        explanation: 'Acetaldehyde is toxisch; NADH/NAD+-verschuiving belast metabolisme.',
      },
    ],
  },
  {
    id: 'casus-2',
    title: 'Casus 2 – Kinder-MDL: diarree, groei en ondervoeding',
    totalPoints: 13,
    scenario:
      'Een jongen van 3 jaar en 2 maanden wordt gezien vanwege wisselende dunne ontlasting, buikpijn en vermoeidheid. Zijn ouders vertellen dat hij soms veel appelsap drinkt, maar ook dat hij minder goed groeit dan eerder. Hij heeft een lengte van -2,3 SD en een gewicht van -1,8 SD. Er zijn geen acute tekenen van sepsis. De ouders maken zich zorgen over coeliakie, lactose-intolerantie, peuterdiarree en ondervoeding.',
    questions: [
      {
        id: '2a',
        type: 'meerkeuze',
        points: 1.0,
        question:
          'Welke bevinding maakt de casus het meest verdacht voor een organisch probleem in plaats van simpele peuterdiarree?',
        options: [
          { letter: 'A', text: 'Normale groei op de eigen groeilijn' },
          { letter: 'B', text: 'Afbuigende lengte- en gewichtsgroei' },
          { letter: 'C', text: 'Een keer dunne ontlasting na appelsap' },
          { letter: 'D', text: 'Alleen wisselende eetlust zonder groeiprobleem' },
        ],
        correctAnswer: 'B',
        explanation: 'Afbuigende lengte- en gewichtsgroei maakt een organisch probleem waarschijnlijker.',
      },
      {
        id: '2b',
        type: 'meerdere_antwoorden',
        points: 2.0,
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 2 / 3,
        question:
          'Welke factoren maken kinderen extra kwetsbaar voor ondervoeding?\n\nLet op: meerdere antwoorden kunnen juist zijn.',
        options: [
          { letter: 'A', text: 'Hoger energieverbruik per kilogram' },
          { letter: 'B', text: 'Grotere energiebehoefte door groei en ontwikkeling' },
          { letter: 'C', text: 'Minder fysiologische reserves' },
          { letter: 'D', text: 'Volledig beschermend effect van diarree tegen tekorten' },
          { letter: 'E', text: 'Lagere behoefte aan eiwit dan volwassenen in groei' },
        ],
        correctAnswers: ['A', 'B', 'C'],
        explanation:
          'Kinderen zijn kwetsbaar door hoger energieverbruik per kilogram, grotere energiebehoefte door groei en minder fysiologische reserves.',
      },
      {
        id: '2c',
        type: 'koppelvraag',
        points: 1.0,
        question: 'Vul de tabel aan.',
        items: [
          'Ondervoeding',
          'Failure to thrive / faltering growth',
          'Lengte of gewicht < -2 SD',
          'Afbuiging van groeicurve over tijd',
        ],
        matchOptions: [
          {
            letter: 'A',
            text: 'Tekort aan energie/nutriënten door onvoldoende inname, verhoogde behoefte of verliezen, met effect op groei/functioneren',
          },
          { letter: 'B', text: 'Onvoldoende groei of afbuigen van de groeicurve' },
          { letter: 'C', text: 'Afwijkend lage lengte of gewicht voor leeftijd/geslacht' },
          {
            letter: 'D',
            text: 'Kind zakt van de eigen groeilijn af, wat wijst op mogelijk groeiprobleem',
          },
        ],
        correctMapping: { 0: 'A', 1: 'B', 2: 'C', 3: 'D' },
        explanation: 'Ondervoeding → A; failure to thrive → B; < -2 SD → C; afbuiging → D.',
      },
      {
        id: '2d',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Waarom is een meetmoment bij een kind minder sterk dan een groeicurve over tijd?',
        options: [
          { letter: 'A', text: 'Omdat groei alleen met CT kan worden beoordeeld' },
          {
            letter: 'B',
            text: 'Omdat meerdere groeipunten nodig zijn om afbuiging en groei over tijd te beoordelen',
          },
          { letter: 'C', text: 'Omdat lengte en gewicht bij kinderen nooit relevant zijn' },
          { letter: 'D', text: 'Omdat groeicurves alleen bij volwassenen worden gebruikt' },
        ],
        correctAnswer: 'B',
        explanation: 'Meerdere groeipunten zijn nodig om afbuiging en groei over tijd te beoordelen.',
      },
      {
        id: '2e',
        type: 'koppelvraag',
        points: 2.0,
        question: 'Koppel de diagnose aan het meest passende patroon.',
        items: ['Peuterdiarree', 'Coeliakie', 'Cystic fibrosis', 'IBD / Crohn'],
        matchOptions: [
          {
            letter: 'A',
            text: 'Normale groei, vaak onverteerde resten, relatie met vruchtensap/suikers',
          },
          {
            letter: 'B',
            text: 'Groeimachterstand, bolle buik, dunne billen, prikkelbaarheid en soms ijzergebreksanemie',
          },
          {
            letter: 'C',
            text: 'Recidiverende luchtweginfecties, chronische hoest, vettige ontlasting, ondergewicht en clubbing',
          },
          { letter: 'D', text: 'Buikpijn, bloed bij ontlasting of koorts' },
          { letter: 'E', text: 'Alleen zuurbranden na vet eten' },
        ],
        correctMapping: { 0: 'A', 1: 'B', 2: 'C', 3: 'D' },
        explanation: 'Peuterdiarree → A; coeliakie → B; CF → C; IBD → D.',
      },
      {
        id: '2f',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Wat is de eerste serologische test bij verdenking op coeliakie volgens de stof?',
        options: [
          { letter: 'A', text: 'IgA-anti-tTG samen met totaal IgA' },
          { letter: 'B', text: 'FIT' },
          { letter: 'C', text: 'Lipase in serum' },
          { letter: 'D', text: 'CYP3A4-activiteit' },
        ],
        correctAnswer: 'A',
        explanation: 'IgA-anti-tTG samen met totaal IgA.',
      },
      {
        id: '2g',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Waarom moet bij coeliakieverdenking ook totaal IgA worden bepaald?',
        options: [
          { letter: 'A', text: 'Omdat IgA-deficiëntie de standaard IgA-test vals-negatief kan maken' },
          { letter: 'B', text: 'Omdat IgA altijd verhoogd is bij pancreatitis' },
          { letter: 'C', text: 'Omdat totaal IgA direct de groeicurve meet' },
          { letter: 'D', text: 'Omdat IgA de galzoutpool bepaalt' },
        ],
        correctAnswer: 'A',
        explanation: 'IgA-deficiëntie kan de standaard IgA-test vals-negatief maken.',
      },
      {
        id: '2h',
        type: 'meerkeuze',
        points: 1.0,
        question:
          'Bij een kind met laag totaal IgA en negatieve IgA-anti-tTG blijft coeliakie klinisch verdacht. Wat past dan het best als vervolgstap?',
        options: [
          { letter: 'A', text: 'IgG-anti-TG2 of IgG-anti-DGP bepalen' },
          { letter: 'B', text: 'Direct bariatrische chirurgie' },
          { letter: 'C', text: 'Alleen geruststellen zonder verdere evaluatie' },
          { letter: 'D', text: 'ERCP' },
        ],
        correctAnswer: 'A',
        explanation: 'IgG-anti-TG2 of IgG-anti-DGP bepalen.',
      },
      {
        id: '2i',
        type: 'open',
        points: 1.0,
        question:
          'Leg in maximaal 50 woorden uit waarom groeicurve en klinisch patroon belangrijker zijn dan alleen de losse klacht diarree.',
        wordLimit: 50,
        rubric:
          '0,5p voor groeicurve/groei over tijd; 0,5p voor diarree alleen is onvoldoende of afbuiging is alarmerend.',
        modelAnswer:
          'Diarree alleen zegt weinig over ernst of oorzaak. De groeicurve laat zien of het kind voldoende groeit over tijd. Afbuigende lengte- of gewichtsgroei wijst sterker op een organisch probleem of ondervoeding dan een losse klacht.',
        explanation: 'Groeicurve over tijd weegt sterker dan losse klacht diarree.',
      },
      {
        id: '2j',
        type: 'meerkeuze',
        points: 1.0,
        question:
          'Een tweede kind van 9 jaar heeft recidiverende luchtweginfecties, chronische hoest, vettige ontlasting, ondergewicht en beginnende clubbing.\n\nWelke combinatie past het best bij verdenking op cystic fibrosis in deze stof?',
        options: [
          {
            letter: 'A',
            text: 'Recidiverende luchtweginfecties, chronische hoest, vettige ontlasting en groeiachterstand',
          },
          { letter: 'B', text: 'Alleen brandend maagzuur na pizza' },
          { letter: 'C', text: 'Alleen positieve FIT' },
          { letter: 'D', text: 'Alleen jeuk zonder leverwaarden' },
        ],
        correctAnswer: 'A',
        explanation:
          'Recidiverende luchtweginfecties, chronische hoest, vettige ontlasting en groeiachterstand passen bij CF.',
      },
      {
        id: '2k',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Welke uitspraak over peuterdiarree is het meest passend?',
        options: [
          { letter: 'A', text: 'De groei is meestal normaal en het kind volgt de eigen groeilijn' },
          { letter: 'B', text: 'Het gaat altijd gepaard met ernstige groeiachterstand' },
          { letter: 'C', text: 'Het wordt vooral gekenmerkt door HCC' },
          { letter: 'D', text: 'Het is hetzelfde als SBP' },
        ],
        correctAnswer: 'A',
        explanation: 'Bij peuterdiarree is de groei meestal normaal en volgt het kind de eigen groeilijn.',
      },
    ],
  },
]
