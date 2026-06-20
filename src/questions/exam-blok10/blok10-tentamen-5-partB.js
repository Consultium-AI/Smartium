/** Blok 10 oefententamen 5 (Final Boss 2.0) — casussen 3–4 · bron: VRAGEN + antwoordmodel (24 p totaal) */

const ENZYMACTIVATIE_CORRECT = [
  'Acinaire cellen produceren zymogenen',
  'Zymogenen bereiken het duodenum',
  'Enteropeptidase activeert trypsinogeen',
  'Trypsine ontstaat',
  'Trypsine activeert andere zymogenen',
]

const ENZYMACTIVATIE_SHUFFLED = [
  'Trypsine activeert andere zymogenen',
  'Enteropeptidase activeert trypsinogeen',
  'Acinaire cellen produceren zymogenen',
  'Zymogenen bereiken het duodenum',
  'Trypsine ontstaat',
]

export const blok10Tentamen5PartB = [
  {
    id: 'casus-3',
    title: 'Casus 3 – Pancreas en HPB integratief: fysiologie, obstructie, pancreatitis en voeding',
    totalPoints: 12,
    scenario:
      'Een 61-jarige man presenteert zich met hevige epigastrische pijn uitstralend naar de rug, misselijkheid en braken. Hij is bekend met galstenen. Laboratoriumonderzoek toont lipase >3x de bovengrens van normaal en verhoogde cholestatische leverwaarden. Echo toont galstenen en een licht verwijde ductus choledochus. Er is geen koorts.\n\nDe arts-assistent moet beredeneren hoe een galsteen pancreatitis kan uitlokken, wanneer ERCP zinvol is en waarom lipase alleen onvoldoende is voor beleid.\n\nLater verslechtert de patiënt klinisch en wordt necrose gezien op CT. De voedingsinname blijft laag door pijn en misselijkheid.',
    questions: [
      {
        id: '3a',
        type: 'meerkeuze',
        points: 1.0,
        question:
          'Welke twee criteria zijn in deze casus al voldoende voor de diagnose acute pancreatitis?',
        options: [
          { letter: 'A', text: 'Typische pijn en lipase/amylase >3x normaal' },
          { letter: 'B', text: 'Alleen verhoogd bilirubine en jeuk' },
          { letter: 'C', text: 'Alleen diarree en lactose-intolerantie' },
          { letter: 'D', text: 'Alleen gewichtsverlies en positieve FIT' },
        ],
        correctAnswer: 'A',
        explanation: 'Typische pijn en lipase/amylase >3x normaal zijn voldoende voor de diagnose.',
      },
      {
        id: '3b',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Hoe kan een galsteen acute pancreatitis veroorzaken?',
        options: [
          {
            letter: 'A',
            text: 'Door vastlopen bij de papil van Vater met obstructie van afvoer van pancreassap',
          },
          { letter: 'B', text: 'Door directe vorming van colonpoliepen' },
          { letter: 'C', text: 'Door verlaging van lactase in het jejunum' },
          { letter: 'D', text: 'Door verhoging van intrinsic factor' },
        ],
        correctAnswer: 'A',
        explanation:
          'Galsteen kan vastlopen bij de papil van Vater met obstructie van pancreassapafvoer.',
      },
      {
        id: '3c',
        type: 'beeldvraag',
        points: 2.0,
        question:
          'Zet de enzymactivatie in de juiste volgorde.\n\nStappen:\n• Trypsine activeert andere zymogenen\n• Enteropeptidase activeert trypsinogeen\n• Acinaire cellen produceren zymogenen\n• Zymogenen bereiken het duodenum\n• Trypsine ontstaat',
        gradingMethod: 'order',
        orderIntro: 'Juiste volgorde (1 = eerste stap):',
        orderOptions: [...ENZYMACTIVATIE_SHUFFLED],
        correctOrder: [...ENZYMACTIVATIE_CORRECT],
        expectedAnswer: '3 → 4 → 2 → 5 → 1',
        rubric: '2p totaal. Deelpunten mogelijk bij grotendeels juiste volgorde.',
        modelAnswer: '3 → 4 → 2 → 5 → 1',
        explanation:
          'Eerst zymogenen produceren, dan duodenum, enteropeptidase/trypsine, daarna andere zymogenen.',
      },
      {
        id: '3d',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Wanneer is ERCP bij biliaire pancreatitis het meest passend?',
        options: [
          { letter: 'A', text: 'Bij cholangitis of persisterende galwegobstructie' },
          { letter: 'B', text: 'Bij elke milde pancreatitis zonder cholestase' },
          { letter: 'C', text: 'Alleen om serumlipase te meten' },
          { letter: 'D', text: 'Als behandeling van lactose-intolerantie' },
        ],
        correctAnswer: 'A',
        explanation: 'ERCP is passend bij cholangitis of persisterende galwegobstructie.',
      },
      {
        id: '3e',
        type: 'meerdere_antwoorden',
        points: 2.0,
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.5,
        question:
          'Welke bevindingen wijzen op een ernstiger of gecompliceerder beloop van acute pancreatitis?\n\nLet op: meerdere antwoorden kunnen juist zijn.',
        options: [
          { letter: 'A', text: 'Necrose op CT' },
          { letter: 'B', text: 'Orgaanfalen' },
          { letter: 'C', text: 'Klinische verslechtering' },
          { letter: 'D', text: 'Geïnfecteerde necrose' },
          { letter: 'E', text: 'Eenmalig zuurbranden na grote maaltijd' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        explanation:
          'Necrose, orgaanfalen, klinische verslechtering en geïnfecteerde necrose wijzen op ernstiger beloop.',
      },
      {
        id: '3f',
        type: 'open',
        points: 1.0,
        question:
          'Waarom is lipase alleen onvoldoende om het beleid te bepalen? Beantwoord in maximaal 50 woorden.',
        wordLimit: 50,
        rubric:
          '0,5p lipase is diagnostisch maar niet genoeg voor ernst/beleid; 0,5p kliniek/oorzaak/orgaanfalen/obstructie/beeldvorming/voeding noemen.',
        modelAnswer:
          'Lipase helpt bij de diagnose, maar bepaalt niet de ernst of behandeling. Beleid hangt ook af van oorzaak, orgaanfalen, cholangitis of obstructie, necrose op beeldvorming, klinische verslechtering en voedingstoestand.',
        explanation:
          'Lipase is diagnostisch; beleid hangt af van ernst, oorzaak, orgaanfalen en beeldvorming.',
      },
      {
        id: '3g',
        type: 'meerkeuze',
        points: 1.0,
        question:
          'Wat is het voedingsbeleid bij milde acute pancreatitis zodra klachten dit toelaten?',
        options: [
          {
            letter: 'A',
            text: 'Start orale voeding zodra mogelijk, niet wachten op normalisatie van lipase',
          },
          { letter: 'B', text: 'Altijd 3 weken nuchter blijven' },
          { letter: 'C', text: 'Alleen parenterale voeding bij iedere patiënt' },
          { letter: 'D', text: 'Voeding is verboden zolang CRP verhoogd is' },
        ],
        correctAnswer: 'A',
        explanation:
          'Start orale voeding zodra mogelijk; wacht niet op normalisatie van lipase.',
      },
      {
        id: '3h',
        type: 'meerkeuze',
        points: 1.0,
        question:
          'Wanneer heeft enterale voeding de voorkeur boven parenterale voeding?',
        options: [
          {
            letter: 'A',
            text: 'Als orale intake onvoldoende blijft en het maag-darmkanaal bruikbaar is',
          },
          { letter: 'B', text: 'Alleen bij volledige darmischemie' },
          { letter: 'C', text: 'Nooit bij pancreatitis' },
          { letter: 'D', text: 'Alleen bij positieve FIT' },
        ],
        correctAnswer: 'A',
        explanation:
          'Enterale voeding heeft voorkeur als orale intake onvoldoende is en het MDK bruikbaar is.',
      },
      {
        id: '3i',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Welke complicatie maakt geïnfecteerde necrose waarschijnlijker?',
        options: [
          {
            letter: 'A',
            text: 'Gas in een necrotische collectie of klinische tekenen van infectie',
          },
          { letter: 'B', text: 'Alleen normale eetlust' },
          { letter: 'C', text: 'Alleen lage lactose-inname' },
          { letter: 'D', text: 'Alleen zwangerschap' },
        ],
        correctAnswer: 'A',
        explanation:
          'Gas in necrotische collectie of klinische tekenen van infectie wijst op geïnfecteerde necrose.',
      },
      {
        id: '3j',
        type: 'open',
        points: 1.0,
        question:
          'Leg in maximaal 60 woorden uit waarom pancreatitis snel tot ondervoeding kan leiden.',
        wordLimit: 60,
        rubric:
          '0,5p verminderde intake door pijn/misselijkheid/braken noemen; 0,5p verhoogde behoefte/katabolie/complicaties/voedingsinterventie noemen.',
        modelAnswer:
          'Pancreatitis geeft pijn, misselijkheid, braken en katabole inflammatie, waardoor intake daalt en behoefte stijgt. Bij ernstig beloop of complicaties kan langdurig onvoldoende voeding ontstaan. Daarom is vroege voedingsbeoordeling en enterale voeding belangrijk.',
        explanation:
          'Verminderde intake en verhoogde behoefte door inflammatie leiden snel tot ondervoeding.',
      },
    ],
  },
  {
    id: 'casus-4',
    title: 'Casus 4 – Bovenste tractus: refluxachtige klachten, gastroparese, kind versus volwassene',
    totalPoints: 12,
    scenario:
      'Een 32-jarige zwangere vrouw heeft branderige retrosternale klachten, vooral na grote maaltijden en bij liggen. Ze gebruikt geen medicatie en heeft geen dysfagie of gewichtsverlies.\n\nIn dezelfde week wordt een 4 maanden oude zuigeling gezien wegens spugen na voedingen. De ouders geven wisselende hoeveelheden flesvoeding. De groeicurve is tot nu toe normaal.\n\nEen derde patiënt, een 58-jarige man met diabetes mellitus type 2, heeft misselijkheid, vol gevoel, braken na maaltijden en ontregelde glucosewaarden. De arts-assistent moet onderscheid maken tussen reflux door druk/hormonen, gewone reflux bij een zuigeling, alarmsymptomen en gastroparese.',
    questions: [
      {
        id: '4a',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Welke verklaring past het best bij refluxklachten tijdens zwangerschap?',
        options: [
          {
            letter: 'A',
            text: 'Progesteron verlaagt gladde-spierspanning en later neemt buikdruk toe',
          },
          { letter: 'B', text: 'Zwangerschap sluit reflux volledig uit' },
          { letter: 'C', text: 'Reflux ontstaat alleen door colonpoliepen' },
          { letter: 'D', text: 'Zwangerschap verhoogt altijd de LES-spanning' },
        ],
        correctAnswer: 'A',
        explanation:
          'Progesteron verlaagt gladde-spierspanning; later neemt buikdruk toe.',
      },
      {
        id: '4b',
        type: 'meerdere_antwoorden',
        points: 2.0,
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.5,
        question:
          'Welke factoren kunnen refluxklachten verergeren?\n\nLet op: meerdere antwoorden kunnen juist zijn.',
        options: [
          { letter: 'A', text: 'Grote maaltijden' },
          { letter: 'B', text: 'Liggen kort na het eten' },
          { letter: 'C', text: 'Verhoogde buikdruk' },
          { letter: 'D', text: 'Vertraagde maaglediging' },
          {
            letter: 'E',
            text: 'Volledig lege maag zonder druk of refluxbarrièreprobleem',
          },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        explanation:
          'Grote maaltijden, liggen na eten, verhoogde buikdruk en vertraagde maaglediging verergeren reflux.',
      },
      {
        id: '4c',
        type: 'koppelvraag',
        points: 2.0,
        question: 'Vul de tabel aan.',
        items: [
          'Zwangere met reflux zonder alarmsymptomen',
          'Zuigeling met spugen',
          'Diabetespatiënt met braken en vol gevoel',
          'Patiënt met progressieve dysfagie en gewichtsverlies',
        ],
        matchOptions: [
          {
            letter: 'A',
            text: 'Leefstijl/geruststelling, vermijden uitlokkende factoren, zo nodig veilige symptomatische behandeling',
          },
          {
            letter: 'B',
            text: 'Groei, voedingstechniek, hoeveelheid voeding en alarmsymptomen beoordelen',
          },
          {
            letter: 'C',
            text: 'Denken aan gastroparese/vertraagde maaglediging',
          },
          {
            letter: 'D',
            text: 'Alarmsymptomen, verdere diagnostiek/verwijzing/endoscopie',
          },
        ],
        correctMapping: { 0: 'A', 1: 'B', 2: 'C', 3: 'D' },
        explanation:
          'Zwangere → leefstijl; zuigeling → groei/voeding; diabetes → gastroparese; dysfagie → alarmsymptomen/endoscopie.',
      },
      {
        id: '4d',
        type: 'meerkeuze',
        points: 1.0,
        question:
          'Wat is bij de zuigeling met spugen en normale groei meestal de eerste aanpak?',
        options: [
          {
            letter: 'A',
            text: 'Uitleg, voedingstechniek/hoeveelheid beoordelen, houding en eventueel verdikken',
          },
          { letter: 'B', text: 'Direct slokdarmresectie' },
          { letter: 'C', text: 'Direct ERCP' },
          { letter: 'D', text: 'Altijd oncologische chemoradiatie' },
        ],
        correctAnswer: 'A',
        explanation:
          'Eerste aanpak: uitleg, voedingstechniek/hoeveelheid, houding en eventueel verdikken.',
      },
      {
        id: '4e',
        type: 'meerkeuze',
        points: 1.0,
        question:
          'Welke bevinding bij een kind met refluxklachten is het meest alarmerend?',
        options: [
          { letter: 'A', text: 'Afbuigende groeicurve of onvoldoende groei' },
          { letter: 'B', text: 'Soms spugen met normale groei' },
          { letter: 'C', text: 'Boertje na voeding' },
          {
            letter: 'D',
            text: 'Klachten die verbeteren met kleinere voedingen',
          },
        ],
        correctAnswer: 'A',
        explanation: 'Afbuigende groeicurve of onvoldoende groei is het meest alarmerend.',
      },
      {
        id: '4f',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Wat betekent gastroparese?',
        options: [
          {
            letter: 'A',
            text: 'Vertraagde maagontlediging zonder mechanische obstructie',
          },
          { letter: 'B', text: 'Versnelde galproductie' },
          { letter: 'C', text: 'Ontsteking van de appendix' },
          { letter: 'D', text: 'Verhoogde FIT-waarde' },
        ],
        correctAnswer: 'A',
        explanation: 'Gastroparese = vertraagde maagontlediging zonder mechanische obstructie.',
      },
      {
        id: '4g',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Welke klachten passen het best bij diabetische gastroparese?',
        options: [
          {
            letter: 'A',
            text: 'Misselijkheid, braken, vol gevoel en refluxachtige klachten',
          },
          { letter: 'B', text: 'Alleen helder rood bloedverlies per anum' },
          { letter: 'C', text: 'Alleen icterus door galwegsteen' },
          { letter: 'D', text: 'Alleen pijn bij defecatie' },
        ],
        correctAnswer: 'A',
        explanation:
          'Diabetische gastroparese: misselijkheid, braken, vol gevoel en refluxachtige klachten.',
      },
      {
        id: '4h',
        type: 'open',
        points: 1.0,
        question:
          'Leg in maximaal 50 woorden uit waarom zuurremming bij gastroparese niet altijd voldoende is.',
        wordLimit: 50,
        rubric:
          '0,5p vertraagde maaglediging/retentie noemen; 0,5p zuurremming lost motiliteit niet op noemen.',
        modelAnswer:
          'Bij gastroparese is het probleem niet alleen zuur, maar vertraagde maaglediging en maagretentie. Zuurremming kan zuurklachten verminderen, maar corrigeert de motiliteitsstoornis en voedselretentie niet.',
        explanation:
          'Probleem is motiliteit/retentie; zuurremming corrigeert dat niet.',
      },
      {
        id: '4i',
        type: 'open',
        points: 1.0,
        question:
          'Waarom zegt een normale groeicurve bij een zuigeling met refluxklachten veel over de ernst? Beantwoord in maximaal 50 woorden.',
        wordLimit: 50,
        rubric:
          '0,5p groei/voedingsinname over tijd noemen; 0,5p ernstige pathologie minder waarschijnlijk of afbuiging alarmerend noemen.',
        modelAnswer:
          'Een normale groeicurve laat zien dat het kind voldoende voeding binnenkrijgt en geen duidelijke groeiachterstand ontwikkelt. Dat maakt ernstige refluxziekte of een organische oorzaak minder waarschijnlijk dan bij afbuigende groei.',
        explanation:
          'Normale groei wijst op voldoende voeding; afbuigende groei is alarmerend.',
      },
      {
        id: '4j',
        type: 'meerkeuze',
        points: 1.0,
        question:
          'Welke patiënt uit deze casus heeft de sterkste indicatie voor verdere diagnostiek naar een ernstige onderliggende oorzaak?',
        options: [
          {
            letter: 'A',
            text: 'Patiënt met progressieve dysfagie en gewichtsverlies',
          },
          {
            letter: 'B',
            text: 'Zwangere met milde reflux zonder alarmsymptomen',
          },
          { letter: 'C', text: 'Zuigeling met normale groei en spugen' },
          {
            letter: 'D',
            text: 'Diabetespatiënt met bekende gastropareseklachten maar zonder alarmsymptomen',
          },
        ],
        correctAnswer: 'A',
        explanation:
          'Progressieve dysfagie en gewichtsverlies vragen om verdere diagnostiek.',
      },
    ],
  },
]
