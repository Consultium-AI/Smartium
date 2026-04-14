/** Blok 4 oefententamen 5 — casussen 7–8 */

export const blok4Tentamen5PartC = [
  {
    id: 'casus-7',
    title: 'Casus 7 – Virale gastro-enteritis en dehydratie',
    totalPoints: 13,
    scenario: `Een 10 maanden oud kind presenteert zich in februari met koorts, braken en waterige diarree. Het kind is niet gevaccineerd volgens het Rijksvaccinatieprogramma en heeft minder natte luiers.`,
    questions: [
      {
        id: '7a',
        type: 'meerkeuze',
        points: 2,
        question: `7a. Welke verwekker is het meest waarschijnlijk? (2.0p)`,
        options: [
          { letter: 'A', text: 'Rotavirus' },
          { letter: 'B', text: 'Bartonella henselae' },
          { letter: 'C', text: 'CMV-retinitis' },
          { letter: 'D', text: 'Legionella pneumophila' },
        ],
        correctAnswer: 'A',
        explanation:
          'Een niet-gevaccineerd jong kind in februari met braken, waterige diarree en koorts past het best bij rotavirus.',
      },
      {
        id: '7b',
        type: 'meerkeuze',
        points: 2,
        question: `7b. Welk materiaal is aangewezen voor moleculaire diagnostiek? (2.0p)`,
        options: [
          { letter: 'A', text: 'Feces' },
          { letter: 'B', text: 'Liquor' },
          { letter: 'C', text: 'Nagelschraapsel' },
          { letter: 'D', text: 'Alleen serum' },
        ],
        correctAnswer: 'A',
        explanation:
          'Feces is het aangewezen materiaal voor diagnostiek van virale gastro-enteritis.',
      },
      {
        id: '7c',
        type: 'meerkeuze',
        points: 3,
        question: `7c. Welke uitspraak over de pathogenese van rotavirus is juist? (3.0p)`,
        options: [
          {
            letter: 'A',
            text: 'Rotavirus beschadigt enterocyten en NSP4 kan secretie verhogen',
          },
          {
            letter: 'B',
            text: 'Rotavirus veroorzaakt diarree via sekwestratie in capillairen',
          },
          {
            letter: 'C',
            text: 'Rotavirus is een gramnegatieve bacterie',
          },
          {
            letter: 'D',
            text: 'Rotavirus veroorzaakt alleen bloederige diarree',
          },
        ],
        correctAnswer: 'A',
        explanation:
          'Rotavirus infecteert enterocyten, beschadigt microvilli/brush border en NSP4 verhoogt secretie.',
      },
      {
        id: '7d',
        type: 'meerkeuze',
        points: 2,
        question: `7d. Waarom is norovirus berucht voor uitbraken? (2.0p)`,
        options: [
          { letter: 'A', text: 'Het heeft een hoge infectiedosis nodig' },
          { letter: 'B', text: 'Het kan niet via braaksel verspreiden' },
          {
            letter: 'C',
            text: 'Het heeft een lage infectiedosis en kan ook via braaksel verspreiden',
          },
          { letter: 'D', text: 'Het komt alleen in de tropen voor' },
        ],
        correctAnswer: 'C',
        explanation:
          'Norovirus heeft een lage infectiedosis en kan ook via braaksel aerogeen worden verspreid.',
      },
      {
        id: '7e',
        type: 'open',
        points: 4,
        question: `7e. Noem in maximaal 50 woorden twee redenen waarom jonge kinderen sneller ernstig kunnen uitdrogen bij virale gastro-enteritis. (4.0p)`,
        wordLimit: 50,
        rubric:
          'Kern: kleine reserves; veel vochtverlies; rotavirus: absorptie↓ + secretie↑ (NSP4).',
        modelAnswer:
          'Jonge kinderen hebben minder vochtreserve en verliezen snel veel vocht door diarree en braken. Bij rotavirus komt daar verminderde absorptie plus verhoogde secretie door NSP4 bij, wat snelle dehydratie bevordert.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-8',
    title: 'Casus 8 – Cytokinen, JAK-STAT en immunomodulatie',
    totalPoints: 12,
    scenario: `Een 57-jarige vrouw met reumatoïde artritis gebruikt een anti-TNF-biological en later ook een JAK-remmer. Haar arts bespreekt waarom deze middelen ontsteking kunnen remmen, maar ook infectierisico verhogen.`,
    questions: [
      {
        id: '8a',
        type: 'meerkeuze',
        points: 2,
        question: `8a. Welke cytokinen zijn in deze blokstof het meest klassiek pro-inflammatoir? (2.0p)`,
        options: [
          { letter: 'A', text: 'TNF-α en IL-6' },
          { letter: 'B', text: 'IL-10 en TGF-β' },
          { letter: 'C', text: 'IgM en IgG' },
          { letter: 'D', text: 'C3 en C5' },
        ],
        correctAnswer: 'A',
        explanation: 'TNF-α en IL-6 zijn klassieke pro-inflammatoire cytokinen.',
      },
      {
        id: '8b',
        type: 'meerkeuze',
        points: 2,
        question: `8b. Welke uitspraak over IL-10 is juist? (2.0p)`,
        options: [
          { letter: 'A', text: 'IL-10 is vooral pro-inflammatoir' },
          {
            letter: 'B',
            text: 'IL-10 heeft overwegend anti-inflammatoire effecten',
          },
          { letter: 'C', text: 'IL-10 is een JAK-remmer' },
          { letter: 'D', text: 'IL-10 is een antistofisotype' },
        ],
        correctAnswer: 'B',
        explanation:
          'IL-10 is overwegend anti-inflammatoir en remt pro-inflammatoire cytokinen.',
      },
      {
        id: '8c',
        type: 'meerkeuze',
        points: 3,
        question: `8c. Wat is de kern van JAK-STAT-signalering? (3.0p)`,
        options: [
          {
            letter: 'A',
            text: 'Cytokinebinding activeert JAK, waarna STAT wordt geactiveerd en genexpressie beïnvloedt',
          },
          {
            letter: 'B',
            text: 'JAK-STAT is een bacterieel resistentiemechanisme',
          },
          { letter: 'C', text: 'JAK-STAT activeert alleen complement' },
          { letter: 'D', text: 'JAK-STAT komt alleen voor in de lever' },
        ],
        correctAnswer: 'A',
        explanation:
          'JAK-STAT: cytokine bindt receptor → JAK-activatie → STAT-fosforylering → transcriptieregulatie.',
      },
      {
        id: '8d',
        type: 'meerkeuze',
        points: 2,
        question: `8d. Wat is een logisch klinisch gevolg van krachtige immunosuppressie? (2.0p)`,
        options: [
          { letter: 'A', text: 'Minder kans op opportunistische infecties' },
          {
            letter: 'B',
            text: 'Meer kans op infecties door verzwakte immuunrespons',
          },
          { letter: 'C', text: 'Altijd betere vaccinatierespons' },
          { letter: 'D', text: 'Volledig verdwijnen van cytokinen' },
        ],
        correctAnswer: 'B',
        explanation:
          'Krachtige immunosuppressie verhoogt het infectierisico doordat de immuunrespons verzwakt.',
      },
      {
        id: '8e',
        type: 'open',
        points: 3,
        question: `8e. Leg in maximaal 45 woorden uit wat het verschil is tussen immunostimulatie en immunosuppressie. (3.0p)`,
        wordLimit: 45,
        rubric:
          'Kern: stimulatie versterkt afweer (vaccinatie); suppressie remt afweer (biologicals/JAK).',
        modelAnswer:
          'Immunostimulatie versterkt of activeert de afweer, bijvoorbeeld via vaccinatie. Immunosuppressie remt onderdelen van de afweer, bijvoorbeeld met biologicals of JAK-remmers bij auto-immuunziekten.',
        explanation: '',
      },
    ],
  },
]
