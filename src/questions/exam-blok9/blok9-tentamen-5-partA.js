/** Blok 9 oefententamen 5 — casussen 1–4 · totaal examen 138 p */

const LAB1 = `Parameter | Uitslag | Referentie
Creatinine | 268 µmol/L | 50–90
Ureum | 22,1 mmol/L | 3,0–8,0
Natrium | 148 mmol/L | 135–145
Kalium | 5,3 mmol/L | 3,5–5,0
Bicarbonaat | 19 mmol/L | 22–29
Hb | 9,8 mmol/L | 7,5–10,0`

const LAB2 = `Parameter | Uitslag | Referentie
Creatinine | 101 µmol/L | 60–110
Albumine | 24 g/L | 35–50
Cholesterol | 7,1 mmol/L | <5,0
UACR | sterk verhoogd | —
Urinesediment | weinig erytrocyten, geen nitriet | —`

const LAB3 = `Parameter | Uitslag | Referentie
Natrium | 136 mmol/L | 135–145
Kalium | 2,6 mmol/L | 3,5–5,0
Chloride | 91 mmol/L | 98–107
Bicarbonaat | 33 mmol/L | 22–29
Magnesium | 0,58 mmol/L | 0,70–1,00
Creatinine | 88 µmol/L | 50–90`

