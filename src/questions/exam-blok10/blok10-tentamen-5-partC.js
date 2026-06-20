/** Blok 10 oefententamen 5 (Final Boss 2.0) — casussen 5–6 · bron: VRAGEN + antwoordmodel (26 p totaal) */

export const blok10Tentamen5PartC = [
  {
    id: 'casus-5',
    title: 'Casus 5 – Colon/rectum 2.0: maligniteit, MMR, behandeling en prognose',
    totalPoints: 13,
    scenario:
      'Een 48-jarige man wordt verwezen wegens rectaal bloedverlies, veranderd defecatiepatroon en familiair voorkomen van darmkanker. Coloscopie toont een rectumcarcinoom. MRI rectum laat een tumor met bedreigde mesorectale fascie en EMVI zien. Er wordt MMR-analyse op het biopt verricht.\n\nIn hetzelfde MDO wordt een oudere patiënt met coloncarcinoom en ernstige comorbiditeit besproken. De arts-assistent moet uitleggen waarom colon en rectum verschillend worden benaderd en waarom MMR-status relevant is.',
    questions: [
      {
        id: '5a',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Welke factor maakt deze patiënt extra verdacht voor erfelijke aanleg?',
        options: [
          { letter: 'A', text: 'Jonge leeftijd en familiair voorkomen van CRC' },
          { letter: 'B', text: 'Alleen reflux na koffie' },
          { letter: 'C', text: 'Alleen gebruik van PPI' },
          { letter: 'D', text: 'Alleen een normale groeicurve' },
        ],
        correctAnswer: 'A',
        explanation: 'Jonge leeftijd en familiair voorkomen van CRC wijst op erfelijke aanleg.',
      },
      {
        id: '5b',
        type: 'meerkeuze',
        points: 1.0,
        question:
          'Waarom wordt MMR-analyse verricht bij nieuw gediagnosticeerde CRC-patiënten onder de 70 jaar?',
        options: [
          {
            letter: 'A',
            text: 'Screening op MMR-deficiëntie/Lynch en mogelijke consequenties voor patiënt en familie',
          },
          { letter: 'B', text: 'Om lactose-intolerantie te bevestigen' },
          { letter: 'C', text: 'Om pancreatitis uit te sluiten' },
          { letter: 'D', text: 'Om reflux te behandelen' },
        ],
        correctAnswer: 'A',
        explanation:
          'MMR-analyse screent op MMR-deficiëntie/Lynch met gevolgen voor patiënt en familie.',
      },
      {
        id: '5c',
        type: 'koppelvraag',
        points: 2.0,
        question: 'Koppel het begrip aan de juiste betekenis.',
        items: ['MRF', 'EMVI', 'MMR-deficiëntie', 'R1-resectie'],
        matchOptions: [
          { letter: 'A', text: 'Tumordoorgroei in extramurale venen' },
          {
            letter: 'B',
            text: 'Mesorectale fascie, relevant voor lokale uitbreiding en behandelplanning',
          },
          {
            letter: 'C',
            text: 'Microscopisch niet-radicale resectie of tumor in/zeer dicht bij het snijvlak, volgens de stof resectiemarge ≤0,1 mm',
          },
          {
            letter: 'D',
            text: 'Defect in mismatch repair, relevant voor Lynch-screening en therapiekeuze',
          },
          { letter: 'E', text: 'Galsteen bij de papil van Vater' },
        ],
        correctMapping: { 0: 'B', 1: 'A', 2: 'D', 3: 'C' },
        explanation: 'MRF → B; EMVI → A; MMR-deficiëntie → D; R1-resectie → C.',
      },
      {
        id: '5d',
        type: 'meerkeuze',
        points: 1.0,
        question:
          'Waarom is MRI rectum belangrijker bij rectumcarcinoom dan bij coloncarcinoom?',
        options: [
          {
            letter: 'A',
            text: 'Voor lokale stadiëring, beoordeling van MRF/EMVI en behandelplanning',
          },
          { letter: 'B', text: 'Omdat coloncarcinoom nooit metastaseert' },
          { letter: 'C', text: 'Omdat MRI rectum FIT vervangt' },
          { letter: 'D', text: 'Omdat rectumcarcinoom altijd goedaardig is' },
        ],
        correctAnswer: 'A',
        explanation:
          'MRI rectum is belangrijk voor lokale stadiëring, MRF/EMVI en behandelplanning.',
      },
      {
        id: '5e',
        type: 'meerdere_antwoorden',
        points: 2.0,
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.5,
        question:
          'Welke kenmerken kunnen aanleiding zijn voor neoadjuvante behandeling bij rectumcarcinoom?\n\nLet op: meerdere antwoorden kunnen juist zijn.',
        options: [
          { letter: 'A', text: 'T4-tumor' },
          { letter: 'B', text: 'Bedreigde of betrokken MRF' },
          { letter: 'C', text: 'EMVI+' },
          { letter: 'D', text: 'Lokale hoge-risico kenmerken' },
          { letter: 'E', text: 'Volledig normale MRI zonder risicofactoren' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        explanation:
          'T4, bedreigde MRF, EMVI+ en lokale hoge-risico kenmerken zijn indicatie voor neoadjuvante behandeling.',
      },
      {
        id: '5f',
        type: 'koppelvraag',
        points: 2.0,
        question: 'Vul de tabel aan.',
        items: ['Stadium I', 'Stadium II', 'Stadium III', 'Stadium IV'],
        matchOptions: [
          { letter: 'A', text: 'Beste prognose' },
          {
            letter: 'B',
            text: 'Gunstig tot intermediair, afhankelijk van substadium en risicofactoren',
          },
          {
            letter: 'C',
            text: 'Slechter dan I/II door lymfekliermetastasen',
          },
          {
            letter: 'D',
            text: 'Slechtste prognose door metastasen op afstand',
          },
        ],
        correctMapping: { 0: 'A', 1: 'B', 2: 'C', 3: 'D' },
        explanation:
          'Stadium I → beste; II → gunstig/intermediair; III → lymfeklieren; IV → metastasen.',
      },
      {
        id: '5g',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Wat is het verschil tussen TME en PME?',
        options: [
          {
            letter: 'A',
            text: 'TME verwijdert het volledige mesorectum; PME laat een deel zitten op afstand van de tumor',
          },
          { letter: 'B', text: 'TME is een ademtest; PME is een FIT' },
          { letter: 'C', text: 'TME wordt alleen bij maagkanker gebruikt' },
          { letter: 'D', text: 'Er is geen verschil' },
        ],
        correctAnswer: 'A',
        explanation:
          'TME verwijdert volledig mesorectum; PME laat een deel zitten op afstand van de tumor.',
      },
      {
        id: '5h',
        type: 'open',
        points: 1.0,
        question:
          'Waarom is het MDO essentieel bij CRC? Beantwoord in maximaal 50 woorden.',
        wordLimit: 50,
        rubric:
          '0,5p tumor/stadium/beeldvorming/pathologie noemen; 0,5p patiëntfactoren/behandelkeuze noemen.',
        modelAnswer:
          'Het MDO combineert tumorlocatie, stadium, beeldvorming, pathologie, MMR-status, operabiliteit, comorbiditeit, performance status en wensen van de patiënt. Zo wordt gekozen tussen operatie, neoadjuvante/adjuvante behandeling of palliatief beleid.',
        explanation:
          'MDO combineert tumorfactoren en patiëntfactoren voor behandelkeuze.',
      },
      {
        id: '5i',
        type: 'meerdere_antwoorden',
        points: 1.0,
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.25,
        question:
          'Welke patiëntfactoren worden in het MDO meegewogen?\n\nLet op: meerdere antwoorden kunnen juist zijn.',
        options: [
          { letter: 'A', text: 'WHO-performance status' },
          { letter: 'B', text: 'Comorbiditeit' },
          { letter: 'C', text: 'Wensen van de patiënt' },
          { letter: 'D', text: 'Kwaliteit en kwantiteit van leven' },
          { letter: 'E', text: 'Alleen bloedgroep zonder klinische context' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        explanation:
          'MDO weegt performance status, comorbiditeit, wensen en kwaliteit/kwantiteit van leven mee.',
      },
      {
        id: '5j',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Waarom is MMR-deficiëntie therapeutisch relevant?',
        options: [
          {
            letter: 'A',
            text: 'MMR-deficiënte tumoren kunnen anders reageren op immunotherapie/chemotherapie',
          },
          {
            letter: 'B',
            text: 'MMR-deficiëntie betekent altijd acute pancreatitis',
          },
          {
            letter: 'C',
            text: 'MMR-deficiëntie verlaagt altijd alle tumorrisico\'s',
          },
          {
            letter: 'D',
            text: 'MMR-deficiëntie is hetzelfde als lactasedeficiëntie',
          },
        ],
        correctAnswer: 'A',
        explanation:
          'MMR-deficiënte tumoren kunnen anders reageren op immunotherapie/chemotherapie.',
      },
    ],
  },
  {
    id: 'casus-6',
    title: 'Casus 6 – GI-bloeding 2.0: lage tractus, instabiliteit en interventieradiologie',
    totalPoints: 13,
    scenario:
      'Een 78-jarige man gebruikt antistolling wegens atriumfibrilleren. Hij presenteert zich op de SEH met plots helder rood bloedverlies per anum en duizeligheid. De bloeddruk is 95/60 mmHg, hartfrequentie 108/min, Hb is gedaald en er is sprake van actief bloedverlies.\n\nEr wordt gestart met stabilisatie. Colonoscopie is lastig door onvoldoende zicht door bloed. CT-angiografie toont actieve extravasatie in het colon. De interventieradioloog wordt gebeld voor selectieve angiografie en embolisatie.',
    questions: [
      {
        id: '6a',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Wat maakt deze bloeding klinisch relevant?',
        options: [
          {
            letter: 'A',
            text: 'Hemodynamische instabiliteit met lage bloeddruk en tachycardie',
          },
          { letter: 'B', text: 'Alleen een keer misselijkheid zonder bloedverlies' },
          { letter: 'C', text: 'Alleen reflux na vet eten' },
          { letter: 'D', text: 'Alleen normale ontlasting' },
        ],
        correctAnswer: 'A',
        explanation:
          'Hemodynamische instabiliteit met lage bloeddruk en tachycardie maakt bloeding klinisch relevant.',
      },
      {
        id: '6b',
        type: 'meerdere_antwoorden',
        points: 2.0,
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.5,
        question:
          'Welke eerste opvangstappen passen bij een klinisch relevante GI-bloeding?\n\nLet op: meerdere antwoorden kunnen juist zijn.',
        options: [
          { letter: 'A', text: 'Groot infuus, zo nodig tweede infuus' },
          { letter: 'B', text: 'Volume-resuscitatie met kristalloïden' },
          {
            letter: 'C',
            text: 'Monitoring van bloeddruk, pols, bewustzijn en urineproductie',
          },
          { letter: 'D', text: 'Bloedgroep/kruisbloed bepalen' },
          { letter: 'E', text: 'Direct naar huis sturen zonder controle' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        explanation:
          'Eerste opvang: infusen, resuscitatie, monitoring en bloedgroep/kruisbloed.',
      },
      {
        id: '6c',
        type: 'meerkeuze',
        points: 1.0,
        question:
          'Waarom is colonoscopie bij lage GI-bloeding soms beperkt in de acute fase?',
        options: [
          {
            letter: 'A',
            text: 'Zonder goede darmvoorbereiding en bij veel bloed is het zicht beperkt',
          },
          { letter: 'B', text: 'Colonoscopie kan nooit bloed vinden' },
          { letter: 'C', text: 'Colonoscopie is alleen voor reflux' },
          { letter: 'D', text: 'Colonoscopie meet alleen CYP3A4' },
        ],
        correctAnswer: 'A',
        explanation:
          'Zonder darmvoorbereiding en bij veel bloed is het zicht bij colonoscopie beperkt.',
      },
      {
        id: '6d',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Wanneer is CT-angiografie vooral passend?',
        options: [
          {
            letter: 'A',
            text: 'Bij actieve bloeding/hemodynamische instabiliteit of wanneer endoscopie geen duidelijke bron geeft',
          },
          { letter: 'B', text: 'Bij elke milde refluxklacht' },
          { letter: 'C', text: 'Bij verdenking lactose-intolerantie' },
          { letter: 'D', text: 'Bij normale ontlasting zonder bloedverlies' },
        ],
        correctAnswer: 'A',
        explanation:
          'CT-angiografie bij actieve bloeding/instabiliteit of onduidelijke endoscopie.',
      },
      {
        id: '6e',
        type: 'koppelvraag',
        points: 2.0,
        question: 'Vul de tabel aan.',
        items: ['Colonoscopie', 'CT-angiografie', 'Selectieve angiografie', 'Chirurgie'],
        matchOptions: [
          {
            letter: 'A',
            text: 'Diagnostiek en eventueel endoscopische behandeling bij lage GI-bloeding',
          },
          {
            letter: 'B',
            text: 'Lokaliseren van actieve bloeding/extravasatie, vooral bij instabiliteit of onduidelijke bron',
          },
          {
            letter: 'C',
            text: 'Gerichte interventie na lokalisatie, bijvoorbeeld embolisatie/coiling',
          },
          {
            letter: 'D',
            text: 'Laatste redmiddel bij persisterende levensbedreigende bloeding of falen van endoscopie/IR',
          },
        ],
        correctMapping: { 0: 'A', 1: 'B', 2: 'C', 3: 'D' },
        explanation:
          'Colonoscopie → diagnostiek/behandeling; CT-A → lokalisatie; angiografie → embolisatie; chirurgie → laatste redmiddel.',
      },
      {
        id: '6f',
        type: 'open',
        points: 1.0,
        question:
          'Leg in maximaal 50 woorden uit waarom helder rood bloedverlies per anum niet altijd automatisch betekent dat de bron laag in het colon zit.',
        wordLimit: 50,
        rubric:
          '0,5p massale hoge bloeding kan hematochezie geven; 0,5p kliniek/hemodynamiek meenemen noemen.',
        modelAnswer:
          'Helder rood bloedverlies past vaak bij lage bloeding, maar een massale hoge GI-bloeding kan door snelle passage ook hematochezie geven. Daarom moet je hemodynamiek, kliniek en risicofactoren meenemen.',
        explanation:
          'Massale hoge GI-bloeding kan hematochezie geven; beoordeel hemodynamiek en kliniek.',
      },
      {
        id: '6g',
        type: 'meerdere_antwoorden',
        points: 2.0,
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.5,
        question:
          'Welke oorzaken passen bij lage GI-bloeding?\n\nLet op: meerdere antwoorden kunnen juist zijn.',
        options: [
          { letter: 'A', text: 'Divertikelbloeding' },
          { letter: 'B', text: 'Angiodysplasie' },
          { letter: 'C', text: 'Tumor' },
          { letter: 'D', text: 'Inflammatoire afwijkingen' },
          { letter: 'E', text: 'Geïsoleerde gastroparese zonder bloeding' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        explanation:
          'Lage GI-bloeding: divertikel, angiodysplasie, tumor en inflammatoire afwijkingen.',
      },
      {
        id: '6h',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Wat is een belangrijk risico van embolisatie/coiling?',
        options: [
          { letter: 'A', text: 'Darmischemie door afsluiten van bloedtoevoer' },
          { letter: 'B', text: 'Directe genezing van alle refluxklachten' },
          { letter: 'C', text: 'Ontstaan van lactasedeficiëntie' },
          { letter: 'D', text: 'Verhoogde productie van intrinsic factor' },
        ],
        correctAnswer: 'A',
        explanation: 'Embolisatie/coiling kan darmischemie geven door afsluiten van bloedtoevoer.',
      },
      {
        id: '6i',
        type: 'open',
        points: 1.0,
        question:
          'Waarom kan CT-angiografie dienen als routekaart voor interventieradiologie? Beantwoord in maximaal 50 woorden.',
        wordLimit: 50,
        rubric:
          '0,5p lokalisatie actieve bloeding/extravasatie noemen; 0,5p helpt gerichte angiografie/embolisatie noemen.',
        modelAnswer:
          'CT-angiografie kan actieve extravasatie en de vermoedelijke bloedende arterie lokaliseren. Daardoor weet de interventieradioloog welk vaatgebied selectief moet worden aangeprikt voor angiografie en embolisatie.',
        explanation:
          'CT-A lokaliseert extravasatie en helpt gerichte angiografie/embolisatie.',
      },
      {
        id: '6j',
        type: 'meerkeuze',
        points: 1.0,
        question:
          'Welke uitspraak over antistolling in deze casus is het meest juist?',
        options: [
          {
            letter: 'A',
            text: 'Antistolling kan ernst en persisteren van bloedverlies beïnvloeden en moet worden meegewogen',
          },
          { letter: 'B', text: 'Antistolling is nooit relevant bij bloedverlies' },
          {
            letter: 'C',
            text: 'Antistolling veroorzaakt altijd gastroparese',
          },
          {
            letter: 'D',
            text: 'Antistolling maakt colonoscopie onmogelijk bij elke patiënt',
          },
        ],
        correctAnswer: 'A',
        explanation:
          'Antistolling kan ernst en persisteren van bloedverlies beïnvloeden.',
      },
    ],
  },
]
