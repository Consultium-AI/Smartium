import { LEERDOELEN_WEEK1 } from './data-leerdoelen-w1'
import { LEERDOELEN_WEEK2 } from './data-leerdoelen-w2'
import { LEERDOELEN_WEEK3 } from './data-leerdoelen-w3'
import { LEERDOELEN_WEEK4 } from './data-leerdoelen-w4'
import { LEERDOELEN_WEEK5 } from './data-leerdoelen-w5'

export const STOFKAART = [
  {
    week: 'Week 1',
    intro: 'Week 1 gaat over de bovenste tractus: bloeding, maagzuur, reflux, H. pylori, passageklachten, motiliteit en bovenste-tractusoncologie.',
    items: [
      'Endoscopie basis en bloedingen',
      'Fysiologie van maagzuur',
      'Leefstijl bij reflux',
      'Logistische regressie analyse',
      'Reflux bij kinderen',
      'Pathofysiologie Helicobacter pylori',
      'H. pylori, de zorgkosten die ontstaan vanuit een bacterie',
      'Omeprazol en protonpompremmers',
      '(Pre)maligne bovenste tractus digestivus',
      'Chemoradiatie',
      'Kindergerelateerde ziekten',
      'Motiliteit van de bovenste tractus digestivus',
      'Chirurgische behandeling van aandoeningen aan de bovenste tractus digestivus',
    ],
  },
  {
    week: 'Week 2',
    intro: 'Week 2 gaat over acute buik, rectaal bloedverlies, CRC, poliepen, erfelijkheid, operatievoorbereiding en diarree/malabsorptie.',
    items: [
      'Acute buik en acute buikpijn',
      'Zelfstudie differentiaal diagnose van acute buikpijn',
      'Bevolkingsonderzoek darmkanker',
      'Colorectaal carcinoom',
      'Endoscopische resectietechnieken',
      'Erfelijke darmkanker',
      'Rectaal bloedverlies',
      'Basis oncologische chirurgie (coloncarcinoom)',
      'Prehabilitatie voor een operatie',
      'Aanhoudende buikklachten',
      'Malabsorptie',
      'Morbus Crohn',
      'Vertering en opname',
      'Microscopische anatomie van maag tot anus',
    ],
  },
  {
    week: 'Week 3',
    intro: 'Week 3 koppelt pancreas, pancreatitis, advanced endoscopie, voeding, pancreascarcinoom en diabetes type 1.',
    items: [
      'Pancreasfysiologie',
      'Acute en chronische pancreatitis',
      'Advanced endoscopie (EUS en ERCP)',
      'Dieet, pancreatitis en pancreasenzymen',
      'Pancreascarcinoom',
      'Microscopische anatomie van de pancreas',
      'Evaluatie patient met buikpijn',
      'Gestuurde zelfstudie - overzichtsartikel',
      'Pitch patient met chronische pancreatitis',
      'Symptomen, pathofysiologie en diagnostiek van diabetes mellitus type 1',
      'Acute ontregelingen bij diabetes mellitus type 1',
      'Endocriene regulatie KH-, vet- en eiwitstofwisseling',
      'Exogene insulines',
      'Regulatie van metabolisme enzymkinetiek',
    ],
  },
  {
    week: 'Week 4',
    intro: 'Week 4 draait om vetvertering, levermetabolisme, steatotische leverziekte, auto-immuun/virale hepatitis, cirrose, HCC en transplantatie.',
    items: [
      'Vetvertering en entero-hepatische cyclus',
      'De lever als fabriek',
      'SLD en MASLD',
      'Auto-immuun gemedieerde leverziekten',
      'ABCDE virale hepatitis',
      'Consult Een brede blik 2 (voorbereiding KLV 2.29)',
      'Literatuur over leverfibrose',
      'Endoscopie basis en bloedingen',
      'Levercirrose en complicaties',
      'HCC',
      'Levertransplantatie',
    ],
  },
  {
    week: 'Week 5',
    intro: 'Week 5 gaat over obesitas en diabetes type 2.',
    items: [
      'Lichaamsbeweging',
      'Medicamenteuze obesitasbehandelingen',
      'Niet-medicamenteuze obesitasbehandelingen',
      'Nutritional assessment',
      'Leven met obesitas',
      'Symptomen, pathofysiologie en diagnostiek van diabetes mellitus type 2',
      'Langetermijncomplicaties van diabetes mellitus',
      'Leefstijl, voeding en preventie bij diabetes mellitus type 2',
      'Remissie van diabetes',
      'Medicamenteuze behandeling van diabetes type 2',
    ],
  },
]


