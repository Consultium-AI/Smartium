/** Blok 10 oefententamen 4 (Tentamen C) — casussen 3–4 · bron: VRAGEN + antwoordmodel (25 p totaal) */

export const blok10Tentamen4PartB = [
  {
    id: 'casus-3',
    title: 'Casus 3 – Toenemende buikomvang en verwardheid bij cirrose',
    totalPoints: 12,
    scenario:
      'Een 58-jarige man met bekende alcoholgerelateerde cirrose komt op de SEH vanwege toenemende buikomvang, buikpijn en koorts. Zijn partner vertelt dat hij de laatste dagen suffer en vergeetachtig is. Hij gebruikt thuis ibuprofen tegen rugpijn. Bij lichamelijk onderzoek is er forse ascites en lichte verwardheid. De arts verricht een diagnostische ascitespunctie en denkt aan gedecompenseerde cirrose met mogelijke SBP en hepatische encefalopathie.',
    questions: [
      {
        id: '3a',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Welk proces kenmerkt levercirrose het best?',
        options: [
          { letter: 'A', text: 'Chronische leverbeschadiging met fibrose en regeneratienoduli' },
          { letter: 'B', text: 'Alleen tijdelijke maagzuurremming' },
          { letter: 'C', text: 'Alleen lactosemalabsorptie' },
          { letter: 'D', text: 'Acute obstructie van de appendix' },
        ],
        correctAnswer: 'A',
        explanation: 'Cirrose = chronische leverbeschadiging met fibrose en regeneratienoduli.',
      },
      {
        id: '3b',
        type: 'meerdere_antwoorden',
        points: 2.0,
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.5,
        question:
          'Welke complicaties horen bij cirrose?\n\nLet op: meerdere antwoorden kunnen juist zijn.',
        options: [
          { letter: 'A', text: 'Ascites' },
          { letter: 'B', text: 'Spontane bacteriële peritonitis' },
          { letter: 'C', text: 'Hepatische encefalopathie' },
          { letter: 'D', text: 'Hepatorenaal syndroom' },
          { letter: 'E', text: 'Achalasie als standaardcomplicatie van cirrose' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        explanation: 'Ascites, SBP, hepatische encefalopathie en hepatorenaal syndroom horen bij cirrose.',
      },
      {
        id: '3c',
        type: 'koppelvraag',
        points: 2.0,
        question: 'Vul de tabel aan.',
        items: [
          'Neutrofielen >250/µL',
          'SAAG ≥1,1 g/dL',
          'Positieve bacteriologische kweek',
          'Lage SAAG (<1,1 g/dL)',
        ],
        matchOptions: [
          { letter: 'A', text: 'Past bij SBP' },
          {
            letter: 'B',
            text: 'Past bij portale hypertensie als oorzaak van ascites',
          },
          { letter: 'C', text: 'Ondersteunt bacteriële infectie/SBP' },
          {
            letter: 'D',
            text: 'Minder passend bij portale hypertensie; denk aan een andere oorzaak van ascites',
          },
        ],
        correctMapping: { 0: 'A', 1: 'B', 2: 'C', 3: 'D' },
        explanation:
          'Neutrofielen >250 → SBP; SAAG ≥1,1 → portale hypertensie; positieve kweek → infectie; lage SAAG → andere oorzaak.',
      },
      {
        id: '3d',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Wat is de juiste eerste behandeling bij verdenking op SBP volgens de stof?',
        options: [
          { letter: 'A', text: 'Direct intraveneuze antibiotica, eventueel met albumine' },
          { letter: 'B', text: 'Alleen PPI starten' },
          { letter: 'C', text: 'Alleen afwachten tot de koorts zakt' },
          { letter: 'D', text: 'Direct fundoplicatie' },
        ],
        correctAnswer: 'A',
        explanation: 'Direct intraveneuze antibiotica, eventueel met albumine.',
      },
      {
        id: '3e',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Welke profylaxe wordt in de stof genoemd na SBP?',
        options: [
          { letter: 'A', text: 'Norfloxacine' },
          { letter: 'B', text: 'Omeprazol' },
          { letter: 'C', text: 'Tirzepatide' },
          { letter: 'D', text: 'Lactase' },
        ],
        correctAnswer: 'A',
        explanation: 'Norfloxacine volgens de stof.',
      },
      {
        id: '3f',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Welke twee mechanismen noemt de stof als kern van hepatische encefalopathie?',
        options: [
          { letter: 'A', text: 'Meer ammoniak vanuit de darm en systemische shunting' },
          { letter: 'B', text: 'Minder mucus en minder bicarbonaat' },
          { letter: 'C', text: 'Meer galzouten en meer micellen' },
          { letter: 'D', text: 'Minder FIT-deelname en meer poliepen' },
        ],
        correctAnswer: 'A',
        explanation: 'Meer ammoniak vanuit de darm en systemische shunting.',
      },
      {
        id: '3g',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Welke behandeling past bij hepatische encefalopathie?',
        options: [
          { letter: 'A', text: 'Lactulose, rifaximine en behandelen van het uitlokkende moment' },
          { letter: 'B', text: 'Alleen ERCP' },
          { letter: 'C', text: 'Alleen bariatrie' },
          { letter: 'D', text: 'Alleen colonoscopie' },
        ],
        correctAnswer: 'A',
        explanation: 'Lactulose, rifaximine en behandelen van het uitlokkende moment.',
      },
      {
        id: '3h',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Welke medicatie moet je bij cirrose met ascites volgens de stof vermijden?',
        options: [
          { letter: 'A', text: 'NSAID’s' },
          { letter: 'B', text: 'Lactulose' },
          { letter: 'C', text: 'Rifaximine' },
          { letter: 'D', text: 'Spironolacton' },
        ],
        correctAnswer: 'A',
        explanation: 'NSAID’s vermijden bij cirrose met ascites.',
      },
      {
        id: '3i',
        type: 'open',
        points: 1.0,
        question:
          'Leg uit waarom een infectie bij een patiënt met cirrose en ascites snel ernstig kan worden. Beantwoord in maximaal 60 woorden.',
        wordLimit: 60,
        rubric:
          '0,5p verminderde afweer/bacteriële translocatie; 0,5p ernstig verloop zoals SBP/sepsis/nierfalen/encefalopathie.',
        modelAnswer:
          'Bij cirrose is de afweer verstoord en kan bacteriële translocatie vanuit de darm optreden. Ascites kan geïnfecteerd raken, waardoor SBP, nierfunctieverslechtering, sepsis of encefalopathie kunnen ontstaan. Daarom moet infectie snel herkend en behandeld worden.',
        explanation: 'Verminderde afweer en bacteriële translocatie kunnen snel tot SBP/sepsis leiden.',
      },
      {
        id: '3j',
        type: 'koppelvraag',
        points: 1.0,
        question: 'Koppel de complicatie aan de kern van de aanpak.',
        items: ['Ascites', 'Refractaire ascites', 'SBP', 'Hepatische encefalopathie'],
        matchOptions: [
          {
            letter: 'A',
            text: 'Lactulose, rifaximine en uitlokkende factor behandelen',
          },
          { letter: 'B', text: 'Zoutbeperking, spironolacton en furosemide' },
          {
            letter: 'C',
            text: 'Grote-volumeparacentese, TIPS, ascitespomp of transplantatie overwegen',
          },
          { letter: 'D', text: 'Intraveneuze antibiotica, albumine en profylaxe' },
          { letter: 'E', text: 'Endoscopische resectie van Barrett' },
        ],
        correctMapping: { 0: 'B', 1: 'C', 2: 'D', 3: 'A' },
        explanation: 'Ascites → B; refractaire ascites → C; SBP → D; HE → A.',
      },
    ],
  },
  {
    id: 'casus-4',
    title: 'Casus 4 – Colorectaal carcinoom: stadiëring en behandelkeuze',
    totalPoints: 13,
    scenario:
      'Een 67-jarige man wordt verwezen wegens onverklaarde ferriprieve anemie, vermoeidheid en een veranderd defecatiepatroon. Hij heeft geen positieve FIT in deze casus. Coloscopie toont een stenoserende tumor in het sigmoïd, waarvan biopten adenocarcinoom laten zien. Bij een tweede patiënt wordt een laag rectumcarcinoom gevonden. Beide patiënten worden besproken in het MDO, waarbij stadiëring, operabiliteit, MMR-status en patiëntfitheid worden meegewogen.',
    questions: [
      {
        id: '4a',
        type: 'meerkeuze',
        points: 1.0,
        question:
          'Welke klacht past bij CRC en is in deze casus een reden voor verdere diagnostiek?',
        options: [
          { letter: 'A', text: 'Onverklaarde ferriprieve anemie met veranderd defecatiepatroon' },
          { letter: 'B', text: 'Alleen kortdurend brandend maagzuur na pizza' },
          { letter: 'C', text: 'Alleen jeuk na muggenbeet' },
          { letter: 'D', text: 'Alleen pijn aan de enkel' },
        ],
        correctAnswer: 'A',
        explanation: 'Onverklaarde ferriprieve anemie met veranderd defecatiepatroon.',
      },
      {
        id: '4b',
        type: 'meerdere_antwoorden',
        points: 2.0,
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.5,
        question:
          'Welke risicofactoren voor CRC worden in de stof genoemd?\n\nLet op: meerdere antwoorden kunnen juist zijn.',
        options: [
          { letter: 'A', text: 'Leeftijd >50 jaar' },
          { letter: 'B', text: 'Familiair voorkomen van CRC' },
          { letter: 'C', text: 'Lynch-syndroom' },
          { letter: 'D', text: 'IBD' },
          { letter: 'E', text: 'Lage inname van rood vlees als belangrijkste risicofactor' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        explanation: 'Leeftijd >50, familiair CRC, Lynch en IBD — niet lage inname rood vlees.',
      },
      {
        id: '4c',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Wat is de eerste diagnostische stap om de tumor zelf te bevestigen?',
        options: [
          { letter: 'A', text: 'Coloscopie met biopten' },
          { letter: 'B', text: 'Alleen echo van de galblaas' },
          { letter: 'C', text: 'Alleen lactose-ademtest' },
          { letter: 'D', text: 'Alleen Fibroscan' },
        ],
        correctAnswer: 'A',
        explanation: 'Coloscopie met biopten.',
      },
      {
        id: '4d',
        type: 'koppelvraag',
        points: 2.0,
        question: 'Vul de tabel aan.',
        items: [
          'Coloncarcinoom',
          'Rectumcarcinoom',
          'Verdachte metastasen op afstand',
          'Beoordeling van MRF/EMVI',
        ],
        matchOptions: [
          {
            letter: 'A',
            text: 'CT-thorax/abdomen voor stadiëring na coloscopie met biopten',
          },
          { letter: 'B', text: 'MRI rectum plus CT-thorax/abdomen' },
          {
            letter: 'C',
            text: 'CT-thorax/abdomen voor M-stadiëring/metastasen op afstand',
          },
          { letter: 'D', text: 'MRI rectum' },
        ],
        correctMapping: { 0: 'A', 1: 'B', 2: 'C', 3: 'D' },
        explanation:
          'Colon → CT stadiëring; rectum → MRI + CT; metastasen → CT M-stadiëring; MRF/EMVI → MRI rectum.',
      },
      {
        id: '4e',
        type: 'open',
        points: 1.0,
        question:
          'Waarom is MRI van het rectum belangrijk bij rectumcarcinoom? Beantwoord in maximaal 50 woorden.',
        wordLimit: 50,
        rubric:
          '0,5p lokale stadiëring/MRF/EMVI; 0,5p behandelplanning/neoadjuvante behandeling.',
        modelAnswer:
          'MRI rectum is belangrijk voor lokale stadiëring. Hiermee beoordeel je onder andere T-stadium, mesorectale fascie, EMVI en relatie tot het mesorectale vet. Dit bepaalt of neoadjuvante behandeling nodig is.',
        explanation: 'MRI rectum voor lokale stadiëring en behandelplanning.',
      },
      {
        id: '4f',
        type: 'koppelvraag',
        points: 2.0,
        question: 'Koppel het begrip aan de juiste betekenis.',
        items: ['MRF', 'EMVI', 'MMR-deficiëntie', 'R1-resectie'],
        matchOptions: [
          { letter: 'A', text: 'Tumordoorgroei in extramurale venen' },
          {
            letter: 'B',
            text: 'Mesorectale fascie, belangrijk voor lokale uitbreiding en behandelplanning',
          },
          { letter: 'C', text: 'Resectiemarge ≤0,1 mm' },
          {
            letter: 'D',
            text: 'Fout in DNA-mismatch-repair, relevant voor Lynch-screening en therapiekeuze',
          },
          { letter: 'E', text: 'Galsteen in de ductus choledochus' },
        ],
        correctMapping: { 0: 'B', 1: 'A', 2: 'D', 3: 'C' },
        explanation: 'MRF → B; EMVI → A; MMR-deficiëntie → D; R1-resectie → C.',
      },
      {
        id: '4g',
        type: 'meerkeuze',
        points: 1.0,
        question:
          'Bij welke groep CRC-patiënten wordt volgens de stof structureel MMR-analyse gedaan op het biopt van de primaire tumor?',
        options: [
          { letter: 'A', text: 'Nieuw gediagnosticeerde CRC-patiënten onder de 70 jaar' },
          { letter: 'B', text: 'Alleen patiënten met lactose-intolerantie' },
          { letter: 'C', text: 'Alleen patiënten met galstenen' },
          { letter: 'D', text: 'Alleen patiënten met SBP' },
        ],
        correctAnswer: 'A',
        explanation: 'Nieuw gediagnosticeerde CRC-patiënten onder de 70 jaar.',
      },
      {
        id: '4h',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Welke uitspraak over rectumcarcinoombehandeling is het meest juist?',
        options: [
          {
            letter: 'A',
            text: 'Bij T4, MRF+ of EMVI+ wordt vaak eerst neoadjuvante behandeling gegeven',
          },
          { letter: 'B', text: 'MRI rectum is nooit nodig' },
          { letter: 'C', text: 'TME verwijdert nooit mesorectaal vet' },
          { letter: 'D', text: 'Rectumcarcinoom wordt altijd alleen met FIT behandeld' },
        ],
        correctAnswer: 'A',
        explanation: 'Bij T4, MRF+ of EMVI+ wordt vaak eerst neoadjuvante behandeling gegeven.',
      },
      {
        id: '4i',
        type: 'open',
        points: 1.0,
        question:
          'Waarom is het MDO belangrijk bij CRC? Beantwoord in maximaal 50 woorden.',
        wordLimit: 50,
        rubric:
          '0,5p tumor/stadium/beeldvorming/pathologie; 0,5p patiëntfactoren en behandelkeuze.',
        modelAnswer:
          'Het MDO combineert tumorlocatie, stadium, beeldvorming, pathologie, operabiliteit, comorbiditeit, performance status en wensen van de patiënt. Zo wordt gekozen tussen operatie, neoadjuvante/adjuvante behandeling of palliatief beleid.',
        explanation: 'MDO combineert tumorfactoren en patiëntfactoren voor behandelkeuze.',
      },
      {
        id: '4j',
        type: 'meerdere_antwoorden',
        points: 1.0,
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.25,
        question:
          'Welke patiëntfactoren worden volgens de stof in het MDO meegewogen?\n\nLet op: meerdere antwoorden kunnen juist zijn.',
        options: [
          { letter: 'A', text: 'WHO-performance status' },
          { letter: 'B', text: 'Comorbiditeit' },
          { letter: 'C', text: 'Wensen van de patiënt' },
          { letter: 'D', text: 'Kwaliteit en kwantiteit van leven' },
          { letter: 'E', text: 'Alleen de kleur van de ontlasting' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        explanation:
          'WHO-performance status, comorbiditeit, wensen van de patiënt en kwaliteit/kwantiteit van leven.',
      },
    ],
  },
]
