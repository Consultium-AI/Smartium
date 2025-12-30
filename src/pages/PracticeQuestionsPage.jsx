import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { 
  ClipboardCheck, Home, ChevronLeft, ChevronRight, 
  RotateCcw, Trophy, Target, BookOpen,
  CheckCircle, XCircle, ArrowLeft
} from 'lucide-react'

// Embryogenese questions (19)
const embryogeneseQuestions = [
  {
    id: 1,
    question: "Wanneer begint de differentiatie van ectoderm naar zenuwweefsel met vorming van de neurale plaat?",
    options: [
      { letter: "A", text: "Dag 8 na conceptie" },
      { letter: "B", text: "Dag 16 na conceptie" },
      { letter: "C", text: "Dag 28 na conceptie" },
      { letter: "D", text: "Week 6 na conceptie" },
    ],
    correctAnswer: "B",
    category: "Embryogenese",
  },
  {
    id: 2,
    question: "Welke structuur geeft signalen die de neurale plaat induceren?",
    options: [
      { letter: "A", text: "Somieten" },
      { letter: "B", text: "Notochord" },
      { letter: "C", text: "Allantois" },
      { letter: "D", text: "Trofoblast" },
    ],
    correctAnswer: "B",
    category: "Embryogenese",
  },
  {
    id: 3,
    question: "Wat ontstaat uit de neurale plaat na vouwen en fusie?",
    options: [
      { letter: "A", text: "Somiet" },
      { letter: "B", text: "Neurale buis" },
      { letter: "C", text: "Primitieve darm" },
      { letter: "D", text: "Intra-embryonaal coeloom" },
    ],
    correctAnswer: "B",
    category: "Embryogenese",
  },
  {
    id: 4,
    question: "Op welke dag na bevruchting begint de sluiting van de neurale buis volgens de stof?",
    options: [
      { letter: "A", text: "18 dagen" },
      { letter: "B", text: "20 dagen" },
      { letter: "C", text: "22 dagen" },
      { letter: "D", text: "28 dagen" },
    ],
    correctAnswer: "C",
    category: "Embryogenese",
  },
  {
    id: 5,
    question: "Welke uitspraak over de neuropori is juist?",
    options: [
      { letter: "A", text: "De neuropori liggen lateraal van de neurale groeve" },
      { letter: "B", text: "De neuropori zijn tijdelijke openingen aan craniale en caudale zijde" },
      { letter: "C", text: "De neuropori vormen later de buikwand" },
      { letter: "D", text: "De neuropori zijn uitgroeisels van de dooierzak" },
    ],
    correctAnswer: "B",
    category: "Embryogenese",
  },
  {
    id: 6,
    question: "Falen van sluiting van het craniale deel van de neurale buis kan leiden tot:",
    options: [
      { letter: "A", text: "Spina bifida" },
      { letter: "B", text: "Anencefalie" },
      { letter: "C", text: "Gastroschisis" },
      { letter: "D", text: "Mesonephros agenese" },
    ],
    correctAnswer: "B",
    category: "Embryogenese",
  },
  {
    id: 7,
    question: "Craniorachischisis betekent meestal:",
    options: [
      { letter: "A", text: "Alleen caudale sluitingsfout van de neurale buis" },
      { letter: "B", text: "Alleen craniale sluitingsfout van de neurale buis" },
      { letter: "C", text: "Groot deel van de neurale buis sluit niet" },
      { letter: "D", text: "Fout in innesteling (nidatie)" },
    ],
    correctAnswer: "C",
    category: "Embryogenese",
  },
  {
    id: 8,
    question: "De neurale lijst (neural crest) ontstaat op de overgang van:",
    options: [
      { letter: "A", text: "Endoderm en mesoderm" },
      { letter: "B", text: "Mesoderm en ectoderm" },
      { letter: "C", text: "Neurale plaat/buis en ectoderm" },
      { letter: "D", text: "Trofoblast en endometrium" },
    ],
    correctAnswer: "C",
    category: "Embryogenese",
  },
  {
    id: 9,
    question: "Uit de neurale lijst ontstaat in deze module vooral:",
    options: [
      { letter: "A", text: "Het centrale zenuwstelsel" },
      { letter: "B", text: "Het perifere zenuwstelsel" },
      { letter: "C", text: "De placenta" },
      { letter: "D", text: "Het endometrium" },
    ],
    correctAnswer: "B",
    category: "Embryogenese",
  },
  {
    id: 10,
    question: "Tijdens week 4 verandert het embryo van een schijf naar een cilinder vooral door:",
    options: [
      { letter: "A", text: "Alleen gastrulatie" },
      { letter: "B", text: "Alleen somietvorming" },
      { letter: "C", text: "Kromming in meerdere richtingen (folding)" },
      { letter: "D", text: "Placenta groei" },
    ],
    correctAnswer: "C",
    category: "Embryogenese",
  },
  {
    id: 11,
    question: "Door hoofdplooiing ontstaat ventraal van de buccofaryngeale membraan de ruimte die later de mondholte wordt, genaamd:",
    options: [
      { letter: "A", text: "Cloaca" },
      { letter: "B", text: "Stomodeum" },
      { letter: "C", text: "Mesonephros" },
      { letter: "D", text: "Allantois" },
    ],
    correctAnswer: "B",
    category: "Embryogenese",
  },
  {
    id: 12,
    question: "De cloacale membraan ligt in relatie tot:",
    options: [
      { letter: "A", text: "Einddarm en allantois" },
      { letter: "B", text: "Voordarm en longknoppen" },
      { letter: "C", text: "Notochord en neurale plaat" },
      { letter: "D", text: "Trofoblast en chorion" },
    ],
    correctAnswer: "A",
    category: "Embryogenese",
  },
  {
    id: 13,
    question: "De allantois ontstaat als uitstulping van de:",
    options: [
      { letter: "A", text: "Amnionholte" },
      { letter: "B", text: "Dooierzak richting hechtsteel" },
      { letter: "C", text: "Neurale buis richting ectoderm" },
      { letter: "D", text: "Trofoblast richting endometrium" },
    ],
    correctAnswer: "B",
    category: "Embryogenese",
  },
  {
    id: 14,
    question: "Wat is de juiste beschrijving van de primitieve darmvorming?",
    options: [
      { letter: "A", text: "Ectoderm vormt een buis en wordt primitieve darm" },
      { letter: "B", text: "Endoderm vormt een buis en wordt primitieve darm" },
      { letter: "C", text: "Mesoderm vormt een buis en wordt primitieve darm" },
      { letter: "D", text: "Trofoblast vormt een buis en wordt primitieve darm" },
    ],
    correctAnswer: "B",
    category: "Embryogenese",
  },
  {
    id: 15,
    question: "Welke structuur blijft tijdelijk via de dooierzaksteel verbonden met de dooierzak?",
    options: [
      { letter: "A", text: "Voordarm" },
      { letter: "B", text: "Middendarm" },
      { letter: "C", text: "Einddarm" },
      { letter: "D", text: "Trachea" },
    ],
    correctAnswer: "B",
    category: "Embryogenese",
  },
  {
    id: 16,
    question: "De trachea en longen groeien vanaf ongeveer dag 22 uit de:",
    options: [
      { letter: "A", text: "Primitieve einddarm dorsaal" },
      { letter: "B", text: "Primitieve voordarm ventraal" },
      { letter: "C", text: "Primitieve middendarm lateraal" },
      { letter: "D", text: "Extra-embryonale dooierzak" },
    ],
    correctAnswer: "B",
    category: "Embryogenese",
  },
  {
    id: 17,
    question: "Tussen lever en longaanleg ligt het septum transversum, waaruit later vooral ontstaat:",
    options: [
      { letter: "A", text: "Nier (mesonephros)" },
      { letter: "B", text: "Diafragma" },
      { letter: "C", text: "Ruggenmerg" },
      { letter: "D", text: "Placenta" },
    ],
    correctAnswer: "B",
    category: "Embryogenese",
  },
  {
    id: 18,
    question: "Transversale kromming (laterale folding) resulteert uiteindelijk in:",
    options: [
      { letter: "A", text: "Opening van neuropori" },
      { letter: "B", text: "Vorming van buikwand en ligging primitieve darm in buikholte" },
      { letter: "C", text: "Vorming van neurale lijst" },
      { letter: "D", text: "Splitsing van trofoblast en embryoblast" },
    ],
    correctAnswer: "B",
    category: "Embryogenese",
  },
  {
    id: 19,
    question: "Een gevolg van falen van ventrale sluiting bij kromming kan zijn:",
    options: [
      { letter: "A", text: "Neurale buisdefect (altijd)" },
      { letter: "B", text: "Buikwanddefect met naar buiten treden van darmen of blaas" },
      { letter: "C", text: "Situs inversus" },
      { letter: "D", text: "Alleen placenta problematiek" },
    ],
    correctAnswer: "B",
    category: "Embryogenese",
  },
]