export const LEERDOELEN_WEKEN = [
  LEERDOELEN_WEEK1,
  LEERDOELEN_WEEK2,
  LEERDOELEN_WEEK3,
  LEERDOELEN_WEEK4,
  LEERDOELEN_WEEK5,
]


export const COOKED_WEKEN = [
  {
    week: 'Week 1 - simpel uitgelegd',
    intro: 'Week 1 gaat over de bovenste tractus. Rode draad: klacht -> alarmsymptoom -> mechanisme -> passend onderzoek of behandeling.',
    bullets: [
      'GI-bloeding: eerst stabiliseren, daarna bron zoeken. Hematemesis/melena = meestal hoog; hematochezie = meestal laag.',
      'Maagzuur: HAG stimuleert zuur (Histamine, Acetylcholine, Gastrine). Somatostatine remt.',
      'PPI = pomp platleggen: remt H+/K+-ATPase.',
      'NSAID-ulcus: NSAID remt COX-1 -> minder PGE2 -> kwetsbaar slijmvlies.',
      'H. pylori: urease maakt ammoniak; antruminfectie kan meer zuur geven.',
      'Reflux: buikdruk, grote maaltijden, liggen, overgewicht, vertraagde maaglediging.',
      'Alarmsymptomen: progressieve dysfagie, gewichtsverlies, anemie, bloedbraken, melena.',
      'Achalasie = LES ontspant niet + slokdarmperistaltiek faalt. Gastroparese = maag leegt traag.',
    ],
    tables: [
      { title: 'Hoge vs lage GI-bloeding', rows: [['Hoog', 'hematemesis, melena, gastroscopie'], ['Laag', 'hematochezie, colonoscopie/CTA']] },
      { title: 'Type klacht bovenste tractus', rows: [['Reflux', 'branderig retrosternaal, erger bij liggen'], ['Gastroparese', 'misselijk, braken, snel vol, glucose wisselt'], ['Obstructie/alarm', 'progressieve dysfagie, gewichtsverlies']] },
    ],
    examtip: 'Vraag bij elke casus: bloeding, zuur/barriere, reflux/motiliteit of maligniteit?',
  },
  {
    week: 'Week 2 - simpel uitgelegd',
    intro: 'Week 2: acute buik, rectaal bloedverlies, CRC, poliepen, erfelijkheid, operatievoorbereiding, diarree/malabsorptie.',
    bullets: [
      'Acute buikpijn = klacht; acute buik = urgent met peritoneale prikkeling.',
      'AMI = pijn veel erger dan buikonderzoek doet vermoeden. Normaal lactaat sluit het niet uit.',
      'FIT positief = coloscopie, niet meteen kanker.',
      'Adenoom-carcinoomsequentie: APC -> adenoom -> carcinoom.',
      'Advanced adenoom: >=10 mm, hooggradige dysplasie of >25% villus.',
      'CRC: rectum vraagt MRI voor MRF/EMVI.',
      'Lynch: jonge CRC, familie, MMR-deficientie.',
      'Chronische diarree + gewichtsverlies/bloed/nachtklachten = organisch tot tegendeel bewezen.',
    ],
    tables: [
      { title: 'Acute buik', rows: [['Appendicitis', 'peri-umbilicaal -> rechter onderbuik'], ['Cholangitis', 'koorts + icterus + pijn, spoed'], ['AMI', 'AF + pijn out of proportion + CTA']] },
      { title: 'Poliepen', rows: [['Adenoom', 'klassieke voorloper CRC'], ['Serrated', 'ook voorloper via andere route'], ['Hyperplastisch', 'meestal laag risico']] },
    ],
    examtip: 'Bij colonvragen eerst route bepalen: screening/poliep, bloeding, CRC-stadium of diarree/malabsorptie.',
  },
  {
    week: 'Week 3 - simpel uitgelegd',
    intro: 'Week 3: pancreas, pancreatitis, endoscopie, voeding, pancreascarcinoom, diabetes type 1.',
    bullets: [
      'Acinus = enzymen. Ductus = bicarbonaat. CCK = enzymen + galblaas. Secretine = bicarbonaat.',
      'Proteasen als zymogeen; trypsine is de startknop.',
      'Acute pancreatitis: 2 van 3 criteria (pijn, lipase >3x, beeldvorming).',
      'ERCP bij biliaire pancreatitis vooral bij cholangitis of persisterende obstructie.',
      'Voeding: oraal zodra mogelijk; enterale voeding als darm bruikbaar is.',
      'Chronische pancreatitis: irreversibel, pijn + fibrose + steatorroe + type 3c diabetes.',
      'DM1: auto-immuun beta-celverlies -> absoluut insulinetekort -> risico op DKA.',
    ],
    tables: [
      { title: 'Pancreas snel', rows: [['Acinaire cel', 'enzymen/zymogenen'], ['Ductcel', 'bicarbonaat en water'], ['Enteropeptidase', 'trypsinogeen -> trypsine']] },
      { title: 'Pancreatitisbeleid', rows: [['Mild', 'pijnstilling, vocht, orale voeding zodra mogelijk'], ['Biliair + cholangitis', 'ERCP'], ['Necrose + infectie', 'step-up, drainage/interventie']] },
    ],
    examtip: 'Lipase stelt diagnose, maar beleid hangt af van kliniek, oorzaak, obstructie, orgaanfalen, necrose en voeding.',
  },
  {
    week: 'Week 4 - simpel uitgelegd',
    intro: 'Week 4: vetvertering, levermetabolisme, steatotische leverziekte, hepatitis, cirrose, HCC, transplantatie.',
    bullets: [
      'Vetvertering = lipase + colipase + galzouten + micellen.',
      'Enterohepatische cyclus: galzouten terugresorberen in ileum.',
      'CYP-remmer = spiegel omhoog; CYP-inductor = spiegel omlaag.',
      'Paracetamol-overdosis: NAPQI stapelt op -> acetylcysteine.',
      'MASLD = metabool; MetALD = metabool + alcohol; ALD = alcohol centraal.',
      'Fibrose is belangrijker voor prognose dan vetpercentage.',
      'PBC = kleine galwegen + AMA; PSC = stricturen + IBD; AIH = hoge transaminasen/IgG.',
      'Cirrosecomplicaties: ascites, varices, SBP, encefalopathie, HRS, HCC.',
    ],
    tables: [
      { title: 'Leverlab snel', rows: [['Albumine', 'synthese'], ['INR', 'stolling/synthese'], ['Bilirubine', 'uitscheiding/cholestase'], ['Trombocyten', 'portale hypertensie/hypersplenisme']] },
      { title: 'Auto-immuun leverziekten', rows: [['PBC', 'kleine galwegen, AMA'], ['PSC', 'stricturen, IBD, MRCP'], ['AIH', 'hepatitisbeeld, IgG, prednison']] },
    ],
    examtip: 'Levervragen gaan bijna altijd over drie assen: schadeoorzaak, leverfunctie en portale hypertensie.',
  },
  {
    week: 'Week 5 - simpel uitgelegd',
    intro: 'Week 5: obesitas en diabetes type 2. Rode draad: chronische ziekten waarbij leefstijl, medicatie, chirurgie, remissie, stigma en voeding samen beoordeeld worden.',
    bullets: [
      'Obesitas is een chronische ziekte, geen karakterfout.',
      'GLI = voeding + beweging + gedrag. Medicatie en chirurgie werken beter met begeleiding.',
      'GLP-1: meer verzadiging, minder eetlust, tragere maaglediging.',
      'SGLT2-remmer: suiker gaat via urine weg.',
      'Bariatrie geeft vaak sterkste kans op DM2-remissie.',
      'Nutritional assessment = meer dan BMI: intake, reserves, functie.',
      'DM2 = insulineresistentie + beta-celuitputting. Remissie = glucose zonder medicatie.',
    ],
    tables: [
      { title: 'Obesitasbehandeling', rows: [['GLI', 'basis: voeding, beweging, gedrag'], ['Medicatie', 'aanvulling na leefstijl'], ['Bariatrie', 'meeste effect, maar risico en follow-up']] },
      { title: 'Diabetesmedicatie kort', rows: [['Metformine', 'minder glucoseproductie lever'], ['GLP-1', 'verzadiging + insuline-effect'], ['SGLT2', 'glucose via urine'], ['Insuline', 'vervangt/verhoogt insuline-effect']] },
    ],
    examtip: 'Bij obesitas/DM2 nooit alleen naar gewicht of glucose kijken: check context, comorbiditeit, gedrag, stigma en follow-up.',
  },
]

