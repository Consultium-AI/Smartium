/** Blok 9 oefententamen 3 — casussen 1–3 (133 p totaal examen) */

const URINE1 = `Soortelijk gewicht | hoog
Erytrocyten | negatief
Eiwit | spoor
Leukocyten | negatief
Nitriet | negatief`

const LAB1 = `Hb | 8.7 mmol/L | 8.5–11.0
Leukocyten | 10.8 x10^9/L | 4.0–10.0
CRP | 18 mg/L | <5
Natrium | 138 mmol/L | 135–145
Kalium | 5.2 mmol/L | 3.5–5.0
Ureum | 19.1 mmol/L | 3.0–8.0
Creatinine | 268 µmol/L | 60–110
eGFR (CKD-EPI) | 20 mL/min/1.73m² | >60
Bicarbonaat | 21 mmol/L | 22–29`

const LAB2 = `Creatinine | 154 µmol/L | 60–110
Ureum | 10.8 mmol/L | 3.0–8.0
Natrium | 139 mmol/L | 135–145
Kalium | 4.5 mmol/L | 3.5–5.0
Eosinofielen | 0.8 x10^9/L | 0.0–0.5
CRP | 24 mg/L | <5`

const URINE2 = `Erytrocyten | negatief
Eiwit | spoor
Leukocyten | positief
Nitriet | negatief`

const LAB3 = `Creatinine | 312 µmol/L | 50–100
Ureum | 18.4 mmol/L | 3.0–8.0
Albumine | 34 g/L | 35–50
CRP | 38 mg/L | <5
C3 | verlaagd | normaal
C4 | verlaagd | normaal`

const SED3 = `Erytrocyten | veel
Dysmorfe erytrocyten | aanwezig
Erytrocytencilinders | aanwezig
Eiwit | ++`

