/** Blok 4 oefententamen 1 — casussen 1–3 (bron: Oefententamen blok 4.1, studentversie + antwoordmodel) */

const VIRUS_STEPS = [
  'Assemblage',
  'Ontmanteling',
  'Penetratie',
  'Aanhechting',
  'Vrijkomen',
  'Replicatie',
]

const VIRUS_STEPS_CORRECT = ['Aanhechting', 'Penetratie', 'Ontmanteling', 'Replicatie', 'Assemblage', 'Vrijkomen']

export const blok4Tentamen1PartA = [
  {
    id: 'casus-1',
    title: 'Casus 1 – De eerste afweerreactie',
    totalPoints: 10,
    scenario: `Een 22-jarige man prikt zich tijdens het tuinieren aan een vervuilde roestige spijker. Binnen enkele uren ontstaat lokale roodheid, warmte en zwelling. In het beschadigde weefsel reageren residente macrofagen en dendritische cellen als eerste op binnengedrongen micro-organismen.`,
    questions: [
      {
        id: '1a',
        type: 'meerkeuze',
        points: 2,
        question: `1a. Welke combinatie past het best bij herkenning van een gramnegatieve bacterie door de aangeboren afweer? (2.0p)`,
        options: [
          { letter: 'A', text: 'TLR3 herkent dsRNA en induceert vooral IL-4' },
          { letter: 'B', text: 'TLR4 herkent LPS en induceert via NF-κB pro-inflammatoire cytokinen' },
          { letter: 'C', text: 'BCR herkent LPS en activeert direct macrofagen' },
          { letter: 'D', text: 'MHC-II herkent LPS en activeert direct neutrofielen' },
        ],
        correctAnswer: 'B',
        explanation:
          'TLR4 herkent LPS van gramnegatieve bacteriën en activeert via MyD88/TIRAP onder andere NF-κB, wat leidt tot pro-inflammatoire cytokinen.',
      },
      {
        id: '1b',
        type: 'koppelvraag',
        points: 3,
        question: `1b. Koppel de receptor aan het meest passende type herkenning. (3.0p)
PRR
Fc-receptor
Complementreceptor
C-type lectin receptor`,
        items: ['PRR', 'Fc-receptor', 'Complementreceptor', 'C-type lectin receptor'],
        matchOptions: [
          { letter: 'A', text: 'Herkent mannan/β-glucanen op schimmels' },
          { letter: 'B', text: 'Herkent antistoffen gebonden aan micro-organismen' },
          { letter: 'C', text: 'Herkent PAMPs direct' },
          { letter: 'D', text: 'Herkent complement op een geopsoneerd micro-organisme' },
        ],
        correctMapping: { 0: 'C', 1: 'B', 2: 'D', 3: 'A' },
        explanation:
          'PRRs herkennen PAMPs direct. Fc-receptoren en complementreceptoren herkennen brugmoleculen. C-type lectin receptoren herkennen onder andere schimmelcomponenten zoals mannan en β-glucanen.',
      },
      {
        id: '1c',
        type: 'meerkeuze',
        points: 2,
        question: `1c. Bij jicht activeert een kristal het NLRP3-inflammasoom. Welke stof wordt dan direct actief gemaakt door caspase-1? (2.0p)`,
        options: [
          { letter: 'A', text: 'pro-IL-4' },
          { letter: 'B', text: 'IL-1β' },
          { letter: 'C', text: 'TNF-β' },
          { letter: 'D', text: 'IFN-γ' },
        ],
        correctAnswer: 'B',
        explanation: 'Bij activatie van het NLRP3-inflammasoom zet caspase-1 pro-IL-1β om in actief IL-1β.',
      },
      {
        id: '1d',
        type: 'open',
        points: 3,
        question: `1d. Leg in maximaal 40 woorden uit waarom de aanwezigheid van PAMPs niet automatisch betekent dat er sprake is van een infectie. (3.0p)`,
        wordLimit: 40,
        rubric:
          'Kern: PAMPs komen ook op niet-pathogene micro-organismen voor; aanwezigheid betekent microben, niet automatisch weefselschade of echte infectie.',
        modelAnswer:
          'PAMPs komen ook voor op niet-pathogene micro-organismen. Hun aanwezigheid betekent dus alleen dat er microben zijn, niet automatisch dat er weefselschade of een echte infectie is.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-2',
    title: 'Casus 2 – Kolonisatie of infectie?',
    totalPoints: 9,
    scenario: `Een 79-jarige vrouw ontwikkelt twee dagen na blaaskatheterisatie dysurie en koorts. De urinekweek toont groei van E. coli. De arts vraagt zich af of dit het gevolg is van een endogene of exogene bron.`,
    questions: [
      {
        id: '2a',
        type: 'meerkeuze',
        points: 2,
        question: `2a. Wat is in deze casus de meest waarschijnlijke bron? (2.0p)`,
        options: [
          { letter: 'A', text: 'Exogene infectie vanuit de lucht' },
          { letter: 'B', text: 'Endogene infectie vanuit de darmflora' },
          { letter: 'C', text: 'Exogene infectie via muggenoverdracht' },
          { letter: 'D', text: 'Endogene infectie vanuit de milt' },
        ],
        correctAnswer: 'B',
        explanation: 'Een urineweginfectie door E. coli ontstaat klassiek endogeen vanuit de darmflora.',
      },
      {
        id: '2b',
        type: 'meerdere_antwoorden',
        points: 3,
        maxSelections: 2,
        requireExactSet: true,
        question: `2b. Welke twee uitspraken over gramnegatieve bacteriën zijn juist? Kies 2. (3.0p)`,
        options: [
          { letter: 'A', text: 'Ze hebben een dikke peptidoglycaanlaag zonder buitenmembraan' },
          { letter: 'B', text: 'Ze bevatten LPS in het buitenmembraan' },
          { letter: 'C', text: 'Porines spelen een rol in transport door het buitenmembraan' },
          { letter: 'D', text: 'Beta-lactam antibiotica grijpen vooral aan op mitochondriën' },
          { letter: 'E', text: 'Ze hebben geen celwand' },
        ],
        correctAnswers: ['B', 'C'],
        explanation: 'Gramnegatieven hebben een buitenmembraan met LPS en porines.',
      },
      {
        id: '2c',
        type: 'meerkeuze',
        points: 2,
        question: `2c. Waarom werken beta-lactam antibiotica niet goed tegen Mycoplasma pneumoniae? (2.0p)`,
        options: [
          { letter: 'A', text: 'Omdat de bacterie intracellulair leeft' },
          { letter: 'B', text: 'Omdat de bacterie geen celwand heeft' },
          { letter: 'C', text: 'Omdat de bacterie alleen in de lever voorkomt' },
          { letter: 'D', text: 'Omdat de bacterie alleen via feces wordt overgedragen' },
        ],
        correctAnswer: 'B',
        explanation: 'Mycoplasma heeft geen celwand, dus beta-lactam antibiotica hebben geen aangrijpingspunt.',
      },
      {
        id: '2d',
        type: 'meerkeuze',
        points: 2,
        question: `2d. Welke uitspraak over kolonisatie en infectie is het best? (2.0p)`,
        options: [
          { letter: 'A', text: 'Kolonisatie veroorzaakt altijd weefselschade' },
          { letter: 'B', text: 'Infectie betekent aanwezigheid van micro-organismen zonder immuunrespons' },
          { letter: 'C', text: 'Kolonisatie kan bestaan zonder symptomen of weefselschade' },
          { letter: 'D', text: 'Infectie en kolonisatie betekenen in de microbiologie hetzelfde' },
        ],
        correctAnswer: 'C',
        explanation:
          'Kolonisatie betekent aanwezigheid en groei van micro-organismen zonder schade of symptomen; infectie geeft juist weefselschade/ziekte.',
      },
    ],
  },
  {
    id: 'casus-3',
    title: 'Casus 3 – Een virus in zes stappen',
    totalPoints: 9,
    scenario: `Een student krijgt tijdens de winter keelpijn, koorts en hoesten. Een PCR toont een respiratoir virus aan. Je wilt de basis van virusstructuur en -replicatie toepassen.`,
    questions: [
      {
        id: '3a',
        type: 'meerkeuze',
        points: 2,
        question: `3a. Welke uitspraak over een virus met envelop is juist? (2.0p)`,
        options: [
          { letter: 'A', text: 'Het is meestal stabieler buiten het lichaam dan een naakt virus' },
          { letter: 'B', text: 'Het bevat altijd een dubbelstrengs DNA-genoom' },
          { letter: 'C', text: 'Het bezit een lipide membraan en is vaak kwetsbaarder buiten de gastheer' },
          { letter: 'D', text: 'Het kan niet via budding vrijkomen' },
        ],
        correctAnswer: 'C',
        explanation: 'Een envelopvirus heeft een lipidenmembraan en is daardoor meestal kwetsbaarder buiten de gastheer.',
      },
      {
        id: '3b',
        type: 'beeldvraag',
        points: 3,
        gradingMethod: 'order',
        question: `3b. Zet de stappen van virale replicatie in de juiste volgorde. (3.0p)
Assemblage
Ontmanteling
Penetratie
Aanhechting
Vrijkomen
Replicatie`,
        orderIntro: 'Chronologische volgorde (1 = eerste stap, 6 = laatste stap):',
        orderOptions: [...VIRUS_STEPS],
        correctOrder: [...VIRUS_STEPS_CORRECT],
        expectedAnswer: 'Aanhechting → Penetratie → Ontmanteling → Replicatie → Assemblage → Vrijkomen',
        rubric: 'Alleen volledig juiste volgorde = 3p.',
        modelAnswer: 'Aanhechting, penetratie, ontmanteling, replicatie, assemblage, vrijkomen.',
        explanation: '',
      },
      {
        id: '3c',
        type: 'meerkeuze',
        points: 2,
        question: `3c. In welke Baltimore-groep valt HIV? (2.0p)`,
        options: [
          { letter: 'A', text: 'Groep III: dsRNA' },
          { letter: 'B', text: 'Groep IV: ssRNA+' },
          { letter: 'C', text: 'Groep VI: ssRNA+ met reverse transcriptase' },
          { letter: 'D', text: 'Groep VII: dsDNA met reverse transcriptase' },
        ],
        correctAnswer: 'C',
        explanation: 'HIV hoort in Baltimore-groep VI: positief enkelstrengs RNA met reverse transcriptase.',
      },
      {
        id: '3d',
        type: 'meerkeuze',
        points: 2,
        question: `3d. Het woord tropisme betekent hier: (2.0p)`,
        options: [
          { letter: 'A', text: 'De snelheid waarmee een virus muteert' },
          { letter: 'B', text: 'De voorkeur van een virus voor bepaalde cellen of weefsels' },
          { letter: 'C', text: 'De duur van de incubatietijd' },
          { letter: 'D', text: 'De gevoeligheid van een virus voor antibiotica' },
        ],
        correctAnswer: 'B',
        explanation: 'Tropisme is de voorkeur van een virus voor bepaalde cellen of weefsels.',
      },
    ],
  },
]
