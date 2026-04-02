/** Blok 9 oefententamen 1 — casussen 7–8 */

const LAB_CASUS7 = `Leukocyten | 16,9 x10^9/L | 4,0–10,0
CRP | 198 mg/L | <5
Ureum | 9,1 mmol/L | 3,0–8,0
Creatinine | 102 µmol/L | 60–110
Natrium | 133 mmol/L | 135–145
Kalium | 4,1 mmol/L | 3,5–5,0
Glucose | 7,8 mmol/L | 4,0–7,8`

const VIT_CASUS8 = `EMV | 13
Pols | 148/min
Bloeddruk | 168/94 mmHg
Ademfrequentie | 30/min
Saturatie | 97% RA
Temperatuur | 40,1°C`

const GAS_CASUS8 = `pH | 7,28 | 7,35–7,45
pCO2 | 3,8 kPa | 4,7–6,0
HCO3- | 14 mmol/L | 22–29
Lactaat | 8,1 mmol/L | <2,0
CK | 1850 U/L | <170
Glucose | 7,0 mmol/L | 4,0–7,8`

const ORDER_8D = [
  'Actief koelen',
  'ABCDE-beoordeling en vitale stabilisatie',
  'Toediening van specifieke symptomatische behandeling/ondersteuning',
  'Gericht aanvullend onderzoek en intoxicatie-anamnese',
]

