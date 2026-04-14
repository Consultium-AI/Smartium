/** Blok 4 oefententamen 5 — casussen 1–3 (bron: oefententamen blok 4.5, studentversie + antwoordmodel) */

const MALARIA_DIAG_SHUFFLED = ['uitstrijk', 'dikke druppel', 'antigeensneltest']

const MALARIA_DIAG_CORRECT = ['dikke druppel', 'uitstrijk', 'antigeensneltest']

export const blok4Tentamen5PartA = [
  {
    id: 'casus-1',
    title: 'Casus 1 – Mononucleosis met een twist',
    totalPoints: 16,
    scenario: `Een 19-jarige student meldt zich met 9 dagen koorts, ernstige vermoeidheid, keelpijn en pijnlijke cervicale lymfeklieren. Bij onderzoek zijn de tonsillen vergroot. Het bloedbeeld toont leukocytose met atypische lymfocyten.`,
    questions: [
      {
        id: '1a',
        type: 'meerkeuze',
        points: 2,
        question: `1a. Wat is op dit moment de meest waarschijnlijke diagnose? (2.0p)`,
        options: [
          { letter: 'A', text: 'Mononucleosis infectiosa door EBV' },
          { letter: 'B', text: 'CMV-mononucleosis' },
          { letter: 'C', text: 'Toxoplasmose' },
          { letter: 'D', text: 'Kattenkrabziekte' },
        ],
        correctAnswer: 'A',
        explanation:
          'Keelpijn, forse tonsillen, cervicale lymfadenopathie en atypische lymfocyten passen het best bij EBV-mononucleosis.',
      },
      {
        id: '1b',
        type: 'meerkeuze',
        points: 2,
        question: `1b. Welke test ondersteunt deze diagnose het best in deze fase? (2.0p)`,
        options: [
          { letter: 'A', text: 'Paul-Bunnell/Monospot' },
          { letter: 'B', text: 'Pneumokokken-urineantigeen' },
          { letter: 'C', text: 'Dikke druppel' },
          { letter: 'D', text: 'KOH-preparaat' },
        ],
        correctAnswer: 'A',
        explanation: 'De Paul-Bunnell/Monospot is klassiek positief bij EBV.',
      },
      {
        id: '1c',
        type: 'meerkeuze',
        points: 3,
        question: `1c. De Monospot blijkt positief. Welke uitspraak over de pathogenese van de klachten is het best? (3.0p)`,
        options: [
          {
            letter: 'A',
            text: 'De klachten worden vooral veroorzaakt door directe vernietiging van erytrocyten',
          },
          {
            letter: 'B',
            text: 'De klachten worden vooral veroorzaakt door een uitgesproken T-celrespons op geïnfecteerde B-cellen',
          },
          {
            letter: 'C',
            text: 'De klachten ontstaan vooral door neutrofiele granulocyten in de tonsillen',
          },
          { letter: 'D', text: 'De klachten ontstaan door afwezigheid van cytokinen' },
        ],
        correctAnswer: 'B',
        explanation:
          'Bij EBV worden de klachten vooral veroorzaakt door een uitgesproken T-celrespons op geïnfecteerde B-cellen, met verhoogde cytokinen.',
      },
      {
        id: '1d',
        type: 'meerkeuze',
        points: 2,
        question: `1d. Een week later bespreekt de supervisor een tweede patiënt: ook koorts en atypische lymfocyten, maar nu zonder keelpijn of forse tonsilhypertrofie. De Monospot is negatief. Welke diagnose wordt nu waarschijnlijker? (2.0p)`,
        options: [
          { letter: 'A', text: 'EBV-mononucleosis' },
          { letter: 'B', text: 'CMV-mononucleosis' },
          { letter: 'C', text: 'Legionella-infectie' },
          { letter: 'D', text: 'RSV-bronchiolitis' },
        ],
        correctAnswer: 'B',
        explanation:
          'CMV-mononucleosis lijkt op EBV, maar geeft vaak minder keelpijn en minder tonsilhypertrofie; de Monospot is meestal negatief bij CMV.',
      },
      {
        id: '1e',
        type: 'meerkeuze',
        points: 3,
        question: `1e. Bij een immuungecompromitteerde patiënt met bewezen CMV wordt een biopt bekeken.

Afbeelding 1 – histologie: vergrote cellen met grote intranucleaire inclusies, klassiek “uilenogen”.

Welke combinatie past het best? (3.0p)`,
        options: [
          { letter: 'A', text: 'CMV – (val)ganciclovir' },
          { letter: 'B', text: 'EBV – oseltamivir' },
          { letter: 'C', text: 'HSV – amoxicilline' },
          { letter: 'D', text: 'Influenza – aciclovir' },
        ],
        correctAnswer: 'A',
        explanation: '“Uilenogen” passen bij CMV; (val)ganciclovir is de relevante therapie.',
      },
      {
        id: '1f',
        type: 'open',
        points: 4,
        question: `1f. Noem in maximaal 50 woorden twee verschillen tussen EBV- en CMV-mononucleosis die je in deze casus hebt gebruikt. (4.0p)`,
        wordLimit: 50,
        rubric:
          'Kern: EBV keelpijn/tonsilhypertrofie + Monospot+; CMV minder keelpijn + Monospot−; CMV-IgM bij acute CMV.',
        modelAnswer:
          'EBV geeft vaker duidelijke keelpijn/tonsilhypertrofie en een positieve Monospot. CMV geeft vaker minder keelpijn en een negatieve Monospot, met CMV-IgM positief bij acute infectie.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-2',
    title: 'Casus 2 – Malaria als ketencasus',
    totalPoints: 17,
    scenario: `Een 27-jarige vrouw presenteert zich op de SEH met hoofdpijn, spierpijn, misselijkheid en koorts. Zij is 10 dagen geleden teruggekeerd uit Angola. Zij heeft geen hoesten, keelpijn of huiduitslag. Lab toont trombocytopenie en verhoogd lactaat.

Afbeelding 2 – koortsgrafiek: onregelmatige koortspieken zonder vast 48- of 72-uursritme.`,
    questions: [
      {
        id: '2a',
        type: 'meerkeuze',
        points: 2,
        question: `2a. Wat is de meest waarschijnlijke diagnose? (2.0p)`,
        options: [
          { letter: 'A', text: 'Influenza' },
          { letter: 'B', text: 'Malaria tropica' },
          { letter: 'C', text: 'Acute hepatitis A' },
          { letter: 'D', text: 'Dengue is de enige plausibele diagnose' },
        ],
        correctAnswer: 'B',
        explanation:
          'Angola is endemisch gebied; hoofdpijn, spierpijn, misselijkheid, trombocytopenie en verhoogd lactaat passen bij malaria tropica.',
      },
      {
        id: '2b',
        type: 'meerkeuze',
        points: 2,
        question: `2b. Welk koortspatroon past het best bij de gevaarlijkste verwekker in deze casus? (2.0p)`,
        options: [
          { letter: 'A', text: 'Strikt tertiaan patroon, elke 48 uur' },
          { letter: 'B', text: 'Strikt quartaan patroon, elke 72 uur' },
          { letter: 'C', text: 'Irregulier koortspatroon' },
          { letter: 'D', text: 'Geen koorts' },
        ],
        correctAnswer: 'C',
        explanation: 'P. falciparum geeft een irregulier koortspatroon.',
      },
      {
        id: '2c',
        type: 'meerkeuze',
        points: 2,
        question: `2c. Welke Plasmodium-soort past hier het best bij? (2.0p)`,
        options: [
          { letter: 'A', text: 'P. vivax' },
          { letter: 'B', text: 'P. ovale' },
          { letter: 'C', text: 'P. malariae' },
          { letter: 'D', text: 'P. falciparum' },
        ],
        correctAnswer: 'D',
        explanation: 'Een onregelmatige koortsgrafiek past het best bij P. falciparum.',
      },
      {
        id: '2d',
        type: 'meerkeuze',
        points: 3,
        question: `2d. Waarom is juist deze soort geassocieerd met cerebrale malaria? (3.0p)`,
        options: [
          { letter: 'A', text: 'Door hypnozoïeten in de lever' },
          {
            letter: 'B',
            text: 'Door sekwestratie van geïnfecteerde erytrocyten in capillairen',
          },
          { letter: 'C', text: 'Door vorming van syncytia' },
          { letter: 'D', text: 'Door gebrek aan antistoffen tegen LPS' },
        ],
        correctAnswer: 'B',
        explanation:
          'Cerebrale malaria ontstaat door sekwestratie van geïnfecteerde erytrocyten in capillairen.',
      },
      {
        id: '2e',
        type: 'beeldvraag',
        points: 3,
        gradingMethod: 'order',
        question: `2e. Rangschik de volgende testen van meest naar minst sensitief. (3.0p)
uitstrijk
dikke druppel
antigeensneltest`,
        orderIntro: 'Volgorde van hoogste naar laagste sensitiviteit (1 = het gevoeligst, 3 = het minst gevoelig):',
        orderOptions: [...MALARIA_DIAG_SHUFFLED],
        correctOrder: [...MALARIA_DIAG_CORRECT],
        expectedAnswer: 'dikke druppel → uitstrijk → antigeensneltest',
        rubric: 'Alleen volledig juiste volgorde = 3p.',
        modelAnswer:
          'Dikke druppel heeft de hoogste sensitiviteit, daarna uitstrijk, daarna antigeensneltest.',
        explanation: '',
      },
      {
        id: '2f',
        type: 'meerkeuze',
        points: 2,
        question: `2f. Welke uitspraak over malariaprofylaxe is juist? (2.0p)`,
        options: [
          { letter: 'A', text: 'Profylaxe voorkomt infectie van levercellen volledig' },
          {
            letter: 'B',
            text: 'Profylaxe voorkomt vooral ziekte doordat het werkt op bloedstadia',
          },
          { letter: 'C', text: 'Profylaxe voorkomt altijd hypnozoïeten' },
          { letter: 'D', text: 'Profylaxe maakt diagnostiek overbodig' },
        ],
        correctAnswer: 'B',
        explanation:
          'Profylaxe beschermt vooral tegen ziekte, omdat het vooral werkt op erytrocytaire bloedstadia; niet tegen infectie of hypnozoïeten.',
      },
      {
        id: '2g',
        type: 'open',
        points: 3,
        question: `2g. Leg in maximaal 50 woorden uit waarom bloedafname voor malaria-diagnostiek niet hoeft te wachten op een volgende koortspiek. (3.0p)`,
        wordLimit: 50,
        rubric:
          'Kern: parasieten ook buiten piek aantoonbaar; moment van afname niet afhankelijk van koorts.',
        modelAnswer:
          'Bloedafname hoeft niet te wachten op een koortspiek, omdat malaria ook buiten een piek aantoonbaar kan zijn; het moment van afname is niet afhankelijk van koortsperioden.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-3',
    title: 'Casus 3 – Virale diagnostiek als beslisboom',
    totalPoints: 15,
    scenario: `Een 34-jarige man heeft sinds 3 dagen koorts en blaasjes op de romp. Je wilt gericht virale diagnostiek inzetten.

Een coassistent wil aanvullend bloed afnemen in een groene heparinebuis voor PCR.

De volgende uitslagen komen binnen:
patiënt X: hoge IgM, lage IgG
patiënt Y: alleen hoge IgG
patiënt Z: Ct-waarde 17`,
    questions: [
      {
        id: '3a',
        type: 'meerkeuze',
        points: 2,
        question: `3a. Welk materiaal is voor moleculaire diagnostiek van een huidblaasje het meest passend? (2.0p)`,
        options: [
          {
            letter: 'A',
            text: 'Uitstrijk in VTM/UTM met duidelijke locatievermelding',
          },
          { letter: 'B', text: 'Alleen stolbloed' },
          { letter: 'C', text: 'Feces' },
          { letter: 'D', text: 'Urine zonder aanvraagformulier' },
        ],
        correctAnswer: 'A',
        explanation:
          'Voor een huidblaasje gebruik je een uitstrijk in VTM/UTM met vermelding van de locatie.',
      },
      {
        id: '3b',
        type: 'meerkeuze',
        points: 2,
        question: `3b. Waarom is dit ongunstig? (2.0p)`,
        options: [
          { letter: 'A', text: 'Heparine inactiveert IgG' },
          { letter: 'B', text: 'Heparine remt PCR en kan fout-negatieven geven' },
          { letter: 'C', text: 'Heparine maakt PCR juist gevoeliger' },
          {
            letter: 'D',
            text: 'Heparine werkt alleen verstorend bij bacteriële diagnostiek',
          },
        ],
        correctAnswer: 'B',
        explanation: 'Heparine remt PCR en kan fout-negatieve resultaten geven.',
      },
      {
        id: '3c',
        type: 'meerkeuze',
        points: 3,
        question: `3c. Welke interpretatie is juist? (3.0p)`,
        options: [
          { letter: 'A', text: 'X past bij een acute primaire infectie' },
          {
            letter: 'B',
            text: 'Y past per definitie bij een acute primaire infectie',
          },
          { letter: 'C', text: 'Z past bij lage virale load' },
          { letter: 'D', text: 'X en Y zijn allebei niet interpreteerbaar' },
        ],
        correctAnswer: 'A',
        explanation: 'Hoge IgM met lage IgG past bij een acute primaire infectie.',
      },
      {
        id: '3d',
        type: 'meerkeuze',
        points: 2,
        question: `3d. Wat betekent een lage Ct-waarde het meest waarschijnlijk? (2.0p)`,
        options: [
          { letter: 'A', text: 'Hoge virale load' },
          { letter: 'B', text: 'Lage virale load' },
          { letter: 'C', text: 'Alleen oude infectie' },
          { letter: 'D', text: 'Slechte monsterkwaliteit' },
        ],
        correctAnswer: 'A',
        explanation: 'Een lage Ct-waarde betekent meestal een hoge virale load.',
      },
      {
        id: '3e',
        type: 'meerkeuze',
        points: 2,
        question: `3e. Welke uitspraak over serologie is het best? (2.0p)`,
        options: [
          {
            letter: 'A',
            text: 'Serologie is ideaal in de zeer acute fase, nog vóór antilichaamvorming',
          },
          {
            letter: 'B',
            text: 'Serologie is nuttig als het virus al verdwenen is of voor immuniteitsbepaling',
          },
          { letter: 'C', text: 'Serologie is altijd specifieker dan PCR' },
          {
            letter: 'D',
            text: 'IgM betekent altijd foutloos een primaire infectie',
          },
        ],
        correctAnswer: 'B',
        explanation:
          'Serologie is bruikbaar als het virus al verdwenen is of voor immuniteitsbepaling; minder geschikt in het zeer acute moment.',
      },
      {
        id: '3f',
        type: 'open',
        points: 4,
        question: `3f. Noem in maximaal 50 woorden één voordeel van multiplex PCR en één belangrijke valkuil van moleculaire diagnostiek. (4.0p)`,
        wordLimit: 50,
        rubric:
          '2p multiplex: meerdere verwekkers tegelijk. 2p valkuil: contaminatie/slechte integriteit → fout+/-.',
        modelAnswer:
          'Multiplex PCR kan meerdere verwekkers tegelijk detecteren. Een belangrijke valkuil is contaminatie of slechte sample-integriteit, wat fout-positieve of fout-negatieve resultaten kan geven.',
        explanation: '',
      },
    ],
  },
]
