/** Blok 9 oefententamen 1 — casussen 1–3 · bron: studentversie + antwoordmodel (141 p totaal) */

const LAB_CASUS1 = `Hb | 10,6 mmol/L | 8,5–11,0
Leukocyten | 11,8 x10^9/L | 4,0–10,0
Trombocyten | 310 x10^9/L | 150–400
Natrium | 146 mmol/L | 135–145
Kalium | 5,4 mmol/L | 3,5–5,0
Chloride | 111 mmol/L | 98–107
Bicarbonaat | 18 mmol/L | 22–29
Ureum | 24,8 mmol/L | 3,0–8,0
Creatinine | 286 µmol/L | 60–110
eGFR (CKD-EPI) | 19 mL/min/1,73m² | >60
Glucose | 6,2 mmol/L | 4,0–7,8
CRP | 14 mg/L | <5`

const LAB_CASUS2 = `Creatinine | 146 µmol/L | 50–90
eGFR | 38 mL/min/1,73m² | >60
UACR | 46 mg/mmol | <3
Hb | 7,4 mmol/L | 7,5–10,0
Natrium | 139 mmol/L | 135–145
Kalium | 4,8 mmol/L | 3,5–5,0
Bicarbonaat | 21 mmol/L | 22–29
Albumine | 36 g/L | 35–50
LDL-cholesterol | 3,4 mmol/L | <2,6
HbA1c | 63 mmol/mol | <53`

const LAB_CASUS3 = `Natrium | 118 mmol/L | 135–145
Kalium | 4,2 mmol/L | 3,5–5,0
Chloride | 87 mmol/L | 98–107
Bicarbonaat | 24 mmol/L | 22–29
Ureum | 4,2 mmol/L | 3,0–8,0
Creatinine | 71 µmol/L | 50–90
Glucose | 5,4 mmol/L | 4,0–7,8
Serumosmolaliteit | 255 mosmol/kg | 275–295
Urine-osmolaliteit | 540 mosmol/kg | variabel
Urine natrium | 58 mmol/L | variabel
TSH | Normaal | —`

