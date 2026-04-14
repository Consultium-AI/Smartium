/** Blok 4 oefententamen 1 — casussen 7–9 */

export const blok4Tentamen1PartC = [
  {
    id: 'casus-7',
    title: 'Casus 7 – Lymfeklier en lymfadenopathie',
    totalPoints: 12,
    scenario: `Een 19-jarige student heeft sinds een week koorts, keelpijn en pijnlijke cervicale lymfeklieren. Het bloedbeeld toont atypische lymfocyten.
Afbeelding 1 – schematische lymfeklier (tekstuele beschrijving)
Zone A: follikels in de buitenste cortex
Zone B: paracortex
Zone C: medullaire strengen
Ingang vanuit bloed via een HEV (hoog-endotheliale venule)`,
    questions: [
      {
        id: '7a',
        type: 'meerkeuze',
        points: 2,
        question: `7a. In welke zone ontmoeten naïeve T-cellen en dendritische cellen elkaar vooral? (2.0p)`,
        options: [
          { letter: 'A', text: 'Zone A' },
          { letter: 'B', text: 'Zone B' },
          { letter: 'C', text: 'Zone C' },
          { letter: 'D', text: 'Buiten de lymfeklier in de miltvene' },
        ],
        correctAnswer: 'B',
        explanation: 'Naïeve T-cellen komen via HEV binnen en ontmoeten dendritische cellen vooral in de paracortex (zone B).',
      },
      {
        id: '7b',
        type: 'meerkeuze',
        points: 2,
        question: `7b. Welke test past het best bij de meest waarschijnlijke diagnose in deze casus? (2.0p)`,
        options: [
          { letter: 'A', text: 'Paul-Bunnell/Monospot' },
          { letter: 'B', text: 'Urine-antigeentest pneumokok' },
          { letter: 'C', text: 'Dikke druppel' },
          { letter: 'D', text: "Wood's lamp" },
        ],
        correctAnswer: 'A',
        explanation: 'Bij EBV is de Paul-Bunnell/Monospot-test klassiek positief.',
      },
      {
        id: '7c',
        type: 'meerkeuze',
        points: 2,
        question: `7c. Welke uitspraak onderscheidt CMV-mononucleosis het best van EBV-mononucleosis? (2.0p)`,
        options: [
          { letter: 'A', text: 'CMV geeft vaker keelpijn en tonsilhypertrofie dan EBV' },
          { letter: 'B', text: 'Monospot is meestal positief bij CMV en negatief bij EBV' },
          {
            letter: 'C',
            text: 'CMV kan klinisch lijken op EBV, maar vaak zonder duidelijke keelpijn of tonsilhypertrofie',
          },
          { letter: 'D', text: 'EBV veroorzaakt nooit atypische lymfocytose' },
        ],
        correctAnswer: 'C',
        explanation: 'CMV-mononucleosis lijkt op EBV, maar geeft vaker minder keelpijn en minder tonsilhypertrofie.',
      },
      {
        id: '7d',
        type: 'meerkeuze',
        points: 2,
        question: `7d. Een patiënt heeft niet-pijnlijke chronische cervicale lymfadenopathie met nachtzweten en vermagering. Welke diagnose past het best? (2.0p)`,
        options: [
          { letter: 'A', text: 'Kattenkrabziekte' },
          { letter: 'B', text: 'Tuberculeuze lymfadenitis' },
          { letter: 'C', text: 'Tinea capitis' },
          { letter: 'D', text: 'Rotavirusinfectie' },
        ],
        correctAnswer: 'B',
        explanation:
          'Chronische, niet-pijnlijke lymfadenopathie met nachtzweten en vermagering past goed bij tuberculeuze lymfadenitis.',
      },
      {
        id: '7e',
        type: 'open',
        points: 4,
        question: `7e. Beschrijf in maximaal 45 woorden de recirculatieroute van een naïeve lymfocyt vanaf het bloed naar en uit de lymfeklier. (4.0p)`,
        wordLimit: 45,
        rubric:
          'Kern: bloed → via HEV de lymfeklier in → efferente lymfe → ductus thoracicus → terug in bloedbaan.',
        modelAnswer:
          'Via de HEV gaat de naïeve lymfocyt vanuit het bloed de lymfeklier in; daarna verlaat hij de klier via efferente lymfe, ductus thoracicus en terug naar de bloedbaan.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-8',
    title: 'Casus 8 – Schimmels of niet?',
    totalPoints: 10,
    scenario: `Beeldvraag 1
Afbeelding 2 – tekstuele foto-beschrijving: Op de romp zie je een ronde, scherp begrensde erythemateuze plaque met een rodere verheven rand, fijne schilfering aan de rand en centrale opheldering.

Beeldvraag 2
Afbeelding 3 – tekstuele foto-beschrijving: Een afwijking in de flexuur van de elleboog is onscherp begrensd. Er is lichenificatie, papels en krabeffecten. Duidelijke randactiviteit ontbreekt.

Beeldvraag 3
Afbeelding 4 – tekstuele foto-beschrijving: De nagel toont distaal een gelige verkleuring als een “olievlek” met onycholyse.`,
    questions: [
      {
        id: '8a',
        type: 'meerkeuze',
        points: 2,
        question: `8a. Wat is de meest waarschijnlijke diagnose? (2.0p)
(Zie beeldvraag 1 / afbeelding 2 in de casustekst.)`,
        options: [
          { letter: 'A', text: 'Tinea corporis' },
          { letter: 'B', text: 'Eczeem' },
          { letter: 'C', text: 'Impetigo' },
          { letter: 'D', text: 'Psoriasis vulgaris' },
        ],
        correctAnswer: 'A',
        explanation:
          'Een scherp begrensde ringvormige plaque met randactiviteit en centrale opheldering past bij tinea corporis.',
      },
      {
        id: '8b',
        type: 'meerkeuze',
        points: 2,
        question: `8b. Wat is de meest waarschijnlijke diagnose? (2.0p)
(Zie beeldvraag 2 / afbeelding 3 in de casustekst.)`,
        options: [
          { letter: 'A', text: 'Tinea corporis' },
          { letter: 'B', text: 'Eczeem' },
          { letter: 'C', text: 'Tinea barbae' },
          { letter: 'D', text: 'Onychomycose' },
        ],
        correctAnswer: 'B',
        explanation: 'Flexurale lokalisatie, lichenificatie en afwezige randactiviteit passen beter bij eczeem.',
      },
      {
        id: '8c',
        type: 'meerkeuze',
        points: 2,
        question: `8c. Welke diagnose past het best? (2.0p)
(Zie beeldvraag 3 / afbeelding 4 in de casustekst.)`,
        options: [
          { letter: 'A', text: 'Nagelpsoriasis' },
          { letter: 'B', text: 'Onychomycose' },
          { letter: 'C', text: 'Impetigo' },
          { letter: 'D', text: 'Tinea capitis' },
        ],
        correctAnswer: 'B',
        explanation: 'Gele distale verkleuring met onycholysis is kenmerkend voor onychomycose.',
      },
      {
        id: '8d',
        type: 'meerkeuze',
        points: 2,
        question: `8d. Welk onderzoek is het meest geschikt om snel schimmeldraden aan te tonen bij twijfel aan een dermatomycose? (2.0p)`,
        options: [
          { letter: 'A', text: 'Dikke druppel' },
          { letter: 'B', text: 'KOH-preparaat' },
          { letter: 'C', text: 'Monospot' },
          { letter: 'D', text: 'Antigeentest in urine' },
        ],
        correctAnswer: 'B',
        explanation: 'Een KOH-preparaat is geschikt om snel schimmeldraden aan te tonen.',
      },
      {
        id: '8e',
        type: 'meerkeuze',
        points: 2,
        question: `8e. Een 8-jarig kind heeft tinea capitis met kale plekken en afgebroken haren. Wat is het beste beleid? (2.0p)`,
        options: [
          { letter: 'A', text: 'Alleen drooghouden van de hoofdhuid' },
          { letter: 'B', text: 'Alleen topicale terbinafine' },
          { letter: 'C', text: 'Oraal antimycoticum om verlittekening te voorkomen' },
          { letter: 'D', text: 'Geen behandeling, spontane genezing is altijd snel' },
        ],
        correctAnswer: 'C',
        explanation: 'Tinea capitis vereist orale therapie, mede om verlittekening en blijvende alopecie te voorkomen.',
      },
    ],
  },
  {
    id: 'casus-9',
    title: 'Casus 9 – Diarree: viraal of parasitair?',
    totalPoints: 13,
    scenario: `Een 11 maanden oud meisje, niet gevaccineerd volgens het Rijksvaccinatieprogramma, presenteert zich in februari met koorts, waterige diarree en braken. Ze drinkt nog redelijk, heeft minder plasluiers, maar is alert.`,
    questions: [
      {
        id: '9a',
        type: 'meerkeuze',
        points: 2,
        question: `9a. Wat is de meest waarschijnlijke verwekker? (2.0p)`,
        options: [
          { letter: 'A', text: 'Entamoeba histolytica' },
          { letter: 'B', text: 'Rotavirus' },
          { letter: 'C', text: 'Ascaris lumbricoides' },
          { letter: 'D', text: 'Bartonella henselae' },
        ],
        correctAnswer: 'B',
        explanation:
          'Een ongevaccineerd kind in februari met koorts, braken en waterige diarree past goed bij rotavirus.',
      },
      {
        id: '9b',
        type: 'meerkeuze',
        points: 2,
        question: `9b. Welk materiaal is het meest aangewezen voor moleculaire diagnostiek van virale gastro-enteritis? (2.0p)`,
        options: [
          { letter: 'A', text: 'Urine' },
          { letter: 'B', text: 'Serum' },
          { letter: 'C', text: 'Feces' },
          { letter: 'D', text: 'Liquor' },
        ],
        correctAnswer: 'C',
        explanation: 'Feces is het aangewezen materiaal voor moleculaire diagnostiek van virale gastro-enteritis.',
      },
      {
        id: '9c',
        type: 'meerkeuze',
        points: 2,
        question: `9c. Welke uitspraak over norovirus is juist? (2.0p)`,
        options: [
          { letter: 'A', text: 'Het veroorzaakt nooit uitbraken in zorginstellingen' },
          { letter: 'B', text: 'Het heeft een hoge infectiedosis nodig' },
          { letter: 'C', text: 'Het kan ook aerogeen via braaksel verspreiden' },
          { letter: 'D', text: 'Het is een dubbelstrengs DNA-virus' },
        ],
        correctAnswer: 'C',
        explanation: 'Norovirus kan ook aerogeen via braaksel verspreiden.',
      },
      {
        id: '9d',
        type: 'meerkeuze',
        points: 3,
        question: `9d. Welke combinatie van verwekker en klacht is het meest passend? (3.0p)`,
        options: [
          { letter: 'A', text: 'Giardia lamblia – bloederige diarree' },
          { letter: 'B', text: 'Entamoeba histolytica – bloederige diarree' },
          { letter: 'C', text: 'Cryptosporidium – uitsluitend langdurige obstipatie' },
          { letter: 'D', text: 'Ascaris – acute virale conjunctivitis' },
        ],
        correctAnswer: 'B',
        explanation: 'Entamoeba histolytica past bij bloederige diarree.',
      },
      {
        id: '9e',
        type: 'open',
        points: 4,
        question: `9e. Leg in maximaal 45 woorden uit waarom vaccinatie een vorm van actieve immunisatie is. Gebruik in je antwoord ook het begrip immunologisch geheugen. (4.0p)`,
        wordLimit: 45,
        rubric:
          'Kern: eigen immuunsysteem gestimuleerd; specifieke afweer en geheugen; latere blootstelling sneller opgevangen.',
        modelAnswer:
          'Vaccinatie is actieve immunisatie omdat het eigen immuunsysteem wordt gestimuleerd om een specifieke afweerrespons en immunologisch geheugen op te bouwen, waardoor latere blootstelling sneller wordt opgevangen.',
        explanation: '',
      },
    ],
  },
]