export const blok9Tentamen3PartA = [
  {
    id: 'casus-1',
    title: 'Casus 1 – Acute nierschade op de SEH',
    totalPoints: 13,
    scenario: `Een 76-jarige man komt op de SEH wegens sufheid en verminderde intake sinds 4 dagen. Sinds 3 dagen heeft hij diarree. Voorgeschiedenis: hypertensie, artrose, benigne prostaathyperplasie. Medicatie: lisinopril, ibuprofen zo nodig, tamsulosine. Bij onderzoek: droge slijmvliezen, bloeddruk 94/58 mmHg, pols 108/min, geen koorts. De verpleegkundige meldt dat de urineproductie sinds opname laag is.
Laboratorium
${LAB1}
Urineonderzoek
${URINE1}`,
    questions: [
      {
        id: '1a',
        type: 'meerkeuze',
        points: 2,
        question:
          '1a. Enkelvoudige meerkeuzevraag (2p)\nWelke categorie acute nierschade is op basis van deze gegevens het meest waarschijnlijk?',
        options: [
          { letter: 'A', text: 'Prerenaal' },
          { letter: 'B', text: 'Renaal, passend bij acute tubulusnecrose' },
          { letter: 'C', text: 'Postrenaal' },
          { letter: 'D', text: 'Renaal, passend bij glomerulonefritis' },
        ],
        correctAnswer: 'A',
        explanation: 'Volumeverlies/hypoperfusie staat op de voorgrond.',
      },
      {
        id: '1b',
        type: 'open',
        points: 3,
        question:
          '1b. Open vraag (3p, max. 40 woorden)\nNoem de twee belangrijkste argumenten uit de casus die jouw keuze bij 1a het sterkst ondersteunen.',
        wordLimit: 40,
        rubric:
          '1,5p per goed onderbouwd argument, max 3p: o.a. diarree/verminderde intake/dehydratie; droge slijmvliezen; hypotensie/tachycardie; geconcentreerde urine weinig sediment; NSAID + ACE-remmer.',
        modelAnswer:
          'De patiënt heeft duidelijke volumedepletie met diarree, droge slijmvliezen en hypotensie. Daarnaast past de geconcentreerde urine zonder actief sediment beter bij prerenale hypoperfusie dan bij intrinsieke nierschade.',
        explanation: '',
      },
      {
        id: '1c',
        type: 'meerkeuze',
        points: 2,
        question:
          '1c. Enkelvoudige meerkeuzevraag (2p)\nWelke uitspraak over de gerapporteerde eGFR is het meest correct?',
        options: [
          { letter: 'A', text: 'De eGFR is betrouwbaar omdat CKD-EPI juist bedoeld is voor acute nierschade' },
          { letter: 'B', text: 'De eGFR is onbetrouwbaar omdat de formule uitgaat van een stabiele creatininewaarde' },
          { letter: 'C', text: 'De eGFR is onbetrouwbaar omdat ureum verhoogd is' },
          { letter: 'D', text: 'De eGFR is alleen onbetrouwbaar bij patiënten met hematurie' },
        ],
        correctAnswer: 'B',
        explanation: 'CKD-EPI is bij acute nierschade beperkt bruikbaar.',
      },
      {
        id: '1d',
        type: 'meerkeuze',
        points: 2,
        question:
          '1d. Enkelvoudige meerkeuzevraag (2p)\nWat is in deze fase de meest logische eerste stap in het beleid?',
        options: [
          { letter: 'A', text: 'Starten met methylprednisolon i.v.' },
          { letter: 'B', text: 'CT-angiografie van de nierarteriën' },
          { letter: 'C', text: 'Vochtsuppletie en stoppen van uitlokkende medicatie' },
          { letter: 'D', text: 'Direct starten met chronische dialyseplanning' },
        ],
        correctAnswer: 'C',
        explanation: 'Eerst reversibele prerenale factoren aanpakken.',
      },
      {
        id: '1e',
        type: 'koppelvraag',
        points: 4,
        question:
          '1e. Koppelvraag (4p)\nKoppel de onderstaande bevinding het best aan de categorie prerenaal, renaal of postrenaal.\nAcute urineretentie bij afgeknikte blaaskatheter\nAcute hoge tacrolimusspiegel met afferente vasoconstrictie\nErytrocytencilinders in het urinesediment\nRetroperitoneale fibrose met uretercompressie\nAntwoordopties:\nA. Prerenaal\nB. Renaal\nC. Postrenaal',
        items: [
          'Acute urineretentie bij afgeknikte blaaskatheter',
          'Acute hoge tacrolimusspiegel met afferente vasoconstrictie',
          'Erytrocytencilinders in het urinesediment',
          'Retroperitoneale fibrose met uretercompressie',
        ],
        matchOptions: [
          { letter: 'A', text: 'Prerenaal' },
          { letter: 'B', text: 'Renaal' },
          { letter: 'C', text: 'Postrenaal' },
        ],
        correctMapping: { 0: 'C', 1: 'A', 2: 'B', 3: 'C' },
        explanation: '1p per juiste koppeling volgens antwoordmodel.',
      },
    ],
  },
  {
    id: 'casus-2',
    title: 'Casus 2 – Leukocyturie, huidafwijkingen en nierfunctieverslechtering',
    totalPoints: 14,
    scenario: `Een 28-jarige man meldt zich bij de huisarts wegens malaise en jeukende huidafwijkingen op romp en armen. Drie weken geleden startte hij amoxicilline/clavulaanzuur wegens sinusitis. Hij heeft geen dysurie, geen pollakisurie en geen flankpijn. Temperatuur 37,6°C.
Laboratorium
${LAB2}
Urineonderzoek
${URINE2}`,
    questions: [
      {
        id: '2a',
        type: 'meerkeuze',
        points: 2,
        question: '2a. Enkelvoudige meerkeuzevraag (2p)\nWelke diagnose is het meest waarschijnlijk?',
        options: [
          { letter: 'A', text: 'Urineweginfectie' },
          { letter: 'B', text: 'Tubulo-interstitiële nefritis' },
          { letter: 'C', text: 'Acute glomerulonefritis' },
          { letter: 'D', text: 'Nefrotisch syndroom' },
        ],
        correctAnswer: 'B',
        explanation: '',
      },
      {
        id: '2b',
        type: 'open',
        points: 3,
        question:
          '2b. Open vraag (3p, max. 50 woorden)\nNoem drie bevindingen uit de casus die deze diagnose waarschijnlijker maken dan een urineweginfectie.',
        wordLimit: 50,
        rubric:
          '1p per goed argument, max 3p: recent antibioticum; huidafwijkingen; eosinofilie; geen typische UWI-klachten; nitriet negatief; lichte nierfunctiestoornis.',
        modelAnswer:
          'Recent gestart antibioticum, jeukende huidafwijkingen en eosinofilie passen bij TIN. Daarnaast ontbreken typische UWI-klachten zoals dysurie of pollakisurie.',
        explanation: '',
      },
      {
        id: '2c',
        type: 'meerdere_antwoorden',
        points: 3,
        question:
          '2c. Meerkeuzevraag, meerdere antwoorden mogelijk (3p)\nWelke aanvullende stappen passen het best bij deze verdenking?',
        options: [
          { letter: 'A', text: 'Urinekweek' },
          { letter: 'B', text: 'Actief nagaan welke medicatie recent is gestart' },
          { letter: 'C', text: 'Starten met langdurige ciprofloxacine zonder verdere diagnostiek' },
          { letter: 'D', text: 'Beoordelen of de oorzaak weggenomen kan worden' },
          { letter: 'E', text: 'Direct concluderen dat leukocyturie altijd een infectie betekent' },
        ],
        correctAnswers: ['A', 'B', 'D'],
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 1,
        explanation: 'Juiste antwoorden: A, B, D. 1p per juist gekozen optie, geen negatieve punten.',
      },
      {
        id: '2d',
        type: 'meerkeuze',
        points: 2,
        question:
          '2d. Enkelvoudige meerkeuzevraag (2p)\nWelke uitspraak over tubulaire nierschade is het meest correct?',
        options: [
          { letter: 'A', text: 'Tubulaire nierschade geeft altijd forse hematurie en erytrocytencilinders' },
          { letter: 'B', text: 'Tubulaire nierschade kan bestaan met weinig opvallende urineafwijkingen' },
          { letter: 'C', text: 'Tubulaire nierschade en elektrolytstoornissen gaan niet samen' },
          { letter: 'D', text: 'Tubulaire nierschade veroorzaakt per definitie ernstige hypertensie' },
        ],
        correctAnswer: 'B',
        explanation: '',
      },
      {
        id: '2e',
        type: 'koppelvraag',
        points: 4,
        question:
          '2e. Matrixvraag (4p)\nKoppel elk ziektebeeld aan de best passende hoofdcategorie.\nBartter-syndroom\nGitelman-syndroom\nLiddle-syndroom\nADPKD\nAntwoordopties:\nA. Erfelijke stoornis van natriumtransport met lage bloeddruk\nB. Erfelijke stoornis van natriumtransport met hypertensie\nC. Cysteuze nierziekte',
        items: ['Bartter-syndroom', 'Gitelman-syndroom', 'Liddle-syndroom', 'ADPKD'],
        matchOptions: [
          { letter: 'A', text: 'Erfelijke stoornis van natriumtransport met lage bloeddruk' },
          { letter: 'B', text: 'Erfelijke stoornis van natriumtransport met hypertensie' },
          { letter: 'C', text: 'Cysteuze nierziekte' },
        ],
        correctMapping: { 0: 'A', 1: 'A', 2: 'B', 3: 'C' },
        explanation: 'Bartter/Gitelman → A; Liddle → B; ADPKD → C. 1p per juiste koppeling.',
      },
    ],
  },
  {
    id: 'casus-3',
    title: 'Casus 3 – Hematurie en snel dalende nierfunctie',
    totalPoints: 13,
    scenario: `Een 24-jarige vrouw presenteert zich met sinds 5 dagen cola-kleurige urine, malaise en lichte dyspneu. Zij hoest sinds gisteren ook wat bloed op. Bij onderzoek: bloeddruk 162/96 mmHg, perifeer geen oedeem.
Laboratorium
${LAB3}
Urinesediment
${SED3}`,
    questions: [
      {
        id: '3a',
        type: 'meerkeuze',
        points: 2,
        question: '3a. Enkelvoudige meerkeuzevraag (2p)\nWelk syndroom past het best bij deze presentatie?',
        options: [
          { letter: 'A', text: 'Nefrotisch syndroom' },
          { letter: 'B', text: 'Nefritisch syndroom' },
          { letter: 'C', text: 'Geïsoleerde tubulaire stoornis' },
          { letter: 'D', text: 'Prerenaal nierfalen' },
        ],
        correctAnswer: 'B',
        explanation: 'Hematurie, erytrocytencilinders, snelle nierfunctiedaling.',
      },
      {
        id: '3b',
        type: 'open',
        points: 4,
        question:
          '3b. Open vraag (4p, max. 100 woorden)\nLeg uit waarom erytrocytencilinders in deze casus zo belangrijk zijn.',
        wordLimit: 100,
        rubric:
          '2p: bewijzend voor glomerulaire hematurie; 1p: erytrocyten uit glomerulus/filter; 1p: past bij nefritisch/glomerulair beeld.',
        modelAnswer:
          'Erytrocytencilinders zijn bewijzend voor glomerulaire hematurie. Ze tonen dat erytrocyten vanuit de glomerulus in het tubulussysteem terechtkomen. Daarmee ondersteunen ze sterk een nefritisch syndroom of glomerulonefritis in plaats van een postrenale of lagere urinewegoorzaak.',
        explanation: '',
      },
      {
        id: '3c',
        type: 'meerkeuze',
        points: 2,
        question: '3c. Enkelvoudige meerkeuzevraag (2p)\nWelke uitspraak is het meest correct?',
        options: [
          { letter: 'A', text: 'Erytrocytencilinders bewijzen glomerulaire hematurie' },
          { letter: 'B', text: 'Erytrocytencilinders passen vooral bij cystitis' },
          { letter: 'C', text: 'Erytrocytencilinders wijzen op postrenale obstructie' },
          { letter: 'D', text: 'Erytrocytencilinders maken glomerulaire oorzaak juist onwaarschijnlijk' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
      {
        id: '3d',
        type: 'meerkeuze',
        points: 2,
        question:
          '3d. Enkelvoudige meerkeuzevraag (2p)\nWat is bij ernstig gestoorde nierfunctie en sterke verdenking op een inflammatoire glomerulaire aandoening vaak de eerste behandelingsstap?',
        options: [
          { letter: 'A', text: 'Alleen zoutbeperking' },
          { letter: 'B', text: 'Hoge dosis methylprednisolon i.v.' },
          { letter: 'C', text: 'Alleen lisdiuretica' },
          { letter: 'D', text: 'Chronische ACE-remming starten en afwachten' },
        ],
        correctAnswer: 'B',
        explanation: 'Bij ernstig nefritisch beeld snel ontsteking remmen.',
      },
      {
        id: '3e',
        type: 'meerdere_antwoorden',
        points: 3,
        question:
          '3e. Meerkeuzevraag, meerdere antwoorden mogelijk (3p)\nWelke aanvullende bloedtesten zijn in deze setting het meest passend?',
        options: [
          { letter: 'A', text: 'ANCA' },
          { letter: 'B', text: 'Anti-GBM' },
          { letter: 'C', text: 'ANA en anti-dsDNA' },
          { letter: 'D', text: 'C3/C4' },
          { letter: 'E', text: 'D-dimeer als hoofdtest voor glomerulonefritis' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.75,
        explanation: 'Juiste antwoorden: A, B, C, D. 0,75p per juiste optie, geen negatieve punten.',
      },
    ],
  },
]