// Foetale beeldvorming questions (18)
const beeldvormingQuestions = [
  {
    id: 1,
    question: "Wat meet Doppler echografie bij foetale beeldvorming?",
    options: [
      { letter: "A", text: "Botdichtheid van de foetus" },
      { letter: "B", text: "Snelheid en richting van de bloedstroom" },
      { letter: "C", text: "Hoeveel vruchtwater er aanwezig is" },
      { letter: "D", text: "De zuurstofsaturatie van de moeder" },
    ],
    correctAnswer: "B",
    category: "Beeldvorming",
  },
  {
    id: 2,
    question: "Waarvoor wordt Doppler echografie in dit kader vooral gebruikt?",
    options: [
      { letter: "A", text: "Het bepalen van de foetale lengtegroei" },
      { letter: "B", text: "Het meten van foetale hartfunctie en het detecteren van hartafwijkingen" },
      { letter: "C", text: "Het opsporen van nierstenen bij de moeder" },
      { letter: "D", text: "Het meten van de dikte van de placenta" },
    ],
    correctAnswer: "B",
    category: "Beeldvorming",
  },
  {
    id: 3,
    question: "Hoe groot is het hart ongeveer rond 13 weken zwangerschap volgens de lesstof?",
    options: [
      { letter: "A", text: "Zo groot als een amandel" },
      { letter: "B", text: "Zo groot als een walnoot" },
      { letter: "C", text: "Zo groot als een maiskorrel" },
      { letter: "D", text: "Zo groot als een druif" },
    ],
    correctAnswer: "C",
    category: "Beeldvorming",
  },
  {
    id: 4,
    question: "Hoe groot is het hart ongeveer rond 20 weken zwangerschap volgens de lesstof?",
    options: [
      { letter: "A", text: "Zo groot als een amandel" },
      { letter: "B", text: "Zo groot als een rijstkorrel" },
      { letter: "C", text: "Zo groot als een erwt" },
      { letter: "D", text: "Zo groot als een kers" },
    ],
    correctAnswer: "A",
    category: "Beeldvorming",
  },
  {
    id: 5,
    question: "Wat is het hoofddoel van de 13 wekenecho?",
    options: [
      { letter: "A", text: "Vaststellen van de foetale bloedgroep" },
      { letter: "B", text: "Screening op structurele afwijkingen" },
      { letter: "C", text: "Definitieve diagnose van chromosoomafwijkingen" },
      { letter: "D", text: "Bepalen van de exacte bevallingsdatum met zekerheid" },
    ],
    correctAnswer: "B",
    category: "Beeldvorming",
  },
  {
    id: 6,
    question: "Welke volgorde van bekijken wordt in de module als voorbeeld gebruikt bij de screening?",
    options: [
      { letter: "A", text: "Alleen transversaal, geen sagittaal" },
      { letter: "B", text: "Eerst sagittale sweep, daarna transversale sweep" },
      { letter: "C", text: "Eerst Doppler, daarna alleen 3D" },
      { letter: "D", text: "Alleen een stilstaand beeld van het hoofd" },
    ],
    correctAnswer: "B",
    category: "Beeldvorming",
  },
  {
    id: 7,
    question: "Wat is in een sagittale doorsnede vaak relatief goed te herkennen rond 13 weken?",
    options: [
      { letter: "A", text: "Alle hartkleppen afzonderlijk" },
      { letter: "B", text: "Contouren van het hoofd met neus en boven- en onderkaak" },
      { letter: "C", text: "De volledige longsegmenten" },
      { letter: "D", text: "De exacte vingerkootjes van beide handen" },
    ],
    correctAnswer: "B",
    category: "Beeldvorming",
  },
  {
    id: 8,
    question: "Wat zie je bij het begin van de transversale sweep vaak goed bij een doorsnede door het hoofd?",
    options: [
      { letter: "A", text: "Alleen de maag en blaas" },
      { letter: "B", text: "Linker en rechter hersenhelft, met structuren in de hersenkamers" },
      { letter: "C", text: "Alleen de wervelkolom in lengte-as" },
      { letter: "D", text: "Uitsluitend de placenta" },
    ],
    correctAnswer: "B",
    category: "Beeldvorming",
  },
  {
    id: 9,
    question: "Wat zijn de twee relatief echogene structuren in de hersenkamers die vaak worden herkend als plexus choroideus?",
    options: [
      { letter: "A", text: "Spieren die de fontanel vormen" },
      { letter: "B", text: "Netwerk in de ventrikels dat betrokken is bij aanmaak van hersenvocht" },
      { letter: "C", text: "De eerste aanleg van de hersenstam" },
      { letter: "D", text: "De ooglenzen" },
    ],
    correctAnswer: "B",
    category: "Beeldvorming",
  },
  {
    id: 10,
    question: "Waarom zijn armen en benen met handen en voeten bij een 2D echo in dit stadium vaak lastig in een beeld te beoordelen?",
    options: [
      { letter: "A", text: "Omdat ledematen altijd achter de placenta liggen" },
      { letter: "B", text: "Omdat ze vaak in verschillende richtingen uitsteken en niet in een vlak vallen" },
      { letter: "C", text: "Omdat botten nog niet zichtbaar zijn op echografie" },
      { letter: "D", text: "Omdat de echo alleen het hoofd kan tonen" },
    ],
    correctAnswer: "B",
    category: "Beeldvorming",
  },
  {
    id: 11,
    question: "Welke buik- en bekkenstructuren zijn in principe relatief makkelijk te herkennen tijdens de transversale sweep?",
    options: [
      { letter: "A", text: "Maag en blaas" },
      { letter: "B", text: "Alvleesklier en milt" },
      { letter: "C", text: "Galblaas en appendix" },
      { letter: "D", text: "Longslagaders" },
    ],
    correctAnswer: "A",
    category: "Beeldvorming",
  },
  {
    id: 12,
    question: "Wat is typisch voor een omphalocele?",
    options: [
      { letter: "A", text: "Darmlissen vrij in het vruchtwater zonder bedekkende structuur" },
      { letter: "B", text: "Ingewanden buiten de buikholte in een uitstulping ter hoogte van de navelstreng" },
      { letter: "C", text: "Alleen een afwijkende stand van het been" },
      { letter: "D", text: "Een open schedeldak zonder hersenweefsel" },
    ],
    correctAnswer: "B",
    category: "Beeldvorming",
  },
  {
    id: 13,
    question: "Wat is typisch voor gastroschisis volgens het onderscheid in de module?",
    options: [
      { letter: "A", text: "Buikwand open, darmlissen kunnen in het vruchtwater liggen" },
      { letter: "B", text: "Ingewanden zitten altijd in de navelstreng met een zak eromheen" },
      { letter: "C", text: "Het is uitsluitend een hartafwijking" },
      { letter: "D", text: "Het is een afwijking van de plexus choroideus" },
    ],
    correctAnswer: "A",
    category: "Beeldvorming",
  },
  {
    id: 14,
    question: "Waarop kan een beeld passen waarbij de wervelbogen niet goed zijn ontwikkeld?",
    options: [
      { letter: "A", text: "Omphalocele" },
      { letter: "B", text: "Open rug (spina bifida)" },
      { letter: "C", text: "Alleen een normale variant" },
      { letter: "D", text: "Trisomie 21 als directe diagnose" },
    ],
    correctAnswer: "B",
    category: "Beeldvorming",
  },
  {
    id: 15,
    question: "Welke uitspraak over chromosoomafwijkingen en de 13 wekenecho klopt het best?",
    options: [
      { letter: "A", text: "De 13 wekenecho is de beste test om trisomie 21 definitief vast te stellen" },
      { letter: "B", text: "De 13 wekenecho is niet geschikt om chromosoomafwijkingen vast te stellen; daarvoor is NIPT bedoeld" },
      { letter: "C", text: "Chromosoomafwijkingen zijn alleen te zien op Doppler" },
      { letter: "D", text: "Chromosoomafwijkingen zijn altijd zichtbaar als een omphalocele" },
    ],
    correctAnswer: "B",
    category: "Beeldvorming",
  },
  {
    id: 16,
    question: "Wat is het doel van de IMITAS-studie zoals genoemd in de module?",
    options: [
      { letter: "A", text: "Onderzoeken of de voordelen van de 13 wekenecho opwegen tegen de nadelen" },
      { letter: "B", text: "Een nieuwe echo-techniek ontwikkelen die MRI vervangt" },
      { letter: "C", text: "Vaststellen dat de 20 wekenecho overbodig is" },
      { letter: "D", text: "Vergelijken van NIPT met bloeddrukmeting" },
    ],
    correctAnswer: "A",
    category: "Beeldvorming",
  },
  {
    id: 17,
    question: "Wat is volgens het materiaal een mogelijke nadeel van vroege screening rond 13 weken?",
    options: [
      { letter: "A", text: "Alle afwijkingen zijn altijd direct en zeker zichtbaar" },
      { letter: "B", text: "Bevindingen kunnen onduidelijk of tijdelijk zijn en onrust of extra onderzoeken veroorzaken" },
      { letter: "C", text: "Het maakt vervolgdiagnostiek onmogelijk" },
      { letter: "D", text: "Het verlaagt de beeldkwaliteit van de 20 wekenecho" },
    ],
    correctAnswer: "B",
    category: "Beeldvorming",
  },
  {
    id: 18,
    question: "Wat gebeurt er doorgaans als bij de 13 wekenecho een structurele afwijking wordt vermoed?",
    options: [
      { letter: "A", text: "Er gebeurt niets, want het is te vroeg" },
      { letter: "B", text: "Verwijzing voor prenatale diagnostiek en een geavanceerd echografisch onderzoek (GUO)" },
      { letter: "C", text: "Meteen behandelen met medicatie" },
      { letter: "D", text: "Alleen opnieuw kijken bij de bevalling" },
    ],
    correctAnswer: "B",
    category: "Beeldvorming",
  },
]

