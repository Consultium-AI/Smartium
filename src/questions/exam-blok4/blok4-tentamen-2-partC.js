/** Blok 4 oefententamen 2 — casussen 7–9 */

const MALARIA_CYCLE_SHUFFLED = [
  'Merozoïet',
  'Gametocyt',
  'Sporozoïet',
  'Leverschizont',
  'Trofozoïet',
  'Bloedschizont',
]

const MALARIA_CYCLE_CORRECT = [
  'Sporozoïet',
  'Leverschizont',
  'Merozoïet',
  'Trofozoïet',
  'Bloedschizont',
  'Gametocyt',
]

export const blok4Tentamen2PartC = [
  {
    id: 'casus-7',
    title: 'Casus 7 – Immunomodulatie en infectierisico',
    totalPoints: 12,
    scenario: `Een 54-jarige vrouw met reumatoïde artritis gebruikt al langere tijd een biological en later ook een JAK-remmer. De arts bespreekt met haar waarom deze middelen effectief zijn, maar ook invloed hebben op de afweer.`,
    questions: [
      {
        id: '7a',
        type: 'meerkeuze',
        points: 2,
        question: `7a. Wat is het beste voorbeeld van immunosuppressie? (2.0p)`,
        options: [
          { letter: 'A', text: 'Vaccinatie tegen influenza' },
          { letter: 'B', text: 'Toediening van een biological tegen TNF-α' },
          { letter: 'C', text: 'Toediening van rabies-immunoglobuline' },
          { letter: 'D', text: 'Orale rehydratie' },
        ],
        correctAnswer: 'B',
        explanation: 'Een anti-TNF biological is een vorm van gerichte immuunsuppressie.',
      },
      {
        id: '7b',
        type: 'meerkeuze',
        points: 2,
        question: `7b. Waarom kunnen JAK-remmers ontstekingsactiviteit verminderen? (2.0p)`,
        options: [
          { letter: 'A', text: 'Ze remmen de Gramkleuring' },
          { letter: 'B', text: 'Ze remmen cytokinesignalering via de JAK-STAT-route' },
          { letter: 'C', text: 'Ze vernietigen alle B-cellen' },
          { letter: 'D', text: 'Ze neutraliseren alleen IgM' },
        ],
        correctAnswer: 'B',
        explanation: 'JAK-remmers verminderen cytokinesignalering door de JAK-STAT-route te remmen.',
      },
      {
        id: '7c',
        type: 'meerkeuze',
        points: 2,
        question: `7c. Wat is een logisch gevolg van krachtige immuunremming? (2.0p)`,
        options: [
          { letter: 'A', text: 'Altijd betere klaring van opportunistische infecties' },
          { letter: 'B', text: 'Groter risico op infecties door verzwakte afweerrespons' },
          { letter: 'C', text: 'Volledige afwezigheid van bijwerkingen' },
          { letter: 'D', text: 'Geen effect op inflammatie' },
        ],
        correctAnswer: 'B',
        explanation: 'Bij immuunremming neemt het risico op infecties toe doordat afweerreacties verzwakken.',
      },
      {
        id: '7d',
        type: 'meerkeuze',
        points: 2,
        question: `7d. Methotrexaat is in deze context vooral een voorbeeld van: (2.0p)`,
        options: [
          { letter: 'A', text: 'Een immunostimulans' },
          { letter: 'B', text: 'Een antimetaboliet met immuunremmend effect' },
          { letter: 'C', text: 'Een passief vaccin' },
          { letter: 'D', text: 'Een antiviraal middel' },
        ],
        correctAnswer: 'B',
        explanation: 'Methotrexaat is een antimetaboliet met immuunremmende werking.',
      },
      {
        id: '7e',
        type: 'open',
        points: 4,
        question: `7e. Leg in maximaal 45 woorden uit wat het verschil is tussen immunostimulatie en immunosuppressie. (4.0p)`,
        wordLimit: 45,
        rubric:
          '2p stimulatie: versterken/activeren afweer (bijv. vaccinatie). 2p suppressie: remmen afweer (bijv. auto-immuun/overmatige ontsteking).',
        modelAnswer:
          'Immunostimulatie versterkt of activeert de afweer, bijvoorbeeld bij vaccinatie. Immunosuppressie remt onderdelen van de afweer, bijvoorbeeld om auto-immuunziekte of overmatige ontsteking te behandelen.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-8',
    title: 'Casus 8 – Virale pathogenese en ziektebeloop',
    totalPoints: 12,
    scenario: `Een docent bespreekt drie patiënten:
patiënt A met influenza die volledig herstelt
patiënt B met HSV-1 dat later opnieuw activeert
patiënt C met chronische HIV-infectie die zonder behandeling progressief verslechtert`,
    questions: [
      {
        id: '8a',
        type: 'meerkeuze',
        points: 3,
        question: `8a. Welke combinatie van ziektebeloop is juist? (3.0p)`,
        options: [
          { letter: 'A', text: 'Influenza – latent, HSV – acuut, HIV – self-limiting' },
          {
            letter: 'B',
            text: 'Influenza – acuut, HSV – latent met reactivatie, HIV – persistent progressief',
          },
          { letter: 'C', text: 'Influenza – chronisch, HSV – uitsluitend asymptomatisch, HIV – acuut' },
          {
            letter: 'D',
            text: 'Influenza – sluipend progressief, HSV – bacterieel, HIV – latent',
          },
        ],
        correctAnswer: 'B',
        explanation:
          'Influenza verloopt meestal acuut, HSV kent latentie met reactivatie, en HIV is zonder behandeling persistent progressief.',
      },
      {
        id: '8b',
        type: 'meerkeuze',
        points: 2,
        question: `8b. Welke uitspraak over asymptomatische infecties is juist? (2.0p)`,
        options: [
          { letter: 'A', text: 'Asymptomatisch betekent per definitie niet besmettelijk' },
          { letter: 'B', text: 'Asymptomatische personen kunnen toch virus verspreiden' },
          { letter: 'C', text: 'Asymptomatische infecties geven altijd steriele immuniteit' },
          { letter: 'D', text: 'Asymptomatische infecties komen alleen bij hepatitis voor' },
        ],
        correctAnswer: 'B',
        explanation: 'Asymptomatische personen kunnen wel degelijk besmettelijk zijn.',
      },
      {
        id: '8c',
        type: 'meerkeuze',
        points: 2,
        question: `8c. Welk virus is klassiek geassocieerd met maligne ontaarding? (2.0p)`,
        options: [
          { letter: 'A', text: 'HPV' },
          { letter: 'B', text: 'Rotavirus' },
          { letter: 'C', text: 'Norovirus' },
          { letter: 'D', text: 'RSV' },
        ],
        correctAnswer: 'A',
        explanation: 'HPV is klassiek geassocieerd met maligne ontaarding, zoals cervixcarcinoom.',
      },
      {
        id: '8d',
        type: 'meerkeuze',
        points: 2,
        question: `8d. Welke uitspraak over virale immunopathologie is juist? (2.0p)`,
        options: [
          {
            letter: 'A',
            text: 'Alle ziekteverschijnselen worden alleen door directe celdood veroorzaakt',
          },
          {
            letter: 'B',
            text: 'Cytokinen kunnen bijdragen aan klachten zoals koorts en malaise',
          },
          { letter: 'C', text: 'Virussen veroorzaken nooit immuuncomplexziekte' },
          { letter: 'D', text: 'Cytokinestormen zijn alleen een bacterieel fenomeen' },
        ],
        correctAnswer: 'B',
        explanation:
          'Veel klachten bij virale infecties ontstaan mede door cytokinen en de afweerreactie van de gastheer.',
      },
      {
        id: '8e',
        type: 'open',
        points: 3,
        question: `8e. Leg in maximaal 45 woorden uit wat bedoeld wordt met breed tropisme bij enterovirussen. (3.0p)`,
        wordLimit: 45,
        rubric:
          'Kern: virus infecteert meerdere celtypen/orgaansystemen; daardoor uiteenlopende ziektebeelden (darm, luchtweg, neurologie).',
        modelAnswer:
          'Breed tropisme betekent dat een virus verschillende celtypen of orgaansystemen kan infecteren. Daardoor kunnen enterovirussen uiteenlopende ziektebeelden geven, van darm- en luchtwegklachten tot neurologische symptomen.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-9',
    title: 'Casus 9 – Malaria: cyclus en preventie',
    totalPoints: 13,
    scenario: `Een 25-jarige geneeskundestudent bereidt zich voor op een tropencursus en leert dat malaria meer is dan alleen ‘koorts na een reis’.`,
    questions: [
      {
        id: '9a',
        type: 'beeldvraag',
        points: 3,
        gradingMethod: 'order',
        question: `9a. Zet de stadia van Plasmodium in de juiste volgorde vanaf besmetting door de mug. (3.0p)
Merozoïet
Gametocyt
Sporozoïet
Leverschizont
Trofozoïet
Bloedschizont`,
        orderIntro: 'Chronologische volgorde (1 = eerste stadium, 6 = laatste stadium):',
        orderOptions: [...MALARIA_CYCLE_SHUFFLED],
        correctOrder: [...MALARIA_CYCLE_CORRECT],
        expectedAnswer:
          'Sporozoïet → leverschizont → merozoïet → trofozoïet → bloedschizont → gametocyt',
        rubric: 'Alleen volledig juiste volgorde = 3p.',
        modelAnswer:
          'Na besmetting volgen sporozoïet, leverschizont, merozoïet, trofozoïet, bloedschizont en gametocyt.',
        explanation: '',
      },
      {
        id: '9b',
        type: 'meerkeuze',
        points: 2,
        question: `9b. Welke soort kan hypnozoïeten vormen? (2.0p)`,
        options: [
          { letter: 'A', text: 'P. falciparum' },
          { letter: 'B', text: 'P. vivax of P. ovale' },
          { letter: 'C', text: 'Alleen P. malariae' },
          { letter: 'D', text: 'Geen enkele Plasmodium-soort' },
        ],
        correctAnswer: 'B',
        explanation: 'P. vivax en P. ovale kunnen hypnozoïeten vormen.',
      },
      {
        id: '9c',
        type: 'meerkeuze',
        points: 2,
        question: `9c. Welke uitspraak over malariaprofylaxe is juist? (2.0p)`,
        options: [
          { letter: 'A', text: 'Profylaxe voorkomt altijd infectie van levercellen' },
          {
            letter: 'B',
            text: 'Profylaxe beschermt vooral tegen ziekte door werking op bloedstadia',
          },
          { letter: 'C', text: 'Profylaxe maakt diagnostiek overbodig' },
          { letter: 'D', text: 'Profylaxe voorkomt ook altijd hypnozoïetvorming' },
        ],
        correctAnswer: 'B',
        explanation:
          'Profylaxe beschermt vooral tegen ziekte door effect op bloedstadia, niet per se tegen de infectie zelf.',
      },
      {
        id: '9d',
        type: 'meerkeuze',
        points: 2,
        question: `9d. Welke combinatie van test en sensitiviteit is juist? (2.0p)`,
        options: [
          { letter: 'A', text: 'Antigeensneltest is gevoeliger dan dikke druppel' },
          { letter: 'B', text: 'Uitstrijk is gevoeliger dan dikke druppel' },
          { letter: 'C', text: 'Dikke druppel is het gevoeligst' },
          { letter: 'D', text: 'Alle drie zijn even gevoelig' },
        ],
        correctAnswer: 'C',
        explanation: 'Van de genoemde methoden is de dikke druppel het gevoeligst.',
      },
      {
        id: '9e',
        type: 'open',
        points: 4,
        question: `9e. Leg in maximaal 45 woorden uit waarom P. falciparum gevaarlijker is dan de andere veelvoorkomende malaria-soorten. (4.0p)`,
        wordLimit: 45,
        rubric:
          'Kern: sekwestratie geïnfecteerde erytrocyten in capillairen; ernstige orgaanschade, cerebrale malaria, fulminant beloop.',
        modelAnswer:
          'P. falciparum is gevaarlijker doordat geïnfecteerde erytrocyten kunnen sekwestreren in capillairen. Dat kan leiden tot ernstige orgaanschade, cerebrale malaria en een snel fulminant beloop.',
        explanation: '',
      },
    ],
  },
]
