/** Blok 9 oefententamen 5 — casussen 5–7 */

const LAB5 = `Parameter | Uitslag | Referentie
Kalium | 2,9 mmol/L | 3,5–5,0
Natrium | 144 mmol/L | 135–145
Bicarbonaat | 31 mmol/L | 22–29
Creatinine | 73 µmol/L | 50–90`

export const blok9Tentamen5PartB = [
  {
    id: 'casus-5',
    title: 'Casus 5 – Hypertensie',
    totalPoints: 14,
    scenario: `Een 39-jarige vrouw wordt gezien op de poli interne geneeskunde. Zij heeft al maanden bloeddrukwaarden rond 180/110 mmHg. Ze heeft episodes van spierzwakte. In de familie komt weinig hypertensie voor.
Laboratorium
${LAB5}`,
    questions: [
      {
        id: '5a',
        type: 'meerkeuze',
        points: 2,
        question: `5a. (2p)
Welke secundaire oorzaak is het meest waarschijnlijk?`,
        options: [
          { letter: 'A', text: 'Primair hyperaldosteronisme' },
          { letter: 'B', text: 'Acute glomerulonefritis' },
          { letter: 'C', text: 'Puur angst zonder verdere evaluatie' },
          { letter: 'D', text: 'Pleuravocht' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
      {
        id: '5b',
        type: 'meerdere_antwoorden',
        points: 3,
        question: `5b. (3p)
Welke aanwijzingen passen bij secundaire hypertensie in deze casus?
Meerdere antwoorden mogelijk.`,
        options: [
          { letter: 'A', text: 'Jonge leeftijd' },
          { letter: 'B', text: 'Plots of relatief vroeg ernstig beeld' },
          { letter: 'C', text: 'Hypokaliëmie' },
          { letter: 'D', text: 'Negatieve familieanamnese' },
          { letter: 'E', text: 'Altijd normale bloeddruk thuis' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.75,
        explanation: 'Juiste antwoorden: A, B, C en D. Puntenverdeling: 0,75 punt per juiste keuze, max 3.',
      },
      {
        id: '5c',
        type: 'meerkeuze',
        points: 2,
        question: `5c. (2p)
Welke eerste aanvullende test is het meest logisch?`,
        options: [
          { letter: 'A', text: 'Aldosteron-renine-ratio' },
          { letter: 'B', text: 'Sputumkweek' },
          { letter: 'C', text: 'Urine-antigeen legionella' },
          { letter: 'D', text: 'D-dimeer' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
      {
        id: '5d',
        type: 'open',
        points: 3,
        question: `5d. (3p)
Wat is het kernverschil tussen ernstige hypertensie en een hypertensief spoedgeval?
Maximaal 40 woorden.`,
        wordLimit: 40,
        rubric:
          '1p ernstige hypertensie zonder acute orgaanschade; 1p spoedgeval met acute orgaanschade; 1p voorbeeld van orgaanschade.',
        modelAnswer:
          'Ernstige hypertensie betekent een hoge bloeddruk zonder acute eindorgaanschade. Een hypertensief spoedgeval is een ernstige bloeddrukstijging mét acute schade aan bijvoorbeeld hersenen, retina, hart, nieren of grote vaten.',
        explanation: '',
      },
      {
        id: '5e',
        type: 'open',
        points: 4,
        question: `5e. (4p)
Noem 4 vormen van eindorgaanschade of alarmsituaties die passen bij een hypertensief spoedgeval.
Maximaal 60 woorden.`,
        wordLimit: 60,
        rubric:
          '1 punt per goed voorbeeld, max 4. Goede voorbeelden: hersenbloeding/infarct/neurologische uitval; hypertensieve encefalopathie; acuut coronair syndroom; longoedeem/acuut hartfalen; aortadissectie; acute hypertensieve nefropathie; hypertensieve retinopathie/visusklachten.',
        modelAnswer:
          'Voorbeelden zijn acute neurologische uitval of encefalopathie, acuut coronair syndroom, longoedeem of acuut hartfalen en aortadissectie. Ook acute nierschade of hypertensieve retinopathie passen hierbij.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-6',
    title: 'Casus 6 – Pijn op de borst',
    totalPoints: 14,
    scenario: `Een 60-jarige man presenteert zich met drukkende retrosternale pijn bij inspanning. De klachten nemen af in rust. Hij rookt, heeft hypertensie en diabetes. Zijn rust-ECG toont geen acute ischemische afwijkingen.`,
    questions: [
      {
        id: '6a',
        type: 'meerkeuze',
        points: 2,
        question: `6a. (2p)
Wat is de meest waarschijnlijke werkdiagnose?`,
        options: [
          { letter: 'A', text: 'Stabiele angina pectoris' },
          { letter: 'B', text: 'Pneumothorax' },
          { letter: 'C', text: 'Pericardtamponnade' },
          { letter: 'D', text: 'Acute pyelonefritis' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
      {
        id: '6b',
        type: 'meerdere_antwoorden',
        points: 3,
        question: `6b. (3p)
Welke risicofactoren voor atherosclerotisch vaatlijden zijn aanwezig?
Meerdere antwoorden mogelijk.`,
        options: [
          { letter: 'A', text: 'Roken' },
          { letter: 'B', text: 'Diabetes' },
          { letter: 'C', text: 'Hypertensie' },
          { letter: 'D', text: 'Inspanningsgebonden klachten' },
          { letter: 'E', text: 'Hogere leeftijd' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D', 'E'],
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.6,
        explanation:
          'Juiste antwoorden: A, B, C, D en E. Puntenverdeling: 0,6 punt per juiste keuze, max 3.',
      },
      {
        id: '6c',
        type: 'meerkeuze',
        points: 2,
        question: `6c. (2p)
Welke vervolgstap is het meest logisch?`,
        options: [
          { letter: 'A', text: 'Geen verdere evaluatie nodig' },
          { letter: 'B', text: 'Passend niet-invasief aanvullend onderzoek naar coronair lijden' },
          { letter: 'C', text: 'Meteen antibiotica' },
          { letter: 'D', text: 'Alleen controle over 2 jaar' },
        ],
        correctAnswer: 'B',
        explanation: '',
      },
      {
        id: '6d',
        type: 'open',
        points: 3,
        question: `6d. (3p)
Waarom is het logisch om hier naast klachten ook het totale cardiovasculaire risico mee te nemen?
Maximaal 40 woorden.`,
        wordLimit: 40,
        rubric:
          '1p totaal cardiovasculair risico benoemen; 1p risicofactoren samen bepalen kans; 1p koppeling aan beleid/preventie/diagnostiek.',
        modelAnswer:
          'Klachten alleen zijn niet genoeg: beleid hangt ook af van het totale atherosclerotische risico. Risicofactoren zoals roken, diabetes en hypertensie bepalen mee de kans op coronair lijden en de noodzaak van preventieve behandeling.',
        explanation: '',
      },
      {
        id: '6e',
        type: 'open',
        points: 4,
        question: `6e. (4p)
Noem 4 onderdelen van een passend eerste behandel- of preventieplan.
Maximaal 80 woorden.`,
        wordLimit: 80,
        rubric:
          '1 punt per goed onderdeel, max 4. Goede antwoorden: stoppen met roken; gewichtsreductie / bewegen / dieet; bloeddruk optimaliseren; diabetesbehandeling verbeteren; statine/lipidenverlagende therapie; aanvullend coronair onderzoek; anti-angineuze therapie in passende context.',
        modelAnswer:
          'Adviseer stoppen met roken, meer bewegen en gewichtsreductie. Optimaliseer diabetes en hypertensie. Start of intensiveer statinetherapie. Verricht passend aanvullend onderzoek naar coronair lijden en behandel klachten zo nodig anti-angineus.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-7',
    title: 'Casus 7 – Pneumonie',
    totalPoints: 13,
    scenario: `Een 76-jarige vrouw komt met koorts, hoesten en dyspneu. Ze is niet verward. De ademfrequentie is 31/min, de bloeddruk 96/60 mmHg en het ureum is 8,4 mmol/L.
Figuur 2 – Beeldvraag
X-thorax-beschrijving: gelokaliseerde consolidatie in de linker onderkwab.`,
    questions: [
      {
        id: '7a',
        type: 'meerkeuze',
        points: 2,
        question: `7a. (2p)
Wat is de meest waarschijnlijke diagnose?`,
        options: [
          { letter: 'A', text: 'Pneumonie' },
          { letter: 'B', text: 'Astma-exacerbatie zonder infectie' },
          { letter: 'C', text: 'Pneumothorax' },
          { letter: 'D', text: 'Harttamponnade' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
      {
        id: '7b',
        type: 'meerkeuze',
        points: 2,
        question: `7b. (2p)
Welke radiologische beschrijving past het best?`,
        options: [
          { letter: 'A', text: 'Lobaire pneumonie' },
          { letter: 'B', text: 'Diffuus interstitieel beeld zonder consolidatie' },
          { letter: 'C', text: 'Normale thoraxfoto' },
          { letter: 'D', text: 'Pleuralijn passend bij pneumothorax' },
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
          { letter: 'A', text: '1' },
          { letter: 'B', text: '2' },
          { letter: 'C', text: '3' },
          { letter: 'D', text: '4' },
        ],
        correctAnswer: 'D',
        explanation:
          'Door de gegeven bloeddruk en leeftijd is de correcte CURB-65-score 4 (niet 3).',
      },
      {
        id: '7d',
        type: 'open',
        points: 3,
        question: `7d. (3p)
Noem 3 argumenten waarom deze patiënte een ernstiger CAP heeft.
Maximaal 50 woorden.`,
        wordLimit: 50,
        rubric:
          '1 punt per goed argument, max 3. Goede argumenten: hoge leeftijd; tachypnoe; lage bloeddruk; verhoogd ureum; klinisch ernstige CAP; risico op opname / hogere mortaliteit.',
        modelAnswer:
          'Deze patiënte heeft een hoge leeftijd, tachypnoe en lage bloeddruk. Ook is het ureum verhoogd. Dat samen past bij een ernstiger CAP met hoger risico op complicaties en opname.',
        explanation: '',
      },
      {
        id: '7e',
        type: 'open',
        points: 4,
        question: `7e. (4p)
Noem 4 onderdelen van de eerste diagnostiek of behandeling die hier logisch zijn.
Maximaal 80 woorden.`,
        wordLimit: 80,
        rubric:
          '1 punt per goed onderdeel, max 4. Goede antwoorden: zuurstof geven/monitoring; opname overwegen of starten; antibiotische behandeling; X-thorax; bloedonderzoek/inflammatie; bloedkweken of sputumkweek indien passend; ernstinschatting/CURB-65.',
        modelAnswer:
          'Start met monitoring en zo nodig zuurstof. Verricht X-thorax en basaal bloedonderzoek. Start passende antibiotische behandeling voor CAP. Doe ernstinschatting en overweeg opname, eventueel met microbiologische diagnostiek.',
        explanation: '',
      },
    ],
  },
]

