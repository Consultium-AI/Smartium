/** Blok 5 oefententamen 4 — casussen 1–3 (bron: Blok 5 tentamen 4.docx; 139 punten totaal) */

export const blok5Tentamen4PartA = [
  {
    id: 'casus-1',
    title: 'Casus 1 – Melanoom',
    totalPoints: 21,
    scenario:
      'Een 63-jarige vrouw meldt zich bij de huisarts met een moedervlek op de rug die volgens haar partner in enkele maanden duidelijk is veranderd.',
    questions: [
      {
        id: '1a',
        type: 'meerdere_antwoorden',
        points: 2.0,
        partialCreditOnlyCorrect: true,
        question:
          'Welke veranderingen maken een melanocytaire laesie meer verdacht voor melanoom?',
        options: [
          { letter: 'A', text: 'Meerdere kleuren in één laesie' },
          { letter: 'B', text: 'Snelle verandering in de tijd' },
          { letter: 'C', text: 'Bloeden of ulceratie' },
          { letter: 'D', text: 'Volledig symmetrisch aspect zonder verandering' },
          { letter: 'E', text: '"Ugly duckling sign"' },
        ],
        correctAnswers: ['A', 'B', 'C', 'E'],
        explanation: 'Meerdere kleuren, snelle verandering, bloeden/ulceratie en ugly duckling sign zijn verdacht.',
      },
      {
        id: '1b',
        type: 'open',
        points: 2.0,
        question: 'Wat betekent het ugly duckling sign?',
        wordLimit: 20,
        rubric: 'Score: 1p duidelijk anders dan rest; 1p vergelijking met andere naevi van dezelfde patiënt.',
        modelAnswer:
          'Een moedervlek die duidelijk anders oogt dan de andere naevi van dezelfde patiënt.',
        explanation: 'Ugly duckling = één afwijkende moedervlek t.o.v. de rest.',
      },
      {
        id: '1c',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Welke aanpak is bij een verdachte melanocytaire laesie het meest passend?',
        options: [
          { letter: 'A', text: 'Cryotherapie' },
          { letter: 'B', text: 'Diagnostische excisie' },
          { letter: 'C', text: 'Alleen controle na 1 jaar' },
          { letter: 'D', text: 'Stansbiopt uit de periferie zonder verdere beoordeling' },
        ],
        correctAnswer: 'B',
        explanation: 'Bij verdenking op melanoom: diagnostische excisie.',
      },
      {
        id: '1d',
        type: 'meerdere_antwoorden',
        points: 2.0,
        partialCreditOnlyCorrect: true,
        question:
          'Bij een patiënt blijkt na pathologie sprake van een melanoom met grotere Breslow-dikte.\nWelke vervolgstappen kunnen passend zijn?',
        options: [
          { letter: 'A', text: 'Re-excisie met ruimere marges' },
          { letter: 'B', text: 'Sentinel node procedure' },
          { letter: 'C', text: 'Beeldvorming afhankelijk van stadium' },
          { letter: 'D', text: 'Nooit verdere diagnostiek nodig' },
          { letter: 'E', text: 'Moleculaire diagnostiek bij gemetastaseerde ziekte' },
        ],
        correctAnswers: ['A', 'B', 'C', 'E'],
        explanation: 'Re-excisie, sentinel node, stadiëring en moleculaire diagnostiek zijn relevante vervolgstappen.',
      },
      {
        id: '1e',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Welke uitspraak over FDG-PET/CT is het meest correct?',
        options: [
          { letter: 'A', text: 'Eén FDG-positieve afwijking bewijst altijd metastatische ziekte' },
          { letter: 'B', text: 'FDG-PET/CT combineert anatomische en metabole informatie' },
          { letter: 'C', text: 'FDG-PET/CT is de beste methode voor hersenmetastasen' },
          { letter: 'D', text: 'FDG-PET/CT vervangt histologie volledig' },
        ],
        correctAnswer: 'B',
        explanation: 'PET/CT combineert anatomische en metabole informatie; MRI is beter voor hersenmetastasen.',
      },
      {
        id: '1f',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Welke beeldvorming is het meest geschikt voor het aantonen van hersenmetastasen bij melanoom?',
        options: [
          { letter: 'A', text: 'X-thorax' },
          { letter: 'B', text: 'Echo oksel' },
          { letter: 'C', text: 'MRI cerebrum' },
          { letter: 'D', text: 'Mammografie' },
        ],
        correctAnswer: 'C',
        explanation: 'MRI cerebrum is de gouden standaard voor hersenmetastasen bij melanoom.',
      },
      {
        id: '1g',
        type: 'meerdere_antwoorden',
        points: 2.0,
        partialCreditOnlyCorrect: true,
        question:
          'Een metastase bevat een BRAF V600E-mutatie.\nWelke uitspraken zijn juist?',
        options: [
          { letter: 'A', text: 'Dit is een predictieve biomarker' },
          { letter: 'B', text: 'Dit maakt doelgerichte therapie mogelijk' },
          { letter: 'C', text: 'Dit sluit immunotherapie uit' },
          { letter: 'D', text: 'Dit betekent automatisch erfelijk melanoom' },
          { letter: 'E', text: 'Deze mutatie kan therapeutische consequenties hebben' },
        ],
        correctAnswers: ['A', 'B', 'E'],
        explanation: 'BRAF V600E is predictief, maakt doelgerichte therapie mogelijk en heeft therapeutische consequenties.',
      },
      {
        id: '1h',
        type: 'rekenvraag',
        points: 3.0,
        question:
          'Een nieuwe, effectieve behandeling kost €120.000 extra en levert gemiddeld 0,8 extra QALY op.\nBereken de ICER. Rond af op hele euro\'s.',
        correctValue: 150000,
        tolerance: 1,
        rubric: 'ICER = €120.000 / 0,8 = €150.000 per QALY.',
        modelAnswer: 'ICER = €120.000 / 0,8 = €150.000 per QALY',
        explanation: 'ICER = extra kosten / extra QALY = 120.000 / 0,8 = 150.000 euro per QALY.',
      },
      {
        id: '1i',
        type: 'meerkeuze',
        points: 2.0,
        question:
          'In een gezondheidszorgsysteem met een bepaalde willingness-to-pay-drempel, wat betekent het als de ICER boven die drempel ligt?',
        options: [
          { letter: 'A', text: 'De behandeling is per definitie klinisch ineffectief' },
          { letter: 'B', text: 'De behandeling is relatief ongunstig qua kosteneffectiviteit' },
          { letter: 'C', text: 'De behandeling mag medisch nooit gegeven worden' },
          { letter: 'D', text: 'De QALY wordt dan negatief' },
        ],
        correctAnswer: 'B',
        explanation: 'ICER boven WTP-drempel = relatief ongunstig qua kosteneffectiviteit.',
      },
      {
        id: '1j',
        type: 'meerkeuze',
        points: 2.0,
        question:
          'Wat is het meest waarschijnlijke effect van breed-spectrum antibiotica op de respons op immunotherapie, op basis van de stof over microbioom en immuuninteractie?',
        options: [
          { letter: 'A', text: 'Altijd betere respons door minder bacteriën' },
          { letter: 'B', text: 'Mogelijk slechtere respons door verstoring van microbiële balans' },
          { letter: 'C', text: 'Geen enkel biologisch verband denkbaar' },
          { letter: 'D', text: 'Alleen effect op de huid, niet op systemische afweer' },
        ],
        correctAnswer: 'B',
        explanation: 'Verstoring van het microbioom kan de immuunrespons op immunotherapie ongunstig beïnvloeden.',
      },
    ],
  },
  {
    id: 'casus-2',
    title: 'Casus 2 – Sociale geneeskunde / leefomgeving en kosteneffectiviteit',
    totalPoints: 18,
    scenario:
      'Een gezin woont in een recent gerenoveerde huurwoning. Sinds de renovatie zijn er klachten van hoofdpijn, vermoeidheid en benauwdheid, vooral ’s ochtends. Daarnaast bespreekt de gemeente een preventieprogramma tegen luchtwegklachten in een wijk.',
    questions: [
      {
        id: '2a',
        type: 'open',
        points: 2.0,
        question: 'Wat is het verschil tussen woning en woonomgeving?',
        wordLimit: 20,
        rubric: 'Score: 1p woning = huis zelf/binnenmilieu; 1p woonomgeving = omgeving rondom woning.',
        modelAnswer:
          'Woning is het huis zelf; woonomgeving is de fysieke en sociale omgeving rondom die woning.',
        explanation: 'Woning = binnenmilieu; woonomgeving = buitenmilieu rondom de woning.',
      },
      {
        id: '2b',
        type: 'meerkeuze',
        points: 2.0,
        question:
          'Welke instantie heeft in Nederland een belangrijke publieke rol bij gezondheidsrisico\'s in de leefomgeving?',
        options: [
          { letter: 'A', text: 'GGD' },
          { letter: 'B', text: 'UWV' },
          { letter: 'C', text: 'Zorgverzekeraar' },
          { letter: 'D', text: 'CBR' },
        ],
        correctAnswer: 'A',
        explanation: 'De GGD heeft een belangrijke publieke rol bij gezondheidsrisico\'s in de leefomgeving.',
      },
      {
        id: '2c',
        type: 'meerkeuze',
        points: 2.0,
        question:
          'Welke stof moet je direct overwegen bij sufheid, hoofdpijn en een huis met verbrandingstoestellen?',
        options: [
          { letter: 'A', text: 'Asbest' },
          { letter: 'B', text: 'Koolmonoxide' },
          { letter: 'C', text: 'Lood' },
          { letter: 'D', text: 'Ozon' },
        ],
        correctAnswer: 'B',
        explanation: 'Bij verbrandingstoestellen en neurologische klachten denk aan koolmonoxide.',
      },
      {
        id: '2d',
        type: 'meerdere_antwoorden',
        points: 2.0,
        partialCreditOnlyCorrect: true,
        question: 'Welke symptomen passen bij inhalatieletsel?',
        options: [
          { letter: 'A', text: 'Heesheid' },
          { letter: 'B', text: 'Stridor' },
          { letter: 'C', text: 'Dyspneu' },
          { letter: 'D', text: 'Roet in mond of neus' },
          { letter: 'E', text: 'Jeukende moedervlek' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        explanation: 'Heesheid, stridor, dyspneu en roet passen bij inhalatieletsel.',
      },
      {
        id: '2e',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Wat is een QALY?',
        options: [
          { letter: 'A', text: 'Een maat die lengte én kwaliteit van leven combineert' },
          { letter: 'B', text: 'Een maat voor alleen mortaliteit' },
          { letter: 'C', text: 'Een maat voor alleen ziekenhuisopnameduur' },
          { letter: 'D', text: 'Een maat voor testprestaties' },
        ],
        correctAnswer: 'A',
        explanation: 'QALY = Quality Adjusted Life Year, combineert lengte en kwaliteit van leven.',
      },
      {
        id: '2f',
        type: 'open',
        points: 4.0,
        question: `Een interventie kost €40.000 extra en levert 0,5 extra QALY op.
Bereken de ICER.
Is deze interventie kosteneffectief bij een WTP-drempel van €50.000 per QALY?`,
        wordLimit: 50,
        rubric:
          'Score: 1p juiste formule; 1p ICER €80.000/QALY; 1p vergelijking met WTP; 1p conclusie niet kosteneffectief.',
        modelAnswer:
          'ICER = €40.000 / 0,5 = €80.000 per QALY. Bij WTP €50.000/QALY is de interventie niet kosteneffectief.',
        explanation: 'ICER = 80.000 euro/QALY, boven WTP-drempel van 50.000 → niet kosteneffectief.',
      },
      {
        id: '2g',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Welke uitspraak over de Trechter van Dunning is het meest correct?',
        options: [
          { letter: 'A', text: 'Het is een volgorde van klinische alarmsymptomen' },
          { letter: 'B', text: 'Het is een denkkader voor pakketkeuzes in de zorg' },
          { letter: 'C', text: 'Het is een classificatie van huidtumoren' },
          { letter: 'D', text: 'Het is een schaal voor kinderoncologische overleving' },
        ],
        correctAnswer: 'B',
        explanation: 'De Trechter van Dunning is een denkkader voor pakketkeuzes (noodzakelijkheid, effectiviteit, kosteneffectiviteit).',
      },
      {
        id: '2h',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Wat betekent proportional shortfall het best?',
        options: [
          {
            letter: 'A',
            text: 'Het percentage van de normale gezondheidswinst dat iemand zonder interventie verliest',
          },
          { letter: 'B', text: 'Het aantal ziekenhuisbedden dat tekort is' },
          { letter: 'C', text: 'De sensitiviteit van een test in een arme populatie' },
          { letter: 'D', text: 'Het verschil tussen huur en koopwoning' },
        ],
        correctAnswer: 'A',
        explanation: 'Proportional shortfall = welk deel van verwachte gezonde levensjaren verloren gaat door ziekte.',
      },
    ],
  },
  {
    id: 'casus-3',
    title: 'Casus 3 – Multipel myeloom',
    totalPoints: 18,
    scenario:
      'Een 69-jarige man presenteert zich met moeheid, rugpijn en gewichtsverlies. In het serum wordt een M-proteïne gevonden. Er zijn osteolytische afwijkingen op beeldvorming.',
    questions: [
      {
        id: '3a',
        type: 'meerkeuze',
        points: 2.0,
        question:
          'Waarom betekent een M-proteïne niet automatisch dat een patiënt multipel myeloom heeft?',
        options: [
          { letter: 'A', text: 'Omdat je ook moet kijken naar beenmerg en orgaanschade' },
          { letter: 'B', text: 'Omdat M-proteïne alleen voorkomt bij acute infecties' },
          { letter: 'C', text: 'Omdat M-proteïne nooit door plasmacellen wordt gemaakt' },
          { letter: 'D', text: 'Omdat het alleen in urine voorkomt' },
        ],
        correctAnswer: 'A',
        explanation: 'Diagnose myeloom vereist ook beenmergbeoordeling en orgaanschade (CRAB).',
      },
      {
        id: '3b',
        type: 'meerdere_antwoorden',
        points: 2.0,
        partialCreditOnlyCorrect: true,
        question: 'Welke bevindingen passen bij CRAB?',
        options: [
          { letter: 'A', text: 'Hypercalciëmie' },
          { letter: 'B', text: 'Renale schade' },
          { letter: 'C', text: 'Anemie' },
          { letter: 'D', text: 'Botlaesies' },
          { letter: 'E', text: 'Hypothyreoïdie' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        explanation: 'CRAB = Hypercalciëmie, Renale schade, Anemie, Botlaesies.',
      },
      {
        id: '3c',
        type: 'koppelvraag',
        points: 2.0,
        question: 'Match het onderzoek aan het meest passende doel.',
        items: ['Serum-eiwitelektroforese', 'Immunofixatie', 'Vrije lichte ketens'],
        matchOptions: [
          { letter: 'A', text: 'Kwantificatie M-proteïne' },
          { letter: 'B', text: 'Typering M-proteïne' },
          { letter: 'C', text: 'Snelle follow-up / lichte-ketenziekte' },
        ],
        correctMapping: { 0: 'A', 1: 'B', 2: 'C' },
        explanation: 'SPE → kwantificatie; immunofixatie → typering; FLC → snelle follow-up.',
      },
      {
        id: '3d',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Welke uitspraak over sampling error bij beenmergonderzoek is het meest correct?',
        options: [
          { letter: 'A', text: 'De punctieplaats kan een onvolledig beeld geven van focale ziekte' },
          { letter: 'B', text: 'Alle beenmergonderzoeken zijn daardoor waardeloos' },
          { letter: 'C', text: 'Het is hetzelfde als een fout in immunofixatie' },
          { letter: 'D', text: 'Het betekent dat follow-up alleen met beenmerg moet gebeuren' },
        ],
        correctAnswer: 'A',
        explanation: 'Sampling error: punctieplaats kan onvolledig beeld geven van focale ziekte.',
      },
      {
        id: '3e',
        type: 'open',
        points: 2.0,
        question:
          'Waarom is bloedonderzoek vaak beter geschikt voor follow-up dan herhaald beenmergonderzoek?',
        wordLimit: 25,
        rubric: 'Score: 1p minder invasief/makkelijker herhaalbaar; 1p sampling error genoemd.',
        modelAnswer:
          'Bloedonderzoek is minder invasief, makkelijker herhaalbaar en minder gevoelig voor sampling error dan herhaald beenmergonderzoek.',
        explanation: 'Bloed is minder invasief en minder gevoelig voor sampling error.',
      },
      {
        id: '3f',
        type: 'meerdere_antwoorden',
        points: 2.0,
        partialCreditOnlyCorrect: true,
        question: 'Welke combinaties zijn juist?',
        options: [
          { letter: 'A', text: 'Multiple myeloom → osteolyse' },
          { letter: 'B', text: 'Osteolyse → toegenomen osteoclastactivatie' },
          { letter: 'C', text: 'Osteosclerose → toegenomen osteoblastactivatie' },
          { letter: 'D', text: 'Prostaatcarcinoom → vaak osteosclerose' },
          { letter: 'E', text: 'Pathologische fractuur ontstaat alleen na hoogenergetisch trauma' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        explanation: 'Myeloom → osteolyse; prostaat → osteosclerose. Pathologische fracturen ontstaan door afwijkend bot.',
      },
      {
        id: '3g',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Wat is de juiste volgorde van fractuurgenezing?',
        options: [
          {
            letter: 'A',
            text: 'Hematoom → ontsteking → granulatieweefsel → zachte callus → harde callus → remodelling',
          },
          {
            letter: 'B',
            text: 'Hematoom → granulatieweefsel → ontsteking → remodelling → zachte callus → harde callus',
          },
          {
            letter: 'C',
            text: 'Ontsteking → hematoom → zachte callus → granulatieweefsel → remodelling → harde callus',
          },
          {
            letter: 'D',
            text: 'Hematoom → ontsteking → zachte callus → granulatieweefsel → harde callus → remodelling',
          },
        ],
        correctAnswer: 'A',
        explanation:
          'Hematoom → ontsteking → granulatieweefsel → zachte callus → harde callus → remodelling.',
      },
      {
        id: '3h',
        type: 'koppelvraag',
        points: 4.0,
        question: 'Sleep de volgende kenmerken naar BiTE of CAR-T.',
        items: [
          'Kunstmatig ontwikkeld antilichaam',
          'Autoloog celproduct',
          'Genetisch ex vivo bewerkt',
          'Bindt tegelijk aan T-cel en tumorcel',
          'Kunstmatig ontwikkelde T-celreceptor tegen tumorantigeen',
        ],
        matchOptions: [
          { letter: 'A', text: 'BiTE' },
          { letter: 'B', text: 'CAR-T' },
        ],
        correctMapping: { 0: 'A', 1: 'B', 2: 'B', 3: 'A', 4: 'B' },
        explanation:
          'BiTE: kunstmatig antilichaam, bindt T-cel en tumorcel. CAR-T: autoloog, ex vivo bewerkt, kunstmatige T-celreceptor. 0,8p per correct item.',
      },
    ],
  },
]
