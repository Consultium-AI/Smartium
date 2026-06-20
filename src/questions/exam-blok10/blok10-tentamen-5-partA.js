/** Blok 10 oefententamen 5 (Final Boss 2.0) — casussen 1–2 · bron: VRAGEN + antwoordmodel (25 p totaal) */

export const blok10Tentamen5PartA = [
  {
    id: 'casus-1',
    title: 'Casus 1 – Lever 2.0: steatotische leverziekte, alcohol, cirrose en medicatieveiligheid',
    totalPoints: 13,
    scenario:
      'Een 54-jarige man komt op de polikliniek MDL vanwege afwijkende leverwaarden. Hij heeft obesitas, diabetes mellitus type 2 en hypertensie. Hij drinkt volgens eigen zeggen "alleen sociaal", maar bij doorvragen blijkt dat hij vrijwel dagelijks alcohol drinkt en in het weekend meer. Hij gebruikt daarnaast diclofenac tegen kniepijn en soms slaapmedicatie.\n\nBij lichamelijk onderzoek zijn er spider naevi en milde splenomegalie. Laboratoriumonderzoek toont een licht verhoogd bilirubine, verlaagd albumine, INR 1,5 en trombocyten 82 x 10⁹/L.\n\nDe arts bespreekt of dit past bij MASLD, MetALD, ALD of al gevorderde chronische leverziekte. Ook moet worden nagedacht over medicatieveiligheid, portale hypertensie en welke labwaarden iets zeggen over leverfunctie.',
    questions: [
      {
        id: '1a',
        type: 'meerkeuze',
        points: 1.0,
        question:
          'Welke classificatie past het best als er zowel metabole risicofactoren als relevant alcoholgebruik bijdragen aan steatotische leverziekte?',
        options: [
          { letter: 'A', text: 'MASLD' },
          { letter: 'B', text: 'MetALD' },
          { letter: 'C', text: 'ALD zonder metabole bijdrage' },
          { letter: 'D', text: 'Functionele dyspepsie' },
        ],
        correctAnswer: 'B',
        explanation:
          'MetALD: metabole dysfunctie en matig verhoogd alcoholgebruik dragen samen bij.',
      },
      {
        id: '1b',
        type: 'koppelvraag',
        points: 2.0,
        question: 'Koppel de categorie aan de beste omschrijving.',
        items: ['MASLD', 'MetALD', 'ALD', 'MASH'],
        matchOptions: [
          {
            letter: 'A',
            text: 'Steatotische leverziekte waarbij alcohol centraal staat',
          },
          {
            letter: 'B',
            text: 'Steatose met metabole risicofactoren en laag alcoholgebruik',
          },
          {
            letter: 'C',
            text: 'Metabole dysfunctie en matig verhoogd alcoholgebruik dragen samen bij',
          },
          {
            letter: 'D',
            text: 'Steatohepatitis binnen het metabole spectrum',
          },
          { letter: 'E', text: 'Acute obstructie van de papil van Vater' },
        ],
        correctMapping: { 0: 'B', 1: 'C', 2: 'A', 3: 'D' },
        explanation: 'MASLD → B; MetALD → C; ALD → A; MASH → D.',
      },
      {
        id: '1c',
        type: 'koppelvraag',
        points: 2.0,
        question: 'Vul de tabel aan.',
        items: ['Albumine', 'INR', 'Bilirubine', 'Trombocyten'],
        matchOptions: [
          { letter: 'A', text: 'Lever-synthesefunctie' },
          {
            letter: 'B',
            text: 'Stollings-/synthesefunctie van de lever',
          },
          {
            letter: 'C',
            text: 'Bilirubinemetabolisme, uitscheiding, cholestase of galpigmentverwerking',
          },
          { letter: 'D', text: 'Portale hypertensie/hypersplenisme' },
        ],
        correctMapping: { 0: 'A', 1: 'B', 2: 'C', 3: 'D' },
        explanation:
          'Albumine → synthese; INR → stolling; bilirubine → bilirubine; trombocyten → portale hypertensie.',
      },
      {
        id: '1d',
        type: 'open',
        points: 1.0,
        question:
          'Waarom moet alcoholgebruik expliciet worden uitgevraagd bij verdenking op steatotische leverziekte? Beantwoord in maximaal 50 woorden.',
        wordLimit: 50,
        rubric:
          '0,5p classificatie noemen; 0,5p gevolg voor beleid/prognose noemen.',
        modelAnswer:
          'Alcoholgebruik moet expliciet worden uitgevraagd omdat het de classificatie verandert naar MASLD, MetALD of ALD. Dit heeft gevolgen voor prognose, beleid, leefstijladvies en inschatting van progressie naar fibrose of cirrose.',
        explanation:
          'Alcohol bepaalt classificatie (MASLD/MetALD/ALD) en daarmee prognose en beleid.',
      },
      {
        id: '1e',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Welke combinatie past het best bij portale hypertensie?',
        options: [
          { letter: 'A', text: 'Splenomegalie en trombocytopenie' },
          { letter: 'B', text: 'Verhoogd lactase en normale milt' },
          { letter: 'C', text: 'Alleen reflux na koffie' },
          { letter: 'D', text: 'Alleen positieve FIT' },
        ],
        correctAnswer: 'A',
        explanation:
          'Splenomegalie en trombocytopenie passen bij portale hypertensie/hypersplenisme.',
      },
      {
        id: '1f',
        type: 'meerdere_antwoorden',
        points: 2.0,
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.5,
        question:
          'Welke bevindingen passen bij gevorderde chronische leverziekte of cirrose?\n\nLet op: meerdere antwoorden kunnen juist zijn.',
        options: [
          { letter: 'A', text: 'Verlaagd albumine' },
          { letter: 'B', text: 'Verhoogde INR' },
          {
            letter: 'C',
            text: 'Trombocytopenie door portale hypertensie/hypersplenisme',
          },
          { letter: 'D', text: 'Spider naevi' },
          {
            letter: 'E',
            text: 'Geïsoleerde lactasedeficiëntie als directe oorzaak van cirrose',
          },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        explanation:
          'Verlaagd albumine, verhoogde INR, trombocytopenie en spider naevi passen bij cirrose.',
      },
      {
        id: '1g',
        type: 'meerkeuze',
        points: 1.0,
        question:
          'Welke medicatie is bij deze patiënt met gevorderde leverziekte en mogelijke portale hypertensie het meest problematisch?',
        options: [
          { letter: 'A', text: 'NSAID zoals diclofenac' },
          { letter: 'B', text: 'Lactulose bij encefalopathie' },
          { letter: 'C', text: 'Rifaximine bij recidiverende encefalopathie' },
          { letter: 'D', text: 'Vitamine D bij deficiëntie' },
        ],
        correctAnswer: 'A',
        explanation: 'NSAID zoals diclofenac is het meest problematisch bij cirrose.',
      },
      {
        id: '1h',
        type: 'meerkeuze',
        points: 1.0,
        question:
          'Wat is de belangrijkste reden dat fibrosegraad prognostisch belangrijker is dan alleen de hoeveelheid vet in de lever?',
        options: [
          {
            letter: 'A',
            text: 'Fibrose voorspelt beter het risico op progressie naar cirrose en complicaties',
          },
          { letter: 'B', text: 'Vet in de lever is altijd onschuldig' },
          { letter: 'C', text: 'Fibrose komt alleen bij kinderen voor' },
          {
            letter: 'D',
            text: 'Fibrose betekent altijd directe indicatie voor bariatrie',
          },
        ],
        correctAnswer: 'A',
        explanation:
          'Fibrose voorspelt beter het risico op progressie naar cirrose en complicaties.',
      },
      {
        id: '1i',
        type: 'meerkeuze',
        points: 1.0,
        question:
          'Een patiënt met gedecompenseerde cirrose en sarcopenie wil snel afvallen. Wat is het beste uitgangspunt?',
        options: [
          {
            letter: 'A',
            text: 'Eiwitrijk dieet en late avondsnack overwegen, geen agressief vasten',
          },
          { letter: 'B', text: 'Compleet eiwitverbod' },
          { letter: 'C', text: 'Alleen water drinken gedurende 2 weken' },
          { letter: 'D', text: 'Alle beweging vermijden' },
        ],
        correctAnswer: 'A',
        explanation:
          'Eiwitrijk dieet en late avondsnack overwegen; geen agressief vasten bij cirrose.',
      },
      {
        id: '1j',
        type: 'open',
        points: 1.0,
        question:
          'Leg in maximaal 60 woorden uit waarom medicatieveiligheid bij cirrose belangrijker wordt naarmate leverfunctie en portale circulatie verslechteren.',
        wordLimit: 60,
        rubric:
          '0,5p verminderde leverfunctie/metabolisme/eiwitbinding/shunting noemen; 0,5p verhoogde toxiciteit of risico\'s zoals nierfalen/bloeding/ascites noemen.',
        modelAnswer:
          'Bij cirrose nemen metabolisme, synthese, portale circulatie en soms nierfunctie af. Daardoor kunnen geneesmiddelspiegels, eiwitbinding en toxiciteit veranderen. NSAID\'s kunnen bovendien nierfalen, bloedingen of ascitesverergering uitlokken. Medicatie moet daarom kritischer worden gekozen.',
        explanation:
          'Verminderde leverfunctie verandert metabolisme en toxiciteit; NSAID\'s verhogen complicatierisico\'s.',
      },
    ],
  },
  {
    id: 'casus-2',
    title: 'Casus 2 – Obesitas, diabetesremissie, voeding en behandelkeuze',
    totalPoints: 12,
    scenario:
      'Een 46-jarige vrouw met obesitas graad II en diabetes mellitus type 2 vraagt op de polikliniek om "de snelste oplossing". Zij heeft eerder meerdere afvalpogingen gedaan. Ze wil eigenlijk direct starten met medicatie of bariatrie, maar vertelt ook dat ze eetbuien heeft bij stress en momenteel ernstig somber is.\n\nZe schaamt zich voor haar gewicht, heeft slechte ervaringen met artsen en zegt: "Ze denken toch allemaal dat ik lui ben." De arts bespreekt leefstijlbehandeling, medicatie, bariatrie, diabetesremissie, terugvalrisico, voedingsstatus en stigma.',
    questions: [
      {
        id: '2a',
        type: 'meerkeuze',
        points: 1.0,
        question:
          'Waarom is het onjuist om obesitas uitsluitend als gebrek aan wilskracht te zien?',
        options: [
          {
            letter: 'A',
            text: 'Obesitas is een chronische aandoening met biologische, gedragsmatige, sociale en psychische factoren',
          },
          { letter: 'B', text: 'Obesitas heeft nooit medische gevolgen' },
          {
            letter: 'C',
            text: 'Obesitas wordt altijd uitsluitend door één maaltijd veroorzaakt',
          },
          { letter: 'D', text: 'Obesitas verdwijnt altijd zonder begeleiding' },
        ],
        correctAnswer: 'A',
        explanation:
          'Obesitas is een chronische aandoening met biologische, gedragsmatige, sociale en psychische factoren.',
      },
      {
        id: '2b',
        type: 'meerdere_antwoorden',
        points: 2.0,
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.5,
        question:
          'Welke onderdelen horen bij niet-medicamenteuze behandeling van obesitas?\n\nLet op: meerdere antwoorden kunnen juist zijn.',
        options: [
          { letter: 'A', text: 'Voeding' },
          { letter: 'B', text: 'Beweging' },
          { letter: 'C', text: 'Gedragsverandering' },
          { letter: 'D', text: 'Begeleiding/structuur' },
          { letter: 'E', text: 'Alleen schuldgevoel versterken' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        explanation:
          'Niet-medicamenteuze behandeling: voeding, beweging, gedragsverandering en begeleiding/structuur.',
      },
      {
        id: '2c',
        type: 'koppelvraag',
        points: 2.0,
        question: 'Vul de tabel aan.',
        items: [
          'GLI/leefstijl — mechanisme/doel',
          'GLI/leefstijl — aandachtspunt',
          'GLP-1-agonist — mechanisme/doel',
          'GLP-1-agonist — aandachtspunt',
          'SGLT2-remmer — mechanisme/doel',
          'SGLT2-remmer — aandachtspunt',
          'Bariatrische chirurgie — mechanisme/doel',
          'Bariatrische chirurgie — aandachtspunt',
        ],
        matchOptions: [
          {
            letter: 'A',
            text: 'Voeding, beweging en gedrag duurzaam aanpassen',
          },
          {
            letter: 'B',
            text: 'Basis van behandeling, ook naast medicatie/chirurgie',
          },
          {
            letter: 'C',
            text: 'Meer verzadiging, tragere maaglediging, minder eetlust',
          },
          {
            letter: 'D',
            text: 'Bijwerkingen en langdurige begeleiding nodig',
          },
          {
            letter: 'E',
            text: 'Glucoseverlies via urine, verbetering glucoseregulatie',
          },
          {
            letter: 'F',
            text: 'Vooral diabetesmiddel; let op bijwerkingen/indicatie',
          },
          {
            letter: 'G',
            text: 'Restrictie/malabsorptie/hormonale effecten, grote kans op gewichtsverlies en DM2-remissie',
          },
          {
            letter: 'H',
            text: 'Selectie, contra-indicaties, follow-up, tekorten/terugval',
          },
        ],
        correctMapping: {
          0: 'A',
          1: 'B',
          2: 'C',
          3: 'D',
          4: 'E',
          5: 'F',
          6: 'G',
          7: 'H',
        },
        explanation:
          'GLI → voeding/beweging + basis; GLP-1 → verzadiging + bijwerkingen; SGLT2 → glucosurie + diabetesmiddel; bariatrie → restrictie/remissie + selectie/follow-up.',
      },
      {
        id: '2d',
        type: 'meerkeuze',
        points: 1.0,
        question:
          'Welke factor is in deze casus een belangrijke reden om bariatrie voorlopig zorgvuldig te heroverwegen of uit te stellen?',
        options: [
          {
            letter: 'A',
            text: 'Vastgestelde eetpathologie of ernstige psychiatrische/psychosociale problematiek',
          },
          { letter: 'B', text: 'Leeftijd boven 18 jaar' },
          { letter: 'C', text: 'Aanwezigheid van diabetes mellitus type 2' },
          { letter: 'D', text: 'Eerdere afvalpogingen' },
        ],
        correctAnswer: 'A',
        explanation:
          'Eetpathologie of ernstige psychiatrische/psychosociale problematiek is reden bariatrie uit te stellen.',
      },
      {
        id: '2e',
        type: 'open',
        points: 1.0,
        question:
          'Waarom blijft leefstijlbegeleiding nodig, ook als medicatie of bariatrie wordt ingezet? Beantwoord in maximaal 50 woorden.',
        wordLimit: 50,
        rubric:
          '0,5p leefstijl blijft basis noemen; 0,5p terugval/follow-up/duurzaamheid noemen.',
        modelAnswer:
          'Medicatie en bariatrie helpen alleen duurzaam als gedrag, voeding, beweging en begeleiding worden meegenomen. Zonder leefstijlbegeleiding blijft de kans op terugval, inadequate voedingsinname of onvoldoende zelfmanagement groot.',
        explanation:
          'Leefstijl blijft basis; zonder begeleiding blijft terugvalrisico groot.',
      },
      {
        id: '2f',
        type: 'meerkeuze',
        points: 1.0,
        question:
          'Welke behandeling geeft volgens de stof vaak de grootste kans op diabetesremissie bij passende indicatie?',
        options: [
          { letter: 'A', text: 'Bariatrische chirurgie' },
          { letter: 'B', text: 'Alleen multivitaminen' },
          { letter: 'C', text: 'Alleen rectaal toucher' },
          { letter: 'D', text: 'Alleen PPI gedurende 1 week' },
        ],
        correctAnswer: 'A',
        explanation: 'Bariatrische chirurgie geeft vaak de grootste kans op diabetesremissie.',
      },
      {
        id: '2g',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Welke uitspraak over stigma bij obesitas is het meest juist?',
        options: [
          {
            letter: 'A',
            text: 'Stigma kan psychische belasting geven en de behandelrelatie schaden',
          },
          { letter: 'B', text: 'Stigma helpt patiënten altijd beter afvallen' },
          { letter: 'C', text: 'Stigma bestaat alleen buiten de zorg' },
          { letter: 'D', text: 'Stigma is medisch irrelevant' },
        ],
        correctAnswer: 'A',
        explanation:
          'Stigma kan psychische belasting geven en de behandelrelatie schaden.',
      },
      {
        id: '2h',
        type: 'meerdere_antwoorden',
        points: 1.0,
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 1 / 3,
        question:
          'Welke domeinen horen bij een brede nutritional assessment?\n\nLet op: meerdere antwoorden kunnen juist zijn.',
        options: [
          { letter: 'A', text: 'Inname, verbruik en verliezen' },
          { letter: 'B', text: 'Lichaamssamenstelling en nutriëntenreserves' },
          { letter: 'C', text: 'Functionele parameters' },
          { letter: 'D', text: 'Alleen BMI' },
          { letter: 'E', text: 'Alleen kledingmaat' },
        ],
        correctAnswers: ['A', 'B', 'C'],
        explanation:
          'Brede nutritional assessment: inname/verbruik/verliezen, lichaamssamenstelling en functionele parameters.',
      },
      {
        id: '2i',
        type: 'open',
        points: 1.0,
        question:
          'Leg in maximaal 50 woorden uit waarom gewichtsverlies na behandeling niet automatisch betekent dat de voedingsstatus goed is.',
        wordLimit: 50,
        rubric:
          '0,5p gewicht/BMI is onvoldoende noemen; 0,5p spiermassa/nutriëntentekort/functioneren noemen.',
        modelAnswer:
          'Gewichtsverlies zegt niet automatisch iets over spiermassa, micronutriënten, eiwitinname of functioneren. Iemand kan gewicht verliezen, maar tegelijk spiermassa of nutriëntenreserves verliezen en daardoor toch ondervoed raken.',
        explanation:
          'Gewichtsverlies zegt niets over spiermassa, nutriënten of functioneren.',
      },
      {
        id: '2j',
        type: 'meerkeuze',
        points: 1.0,
        question:
          'Wat is bij behandelkeuze voor obesitas naast medische ernst ook belangrijk?',
        options: [
          {
            letter: 'A',
            text: 'Motivatie, eerdere pogingen, comorbiditeit, sociale/praktische situatie en mogelijkheid tot begeleiding',
          },
          { letter: 'B', text: 'Alleen de kleur van de schoenen' },
          { letter: 'C', text: 'Alleen het aantal keer dat iemand koffie drinkt' },
          { letter: 'D', text: 'Alleen de uitslag van een FIT' },
        ],
        correctAnswer: 'A',
        explanation:
          'Motivatie, eerdere pogingen, comorbiditeit, sociale situatie en begeleiding zijn belangrijk.',
      },
    ],
  },
]
