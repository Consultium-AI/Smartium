/** Blok 4 oefententamen 3 — casussen 7–8 */

export const blok4Tentamen3PartC = [
  {
    id: 'casus-7',
    title: 'Casus 7 – Schimmels',
    totalPoints: 11,
    scenario: `Een patiënt komt met een ringvormige, scherp begrensde rode plek op de romp met centrale opheldering en fijne schilfering aan de rand.

Afbeelding 4 – huidafwijking: ronde erythemateuze plaque met rodere rand, schilfering aan de rand en lichter centrum.`,
    questions: [
      {
        id: '7a',
        type: 'meerkeuze',
        points: 2,
        question: `7a. Wat is de meest waarschijnlijke diagnose? (2.0p)`,
        options: [
          { letter: 'A', text: 'Tinea corporis' },
          { letter: 'B', text: 'Impetigo' },
          { letter: 'C', text: 'Psoriasis' },
          { letter: 'D', text: 'CMV-colitis' },
        ],
        correctAnswer: 'A',
        explanation:
          'Een ringvormige laesie met schilferende rand en centrale opheldering past bij tinea corporis.',
      },
      {
        id: '7b',
        type: 'meerkeuze',
        points: 2,
        question: `7b. Welke uitspraak over fungi is juist? (2.0p)`,
        options: [
          { letter: 'A', text: 'Fungi zijn prokaryoten' },
          { letter: 'B', text: 'Fungi zijn eukaryoten' },
          { letter: 'C', text: 'Fungi hebben peptidoglycaan als hoofdbestanddeel' },
          { letter: 'D', text: 'Fungi hebben geen celwand' },
        ],
        correctAnswer: 'B',
        explanation: 'Fungi zijn eukaryoten.',
      },
      {
        id: '7c',
        type: 'meerkeuze',
        points: 2,
        question: `7c. Welke combinatie is juist? (2.0p)`,
        options: [
          { letter: 'A', text: 'Ergosterol – belangrijk onderdeel van de fungale membraan' },
          { letter: 'B', text: 'LPS – typisch onderdeel van schimmels' },
          { letter: 'C', text: 'Porines – bepalen gistgroei' },
          { letter: 'D', text: 'Peptidoglycaan – hoofdbestanddeel van schimmelwand' },
        ],
        correctAnswer: 'A',
        explanation: 'Ergosterol is een belangrijk onderdeel van de fungale membraan.',
      },
      {
        id: '7d',
        type: 'meerkeuze',
        points: 2,
        question: `7d. Welke snelle test kan schimmeldraden aantonen? (2.0p)`,
        options: [
          { letter: 'A', text: 'KOH-preparaat' },
          { letter: 'B', text: 'Dikke druppel' },
          { letter: 'C', text: 'Monospot' },
          { letter: 'D', text: 'Urine-antigeentest' },
        ],
        correctAnswer: 'A',
        explanation: 'Een KOH-preparaat kan schimmeldraden snel aantonen.',
      },
      {
        id: '7e',
        type: 'open',
        points: 3,
        question: `7e. Leg in maximaal 35 woorden uit wat een belangrijk verschil is tussen een gist en een schimmel. (3.0p)`,
        wordLimit: 35,
        rubric: 'Kern: gist eencellig; schimmel meestal meercellig met hyfen/mycelium.',
        modelAnswer:
          'Een gist is eencellig, terwijl een schimmel meestal meercellig is en hyfen of mycelium vormt.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-8',
    title: 'Casus 8 – Virale gastro-enteritis',
    totalPoints: 11,
    scenario: `Een 11 maanden oud kind heeft in februari koorts, braken en waterige diarree. Het kind is niet gevaccineerd volgens schema en heeft minder natte luiers.`,
    questions: [
      {
        id: '8a',
        type: 'meerkeuze',
        points: 2,
        question: `8a. Welke verwekker is het meest waarschijnlijk? (2.0p)`,
        options: [
          { letter: 'A', text: 'Rotavirus' },
          { letter: 'B', text: 'Bartonella henselae' },
          { letter: 'C', text: 'Mycoplasma pneumoniae' },
          { letter: 'D', text: 'CMV' },
        ],
        correctAnswer: 'A',
        explanation:
          'Bij een niet-gevaccineerd kind in februari met braken, waterige diarree en koorts is rotavirus waarschijnlijk.',
      },
      {
        id: '8b',
        type: 'meerkeuze',
        points: 2,
        question: `8b. Welk materiaal is het meest geschikt voor diagnostiek? (2.0p)`,
        options: [
          { letter: 'A', text: 'Feces' },
          { letter: 'B', text: 'Liquor' },
          { letter: 'C', text: 'Nagelschraapsel' },
          { letter: 'D', text: 'Alleen serum' },
        ],
        correctAnswer: 'A',
        explanation: 'Feces is het aangewezen materiaal.',
      },
      {
        id: '8c',
        type: 'meerkeuze',
        points: 2,
        question: `8c. Welke uitspraak over rotavirus is juist? (2.0p)`,
        options: [
          {
            letter: 'A',
            text: 'Het beschadigt enterocyten en kan secretie verhogen',
          },
          { letter: 'B', text: 'Het veroorzaakt alleen bloederige diarree' },
          { letter: 'C', text: 'Het is een grampositieve bacterie' },
          { letter: 'D', text: 'Het geeft geen dehydratie' },
        ],
        correctAnswer: 'A',
        explanation: 'Rotavirus beschadigt enterocyten en kan via NSP4 secretie verhogen.',
      },
      {
        id: '8d',
        type: 'meerkeuze',
        points: 2,
        question: `8d. Waarom veroorzaakt norovirus vaak uitbraken? (2.0p)`,
        options: [
          { letter: 'A', text: 'Het heeft een hoge infectiedosis nodig' },
          {
            letter: 'B',
            text: 'Het heeft een lage infectiedosis en kan via braaksel verspreiden',
          },
          { letter: 'C', text: 'Het komt alleen in de tropen voor' },
          { letter: 'D', text: 'Het is niet besmettelijk' },
        ],
        correctAnswer: 'B',
        explanation:
          'Norovirus geeft vaak uitbraken door de lage infectiedosis en verspreiding via braaksel.',
      },
      {
        id: '8e',
        type: 'open',
        points: 3,
        question: `8e. Noem in maximaal 40 woorden twee tekenen uit de anamnese of het onderzoek die kunnen passen bij dehydratie bij een jong kind. (3.0p)`,
        wordLimit: 40,
        rubric:
          'Voorbeelden: minder natte luiers, slecht drinken, droge slijmvliezen, verminderde turgor, sufheid.',
        modelAnswer:
          'Minder natte luiers en slecht drinken passen bij dehydratie. Ook droge slijmvliezen, verminderde turgor of sufheid kunnen daarbij passen.',
        explanation: '',
      },
    ],
  },
]
