/** Blok 9 oefententamen 3 — casussen 4–6 */

const LAB4 = `Natrium | 160 mmol/L | 135–145
Kalium | 4.2 mmol/L | 3.5–5.0
Ureum | 17.0 mmol/L | 3.0–8.0
Creatinine | 112 µmol/L | 50–100
Glucose | 6.0 mmol/L | 4.0–7.8
Gemeten osmolaliteit | 324 mosmol/kg | 275–295`

const LAB5 = `Natrium | 134 mmol/L | 135–145
Kalium | 2.4 mmol/L | 3.5–5.0
Chloride | 86 mmol/L | 98–107
Magnesium | 0.56 mmol/L | 0.70–1.00
Creatinine | 92 µmol/L | 50–100`

const GAS5 = `pH | 7.52 | 7.35–7.45
pCO₂ | 6.1 kPa | 4.7–6.0
HCO₃⁻ | 35 mmol/L | 22–29`

export const blok9Tentamen3PartB = [
  {
    id: 'casus-4',
    title: 'Casus 4 – Ernstige hypernatriëmie bij een verpleeghuisbewoner',
    totalPoints: 13,
    scenario: `Een 83-jarige vrouw uit een verpleeghuis wordt ingestuurd wegens sufheid. Zij heeft gevorderde dementie en drinkt zelfstandig nauwelijks. Sinds twee dagen heeft zij koorts en diarree. Gewicht: 60 kg.
Laboratorium
${LAB4}`,
    questions: [
      {
        id: '4a',
        type: 'meerkeuze',
        points: 2,
        question: '4a. Enkelvoudige meerkeuzevraag (2p)\nWelke uitspraak is het meest correct?',
        options: [
          { letter: 'A', text: 'Hypernatriëmie betekent meestal een primaire natriumovermaat' },
          { letter: 'B', text: 'Hypernatriëmie betekent in de kern meestal een watertekort' },
          { letter: 'C', text: 'Hypernatriëmie past alleen bij nierfalen' },
          { letter: 'D', text: 'Hypernatriëmie is meestal een laboratoriumfout' },
        ],
        correctAnswer: 'B',
        explanation: '',
      },
      {
        id: '4b',
        type: 'rekenvraag',
        points: 4,
        question:
          '4b. Rekenvraag, open (4p)\nBereken het geschatte watertekort van deze patiënte. Gebruik voor totaal lichaamswater de standaardbenadering passend bij deze patiënt. Rond af op één decimaal.',
        correctValue: 3.9,
        tolerance: 0.15,
        unit: ' L',
        rubric:
          '1p factor 0,45; 1p TBW = 27 L; 1p juiste formule TBW×((Na/140)−1); 1p eindantwoord 3,8–3,9 L acceptabel.',
        modelAnswer:
          'totaal lichaamswater oude vrouw = 0,45 × 60 = 27 L; watertekort = 27 × ((160/140) − 1) ≈ 3,9 L. Geschat watertekort: 3,9 liter.',
        explanation: '',
      },
      {
        id: '4c',
        type: 'open',
        points: 3,
        question:
          '4c. Open vraag (3p, max. 50 woorden)\nWaarom is de uitkomst van 4b slechts een schatting en niet een exact behandelvoorschrift?',
        wordLimit: 50,
        rubric:
          '1p voortdurende verliezen; 1p klinische context; 1p formule geeft orde grootte.',
        modelAnswer:
          'De berekening is een schatting, omdat voortdurende verliezen zoals diarree en koorts niet volledig in de formule zitten. Ook klinische omstandigheden en de snelheid van correctie beïnvloeden het uiteindelijke behandelplan.',
        explanation: '',
      },
      {
        id: '4d',
        type: 'meerkeuze',
        points: 2,
        question:
          '4d. Enkelvoudige meerkeuzevraag (2p)\nWelke infuusvloeistof is in het algemeen hypotoon?',
        options: [
          { letter: 'A', text: '0,9% NaCl' },
          { letter: 'B', text: 'Ringer-lactaat' },
          { letter: 'C', text: 'Plasma-Lyte' },
          { letter: 'D', text: '5% glucose' },
        ],
        correctAnswer: 'D',
        explanation: '',
      },
      {
        id: '4e',
        type: 'meerkeuze',
        points: 2,
        question:
          '4e. Enkelvoudige meerkeuzevraag (2p)\nWaarom telt ureum minder zwaar mee voor de effectieve osmolaliteit dan natrium?',
        options: [
          { letter: 'A', text: 'Omdat ureum te groot is om het celmembraan te passeren' },
          { letter: 'B', text: 'Omdat ureum snel door het celmembraan kan bewegen' },
          { letter: 'C', text: 'Omdat ureum altijd door de lever wordt afgebroken' },
          { letter: 'D', text: 'Omdat ureum geen opgeloste stof is' },
        ],
        correctAnswer: 'B',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-5',
    title: 'Casus 5 – Braken, spierzwakte en een afwijkend bloedgas',
    totalPoints: 13,
    scenario: `Een 52-jarige vrouw komt op de afdeling Interne Geneeskunde met spierzwakte en hartkloppingen. Zij braakt al 4 dagen door een maaguitgangsprobleem. Medicatie: hydrochloorthiazide.
Laboratorium
${LAB5}
Veneus bloedgas
${GAS5}`,
    questions: [
      {
        id: '5a',
        type: 'meerkeuze',
        points: 2,
        question:
          '5a. Enkelvoudige meerkeuzevraag (2p)\nWelke zuur-baseafwijking is het meest waarschijnlijk?',
        options: [
          { letter: 'A', text: 'Metabole acidose' },
          { letter: 'B', text: 'Metabole alkalose' },
          { letter: 'C', text: 'Respiratoire acidose' },
          { letter: 'D', text: 'Respiratoire alkalose' },
        ],
        correctAnswer: 'B',
        explanation: '',
      },
      {
        id: '5b',
        type: 'open',
        points: 4,
        question:
          '5b. Open vraag (4p, max. 100 woorden)\nLeg uit waarom een patiënt met langdurig braken hypokaliëmie kan ontwikkelen, ook al bevat braaksel zelf relatief weinig kalium.',
        wordLimit: 100,
        rubric:
          '1p HCl/chlorideverlies; 1p alkalose/volumeverlies; 1p RAAS/aldosteron; 1p renaal K-verlies belangrijker dan direct verlies.',
        modelAnswer:
          'Bij braken gaat vooral HCl en chloride verloren, waardoor metabole alkalose en volumedepletie ontstaan. Daardoor wordt het RAAS geactiveerd en stijgt aldosteron. De nier gaat vervolgens meer kalium uitscheiden, zodat de hypokaliëmie vooral renaal ontstaat en niet door direct verlies in het braaksel.',
        explanation: '',
      },
      {
        id: '5c',
        type: 'meerdere_antwoorden',
        points: 3,
        question:
          '5c. Meerkeuzevraag, meerdere antwoorden mogelijk (3p)\nWelke factoren dragen in deze casus het meest bij aan de hypokaliëmie?',
        options: [
          { letter: 'A', text: 'Chlorideverlies' },
          { letter: 'B', text: 'RAAS-activatie' },
          { letter: 'C', text: 'Verhoogde renale kaliumuitscheiding' },
          { letter: 'D', text: 'Uitsluitend direct verlies van grote hoeveelheden kalium uit het braaksel' },
          { letter: 'E', text: 'Thiazidegebruik' },
        ],
        correctAnswers: ['A', 'B', 'C', 'E'],
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.75,
        explanation:
          'Juiste antwoorden: A, B, C, E. 0,75p per juiste optie. D fout.',
      },
      {
        id: '5d',
        type: 'meerkeuze',
        points: 2,
        question:
          '5d. Enkelvoudige meerkeuzevraag (2p)\nWelke aanvullende waarde verdient in deze casus extra aandacht, mede voor de correctie van het kalium?',
        options: [
          { letter: 'A', text: 'Calcium' },
          { letter: 'B', text: 'Albumine' },
          { letter: 'C', text: 'Magnesium' },
          { letter: 'D', text: 'Hb' },
        ],
        correctAnswer: 'C',
        explanation: '',
      },
      {
        id: '5e',
        type: 'meerkeuze',
        points: 2,
        question:
          '5e. Enkelvoudige meerkeuzevraag (2p)\nWat is bij ernstige hyperkaliëmie met ECG-afwijkingen het eerste doel van calciumgluconaat?',
        options: [
          { letter: 'A', text: 'Het kalium direct uit het lichaam verwijderen' },
          { letter: 'B', text: 'Het myocard stabiliseren' },
          { letter: 'C', text: 'Het renine-angiotensine-systeem remmen' },
          { letter: 'D', text: 'De urineproductie verhogen' },
        ],
        correctAnswer: 'B',
        explanation:
          'Calciumgluconaat beschermt het hart, het verlaagt het kalium niet direct.',
      },
    ],
  },
  {
    id: 'casus-6',
    title: 'Casus 6 – Onverwacht hoge bloeddruk op de poli',
    totalPoints: 13,
    scenario: `Een 59-jarige man komt op de polikliniek voor controle. Hij voelt zich goed. Bloeddruk bij herhaalde meting in de spreekkamer: 156/96 mmHg. Hij rookt niet meer, heeft overgewicht en beweegt weinig. Geen bekende cardiovasculaire voorgeschiedenis.`,
    questions: [
      {
        id: '6a',
        type: 'meerkeuze',
        points: 2,
        question:
          '6a. Enkelvoudige meerkeuzevraag (2p)\nIn welke categorie valt deze bloeddruk volgens de klassieke WHO-indeling het best?',
        options: [
          { letter: 'A', text: 'Hoognormaal' },
          { letter: 'B', text: 'Graad 1 hypertensie' },
          { letter: 'C', text: 'Graad 2 hypertensie' },
          { letter: 'D', text: 'Geïsoleerde systolische hypertensie' },
        ],
        correctAnswer: 'B',
        explanation: '',
      },
      {
        id: '6b',
        type: 'open',
        points: 3,
        question:
          '6b. Open vraag (3p, max. 40 woorden)\nWaarom is een 24-uursbloeddrukmeting vaak informatiever dan één spreekkamermeting?',
        wordLimit: 40,
        rubric:
          '1p realistischer dan spreekkamer; 1p dag-nacht/pieken; 1p minder invloed eenmalige meting.',
        modelAnswer:
          'Een 24-uursmeting geeft een realistischer beeld van de werkelijke bloeddruk dan één spreekkamermeting. Je ziet ook dag-nachtverschillen en pieken, en vermindert het effect van een eenmalig meetmoment.',
        explanation: '',
      },
      {
        id: '6c',
        type: 'koppelvraag',
        points: 4,
        question:
          '6c. Sorteervraag (4p)\nSorteer de volgende vormen van schade in de meest passende categorie.\nTe ordenen items:\nnefropathie\nerectiestoornissen\nherseninfarct\nperifeer vaatlijden\nCategorieën:\nA. Vooral microvasculair\nB. Vooral macrovasculair',
        items: ['nefropathie', 'erectiestoornissen', 'herseninfarct', 'perifeer vaatlijden'],
        matchOptions: [
          { letter: 'A', text: 'Vooral microvasculair' },
          { letter: 'B', text: 'Vooral macrovasculair' },
        ],
        correctMapping: { 0: 'A', 1: 'A', 2: 'B', 3: 'B' },
        explanation: 'nefropathie en erectiestoornissen → A; herseninfarct en perifeer vaatlijden → B. 1p per juist item.',
      },
      {
        id: '6d',
        type: 'meerkeuze',
        points: 2,
        question:
          '6d. Enkelvoudige meerkeuzevraag (2p)\nWelk leefstijladvies past het best in de eerste lijn bij hypertensie?',
        options: [
          { letter: 'A', text: 'Meer zout gebruiken om volumedepletie te voorkomen' },
          { letter: 'B', text: 'Kalium beperken bij alle patiënten' },
          { letter: 'C', text: 'Zoutinname beperken en bewegen stimuleren' },
          { letter: 'D', text: 'Alleen medicatie helpt, leefstijl nauwelijks' },
        ],
        correctAnswer: 'C',
        explanation: '',
      },
      {
        id: '6e',
        type: 'meerkeuze',
        points: 2,
        question:
          '6e. Enkelvoudige meerkeuzevraag (2p)\nWaarom is monotherapie bij hypertensie vaak onvoldoende?',
        options: [
          { letter: 'A', text: 'Omdat alle antihypertensiva zwak zijn' },
          { letter: 'B', text: 'Omdat hypertensie meestal door meerdere mechanismen tegelijk ontstaat' },
          { letter: 'C', text: 'Omdat combinatietherapie minder bijwerkingen geeft dan placebo' },
          { letter: 'D', text: 'Omdat bloeddruk alleen door RAAS wordt bepaald' },
        ],
        correctAnswer: 'B',
        explanation: '',
      },
    ],
  },
]
