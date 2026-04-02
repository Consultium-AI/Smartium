/** Blok 5 oefententamen 1 — casussen 13–14 */

export const blok5Tentamen1PartD = [
  {
    id: 'casus-13',
    title: 'Casus 13 – Pijn in de rug en afwijkend serum',
    totalPoints: 11,
    scenario:
      'Een 69-jarige man presenteert zich met rugpijn, moeheid en een verhoogd totaal eiwit. Bloedonderzoek toont een M-proteïne van 49 g/L, IgG-kappa, afwijkende vrije lichte ketenratio en anemie. Op beeldvorming zijn lytische botlaesies zichtbaar.',
    questions: [
      {
        id: '13a',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Welke diagnose is het meest waarschijnlijk?',
        options: [
          { letter: 'A', text: 'MGUS' },
          { letter: 'B', text: 'smouldering myeloom' },
          { letter: 'C', text: 'multipel myeloom' },
          { letter: 'D', text: 'aplastische anemie' },
        ],
        correctAnswer: 'C',
        explanation: 'M-proteïne, anemie, lytische laesies en klachten passen bij multipel myeloom.',
      },
      {
        id: '13b',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Waar staat de C in CRAB voor?',
        options: [
          { letter: 'A', text: 'Cytopenie' },
          { letter: 'B', text: 'Hypercalciëmie' },
          { letter: 'C', text: 'Cardiale fibrose' },
          { letter: 'D', text: 'Coagulopathie' },
        ],
        correctAnswer: 'B',
        explanation: 'C = hypercalciëmie.',
      },
      {
        id: '13c',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Welke combinatie hoort bij MGUS?',
        options: [
          { letter: 'A', text: 'Beenmergplasmacellen <10%, M-proteïne <30 g/L, geen MDEB' },
          { letter: 'B', text: 'Beenmergplasmacellen >60% en meerdere focale MRI-laesies' },
          { letter: 'C', text: 'Uitgesproken CRAB-schade met botlaesies' },
          { letter: 'D', text: 'Altijd noodzaak tot systemische behandeling' },
        ],
        correctAnswer: 'A',
        explanation: 'Dat is de definitie van MGUS volgens de stof.',
      },
      {
        id: '13d',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Wat is een belangrijke indicatie voor autologe HSCT in de stof?',
        options: [
          { letter: 'A', text: 'Acute appendicitis' },
          { letter: 'B', text: 'Multipel myeloom' },
          { letter: 'C', text: 'Graves oftalmopathie' },
          { letter: 'D', text: 'Tinea pedis' },
        ],
        correctAnswer: 'B',
        explanation: 'Autologe HSCT is een belangrijke behandeloptie bij multipel myeloom.',
      },
      {
        id: '13e',
        type: 'open',
        points: 3.0,
        question:
          'Leg kort uit waarom een beenmerguitstrijkje soms weinig afwijkingen kan tonen terwijl een biopt wel duidelijke plasmacelinfiltratie laat zien.',
        wordLimit: 60,
        rubric: 'Score: 1p sampling issue, 1p architectuur/infiltratie, 1p vergelijking uitstrijkje-biopt.',
        modelAnswer:
          'Een uitstrijkje beoordeelt losse cellen en kan sampling missen. Een biopt laat de ruimtelijke verdeling en infiltratie in het beenmerg beter zien en is daarom gevoeliger voor plasmacelinfiltratie.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-14',
    title: 'Casus 14 – Tussen afstoting en bijwerking',
    totalPoints: 15,
    scenario:
      'Een 55-jarige man ondergaat een niertransplantatie. Hij gebruikt daarna tacrolimus, mycofenolaatmofetil en prednison. Jaren later ontwikkelt hij meerdere huidmaligniteiten. Intussen wordt op de polikliniek een huidkanker-app besproken die veel “hoog-risico”-uitslagen geeft, maar waarvan er uiteindelijk maar weinig echt malign blijken.',
    questions: [
      {
        id: '14a',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Waarom is langdurige immunosuppressie na orgaantransplantatie noodzakelijk?',
        options: [
          { letter: 'A', text: 'Om wondgenezing te vertragen' },
          { letter: 'B', text: 'Om afstoting van het transplantaat te voorkomen' },
          { letter: 'C', text: 'Om HLA-match onbelangrijk te maken' },
          { letter: 'D', text: 'Om infecties te stimuleren' },
        ],
        correctAnswer: 'B',
        explanation: 'Immunosuppressie is nodig om rejectie te voorkomen.',
      },
      {
        id: '14b',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Welke vorm van rejectie ontstaat door vooraf aanwezige allo-antistoffen en treedt binnen uren op?',
        options: [
          { letter: 'A', text: 'Chronische rejectie' },
          { letter: 'B', text: 'Acute cellulaire rejectie' },
          { letter: 'C', text: 'Hyperacute rejectie' },
          { letter: 'D', text: 'Late humorale rejectie na jaren' },
        ],
        correctAnswer: 'C',
        explanation: 'Hyperacute rejectie ontstaat binnen uren door vooraf bestaande allo-antistoffen.',
      },
      {
        id: '14c',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Waarom hebben transplantatiepatiënten een sterk verhoogd risico op plaveiselcelcarcinoom van de huid?',
        options: [
          { letter: 'A', text: 'Alleen door hogere melanineproductie' },
          {
            letter: 'B',
            text: 'Door combinatie van langdurige immunosuppressie, UV-blootstelling en patiëntfactoren',
          },
          { letter: 'C', text: 'Omdat mTOR-remmers dit risico altijd verhogen' },
          { letter: 'D', text: 'Alleen door hyperacute rejectie' },
        ],
        correctAnswer: 'B',
        explanation:
          'Het PCC-risico stijgt door langdurige immunosuppressie, UV-schade en patiëntfactoren.',
      },
      {
        id: '14d',
        type: 'rekenvraag',
        points: 3.0,
        question:
          'Een huidkanker-app geeft 15.800 keer een hoge-risico-inschatting. Uiteindelijk blijken 92 van deze beoordelingen echt huidkanker te zijn.Bereken de positief voorspellende waarde (PPV) afgerond op drie decimalen.',
        correctValue: 0.006,
        tolerance: 0.0015,
        rubric:
          'Score: 2p juiste berekening, 1p correcte afronding/eenheid. Accepteer ook: 0,58% of ongeveer 6 per 1000.',
        modelAnswer: 'PPV = 92 / 15.800 = 0,0058 ≈ 0,006',
        explanation: 'PPV = 92 / 15.800 = 0,0058 ≈ 0,006 (3.0p)',
      },
      {
        id: '14e',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Welke uitspraak over bias in huidkankeralgoritmen is het meest juist?',
        options: [
          { letter: 'A', text: 'Bias speelt alleen bij kleine datasets en nooit in de praktijk' },
          {
            letter: 'B',
            text: 'Een liniaal naast een laesie kan een algoritme misleiden als dat vaak in trainingsbeelden voorkwam',
          },
          { letter: 'C', text: 'Bias is alleen een juridisch probleem, geen medisch probleem' },
          { letter: 'D', text: 'Gepigmenteerde huid is per definitie makkelijker voor alle algoritmen' },
        ],
        correctAnswer: 'B',
        explanation: 'Een liniaal kan een biasbron zijn als het algoritme dat patroon ten onrechte leert.',
      },
      {
        id: '14f',
        type: 'open',
        points: 4.0,
        question: 'Leg uit waarom generaliseerbaarheid belangrijker is dan alleen goede prestaties op de trainingsdataset.',
        wordLimit: 70,
        rubric:
          'Score: 1p verschil training vs echte wereld, 1p nieuwe/onbekende data, 1p externe validatie, 1p klinische relevantie.',
        modelAnswer:
          'Goede prestaties op trainingsdata tonen vooral dat een model die specifieke dataset goed kent. Voor klinische toepasbaarheid moet het ook goed werken op nieuwe, externe data met andere camera’s, populaties en labels. Anders overschat je de werkelijke bruikbaarheid.',
        explanation: '',
      },
    ],
  },
]