export const TIEN_MINUTEN = [
  'GI-bloeding: eerst ABC/stabiliseren; hematemesis/melena meestal hoog, hematochezie meestal laag maar massale hoge bloeding kan ook.',
  'HAG stimuleert maagzuur: Histamine, Acetylcholine, Gastrine. Somatostatine remt. PPI remt de pomp.',
  'NSAID-ulcus = minder COX-1/PGE2 -> minder mucus/bicarbonaat. H. pylori = urease + gastritis/ulcus/maagkankerrisico.',
  'Reflux/gastroparese/obstructie onderscheiden: zuurbranden versus snel vol/braken versus progressieve dysfagie/gewichtsverlies.',
  'Acute buik: peritoneale prikkeling of instabiliteit is spoed. AMI: pijn out of proportion, CTA, normaal lactaat sluit niet uit.',
  'FIT positief -> coloscopie. Advanced adenoom: >=10 mm, hooggradige dysplasie of >25% villus.',
  'CRC: colon = CT-thorax/abdomen; rectum = ook MRI rectum voor MRF/EMVI. MMR onder 70 jaar checken.',
  'Pancreas: acinus enzymen, ductus bicarbonaat, enteropeptidase activeert trypsinogeen. Pancreatitis = 2 van 3 criteria.',
  'ERCP bij biliaire pancreatitis vooral bij cholangitis of persisterende obstructie. Voeding vroeg starten zodra mogelijk.',
  'Vetvertering: lipase + colipase + galzouten + micellen. Galzouten worden teruggewonnen in ileum.',
  'Levermetabolisme: CYP-remmer verhoogt spiegel; inductor verlaagt spiegel. Paracetamol-overdosis -> NAPQI -> acetylcysteine.',
  'MASLD/MetALD/ALD onderscheiden door metabole risicofactoren en alcohol. Fibrose bepaalt prognose.',
  'Cirrose: ascites, varices, SBP, encefalopathie, HRS, HCC. Albumine/INR = synthese; trombocyten = portale hypertensie.',
  'HCC: bij cirrose kan beeldvorming diagnostisch zijn; BCLC bepaalt behandeling. Transplantatie alleen geselecteerde patienten.',
  'Obesitas/DM2: chronische ziekten. GLI basis, medicatie/chirurgie aanvullend. Nutritional assessment is meer dan BMI.',
]