export const blok9Tentamen1PartC = [
  {
    id: 'casus-7',
    title: 'Casus 7 – Patiënt met een pneumonie',
    totalPoints: 14,
    scenario: `Een 72-jarige man met COPD presenteert zich met koorts, productieve hoest en dyspneu sinds 2 dagen. Hij is niet recent opgenomen geweest in het ziekenhuis. Bij onderzoek: temperatuur 39,1°C, ademfrequentie 31/min, bloeddruk 102/64 mmHg, saturatie 89% aan kamerlucht. Hij is niet verward.
Laboratorium
${LAB_CASUS7}
X-thorax: consolidatie rechter onderkwab.`,
    questions: [
      {
        id: '7a',
        type: 'meerkeuze',
        points: 2,
        question: 'Wat is de CURB-65-score?',
        options: [
          { letter: 'A', text: '1' },
          { letter: 'B', text: '2' },
          { letter: 'C', text: '3' },
          { letter: 'D', text: '4' },
        ],
        correctAnswer: 'C',
        explanation:
          'Ureum > 7 = 1; ademfrequentie ≥ 30 = 1; leeftijd ≥ 65 = 1; geen verwardheid; bloeddruk niet laag genoeg voor extra punt. Totaal 3.',
      },
      {
        id: '7b',
        type: 'open',
        points: 3,
        question:
          'Waarom is opname bij deze patiënt goed verdedigbaar?\n Maximaal 50 woorden.',
        wordLimit: 50,
        rubric:
          '1p ernst/CURB-65; 1p hypoxemie of vitale ontregeling; 1p comorbiditeit/ziek indruk.',
        modelAnswer:
          'Hij heeft een hoge CURB-65-score, hypoxemie en duidelijke systemische ontstekingsactiviteit. Daarnaast heeft hij COPD als comorbiditeit en klinisch een ernstiger pneumoniebeeld, wat opname en intramurale behandeling goed verdedigbaar maakt.',
        explanation: 'Bij open vragen geldt: inhoudelijk gelijkwaardige formuleringen ook goed rekenen.',
      },
      {
        id: '7c',
        type: 'meerkeuze',
        points: 2,
        question: 'Welke empirische behandeling past het best bij deze ernst?',
        options: [
          { letter: 'A', text: 'Geen antibiotica, alleen afwachten' },
          { letter: 'B', text: 'Alleen lokale zalfbehandeling' },
          { letter: 'C', text: 'Behandeling passend bij matig tot ernstig CAP, niet meer puur ambulant beleid' },
          { letter: 'D', text: 'Uitsluitend oseltamivir' },
        ],
        correctAnswer: 'C',
        explanation: 'Behandeling passend bij matig tot ernstig CAP, niet meer puur ambulant beleid.',
      },
      {
        id: '7d',
        type: 'meerdere_antwoorden',
        points: 3,
        question:
          'Welke complicaties moet je overwegen als de patiënt onvoldoende opknapt?\n Meerdere antwoorden mogelijk.',
        options: [
          { letter: 'A', text: 'Longabces' },
          { letter: 'B', text: 'Pleurale infectie/empyem' },
          { letter: 'C', text: 'Aortadissectie als standaardcomplicatie van pneumonie' },
          { letter: 'D', text: 'Persisterende hypoxemie door complicatie' },
          { letter: 'E', text: 'Osteoporose als acute complicatie' },
        ],
        correctAnswers: ['A', 'B', 'D'],
        partialCreditNoWrong: true,
        pointsPerCorrect: 1,
        explanation:
          'A, B en D. 1 punt per juiste keuze. Fout antwoord aankruisen: 0 punten voor de vraag.',
      },
      {
        id: '7e',
        type: 'open',
        points: 4,
        question:
          'Noem 2 microbiologische onderzoeken die hier relevant kunnen zijn en vermeld kort wanneer ze vooral nuttig zijn.\n Maximaal 100 woorden.',
        wordLimit: 100,
        rubric:
          '1p sputumkweek; 1p bloedkweken; 1p urine-antigeen pneumokok of legionella; 1p wanneer/waarom.',
        modelAnswer:
          'Sputumkweek is zinvol om een bacteriële verwekker te identificeren, vooral bij opname. Bloedkweken zijn relevant bij ernstiger ziekte. Daarnaast kun je een urine-pneumokokkenantigeentest of urine-legionella-antigeentest doen, vooral bij ernstige CAP of specifieke verdenking zoals legionellarisico.',
        explanation: 'Bij open vragen geldt: inhoudelijk gelijkwaardige formuleringen ook goed rekenen.',
      },
    ],
  },
  {
    id: 'casus-8',
    title: 'Casus 8 – Een leuk feestje',
    totalPoints: 14,
    scenario: `Een 22-jarige man wordt na een feest binnengebracht. Hij is ernstig geagiteerd, transpireert, heeft wijde pupillen en is tachycard. Hij heeft een temperatuur van 40,1°C. Er zijn geen urticaria of piepende ademhaling. Vrienden denken aan “iets van pillen”.
Vitale parameters
${VIT_CASUS8}
Bloedgas/lab
${GAS_CASUS8}`,
    questions: [
      {
        id: '8a',
        type: 'meerkeuze',
        points: 2,
        question: 'Welke beschrijving past het best?',
        options: [
          { letter: 'A', text: 'Allergische reactie' },
          { letter: 'B', text: 'Intoxicatie' },
          { letter: 'C', text: 'Onschuldige bijwerking bij therapeutische spiegel' },
          { letter: 'D', text: 'Bacteriële sepsis als enige plausibele verklaring' },
        ],
        correctAnswer: 'B',
        explanation: 'Intoxicatie.',
      },
      {
        id: '8b',
        type: 'meerkeuze',
        points: 2,
        question: 'Welk toxidroom is het meest waarschijnlijk?',
        options: [
          { letter: 'A', text: 'Sympathicomimetisch/serotonerg beeld' },
          { letter: 'B', text: 'Opioïd toxidroom' },
          { letter: 'C', text: 'Zuiver cholinerg toxidroom' },
          { letter: 'D', text: 'Isolerend hypothyreoïdiebeeld' },
        ],
        correctAnswer: 'A',
        explanation: 'Sympathicomimetisch/serotonerg beeld.',
      },
      {
        id: '8c',
        type: 'open',
        points: 4,
        question:
          'Noem de belangrijkste eerste ABCDE-prioriteiten in deze casus.\n Maximaal 100 woorden.',
        wordLimit: 100,
        rubric:
          '1p ABCDE/airway-breathing-circulation; 1p agitatie/sedatie/veiligheid; 1p actief koelen; 1p monitoring en gericht aanvullend onderzoek.',
        modelAnswer:
          'Voer direct een ABCDE-beoordeling uit en stabiliseer vitale functies. Zorg voor veilige omgeving en behandel ernstige agitatie symptomatisch. Start actief koelen vanwege hyperthermie. Sluit complicaties zoals rabdomyolyse, acidose en ritmestoornissen uit met monitoring en aanvullend onderzoek.',
        explanation: 'Bij open vragen geldt: inhoudelijk gelijkwaardige formuleringen ook goed rekenen.',
      },
      {
        id: '8d',
        type: 'beeldvraag',
        points: 3,
        question: `Zet de onderstaande vroege interventies in de meest logische volgorde van prioriteit.
Actief koelen
ABCDE-beoordeling en vitale stabilisatie
Toediening van specifieke symptomatische behandeling/ondersteuning
Gericht aanvullend onderzoek en intoxicatie-anamnese`,
        gradingMethod: 'order',
        orderIntro: 'Meest logische prioriteit (1 = eerst, 4 = laatst):',
        orderOptions: [...ORDER_8D],
        correctOrder: [
          'ABCDE-beoordeling en vitale stabilisatie',
          'Actief koelen',
          'Toediening van specifieke symptomatische behandeling/ondersteuning',
          'Gericht aanvullend onderzoek en intoxicatie-anamnese',
        ],
        expectedAnswer: '2 → 1 → 3 → 4',
        rubric: 'Alleen volledig juiste volgorde = 3p.',
        modelAnswer: '2 → 1 → 3 → 4',
      },
      {
        id: '8e',
        type: 'meerkeuze',
        points: 3,
        question: 'Hoe beschrijf je de zuur-basestoornis het best?',
        options: [
          { letter: 'A', text: 'Geïsoleerde respiratoire acidose' },
          { letter: 'B', text: 'Hoog-anion-gap metabole acidose met respiratoire compensatie' },
          { letter: 'C', text: 'Metabole alkalose' },
          { letter: 'D', text: 'Normale zuur-basebalans' },
        ],
        correctAnswer: 'B',
        explanation:
          'Lage pH, laag HCO3 en laag pCO2 met hoog lactaat passen bij hoog-anion-gap metabole acidose met respiratoire compensatie.',
      },
    ],
  },
]
