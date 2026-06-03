/** Blok 5 oefententamen 3 — casussen 1–3 (bron: Blok 5 tentamen 3.docx; 130 punten totaal) */

export const blok5Tentamen3PartA = [
  {
    id: 'casus-1',
    title: 'Casus 1 – Derma onco / PCC',
    totalPoints: 16,
    scenario:
      'Een 64-jarige man komt op het spreekuur omdat zijn partner een aantal nieuwe huidafwijkingen heeft opgemerkt op de handrug en in het gelaat. Hij heeft geen voorgeschiedenis met huidkanker. Hij werkte jarenlang buiten.',
    questions: [
      {
        id: '1a',
        type: 'meerkeuze',
        points: 2.0,
        question:
          'De huisarts beoordeelt de huidafwijkingen systematisch.\nWelk onderdeel van PROVOKE beschrijft het best de term "keratotisch"?',
        options: [
          { letter: 'A', text: 'Plaats' },
          { letter: 'B', text: 'Vorm' },
          { letter: 'C', text: 'Kleur' },
          { letter: 'D', text: 'Efflorescentie' },
        ],
        correctAnswer: 'D',
        explanation:
          'Keratotisch beschrijft het oppervlak / de laesie zelf. PROVOKE wordt gebruikt voor systematische beschrijving van huidafwijkingen.',
      },
      {
        id: '1b',
        type: 'meerdere_antwoorden',
        points: 2.0,
        requireExactSet: true,
        question:
          'Op de handrug ziet de huisarts een ruw aanvoelende, erythemateuze, schilferende laesie op zonbeschadigde huid. De dermatoloog beoordeelt deze in één oogopslag als actinische keratose.\nWelke therapieën zijn, naast expectatief beleid, passend voor actinische keratosen?',
        options: [
          { letter: 'A', text: 'Cryotherapie' },
          { letter: 'B', text: 'Efudix / 5-fluorouracilcrème' },
          { letter: 'C', text: 'Mohs micrografische chirurgie' },
          { letter: 'D', text: 'Radiotherapie' },
          { letter: 'E', text: 'Imiquimodcrème' },
        ],
        correctAnswers: ['A', 'B'],
        explanation:
          'Cryotherapie en 5-fluorouracilcrème zijn passend. Mohs en radiotherapie zijn niet geïndiceerd voor premaligne huidafwijkingen.',
      },
      {
        id: '1c',
        type: 'meerkeuze',
        points: 2.0,
        question:
          'Op het onderbeen ziet de huisarts een 0,6 cm grote rood-bruine vaste nodulus met een positief dimple sign.\nWat is de meest waarschijnlijke diagnose?',
        options: [
          { letter: 'A', text: 'Lipoom' },
          { letter: 'B', text: 'Basaalcelcarcinoom' },
          { letter: 'C', text: 'Dermatofibroom' },
          { letter: 'D', text: 'Morbus Bowen' },
        ],
        correctAnswer: 'C',
        explanation: 'Het positieve dimple sign past klassiek bij een dermatofibroom.',
      },
      {
        id: '1d',
        type: 'beeldvraag',
        points: 2.0,
        gradingMethod: 'ai',
        question:
          'Bij een huidafwijking onder het rechteroog wordt het volgende gezien: solitaire, huidkleurig tot licht erythemateuze papel met glanzend aspect en teleangiëctasieën.\nWat is de meest waarschijnlijke diagnose? Geef antwoord in maximaal twee woorden.',
        rubric: 'Glanzend aspect en teleangiëctasieën passen het best bij basaalcelcarcinoom (BCC).',
        modelAnswer: 'basaalcelcarcinoom',
        explanation: 'Glanzend aspect en teleangiëctasieën passen het best bij BCC.',
      },
      {
        id: '1e',
        type: 'meerkeuze',
        points: 2.0,
        question:
          'Op de slaap wordt een ulcererende, pijnlijke tumor gezien. Histopathologie toont een plaveiselcelcarcinoom van 1,8 cm, slecht gedifferentieerd, met een invasiediepte van 7 mm.\nWat is op basis van de gegeven AJCC-logica de juiste T-classificatie?',
        options: [
          { letter: 'A', text: 'T1' },
          { letter: 'B', text: 'T2' },
          { letter: 'C', text: 'T3' },
          { letter: 'D', text: 'T4a' },
        ],
        correctAnswer: 'C',
        explanation: 'Diepe invasie > 6 mm past in de gegeven AJCC-logica bij T3.',
      },
      {
        id: '1f',
        type: 'meerdere_antwoorden',
        points: 2.0,
        requireExactSet: true,
        question: 'Welke factoren zijn risicofactoren voor het ontstaan van huidkanker?',
        options: [
          { letter: 'A', text: 'UV-blootstelling' },
          { letter: 'B', text: 'Roken' },
          { letter: 'C', text: 'HPV' },
          { letter: 'D', text: 'Huidtype V volgens Fitzpatrick' },
          { letter: 'E', text: 'Eerdere radiotherapie' },
          { letter: 'F', text: 'Hypertensie' },
        ],
        correctAnswers: ['A', 'B', 'C', 'E'],
        explanation:
          'UV-blootstelling, roken, HPV en eerdere radiotherapie zijn genoemde risicofactoren voor huidkanker, vooral SCC.',
      },
      {
        id: '1g',
        type: 'open',
        points: 4.0,
        question:
          'Een 58-jarige man ondergaat 2 jaar geleden een niertransplantatie en gebruikt sindsdien langdurig meerdere immunosuppressiva. Hij ontwikkelt nu meerdere plaveiselcelcarcinomen.\nNoem vier factoren die volgens de stof bijdragen aan het sterk verhoogde risico op PCC na orgaantransplantatie.',
        wordLimit: 50,
        rubric:
          'Score: 1p per juiste factor, max 4p. Mogelijke goede antwoorden: langere duur immunosuppressie, hogere dosis, combinatie van meerdere immunosuppressiva, eerdere/onbeschermde UV-blootstelling, witte huid, leeftijd ≥50 bij transplantatie, mannelijk geslacht, voorgeschiedenis huidkanker, hart-/longtransplantatie.',
        modelAnswer:
          'Belangrijke risicofactoren zijn langere duur van immunosuppressie, hogere dosering, gebruik van meerdere immunosuppressiva tegelijk en eerdere onbeschermde UV-blootstelling.',
        explanation: '1p per juiste factor, max 4p.',
      },
    ],
  },
  {
    id: 'casus-2',
    title: 'Casus 2 – Psoriasis',
    totalPoints: 14,
    scenario:
      'Een 17-jarige jongen komt op het spreekuur met sinds enkele maanden jeukende, scherp begrensde erythemateuze huidafwijkingen met schilfering op romp en extremiteiten. Hij schaamt zich hiervoor.',
    questions: [
      {
        id: '2a',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Wat is de primaire efflorescentie bij psoriasis vulgaris?',
        options: [
          { letter: 'A', text: 'Maculae' },
          { letter: 'B', text: 'Papels en plaques' },
          { letter: 'C', text: 'Noduli' },
          { letter: 'D', text: 'Excoriaties' },
        ],
        correctAnswer: 'B',
        explanation: 'Psoriasis vulgaris presenteert zich primair met papels en plaques.',
      },
      {
        id: '2b',
        type: 'meerdere_antwoorden',
        points: 2.0,
        requireExactSet: true,
        question:
          'Bij lichamelijk onderzoek van een patiënt met psoriasis is het belangrijk extra goed te letten op:',
        options: [
          { letter: 'A', text: 'Nagels' },
          { letter: 'B', text: 'Gewrichten' },
          { letter: 'C', text: 'Ogen' },
          { letter: 'D', text: 'Oren' },
          { letter: 'E', text: 'Haren' },
        ],
        correctAnswers: ['A', 'B', 'C'],
        explanation: 'Nagelafwijkingen, gewrichtsklachten en ogen (uveitis) zijn relevant in het psoriasisspectrum.',
      },
      {
        id: '2c',
        type: 'meerdere_antwoorden',
        points: 2.0,
        requireExactSet: true,
        question:
          'De patiënt heeft al meerdere topicale therapieën gehad met onvoldoende effect. Er zijn geen contra-indicaties.\nVoor welke systemische therapieën komt hij nu in aanmerking?',
        options: [
          { letter: 'A', text: 'Methotrexaat' },
          { letter: 'B', text: 'Ciclosporine' },
          { letter: 'C', text: 'Acitretine' },
          { letter: 'D', text: 'Lichttherapie' },
          { letter: 'E', text: 'Adalimumab' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        explanation:
          'Bij onvoldoende effect van topicaal komen systemische therapie en lichttherapie in aanmerking; biologics zijn niet per se de eerstvolgende stap.',
      },
      {
        id: '2d',
        type: 'koppelvraag',
        points: 2.0,
        question:
          "Een 43-jarige vrouw, moeder van deze patiënt, heeft sinds 8 weken pijn en zwelling van meerdere gewrichten. Ze heeft vooral 's nachts last en ochtendstijfheid gedurende meer dan 1 uur.\nGeef voor elk symptoom aan of het meer past bij inflammatoire of niet-inflammatoire gewrichtsklachten.",
        items: [
          'Ochtendstijfheid > 1 uur',
          'Nachtelijke pijn',
          'Zwelling van gewrichten',
          'Geen verbetering na nachtrust',
        ],
        matchOptions: [
          { letter: 'A', text: 'Inflammatoir' },
          { letter: 'B', text: 'Niet-inflammatoir' },
        ],
        correctMapping: { 0: 'A', 1: 'A', 2: 'A', 3: 'A' },
        explanation: 'Alle genoemde symptomen passen bij inflammatoire gewrichtsklachten.',
      },
      {
        id: '2e',
        type: 'beeldvraag',
        points: 2.0,
        gradingMethod: 'ai',
        question:
          'Wat is de meest waarschijnlijke diagnose voor de gewrichtsklachten van de moeder? Geef antwoord in maximaal twee woorden.',
        rubric: 'Psoriasiscontext, inflammatoir patroon → psoriatische artritis.',
        modelAnswer: 'psoriatische artritis',
        explanation: 'Klinisch: psoriasiscontext, inflammatoir patroon → psoriatische artritis.',
      },
      {
        id: '2f',
        type: 'koppelvraag',
        points: 2.0,
        question: 'Sleep de juiste diagnose naar patiënt 1, 2 of 3.',
        items: [
          'Patiënt 1: tientallen kleine druppelvormige erythemateuze schilferende laesies na keelontsteking',
          'Patiënt 2: scherp begrensde plaques met schilfering op strekzijden',
          'Patiënt 3: erytheem in huidplooien, weinig schilfering',
        ],
        matchOptions: [
          { letter: 'A', text: 'Psoriasis guttata' },
          { letter: 'B', text: 'Psoriasis inversa' },
          { letter: 'C', text: 'Psoriasis vulgaris' },
        ],
        correctMapping: { 0: 'A', 1: 'C', 2: 'B' },
        explanation: 'Patiënt 1 → guttata; patiënt 2 → vulgaris; patiënt 3 → inversa.',
      },
      {
        id: '2g',
        type: 'koppelvraag',
        points: 2.0,
        question: 'Match elk klinisch kenmerk van psoriasis vulgaris met het best passende histologische kenmerk.',
        items: ['Schilfering', 'Erytheem', 'Pustels'],
        matchOptions: [
          { letter: 'A', text: 'Parakeratose' },
          { letter: 'B', text: 'Gedilateerde capillairen / vasodilatatie' },
          { letter: 'C', text: 'Epidermale collectie neutrofielen' },
        ],
        correctMapping: { 0: 'A', 1: 'B', 2: 'C' },
        explanation: 'Schilfering → parakeratose; erytheem → vasodilatatie; pustels → neutrofielen.',
      },
    ],
  },
  {
    id: 'casus-3',
    title: 'Casus 3 – Melanoom',
    totalPoints: 12,
    scenario:
      'Een 72-jarige man is door de dermatoloog verwezen naar de chirurg nadat op de rechterbovenarm een melanoom is verwijderd. Het pathologieverslag luidt: nodulair melanoom, Breslow dikte 2,9 mm, radicaal verwijderd, minimale marge 2 mm.',
    questions: [
      {
        id: '3a',
        type: 'meerdere_antwoorden',
        points: 2.0,
        requireExactSet: true,
        question: 'Welke vervolgstappen bespreekt de chirurg met de patiënt?',
        options: [
          { letter: 'A', text: 'Re-excisie met ruimere marges' },
          { letter: 'B', text: 'Sentinel node procedure' },
          { letter: 'C', text: 'Alleen controle over 6 maanden' },
          { letter: 'D', text: 'Eerst altijd FDG-PET/CT voordat verdere chirurgie wordt verricht' },
          { letter: 'E', text: 'Aanvullende stadiëring afhankelijk van verdere uitslagen' },
        ],
        correctAnswers: ['A', 'B', 'E'],
        explanation: 'Re-excisie, sentinel node procedure en aanvullende stadiëring zijn relevante vervolgstappen.',
      },
      {
        id: '3b',
        type: 'meerdere_antwoorden',
        points: 2.0,
        requireExactSet: true,
        question:
          'Bij de patiënt blijkt uiteindelijk sprake te zijn van een pT3aN1a-melanoom.\nWelke uitspraken over FDG-PET/CT zijn juist?',
        options: [
          { letter: 'A', text: 'FDG-PET/CT wordt gebruikt om uitzaaiingen met hoge sensitiviteit op te sporen' },
          { letter: 'B', text: 'FDG-PET/CT wordt gebruikt om uitzaaiingen met hoge specificiteit op te sporen' },
          { letter: 'C', text: 'Eén FDG-positieve afwijking bewijst altijd metastatische ziekte' },
          { letter: 'D', text: 'Als geen FDG-positieve afwijkingen zichtbaar zijn, beschouwen we de ziekte als M0' },
          { letter: 'E', text: 'PET/CT vervangt histologie volledig' },
        ],
        correctAnswers: ['A', 'B', 'D'],
        explanation:
          'PET/CT is gevoelig; geen FDG-positieve afwijkingen → M0. Eén positieve bevinding bewijst niet automatisch metastase.',
      },
      {
        id: '3c',
        type: 'meerdere_antwoorden',
        points: 2.0,
        requireExactSet: true,
        question:
          'Bij longbiopt blijkt sprake van een metastase van melanoom met BRAF V600E-mutatie.\nWelke uitspraken over BRAF V600E zijn juist?',
        options: [
          { letter: 'A', text: 'Het is een predictieve biomarker' },
          { letter: 'B', text: 'Het is geassocieerd met erfelijke melanomen' },
          { letter: 'C', text: 'De mutatie kan aangrijpingspunt zijn voor doelgerichte therapie' },
          { letter: 'D', text: 'De aanwezigheid sluit immunotherapie uit' },
          { letter: 'E', text: 'De mutatie komt voor in melanoom' },
        ],
        correctAnswers: ['A', 'C', 'E'],
        explanation: 'BRAF V600E is predictief, doelgericht behandelbaar en komt voor in melanoom.',
      },
      {
        id: '3d',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Welke beeldvorming is het meest geschikt om hersenmetastasen van melanoom aan te tonen?',
        options: [
          { letter: 'A', text: 'CT-thorax' },
          { letter: 'B', text: 'Echo oksel' },
          { letter: 'C', text: 'MRI cerebrum' },
          { letter: 'D', text: 'Skeletscintigrafie' },
        ],
        correctAnswer: 'C',
        explanation: 'MRI cerebrum is de gouden standaard voor hersenmetastasen bij melanoom.',
      },
      {
        id: '3e',
        type: 'open',
        points: 2.0,
        question: 'Wat betekent het dat een biomarker predictief is?',
        wordLimit: 20,
        rubric: 'Score: 1p voorspelt behandelrespons; 1p koppeling aan specifieke therapie.',
        modelAnswer:
          'Een predictieve biomarker voorspelt of een patiënt waarschijnlijk effect heeft van een specifieke behandeling.',
        explanation: 'Predictief = voorspelt respons op specifieke therapie.',
      },
      {
        id: '3f',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Welke uitspraak over systemische behandeling van gemetastaseerd melanoom is het meest correct?',
        options: [
          { letter: 'A', text: 'Immunotherapie is uitsluitend palliatief en geeft nooit langdurige overleving' },
          { letter: 'B', text: 'BRAF/MEK-remmers werken alleen bij patiënten zonder BRAF-mutatie' },
          { letter: 'C', text: 'Immunotherapie kan bij uitgezaaid melanoom tot langdurige overleving leiden' },
          { letter: 'D', text: 'Dexamethason versterkt de werking van checkpointremmers standaard' },
        ],
        correctAnswer: 'C',
        explanation: 'Immunotherapie kan bij uitgezaaid melanoom tot langdurige overleving leiden.',
      },
    ],
  },
]
