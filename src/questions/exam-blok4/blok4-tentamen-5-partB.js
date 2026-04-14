/** Blok 4 oefententamen 5 — casussen 4–6 */

export const blok4Tentamen5PartB = [
  {
    id: 'casus-4',
    title: 'Casus 4 – Lymfeklier en differentiaaldiagnose',
    totalPoints: 14,
    scenario: `Een 18-jarige vrouw komt met een vergrote halslymfeklier sinds 2 weken. Zij heeft lichte malaise, geen uitgesproken keelpijn en de klier is niet erg pijnlijk. Zij verschoont thuis regelmatig de kattenbak.

Afbeelding 3 – lymfeklierschema: zone A = follikel, zone B = paracortex, zone C = medulla; HEV mondt uit in zone B.`,
    questions: [
      {
        id: '4a',
        type: 'meerkeuze',
        points: 2,
        question: `4a. Welke diagnose wordt op basis van deze aanvullende informatie waarschijnlijker? (2.0p)`,
        options: [
          { letter: 'A', text: 'Toxoplasmose' },
          { letter: 'B', text: 'EBV-mononucleosis' },
          { letter: 'C', text: 'Kattenkrabziekte' },
          { letter: 'D', text: 'Tuberculeuze lymfadenitis' },
        ],
        correctAnswer: 'A',
        explanation:
          'Niet-pijnlijke cervicale lymfadenopathie met kattenbakblootstelling past goed bij toxoplasmose.',
      },
      {
        id: '4b',
        type: 'meerkeuze',
        points: 2,
        question: `4b. Welke transmissieroute past hier het best bij? (2.0p)`,
        options: [
          { letter: 'A', text: 'Speekselcontact' },
          {
            letter: 'B',
            text: 'Oöcysten via kattenbak/omgeving of cysten via onvoldoende verhit vlees',
          },
          { letter: 'C', text: 'Wateraerosolen' },
          { letter: 'D', text: 'Grote druppels tijdens hoesten' },
        ],
        correctAnswer: 'B',
        explanation:
          'Toxoplasmose wordt overgedragen via oöcysten uit kattenomgeving of via weefselcysten in onvoldoende verhit vlees.',
      },
      {
        id: '4c',
        type: 'meerkeuze',
        points: 2,
        question: `4c. In welk gebied komen naïeve T-cellen vooral binnen en waar worden zij vooral geactiveerd? (2.0p)`,
        options: [
          { letter: 'A', text: 'Via HEV in de paracortex' },
          {
            letter: 'B',
            text: 'Via afferente lymfe rechtstreeks in de follikel',
          },
          { letter: 'C', text: 'Via sinusoïden in de medulla' },
          {
            letter: 'D',
            text: 'Via de ductus thoracicus in de cortex',
          },
        ],
        correctAnswer: 'A',
        explanation:
          'Naïeve T-cellen komen vooral via HEV binnen in de paracortex.',
      },
      {
        id: '4d',
        type: 'meerkeuze',
        points: 2,
        question: `4d. Welke cel is het belangrijkst voor initiële activatie van naïeve T-cellen? (2.0p)`,
        options: [
          { letter: 'A', text: 'Dendritische cel' },
          { letter: 'B', text: 'Erytrocyt' },
          { letter: 'C', text: 'Type II pneumocyt' },
          { letter: 'D', text: 'Mastcel' },
        ],
        correctAnswer: 'A',
        explanation:
          'Dendritische cellen zijn cruciaal voor initiële activatie van naïeve T-cellen.',
      },
      {
        id: '4e',
        type: 'meerkeuze',
        points: 2,
        question: `4e. Een andere patiënt heeft niet-pijnlijke cervicale lymfadenopathie, nachtzweten en gewichtsverlies. Welke diagnose wordt dan waarschijnlijker? (2.0p)`,
        options: [
          { letter: 'A', text: 'Kattenkrabziekte' },
          { letter: 'B', text: 'Tuberculeuze lymfadenitis' },
          { letter: 'C', text: 'Rotavirusinfectie' },
          { letter: 'D', text: 'Tinea capitis' },
        ],
        correctAnswer: 'B',
        explanation:
          'Niet-pijnlijke klieren met nachtzweten en gewichtsverlies passen beter bij tuberculeuze lymfadenitis.',
      },
      {
        id: '4f',
        type: 'open',
        points: 4,
        question: `4f. Beschrijf in maximaal 45 woorden de recirculatieroute van een naïeve lymfocyt vanaf het bloed door de lymfeklier terug naar het bloed. (4.0p)`,
        wordLimit: 45,
        rubric: 'Kern: bloed → HEV → lymfeklier → efferente lymfe → ductus thoracicus → bloed.',
        modelAnswer:
          'Bloed → via HEV de lymfeklier in → via efferente lymfe eruit → via ductus thoracicus terug naar het bloed.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-5',
    title: 'Casus 5 – Milt, pulpa en circulatie',
    totalPoints: 16,
    scenario: `Tijdens een practicum bekijk je een preparaat van de milt.

Afbeelding 4 – miltschema: A = veneuze sinus, B = rode pulpa parenchym / miltstrengen, C = follikel, D = marginale zone, E = T-celgebied rondom centrale arteriole.`,
    questions: [
      {
        id: '5a',
        type: 'meerkeuze',
        points: 2,
        question: `5a. Welke structuren behoren tot de rode pulpa? (2.0p)`,
        options: [
          { letter: 'A', text: 'A en B' },
          { letter: 'B', text: 'C en D' },
          { letter: 'C', text: 'C en E' },
          { letter: 'D', text: 'Alleen D' },
        ],
        correctAnswer: 'A',
        explanation:
          'De rode pulpa bestaat uit veneuze sinussen en rode pulpa parenchym/miltstrengen.',
      },
      {
        id: '5b',
        type: 'meerkeuze',
        points: 2,
        question: `5b. Welke structuren behoren tot de witte pulpa? (2.0p)`,
        options: [
          { letter: 'A', text: 'A en B' },
          { letter: 'B', text: 'C, D en E' },
          { letter: 'C', text: 'Alleen A' },
          { letter: 'D', text: 'Alleen B en C' },
        ],
        correctAnswer: 'B',
        explanation:
          'De witte pulpa bestaat uit follikel, marginale zone en T-celgebied.',
      },
      {
        id: '5c',
        type: 'meerkeuze',
        points: 2,
        question: `5c. Wat is PALS? (2.0p)`,
        options: [
          { letter: 'A', text: 'Een veneuze sinus' },
          { letter: 'B', text: 'Het T-celgebied rond de centrale arteriole' },
          { letter: 'C', text: 'Het rode pulpa parenchym' },
          { letter: 'D', text: 'Een type macrofaag' },
        ],
        correctAnswer: 'B',
        explanation:
          'PALS is de periarteriolaire lymfocytenschede, dus het T-celgebied rond de centrale arteriole.',
      },
      {
        id: '5d',
        type: 'meerkeuze',
        points: 3,
        question: `5d. Welke uitspraak over open en gesloten circulatie is juist? (3.0p)`,
        options: [
          {
            letter: 'A',
            text: 'Bij open circulatie blijft bloed omgeven door endotheel',
          },
          {
            letter: 'B',
            text: 'Bij gesloten circulatie stroomt bloed eerst door de miltstrengen',
          },
          {
            letter: 'C',
            text: 'Bij open circulatie komt bloed in direct contact met rood pulpa parenchym',
          },
          {
            letter: 'D',
            text: 'Bij de mens is gesloten circulatie het belangrijkst',
          },
        ],
        correctAnswer: 'C',
        explanation:
          'Bij open circulatie komt bloed in direct contact met het rode pulpa parenchym.',
      },
      {
        id: '5e',
        type: 'meerkeuze',
        points: 3,
        question: `5e. Welke route beschrijft de open circulatie het best? (3.0p)`,
        options: [
          {
            letter: 'A',
            text: 'Miltarterie → trabekelarterie → centrale arteriole → penseelarteriole → rode pulpa parenchym → veneuze sinus → rode pulpa vene → miltvene',
          },
          {
            letter: 'B',
            text: 'Miltvene → centrale arteriole → rode pulpa → miltarterie',
          },
          {
            letter: 'C',
            text: 'Miltarterie → HEV → paracortex → miltvene',
          },
          {
            letter: 'D',
            text: 'Afferente lymfe → miltstrengen → ductus thoracicus',
          },
        ],
        correctAnswer: 'A',
        explanation: 'Dat is de route van de open bloedcirculatie in de milt.',
      },
      {
        id: '5f',
        type: 'open',
        points: 4,
        question: `5f. Leg in maximaal 50 woorden uit waarom de milt immunologisch anders is dan een lymfeklier. (4.0p)`,
        wordLimit: 50,
        rubric:
          'Kern: milt filtert bloed, bloedgedragen antigenen; lymfeklier filtert lymfe, afferent.',
        modelAnswer:
          'De milt filtert bloed en vangt dus vooral bloedgedragen antigenen op; een lymfeklier filtert lymfe en ontvangt antigeen via afferente lymfe.',
        explanation: '',
      },
    ],
  },
  {
    id: 'casus-6',
    title: 'Casus 6 – Pneumonie met atypische draai',
    totalPoints: 13,
    scenario: `Een 52-jarige man presenteert zich met koorts, hoest en dyspneu. Hij is niet acuut zeer ziek, maar heeft ook diarree en voelt zich verward. Vier dagen geleden startte hij amoxicilline zonder verbetering. Hij verbleef kort daarvoor in een vakantiewoning met bubbelbad en douche-installatie.`,
    questions: [
      {
        id: '6a',
        type: 'meerkeuze',
        points: 2,
        question: `6a. Welke verwekker wordt nu waarschijnlijker? (2.0p)`,
        options: [
          { letter: 'A', text: 'Streptococcus pneumoniae' },
          { letter: 'B', text: 'Legionella pneumophila' },
          { letter: 'C', text: 'Moraxella catarrhalis' },
          { letter: 'D', text: 'Haemophilus influenzae type b' },
        ],
        correctAnswer: 'B',
        explanation:
          'Diarree, verwardheid, wateraerosolen en falen van amoxicilline passen sterk bij Legionella pneumophila.',
      },
      {
        id: '6b',
        type: 'meerkeuze',
        points: 3,
        question: `6b. Welke combinatie van hints maakt deze verwekker het meest waarschijnlijk? (3.0p)`,
        options: [
          {
            letter: 'A',
            text: 'Wateraerosolen, diarree, verwardheid, falen van beta-lactamtherapie',
          },
          {
            letter: 'B',
            text: 'Keelpijn, conjunctivitis, kattenbakcontact',
          },
          { letter: 'C', text: 'Tinea pedis en miltruptuur' },
          { letter: 'D', text: 'Alleen productief sputum' },
        ],
        correctAnswer: 'A',
        explanation: 'Dit zijn klassieke rode vlaggen voor Legionella.',
      },
      {
        id: '6c',
        type: 'meerkeuze',
        points: 2,
        question: `6c. Welke diagnostiek is voor deze verwekker het meest logisch als snelle eerste stap? (2.0p)`,
        options: [
          { letter: 'A', text: 'Urine-antigeentest' },
          { letter: 'B', text: 'Monospot' },
          { letter: 'C', text: 'Dikke druppel' },
          { letter: 'D', text: 'KOH-preparaat' },
        ],
        correctAnswer: 'A',
        explanation:
          'De urine-antigeentest is de meest gebruikte snelle test voor Legionella.',
      },
      {
        id: '6d',
        type: 'meerkeuze',
        points: 2,
        question: `6d. Welke uitspraak over Mycoplasma pneumoniae is juist? (2.0p)`,
        options: [
          {
            letter: 'A',
            text: 'Beta-lactam antibiotica zijn eerste keus omdat Mycoplasma een dikke celwand heeft',
          },
          {
            letter: 'B',
            text: 'Mycoplasma heeft geen celwand en kan een ‘walking pneumonia’ geven',
          },
          {
            letter: 'C',
            text: 'Mycoplasma groeit snel op standaardkweek en is eenvoudig met Gramkleuring te zien',
          },
          {
            letter: 'D',
            text: 'Mycoplasma veroorzaakt alleen huidinfecties',
          },
        ],
        correctAnswer: 'B',
        explanation:
          'Mycoplasma heeft geen celwand en kan een ‘walking pneumonia’ geven; beta-lactams werken daarom niet goed.',
      },
      {
        id: '6e',
        type: 'open',
        points: 4,
        question: `6e. Beschrijf in maximaal 50 woorden waarom een patiënt met influenza die na enkele dagen opnieuw zieker wordt, ook aan een bacteriële superinfectie doet denken. (4.0p)`,
        wordLimit: 50,
        rubric:
          'Kern: klinische verslechtering na initieel beloop → superinfectie pneumokok/H.influenzae/S.aureus; antibiotica kunnen dan geïndiceerd zijn.',
        modelAnswer:
          'Na influenza kan klinische verslechtering na enkele dagen passen bij een bacteriële superinfectie, bijvoorbeeld met pneumokokken, H. influenzae of S. aureus; dan kunnen antibiotica wél geïndiceerd zijn.',
        explanation: '',
      },
    ],
  },
]
