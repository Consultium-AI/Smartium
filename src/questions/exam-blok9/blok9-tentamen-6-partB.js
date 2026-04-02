/** Blok 9 oefententamen 6 — casussen 4–6 */

const LAB5 = `Parameter | Uitslag | Referentie
Creatinine | 146 µmol/L | 60–110
Kalium | 3,1 mmol/L | 3,5–5,0
Natrium | 144 mmol/L | 135–145
Troponine | licht verhoogd | —`

export const blok9Tentamen6PartB = [
  {
    id: 'casus-4',
    title: 'Casus 4 – PAV, ernst en beeldvorming',
    totalPoints: 16,
    scenario: `Een 67-jarige vrouw met diabetes mellitus type 2, hypertensie en rookanamnese presenteert zich met toenemende pijn in het linkerbeen. Eerst alleen bij lopen, nu ook ’s nachts. Er is een ulcus op de laterale zijde van de voet. De linker voet is koud. EAI links 0,39.
Figuur 2 – beeldvraag
CTA-beschrijving: ernstige stenose/occlusie van de A. femoralis superficialis links met slechte distale runoff; rechts milde atherosclerose zonder kritieke vernauwing.`,
    questions: [
      {
        id: '4a',
        type: 'meerkeuze',
        points: 2,
        question: `4a. (2p)
Welke klinische categorie past het best?`,
        options: [
          { letter: 'A', text: 'Claudicatio intermittens zonder bedreiging' },
          { letter: 'B', text: 'Kritieke ischemie' },
          { letter: 'C', text: 'Acute embolie zonder voorgeschiedenis' },
          { letter: 'D', text: 'Alleen diabetische neuropathie' },
        ],
        correctAnswer: 'B',
        explanation: '',
      },
      {
        id: '4b',
        type: 'open',
        points: 3,
        question: `4b. (3p)
Welke 3 bevindingen maken deze situatie ernstig?
Maximaal 40 woorden.`,
        wordLimit: 40,
        rubric:
          'Puntenverdeling: 1 punt per juiste bevinding, max 3. Goede antwoorden: rust-/nachtpijn; ulcus / slecht genezende wond; koude voet; sterk verlaagde EAI; CTA met ernstige stenose/occlusie.',
        modelAnswer:
          'Nachtelijke rustpijn, een ulcus met slechte genezing en een koude voet maken het beeld ernstig. De EAI van 0,39 en de CTA ondersteunen ernstige ischemie.',
        explanation: '',
      },
      {
        id: '4c',
        type: 'meerkeuze',
        points: 3,
        question: `4c. (3p)
Welke uitspraak over de EAI is het meest juist?`,
        options: [
          { letter: 'A', text: 'Een EAI van 0,39 past niet bij arterieel vaatlijden' },
          { letter: 'B', text: 'Een sterk verlaagde EAI ondersteunt ernstig perifeer arterieel vaatlijden' },
          { letter: 'C', text: 'EAI is alleen bruikbaar bij longziekten' },
          { letter: 'D', text: 'EAI vervangt alle verdere diagnostiek volledig' },
        ],
        correctAnswer: 'B',
        explanation: '',
      },
      {
        id: '4d',
        type: 'koppelvraag',
        points: 4,
        question: `4d. (4p)
Koppel de onderstaande bevindingen aan de best passende categorie.
Categorieën
Claudicatio intermittens
Kritieke ischemie
Acute ischemie
Diabetische voet met ischemische component
Bevindingen
a. Pijn na 80 meter lopen, verdwijnt in rust
b. Koude pijnlijke voet met ulcus en nachtelijke pijn
c. Plots bleek, koud been met uitval
d. Chronische wond bij patiënt met DM en slechte perfusie`,
        items: [
          'a. Pijn na 80 meter lopen, verdwijnt in rust',
          'b. Koude pijnlijke voet met ulcus en nachtelijke pijn',
          'c. Plots bleek, koud been met uitval',
          'd. Chronische wond bij patiënt met DM en slechte perfusie',
        ],
        matchOptions: [
          { letter: 'A', text: 'Claudicatio intermittens' },
          { letter: 'B', text: 'Kritieke ischemie' },
          { letter: 'C', text: 'Acute ischemie' },
          { letter: 'D', text: 'Diabetische voet met ischemische component' },
        ],
        correctMapping: { 0: 'A', 1: 'B', 2: 'C', 3: 'D' },
        explanation: 'Puntenverdeling: 1 punt per juiste koppeling.',
      },
      {
        id: '4e',
        type: 'open',
        points: 4,
        question: `4e. (4p)
Noem 4 onderdelen van het onmiddellijke of vroege beleid.
Maximaal 80 woorden.`,
        wordLimit: 80,
        rubric:
          'Puntenverdeling: 1 punt per goed onderdeel, max 4. Goede antwoorden: snelle vaatchirurgische beoordeling; wond-/voetzorg; stoppen met roken; statine; bloeddruk/DM optimaliseren; antitrombotisch beleid in passende context; beoordeling voor revascularisatie.',
        modelAnswer:
          'Regel snelle vaatchirurgische beoordeling en beoordeel revascularisatie. Zorg voor goede wond- en voetzorg. Optimaliseer cardiovasculaire risicofactoren met stoppen met roken, statine en behandeling van diabetes en bloeddruk.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-5',
    title: 'Casus 5 – Hypertensie, secundaire oorzaken en spoed',
    totalPoints: 15,
    scenario: `Een 42-jarige man wordt op de SEH gezien met RR 232/128 mmHg, wazig zien en hoofdpijn. Bij fundoscopie worden retina-afwijkingen gezien. In de voorgeschiedenis staat onbehandelde hypertensie. Hij gebruikt daarnaast geregeld cocaïne en neemt veel drop.
Laboratorium
${LAB5}
Figuur 3 – beeldvraag
Fundoscopie-beschrijving: bloedingen en exsudaten, passend bij ernstige hypertensieve retinopathie.`,
    questions: [
      {
        id: '5a',
        type: 'meerkeuze',
        points: 2,
        question: `5a. (2p)
Wat is de beste classificatie van deze presentatie?`,
        options: [
          { letter: 'A', text: 'Ernstige hypertensie zonder spoed' },
          { letter: 'B', text: 'Hypertensief spoedgeval' },
          { letter: 'C', text: 'Alleen wittejassenhypertensie' },
          { letter: 'D', text: 'Hypotensieve shock' },
        ],
        correctAnswer: 'B',
        explanation:
          'Ernstige hypertensie mét visusklachten en retinopathie past bij acute eindorgaanschade.',
      },
      {
        id: '5b',
        type: 'open',
        points: 3,
        question: `5b. (3p)
Welke 3 elementen ondersteunen het antwoord bij 5a?
Maximaal 40 woorden.`,
        wordLimit: 40,
        rubric:
          'Puntenverdeling: 1 punt per goed element, max 3. Goede elementen: zeer hoge bloeddruk; visusklachten; retinopathie/fundoscopie-afwijkingen; nierfunctieverslechtering; troponinestijging als mogelijke cardiale schade.',
        modelAnswer:
          'De RR is extreem hoog. Daarnaast zijn er acute visusklachten en ernstige hypertensieve retinopathie. Ook nierfunctieverslechtering en lichte troponinestijging ondersteunen acute eindorgaanschade.',
        explanation: '',
      },
      {
        id: '5c',
        type: 'meerdere_antwoorden',
        points: 3,
        question: `5c. (3p)
Welke factoren in de anamnese kunnen bijdragen aan een secundair of uitlokkend hypertensief beeld?
Meerdere antwoorden mogelijk.`,
        options: [
          { letter: 'A', text: 'Cocaïne' },
          { letter: 'B', text: 'Drop' },
          { letter: 'C', text: 'Onbehandelde hypertensie' },
          { letter: 'D', text: 'Hyperthyreoïdie staat expliciet vast' },
          { letter: 'E', text: 'Chronisch alcoholgebruik is de enige verklaring' },
        ],
        correctAnswers: ['A', 'B', 'C'],
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 1,
        explanation:
          'Juiste antwoorden: A, B en C. Puntenverdeling: 1 punt per juiste keuze, max 3.',
      },
      {
        id: '5d',
        type: 'open',
        points: 4,
        question: `5d. (4p)
Leg uit waarom je op de SEH bij dit beeld niet direct uitgebreide screening met renine/aldosteron inzet als eerste prioriteit.
Maximaal 70 woorden.`,
        wordLimit: 70,
        rubric:
          '1p acute activatie/sympathicus/RAAS; 1p waarden daardoor slecht interpreteerbaar; 1p stabilisatie heeft prioriteit; 1p eindorgaanschade beoordelen/behandelen.',
        modelAnswer:
          'In een hypertensief spoedgeval zijn sympathische activatie, RAAS-stimulatie en acute hemodynamische verstoring vaak al aanwezig. Daardoor zijn renine- en aldosteronwaarden moeilijk betrouwbaar te interpreteren. De eerste prioriteit is stabilisatie en het herkennen/behandelen van acute eindorgaanschade, niet etiologische screening.',
        explanation: '',
      },
      {
        id: '5e',
        type: 'open',
        points: 3,
        question: `5e. (3p)
Noem 3 eindorganen of systemen die je in deze setting actief moet beoordelen op acute schade.
Maximaal 30 woorden.`,
        wordLimit: 30,
        rubric:
          'Puntenverdeling: 1 punt per goed orgaansysteem, max 3. Goede antwoorden: hersenen/neurologisch; hart; nieren; ogen/retina; grote vaten/aorta; longen/longoedeem.',
        modelAnswer:
          'Hersenen, hart en nieren moeten actief op acute schade worden beoordeeld. Ook retina en aorta zijn belangrijke doelorganen in deze setting.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-6',
    title: 'Casus 6 – Pijn op de borst en coronair redeneren',
    totalPoints: 14,
    scenario: `Een 61-jarige man heeft sinds 4 maanden retrosternale druk bij heuvelop lopen. In rust verdwijnen de klachten binnen enkele minuten. Voorgeschiedenis: DM2, hypertensie, dyslipidemie. Hij rookt nog. Rust-ECG zonder acute ischemische afwijkingen.`,
    questions: [
      {
        id: '6a',
        type: 'meerkeuze',
        points: 2,
        question: `6a. (2p)
Wat is de meest waarschijnlijke werkdiagnose?`,
        options: [
          { letter: 'A', text: 'Stabiele angina pectoris' },
          { letter: 'B', text: 'Longembolie' },
          { letter: 'C', text: 'Pneumothorax' },
          { letter: 'D', text: 'Oesofagusperforatie' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
      {
        id: '6b',
        type: 'meerdere_antwoorden',
        points: 3,
        question: `6b. (3p)
Welke risicofactoren in deze casus dragen bij aan atherosclerotisch coronairlijden?
Meerdere antwoorden mogelijk.`,
        options: [
          { letter: 'A', text: 'Diabetes' },
          { letter: 'B', text: 'Hypertensie' },
          { letter: 'C', text: 'Dyslipidemie' },
          { letter: 'D', text: 'Roken' },
          { letter: 'E', text: 'Inspanningsgebonden klachten' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.75,
        explanation:
          'Juiste antwoorden: A, B, C en D. Puntenverdeling: 0,75 punt per juiste keuze, max 3.',
      },
      {
        id: '6c',
        type: 'open',
        points: 3,
        question: `6c. (3p)
Waarom sluit een normaal rust-ECG stabiel coronairlijden niet uit?
Maximaal 40 woorden.`,
        wordLimit: 40,
        rubric:
          '1p ischemie kan intermitterend zijn; 1p rust-ECG kan normaal zijn; 1p inspanningscontext benoemen.',
        modelAnswer:
          'Stabiel coronairlijden kan in rust een normaal ECG geven. Ischemie treedt vaak vooral op tijdens inspanning of verhoogde zuurstofvraag, waardoor een normaal rust-ECG de diagnose niet uitsluit.',
        explanation: '',
      },
      {
        id: '6d',
        type: 'meerkeuze',
        points: 2,
        question: `6d. (2p)
Welke vervolgstap is het meest logisch?`,
        options: [
          { letter: 'A', text: 'Passende niet-invasieve coronairdiagnostiek' },
          { letter: 'B', text: 'Geen vervolg, want ECG is normaal' },
          { letter: 'C', text: 'Meteen antibiotica' },
          { letter: 'D', text: 'Alleen fundoscopie' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
      {
        id: '6e',
        type: 'open',
        points: 4,
        question: `6e. (4p)
Formuleer een eerste beleid met 4 onderdelen, gericht op zowel symptoomvermindering als risicoverlaging.
Maximaal 90 woorden.`,
        wordLimit: 90,
        rubric:
          'Puntenverdeling: 1 punt per goed onderdeel, max 4. Goede antwoorden: stoppen met roken; bloeddrukbehandeling; diabetesoptimalisatie; statine/lipidenverlaging; leefstijl/beweging/gewicht; anti-angineuze behandeling in passende context; verdere diagnostiek.',
        modelAnswer:
          'Adviseer stoppen met roken, optimaliseer bloeddruk en diabetes en start/intensiveer statinetherapie. Overweeg daarnaast anti-angineuze behandeling en niet-invasieve coronairdiagnostiek, naast leefstijlinterventies zoals gewichtsreductie en meer beweging.',
        explanation: '',
      },
    ],
  },
]
