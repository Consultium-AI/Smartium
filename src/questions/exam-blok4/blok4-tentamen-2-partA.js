/** Blok 4 oefententamen 2 — casussen 1–3 (bron: Oefententamen blok 4.2, studentversie + antwoordmodel) */

const JAK_STAT_SHUFFLED = [
  'STAT-dimerisatie en translocatie naar de kern',
  'Cytokine bindt aan receptor',
  'Transcriptie van cytokine-afhankelijke genen',
  'JAK-activatie',
  'Fosforylering van STAT',
]

const JAK_STAT_CORRECT = [
  'Cytokine bindt aan receptor',
  'JAK-activatie',
  'Fosforylering van STAT',
  'STAT-dimerisatie en translocatie naar de kern',
  'Transcriptie van cytokine-afhankelijke genen',
]

export const blok4Tentamen2PartA = [
  {
    id: 'casus-1',
    title: 'Casus 1 – Cytokinen en sepsis',
    totalPoints: 13,
    scenario: `Een 67-jarige man presenteert zich op de SEH met koorts, tachycardie en hypotensie na een ernstige bacteriële infectie. De arts bespreekt met een coassistent dat verhoogde spiegels van bepaalde cytokinen een belangrijke rol spelen in dit ziektebeeld.`,
    questions: [
      {
        id: '1a',
        type: 'meerkeuze',
        points: 2,
        question: `1a. Welke cytokinen passen het best bij hypotensie bij sepsis? (2.0p)`,
        options: [
          { letter: 'A', text: 'IL-4 en IL-5' },
          { letter: 'B', text: 'IL-6 en TNF-α' },
          { letter: 'C', text: 'IL-10 en TGF-β' },
          { letter: 'D', text: 'IL-17 en IL-22' },
        ],
        correctAnswer: 'B',
        explanation:
          'IL-6 en TNF-α zijn belangrijke pro-inflammatoire cytokinen en spelen een rol bij systemische effecten zoals hypotensie bij sepsis.',
      },
      {
        id: '1b',
        type: 'meerkeuze',
        points: 2,
        question: `1b. Wat is de beste omschrijving van een chemokine? (2.0p)`,
        options: [
          { letter: 'A', text: 'Een cytokine dat alleen B-cellen activeert' },
          { letter: 'B', text: 'Een cytokine dat vooral celdeling remt' },
          { letter: 'C', text: 'Een cytokine dat cellen aantrekt en migratie stuurt' },
          { letter: 'D', text: 'Een cytokine dat uitsluitend endocrien werkt' },
        ],
        correctAnswer: 'C',
        explanation: 'Chemokinen sturen vooral migratie en aantrekking van immuuncellen.',
      },
      {
        id: '1c',
        type: 'beeldvraag',
        points: 3,
        gradingMethod: 'order',
        question: `1c. Zet de stappen van JAK-STAT-signalering in de juiste volgorde. (3.0p)
STAT-dimerisatie en translocatie naar de kern
Cytokine bindt aan receptor
Transcriptie van cytokine-afhankelijke genen
JAK-activatie
Fosforylering van STAT`,
        orderIntro: 'Chronologische volgorde (1 = eerste stap, 5 = laatste stap):',
        orderOptions: [...JAK_STAT_SHUFFLED],
        correctOrder: [...JAK_STAT_CORRECT],
        expectedAnswer:
          'Cytokine bindt aan receptor → JAK-activatie → fosforylering STAT → STAT-dimerisatie/translocatie → transcriptie',
        rubric: 'Alleen volledig juiste volgorde = 3p.',
        modelAnswer:
          'Eerst bindt het cytokine aan de receptor, daarna JAK-activatie, STAT-fosforylering, STAT-dimerisatie/translocatie en transcriptie van genen.',
        explanation: '',
      },
      {
        id: '1d',
        type: 'meerkeuze',
        points: 2,
        question: `1d. Welke uitspraak over IL-10 is juist? (2.0p)`,
        options: [
          { letter: 'A', text: 'IL-10 is overwegend pro-inflammatoir' },
          { letter: 'B', text: 'IL-10 remt onder andere pro-inflammatoire cytokinen' },
          { letter: 'C', text: 'IL-10 veroorzaakt vooral neutrofielenmigratie' },
          { letter: 'D', text: 'IL-10 is uitsluitend een groeifactor' },
        ],
        correctAnswer: 'B',
        explanation: 'IL-10 werkt overwegend anti-inflammatoir en remt onder andere pro-inflammatoire responsen.',
      },
      {
        id: '1e',
        type: 'open',
        points: 4,
        question: `1e. Leg in maximaal 45 woorden uit waarom de indeling van cytokinen in pro- en anti-inflammatoir een nuttige maar vereenvoudigde benadering is. (4.0p)`,
        wordLimit: 45,
        rubric:
          'Kern: nuttig voor globale indeling; vereenvoudigd omdat hetzelfde cytokine contextafhankelijk verschillende effecten kan hebben.',
        modelAnswer:
          'De indeling is nuttig omdat veel cytokinen vooral pro- of anti-inflammatoir werken, maar het blijft vereenvoudigd: hetzelfde cytokine kan contextafhankelijk verschillende effecten hebben op verschillende cellen en in verschillende fasen.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-2',
    title: 'Casus 2 – Schimmelafweer',
    totalPoints: 11,
    scenario: `Een 8-jarig meisje wordt opgenomen met een invasieve schimmelinfectie. Uit aanvullend onderzoek blijkt een defect in de afweerroute die belangrijk is voor herkenning van β-glucanen en mannan.`,
    questions: [
      {
        id: '2a',
        type: 'meerkeuze',
        points: 2,
        question: `2a. Welke receptorfamilie is het meest direct betrokken bij herkenning van veel schimmelcelwandcomponenten? (2.0p)`,
        options: [
          { letter: 'A', text: 'Fc-receptoren' },
          { letter: 'B', text: 'C-type lectin receptoren' },
          { letter: 'C', text: 'Bètalactamases' },
          { letter: 'D', text: 'TCR-receptoren' },
        ],
        correctAnswer: 'B',
        explanation: 'C-type lectin receptoren herkennen veel schimmelcomponenten zoals mannan en β-glucanen.',
      },
      {
        id: '2b',
        type: 'meerkeuze',
        points: 3,
        question: `2b. Welke combinatie van fungale structuur en klinische relevantie is juist? (3.0p)`,
        options: [
          { letter: 'A', text: 'Ergosterol – doelwit van sommige antifungale therapieën' },
          { letter: 'B', text: 'Peptidoglycaan – hoofdbestanddeel van de fungale celwand' },
          { letter: 'C', text: 'Mycolzuur – belangrijkste fungale sterol' },
          { letter: 'D', text: 'Porines – essentieel voor gistbudding' },
        ],
        correctAnswer: 'A',
        explanation: 'Ergosterol is een belangrijk onderdeel van de fungale membraan en een aangrijpingspunt voor antifungale therapie.',
      },
      {
        id: '2c',
        type: 'meerkeuze',
        points: 2,
        question: `2c. Wat is het beste onderscheid tussen een gist en een schimmel? (2.0p)`,
        options: [
          { letter: 'A', text: 'Een gist is prokaryoot, een schimmel eukaryoot' },
          { letter: 'B', text: 'Een gist is eencellig, een schimmel meestal meercellig met hyfen' },
          { letter: 'C', text: 'Een gist heeft een celwand, een schimmel niet' },
          { letter: 'D', text: 'Een gist veroorzaakt alleen huidinfecties' },
        ],
        correctAnswer: 'B',
        explanation: 'Gisten zijn eencellig; schimmels zijn meestal meercellig en vormen hyfen.',
      },
      {
        id: '2d',
        type: 'meerkeuze',
        points: 2,
        question: `2d. Welke test is het meest logisch bij verdenking op een systemische schimmelinfectie waarbij een celwandcomponent in serum wordt opgespoord? (2.0p)`,
        options: [
          { letter: 'A', text: 'Bepaling van β-1,3-D-glucan' },
          { letter: 'B', text: 'Urine-antigeentest voor pneumokokken' },
          { letter: 'C', text: 'Monospot' },
          { letter: 'D', text: 'Dikke druppel' },
        ],
        correctAnswer: 'A',
        explanation: 'β-1,3-D-glucan is een relevante serumtest bij systemische fungale infecties.',
      },
      {
        id: '2e',
        type: 'open',
        points: 3,
        question: `2e. In maximaal 40 woorden: waarom is fagocytose belangrijk in de afweer tegen schimmels? (3.0p)`,
        wordLimit: 40,
        rubric: 'Kern: fagocyten nemen schimmels op en doden ze; cruciaal bij invasieve schimmelinfecties.',
        modelAnswer:
          'Fagocyten ruimen schimmels op door opname en killing. Bij invasieve schimmelinfecties is fagocytose een cruciaal onderdeel van de aangeboren afweer.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-3',
    title: 'Casus 3 – Parasieten en ontwikkelingscycli',
    totalPoints: 12,
    scenario: `Een coschapstudent leert dat parasieten sterk van bacteriën en virussen verschillen doordat zij eukaryoot zijn en vaak meerdere ontwikkelingsstadia hebben.`,
    questions: [
      {
        id: '3a',
        type: 'meerkeuze',
        points: 2,
        question: `3a. Welke combinatie is juist? (2.0p)`,
        options: [
          { letter: 'A', text: 'Giardia lamblia – meercellige worm' },
          { letter: 'B', text: 'Ascaris lumbricoides – protozo' },
          { letter: 'C', text: 'Cryptosporidium – eencellige parasiet' },
          { letter: 'D', text: 'Taenia saginata – virusachtige parasiet' },
        ],
        correctAnswer: 'C',
        explanation: 'Cryptosporidium is een eencellige parasiet (protozo).',
      },
      {
        id: '3b',
        type: 'meerkeuze',
        points: 2,
        question: `3b. Wat is het beste voorbeeld van een directe ontwikkelingscyclus? (2.0p)`,
        options: [
          { letter: 'A', text: 'Een parasiet heeft mens én rund nodig' },
          { letter: 'B', text: 'Een parasiet heeft slechts één gastheersoort nodig' },
          { letter: 'C', text: 'Een parasiet kan alleen via een mug worden overgedragen' },
          { letter: 'D', text: 'Een parasiet vermeerdert zich alleen in water' },
        ],
        correctAnswer: 'B',
        explanation: 'Een directe ontwikkelingscyclus betekent dat slechts één gastheersoort nodig is.',
      },
      {
        id: '3c',
        type: 'meerkeuze',
        points: 2,
        question: `3c. Welke uitspraak over darmparasieten is juist? (2.0p)`,
        options: [
          { letter: 'A', text: 'Kweek is meestal de beste routinetest' },
          { letter: 'B', text: 'Microscopie is vaak nuttig omdat parasieten relatief groot zijn' },
          { letter: 'C', text: 'Parasieten zijn meestal kleiner dan virussen' },
          { letter: 'D', text: 'PCR is nooit bruikbaar' },
        ],
        correctAnswer: 'B',
        explanation: 'Parasieten zijn relatief groot en daardoor vaak goed aantoonbaar met microscopie.',
      },
      {
        id: '3d',
        type: 'meerkeuze',
        points: 2,
        question: `3d. Welke klacht past het best bij Entamoeba histolytica? (2.0p)`,
        options: [
          { letter: 'A', text: 'Uitsluitend droge hoest' },
          { letter: 'B', text: 'Bloederige diarree' },
          { letter: 'C', text: 'Purulente conjunctivitis' },
          { letter: 'D', text: 'Erythemateuze huidplaque' },
        ],
        correctAnswer: 'B',
        explanation: 'Entamoeba histolytica past bij amoebendysenterie met bloederige diarree.',
      },
      {
        id: '3e',
        type: 'open',
        points: 4,
        question: `3e. Leg in maximaal 45 woorden uit waarom worminfecties vaak langdurig verlopen. (4.0p)`,
        wordLimit: 45,
        rubric:
          'Kern: trage levenscyclus; geen directe vermeerdering tot volwassen wormen in derm; weken tot maanden; chronisch beloop.',
        modelAnswer:
          'Wormen hebben een trage levenscyclus en vermeerderen zich meestal niet direct in de darm tot nieuwe volwassen wormen. Daardoor duren infecties vaak weken tot maanden en verlopen ze chronisch.',
        explanation: '',
      },
    ],
  },
]
