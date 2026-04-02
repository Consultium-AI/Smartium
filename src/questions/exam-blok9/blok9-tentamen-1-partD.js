/** Blok 9 oefententamen 1 — casussen 9–10 */

const LAB_CASUS9 = `Hb | 6,7 mmol/L | 8,5–11,0
Leukocyten | 12,2 x10^9/L | 4,0–10,0
Trombocyten | 430 x10^9/L | 150–400
Natrium | 128 mmol/L | 135–145
Kalium | 4,3 mmol/L | 3,5–5,0
Calcium | 2,86 mmol/L | 2,20–2,55
AF | 186 U/L | <120
ALAT | 31 U/L | <45
CRP | 64 mg/L | <5`

const PLEURA_CASUS9 = `Pleuravocht-eiwit | 38 g/L
Serum-eiwit | 60 g/L
Pleuravocht-LDH | 420 U/L
Serum-LDH | 250 U/L
Bovengrens serum-LDH normaal | 240 U/L`

export const blok9Tentamen1PartD = [
  {
    id: 'casus-9',
    title: 'Casus 9 – Longkanker, wat nu',
    totalPoints: 19,
    scenario: `Een 68-jarige man met 50 pack years komt op de poli met gewichtsverlies, verminderde eetlust, aanhoudend hoesten en sinds kort hemoptoë. Bij onderzoek is er een palpabele linker supraclaviculaire zwelling. Op de X-thorax is een suspecte afwijking in de long te zien. CT-thorax/bovenbuik toont een pulmonale massa, mediastinale lymfeklieren en pleuravocht. Er is ook een verdachte laesie in de contralaterale long.
Laboratorium
${LAB_CASUS9}
Pleuravochtanalyse
${PLEURA_CASUS9}`,
    questions: [
      {
        id: '9a',
        type: 'meerkeuze',
        points: 2,
        question: 'Wat is de meest waarschijnlijke overkoepelende diagnose?',
        options: [
          { letter: 'A', text: 'Longcarcinoom' },
          { letter: 'B', text: 'Ongecompliceerde virale pneumonie' },
          { letter: 'C', text: 'Sarcoïdose zonder maligniteitsverdenking' },
          { letter: 'D', text: 'Pleuritis door overbelasting' },
        ],
        correctAnswer: 'A',
        explanation: 'Longcarcinoom.',
      },
      {
        id: '9b',
        type: 'open',
        points: 3,
        question:
          'Noem 2 argumenten waarom hier sprake kan zijn van gevorderde ziekte.\n Maximaal 50 woorden.',
        wordLimit: 50,
        rubric:
          '1,5 punt per goed argument, max 3: supraclaviculaire klier; pleuravocht; contralaterale long; systemische symptomen; gevorderde ziekte op CT.',
        modelAnswer:
          'De supraclaviculaire klierbetrokkenheid past bij uitgebreidere lymfeklierziekte. Daarnaast wijzen pleuravocht en een contralaterale longafwijking op gevorderde ziekte, mogelijk met metastatische verspreiding.',
        explanation: 'Bij open vragen geldt: inhoudelijk gelijkwaardige formuleringen ook goed rekenen.',
      },
      {
        id: '9c',
        type: 'meerkeuze',
        points: 3,
        question: 'Hoe classificeer je het pleuravocht op basis van de Light-criteria?',
        options: [
          { letter: 'A', text: 'Transsudaat' },
          { letter: 'B', text: 'Exsudaat' },
          { letter: 'C', text: 'Niet te classificeren' },
          { letter: 'D', text: 'Pseudotranssudaat' },
        ],
        correctAnswer: 'B',
        explanation:
          'eiwitratio 38/60 = 0,63 > 0,5; LDH-ratio 420/250 = 1,68 > 0,6; pleuravocht-LDH > 2/3 bovengrens serum-LDH → exsudaat.',
      },
      {
        id: '9d',
        type: 'open',
        points: 4,
        question:
          'Vul voor onderstaande elementen de meest passende vereenvoudigde TNM-component in.\nPrimaire tumor met lokale pulmonale massa: T __\nSupraclaviculaire/contralaterale klierbetrokkenheid: N __\nContralaterale longafwijking en/of maligne pleurale betrokkenheid: M __',
        wordLimit: 100,
        rubric:
          '1p correct hanteren dat T niet exact uit casus volgt / T onbekend; 1,5p N3; 1,5p M1.',
        modelAnswer:
          'T: minimaal T2/TX passend bij pulmonale massa; exacte subcategorie niet altijd ten volle vast te stellen zonder tumorgrootte/invasie. N: N3 (supraclaviculaire/contralaterale klier). M: M1 (contralaterale long en/of maligne pleura).',
        explanation:
          'Omdat de casus geen exacte tumorgrootte geeft, moet vooral N3 en M1 goed zijn volgens antwoordmodel.',
      },
      {
        id: '9e',
        type: 'meerdere_antwoorden',
        points: 3,
        question:
          'Welke verschijnselen kunnen passen bij paraneoplastische syndromen bij longkanker?\n Meerdere antwoorden mogelijk.',
        options: [
          { letter: 'A', text: 'SIADH met hyponatriëmie' },
          { letter: 'B', text: 'Hypercalciëmie' },
          { letter: 'C', text: 'Lambert-Eaton myasthenisch syndroom' },
          { letter: 'D', text: 'Acute appendicitis' },
          { letter: 'E', text: 'Pulmonale osteo-artropathie' },
        ],
        correctAnswers: ['A', 'B', 'C', 'E'],
        partialCreditNoWrong: true,
        pointsPerCorrect: 0.75,
        explanation:
          'A, B, C en E. 0,75 punt per juiste keuze, max 3. Fout antwoord aankruisen: 0 punten voor de vraag.',
      },
      {
        id: '9f',
        type: 'open',
        points: 4,
        question:
          'Beschrijf in hoofdlijnen de verdere diagnostische route en noem ten minste 1 discipline die hierbij een belangrijke rol speelt.\n Maximaal 100 woorden.',
        wordLimit: 100,
        rubric:
          '1p stadiëring/beeldvorming; 1p weefseldiagnostiek; 1p pathologie/moleculair/pleuravocht; 1p discipline.',
        modelAnswer:
          'Vervolg met volledige stadiëring, vaak CT/PET-CT en zo nodig aanvullende beeldvorming. Bevestig de diagnose met weefseldiagnostiek via bronchoscopie, EBUS of punctie, en beoordeel histologie/moleculaire kenmerken. Betrokken disciplines zijn onder andere longarts, radioloog, patholoog en internist-oncoloog.',
        explanation: 'Bij open vragen geldt: inhoudelijk gelijkwaardige formuleringen ook goed rekenen.',
      },
    ],
  },
  {
    id: 'casus-10',
    title: 'Casus 10 – Atriumfibrilleren',
    totalPoints: 13,
    scenario: `Een 67-jarige man meldt zich met hartkloppingen en vermoeidheid. Hij gebruikt geen anti-aritmica. Pols is onregelmatig en snel. Bloeddruk 118/72 mmHg. Geen pijn op de borst. ECG-beschrijving: geen duidelijke P-toppen, onregelmatig-irregulaire RR-intervallen, smalle QRS-complexen, ventriculaire frequentie 138/min.`,
    questions: [
      {
        id: '10a',
        type: 'meerkeuze',
        points: 2,
        question: 'Wat is de meest waarschijnlijke ritmestoornis?',
        options: [
          { letter: 'A', text: 'Sinusbradycardie' },
          { letter: 'B', text: 'Atriumfibrilleren' },
          { letter: 'C', text: 'Ventrikeltachycardie' },
          { letter: 'D', text: '3e-graads AV-blok' },
        ],
        correctAnswer: 'B',
        explanation: 'Atriumfibrilleren.',
      },
      {
        id: '10b',
        type: 'open',
        points: 3,
        question:
          'Noem 2 ECG-kenmerken die jouw diagnose ondersteunen.\n Maximaal 40 woorden.',
        wordLimit: 40,
        rubric: '1,5p geen duidelijke P-toppen; 1,5p onregelmatig-irregulaire RR-intervallen.',
        modelAnswer:
          'Er zijn geen duidelijke P-toppen zichtbaar en de RR-intervallen zijn onregelmatig-irregulair. Dat past bij atriumfibrilleren.',
        explanation: 'Bij open vragen geldt: inhoudelijk gelijkwaardige formuleringen ook goed rekenen.',
      },
      {
        id: '10c',
        type: 'meerkeuze',
        points: 2,
        question:
          'Dezelfde patiënt wordt tijdens observatie hypotensief, klam en suf. Wat is dan de meest passende onmiddellijke behandeling?',
        options: [
          { letter: 'A', text: 'Afwachten en over 24 uur herhalen' },
          { letter: 'B', text: 'Synchroniseerde elektrische cardioversie' },
          { letter: 'C', text: 'Alleen leefstijladvies meegeven' },
          { letter: 'D', text: 'Uitsluitend een statine starten' },
        ],
        correctAnswer: 'B',
        explanation: 'Synchroniseerde elektrische cardioversie.',
      },
      {
        id: '10d',
        type: 'meerkeuze',
        points: 2,
        question:
          'Welke uitspraak over de lange-termijnbenadering van atriumfibrilleren is het meest juist?',
        options: [
          { letter: 'A', text: 'Alleen het ECG telt; leefstijl heeft nauwelijks invloed' },
          { letter: 'B', text: 'Alcohol, obesitas, hypertensie en OSAS kunnen atriumfibrilleren onderhouden of verergeren' },
          { letter: 'C', text: 'Ablatie is altijd de eerste stap, ongeacht context' },
          { letter: 'D', text: 'Risicofactoren aanpakken is alleen relevant bij ventrikelfibrilleren' },
        ],
        correctAnswer: 'B',
        explanation:
          'Alcohol, obesitas, hypertensie en OSAS kunnen atriumfibrilleren onderhouden of verergeren.',
      },
      {
        id: '10e',
        type: 'open',
        points: 4,
        question:
          'Noem 4 niet-ritmespecifieke factoren of onderdelen van beleid die je in de langetermijnbehandeling van deze patiënt zou meenemen.\n Maximaal 100 woorden.',
        wordLimit: 100,
        rubric:
          '1 punt per goed onderdeel, max 4: trombo-embolisch risico/antistolling; frequentie-/ritmecontrole; hypertensie; gewicht/alcohol; OSAS; hartfalen/ischemie; leefstijl/follow-up.',
        modelAnswer:
          'Beoordeel trombo-embolisch risico en indicatie voor antistolling. Maak een keuze tussen frequentie- en ritmecontrole. Behandel uitlokkende factoren zoals hypertensie, obesitas en alcoholgebruik. Denk ook aan OSAS-screening en structurele follow-up met aandacht voor symptomen en recidief.',
        explanation: 'Bij open vragen geldt: inhoudelijk gelijkwaardige formuleringen ook goed rekenen.',
      },
    ],
  },
]
