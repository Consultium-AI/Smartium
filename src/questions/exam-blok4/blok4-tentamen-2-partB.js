/** Blok 4 oefententamen 2 — casussen 4–6 */

export const blok4Tentamen2PartB = [
  {
    id: 'casus-4',
    title: 'Casus 4 – Virale diagnostiek',
    totalPoints: 12,
    scenario: `Een 24-jarige vrouw met koorts, blaasjes en lymfadenopathie wordt onderzocht op een virale infectie. De arts-microbioloog wil dat de coassistent niet alleen de juiste test aanvraagt, maar ook het juiste materiaal en de juiste buis.`,
    questions: [
      {
        id: '4a',
        type: 'meerkeuze',
        points: 2,
        question: `4a. Waarom is heparinebloed ongeschikt voor PCR/NAAT? (2.0p)`,
        options: [
          { letter: 'A', text: 'Omdat het virussen direct doodt' },
          { letter: 'B', text: 'Omdat heparine PCR kan remmen' },
          { letter: 'C', text: 'Omdat het alleen bruikbaar is voor bacteriën' },
          { letter: 'D', text: 'Omdat heparine antistoffen afbreekt' },
        ],
        correctAnswer: 'B',
        explanation: 'Heparine kan PCR remmen en daardoor fout-negatieve resultaten geven.',
      },
      {
        id: '4b',
        type: 'meerkeuze',
        points: 2,
        question: `4b. Welke interpretatie van serologie past het best bij een acute primaire infectie? (2.0p)`,
        options: [
          { letter: 'A', text: 'Geen IgM, hoge IgG' },
          { letter: 'B', text: 'Hoge IgM, lage of afwezige IgG' },
          { letter: 'C', text: 'Alleen IgA' },
          { letter: 'D', text: 'Alleen complementverbruik' },
        ],
        correctAnswer: 'B',
        explanation: 'Bij een acute primaire infectie zie je vaak eerst IgM, terwijl IgG nog laag of afwezig is.',
      },
      {
        id: '4c',
        type: 'meerkeuze',
        points: 2,
        question: `4c. Wat betekent een lage Ct-waarde bij realtime PCR meestal? (2.0p)`,
        options: [
          { letter: 'A', text: 'Lage virale load' },
          { letter: 'B', text: 'Hoge virale load' },
          { letter: 'C', text: 'Negatieve test' },
          { letter: 'D', text: 'Alleen oude infectie' },
        ],
        correctAnswer: 'B',
        explanation:
          'Een lage Ct-waarde betekent dat het signaal al vroeg detecteerbaar is en past bij een hoge virale load.',
      },
      {
        id: '4d',
        type: 'meerkeuze',
        points: 2,
        question: `4d. Welk materiaal is het meest passend voor virale diagnostiek van een luchtweginfectie? (2.0p)`,
        options: [
          { letter: 'A', text: 'Feces' },
          { letter: 'B', text: 'Nasofarynxuitstrijk of respiratoir materiaal' },
          { letter: 'C', text: 'Nagelschraapsel' },
          { letter: 'D', text: 'Arteriële punctie zonder klinische context' },
        ],
        correctAnswer: 'B',
        explanation:
          'Bij luchtweginfecties is respiratoir materiaal zoals een nasofarynxuitstrijk het meest geschikt.',
      },
      {
        id: '4e',
        type: 'open',
        points: 4,
        question: `4e. Noem in maximaal 45 woorden één voordeel van serologie en één voordeel van moleculaire diagnostiek bij virale infecties. (4.0p)`,
        wordLimit: 45,
        rubric:
          '2p serologie: o.a. na verdwijnen virus, immuniteit/blootstelling. 2p moleculair: snelle gevoelige detectie, actuele infectie/load.',
        modelAnswer:
          'Serologie is nuttig als het virus al verdwenen is of om eerdere blootstelling te beoordelen. Moleculaire diagnostiek is nuttig voor snelle, gevoelige detectie van actuele infectie en virale load.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-5',
    title: 'Casus 5 – Secundaire lymfoïde organen',
    totalPoints: 12,
    scenario: `Beperkte schemavraag
Een schema toont een doorsnede van de milt met de volgende labels:
A: veneuze sinus
B: rode pulpa parenchym / miltstrengen
C: follikel
D: marginale zone
E: T-celgebied rond centrale arteriole`,
    questions: [
      {
        id: '5a',
        type: 'meerkeuze',
        points: 2,
        question: `5a. Welke structuren behoren tot de rode pulpa? (2.0p)`,
        options: [
          { letter: 'A', text: 'A en B' },
          { letter: 'B', text: 'C en D' },
          { letter: 'C', text: 'C en E' },
          { letter: 'D', text: 'D en E' },
        ],
        correctAnswer: 'A',
        explanation: 'De rode pulpa bestaat uit veneuze sinussen en rode pulpa parenchym/miltstrengen.',
      },
      {
        id: '5b',
        type: 'meerkeuze',
        points: 2,
        question: `5b. Welke structuur wordt ook wel PALS genoemd? (2.0p)`,
        options: [
          { letter: 'A', text: 'Veneuze sinus' },
          { letter: 'B', text: 'Rode pulpa parenchym' },
          { letter: 'C', text: 'T-celgebied rond de centrale arteriole' },
          { letter: 'D', text: 'Marginale zone' },
        ],
        correctAnswer: 'C',
        explanation: 'PALS is het T-celgebied rond de centrale arteriole.',
      },
      {
        id: '5c',
        type: 'meerkeuze',
        points: 2,
        question: `5c. Welk belangrijk verschil tussen lymfeklier en milt is juist? (2.0p)`,
        options: [
          { letter: 'A', text: 'In beide komt antigeen uitsluitend via lymfe binnen' },
          { letter: 'B', text: 'In de milt komt antigeen vooral via het bloed binnen' },
          { letter: 'C', text: 'De milt bevat geen lymfocyten' },
          { letter: 'D', text: 'De lymfeklier filtert bloed, de milt lymfe' },
        ],
        correctAnswer: 'B',
        explanation: 'De milt filtert bloed en vangt vooral bloedgedragen antigenen op.',
      },
      {
        id: '5d',
        type: 'meerkeuze',
        points: 2,
        question: `5d. Welke uitspraak over open en gesloten circulatie in de milt is juist? (2.0p)`,
        options: [
          { letter: 'A', text: 'Bij open circulatie blijft bloed voortdurend binnen endotheel' },
          { letter: 'B', text: 'Bij gesloten circulatie stroomt bloed eerst door miltstrengen' },
          { letter: 'C', text: 'Bij open circulatie komt bloed in direct contact met het rode pulpa parenchym' },
          { letter: 'D', text: 'Bij de mens is alleen gesloten circulatie aanwezig' },
        ],
        correctAnswer: 'C',
        explanation:
          'Bij open circulatie komt bloed uit de vaten en passeert het rode pulpa parenchym voordat het weer in sinussen terugstroomt.',
      },
      {
        id: '5e',
        type: 'open',
        points: 4,
        question: `5e. Leg in maximaal 45 woorden uit waarom de milt belangrijk is voor de afweer, ondanks dat B- en T-lymfocyten daar niet worden gevormd. (4.0p)`,
        wordLimit: 45,
        rubric:
          'Kern: filtert bloed; vangt antigenen/opsporen erytrocyten; immuunrespons in witte pulpa met aanwezige B/T-lymfocyten.',
        modelAnswer:
          'De milt filtert bloed, verwijdert oude erytrocyten en vangt bloedgedragen antigenen op. In de witte pulpa worden immuunresponsen opgewekt door aanwezige B- en T-lymfocyten.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-6',
    title: 'Casus 6 – Vaccinatie en passieve immunisatie',
    totalPoints: 13,
    scenario: `Een 19-jarige reiziger wordt in het buitenland gebeten door een mogelijk met rabiës besmet dier. In de kliniek wordt direct een combinatiebehandeling gestart.`,
    questions: [
      {
        id: '6a',
        type: 'meerkeuze',
        points: 3,
        question: `6a. Waarom krijgt deze patiënt zowel rabies-immunoglobuline als rabiësvaccin? (3.0p)`,
        options: [
          { letter: 'A', text: 'Twee vormen van passieve immunisatie voor extra effect' },
          {
            letter: 'B',
            text: 'Passieve bescherming voor direct effect en actieve immunisatie voor langdurige bescherming',
          },
          { letter: 'C', text: 'Alleen om bijwerkingen van het vaccin te voorkomen' },
          { letter: 'D', text: 'Omdat vaccinatie zonder immunoglobuline altijd gecontra-indiceerd is' },
        ],
        correctAnswer: 'B',
        explanation:
          'Immunoglobuline geeft directe bescherming; vaccinatie zorgt voor actieve immunisatie en langduriger bescherming via geheugen.',
      },
      {
        id: '6b',
        type: 'meerkeuze',
        points: 2,
        question: `6b. Wat is een adjuvans in een vaccin? (2.0p)`,
        options: [
          { letter: 'A', text: 'Een antibioticum tegen contaminatie' },
          { letter: 'B', text: 'Een stof die de immuunrespons versterkt' },
          { letter: 'C', text: 'Een virale envelop' },
          { letter: 'D', text: 'Een antistof die direct neutraliseert' },
        ],
        correctAnswer: 'B',
        explanation: 'Een adjuvans versterkt de immuunrespons op het vaccinantigeen.',
      },
      {
        id: '6c',
        type: 'meerkeuze',
        points: 2,
        question: `6c. Welk vaccintype gebruikt mRNA als basis? (2.0p)`,
        options: [
          { letter: 'A', text: 'Leven verzwakt vaccin' },
          { letter: 'B', text: 'Geïnactiveerd vaccin' },
          { letter: 'C', text: 'mRNA-vaccin' },
          { letter: 'D', text: 'Passief serumvaccin' },
        ],
        correctAnswer: 'C',
        explanation: 'mRNA-vaccins gebruiken mRNA als basis voor antigeenproductie in de gastheer.',
      },
      {
        id: '6d',
        type: 'meerkeuze',
        points: 2,
        question: `6d. Welke uitspraak over passieve immunisatie is juist? (2.0p)`,
        options: [
          { letter: 'A', text: 'Leidt altijd tot langdurig immunologisch geheugen' },
          { letter: 'B', text: 'Geeft directe maar tijdelijke bescherming' },
          { letter: 'C', text: 'Vereist altijd klonale expansie van eigen B-cellen' },
          { letter: 'D', text: 'Is hetzelfde als natuurlijke infectie' },
        ],
        correctAnswer: 'B',
        explanation: 'Passieve immunisatie geeft direct effect, maar is tijdelijk en leidt niet tot eigen geheugenrespons.',
      },
      {
        id: '6e',
        type: 'open',
        points: 4,
        question: `6e. Beschrijf in maximaal 50 woorden hoe vaccinatie leidt tot immunologisch geheugen. (4.0p)`,
        wordLimit: 50,
        rubric: 'Kern: activatie B/T; differentiatie geheugencellen; snellere respons bij hernieuwde blootstelling.',
        modelAnswer:
          'Vaccinatie activeert specifieke B- en T-lymfocyten tegen een antigeen. Een deel differentieert tot geheugencellen, waardoor bij hernieuwde blootstelling sneller en krachtiger wordt gereageerd.',
        explanation: '',
      },
    ],
  },
]
