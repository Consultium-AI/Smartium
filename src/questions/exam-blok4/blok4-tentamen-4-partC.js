/** Blok 4 oefententamen 4 — casussen 7–8 */

export const blok4Tentamen4PartC = [
  {
    id: 'casus-7',
    title: 'Casus 7 – Schimmels: van structuur naar therapie',
    totalPoints: 12,
    scenario: `Een immuungecompromitteerde patiënt ontwikkelt een invasieve schimmelinfectie. De arts wil dat je de bouw van fungi koppelt aan diagnostiek en therapie.`,
    questions: [
      {
        id: '7a',
        type: 'meerkeuze',
        points: 2,
        question: `7a. Welke uitspraak over fungi is juist? (2.0p)`,
        options: [
          { letter: 'A', text: 'Fungi zijn prokaryoten' },
          { letter: 'B', text: 'Fungi zijn eukaryoten' },
          { letter: 'C', text: 'Fungi hebben peptidoglycaan als hoofdcomponent' },
          { letter: 'D', text: 'Fungi hebben geen celwand' },
        ],
        correctAnswer: 'B',
        explanation: 'Fungi zijn eukaryoten.',
      },
      {
        id: '7b',
        type: 'meerkeuze',
        points: 3,
        question: `7b. Welke combinatie is correct? (3.0p)`,
        options: [
          {
            letter: 'A',
            text: 'Ergosterol – fungaal membraan; doelwit voor therapie',
          },
          { letter: 'B', text: 'Peptidoglycaan – fungale buitenmembraan' },
          { letter: 'C', text: 'LPS – gistcelmembraan' },
          { letter: 'D', text: 'Porines – hyfenvorming' },
        ],
        correctAnswer: 'A',
        explanation:
          'Ergosterol is een belangrijk membraanbestanddeel van fungi en een doelwit voor antifungale therapie.',
      },
      {
        id: '7c',
        type: 'meerkeuze',
        points: 2,
        question: `7c. Wat is het beste onderscheid tussen gist en schimmel? (2.0p)`,
        options: [
          {
            letter: 'A',
            text: 'Gist is altijd multicellulair, schimmel altijd eencellig',
          },
          {
            letter: 'B',
            text: 'Gist is eencellig, schimmel vormt vaak hyfen/mycelium',
          },
          { letter: 'C', text: 'Gist heeft geen kern, schimmel wel' },
          {
            letter: 'D',
            text: 'Gist veroorzaakt alleen systemische infecties',
          },
        ],
        correctAnswer: 'B',
        explanation: 'Een gist is eencellig; een schimmel vormt vaak hyfen en mycelium.',
      },
      {
        id: '7d',
        type: 'meerkeuze',
        points: 2,
        question: `7d. Welke test past het best bij verdenking op een systemische schimmelinfectie? (2.0p)`,
        options: [
          { letter: 'A', text: 'β-1,3-D-glucan-bepaling' },
          { letter: 'B', text: 'Monospot' },
          { letter: 'C', text: 'Legionella-urineantigeen' },
          { letter: 'D', text: 'Dikke druppel' },
        ],
        correctAnswer: 'A',
        explanation: 'β-1,3-D-glucan is een relevante marker bij systemische schimmelinfecties.',
      },
      {
        id: '7e',
        type: 'open',
        points: 3,
        question: `7e. In maximaal 45 woorden: waarom is fagocytose een belangrijk onderdeel van de afweer tegen schimmels? (3.0p)`,
        wordLimit: 45,
        rubric:
          'Kern: leukocyten nemen schimmels op en ruimen op; bij gestoorde fagocytose meer invasieve infectie.',
        modelAnswer:
          'Fagocytose is cruciaal omdat leukocyten schimmels opnemen en opruimen. Bij gestoorde fagocytfunctie neemt de gevoeligheid voor invasieve schimmelinfecties toe.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-8',
    title: 'Casus 8 – Virale gastro-enteritis in stappen',
    totalPoints: 13,
    scenario: `Een 11 maanden oud kind presenteert zich in februari met braken, waterige diarree en koorts. Het kind is niet gevaccineerd volgens schema.`,
    questions: [
      {
        id: '8a',
        type: 'meerkeuze',
        points: 2,
        question: `8a. Welke verwekker is nu het meest waarschijnlijk? (2.0p)`,
        options: [
          { letter: 'A', text: 'Rotavirus' },
          { letter: 'B', text: 'Bartonella henselae' },
          { letter: 'C', text: 'Toxoplasma gondii' },
          { letter: 'D', text: 'Mycoplasma pneumoniae' },
        ],
        correctAnswer: 'A',
        explanation:
          'Bij een niet-gevaccineerd jong kind in februari met braken, waterige diarree en koorts is rotavirus het meest waarschijnlijk.',
      },
      {
        id: '8b',
        type: 'meerkeuze',
        points: 2,
        question: `8b. Welk materiaal is het meest geschikt voor diagnostiek? (2.0p)`,
        options: [
          { letter: 'A', text: 'Feces' },
          { letter: 'B', text: 'Serum zonder klinische gegevens' },
          { letter: 'C', text: 'Liquor' },
          { letter: 'D', text: 'Nagelbiopt' },
        ],
        correctAnswer: 'A',
        explanation: 'Feces is het juiste materiaal.',
      },
      {
        id: '8c',
        type: 'meerkeuze',
        points: 3,
        question: `8c. Welke uitspraak over de pathogenese van rotavirus is juist? (3.0p)`,
        options: [
          {
            letter: 'A',
            text: 'Rotavirus veroorzaakt ziekte vooral via erytrocytsekwestratie',
          },
          {
            letter: 'B',
            text: 'Rotavirus beschadigt enterocyten en kan secretie verhogen via een enterotoxine',
          },
          {
            letter: 'C',
            text: 'Rotavirus veroorzaakt alleen bloederige diarree',
          },
          { letter: 'D', text: 'Rotavirus is een bacterie zonder envelop' },
        ],
        correctAnswer: 'B',
        explanation:
          'Rotavirus infecteert enterocyten, beschadigt microvilli/brush border en verhoogt secretie via NSP4, wat snelle dehydratie kan geven.',
      },
      {
        id: '8d',
        type: 'meerkeuze',
        points: 2,
        question: `8d. Waarom is vooral norovirus berucht voor uitbraken? (2.0p)`,
        options: [
          { letter: 'A', text: 'Het kan niet feco-oraal worden overgedragen' },
          {
            letter: 'B',
            text: 'Het heeft een lage infectiedosis en kan ook via braaksel verspreiden',
          },
          { letter: 'C', text: 'Het wordt alleen via muggen verspreid' },
          {
            letter: 'D',
            text: 'Het veroorzaakt nooit ziekte bij volwassenen',
          },
        ],
        correctAnswer: 'B',
        explanation:
          'Norovirus heeft een lage infectiedosis en kan ook aerogeen via braaksel verspreiden.',
      },
      {
        id: '8e',
        type: 'open',
        points: 4,
        question: `8e. Noem in maximaal 50 woorden twee redenen waarom jonge kinderen sneller ernstig kunnen uitdrogen bij virale gastro-enteritis. (4.0p)`,
        wordLimit: 50,
        rubric:
          'Kern: minder reserves; veel vochtverlies diarree/braken; rotavirus: absorptie↓ + secretie↑ (NSP4).',
        modelAnswer:
          'Jonge kinderen drogen sneller uit doordat zij minder reserves hebben en virale gastro-enteritis tegelijk veel vochtverlies geeft door diarree en braken. Bij rotavirus komt daar verminderde absorptie plus verhoogde secretie door NSP4 bovenop.',
        explanation: '',
      },
    ],
  },
]