// Extra embryonale structuren questions (15)
const extraembryonaalQuestions = [
  {
    id: 1,
    question: "Wat is een belangrijke voorwaarde voordat de blastocyst kan innestelen in het endometrium?",
    options: [
      { letter: "A", text: "Vorming van de neurale buis" },
      { letter: "B", text: "Sluiting van de chorionholte" },
      { letter: "C", text: "Uitkomen uit de zona pellucida" },
      { letter: "D", text: "Productie van foetale urine" },
    ],
    correctAnswer: "C",
    category: "Innesteling",
  },
  {
    id: 2,
    question: "Welke trofoblastlaag is vooral verantwoordelijk voor invasie in het endometrium tijdens innesteling?",
    options: [
      { letter: "A", text: "Syncytiotrofoblast" },
      { letter: "B", text: "Cytotrofoblast" },
      { letter: "C", text: "Epiblast" },
      { letter: "D", text: "Hypoblast" },
    ],
    correctAnswer: "A",
    category: "Innesteling",
  },
  {
    id: 3,
    question: "Wat is een klassieke klinische consequentie van verstoord transport van het conceptus naar de uterus?",
    options: [
      { letter: "A", text: "Spina bifida" },
      { letter: "B", text: "Extra uteriene zwangerschap, vaak in de eileider" },
      { letter: "C", text: "Placenta previa" },
      { letter: "D", text: "Polyhydramnion" },
    ],
    correctAnswer: "B",
    category: "Innesteling",
  },
  {
    id: 4,
    question: "De dooierzak is bij de mens vooral belangrijk in het vroege stadium voor welke functie?",
    options: [
      { letter: "A", text: "Opslag van grote voedingsreserves zoals bij vogels" },
      { letter: "B", text: "Vroege bloedvorming en bijdrage aan vaatontwikkeling" },
      { letter: "C", text: "Aanmaak van vruchtwater in het derde trimester" },
      { letter: "D", text: "Vorming van de spiraalarterieen in de uteruswand" },
    ],
    correctAnswer: "B",
    category: "Dooierzak",
  },
  {
    id: 5,
    question: "Welke verbinding kan persisteren en leiden tot een Meckel divertikel?",
    options: [
      { letter: "A", text: "Rest van de chorionholte" },
      { letter: "B", text: "Rest van de zona pellucida" },
      { letter: "C", text: "Persistente verbinding tussen dooierzak en darm" },
      { letter: "D", text: "Rest van de amnionholte" },
    ],
    correctAnswer: "C",
    category: "Dooierzak",
  },
  {
    id: 6,
    question: "Wat gebeurt er doorgaans met de chorionholte naarmate de zwangerschap vordert?",
    options: [
      { letter: "A", text: "Wordt groter en blijft tot de partus bestaan" },
      { letter: "B", text: "Verdwijnt doordat amnion en chorion tegen elkaar aan komen te liggen" },
      { letter: "C", text: "Verandert in de intervillieuze ruimte" },
      { letter: "D", text: "Wordt de navelstreng" },
    ],
    correctAnswer: "B",
    category: "Vliezen",
  },
  {
    id: 7,
    question: "Wat is een kernfunctie van vruchtwater gedurende de zwangerschap?",
    options: [
      { letter: "A", text: "Directe menging van maternale en foetale erytrocyten mogelijk maken" },
      { letter: "B", text: "Mechanische bescherming en ruimte voor beweging en groei" },
      { letter: "C", text: "Vorming van de placenta villi stimuleren" },
      { letter: "D", text: "Zorgen dat de dooierzak permanent blijft bestaan" },
    ],
    correctAnswer: "B",
    category: "Amnion",
  },
  {
    id: 8,
    question: "Welke tweelingconfiguratie is het meest passend bij een latere splitsing met een placenta en twee amnionholtes?",
    options: [
      { letter: "A", text: "Dichoriaal diamniotisch" },
      { letter: "B", text: "Monochoriaal diamniotisch" },
      { letter: "C", text: "Monochoriaal monoamniotisch" },
      { letter: "D", text: "Dichoriaal monoamniotisch" },
    ],
    correctAnswer: "B",
    category: "Tweelingen",
  },
  {
    id: 9,
    question: "Waarom geeft een monochoriale monoamniotische zwangerschap extra risico?",
    options: [
      { letter: "A", text: "Omdat er altijd twee placenta's zijn" },
      { letter: "B", text: "Omdat er geen dooierzak wordt gevormd" },
      { letter: "C", text: "Door kans op verstrengeling van navelstrengen in een amnionholte" },
      { letter: "D", text: "Omdat er geen syncytiotrofoblast ontstaat" },
    ],
    correctAnswer: "C",
    category: "Tweelingen",
  },
  {
    id: 10,
    question: "Waar komt het maternale bloed in de placenta primair terecht voordat uitwisseling plaatsvindt?",
    options: [
      { letter: "A", text: "In de foetale capillairen in de villi" },
      { letter: "B", text: "In de amnionholte" },
      { letter: "C", text: "In de intervillieuze ruimte via spiraalarterieen" },
      { letter: "D", text: "In de dooierzak via vitelliene vaten" },
    ],
    correctAnswer: "C",
    category: "Placenta",
  },
  {
    id: 11,
    question: "Welke uitspraak over de placenta villi is het meest correct?",
    options: [
      { letter: "A", text: "Ze bevatten maternale bloedvaten die direct met foetaal bloed mengen" },
      { letter: "B", text: "Ze vergroten het uitwisselingsoppervlak en bevatten foetale vaten" },
      { letter: "C", text: "Ze zijn holtes gevuld met vruchtwater" },
      { letter: "D", text: "Ze vormen de spiraalarterieen in de uteruswand" },
    ],
    correctAnswer: "B",
    category: "Placenta",
  },
  {
    id: 12,
    question: "Wat is de belangrijkste laag die in het onderwijs vaak wordt genoemd als cruciaal onderdeel van de bloed-placenta barriere?",
    options: [
      { letter: "A", text: "Endometrium" },
      { letter: "B", text: "Myometrium" },
      { letter: "C", text: "Syncytiotrofoblast" },
      { letter: "D", text: "Perimetrium" },
    ],
    correctAnswer: "C",
    category: "Barriere",
  },
  {
    id: 13,
    question: "Wat gebeurt er met de diffusieafstand in de placenta gedurende de zwangerschap?",
    options: [
      { letter: "A", text: "Neemt toe doordat de barriere dikker wordt" },
      { letter: "B", text: "Neemt af doordat de barriere dunner wordt en capillairen dichter bij de buitenlaag liggen" },
      { letter: "C", text: "Blijft gelijk omdat de cytotrofoblast laag altijd aanwezig blijft" },
      { letter: "D", text: "Neemt af omdat de intervillieuze ruimte verdwijnt" },
    ],
    correctAnswer: "B",
    category: "Barriere",
  },
  {
    id: 14,
    question: "Welke stof passeert doorgaans relatief gemakkelijk de bloed-placenta barriere vanwege vetoplosbaarheid?",
    options: [
      { letter: "A", text: "Albumine" },
      { letter: "B", text: "Alcohol" },
      { letter: "C", text: "Grote bacterien" },
      { letter: "D", text: "Volledige erytrocyten" },
    ],
    correctAnswer: "B",
    category: "Barriere",
  },
  {
    id: 15,
    question: "Welke maternale antistofklasse is belangrijk voor passieve immuniteit van de foetus doordat deze kan passeren?",
    options: [
      { letter: "A", text: "IgA" },
      { letter: "B", text: "IgE" },
      { letter: "C", text: "IgG" },
      { letter: "D", text: "IgM" },
    ],
    correctAnswer: "C",
    category: "Barriere",
  },
]