export const blok9Tentamen1PartA = [
  {
    id: 'casus-1',
    title: 'Casus 1 – Patiënt met acute nierschade',
    totalPoints: 13,
    scenario: `Een 74-jarige man meldt zich op de SEH vanwege 4 dagen diarree, misselijkheid en weinig intake. Hij gebruikt lisinopril, hydrochloorthiazide en sinds 5 dagen ibuprofen wegens rugpijn. Hij plast duidelijk minder dan normaal. Bij onderzoek is hij suf maar wekbaar, met droge slijmvliezen en orthostase. De bladderscan laat 70 mL residu zien.
Laboratorium
${LAB_CASUS1}
Een oude uitslag van 2 maanden geleden toont een creatinine van 91 µmol/L.`,
    questions: [
      {
        id: '1a',
        type: 'meerkeuze',
        points: 2,
        question: 'Wat is op basis van deze gegevens de meest waarschijnlijke hoofdcategorie van de acute nierschade?',
        options: [
          { letter: 'A', text: 'Prerenaal' },
          { letter: 'B', text: 'Intrinsiek renaal door glomerulonefritis' },
          { letter: 'C', text: 'Postrenaal' },
          { letter: 'D', text: 'Chronische nierschade zonder acute component' },
        ],
        correctAnswer: 'A',
        explanation:
          'Prerenaal: diarree, dehydratie, orthostase, oligurie en combinatie ACE-remmer + diureticum + NSAID passen het best bij prerenale acute nierschade.',
      },
      {
        id: '1b',
        type: 'open',
        points: 3,
        question:
          'Noem 3 bevindingen uit anamnese, medicatie of lichamelijk onderzoek die jouw antwoord bij 1a ondersteunen.\n Maximaal 50 woorden.',
        wordLimit: 50,
        rubric:
          '1 punt per juist argument, max 3: o.a. diarree/weinig intake; droge slijmvliezen; orthostase; oligurie; NSAID/ACE/diureticum; laag residu (postrenaal minder waarschijnlijk).',
        modelAnswer:
          'Diarree en slechte intake passen bij volumedepletie. Orthostase en droge slijmvliezen ondersteunen dehydratie. Daarnaast verlagen lisinopril, hydrochloorthiazide en ibuprofen samen de effectieve nierperfusie.',
        explanation: 'Bij open vragen geldt: inhoudelijk gelijkwaardige formuleringen ook goed rekenen.',
      },
      {
        id: '1c',
        type: 'meerkeuze',
        points: 2,
        question: 'Welke extra bevinding zou het sterkst pleiten vóór een postrenale oorzaak?',
        options: [
          { letter: 'A', text: 'Een ureum/creatinine-ratio die relatief hoog is' },
          { letter: 'B', text: 'Bilaterale hydronefrose op echografie' },
          { letter: 'C', text: 'Gebruik van NSAID’s' },
          { letter: 'D', text: 'Orthostatische hypotensie' },
        ],
        correctAnswer: 'B',
        explanation: 'Bilaterale hydronefrose op echografie.',
      },
      {
        id: '1d',
        type: 'open',
        points: 4,
        question:
          'Formuleer de 3 belangrijkste eerste behandelstappen, in logische volgorde.\n Maximaal 100 woorden.',
        wordLimit: 100,
        rubric:
          '1p stoppen/pauseren schadelijke medicatie; 1p volumestatus herstellen; 1p monitoren complicaties/urine/elektrolyten; 1p gericht aanvullend beleid (echo/obstructie).',
        modelAnswer:
          'Staak tijdelijk ibuprofen, lisinopril en hydrochloorthiazide. Start isotone vochtresuscitatie op geleide van kliniek. Controleer urineproductie, kalium, zuur-base en creatinine. Verricht aanvullend onderzoek naar oorzaak en sluit obstructie zo nodig met echo uit.',
        explanation: 'Bij open vragen geldt: inhoudelijk gelijkwaardige formuleringen ook goed rekenen.',
      },
      {
        id: '1e',
        type: 'meerkeuze',
        points: 2,
        question:
          'Welke van de onderstaande situaties is een directe acute indicatie om nierfunctievervangende therapie te overwegen?',
        options: [
          { letter: 'A', text: 'Creatinine 310 µmol/L zonder klachten' },
          { letter: 'B', text: 'Kalium 5,4 mmol/L zonder ECG-afwijkingen' },
          { letter: 'C', text: 'Ernstige overvulling met dyspneu ondanks behandeling' },
          { letter: 'D', text: 'eGFR 19 mL/min/1,73m² bij stabiele hemodynamiek' },
        ],
        correctAnswer: 'C',
        explanation: 'Ernstige overvulling met dyspneu ondanks behandeling.',
      },
    ],
  },
  {
    id: 'casus-2',
    title: 'Casus 2 – Patiënt met chronische nierschade',
    totalPoints: 14,
    scenario: `Een 61-jarige vrouw met diabetes mellitus type 2 en hypertensie komt op de polikliniek. Zij gebruikt metformine, amlodipine en losartan. Zij rookt niet, maar heeft obesitas. Bij herhaald onderzoek over meer dan 3 maanden blijkt aanhoudende albuminurie. Er is geen macroscopische hematurie.
Laboratorium
${LAB_CASUS2}`,
    questions: [
      {
        id: '2a',
        type: 'meerkeuze',
        points: 2,
        question: 'Welke classificatie past het best bij deze patiënt?',
        options: [
          { letter: 'A', text: 'G2A1' },
          { letter: 'B', text: 'G3aA2' },
          { letter: 'C', text: 'G3bA3' },
          { letter: 'D', text: 'G4A1' },
        ],
        correctAnswer: 'C',
        explanation: 'eGFR 38 past bij G3b, UACR 46 mg/mmol past bij A3.',
      },
      {
        id: '2b',
        type: 'open',
        points: 3,
        question:
          'Waarom kun je op basis van één afwijkende creatininewaarde nog niet direct spreken van chronische nierschade?\n Maximaal 50 woorden.',
        wordLimit: 50,
        rubric:
          '1p chroniciteit moet blijken over tijd; 1p persisterende afwijking >3 maanden; 1p eenmalige stijging kan acuut/reversibel zijn.',
        modelAnswer:
          'Chronische nierschade veronderstelt persisterende afwijkingen. Eén losse creatininewaarde kan ook passen bij een acute of reversibele verslechtering. Je wilt daarom aantonen dat functiestoornis of albuminurie langer dan 3 maanden aanwezig is.',
        explanation: 'Bij open vragen geldt: inhoudelijk gelijkwaardige formuleringen ook goed rekenen.',
      },
      {
        id: '2c',
        type: 'meerkeuze',
        points: 3,
        question:
          'Welke maatregel is het meest direct gericht op het verminderen van proteïnurie/albuminurie?',
        options: [
          { letter: 'A', text: 'Starten met een lisdiureticum' },
          { letter: 'B', text: 'Intensiveren van RAAS-remming, mits verdraagbaar' },
          { letter: 'C', text: 'Albumine-infuus geven' },
          { letter: 'D', text: 'Direct starten met dialyse' },
        ],
        correctAnswer: 'B',
        explanation: 'Intensiveren van RAAS-remming, mits verdraagbaar.',
      },
      {
        id: '2d',
        type: 'meerkeuze',
        points: 3,
        question:
          'Welke combinatie van factoren maakt progressie van chronische nierschade het meest waarschijnlijk?',
        options: [
          { letter: 'A', text: 'Lage UACR, goed gereguleerde bloeddruk, niet-roker' },
          { letter: 'B', text: 'Persisterende albuminurie, onvoldoende bloeddrukcontrole, diabetes' },
          { letter: 'C', text: 'Normale UACR, lage LDL, goede glykemische controle' },
          { letter: 'D', text: 'Eenmalig verhoogd creatinine na dehydratie' },
        ],
        correctAnswer: 'B',
        explanation: 'Persisterende albuminurie, onvoldoende bloeddrukcontrole, diabetes.',
      },
      {
        id: '2e',
        type: 'open',
        points: 3,
        question:
          'Formuleer een passend poliklinisch beleid met aandacht voor leefstijl, medicatie en follow-up.\n Maximaal 100 woorden.',
        wordLimit: 100,
        rubric: '1p leefstijl; 1p bloeddruk/RAAS; 1p diabetes/CVRM; 1p follow-up nierfunctie/albuminurie/kalium (max 3p).',
        modelAnswer:
          'Optimaliseer bloeddruk, bij voorkeur met RAAS-remming zolang kalium en nierfunctie dit toelaten. Adviseer gewichtsreductie, zoutbeperking en beweging. Optimaliseer diabetes- en lipidenbehandeling. Controleer eGFR, albuminurie en kalium periodiek en screen op progressie/complicaties van CKD.',
        explanation:
          'Officiële puntenverdeling in antwoordmodel: 4×1p; casustotaal in sleutel 14p — deze vraag in de app 3p zodat de som per casus klopt.',
      },
    ],
  },
  {
    id: 'casus-3',
    title: 'Casus 3 – Patiënt met ernstig verstoorde elektrolyten',
    totalPoints: 14,
    scenario: `Een 68-jarige vrouw met recent gediagnosticeerd kleincellig longcarcinoom komt naar de SEH met misselijkheid, hoofdpijn en verwardheid. Zij heeft geen perifere oedemen, geen duidelijke dehydratie en geen ascites.
Laboratorium
${LAB_CASUS3}`,
    questions: [
      {
        id: '3a',
        type: 'meerkeuze',
        points: 2,
        question: 'Welke diagnose past het best?',
        options: [
          { letter: 'A', text: 'Hypotone hyponatriëmie bij SIADH' },
          { letter: 'B', text: 'Hypertonische hyponatriëmie door hyperglykemie' },
          { letter: 'C', text: 'Pseudohyponatriëmie bij hyperlipidemie' },
          { letter: 'D', text: 'Hypovolemische hyponatriëmie door extrarenaal zoutverlies' },
        ],
        correctAnswer: 'A',
        explanation:
          'Laag natrium, lage serumosmolaliteit, geconcentreerde urine, hoog urine-natrium, euvolemisch beeld en SCLC passen bij SIADH.',
      },
      {
        id: '3b',
        type: 'meerdere_antwoorden',
        points: 3,
        question:
          'Welke bevindingen ondersteunen het meest een SIADH?\n Meerdere antwoorden mogelijk.',
        options: [
          { letter: 'A', text: 'Lage serumosmolaliteit' },
          { letter: 'B', text: 'Hoge urine-osmolaliteit' },
          { letter: 'C', text: 'Urine natrium > 30 mmol/L' },
          { letter: 'D', text: 'Ernstige hyperglykemie' },
          { letter: 'E', text: 'Klinisch euvolemisch beeld' },
        ],
        correctAnswers: ['A', 'B', 'C', 'E'],
        partialCreditNoWrong: true,
        pointsPerCorrect: 0.75,
        explanation:
          'A, B, C en E. Puntenverdeling: 0,75 punt per juiste keuze, max 3. Fout antwoord aankruisen: 0 punten voor de vraag.',
      },
      {
        id: '3c',
        type: 'meerkeuze',
        points: 2,
        question: 'Wat is in deze situatie de meest passende eerste behandeling?',
        options: [
          { letter: 'A', text: 'Grote hoeveelheid 0,45% NaCl' },
          { letter: 'B', text: 'Voorzichtige correctie met hypertoon zout, met strakke controle' },
          { letter: 'C', text: 'Alleen orale kaliumsuppletie' },
          { letter: 'D', text: 'Geen behandeling; eerst herhalen over 24 uur' },
        ],
        correctAnswer: 'B',
        explanation: 'Voorzichtige correctie met hypertoon zout, met strakke controle.',
      },
      {
        id: '3d',
        type: 'open',
        points: 4,
        question:
          'Leg uit waarom te snelle correctie van het natrium gevaarlijk is en welk behandelprincipe daarom belangrijk is.\n Maximaal 100 woorden.',
        wordLimit: 100,
        rubric:
          '2p gevaar osmotische demyelinisatie; 1p langzame/gecontroleerde correctie; 1p frequente controles.',
        modelAnswer:
          'Te snelle correctie van ernstige hyponatriëmie kan osmotische demyelinisatie veroorzaken. Daarom moet het natrium gecontroleerd en niet te snel stijgen. Behandel op indicatie met hypertoon zout en controleer serum-natrium frequent tijdens de eerste uren.',
        explanation: 'Bij open vragen geldt: inhoudelijk gelijkwaardige formuleringen ook goed rekenen.',
      },
      {
        id: '3e',
        type: 'meerkeuze',
        points: 3,
        question:
          'Welke aanvullende klinische informatie is het belangrijkst om direct actief uit te vragen of te beoordelen bij deze patiënt?',
        options: [
          { letter: 'A', text: 'Alleen de familieanamnese voor hypertensie' },
          { letter: 'B', text: 'Alleen het rookverleden in pack years' },
          { letter: 'C', text: 'Ernst en aard van neurologische symptomen' },
          { letter: 'D', text: 'Alleen de LDL-waarde van de laatste controle' },
        ],
        correctAnswer: 'C',
        explanation: 'Ernst en aard van neurologische symptomen.',
      },
    ],
  },
]
