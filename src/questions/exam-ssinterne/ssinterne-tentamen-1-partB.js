/**
 * Interne Geneeskunde — oefententamen 1, casussen 6–10 (50 p)
 * Gebouwd volgens de House Standard v2.0 (docs/OEFENTENTAMEN-GENERATOR-v2.md).
 * Elke vraag is herleidbaar tot de Smartium-samenvatting in `source`.
 */

export const ssinterneTentamen1PartB = [
  {
    id: 'casus-6',
    title: 'Casus 6 – Vrouw met rugpijn, anemie en een hoge bezinking',
    totalPoints: 10,
    scenario:
      'Een 53-jarige vrouw heeft sinds maanden toenemende moeheid en rugpijn waarop pijnstilling onvoldoende helpt. Het laboratorium toont een BSE van 78 mm/uur, een Hb van 6,8 mmol/L, een totaal eiwit van 90 g/L en een creatinine van 130 µmol/L. In het bloeduitstrijkje is geldrolvorming zichtbaar.',
    questions: [
      {
        id: '6a',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week2-multipel-myeloom',
        question: 'Waardoor ontstaat de geldrolvorming in het bloeduitstrijkje?',
        options: [
          { letter: 'A', text: 'Verdringing van het beenmerg door kwaadaardige plasmacellen' },
          { letter: 'B', text: 'IJzergebrek verandert de vorm van de rode bloedcellen' },
          { letter: 'C', text: 'Verhoogde immunoglobulinen verlagen de lading van erytrocyten' },
          { letter: 'D', text: 'Hypercalciëmie laat erytrocyten in stapeltjes samenklonteren' },
        ],
        correctAnswer: 'C',
        explanation:
          'Door de grote hoeveelheid monoklonale antistoffen daalt de oppervlaktelading van de erytrocyten, waardoor ze elkaar minder afstoten en op elkaar gaan liggen.',
      },
      {
        id: '6b',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week2-multipel-myeloom',
        question: 'Welk onderzoek laat zien welk type M-proteïne aanwezig is?',
        options: [
          { letter: 'A', text: 'Immunofixatie' },
          { letter: 'B', text: 'Eiwitspectrum' },
          { letter: 'C', text: 'Flowcytometrie' },
          { letter: 'D', text: 'FISH-onderzoek' },
        ],
        correctAnswer: 'A',
        explanation:
          'Het eiwitspectrum laat alleen zien dát er een piek in het gammagebied is; pas met antistoffen tegen IgG, IgA, IgM, kappa en lambda wordt het type vastgesteld.',
      },
      {
        id: '6c',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week2-multipel-myeloom',
        question: 'Welke bevinding bij deze patiënte telt mee als orgaanschade volgens CRAB?',
        options: [
          { letter: 'A', text: 'De verhoogde bezinking' },
          { letter: 'B', text: 'Het verhoogde totaal eiwit' },
          { letter: 'C', text: 'De geldrolvorming in het uitstrijkje' },
          { letter: 'D', text: 'Het verhoogde creatinine' },
        ],
        correctAnswer: 'D',
        explanation:
          'CRAB telt alleen schade aan organen en weefsel: hypercalciëmie, nierfalen, anemie en botlaesies. De overige afwijkingen zijn een gevolg van het M-proteïne zelf.',
      },
      {
        id: '6d',
        type: 'open',
        points: 4,
        source: 'ssinterne-week2-multipel-myeloom',
        wordLimit: 80,
        question:
          'Leg uit hoe multipel myeloom lytische botlaesies en hypercalciëmie veroorzaakt. Leg daarnaast uit waarom een negatief eiwitspectrum met negatieve immunofixatie multipel myeloom niet uitsluit.\n Maximaal 80 woorden.',
        rubric:
          '1p de myeloomplasmacel zet de osteoclast aan en remt de osteoblast; 1p daardoor overheerst botafbraak en ontstaan lytische laesies; 1p het vrijkomende calcium uit bot geeft hypercalciëmie; 1p er kan sprake zijn van vrije lichte-keten myeloom of niet-secretorend myeloom.',
        modelAnswer:
          'De myeloomplasmacel activeert de osteoclast en remt de osteoblast, waardoor de balans doorslaat naar botafbraak en lytische laesies ontstaan. Uit dat afgebroken bot komt calcium vrij, wat hypercalciëmie geeft met sufheid, obstipatie en dorst. Een negatief eiwitspectrum sluit myeloom niet uit: er kan een vrije lichte-keten myeloom zijn, of een niet-secretorend myeloom, dat bij ongeveer 3% voorkomt.',
        explanation: 'Inhoudelijk gelijkwaardige formuleringen ook goed rekenen.',
      },
    ],
  },
  {
    id: 'casus-7',
    title: 'Casus 7 – Jonge vrouw met een dik en pijnlijk been',
    totalPoints: 10,
    scenario:
      'Een 34-jarige vrouw heeft sinds drie dagen een dik, pijnlijk en glanzend rechterbeen. Zij gebruikt orale anticonceptie. Bij onderzoek is er pitting oedeem en een kuitomvangverschil van 4 cm. De klinische beslisregel komt uit op een score van 3.',
    questions: [
      {
        id: '7a',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week6-trombose',
        question: 'Wat is bij deze klinische score de juiste volgende stap?',
        options: [
          { letter: 'A', text: 'D-dimeer bepalen' },
          { letter: 'B', text: 'Compressie-echografie verrichten' },
          { letter: 'C', text: 'Venografie verrichten' },
          { letter: 'D', text: 'Antistolling starten' },
        ],
        correctAnswer: 'B',
        explanation:
          'Een score van 2 of hoger betekent een hoge klinische kans; dan is beeldvorming de volgende stap en heeft een D-dimeer geen uitsluitende waarde meer.',
      },
      {
        id: '7b',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week6-trombose',
        question: 'Welke uitspraak over de D-dimeer is juist?',
        options: [
          { letter: 'A', text: 'Een verhoogde waarde bevestigt de diagnose diepe veneuze trombose' },
          { letter: 'B', text: 'De waarde is tijdens de zwangerschap zelden verhoogd' },
          { letter: 'C', text: 'Een normale waarde heeft een hoge negatieve voorspellende waarde' },
          { letter: 'D', text: 'De waarde vervangt bij hoge klinische kans de compressie-echografie' },
        ],
        correctAnswer: 'C',
        explanation:
          'D-dimeren stijgen ook bij infectie, maligniteit, zwangerschap en na een operatie; de test is daardoor bruikbaar om uit te sluiten, niet om aan te tonen.',
      },
      {
        id: '7c',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week6-trombose',
        question: 'Hoelang wordt behandeld bij een eerste trombose met een tijdelijke risicofactor?',
        options: [
          { letter: 'A', text: 'Drie maanden' },
          { letter: 'B', text: 'Zes weken' },
          { letter: 'C', text: 'Twaalf maanden' },
          { letter: 'D', text: 'Onbeperkt' },
        ],
        correctAnswer: 'A',
        explanation:
          'Als de uitlokkende factor verdwijnt, daalt het recidiefrisico weer; onbeperkte behandeling is gereserveerd voor idiopathische trombose of een tweede event.',
      },
      {
        id: '7d',
        type: 'koppelvraag',
        points: 4,
        source: 'ssinterne-week6-trombose',
        question:
          'Koppel elk antistollingsmiddel aan het bijbehorende werkingsmechanisme. Gebruik elk mechanisme maximaal één keer.\nMechanismen\nA. Remt direct trombine\nB. Versterkt de werking van antitrombine\nC. Remt vooral factor Xa\nD. Verlaagt factor II, VII, IX en X',
        items: ['a. Heparine', 'b. LMWH', 'c. Fenprocoumon', 'd. Dabigatran'],
        matchOptions: [
          { letter: 'A', text: 'Remt direct trombine' },
          { letter: 'B', text: 'Versterkt de werking van antitrombine' },
          { letter: 'C', text: 'Remt vooral factor Xa' },
          { letter: 'D', text: 'Verlaagt factor II, VII, IX en X' },
        ],
        correctMapping: { 0: 'B', 1: 'C', 2: 'D', 3: 'A' },
        explanation:
          'a→B heparine, b→C LMWH, c→D vitamine K-antagonist, d→A DOAC met directe trombineremming. 1 punt per juiste koppeling.',
      },
    ],
  },
  {
    id: 'casus-8',
    title: 'Casus 8 – Acuut zieke man twee dagen na een buikoperatie',
    totalPoints: 10,
    scenario:
      'Een 68-jarige man wordt twee dagen na een darmoperatie acuut ziek. Hij is verward en heeft koude, gemarmerde benen. De bloeddruk is 80/45 mmHg bij een pols van 125/min. De urineproductie is de laatste uren vrijwel gestopt en het lactaat is 4,5 mmol/L.',
    questions: [
      {
        id: '8a',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week7-circulatoire-shock',
        question: 'Welk shocktype heeft als kernprobleem een relatief volumetekort door vaatverwijding?',
        options: [
          { letter: 'A', text: 'Hypovolemische shock' },
          { letter: 'B', text: 'Obstructieve shock' },
          { letter: 'C', text: 'Cardiogene shock' },
          { letter: 'D', text: 'Distributieve shock' },
        ],
        correctAnswer: 'D',
        explanation:
          'Bij gegeneraliseerde vasodilatatie neemt de capaciteit van het vaatbed toe terwijl het bloedvolume gelijk blijft; bij hypovolemie ontbreekt het volume juist echt.',
      },
      {
        id: '8b',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week7-circulatoire-shock',
        question: 'Welke uitspraak over de bloeddruk bij shock is juist?',
        options: [
          { letter: 'A', text: 'De bloeddruk daalt als eerste parameter bij shock' },
          { letter: 'B', text: 'De bloeddruk is een late maat voor shock' },
          { letter: 'C', text: 'Shock is per definitie aanwezig bij hypotensie' },
          { letter: 'D', text: 'Een normale bloeddruk sluit shock uit' },
        ],
        correctAnswer: 'B',
        explanation:
          'Compensatiemechanismen houden de druk lang op peil terwijl de weefselperfusie al tekortschiet; shock en hypotensie zijn daarom niet hetzelfde.',
      },
      {
        id: '8c',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week7-abcde-methodiek',
        question: 'Welke zuurstofstreefwaarde geldt bij een acuut zieke patiënt zonder shock?',
        options: [
          { letter: 'A', text: 'Een saturatie van 88 tot 92 procent' },
          { letter: 'B', text: 'Een saturatie van 90 tot 94 procent' },
          { letter: 'C', text: 'Een saturatie van 94 tot 98 procent' },
          { letter: 'D', text: 'Een saturatie boven 99 procent' },
        ],
        correctAnswer: 'C',
        explanation:
          'De marge van 88 tot 92 procent is bedoeld voor patiënten met risico op hypercapnische respiratoire insufficiëntie; bij shock geef je juist 15 liter via een non-rebreathing masker.',
      },
      {
        id: '8d',
        type: 'beeldvraag',
        points: 4,
        gradingMethod: 'order',
        source: 'ssinterne-week7-abcde-methodiek',
        question:
          'Bij binnenkomst braakt de patiënt en is hij nauwelijks aanspreekbaar. Zet de volgende handelingen in de volgorde waarin ze bij deze opvang horen plaats te vinden.',
        orderIntro: 'Volgorde volgens de ABCDE (1 = eerst, 4 = laatst):',
        orderOptions: [
          'Twee perifere infusen inbrengen en een bolus Ringerlactaat geven',
          'Bedside glucose bepalen en de pupillen beoordelen',
          'De onderkaak naar voren brengen en de mond-keelholte uitzuigen',
          'De thorax ontbloten en 15 liter zuurstof via een non-rebreathing masker geven',
        ],
        correctOrder: [
          'De onderkaak naar voren brengen en de mond-keelholte uitzuigen',
          'De thorax ontbloten en 15 liter zuurstof via een non-rebreathing masker geven',
          'Twee perifere infusen inbrengen en een bolus Ringerlactaat geven',
          'Bedside glucose bepalen en de pupillen beoordelen',
        ],
        expectedAnswer: '3 → 4 → 1 → 2',
        rubric: 'Alleen de volledig juiste volgorde levert 4 punten op.',
        modelAnswer:
          'Eerst de luchtweg vrijmaken met een jaw thrust en uitzuigen (A), dan zuurstof geven (B), daarna vaattoegang met vulling (C) en tot slot glucose en pupillen (D).',
        explanation:
          'Treat first what kills first: een verstopte luchtweg doodt sneller dan een lage glucose, dus de volgorde van de ABCDE bepaalt de prioriteit.',
      },
    ],
  },
  {
    id: 'casus-9',
    title: 'Casus 9 – Man met icterus, ascites en oedeem',
    totalPoints: 10,
    scenario:
      'Een 55-jarige man komt met icterus, een bolle buik en oedeem aan beide benen. Het bilirubine is 354 µmol/L, het albumine 22 g/L, de INR 1,9, het creatinine 169 µmol/L en het natrium 115 mmol/L. Bij echografie is er ascites met een nodulaire leverrand en een vergrote milt.',
    questions: [
      {
        id: '9a',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week5-levercirrose',
        question: 'Welk onderzoek moet bij deze patiënt met ascites als eerste gebeuren?',
        options: [
          { letter: 'A', text: 'Een diagnostische ascitespunctie' },
          { letter: 'B', text: 'Een CT-scan met intraveneus contrast' },
          { letter: 'C', text: 'Een leverbiopsie ter bevestiging' },
          { letter: 'D', text: 'Een gastroscopie naar varices' },
        ],
        correctAnswer: 'A',
        explanation:
          'Een spontane bacteriële peritonitis is levensbedreigend en alleen met het neutrofielengetal in het ascitesvocht uit te sluiten; de andere onderzoeken kunnen wachten.',
      },
      {
        id: '9b',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week5-levercirrose',
        question: 'Wat betekent een SAAG boven 1,1 g/dL?',
        options: [
          { letter: 'A', text: 'Het past bij peritoneale carcinomatose of tuberculose' },
          { letter: 'B', text: 'Het bewijst een spontane bacteriële peritonitis' },
          { letter: 'C', text: 'Het past bij een nefrotisch syndroom' },
          { letter: 'D', text: 'Het past bij cirrose of hartfalen' },
        ],
        correctAnswer: 'D',
        explanation:
          'Een hoge gradiënt tussen serum- en ascitesalbumine hoort bij ascites op basis van portale hypertensie; peritoneale oorzaken geven juist een lage gradiënt.',
      },
      {
        id: '9c',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week5-levercirrose',
        question: 'Welke drie waarden gebruikt de MELD-score?',
        options: [
          { letter: 'A', text: 'Bilirubine, albumine en ascites' },
          { letter: 'B', text: 'Bilirubine, creatinine en INR' },
          { letter: 'C', text: 'Albumine, INR en encefalopathie' },
          { letter: 'D', text: 'Creatinine, natrium en trombocyten' },
        ],
        correctAnswer: 'B',
        explanation:
          'De MELD is opgebouwd uit laboratoriumwaarden voor uitscheiding, nierfunctie en synthese; klinische onderdelen zoals ascites en encefalopathie horen bij Child-Pugh-Turcotte.',
      },
      {
        id: '9d',
        type: 'open',
        points: 4,
        source: 'ssinterne-week5-levercirrose',
        wordLimit: 80,
        question:
          'Leg uit hoe portale hypertensie bij deze patiënt tot oesofagusvarices en splenomegalie leidt. Leg daarnaast uit waarom terughoudendheid past met een CT-scan met intraveneus contrast.\n Maximaal 80 woorden.',
        rubric:
          '1p de verstoorde bouw van de cirrotische lever geeft een hoge weerstand en dus een hoge druk in het poortadersysteem; 1p het bloed zoekt collaterale routes, waardoor onder andere oesofagusvarices ontstaan; 1p stuwing stroomopwaarts geeft een vergrote milt; 1p intraveneus contrast kan de al gestoorde nierfunctie verder verslechteren.',
        modelAnswer:
          'Door de littekenvorming stroomt het bloed moeilijk door de lever, waardoor de druk in het poortadersysteem stijgt. Het bloed zoekt collaterale routes en daardoor ontstaan onder andere oesofagusvarices. De stuwing stroomopwaarts vergroot de milt. Omdat het creatinine al verhoogd is, kan intraveneus contrast de nierfunctie verder verslechteren; daarom ben je daar terughoudend mee.',
        explanation: 'Inhoudelijk gelijkwaardige formuleringen ook goed rekenen.',
      },
    ],
  },
  {
    id: 'casus-10',
    title: 'Casus 10 – Oudere vrouw met nieuwe hoofdpijn en kaakpijn',
    totalPoints: 10,
    scenario:
      'Een 72-jarige vrouw heeft sinds drie weken nieuwe, aanhoudende hoofdpijn en pijn in de kaak bij het kauwen. De arteria temporalis voelt verdikt en drukpijnlijk aan. De BSE is 78 mm/uur en het CRP is verhoogd. Visusklachten zijn er niet.',
    questions: [
      {
        id: '10a',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week1-vasculitis',
        question: 'Wat is bij deze verdenking de juiste eerste stap?',
        options: [
          { letter: 'A', text: 'De uitslag van het slaapaderbiopt afwachten' },
          { letter: 'B', text: 'Eerst een PET/CT laten verrichten' },
          { letter: 'C', text: 'Direct starten met prednison' },
          { letter: 'D', text: 'Eerst methotrexaat starten' },
        ],
        correctAnswer: 'C',
        explanation:
          'Visusverlies bij reuscelarteritis is irreversibel, dus uitstel is het echte risico; het biopt blijft daarna nog weken afwijkend en kan dus later worden afgenomen.',
      },
      {
        id: '10b',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week1-vasculitis',
        question: 'Welke startdosering prednison past bij kaakclaudicatio zonder visusverlies?',
        options: [
          { letter: 'A', text: '60 mg per dag' },
          { letter: 'B', text: '40 mg per dag' },
          { letter: 'C', text: '20 mg per dag' },
          { letter: 'D', text: '10 mg per dag' },
        ],
        correctAnswer: 'A',
        explanation:
          'Kaak- of tongclaudicatio maakt de arteritis gecompliceerd en vraagt daarom een hogere startdosering dan de 40 mg bij een ongecompliceerd beeld.',
      },
      {
        id: '10c',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week1-vasculitis',
        question: 'Welke medicatie hoort direct bij de start van een hoge dosering steroïden?',
        options: [
          { letter: 'A', text: 'Protonpompremmer, antihistaminicum en een laxans' },
          { letter: 'B', text: 'Bisfosfonaat, calcium en vitamine D' },
          { letter: 'C', text: 'Methotrexaat, foliumzuur en een antiëmeticum' },
          { letter: 'D', text: 'Statine, acetylsalicylzuur en een bètablokker' },
        ],
        correctAnswer: 'B',
        explanation:
          'Hoge doseringen steroïden geven osteoporose en fracturen, dus botprotectie start meteen mee; methotrexaat komt pas in beeld bij relapses of steroïdbijwerkingen.',
      },
      {
        id: '10d',
        type: 'open',
        points: 4,
        source: 'ssinterne-week1-vasculitis',
        wordLimit: 70,
        question:
          'Leg uit waarom reuscelarteritis een spoedgeval is en waarom de behandeling niet mag wachten op de uitslag van het biopt.\n Maximaal 70 woorden.',
        rubric:
          '1p ongeveer 20% van de patiënten krijgt visusverlies; 1p dat visusverlies is irreversibel en ontstaat vooral door vertraagde diagnose en behandeling; 1p daarom start je direct met een hoge dosering prednison; 1p het biopt kan tot ongeveer 6 weken na de start van steroïden nog afwijkend zijn, dus behandelen bederft de diagnostiek niet.',
        modelAnswer:
          'Ongeveer 20% van de patiënten met reuscelarteritis krijgt visusverlies, meestal door een te late diagnose en behandeling. Dat verlies is irreversibel, dus elke dag uitstel telt. Daarom start je direct een hoge dosering prednison. Wachten op het biopt is niet nodig, omdat het biopt tot ongeveer zes weken na de start van steroïden nog afwijkend kan zijn.',
        explanation: 'Inhoudelijk gelijkwaardige formuleringen ook goed rekenen.',
      },
    ],
  },
]