// Extremiteiten questions (15)
const extremiteitenQuestions = [
  {
    id: 1,
    question: "Welke junctura is het meest beweeglijk?",
    options: [
      { letter: "A", text: "Junctura fibrosa" },
      { letter: "B", text: "Junctura cartilaginea" },
      { letter: "C", text: "Junctura ossea" },
      { letter: "D", text: "Junctura synovialis" },
    ],
    correctAnswer: "D",
    category: "Gewrichtsleer",
  },
  {
    id: 2,
    question: "Wat is de wetenschappelijke naam van gewrichtsvloeistof?",
    options: [
      { letter: "A", text: "Serum" },
      { letter: "B", text: "Synovia" },
      { letter: "C", text: "Liquor" },
      { letter: "D", text: "Chondrin" },
    ],
    correctAnswer: "B",
    category: "Gewrichtsleer",
  },
  {
    id: 3,
    question: "Uit welke twee lagen bestaat de capsula articularis?",
    options: [
      { letter: "A", text: "Membrana elastica + membrana ossea" },
      { letter: "B", text: "Membrana synovialis + membrana fibrosa" },
      { letter: "C", text: "Membrana mucosa + membrana serosa" },
      { letter: "D", text: "Perichondrium + periost" },
    ],
    correctAnswer: "B",
    category: "Gewrichtsleer",
  },
  {
    id: 4,
    question: "De verbinding tussen distale tibia en fibula (syndesmose) is een voorbeeld van:",
    options: [
      { letter: "A", text: "Junctura synovialis" },
      { letter: "B", text: "Junctura fibrosa" },
      { letter: "C", text: "Junctura cartilaginea" },
      { letter: "D", text: "Junctura ossea" },
    ],
    correctAnswer: "B",
    category: "Gewrichtsleer",
  },
  {
    id: 5,
    question: "De discus intervertebralis hoort bij:",
    options: [
      { letter: "A", text: "Junctura cartilaginea" },
      { letter: "B", text: "Junctura synovialis" },
      { letter: "C", text: "Junctura ossea" },
      { letter: "D", text: "Junctura fibrosa" },
    ],
    correctAnswer: "A",
    category: "Gewrichtsleer",
  },
  {
    id: 6,
    question: "Het acetabulum ontstaat uiteindelijk door benige fusie van ilium, pubis en ischium. Dit is:",
    options: [
      { letter: "A", text: "Junctura synovialis" },
      { letter: "B", text: "Junctura fibrosa" },
      { letter: "C", text: "Junctura ossea" },
      { letter: "D", text: "Junctura cartilaginea" },
    ],
    correctAnswer: "C",
    category: "Gewrichtsleer",
  },
  {
    id: 7,
    question: "Welk type gewricht is het heupgewricht?",
    options: [
      { letter: "A", text: "Zadelgewricht" },
      { letter: "B", text: "Rolgewricht" },
      { letter: "C", text: "Scharniergewricht" },
      { letter: "D", text: "Kogelgewricht" },
    ],
    correctAnswer: "D",
    category: "Gewrichtsleer",
  },
  {
    id: 8,
    question: "De articulatio humero-ulnaris (elleboog) is vooral een:",
    options: [
      { letter: "A", text: "Kogelgewricht" },
      { letter: "B", text: "Scharniergewricht" },
      { letter: "C", text: "Zadelgewricht" },
      { letter: "D", text: "Vlak gewricht" },
    ],
    correctAnswer: "B",
    category: "Gewrichtsleer",
  },
  {
    id: 9,
    question: "Flexie en extensie gebeuren primair in welk vlak?",
    options: [
      { letter: "A", text: "Frontaal (coronaal)" },
      { letter: "B", text: "Transversaal" },
      { letter: "C", text: "Sagittaal" },
      { letter: "D", text: "Oblique vlak" },
    ],
    correctAnswer: "C",
    category: "Anatomie",
  },
  {
    id: 10,
    question: "Welke drie anatomische vlakken zijn correct?",
    options: [
      { letter: "A", text: "Sagittaal, coronair, axiaal" },
      { letter: "B", text: "Sagittaal, frontaal/coronaal, transversaal" },
      { letter: "C", text: "Frontaal, longitudinaal, transversaal" },
      { letter: "D", text: "Coronaal, diagonaal, sagittaal" },
    ],
    correctAnswer: "B",
    category: "Anatomie",
  },
  {
    id: 11,
    question: "Welke uitspraak over dermatomes is juist?",
    options: [
      { letter: "A", text: "Een dermatoom hoort bij één perifere zenuw (zoals n. medianus)" },
      { letter: "B", text: "Een dermatoom hoort bij één spinaal segment" },
      { letter: "C", text: "Een dermatoom ontstaat pas na geboorte" },
      { letter: "D", text: "Dermatomes en perifere huidgebieden zijn altijd identiek" },
    ],
    correctAnswer: "B",
    category: "Neuroanatomie",
  },
  {
    id: 12,
    question: "Waarom vallen huidgebieden van perifere zenuwen vaak niet samen met dermatomes?",
    options: [
      { letter: "A", text: "Omdat perifere zenuwen alleen motorische vezels bevatten" },
      { letter: "B", text: "Omdat perifere zenuwen vezels uit meerdere spinale segmenten bevatten (plexus)" },
      { letter: "C", text: "Omdat dermatomes alleen in de romp bestaan" },
      { letter: "D", text: "Omdat synovia de innervatie beïnvloedt" },
    ],
    correctAnswer: "B",
    category: "Neuroanatomie",
  },
  {
    id: 13,
    question: "Wat is de belangrijkste rol van de AER in de ledemaatontwikkeling?",
    options: [
      { letter: "A", text: "Het start directe botvorming (desmale ossificatie)" },
      { letter: "B", text: "Het houdt distaal mesenchym prolifererend en ongedifferentieerd" },
      { letter: "C", text: "Het vormt de synovia" },
      { letter: "D", text: "Het bepaalt dermatomes" },
    ],
    correctAnswer: "B",
    category: "Embryologie",
  },
  {
    id: 14,
    question: "Waardoor scheiden vingers/tenen zich uit de hand-/voetplaat?",
    options: [
      { letter: "A", text: "Verbening van het kraakbeen tussen de vingers" },
      { letter: "B", text: "Apoptose tussen de digitale stralen" },
      { letter: "C", text: "Verdikking van het periost" },
      { letter: "D", text: "Toename van synovia" },
    ],
    correctAnswer: "B",
    category: "Embryologie",
  },
  {
    id: 15,
    question: "Welke volgorde past bij proximodistale segmenten van de ledemaat?",
    options: [
      { letter: "A", text: "Autopod → zeugopod → stylopod" },
      { letter: "B", text: "Zeugopod → autopod → stylopod" },
      { letter: "C", text: "Stylopod → zeugopod → autopod" },
      { letter: "D", text: "Stylopod → autopod → zeugopod" },
    ],
    correctAnswer: "C",
    category: "Embryologie",
  },
]