export const EZELSBRUGGEN = [
  ['HAG stimuleert maagzuur', 'Histamine, Acetylcholine en Gastrine stimuleren de parietale cel.'],
  ['Soma stopt', 'Somatostatine remt maagzuur.'],
  ['PPI = pomp plat', 'PPI remt de H+/K+-ATPase.'],
  ['Galzouten = zeep', 'Ze maken vet oplosbaar genoeg voor micellen en opname.'],
  ['Acinus = Actieve enzymen maken', 'Acinaire cellen produceren enzymen/zymogenen.'],
  ['Ductus = Dempt zuur', 'Ductcellen maken bicarbonaatrijke vloeistof.'],
  ['CYP-remmer = spiegel remt omhoog', 'Remt afbraak, dus spiegel van substraat stijgt.'],
  ['CYP-inductor = industrie versnelt', 'Meer enzymactiviteit, dus spiegel van substraat daalt.'],
  ['MASLD-MetALD-ALD', 'Metabool laag alcohol, metabool plus alcohol, alcohol centraal.'],
  ['AMI = Afwijkend weinig buik bij Mega pijn', 'Mesenteriale ischemie: pijn out of proportion.'],
  ['CRC rectum = MRI', 'Rectumcarcinoom vraagt MRI voor MRF en EMVI.'],
  ['SGLT2 = Sugar Goes Left Through urine', 'Glucoseverlies via urine.'],
]
