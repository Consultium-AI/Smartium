/** Blok 4 oefententamen 4 — casussen 1–3 (bron: Oefententamen blok 4.4, studentversie + antwoordmodel) */

const MALARIA_DIAG_SHUFFLED = ['antigeensneltest', 'dikke druppel', 'uitstrijk']

const MALARIA_DIAG_CORRECT = ['dikke druppel', 'uitstrijk', 'antigeensneltest']

export const blok4Tentamen4PartA = [
  {
    id: 'casus-1',
    title: 'Casus 1 – Mononucleosis: EBV of CMV?',
    totalPoints: 18,
    scenario: `Een 20-jarige student presenteert zich met 8 dagen koorts, vermoeidheid, keelpijn en pijnlijke cervicale lymfeklieren. Bij lichamelijk onderzoek zijn de tonsillen fors vergroot. Het bloedbeeld toont leukocytose met atypische lymfocyten.`,
    questions: [
      {
        id: '1a',
        type: 'meerkeuze',
        points: 2,
        question: `1a. Wat is op dit moment de meest waarschijnlijke diagnose? (2.0p)`,
        options: [
          { letter: 'A', text: 'Acute CMV-mononucleosis' },
          { letter: 'B', text: 'Mononucleosis infectiosa door EBV' },
          { letter: 'C', text: 'Acute toxoplasmose' },
          { letter: 'D', text: 'Tuberculeuze lymfadenitis' },
        ],
        correctAnswer: 'B',
        explanation:
          'Keelpijn, forse tonsillen, cervicale lymfadenopathie en atypische lymfocyten passen het best bij EBV-mononucleosis.',
      },
      {
        id: '1b',
        type: 'meerkeuze',
        points: 2,
        question: `1b. Welke test ondersteunt deze diagnose het best in deze fase? (2.0p)`,
        options: [
          { letter: 'A', text: 'Pneumokokken-urineantigeen' },
          { letter: 'B', text: 'Paul-Bunnell/Monospot' },
          { letter: 'C', text: 'Dikke druppel' },
          { letter: 'D', text: 'KOH-preparaat' },
        ],
        correctAnswer: 'B',
        explanation: 'De Paul-Bunnell/Monospot is klassiek positief bij EBV.',
      },
      {
        id: '1c',
        type: 'meerkeuze',
        points: 2,
        question: `1c. De Monospot blijkt positief. Welke aanvullende bevinding past nu het best bij deze verwekker? (2.0p)`,
        options: [
          { letter: 'A', text: 'Meestal geen keelpijn of tonsilhypertrofie' },
          { letter: 'B', text: 'Primaire infectie verloopt alleen congenitaal' },
          { letter: 'C', text: 'B-celinfectie met uitgesproken T-celrespons' },
          { letter: 'D', text: 'Exclusief verspreid via kattenbakcontact' },
        ],
        correctAnswer: 'C',
        explanation:
          'EBV veroorzaakt B-celinfectie met een uitgesproken T-celrespons; veel klachten komen juist door die immuunrespons.',
      },
      {
        id: '1d',
        type: 'meerkeuze',
        points: 3,
        question: `1d. Drie weken later bespreekt een docent dat een vergelijkbare patiënt óók CMV had kunnen hebben. Welke combinatie past het best bij CMV in vergelijking met EBV? (3.0p)`,
        options: [
          {
            letter: 'A',
            text: 'CMV: Monospot meestal positief; EBV: Monospot meestal negatief',
          },
          {
            letter: 'B',
            text: 'CMV: vaak minder keelpijn/tonsilhypertrofie; EBV: Monospot vaak positief',
          },
          { letter: 'C', text: 'CMV: nooit latent; EBV: altijd latent' },
          {
            letter: 'D',
            text: 'CMV: alleen respiratoire transmissie; EBV: alleen bloedtransmissie',
          },
        ],
        correctAnswer: 'B',
        explanation:
          'CMV-mononucleosis lijkt op EBV, maar geeft vaak minder keelpijn en minder tonsilhypertrofie; Monospot is typisch negatief bij CMV en positief bij EBV.',
      },
      {
        id: '1e',
        type: 'meerkeuze',
        points: 3,
        question: `1e. Een immuungecompromitteerde patiënt met bewezen CMV krijgt een darmbiopt.

Afbeelding 1 – histologie: vergrote cellen met grote intranucleaire inclusies, klassiek beschreven als “uilenogen”.

Welke verwekker en behandeling passen het best bij dit histologische beeld? (3.0p)`,
        options: [
          { letter: 'A', text: 'EBV – oseltamivir' },
          { letter: 'B', text: 'CMV – (val)ganciclovir' },
          { letter: 'C', text: 'HSV – amoxicilline' },
          { letter: 'D', text: 'RSV – nirsevimab' },
        ],
        correctAnswer: 'B',
        explanation:
          '“Uilenogen” passen klassiek bij CMV; bij ernstige CMV-infectie gebruik je (val)ganciclovir.',
      },
      {
        id: '1f',
        type: 'open',
        points: 4,
        question: `1f. Leg in maximaal 50 woorden uit waarom klachten bij EBV voor een belangrijk deel worden veroorzaakt door de immuunrespons van de gastheer. (4.0p)`,
        wordLimit: 50,
        rubric:
          'Kern: EBV infecteert B-cellen; klachten door sterke T-celrespons en cytokinen tegen geïnfecteerde cellen.',
        modelAnswer:
          'EBV infecteert B-cellen, maar de klachten ontstaan vooral door de sterke T-celrespons en verhoogde cytokinen tegen geïnfecteerde cellen. Daardoor ontstaan koorts, lymfadenopathie en vermoeidheid.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-2',
    title: 'Casus 2 – Malaria in keten',
    totalPoints: 17,
    scenario: `Een 26-jarige vrouw meldt zich met koorts, hoofdpijn, spierpijn en misselijkheid, 9 dagen na terugkomst uit Angola. Ze heeft geen keelpijn, hoesten of huiduitslag. Lab toont trombocytopenie en verhoogd lactaat.

Afbeelding 2 – koortsgrafiek: een onregelmatig piekend koortspatroon zonder strak 48- of 72-uursritme.`,
    questions: [
      {
        id: '2a',
        type: 'meerkeuze',
        points: 2,
        question: `2a. Welke diagnose moet nu het hoogst in de differentiaaldiagnose staan? (2.0p)`,
        options: [
          { letter: 'A', text: 'Influenza A' },
          { letter: 'B', text: 'Malaria tropica' },
          { letter: 'C', text: 'Acute HIV-seroconversie' },
          { letter: 'D', text: 'Rotavirusinfectie' },
        ],
        correctAnswer: 'B',
        explanation:
          'Reis naar Angola plus koorts, trombocytopenie en verhoogd lactaat past sterk bij malaria tropica.',
      },
      {
        id: '2b',
        type: 'meerkeuze',
        points: 2,
        question: `2b. Welke uitslag past het best bij de meest gevaarlijke Plasmodium-soort? (2.0p)`,
        options: [
          { letter: 'A', text: 'Quartane koorts om de 72 uur' },
          { letter: 'B', text: 'Tertiaire koorts om de 48 uur' },
          { letter: 'C', text: 'Irregulier koortspatroon' },
          { letter: 'D', text: 'Geen koorts bij infectie' },
        ],
        correctAnswer: 'C',
        explanation: 'P. falciparum geeft typisch een irregulier koortspatroon.',
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
        explanation: 'Een irregulier koortspatroon past het best bij P. falciparum.',
      },
      {
        id: '2d',
        type: 'meerkeuze',
        points: 3,
        question: `2d. Waarom is juist deze soort geassocieerd met cerebrale malaria? (3.0p)`,
        options: [
          { letter: 'A', text: 'Door vorming van hypnozoïeten in hepatocyten' },
          {
            letter: 'B',
            text: 'Door sekwestratie van geïnfecteerde erytrocyten in capillairen',
          },
          { letter: 'C', text: 'Door exclusieve infectie van neutrofielen' },
          { letter: 'D', text: 'Door productie van endotoxine' },
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
        question: `2e. Rangschik de volgende diagnostische methoden van hoogste naar laagste sensitiviteit. (3.0p)
antigeensneltest
dikke druppel
uitstrijk`,
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
        question: `2f. Een student vraagt welke preventieve maatregel vooral beschermt tegen ziekte en niet per se tegen infectie of hypnozoïeten. Wat is het beste antwoord? (2.0p)`,
        options: [
          { letter: 'A', text: 'Malariaprofylaxe' },
          { letter: 'B', text: 'ORS' },
          { letter: 'C', text: 'Monoklonaal anti-RSV' },
          { letter: 'D', text: 'Rabies-immunoglobuline' },
        ],
        correctAnswer: 'A',
        explanation:
          'Malariaprofylaxe beschermt vooral tegen ziekte, met name door werking op bloedstadia.',
      },
      {
        id: '2g',
        type: 'open',
        points: 3,
        question: `2g. Leg in maximaal 50 woorden uit waarom bloedafname voor malaria-diagnostiek niet hoeft te wachten tot een volgende koortspiek. (3.0p)`,
        wordLimit: 50,
        rubric:
          'Kern: parasieten ook buiten koortsmoment aantoonbaar; niet afhankelijk van tijdstip koorts.',
        modelAnswer:
          'Bloedafname hoeft niet te wachten op een koortspiek, omdat malaria-parasieten ook buiten een koortsmoment aantoonbaar kunnen zijn. De diagnostiek is niet afhankelijk van het tijdstip van koorts.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-3',
    title: 'Casus 3 – Lymfeklier en lymfadenopathie',
    totalPoints: 12,
    scenario: `Een 17-jarige jongen komt met een pijnlijke vergrote halslymfeklier. Hij heeft koorts en faryngitis. De supervisor wil dat je niet alleen de klinische differentiaaldiagnose kent, maar ook begrijpt hoe een lymfeklier functioneert.

Afbeelding 3 – lymfeklierschema: zone A = follikel, zone B = paracortex, zone C = medulla; een hoog-endotheliale venule (HEV) mondt uit in zone B.`,
    questions: [
      {
        id: '3a',
        type: 'meerkeuze',
        points: 2,
        question: `3a. Welke infectieuze oorzaak past het best bij faryngitis plus cervicale lymfadenopathie? (2.0p)`,
        options: [
          { letter: 'A', text: 'EBV' },
          { letter: 'B', text: 'Giardia lamblia' },
          { letter: 'C', text: 'Ascaris lumbricoides' },
          { letter: 'D', text: 'Impetigo' },
        ],
        correctAnswer: 'A',
        explanation: 'EBV is een klassieke oorzaak van faryngitis plus cervicale lymfadenopathie.',
      },
      {
        id: '3b',
        type: 'meerkeuze',
        points: 2,
        question: `3b. Waar komen naïeve T-lymfocyten vooral binnen en waar worden zij vooral geactiveerd? (2.0p)`,
        options: [
          { letter: 'A', text: 'Via HEV naar paracortex' },
          { letter: 'B', text: 'Via miltarterie naar follikel' },
          { letter: 'C', text: 'Via sinusoïden naar medulla' },
          { letter: 'D', text: 'Via pleuraholte naar cortex' },
        ],
        correctAnswer: 'A',
        explanation:
          'Naïeve T-cellen komen vooral via HEV binnen in de paracortex, waar ook activatie plaatsvindt.',
      },
      {
        id: '3c',
        type: 'meerkeuze',
        points: 2,
        question: `3c. Welke cel presenteert in deze context het meest direct antigeen aan naïeve T-cellen? (2.0p)`,
        options: [
          { letter: 'A', text: 'Erytrocyt' },
          { letter: 'B', text: 'Dendritische cel' },
          { letter: 'C', text: 'Type I pneumocyt' },
          { letter: 'D', text: 'Plasmacel' },
        ],
        correctAnswer: 'B',
        explanation: 'Dendritische cellen presenteren antigeen aan naïeve T-cellen.',
      },
      {
        id: '3d',
        type: 'meerkeuze',
        points: 2,
        question: `3d. De docent vervolgt met een patiënt met niet-pijnlijke chronische cervicale lymfadenopathie, vermagering en nachtzweten. Welke diagnose wordt nu waarschijnlijker? (2.0p)`,
        options: [
          { letter: 'A', text: 'Tuberculeuze lymfadenitis' },
          { letter: 'B', text: 'Tinea corporis' },
          { letter: 'C', text: 'Norovirus' },
          { letter: 'D', text: 'Rabies' },
        ],
        correctAnswer: 'A',
        explanation:
          'Niet-pijnlijke chronische klieren met vermagering en nachtzweten passen goed bij tuberculeuze lymfadenitis.',
      },
      {
        id: '3e',
        type: 'open',
        points: 4,
        question: `3e. Noem in maximaal 45 woorden de recirculatieroute van een naïeve lymfocyt vanaf het bloed via de lymfeklier terug naar het bloed. (4.0p)`,
        wordLimit: 45,
        rubric: 'Kern: bloed → HEV → lymfeklier → efferente lymfe → ductus thoracicus → bloed.',
        modelAnswer:
          'Bloed → via HEV de lymfeklier in → daarna via efferente lymfe eruit → via grotere lymfebanen en ductus thoracicus terug naar de bloedbaan.',
        explanation: '',
      },
    ],
  },
]
