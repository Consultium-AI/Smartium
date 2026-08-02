/**
 * Interne Geneeskunde — oefententamen 2, casussen 1–5 (50 p)
 * Gebouwd volgens de House Standard v2.0 (docs/OEFENTENTAMEN-GENERATOR-v2.md).
 * Geen onderwerpoverlap met oefententamen 1.
 */

export const ssinterneTentamen2PartA = [
  {
    id: 'casus-1',
    title: 'Casus 1 – Man met jarenlange kortademigheid en chronische hoest',
    totalPoints: 10,
    scenario:
      'Een 64-jarige man heeft na 45 jaar roken sinds jaren toenemende kortademigheid met chronische hoest en sputum. Na luchtwegverwijding is de FEV1/FVC 0,58 en de FEV1 45% van voorspeld. De zuurstofspanning is 7,6 kPa. Hij is drie maanden geleden gestopt met roken.',
    questions: [
      {
        id: '1a',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week3-copd',
        question: 'Welke uitslag bevestigt de luchtwegobstructie bij COPD?',
        options: [
          { letter: 'A', text: 'Een FEV1 onder 50% van voorspeld' },
          { letter: 'B', text: 'Een FEV1/FVC onder 0,70 na bronchusverwijding' },
          { letter: 'C', text: 'Een totale longcapaciteit boven de norm' },
          { letter: 'D', text: 'Een diffusiecapaciteit onder 60% van voorspeld' },
        ],
        correctAnswer: 'B',
        explanation:
          'De ratio laat zien hoe moeilijk de lucht de longen uit stroomt en bevestigt daarmee de obstructie; de FEV1 alleen zegt iets over de ernst, niet over het bestaan ervan.',
      },
      {
        id: '1b',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week3-copd',
        question: 'Welke bevinding past juist bij astma en niet bij COPD?',
        options: [
          { letter: 'A', text: 'Een verlengd expirium bij auscultatie' },
          { letter: 'B', text: 'Een tonthorax door hyperinflatie' },
          { letter: 'C', text: 'Chronische sputumproductie bij hoesten' },
          { letter: 'D', text: 'Reversibiliteit van 200 ml en 12%' },
        ],
        correctAnswer: 'D',
        explanation:
          'Bij COPD is de obstructie niet of nauwelijks omkeerbaar; een duidelijke respons op luchtwegverwijding wijst daarom naar astma.',
      },
      {
        id: '1c',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week3-copd',
        question: 'Wanneer komt deze patiënt in aanmerking voor zuurstoftherapie?',
        options: [
          { letter: 'A', text: 'Bij een zuurstofspanning onder 8 kPa' },
          { letter: 'B', text: 'Bij een FEV1 onder 30% van voorspeld' },
          { letter: 'C', text: 'Bij een mMRC-score van 3 of hoger' },
          { letter: 'D', text: 'Bij twee exacerbaties in het afgelopen jaar' },
        ],
        correctAnswer: 'A',
        explanation:
          'De indicatie hangt af van de zuurstofspanning en niet van longfunctie of klachten; voorwaarde is wel dat de patiënt gestopt is met roken.',
      },
      {
        id: '1d',
        type: 'open',
        points: 4,
        source: 'ssinterne-week3-copd',
        wordLimit: 70,
        question:
          'Leg uit hoe roken bij COPD via elastase leidt tot verlies van alveolair oppervlak. Leg daarnaast uit welke rol alfa-1-antitrypsine daarbij speelt.\n Maximaal 70 woorden.',
        rubric:
          '1p sigarettenrook geeft een ontstekingsreactie waarbij de productie van elastase toeneemt; 1p elastase breekt elastische vezels af en beschadigt alveolaire structuren en septa; 1p daardoor daalt het alveolair oppervlak en ontstaat een diffusiestoornis; 1p alfa-1-antitrypsine remt elastase, dus bij deficiëntie ontstaat sneller en uitgebreider longschade.',
        modelAnswer:
          'Sigarettenrook lokt een chronische ontstekingsreactie uit waarbij meer elastase vrijkomt. Elastase breekt de elastische vezels af en beschadigt alveolaire structuren en septa, waardoor bullae kunnen ontstaan. Het alveolair oppervlak neemt af en er ontstaat een diffusiestoornis met zuurstofgebrek. Alfa-1-antitrypsine remt elastase normaal af; bij een deficiëntie ontstaat de longschade daarom sneller en uitgebreider.',
        explanation: 'Inhoudelijk gelijkwaardige formuleringen ook goed rekenen.',
      },
    ],
  },
  {
    id: 'casus-2',
    title: 'Casus 2 – Oudere man met dyspnoe, oedeem en gewichtstoename',
    totalPoints: 10,
    scenario:
      'Een 71-jarige man heeft sinds maanden toenemende kortademigheid, moeheid en enkeloedeem. Hij hoest vooral ’s nachts en is 4 kg aangekomen. Er zijn crepitaties over beide longvelden en een derde harttoon. Het NT-proBNP is verhoogd en de echocardiografie toont een linkerventrikelejectiefractie van 30%.',
    questions: [
      {
        id: '2a',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week3-decompensatio-cordis',
        question: 'Welke indeling past bij een ejectiefractie van 30%?',
        options: [
          { letter: 'A', text: 'HFmrEF' },
          { letter: 'B', text: 'HFpEF' },
          { letter: 'C', text: 'HFrEF' },
          { letter: 'D', text: 'NYHA III' },
        ],
        correctAnswer: 'C',
        explanation:
          'Onder de 40% spreek je van hartfalen met verminderde ejectiefractie; NYHA beschrijft de klachtenlast en niet de pompfunctie.',
      },
      {
        id: '2b',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week3-decompensatio-cordis',
        question: 'Welk onderzoek toont hartfalen objectief aan en typeert het?',
        options: [
          { letter: 'A', text: 'Bepaling van het NT-proBNP' },
          { letter: 'B', text: 'Echocardiografie van het hart' },
          { letter: 'C', text: 'Een rust-ECG in twaalf afleidingen' },
          { letter: 'D', text: 'Een X-thorax in twee richtingen' },
        ],
        correctAnswer: 'B',
        explanation:
          'Alleen echocardiografie laat pompfunctie, vulling, kleppen en afmetingen tegelijk zien; NT-proBNP ondersteunt de diagnose maar typeert het hartfalen niet.',
      },
      {
        id: '2c',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week3-decompensatio-cordis',
        question: 'Waarom hoort zoutbeperking bij de behandeling van hartfalen?',
        options: [
          { letter: 'A', text: 'Omdat zout de hartfrequentie direct verhoogt' },
          { letter: 'B', text: 'Omdat zout de contractiekracht van het hart remt' },
          { letter: 'C', text: 'Omdat zout de werking van diuretica blokkeert' },
          { letter: 'D', text: 'Omdat zout ervoor zorgt dat je vocht vasthoudt' },
        ],
        correctAnswer: 'D',
        explanation:
          'Vastgehouden vocht vergroot de volumebelasting van een hart dat die belasting juist niet meer aankan; daarom hoort zoutbeperking bij de leefstijladviezen.',
      },
      {
        id: '2d',
        type: 'koppelvraag',
        points: 4,
        source: 'ssinterne-week3-decompensatio-cordis',
        question:
          'Koppel elke middelgroep aan de bijbehorende rol bij systolisch hartfalen. Gebruik elke rol maximaal één keer.\nRollen\nA. Remmen de werking van aldosteron\nB. Verminderen vochtretentie\nC. Remmen de overactiviteit van het sympathisch zenuwstelsel\nD. Beïnvloeden het RAAS',
        items: [
          'a. Betablokkers',
          'b. ACE-remmers',
          'c. Mineralocorticoïdreceptorantagonisten',
          'd. Diuretica',
        ],
        matchOptions: [
          { letter: 'A', text: 'Remmen de werking van aldosteron' },
          { letter: 'B', text: 'Verminderen vochtretentie' },
          { letter: 'C', text: 'Remmen de overactiviteit van het sympathisch zenuwstelsel' },
          { letter: 'D', text: 'Beïnvloeden het RAAS' },
        ],
        correctMapping: { 0: 'C', 1: 'D', 2: 'A', 3: 'B' },
        explanation:
          'a→C betablokkers, b→D ACE-remmers, c→A mineralocorticoïdreceptorantagonisten, d→B diuretica. 1 punt per juiste koppeling.',
      },
    ],
  },
  {
    id: 'casus-3',
    title: 'Casus 3 – Koorts en een nieuw infiltraat vier dagen na een operatie',
    totalPoints: 10,
    scenario:
      'Een 74-jarige man ligt vier dagen op de afdeling na een heupoperatie en ontwikkelt koorts, hoesten en een nieuw infiltraat op de thoraxfoto. Hij is bekend met MRSA-dragerschap na een eerdere opname in een buitenlands ziekenhuis. De nierfunctie is normaal.',
    questions: [
      {
        id: '3a',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week4-antibiotica-en-antimicrobiele-resistentie-2',
        question: 'Hoe wordt deze pneumonie ingedeeld?',
        options: [
          { letter: 'A', text: 'Als hospital acquired pneumonia' },
          { letter: 'B', text: 'Als community acquired pneumonia' },
          { letter: 'C', text: 'Als aspiratiepneumonie na narcose' },
          { letter: 'D', text: 'Als ventilator associated pneumonia' },
        ],
        correctAnswer: 'A',
        explanation:
          'De pneumonie ontstond na meer dan 48 uur opname, waardoor je ziekenhuisflora met resistentere gramnegatieve staven moet verwachten.',
      },
      {
        id: '3b',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week4-antibiotica-en-antimicrobiele-resistentie-2',
        question: 'Welke empirische behandeling hoort volgens de richtlijn bij deze pneumonie?',
        options: [
          { letter: 'A', text: 'Amoxicilline oraal' },
          { letter: 'B', text: 'Doxycycline oraal' },
          { letter: 'C', text: 'Piperacilline-tazobactam intraveneus' },
          { letter: 'D', text: 'Benzylpenicilline intraveneus' },
        ],
        correctAnswer: 'C',
        explanation:
          'Bij ziekenhuisflora moet het spectrum breed genoeg zijn om ook Pseudomonas en Enterobacterales te dekken; de smalspectrummiddelen missen die dekking.',
      },
      {
        id: '3c',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week4-antibiotica-en-antimicrobiele-resistentie-2',
        question:
          'Later volgt een geplande heupprothese. Welk middel geeft profylaxe die ook zijn MRSA dekt?',
        options: [
          { letter: 'A', text: 'Cefazoline' },
          { letter: 'B', text: 'Vancomycine' },
          { letter: 'C', text: 'Gentamicine' },
          { letter: 'D', text: 'Flucloxacilline' },
        ],
        correctAnswer: 'B',
        explanation:
          'MRSA is ongevoelig voor alle bètalactams, dus cefazoline en flucloxacilline vallen af; gentamicine is als monotherapie ongeschikt tegen S. aureus.',
      },
      {
        id: '3d',
        type: 'open',
        points: 4,
        source: 'ssinterne-week4-antibiotica-en-antimicrobiele-resistentie-2',
        wordLimit: 70,
        question:
          'Leg uit waarom een zo smal mogelijk spectrum en een zo kort mogelijke behandelduur belangrijk zijn. Noem daarnaast twee taken van een antibioticateam.\n Maximaal 70 woorden.',
        rubric:
          '2p breed en langdurig gebruik selecteert resistente bacteriën, waardoor infecties moeilijker behandelbaar worden en opnameduur en sterfte toenemen; 1p eerste juiste taak van een antibioticateam; 1p tweede juiste taak van een antibioticateam.',
        modelAnswer:
          'Hoe breder en langer je behandelt, hoe meer resistente bacteriën worden geselecteerd. Infecties worden daardoor moeilijker te behandelen, met langere opnames, duurdere zorg en meer sterfte. Een antibioticateam bewaakt bijvoorbeeld het gebruik van reserve-antibiotica en controleert of het lokale beleid wordt gevolgd; ook stimuleert het de i.v.-orale switch en het tijdig stoppen van antibiotica.',
        explanation: 'Inhoudelijk gelijkwaardige formuleringen ook goed rekenen.',
      },
    ],
  },
  {
    id: 'casus-4',
    title: 'Casus 4 – Vrouw met lithiumgebruik en een urineweginfectie',
    totalPoints: 10,
    scenario:
      'Een 66-jarige vrouw gebruikt al jaren lithium wegens een bipolaire stoornis. Haar eGFR is gedaald tot 23 mL/min. Zij heeft nu branderige mictie met stinkende urine, leukocyturie en een positieve nitriettest. Zij is niet zwanger.',
    questions: [
      {
        id: '4a',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week4-nierfunctie-en-medicatie',
        question: 'Waarom is nitrofurantoïne bij deze patiënte niet geschikt?',
        options: [
          { letter: 'A', text: 'Omdat het de lithiumspiegel sterk verhoogt' },
          { letter: 'B', text: 'Omdat het de nierfunctie verder verslechtert' },
          { letter: 'C', text: 'Omdat het bij deze klaring resistentie geeft' },
          { letter: 'D', text: 'Omdat het onvoldoende in de urine terechtkomt' },
        ],
        correctAnswer: 'D',
        explanation:
          'Onder een klaring van 30 mL/min bereikt het middel geen werkzame concentratie in de urine, terwijl het zich juist in het bloed ophoopt met risico op neuropathie.',
      },
      {
        id: '4b',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week4-nierfunctie-en-medicatie',
        question: 'Welk alternatief past hier, en in welke dosering?',
        options: [
          { letter: 'A', text: 'Fosfomycine, eenmalig 3 gram' },
          { letter: 'B', text: 'Ciprofloxacine, vijf dagen tweemaal daags' },
          { letter: 'C', text: 'Amoxicilline, zeven dagen driemaal daags' },
          { letter: 'D', text: 'Trimethoprim, drie dagen eenmaal daags' },
        ],
        correctAnswer: 'A',
        explanation:
          'Bij een klaring boven 10 mL/min blijft fosfomycine ongeveer 48 uur boven de MIC in de urine, waardoor één gift voldoende is bij een ongecompliceerde infectie.',
      },
      {
        id: '4c',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week4-nierfunctie-en-medicatie',
        question: 'Zij krijgt een acute jichtaanval. Welke behandeling past bij haar nierfunctie?',
        options: [
          { letter: 'A', text: 'Een NSAID in hoge dosering' },
          { letter: 'B', text: 'Allopurinol direct starten' },
          { letter: 'C', text: 'Colchicine tweemaal daags 0,5 mg' },
          { letter: 'D', text: 'Een urinezuurverlagend dieet' },
        ],
        correctAnswer: 'C',
        explanation:
          'NSAID’s zijn bij deze nierfunctie gecontra-indiceerd en allopurinol hoort pas na het tot rust komen van de aanval; colchicine remt wel direct de gewrichtsontsteking.',
      },
      {
        id: '4d',
        type: 'open',
        points: 4,
        source: 'ssinterne-week4-nierfunctie-en-medicatie',
        wordLimit: 70,
        question:
          'Haar huisarts wil hydrochloorthiazide toevoegen wegens hypertensie. Leg uit waarom die combinatie bij deze patiënte gevaarlijk is en betrek daarbij het begrip nauwe therapeutische index.\n Maximaal 70 woorden.',
        rubric:
          '1p hydrochloorthiazide verhoogt de terugresorptie van lithium in de nier van ongeveer 80% naar 90%; 1p daardoor halveert de klaring en kan de lithiumspiegel verdubbelen; 1p een nauwe therapeutische index betekent dat de veilige en de toxische spiegel dicht bij elkaar liggen; 1p een kleine stijging geeft daardoor al ernstige toxiciteit.',
        modelAnswer:
          'Hydrochloorthiazide verhoogt de terugresorptie van lithium in de nier van ongeveer 80% naar 90%. Daardoor halveert de klaring en kan de lithiumspiegel in principe verdubbelen. Lithium heeft een nauwe therapeutische index: de veilige en de toxische spiegel liggen dicht bij elkaar. Een relatief kleine stijging van de spiegel kan daardoor al ernstige toxiciteit geven.',
        explanation: 'Inhoudelijk gelijkwaardige formuleringen ook goed rekenen.',
      },
    ],
  },
  {
    id: 'casus-5',
    title: 'Casus 5 – Evaluatie van een nieuwe sneltest in het laboratorium',
    totalPoints: 10,
    scenario:
      'Een laboratorium evalueert een nieuwe sneltest en let daarbij ook op de kwaliteit van de monsters. Bij 250 patiënten met de bewezen aandoening is de test 200 keer positief en 50 keer negatief. Van een van de ingestuurde buizen meldt het laboratorium dat het monster hemolytisch is.',
    questions: [
      {
        id: '5a',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week4-klinische-chemie-in-de-praktijk',
        question: 'Wat is het verschil tussen serum en plasma?',
        options: [
          { letter: 'A', text: 'Serum bevat meer trombocyten dan plasma' },
          { letter: 'B', text: 'Serum bevat geen stollingsfactoren meer' },
          { letter: 'C', text: 'Plasma ontstaat pas na stolling' },
          { letter: 'D', text: 'Plasma bevat minder eiwitten dan serum' },
        ],
        correctAnswer: 'B',
        explanation:
          'Serum blijft over nádat het bloed heeft gestold, dus de stollingsfactoren zijn verbruikt; in plasma is de stolling met een additief juist tegengegaan.',
      },
      {
        id: '5b',
        type: 'meerkeuze',
        points: 2,
        source: 'ssinterne-week4-klinische-chemie-in-de-praktijk',
        question: 'Welke marker is het specifiekst voor leverschade?',
        options: [
          { letter: 'A', text: 'ASAT' },
          { letter: 'B', text: 'Alkalische fosfatase' },
          { letter: 'C', text: 'LDH' },
          { letter: 'D', text: 'ALAT' },
        ],
        correctAnswer: 'D',
        explanation:
          'ASAT is gevoelig maar komt ook buiten de lever voor; ALAT wijst sterker op de lever zelf en past dus beter als je de diagnose wilt bevestigen.',
      },
      {
        id: '5c',
        type: 'rekenvraag',
        points: 3,
        source: 'ssinterne-week4-klinische-chemie-in-de-praktijk',
        question:
          'Bereken de sensitiviteit van de nieuwe sneltest in procenten. Gebruik de formule sensitiviteit = terecht-positieven / (terecht-positieven + vals-negatieven). Rond af op één decimaal.',
        correctValue: 80,
        tolerance: 0.5,
        unit: ' %',
        rubric:
          '1p terecht-positieven = 200; 1p vals-negatieven = 50; 1p sensitiviteit = 200 / 250 × 100 = 80,0%.',
        modelAnswer:
          'Van de 250 patiënten met de aandoening is de test 200 keer positief; dat zijn de terecht-positieven. De overige 50 zijn vals-negatief. De sensitiviteit is dan 200 / (200 + 50) × 100 = 80,0%. De test mist dus één op de vijf zieke patiënten.',
        explanation:
          'Een sensitiviteit van 80% betekent dat de test bij deze aandoening niet geschikt is om de diagnose met zekerheid uit te sluiten.',
      },
      {
        id: '5d',
        type: 'open',
        points: 3,
        source: 'ssinterne-week4-klinische-chemie-in-de-praktijk',
        wordLimit: 60,
        question:
          'Leg uit wat het verschil is tussen juistheid en precisie. Leg daarnaast uit waarom een hemolytisch monster een uitslag onbetrouwbaar maakt.\n Maximaal 60 woorden.',
        rubric:
          '1p juistheid is hoe dicht een gemeten waarde bij de werkelijke waarde ligt; 1p precisie is hoe goed herhaalde metingen onderling overeenkomen; 1p bij hemolyse komt de inhoud van kapotte erytrocyten in het monster, waardoor de uitslag vals verhoogd of vals verlaagd kan zijn.',
        modelAnswer:
          'Juistheid gaat over de afstand tot de werkelijke waarde: benadert de meting de echte waarde? Precisie gaat over herhaalbaarheid: komen herhaalde metingen onderling overeen. Bij hemolyse gaan erytrocyten kapot en komt hun inhoud in het monster terecht. Daardoor kan de uitslag vals verhoogd of vals verlaagd zijn, terwijl hij betrouwbaar lijkt.',
        explanation: 'Inhoudelijk gelijkwaardige formuleringen ook goed rekenen.',
      },
    ],
  },
]
