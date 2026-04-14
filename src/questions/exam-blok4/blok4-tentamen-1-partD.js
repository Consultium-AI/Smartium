/** Blok 4 oefententamen 1 — casussen 10–12 */

const MALARIA_STAGES_SHUFFLED = ['Merozoiet', 'Leverschizont', 'Trofozoiet', 'Sporozoiet', 'Bloedschizont', 'Gametocyt']

const MALARIA_STAGES_CORRECT = ['Sporozoiet', 'Leverschizont', 'Merozoiet', 'Trofozoiet', 'Bloedschizont', 'Gametocyt']

export const blok4Tentamen1PartD = [
  {
    id: 'casus-10',
    title: 'Casus 10 – Koorts na een verre reis',
    totalPoints: 14,
    scenario: `Een 27-jarige vrouw komt terug uit Angola. Sinds drie dagen heeft zij koorts, hoofdpijn, spierpijn en misselijkheid. Ze hoest niet en heeft geen huiduitslag. Het laboratorium meldt trombocytopenie en een verhoogd lactaat.`,
    questions: [
      {
        id: '10a',
        type: 'meerkeuze',
        points: 2,
        question: `10a. Welke diagnose moet nu hoog in de differentiaaldiagnose staan? (2.0p)`,
        options: [
          { letter: 'A', text: 'Malaria tropica' },
          { letter: 'B', text: 'Influenza B' },
          { letter: 'C', text: 'Tinea corporis' },
          { letter: 'D', text: 'Kattenkrabziekte' },
        ],
        correctAnswer: 'A',
        explanation:
          'Koorts na terugkeer uit Angola met trombocytopenie en verhoogd lactaat moet malaria tropica doen vermoeden.',
      },
      {
        id: '10b',
        type: 'meerkeuze',
        points: 2,
        question: `10b. Welke Plasmodium-soort is het sterkst geassocieerd met sekwestratie en cerebrale malaria? (2.0p)`,
        options: [
          { letter: 'A', text: 'P. vivax' },
          { letter: 'B', text: 'P. ovale' },
          { letter: 'C', text: 'P. malariae' },
          { letter: 'D', text: 'P. falciparum' },
        ],
        correctAnswer: 'D',
        explanation: 'Sekwestratie en cerebrale malaria horen bij P. falciparum.',
      },
      {
        id: '10c',
        type: 'beeldvraag',
        points: 3,
        gradingMethod: 'order',
        question: `10c. Zet de ontwikkelingsstadia in de juiste volgorde. (3.0p)
Merozoiet
Leverschizont
Trofozoiet
Sporozoiet
Bloedschizont
Gametocyt`,
        orderIntro: 'Chronologische volgorde in de mens (1 = eerste, 6 = laatste):',
        orderOptions: [...MALARIA_STAGES_SHUFFLED],
        correctOrder: [...MALARIA_STAGES_CORRECT],
        expectedAnswer: 'Sporozoiet → Leverschizont → Merozoiet → Trofozoiet → Bloedschizont → Gametocyt',
        rubric: 'Alleen volledig juiste volgorde = 3p.',
        modelAnswer:
          'Sporozoiet, leverschizont, merozoiet, trofozoiet, bloedschizont, gametocyt.',
        explanation: '',
      },
      {
        id: '10d',
        type: 'beeldvraag',
        points: 3,
        gradingMethod: 'order',
        question: `10d. Rangschik de diagnostische methoden van hoogste naar laagste sensitiviteit. (3.0p)
Uitstrijk
Dikke druppel
Antigeensneltest`,
        orderIntro: 'Van hoogste naar laagste sensitiviteit (1 = hoogste):',
        orderOptions: ['Uitstrijk', 'Dikke druppel', 'Antigeensneltest'],
        correctOrder: ['Dikke druppel', 'Uitstrijk', 'Antigeensneltest'],
        rubric: 'Alleen volledig juiste volgorde = 3p.',
        modelAnswer: 'Dikke druppel → uitstrijk → antigeensneltest.',
        explanation: '',
      },
      {
        id: '10e',
        type: 'open',
        points: 4,
        question: `10e. Leg in maximaal 40 woorden uit waarom malariaprofylaxe wel tegen ziekte kan beschermen, maar niet per se tegen infectie of hypnozoïetvorming. (4.0p)`,
        wordLimit: 40,
        rubric:
          'Kern: profylaxe werkt vooral tegen erytrocytaire bloedstadia; voorkomt niet per se infectie of hypnozoïeten in de lever.',
        modelAnswer:
          'Profylaxe werkt vooral tegen de erytrocytaire bloedstadia en voorkomt daardoor ziekte. Zij voorkomt niet per se infectie zelf en ook niet de vorming van hypnozoïeten in de lever.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-11',
    title: 'Casus 11 – HIV en immuunfalen',
    totalPoints: 11,
    scenario: `Een 31-jarige man presenteert zich met gewichtsverlies, recidiverende orale candidiasis en gegeneraliseerde lymfadenopathie. Bij aanvullend onderzoek blijkt hij HIV-1 positief.`,
    questions: [
      {
        id: '11a',
        type: 'meerkeuze',
        points: 2,
        question: `11a. Welke cellen worden primair geïnfecteerd door HIV-1? (2.0p)`,
        options: [
          { letter: 'A', text: 'Alleen neutrofielen' },
          { letter: 'B', text: 'Alleen erytrocyten' },
          { letter: 'C', text: 'CD4-positieve cellen, waaronder T-cellen en macrofagen/monocyten' },
          { letter: 'D', text: 'Alleen B-geheugencellen' },
        ],
        correctAnswer: 'C',
        explanation: 'HIV infecteert CD4-positieve cellen, waaronder CD4 T-cellen en monocyten/macrofagen.',
      },
      {
        id: '11b',
        type: 'meerkeuze',
        points: 2,
        question: `11b. Welke uitspraak over co-receptoren is juist? (2.0p)`,
        options: [
          { letter: 'A', text: 'R5-stammen gebruiken meestal CCR5' },
          { letter: 'B', text: 'X4-stammen gebruiken alleen CD8' },
          { letter: 'C', text: 'CCR5 komt niet voor op geactiveerde T-cellen' },
          { letter: 'D', text: 'HIV gebruikt geen co-receptor' },
        ],
        correctAnswer: 'A',
        explanation: 'R5-stammen gebruiken meestal CCR5.',
      },
      {
        id: '11c',
        type: 'meerkeuze',
        points: 3,
        question: `11c. Waarom overlijden onbehandelde HIV-patiënten meestal niet direct aan HIV zelf, maar aan opportunistische infecties? (3.0p)`,
        options: [
          { letter: 'A', text: 'Omdat HIV alleen de lever beschadigt' },
          { letter: 'B', text: 'Omdat verlies van CD4+ helperfunctie brede immuundeficiëntie veroorzaakt' },
          { letter: 'C', text: 'Omdat HIV geen effect heeft op afweercellen' },
          { letter: 'D', text: 'Omdat alle antistoffen direct verdwijnen binnen 24 uur' },
        ],
        correctAnswer: 'B',
        explanation:
          'Door verlies van CD4+ helperfunctie raken veel delen van de afweer ontregeld, waardoor opportunistische infecties ontstaan.',
      },
      {
        id: '11d',
        type: 'open',
        points: 4,
        question: `11d. Noem in maximaal 50 woorden twee redenen waarom verticale, ziekte-specifieke HIV-zorgprogramma’s in sub-Sahara Afrika op lange termijn niet volledig houdbaar zijn. (4.0p)`,
        wordLimit: 50,
        rubric:
          '2 punten per goede reden, max 4. Bijvoorbeeld: afnemend donorgeld; tekort zorgpersoneel; toename co-morbiditeit; groeiende zorgvraag.',
        modelAnswer:
          'Voorbeelden: het internationale donorgeld neemt af en er is een tekort aan opgeleid zorgpersoneel. Patiënten leven langer met meer co-morbiditeit, waardoor de totale zorgdruk stijgt.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-12',
    title: 'Casus 12 – Therapie en resistentie',
    totalPoints: 13,
    scenario: `Een 68-jarige man met influenza verslechtert klinisch na vier dagen en ontwikkelt toenemende dyspneu en koorts. Een andere patiënt op de afdeling heeft een ESBL-producerende gramnegatieve bacterie. Op een derde kamer ligt een patiënt met een urineweginfectie zonder complicaties.`,
    questions: [
      {
        id: '12a',
        type: 'meerkeuze',
        points: 2,
        question: `12a. Welk antiviraal middel past het best bij een kwetsbare patiënt met influenza binnen 48 uur na begin van de klachten? (2.0p)`,
        options: [
          { letter: 'A', text: 'Aciclovir' },
          { letter: 'B', text: 'Oseltamivir' },
          { letter: 'C', text: 'Valganciclovir' },
          { letter: 'D', text: 'Metronidazol' },
        ],
        correctAnswer: 'B',
        explanation: 'Oseltamivir is de standaardkeuze bij kwetsbare patiënten met influenza binnen 48 uur.',
      },
      {
        id: '12b',
        type: 'meerkeuze',
        points: 2,
        question: `12b. Welke uitspraak over de klinische verslechtering van de eerste patiënt is het best? (2.0p)`,
        options: [
          { letter: 'A', text: 'Dit past per definitie bij een tweede virale piek, antibiotica zijn zinloos' },
          {
            letter: 'B',
            text: 'Denk aan bacteriële superinfectie; antibiotica kunnen nu wél geïndiceerd zijn',
          },
          { letter: 'C', text: 'Alleen een antischimmelmiddel is nu zinvol' },
          { letter: 'D', text: 'Dit past niet bij influenza' },
        ],
        correctAnswer: 'B',
        explanation:
          'Klinische verslechtering na enkele dagen influenza past bij een bacteriële superinfectie; dan kunnen antibiotica nodig zijn.',
      },
      {
        id: '12c',
        type: 'meerkeuze',
        points: 2,
        question: `12c. Wat is volgens de NHG-standaard de eerste keus bij een ongecompliceerde urineweginfectie? (2.0p)`,
        options: [
          { letter: 'A', text: 'Nitrofurantoïne' },
          { letter: 'B', text: 'Meropenem' },
          { letter: 'C', text: 'Clindamycine' },
          { letter: 'D', text: 'Ceftriaxon' },
        ],
        correctAnswer: 'A',
        explanation: 'Nitrofurantoïne is eerste keus bij een ongecompliceerde UWI.',
      },
      {
        id: '12d',
        type: 'meerdere_antwoorden',
        points: 3,
        maxSelections: 2,
        requireExactSet: true,
        question: `12d. Welke twee voorbeelden passen het best bij resistentiemechanismen? Kies 2. (3.0p)`,
        options: [
          { letter: 'A', text: 'ESBL inactiveert veel beta-lactam antibiotica' },
          { letter: 'B', text: 'Efflux betekent dat de bacterie het antibioticum actief naar binnen pompt' },
          {
            letter: 'C',
            text: 'Minder porines bij gramnegatieven kan influx van antibioticum verminderen',
          },
          { letter: 'D', text: 'Macrolideresistentie kan nooit ontstaan door verandering van het ribosoom' },
          {
            letter: 'E',
            text: 'Dikkere celwand bij S. aureus kan vancomycine beter laten binden aan het doelwit',
          },
        ],
        correctAnswers: ['A', 'C'],
        explanation: 'ESBL inactiveert beta-lactams. Minder porines vermindert influx van antibioticum.',
      },
      {
        id: '12e',
        type: 'open',
        points: 4,
        question: `12e. Leg in maximaal 50 woorden uit waarom Mycoplasma pneumoniae een voorbeeld is van natuurlijke resistentie tegen beta-lactam antibiotica. (4.0p)`,
        wordLimit: 50,
        rubric:
          'Kern: geen celwand → geen aangrijpingspunt voor beta-lactams; intrinsieke ongevoeligheid van de soort.',
        modelAnswer:
          'Mycoplasma heeft van nature geen celwand. Daardoor hebben beta-lactam antibiotica geen aangrijpingspunt. Dat is natuurlijke resistentie: de hele soort is intrinsiek ongevoelig.',
        explanation: '',
      },
    ],
  },
]
