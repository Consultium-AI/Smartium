/** Blok 9 oefententamen 6 — casussen 1–3 · examen 153 p totaal */

const LAB1 = `Parameter | Uitslag | Referentie
Creatinine | 334 µmol/L | 60–110
Ureum | 28,4 mmol/L | 3,0–8,0
Natrium | 147 mmol/L | 135–145
Kalium | 5,7 mmol/L | 3,5–5,0
Bicarbonaat | 18 mmol/L | 22–29
Hb | 10,8 mmol/L | 8,5–11,0
CRP | 12 mg/L | <5`

const LAB2A = `Parameter | Uitslag | Referentie
Creatinine | 104 µmol/L | 50–90
eGFR | 68 mL/min/1,73m² | >60
Albumine | 29 g/L | 35–50
Cholesterol | 6,8 mmol/L | <5,0
UACR | sterk verhoogd | —
C3 | verlaagd | normaal
C4 | normaal | normaal`

const LAB2B = `Bevinding | Uitslag
Dysmorfe erytrocyten | aanwezig
Erytrocytencilinders | aanwezig
Nitriet | negatief
Leukocyturie | gering`

const LAB3 = `Parameter | Uitslag | Referentie
Natrium | 121 mmol/L | 135–145
Kalium | 2,9 mmol/L | 3,5–5,0
Chloride | 86 mmol/L | 98–107
Bicarbonaat | 31 mmol/L | 22–29
Glucose | 4,8 mmol/L | 4,0–7,8
Ureum | 3,4 mmol/L | 3,0–8,0
Creatinine | 76 µmol/L | 60–110
Magnesium | 0,49 mmol/L | 0,70–1,00
Serumosmolaliteit | 258 mosmol/kg | 275–295
Urine-osmolaliteit | 110 mosmol/kg | variabel
Urine-natrium | 12 mmol/L | variabel`

