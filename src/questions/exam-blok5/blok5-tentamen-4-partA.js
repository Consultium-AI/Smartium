/** Blok 5 oefententamen 4 — casussen 1–3 (bron: Blok 5 tentamen 4.docx; 119 punten totaal) */

export const blok5Tentamen4PartA = [
  {
    id: 'casus-1',
    title: 'Casus 1 – Kinderoncologie / Wilms tumor',
    totalPoints: 14,
    scenario:
      'Een 3-jarig meisje wordt door de huisarts verwezen vanwege een sinds enkele weken opgemerkte zwelling van de buik. De ouders merken dat zij minder eetlust heeft en sneller moe is. Bij lichamelijk onderzoek is een palpabele massa in de flank voelbaar.',
    questions: [
      {
        id: '1a',
        type: 'meerkeuze',
        points: 2.0,
        question:
          'Welke eerste beeldvormende stap is het meest passend bij verdenking op een niertumor bij een kind?',
        options: [
          { letter: 'A', text: 'CT-thorax' },
          { letter: 'B', text: 'Echografie van de buik' },
          { letter: 'C', text: 'Mammografie' },
          { letter: 'D', text: 'PET/CT' },
        ],
        correctAnswer: 'B',
        explanation: 'Echografie is de meest logische eerste, laagdrempelige beeldvormende stap.',
      },
      {
        id: '1b',
        type: 'meerdere_antwoorden',
        points: 2.0,
        partialCreditOnlyCorrect: true,
        question: 'Welke van onderstaande alarmsymptomen passen bij een hersentumor op de kinderleeftijd?',
        options: [
          { letter: 'A', text: 'Aanhoudend en herhaald braken' },
          { letter: 'B', text: 'Toenemende schedelomtrek' },
          { letter: 'C', text: 'Abnormale oogbewegingen' },
          { letter: 'D', text: 'Vertraagde of versnelde puberteit' },
          { letter: 'E', text: 'Geïsoleerde hooikoorts' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        explanation: 'Braken, schedelomtrek, abnormale oogbewegingen en puberteitsafwijkingen zijn alarmsymptomen.',
      },
      {
        id: '1c',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Welke uitspraak over kinderkanker is het meest correct?',
        options: [
          { letter: 'A', text: 'Kinderkanker bestaat vooral uit carcinomen' },
          { letter: 'B', text: 'Kinderkanker komt veel vaker voor dan volwassen kanker' },
          { letter: 'C', text: 'Kinderkanker groeit vaak sneller dan volwassen kanker' },
          { letter: 'D', text: 'Kinderen reageren gemiddeld slechter op chemotherapie dan volwassenen' },
        ],
        correctAnswer: 'C',
        explanation: 'Kinderkanker groeit vaak sneller dan volwassen kanker.',
      },
      {
        id: '1d',
        type: 'koppelvraag',
        points: 2.0,
        question: 'Sleep iedere tumor naar de juiste hoofdcategorie van kinderkanker.',
        items: ['ALL', 'Wilms tumor', 'Hersentumor'],
        matchOptions: [
          { letter: 'A', text: 'Hematologie-oncologie' },
          { letter: 'B', text: 'Solide tumoren' },
          { letter: 'C', text: 'Neuro-oncologie' },
        ],
        correctMapping: { 0: 'A', 1: 'B', 2: 'C' },
        explanation: 'ALL → hematologie-oncologie; Wilms tumor → solide tumoren; hersentumor → neuro-oncologie.',
      },
      {
        id: '1e',
        type: 'meerkeuze',
        points: 2.0,
        question:
          'Waarom wordt bij een klassieke verdenking op Wilms tumor meestal niet standaard eerst een biopt verricht?',
        options: [
          { letter: 'A', text: 'Omdat histologie bij kinderen nooit nodig is' },
          {
            letter: 'B',
            text: 'Vanwege risico op tumor spill en omdat de diagnose vaak klinisch/beeldvormend goed benaderd kan worden',
          },
          { letter: 'C', text: 'Omdat chemotherapie altijd eerst wordt gestart zonder diagnose' },
          { letter: 'D', text: 'Omdat niertumoren bij kinderen altijd goedaardig zijn' },
        ],
        correctAnswer: 'B',
        explanation: 'Risico op tumor spill en goede klinische/beeldvormende benadering maken biopt vaak overbodig.',
      },
      {
        id: '1f',
        type: 'koppelvraag',
        points: 2.0,
        question: 'Sleep de volgende aspecten naar complicatie van behandeling of langetermijneffect.',
        items: [
          'Infecties tijdens chemotherapie',
          'Alopecia',
          'Vermoeidheid jaren later',
          'Verminderde hartpompfunctie op lange termijn',
          'Infertiliteit',
        ],
        matchOptions: [
          { letter: 'A', text: 'Complicatie van behandeling' },
          { letter: 'B', text: 'Langetermijneffect' },
        ],
        correctMapping: { 0: 'A', 1: 'A', 2: 'B', 3: 'B', 4: 'B' },
        explanation:
          'Infecties en alopecia zijn acute complicaties; vermoeidheid, hartfunctie en infertiliteit zijn langetermijneffecten.',
      },
      {
        id: '1g',
        type: 'meerkeuze',
        points: 2.0,
        question:
          'Welke uitspraak over de organisatie van kinderoncologische zorg in Nederland is het meest correct?',
        options: [
          { letter: 'A', text: 'Alle behandeling vindt uitsluitend plaats in streekziekenhuizen' },
          { letter: 'B', text: 'De zorg is volledig gedecentraliseerd' },
          { letter: 'C', text: 'De zorg is gecentraliseerd met shared care dichter bij huis' },
          { letter: 'D', text: 'Kinderoncologische zorg verloopt op exact dezelfde manier als volwassen oncologische zorg' },
        ],
        correctAnswer: 'C',
        explanation: 'Kinderoncologische zorg is gecentraliseerd (Prinses Máxima Centrum) met shared care dichter bij huis.',
      },
    ],
  },
  {
    id: 'casus-2',
    title: 'Casus 2 – Dermato-oncologie / verdachte huidafwijkingen',
    totalPoints: 14,
    scenario:
      'Een 61-jarige man meldt zich bij de huisarts met meerdere huidafwijkingen op zonbeschenen huid. Hij werkte jarenlang als hovenier.',
    questions: [
      {
        id: '2a',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Welk onderdeel van PROVOKE beschrijft het best de term "ulcererend"?',
        options: [
          { letter: 'A', text: 'Plaats' },
          { letter: 'B', text: 'Omtrek' },
          { letter: 'C', text: 'Efflorescentie' },
          { letter: 'D', text: 'Kleur' },
        ],
        correctAnswer: 'C',
        explanation: 'Ulcererend beschrijft het type laesie — een efflorescentie.',
      },
      {
        id: '2b',
        type: 'meerkeuze',
        points: 2.0,
        question:
          'Een laesie op de handrug is ruw, erythemateus en schilferend op zonbeschadigde huid.\nWat is de meest waarschijnlijke diagnose?',
        options: [
          { letter: 'A', text: 'Actinische keratose' },
          { letter: 'B', text: 'Lipoom' },
          { letter: 'C', text: 'Dermatofibroom' },
          { letter: 'D', text: 'Neurofibroom' },
        ],
        correctAnswer: 'A',
        explanation: 'Ruw, erythemateus en schilferend op zonbeschadigde huid past bij actinische keratose.',
      },
      {
        id: '2c',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Welke uitspraak over ziekte van Bowen is het meest correct?',
        options: [
          { letter: 'A', text: 'Het is een benigne afwijking zonder behandelindicatie' },
          { letter: 'B', text: 'Het is een plaveiselcelcarcinoom in situ' },
          { letter: 'C', text: 'Het metastaseert altijd vroeg' },
          { letter: 'D', text: 'Het is hetzelfde als een basaalcelcarcinoom' },
        ],
        correctAnswer: 'B',
        explanation: 'Morbus Bowen is een plaveiselcelcarcinoom in situ.',
      },
      {
        id: '2d',
        type: 'meerdere_antwoorden',
        points: 2.0,
        partialCreditOnlyCorrect: true,
        question:
          'Welke kenmerken passen meer bij een basaalcelcarcinoom dan bij een plaveiselcelcarcinoom?',
        options: [
          { letter: 'A', text: 'Glanzend aspect' },
          { letter: 'B', text: 'Teleangiëctasieën' },
          { letter: 'C', text: 'Vrijwel nooit metastasen' },
          { letter: 'D', text: 'Vaak pijnlijk en hyperkeratotisch' },
          { letter: 'E', text: 'Vooral lokaal destructieve groei' },
        ],
        correctAnswers: ['A', 'B', 'C', 'E'],
        explanation: 'BCC: glanzend, teleangiëctasieën, zelden metastasen, lokaal destructief. Pijn/hyperkeratose past meer bij SCC.',
      },
      {
        id: '2e',
        type: 'meerkeuze',
        points: 2.0,
        question:
          'Een snelgroeiende tumor met centrale hoornprop is klinisch moeilijk te onderscheiden van een goed gedifferentieerd SCC.\nHoe moet deze afwijking praktisch worden benaderd?',
        options: [
          { letter: 'A', text: 'Als verruca seborrhoica' },
          { letter: 'B', text: 'Als keratoacanthoom, met dezelfde diagnostiek/verwijzing als SCC' },
          { letter: 'C', text: 'Als lipoom' },
          { letter: 'D', text: 'Als lymfoedeem' },
        ],
        correctAnswer: 'B',
        explanation: 'Keratoacanthoom wordt praktisch benaderd als SCC met dezelfde diagnostiek en verwijzing.',
      },
      {
        id: '2f',
        type: 'koppelvraag',
        points: 2.0,
        question: 'Match het BCC-kenmerk aan laag-risico of hoog-risico.',
        items: [
          'Nodulair type',
          'Micronodulair / sprieterig type',
          'H-zone van het gezicht',
          'Diameter ≥ 2 cm',
        ],
        matchOptions: [
          { letter: 'A', text: 'Laag-risico' },
          { letter: 'B', text: 'Hoog-risico' },
        ],
        correctMapping: { 0: 'A', 1: 'B', 2: 'B', 3: 'B' },
        explanation: 'Nodulair type is laag-risico; micronodulair, H-zone en diameter ≥2 cm zijn hoog-risico.',
      },
      {
        id: '2g',
        type: 'meerdere_antwoorden',
        points: 2.0,
        partialCreditOnlyCorrect: true,
        question:
          'Welke factoren verhogen bij een transplantatiepatiënt het risico op plaveiselcelcarcinoom?',
        options: [
          { letter: 'A', text: 'Langere duur van immunosuppressie' },
          { letter: 'B', text: 'Hogere dosis immunosuppressiva' },
          { letter: 'C', text: 'Gebruik van meerdere immunosuppressiva tegelijk' },
          { letter: 'D', text: 'Onbeschermde UV-blootstelling vóór start van immunosuppressie' },
          { letter: 'E', text: 'Donkere huid als onafhankelijke risicofactor' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        explanation:
          'Duur, dosis, combinatie van immunosuppressiva en eerdere UV-blootstelling verhogen het PCC-risico na transplantatie.',
      },
    ],
  },
  {
    id: 'casus-3',
    title: 'Casus 3 – Immunologie 2 / autoinflammatie',
    totalPoints: 14,
    scenario:
      'Een 16-jarige jongen van Turkse afkomst presenteert zich met recidiverende episodes van koorts en buikpijn. Tussen de aanvallen door voelt hij zich goed.',
    questions: [
      {
        id: '3a',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Welke diagnose is het meest waarschijnlijk?',
        options: [
          { letter: 'A', text: 'Familiaire Mediterrane Koorts' },
          { letter: 'B', text: 'Hashimoto-thyreoïditis' },
          { letter: 'C', text: 'Myasthenia gravis' },
          { letter: 'D', text: 'Graves' },
        ],
        correctAnswer: 'A',
        explanation: 'Recidiverende koorts en buikpijn bij Turkse afkomst passen bij FMF.',
      },
      {
        id: '3b',
        type: 'meerkeuze',
        points: 2.0,
        question:
          'Welke uitspraak beschrijft het verschil tussen autoinflammatie en auto-immuniteit het best?',
        options: [
          { letter: 'A', text: 'Autoinflammatie is altijd antistofgemedieerd' },
          { letter: 'B', text: 'Auto-immuniteit berust nooit op T-cellen' },
          { letter: 'C', text: 'Autoinflammatie berust vooral op ontregeling van aangeboren afweer' },
          { letter: 'D', text: 'Auto-immuniteit en autoinflammatie zijn exact hetzelfde' },
        ],
        correctAnswer: 'C',
        explanation: 'Autoinflammatie berust vooral op ontregeling van aangeboren afweer.',
      },
      {
        id: '3c',
        type: 'open',
        points: 2.0,
        question:
          'Welke twee cytokinen worden vooral geproduceerd na activatie van het inflammasoom?\nGeef twee korte antwoorden.',
        wordLimit: 15,
        rubric: 'Score: 1p IL-1β; 1p IL-18.',
        modelAnswer: 'IL-1β en IL-18',
        explanation: 'Na inflammasoomactivatie worden vooral IL-1β en IL-18 geproduceerd.',
      },
      {
        id: '3d',
        type: 'open',
        points: 2.0,
        question: 'Wat is pyroptose?',
        wordLimit: 20,
        rubric:
          'Score: 1p inflammatoire celdood; 1p koppeling aan inflammasoom / membraanporiën / vrijkomen inhoud.',
        modelAnswer:
          'Ontstekingsgerelateerde celdood door inflammasoomactivatie, met membraanporiën en vrijzetting van pro-inflammatoire inhoud.',
        explanation: 'Pyroptose = inflammatoire celdood via het inflammasoom.',
      },
      {
        id: '3e',
        type: 'meerdere_antwoorden',
        points: 2.0,
        partialCreditOnlyCorrect: true,
        question: 'Welke uitspraken over FMF zijn juist?',
        options: [
          { letter: 'A', text: 'Het is een erfelijke autoinflammatoire aandoening' },
          { letter: 'B', text: 'Het pyrine-inflammasoom speelt een rol' },
          { letter: 'C', text: 'Colchicine is een standaardbehandeling' },
          { letter: 'D', text: 'Het wordt veroorzaakt door centrale tolerantiestoornis in de thymus' },
          { letter: 'E', text: 'De aanvallen duren vaak dagen tot kortdurend en keren terug' },
        ],
        correctAnswers: ['A', 'B', 'C', 'E'],
        explanation: 'FMF is erfelijk autoinflammatoir, pyrine-inflammasoom, colchicine en recidiverende aanvallen.',
      },
      {
        id: '3f',
        type: 'meerkeuze',
        points: 2.0,
        question:
          'Welke ziekte is het best passend bij een verworven autoinflammatoire aandoening met vaak monoklonale IgM-component?',
        options: [
          { letter: 'A', text: 'FMF' },
          { letter: 'B', text: 'Schnitzler' },
          { letter: 'C', text: 'Graves' },
          { letter: 'D', text: 'T1DM' },
        ],
        correctAnswer: 'B',
        explanation: 'De ziekte van Schnitzler is een verworven autoinflammatoire aandoening met vaak monoklonaal IgM.',
      },
      {
        id: '3g',
        type: 'koppelvraag',
        points: 2.0,
        question: 'Sleep de onderdelen van VEXAS naar de juiste letter.',
        items: ['Vacuolen', 'E1-enzym', 'X-gebonden', 'Auto-inflammatoir', 'Somatisch'],
        matchOptions: [
          { letter: 'V', text: 'V' },
          { letter: 'E', text: 'E' },
          { letter: 'X', text: 'X' },
          { letter: 'A', text: 'A' },
          { letter: 'S', text: 'S' },
        ],
        correctMapping: { 0: 'V', 1: 'E', 2: 'X', 3: 'A', 4: 'S' },
        explanation: 'V = vacuolen; E = E1-enzym; X = X-gebonden; A = auto-inflammatoir; S = somatisch.',
      },
    ],
  },
]
