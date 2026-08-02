/**
 * Interne Geneeskunde — oefententamen 2, casussen 6–10 (50 p)
 * Gebouwd volgens de House Standard v2.0 (docs/OEFENTENTAMEN-GENERATOR-v2.md).
 * Geen onderwerpoverlap met oefententamen 1.
 */

export const ssinterneTentamen2PartB = [
  {
    id: 'casus-6',
    title: 'Casus 6 – Man met nachtzweten en een fors vergrote milt',
    totalPoints: 10,
    scenario:
      'Een 58-jarige man heeft sinds maanden vermoeidheid, nachtzweten en een vol gevoel links in de bovenbuik. Bij onderzoek is de milt fors vergroot. Het bloedbeeld toont leukocytose met een linksverschuiving, basofilie en minder dan 2% myeloblasten.',
    questions: [
      {
        id: '6a',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week2-leukemie',
        question: 'Welk kernverschil onderscheidt acute van chronische leukemie?',
        options: [
          { letter: 'A', text: 'Bij acute leukemie overheersen onrijpe blasten' },
          { letter: 'B', text: 'Acute leukemie gaat gepaard met splenomegalie' },
          { letter: 'C', text: 'Chronische leukemie gaat gepaard met trombocytopenie' },
          { letter: 'D', text: 'Chronische leukemie ontstaat vooral op kinderleeftijd' },
        ],
        correctAnswer: 'A',
        explanation:
          'De rijpingsgraad van de cellen bepaalt het onderscheid: onrijpe blasten met snelle verdringing tegenover meer uitgerijpte cellen met een traag beloop.',
      },
      {
        id: '6b',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week2-leukemie',
        question: 'Welke cytogenetische afwijking past het best bij dit beeld?',
        options: [
          { letter: 'A', text: 'Inversie 16' },
          { letter: 'B', text: 'Deletie 17p13' },
          { letter: 'C', text: 'Translocatie t(9;22)' },
          { letter: 'D', text: 'Translocatie t(4;14)' },
        ],
        correctAnswer: 'C',
        explanation:
          'Het Philadelphia-chromosoom met het BCR-ABL-fusieproduct is kenmerkend voor CML; inversie 16 hoort bij AML en de andere twee bij respectievelijk CLL en multipel myeloom.',
      },
      {
        id: '6c',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week2-leukemie',
        question: 'Wat is de standaardbehandeling in de chronische fase van deze ziekte?',
        options: [
          { letter: 'A', text: 'Intensieve combinatiechemotherapie' },
          { letter: 'B', text: 'Een tyrosinekinaseremmer' },
          { letter: 'C', text: 'Allogene stamceltransplantatie' },
          { letter: 'D', text: 'Fludarabine met rituximab' },
        ],
        correctAnswer: 'B',
        explanation:
          'Het fusie-eiwit BCR-ABL is zelf het aangrijpingspunt: een remmer bezet de ATP-plaats en schakelt het eiwit uit, waardoor intensieve chemotherapie niet nodig is.',
      },
      {
        id: '6d',
        type: 'open',
        points: 4,
        source: 'ssinterne-week2-leukemie',
        wordLimit: 80,
        question:
          'Leg uit wat minimale restziekte is en waarom dat begrip belangrijk is. Noem daarnaast twee indicaties om chronische lymfatische leukemie te gaan behandelen.\n Maximaal 80 woorden.',
        rubric:
          '1p minimale restziekte is een kleine hoeveelheid resterende leukemiecellen terwijl de patiënt morfologisch in remissie lijkt; 1p het hangt samen met de kans op recidief en helpt bij het kiezen van de behandelstrategie; 1p eerste juiste behandelindicatie bij CLL; 1p tweede juiste behandelindicatie bij CLL.',
        modelAnswer:
          'Minimale restziekte betekent dat er na behandeling nog een kleine hoeveelheid leukemiecellen aanwezig is, terwijl de patiënt morfologisch in complete remissie lijkt. Het is belangrijk omdat het samenhangt met de kans op terugkeer van de ziekte en helpt bij het kiezen van de behandelstrategie. CLL wordt pas behandeld bij actieve ziekte, bijvoorbeeld bij toenemend beenmergfalen met anemie of bij progressieve splenomegalie.',
        explanation: 'Inhoudelijk gelijkwaardige formuleringen ook goed rekenen.',
      },
    ],
  },
  {
    id: 'casus-7',
    title: 'Casus 7 – Jonge man met blauwe plekken en nabloeden',
    totalPoints: 10,
    scenario:
      'Een 23-jarige man heeft sinds zijn jeugd forse blauwe plekken en langdurig nabloeden na tandheelkundige ingrepen. Het trombocytenaantal en de PT zijn normaal, maar de aPTT is geïsoleerd verlengd. Na een mengproef met normaal plasma normaliseert de aPTT.',
    questions: [
      {
        id: '7a',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week6-hemostase',
        question: 'Wat betekent het dat de aPTT na de mengproef normaliseert?',
        options: [
          { letter: 'A', text: 'Er is een remmer zoals lupus anticoagulans aanwezig' },
          { letter: 'B', text: 'Er is heparine in het monster terechtgekomen' },
          { letter: 'C', text: 'Er is een gestoorde functie van de trombocyten' },
          { letter: 'D', text: 'Er is een tekort aan een stollingsfactor' },
        ],
        correctAnswer: 'D',
        explanation:
          'Normaal plasma vult een ontbrekende factor aan, dus dan normaliseert de test; bij een remmer blijft de aPTT verlengd omdat die ook het toegevoegde plasma remt.',
      },
      {
        id: '7b',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week6-hemostase',
        question: 'Welke stollingstest meet de extrinsieke stolling?',
        options: [
          { letter: 'A', text: 'De PT' },
          { letter: 'B', text: 'De aPTT' },
          { letter: 'C', text: 'De trombinetijd' },
          { letter: 'D', text: 'De bloedingstijd' },
        ],
        correctAnswer: 'A',
        explanation:
          'Aan de PT wordt thromboplastine met calcium toegevoegd, waarmee de extrinsieke route wordt gestart; in het aPTT-reagens zit juist geen tissue factor.',
      },
      {
        id: '7c',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week6-hemostase',
        question: 'Wat is het verschil tussen adhesie en aggregatie van trombocyten?',
        options: [
          { letter: 'A', text: 'Adhesie vraagt calcium, aggregatie vraagt fosfolipiden' },
          { letter: 'B', text: 'Adhesie is hechting aan elkaar, aggregatie aan de vaatwand' },
          { letter: 'C', text: 'Adhesie is hechting aan de vaatwand, aggregatie aan elkaar' },
          { letter: 'D', text: 'Adhesie vraagt fibrine, aggregatie vraagt tissue factor' },
        ],
        correctAnswer: 'C',
        explanation:
          'Adhesie loopt via von Willebrand factor en de GPIb-receptor naar het subendotheel; aggregatie verbindt trombocyten onderling via ADP, tromboxaan A2 en GPIIb/IIIa.',
      },
      {
        id: '7d',
        type: 'koppelvraag',
        points: 4,
        source: 'ssinterne-week6-hemostase',
        question:
          'Koppel elk remmend systeem aan de bijbehorende werking. Gebruik elke werking maximaal één keer.\nWerkingen\nA. Remt factor Va en VIIIa\nB. Remt trombine\nC. Remt de tissue factor-route\nD. Remt fibrinolyse',
        items: [
          'a. Antitrombine',
          'b. Geactiveerd proteïne C met proteïne S',
          'c. TFPI',
          'd. TAFI',
        ],
        matchOptions: [
          { letter: 'A', text: 'Remt factor Va en VIIIa' },
          { letter: 'B', text: 'Remt trombine' },
          { letter: 'C', text: 'Remt de tissue factor-route' },
          { letter: 'D', text: 'Remt fibrinolyse' },
        ],
        correctMapping: { 0: 'B', 1: 'A', 2: 'C', 3: 'D' },
        explanation:
          'a→B antitrombine, b→A het APC-systeem met proteïne S als cofactor, c→C TFPI, d→D TAFI. 1 punt per juiste koppeling.',
      },
    ],
  },
  {
    id: 'casus-8',
    title: 'Casus 8 – Vrouw met massaal bloedverlies na een auto-ongeval',
    totalPoints: 10,
    scenario:
      'Een 45-jarige vrouw komt na een auto-ongeval binnen met massaal bloedverlies. Zij is eerder zwanger geweest en kreeg toen een transfusie. De screening op irregulaire antistoffen is positief. Zij is onderkoeld en heeft een lactaatacidose.',
    questions: [
      {
        id: '8a',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week7-bloedtransfusie',
        question: 'Waarom is bloedgroep O binnen het ABO-systeem de universele donor?',
        options: [
          { letter: 'A', text: 'Omdat het plasma geen anti-A of anti-B bevat' },
          { letter: 'B', text: 'Omdat de erytrocyten geen A- of B-antigenen dragen' },
          { letter: 'C', text: 'Omdat de erytrocyten geen rhesusantigenen dragen' },
          { letter: 'D', text: 'Omdat het plasma bij iedere ontvanger past' },
        ],
        correctAnswer: 'B',
        explanation:
          'Zonder A- of B-antigeen op de donorcel valt er niets te binden voor de anti-A en anti-B van de ontvanger; het plasma van bloedgroep O bevat juist beide antistoffen.',
      },
      {
        id: '8b',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week7-bloedtransfusie',
        question: 'Welke drie factoren vormen samen de Lethal Triade?',
        options: [
          { letter: 'A', text: 'Hypoxie, hypotensie en hyperkaliëmie' },
          { letter: 'B', text: 'Anemie, trombopenie en hypocalciëmie' },
          { letter: 'C', text: 'Hypovolemie, acidose en hyperthermie' },
          { letter: 'D', text: 'Onderkoeling, acidose en coagulopathie' },
        ],
        correctAnswer: 'D',
        explanation:
          'Deze drie versterken elkaar: afkoeling en verzuring verstoren de stolling, waardoor de bloeding doorgaat en de patiënt verder afkoelt en verzuurt.',
      },
      {
        id: '8c',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week7-bloedtransfusie',
        question: 'Waarom is het Type & Screen-beleid bij deze patiënte niet geschikt?',
        options: [
          { letter: 'A', text: 'Omdat zij bekende irregulaire antistoffen heeft' },
          { letter: 'B', text: 'Omdat zij eerder zwanger is geweest' },
          { letter: 'C', text: 'Omdat zij massaal bloedverlies heeft' },
          { letter: 'D', text: 'Omdat haar bloedgroep nog onbekend is' },
        ],
        correctAnswer: 'A',
        explanation:
          'Type & Screen geeft bloed uit zonder kruisproef, wat alleen veilig is als er geen antistoffen zijn; bij bekende antistoffen blijft een kruisproef verplicht.',
      },
      {
        id: '8d',
        type: 'beeldvraag',
        points: 4,
        gradingMethod: 'order',
        source: 'ssinterne-week7-bloedtransfusie',
        question:
          'Zet de stappen van de transfusievoorbereiding bij deze patiënte in de juiste volgorde.',
        orderIntro: 'Volgorde van voorbereiding (1 = eerst, 4 = laatst):',
        orderOptions: [
          'Antistofidentificatie met een 11-celspanel uitvoeren',
          'De ABO-bloedgroep uit twee onafhankelijke monsters bepalen',
          'Erytrocyten uitgeven die negatief zijn voor het gevonden antigeen',
          'Screenen op irregulaire antistoffen met een 3-celspanel',
        ],
        correctOrder: [
          'De ABO-bloedgroep uit twee onafhankelijke monsters bepalen',
          'Screenen op irregulaire antistoffen met een 3-celspanel',
          'Antistofidentificatie met een 11-celspanel uitvoeren',
          'Erytrocyten uitgeven die negatief zijn voor het gevonden antigeen',
        ],
        expectedAnswer: '2 → 4 → 1 → 3',
        rubric: 'Alleen de volledig juiste volgorde levert 4 punten op.',
        modelAnswer:
          'Eerst de bloedgroep uit twee onafhankelijke monsters, dan screening met een 3-celspanel, bij een positieve screening identificatie met een 11-celspanel, en tot slot uitgifte van erytrocyten die negatief zijn voor het gevonden antigeen.',
        explanation:
          'Elke stap bepaalt wat de volgende moet zijn: pas als je weet wélke antistof er is, weet je welk antigeen het donorbloed niet mag dragen.',
      },
    ],
  },
  {
    id: 'casus-9',
    title: 'Casus 9 – Jonge vrouw met buikpijn, diarree en gewichtsverlies',
    totalPoints: 10,
    scenario:
      'Een 24-jarige vrouw heeft sinds vier maanden buikpijn, diarree en 6 kg gewichtsverlies. Zij is vermoeid en heeft drukpijn in de rechteronderbuik. Het CRP is verhoogd, het Hb verlaagd en het fecaal calprotectine sterk verhoogd. De feceskweek is negatief.',
    questions: [
      {
        id: '9a',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week5-morbus-crohn',
        question: 'Wat is de belangrijkste betekenis van een sterk verhoogd fecaal calprotectine?',
        options: [
          { letter: 'A', text: 'Het bevestigt de diagnose ziekte van Crohn' },
          { letter: 'B', text: 'Het toont een infectieuze oorzaak van diarree' },
          { letter: 'C', text: 'Het wijst op ontsteking in de darm' },
          { letter: 'D', text: 'Het sluit een prikkelbaar darmsyndroom uit' },
        ],
        correctAnswer: 'C',
        explanation:
          'Calprotectine komt uit neutrofielen en stijgt bij elke darmontsteking, ook bij infecties, maligniteiten of NSAID-gebruik; het scheidt dus inflammatoir van niet-inflammatoir, meer niet.',
      },
      {
        id: '9b',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week5-morbus-crohn',
        question: 'Welk onderzoek is de gouden standaard voor deze diagnose?',
        options: [
          { letter: 'A', text: 'MRI van de dunne darm' },
          { letter: 'B', text: 'Ileocoloscopie met biopten' },
          { letter: 'C', text: 'Echografie van het abdomen' },
          { letter: 'D', text: 'Gastroscopie met biopten' },
        ],
        correctAnswer: 'B',
        explanation:
          'Alleen met biopten uit het terminale ileum en colon kun je focale inflammatie met granulomen aantonen; beeldvorming laat uitbreiding zien maar geen histologie.',
      },
      {
        id: '9c',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week5-morbus-crohn',
        question: 'Welke inductietherapie past bij milde tot matige ileocaecale ziekte?',
        options: [
          { letter: 'A', text: 'Mesalazine' },
          { letter: 'B', text: 'Prednison' },
          { letter: 'C', text: 'Azathioprine' },
          { letter: 'D', text: 'Budesonide' },
        ],
        correctAnswer: 'D',
        explanation:
          'Budesonide werkt lokaal in de ileocaecale regio en heeft daardoor een gunstiger bijwerkingenprofiel dan prednison; mesalazine speelt bij Crohn geen rol.',
      },
      {
        id: '9d',
        type: 'open',
        points: 4,
        source: 'ssinterne-week5-morbus-crohn',
        wordLimit: 80,
        question:
          'Leg uit waarom corticosteroïden niet geschikt zijn als onderhoudsbehandeling en welk middel daarvoor wel wordt gebruikt. Leg daarnaast uit hoe een perianale fistel medicamenteus wordt behandeld.\n Maximaal 80 woorden.',
        rubric:
          '1p prednison en budesonide zijn inductiemiddelen en geen onderhoudsmedicatie, mede door bijwerkingen zoals osteoporose; 1p azathioprine is de aangewezen onderhoudsbehandeling; 1p bij een perianale fistel wordt een anti-TNF-middel zoals infliximab gegeven; 1p de combinatie met ciprofloxacine werkt beter dan anti-TNF alleen.',
        modelAnswer:
          'Prednison en budesonide zijn bedoeld om een opvlamming te remmen, niet om die te voorkomen; langdurig gebruik geeft bovendien bijwerkingen zoals gewichtstoename en osteoporose. Voor onderhoud wordt azathioprine gebruikt. Bij een perianale fistel wordt een anti-TNF-middel zoals infliximab gegeven, en de combinatie met ciprofloxacine geeft betere genezing dan anti-TNF alleen.',
        explanation: 'Inhoudelijk gelijkwaardige formuleringen ook goed rekenen.',
      },
    ],
  },
  {
    id: 'casus-10',
    title: 'Casus 10 – Vrouw met gezwollen vingergewrichten en ochtendstijfheid',
    totalPoints: 10,
    scenario:
      'Een 58-jarige vrouw heeft pijnlijke, gezwollen vingergewrichten en ochtendstijfheid van ruim een uur. Op de handfoto is er symmetrische gewrichtsspleetversmalling van de MCP- en PIP-gewrichten, met peri-articulaire osteopenie en erosies. De DIP-gewrichten zijn niet aangedaan.',
    questions: [
      {
        id: '10a',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week1-artrose-artritis',
        question: 'Welke uitspraak over het primair aangedane weefsel is juist?',
        options: [
          { letter: 'A', text: 'Bij reumatoïde artritis is het synovium primair aangedaan' },
          { letter: 'B', text: 'Bij reumatoïde artritis is het kraakbeen primair aangedaan' },
          { letter: 'C', text: 'Bij artrose is het synovium primair aangedaan' },
          { letter: 'D', text: 'Bij artrose is het subchondrale bot primair aangedaan' },
        ],
        correctAnswer: 'A',
        explanation:
          'De synovitis verklaart de vroege zwelling en de peri-articulaire osteopenie; kraakbeen- en botschade komen bij reumatoïde artritis pas later.',
      },
      {
        id: '10b',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week1-artrose-artritis',
        question: 'Welke radiologische bevinding past bij artrose en niet bij deze patiënte?',
        options: [
          { letter: 'A', text: 'Peri-articulaire osteopenie rond de gewrichten' },
          { letter: 'B', text: 'Symmetrische versmalling van de gewrichtsspleet' },
          { letter: 'C', text: 'Osteofyten met subchondrale sclerose en cysten' },
          { letter: 'D', text: 'Erosies van de cortex en het onderliggende bot' },
        ],
        correctAnswer: 'C',
        explanation:
          'Bij artrose reageert het bot op de veranderde belasting met aanwas en verdichting; bij artritis overheerst juist botafbraak met osteopenie en erosies.',
      },
      {
        id: '10c',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week1-artrose-artritis',
        question: 'Hoe heten benige zwellingen van de PIP-gewrichten?',
        options: [
          { letter: 'A', text: 'Noduli van Heberden' },
          { letter: 'B', text: 'Noduli van Bouchard' },
          { letter: 'C', text: 'Swan-neck deformiteiten' },
          { letter: 'D', text: 'Boutonnière-deformiteiten' },
        ],
        correctAnswer: 'B',
        explanation:
          'Noduli van Heberden zitten juist op de DIP-gewrichten; de twee deformiteiten beschrijven standsafwijkingen en geen benige zwellingen.',
      },
      {
        id: '10d',
        type: 'open',
        points: 4,
        source: 'ssinterne-week1-artrose-artritis',
        wordLimit: 70,
        question:
          'Noem de vier stappen van de systematische beoordeling van een conventionele opname. Leg daarnaast uit waarom een normale gewrichtsruimte kraakbeenschade niet uitsluit.\n Maximaal 70 woorden.',
        rubric:
          '2p voor het benoemen van alle vier de stappen — weke delen, gewrichtsruimten, veranderingen van het bot en alignment; 1p kraakbeen is zelf niet zichtbaar op een röntgenfoto; 1p verlies van kraakbeen zie je pas indirect als versmalling, zodat beperkte schade nog geen afwijking geeft.',
        modelAnswer:
          'Je beoordeelt achtereenvolgens de weke delen, de gewrichtsruimten, veranderingen van het bot en de alignment. Kraakbeen is op een röntgenfoto niet direct zichtbaar; je ziet alleen indirect verlies ervan als versmalling van de gewrichtsspleet. Beperkte kraakbeenschade geeft daardoor nog geen zichtbare versmalling, zodat een normale gewrichtsruimte schade niet uitsluit.',
        explanation: 'Inhoudelijk gelijkwaardige formuleringen ook goed rekenen.',
      },
    ],
  },
]
