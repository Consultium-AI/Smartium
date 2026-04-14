/** Blok 4 oefententamen 4 — casussen 4–6 */

export const blok4Tentamen4PartB = [
  {
    id: 'casus-4',
    title: 'Casus 4 – Vaccinatie en rabiës',
    totalPoints: 13,
    scenario: `Een 24-jarige backpacker wordt in Azië gebeten door een hond met vermoedelijke rabiës. Hij heeft nooit eerder rabiësvaccinatie gehad.`,
    questions: [
      {
        id: '4a',
        type: 'meerkeuze',
        points: 3,
        question: `4a. Welke behandeling is direct aangewezen? (3.0p)`,
        options: [
          { letter: 'A', text: 'Alleen rabiësvaccin' },
          { letter: 'B', text: 'Alleen rabies-immunoglobuline' },
          { letter: 'C', text: 'Rabies-immunoglobuline plus rabiësvaccin' },
          { letter: 'D', text: 'Geen behandeling zolang er nog geen symptomen zijn' },
        ],
        correctAnswer: 'C',
        explanation:
          'Na mogelijke blootstelling aan rabiës geef je direct zowel rabies-immunoglobuline als rabiësvaccin.',
      },
      {
        id: '4b',
        type: 'meerkeuze',
        points: 2,
        question: `4b. Welke combinatie is juist? (2.0p)`,
        options: [
          { letter: 'A', text: 'Rabies-immunoglobuline = actieve immunisatie' },
          { letter: 'B', text: 'Rabiësvaccin = passieve immunisatie' },
          {
            letter: 'C',
            text: 'Rabies-immunoglobuline = passieve immunisatie; vaccin = actieve immunisatie',
          },
          {
            letter: 'D',
            text: 'Beide zijn alleen immunostimulatie zonder antigeenspecificiteit',
          },
        ],
        correctAnswer: 'C',
        explanation: 'Immunoglobuline is passieve immunisatie; vaccin is actieve immunisatie.',
      },
      {
        id: '4c',
        type: 'meerkeuze',
        points: 2,
        question: `4c. Wat is de functie van een adjuvans in een vaccin? (2.0p)`,
        options: [
          { letter: 'A', text: 'Het remt PCR-contaminatie' },
          { letter: 'B', text: 'Het versterkt de immuunrespons op het antigeen' },
          { letter: 'C', text: 'Het neutraliseert direct het pathogeen' },
          { letter: 'D', text: 'Het vervangt geheugen-B-cellen' },
        ],
        correctAnswer: 'B',
        explanation: 'Een adjuvans versterkt de immuunrespons op het antigeen.',
      },
      {
        id: '4d',
        type: 'meerkeuze',
        points: 2,
        question: `4d. Welk type vaccin is een mRNA-vaccin? (2.0p)`,
        options: [
          { letter: 'A', text: 'Passief antistofpreparaat' },
          {
            letter: 'B',
            text: 'Een vaccin dat mRNA gebruikt als basis voor antigeenexpressie',
          },
          { letter: 'C', text: 'Een levend wormvaccin' },
          { letter: 'D', text: 'Een antibioticum-gebonden vaccin' },
        ],
        correctAnswer: 'B',
        explanation: 'Een mRNA-vaccin gebruikt mRNA als basis voor antigeenexpressie.',
      },
      {
        id: '4e',
        type: 'open',
        points: 4,
        question: `4e. Beschrijf in maximaal 50 woorden hoe vaccinatie leidt tot immunologisch geheugen. (4.0p)`,
        wordLimit: 50,
        rubric:
          'Kern: activatie aangeboren + adaptieve afweer; antigeenpresentatie; expansie B/T; geheugencellen; snellere respons hernieuwde blootstelling.',
        modelAnswer:
          'Vaccinatie activeert aangeboren en adaptieve afweer. Antigeenpresentatie leidt tot activatie en klonale expansie van specifieke B- en T-cellen, waarna geheugencellen achterblijven en bij hernieuwde blootstelling sneller reageren.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-5',
    title: 'Casus 5 – Virale diagnostiek stap voor stap',
    totalPoints: 13,
    scenario: `Een 31-jarige vrouw heeft sinds 3 dagen koorts en blaasjes op de huid. Je wilt gericht virale diagnostiek aanvragen.

De coassistent wil bloed in een groene heparinebuis afnemen voor PCR.

Drie testuitslagen worden besproken:
patiënt X: hoge IgM, lage IgG
patiënt Y: hoge IgG, geen IgM
patiënt Z: Ct-waarde 16 bij PCR`,
    questions: [
      {
        id: '5a',
        type: 'meerkeuze',
        points: 2,
        question: `5a. Welk materiaal is voor een huidblaasje het meest passend voor moleculaire diagnostiek? (2.0p)`,
        options: [
          { letter: 'A', text: 'Nagelschraapsel in droog potje' },
          {
            letter: 'B',
            text: 'Uitstrijk in VTM/UTM met vermelding van locatie',
          },
          { letter: 'C', text: 'Feces zonder aanvraagformulier' },
          { letter: 'D', text: 'Alleen stolbloed' },
        ],
        correctAnswer: 'B',
        explanation:
          'Bij een huidblaasje neem je een uitstrijk in virus-transportmedium met duidelijke locatievermelding.',
      },
      {
        id: '5b',
        type: 'meerkeuze',
        points: 2,
        question: `5b. Waarom is dat ongunstig? (2.0p)`,
        options: [
          { letter: 'A', text: 'Heparine inactiveert IgM' },
          { letter: 'B', text: 'Heparine remt PCR en kan fout-negatieven geven' },
          { letter: 'C', text: 'Heparine maakt Ct-waarden altijd lager' },
          { letter: 'D', text: 'Heparine is alleen verboden bij bacteriën' },
        ],
        correctAnswer: 'B',
        explanation: 'Heparine kan PCR remmen en dus fout-negatieve resultaten geven.',
      },
      {
        id: '5c',
        type: 'meerkeuze',
        points: 3,
        question: `5c. Welke interpretatie is juist? (3.0p)`,
        options: [
          { letter: 'A', text: 'X past bij een acute primaire infectie' },
          { letter: 'B', text: 'Y past bij zeer acute primaire infectie' },
          { letter: 'C', text: 'Z past bij lage virale load' },
          { letter: 'D', text: 'X en Y zijn per definitie fout-positief' },
        ],
        correctAnswer: 'A',
        explanation: 'Hoge IgM met lage IgG past het best bij een acute primaire infectie.',
      },
      {
        id: '5d',
        type: 'meerkeuze',
        points: 2,
        question: `5d. Wat betekent een lage Ct-waarde meestal? (2.0p)`,
        options: [
          { letter: 'A', text: 'Weinig viraal materiaal' },
          { letter: 'B', text: 'Veel viraal materiaal' },
          { letter: 'C', text: 'Geen infectie' },
          { letter: 'D', text: 'Alleen een oude doorgemaakte infectie' },
        ],
        correctAnswer: 'B',
        explanation: 'Een lage Ct-waarde betekent meestal veel viraal materiaal.',
      },
      {
        id: '5e',
        type: 'open',
        points: 4,
        question: `5e. Noem in maximaal 50 woorden één voordeel van serologie en één voordeel van PCR/RT-PCR bij virale diagnostiek. (4.0p)`,
        wordLimit: 50,
        rubric:
          '2p serologie: doorgemaakte infectie/immuniteit/status. 2p PCR: snelle gevoelige actuele infectie, load via Ct.',
        modelAnswer:
          'Serologie is nuttig voor het aantonen van een doorgemaakte of iets oudere infectie en immuniteitsstatus. PCR/RT-PCR is nuttig voor snelle, gevoelige detectie van actuele infectie en kan de virale load benaderen via de Ct-waarde.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-6',
    title: 'Casus 6 – Milt en bloedfiltratie',
    totalPoints: 13,
    scenario: `Een patiënt zonder milt blijkt gevoeliger voor bepaalde infecties. Tijdens het VOW bekijk je een preparaat van de milt.

Afbeelding 4 – miltschema: structuur A = veneuze sinus, B = rode pulpa parenchym / miltstrengen, C = follikel, D = marginale zone, E = T-celgebied rond centrale arteriole.`,
    questions: [
      {
        id: '6a',
        type: 'meerkeuze',
        points: 3,
        question: `6a. Welke structuren behoren tot de witte pulpa? (3.0p)`,
        options: [
          { letter: 'A', text: 'A en B' },
          { letter: 'B', text: 'C, D en E' },
          { letter: 'C', text: 'Alleen A' },
          { letter: 'D', text: 'Alleen B en E' },
        ],
        correctAnswer: 'B',
        explanation: 'Follikel, marginale zone en T-celgebied behoren tot de witte pulpa.',
      },
      {
        id: '6b',
        type: 'meerkeuze',
        points: 2,
        question: `6b. Welke structuur wordt ook wel PALS genoemd? (2.0p)`,
        options: [
          { letter: 'A', text: 'Veneuze sinus' },
          { letter: 'B', text: 'Rode pulpa parenchym' },
          { letter: 'C', text: 'T-celgebied rond centrale arteriole' },
          { letter: 'D', text: 'Marginale zone' },
        ],
        correctAnswer: 'C',
        explanation: 'PALS is het T-celgebied rond de centrale arteriole.',
      },
      {
        id: '6c',
        type: 'meerkeuze',
        points: 2,
        question: `6c. Wat is het belangrijkste verschil tussen open en gesloten circulatie in de milt? (2.0p)`,
        options: [
          { letter: 'A', text: 'Bij open circulatie blijft bloed binnen endotheel' },
          {
            letter: 'B',
            text: 'Bij gesloten circulatie komt bloed in miltstrengen terecht',
          },
          {
            letter: 'C',
            text: 'Bij open circulatie komt bloed in direct contact met rood pulpa parenchym',
          },
          { letter: 'D', text: 'Bij de mens bestaat alleen gesloten circulatie' },
        ],
        correctAnswer: 'C',
        explanation:
          'Bij open circulatie komt bloed in direct contact met het rode pulpa parenchym.',
      },
      {
        id: '6d',
        type: 'meerkeuze',
        points: 2,
        question: `6d. Welke functie van de milt is juist? (2.0p)`,
        options: [
          { letter: 'A', text: 'De milt filtert lymfe' },
          {
            letter: 'B',
            text: 'De milt filtert bloed en verwijdert oude erytrocyten',
          },
          { letter: 'C', text: 'De milt produceert alle T-lymfocyten' },
          { letter: 'D', text: 'De milt is geen secundair lymfoïd orgaan' },
        ],
        correctAnswer: 'B',
        explanation: 'De milt filtert bloed en verwijdert oude erytrocyten.',
      },
      {
        id: '6e',
        type: 'open',
        points: 4,
        question: `6e. Leg in maximaal 45 woorden uit waarom de milt immunologisch anders is dan een lymfeklier. (4.0p)`,
        wordLimit: 45,
        rubric:
          'Kern: lymfeklier filtert lymfe, afferent; milt filtert bloed, bloedgedragen antigenen.',
        modelAnswer:
          'Een lymfeklier filtert vooral lymfe en ontvangt antigeen via afferente lymfe. De milt filtert bloed en vangt dus vooral bloedgedragen antigenen op, waarna daartegen een immuunrespons wordt opgewekt.',
        explanation: '',
      },
    ],
  },
]
