/** Blok 5 oefententamen 2 — casussen 9–11 */

export const blok5Tentamen2PartC = [
  {
    id: 'casus-9',
    title: 'Casus 9 – Als tolerantie faalt',
    totalPoints: 8,
    scenario:
      'Een 17-jarige jongen presenteert zich met gewichtsverlies, polyurie en polydipsie. In de familie komt auto-immuniteit voor. In een onderwijssessie wordt daarnaast de thymus besproken.',
    questions: [
      {
        id: '9a',
        type: 'koppelvraag',
        points: 2.0,
        question: 'Koppel het rijpingsstadium van de thymocyt aan de meest typische locatie in de thymus. (2.0p)',
        items: ['dubbelnegatieve thymocyt', 'dubbelpositieve thymocyt', 'enkelpositieve thymocyt'],
        matchOptions: [
          { letter: 'a', text: 'cortex' },
          { letter: 'b', text: 'medulla' },
          { letter: 'c', text: 'subcapsulaire cortex' },
        ],
        correctMapping: { 0: 'c', 1: 'a', 2: 'b' },
        explanation: '1 = c, 2 = a, 3 = b',
      },
      {
        id: '9b',
        type: 'open',
        points: 2.0,
        question:
          'Leg in maximaal 30 woorden het verschil uit tussen auto-immuniteit en een auto-immuunziekte. (2.0p)',
        wordLimit: 30,
        rubric:
          'Auto-immuniteit = afweer tegen eigen structuren; auto-immuunziekte pas bij weefselschade en klinische ziekte.',
        modelAnswer:
          'Auto-immuniteit is een afweerreactie tegen lichaamseigen structuren. Pas als die reactie ook weefselschade en klinische ziekte veroorzaakt, spreek je van een auto-immuunziekte.',
        explanation: 'Bij open vragen zijn andere formuleringen goed zolang de inhoudelijke kern klopt.',
      },
      {
        id: '9c',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Welke labcombinatie past het best bij de ziekte van Graves?',
        options: [
          { letter: 'A', text: 'Hoog TSH, laag FT4' },
          { letter: 'B', text: 'Laag TSH, hoog FT4' },
          { letter: 'C', text: 'Hoog TSH, hoog FT4' },
          { letter: 'D', text: 'Laag TSH, laag FT4' },
        ],
        correctAnswer: 'B',
        explanation: 'Graves geeft laag TSH en hoog FT4.',
      },
      {
        id: '9d',
        type: 'meerdere_antwoorden',
        points: 2.0,
        maxSelections: 2,
        requireExactSet: true,
        question:
          'Welke TWEE mechanismen kunnen bijdragen aan het doorbreken van immunologische tolerantie? (2.0p)\nNoteer twee letters.',
        options: [
          { letter: 'A', text: 'Moleculaire mimicry' },
          { letter: 'B', text: 'Bystander activatie' },
          { letter: 'C', text: 'Verhoogde negatieve selectie' },
          { letter: 'D', text: 'Volledige afwezigheid van ontsteking' },
          { letter: 'E', text: 'Exclusief verhoogde pH van de huid' },
        ],
        correctAnswers: ['A', 'B'],
        explanation: 'Moleculaire mimicry en bystander activatie kunnen tolerantie doorbreken.',
      },
    ],
  },
  {
    id: 'casus-10',
    title: 'Casus 10 – Verward in de woonkamer',
    totalPoints: 7,
    scenario:
      'Een 31-jarige zwangere vrouw wordt op de SEH gebracht met hoofdpijn, misselijkheid en duizeligheid. Haar partner heeft vergelijkbare klachten. Ze hebben thuis een slecht geventileerde woonkamer verwarmd met verbrandingstoestellen.',
    questions: [
      {
        id: '10a',
        type: 'meerkeuze',
        points: 2.0,
        question: `Beeldvraag.Figuur 4Hb-verzadiging
100% |                             X
 90% |                           XXX
 80% |                         XXX
 70% |                      XXX
 60% |                   XXX
 50% |                XXX
 40% |             XXX
 30% |    YYY
 20% | YYY                           ZZZ
 10% |                              ZZZ
  0% +-----------------------------------------
        lage pO2                    hoge pO2
 toont drie zuurstofdissociatiecurven van hemoglobine. Curve X ligt normaal, curve Y is naar rechts verschoven, curve Z is naar links verschoven. Welke curve past het best bij CO-intoxicatie? (2.0p)`,
        options: [
          { letter: 'A', text: 'X' },
          { letter: 'B', text: 'Y' },
          { letter: 'C', text: 'Z' },
          { letter: 'D', text: 'Geen van drieën' },
        ],
        correctAnswer: 'C',
        explanation: 'CO-intoxicatie verschuift de zuurstofdissociatiecurve naar links.',
      },
      {
        id: '10b',
        type: 'open',
        points: 2.0,
        question:
          'Leg in maximaal 40 woorden uit waarom een normale paO2 of standaard-SpO2 een CO-intoxicatie niet uitsluit. (2.0p)',
        wordLimit: 40,
        rubric:
          'paO2 meet opgeloste O2, kan normaal blijven; pulse-ox onderscheidt oxy- en carboxyhemoglobine slecht → SpO2 vals normaal.',
        modelAnswer:
          'paO2 meet opgeloste zuurstof en kan normaal blijven. Een standaard pulse-oximeter onderscheidt oxyhemoglobine en carboxyhemoglobine slecht, waardoor SpO2 vals normaal kan lijken.',
        explanation: 'Bij open vragen zijn andere formuleringen goed zolang de inhoudelijke kern klopt.',
      },
      {
        id: '10c',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Wat is de belangrijkste eerste stap in de behandeling?',
        options: [
          { letter: 'A', text: 'Afwachten op het COHb-gehalte' },
          { letter: 'B', text: 'De patiënt direct uit de bron halen en zuurstof geven' },
          { letter: 'C', text: 'Eerst een thoraxfoto maken' },
          { letter: 'D', text: 'Eerst orale rehydratie' },
        ],
        correctAnswer: 'B',
        explanation: 'Direct uit de bron halen en zuurstof geven.',
      },
      {
        id: '10d',
        type: 'open',
        points: 2.0,
        question:
          'Leg in maximaal 35 woorden uit waarom CO-intoxicatie bij zwangeren agressiever behandeld moet worden. (2.0p)',
        wordLimit: 35,
        rubric:
          'Foetus kwetsbaar; foetaal Hb en circulatie → CO moeilijker verdrongen; ernstiger foetale hypoxie.',
        modelAnswer:
          'De foetus is extra kwetsbaar: foetaal Hb en de foetale circulatie zorgen ervoor dat CO moeilijker wordt verdrongen en foetale hypoxie ernstiger kan zijn dan bij de moeder.',
        explanation: 'Bij open vragen zijn andere formuleringen goed zolang de inhoudelijke kern klopt.',
      },
    ],
  },
  {
    id: 'casus-11',
    title: 'Casus 11 – Chemisch incident in de regio',
    totalPoints: 7,
    scenario:
      'Bij een fabrieksongeval zijn meerdere werknemers blootgesteld aan een onbekende stof. Een arts publieke gezondheid wordt gebeld voor overleg. Later blijkt het te gaan om waterstoffluoride.',
    questions: [
      {
        id: '11a',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Wat is de belangrijkste rol van het NVIC bij intoxicaties?',
        options: [
          { letter: 'A', text: 'Het verricht standaard alle bloedonderzoeken' },
          { letter: 'B', text: 'Het geeft toxicologisch medisch advies en beheert de databank met gevaarlijke stoffen' },
          { letter: 'C', text: 'Het transporteert patiënten naar hyperbare centra' },
          { letter: 'D', text: 'Het vervangt de GGD bij chemische rampen' },
        ],
        correctAnswer: 'B',
        explanation: 'Het NVIC geeft toxicologisch medisch advies en beheert de gevaarlijke-stoffendatabank.',
      },
      {
        id: '11b',
        type: 'koppelvraag',
        points: 2.0,
        question:
          'Koppel de blootstellingsroute aan de meest passende eerste behandeling bij waterstoffluoride. (2.0p)',
        items: ['inhalatie', 'ingestie', 'dermale blootstelling'],
        matchOptions: [
          { letter: 'a', text: 'besmette kleding verwijderen, spoelen, calciumgluconaatgel' },
          { letter: 'b', text: 'vernevelen met calciumgluconaat' },
          { letter: 'c', text: 'melk of andere calciumbevattende oplossing geven' },
        ],
        correctMapping: { 0: 'b', 1: 'c', 2: 'a' },
        explanation: '1 = b, 2 = c, 3 = a',
      },
      {
        id: '11c',
        type: 'open',
        points: 2.0,
        question:
          'Leg in maximaal 30 woorden uit waarom calciumgluconaat zo belangrijk is bij waterstoffluorideblootstelling. (2.0p)',
        wordLimit: 30,
        rubric: 'Fluoride bindt calcium → weefselschade/hypocalciëmie; calciumgluconaat neutraliseert dat.',
        modelAnswer:
          'Fluoride bindt calcium en kan zo ernstige weefselschade en hypocalciëmie veroorzaken. Calciumgluconaat helpt dat te neutraliseren.',
        explanation: 'Bij open vragen zijn andere formuleringen goed zolang de inhoudelijke kern klopt.',
      },
      {
        id: '11d',
        type: 'meerkeuze',
        points: 2.0,
        question:
          'Welke maatregel past het best bij een adviesrol van de GAGS tijdens een groter incident met gevaarlijke stoffen?',
        options: [
          { letter: 'A', text: 'Alleen histopathologische classificatie van weefselschade' },
          { letter: 'B', text: 'Adviseren over schuilen, evacueren en ontmetten' },
          { letter: 'C', text: 'Uitsluitend voorschrijven van antibiotica' },
          { letter: 'D', text: 'Alleen beoordelen van cosmetische huidschade' },
        ],
        correctAnswer: 'B',
        explanation: 'De GAGS adviseert onder meer over schuilen, evacueren en ontmetten.',
      },
    ],
  },
]
