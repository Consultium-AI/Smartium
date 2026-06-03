/** Blok 5 oefententamen 4 — casussen 7–9 */

export const blok5Tentamen4PartC = [
  {
    id: 'casus-7',
    title: 'Casus 7 – Multipel myeloom',
    totalPoints: 12,
    scenario:
      'Een 70-jarige man meldt zich met rugpijn, moeheid en gewichtsverlies. In het bloed wordt een M-proteïne gevonden.',
    questions: [
      {
        id: '7a',
        type: 'meerkeuze',
        points: 2.0,
        question:
          'Wat is de belangrijkste reden dat een M-proteïne niet automatisch betekent dat iemand multipel myeloom heeft?',
        options: [
          { letter: 'A', text: 'Omdat je ook beenmerg en orgaanschade moet beoordelen' },
          { letter: 'B', text: 'Omdat een M-proteïne alleen bij infecties voorkomt' },
          { letter: 'C', text: 'Omdat het nooit uit plasmacellen afkomstig is' },
          { letter: 'D', text: 'Omdat het alleen in urine voorkomt' },
        ],
        correctAnswer: 'A',
        explanation: 'Diagnose myeloom vereist ook beenmergbeoordeling en orgaanschade (CRAB).',
      },
      {
        id: '7b',
        type: 'koppelvraag',
        points: 2.0,
        question: 'Match het onderzoek aan het meest passende doel.',
        items: ['Serum-eiwitelektroforese', 'Immunofixatie', 'Vrije lichte ketens'],
        matchOptions: [
          { letter: 'A', text: 'Kwantificatie M-proteïne' },
          { letter: 'B', text: 'Typering M-proteïne' },
          { letter: 'C', text: 'Snelle follow-up / lichte-ketenziekte' },
        ],
        correctMapping: { 0: 'A', 1: 'B', 2: 'C' },
        explanation: 'SPE → kwantificatie; immunofixatie → typering; FLC → snelle follow-up.',
      },
      {
        id: '7c',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Welke uitspraak over sampling error bij beenmergonderzoek is het meest correct?',
        options: [
          { letter: 'A', text: 'Het betekent dat alle laboratoria andere apparaten gebruiken' },
          { letter: 'B', text: 'Het betekent dat de punctieplaats een onvolledig beeld van de ziekte kan geven' },
          { letter: 'C', text: 'Het betekent dat immunofixatie fout-positief is' },
          { letter: 'D', text: 'Het betekent dat vrije lichte ketens onbruikbaar zijn' },
        ],
        correctAnswer: 'B',
        explanation: 'Sampling error: de punctieplaats kan een onvolledig beeld van de ziekte geven.',
      },
      {
        id: '7d',
        type: 'open',
        points: 2.0,
        question:
          'Waarom is bloedonderzoek vaak geschikter voor follow-up dan herhaald beenmergonderzoek?',
        wordLimit: 25,
        rubric:
          'Score: 1p minder invasief/makkelijker te herhalen; 1p sampling error genoemd.',
        modelAnswer:
          'Bloedonderzoek is minder invasief, makkelijker te herhalen en minder gevoelig voor sampling error dan herhaald beenmergonderzoek.',
        explanation: 'Bloed is minder invasief en minder gevoelig voor sampling error.',
      },
      {
        id: '7e',
        type: 'meerdere_antwoorden',
        points: 2.0,
        partialCreditOnlyCorrect: true,
        question: 'Welke bevindingen passen bij osteolyse?',
        options: [
          { letter: 'A', text: 'Toegenomen osteoclastactivatie' },
          { letter: 'B', text: 'Past klassiek bij multipel myeloom' },
          { letter: 'C', text: 'Netto botresorptie' },
          { letter: 'D', text: 'Vooral osteoblastactivatie' },
          { letter: 'E', text: 'Verhoogd risico op pathologische fracturen' },
        ],
        correctAnswers: ['A', 'B', 'C', 'E'],
        explanation: 'Osteolyse: osteoclastactivatie, netto resorptie, klassiek bij myeloom, pathologische fracturen.',
      },
      {
        id: '7f',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Wat is de juiste volgorde van fractuurgenezing?',
        options: [
          {
            letter: 'A',
            text: 'Hematoom → granulatieweefsel → ontsteking → remodelling → zachte callus → harde callus',
          },
          {
            letter: 'B',
            text: 'Hematoom → ontsteking → granulatieweefsel → zachte callus → harde callus → remodelling',
          },
          {
            letter: 'C',
            text: 'Ontsteking → hematoom → harde callus → granulatieweefsel → remodelling → zachte callus',
          },
          {
            letter: 'D',
            text: 'Hematoom → ontsteking → zachte callus → granulatieweefsel → harde callus → remodelling',
          },
        ],
        correctAnswer: 'B',
        explanation:
          'Hematoom → ontsteking → granulatieweefsel → zachte callus → harde callus → remodelling.',
      },
    ],
  },
  {
    id: 'casus-8',
    title: 'Casus 8 – Melanoom',
    totalPoints: 12,
    scenario:
      'Een 67-jarige vrouw wordt door de huisarts verwezen wegens een verdachte gepigmenteerde laesie op de rug.',
    questions: [
      {
        id: '8a',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Welk onderdeel hoort niet bij de ABCDE-regel van melanoom?',
        options: [
          { letter: 'A', text: 'Asymmetrie' },
          { letter: 'B', text: 'Begrenzing' },
          { letter: 'C', text: 'Dieptegroei' },
          { letter: 'D', text: 'Evolutie' },
        ],
        correctAnswer: 'C',
        explanation: 'ABCDE = asymmetrie, begrenzing, color (kleur), diameter, evolutie. Dieptegroei hoort er niet bij.',
      },
      {
        id: '8b',
        type: 'open',
        points: 2.0,
        question: 'Wat betekent het ugly duckling sign?',
        wordLimit: 20,
        rubric: 'Score: 1p duidelijk anders dan rest; 1p betrekking op andere naevi/zelfde patiënt.',
        modelAnswer:
          'Een moedervlek die duidelijk anders oogt dan de overige naevi van dezelfde patiënt.',
        explanation: 'Ugly duckling = één afwijkende moedervlek t.o.v. de rest.',
      },
      {
        id: '8c',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Welke aanpak is bij een verdachte melanocytaire laesie het meest passend?',
        options: [
          { letter: 'A', text: 'Diagnostische excisie' },
          { letter: 'B', text: 'Eerst maanden afwachten' },
          { letter: 'C', text: 'Alleen smeren met corticosteroïd' },
          { letter: 'D', text: 'Cryotherapie' },
        ],
        correctAnswer: 'A',
        explanation: 'Bij verdenking op melanoom: diagnostische excisie.',
      },
      {
        id: '8d',
        type: 'meerdere_antwoorden',
        points: 2.0,
        partialCreditOnlyCorrect: true,
        question:
          'Welke vervolgstappen kunnen passend zijn na diagnose melanoom met grotere Breslow-dikte?',
        options: [
          { letter: 'A', text: 'Re-excisie met ruimere marges' },
          { letter: 'B', text: 'Sentinel node procedure' },
          { letter: 'C', text: 'Beeldvorming afhankelijk van stadium' },
          { letter: 'D', text: 'Nooit verdere diagnostiek nodig' },
          { letter: 'E', text: 'Biomarkeranalyse bij gemetastaseerde ziekte' },
        ],
        correctAnswers: ['A', 'B', 'C', 'E'],
        explanation: 'Re-excisie, sentinel node, stadiëring en biomarkeranalyse zijn relevante vervolgstappen.',
      },
      {
        id: '8e',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Welke beeldvorming is het meest geschikt voor het opsporen van hersenmetastasen?',
        options: [
          { letter: 'A', text: 'MRI cerebrum' },
          { letter: 'B', text: 'X-thorax' },
          { letter: 'C', text: 'Echo oksel' },
          { letter: 'D', text: 'Mammografie' },
        ],
        correctAnswer: 'A',
        explanation: 'MRI cerebrum is de beste keuze voor hersenmetastasen.',
      },
      {
        id: '8f',
        type: 'meerkeuze',
        points: 2.0,
        question:
          'De tumor blijkt een BRAF V600E-mutatie te bevatten.\nWelke uitspraak is het meest correct?',
        options: [
          { letter: 'A', text: 'Dit is een predictieve biomarker' },
          { letter: 'B', text: 'Dit sluit doelgerichte therapie uit' },
          { letter: 'C', text: 'Dit betekent per definitie erfelijk melanoom' },
          { letter: 'D', text: 'Dit is alleen relevant bij psoriasis' },
        ],
        correctAnswer: 'A',
        explanation: 'BRAF V600E is een predictieve biomarker voor doelgerichte therapie.',
      },
    ],
  },
  {
    id: 'casus-9',
    title: 'Casus 9 – Immunologie 1 / endocriene auto-immuniteit',
    totalPoints: 14,
    scenario:
      'Een 14-jarige jongen presenteert zich met polydipsie, polyurie en gewichtsverlies. Bij een andere patiënt worden klachten passend bij hyperthyreoïdie gezien.',
    questions: [
      {
        id: '9a',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Welke uitspraak over type 1 diabetes mellitus is het meest correct?',
        options: [
          { letter: 'A', text: 'Het is uitsluitend een ziekte van volwassenen' },
          { letter: 'B', text: 'Auto-immuniteit tegen bètacellen speelt een rol' },
          { letter: 'C', text: 'Er ontstaan direct klachten zodra 5% van de bètacellen verloren is' },
          { letter: 'D', text: 'Het is een puur mechanische aandoening' },
        ],
        correctAnswer: 'B',
        explanation: 'T1DM is een auto-immuunziekte gericht tegen bètacellen.',
      },
      {
        id: '9b',
        type: 'koppelvraag',
        points: 2.0,
        question: 'Match het stadium van T1DM aan het best passende kenmerk.',
        items: ['Stadium 1', 'Stadium 2', 'Stadium 3'],
        matchOptions: [
          { letter: 'A', text: 'Abnormale glucose, nog geen formele diagnose' },
          { letter: 'B', text: 'Klinische diabetes, insuline nodig' },
          { letter: 'C', text: 'Auto-antistoffen en immuunactivatie, nog geen duidelijke diabetes' },
        ],
        correctMapping: { 0: 'C', 1: 'A', 2: 'B' },
        explanation: 'Stadium 1 → antistoffen; stadium 2 → abnormale glucose; stadium 3 → klinische diabetes.',
      },
      {
        id: '9c',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Welke uitspraak over Graves is het meest correct?',
        options: [
          { letter: 'A', text: 'Het is een klassiek voorbeeld van receptorstimulerende auto-antistoffen' },
          { letter: 'B', text: 'Het leidt altijd tot hypothyreoïdie' },
          { letter: 'C', text: 'Auto-antistoffen spelen geen rol' },
          { letter: 'D', text: 'Het is een autoinflammatoire ziekte' },
        ],
        correctAnswer: 'A',
        explanation: 'Graves is een klassiek voorbeeld van stimulerende auto-antistoffen tegen de TSH-receptor.',
      },
      {
        id: '9d',
        type: 'meerkeuze',
        points: 2.0,
        question: 'Welke uitspraak over Hashimoto-thyreoïditis is het meest correct?',
        options: [
          { letter: 'A', text: 'Het is een ziekte met stimulatie van de TSH-receptor' },
          { letter: 'B', text: 'Het gaat gepaard met destructie van schildklierweefsel en hypothyreoïdie' },
          { letter: 'C', text: 'Het is hetzelfde als FMF' },
          { letter: 'D', text: 'Het is een vasculitis van grote vaten' },
        ],
        correctAnswer: 'B',
        explanation: 'Hashimoto leidt tot schildklierdestructie en hypothyreoïdie.',
      },
      {
        id: '9e',
        type: 'open',
        points: 2.0,
        question:
          'Wat is het verschil tussen diagnostische en pathofysiologische auto-antistoffen?',
        wordLimit: 30,
        rubric:
          'Score: 1p diagnostisch = helpt diagnose; 1p pathofysiologisch = veroorzaakt/draagt bij aan ziekte.',
        modelAnswer:
          'Diagnostische auto-antistoffen helpen bij het stellen van de diagnose; pathofysiologische auto-antistoffen dragen zelf direct bij aan het ziekteproces.',
        explanation: 'Diagnostisch = diagnose; pathofysiologisch = direct ziekteveroorzakend.',
      },
      {
        id: '9f',
        type: 'koppelvraag',
        points: 2.0,
        question: 'Match het gen aan de best passende functie.',
        items: ['AIRE', 'FOXP3', 'CTLA-4'],
        matchOptions: [
          { letter: 'A', text: 'Minder expressie van zelfantigenen in thymus' },
          { letter: 'B', text: 'Minder Tregs' },
          { letter: 'C', text: 'Minder rem op T-celactivatie' },
        ],
        correctMapping: { 0: 'A', 1: 'B', 2: 'C' },
        explanation: 'AIRE → zelfantigenen in thymus; FOXP3 → Tregs; CTLA-4 → rem op T-celactivatie.',
      },
      {
        id: '9g',
        type: 'meerdere_antwoorden',
        points: 2.0,
        partialCreditOnlyCorrect: true,
        question: 'Welke mechanismen kunnen bijdragen aan het verdwijnen van immunologische tolerantie?',
        options: [
          { letter: 'A', text: 'Moleculaire mimicry' },
          { letter: 'B', text: 'Bystander activatie' },
          { letter: 'C', text: 'Neoantigenen' },
          { letter: 'D', text: 'Vrijkomen van afgeschermde auto-antigenen' },
          { letter: 'E', text: 'Uitsluitend lokale compressietherapie' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        explanation:
          'Moleculaire mimicry, bystander activatie, neoantigenen en afgeschermde antigenen kunnen tolerantie doorbreken.',
      },
    ],
  },
]
