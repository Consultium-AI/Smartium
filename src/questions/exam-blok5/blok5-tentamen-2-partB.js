/** Blok 5 oefententamen 2 — casussen 5–8 */

export const blok5Tentamen2PartB = [
  {
    id: 'casus-5',
    title: 'Casus 5 – Melanoom en de eerste lymfeklier',
    totalPoints: 8,
    scenario:
      'Een 56-jarige vrouw heeft een primair melanoom op de bovenarm. Er zijn geen palpabele lymfeklieren. De tumor is geclassificeerd als T2b.',
    questions: [
      {
        id: '5a',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Welke uitspraak over de sentinel node procedure is het meest juist?',
        options: [
          { letter: 'A', text: 'De procedure heeft vooral meerwaarde bij palpabele lymfeklieren' },
          { letter: 'B', text: 'De procedure bepaalt de N-status door de eerste drainerende lymfeklier te onderzoeken' },
          { letter: 'C', text: 'De procedure wordt alleen gebruikt als er al afstandsmetastasen zijn' },
          { letter: 'D', text: 'Een positieve sentinel node betekent automatisch volledig okseltoilet' },
        ],
        correctAnswer: 'B',
        explanation:
          'De sentinel node procedure onderzoekt de eerste drainerende lymfeklier en helpt zo de N-status te bepalen.',
      },
      {
        id: '5b',
        type: 'beeldvraag',
        points: 2.0,
        question: `Zet de volgende stappen in de meest logische volgorde. (2.0p)
intra-operatieve detectie met gammaprobe
preoperatieve injectie met Tc-99m-nanocolloïd
verwijdering van de schildwachtklier
lymfescintigrafie`,
        gradingMethod: 'order',
        orderIntro: 'Meest logische volgorde (1 = eerste stap, 4 = laatste stap):',
        orderOptions: [
          'intra-operatieve detectie met gammaprobe',
          'preoperatieve injectie met Tc-99m-nanocolloïd',
          'verwijdering van de schildwachtklier',
          'lymfescintigrafie',
        ],
        correctOrder: [
          'preoperatieve injectie met Tc-99m-nanocolloïd',
          'lymfescintigrafie',
          'intra-operatieve detectie met gammaprobe',
          'verwijdering van de schildwachtklier',
        ],
        expectedAnswer: '2 → 4 → 1 → 3',
        rubric: 'Volgorde zoals in antwoordmodel.',
        modelAnswer: '2 → 4 → 1 → 3',
      },
      {
        id: '5c',
        type: 'open',
        points: 2.0,
        question:
          'Leg in maximaal 40 woorden uit waarom een volledig lymfekliertoilet na een positieve sentinel node niet meer standaard wordt gedaan.',
        wordLimit: 40,
        rubric:
          'Kern: geen duidelijke overlevingswinst; wél meer complicaties (seroom, lymfoedeem).',
        modelAnswer:
          'Een volledig lymfekliertoilet geeft geen duidelijke overlevingswinst, maar wel meer complicaties zoals seroom en lymfoedeem. Daarom gebeurt het niet meer standaard.',
        explanation: 'Bij open vragen zijn andere formuleringen goed zolang de inhoudelijke kern klopt.',
      },
      {
        id: '5d',
        type: 'meerkeuze',
        points: 2.0,
        question:
          'Een patiënt met stadium IV-melanoom heeft een bekende BRAF-mutatie, maar gebruikt hoge doses dexamethason wegens ernstige cerebrale klachten. Welke systemische strategie is dan relatief het meest logisch?',
        options: [
          { letter: 'A', text: 'Immunotherapie heeft juist extra veel effect door dexamethason' },
          { letter: 'B', text: 'BRAF/MEK-remming kan dan logischer zijn dan immunotherapie' },
          { letter: 'C', text: 'Alleen radiotherapie, systemische therapie werkt dan nooit' },
          { letter: 'D', text: 'Enkel antihormonale therapie' },
        ],
        correctAnswer: 'B',
        explanation:
          'Bij gebruik van dexamethason is immunotherapie minder zinvol; bij BRAF-gemuteerd melanoom kan BRAF/MEK-remming dan logischer zijn.',
      },
    ],
  },
  {
    id: 'casus-6',
    title: 'Casus 6 – Knobbel in de borst',
    totalPoints: 8,
    scenario:
      'Een 48-jarige vrouw voelt sinds enkele weken een knobbel in de linker mamma. De radioloog beschrijft een suspecte afwijking. Er is nog aanvullend onderzoek nodig.',
    questions: [
      {
        id: '6a',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Wat betekent BI-RADS 0?',
        options: [
          { letter: 'A', text: 'Normaal onderzoek, controle over 2 jaar' },
          { letter: 'B', text: 'Waarschijnlijk benigne afwijking' },
          { letter: 'C', text: 'Beoordeling nog niet definitief; aanvullend onderzoek nodig' },
          { letter: 'D', text: 'Hoogstwaarschijnlijk maligne, directe operatie zonder biopt' },
        ],
        correctAnswer: 'C',
        explanation: 'BI-RADS 0 betekent dat de beoordeling nog niet af is en dat aanvullend onderzoek nodig is.',
      },
      {
        id: '6b',
        type: 'koppelvraag',
        points: 2.0,
        question: 'Koppel de beeldvorming aan de meest passende situatie. (2.0p)',
        items: ['Echografie mamma', 'MRI-geleid biopt', 'Mammografie'],
        matchOptions: [
          { letter: 'a', text: 'afwijking die alleen op MRI zichtbaar is' },
          { letter: 'b', text: 'jonge patiënt, palpabele afwijking, stralingsvrije aanvulling' },
          { letter: 'c', text: 'standaard beeldvorming met onder andere CC- en MLO-opnamen' },
        ],
        correctMapping: { 0: 'b', 1: 'a', 2: 'c' },
        explanation: '1 = b, 2 = a, 3 = c',
      },
      {
        id: '6c',
        type: 'open',
        points: 2.0,
        question:
          'Leg in maximaal 35 woorden het verschil uit tussen CTV en PTV in de radiotherapie. (2.0p)',
        wordLimit: 35,
        rubric:
          'CTV = klinisch doelvolume inclusief marge voor microscopische uitbreiding; PTV = CTV plus marge voor beweging en instelonzekerheid.',
        modelAnswer:
          'CTV is het klinische doelvolume inclusief marge voor microscopische uitbreiding. PTV is het CTV plus extra marge voor beweging en instelonzekerheid.',
        explanation: 'Bij open vragen zijn andere formuleringen goed zolang de inhoudelijke kern klopt.',
      },
      {
        id: '6d',
        type: 'meerkeuze',
        points: 2.0,
        question:
          'Een tumor is ER-negatief, PR-negatief en HER2 3+. Welke systemische benadering past hier het best bij in de neoadjuvante setting?',
        options: [
          { letter: 'A', text: 'Alleen antihormonale therapie' },
          { letter: 'B', text: 'Chemotherapie plus HER2-gerichte therapie' },
          { letter: 'C', text: 'Geen systemische therapie, alleen radiotherapie' },
          { letter: 'D', text: 'Alleen corticosteroïden' },
        ],
        correctAnswer: 'B',
        explanation: 'Bij ER-negatief, PR-negatief en HER2 3+ past chemotherapie plus HER2-gerichte therapie.',
      },
    ],
  },
  {
    id: 'casus-7',
    title: 'Casus 7 – Het rode, dikke onderbeen',
    totalPoints: 8,
    scenario:
      'Een 63-jarige man met diabetes mellitus type 2 meldt zich met sinds drie dagen pijn, koorts en toenemende roodheid van het rechteronderbeen. De roodheid is felrood en scherp begrensd. Het been is oedemateus.',
    questions: [
      {
        id: '7a',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Welke diagnose is op basis van dit huidbeeld het meest waarschijnlijk?',
        options: [
          { letter: 'A', text: 'Cellulitis' },
          { letter: 'B', text: 'Erysipelas' },
          { letter: 'C', text: 'Stase dermatitis' },
          { letter: 'D', text: 'Tinea pedis' },
        ],
        correctAnswer: 'B',
        explanation: 'Scherp begrensd, felrood en oedemateus past het best bij erysipelas.',
      },
      {
        id: '7b',
        type: 'meerkeuze',
        points: 2.0,
        question:
          'Bij een andere patiënt met verdenking op een trombosebeen is de klinische kans laag en het D-dimeer normaal. Wat is volgens de diagnostische strategie het meest juiste vervolg?',
        options: [
          { letter: 'A', text: 'Direct starten met DOAC' },
          { letter: 'B', text: 'Altijd CT-angiografie van het been' },
          { letter: 'C', text: 'DVT is in principe uitgesloten' },
          { letter: 'D', text: 'Altijd venografie' },
        ],
        correctAnswer: 'C',
        explanation: 'Bij lage klinische kans en normaal D-dimeer is DVT in principe uitgesloten.',
      },
      {
        id: '7c',
        type: 'meerdere_antwoorden',
        points: 2.0,
        maxSelections: 2,
        requireExactSet: true,
        question:
          'Welke TWEE factoren zijn duidelijke risicofactoren voor erysipelas/cellulitis? (2.0p)\nNoteer twee letters.',
        options: [
          { letter: 'A', text: "Dermatomycose als porte d'entrée" },
          { letter: 'B', text: 'Diabetes mellitus' },
          { letter: 'C', text: 'Hyperthyreoïdie' },
          { letter: 'D', text: 'Perifeer arterieel vaatlijden' },
          { letter: 'E', text: 'Lage leeftijd alleen' },
        ],
        correctAnswers: ['A', 'B'],
        explanation:
          'Primair beoogd: A en B — Dermatomycose als porte d’entrée en diabetes mellitus zijn duidelijke risicofactoren. Nakijkopmerking: D is ook een echte risicofactor uit de stof, maar was hier niet de primair beoogde combinatie.',
      },
      {
        id: '7d',
        type: 'open',
        points: 2.0,
        question:
          'Leg in maximaal 35 woorden uit waarom je een zieke patiënt met koorts, hypotensie en hoge ontstekingswaarden liever start met intraveneuze flucloxacilline dan met orale therapie. (2.0p)',
        wordLimit: 35,
        rubric:
          'Kern: betrouwbare spiegels; orale flucloxacilline beperkte biologische beschikbaarheid; i.v. veiliger/effectiever in acute fase.',
        modelAnswer:
          'Bij een zieke patiënt wil je betrouwbare spiegels. Orale flucloxacilline heeft beperkte biologische beschikbaarheid, dus intraveneus starten is in de acute fase veiliger en effectiever.',
        explanation: 'Bij open vragen zijn andere formuleringen goed zolang de inhoudelijke kern klopt.',
      },
    ],
  },
  {
    id: 'casus-8',
    title: 'Casus 8 – Een vergrote lymfeklier in de hals',
    totalPoints: 8,
    scenario:
      'Een 49-jarige vrouw heeft sinds enkele weken een niet-pijnlijke halsklier. Ze meldt nachtzweten en onbedoeld gewichtsverlies. De klier voelt rubberachtig aan en is scherp afgrensbaar.',
    questions: [
      {
        id: '8a',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Welke bevinding maakt een maligne oorzaak het meest waarschijnlijk?',
        options: [
          { letter: 'A', text: 'Acute pijnlijke zwelling na verkoudheid' },
          { letter: 'B', text: 'Warmte, roodheid en snelle regressie' },
          { letter: 'C', text: 'B-symptomen en langzaam groeiende, niet-pijnlijke klier' },
          { letter: 'D', text: 'Alleen jeuk zonder palpabele afwijking' },
        ],
        correctAnswer: 'C',
        explanation: 'B-symptomen plus een langzaam groeiende, niet-pijnlijke klier wijzen meer op maligniteit.',
      },
      {
        id: '8b',
        type: 'open',
        points: 2.0,
        question:
          'Leg in maximaal 35 woorden uit waarom een cytologische punctie alleen meestal onvoldoende is om een lymfoom goed te classificeren. (2.0p)',
        wordLimit: 35,
        rubric:
          'Kern: architectuur lymfeklier niet beoordeeld; histologisch weefselonderzoek nodig voor classificatie.',
        modelAnswer:
          'Met alleen cytologie beoordeel je de lymfeklierarchitectuur onvoldoende. Voor classificatie van een lymfoom is histologisch weefselonderzoek nodig.',
        explanation: 'Bij open vragen zijn andere formuleringen goed zolang de inhoudelijke kern klopt.',
      },
      {
        id: '8c',
        type: 'meerkeuze',
        points: 2.0,
        question:
          'Een patiënt heeft lymfeklierstations aan beide zijden van het middenrif aangedaan, zonder afstandsmetastasen. Welk Ann Arbor-stadium past het best?',
        options: [
          { letter: 'A', text: 'Stadium I' },
          { letter: 'B', text: 'Stadium II' },
          { letter: 'C', text: 'Stadium III' },
          { letter: 'D', text: 'Stadium IV' },
        ],
        correctAnswer: 'C',
        explanation: 'Aandoening aan beide zijden van het middenrif past bij Ann Arbor stadium III.',
      },
      {
        id: '8d',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Wat is bij agressief non-Hodgkinlymfoom de meest passende stagering?',
        options: [
          { letter: 'A', text: 'Alleen echografie van de buik' },
          { letter: 'B', text: 'FDG-PET gecombineerd met CT hals/thorax/abdomen/bekken' },
          { letter: 'C', text: 'Alleen thoraxfoto' },
          { letter: 'D', text: 'Alleen beenmergonderzoek, beeldvorming heeft geen rol' },
        ],
        correctAnswer: 'B',
        explanation: 'Bij agressief non-Hodgkinlymfoom past FDG-PET plus CT voor stagering.',
      },
    ],
  },
]
