/** Blok 4 oefententamen 3 — casussen 1–3 (bron: Oefententamen blok 4.3, studentversie + antwoordmodel) */

export const blok4Tentamen3PartA = [
  {
    id: 'casus-1',
    title: 'Casus 1 – Mononucleosis',
    totalPoints: 11,
    scenario: `Een 18-jarige student heeft sinds een week koorts, vermoeidheid, keelpijn en pijnlijke halslymfeklieren. Het bloedbeeld toont atypische lymfocyten.`,
    questions: [
      {
        id: '1a',
        type: 'meerkeuze',
        points: 2,
        question: `1a. Wat is de meest waarschijnlijke diagnose? (2.0p)`,
        options: [
          { letter: 'A', text: 'Mononucleosis infectiosa door EBV' },
          { letter: 'B', text: 'CMV-colitis' },
          { letter: 'C', text: 'Rotavirusinfectie' },
          { letter: 'D', text: 'Legionellapneumonie' },
        ],
        correctAnswer: 'A',
        explanation:
          'Koorts, keelpijn, cervicale lymfadenopathie en atypische lymfocyten passen klassiek bij EBV-mononucleosis.',
      },
      {
        id: '1b',
        type: 'meerkeuze',
        points: 2,
        question: `1b. Welke test past het best bij deze diagnose? (2.0p)`,
        options: [
          { letter: 'A', text: 'Paul-Bunnell/Monospot' },
          { letter: 'B', text: 'Dikke druppel' },
          { letter: 'C', text: 'KOH-preparaat' },
          { letter: 'D', text: 'Legionella-urineantigeen' },
        ],
        correctAnswer: 'A',
        explanation: 'De Paul-Bunnell/Monospot is een klassieke test bij EBV.',
      },
      {
        id: '1c',
        type: 'meerkeuze',
        points: 2,
        question: `1c. Welke uitspraak over EBV is juist? (2.0p)`,
        options: [
          { letter: 'A', text: 'EBV wordt vooral via speeksel overgedragen' },
          { letter: 'B', text: 'EBV veroorzaakt nooit lymfadenopathie' },
          { letter: 'C', text: 'EBV is een bacterie' },
          { letter: 'D', text: 'EBV geeft geen atypische lymfocytose' },
        ],
        correctAnswer: 'A',
        explanation: 'EBV wordt vooral via speeksel overgedragen.',
      },
      {
        id: '1d',
        type: 'meerkeuze',
        points: 2,
        question: `1d. Een tweede patiënt heeft een mononucleosis-achtig beeld, maar minder keelpijn en een negatieve Monospot. Welke verwekker wordt dan waarschijnlijker? (2.0p)`,
        options: [
          { letter: 'A', text: 'EBV' },
          { letter: 'B', text: 'CMV' },
          { letter: 'C', text: 'RSV' },
          { letter: 'D', text: 'Norovirus' },
        ],
        correctAnswer: 'B',
        explanation:
          'CMV-mononucleosis lijkt op EBV, maar geeft vaak minder keelpijn/tonsilhypertrofie en een negatieve Monospot.',
      },
      {
        id: '1e',
        type: 'open',
        points: 3,
        question: `1e. Leg in maximaal 40 woorden uit wat één belangrijk klinisch verschil is tussen EBV-mononucleosis en CMV-mononucleosis. (3.0p)`,
        wordLimit: 40,
        rubric:
          'Kern: EBV vaker keelpijn/forse tonsilhypertrofie; CMV vaker minder keelpijn + negatieve Monospot.',
        modelAnswer:
          'EBV geeft vaker duidelijke keelpijn en forse tonsilhypertrofie. CMV geeft vaker een mononucleosis-achtig beeld met minder uitgesproken keelpijn en een negatieve Monospot.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-2',
    title: 'Casus 2 – Malaria herkennen',
    totalPoints: 11,
    scenario: `Een 25-jarige vrouw komt terug uit Angola. Ze heeft koorts, hoofdpijn, spierpijn en misselijkheid. In het lab worden trombocytopenie en verhoogd lactaat gevonden.

Afbeelding 1 – koortsgrafiek: onregelmatige koortspieken zonder vast 48- of 72-uursritme.`,
    questions: [
      {
        id: '2a',
        type: 'meerkeuze',
        points: 2,
        question: `2a. Welke diagnose moet hoog in de differentiaaldiagnose staan? (2.0p)`,
        options: [
          { letter: 'A', text: 'Malaria tropica' },
          { letter: 'B', text: 'Tinea corporis' },
          { letter: 'C', text: 'Streptokokkenfaryngitis' },
          { letter: 'D', text: 'Impetigo' },
        ],
        correctAnswer: 'A',
        explanation:
          'Reis uit Angola plus koorts, trombocytopenie en verhoogd lactaat passen goed bij malaria tropica.',
      },
      {
        id: '2b',
        type: 'meerkeuze',
        points: 2,
        question: `2b. Welke Plasmodium-soort is het sterkst geassocieerd met cerebrale malaria? (2.0p)`,
        options: [
          { letter: 'A', text: 'P. vivax' },
          { letter: 'B', text: 'P. ovale' },
          { letter: 'C', text: 'P. malariae' },
          { letter: 'D', text: 'P. falciparum' },
        ],
        correctAnswer: 'D',
        explanation: 'P. falciparum is het sterkst geassocieerd met cerebrale malaria.',
      },
      {
        id: '2c',
        type: 'meerkeuze',
        points: 2,
        question: `2c. Welke soort past het best bij deze grafiek? (2.0p)`,
        options: [
          { letter: 'A', text: 'P. falciparum' },
          { letter: 'B', text: 'P. vivax' },
          { letter: 'C', text: 'P. ovale' },
          { letter: 'D', text: 'P. malariae' },
        ],
        correctAnswer: 'A',
        explanation: 'Een onregelmatig koortspatroon past het best bij P. falciparum.',
      },
      {
        id: '2d',
        type: 'meerkeuze',
        points: 2,
        question: `2d. Welke test is het gevoeligst? (2.0p)`,
        options: [
          { letter: 'A', text: 'Antigeensneltest' },
          { letter: 'B', text: 'Uitstrijk' },
          { letter: 'C', text: 'Dikke druppel' },
          { letter: 'D', text: 'Urinekweek' },
        ],
        correctAnswer: 'C',
        explanation: 'De dikke druppel is het gevoeligst.',
      },
      {
        id: '2e',
        type: 'open',
        points: 3,
        question: `2e. Leg in maximaal 40 woorden uit waarom malariaprofylaxe wel tegen ziekte kan beschermen, maar niet altijd tegen infectie zelf. (3.0p)`,
        wordLimit: 40,
        rubric:
          'Kern: werkt vooral op bloedstadia → minder ziekte; infectie/leverstadia/hypnozoïeten niet altijd voorkomen.',
        modelAnswer:
          'Profylaxe werkt vooral tegen de bloedstadia en voorkomt daardoor ziekte. Het voorkomt niet altijd de infectie zelf en ook niet per se alle leverstadia, zoals hypnozoïeten.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-3',
    title: 'Casus 3 – Virale diagnostiek',
    totalPoints: 12,
    scenario: `Een 30-jarige man heeft sinds twee dagen koorts en blaasjes op de huid. De arts wil een virale PCR aanvragen.`,
    questions: [
      {
        id: '3a',
        type: 'meerkeuze',
        points: 2,
        question: `3a. Welk materiaal is het meest geschikt? (2.0p)`,
        options: [
          { letter: 'A', text: 'Uitstrijk van het blaasje in VTM/UTM' },
          { letter: 'B', text: 'Alleen feces' },
          { letter: 'C', text: 'Alleen urine' },
          { letter: 'D', text: 'Alleen serum zonder klinische gegevens' },
        ],
        correctAnswer: 'A',
        explanation: 'Bij een huidblaasje neem je een uitstrijk in VTM/UTM af.',
      },
      {
        id: '3b',
        type: 'meerkeuze',
        points: 2,
        question: `3b. Waarom is een groene heparinebuis ongunstig voor PCR? (2.0p)`,
        options: [
          { letter: 'A', text: 'Omdat heparine PCR kan remmen' },
          { letter: 'B', text: 'Omdat heparine altijd IgG vernietigt' },
          { letter: 'C', text: 'Omdat heparine alleen voor bacteriën is' },
          { letter: 'D', text: 'Omdat heparine de virale load verhoogt' },
        ],
        correctAnswer: 'A',
        explanation: 'Heparine kan PCR remmen en fout-negatieve uitslagen geven.',
      },
      {
        id: '3c',
        type: 'meerkeuze',
        points: 2,
        question: `3c. Welke combinatie past bij een acute primaire infectie? (2.0p)`,
        options: [
          { letter: 'A', text: 'Lage IgM, hoge IgG' },
          { letter: 'B', text: 'Hoge IgM, lage IgG' },
          { letter: 'C', text: 'Alleen hoge IgG' },
          { letter: 'D', text: 'Geen IgM en geen IgG bij elke patiënt' },
        ],
        correctAnswer: 'B',
        explanation: 'Hoge IgM met lage IgG past het best bij een acute primaire infectie.',
      },
      {
        id: '3d',
        type: 'meerkeuze',
        points: 2,
        question: `3d. Wat betekent een lage Ct-waarde meestal? (2.0p)`,
        options: [
          { letter: 'A', text: 'Lage virale load' },
          { letter: 'B', text: 'Hoge virale load' },
          { letter: 'C', text: 'Geen infectie' },
          { letter: 'D', text: 'Alleen oude infectie' },
        ],
        correctAnswer: 'B',
        explanation: 'Een lage Ct-waarde betekent meestal een hoge virale load.',
      },
      {
        id: '3e',
        type: 'open',
        points: 4,
        question: `3e. Noem in maximaal 40 woorden één voordeel van serologie en één voordeel van PCR. (4.0p)`,
        wordLimit: 40,
        rubric:
          '2p serologie: doorgemaakte infectie/immuniteit. 2p PCR: snelle gevoelige detectie actuele infectie.',
        modelAnswer:
          'Serologie is nuttig om een doorgemaakte infectie of immuniteit aan te tonen. PCR is nuttig voor snelle en gevoelige detectie van een actuele infectie.',
        explanation: '',
      },
    ],
  },
]
