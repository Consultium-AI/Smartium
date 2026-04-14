/** Blok 4 oefententamen 2 — casussen 10–11 */

export const blok4Tentamen2PartD = [
  {
    id: 'casus-10',
    title: 'Casus 10 – Antibiotica: spectrum en bijwerkingen',
    totalPoints: 13,
    scenario: `Een huisarts ziet drie patiënten op één dag:
een jonge vrouw met ongecompliceerde urineweginfectie
een patiënt met verdenking op atypische pneumonie
een kind van 6 jaar waarvoor doxycycline wordt overwogen`,
    questions: [
      {
        id: '10a',
        type: 'meerkeuze',
        points: 2,
        question: `10a. Wat is de eerste keus bij een ongecompliceerde urineweginfectie volgens de besproken basisstof? (2.0p)`,
        options: [
          { letter: 'A', text: 'Nitrofurantoïne' },
          { letter: 'B', text: 'Meropenem' },
          { letter: 'C', text: 'Clindamycine' },
          { letter: 'D', text: 'Oseltamivir' },
        ],
        correctAnswer: 'A',
        explanation: 'Nitrofurantoïne is eerste keus bij een ongecompliceerde urineweginfectie.',
      },
      {
        id: '10b',
        type: 'meerkeuze',
        points: 2,
        question: `10b. Welk middel past het best bij atypische pneumonie door Mycoplasma of Legionella? (2.0p)`,
        options: [
          { letter: 'A', text: 'Azitromycine' },
          { letter: 'B', text: 'Flucloxacilline' },
          { letter: 'C', text: 'Metronidazol' },
          { letter: 'D', text: 'Vancomycine' },
        ],
        correctAnswer: 'A',
        explanation: 'Azitromycine past bij atypische verwekkers zoals Mycoplasma en Legionella.',
      },
      {
        id: '10c',
        type: 'meerkeuze',
        points: 2,
        question: `10c. Waarom is doxycycline ongunstig bij jonge kinderen? (2.0p)`,
        options: [
          { letter: 'A', text: 'Het geeft vaak acute hemolyse' },
          {
            letter: 'B',
            text: 'Het kan verkleuring van tanden en remming van botgroei geven',
          },
          { letter: 'C', text: 'Het werkt alleen intraveneus' },
          { letter: 'D', text: 'Het dekt geen enkele bacterie' },
        ],
        correctAnswer: 'B',
        explanation: 'Doxycycline kan tandverkleuring en remming van botgroei geven en is daarom ongunstig bij jonge kinderen.',
      },
      {
        id: '10d',
        type: 'meerkeuze',
        points: 3,
        question: `10d. Welke combinatie van middel en spectrum is juist? (3.0p)`,
        options: [
          { letter: 'A', text: 'Metronidazol – alleen anaerobe bacteriën' },
          { letter: 'B', text: 'Clindamycine – goede dekking van gramnegatieve staven' },
          { letter: 'C', text: 'Flucloxacilline – vooral respiratoire virussen' },
          { letter: 'D', text: 'Nitrofurantoïne – beste keuze voor atypische pneumonie' },
        ],
        correctAnswer: 'A',
        explanation: 'Metronidazol werkt tegen anaerobe bacteriën.',
      },
      {
        id: '10e',
        type: 'open',
        points: 4,
        question: `10e. Noem in maximaal 45 woorden één belangrijk verschil tussen amoxicilline en amoxicilline-clavulaanzuur. (4.0p)`,
        wordLimit: 45,
        rubric:
          'Kern: clavulaanzuur als β-lactamaseremmer → bredere dekking tegen bacteriën die smalspectrum β-lactamases produceren.',
        modelAnswer:
          'Amoxicilline-clavulaanzuur bevat naast amoxicilline ook een β-lactamaseremmer. Daardoor heeft het een bredere dekking tegen bacteriën die smalspectrum β-lactamases produceren.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-11',
    title: 'Casus 11 – Antibioticaresistentie',
    totalPoints: 12,
    scenario: `Op een verpleegafdeling wordt bij een patiënt een ESBL-producerende gramnegatieve bacterie gevonden. Een andere patiënt blijkt een bacterie te dragen met verminderde porine-expressie. De arts vraagt de coassistent om de onderliggende resistentiemechanismen uit te leggen.`,
    questions: [
      {
        id: '11a',
        type: 'meerkeuze',
        points: 2,
        question: `11a. Wat doet een ESBL in essentie? (2.0p)`,
        options: [
          { letter: 'A', text: 'Het stimuleert fagocytose' },
          { letter: 'B', text: 'Het inactiveert veel beta-lactam antibiotica' },
          { letter: 'C', text: 'Het verhoogt de opname van antibiotica' },
          { letter: 'D', text: 'Het remt uitsluitend virussen' },
        ],
        correctAnswer: 'B',
        explanation: 'Een ESBL inactiveert veel beta-lactam antibiotica.',
      },
      {
        id: '11b',
        type: 'meerkeuze',
        points: 2,
        question: `11b. Wat is het effect van minder porines in het buitenmembraan van een gramnegatieve bacterie? (2.0p)`,
        options: [
          { letter: 'A', text: 'Meer influx van antibioticum' },
          { letter: 'B', text: 'Minder influx van antibioticum' },
          { letter: 'C', text: 'Meer antistofproductie' },
          { letter: 'D', text: 'Verlies van peptidoglycaan' },
        ],
        correctAnswer: 'B',
        explanation: 'Minder porines betekent minder influx van antibioticum in de bacterie.',
      },
      {
        id: '11c',
        type: 'meerkeuze',
        points: 2,
        question: `11c. Welke uitspraak over resistentie is juist? (2.0p)`,
        options: [
          { letter: 'A', text: 'Antibiotica doden uitsluitend resistente bacteriën' },
          {
            letter: 'B',
            text: 'Antibioticagebruik kan gevoelige bacteriën selectief verwijderen, waardoor resistente overblijven',
          },
          { letter: 'C', text: 'Resistentie ontstaat alleen in ziekenhuizen' },
          {
            letter: 'D',
            text: 'ESBL-dragerschap is voor gezonde mensen altijd direct ziekteverwekkend',
          },
        ],
        correctAnswer: 'B',
        explanation:
          'Antibioticagebruik selecteert resistente bacteriën door gevoelige bacteriën weg te nemen.',
      },
      {
        id: '11d',
        type: 'meerkeuze',
        points: 2,
        question: `11d. Welke uitspraak past het best bij de Nederlandse context zoals in de stof besproken? (2.0p)`,
        options: [
          {
            letter: 'A',
            text: "ESBL's worden in Nederland uitsluitend via vee overgedragen",
          },
          {
            letter: 'B',
            text: 'Mens-op-mens overdracht speelt een belangrijke rol bij ESBL-verspreiding',
          },
          {
            letter: 'C',
            text: 'Antibioticagebruik in de dierhouderij is de laatste jaren sterk gestegen',
          },
          {
            letter: 'D',
            text: 'Kritieke antibiotica worden op grote schaal in alle diersectoren gebruikt',
          },
        ],
        correctAnswer: 'B',
        explanation:
          'In Nederland speelt mens-op-mens overdracht een belangrijke rol bij verspreiding van ESBL’s.',
      },
      {
        id: '11e',
        type: 'open',
        points: 4,
        question: `11e. Leg in maximaal 50 woorden uit wat het verschil is tussen natuurlijke en verkregen resistentie. (4.0p)`,
        wordLimit: 50,
        rubric:
          '2p natuurlijk: intrinsiek/ inherent ongevoelig (bijv. ontbrekend aangrijpingspunt). 2p verkregen: later door mutatie of opname genen.',
        modelAnswer:
          'Natuurlijke resistentie is intrinsiek: een bacteriesoort is van zichzelf ongevoelig, bijvoorbeeld door ontbreken van een aangrijpingspunt. Verkregen resistentie ontstaat later, bijvoorbeeld door mutaties of opname van resistentiegenen.',
        explanation: '',
      },
    ],
  },
]
