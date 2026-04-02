/** Blok 9 oefententamen 6 — casussen 7–10 */

const LAB7 = `Parameter | Uitslag | Referentie
Leukocyten | 18,1 x10^9/L | 4,0–10,0
CRP | 244 mg/L | <5
Ureum | 10,2 mmol/L | 3,0–8,0
Creatinine | 112 µmol/L | 60–110`

const LAB8 = `Parameter | Uitslag | Referentie
pH | 7,29 | 7,35–7,45
pCO2 | 4,7 kPa | 4,7–6,0
HCO3- | 17 mmol/L | 22–29
Lactaat | 6,1 mmol/L | <2,0
Hb | 8,0 mmol/L | 8,5–11,0`

const PLEUR9 = `Parameter | Uitslag
Pleuravocht-eiwit | 44 g/L
Serum-eiwit | 63 g/L
Pleuravocht-LDH | 520 U/L
Serum-LDH | 240 U/L
Bovengrens normaal serum-LDH | 240 U/L`

const ORDER_8C = [
  'ABCDE-stabilisatie en zuurstof/ventilatoire ondersteuning',
  'Hemodynamische resuscitatie en vroege oorzaakgerichte behandeling',
  'Verdere detaillering van differentiaal en herbeoordeling',
]

export const blok9Tentamen6PartC = [
  {
    id: 'casus-7',
    title: 'Casus 7 – Pneumonie, setting en complicatie',
    totalPoints: 15,
    scenario: `Een 73-jarige vrouw wordt opgenomen met koorts, dyspneu en productieve hoest. Ze is 6 dagen geleden ontslagen na een ziekenhuisopname wegens decompensatio cordis. Ze is nu verward, tachypnoïsch en heeft een saturatie van 88% aan kamerlucht.
Laboratorium
${LAB7}
Figuur 4 – beeldvraag
X-thorax-beschrijving: rechts basale consolidatie met pleuravocht.`,
    questions: [
      {
        id: '7a',
        type: 'meerkeuze',
        points: 2,
        question: `7a. (2p)
Welke setting past het best?`,
        options: [
          { letter: 'A', text: 'Community-acquired pneumonia zonder verdere bijzonderheden' },
          { letter: 'B', text: 'Hospital-acquired context / verhoogde kans op andere verwekkers' },
          { letter: 'C', text: 'Alleen virale verkoudheid' },
          { letter: 'D', text: 'Exclusief aspiratie zonder infectie' },
        ],
        correctAnswer: 'B',
        explanation:
          'Recente ziekenhuisopname maakt andere verwekkers waarschijnlijker dan bij een eenvoudige ambulante CAP.',
      },
      {
        id: '7b',
        type: 'open',
        points: 3,
        question: `7b. (3p)
Welke 3 factoren maken dit een ernstiger beeld?
Maximaal 40 woorden.`,
        wordLimit: 40,
        rubric:
          'Puntenverdeling: 1 punt per goed element, max 3. Goede elementen: verwardheid; hypoxemie; hoge inflammatie; verhoogd ureum; recente ziekenhuiscontext; pleuravocht/uitgebreider beeld.',
        modelAnswer:
          'Ze is verward en hypoxemisch, met hoge ontstekingswaarden en verhoogd ureum. Daarnaast heeft ze een recente ziekenhuisachtergrond, wat het beeld ernstiger en microbiologisch complexer maakt.',
        explanation: '',
      },
      {
        id: '7c',
        type: 'meerdere_antwoorden',
        points: 3,
        question: `7c. (3p)
Welke verwekkers of groepen moet je in deze context relatief serieuzer overwegen dan bij een milde ambulante CAP?
Meerdere antwoorden mogelijk.`,
        options: [
          { letter: 'A', text: 'Enterobacterales' },
          { letter: 'B', text: 'S. aureus' },
          { letter: 'C', text: 'Pseudomonas aeruginosa' },
          { letter: 'D', text: 'Alleen Mycoplasma is nog mogelijk' },
          { letter: 'E', text: 'Resistentere ziekenhuisflora in bredere zin' },
        ],
        correctAnswers: ['A', 'B', 'C', 'E'],
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.75,
        explanation:
          'Juiste antwoorden: A, B, C en E. Puntenverdeling: 0,75 punt per juiste keuze, max 3.',
      },
      {
        id: '7d',
        type: 'open',
        points: 3,
        question: `7d. (3p)
Waarom bewijst de thoraxfoto met pleuravocht nog niet dat er sprake is van een pleurale infectie?
Maximaal 40 woorden.`,
        wordLimit: 40,
        rubric:
          '1p beeldvorming toont vocht maar geen infectiestatus; 1p pleurapunctie nodig; 1p analyse/kweek/pH/glucose benoemen.',
        modelAnswer:
          'Beeldvorming laat wel zien dat er vocht is, maar niet of dat vocht geïnfecteerd is. Daarvoor is aanvullende diagnostiek nodig, zoals pleurapunctie met analyse van pH, glucose en kweek.',
        explanation: '',
      },
      {
        id: '7e',
        type: 'open',
        points: 4,
        question: `7e. (4p)
Noem 4 onderdelen van de eerste aanvullende diagnostiek of behandeling die hier logisch zijn.
Maximaal 80 woorden.`,
        wordLimit: 80,
        rubric:
          'Puntenverdeling: 1 punt per goed onderdeel, max 4. Goede antwoorden: zuurstof/monitoring; antibiotica passend bij ernst/setting; opname/eskalatie; bloedkweken/sputumkweek; pleurapunctie bij verdenking pleurale infectie; labcontrole; ernstinschatting.',
        modelAnswer:
          'Start monitoring en zuurstof. Geef antibiotica passend bij ernst en ziekenhuiscontext. Verricht microbiologische diagnostiek zoals bloedkweken en sputumonderzoek. Overweeg pleurapunctie om pleurale infectie uit te sluiten of te bevestigen.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-8',
    title: 'Casus 8 – Respiratoire insufficiëntie, V/Q en shock',
    totalPoints: 16,
    scenario: `Een 69-jarige man met ernstige pneumonie wordt benauwd en suf. RR 82/48 mmHg, pols 126/min, ademfrequentie 36/min, saturatie 83% aan kamerlucht. De huid is klam en koel.
Bloedgas/lab
${LAB8}
Figuur 5 – beeldvraag
Schema-beschrijving: longgebied met behouden perfusie maar zeer beperkte ventilatie van alveoli.`,
    questions: [
      {
        id: '8a',
        type: 'meerkeuze',
        points: 2,
        question: `8a. (2p)
Welk V/Q-probleem past het best bij figuur 5?`,
        options: [
          { letter: 'A', text: 'Shunt' },
          { letter: 'B', text: 'Dode ruimte' },
          { letter: 'C', text: 'Normale V/Q-matching' },
          { letter: 'D', text: 'Hyperventilatie zonder perfusieprobleem' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
      {
        id: '8b',
        type: 'meerdere_antwoorden',
        points: 3,
        question: `8b. (3p)
Welke bevindingen passen het best bij circulatoire insufficiëntie en weefselhypoperfusie?
Meerdere antwoorden mogelijk.`,
        options: [
          { letter: 'A', text: 'Hypotensie' },
          { letter: 'B', text: 'Verhoogd lactaat' },
          { letter: 'C', text: 'Klamme huid' },
          { letter: 'D', text: 'Tachycardie' },
          { letter: 'E', text: 'Alleen lage saturatie zonder andere afwijkingen' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.75,
        explanation:
          'Juiste antwoorden: A, B, C en D. Puntenverdeling: 0,75 punt per juiste keuze, max 3.',
      },
      {
        id: '8c',
        type: 'beeldvraag',
        points: 3,
        question: `8c. (3p)
Zet de volgende interventies in de meest logische volgorde.
ABCDE-stabilisatie en zuurstof/ventilatoire ondersteuning
Hemodynamische resuscitatie en vroege oorzaakgerichte behandeling
Verdere detaillering van differentiaal en herbeoordeling`,
        gradingMethod: 'order',
        orderIntro: 'Meest logische volgorde (1 = eerste, 3 = laatste):',
        orderOptions: [...ORDER_8C],
        correctOrder: [...ORDER_8C],
        expectedAnswer: '1 → 2 → 3',
        rubric: 'Puntenverdeling: alleen volledig juiste volgorde = 3p.',
        modelAnswer: 'Antwoord: 1 → 2 → 3',
        explanation: '',
      },
      {
        id: '8d',
        type: 'open',
        points: 4,
        question: `8d. (4p)
Leg uit waarom pneumonie zowel hypoxemie als circulatoire ontregeling kan geven.
Maximaal 90 woorden.`,
        wordLimit: 90,
        rubric:
          '1p slechte ventilatie alveoli; 1p perfusie blijft relatief aanwezig / V/Q-mismatch of shunt; 1p hypoxemie verklaren; 1p infectie/sepsis/hypotensie/perfusie/lactaat.',
        modelAnswer:
          'Pneumonie vult alveoli met inflammatoir materiaal, waardoor ventilatie afneemt terwijl perfusie deels aanwezig blijft. Dat geeft V/Q-mismatch of shunt en daardoor hypoxemie. Tegelijk kan ernstige infectie leiden tot vasodilatatie, capillaire lekkage en hypotensie, met weefselhypoperfusie en lactaatstijging.',
        explanation: '',
      },
      {
        id: '8e',
        type: 'open',
        points: 4,
        question: `8e. (4p)
Noem 4 parameters of aspecten die je in de eerste uren nauwkeurig wilt vervolgen.
Maximaal 50 woorden.`,
        wordLimit: 50,
        rubric:
          'Puntenverdeling: 1 punt per goed genoemd aspect, max 4. Goede antwoorden: saturatie/oxygenatie; bloeddruk; pols; ademfrequentie; lactaat; diurese; bewustzijn; bloedgas; temperatuur; respons op behandeling.',
        modelAnswer:
          'Zuurstofsaturatie, bloeddruk, ademfrequentie en lactaat moeten nauwkeurig gevolgd worden. Daarnaast zijn diurese, bewustzijn en herhaalde bloedgasanalyse belangrijk in de eerste uren.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-9',
    title: 'Casus 9 – Longkanker, pleuravocht, stadiëring en pathologie',
    totalPoints: 15,
    scenario: `Een 70-jarige man met 55 pack years presenteert zich met hemoptoë, gewichtsverlies, dyspneu en heesheid. CT toont een centrale massa, mediastinale klieren en een verdachte laesie in de contralaterale long. Er is pleuravocht.
Pleuravochtanalyse
${PLEUR9}
Figuur 6 – beeldvraag
CT/PET-CT-beschrijving: FDG-avide centrale pulmonale massa, FDG-opnemende mediastinale klieren, verdachte contralaterale longnodus.`,
    questions: [
      {
        id: '9a',
        type: 'meerkeuze',
        points: 2,
        question: `9a. (2p)
Wat is de meest waarschijnlijke hoofddiagnose?`,
        options: [
          { letter: 'A', text: 'Longcarcinoom' },
          { letter: 'B', text: 'Pneumothorax' },
          { letter: 'C', text: 'Onschuldige bronchitis' },
          { letter: 'D', text: 'Alleen sarcoïdose' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
      {
        id: '9b',
        type: 'meerkeuze',
        points: 2,
        question: `9b. (2p)
Classificeer het pleuravocht.`,
        options: [
          { letter: 'A', text: 'Transsudaat' },
          { letter: 'B', text: 'Exsudaat' },
          { letter: 'C', text: 'Pseudohyperkaliëmie' },
          { letter: 'D', text: 'Niet te beoordelen' },
        ],
        correctAnswer: 'B',
        explanation:
          'eiwitratio = 44/63 = 0,70 > 0,5; LDH-ratio = 520/240 = 2,17 > 0,6; pleuravocht-LDH > 2/3 bovengrens serum-LDH. Dus exsudaat.',
      },
      {
        id: '9c',
        type: 'meerdere_antwoorden',
        points: 3,
        question: `9c. (3p)
Welke bevindingen in de casus suggereren gevorderde ziekte?
Meerdere antwoorden mogelijk.`,
        options: [
          { letter: 'A', text: 'Heesheid' },
          { letter: 'B', text: 'Mediastinale klieren' },
          { letter: 'C', text: 'Contralaterale longlaesie' },
          { letter: 'D', text: 'Pleuravocht' },
          { letter: 'E', text: 'Alleen rookanamnese' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.75,
        explanation:
          'Juiste antwoorden: A, B, C en D. Puntenverdeling: 0,75 punt per juiste keuze, max 3.',
      },
      {
        id: '9d',
        type: 'open',
        points: 4,
        question: `9d. (4p)
Beschrijf in hoofdlijnen de betekenis van T, N en M in deze casus en waarom dit therapeutisch relevant is.
Maximaal 80 woorden.`,
        wordLimit: 80,
        rubric:
          '1p T goed; 1p N goed; 1p M goed; 1p therapeutische relevantie.',
        modelAnswer:
          'T beschrijft grootte en lokale uitbreiding van de primaire tumor. N beschrijft regionale lymfeklierbetrokkenheid. M beschrijft metastasen op afstand, bijvoorbeeld de contralaterale longlaesie. Dit is therapeutisch relevant omdat stadium direct bepaalt of behandeling curatief, lokaal of vooral palliatief/systemisch is.',
        explanation: '',
      },
      {
        id: '9e',
        type: 'open',
        points: 4,
        question: `9e. (4p)
Noem 4 onderdelen van de verdere diagnostische route, inclusief minstens 1 discipline of techniek voor weefseldiagnostiek.
Maximaal 90 woorden.`,
        wordLimit: 90,
        rubric:
          'Puntenverdeling: 1 punt per goed onderdeel, max 4. Goede antwoorden: PET-CT/stadiëring; bronchoscopie; EBUS; punctie/biopt; pathologie/histologie; cytologie pleuravocht; longarts; radioloog; patholoog; MDO.',
        modelAnswer:
          'Verdere stadiëring met PET-CT is logisch. Voor weefseldiagnostiek kun je denken aan bronchoscopie of EBUS, afhankelijk van de lokalisatie. Pleuravocht kan cytologisch onderzocht worden. De longarts, radioloog en patholoog spelen samen een centrale rol in het MDO.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-10',
    title: 'Casus 10 – ECG, AF en ritmedifferentiatie',
    totalPoints: 15,
    scenario: `Een 68-jarige man presenteert zich met hartkloppingen en dyspneu. Op het ECG zijn geen duidelijke P-toppen te zien, de RR-intervallen zijn volledig onregelmatig en de QRS-complexen zijn smal. Hij is op dit moment niet hypotensief.
Figuur 7 – beeldvraag
ECG-beschrijving: onregelmatig-irregulair ritme zonder duidelijke P-toppen, smalle QRS-complexen.`,
    questions: [
      {
        id: '10a',
        type: 'meerkeuze',
        points: 2,
        question: `10a. (2p)
Wat is de meest waarschijnlijke ritmestoornis?`,
        options: [
          { letter: 'A', text: 'Atriumfibrilleren' },
          { letter: 'B', text: 'Sinusritme' },
          { letter: 'C', text: 'Volledig AV-blok' },
          { letter: 'D', text: 'Monomorfe ventrikeltachycardie' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
      {
        id: '10b',
        type: 'meerdere_antwoorden',
        points: 3,
        question: `10b. (3p)
Welke kenmerken ondersteunen deze diagnose?
Meerdere antwoorden mogelijk.`,
        options: [
          { letter: 'A', text: 'Geen duidelijke P-toppen' },
          { letter: 'B', text: 'Volledig onregelmatige RR-intervallen' },
          { letter: 'C', text: 'Smalle QRS-complexen passen hierbij' },
          { letter: 'D', text: 'Een volledig regelmatig ritme ondersteunt AF het sterkst' },
          { letter: 'E', text: 'Een zaagtandpatroon is vereist' },
        ],
        correctAnswers: ['A', 'B', 'C'],
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 1,
        explanation:
          'Juiste antwoorden: A, B en C. Puntenverdeling: 1 punt per juiste keuze, max 3.',
      },
      {
        id: '10c',
        type: 'meerkeuze',
        points: 2,
        question: `10c. (2p)
Wat is de directe voorkeursbehandeling als deze patiënt tijdens observatie instabiel wordt?`,
        options: [
          { letter: 'A', text: 'Synchroniseerde elektrische cardioversie' },
          { letter: 'B', text: 'Alleen leefstijladvies' },
          { letter: 'C', text: 'Geen acute behandeling' },
          { letter: 'D', text: 'Meteen antibiotica' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
      {
        id: '10d',
        type: 'open',
        points: 4,
        question: `10d. (4p)
Noem 4 elementen van de langetermijnaanpak van atriumfibrilleren.
Maximaal 70 woorden.`,
        wordLimit: 70,
        rubric:
          'Puntenverdeling: 1 punt per goed element, max 4. Goede elementen: antistollingsbeleid / trombo-embolisch risico; frequentiecontrole; ritmecontrole; aanpak uitlokkende factoren/comorbiditeit; follow-up / symptoommonitoring.',
        modelAnswer:
          'Belangrijke elementen zijn beoordeling van antistolling, keuze voor frequentie- of ritmecontrole, behandeling van uitlokkende factoren en goede follow-up. Ook comorbiditeit zoals hypertensie of hartfalen moet actief worden meegenomen.',
        explanation: '',
      },
      {
        id: '10e',
        type: 'open',
        points: 4,
        question: `10e. (4p)
Noem 4 factoren of comorbiditeiten die AF kunnen uitlokken, onderhouden of verergeren.
Maximaal 50 woorden.`,
        wordLimit: 50,
        rubric:
          'Puntenverdeling: 1 punt per goed genoemde factor, max 4. Goede factoren: hypertensie; obesitas; alcoholgebruik; OSAS; hartfalen; ischemisch hartlijden; andere structurele hartziekte; leefstijlproblematiek.',
        modelAnswer:
          'AF kan worden onderhouden door hypertensie, obesitas, alcoholgebruik en OSAS. Ook hartfalen en ischemisch hartlijden zijn belangrijke factoren.',
        explanation: '',
      },
    ],
  },
]