const PracticeQuestionsPage = () => {
  const [searchParams] = useSearchParams()
  const lmeParam = searchParams.get('lme')
  
  // Determine which questions to show
  const getQuestions = () => {
    if (lmeParam === 'embryogenese') return embryogeneseQuestions
    if (lmeParam === 'beeldvorming') return beeldvormingQuestions
    if (lmeParam === 'extraembryonaal') return extraembryonaalQuestions
    if (lmeParam === 'extremiteiten') return extremiteitenQuestions
    // Default: show all questions combined
    const allQuestions = [
      ...embryogeneseQuestions.map((q, i) => ({ ...q, id: i + 1 })),
      ...beeldvormingQuestions.map((q, i) => ({ ...q, id: embryogeneseQuestions.length + i + 1 })),
      ...extraembryonaalQuestions.map((q, i) => ({ ...q, id: embryogeneseQuestions.length + beeldvormingQuestions.length + i + 1 })),
      ...extremiteitenQuestions.map((q, i) => ({ ...q, id: embryogeneseQuestions.length + beeldvormingQuestions.length + extraembryonaalQuestions.length + i + 1 }))
    ]
    return allQuestions
  }

  const getTitle = () => {
    if (lmeParam === 'embryogenese') return 'Embryogenese Bouwplan'
    if (lmeParam === 'beeldvorming') return 'Foetale Beeldvorming'
    if (lmeParam === 'extraembryonaal') return 'Extra Embryonale Structuren'
    if (lmeParam === 'extremiteiten') return 'Extremiteiten & Gewrichtsleer'
    return 'Alle Oefenvragen'
  }

  const getSubtitle = () => {
    if (lmeParam === 'embryogenese') return 'Test je kennis met 19 meerkeuzevragen over embryogenese.'
    if (lmeParam === 'beeldvorming') return 'Test je kennis met 18 meerkeuzevragen over foetale beeldvorming.'
    if (lmeParam === 'extraembryonaal') return 'Test je kennis met 15 meerkeuzevragen over extra embryonale structuren.'
    if (lmeParam === 'extremiteiten') return 'Test je kennis met 15 meerkeuzevragen over gewrichtsleer en embryologie.'
    return 'Test je kennis met 67 meerkeuzevragen over alle LMEs.'
  }

  const questions = getQuestions()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswers, setSelectedAnswers] = useState({})
  const [revealedAnswers, setRevealedAnswers] = useState({})

  const currentQ = questions[currentQuestion]
  const totalQuestions = questions.length
  const answeredCount = Object.keys(selectedAnswers).length
  const correctCount = Object.entries(selectedAnswers).filter(
    ([id, answer]) => questions.find(q => q.id === parseInt(id))?.correctAnswer === answer
  ).length

  const handleSelectAnswer = (questionId, letter) => {
    if (revealedAnswers[questionId]) return
    setSelectedAnswers(prev => ({ ...prev, [questionId]: letter }))
    // Immediately reveal the answer after selection
    setRevealedAnswers(prev => ({ ...prev, [questionId]: true }))
  }

  const handleNext = () => {
    if (currentQuestion < totalQuestions - 1) {
      setCurrentQuestion(prev => prev + 1)
    }
  }

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1)
    }
  }

  const handleReset = () => {
    setSelectedAnswers({})
    setRevealedAnswers({})
    setCurrentQuestion(0)
  }

  const getOptionStyle = (questionId, letter) => {
    const isSelected = selectedAnswers[questionId] === letter
    const isRevealed = revealedAnswers[questionId]
    const isCorrect = questions.find(q => q.id === questionId)?.correctAnswer === letter
    
    if (isRevealed) {
      if (isCorrect) {
        return "border-emerald-400 bg-emerald-50 text-emerald-800"
      }
      if (isSelected && !isCorrect) {
        return "border-red-400 bg-red-50 text-red-800"
      }
      return "border-navy-200 bg-navy-50 text-navy-400"
    }
    
    if (isSelected) {
      return "border-primary-400 bg-primary-50 text-primary-800"
    }
    
    return "border-navy-200 bg-white text-navy-700 hover:border-primary-300 hover:bg-primary-50/50"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-white to-primary-50">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-navy-100">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <Link to="/" className="flex items-center gap-3">
              <img
                src={`${import.meta.env.BASE_URL}smartium-logo.png`}
                alt="Smartium"
                className="w-10 h-10 object-contain"
              />
              <span className="text-xl font-bold gradient-text">Smartium</span>
            </Link>
            
            <div className="flex items-center gap-2 px-4 py-2 bg-accent-100 text-accent-700 rounded-full">
              <ClipboardCheck className="w-4 h-4" />
              <span className="font-medium text-sm">Oefenvragen</span>
            </div>

            <Link
              to="/"
              className="flex items-center gap-2 text-navy-600 hover:text-primary-600 transition-colors"
            >
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline font-medium">Terug naar Home</span>
            </Link>
          </div>
        </div>
      </header>

      <main className="container-custom py-8 md:py-12">
        {/* Back to Summary */}
        {lmeParam && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-6 max-w-3xl mx-auto"
          >
            <Link
              to={`/summary?lme=${lmeParam}`}
              className="inline-flex items-center gap-2 text-navy-600 hover:text-primary-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">Terug naar samenvatting</span>
            </Link>
          </motion.div>
        )}

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl md:text-4xl font-bold text-navy-900 mb-2">
            {getTitle()} <span className="text-accent-500">Oefenvragen</span>
          </h1>
          <p className="text-navy-500">
            {getSubtitle()}
          </p>
          
          {/* LME Filter Buttons */}
          {!lmeParam && (
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              <Link
                to="/oefenvragen?lme=embryogenese"
                className="px-4 py-2 bg-primary-100 text-primary-700 rounded-lg text-sm font-medium hover:bg-primary-200 transition-colors"
              >
                Embryogenese (19)
              </Link>
              <Link
                to="/oefenvragen?lme=beeldvorming"
                className="px-4 py-2 bg-teal-100 text-teal-700 rounded-lg text-sm font-medium hover:bg-teal-200 transition-colors"
              >
                Beeldvorming (18)
              </Link>
              <Link
                to="/oefenvragen?lme=extraembryonaal"
                className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg text-sm font-medium hover:bg-purple-200 transition-colors"
              >
                Extra Embryonaal (15)
              </Link>
              <Link
                to="/oefenvragen?lme=extremiteiten"
                className="px-4 py-2 bg-accent-100 text-accent-700 rounded-lg text-sm font-medium hover:bg-accent-200 transition-colors"
              >
                Extremiteiten (15)
              </Link>
            </div>
          )}
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto mb-8"
        >
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 text-sm">
                <Target className="w-4 h-4 text-primary-500" />
                <span className="text-navy-600">{answeredCount}/{totalQuestions} beantwoord</span>
              </div>
              {answeredCount > 0 && (
                <div className="flex items-center gap-2 text-sm">
                  <Trophy className="w-4 h-4 text-accent-500" />
                  <span className="text-navy-600">{correctCount} correct</span>
                </div>
              )}
            </div>
            <button
              onClick={handleReset}
              className="flex items-center gap-2 px-3 py-1.5 text-sm text-navy-500 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
            >
              <RotateCcw className="w-4 h-4" />
              Reset
            </button>
          </div>
          <div className="h-2 bg-navy-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-primary-400 to-accent-400"
              initial={{ width: 0 }}
              animate={{ width: `${(answeredCount / totalQuestions) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </motion.div>

        {/* Question Navigation Dots */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="flex flex-wrap justify-center gap-2 mb-8 max-w-3xl mx-auto"
        >
          {questions.map((q, index) => {
            const isAnswered = selectedAnswers[q.id] !== undefined
            const isRevealed = revealedAnswers[q.id]
            const isCorrect = selectedAnswers[q.id] === q.correctAnswer
            const isCurrent = currentQuestion === index
            
            return (
              <button
                key={q.id}
                onClick={() => setCurrentQuestion(index)}
                className={`w-9 h-9 rounded-lg font-medium text-sm transition-all ${
                  isCurrent
                    ? "bg-primary-500 text-white shadow-md scale-110"
                    : isRevealed
                      ? isCorrect
                        ? "bg-emerald-100 text-emerald-700 border-2 border-emerald-300"
                        : "bg-red-100 text-red-700 border-2 border-red-300"
                      : isAnswered
                        ? "bg-primary-100 text-primary-700 border-2 border-primary-300"
                        : "bg-navy-100 text-navy-500 hover:bg-navy-200"
                }`}
              >
                {index + 1}
              </button>
            )
          })}
        </motion.div>

        {/* Question Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
            className="max-w-3xl mx-auto"
          >
            <div className="bg-white rounded-3xl shadow-soft-lg border border-navy-100 overflow-hidden">
              {/* Question Header */}
              <div className="px-6 py-4 bg-gradient-to-r from-navy-50 to-primary-50 border-b border-navy-100">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-xs font-medium">
                    {currentQ.category}
                  </span>
                  <span className="text-navy-500 text-sm font-medium">
                    Vraag {currentQuestion + 1} van {totalQuestions}
                  </span>
                </div>
              </div>

              {/* Question */}
              <div className="p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-navy-900 mb-6">
                  {currentQ.question}
                </h2>

                {/* Options */}
                <div className="space-y-3">
                  {currentQ.options.map((option) => (
                    <motion.button
                      key={option.letter}
                      onClick={() => handleSelectAnswer(currentQ.id, option.letter)}
                      disabled={revealedAnswers[currentQ.id]}
                      whileHover={!revealedAnswers[currentQ.id] ? { scale: 1.01 } : {}}
                      whileTap={!revealedAnswers[currentQ.id] ? { scale: 0.99 } : {}}
                      className={`w-full p-4 rounded-xl border-2 text-left transition-all flex items-start gap-4 ${getOptionStyle(currentQ.id, option.letter)}`}
                    >
                      <span className={`w-8 h-8 rounded-lg flex items-center justify-center font-bold text-sm shrink-0 ${
                        revealedAnswers[currentQ.id] && currentQ.correctAnswer === option.letter
                          ? "bg-emerald-500 text-white"
                          : revealedAnswers[currentQ.id] && selectedAnswers[currentQ.id] === option.letter && selectedAnswers[currentQ.id] !== currentQ.correctAnswer
                            ? "bg-red-500 text-white"
                            : selectedAnswers[currentQ.id] === option.letter
                              ? "bg-primary-500 text-white"
                              : "bg-navy-100 text-navy-600"
                      }`}>
                        {option.letter}
                      </span>
                      <span className="flex-1 font-medium">{option.text}</span>
                      {revealedAnswers[currentQ.id] && currentQ.correctAnswer === option.letter && (
                        <CheckCircle className="w-6 h-6 text-emerald-500 shrink-0" />
                      )}
                      {revealedAnswers[currentQ.id] && selectedAnswers[currentQ.id] === option.letter && selectedAnswers[currentQ.id] !== currentQ.correctAnswer && (
                        <XCircle className="w-6 h-6 text-red-500 shrink-0" />
                      )}
                    </motion.button>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-navy-100">
                  <button
                    onClick={handlePrev}
                    disabled={currentQuestion === 0}
                    className="flex items-center gap-2 px-4 py-2 text-navy-600 hover:text-primary-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    <ChevronLeft className="w-5 h-5" />
                    Vorige
                  </button>

                  {revealedAnswers[currentQ.id] && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className={`px-4 py-2 rounded-xl font-medium flex items-center gap-2 ${
                        selectedAnswers[currentQ.id] === currentQ.correctAnswer
                          ? "bg-emerald-100 text-emerald-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {selectedAnswers[currentQ.id] === currentQ.correctAnswer ? (
                        <>
                          <CheckCircle className="w-5 h-5" />
                          Correct!
                        </>
                      ) : (
                        <>
                          <XCircle className="w-5 h-5" />
                          Antwoord was {currentQ.correctAnswer}
                        </>
                      )}
                    </motion.div>
                  )}

                  <button
                    onClick={handleNext}
                    disabled={currentQuestion === totalQuestions - 1}
                    className="flex items-center gap-2 px-4 py-2 text-navy-600 hover:text-primary-600 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    Volgende
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Results Section */}
        {answeredCount === totalQuestions && Object.keys(revealedAnswers).length === totalQuestions && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto mt-8"
          >
            <div className="bg-gradient-to-r from-primary-500 to-accent-500 rounded-3xl p-8 text-center text-white">
              <Trophy className="w-16 h-16 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Quiz Voltooid!</h3>
              <p className="text-white/80 mb-4">
                Je hebt {correctCount} van de {totalQuestions} vragen correct beantwoord.
              </p>
              <div className="text-5xl font-bold mb-6">
                {Math.round((correctCount / totalQuestions) * 100)}%
              </div>
              <div className="flex justify-center gap-4">
                <button
                  onClick={handleReset}
                  className="px-6 py-3 bg-white text-primary-600 rounded-xl font-bold hover:bg-primary-50 transition-colors flex items-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" />
                  Opnieuw proberen
                </button>
                <Link
                  to="/summary"
                  className="px-6 py-3 bg-white/20 text-white rounded-xl font-semibold hover:bg-white/30 transition-colors flex items-center gap-2"
                >
                  <BookOpen className="w-5 h-5" />
                  Naar Samenvattingen
                </Link>
              </div>
            </div>
          </motion.div>
        )}

        {/* Link to Summary */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-center mt-8"
        >
          <Link
            to="/summary"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium"
          >
            <BookOpen className="w-4 h-4" />
            Bekijk de samenvattingen
          </Link>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center text-navy-400 text-sm border-t border-navy-100 mt-12">
        <p>© {new Date().getFullYear()} Smartium. Slim studeren, beter onthouden.</p>
      </footer>
    </div>
  )
}

export default PracticeQuestionsPage
