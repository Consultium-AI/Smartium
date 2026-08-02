/**
 * Interne Geneeskunde — oefententamen 1, casussen 1–5 (50 p)
 * Gebouwd volgens de House Standard v2.0 (docs/OEFENTENTAMEN-GENERATOR-v2.md).
 * Elke vraag is herleidbaar tot de Smartium-samenvatting in `source`.
 */

export const ssinterneTentamen1PartA = [
  {
    id: 'casus-1',
    title: 'Casus 1 – Jonge man met koorts en dyspnoe na griep',
    totalPoints: 10,
    scenario:
      'Een 22-jarige man komt met hoge koorts en toenemende kortademigheid. Hij was twee weken geleden verkouden, daarna grieperig met koorts, spierpijn en hoofdpijn, knapte kort op en werd daarna snel zieker. Hij is suf maar aanspreekbaar, tachypnoïsch en hypotensief; de X-thorax toont een alveolair-interstitieel beeld.',
    questions: [
      {
        id: '1a',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week3-pneumonie',
        question: 'Welke conclusie past het best bij een alveolair-interstitieel beeld op de thoraxfoto?',
        options: [
          { letter: 'A', text: 'Het maakt een pneumonie als verklaring onwaarschijnlijk' },
          { letter: 'B', text: 'Het past bij ontsteking van één afgebakende longkwab' },
          { letter: 'C', text: 'Het past het vaakst bij een virale of atypische pneumonie' },
          { letter: 'D', text: 'Het past bij een bacteriële superinfectie van de long' },
        ],
        correctAnswer: 'C',
        explanation:
          'Diffuse, niet-lobaire afwijkingen wijzen op een verwekker die vooral het interstitium aandoet; een lobair infiltraat past juist bij ontsteking van één longkwab.',
      },
      {
        id: '1b',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week3-pneumonie',
        question:
          'In het sputum worden veel leukocyten en Gram-positieve coccen gezien. Welke verwekker past hier het best bij?',
        options: [
          { letter: 'A', text: 'Haemophilus influenzae' },
          { letter: 'B', text: 'Staphylococcus aureus' },
          { letter: 'C', text: 'Moraxella catarrhalis' },
          { letter: 'D', text: 'Legionella pneumophila' },
        ],
        correctAnswer: 'B',
        explanation:
          'S. aureus kleurt Gram-positief en is samen met de pneumokok de belangrijkste bacteriële superinfectie na influenza; de andere genoemde verwekkers zijn Gram-negatief.',
      },
      {
        id: '1c',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week3-pneumonie',
        question:
          'Welk empirisch antibioticum past bij een ernstige pneumonie na influenza met verdenking op S. aureus?',
        options: [
          { letter: 'A', text: 'Benzylpenicilline intraveneus' },
          { letter: 'B', text: 'Doxycycline oraal' },
          { letter: 'C', text: 'Amoxicilline oraal' },
          { letter: 'D', text: 'Cefuroxim intraveneus' },
        ],
        correctAnswer: 'D',
        explanation:
          'De empirische keuze moet S. aureus dekken bij een ernstig zieke patiënt; penicilline en amoxicilline doen dat niet en doxycycline is bedoeld voor lichte CAP.',
      },
      {
        id: '1d',
        type: 'open',
        points: 4,
        source: 'ssinterne-week3-pneumonie',
        wordLimit: 70,
        question:
          'De klachten bestaan al langer dan 48 uur, toch wordt oseltamivir gestart. Leg uit waarom dat hier toch gebeurt. Leg daarnaast uit waarom na de kweekuitslag wordt overgestapt op flucloxacilline intraveneus.\n Maximaal 70 woorden.',
        rubric:
          '1p oseltamivir ondanks meer dan 48 uur klachten omdat de patiënt ernstig ziek is en het beeld bij influenza past; 1p je start in afwachting van de virale diagnostiek; 1p flucloxacilline is eerste keus bij een bewezen S. aureus-infectie; 1p intraveneus vanwege de ernst en de bacteriëmie.',
        modelAnswer:
          'Ondanks de duur van de klachten is deze patiënt ernstig ziek en past het beeld bij influenza, dus start je oseltamivir alvast in afwachting van de virale diagnostiek. Als bloed- en sputumkweek S. aureus laten groeien, is flucloxacilline het middel van eerste keus. Vanwege de ernst en de bacteriëmie wordt dat intraveneus gegeven.',
        explanation: 'Inhoudelijk gelijkwaardige formuleringen ook goed rekenen.',
      },
    ],
  },
  {
    id: 'casus-2',
    title: 'Casus 2 – Koorts bij een patiënt met een dwarslaesie',
    totalPoints: 10,
    scenario:
      'Een 28-jarige man met een dwarslaesie wordt vanuit het revalidatiecentrum ingestuurd met koorts en koude rillingen. Hij heeft een atone blaas, katheteriseert zichzelf meerdere keren per dag en had eerder urineweginfecties. Hij is tachycard, hypotensief en tachypnoïsch en maakt een verwarde indruk.',
    questions: [
      {
        id: '2a',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week4-sepsis',
        question: 'Welke drie variabelen vormen samen de qSOFA?',
        options: [
          { letter: 'A', text: 'Ademhalingsfrequentie, bewustzijn en systolische bloeddruk' },
          { letter: 'B', text: 'Temperatuur, hartfrequentie en leukocytengetal' },
          { letter: 'C', text: 'Saturatie, urineproductie en serumlactaat' },
          { letter: 'D', text: 'Bloeddruk, hartfrequentie en capillaire refill' },
        ],
        correctAnswer: 'A',
        explanation:
          'De qSOFA is bewust een bedside-score met drie klinische variabelen die zonder lab te bepalen zijn; de andere combinaties vragen aanvullend onderzoek of horen bij het verlaten SIRS-begrip.',
      },
      {
        id: '2b',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week4-sepsis',
        question: 'Wat is bij deze patiënt het kernverschil tussen sepsis en bacteriëmie?',
        options: [
          { letter: 'A', text: 'Sepsis vereist een positieve bloedkweek, bacteriëmie vereist orgaanschade' },
          { letter: 'B', text: 'Sepsis betekent orgaandysfunctie, bacteriëmie betekent bacteriën in de bloedbaan' },
          { letter: 'C', text: 'Sepsis geeft koude rillingen, bacteriëmie geeft koorts zonder infectiefocus' },
          { letter: 'D', text: 'Sepsis vraagt vasopressoren, bacteriëmie vraagt een orale antibioticakuur' },
        ],
        correctAnswer: 'B',
        explanation:
          'De diagnose sepsis berust op orgaandysfunctie door een ontregelde afweerreactie; bacteriën in het bloed zijn daarvoor niet nodig en ook niet voldoende.',
      },
      {
        id: '2c',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week4-sepsis',
        question: 'Waarom verschilt het empirische antibioticabeleid bij urosepsis per ziekenhuis?',
        options: [
          { letter: 'A', text: 'Omdat de kosten van breedspectrummiddelen per regio verschillen' },
          { letter: 'B', text: 'Omdat de definitie van sepsis per ziekenhuis verschilt' },
          { letter: 'C', text: 'Omdat de beschikbaarheid van bloedkweekflesjes per laboratorium verschilt' },
          { letter: 'D', text: 'Omdat de lokale resistentiepatronen van urinewegpathogenen verschillen' },
        ],
        correctAnswer: 'D',
        explanation:
          'Empirische therapie moet de lokaal meest waarschijnlijke én gevoelige verwekkers dekken; daarom zit ciprofloxacine in sommige ziekenhuizen juist niet in het empirisch beleid.',
      },
      {
        id: '2d',
        type: 'koppelvraag',
        points: 4,
        source: 'ssinterne-week4-sepsis',
        question:
          'Koppel elke omschrijving aan het bijbehorende begrip. Gebruik elk begrip maximaal één keer.\nBegrippen\nA. Sepsis\nB. Bacteriëmie\nC. Septische shock\nD. SIRS',
        items: [
          'a. Aanwezigheid van bacteriën in het bloed',
          'b. Sepsis met vasopressorbehoefte en lactaat > 2 mmol/L',
          'c. Verlaten begrip voor een systemische ontstekingsreactie',
          'd. Levensbedreigende orgaandysfunctie door ontregelde afweerreactie',
        ],
        matchOptions: [
          { letter: 'A', text: 'Sepsis' },
          { letter: 'B', text: 'Bacteriëmie' },
          { letter: 'C', text: 'Septische shock' },
          { letter: 'D', text: 'SIRS' },
        ],
        correctMapping: { 0: 'B', 1: 'C', 2: 'D', 3: 'A' },
        explanation:
          'a→B bacteriëmie, b→C septische shock, c→D SIRS, d→A sepsis. 1 punt per juiste koppeling.',
      },
    ],
  },
  {
    id: 'casus-3',
    title: 'Casus 3 – Oudere vrouw met diarree en een gestegen creatinine',
    totalPoints: 10,
    scenario:
      'Een 78-jarige vrouw heeft sinds vier dagen waterdunne diarree en nauwelijks intake. Zij gebruikt lisinopril, hydrochloorthiazide en ibuprofen. Zij is orthostatisch, heeft droge slijmvliezen en produceert weinig urine. Het creatinine steeg van 78 naar 210 µmol/L.',
    questions: [
      {
        id: '3a',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week4-acute-nierinsufficientie-en-chronische-nierschade',
        question: 'Welke oorzaak van acute nierinsufficiëntie past het best bij dit beeld?',
        options: [
          { letter: 'A', text: 'Renaal door acute tubulo-interstitiële nefritis' },
          { letter: 'B', text: 'Postrenaal door obstructie van de urineafvloed' },
          { letter: 'C', text: 'Prerenaal door verminderde nierperfusie' },
          { letter: 'D', text: 'Renaal door snel progressieve glomerulonefritis' },
        ],
        correctAnswer: 'C',
        explanation:
          'Vochtverlies plus medicatie die de autoregulatie van de nier aantast, verlaagt de perfusie; de nier zelf is dan aanvankelijk nog niet beschadigd.',
      },
      {
        id: '3b',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week4-acute-nierinsufficientie-en-chronische-nierschade',
        question: 'Welke bevinding pleit het sterkst voor al bestaande chronische nierschade?',
        options: [
          { letter: 'A', text: 'Kleine nieren bij echografisch onderzoek' },
          { letter: 'B', text: 'Verhoogd ureum naast verhoogd serumcreatinine' },
          { letter: 'C', text: 'Hyperkaliëmie met bijpassende ECG-afwijkingen' },
          { letter: 'D', text: 'Droge slijmvliezen met orthostatische hypotensie' },
        ],
        correctAnswer: 'A',
        explanation:
          'Nierweefsel dat verloren gaat herstelt niet, waardoor de nieren krimpen; de overige bevindingen passen net zo goed bij een acute ontregeling.',
      },
      {
        id: '3c',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week4-acute-nierinsufficientie-en-chronische-nierschade',
        question: 'Welke bevinding is een directe indicatie voor acute dialyse?',
        options: [
          { letter: 'A', text: 'Een eGFR onder 30 ml/min/1,73 m²' },
          { letter: 'B', text: 'Overvulling die niet reageert op diuretica' },
          { letter: 'C', text: 'Proteïnurie met microscopische hematurie' },
          { letter: 'D', text: 'Creatinine dat binnen vier dagen verdubbelt' },
        ],
        correctAnswer: 'B',
        explanation:
          'Dialyse is geïndiceerd als een levensbedreigende ontregeling niet meer medicamenteus te corrigeren is; de overige bevindingen zijn reden voor verwijzing en diagnostiek, niet voor acute dialyse.',
      },
      {
        id: '3d',
        type: 'open',
        points: 4,
        source: 'ssinterne-week4-acute-nierinsufficientie-en-chronische-nierschade',
        wordLimit: 70,
        question:
          'Noem drie bevindingen bij deze patiënte die passen bij een prerenale oorzaak. Leg daarnaast kort uit waarom kleine nieren op de echo wijzen op chronische nierschade.\n Maximaal 70 woorden.',
        rubric:
          '3p: één punt per juiste prerenale bevinding, maximaal drie — diarree of lage intake, orthostase, droge slijmvliezen, oligurie, gebruik van ACE-remmer, diureticum of NSAID; 1p kleine nieren passen bij langer bestaand verlies van nierweefsel, omdat verloren glomeruli niet herstellen.',
        modelAnswer:
          'Passend bij een prerenale oorzaak zijn de diarree met slechte intake, de orthostase met droge slijmvliezen en de oligurie; ook de combinatie lisinopril, hydrochloorthiazide en ibuprofen verlaagt de effectieve nierperfusie. Kleine nieren wijzen op chronische schade, omdat verloren gegane glomeruli niet herstellen en de nier daardoor in de loop van de tijd krimpt.',
        explanation: 'Inhoudelijk gelijkwaardige formuleringen ook goed rekenen.',
      },
    ],
  },
  {
    id: 'casus-4',
    title: 'Casus 4 – Verwarde vrouw met een laag natrium',
    totalPoints: 10,
    scenario:
      'Een 68-jarige vrouw is sinds enkele dagen toenemend verward. Zij oogt euvolemisch en gebruikt geen diuretica. Het serumnatrium is 118 mmol/L, de serumosmolaliteit 250 mOsm/kg, de urineosmolaliteit 480 mOsm/kg en het urinenatrium 55 mmol/L.',
    questions: [
      {
        id: '4a',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week4-electrolytstoornissen',
        question: 'Welke diagnose past het best bij deze combinatie van uitslagen?',
        options: [
          { letter: 'A', text: 'Pseudohyponatriëmie door verhoogde triglyceriden' },
          { letter: 'B', text: 'Hyperglykemie-geïnduceerde hyponatriëmie' },
          { letter: 'C', text: 'Hypovolemische hyponatriëmie door zoutverlies' },
          { letter: 'D', text: 'SIADH bij een euvolemische patiënt' },
        ],
        correctAnswer: 'D',
        explanation:
          'Een lage serumosmolaliteit met een hoge urineosmolaliteit laat zien dat ADH actief is terwijl het onderdrukt zou moeten zijn; bij pseudohyponatriëmie zou de serumosmolaliteit normaal zijn.',
      },
      {
        id: '4b',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week4-electrolytstoornissen',
        question: 'Welke aanvullende bepalingen zijn nodig voordat SIADH mag worden vastgesteld?',
        options: [
          { letter: 'A', text: 'TSH en cortisol' },
          { letter: 'B', text: 'Ferritine en transferrine' },
          { letter: 'C', text: 'PTH en vitamine D' },
          { letter: 'D', text: 'Renine en aldosteron' },
        ],
        correctAnswer: 'A',
        explanation:
          'Hypothyreoïdie en bijnierinsufficiëntie geven hetzelfde euvolemische beeld; bij hypocortisolisme stijgt de ADH-secretie zelfs, waardoor het op SIADH lijkt.',
      },
      {
        id: '4c',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week4-electrolytstoornissen',
        question: 'Welke behandeling past bij acute, symptomatische hyponatriëmie?',
        options: [
          { letter: 'A', text: 'Waterrestrictie tot 500 ml' },
          { letter: 'B', text: 'Isotoon zout intraveneus' },
          { letter: 'C', text: 'Hypertoon zout intraveneus' },
          { letter: 'D', text: 'Tolvaptan oraal' },
        ],
        correctAnswer: 'C',
        explanation:
          'Alleen hypertoon zout trekt snel genoeg water uit de hersencellen om hersenoedeem te behandelen; isotoon zout kan bij SIADH de hyponatriëmie zelfs verdiepen.',
      },
      {
        id: '4d',
        type: 'open',
        points: 4,
        source: 'ssinterne-week4-electrolytstoornissen',
        wordLimit: 80,
        question:
          'Leg uit waarom de correctiesnelheid bij chronische hyponatriëmie beperkt blijft tot 8 à 10 mmol/L per dag en welke complicatie dreigt bij snellere correctie. Leg daarnaast uit waarom hyperglykemie-geïnduceerde hyponatriëmie geen risico op hersenoedeem geeft.\n Maximaal 80 woorden.',
        rubric:
          '1p de hersenen passen zich aan bij chronische hyponatriëmie; 1p de grens van 8 à 10 mmol/L per dag is een limiet en geen streefwaarde; 1p te snelle correctie geeft osmotische demyelinisatie met neurologische schade; 1p bij hyperglykemie is de hyponatriëmie hyperton, doordat glucose water uit de cellen trekt.',
        modelAnswer:
          'Bij chronische hyponatriëmie hebben de hersencellen zich aangepast aan het lage natrium. Snelle correctie onttrekt dan te snel water en geeft osmotische demyelinisatie, met bijvoorbeeld verlammingen of epilepsie. Daarom geldt maximaal 8 à 10 mmol/L per dag als limiet, niet als streefwaarde. Bij hyperglykemie is de hyponatriëmie juist hyperton: glucose trekt water uit de cellen, zodat hersenoedeem niet dreigt.',
        explanation: 'Inhoudelijk gelijkwaardige formuleringen ook goed rekenen.',
      },
    ],
  },
  {
    id: 'casus-5',
    title: 'Casus 5 – Jonge man met diabetes type 1 en Kussmaul-ademhaling',
    totalPoints: 10,
    scenario:
      'Een 19-jarige man met diabetes mellitus type 1 is misselijk, braakt en ademt diep en snel. Hij heeft zijn insuline enkele dagen niet gebruikt. Het glucose is 32 mmol/L, de pH 7,15, het bicarbonaat 8 mmol/L, het kalium 5,2 mmol/L en het natrium 128 mmol/L.',
    questions: [
      {
        id: '5a',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week3-diabetes-typen-behandeling-keto-acidose',
        question:
          'Welk kenmerk onderscheidt diabetische keto-acidose van het hyperosmolair hyperglykemisch syndroom?',
        options: [
          { letter: 'A', text: 'Een verlaagd bewustzijnsniveau' },
          { letter: 'B', text: 'Ketonen met een metabole acidose' },
          { letter: 'C', text: 'Een sterk verhoogde plasmaosmolaliteit' },
          { letter: 'D', text: 'Een glucose boven 30 mmol/L' },
        ],
        correctAnswer: 'B',
        explanation:
          'Bij absolute insulinedeficiëntie ontstaat vetafbraak met ketonvorming en dus acidose; bij HHS staat juist de hyperosmolariteit voorop en zijn ketonen meestal afwezig.',
      },
      {
        id: '5b',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week3-diabetes-typen-behandeling-keto-acidose',
        question: 'Wat is de eerste stap in de behandeling van deze patiënt?',
        options: [
          { letter: 'A', text: 'Insuline intraveneus starten' },
          { letter: 'B', text: 'Bicarbonaat toedienen' },
          { letter: 'C', text: 'Kalium suppleren' },
          { letter: 'D', text: 'Vocht toedienen' },
        ],
        correctAnswer: 'D',
        explanation:
          'Deze patiënten zijn fors gedehydreerd, dus herstel van de circulatie gaat voor; bicarbonaat heeft bij keto-acidose meestal geen toegevoegde waarde.',
      },
      {
        id: '5c',
        type: 'rekenvraag',
        points: 3,
        source: 'ssinterne-week4-electrolytstoornissen',
        question:
          'Bereken het gecorrigeerde serumnatrium van deze patiënt. Ga uit van een referentiewaarde voor glucose van 5 mmol/L en van de vuistregel dat het serumnatrium met 3 mmol/L daalt per 10 mmol/L stijging van het glucose. Rond af op één decimaal.',
        correctValue: 136.1,
        tolerance: 0.3,
        unit: ' mmol/L',
        rubric:
          '1p glucosestijging 32 − 5 = 27 mmol/L; 1p correctie 27/10 × 3 = 8,1 mmol/L; 1p gecorrigeerd natrium 128 + 8,1 = 136,1 mmol/L.',
        modelAnswer:
          'De glucose ligt 32 − 5 = 27 mmol/L boven de referentiewaarde. De natriumcorrectie is dan 27/10 × 3 = 8,1 mmol/L. Het gecorrigeerde serumnatrium is 128 + 8,1 = 136,1 mmol/L, dus in werkelijkheid vrijwel normaal.',
        explanation:
          'De hyponatriëmie is hier het gevolg van waterverplaatsing door de hoge glucose en niet van een echt natriumtekort.',
      },
      {
        id: '5d',
        type: 'open',
        points: 3,
        source: 'ssinterne-week3-diabetes-typen-behandeling-keto-acidose',
        wordLimit: 50,
        question:
          'Leg uit waarom bij deze patiënt insuline pas wordt gestart als het kalium bekend is.\n Maximaal 50 woorden.',
        rubric:
          '1p insuline verplaatst kalium van extracellulair naar intracellulair; 1p daardoor kan een hypokaliëmie ontstaan of verergeren; 1p daarom eerst kalium bepalen en zo nodig suppleren voordat insuline start.',
        modelAnswer:
          'Insuline verplaatst kalium naar het intracellulaire compartiment. Het gemeten kalium kan daardoor snel dalen, ook als het bij binnenkomst nog normaal of hoog lijkt. Een ernstige hypokaliëmie is gevaarlijk, dus bepaal eerst het kalium en suppleer zo nodig voordat je insuline geeft.',
        explanation: 'Inhoudelijk gelijkwaardige formuleringen ook goed rekenen.',
      },
    ],
  },
]
