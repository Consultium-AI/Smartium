/** Blok 10 oefententamen 3 (Tentamen B) — casussen 1–2 · bron: VRAGEN + antwoordmodel (52 p totaal) */

export const blok10Tentamen3PartA = [
  {
    id: 'casus-1',
    title: 'Casus 1 – Epigastrische pijn bij NSAID-gebruik en H. pylori',
    totalPoints: 12,
    scenario:
      'Een 63-jarige vrouw komt bij de huisarts met sinds enkele weken zeurende pijn in de bovenbuik. De pijn is het duidelijkst na het eten en soms ’s nachts. Zij gebruikt dagelijks naproxen vanwege artroseklachten. Daarnaast gebruikt zij af en toe omeprazol, maar niet consequent. Ze rookt niet en drinkt weinig alcohol. Bij lichamelijk onderzoek is er drukpijn in het epigastrium, zonder peritoneale prikkeling.\n\nDe arts denkt aan mucosaschade door NSAID-gebruik, maar wil ook H. pylori als mogelijke factor meenemen.',
    questions: [
      {
        id: '1a',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Welke verklaring past het best bij het ontstaan van een NSAID-gerelateerd ulcus?',
        options: [
          { letter: 'A', text: 'NSAID’s stimuleren PGE2, waardoor de maagwand te veel mucus maakt' },
          {
            letter: 'B',
            text: 'NSAID’s remmen COX-1, waardoor PGE2 daalt en mucus/bicarbonaatbescherming afneemt',
          },
          { letter: 'C', text: 'NSAID’s stimuleren direct de H+/K+-ATPase in pariëtale cellen' },
          { letter: 'D', text: 'NSAID’s verhogen vooral de productie van intrinsic factor' },
        ],
        correctAnswer: 'B',
        explanation: 'NSAID’s remmen COX-1 → PGE2 daalt → mucus/bicarbonaatbescherming neemt af.',
      },
      {
        id: '1b',
        type: 'meerdere_antwoorden',
        points: 2.0,
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.5,
        question: 'Welke functies horen bij maagzuur?',
        options: [
          { letter: 'A', text: 'Denaturatie van voedingseiwitten' },
          { letter: 'B', text: 'Activatie van pepsinogeen tot pepsine' },
          { letter: 'C', text: 'Doden of remmen van micro-organismen' },
          { letter: 'D', text: 'Directe productie van intrinsic factor door zuur zelf' },
          { letter: 'E', text: 'Losmaken van vitamine B12 uit voedingseiwitten' },
        ],
        correctAnswers: ['A', 'B', 'C', 'E'],
        explanation: 'Denaturatie, pepsine-activatie, micro-organismen remmen en B12 losmaken — niet intrinsic factor.',
      },
      {
        id: '1c',
        type: 'koppelvraag',
        points: 2.0,
        question:
          'Vul de tabel aan: koppel elke stof aan de juiste bron en het juiste effect op maagzuursecretie.',
        items: [
          'Acetylcholine — bron',
          'Gastrine — bron',
          'Histamine — bron',
          'Somatostatine — bron',
          'Acetylcholine — effect',
          'Gastrine — effect',
          'Histamine — effect',
          'Somatostatine — effect',
        ],
        matchOptions: [
          { letter: 'A', text: 'Nervus vagus / ENS' },
          { letter: 'B', text: 'G-cellen in antrum' },
          { letter: 'C', text: 'ECL-cellen' },
          { letter: 'D', text: 'D-cellen in antrum' },
          { letter: 'E', text: 'Stimuleert maagzuursecretie' },
          { letter: 'F', text: 'Remt maagzuursecretie' },
        ],
        correctMapping: { 0: 'A', 1: 'B', 2: 'C', 3: 'D', 4: 'E', 5: 'E', 6: 'E', 7: 'F' },
        explanation:
          'Acetylcholine: vagus/ENS, stimulerend. Gastrine: G-cellen, stimulerend. Histamine: ECL-cellen, stimulerend. Somatostatine: D-cellen, remmend.',
      },
      {
        id: '1d',
        type: 'koppelvraag',
        points: 2.0,
        question: 'Koppel elk begrip aan de beste omschrijving.',
        items: ['PPI', 'H2-receptorantagonist', 'Somatostatine', 'PGE2'],
        matchOptions: [
          { letter: 'A', text: 'Remt de eindstap van zuurproductie via de apicale H+/K+-ATPase' },
          { letter: 'B', text: 'Remt het histaminesignaal via de H2-receptor' },
          { letter: 'C', text: 'Versterkt mucus, bicarbonaat, doorbloeding en mucosale bescherming' },
          { letter: 'D', text: 'Remt onder andere gastrine-afgifte en zuurproductie' },
          { letter: 'E', text: 'Stimuleert de afgifte van pancreasenzymen via CCK' },
        ],
        correctMapping: { 0: 'A', 1: 'B', 2: 'D', 3: 'C' },
        explanation: 'PPI → A; H2-antagonist → B; somatostatine → D; PGE2 → C.',
      },
      {
        id: '1e',
        type: 'open',
        points: 1.0,
        question:
          'Leg in maximaal 40 woorden uit waarom een PPI meestal krachtiger werkt dan een H2-receptorantagonist.',
        wordLimit: 40,
        rubric:
          '0,5p eindstap/protonpomp; 0,5p H2-remmer remt alleen histamineroute (gastrine/acetylcholine blijven deels actief).',
        modelAnswer:
          'Een PPI remt de H+/K+-ATPase, de laatste gemeenschappelijke stap. Een H2-antagonist remt alleen het histaminesignaal; stimulatie via gastrine en acetylcholine blijft deels mogelijk.',
        explanation: 'PPI blokkeert de eindstap; H2-antagonist alleen de histamineroute.',
      },
      {
        id: '1f',
        type: 'meerkeuze',
        points: 1.0,
        question:
          'Bij deze patiënte wordt H. pylori aangetoond. Welke keten past het best bij chronische H. pylori-infectie in het antrum?',
        options: [
          { letter: 'A', text: 'Meer somatostatine → minder gastrine → minder zuur → geen ontsteking' },
          {
            letter: 'B',
            text: 'Minder somatostatine → meer gastrine → meer zuur → meer epitheelbeschadiging',
          },
          { letter: 'C', text: 'Minder gastrine → minder mucus → meer intrinsic factor' },
          { letter: 'D', text: 'Meer PGE2 → meer bicarbonaat → minder klachten' },
        ],
        correctAnswer: 'B',
        explanation: 'Minder somatostatine → meer gastrine → meer zuur → meer epitheelbeschadiging.',
      },
      {
        id: '1g',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Welk nadeel wordt in de stof genoemd bij langdurig PPI-gebruik?',
        options: [
          { letter: 'A', text: 'Verlaagd risico op C. difficile-infectie' },
          {
            letter: 'B',
            text: 'Malabsorptie van onder andere calcium, magnesium, ijzer en vitamine B12',
          },
          { letter: 'C', text: 'Permanente toename van intrinsic factor' },
          { letter: 'D', text: 'Bescherming tegen alle resistente darmbacteriën' },
        ],
        correctAnswer: 'B',
        explanation: 'Langdurig PPI-gebruik kan malabsorptie van Ca, Mg, ijzer en B12 geven.',
      },
      {
        id: '1h',
        type: 'koppelvraag',
        points: 2.0,
        question: 'Vul de ontbrekende onderdelen in van de zoutzuursecretie door de pariëtale cel.',
        items: [
          'Koolzuur wordt gesplitst in H+ en bicarbonaat met behulp van',
          'H+ wordt naar het maaglumen getransporteerd via',
          'Bicarbonaat wordt basolateraal uitgewisseld met',
          'In het lumen vormen H+ en ... samen zoutzuur',
        ],
        matchOptions: [
          { letter: 'A', text: 'Koolzuuranhydrase' },
          { letter: 'B', text: 'H+/K+-ATPase' },
          { letter: 'C', text: 'Chloride / Cl⁻' },
          { letter: 'D', text: 'Natrium / Na⁺' },
        ],
        correctMapping: { 0: 'A', 1: 'B', 2: 'C', 3: 'C' },
        explanation: 'CA → koolzuuranhydrase; H+ transport → H+/K+-ATPase; Cl⁻ basolateraal en in lumen.',
      },
    ],
  },
  {
    id: 'casus-2',
    title: 'Casus 2 – Chronische diarree, steatorroe en malabsorptie',
    totalPoints: 14,
    scenario:
      'Een 47-jarige man komt op de polikliniek met sinds vier maanden diarree. Hij heeft 6 kg gewichtsverlies, een opgeblazen gevoel en ontlasting die volumineus, vettig en moeilijk doorspoelbaar is. Soms verergeren de klachten na melkproducten, maar hij merkt ook klachten na vetrijke maaltijden. Er wordt gedacht aan lactose-intolerantie, exocriene pancreasinsufficiëntie, galzoutproblemen en algemene malabsorptie.',
    questions: [
      {
        id: '2a',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Wanneer spreek je volgens de stof bij volwassenen van chronische diarree?',
        options: [
          { letter: 'A', text: 'Diarree korter dan 24 uur' },
          { letter: 'B', text: 'Diarree korter dan 3 dagen' },
          { letter: 'C', text: 'Diarree langer dan 4 weken' },
          { letter: 'D', text: 'Diarree alleen bij koorts' },
        ],
        correctAnswer: 'C',
        explanation: 'Chronische diarree = diarree langer dan 4 weken.',
      },
      {
        id: '2b',
        type: 'meerkeuze',
        points: 1.0,
        question:
          'Als lactose-intolerantie klinisch waarschijnlijk is, wat is dan een geschikte eerste vervolgstap?',
        options: [
          { letter: 'A', text: 'Lactose-ademtest' },
          { letter: 'B', text: 'Direct CT-abdomen' },
          { letter: 'C', text: 'Spoed-ERCP' },
          { letter: 'D', text: 'Leverbiopt' },
        ],
        correctAnswer: 'A',
        explanation: 'Lactose-ademtest is een geschikte eerste vervolgstap.',
      },
      {
        id: '2c',
        type: 'meerdere_antwoorden',
        points: 2.0,
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.5,
        question: 'Welke diagnoses of oorzaken passen bij de differentiaaldiagnose van chronische diarree?',
        options: [
          { letter: 'A', text: 'Prikkelbare darm syndroom' },
          { letter: 'B', text: 'IBD' },
          { letter: 'C', text: 'Lactose-intolerantie' },
          { letter: 'D', text: 'Galzuurdiarree' },
          { letter: 'E', text: 'Een eenmalige voedselvergiftiging van gisteren' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        explanation: 'PDS, IBD, lactose-intolerantie en galzuurdiarree passen bij chronische diarree.',
      },
      {
        id: '2d',
        type: 'koppelvraag',
        points: 2.0,
        question: 'Vul de tabel aan: koppel elk component aan de belangrijkste functie in vetvertering.',
        items: ['Pancreaslipase', 'Co-lipase', 'Galzouten', 'Gemengde micellen'],
        matchOptions: [
          {
            letter: 'A',
            text: 'Breekt triglyceriden af tot vrije vetzuren en monoglyceriden',
          },
          {
            letter: 'B',
            text: 'Helpt lipase binden aan vetdruppels en voorkomt inactivatie door galzouten',
          },
          {
            letter: 'C',
            text: 'Maakt vetafbraakproducten beter oplosbaar en ondersteunt micelvorming',
          },
          {
            letter: 'D',
            text: 'Transporteren vetafbraakproducten naar de enterocyt',
          },
        ],
        correctMapping: { 0: 'A', 1: 'B', 2: 'C', 3: 'D' },
        explanation: 'Lipase → afbraak TG; co-lipase → lipase op vetdruppel; galzouten → micellen; micellen → transport.',
      },
      {
        id: '2e',
        type: 'open',
        points: 1.0,
        question:
          'Leg in maximaal 40 woorden uit waarom galzouten nodig blijven voor vetopname, zelfs als pancreaslipase normaal aanwezig is.',
        wordLimit: 40,
        rubric: '0,5p hydrofoob/slecht oplosbaar; 0,5p micellen/transport naar enterocyt.',
        modelAnswer:
          'Vetafbraakproducten zijn hydrofoob. Galzouten vormen gemengde micellen, waardoor vrije vetzuren en monoglyceriden in de waterige darminhoud naar de enterocyt kunnen worden vervoerd.',
        explanation: 'Galzouten vormen micellen voor transport van hydrofobe vetafbraakproducten.',
      },
      {
        id: '2f',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Waarom kunnen MCT’s nuttig zijn bij gestoorde vetvertering?',
        options: [
          { letter: 'A', text: 'Ze vereisen altijd volledige normale micelvorming' },
          {
            letter: 'B',
            text: 'Ze kunnen makkelijker worden verwerkt en via het bloed bijdragen aan de energievoorziening',
          },
          { letter: 'C', text: 'Ze blokkeren pancreaslipase volledig' },
          { letter: 'D', text: 'Ze worden uitsluitend via de dikke darm opgenomen' },
        ],
        correctAnswer: 'B',
        explanation: 'MCT’s worden makkelijker verwerkt en via bloed opgenomen.',
      },
      {
        id: '2g',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Wat gebeurt er normaal met het grootste deel van de galzouten na hun werking in de darm?',
        options: [
          { letter: 'A', text: 'Ze worden volledig afgebroken in de maag' },
          {
            letter: 'B',
            text: 'Ze worden in het distale ileum terug opgenomen en via de poortader naar de lever gebracht',
          },
          { letter: 'C', text: 'Ze worden allemaal via de urine uitgescheiden' },
          { letter: 'D', text: 'Ze worden omgezet in lactase' },
        ],
        correctAnswer: 'B',
        explanation: 'Entero-hepatische recirculatie via distaal ileum en poortader.',
      },
      {
        id: '2h',
        type: 'koppelvraag',
        points: 2.0,
        question: 'Koppel de stoornis aan het meest passende gevolg.',
        items: [
          'Lactasedeficiëntie',
          'Exocriene pancreasinsufficiëntie',
          'Cholestase met verminderde galzoutsecretie',
          'Verstoring van de entero-hepatische cyclus',
        ],
        matchOptions: [
          { letter: 'A', text: 'Minder beschikbaarheid van galzouten voor micelvorming en vetopname' },
          { letter: 'B', text: 'Slechtere vetvertering door tekort aan verteringsenzymen' },
          { letter: 'C', text: 'Klachten na lactose door onvoldoende splitsing van disachariden' },
          {
            letter: 'D',
            text: 'Meer verlies van galzouten via feces en minder efficiënte recirculatie',
          },
          { letter: 'E', text: 'Toename van intrinsic factor-productie' },
        ],
        correctMapping: { 0: 'C', 1: 'B', 2: 'A', 3: 'D' },
        explanation: 'Lactase → C; pancreas → B; cholestase → A; entero-hepatisch → D.',
      },
      {
        id: '2i',
        type: 'open',
        points: 1.0,
        question:
          'Leg in maximaal 50 woorden uit waarom steatorroe sterker wijst op vetmalabsorptie dan op geïsoleerde lactose-intolerantie.',
        wordLimit: 50,
        rubric:
          '0,5p vetmalabsorptie/steatorroe; 0,5p lactose-intolerantie als koolhydraatprobleem zonder vet in ontlasting.',
        modelAnswer:
          'Steatorroe betekent vettige, volumineuze ontlasting en wijst op gestoorde vetvertering of -opname. Geïsoleerde lactose-intolerantie geeft vooral klachten na lactose door osmose en fermentatie, maar verklaart vet in de ontlasting minder goed.',
        explanation: 'Steatorroe wijst op vetmalabsorptie; lactose-intolerantie is primair een koolhydraatprobleem.',
      },
      {
        id: '2j',
        type: 'beeldvraag',
        points: 1.0,
        question:
          'Zet de route van opgenomen vetafbraakproducten in de juiste volgorde.\n\nStappen:\n• Afbraakproducten worden opgenomen in de enterocyt\n• Verpakking tot lipoproteïnen\n• Afbraak van triglyceriden tot vrije vetzuren en monoglyceriden\n• Afgifte aan de lymfe',
        gradingMethod: 'order',
        orderIntro: 'Juiste volgorde (1 = eerste stap):',
        orderOptions: [
          'Afbraak van triglyceriden tot vrije vetzuren en monoglyceriden',
          'Afbraakproducten worden opgenomen in de enterocyt',
          'Verpakking tot lipoproteïnen',
          'Afgifte aan de lymfe',
        ],
        correctOrder: [
          'Afbraak van triglyceriden tot vrije vetzuren en monoglyceriden',
          'Afbraakproducten worden opgenomen in de enterocyt',
          'Verpakking tot lipoproteïnen',
          'Afgifte aan de lymfe',
        ],
        expectedAnswer: '3 → 1 → 2 → 4',
        rubric: 'Alleen volledig juiste volgorde = 1p.',
        modelAnswer: '3 → 1 → 2 → 4',
        explanation: 'Eerst afbraak, dan opname, verpakking en afgifte aan lymfe.',
      },
      {
        id: '2k',
        type: 'meerkeuze',
        points: 1.0,
        question: 'Welke bewering over ondervoeding bij langdurige diarree is het meest juist?',
        options: [
          { letter: 'A', text: 'Ondervoeding kan alleen bestaan als de BMI onder 18,5 is' },
          {
            letter: 'B',
            text: 'Langdurige diarree kan via verlies van energie en nutriënten bijdragen aan ondervoeding',
          },
          { letter: 'C', text: 'Ondervoeding is uitgesloten bij normale eetlust' },
          { letter: 'D', text: 'Vetdiarree beschermt tegen vitaminetekorten' },
        ],
        correctAnswer: 'B',
        explanation: 'Langdurige diarree kan via nutriëntverlies bijdragen aan ondervoeding.',
      },
    ],
  },
]
