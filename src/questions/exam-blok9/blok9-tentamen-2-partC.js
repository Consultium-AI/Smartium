/** Blok 9 oefententamen 2 - casussen 7-8 */

const LAB7 = `Parameter | Uitslag | Referentie
Leukocyten | 15,2 x10^9/L | 4,0-10,0
CRP | 162 mg/L | <5
Ureum | 6,4 mmol/L | 3,0-8,0`

const VITALS8 = `Parameter | Uitslag
Pols | 146/min
RR | 165/92 mmHg
Ademfrequentie | 30/min
Temp | 39,7 C
Saturatie | 98% RA`

const ORDER_8D = [
  'Vitale stabilisatie',
  'Toxidroom herkennen',
  'Gericht aanvullend onderzoek en verdere intoxicatie-anamnese',
]

export const blok9Tentamen2PartC = [
  {
    id: 'casus-7',
    title: 'Casus 7 - Pneumonie',
    totalPoints: 12,
    scenario: `Een 74-jarige vrouw komt met koorts, hoesten en dyspneu. Bij onderzoek: temperatuur 38,8 C, ademfrequentie 28/min, bloeddruk 108/68 mmHg, saturatie 90% aan kamerlucht. Zij is niet verward.
Laboratorium
${LAB7}
Figuur 1 - Beeldvraag
Thoraxfoto-beschrijving: rechts onder een gelokaliseerde, homogene consolidatie in de onderkwab.`,
    questions: [
      {
        id: '7a',
        type: 'meerkeuze',
        points: 2,
        question: `7a. (2p)
Welke diagnose past het best?`,
        options: [
          { letter: 'A', text: 'Pneumonie' },
          { letter: 'B', text: 'Longembolie zonder verdere differentiaal' },
          { letter: 'C', text: 'Astma zonder infectie' },
          { letter: 'D', text: 'Spanningspneumothorax' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
      {
        id: '7b',
        type: 'meerkeuze',
        points: 2,
        question: `7b. (2p)
Welk radiologisch patroon wordt beschreven in figuur 1?`,
        options: [
          { letter: 'A', text: 'Lobaire pneumonie' },
          { letter: 'B', text: 'Interstitiele pneumonie' },
          { letter: 'C', text: 'Normale thoraxfoto' },
          { letter: 'D', text: 'Pleurale lijn passend bij pneumothorax' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
      {
        id: '7c',
        type: 'meerkeuze',
        points: 2,
        question: `7c. (2p)
Wat is de CURB-65-score?`,
        options: [
          { letter: 'A', text: '0' },
          { letter: 'B', text: '1' },
          { letter: 'C', text: '2' },
          { letter: 'D', text: '3' },
        ],
        correctAnswer: 'B',
        explanation:
          'Confusion nee; ureum niet > 7; RR niet >= 30; bloeddruk niet laag; leeftijd >= 65 wel. Totaal = 1.',
      },
      {
        id: '7d',
        type: 'open',
        points: 3,
        question: `7d. (3p)
Noem 3 klinische bevindingen of symptomen die goed passen bij pneumonie.
Maximaal 40 woorden.`,
        wordLimit: 40,
        rubric:
          '1 punt per goed genoemd symptoom/bevinding, max 3. Voorbeelden: koorts, hoesten, sputumproductie, dyspneu, tachypnoe, hypoxemie, auscultatoire afwijkingen.',
        modelAnswer:
          'Koorts, hoesten en dyspneu passen goed bij pneumonie. Ook tachypnoe of hypoxemie zijn klassieke bevindingen.',
        explanation: '',
      },
      {
        id: '7e',
        type: 'open',
        points: 3,
        question: `7e. (3p)
Waarom is X-thorax vaak het belangrijkste eerste aanvullende onderzoek bij verdenking op pneumonie?
Maximaal 40 woorden.`,
        wordLimit: 40,
        rubric:
          '1p laagdrempelig/snel; 1p infiltraat/consolidatie zichtbaar; 1p ondersteunt diagnose.',
        modelAnswer:
          'Een X-thorax is laagdrempelig, snel beschikbaar en kan een infiltraat of consolidatie zichtbaar maken. Daardoor helpt het de klinische verdenking op pneumonie te ondersteunen.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-8',
    title: 'Casus 8 - Een leuk feestje',
    totalPoints: 14,
    scenario: `Een 21-jarige man wordt op de SEH gebracht na een feest. Hij is erg onrustig, transpireert, heeft wijde pupillen en praat verward. Zijn vrienden weten niet precies wat hij heeft ingenomen.
Vitale parameters
${VITALS8}
Termuitleg: toxidroom = herkenbaar patroon van verschijnselen dat past bij een bepaalde groep intoxicaties.`,
    questions: [
      {
        id: '8a',
        type: 'meerkeuze',
        points: 2,
        question: `8a. (2p)
Past dit beeld het best bij:`,
        options: [
          { letter: 'A', text: 'Bijwerking bij therapeutische dosering' },
          { letter: 'B', text: 'Intoxicatie' },
          { letter: 'C', text: 'Allergische reactie' },
          { letter: 'D', text: 'Chronische nierziekte' },
        ],
        correctAnswer: 'B',
        explanation: '',
      },
      {
        id: '8b',
        type: 'meerkeuze',
        points: 2,
        question: `8b. (2p)
Welke aanpak staat voorop?`,
        options: [
          { letter: 'A', text: 'Eerst uitgebreide familieanamnese, daarna pas patient beoordelen' },
          { letter: 'B', text: 'ABCDE-opvang en stabilisatie' },
          { letter: 'C', text: 'Meteen ontslag met leefstijladvies' },
          { letter: 'D', text: 'Alleen een thoraxfoto aanvragen' },
        ],
        correctAnswer: 'B',
        explanation: '',
      },
      {
        id: '8c',
        type: 'meerdere_antwoorden',
        points: 3,
        question: `8c. (3p)
Welke kenmerken passen het meest bij een sympathicomimetisch toxidroom?
Meerdere antwoorden mogelijk.`,
        options: [
          { letter: 'A', text: 'Tachycardie' },
          { letter: 'B', text: 'Hyperthermie' },
          { letter: 'C', text: 'Mydriase' },
          { letter: 'D', text: 'Zweten' },
          { letter: 'E', text: 'Ernstige bradycardie' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.75,
        explanation: 'Juiste antwoorden: A, B, C en D. Puntenverdeling: 0,75 punt per juiste keuze, max 3.',
      },
      {
        id: '8d',
        type: 'beeldvraag',
        points: 3,
        question: `8d. (3p)
Zet de stappen in de meest logische volgorde.
Vitale stabilisatie
Toxidroom herkennen
Gericht aanvullend onderzoek en verdere intoxicatie-anamnese`,
        gradingMethod: 'order',
        orderIntro: 'Meest logische volgorde (1 = eerste, 3 = laatste):',
        orderOptions: [...ORDER_8D],
        correctOrder: [...ORDER_8D],
        expectedAnswer: '1 -> 2 -> 3',
        rubric: 'Alleen volledig juiste volgorde = 3p.',
        modelAnswer: 'Antwoord: 1 -> 2 -> 3',
        explanation: '',
      },
      {
        id: '8e',
        type: 'open',
        points: 4,
        question: `8e. (4p)
Noem 4 aandachtspunten of gevaren die je in deze casus direct moet bewaken.
Maximaal 60 woorden.`,
        wordLimit: 60,
        rubric:
          '1 punt per goed genoemd aandachtspunt, max 4. Goede antwoorden: hyperthermie, ritmestoornissen, agitatie/veiligheid, respiratoire verslechtering, insulten, rabdomyolyse, dehydratie, metabole ontregeling, noodzaak monitoring vitale functies.',
        modelAnswer:
          'Bewaken op hyperthermie, ritmestoornissen, respiratoire achteruitgang en ernstige agitatie. Daarnaast letten op rabdomyolyse, insulten en verdere hemodynamische ontregeling.',
        explanation: '',
      },
    ],
  },
]
