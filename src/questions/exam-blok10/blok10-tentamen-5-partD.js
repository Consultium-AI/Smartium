/** Blok 10 oefententamen 5 (Final Boss 2.0) — casussen 7–8 · bron: VRAGEN + antwoordmodel (25 p totaal) */

const AMI_BEHANDELING_CORRECT = [
  'Beoordelen op peritoneale prikkeling/irreversibele ischemie',
  'Snelle CT-angiografie bij verdenking',
  'Multidisciplinair overleg met GI-chirurg, vaatchirurg en interventieradioloog',
  'Vascularisatie herstellen waar mogelijk',
  'Darmresectie of damage-controlbeleid indien nodig',
]

const AMI_BEHANDELING_SHUFFLED = [
  'Vascularisatie herstellen waar mogelijk',
  'Beoordelen op peritoneale prikkeling/irreversibele ischemie',
  'Darmresectie of damage-controlbeleid indien nodig',
  'Snelle CT-angiografie bij verdenking',
  'Multidisciplinair overleg met GI-chirurg, vaatchirurg en interventieradioloog',
]

export const blok10Tentamen5PartD = [
  {
    id: 'casus-7',
    title: 'Casus 7 – Acute buik 2.0: acute buikpijn, peritoneale prikkeling en mesenteriale ischemie',
    totalPoints: 12,
    scenario:
      'Een 82-jarige vrouw met atriumfibrilleren en vaatlijden krijgt plots hevige buikpijn. Bij aankomst is de buik opvallend weinig afwijkend bij onderzoek. De pijn lijkt ernstiger dan het lichamelijk onderzoek doet vermoeden.\n\nLater ontstaat toenemende drukpijn, defense musculaire en stijgt de lactaatwaarde. De arts denkt aan acute mesenteriale ischemie. Een coassistent stelt voor om af te wachten omdat het lactaat in het begin normaal was.',
    questions: [
      {
        id: '7a',
        type: 'meerkeuze',
        points: 1.0,
        question:
          'Welke diagnose past het best bij plots hevige buikpijn bij atriumfibrilleren, met relatief weinig afwijkingen bij vroeg lichamelijk onderzoek?',
        options: [
          { letter: 'A', text: 'Acute mesenteriale ischemie' },
          { letter: 'B', text: 'Lactose-intolerantie' },
          { letter: 'C', text: 'Functionele reflux' },
          { letter: 'D', text: 'Peuterdiarree' },
        ],
        correctAnswer: 'A',
        explanation: 'Acute mesenteriale ischemie past bij plots hevige buikpijn en AF.',
      },
      {
        id: '7b',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Waarom is atriumfibrilleren relevant in deze casus?',
        options: [
          {
            letter: 'A',
            text: 'Het verhoogt de kans op embolische arteriële occlusie',
          },
          { letter: 'B', text: 'Het veroorzaakt altijd coeliakie' },
          { letter: 'C', text: 'Het verlaagt altijd het risico op ischemie' },
          { letter: 'D', text: 'Het is alleen relevant voor reflux' },
        ],
        correctAnswer: 'A',
        explanation:
          'Atriumfibrilleren verhoogt de kans op embolische arteriële occlusie.',
      },
      {
        id: '7c',
        type: 'meerkeuze',
        points: 1.0,
        question:
          'Wat is het belangrijkste onderzoek bij sterke verdenking op acute mesenteriale ischemie?',
        options: [
          { letter: 'A', text: 'CT-angiografie van de buik' },
          { letter: 'B', text: 'Lactose-ademtest' },
          { letter: 'C', text: 'FIT' },
          { letter: 'D', text: 'Alleen gastroscopie' },
        ],
        correctAnswer: 'A',
        explanation: 'CT-angiografie van de buik is het belangrijkste onderzoek bij AMI.',
      },
      {
        id: '7d',
        type: 'open',
        points: 1.0,
        question:
          'Waarom is een normaal lactaat onvoldoende om darmischemie uit te sluiten? Beantwoord in maximaal 50 woorden.',
        wordLimit: 50,
        rubric:
          '0,5p lactaat kan vroeg normaal zijn; 0,5p klinische verdenking/CT-A blijft leidend.',
        modelAnswer:
          'Lactaat kan in de vroege fase nog normaal zijn. Een normaal lactaat sluit darmischemie dus niet uit. Bij sterke klinische verdenking, zoals pijn out of proportion en embolierisico, is snelle CT-angiografie nodig.',
        explanation:
          'Lactaat kan vroeg normaal zijn; bij verdenking blijft CT-angiografie leidend.',
      },
      {
        id: '7e',
        type: 'meerdere_antwoorden',
        points: 2.0,
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.5,
        question:
          'Welke bevindingen of contexten passen bij acute mesenteriale ischemie of ernstige darmischemie?\n\nLet op: meerdere antwoorden kunnen juist zijn.',
        options: [
          { letter: 'A', text: 'Plots hevige buikpijn' },
          {
            letter: 'B',
            text: 'Pijn die disproportioneel lijkt ten opzichte van het vroege lichamelijk onderzoek',
          },
          { letter: 'C', text: 'Peritoneale prikkeling in latere fase' },
          {
            letter: 'D',
            text: 'Risicofactoren zoals vaatlijden of cardiale emboliebron',
          },
          { letter: 'E', text: 'Normale groei bij zuigeling als hoofdkenmerk' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        explanation:
          'AMI: plots hevige pijn, pijn out of proportion, peritoneale prikkeling later, embolierisico.',
      },
      {
        id: '7f',
        type: 'beeldvraag',
        points: 2.0,
        question:
          'Zet de globale behandelredenering in de juiste volgorde.\n\nStappen:\n• Beoordelen op peritoneale prikkeling/irreversibele ischemie\n• Snelle CT-angiografie bij verdenking\n• Multidisciplinair overleg met GI-chirurg, vaatchirurg en interventieradioloog\n• Vascularisatie herstellen waar mogelijk\n• Darmresectie of damage-controlbeleid indien nodig',
        gradingMethod: 'order',
        orderIntro: 'Juiste volgorde (1 = eerste stap):',
        orderOptions: [...AMI_BEHANDELING_SHUFFLED],
        correctOrder: [...AMI_BEHANDELING_CORRECT],
        expectedAnswer: '1 → 2 → 3 → 4 → 5',
        rubric:
          '2p totaal. Deelpunten toestaan als stap 1 en 2 zijn omgewisseld, omdat klinische beoordeling en snelle CT-A in de vroege fase dicht op elkaar liggen.',
        modelAnswer: '1 → 2 → 3 → 4 → 5',
        explanation:
          'Beoordeling → CT-A → MDO → vascularisatie → resectie indien nodig.',
      },
      {
        id: '7g',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Wat is het verschil tussen acute buikpijn en acute buik?',
        options: [
          {
            letter: 'A',
            text: 'Acute buikpijn is een klacht; acute buik impliceert mogelijk urgente intra-abdominale aandoening met peritoneale prikkeling',
          },
          { letter: 'B', text: 'Acute buikpijn betekent altijd coeliakie' },
          { letter: 'C', text: 'Acute buik betekent altijd reflux' },
          { letter: 'D', text: 'Er is geen verschil' },
        ],
        correctAnswer: 'A',
        explanation:
          'Acute buikpijn is klacht; acute buik impliceert urgente intra-abdominale aandoening.',
      },
      {
        id: '7h',
        type: 'meerkeuze',
        points: 1.0,
        question:
          'Waarom probeer je waar mogelijk eerst vascularisatie te herstellen voordat je definitief darm resecteert?',
        options: [
          { letter: 'A', text: 'Om zoveel mogelijk vitale darm te sparen' },
          { letter: 'B', text: 'Om refluxklachten te verminderen' },
          { letter: 'C', text: 'Om FIT positief te maken' },
          { letter: 'D', text: 'Om lactase te verhogen' },
        ],
        correctAnswer: 'A',
        explanation: 'Vascularisatie herstellen om zoveel mogelijk vitale darm te sparen.',
      },
      {
        id: '7i',
        type: 'meerkeuze',
        points: 1.0,
        question:
          'Wat is het doel van een second look-operatie na initiële ingreep bij AMI?',
        options: [
          { letter: 'A', text: 'Darmvitaliteit opnieuw beoordelen en beleid aanpassen' },
          { letter: 'B', text: 'Alleen maagzuur meten' },
          { letter: 'C', text: 'Alleen screening op obesitas' },
          { letter: 'D', text: 'Alleen bepalen of iemand zwanger is' },
        ],
        correctAnswer: 'A',
        explanation:
          'Second look: darmvitaliteit opnieuw beoordelen en beleid aanpassen.',
      },
      {
        id: '7j',
        type: 'open',
        points: 1.0,
        question:
          'Leg in maximaal 60 woorden uit waarom AMI een typisch final boss-onderwerp is binnen acute buikpijn.',
        wordLimit: 60,
        rubric:
          '0,5p pijn out of proportion/normaal lactaat-valkuil noemen; 0,5p snelle CT-A/behandeling/vascularisatie noemen.',
        modelAnswer:
          'AMI is moeilijk omdat de vroege klachten ernstig kunnen zijn terwijl het lichamelijk onderzoek nog beperkt afwijkend is. Normaal lactaat kan misleiden. Door snelle ischemieprogressie zijn CT-angiografie, multidisciplinair beleid en tijdig herstel van vascularisatie essentieel.',
        explanation:
          'Pijn out of proportion, normaal lactaat-valkuil; snelle CT-A en vascularisatie essentieel.',
      },
    ],
  },
  {
    id: 'casus-8',
    title: 'Casus 8 – Maag en slokdarm oncologie: van premaligniteit naar MDO-keuze',
    totalPoints: 13,
    scenario:
      'Een 37-jarige vrouw wordt verwezen vanwege familiair diffuus maagcarcinoom. Haar vader overleed jong aan maagkanker en een tante had lobulair mammacarcinoom. Genetisch onderzoek toont een pathogene CDH1-variant.\n\nIn dezelfde MDO-bespreking wordt een 71-jarige man besproken met een oesofagus-cardiatumor. Hij heeft matige conditie, COPD en gewichtsverlies. De vraag is of neoadjuvante chemoradiatie gevolgd door operatie haalbaar is, of dat definitieve chemoradiatie zonder operatie beter past.',
    questions: [
      {
        id: '8a',
        type: 'meerkeuze',
        points: 1.0,
        question:
          'Welk syndroom past het best bij familiair diffuus maagcarcinoom en lobulair mammacarcinoom?',
        options: [
          { letter: 'A', text: 'HDGC' },
          { letter: 'B', text: 'Cystic fibrosis' },
          { letter: 'C', text: 'MASLD' },
          { letter: 'D', text: 'Peuterdiarree' },
        ],
        correctAnswer: 'A',
        explanation: 'HDGC past bij familiair diffuus maagcarcinoom en lobulair mammacarcinoom.',
      },
      {
        id: '8b',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Welke genen worden in de stof gekoppeld aan HDGC?',
        options: [
          { letter: 'A', text: 'CDH1 en zeldzaam CTNNA1' },
          { letter: 'B', text: 'CFTR en SPINK1' },
          { letter: 'C', text: 'BRAF en KRAS' },
          { letter: 'D', text: 'CYP3A4 en CYP2D6' },
        ],
        correctAnswer: 'A',
        explanation: 'HDGC: CDH1 en zeldzaam CTNNA1.',
      },
      {
        id: '8c',
        type: 'koppelvraag',
        points: 2.0,
        question: 'Koppel het syndroom aan het juiste gen.',
        items: [
          'FAP',
          'Juveniele polyposis syndroom',
          'Peutz-Jeghers syndroom',
          'Li-Fraumeni-syndroom',
        ],
        matchOptions: [
          { letter: 'A', text: 'STK11' },
          { letter: 'B', text: 'TP53' },
          { letter: 'C', text: 'APC' },
          { letter: 'D', text: 'SMAD4' },
          { letter: 'E', text: 'PRSS1' },
        ],
        correctMapping: { 0: 'C', 1: 'D', 2: 'A', 3: 'B' },
        explanation: 'FAP → APC; JPS → SMAD4; PJS → STK11; Li-Fraumeni → TP53.',
      },
      {
        id: '8d',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Wat is volgens de stof vaak het advies bij HDGC?',
        options: [
          {
            letter: 'A',
            text: 'Profylactische totale gastrectomie, met eventueel surveillance bij geselecteerde patiënten',
          },
          { letter: 'B', text: 'Geen follow-up nodig' },
          { letter: 'C', text: 'Alleen jaarlijkse FIT' },
          { letter: 'D', text: 'Alleen lactasebehandeling' },
        ],
        correctAnswer: 'A',
        explanation:
          'HDGC: profylactische totale gastrectomie, eventueel surveillance bij geselecteerde patiënten.',
      },
      {
        id: '8e',
        type: 'meerkeuze',
        points: 1.0,
        question:
          'Welke premaligne route hoort vooral bij het intestinale type maagcarcinoom?',
        options: [
          {
            letter: 'A',
            text: 'Correa-cascade vanuit atrofische gastritis en intestinale metaplasie',
          },
          { letter: 'B', text: 'Acute pancreatitis naar rectumcarcinoom' },
          { letter: 'C', text: 'Gastroparese naar cystic fibrosis' },
          { letter: 'D', text: 'SBP naar achalasie' },
        ],
        correctAnswer: 'A',
        explanation:
          'Intestinaal type: Correa-cascade vanuit atrofische gastritis en intestinale metaplasie.',
      },
      {
        id: '8f',
        type: 'koppelvraag',
        points: 2.0,
        question: 'Vul de tabel aan.',
        items: [
          'nCRT — doel',
          'nCRT — operatie als standaardvervolg',
          'dCRT — doel',
          'dCRT — operatie als standaardvervolg',
        ],
        matchOptions: [
          {
            letter: 'A',
            text: 'Neoadjuvante behandeling om tumor te verkleinen/operatie-uitkomst te verbeteren',
          },
          { letter: 'B', text: 'Ja, bedoeld voor operatie' },
          {
            letter: 'C',
            text: 'Definitieve curatieve chemoradiatie zonder operatie',
          },
          { letter: 'D', text: 'Nee, geen standaard operatie' },
        ],
        correctMapping: { 0: 'A', 1: 'B', 2: 'C', 3: 'D' },
        explanation:
          'nCRT → verkleinen tumor + operatie; dCRT → curatief zonder operatie.',
      },
      {
        id: '8g',
        type: 'meerdere_antwoorden',
        points: 2.0,
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.5,
        question:
          'Welke factoren kunnen maken dat een slokdarmresectie niet passend is?\n\nLet op: meerdere antwoorden kunnen juist zijn.',
        options: [
          { letter: 'A', text: 'cT4b-tumor met ingroei in andere organen' },
          { letter: 'B', text: 'Metastasen op afstand' },
          {
            letter: 'C',
            text: 'Zeer slechte conditie of onacceptabel operatierisico',
          },
          {
            letter: 'D',
            text: 'Patiëntfitheid en comorbiditeit maken operatie niet haalbaar',
          },
          { letter: 'E', text: 'Tumor is altijd operabel ongeacht conditie' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        explanation:
          'cT4b, metastasen, slechte conditie en comorbiditeit kunnen resectie uitsluiten.',
      },
      {
        id: '8h',
        type: 'meerdere_antwoorden',
        points: 1.0,
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.25,
        question:
          'Welke bijwerkingen of gevolgen passen bij dCRT?\n\nLet op: meerdere antwoorden kunnen juist zijn.',
        options: [
          { letter: 'A', text: 'Radiatie-oesofagitis' },
          { letter: 'B', text: 'Passageklachten en pijn' },
          {
            letter: 'C',
            text: 'Tijdelijk niet kunnen eten/drinken met behoefte aan sondevoeding',
          },
          { letter: 'D', text: 'Radiatiepneumonitis of hartschade' },
          { letter: 'E', text: 'Altijd geen bijwerkingen' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        explanation:
          'dCRT: oesofagitis, passageklachten, sondevoeding nodig, long-/hartschade.',
      },
      {
        id: '8i',
        type: 'open',
        points: 1.0,
        question:
          'Leg in maximaal 60 woorden uit waarom dCRT curatief bedoeld kan zijn, maar toch zwaar is.',
        wordLimit: 60,
        rubric:
          '0,5p curatieve intentie zonder operatie noemen; 0,5p toxiciteit/bijwerkingen noemen.',
        modelAnswer:
          'dCRT kan curatief bedoeld zijn omdat met chemotherapie en hoge dosis radiotherapie de tumor definitief wordt behandeld zonder operatie. De behandeling is zwaar door oesofagitis, pijn, passageklachten, voedingsproblemen en mogelijke long- of hartschade.',
        explanation:
          'dCRT is curatief zonder operatie, maar zwaar door oesofagitis en andere toxiciteit.',
      },
      {
        id: '8j',
        type: 'open',
        points: 1.0,
        question:
          'Waarom is MDO-besluitvorming bij slokdarm- en maagkanker essentieel? Beantwoord in maximaal 50 woorden.',
        wordLimit: 50,
        rubric:
          '0,5p tumor/stadium/resectabiliteit noemen; 0,5p patiëntfitheid/comorbiditeit/wensen/behandelkeuze noemen.',
        modelAnswer:
          'MDO-besluitvorming is nodig omdat behandeling afhangt van tumorlocatie, stadium, metastasen, resectabiliteit, comorbiditeit, conditie en wensen van de patiënt. Zo wordt gekozen tussen operatie, nCRT, dCRT of palliatief beleid.',
        explanation:
          'MDO weegt tumorfactoren en patiëntfitheid af voor operatie, nCRT, dCRT of palliatief.',
      },
    ],
  },
]