export const blok9Tentamen6PartA = [
  {
    id: 'casus-1',
    title: 'Casus 1 – Acute nierschade: prerenaal, ATN of obstructie?',
    totalPoints: 15,
    scenario: `Een 76-jarige man wordt opgenomen met malaise, verminderde intake en sinds 2 dagen oligurie. Hij had in de week voorafgaand meerdere episodes van braken en diarree. Medicatie: lisinopril, furosemide en ibuprofen zo nodig. Bij onderzoek: droge slijmvliezen, RR 96/58 mmHg, pols 102/min. De bladderscan toont 380 mL residu. Na katheterisatie loopt 450 mL urine af.
Laboratorium
Creatinine 6 weken geleden: 92 µmol/L.
${LAB1}
Figuur 1 – beeldvraag
Echo-beschrijving: matige bilaterale hydronefrose, geen evidente nieratrofie.`,
    questions: [
      {
        id: '1a',
        type: 'meerkeuze',
        points: 2,
        question: `1a. (2p)
Wat is op dit moment de meest waarschijnlijke dominante oorzaak van de acute nierschade?`,
        options: [
          { letter: 'A', text: 'Prerenaal' },
          { letter: 'B', text: 'Intrinsiek renaal door ATN' },
          { letter: 'C', text: 'Postrenaal' },
          { letter: 'D', text: 'Chronische nierschade zonder acute component' },
        ],
        correctAnswer: 'C',
        explanation:
          'Residu na bladderscan, urine na katheterisatie en bilaterale hydronefrose maken een postrenale component het meest dominant, ook al zijn er tegelijk prerenale factoren aanwezig.',
      },
      {
        id: '1b',
        type: 'open',
        points: 3,
        question: `1b. (3p)
Noem 3 bevindingen uit de casus die jouw antwoord bij 1a ondersteunen.
Maximaal 50 woorden.`,
        wordLimit: 50,
        rubric:
          'Puntenverdeling: 1 punt per juiste bevinding, max 3. Goede antwoorden: verhoogd residu op bladderscan; urineproductie na katheterisatie; bilaterale hydronefrose op echo; oligurie; acute stijging creatinine met obstructieve bevindingen.',
        modelAnswer:
          'Het verhoogde residu, de urineafloop na katheterisatie en de bilaterale hydronefrose passen het sterkst bij een postrenale oorzaak. Daarnaast is er duidelijke oligurie.',
        explanation: '',
      },
      {
        id: '1c',
        type: 'meerdere_antwoorden',
        points: 3,
        question: `1c. (3p)
Welke factoren in deze casus kunnen ook een prerenale component verklaren?
Meerdere antwoorden mogelijk.`,
        options: [
          { letter: 'A', text: 'Braken/diarree' },
          { letter: 'B', text: 'Lisinopril' },
          { letter: 'C', text: 'Furosemide' },
          { letter: 'D', text: 'Hydronefrose' },
          { letter: 'E', text: 'NSAID-gebruik' },
        ],
        correctAnswers: ['A', 'B', 'C', 'E'],
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.75,
        explanation:
          'Juiste antwoorden: A, B, C en E. Puntenverdeling: 0,75 punt per juiste keuze, max 3.',
      },
      {
        id: '1d',
        type: 'open',
        points: 4,
        question: `1d. (4p)
Beschrijf de 4 belangrijkste eerste stappen in beleid en monitoring in deze casus.
Maximaal 100 woorden.`,
        wordLimit: 100,
        rubric:
          '1p obstructie verhelpen / katheterbeleid; 1p volumestatus en medicatie herbeoordelen; 1p monitoring creatinine/kalium/diurese; 1p vervolgdiagnostiek/oorzaak obstructie.',
        modelAnswer:
          'Zorg voor adequate urineafvoer en beoordeel of verdere obstructiebehandeling nodig is. Corrigeer volumedepletie en heroverweeg lisinopril, furosemide en NSAID’s. Monitor diurese, kalium en creatinine. Zoek actief naar de oorzaak van de obstructie en laat zo nodig aanvullend urologisch beoordelen.',
        explanation: '',
      },
      {
        id: '1e',
        type: 'open',
        points: 3,
        question: `1e. (3p)
Leg uit waarom het onderscheid tussen prerenaal, ATN en postrenaal in de praktijk niet altijd volledig zuiver is.
Maximaal 60 woorden.`,
        wordLimit: 60,
        rubric:
          '1p meerdere mechanismen tegelijk; 1p prerenale schade kan overgaan in ATN; 1p obstructie kan samengaan met andere componenten.',
        modelAnswer:
          'Bij acute nierschade kunnen meerdere mechanismen tegelijk bestaan. Langdurige prerenale hypoperfusie kan overgaan in ATN, en obstructie kan samengaan met dehydratie of medicatie-effecten. Daardoor is de indeling diagnostisch nuttig, maar niet altijd volledig zuiver in één patiënt.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-2',
    title: 'Casus 2 – Nierpatronen: glomerulair, tubulair en CKD',
    totalPoints: 16,
    scenario: `Een 28-jarige vrouw wordt verwezen vanwege afwijkend urineonderzoek en stijgende bloeddruk. Ze heeft moeheid, lichte enkeloedeem en schuimende urine. Geen koorts. In het urinesediment worden erytrocyten gezien, maar ook duidelijke proteïnurie. Nierfunctie is nog grotendeels behouden.
Laboratorium
${LAB2A}
Urinesediment
${LAB2B}`,
    questions: [
      {
        id: '2a',
        type: 'meerkeuze',
        points: 2,
        question: `2a. (2p)
Welk patroon staat het meest op de voorgrond?`,
        options: [
          { letter: 'A', text: 'Zuiver tubulair patroon' },
          { letter: 'B', text: 'Nefritisch/glomerulair patroon' },
          { letter: 'C', text: 'Postrenaal patroon' },
          { letter: 'D', text: 'Zuiver prerenaal patroon' },
        ],
        correctAnswer: 'B',
        explanation:
          'Dysmorfe erytrocyten, erytrocytencilinders en complementafwijking passen sterk bij glomerulaire ontstekingsschade.',
      },
      {
        id: '2b',
        type: 'open',
        points: 3,
        question: `2b. (3p)
Welke 3 bevindingen ondersteunen het antwoord bij 2a het sterkst?
Maximaal 40 woorden.`,
        wordLimit: 40,
        rubric:
          'Puntenverdeling: 1 punt per sterke bevinding, max 3. Sterkste bevindingen: erytrocytencilinders; dysmorfe erytrocyten; proteïnurie in glomerulaire context; verlaagd complement als extra aanwijzing.',
        modelAnswer:
          'Erytrocytencilinders zijn sterk bewijzend voor glomerulaire hematurie. Ook dysmorfe erytrocyten en forse proteïnurie passen bij glomerulaire schade. Het verlaagde C3 ondersteunt een inflammatoir glomerulair patroon.',
        explanation: '',
      },
      {
        id: '2c',
        type: 'meerkeuze',
        points: 3,
        question: `2c. (3p)
Welke uitspraak is het meest juist?`,
        options: [
          { letter: 'A', text: 'Erytrocytencilinders pleiten sterk voor glomerulaire hematurie' },
          { letter: 'B', text: 'Dysmorfe erytrocyten sluiten glomerulaire ziekte uit' },
          { letter: 'C', text: 'Proteïnurie wijst altijd op tubulaire schade' },
          { letter: 'D', text: 'Tubulaire ziekten geven altijd een ernstig afwijkende urinestrip' },
        ],
        correctAnswer: 'A',
        explanation: '',
      },
      {
        id: '2d',
        type: 'meerdere_antwoorden',
        points: 4,
        question: `2d. (4p)
Welke kenmerken passen bij een nefrotisch syndroom?
Meerdere antwoorden mogelijk.`,
        options: [
          { letter: 'A', text: 'Hypoalbuminemie' },
          { letter: 'B', text: 'Hypercholesterolemie' },
          { letter: 'C', text: 'Oedeem' },
          { letter: 'D', text: 'Forse proteïnurie' },
          { letter: 'E', text: 'Erytrocytencilinders als kernkenmerk' },
        ],
        correctAnswers: ['A', 'B', 'C', 'D'],
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 1,
        explanation:
          'Juiste antwoorden: A, B, C en D. Puntenverdeling: 1 punt per juiste keuze, max 4.',
      },
      {
        id: '2e',
        type: 'open',
        points: 4,
        question: `2e. (4p)
Leg uit waarom een patiënt zowel nefritische als nefrotische kenmerken kan hebben en waarom dat klinisch relevant is.
Maximaal 80 woorden.`,
        wordLimit: 80,
        rubric:
          '1p combinatie van eiwitverlies en inflammatoire schade; 1p nefrotische kenmerken benoemen; 1p nefritische kenmerken benoemen; 1p klinische relevantie voor diagnose/behandeling.',
        modelAnswer:
          'Een glomerulaire ziekte kan tegelijk eiwitverlies en ontstekingsschade geven. Dan zie je zowel nefrotische kenmerken zoals hypoalbuminemie en oedeem als nefritische kenmerken zoals hematurie en erytrocytencilinders. Dat is klinisch relevant omdat ernst, differentiaaldiagnose en behandeling daardoor veranderen.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-3',
    title: 'Casus 3 – Elektrolyten, osmolaliteit en zuur-base',
    totalPoints: 16,
    scenario: `Een 64-jarige man met alcoholmisbruik en slecht eten presenteert zich met verwardheid, misselijkheid en spierzwakte. Volgens partner drinkt hij veel water en weinig vast voedsel. Er is geen duidelijk oedeem. Hij heeft de laatste dagen meerdere keren gebraakt.
Laboratorium
${LAB3}`,
    questions: [
      {
        id: '3a',
        type: 'meerkeuze',
        points: 2,
        question: `3a. (2p)
Wat is de beste overkoepelende beschrijving van deze casus?`,
        options: [
          { letter: 'A', text: 'Hypertonische hyponatriëmie' },
          { letter: 'B', text: 'Hypotone hyponatriëmie met bijkomende hypokaliëmie en metabole alkalose' },
          { letter: 'C', text: 'Isolerende hyperkaliëmie' },
          { letter: 'D', text: 'Normale waterbalans met pseudohyponatriëmie' },
        ],
        correctAnswer: 'B',
        explanation:
          'Laag natrium met lage serumosmolaliteit, laag kalium en hoog bicarbonaat passen hierbij.',
      },
      {
        id: '3b',
        type: 'meerdere_antwoorden',
        points: 3,
        question: `3b. (3p)
Welke bevindingen maken een puur SIADH-beeld minder waarschijnlijk?
Meerdere antwoorden mogelijk.`,
        options: [
          { letter: 'A', text: 'Lage urine-osmolaliteit' },
          { letter: 'B', text: 'Laag urine-natrium' },
          { letter: 'C', text: 'Duidelijke hypokaliëmie' },
          { letter: 'D', text: 'Normale glucose' },
          { letter: 'E', text: 'Braken in de anamnese' },
        ],
        correctAnswers: ['A', 'B', 'C', 'E'],
        partialCreditOnlyCorrect: true,
        pointsPerCorrect: 0.75,
        explanation:
          'Juiste antwoorden: A, B, C en E. Puntenverdeling: 0,75 punt per juiste keuze, max 3.',
      },
      {
        id: '3c',
        type: 'open',
        points: 4,
        question: `3c. (4p)
Beschrijf in hoofdlijnen welke mechanismen bijdragen aan:
de hyponatriëmie
de hypokaliëmie
de metabole alkalose
Maximaal 100 woorden.`,
        wordLimit: 100,
        rubric:
          '1p mechanisme hyponatriëmie; 1p mechanisme hypokaliëmie; 1p mechanisme metabole alkalose; 1p logisch integreren van vocht-/nierreactie.',
        modelAnswer:
          'De hyponatriëmie past bij lage osmoleninname met relatief veel water en lage serumosmolaliteit. De hypokaliëmie past bij braken, volumedepletie en renaal kaliumverlies. De metabole alkalose wordt verklaard door verlies van HCl/chloride via braken en aanhoudende nierreactie onder invloed van aldosteron.',
        explanation: '',
      },
      {
        id: '3d',
        type: 'meerkeuze',
        points: 3,
        question: `3d. (3p)
Welke aanvullende stap heeft de hoogste prioriteit in de acute beoordeling?`,
        options: [
          { letter: 'A', text: 'Alleen wachten op een 24-uurs urinecollectie' },
          { letter: 'B', text: 'ECG maken en neurologische ernst beoordelen' },
          { letter: 'C', text: 'Meteen CT-angiografie van de benen' },
          { letter: 'D', text: 'Alleen albumine geven' },
        ],
        correctAnswer: 'B',
        explanation: '',
      },
      {
        id: '3e',
        type: 'open',
        points: 4,
        question: `3e. (4p)
Formuleer een eerste behandelstrategie waarin je rekening houdt met zowel neurologisch risico als ritmerisico.
Maximaal 90 woorden.`,
        wordLimit: 90,
        rubric:
          '1p neurologische beoordeling/natriumrisico; 1p ECG/ritmerisico; 1p kalium en magnesium corrigeren; 1p zorgvuldig vocht-/natriumbeleid en oorzaak aanpakken.',
        modelAnswer:
          'Beoordeel direct de neurologische ernst van de hyponatriëmie en maak een ECG vanwege het lage kalium. Corrigeer kalium en magnesium actief, behandel het braken en pas vochtbeleid zorgvuldig aan. De natriumcorrectie moet gecontroleerd verlopen om neurologische complicaties te voorkomen.',
        explanation: '',
      },
    ],
  },
]
