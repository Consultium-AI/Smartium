/** Blok 5 oefententamen 2 — casussen 12–13 */

export const blok5Tentamen2PartD = [
  {
    id: 'casus-12',
    title: 'Casus 12 – Gezondheid, woning en planeet',
    totalPoints: 7,
    scenario:
      'Een gezin woont in een slecht geventileerd huis met schimmel, tabaksrook en hoge CO2-waarden. In een werkgroep bespreek je daarnaast luchtverontreiniging, klimaatverandering en DALY’s.',
    questions: [
      {
        id: '12a',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Wat betekent 1 DALY?',
        options: [
          { letter: 'A', text: 'Eén jaar ziekte zonder sterfte' },
          { letter: 'B', text: 'Eén verloren jaar gezond leven' },
          { letter: 'C', text: 'Eén extra levensjaar door behandeling' },
          { letter: 'D', text: 'Eén jaar met uitsluitend psychische klachten' },
        ],
        correctAnswer: 'B',
        explanation: '1 DALY staat voor één verloren jaar gezond leven.',
      },
      {
        id: '12b',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Welke situatie is een direct gezondheidseffect van klimaatverandering?',
        options: [
          { letter: 'A', text: 'Migratie door misoogsten' },
          { letter: 'B', text: 'Onderhandeling over klimaatbeleid' },
          { letter: 'C', text: 'Heat stroke tijdens extreme hitte' },
          { letter: 'D', text: 'Verandering van inkomensverdeling' },
        ],
        correctAnswer: 'C',
        explanation: 'Heat stroke is een direct gezondheidseffect van klimaatverandering.',
      },
      {
        id: '12c',
        type: 'meerkeuze',
        points: 1.0,
        question:
          'In een globale vergelijking blijkt regio A de hoogste totale ziektelast per 1000 inwoners te hebben, vooral door hoge YLL. Wat betekent dat het best?',
        options: [
          { letter: 'A', text: 'In regio A zijn vooral heel veel milde chronische ziekten' },
          { letter: 'B', text: 'Het verschil wordt vooral veroorzaakt door vroegtijdige sterfte' },
          { letter: 'C', text: 'YLD is de enige verklaring' },
          { letter: 'D', text: "Er is geen verschil in sterfte tussen regio's" },
        ],
        correctAnswer: 'B',
        explanation: 'Veel YLL betekent dat vroegtijdige sterfte een groot deel van de ziektelast verklaart.',
      },
      {
        id: '12d',
        type: 'meerdere_antwoorden',
        points: 2.0,
        maxSelections: 2,
        requireExactSet: true,
        question:
          'Welke TWEE factoren horen typisch bij een ongunstig binnenmilieu in woningen? (2.0p)\nNoteer twee letters.',
        options: [
          { letter: 'A', text: 'Vocht en schimmel' },
          { letter: 'B', text: 'Radon' },
          { letter: 'C', text: 'Zonbescherming met SPF' },
          { letter: 'D', text: 'Goede ventilatie' },
          { letter: 'E', text: 'Lage bevolkingsdichtheid buitenshuis' },
        ],
        correctAnswers: ['A', 'B'],
        explanation: 'Vocht/schimmel en radon horen bij een ongunstig binnenmilieu.',
      },
    ],
  },
  {
    id: 'casus-13',
    title: 'Casus 13 – Slimme zorg en moeilijke keuzes',
    totalPoints: 7,
    scenario:
      'Een zorgverzekeraar overweegt een huidkanker-app te vergoeden. In een pilot kregen 15.800 mensen een hoge-risicouitslag; uiteindelijk bleken 92 van hen daadwerkelijk huidkanker te hebben. In dezelfde onderwijslijn bespreek je immuunmodulatie en follow-up na orgaantransplantatie.',
    questions: [
      {
        id: '13a',
        type: 'open',
        points: 2.0,
        question:
          'Bereken de positief voorspellende waarde (PPV) van deze app. Rond af zoals gebruikelijk in woorden. (2.0p) Maximaal 20 woorden.',
        wordLimit: 20,
        rubric:
          'PPV = 92/15.800 ≈ 0,6%, dus ongeveer 6 op 1000. Nakijkopmerking: “ongeveer 5 op 1000” ook goed rekenen, omdat de stof zelf zo afrondt.',
        modelAnswer: 'PPV = 92/15.800 ≈ 0,6%, dus ongeveer 6 per 1000.',
        explanation:
          'Nakijkopmerking antwoordmodel: “ongeveer 5 per 1000” ook goed rekenen, omdat de stof zelf zo afrondt.',
      },
      {
        id: '13b',
        type: 'open',
        points: 2.0,
        question:
          'Leg in maximaal 35 woorden uit waarom testen op een externe dataset belangrijker is dan alleen testen op de trainingsdata. (2.0p)',
        wordLimit: 35,
        rubric:
          'Externe data = generalisatie echte praktijk; andere patiënten, camera’s, beoordelaars; niet alleen trainingsfit.',
        modelAnswer:
          'Een externe dataset laat zien of het model ook werkt in de echte wereld, met andere patiënten, camera’s en beoordelaars, en niet alleen op de trainingsdata.',
        explanation: 'Bij open vragen zijn andere formuleringen goed zolang de inhoudelijke kern klopt.',
      },
      {
        id: '13c',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Welke combinatie is het meest juist?',
        options: [
          { letter: 'A', text: 'Tocilizumab – anti-IL-6 – kan gebruikt worden bij cytokine release syndrome na CAR-T' },
          { letter: 'B', text: 'Azathioprine – checkpointremmer – vooral voor stimulatie van antitumorimmuniteit' },
          { letter: 'C', text: 'Tacrolimus – verhoogt T-celactivatie – gebruikt bij immunostimulatie' },
          { letter: 'D', text: 'Pembrolizumab – mTOR-remmer – verlaagt kans op endocriene auto-immuniteit' },
        ],
        correctAnswer: 'A',
        explanation:
          'Tocilizumab is een anti-IL-6-receptorblokker en kan worden gebruikt bij cytokine release syndrome na CAR-T.',
      },
      {
        id: '13d',
        type: 'open',
        points: 2.0,
        question:
          'Een niertransplantatiepatiënt ontwikkelt na jaren immunosuppressie meerdere plaveiselcelcarcinomen van de huid. Leg in maximaal 50 woorden uit welke afweging hier centraal staat tussen behandeling en schade. (2.0p)',
        wordLimit: 50,
        rubric:
          'Balans immunosuppressie (afstoting voorkomen) vs. iatrogeen: infecties, sterk verhoogd huidkankerrisico; zonbescherming, huidcontrole, soms IS-aanpassing.',
        modelAnswer:
          'De kernafweging is: genoeg immunosuppressie geven om afstoting te voorkomen, maar tegelijk de iatrogene schade beperken, zoals infecties en sterk verhoogd huidkankerrisico. Daarom zijn zonbescherming, huidcontrole en soms aanpassing van immunosuppressie belangrijk.',
        explanation: 'Bij open vragen zijn andere formuleringen goed zolang de inhoudelijke kern klopt.',
      },
    ],
  },
]