export const blok9Tentamen5PartA = [
  {
    id: 'casus-1',
    title: 'Casus 1 – Acute nierschade',
    totalPoints: 13,
    scenario: `Een 72-jarige vrouw komt op de SEH met 5 dagen diarree en braken. Zij gebruikt losartan en een thiazidediureticum. Ze vertelt dat ze sinds gisteren nauwelijks meer plast. Bij onderzoek zijn er droge slijmvliezen, een lage huidturgor en orthostatische hypotensie. De bladderscan toont 55 mL residu.
Laboratorium
Creatinine 2 maanden geleden: 82 µmol/L.
${LAB1}`,
    questions: [
      {
        id: '1a',
        type: 'meerkeuze',
        points: 2,
        question: `1a. (2p)
Welke hoofdcategorie van acute nierschade is het meest waarschijnlijk?`,
        options: [
          { letter: 'A', text: 'Prerenaal' },
          { letter: 'B', text: 'Renaal door glomerulonefritis' },
          { letter: 'C', text: 'Postrenaal' },
          { letter: 'D', text: 'Chronische nierschade zonder acute component' },
        ],
        correctAnswer: 'A',
        explanation:
          'Diarree/braken, weinig intake, dehydratie, orthostase en laag residu passen het best bij prerenale acute nierschade.',
      },
      {
        id: '1b',
        type: 'open',
        points: 3,
        question: `1b. (3p)
Noem 3 bevindingen uit de casus die jouw antwoord bij 1a ondersteunen.
Maximaal 50 woorden.`,
        wordLimit: 50,
        rubric:
          '1 punt per juiste aanwijzing, max 3. Goede aanwijzingen: 5 dagen diarree en braken; droge slijmvliezen; lage huidturgor; orthostatische hypotensie; weinig plassen; laag residu op bladderscan; sterke stijging van creatinine t.o.v. oude waarde; gebruik van losartan en thiazide kan prerenale schade verergeren.',
        modelAnswer:
          'Diarree en braken geven volumeverlies. Droge slijmvliezen, lage huidturgor en orthostase passen bij dehydratie. Het lage residu maakt een postrenale obstructie minder waarschijnlijk.',
        explanation: '',
      },
      {
        id: '1c',
        type: 'meerkeuze',
        points: 2,
        question: `1c. (2p)
Welke bevinding zou het meest passen bij een postrenale oorzaak?`,
        options: [
          { letter: 'A', text: 'Bilaterale hydronefrose' },
          { letter: 'B', text: 'Droge slijmvliezen' },
          { letter: 'C', text: 'Orthostatische hypotensie' },
          { letter: 'D', text: 'Recent braken' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
      {
        id: '1d',
        type: 'open',
        points: 4,
        question: `1d. (4p)
Noem de 4 belangrijkste eerste stappen in de aanpak van deze patiënte.
Maximaal 100 woorden.`,
        wordLimit: 100,
        rubric:
          '1p uitlokkende medicatie herbeoordelen/pauseren; 1p volumestatus herstellen; 1p monitoring urineproductie/elektrolyten/nierfunctie; 1p oorzaakgerichte vervolgstappen/obstructie uitsluiten.',
        modelAnswer:
          'Staak of pauzeer tijdelijk losartan en thiazide. Corrigeer volumedepletie met passend vochtbeleid. Monitor urineproductie, kalium en creatinine. Verricht aanvullend urineonderzoek en sluit obstructie zo nodig met beeldvorming uit.',
        explanation: '',
      },
      {
        id: '1e',
        type: 'open',
        points: 2,
        question: `1e. (2p)
Waarom is een eGFR op basis van CKD-EPI hier minder betrouwbaar?
Maximaal 30 woorden.`,
        wordLimit: 30,
        rubric:
          '1p stabiele creatinine benoemen; 1p snelle verandering bij AKI koppelen aan onbetrouwbaarheid.',
        modelAnswer:
          'CKD-EPI gaat uit van een stabiele creatininewaarde. Bij acute nierschade verandert creatinine juist snel, waardoor de berekende eGFR de echte nierfunctie slecht weerspiegelt.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-2',
    title: 'Casus 2 – Glomerulair of tubulair?',
    totalPoints: 14,
    scenario: `Een 26-jarige man wordt verwezen vanwege afwijkend urineonderzoek. Hij heeft lichte enkeloedeemklachten en schuimende urine. De bloeddruk is 154/92 mmHg. Er is geen koorts. In de urine worden veel eiwitten gezien, maar geen duidelijke aanwijzingen voor infectie.
Laboratorium
${LAB2}`,
    questions: [
      {
        id: '2a',
        type: 'meerkeuze',
        points: 2,
        question: `2a. (2p)
Welk syndroom past het best bij deze casus?`,
        options: [
          { letter: 'A', text: 'Nefrotisch syndroom' },
          { letter: 'B', text: 'Nefritisch syndroom' },
          { letter: 'C', text: 'Urosepsis' },
          { letter: 'D', text: 'Postrenale obstructie' },
        ],
        correctAnswer: 'A',
        explanation:
          'Forse proteïnurie, hypoalbuminemie, oedeem en hypercholesterolemie passen klassiek bij nefrotisch syndroom.',
      },
      {
        id: '2b',
        type: 'meerdere_antwoorden',
        points: 3,
        question: `2b. (3p)
Welke bevindingen ondersteunen jouw antwoord?
Meerdere antwoorden mogelijk.`,
        options: [
          { letter: 'A', text: 'Hypoalbuminemie' },
          { letter: 'B', text: 'Schuimende urine' },
          { letter: 'C', text: 'Hypercholesterolemie' },
          { letter: 'D', text: 'Forse proteïnurie' },
          { letter: 'E', text: 'Acute anurie' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.75,
        explanation:
          'Juiste antwoorden: A, B, C en D. Puntenverdeling: 0,75 punt per juiste keuze, max 3. Bij foutief extra antwoord geen puntenaftrek, maar geen punt voor die keuze.',
      },
      {
        id: '2c',
        type: 'meerkeuze',
        points: 2,
        question: `2c. (2p)
Welke uitspraak is het meest juist?`,
        options: [
          { letter: 'A', text: 'Nefrotisch syndroom wordt vooral gekenmerkt door ontstekingshematurie' },
          { letter: 'B', text: 'Nefrotisch syndroom past bij podocytschade en forse proteïnurie' },
          { letter: 'C', text: 'Tubulaire schade geeft altijd een normale urine' },
          { letter: 'D', text: 'Glomerulaire ziekten geven nooit hypertensie' },
        ],
        correctAnswer: 'B',
        explanation: '',
      },
      {
        id: '2d',
        type: 'open',
        points: 3,
        question: `2d. (3p)
Noem 3 belangrijke risico’s of gevolgen van een nefrotisch syndroom.
Maximaal 50 woorden.`,
        wordLimit: 50,
        rubric:
          '1 punt per goed risico/gevolg, max 3. Goede antwoorden: tromboserisico; infectierisico; progressie naar nierfunctieverlies/nierfalen; oedeem/overvulling; dyslipidemie.',
        modelAnswer:
          'Belangrijke risico’s zijn trombose, infecties en progressief nierfunctieverlies. Daarnaast kunnen ernstig oedeem en dyslipidemie optreden.',
        explanation: '',
      },
      {
        id: '2e',
        type: 'open',
        points: 4,
        question: `2e. (4p)
Noem 4 onderdelen van de symptomatische behandeling van een nefrotisch syndroom.
Maximaal 100 woorden.`,
        wordLimit: 100,
        rubric:
          '1 punt per goed onderdeel, max 4. Goede antwoorden: zoutbeperking; diuretica tegen oedeem; ACE-remmer/ARB tegen proteïnurie indien passend; statine bij dyslipidemie; tromboseprofylaxe overwegen in juiste context; normale eiwitinname; follow-up van nierfunctie/albumine/proteïnurie.',
        modelAnswer:
          'Beperk zout en behandel oedeem met diuretica. Verminder proteïnurie met ACE-remmer of ARB indien verdraagbaar. Behandel dyslipidemie, vaak met een statine. Overweeg tromboserisico en controleer nierfunctie en proteïnurie in de follow-up.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-3',
    title: 'Casus 3 – Elektrolyten en zuur-base',
    totalPoints: 14,
    scenario: `Een 67-jarige vrouw meldt zich met misselijkheid, spierzwakte en palpitaties. Zij braakt al 4 dagen. Ze gebruikt ook een protonpompremmer. Bij lichamelijk onderzoek is ze wat suf, maar aanspreekbaar.
Laboratorium
${LAB3}`,
    questions: [
      {
        id: '3a',
        type: 'meerkeuze',
        points: 2,
        question: `3a. (2p)
Welke stoornis staat het meest op de voorgrond?`,
        options: [
          { letter: 'A', text: 'Ernstige hyperkaliëmie' },
          { letter: 'B', text: 'Hypokaliëmie met metabole alkalose' },
          { letter: 'C', text: 'Hoog-anion-gap metabole acidose' },
          { letter: 'D', text: 'Hyponatriëmie door SIADH' },
        ],
        correctAnswer: 'B',
        explanation:
          'Laag kalium, laag chloride en hoog bicarbonaat passen bij hypokaliëmie met metabole alkalose door braken.',
      },
      {
        id: '3b',
        type: 'open',
        points: 3,
        question: `3b. (3p)
Waarom leidt braken vaak niet vooral via direct kaliumverlies uit het braaksel tot hypokaliëmie?
Maximaal 50 woorden.`,
        wordLimit: 50,
        rubric:
          '1p braaksel bevat relatief weinig kalium; 1p HCl/chlorideverlies of alkalose/volumedepletie; 1p renaal kaliumverlies via RAAS/aldosteron.',
        modelAnswer:
          'Braken bevat zelf relatief weinig kalium. De hypokaliëmie ontstaat vooral indirect: verlies van HCl en chloride geeft metabole alkalose en volumedepletie, waardoor aldosteron stijgt en de nieren extra kalium uitscheiden.',
        explanation: '',
      },
      {
        id: '3c',
        type: 'meerkeuze',
        points: 2,
        question: `3c. (2p)
Welke combinatie past het best bij de pathofysiologie van hypokaliëmie door braken?`,
        options: [
          { letter: 'A', text: 'HCl-verlies, metabole alkalose, RAAS/aldosteronactivatie' },
          { letter: 'B', text: 'Hyperglykemie, osmotische diurese, respiratoire acidose' },
          { letter: 'C', text: 'Overvulling, lage aldosteronspiegel, hyperkaliëmie' },
          { letter: 'D', text: 'Longembolie, hyperventilatie, hyponatriëmie' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
      {
        id: '3d',
        type: 'meerdere_antwoorden',
        points: 3,
        question: `3d. (3p)
Welke onderzoeken zijn bij deze patiënte extra relevant?
Meerdere antwoorden mogelijk.`,
        options: [
          { letter: 'A', text: 'ECG' },
          { letter: 'B', text: 'Magnesium' },
          { letter: 'C', text: 'Urine-elektrolyten' },
          { letter: 'D', text: 'CKD-EPI als enige test' },
          { letter: 'E', text: 'Renine/aldosteron direct altijd verplicht' },
        ],
        correctAnswers: ['A', 'B', 'C'],
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 1,
        explanation: 'Juiste antwoorden: A, B en C. Puntenverdeling: 1 punt per juiste keuze, max 3.',
      },
      {
        id: '3e',
        type: 'open',
        points: 4,
        question: `3e. (4p)
Formuleer een passend eerste behandelplan.
Maximaal 100 woorden.`,
        wordLimit: 100,
        rubric:
          '1p oorzaak aanpakken/anti-emetisch of stoppen verliezen; 1p kaliumsuppletie; 1p magnesium corrigeren; 1p ECG/monitoring of vocht/chloridecorrrectie.',
        modelAnswer:
          'Behandel het braken en corrigeer volumedepletie/chloridetekort. Geef kaliumsuppletie en corrigeer ook magnesium, omdat hypomagnesiëmie hypokaliëmie kan onderhouden. Maak een ECG en bewaak ritmestoornissen, zeker gezien palpitaties en een kalium van 2,6 mmol/L.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-4',
    title: 'Casus 4 – PAV en diabetische voet',
    totalPoints: 14,
    scenario: `Een 63-jarige man met diabetes mellitus type 2 en rookanamnese presenteert zich met een wond aan de grote teen rechts die slecht geneest. Hij heeft ook nachtelijke pijn in de voet. Bij onderzoek is de voet koud en bleek. De EAI rechts is 0,42.
Figuur 1 – Beeldvraag
Foto-beschrijving: necrotisch aspect van de teen met slecht genezende wondranden.`,
    questions: [
      {
        id: '4a',
        type: 'meerkeuze',
        points: 2,
        question: `4a. (2p)
Wat is de meest waarschijnlijke klinische categorie?`,
        options: [
          { letter: 'A', text: 'Alleen claudicatio intermittens' },
          { letter: 'B', text: 'Kritieke ischemie / ernstige ischemische bedreiging' },
          { letter: 'C', text: 'Uitsluitend veneuze insufficiëntie' },
          { letter: 'D', text: 'Onschuldige drukplek zonder vaatlijden' },
        ],
        correctAnswer: 'B',
        explanation: '',
      },
      {
        id: '4b',
        type: 'meerkeuze',
        points: 2,
        question: `4b. (2p)
Welke bevinding maakt deze casus ernstiger dan gewone inspanningsgebonden PAV?`,
        options: [
          { letter: 'A', text: 'Loopgebonden kuitpijn alleen' },
          { letter: 'B', text: 'Nachtelijke rustpijn en slecht genezende wond' },
          { letter: 'C', text: 'Eenmalige kramp na sport' },
          { letter: 'D', text: 'Alleen hypertensie' },
        ],
        correctAnswer: 'B',
        explanation: '',
      },
      {
        id: '4c',
        type: 'open',
        points: 3,
        question: `4c. (3p)
Welke 3 elementen zijn hier het belangrijkst in de beoordeling?
Maximaal 50 woorden.`,
        wordLimit: 50,
        rubric:
          '1 punt per goed element, max 3. Goede elementen: ernst van ischemie/rustpijn; wond/necrose en infectierisico; diabetische voetcontext; koude/bleke voet; EAI sterk verlaagd; noodzaak snelle vaatchirurgische beoordeling.',
        modelAnswer:
          'Belangrijk zijn de ischemische ernst met rustpijn, de slecht genezende wond/necrose en de sterk verlaagde EAI. Door diabetes is er extra risico op snelle verslechtering en amputatie.',
        explanation: '',
      },
      {
        id: '4d',
        type: 'koppelvraag',
        points: 3,
        question: `4d. (3p)
Koppel de onderstaande bevindingen aan de best passende categorie.
Categorieën
Claudicatio intermittens
Kritieke ischemie
Acute ischemie
Bevindingen
a. Pijn na 100 meter lopen, verdwijnt in rust
b. Plots bleek, koud, pijnlijk been met uitval
c. Rustpijn en ulcus met slechte genezing`,
        items: [
          'a. Pijn na 100 meter lopen, verdwijnt in rust',
          'b. Plots bleek, koud, pijnlijk been met uitval',
          'c. Rustpijn en ulcus met slechte genezing',
        ],
        matchOptions: [
          { letter: 'A', text: 'Claudicatio intermittens' },
          { letter: 'B', text: 'Kritieke ischemie' },
          { letter: 'C', text: 'Acute ischemie' },
        ],
        correctMapping: { 0: 'A', 1: 'C', 2: 'B' },
        explanation: 'Puntenverdeling: 1 punt per juiste koppeling.',
      },
      {
        id: '4e',
        type: 'open',
        points: 4,
        question: `4e. (4p)
Noem 4 onderdelen van de behandeling of risicoreductie.
Maximaal 80 woorden.`,
        wordLimit: 80,
        rubric:
          '1 punt per goed onderdeel, max 4. Goede antwoorden: stoppen met roken; glucosebehandeling optimaliseren; statine; bloeddrukbehandeling; antitrombotisch beleid in passende context; wondzorg/diabetische voetzorg; vaatchirurgische beoordeling/revascularisatie overwegen.',
        modelAnswer:
          'Stoppen met roken, optimalisatie van diabetes en bloeddruk, starten of intensiveren van statinetherapie en goede wond-/voetzorg. Daarnaast is snelle beoordeling voor eventuele revascularisatie belangrijk.',
        explanation: '',
      },
    ],
  },
]
