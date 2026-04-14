/** Blok 4 oefententamen 3 — casussen 4–6 */

export const blok4Tentamen3PartB = [
  {
    id: 'casus-4',
    title: 'Casus 4 – Lymfeklier',
    totalPoints: 11,
    scenario: `Een 17-jarige jongen heeft keelpijn, koorts en pijnlijke cervicale lymfeklieren. Tijdens het practicum bekijk je tegelijk een schema van een lymfeklier.

Afbeelding 2 – lymfeklierschema: zone A = follikel, zone B = paracortex; HEV mondt uit in zone B.`,
    questions: [
      {
        id: '4a',
        type: 'meerkeuze',
        points: 2,
        question: `4a. Waar komen naïeve T-cellen vooral binnen? (2.0p)`,
        options: [
          { letter: 'A', text: 'Via HEV in de paracortex' },
          { letter: 'B', text: 'Via de miltvene in de follikel' },
          { letter: 'C', text: 'Via de huid in de medulla' },
          { letter: 'D', text: 'Via erytrocyten in de cortex' },
        ],
        correctAnswer: 'A',
        explanation: 'Naïeve T-cellen komen vooral via HEV de paracortex binnen.',
      },
      {
        id: '4b',
        type: 'meerkeuze',
        points: 2,
        question: `4b. Waar zitten B-cellen vooral? (2.0p)`,
        options: [
          { letter: 'A', text: 'Paracortex' },
          { letter: 'B', text: 'Follikels' },
          { letter: 'C', text: 'Alveoli' },
          { letter: 'D', text: 'Veneuze sinussen' },
        ],
        correctAnswer: 'B',
        explanation: 'B-cellen zitten vooral in follikels.',
      },
      {
        id: '4c',
        type: 'meerkeuze',
        points: 2,
        question: `4c. Welke cel presenteert het meest direct antigeen aan naïeve T-cellen? (2.0p)`,
        options: [
          { letter: 'A', text: 'Dendritische cel' },
          { letter: 'B', text: 'Erytrocyt' },
          { letter: 'C', text: 'Neutrofiel' },
          { letter: 'D', text: 'Type I pneumocyt' },
        ],
        correctAnswer: 'A',
        explanation: 'Dendritische cellen presenteren antigeen aan naïeve T-cellen.',
      },
      {
        id: '4d',
        type: 'meerkeuze',
        points: 2,
        question: `4d. Welke infectie staat klassiek in de DD bij faryngitis plus cervicale lymfadenopathie? (2.0p)`,
        options: [
          { letter: 'A', text: 'EBV' },
          { letter: 'B', text: 'Giardia' },
          { letter: 'C', text: 'Ascaris' },
          { letter: 'D', text: 'Norovirus' },
        ],
        correctAnswer: 'A',
        explanation: 'EBV hoort klassiek in de DD bij faryngitis met cervicale lymfadenopathie.',
      },
      {
        id: '4e',
        type: 'open',
        points: 3,
        question: `4e. Beschrijf in maximaal 35 woorden de basisroute van een naïeve lymfocyt door de lymfeklier terug naar het bloed. (3.0p)`,
        wordLimit: 35,
        rubric: 'Kern: bloed → via HEV lymfeklier in → efferente lymfe uit → ductus thoracicus → bloed.',
        modelAnswer:
          'Bloed → via HEV de lymfeklier in → via efferente lymfe eruit → via ductus thoracicus terug naar het bloed.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-5',
    title: 'Casus 5 – De milt',
    totalPoints: 11,
    scenario: `Tijdens een practicum wordt een preparaat van de milt besproken.

Afbeelding 3 – miltschema: A = veneuze sinus, B = rode pulpa parenchym / miltstrengen, C = follikel, D = marginale zone, E = T-celgebied rondom centrale arteriole.`,
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
        explanation: 'Rode pulpa bestaat uit veneuze sinussen en rode pulpa parenchym/miltstrengen.',
      },
      {
        id: '5b',
        type: 'meerkeuze',
        points: 2,
        question: `5b. Welke structuren behoren tot de witte pulpa? (2.0p)`,
        options: [
          { letter: 'A', text: 'A en B' },
          { letter: 'B', text: 'C, D en E' },
          { letter: 'C', text: 'Alleen A' },
          { letter: 'D', text: 'Alleen B' },
        ],
        correctAnswer: 'B',
        explanation: 'Witte pulpa bestaat uit follikel, marginale zone en T-celgebied.',
      },
      {
        id: '5c',
        type: 'meerkeuze',
        points: 2,
        question: `5c. Wat is PALS? (2.0p)`,
        options: [
          { letter: 'A', text: 'Het T-celgebied rond de centrale arteriole' },
          { letter: 'B', text: 'Een veneuze sinus' },
          { letter: 'C', text: 'Een erytrocyt' },
          { letter: 'D', text: 'Een neutrofiele granulocyt' },
        ],
        correctAnswer: 'A',
        explanation: 'PALS is het T-celgebied rondom de centrale arteriole.',
      },
      {
        id: '5d',
        type: 'meerkeuze',
        points: 2,
        question: `5d. Welke uitspraak over open circulatie is juist? (2.0p)`,
        options: [
          { letter: 'A', text: 'Bloed blijft steeds binnen endotheel' },
          { letter: 'B', text: 'Bloed komt in direct contact met rood pulpa parenchym' },
          { letter: 'C', text: 'Bloed gaat eerst via HEV' },
          { letter: 'D', text: 'Open circulatie komt niet voor bij de mens' },
        ],
        correctAnswer: 'B',
        explanation: 'Bij open circulatie komt bloed in direct contact met rood pulpa parenchym.',
      },
      {
        id: '5e',
        type: 'open',
        points: 3,
        question: `5e. Leg in maximaal 40 woorden uit wat het belangrijkste verschil is tussen een lymfeklier en de milt. (3.0p)`,
        wordLimit: 40,
        rubric: 'Kern: lymfeklier filtert lymfe; milt filtert bloed → bloedgedragen antigenen.',
        modelAnswer:
          'Een lymfeklier filtert lymfe, terwijl de milt bloed filtert. Daardoor vangt de milt vooral bloedgedragen antigenen op.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-6',
    title: 'Casus 6 – Vaccinatie',
    totalPoints: 11,
    scenario: `Een backpacker wordt in Azië gebeten door een hond met verdenking op rabiës. Hij is nooit eerder tegen rabiës gevaccineerd.`,
    questions: [
      {
        id: '6a',
        type: 'meerkeuze',
        points: 2,
        question: `6a. Welke aanpak is juist? (2.0p)`,
        options: [
          { letter: 'A', text: 'Alleen rabies-immunoglobuline' },
          { letter: 'B', text: 'Alleen rabiësvaccin' },
          { letter: 'C', text: 'Rabies-immunoglobuline plus rabiësvaccin' },
          { letter: 'D', text: 'Geen behandeling nodig zonder symptomen' },
        ],
        correctAnswer: 'C',
        explanation:
          'Bij rabiësverdenking zonder eerdere vaccinatie geef je rabies-immunoglobuline plus vaccin.',
      },
      {
        id: '6b',
        type: 'meerkeuze',
        points: 2,
        question: `6b. Welke uitspraak is juist? (2.0p)`,
        options: [
          { letter: 'A', text: 'Rabies-immunoglobuline is actieve immunisatie' },
          { letter: 'B', text: 'Rabiësvaccin is passieve immunisatie' },
          { letter: 'C', text: 'Rabies-immunoglobuline is passieve immunisatie' },
          { letter: 'D', text: 'Beide zijn antibiotica' },
        ],
        correctAnswer: 'C',
        explanation: 'Rabies-immunoglobuline is passieve immunisatie.',
      },
      {
        id: '6c',
        type: 'meerkeuze',
        points: 2,
        question: `6c. Wat doet een adjuvans in een vaccin? (2.0p)`,
        options: [
          { letter: 'A', text: 'Versterkt de immuunrespons' },
          { letter: 'B', text: 'Werkt als antibioticum' },
          { letter: 'C', text: 'Vervangt antistoffen' },
          { letter: 'D', text: 'Verlaagt altijd de vaccinwerking' },
        ],
        correctAnswer: 'A',
        explanation: 'Een adjuvans versterkt de immuunrespons.',
      },
      {
        id: '6d',
        type: 'meerkeuze',
        points: 2,
        question: `6d. Welke uitspraak over immunologisch geheugen is juist? (2.0p)`,
        options: [
          { letter: 'A', text: 'Het ontstaat niet na vaccinatie' },
          { letter: 'B', text: 'Het zorgt voor een snellere respons bij hernieuwde blootstelling' },
          { letter: 'C', text: 'Het wordt alleen door neutrofielen gemaakt' },
          { letter: 'D', text: 'Het betekent passieve immunisatie' },
        ],
        correctAnswer: 'B',
        explanation:
          'Immunologisch geheugen zorgt voor een snellere en sterkere respons bij hernieuwde blootstelling.',
      },
      {
        id: '6e',
        type: 'open',
        points: 3,
        question: `6e. Leg in maximaal 40 woorden het verschil uit tussen actieve en passieve immunisatie. (3.0p)`,
        wordLimit: 40,
        rubric:
          'Kern: actief = eigen immuunsysteem + geheugen; passief = antistoffen van buiten, tijdelijk, geen geheugen.',
        modelAnswer:
          'Actieve immunisatie stimuleert het eigen immuunsysteem en leidt tot geheugen. Passieve immunisatie geeft direct antistoffen van buitenaf en werkt tijdelijk, zonder geheugenopbouw.',
        explanation: '',
      },
    ],
  },
]
