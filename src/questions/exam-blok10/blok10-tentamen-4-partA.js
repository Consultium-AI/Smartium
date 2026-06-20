/** Blok 10 oefententamen 4 (Tentamen C) — casussen 1–2 · bron: VRAGEN + antwoordmodel (25 p totaal) */

export const blok10Tentamen4PartA = [
  {
    id: 'casus-1',
    title: 'Casus 1 – Cholestatische leverwaarden en advanced endoscopy',
    totalPoints: 12,
    scenario:
      'Een 69-jarige vrouw wordt verwezen naar de MDL-arts vanwege jeuk, donkere urine en verhoogde cholestatische leverwaarden. Echografie toont een licht verwijde ductus choledochus, maar de oorzaak is niet zeker. Zij heeft geen koorts, geen koude rillingen en is hemodynamisch stabiel. In het MDO wordt besproken of verdere diagnostiek met EUS passend is, of dat een therapeutische ERCP nodig is.\n\nLater blijkt er sprake van een distale galwegstenose. ERCP lukt niet, omdat de galweg via de papil van Vater niet bereikbaar is.',
    questions: [
      {
        id: '1a',
        type: 'meerkeuze',
        points: 1.0,
        question:
          'Welke techniek past het best als je vooral diagnostisch de galwegen, pancreas en omliggende structuren wilt beoordelen?',
        options: [
          { letter: 'A', text: 'ERCP' },
          { letter: 'B', text: 'EUS' },
          { letter: 'C', text: 'Colonoscopie' },
          { letter: 'D', text: 'FIT' },
        ],
        correctAnswer: 'B',
        explanation:
          'EUS is vooral geschikt voor diagnostische beoordeling van galwegen, pancreas en omliggende structuren.',
      },
      {
        id: '1b',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Waarom wordt ERCP in de stof vooral gezien als een therapeutische techniek?',
        options: [
          { letter: 'A', text: 'Omdat ERCP alleen bloedwaarden meet' },
          {
            letter: 'B',
            text: 'Omdat ERCP via de papil van Vater rechtstreeks in de galweg werkt met contrast en instrumenten',
          },
          { letter: 'C', text: 'Omdat ERCP alleen de dikke darm beoordeelt' },
          { letter: 'D', text: 'Omdat ERCP geen invasieve procedure is' },
        ],
        correctAnswer: 'B',
        explanation:
          'ERCP werkt via de papil van Vater rechtstreeks in de galweg met contrast en instrumenten en is vooral therapeutisch.',
      },
      {
        id: '1c',
        type: 'koppelvraag',
        points: 2.0,
        question: 'Vul de tabel aan.',
        items: [
          'EUS — voluit',
          'EUS — belangrijkste doel volgens de stof',
          'ERCP — voluit',
          'ERCP — belangrijkste doel volgens de stof',
        ],
        matchOptions: [
          {
            letter: 'A',
            text: 'Endoscopic ultrasound / endoscopische echografie',
          },
          {
            letter: 'B',
            text: 'Diagnostiek en eventueel interventie rond pancreas, galwegen en omliggende structuren',
          },
          {
            letter: 'C',
            text: 'Endoscopic retrograde cholangiopancreaticography',
          },
          {
            letter: 'D',
            text: 'Vooral therapeutische behandeling van galweg-/pancreasgangproblemen, zoals stenen, stenosen of drainage',
          },
        ],
        correctMapping: { 0: 'A', 1: 'B', 2: 'C', 3: 'D' },
        explanation:
          'EUS → endoscopische echografie, diagnostiek/interventie; ERCP → cholangiopancreaticography, vooral therapeutisch.',
      },
      {
        id: '1d',
        type: 'koppelvraag',
        points: 2.0,
        question: 'Koppel de anatomische structuur aan de juiste betekenis.',
        items: [
          'Ductus cysticus',
          'Ductus choledochus',
          'Ductus pancreaticus',
          'Papil van Vater',
        ],
        matchOptions: [
          { letter: 'A', text: 'Gewone galweg / common bile duct' },
          { letter: 'B', text: 'Afvoergang van de pancreas' },
          { letter: 'C', text: 'Verbinding met de galblaas' },
          {
            letter: 'D',
            text: 'Uitmonding in het duodenum waar galweg en pancreasgang samenkomen',
          },
          { letter: 'E', text: 'Kleine intrahepatische galweg' },
        ],
        correctMapping: { 0: 'C', 1: 'A', 2: 'B', 3: 'D' },
        explanation: 'Cysticus → C; choledochus → A; pancreaticus → B; papil van Vater → D.',
      },
      {
        id: '1e',
        type: 'meerdere_antwoorden',
        points: 2.0,
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.5,
        question:
          'Welke toepassingen passen bij EUS?\n\nLet op: meerdere antwoorden kunnen juist zijn.',
        options: [
          { letter: 'A', text: 'Beoordelen van galstenen in de galweg' },
          { letter: 'B', text: 'Onderscheiden van cysteuze en solide pancreasafwijkingen' },
          { letter: 'C', text: 'Weefsel verkrijgen via FNA/FNB' },
          { letter: 'D', text: 'Routinematig verwijderen van colonpoliepen' },
          { letter: 'E', text: 'Beoordelen van lymfeklieren, bijvoorbeeld in het mediastinum' },
        ],
        correctAnswers: ['A', 'B', 'C', 'E'],
        explanation:
          'EUS: galstenen, cysteuze/solide pancreasafwijkingen, FNA/FNB en lymfeklieren — niet routinematig colonpoliepen.',
      },
      {
        id: '1f',
        type: 'meerkeuze',
        points: 1.0,
        question:
          'Bij EUS worden galstenen gezien als hyperechogene witte afwijkingen met daarachter een slagschaduw. Wat betekent dit in gewone taal?',
        options: [
          {
            letter: 'A',
            text: 'De steen is zichtbaar als heldere structuur en blokkeert het geluid deels',
          },
          { letter: 'B', text: 'De steen is zwart omdat hij volledig uit vloeistof bestaat' },
          { letter: 'C', text: 'De steen kan alleen met FIT worden aangetoond' },
          { letter: 'D', text: 'De steen is alleen zichtbaar bij colonoscopie' },
        ],
        correctAnswer: 'A',
        explanation: 'De steen is zichtbaar als heldere structuur en blokkeert het geluid deels.',
      },
      {
        id: '1g',
        type: 'open',
        points: 1.0,
        question:
          'Leg uit waarom je bij een stabiele patiënt met onduidelijke galwegobstructie niet automatisch direct ERCP hoeft te doen. Beantwoord in maximaal 50 woorden.',
        wordLimit: 50,
        rubric:
          '0,5p EUS als diagnostische stap; 0,5p ERCP is invasiever/vooral therapeutisch.',
        modelAnswer:
          'Bij een stabiele patiënt kan EUS eerst diagnostisch duidelijkheid geven. ERCP is invasiever, heeft complicatierisico’s en wordt vooral gebruikt als er direct therapeutisch moet worden ingegrepen, bijvoorbeeld steenextractie, stentplaatsing of drainage.',
        explanation: 'EUS eerst diagnostisch; ERCP invasiever en vooral therapeutisch.',
      },
      {
        id: '1h',
        type: 'meerkeuze',
        points: 1.0,
        question:
          'ERCP lukt niet omdat de galweg via de papil van Vater niet bereikbaar is.\n\nWelke techniek kan volgens de stof dan als alternatief worden toegepast?',
        options: [
          { letter: 'A', text: 'EUS-geleide galwegdrainage' },
          { letter: 'B', text: 'Lactose-ademtest' },
          { letter: 'C', text: 'CT-colonografie' },
          { letter: 'D', text: 'Gastric sleeve' },
        ],
        correctAnswer: 'A',
        explanation: 'EUS-geleide galwegdrainage kan als alternatief worden toegepast.',
      },
      {
        id: '1i',
        type: 'meerdere_antwoorden',
        points: 1.0,
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.25,
        question:
          'Welke complicaties worden in de stof genoemd bij EUS-geleide galwegdrainage?\n\nLet op: meerdere antwoorden kunnen juist zijn.',
        options: [
          { letter: 'A', text: 'Cholangitis' },
          { letter: 'B', text: 'Bloeding' },
          { letter: 'C', text: 'Gallekkage' },
          { letter: 'D', text: 'Perforatie' },
          { letter: 'E', text: 'Hyperplastische poliep' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        explanation: 'Complicaties: cholangitis, bloeding, gallekkage en perforatie.',
      },
    ],
  },
  {
    id: 'casus-2',
    title: 'Casus 2 – Erfelijk maagkankerrisico en chemoradiatie-afweging',
    totalPoints: 13,
    scenario:
      'Een 34-jarige vrouw komt op de polikliniek klinische genetica omdat haar vader op jonge leeftijd een diffuus maagcarcinoom had. In de familie komen ook lobulaire borstkankers voor. Genetisch onderzoek toont een pathogene variant. Zij heeft zelf nog geen klachten.\n\nBij een tweede patiënt bespreekt het MDO een oesofagus-cardiatumor. De patiënt is kwetsbaar en een grote operatie lijkt risicovol. De vraag is of neoadjuvante chemoradiatie gevolgd door operatie, of definitieve chemoradiatie zonder operatie, passender is.',
    questions: [
      {
        id: '2a',
        type: 'meerkeuze',
        points: 1.0,
        question:
          'Welk syndroom past het best bij een jonge patiënt met familiair diffuus maagcarcinoom en lobulair mammacarcinoom in de familie?',
        options: [
          { letter: 'A', text: 'HDGC' },
          { letter: 'B', text: 'Lactose-intolerantie' },
          { letter: 'C', text: 'MASLD' },
          { letter: 'D', text: 'Chronische pancreatitis' },
        ],
        correctAnswer: 'A',
        explanation: 'HDGC past bij familiair diffuus maagcarcinoom en lobulair mammacarcinoom.',
      },
      {
        id: '2b',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Welke genen worden in de stof gekoppeld aan HDGC?',
        options: [
          { letter: 'A', text: 'CDH1 en zeldzaam CTNNA1' },
          { letter: 'B', text: 'CFTR en SPINK1' },
          { letter: 'C', text: 'BRAF en KRAS' },
          { letter: 'D', text: 'HFE en ALDOB' },
        ],
        correctAnswer: 'A',
        explanation: 'HDGC wordt gekoppeld aan CDH1 en zeldzaam CTNNA1.',
      },
      {
        id: '2c',
        type: 'koppelvraag',
        points: 2.0,
        question: 'Koppel het syndroom aan het juiste gen.',
        items: [
          'FAP',
          'Juveniele polyposis syndroom',
          'Peutz-Jeghers syndroom',
          'Li-Fraumeni-syndroom',
        ],
        matchOptions: [
          { letter: 'A', text: 'STK11' },
          { letter: 'B', text: 'TP53' },
          { letter: 'C', text: 'APC' },
          { letter: 'D', text: 'SMAD4' },
          { letter: 'E', text: 'PRSS1' },
        ],
        correctMapping: { 0: 'C', 1: 'D', 2: 'A', 3: 'B' },
        explanation: 'FAP → APC; JPS → SMAD4; PJS → STK11; Li-Fraumeni → TP53.',
      },
      {
        id: '2d',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Wat is volgens de stof vaak het advies bij HDGC?',
        options: [
          {
            letter: 'A',
            text: 'Profylactische totale gastrectomie, met eventueel surveillance om chirurgie bij geselecteerde patiënten uit te stellen',
          },
          { letter: 'B', text: 'Geen follow-up, omdat HDGC geen kankerrisico geeft' },
          { letter: 'C', text: 'Alleen jaarlijkse FIT' },
          { letter: 'D', text: 'Standaard bariatrische chirurgie' },
        ],
        correctAnswer: 'A',
        explanation:
          'Profylactische totale gastrectomie, met eventueel surveillance om chirurgie bij geselecteerde patiënten uit te stellen.',
      },
      {
        id: '2e',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Welke premaligne route hoort vooral bij het intestinale type maagcarcinoom?',
        options: [
          {
            letter: 'A',
            text: 'Correa-cascade vanuit atrofische gastritis en intestinale metaplasie',
          },
          {
            letter: 'B',
            text: 'Directe overgang van lactasedeficiëntie naar coloncarcinoom',
          },
          { letter: 'C', text: 'Acute pancreatitis naar HCC' },
          { letter: 'D', text: 'Dumpingklachten naar oesofaguscarcinoom' },
        ],
        correctAnswer: 'A',
        explanation: 'Correa-cascade vanuit atrofische gastritis en intestinale metaplasie.',
      },
      {
        id: '2f',
        type: 'koppelvraag',
        points: 2.0,
        question: 'Vul de tabel aan.',
        items: [
          'nCRT — doel',
          'nCRT — duur',
          'nCRT — totale bestralingsdosis volgens de stof',
          'dCRT — doel',
          'dCRT — duur',
          'dCRT — totale bestralingsdosis volgens de stof',
        ],
        matchOptions: [
          { letter: 'A', text: 'Tumor verkleinen / voorbereiden op operatie' },
          { letter: 'B', text: '5 weken' },
          { letter: 'C', text: '50,4 Gy' },
          { letter: 'D', text: 'Curatieve behandeling zonder operatie' },
          { letter: 'E', text: '6 weken' },
          { letter: 'F', text: '59,4 Gy' },
        ],
        correctMapping: { 0: 'A', 1: 'B', 2: 'C', 3: 'D', 4: 'E', 5: 'F' },
        explanation: 'nCRT → verkleinen/operatie, 5 weken, 50,4 Gy; dCRT → curatief zonder operatie, 6 weken, 59,4 Gy.',
      },
      {
        id: '2g',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Wanneer wordt volgens de stof geen slokdarmresectie uitgevoerd?',
        options: [
          {
            letter: 'A',
            text: 'Bij cT4b-tumoren met ingroei in andere organen of uitgezaaide ziekte op afstand',
          },
          { letter: 'B', text: 'Bij elke fitte patiënt met lokale ziekte' },
          { letter: 'C', text: 'Als de tumor laag in de slokdarm zit zonder metastasen' },
          { letter: 'D', text: 'Als chemotherapie mogelijk is' },
        ],
        correctAnswer: 'A',
        explanation:
          'Geen slokdarmresectie bij cT4b-tumoren met ingroei in andere organen of uitgezaaide ziekte op afstand.',
      },
      {
        id: '2h',
        type: 'meerdere_antwoorden',
        points: 2.0,
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.5,
        question:
          'Welke bijwerkingen of gevolgen passen bij dCRT?\n\nLet op: meerdere antwoorden kunnen juist zijn.',
        options: [
          { letter: 'A', text: 'Radiatie-oesofagitis' },
          { letter: 'B', text: 'Passageklachten en pijn' },
          {
            letter: 'C',
            text: 'Tijdelijk niet kunnen eten/drinken met behoefte aan sondevoeding',
          },
          { letter: 'D', text: 'Radiatiepneumonitis of hartschade' },
          { letter: 'E', text: 'Directe genezing zonder bijwerkingen' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        explanation:
          'dCRT: radiatie-oesofagitis, passageklachten, voedingsproblemen en radiatiepneumonitis/hartschade.',
      },
      {
        id: '2i',
        type: 'open',
        points: 1.0,
        question:
          'Leg uit waarom dCRT curatief bedoeld kan zijn, maar toch een zware behandeling is. Beantwoord in maximaal 60 woorden.',
        wordLimit: 60,
        rubric:
          '0,5p curatieve intentie zonder operatie; 0,5p zware toxiciteit/bijwerkingen.',
        modelAnswer:
          'dCRT kan curatief bedoeld zijn omdat de tumor met hoge dosis chemoradiatie wordt behandeld zonder operatie. Het blijft zwaar door radiatie-oesofagitis, pijn, passageklachten, voedingsproblemen en mogelijke schade aan longen of hart.',
        explanation: 'Curatieve intentie zonder operatie, maar zware toxiciteit.',
      },
      {
        id: '2j',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Waarom is MDO-besluitvorming bij slokdarm- en maagkanker essentieel?',
        options: [
          {
            letter: 'A',
            text: 'Omdat de behandeling afhangt van tumorlocatie, stadium, metastasen en fitheid van de patiënt',
          },
          { letter: 'B', text: 'Omdat de huisarts alleen altijd de operatie uitvoert' },
          { letter: 'C', text: 'Omdat stadiëring bij deze tumoren niet relevant is' },
          { letter: 'D', text: 'Omdat chemotherapie nooit wordt gecombineerd met radiotherapie' },
        ],
        correctAnswer: 'A',
        explanation:
          'De behandeling hangt af van tumorlocatie, stadium, metastasen en fitheid van de patiënt.',
      },
    ],
  },
]
