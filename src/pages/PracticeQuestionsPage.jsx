import { motion, AnimatePresence } from 'framer-motion'
import { useState, useMemo } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { 
  ClipboardCheck, ChevronLeft, ChevronRight, ChevronDown,
  RotateCcw, Trophy, Target, BookOpen, Shuffle,
  CheckCircle, XCircle, ArrowLeft,
  Calendar, Stethoscope, GraduationCap, Shield
} from 'lucide-react'
import Navbar from '../components/Navbar'
import { lme5QuestionsMap } from '../questions/lme5-schimmelinfecties'
import { lme6QuestionsMap } from '../questions/lme6-voorbereiding-vow-milt'
import { lme1QuestionsMap } from '../questions/lme1-parasitaire-verwekkers-gastro-enteritis'
import { lme2QuestionsMap } from '../questions/lme2-virale-verwekkers-gastro-enteritis'
import { lme3QuestionsMap } from '../questions/lme3-welk-antibioticum-kies-ik'
import { casus10Lme1QuestionsMap } from '../questions/casus10-lme1-dwang-en-drang-historisch-perspectief'
import { casus10Lme2QuestionsMap } from '../questions/casus10-lme2-immunomodulatie'
import { casus10Lme3QuestionsMap } from '../questions/casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas'
import { casus10Lme4QuestionsMap } from '../questions/casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie'
import { casus11Lme1QuestionsMap } from '../questions/casus11-lme1-leefstijl-en-immuunsysteem'
import { casus12Lme1QuestionsMap } from '../questions/casus12-lme1-antibioticaresistentie-en-therapie'
import { casus12Lme2QuestionsMap } from '../questions/casus12-lme2-sepsis'
import { casus12Lme3QuestionsMap } from '../questions/casus12-lme3-patient-en-medicatieveiligheid'
import { casus12Lme4QuestionsMap } from '../questions/casus12-lme4-zorggerelateerde-infecties'
import { casus13Lme1QuestionsMap } from '../questions/casus13-lme1-antibiotica-introductie'
import { casus13Lme2QuestionsMap } from '../questions/casus13-lme2-antibiotica-resistentie'

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

// Aangeboren immuniteit - herkenning questions (18)
const aangeborenImmuniteitHerkenningQuestions = [
  {
    id: 1,
    question: "Welke cellen zijn de belangrijkste first responders van de aangeboren immuniteit in weefsels?",
    options: [
      { letter: "A", text: "B-lymfocyten en T-lymfocyten" },
      { letter: "B", text: "Macrofagen en dendritische cellen" },
      { letter: "C", text: "Erytrocyten en trombocyten" },
      { letter: "D", text: "Neutrofielen en eosinofielen" },
    ],
    correctAnswer: "B",
    category: "Introductie",
  },
  {
    id: 2,
    question: "Waar ontstaan monocyten bij kinderen en volwassenen?",
    options: [
      { letter: "A", text: "In de lever" },
      { letter: "B", text: "In het beenmerg" },
      { letter: "C", text: "In de milt" },
      { letter: "D", text: "In de lymfeklieren" },
    ],
    correctAnswer: "B",
    category: "Mononucleaire fagocyten",
  },
  {
    id: 3,
    question: "Welke weefsel-specifieke macrofaag bevindt zich in het centrale zenuwstelsel?",
    options: [
      { letter: "A", text: "Kupffer cel" },
      { letter: "B", text: "Alveolaire macrofaag" },
      { letter: "C", text: "Microglia" },
      { letter: "D", text: "Langerhans cel" },
    ],
    correctAnswer: "C",
    category: "Mononucleaire fagocyten",
  },
  {
    id: 4,
    question: "Wat betekent de afkorting PAMP?",
    options: [
      { letter: "A", text: "Pattern-Associated Microbial Protein" },
      { letter: "B", text: "Pathogen-Associated Molecular Pattern" },
      { letter: "C", text: "Phagocyte Activation Membrane Protein" },
      { letter: "D", text: "Primary Adaptive Immune Molecule" },
    ],
    correctAnswer: "B",
    category: "PAMPs",
  },
  {
    id: 5,
    question: "Op welke van de volgende locaties komen PAMPs voor?",
    options: [
      { letter: "A", text: "Alleen op pathogene micro-organismen" },
      { letter: "B", text: "Op pathogene en niet-pathogene micro-organismen" },
      { letter: "C", text: "Op het oppervlak van dendritische cellen" },
      { letter: "D", text: "Op gezonde epitheelcellen" },
    ],
    correctAnswer: "B",
    category: "PAMPs",
  },
  {
    id: 6,
    question: "Welke PAMP is kenmerkend voor Gram-negatieve bacteriën en wordt ook endotoxine genoemd?",
    options: [
      { letter: "A", text: "Peptidoglycaan (PGN)" },
      { letter: "B", text: "Lipoteïchoïnezuur (LTA)" },
      { letter: "C", text: "Lipopolysaccharide (LPS)" },
      { letter: "D", text: "Flagelline" },
    ],
    correctAnswer: "C",
    category: "PAMPs",
  },
  {
    id: 7,
    question: "Waarom worden opsoninereceptoren niet gerekend tot de patroonherkenningsreceptoren?",
    options: [
      { letter: "A", text: "Omdat ze vooral belangrijk zijn voor fagocytose" },
      { letter: "B", text: "Omdat ze zelf geen micro-organismen herkennen maar antistoffen en complement" },
      { letter: "C", text: "Omdat ze ook op cellen van het verworven immuunsysteem voorkomen" },
      { letter: "D", text: "Omdat ze alleen in het cytosol zitten" },
    ],
    correctAnswer: "B",
    category: "PRRs",
  },
  {
    id: 8,
    question: "Welke bewering over endocytose en fagocytose is waar?",
    options: [
      { letter: "A", text: "Alleen fagocytose kan tot signaaltransductie leiden" },
      { letter: "B", text: "Zowel endocytose als fagocytose kunnen geïnitieerd worden door binding aan receptoren" },
      { letter: "C", text: "Fagocytose is geen vorm van endocytose" },
      { letter: "D", text: "Endocytose neemt alleen vloeistof op" },
    ],
    correctAnswer: "B",
    category: "PRRs",
  },
  {
    id: 9,
    question: "Welke receptor herkent LPS op het plasmamembraan?",
    options: [
      { letter: "A", text: "TLR3" },
      { letter: "B", text: "TLR4" },
      { letter: "C", text: "TLR5" },
      { letter: "D", text: "NLR" },
    ],
    correctAnswer: "B",
    category: "PRRs",
  },
  {
    id: 10,
    question: "Wat is de eerste stap in de signaaltransductieroute na binding van een PAMP aan een PRR?",
    options: [
      { letter: "A", text: "Transcriptie van genen" },
      { letter: "B", text: "Binding van PAMP aan PRR (vaak dimerisatie)" },
      { letter: "C", text: "Activatie van transcriptiefactoren" },
      { letter: "D", text: "Fosforylering van MAPK" },
    ],
    correctAnswer: "B",
    category: "Activatie",
  },
  {
    id: 11,
    question: "Welke transcriptiefactor zorgt voor genexpressie van type I interferonen na TLR3-activatie?",
    options: [
      { letter: "A", text: "NF-κB" },
      { letter: "B", text: "AP-1" },
      { letter: "C", text: "IRF (Interferon Regulatory Factor)" },
      { letter: "D", text: "MyD88" },
    ],
    correctAnswer: "C",
    category: "Activatie",
  },
  {
    id: 12,
    question: "Welk multi-eiwitcomplex wordt gevormd door bepaalde NLR-receptoren en leidt tot activatie van caspase-1?",
    options: [
      { letter: "A", text: "Proteasoom" },
      { letter: "B", text: "Inflammasoom" },
      { letter: "C", text: "Ribosoom" },
      { letter: "D", text: "Lysosoom" },
    ],
    correctAnswer: "B",
    category: "Activatie",
  },
  {
    id: 13,
    question: "Welke cytokine wordt geproduceerd na activatie van het NLRP3-inflammasoom en speelt een rol bij jicht?",
    options: [
      { letter: "A", text: "IL-2" },
      { letter: "B", text: "IL-1β" },
      { letter: "C", text: "IFN-γ" },
      { letter: "D", text: "TNF-α" },
    ],
    correctAnswer: "B",
    category: "Activatie",
  },
  {
    id: 14,
    question: "Welke genetische mutatie was de oorzaak van de schimmelmeningitis in de casus?",
    options: [
      { letter: "A", text: "TLR4-mutatie" },
      { letter: "B", text: "CARD9-mutatie" },
      { letter: "C", text: "MyD88-mutatie" },
      { letter: "D", text: "NF-κB-mutatie" },
    ],
    correctAnswer: "B",
    category: "Casus",
  },
  {
    id: 15,
    question: "Welke PAMPs van Candida worden herkend door C-type lectine receptoren?",
    options: [
      { letter: "A", text: "LPS en peptidoglycaan" },
      { letter: "B", text: "Mannan en β-glucanen" },
      { letter: "C", text: "Flagelline en lipoproteïnen" },
      { letter: "D", text: "DNA en RNA" },
    ],
    correctAnswer: "B",
    category: "Casus",
  },
  {
    id: 16,
    question: "Waaraan binden superantigenen om T-cellen niet-specifiek te activeren?",
    options: [
      { letter: "A", text: "Alleen aan de T-celreceptor" },
      { letter: "B", text: "Aan MHC Klasse II en de Vβ-regio van de T-celreceptor" },
      { letter: "C", text: "Alleen aan MHC Klasse I" },
      { letter: "D", text: "Aan de peptidebindingsplaats van MHC" },
    ],
    correctAnswer: "B",
    category: "Superantigenen",
  },
  {
    id: 17,
    question: "Welke bacterie produceert Protein A dat tot polyclonale B-celactivatie leidt?",
    options: [
      { letter: "A", text: "Streptococcus pyogenes" },
      { letter: "B", text: "Staphylococcus aureus" },
      { letter: "C", text: "Escherichia coli" },
      { letter: "D", text: "Neisseria meningitidis" },
    ],
    correctAnswer: "B",
    category: "Superantigenen",
  },
  {
    id: 18,
    question: "Welk effect hebben superantigenen, vergelijkbaar met endotoxines (LPS)?",
    options: [
      { letter: "A", text: "Alleen lokale ontsteking" },
      { letter: "B", text: "Koorts, intravasale stolling en shock" },
      { letter: "C", text: "Alleen B-celactivatie" },
      { letter: "D", text: "Geen systemisch effect" },
    ],
    correctAnswer: "B",
    category: "Superantigenen",
  },
]

// Introductie bacteriologie questions (18)
const introductieBacteriologieQuestions = [
  {
    id: 1,
    question: "Welke bacterie is een voorbeeld van een strikt aerobe bacterie?",
    options: [
      { letter: "A", text: "Clostridium difficile" },
      { letter: "B", text: "Pseudomonas aeruginosa" },
      { letter: "C", text: "Escherichia coli" },
      { letter: "D", text: "Bacteroides fragilis" },
    ],
    correctAnswer: "B",
    category: "Metabolisme",
  },
  {
    id: 2,
    question: "Welke bacterie kan je bestrijden met een antibioticum dat specifiek werkt onder zuurstofrijke omstandigheden?",
    options: [
      { letter: "A", text: "Een strikt anaerobe bacterie in het maag-darmstelsel" },
      { letter: "B", text: "Een strikt aerobe bacterie zoals Pseudomonas aeruginosa" },
      { letter: "C", text: "Een bacterie die glucose via fermentatie afbreekt" },
      { letter: "D", text: "Een bacterie die nitraat of sulfaat gebruikt als terminale elektronenacceptor" },
    ],
    correctAnswer: "B",
    category: "Metabolisme",
  },
  {
    id: 3,
    question: "Welke factoren beïnvloeden direct de snelheid waarmee bacteriën zich vermenigvuldigen?",
    options: [
      { letter: "A", text: "Alleen de grootte van de bacteriën" },
      { letter: "B", text: "De soort bacterie, voedingsstoffen/pH van het milieu, en temperatuur" },
      { letter: "C", text: "Alleen de kleur na Gramkleuring" },
      { letter: "D", text: "Alleen de aanwezigheid van een kapsel" },
    ],
    correctAnswer: "B",
    category: "Groei",
  },
  {
    id: 4,
    question: "Wat gebeurt er tijdens de exponentiële fase van bacteriële groei in een kweekmedium?",
    options: [
      { letter: "A", text: "De bacteriën bereiden zich voor op celdeling, maar delen nog niet" },
      { letter: "B", text: "Het aantal bacteriën neemt logaritmisch toe door snelle celdeling" },
      { letter: "C", text: "De voedingsstoffen raken uitgeput en de bacteriën stoppen met delen" },
      { letter: "D", text: "De bacteriën beginnen af te sterven door tekort aan voedingsstoffen" },
    ],
    correctAnswer: "B",
    category: "Groei",
  },
  {
    id: 5,
    question: "Welke van de volgende bacteriën groeit het snelst onder ideale omstandigheden?",
    options: [
      { letter: "A", text: "Mycobacterium tuberculosis" },
      { letter: "B", text: "Escherichia coli" },
      { letter: "C", text: "Een bacterie in de lag-fase" },
      { letter: "D", text: "Een bacterie in de stationaire fase" },
    ],
    correctAnswer: "B",
    category: "Groei",
  },
  {
    id: 6,
    question: "Wat is het belangrijkste verschil tussen prokaryote en eukaryote cellen qua DNA?",
    options: [
      { letter: "A", text: "Prokaryoten hebben lineair DNA, eukaryoten circulair" },
      { letter: "B", text: "Prokaryoten hebben geen celkern en circulair chromosomaal DNA" },
      { letter: "C", text: "Eukaryoten hebben geen celkern" },
      { letter: "D", text: "Prokaryoten hebben grotere ribosomen dan eukaryoten" },
    ],
    correctAnswer: "B",
    category: "Celbouw",
  },
  {
    id: 7,
    question: "Welke ribosoomgrootte hebben prokaryote cellen?",
    options: [
      { letter: "A", text: "80S" },
      { letter: "B", text: "70S" },
      { letter: "C", text: "60S" },
      { letter: "D", text: "90S" },
    ],
    correctAnswer: "B",
    category: "Celbouw",
  },
  {
    id: 8,
    question: "Waar bevindt zich LPS (lipopolysaccharide) en wat is het?",
    options: [
      { letter: "A", text: "In de celwand van Gram-positieve bacteriën; een exotoxine" },
      { letter: "B", text: "In de buitenmembraan van Gram-negatieve bacteriën; een endotoxine" },
      { letter: "C", text: "In het cytoplasma; een enzym" },
      { letter: "D", text: "In de pilus; een adhesine" },
    ],
    correctAnswer: "B",
    category: "Celbouw",
  },
  {
    id: 9,
    question: "Waarom zijn β-lactam antibiotica effectiever tegen Gram-positieve dan tegen Gram-negatieve bacteriën?",
    options: [
      { letter: "A", text: "Omdat Gram-positieve bacteriën geen peptidoglycaan hebben" },
      { letter: "B", text: "Omdat de buitenmembraan van Gram-negatieve bacteriën de toegang kan belemmeren" },
      { letter: "C", text: "Omdat Gram-negatieve bacteriën geen celwand hebben" },
      { letter: "D", text: "Omdat β-lactams alleen tegen anaerobe bacteriën werken" },
    ],
    correctAnswer: "B",
    category: "Celbouw",
  },
  {
    id: 10,
    question: "Welke bacterie vormt endosporen die antibiotica kunnen overleven en daarna diarree kunnen veroorzaken?",
    options: [
      { letter: "A", text: "Escherichia coli" },
      { letter: "B", text: "Staphylococcus aureus" },
      { letter: "C", text: "Clostridium difficile" },
      { letter: "D", text: "Pseudomonas aeruginosa" },
    ],
    correctAnswer: "C",
    category: "Celbouw",
  },
  {
    id: 11,
    question: "Welke bacterie heeft geen celwand?",
    options: [
      { letter: "A", text: "Mycobacterium tuberculosis" },
      { letter: "B", text: "Chlamydia trachomatis" },
      { letter: "C", text: "Mycoplasma pneumoniae" },
      { letter: "D", text: "Staphylococcus aureus" },
    ],
    correctAnswer: "C",
    category: "Celbouw",
  },
  {
    id: 12,
    question: "In Staphylococcus aureus, wat is 'aureus'?",
    options: [
      { letter: "A", text: "De genusnaam" },
      { letter: "B", text: "De speciesnaam" },
      { letter: "C", text: "De stamnaam" },
      { letter: "D", text: "De familienaam" },
    ],
    correctAnswer: "B",
    category: "Naamgeving",
  },
  {
    id: 13,
    question: "Wat is een bacterieel isolaat?",
    options: [
      { letter: "A", text: "Een hele species" },
      { letter: "B", text: "Een verzameling bacteriën afkomstig van één enkele cel" },
      { letter: "C", text: "Een type antibiotica" },
      { letter: "D", text: "Een kolonie-vormende eenheid" },
    ],
    correctAnswer: "B",
    category: "Naamgeving",
  },
  {
    id: 14,
    question: "Wat is het verschil tussen kolonisatie en infectie?",
    options: [
      { letter: "A", text: "Kolonisatie veroorzaakt altijd ziekte, infectie niet" },
      { letter: "B", text: "Kolonisatie is aanwezigheid met groei zonder schade; infectie betekent schade aan de gastheer" },
      { letter: "C", text: "Kolonisatie komt alleen voor op de huid" },
      { letter: "D", text: "Infectie is altijd exogeen" },
    ],
    correctAnswer: "B",
    category: "Kolonisatie",
  },
  {
    id: 15,
    question: "Welke infectie is meestal van endogene oorsprong?",
    options: [
      { letter: "A", text: "COVID-19" },
      { letter: "B", text: "Urineweginfecties" },
      { letter: "C", text: "Meningitis door Neisseria meningitidis" },
      { letter: "D", text: "Malaria" },
    ],
    correctAnswer: "B",
    category: "Kolonisatie",
  },
  {
    id: 16,
    question: "Wanneer kan Staphylococcus aureus, die bij ~20% van de mensen op de huid voorkomt, een infectie veroorzaken?",
    options: [
      { letter: "A", text: "Altijd, bij iedere drager" },
      { letter: "B", text: "Pas wanneer de huidbarrière doorbroken wordt" },
      { letter: "C", text: "Alleen bij kinderen" },
      { letter: "D", text: "Nooit, het is altijd commensaal" },
    ],
    correctAnswer: "B",
    category: "Kolonisatie",
  },
  {
    id: 17,
    question: "Welke bacterie is een voorbeeld van een micro-organisme dat vrijwel altijd een infectie veroorzaakt bij contact met de mens?",
    options: [
      { letter: "A", text: "Escherichia coli" },
      { letter: "B", text: "Staphylococcus epidermidis" },
      { letter: "C", text: "Mycobacterium tuberculosis" },
      { letter: "D", text: "Lactobacillus" },
    ],
    correctAnswer: "C",
    category: "Kolonisatie",
  },
  {
    id: 18,
    question: "Welke vitamine wordt door de darmmicrobiota geproduceerd?",
    options: [
      { letter: "A", text: "Alleen vitamine C" },
      { letter: "B", text: "B-vitaminen en vitamine K" },
      { letter: "C", text: "Alleen vitamine D" },
      { letter: "D", text: "Geen vitaminen" },
    ],
    correctAnswer: "B",
    category: "Microbiota",
  },
]

// Introductie immunologie questions (18)
const introductieImmunologieQuestions = [
  {
    id: 1,
    question: "Welke cellen behoren tot de aangeboren afweer?",
    options: [
      { letter: "A", text: "Plasmacellen en T-lymfocyten" },
      { letter: "B", text: "Macrofaag, neutrofiele granulocyt en NK-cel" },
      { letter: "C", text: "Alleen B-lymfocyten" },
      { letter: "D", text: "Alleen antistoffen" },
    ],
    correctAnswer: "B",
    category: "Aangeboren vs verworven",
  },
  {
    id: 2,
    question: "Welke cellen behoren tot de verworven afweer?",
    options: [
      { letter: "A", text: "Macrofaag en neutrofiel" },
      { letter: "B", text: "T-lymfocyten, plasmacellen en antistoffen" },
      { letter: "C", text: "Alleen NK-cellen" },
      { letter: "D", text: "Alleen eosinofielen" },
    ],
    correctAnswer: "B",
    category: "Aangeboren vs verworven",
  },
  {
    id: 3,
    question: "Wat is het belangrijkste verschil tussen passieve en actieve immunisatie?",
    options: [
      { letter: "A", text: "Passieve immunisatie geeft langdurige bescherming, actieve kortdurend" },
      { letter: "B", text: "Passieve immunisatie = overdracht antistoffen (kortdurend); actieve = geheugencellen (langdurig)" },
      { letter: "C", text: "Actieve immunisatie werkt alleen bij kinderen" },
      { letter: "D", text: "Passieve immunisatie vereist altijd een injectie" },
    ],
    correctAnswer: "B",
    category: "Vaccinatie",
  },
  {
    id: 4,
    question: "Waarom is passieve immunisatie met tetanus-antistoffen kortdurend?",
    options: [
      { letter: "A", text: "Omdat antistoffen altijd binnen 24 uur verdwijnen" },
      { letter: "B", text: "Antistoffen hebben een halfwaardetijd en verdwijnen uit het lichaam" },
      { letter: "C", text: "Omdat tetanus alleen bij kinderen voorkomt" },
      { letter: "D", text: "Passieve immunisatie geeft juist langdurige bescherming" },
    ],
    correctAnswer: "B",
    category: "Vaccinatie",
  },
  {
    id: 5,
    question: "Hoe herkennen macrofagen indringers?",
    options: [
      { letter: "A", text: "Via specifieke peptiden op MHC-moleculen" },
      { letter: "B", text: "Via moleculaire patronen (PAMPs) via PRRs" },
      { letter: "C", text: "Via specifieke extracellulaire antigenen zonder MHC" },
      { letter: "D", text: "Alleen via antistoffen" },
    ],
    correctAnswer: "B",
    category: "Herkenning",
  },
  {
    id: 6,
    question: "Hoe herkennen T-lymfocyten antigenen?",
    options: [
      { letter: "A", text: "Via moleculaire patronen op indringers" },
      { letter: "B", text: "Via extracellulaire antigenen, niet gebonden aan MHC" },
      { letter: "C", text: "Via kleine peptiden gebonden aan MHC klasse I- of II-moleculen" },
      { letter: "D", text: "Alleen via antistoffen op het membraan" },
    ],
    correctAnswer: "C",
    category: "Herkenning",
  },
  {
    id: 7,
    question: "In het kapstokmodel van immunologie: wat betekent horizontaal aangeboren vs verworven en verticaal humoraal vs cellulair?",
    options: [
      { letter: "A", text: "Humoraal = alleen in bloed; cellulair = alleen in weefsels" },
      { letter: "B", text: "Humoraal = effectormoleculen in bloed/lymfe; cellulair = cellen" },
      { letter: "C", text: "Aangeboren = altijd humoraal; verworven = altijd cellulair" },
      { letter: "D", text: "Er is geen verband tussen deze assen" },
    ],
    correctAnswer: "B",
    category: "Kapstok",
  },
  {
    id: 8,
    question: "Welke celtype is verantwoordelijk voor antigeenpresentatie?",
    options: [
      { letter: "A", text: "Neutrofiel" },
      { letter: "B", text: "Dendritische cel" },
      { letter: "C", text: "Plasmacel" },
      { letter: "D", text: "Eosinofiel" },
    ],
    correctAnswer: "B",
    category: "Cellen",
  },
  {
    id: 9,
    question: "Uit welke stamcel ontstaan alle immuuncellen?",
    options: [
      { letter: "A", text: "De neurale stamcel" },
      { letter: "B", text: "De hematopoietische stamcel in het beenmerg" },
      { letter: "C", text: "De hepatische stamcel" },
      { letter: "D", text: "De mesenchymale stamcel" },
    ],
    correctAnswer: "B",
    category: "Cellen",
  },
  {
    id: 10,
    question: "Wat is de functie van de eosinofiele granulocyt?",
    options: [
      { letter: "A", text: "Doden van virusgeïnfecteerde cellen" },
      { letter: "B", text: "Doden van wormen" },
      { letter: "C", text: "Productie van antilichamen" },
      { letter: "D", text: "Antigeenpresentatie" },
    ],
    correctAnswer: "B",
    category: "Cellen",
  },
  {
    id: 11,
    question: "Wat scheidt een effector B-lymfocyt (plasmacel) uit?",
    options: [
      { letter: "A", text: "Perforinen en granzymen" },
      { letter: "B", text: "Antilichamen (IgM, IgG, IgA, IgE)" },
      { letter: "C", text: "Alleen histamine" },
      { letter: "D", text: "Alleen complement" },
    ],
    correctAnswer: "B",
    category: "B- en T-lymfocyten",
  },
  {
    id: 12,
    question: "Welke structuur van antilichamen vormt de antigeenbindende delen?",
    options: [
      { letter: "A", text: "De constante domeinen" },
      { letter: "B", text: "De variabele domeinen" },
      { letter: "C", text: "De Fc-regio" },
      { letter: "D", text: "De zware keten alleen" },
    ],
    correctAnswer: "B",
    category: "B- en T-lymfocyten",
  },
  {
    id: 13,
    question: "Wat scheiden cytotoxische T-lymfocyten uit om virusgeïnfecteerde cellen te doden?",
    options: [
      { letter: "A", text: "Alleen antilichamen" },
      { letter: "B", text: "Perforinen en granzymen" },
      { letter: "C", text: "Alleen histamine" },
      { letter: "D", text: "Alleen complement" },
    ],
    correctAnswer: "B",
    category: "B- en T-lymfocyten",
  },
  {
    id: 14,
    question: "Hoe ontstaat de grote diversiteit van B- en T-celreceptoren?",
    options: [
      { letter: "A", text: "Door mutaties tijdens het leven" },
      { letter: "B", text: "Via een genherschikkingsproces waarbij verschillende genen aan elkaar gekoppeld worden" },
      { letter: "C", text: "Door blootstelling aan antigenen" },
      { letter: "D", text: "Door epigenetische modificaties" },
    ],
    correctAnswer: "B",
    category: "Diversiteit",
  },
  {
    id: 15,
    question: "Wat gebeurt er bij klonale selectie?",
    options: [
      { letter: "A", text: "Alle lymfocyten worden geactiveerd" },
      { letter: "B", text: "De specifieke lymfocyt die het antigeen herkent wordt geselecteerd en expandeert" },
      { letter: "C", text: "Antistoffen worden gegenereerd door macrofagen" },
      { letter: "D", text: "Complement wordt geactiveerd" },
    ],
    correctAnswer: "B",
    category: "Diversiteit",
  },
  {
    id: 16,
    question: "Welke ziektebeelden horen bij disfunctie van het immuunsysteem?",
    options: [
      { letter: "A", text: "Alleen infectieziekten" },
      { letter: "B", text: "Immuundeficiënties, allergie, auto-immuunziekten, leukemieën/lymfomen" },
      { letter: "C", text: "Alleen auto-immuunziekten" },
      { letter: "D", text: "Geen van deze" },
    ],
    correctAnswer: "B",
    category: "Ziektebeelden",
  },
  {
    id: 17,
    question: "Wat is de functie van de T-helper lymfocyt?",
    options: [
      { letter: "A", text: "Alleen fagocytose" },
      { letter: "B", text: "Productie van antilichamen" },
      { letter: "C", text: "Cytokinen uitscheiden, activatie van B-cellen en macrofagen" },
      { letter: "D", text: "Doden van wormen" },
    ],
    correctAnswer: "C",
    category: "Cellen",
  },
  {
    id: 18,
    question: "Waar vindt de initiatie van de verworven humoraal immuunrespons vooral plaats?",
    options: [
      { letter: "A", text: "Alleen in perifere weefsels" },
      { letter: "B", text: "In lymfoïde organen" },
      { letter: "C", text: "Alleen in het beenmerg" },
      { letter: "D", text: "Alleen in de bloedbaan" },
    ],
    correctAnswer: "B",
    category: "Kapstok",
  },
]

// Introductie mycologie questions (18)
const introductieMycologieQuestions = [
  {
    id: 1,
    question: "Wat is mycologie?",
    options: [
      { letter: "A", text: "De wetenschap die bacteriën bestudeert" },
      { letter: "B", text: "De wetenschap die fungi bestudeert" },
      { letter: "C", text: "De wetenschap die virussen bestudeert" },
      { letter: "D", text: "De wetenschap die parasieten bestudeert" },
    ],
    correctAnswer: "B",
    category: "Introductie",
  },
  {
    id: 2,
    question: "Waar worden fungi vooral aangetroffen?",
    options: [
      { letter: "A", text: "Alleen in water" },
      { letter: "B", text: "Voornamelijk in grond en lucht" },
      { letter: "C", text: "Alleen in het menselijk lichaam" },
      { letter: "D", text: "Alleen in voedsel" },
    ],
    correctAnswer: "B",
    category: "Introductie",
  },
  {
    id: 3,
    question: "Welke schimmel speelde een rol bij de ontdekking van penicilline?",
    options: [
      { letter: "A", text: "Aspergillus fumigatus" },
      { letter: "B", text: "Candida albicans" },
      { letter: "C", text: "Penicillium notatum" },
      { letter: "D", text: "Cryptococcus neoformans" },
    ],
    correctAnswer: "C",
    category: "Introductie",
  },
  {
    id: 4,
    question: "Welke sterol gebruiken fungi in hun celmembraan?",
    options: [
      { letter: "A", text: "Cholesterol" },
      { letter: "B", text: "Ergosterol" },
      { letter: "C", text: "Testosteron" },
      { letter: "D", text: "Cortisol" },
    ],
    correctAnswer: "B",
    category: "Basisstructuur",
  },
  {
    id: 5,
    question: "Uit welke componenten bestaat de fungale celwand?",
    options: [
      { letter: "A", text: "Peptidoglycaan en LPS" },
      { letter: "B", text: "Chitin, glucanen en mannan" },
      { letter: "C", text: "Alleen cellulose" },
      { letter: "D", text: "Alleen lipiden" },
    ],
    correctAnswer: "B",
    category: "Basisstructuur",
  },
  {
    id: 6,
    question: "Hoe plant een gist zich meestal voort?",
    options: [
      { letter: "A", text: "Via sporulatie" },
      { letter: "B", text: "Via budding (knopvorming)" },
      { letter: "C", text: "Via binaire deling" },
      { letter: "D", text: "Alleen seksueel" },
    ],
    correctAnswer: "B",
    category: "Gist vs schimmel",
  },
  {
    id: 7,
    question: "Wat zijn pseudohyfen?",
    options: [
      { letter: "A", text: "Echte hyfen met septae" },
      { letter: "B", text: "Dochtercellen die aan elkaar vast blijven zitten en zich verlengen" },
      { letter: "C", text: "Sporen van schimmels" },
      { letter: "D", text: "Bacteriële filamenten" },
    ],
    correctAnswer: "B",
    category: "Gist vs schimmel",
  },
  {
    id: 8,
    question: "Wat is mycelium?",
    options: [
      { letter: "A", text: "Een enkele gistcel" },
      { letter: "B", text: "Een complex netwerk van hyfen" },
      { letter: "C", text: "Een type spore" },
      { letter: "D", text: "Een bacteriekolonie" },
    ],
    correctAnswer: "B",
    category: "Gist vs schimmel",
  },
  {
    id: 9,
    question: "Waar groeien hyfen vanuit?",
    options: [
      { letter: "A", text: "De basis" },
      { letter: "B", text: "De tip" },
      { letter: "C", text: "Het midden" },
      { letter: "D", text: "Overal tegelijk" },
    ],
    correctAnswer: "B",
    category: "Gist vs schimmel",
  },
  {
    id: 10,
    question: "Hoe kunnen fungi aan fagocytose ontsnappen?",
    options: [
      { letter: "A", text: "Alleen door snelle deling" },
      { letter: "B", text: "Polysacharidekapsel; massale groei; hyfen penetreren membraan; inductie celdood leukocyt" },
      { letter: "C", text: "Door antistoffen te produceren" },
      { letter: "D", text: "Fungi kunnen nooit aan fagocytose ontsnappen" },
    ],
    correctAnswer: "B",
    category: "Pathogenese",
  },
  {
    id: 11,
    question: "Welke fungi veroorzaken cutane infecties met ringworm (tinea)?",
    options: [
      { letter: "A", text: "Cryptokokken" },
      { letter: "B", text: "Dermatophyten" },
      { letter: "C", text: "Candida-soorten" },
      { letter: "D", text: "Aspergillus-soorten" },
    ],
    correctAnswer: "B",
    category: "Infecties",
  },
  {
    id: 12,
    question: "Bij wie komen systemische fungale infecties in Nederland vooral voor?",
    options: [
      { letter: "A", text: "Alleen bij gezonde volwassenen" },
      { letter: "B", text: "Immuungecompromitteerde patiënten of langdurig ziekenhuisopname" },
      { letter: "C", text: "Alleen bij kinderen" },
      { letter: "D", text: "Alleen bij zwangere vrouwen" },
    ],
    correctAnswer: "B",
    category: "Infecties",
  },
  {
    id: 13,
    question: "Waarvoor wordt de KOH-kleuring gebruikt?",
    options: [
      { letter: "A", text: "Hersenvocht voor cryptokokken" },
      { letter: "B", text: "Huid, haar en nagels; lost keratine op, fungi blijven zichtbaar" },
      { letter: "C", text: "Bloedkweek" },
      { letter: "D", text: "Urine" },
    ],
    correctAnswer: "B",
    category: "Diagnostiek",
  },
  {
    id: 14,
    question: "Waarvoor wordt de Oost-Indische inkt kleuring gebruikt?",
    options: [
      { letter: "A", text: "Gram-positieve bacteriën" },
      { letter: "B", text: "Verdenking op cryptokokkeninfectie (meestal hersenvocht)" },
      { letter: "C", text: "Dermatophyten op huid" },
      { letter: "D", text: "Virussen" },
    ],
    correctAnswer: "B",
    category: "Diagnostiek",
  },
  {
    id: 15,
    question: "Waarom bevatten speciale kweekplaten voor fungi vaak antibiotica?",
    options: [
      { letter: "A", text: "Om fungi sneller te laten groeien" },
      { letter: "B", text: "Om groei van bijkomende bacteriën te remmen (bacteriën groeien sneller)" },
      { letter: "C", text: "Om schimmels te doden" },
      { letter: "D", text: "Antibiotica worden nooit gebruikt op fungale kweekplaten" },
    ],
    correctAnswer: "B",
    category: "Diagnostiek",
  },
  {
    id: 16,
    question: "Wat is de snelste diagnostische methode bij verdenking op een cutane fungale infectie?",
    options: [
      { letter: "A", text: "Kweek" },
      { letter: "B", text: "Directe microscopie (bijv. KOH-preparaat)" },
      { letter: "C", text: "PCR" },
      { letter: "D", text: "Serologie" },
    ],
    correctAnswer: "B",
    category: "Diagnostiek",
  },
  {
    id: 17,
    question: "Welke celwandcomponent wordt gebruikt voor serologische diagnostiek van fungale infecties?",
    options: [
      { letter: "A", text: "Alleen LPS" },
      { letter: "B", text: "Glucan of galactomannan (bij Aspergillus)" },
      { letter: "C", text: "Peptidoglycaan" },
      { letter: "D", text: "Geen celwandcomponenten" },
    ],
    correctAnswer: "B",
    category: "Diagnostiek",
  },
  {
    id: 18,
    question: "Wat zijn mycotoxines?",
    options: [
      { letter: "A", text: "Antibiotica geproduceerd door fungi" },
      { letter: "B", text: "Giftige stoffen geproduceerd door fungi, vaak via besmet voedsel" },
      { letter: "C", text: "Vaccins tegen schimmels" },
      { letter: "D", text: "Antistoffen tegen fungi" },
    ],
    correctAnswer: "B",
    category: "Pathogenese",
  },
]

// Introductie parasitologie questions (18)
const introductieParasitologieQuestions = [
  {
    id: 1,
    question: "Welk kenmerk past bij parasieten?",
    options: [
      { letter: "A", text: "Eencellige prokaryote organismen" },
      { letter: "B", text: "Eukaryote ziekteverwekkers met meerdere ontwikkelingsstadia" },
      { letter: "C", text: "Voor vermeerdering geheel afhankelijk van levende cellen" },
      { letter: "D", text: "Met name schadelijk bij verstoorde afweer" },
    ],
    correctAnswer: "B",
    category: "Wat zijn parasieten",
  },
  {
    id: 2,
    question: "Wat is een ectoparasiet?",
    options: [
      { letter: "A", text: "Een eencellige parasiet in de darm" },
      { letter: "B", text: "Een geleedpotig organisme (spinachtige of insect)" },
      { letter: "C", text: "Een lintworm" },
      { letter: "D", text: "Een protozoön" },
    ],
    correctAnswer: "B",
    category: "Classificatie",
  },
  {
    id: 3,
    question: "Welke parasiet heeft een directe ontwikkelingscyclus?",
    options: [
      { letter: "A", text: "Taenia saginata (runderlintworm)" },
      { letter: "B", text: "Giardia lamblia" },
      { letter: "C", text: "Plasmodium falciparum" },
      { letter: "D", text: "Schistosoma" },
    ],
    correctAnswer: "B",
    category: "Ontwikkelingscyclus",
  },
  {
    id: 4,
    question: "Bij een indirecte ontwikkelingscyclus heeft de parasiet:",
    options: [
      { letter: "A", text: "1 gastheersoort nodig" },
      { letter: "B", text: "Minimaal 2 gastheersoorten nodig" },
      { letter: "C", text: "Geen gastheer nodig" },
      { letter: "D", text: "Alleen een vector nodig" },
    ],
    correctAnswer: "B",
    category: "Ontwikkelingscyclus",
  },
  {
    id: 5,
    question: "Welk kenmerk past bij rondwormen (nematoden)?",
    options: [
      { letter: "A", text: "Hermafrodiet en indirecte cyclus" },
      { letter: "B", text: "Geslachtelijk, directe cyclus, bilateraal symmetrisch" },
      { letter: "C", text: "Eencellig" },
      { letter: "D", text: "Geleedpotig" },
    ],
    correctAnswer: "B",
    category: "Rondwormen en platwormen",
  },
  {
    id: 6,
    question: "Aan welke groep zijn rondwormen evolutionair het meest verwant?",
    options: [
      { letter: "A", text: "Platwormen" },
      { letter: "B", text: "Ectoparasieten (geleedpotigen)" },
      { letter: "C", text: "Gewervelde organismen" },
      { letter: "D", text: "Protozoa" },
    ],
    correctAnswer: "B",
    category: "Rondwormen en platwormen",
  },
  {
    id: 7,
    question: "Welke Plasmodium-soort veroorzaakt tropische malaria?",
    options: [
      { letter: "A", text: "Plasmodium vivax" },
      { letter: "B", text: "Plasmodium falciparum" },
      { letter: "C", text: "Plasmodium ovale" },
      { letter: "D", text: "Plasmodium malariae" },
    ],
    correctAnswer: "B",
    category: "Malaria",
  },
  {
    id: 8,
    question: "Waarom komt tropische malaria niet voor in Nederland?",
    options: [
      { letter: "A", text: "De Nederlandse bevolking is aangeboren resistent" },
      { letter: "B", text: "De geschikte vector (muggensoort) ontbreekt" },
      { letter: "C", text: "Het is te koud voor de parasiet" },
      { letter: "D", text: "Alle malariapatiënten worden direct behandeld" },
    ],
    correctAnswer: "B",
    category: "Malaria",
  },
  {
    id: 9,
    question: "Waarom resulteert verworven afweer tegen Plasmodium falciparum niet in steriele immuniteit?",
    options: [
      { letter: "A", text: "Omdat Nederland malariavrij is" },
      { letter: "B", text: "Plasmodium vermenigvuldigt zich via seksuele voortplanting, waardoor extreme variatie ontstaat" },
      { letter: "C", text: "Omdat er geen vaccin is" },
      { letter: "D", text: "Omdat muggen resistent zijn" },
    ],
    correctAnswer: "B",
    category: "Malaria",
  },
  {
    id: 10,
    question: "Welke ziekte wordt veroorzaakt door Ascaris?",
    options: [
      { letter: "A", text: "Malaria" },
      { letter: "B", text: "Ascariasis" },
      { letter: "C", text: "Giardiasis" },
      { letter: "D", text: "Schistosomiasis" },
    ],
    correctAnswer: "B",
    category: "Spoelwormen",
  },
  {
    id: 11,
    question: "Hoe vindt transmissie van Ascaris plaats?",
    options: [
      { letter: "A", text: "Via muggenbeten" },
      { letter: "B", text: "Faeco-orale transmissie (orale inname van infectieuze eieren)" },
      { letter: "C", text: "Via direct huidcontact" },
      { letter: "D", text: "Via bloedtransfusie" },
    ],
    correctAnswer: "B",
    category: "Spoelwormen",
  },
  {
    id: 12,
    question: "Waarom zijn parasitaire worminfecties vaak succesvol ondanks complexe levenscycli?",
    options: [
      { letter: "A", text: "Omdat ze zich aseksueel voortplanten" },
      { letter: "B", text: "Ze produceren zeer veel eieren en veroorzaken chronische infecties" },
      { letter: "C", text: "Omdat ze alleen in Nederland voorkomen" },
      { letter: "D", text: "Omdat er geen behandeling bestaat" },
    ],
    correctAnswer: "B",
    category: "Spoelwormen",
  },
  {
    id: 13,
    question: "Welke diagnostische methode is het minst geschikt voor parasitaire infecties?",
    options: [
      { letter: "A", text: "Microscopisch onderzoek" },
      { letter: "B", text: "Kweek van parasieten" },
      { letter: "C", text: "Serologie" },
      { letter: "D", text: "PCR" },
    ],
    correctAnswer: "B",
    category: "Diagnostiek",
  },
  {
    id: 14,
    question: "Waarom is microscopisch onderzoek effectief voor het aantonen van veel parasieten?",
    options: [
      { letter: "A", text: "Parasieten zijn kleiner dan bacteriën" },
      { letter: "B", text: "Parasieten zijn relatief groot" },
      { letter: "C", text: "Parasieten fluoresceren" },
      { letter: "D", text: "Microscopie is altijd de snelste methode" },
    ],
    correctAnswer: "B",
    category: "Diagnostiek",
  },
  {
    id: 15,
    question: "In welke gebieden komen faeco-orale parasitaire infecties veel voor?",
    options: [
      { letter: "A", text: "Alleen in Nederland" },
      { letter: "B", text: "Lage-inkomenslanden met gebrek aan riolering en veilig drinkwater" },
      { letter: "C", text: "Alleen in stedelijke gebieden" },
      { letter: "D", text: "Overal evenveel" },
    ],
    correctAnswer: "B",
    category: "Spoelwormen",
  },
  {
    id: 16,
    question: "Hoe kunnen veel parasitaire infecties met faeco-orale transmissie worden voorkomen?",
    options: [
      { letter: "A", text: "Alleen met vaccinatie" },
      { letter: "B", text: "Met goede hygiëne (riolering, veilig drinkwater)" },
      { letter: "C", text: "Met antibiotica" },
      { letter: "D", text: "Door muggen te bestrijden" },
    ],
    correctAnswer: "B",
    category: "Bijzondere ziekteverwekkers",
  },
  {
    id: 17,
    question: "Waarom werkt breedspectrum medicatie tegen rondwormen meestal niet tegen platwormen?",
    options: [
      { letter: "A", text: "Omdat ze dezelfde levenscyclus hebben" },
      { letter: "B", text: "Rond- en platwormen zijn evolutionair niet verwant; zeer verschillende bouw en kenmerken" },
      { letter: "C", text: "Omdat platwormen resistent zijn" },
      { letter: "D", text: "Omdat ze dezelfde grootte hebben" },
    ],
    correctAnswer: "B",
    category: "Rondwormen en platwormen",
  },
  {
    id: 18,
    question: "Wat wordt bedoeld met 'een goede parasiet doodt zijn gastheer niet'?",
    options: [
      { letter: "A", text: "Parasieten zijn nooit schadelijk" },
      { letter: "B", text: "Chronische infecties met weinig schade aan gastheer zijn evolutionair voordelig voor de parasiet" },
      { letter: "C", text: "Parasieten kunnen niet overleven in een gastheer" },
      { letter: "D", text: "Alleen dode gastheren worden geïnfecteerd" },
    ],
    correctAnswer: "B",
    category: "Spoelwormen",
  },
]

// Introductie virologie – deel 1 questions (18)
const introductieVirologieQuestions = [
  {
    id: 1,
    question: "Waarom is een elektronenmicroscoop nodig om virussen te zien?",
    options: [
      { letter: "A", text: "Virussen zijn ~5 µm groot, bacteriën ~100 nm" },
      { letter: "B", text: "Virussen zijn ~100 nm groot; bacteriën (~5 µm) zijn nog onder de lichtmicroscoop zichtbaar" },
      { letter: "C", text: "Virussen fluoresceren alleen onder elektronen" },
      { letter: "D", text: "Lichtmicroscopen werken niet voor infectieuze deeltjes" },
    ],
    correctAnswer: "B",
    category: "Wat is een virus",
  },
  {
    id: 2,
    question: "Wat wordt bedoeld met een virus als 'obligaat intracellulaire parasiet'?",
    options: [
      { letter: "A", text: "Het virus kan zich buiten de cel vermenigvuldigen" },
      { letter: "B", text: "Het virus heeft een gastheercel nodig om te repliceren" },
      { letter: "C", text: "Het virus is een levend micro-organisme" },
      { letter: "D", text: "Het virus kan alleen bacteriën infecteren" },
    ],
    correctAnswer: "B",
    category: "Wat is een virus",
  },
  {
    id: 3,
    question: "Welke componenten heeft een virus minimaal?",
    options: [
      { letter: "A", text: "Alleen een genoom" },
      { letter: "B", text: "Genoom en capside; soms een envelop" },
      { letter: "C", text: "Genoom, capside en altijd een envelop" },
      { letter: "D", text: "Alleen eiwitten" },
    ],
    correctAnswer: "B",
    category: "Virusstructuur",
  },
  {
    id: 4,
    question: "Waarom zijn virussen met een envelop over het algemeen minder stabiel dan naakte virussen?",
    options: [
      { letter: "A", text: "Ze hebben een kleiner genoom" },
      { letter: "B", text: "De lipide membraan is gevoelig voor uitdroging en detergentia" },
      { letter: "C", text: "Ze repliceren langzamer" },
      { letter: "D", text: "Ze hebben geen capside" },
    ],
    correctAnswer: "B",
    category: "Virusstructuur",
  },
  {
    id: 5,
    question: "Welke capside-structuren komen voor bij virussen?",
    options: [
      { letter: "A", text: "Alleen icosaëder" },
      { letter: "B", text: "Icosaëder, helisch en pleomorf" },
      { letter: "C", text: "Alleen helisch" },
      { letter: "D", text: "Alleen bolvormig" },
    ],
    correctAnswer: "B",
    category: "Virusstructuur",
  },
  {
    id: 6,
    question: "Wat is het correcte ICTV-hiërarchieniveau met het achtervoegsel -viridae?",
    options: [
      { letter: "A", text: "Geslacht (genus)" },
      { letter: "B", text: "Familie" },
      { letter: "C", text: "Soort (species)" },
      { letter: "D", text: "Subfamilie" },
    ],
    correctAnswer: "B",
    category: "Classificatie",
  },
  {
    id: 7,
    question: "Welke stap in de virale replicatiecyclus volgt direct na penetratie?",
    options: [
      { letter: "A", text: "Assemblage" },
      { letter: "B", text: "Ontmanteling" },
      { letter: "C", text: "Vrijkomen" },
      { letter: "D", text: "Replicatie" },
    ],
    correctAnswer: "B",
    category: "Replicatie",
  },
  {
    id: 8,
    question: "Hoe dringt een enveloped virus typisch de cel binnen?",
    options: [
      { letter: "A", text: "Translocatie door het membraan" },
      { letter: "B", text: "Membraanfusie" },
      { letter: "C", text: "Endocytose alleen" },
      { letter: "D", text: "Lysis van de celwand" },
    ],
    correctAnswer: "B",
    category: "Replicatie",
  },
  {
    id: 9,
    question: "Welke receptor bindt het spike-eiwit van SARS-CoV-2?",
    options: [
      { letter: "A", text: "CD4" },
      { letter: "B", text: "ACE2" },
      { letter: "C", text: "CD155" },
      { letter: "D", text: "Siaalzuur" },
    ],
    correctAnswer: "B",
    category: "Replicatie",
  },
  {
    id: 10,
    question: "In welk compartiment repliceren de meeste DNA-virussen?",
    options: [
      { letter: "A", text: "Cytoplasma" },
      { letter: "B", text: "Celkern" },
      { letter: "C", text: "Endoplasmatisch reticulum" },
      { letter: "D", text: "Lysosoom" },
    ],
    correctAnswer: "B",
    category: "Replicatie",
  },
  {
    id: 11,
    question: "Tot welke Baltimore-groep behoort SARS-CoV-2?",
    options: [
      { letter: "A", text: "Groep III (dsRNA)" },
      { letter: "B", text: "Groep IV (ssRNA +)" },
      { letter: "C", text: "Groep V (ssRNA -)" },
      { letter: "D", text: "Groep VI (retrovirus)" },
    ],
    correctAnswer: "B",
    category: "Baltimore-classificatie",
  },
  {
    id: 12,
    question: "Welk virus behoort tot Baltimore-groep VI (ssRNA + reverse transcriptase)?",
    options: [
      { letter: "A", text: "Hepatitis B" },
      { letter: "B", text: "HIV" },
      { letter: "C", text: "Influenza A" },
      { letter: "D", text: "Rotavirus" },
    ],
    correctAnswer: "B",
    category: "Baltimore-classificatie",
  },
  {
    id: 13,
    question: "Waarom hebben RNA-virussen over het algemeen een hogere mutatiefrequentie dan DNA-virussen?",
    options: [
      { letter: "A", text: "RNA is groter dan DNA" },
      { letter: "B", text: "DNA-replicatie heeft vaak proofreading; RNA-virussen meestal niet" },
      { letter: "C", text: "RNA-virussen hebben meer genen" },
      { letter: "D", text: "DNA-virussen muteren sneller" },
    ],
    correctAnswer: "B",
    category: "Virus evolutie",
  },
  {
    id: 14,
    question: "Welke uitzondering vormt een RNA-virus met proofreading-mechanisme?",
    options: [
      { letter: "A", text: "Influenzavirus" },
      { letter: "B", text: "Coronavirussen" },
      { letter: "C", text: "HIV" },
      { letter: "D", text: "Poliovirus" },
    ],
    correctAnswer: "B",
    category: "Virus evolutie",
  },
  {
    id: 15,
    question: "Wat is 'antigene shift' bij influenza?",
    options: [
      { letter: "A", text: "Puntmutaties in het hemagglutinine-gen" },
      { letter: "B", text: "Reassortering van gesegmenteerd genoom; kan pandemieën veroorzaken" },
      { letter: "C", text: "Verzwakking van het virus voor vaccins" },
      { letter: "D", text: "Resistentie tegen antivirale middelen" },
    ],
    correctAnswer: "B",
    category: "Virus evolutie",
  },
  {
    id: 16,
    question: "Welke test is een directe methode voor virusdetectie?",
    options: [
      { letter: "A", text: "Serologie (IgM/IgG)" },
      { letter: "B", text: "PCR voor virusgenoom" },
      { letter: "C", text: "Alleen antilichaamdetectie" },
      { letter: "D", text: "Immuunrespons-meting" },
    ],
    correctAnswer: "B",
    category: "Diagnostiek",
  },
  {
    id: 17,
    question: "Wat wordt gemeten bij een indirecte virologische test?",
    options: [
      { letter: "A", text: "Virusgenoom" },
      { letter: "B", text: "Immuunrespons van de gastheer (antilichamen)" },
      { letter: "C", text: "Virusantigeen" },
      { letter: "D", text: "Viruspartikels" },
    ],
    correctAnswer: "B",
    category: "Diagnostiek",
  },
  {
    id: 18,
    question: "Welke receptor gebruikt HIV-1 voor aanhechting?",
    options: [
      { letter: "A", text: "ACE2" },
      { letter: "B", text: "CD4" },
      { letter: "C", text: "CD155" },
      { letter: "D", text: "Siaalzuur" },
    ],
    correctAnswer: "B",
    category: "Receptoren",
  },
]

// Voorbereiding VOW Microbiologie questions (18)
const voorbereidingVOWMicrobiologieQuestions = [
  {
    id: 1,
    question: "Welke materialen worden op het MMIZ-laboratorium geanalyseerd?",
    options: [
      { letter: "A", text: "Alleen bloed" },
      { letter: "B", text: "Bloed, urine, faeces, liquor en andere patiëntmaterialen" },
      { letter: "C", text: "Alleen weefselbiopten" },
      { letter: "D", text: "Alleen luchtmonsters" },
    ],
    correctAnswer: "B",
    category: "Laboratorium MMIZ",
  },
  {
    id: 2,
    question: "Welke pathogenen kunnen met microscopie en kweken worden vastgesteld?",
    options: [
      { letter: "A", text: "Alleen bacteriën" },
      { letter: "B", text: "Bacteriën, gisten, schimmels en parasieten" },
      { letter: "C", text: "Alleen virussen" },
      { letter: "D", text: "Alleen bacteriën en virussen" },
    ],
    correctAnswer: "B",
    category: "Laboratorium MMIZ",
  },
  {
    id: 3,
    question: "Waar vindt het VOW Microbiologie plaats?",
    options: [
      { letter: "A", text: "In het diagnostisch laboratorium" },
      { letter: "B", text: "In laboratoriumzaal EE-1732 op de 17e verdieping" },
      { letter: "C", text: "In het onderwijscentrum" },
      { letter: "D", text: "In de polikliniek" },
    ],
    correctAnswer: "B",
    category: "Huisregels",
  },
  {
    id: 4,
    question: "Wat moet je doen met jassen en tassen vóór het betreden van het EE-gebouw?",
    options: [
      { letter: "A", text: "Meenemen naar het laboratorium" },
      { letter: "B", text: "In kluisjes in het onderwijscentrum laten" },
      { letter: "C", text: "Bij de receptie afgeven" },
      { letter: "D", text: "In de gang neerzetten" },
    ],
    correctAnswer: "B",
    category: "Huisregels",
  },
  {
    id: 5,
    question: "Waarom zijn extra huisregels nodig tijdens VOW Casus 1 en 6?",
    options: [
      { letter: "A", text: "Omdat het een examen is" },
      { letter: "B", text: "Omdat er met levende micro-organismen in grote hoeveelheden wordt gewerkt" },
      { letter: "C", text: "Omdat er gevaarlijke chemicaliën zijn" },
      { letter: "D", text: "Omdat de ruimte klein is" },
    ],
    correctAnswer: "B",
    category: "Huisregels",
  },
  {
    id: 6,
    question: "Wat is een kolonie-vormende eenheid (KVE) na 24 uur groei?",
    options: [
      { letter: "A", text: "Eén enkele bacterie" },
      { letter: "B", text: "Een kolonie met tot miljoenen bacteriën" },
      { letter: "C", text: "Een viruskolonie" },
      { letter: "D", text: "Een schimmelspore" },
    ],
    correctAnswer: "B",
    category: "Huisregels",
  },
  {
    id: 7,
    question: "Wat moet je doen voordat je de hoogste vergroting van de microscoop gebruikt?",
    options: [
      { letter: "A", text: "De grove scherpstelling gebruiken" },
      { letter: "B", text: "Eerst een druppel olie op het preparaat doen" },
      { letter: "C", text: "Het diafragma sluiten" },
      { letter: "D", text: "De kruistafel verhogen" },
    ],
    correctAnswer: "B",
    category: "Microscoop",
  },
  {
    id: 8,
    question: "Waarom mag je een preparaat niet ondersteboven plaatsen?",
    options: [
      { letter: "A", text: "Omdat het dan breekt" },
      { letter: "B", text: "Omdat je het dan niet scherp krijgt" },
      { letter: "C", text: "Omdat de olie eraf loopt" },
      { letter: "D", text: "Omdat het preparaat beschadigt" },
    ],
    correctAnswer: "B",
    category: "Microscoop",
  },
  {
    id: 9,
    question: "Waarom is een kleurmethode nodig voor directe preparaten van bacteriën?",
    options: [
      { letter: "A", text: "Omdat bacteriën van nature gekleurd zijn" },
      { letter: "B", text: "Zonder kleuring is niets zichtbaar onder de lichtmicroscoop" },
      { letter: "C", text: "Om virussen zichtbaar te maken" },
      { letter: "D", text: "Om de bacteriën te doden" },
    ],
    correctAnswer: "B",
    category: "Directe preparaten",
  },
  {
    id: 10,
    question: "Hoe groot zijn bacteriën ongeveer?",
    options: [
      { letter: "A", text: "0,1–1 nm" },
      { letter: "B", text: "1–10 µm" },
      { letter: "C", text: "50–100 µm" },
      { letter: "D", text: "1–10 mm" },
    ],
    correctAnswer: "B",
    category: "Directe preparaten",
  },
  {
    id: 11,
    question: "Welke kleur hebben grampositieve bacteriën na Gramkleuring?",
    options: [
      { letter: "A", text: "Roze" },
      { letter: "B", text: "Paars" },
      { letter: "C", text: "Blauw" },
      { letter: "D", text: "Groen" },
    ],
    correctAnswer: "B",
    category: "Gramkleuring",
  },
  {
    id: 12,
    question: "Welke bacterie wordt vaak geassocieerd met Gram-positieve kokken in trossen?",
    options: [
      { letter: "A", text: "Escherichia coli" },
      { letter: "B", text: "Staphylococcus aureus" },
      { letter: "C", text: "Neisseria meningitidis" },
      { letter: "D", text: "Pseudomonas aeruginosa" },
    ],
    correctAnswer: "B",
    category: "Gramkleuring",
  },
  {
    id: 13,
    question: "Welke bacterie wordt gekenmerkt door Gram-negatieve diplokokken?",
    options: [
      { letter: "A", text: "Streptococcus pneumoniae" },
      { letter: "B", text: "Neisseria-soorten" },
      { letter: "C", text: "Clostridium difficile" },
      { letter: "D", text: "Staphylococcus aureus" },
    ],
    correctAnswer: "B",
    category: "Gramkleuring",
  },
  {
    id: 14,
    question: "Wat is het doel van het kweken van bacteriën in het laboratorium?",
    options: [
      { letter: "A", text: "Om ze te doden" },
      { letter: "B", text: "Om ze te vermenigvuldigen tot er genoeg zijn voor zichtbaarheid en testen" },
      { letter: "C", text: "Om ze te kleuren" },
      { letter: "D", text: "Om ze te bevriezen" },
    ],
    correctAnswer: "B",
    category: "Bacteriële kweek",
  },
  {
    id: 15,
    question: "Waarom is de optimale kweektemperatuur voor pathogene bacteriën rond 35°C?",
    options: [
      { letter: "A", text: "Omdat dat kamertemperatuur is" },
      { letter: "B", text: "Omdat de menselijke lichaamstemperatuur 35–37°C is" },
      { letter: "C", text: "Omdat bacteriën dan sterven" },
      { letter: "D", text: "Omdat dat de standaard is voor alle organismen" },
    ],
    correctAnswer: "B",
    category: "Bacteriële kweek",
  },
  {
    id: 16,
    question: "Wat is een mengcultuur?",
    options: [
      { letter: "A", text: "Een kweek met alleen pathogenen" },
      { letter: "B", text: "Een kweek met meerdere soorten bacteriën (pathogenen + commensale flora)" },
      { letter: "C", text: "Een vloeibare kweek" },
      { letter: "D", text: "Een kweek op bloedagar" },
    ],
    correctAnswer: "B",
    category: "Bacteriële kweek",
  },
  {
    id: 17,
    question: "Hoe lang duurt een kweek van Mycobacterium tuberculosis typisch?",
    options: [
      { letter: "A", text: "2–5 dagen" },
      { letter: "B", text: "6 weken op speciaal medium" },
      { letter: "C", text: "12–18 uur" },
      { letter: "D", text: "24 uur" },
    ],
    correctAnswer: "B",
    category: "Bacteriële kweek",
  },
  {
    id: 18,
    question: "Wat is nodig voordat een antibiogram kan worden bepaald?",
    options: [
      { letter: "A", text: "Alleen een mengcultuur" },
      { letter: "B", text: "Eerst een reincultuur van de bacterie" },
      { letter: "C", text: "Alleen een Gram-preparaat" },
      { letter: "D", text: "Een PCR-test" },
    ],
    correctAnswer: "B",
    category: "Bacteriële kweek",
  },
]

// Aangeboren immuniteit – respons questions (18)
const aangeborenImmuniteitResponsQuestions = [
  {
    id: 1,
    question: "Welke drie stappen kent het fagocytoseproces?",
    options: [
      { letter: "A", text: "Herkenning, opsonisatie, lysis" },
      { letter: "B", text: "Herkenning en aanhechting, opslokking, doding en afbraak" },
      { letter: "C", text: "Complementactivering, MAC-vorming, apoptose" },
      { letter: "D", text: "Receptor binding, cytokine productie, NETose" },
    ],
    correctAnswer: "B",
    category: "Fagocytose",
  },
  {
    id: 2,
    question: "Waar vindt de enzymatische afbraak van micro-organismen plaats tijdens fagocytose?",
    options: [
      { letter: "A", text: "In het cytoplasma" },
      { letter: "B", text: "In het fagolysosoom" },
      { letter: "C", text: "Op het celoppervlak" },
      { letter: "D", text: "In de kern" },
    ],
    correctAnswer: "B",
    category: "Fagocytose",
  },
  {
    id: 3,
    question: "Welk enzym is betrokken bij de productie van hypochlorig zuur (HOCl) in fagocyten?",
    options: [
      { letter: "A", text: "iNOS" },
      { letter: "B", text: "Myeloperoxidase (MPO)" },
      { letter: "C", text: "Collagenase" },
      { letter: "D", text: "Granzyme" },
    ],
    correctAnswer: "B",
    category: "Fagocytose",
  },
  {
    id: 4,
    question: "Welke cellen kunnen restanten van afgebroken micro-organismen uitscheiden?",
    options: [
      { letter: "A", text: "Neutrofiele granulocyten" },
      { letter: "B", text: "Macrofagen" },
      { letter: "C", text: "NK-cellen" },
      { letter: "D", text: "B-cellen" },
    ],
    correctAnswer: "B",
    category: "Macrofaag vs neutrofiel",
  },
  {
    id: 5,
    question: "Wat is NETose?",
    options: [
      { letter: "A", text: "Een vorm van apoptose in macrofagen" },
      { letter: "B", text: "Uitscheiding van DNA door neutrofielen; micro-organismen plakken eraan en worden gedood" },
      { letter: "C", text: "Complementactivering via de alternatieve route" },
      { letter: "D", text: "NK-cel activatie via ADCC" },
    ],
    correctAnswer: "B",
    category: "Macrofaag vs neutrofiel",
  },
  {
    id: 6,
    question: "Waarom worden neutrofiele granulocyten pas naar het weefsel gerekruteerd als het nodig is?",
    options: [
      { letter: "A", text: "Omdat ze te groot zijn" },
      { letter: "B", text: "Hun granula bevatten enzymen die ook schadelijk kunnen zijn voor lichaamseigen cellen" },
      { letter: "C", text: "Omdat ze alleen in het bloed werken" },
      { letter: "D", text: "Omdat ze geen receptoren hebben" },
    ],
    correctAnswer: "B",
    category: "Macrofaag vs neutrofiel",
  },
  {
    id: 7,
    question: "Welke route activeert het complementsysteem via antigeen-antilichaamcomplexen?",
    options: [
      { letter: "A", text: "Alternatieve route" },
      { letter: "B", text: "Klassieke route" },
      { letter: "C", text: "Lectine route" },
      { letter: "D", text: "Inflammatoire route" },
    ],
    correctAnswer: "B",
    category: "Complement",
  },
  {
    id: 8,
    question: "Welke complementcomponent fungeert als opsonine?",
    options: [
      { letter: "A", text: "C5a" },
      { letter: "B", text: "C3b" },
      { letter: "C", text: "C4bC2a" },
      { letter: "D", text: "C9" },
    ],
    correctAnswer: "B",
    category: "Complement",
  },
  {
    id: 9,
    question: "Wat is de functie van C5a?",
    options: [
      { letter: "A", text: "Opsonisatie" },
      { letter: "B", text: "Aantrekken van leukocyten (anafylatoxine)" },
      { letter: "C", text: "Splitsen van C3" },
      { letter: "D", text: "Vormen van MAC" },
    ],
    correctAnswer: "B",
    category: "Complement",
  },
  {
    id: 10,
    question: "Welke complementcomponenten vormen het membraanaanvalscomplex (MAC)?",
    options: [
      { letter: "A", text: "C3a en C3b" },
      { letter: "B", text: "C5 t/m C9" },
      { letter: "C", text: "C1 en C2" },
      { letter: "D", text: "C4bC2a" },
    ],
    correctAnswer: "B",
    category: "Complement",
  },
  {
    id: 11,
    question: "Hoe wordt NK-cel activatie bepaald?",
    options: [
      { letter: "A", text: "Alleen door activerende receptoren" },
      { letter: "B", text: "Door de balans tussen activerende en inhiberende receptoren" },
      { letter: "C", text: "Alleen door MHC I" },
      { letter: "D", text: "Door complementactivering" },
    ],
    correctAnswer: "B",
    category: "NK-cellen",
  },
  {
    id: 12,
    question: "Wat is ADCC?",
    options: [
      { letter: "A", text: "Antigeen-afhankelijke complementactivatie" },
      { letter: "B", text: "Antibody-dependent cellular cytotoxicity; NK-cellen herkennen IgG via Fcγ-receptoren" },
      { letter: "C", text: "Automatische doding van doelwitcellen" },
      { letter: "D", text: "Activering van dendritische cellen" },
    ],
    correctAnswer: "B",
    category: "NK-cellen",
  },
  {
    id: 13,
    question: "Welke twee mechanismen gebruiken NK-cellen en cytotoxische T-cellen om doelwitcellen te doden?",
    options: [
      { letter: "A", text: "Fagocytose en ROS-productie" },
      { letter: "B", text: "FasL-Fas interactie en perforine/granzymen" },
      { letter: "C", text: "NETose en complement" },
      { letter: "D", text: "Cytokine productie en opsonisatie" },
    ],
    correctAnswer: "B",
    category: "NK-cellen",
  },
  {
    id: 14,
    question: "Tot welke tak van de aangeboren immuniteit behoort het complementsysteem?",
    options: [
      { letter: "A", text: "Cellulaire tak" },
      { letter: "B", text: "Humorale tak" },
      { letter: "C", text: "Verworven immuniteit" },
      { letter: "D", text: "Barrière-immuniteit" },
    ],
    correctAnswer: "B",
    category: "Complement",
  },
  {
    id: 15,
    question: "Welke enzymen in neutrofiele granula breken extracellulaire matrix-eiwitten af?",
    options: [
      { letter: "A", text: "Perforine en granzymen" },
      { letter: "B", text: "Collagenase en gelatinase" },
      { letter: "C", text: "MPO en iNOS" },
      { letter: "D", text: "C3 en C5" },
    ],
    correctAnswer: "B",
    category: "Macrofaag vs neutrofiel",
  },
  {
    id: 16,
    question: "Welke cytokinen scheiden NK-cellen uit na activatie?",
    options: [
      { letter: "A", text: "IL-4 en IL-5" },
      { letter: "B", text: "IFNγ en TNFα" },
      { letter: "C", text: "IL-10 en TGF-β" },
      { letter: "D", text: "IL-4 en IL-13" },
    ],
    correctAnswer: "B",
    category: "NK-cellen",
  },
  {
    id: 17,
    question: "Waarom kan een cel met verminderde MHC I-expressie een doelwit worden voor NK-cellen?",
    options: [
      { letter: "A", text: "Omdat MHC I de NK-cel activeert" },
      { letter: "B", text: "MHC I bindt aan inhiberende receptoren; minder MHC I = minder remming = activatie" },
      { letter: "C", text: "Omdat MHC I toxisch is" },
      { letter: "D", text: "Omdat NK-cellen geen MHC I herkennen" },
    ],
    correctAnswer: "B",
    category: "NK-cellen",
  },
  {
    id: 18,
    question: "Welke receptor op NK-cellen herkent het Fc-deel van IgG bij ADCC?",
    options: [
      { letter: "A", text: "TCR" },
      { letter: "B", text: "CD16 (Fcγ-receptor)" },
      { letter: "C", text: "CD4" },
      { letter: "D", text: "TLR" },
    ],
    correctAnswer: "B",
    category: "NK-cellen",
  },
]

// Antibiotica leerlijn questions (18)
const antibioticaLeerlijnQuestions = [
  {
    id: 1,
    question: "Bij welk soort infecties worden antibiotica voorgeschreven?",
    options: [
      { letter: "A", text: "Infecties veroorzaakt door virussen" },
      { letter: "B", text: "Infecties veroorzaakt door bacteriën" },
      { letter: "C", text: "Infecties veroorzaakt door zowel virussen als bacteriën" },
      { letter: "D", text: "Infecties veroorzaakt door schimmels" },
    ],
    correctAnswer: "B",
    category: "Introductie",
  },
  {
    id: 2,
    question: "Sinds wanneer worden antibiotica voorgeschreven?",
    options: [
      { letter: "A", text: "Sinds 1880" },
      { letter: "B", text: "Sinds de Tweede Wereldoorlog" },
      { letter: "C", text: "Sinds de Eerste Wereldoorlog" },
      { letter: "D", text: "Sinds 2000" },
    ],
    correctAnswer: "B",
    category: "Geschiedenis",
  },
  {
    id: 3,
    question: "Wat betekent 'breed spectrum' bij antibiotica?",
    options: [
      { letter: "A", text: "Duurder antibioticum" },
      { letter: "B", text: "Breed werkingsgebied" },
      { letter: "C", text: "Bestrijdt alleen brede bacteriën" },
      { letter: "D", text: "Langere halfwaardetijd" },
    ],
    correctAnswer: "B",
    category: "Classificatie",
  },
  {
    id: 4,
    question: "Welke stelling over antibioticaclassificatie is juist?",
    options: [
      { letter: "A", text: "Penicilline behoort tot de groep amoxicillines" },
      { letter: "B", text: "Amoxicilline behoort tot de groep penicillinen" },
      { letter: "C", text: "Ceftriaxon behoort tot de groep penicillinen" },
      { letter: "D", text: "Co-trimoxazol behoort tot de groep cefalosporinen" },
    ],
    correctAnswer: "B",
    category: "Classificatie",
  },
  {
    id: 5,
    question: "Welke antibiotica behoren tot de bètalactamantibiotica?",
    options: [
      { letter: "A", text: "Alleen amoxicilline" },
      { letter: "B", text: "Amoxicilline, ceftriaxon en meropenem" },
      { letter: "C", text: "Ciprofloxacine en doxycycline" },
      { letter: "D", text: "Alleen meropenem" },
    ],
    correctAnswer: "B",
    category: "Bètalactam",
  },
  {
    id: 6,
    question: "Tot welke antibioticaklasse behoort ceftriaxon?",
    options: [
      { letter: "A", text: "Penicillinen" },
      { letter: "B", text: "Cefalosporinen (3e generatie)" },
      { letter: "C", text: "Carbapenems" },
      { letter: "D", text: "Macroliden" },
    ],
    correctAnswer: "B",
    category: "Bètalactam",
  },
  {
    id: 7,
    question: "Tot welke antibioticaklasse behoort meropenem?",
    options: [
      { letter: "A", text: "Penicillinen" },
      { letter: "B", text: "Carbapenems" },
      { letter: "C", text: "Cefalosporinen" },
      { letter: "D", text: "Chinolonen" },
    ],
    correctAnswer: "B",
    category: "Bètalactam",
  },
  {
    id: 8,
    question: "Wat is het werkingsmechanisme van bètalactamantibiotica?",
    options: [
      { letter: "A", text: "Remming van nucleïnezuursynthese" },
      { letter: "B", text: "Remming van celwandsynthese" },
      { letter: "C", text: "Remming van eiwitsynthese" },
      { letter: "D", text: "Remming van foliumzuurmetabolisme" },
    ],
    correctAnswer: "B",
    category: "Bètalactam",
  },
  {
    id: 9,
    question: "Waarom kunnen bacteriën resistent worden tegen bètalactamantibiotica?",
    options: [
      { letter: "A", text: "Door mutatie van peptidoglycaan" },
      { letter: "B", text: "Door productie van bètalactamases" },
      { letter: "C", text: "Door verandering van celmembraan" },
      { letter: "D", text: "Door verminderde opname" },
    ],
    correctAnswer: "B",
    category: "Bètalactam",
  },
  {
    id: 10,
    question: "Wat wordt bedoeld met de 'discovery void'?",
    options: [
      { letter: "A", text: "Geen nieuwe antibiotica sinds 1928" },
      { letter: "B", text: "Geen nieuwe antibioticaklassen sinds 1987; alleen modificaties" },
      { letter: "C", text: "Geen resistentie meer" },
      { letter: "D", text: "Alle bacteriën zijn resistent" },
    ],
    correctAnswer: "B",
    category: "Geschiedenis",
  },
  {
    id: 11,
    question: "Welke bacterie remde Penicillium in Flemings experiment?",
    options: [
      { letter: "A", text: "Escherichia coli" },
      { letter: "B", text: "Staphylococcus aureus" },
      { letter: "C", text: "Pseudomonas aeruginosa" },
      { letter: "D", text: "Streptococcus pneumoniae" },
    ],
    correctAnswer: "B",
    category: "Geschiedenis",
  },
  {
    id: 12,
    question: "Waarom zijn intracellulaire bacteriën zoals Mycoplasma niet gevoelig voor amoxicilline?",
    options: [
      { letter: "A", text: "Amoxicilline is te zwak" },
      { letter: "B", text: "Amoxicilline bereikt de intracellulaire ruimte niet; macroliden wel" },
      { letter: "C", text: "Mycoplasma heeft geen celwand" },
      { letter: "D", text: "Amoxicilline werkt alleen tegen gram-negatieven" },
    ],
    correctAnswer: "B",
    category: "Spectrum",
  },
  {
    id: 13,
    question: "Welk antibioticum is geschikt voor atypische pneumonie (bijv. Mycoplasma)?",
    options: [
      { letter: "A", text: "Amoxicilline" },
      { letter: "B", text: "Macroliden (bijv. azitromycine)" },
      { letter: "C", text: "Nitrofurantoine" },
      { letter: "D", text: "Flucloxacilline" },
    ],
    correctAnswer: "B",
    category: "Spectrum",
  },
  {
    id: 14,
    question: "Welke factoren spelen een rol bij de antibioticakeuze?",
    options: [
      { letter: "A", text: "Alleen het spectrum" },
      { letter: "B", text: "Lokale resistentiepatronen, toedieningsvorm, allergieën, bijwerkingen, locatie, kosten" },
      { letter: "C", text: "Alleen de kosten" },
      { letter: "D", text: "Alleen de toedieningsvorm" },
    ],
    correctAnswer: "B",
    category: "Antibioticakeuze",
  },
  {
    id: 15,
    question: "Welk antibioticum is geschikt voor anaerobendekking bij geperforeerde appendicitis?",
    options: [
      { letter: "A", text: "Amoxicilline" },
      { letter: "B", text: "Metronidazol" },
      { letter: "C", text: "Nitrofurantoine" },
      { letter: "D", text: "Azitromycine" },
    ],
    correctAnswer: "B",
    category: "Spectrum",
  },
  {
    id: 16,
    question: "Welk antibioticum is een combinatie van penicilline met een bètalactamaseremmer?",
    options: [
      { letter: "A", text: "Amoxicilline alleen" },
      { letter: "B", text: "Amoxicilline-clavulaanzuur" },
      { letter: "C", text: "Ceftriaxon" },
      { letter: "D", text: "Ciprofloxacine" },
    ],
    correctAnswer: "B",
    category: "Bètalactam",
  },
  {
    id: 17,
    question: "Waarom werkt een allergie voor de bètalactamring op alle bètalactamantibiotica?",
    options: [
      { letter: "A", text: "Omdat ze allemaal hetzelfde zijn" },
      { letter: "B", text: "Omdat ze allemaal de bètalactamring bevatten" },
      { letter: "C", text: "Omdat ze allemaal hetzelfde spectrum hebben" },
      { letter: "D", text: "Omdat ze allemaal oraal worden toegediend" },
    ],
    correctAnswer: "B",
    category: "Bètalactam",
  },
  {
    id: 18,
    question: "Welk antibioticum remt de eiwitsynthese via het 30S-ribosomale subunit?",
    options: [
      { letter: "A", text: "Azitromycine (macrolide)" },
      { letter: "B", text: "Doxycycline (tetracycline)" },
      { letter: "C", text: "Ciprofloxacine (chinolon)" },
      { letter: "D", text: "Co-trimoxazol" },
    ],
    correctAnswer: "B",
    category: "Overige klassen",
  },
]

// Introductie antimicrobiële therapie questions (18)
const introductieAntimicrobieleTherapieQuestions = [
  {
    id: 1,
    question: "Welke drie principes kunnen worden toegepast bij de behandeling van infectieziekten?",
    options: [
      { letter: "A", text: "Antibiotica, antivirale middelen, antifungale middelen" },
      { letter: "B", text: "Self-limiting, verwijderen van het focus, replicatie verwekker beïnvloeden" },
      { letter: "C", text: "Drainage, chirurgie, fysiotherapie" },
      { letter: "D", text: "Preventie, vaccinatie, isolatie" },
    ],
    correctAnswer: "B",
    category: "Behandelprincipes",
  },
  {
    id: 2,
    question: "Welke virale infecties behoeven vaak geen behandeling in verder gezonde personen?",
    options: [
      { letter: "A", text: "HIV en hepatitis B" },
      { letter: "B", text: "Influenza (griep) en waterpokken (varicella)" },
      { letter: "C", text: "COVID-19 en Ebola" },
      { letter: "D", text: "Rabies en hondsdolheid" },
    ],
    correctAnswer: "B",
    category: "Self-limiting",
  },
  {
    id: 3,
    question: "Welke bacteriële infectie gaat vaak vanzelf over?",
    options: [
      { letter: "A", text: "Tuberculose" },
      { letter: "B", text: "Diarree veroorzaakt door E. coli" },
      { letter: "C", text: "Meningitis" },
      { letter: "D", text: "Sepsis" },
    ],
    correctAnswer: "B",
    category: "Self-limiting",
  },
  {
    id: 4,
    question: "Waarom hebben patiënten na een stamceltransplantatie een grotere kans op infecties?",
    options: [
      { letter: "A", text: "Door een overactief immuunsysteem" },
      { letter: "B", text: "Door gebruik van immuunsuppressiva en verzwakte afweer" },
      { letter: "C", text: "Door een tekort aan vitamines" },
      { letter: "D", text: "Door een allergie voor medicatie" },
    ],
    correctAnswer: "B",
    category: "Self-limiting",
  },
  {
    id: 5,
    question: "Welke micro-organismen veroorzaken vaker infecties bij immunogecompromitteerde patiënten?",
    options: [
      { letter: "A", text: "Alleen virussen" },
      { letter: "B", text: "Opportunistische micro-organismen" },
      { letter: "C", text: "Alleen bacteriën" },
      { letter: "D", text: "Alleen schimmels" },
    ],
    correctAnswer: "B",
    category: "Self-limiting",
  },
  {
    id: 6,
    question: "Welke aanvullende therapie is vaak nodig bij herpes simplex bij immunogecompromitteerde patiënten?",
    options: [
      { letter: "A", text: "Antibiotica" },
      { letter: "B", text: "Antivirale geneesmiddelen" },
      { letter: "C", text: "Antimycotica" },
      { letter: "D", text: "Alleen verlagen van immuunsuppressiva" },
    ],
    correctAnswer: "B",
    category: "Self-limiting",
  },
  {
    id: 7,
    question: "Wanneer volstaat het verwijderen van het focus van de infectie?",
    options: [
      { letter: "A", text: "Nooit; altijd antibiotica nodig" },
      { letter: "B", text: "Soms, bijvoorbeeld door drainage van een abces" },
      { letter: "C", text: "Alleen bij virale infecties" },
      { letter: "D", text: "Alleen bij chronische infecties" },
    ],
    correctAnswer: "B",
    category: "Focus",
  },
  {
    id: 8,
    question: "Wat is een voorbeeld van het verwijderen van het focus van een infectie?",
    options: [
      { letter: "A", text: "Het geven van paracetamol" },
      { letter: "B", text: "Drainage van een abces" },
      { letter: "C", text: "Bedrust voorschrijven" },
      { letter: "D", text: "Vaccinatie" },
    ],
    correctAnswer: "B",
    category: "Focus",
  },
  {
    id: 9,
    question: "Hoe werkt effectieve antimicrobiële therapie door bacteriële replicatie te verstoren?",
    options: [
      { letter: "A", text: "Door het immuunsysteem te stimuleren" },
      { letter: "B", text: "Door het metabolisme van de cel te stoppen, zodat deze niet meer kan functioneren of repliceren" },
      { letter: "C", text: "Door de temperatuur te verlagen" },
      { letter: "D", text: "Door de bloedbaan te filteren" },
    ],
    correctAnswer: "B",
    category: "Replicatie",
  },
  {
    id: 10,
    question: "Welke twee methoden worden genoemd om bacteriën te bestrijden?",
    options: [
      { letter: "A", text: "Vaccinatie en isolatie" },
      { letter: "B", text: "Antimicrobiële geneesmiddelen (zoals antibiotica) en bacteriofagen" },
      { letter: "C", text: "Fysiotherapie en dieet" },
      { letter: "D", text: "Chirurgie en radiotherapie" },
    ],
    correctAnswer: "B",
    category: "Replicatie",
  },
  {
    id: 11,
    question: "Waarom is faagtherapie (bacteriofagen) nog geen gangbare therapie in de westerse geneeskunde?",
    options: [
      { letter: "A", text: "Omdat het te goedkoop is" },
      { letter: "B", text: "Er zitten veel haken en ogen aan; het is nog niet standaard" },
      { letter: "C", text: "Omdat bacteriofagen niet bestaan" },
      { letter: "D", text: "Omdat het alleen bij virussen werkt" },
    ],
    correctAnswer: "B",
    category: "Replicatie",
  },
  {
    id: 12,
    question: "Tot welk type antimicrobiële middelen behoren antibiotica?",
    options: [
      { letter: "A", text: "Antiviraal" },
      { letter: "B", text: "Antibacterieel" },
      { letter: "C", text: "Antifungale" },
      { letter: "D", text: "Antiparasitair" },
    ],
    correctAnswer: "B",
    category: "Middelen",
  },
  {
    id: 13,
    question: "Welke verwekker wordt behandeld met antimycotica?",
    options: [
      { letter: "A", text: "Staphylococcus aureus" },
      { letter: "B", text: "Candida albicans en Aspergillus fumigatus" },
      { letter: "C", text: "Influenzavirus" },
      { letter: "D", text: "Plasmodium falciparum" },
    ],
    correctAnswer: "B",
    category: "Middelen",
  },
  {
    id: 14,
    question: "Welke verwekker wordt behandeld met antiparasitaire therapie?",
    options: [
      { letter: "A", text: "Herpes simplex" },
      { letter: "B", text: "Plasmodium falciparum (malaria) en Giardia lamblia" },
      { letter: "C", text: "Pneumokok" },
      { letter: "D", text: "Candida albicans" },
    ],
    correctAnswer: "B",
    category: "Middelen",
  },
  {
    id: 15,
    question: "Wat gebeurt er bij gebruik van antimicrobiële middelen met resistente micro-organismen?",
    options: [
      { letter: "A", text: "Ze gaan allemaal dood" },
      { letter: "B", text: "Ze hebben een voordeel en kunnen overleven; onder selectiedruk kunnen ze uitgroeien en zich verspreiden" },
      { letter: "C", text: "Ze worden gevoeliger" },
      { letter: "D", text: "Er is geen effect" },
    ],
    correctAnswer: "B",
    category: "Resistentie",
  },
  {
    id: 16,
    question: "Wat is selectiedruk in het kader van antimicrobiële resistentie?",
    options: [
      { letter: "A", text: "De druk om snel te genezen" },
      { letter: "B", text: "De druk waarbij gevoelige organismen doodgaan en resistente organismen overleven en zich kunnen verspreiden" },
      { letter: "C", text: "De druk van de patiënt om antibiotica te krijgen" },
      { letter: "D", text: "De druk om goedkope middelen te gebruiken" },
    ],
    correctAnswer: "B",
    category: "Resistentie",
  },
  {
    id: 17,
    question: "Welke rol speelt het immuunsysteem bij self-limiting infecties?",
    options: [
      { letter: "A", text: "Geen rol" },
      { letter: "B", text: "Een grote rol; infecties gaan vaak vanzelf over met ondersteuning van het immuunsysteem" },
      { letter: "C", text: "Alleen bij virale infecties" },
      { letter: "D", text: "Alleen bij bacteriële infecties" },
    ],
    correctAnswer: "B",
    category: "Self-limiting",
  },
  {
    id: 18,
    question: "Kunnen infecties die ingreep vereisen altijd met antibiotica worden behandeld?",
    options: [
      { letter: "A", text: "Ja, altijd" },
      { letter: "B", text: "Nee; soms volstaat het verwijderen van het focus (bijv. drainage)" },
      { letter: "C", text: "Alleen virale infecties niet" },
      { letter: "D", text: "Nee, nooit met antibiotica" },
    ],
    correctAnswer: "B",
    category: "Behandelprincipes",
  },
]

// Urineweginfecties questions (18)
const urineweginfectiesQuestions = [
  {
    id: 1,
    question: "Wat is de definitie van significante bacteriurie?",
    options: [
      { letter: "A", text: "Elke aanwezigheid van bacteriën in de urine" },
      { letter: "B", text: "Minimaal 10⁵ kve/ml urine" },
      { letter: "C", text: "Bacteriën in de blaas" },
      { letter: "D", text: "Bacteriën in de nieren" },
    ],
    correctAnswer: "B",
    category: "Begrippen",
  },
  {
    id: 2,
    question: "Wat is het verschil tussen asymptomatische bacteriurie en cystitis?",
    options: [
      { letter: "A", text: "Cystitis heeft minder bacteriën" },
      { letter: "B", text: "Cystitis heeft klachten of tekenen van infectie; asymptomatische bacteriurie niet" },
      { letter: "C", text: "Asymptomatische bacteriurie is ernstiger" },
      { letter: "D", text: "Er is geen verschil" },
    ],
    correctAnswer: "B",
    category: "Begrippen",
  },
  {
    id: 3,
    question: "Wat is urosepsis?",
    options: [
      { letter: "A", text: "Blaasontsteking" },
      { letter: "B", text: "Uropathogenen in de bloedbaan; levensbedreigend" },
      { letter: "C", text: "Nierbekkenontsteking" },
      { letter: "D", text: "Asymptomatische bacteriurie" },
    ],
    correctAnswer: "B",
    category: "Begrippen",
  },
  {
    id: 4,
    question: "Waarom hebben vrouwen vaker urineweginfecties dan mannen?",
    options: [
      { letter: "A", text: "Ze zijn meer seksueel actief" },
      { letter: "B", text: "Ze hebben een kortere urethra; bacteriën bereiken sneller de blaas" },
      { letter: "C", text: "Ze hebben een grotere blaas" },
      { letter: "D", text: "Ze urineren minder frequent" },
    ],
    correctAnswer: "B",
    category: "Pathogenese",
  },
  {
    id: 5,
    question: "Wat is de belangrijkste reden voor meer urineweginfecties bij oudere mannen?",
    options: [
      { letter: "A", text: "Kortere urethra" },
      { letter: "B", text: "Obstructie van de urethra (prostaatvergroting)" },
      { letter: "C", text: "Slecht functionerende blaascontractie" },
      { letter: "D", text: "Kolonisatie van de urethra" },
    ],
    correctAnswer: "B",
    category: "Pathogenese",
  },
  {
    id: 6,
    question: "Welke bacteriën veroorzaken het overgrote deel van urineweginfecties?",
    options: [
      { letter: "A", text: "Virussen" },
      { letter: "B", text: "Gram-negatieve staven uit de darm (E. coli, Klebsiella, Proteus)" },
      { letter: "C", text: "Schimmels" },
      { letter: "D", text: "Parasieten" },
    ],
    correctAnswer: "B",
    category: "Pathogenese",
  },
  {
    id: 7,
    question: "Wat is een retentieblaas?",
    options: [
      { letter: "A", text: "Een blaas met veel urine" },
      { letter: "B", text: "Een blaas met residu (urine die achterblijft na lediging)" },
      { letter: "C", text: "Een geïnfecteerde blaas" },
      { letter: "D", text: "Een blaas met stenen" },
    ],
    correctAnswer: "B",
    category: "Pathogenese",
  },
  {
    id: 8,
    question: "Welke klacht past bij cystitis?",
    options: [
      { letter: "A", text: "Koorts en koude rillingen" },
      { letter: "B", text: "Dysurie (pijnlijke/branderige mictie)" },
      { letter: "C", text: "Flankpijn" },
      { letter: "D", text: "Acute verwardheid" },
    ],
    correctAnswer: "B",
    category: "Klachten",
  },
  {
    id: 9,
    question: "Waarom moet je bij kleine kinderen met koorts >3 dagen aan cystitis denken?",
    options: [
      { letter: "A", text: "Omdat ze altijd cystitis hebben" },
      { letter: "B", text: "Ze kunnen 'pijn bij plassen' niet aangeven; symptomen zijn vaak onduidelijk" },
      { letter: "C", text: "Omdat ze vaker plassen" },
      { letter: "D", text: "Omdat ze een kortere urethra hebben" },
    ],
    correctAnswer: "B",
    category: "Klachten",
  },
  {
    id: 10,
    question: "Welke symptomen zijn tekenen van weefselinvasie?",
    options: [
      { letter: "A", text: "Alleen dysurie" },
      { letter: "B", text: "Koorts, flankpijn, malaise, koude rillingen, acute verwardheid" },
      { letter: "C", text: "Alleen pollakisurie" },
      { letter: "D", text: "Alleen hematurie" },
    ],
    correctAnswer: "B",
    category: "Klachten",
  },
  {
    id: 11,
    question: "Welke groepen behoren tot de risicogroepen voor gecompliceerd beloop?",
    options: [
      { letter: "A", text: "Alleen mannen" },
      { letter: "B", text: "Zwangeren, mannen, kinderen <12 jaar, diabetes, afwijkingen nieren/urinewegen" },
      { letter: "C", text: "Alleen vrouwen" },
      { letter: "D", text: "Alleen ouderen" },
    ],
    correctAnswer: "B",
    category: "Diagnostiek",
  },
  {
    id: 12,
    question: "Wanneer is lichamelijk onderzoek geïndiceerd bij UWI-klachten?",
    options: [
      { letter: "A", text: "Altijd" },
      { letter: "B", text: "Bij vrouwen met recidiverende UWI (≥3/jaar), mannen, kinderen, koorts of tekenen van weefselinvasie" },
      { letter: "C", text: "Nooit" },
      { letter: "D", text: "Alleen bij hematurie" },
    ],
    correctAnswer: "B",
    category: "Diagnostiek",
  },
  {
    id: 13,
    question: "Wat betekent een positieve nitriettest op de urinestick?",
    options: [
      { letter: "A", text: "Geen urineweginfectie" },
      { letter: "B", text: "Sterke aanwijzing voor uropathogenen in de urine" },
      { letter: "C", text: "Alleen leukocyten" },
      { letter: "D", text: "Schimmelinfectie" },
    ],
    correctAnswer: "B",
    category: "Diagnostiek",
  },
  {
    id: 14,
    question: "Hoe moet urine worden afgenomen voor kweek?",
    options: [
      { letter: "A", text: "In elk potje" },
      { letter: "B", text: "Midstream urine (gewassen plas): eerst beetje in toilet, daarna opvangen in steriel potje" },
      { letter: "C", text: "Eerste straal" },
      { letter: "D", text: "Na antibioticagebruik" },
    ],
    correctAnswer: "B",
    category: "Diagnostiek",
  },
  {
    id: 15,
    question: "Welke antibiotica zijn eerste keus bij ongecompliceerde cystitis?",
    options: [
      { letter: "A", text: "Ceftriaxon" },
      { letter: "B", text: "Nitrofurantoine of trimethoprim" },
      { letter: "C", text: "Aminoglycosiden" },
      { letter: "D", text: "Metronidazol" },
    ],
    correctAnswer: "B",
    category: "Behandeling",
  },
  {
    id: 16,
    question: "Waarom kunnen nitrofurantoine en trimethoprim niet bij weefselinvasie worden gebruikt?",
    options: [
      { letter: "A", text: "Ze zijn te duur" },
      { letter: "B", text: "Ze penetreren slecht in weefsels" },
      { letter: "C", text: "Ze werken niet tegen E. coli" },
      { letter: "D", text: "Ze geven altijd allergie" },
    ],
    correctAnswer: "B",
    category: "Behandeling",
  },
  {
    id: 17,
    question: "Hoe worden antibiotica bij urosepsis toegediend?",
    options: [
      { letter: "A", text: "Oraal" },
      { letter: "B", text: "Intraveneus; vaak combinatietherapie (bijv. ceftriaxon + aminoglycoside)" },
      { letter: "C", text: "Lokaal" },
      { letter: "D", text: "Via inhalatie" },
    ],
    correctAnswer: "B",
    category: "Behandeling",
  },
  {
    id: 18,
    question: "Is afwachtend beleid mogelijk bij gezonde, niet-zwangere vrouwen met cystitis?",
    options: [
      { letter: "A", text: "Nee, altijd direct antibiotica" },
      { letter: "B", text: "Ja; UWI genezen vaak binnen een week vanzelf; advies: veel drinken" },
      { letter: "C", text: "Alleen bij koorts" },
      { letter: "D", text: "Alleen bij hematurie" },
    ],
    correctAnswer: "B",
    category: "Behandeling",
  },
]

// Infectiepreventie questions (18)
const infectiepreventieQuestions = [
  {
    id: 1,
    question: "Welke wet regelt onder meer infectieziektenbestrijding en surveillance in Nederland?",
    options: [
      { letter: "A", text: "Wet op de geneeskundige behandelingsovereenkomst (WGBO)" },
      { letter: "B", text: "Wet op de publieke gezondheid (2008)" },
      { letter: "C", text: "Wet medisch-wetenschappelijk onderzoek" },
      { letter: "D", text: "Wet op de beroepen in de individuele gezondheidszorg (BIG)" },
    ],
    correctAnswer: "B",
    category: "Wetgeving",
  },
  {
    id: 2,
    question: "Wat is de verantwoordelijkheid van het Infectiepreventie team in een ziekenhuis?",
    options: [
      { letter: "A", text: "Alleen handhygiëne controleren" },
      { letter: "B", text: "Beleid en richtlijnen; surveillance; uitbraakmanagement; onderwijs" },
      { letter: "C", text: "Alleen nationale richtlijnen opstellen" },
      { letter: "D", text: "Alleen inspecties uitvoeren" },
    ],
    correctAnswer: "B",
    category: "Wetgeving",
  },
  {
    id: 3,
    question: "Wat is het verschil tussen contaminatie en kolonisatie?",
    options: [
      { letter: "A", text: "Er is geen verschil" },
      { letter: "B", text: "Contaminatie = op oppervlakken/materialen; kolonisatie = vestigen op/in lichaam zonder ziekte" },
      { letter: "C", text: "Kolonisatie is ernstiger dan contaminatie" },
      { letter: "D", text: "Contaminatie veroorzaakt altijd infectie" },
    ],
    correctAnswer: "B",
    category: "Definities",
  },
  {
    id: 4,
    question: "Wanneer spreek je van een nosocomiale infectie?",
    options: [
      { letter: "A", text: "Elke infectie in een ziekenhuis" },
      { letter: "B", text: "Infectie ontstaan tijdens of als gevolg van verblijf in ziekenhuis/zorginstelling; niet aanwezig of in incubatiefase bij opname" },
      { letter: "C", text: "Alleen infecties door MRSA" },
      { letter: "D", text: "Infectie die van buiten het ziekenhuis komt" },
    ],
    correctAnswer: "B",
    category: "Definities",
  },
  {
    id: 5,
    question: "Wat is een endogene bron van infectie?",
    options: [
      { letter: "A", text: "Micro-organismen van buiten het lichaam (omgeving, andere personen)" },
      { letter: "B", text: "Micro-organismen al aanwezig in/op het lichaam (huidflora, darmbacteriën)" },
      { letter: "C", text: "Besmette chirurgische instrumenten" },
      { letter: "D", text: "Norovirus in de omgeving" },
    ],
    correctAnswer: "B",
    category: "Definities",
  },
  {
    id: 6,
    question: "Wat is het verschil tussen directe en indirecte transmissie?",
    options: [
      { letter: "A", text: "Directe = via lucht; indirecte = via contact" },
      { letter: "B", text: "Directe = direct van persoon op persoon; indirecte = via tussenliggende drager (voorwerpen, voedsel)" },
      { letter: "C", text: "Er is geen verschil" },
      { letter: "D", text: "Indirecte is altijd ernstiger" },
    ],
    correctAnswer: "B",
    category: "Definities",
  },
  {
    id: 7,
    question: "Hoeveel momenten van handhygiëne zijn er volgens de WHO?",
    options: [
      { letter: "A", text: "Drie" },
      { letter: "B", text: "Vier" },
      { letter: "C", text: "Vijf" },
      { letter: "D", text: "Zes" },
    ],
    correctAnswer: "C",
    category: "Handhygiëne",
  },
  {
    id: 8,
    question: "Wanneer moet handhygiëne worden uitgevoerd volgens de vijf momenten?",
    options: [
      { letter: "A", text: "Alleen na contact met een patiënt" },
      { letter: "B", text: "Voor contact met patiënt; voor aseptische handeling; na blootstelling aan lichaamsvloeistoffen; na contact met patiënt; na contact met directe omgeving van patiënt" },
      { letter: "C", text: "Alleen voor en na operaties" },
      { letter: "D", text: "Alleen bij besmettelijke patiënten" },
    ],
    correctAnswer: "B",
    category: "Handhygiëne",
  },
  {
    id: 9,
    question: "Wat is asepsis?",
    options: [
      { letter: "A", text: "Het doden van alle micro-organismen op oppervlakken" },
      { letter: "B", text: "Voorkomen van besmetting van steriele lichaamsgebieden, wonden en medische hulpmiddelen" },
      { letter: "C", text: "Het reinigen van handen" },
      { letter: "D", text: "Isolatie van besmettelijke patiënten" },
    ],
    correctAnswer: "B",
    category: "Handhygiëne",
  },
  {
    id: 10,
    question: "Welke transmissieroute heeft kinkhoest (Bordetella pertussis)?",
    options: [
      { letter: "A", text: "Contact" },
      { letter: "B", text: "Druppel (via grote druppels bij hoesten/niezen)" },
      { letter: "C", text: "Aërogeen" },
      { letter: "D", text: "Alleen via bloed" },
    ],
    correctAnswer: "B",
    category: "Transmissieroutes",
  },
  {
    id: 11,
    question: "Welke transmissieroute heeft tuberculose (TBC)?",
    options: [
      { letter: "A", text: "Contact" },
      { letter: "B", text: "Druppel" },
      { letter: "C", text: "Aërogeen (via kleine druppeltjes die lang in de lucht blijven)" },
      { letter: "D", text: "Alleen via voedsel" },
    ],
    correctAnswer: "C",
    category: "Transmissieroutes",
  },
  {
    id: 12,
    question: "Welke transmissieroute heeft MRSA?",
    options: [
      { letter: "A", text: "Contact (direct of indirect)" },
      { letter: "B", text: "Druppel" },
      { letter: "C", text: "Aërogeen" },
      { letter: "D", text: "Alleen via bloed" },
    ],
    correctAnswer: "A",
    category: "Transmissieroutes",
  },
  {
    id: 13,
    question: "Welke isolatiemaatregelen zijn nodig bij druppeltransmissie (bijv. kinkhoest)?",
    options: [
      { letter: "A", text: "Alleen handhygiëne" },
      { letter: "B", text: "Mondneusmasker, handschoenen, schort; handhygiëne; patiënt in eenpersoonskamer of cohort" },
      { letter: "C", text: "FFP2-masker en negatief druk kamer" },
      { letter: "D", text: "Geen speciale maatregelen" },
    ],
    correctAnswer: "B",
    category: "Isolatiemaatregelen",
  },
  {
    id: 14,
    question: "Welke isolatiemaatregelen zijn nodig bij aërogene transmissie (bijv. TBC)?",
    options: [
      { letter: "A", text: "Alleen handschoenen" },
      { letter: "B", text: "FFP2-masker; negatief druk kamer; handhygiëne; beperkt bezoek" },
      { letter: "C", text: "Mondneusmasker volstaat" },
      { letter: "D", text: "Geen speciale maatregelen" },
    ],
    correctAnswer: "B",
    category: "Isolatiemaatregelen",
  },
  {
    id: 15,
    question: "Wat is het verschil tussen reiniging, desinfectie en sterilisatie?",
    options: [
      { letter: "A", text: "Er is geen verschil" },
      { letter: "B", text: "Reiniging = verwijderen vuil; desinfectie = doden ziekteverwekkers; sterilisatie = doden alle micro-organismen inclusief sporen" },
      { letter: "C", text: "Sterilisatie is hetzelfde als desinfectie" },
      { letter: "D", text: "Reiniging doodt alle bacteriën" },
    ],
    correctAnswer: "B",
    category: "Reiniging en desinfectie",
  },
  {
    id: 16,
    question: "Welke instantie houdt toezicht op de naleving van infectiepreventierichtlijnen in zorginstellingen?",
    options: [
      { letter: "A", text: "RIVM" },
      { letter: "B", text: "IGJ (Inspectie Gezondheidszorg en Jeugd)" },
      { letter: "C", text: "GGD" },
      { letter: "D", text: "Nederlandse Vereniging voor Medische Microbiologie" },
    ],
    correctAnswer: "B",
    category: "Wetgeving",
  },
  {
    id: 17,
    question: "Een longontsteking bij een ICU-patiënt met beademing, veroorzaakt door eigen darmbacteriën die via de endotracheale tube de longen bereiken, is een voorbeeld van:",
    options: [
      { letter: "A", text: "Exogene infectie met directe transmissie" },
      { letter: "B", text: "Endogene infectie met indirecte transmissie" },
      { letter: "C", text: "Kolonisatie" },
      { letter: "D", text: "Contaminatie" },
    ],
    correctAnswer: "B",
    category: "Definities",
  },
  {
    id: 18,
    question: "Norovirusuitbraak op een afdeling door besmette handen van zorgmedewerkers: welke bron en transmissie?",
    options: [
      { letter: "A", text: "Endogeen, indirect" },
      { letter: "B", text: "Exogeen, direct (via handen)" },
      { letter: "C", text: "Endogeen, direct" },
      { letter: "D", text: "Exogeen, alleen via voedsel" },
    ],
    correctAnswer: "B",
    category: "Definities",
  },
]

// Introductie luchtweginfecties questions (18)
const introductieLuchtweginfectiesQuestions = [
  {
    id: 1,
    question: "Welke structuren behoren tot de onderste luchtwegen?",
    options: [
      { letter: "A", text: "Neus, keel en strottenhoofd" },
      { letter: "B", text: "Luchtpijp, bronchiën en longweefsel (longblaasjes)" },
      { letter: "C", text: "Alleen de neus" },
      { letter: "D", text: "Alleen de keel" },
    ],
    correctAnswer: "B",
    category: "Anatomie",
  },
  {
    id: 2,
    question: "Welke virussen zijn de belangrijkste verwekkers van bronchiolitis?",
    options: [
      { letter: "A", text: "Alleen influenza" },
      { letter: "B", text: "RSV, Humaan Metapneumovirus, Adenovirus, Bocavirus, Parainfluenzavirus" },
      { letter: "C", text: "Alleen Streptococcus pneumoniae" },
      { letter: "D", text: "Alleen Mycoplasma pneumoniae" },
    ],
    correctAnswer: "B",
    category: "Verwekkers",
  },
  {
    id: 3,
    question: "Welke bacteriën zijn de meest voorkomende verwekkers van een typische pneumonie?",
    options: [
      { letter: "A", text: "Pseudomonas aeruginosa en Klebsiella" },
      { letter: "B", text: "Streptococcus pneumoniae, Haemophilus influenzae en Moraxella catarrhalis" },
      { letter: "C", text: "Alleen Staphylococcus aureus" },
      { letter: "D", text: "Alleen Mycoplasma pneumoniae" },
    ],
    correctAnswer: "B",
    category: "Verwekkers",
  },
  {
    id: 4,
    question: "Bij welke patiëntengroep treedt bronchiolitis meestal op?",
    options: [
      { letter: "A", text: "Alleen volwassenen" },
      { letter: "B", text: "Kinderen onder de twee jaar; zuigelingen onder zes maanden ernstiger" },
      { letter: "C", text: "Alleen adolescenten" },
      { letter: "D", text: "Alleen ouderen" },
    ],
    correctAnswer: "B",
    category: "Kliniek",
  },
  {
    id: 5,
    question: "Welke klinische verschijnselen passen bij bronchiolitis?",
    options: [
      { letter: "A", text: "Plotselinge hoge koorts en thoracale pijn" },
      { letter: "B", text: "Forse rhinorroe, tachy-dyspnoe, hoesten; hoge koorts ongebruikelijk; piepende en ratelende bijgeluiden" },
      { letter: "C", text: "Alleen hoofdpijn en myalgie" },
      { letter: "D", text: "Alleen hematurie" },
    ],
    correctAnswer: "B",
    category: "Kliniek",
  },
  {
    id: 6,
    question: "Welke verwekker past bij een zuigeling van 5–14 dagen met pussende conjunctivitis en pneumonie?",
    options: [
      { letter: "A", text: "RSV" },
      { letter: "B", text: "Chlamydophila trachomatis" },
      { letter: "C", text: "Streptococcus pneumoniae" },
      { letter: "D", text: "Influenzavirus" },
    ],
    correctAnswer: "B",
    category: "Kliniek",
  },
  {
    id: 7,
    question: "Is standaard bloedonderzoek (CRP, leukocyten) geïndiceerd bij een ongecompliceerde onderste luchtweginfectie?",
    options: [
      { letter: "A", text: "Ja, altijd" },
      { letter: "B", text: "Nee; differentieert onvoldoende tussen viraal en bacterieel" },
      { letter: "C", text: "Alleen bij koorts" },
      { letter: "D", text: "Alleen bij kinderen onder 1 jaar" },
    ],
    correctAnswer: "B",
    category: "Diagnostiek",
  },
  {
    id: 8,
    question: "Wanneer zijn antibiotica geïndiceerd bij bronchiolitis?",
    options: [
      { letter: "A", text: "Altijd" },
      { letter: "B", text: "Alleen bij sterke verdenking op bacteriële superinfectie" },
      { letter: "C", text: "Alleen bij koorts" },
      { letter: "D", text: "Nooit" },
    ],
    correctAnswer: "B",
    category: "Therapie",
  },
  {
    id: 9,
    question: "Wat is de eerste keus antibiotica bij een ongecompliceerde pneumonie?",
    options: [
      { letter: "A", text: "Cefuroxim" },
      { letter: "B", text: "Amoxicilline" },
      { letter: "C", text: "Gentamicine" },
      { letter: "D", text: "Metronidazol" },
    ],
    correctAnswer: "B",
    category: "Therapie",
  },
  {
    id: 10,
    question: "Welke antibiotica zijn eerste keus bij bewezen of sterke verdenking op Mycoplasma pneumoniae?",
    options: [
      { letter: "A", text: "Amoxicilline" },
      { letter: "B", text: "Azitromycine of claritromycine" },
      { letter: "C", text: "Gentamicine" },
      { letter: "D", text: "Metronidazol" },
    ],
    correctAnswer: "B",
    category: "Therapie",
  },
  {
    id: 11,
    question: "Wanneer is oseltamivir geïndiceerd bij influenza?",
    options: [
      { letter: "A", text: "Altijd bij elke influenza" },
      { letter: "B", text: "Binnen 48 uur na aanvang klachten bij dreigende respiratoire insufficiëntie" },
      { letter: "C", text: "Alleen bij bacteriële superinfectie" },
      { letter: "D", text: "Nooit" },
    ],
    correctAnswer: "B",
    category: "Therapie",
  },
  {
    id: 12,
    question: "Door welke verwekker wordt kinkhoest meestal veroorzaakt?",
    options: [
      { letter: "A", text: "RSV" },
      { letter: "B", text: "Bordetella pertussis" },
      { letter: "C", text: "Mycoplasma pneumoniae" },
      { letter: "D", text: "Streptococcus pneumoniae" },
    ],
    correctAnswer: "B",
    category: "Kinkhoest",
  },
  {
    id: 13,
    question: "Welke fase van kinkhoest wordt gekenmerkt door verstikkende hoestbuien en gierende inspiratie?",
    options: [
      { letter: "A", text: "Catarrale fase" },
      { letter: "B", text: "Paroxysmale fase" },
      { letter: "C", text: "Reconvalescentiefase" },
      { letter: "D", text: "Incubatiefase" },
    ],
    correctAnswer: "B",
    category: "Kinkhoest",
  },
  {
    id: 14,
    question: "Welke antibiotica zijn geïndiceerd bij kinkhoest?",
    options: [
      { letter: "A", text: "Amoxicilline" },
      { letter: "B", text: "Macroliden (azitromycine of claritromycine)" },
      { letter: "C", text: "Gentamicine" },
      { letter: "D", text: "Geen antibiotica" },
    ],
    correctAnswer: "B",
    category: "Kinkhoest",
  },
  {
    id: 15,
    question: "Wanneer spreek je van een gecompliceerde onderste luchtweginfectie?",
    options: [
      { letter: "A", text: "Bij elke pneumonie" },
      { letter: "B", text: "Bij longabces, pleura-empyeem, aspiratie of HAP (begin ≥48 uur na opname)" },
      { letter: "C", text: "Alleen bij koorts" },
      { letter: "D", text: "Alleen bij kinderen onder 1 jaar" },
    ],
    correctAnswer: "B",
    category: "Gecompliceerd",
  },
  {
    id: 16,
    question: "Welke verwekkers komen vaker voor bij een HAP (hospital acquired pneumonia)?",
    options: [
      { letter: "A", text: "Alleen virussen" },
      { letter: "B", text: "Pseudomonas aeruginosa, Klebsiella pneumoniae, Staphylococcus aureus" },
      { letter: "C", text: "Alleen Mycoplasma pneumoniae" },
      { letter: "D", text: "Alleen Streptococcus pneumoniae" },
    ],
    correctAnswer: "B",
    category: "Gecompliceerd",
  },
  {
    id: 17,
    question: "Welke longkwab is bij een aspiratiepneumonie vaker aangedaan en waarom?",
    options: [
      { letter: "A", text: "Linker onderkwab: anatomische positie" },
      { letter: "B", text: "Rechter onderkwab: door de hoek van de hoofdbronchi" },
      { letter: "C", text: "Beide even vaak" },
      { letter: "D", text: "Alleen de bovenkwabben" },
    ],
    correctAnswer: "B",
    category: "Gecompliceerd",
  },
  {
    id: 18,
    question: "Is kinkhoest een meldingsplichtige ziekte?",
    options: [
      { letter: "A", text: "Nee" },
      { letter: "B", text: "Ja" },
      { letter: "C", text: "Alleen bij kinderen" },
      { letter: "D", text: "Alleen bij ernstige gevallen" },
    ],
    correctAnswer: "B",
    category: "Kinkhoest",
  },
]

// Microscopische anatomie luchtwegen questions (18)
const microscopischeAnatomieLuchtwegenQuestions = [
  {
    id: 1,
    question: "Waar begint de respiratoire zone van de luchtwegen?",
    options: [
      { letter: "A", text: "Bij de neus" },
      { letter: "B", text: "Bij de trachea" },
      { letter: "C", text: "Bij de respiratoire bronchioli" },
      { letter: "D", text: "Bij de alveoli alleen" },
    ],
    correctAnswer: "C",
    category: "Zones",
  },
  {
    id: 2,
    question: "Welke laag van de luchtwegwand bevat klierweefsel dat slijm uitscheidt?",
    options: [
      { letter: "A", text: "Mucosa" },
      { letter: "B", text: "Submucosa" },
      { letter: "C", text: "Adventitia" },
      { letter: "D", text: "Kraakbeen" },
    ],
    correctAnswer: "B",
    category: "Wand",
  },
  {
    id: 3,
    question: "Welke cellen in het respiratoir epitheel produceren slijm?",
    options: [
      { letter: "A", text: "Cilindrische cellen met cilia" },
      { letter: "B", text: "Slijmbekercellen (goblet cellen)" },
      { letter: "C", text: "Basale cellen" },
      { letter: "D", text: "Neuro-endocriene cellen" },
    ],
    correctAnswer: "B",
    category: "Epitheel",
  },
  {
    id: 4,
    question: "Waar bevindt zich de musculus trachealis?",
    options: [
      { letter: "A", text: "Aan de ventrale zijde van de trachea" },
      { letter: "B", text: "Aan de dorsale zijde van de trachea" },
      { letter: "C", text: "In de bronchioli" },
      { letter: "D", text: "In de alveoli" },
    ],
    correctAnswer: "B",
    category: "Trachea",
  },
  {
    id: 5,
    question: "Welke cellen produceren surfactant in de bronchioli?",
    options: [
      { letter: "A", text: "Slijmbekercellen" },
      { letter: "B", text: "Club cellen (Clara cellen)" },
      { letter: "C", text: "Type I pneumocyten" },
      { letter: "D", text: "Alveolaire macrofagen" },
    ],
    correctAnswer: "B",
    category: "Bronchioli",
  },
  {
    id: 6,
    question: "Wat is het verschil tussen bronchi en bronchioli qua ondersteunend weefsel?",
    options: [
      { letter: "A", text: "Beide bevatten kraakbeen" },
      { letter: "B", text: "Bronchi bevatten kraakbeen; bronchioli niet" },
      { letter: "C", text: "Beide bevatten geen kraakbeen" },
      { letter: "D", text: "Alleen bronchioli bevatten kraakbeen" },
    ],
    correctAnswer: "B",
    category: "Bronchi",
  },
  {
    id: 7,
    question: "Welke cellen zijn verantwoordelijk voor gaswisseling in de alveoli?",
    options: [
      { letter: "A", text: "Type II pneumocyten" },
      { letter: "B", text: "Type I pneumocyten" },
      { letter: "C", text: "Alveolaire macrofagen" },
      { letter: "D", text: "Club cellen" },
    ],
    correctAnswer: "B",
    category: "Alveoli",
  },
  {
    id: 8,
    question: "Welke cellen produceren surfactant in de alveoli?",
    options: [
      { letter: "A", text: "Type I pneumocyten" },
      { letter: "B", text: "Type II pneumocyten" },
      { letter: "C", text: "Alveolaire macrofagen" },
      { letter: "D", text: "Endotheelcellen" },
    ],
    correctAnswer: "B",
    category: "Alveoli",
  },
  {
    id: 9,
    question: "Wat is de functie van surfactant?",
    options: [
      { letter: "A", text: "Gaswisseling" },
      { letter: "B", text: "Verlagen van de oppervlaktespanning om alveoli open te houden" },
      { letter: "C", text: "Fagocytose van bacteriën" },
      { letter: "D", text: "Transport van slijm" },
    ],
    correctAnswer: "B",
    category: "Alveoli",
  },
  {
    id: 10,
    question: "Welke epitheliale cellen bevat de bronchus?",
    options: [
      { letter: "A", text: "Alleen plaveiselepitheel" },
      { letter: "B", text: "Slijmbekercellen, cilindrische trilhaardragende cellen en basale cellen" },
      { letter: "C", text: "Alleen endotheel" },
      { letter: "D", text: "Alleen mesotheel" },
    ],
    correctAnswer: "B",
    category: "Epitheel",
  },
  {
    id: 11,
    question: "Welke structuren van het luchtgeleidingssysteem bevatten cilia?",
    options: [
      { letter: "A", text: "Alleen alveoli" },
      { letter: "B", text: "Trachea, bronchi en bronchioli" },
      { letter: "C", text: "Alleen mesotheel" },
      { letter: "D", text: "Alleen pleura" },
    ],
    correctAnswer: "B",
    category: "Cilia",
  },
  {
    id: 12,
    question: "Welke cellen bekleden de binnenzijde van bloedvaten?",
    options: [
      { letter: "A", text: "Mesotheel" },
      { letter: "B", text: "Endotheel" },
      { letter: "C", text: "Slijmbekercellen" },
      { letter: "D", text: "Type II pneumocyten" },
    ],
    correctAnswer: "B",
    category: "Histologie",
  },
  {
    id: 13,
    question: "Welk epitheel bevindt zich aan de binnenzijde van een bronchiolus?",
    options: [
      { letter: "A", text: "Plaveiselepitheel" },
      { letter: "B", text: "Kubisch epitheel" },
      { letter: "C", text: "Meerrijig cilindrisch epitheel met cilia" },
      { letter: "D", text: "Geen epitheel" },
    ],
    correctAnswer: "B",
    category: "Histologie",
  },
  {
    id: 14,
    question: "Welke cellen bekleden de buitenkant van de pleura?",
    options: [
      { letter: "A", text: "Endotheel" },
      { letter: "B", text: "Mesotheel" },
      { letter: "C", text: "Slijmbekercellen" },
      { letter: "D", text: "Type I pneumocyten" },
    ],
    correctAnswer: "B",
    category: "Histologie",
  },
  {
    id: 15,
    question: "Wat is de microtubuli-structuur van een normale cilium?",
    options: [
      { letter: "A", text: "7+2" },
      { letter: "B", text: "9+2" },
      { letter: "C", text: "9+0" },
      { letter: "D", text: "5+2" },
    ],
    correctAnswer: "B",
    category: "Muco-ciliary",
  },
  {
    id: 16,
    question: "Wat is het gevolg van primaire ciliaire dyskinesie (PCD)?",
    options: [
      { letter: "A", text: "Verbeterde slijmtransport" },
      { letter: "B", text: "Ophoping van slijm met vuil en bacteriën door niet-functionerende cilia" },
      { letter: "C", text: "Geen effect op de luchtwegen" },
      { letter: "D", text: "Verhoogde surfactantproductie" },
    ],
    correctAnswer: "B",
    category: "PCD",
  },
  {
    id: 17,
    question: "Welke afweermechanismen spelen een rol in de long?",
    options: [
      { letter: "A", text: "Alleen hoesten" },
      { letter: "B", text: "Hoesten en niezen, fagocytose door macrofagen, trilhaardragend epitheel" },
      { letter: "C", text: "Alleen fagocytose" },
      { letter: "D", text: "Alleen trilharen" },
    ],
    correctAnswer: "B",
    category: "Afweer",
  },
  {
    id: 18,
    question: "Waardoor worden bronchioli opengehouden (in tegenstelling tot bronchi)?",
    options: [
      { letter: "A", text: "Kraakbeen" },
      { letter: "B", text: "Bindweefsel" },
      { letter: "C", text: "Glad spierweefsel alleen" },
      { letter: "D", text: "Bot" },
    ],
    correctAnswer: "B",
    category: "Bronchioli",
  },
]

// Pathofysiologie virale luchtweginfecties questions (18)
const pathofysiologieViraleLuchtweginfectiesQuestions = [
  {
    id: 1,
    question: "Welk virus is de meest voorkomende oorzaak van bronchiolitis bij kinderen jonger dan 2 jaar?",
    options: [
      { letter: "A", text: "Influenzavirus" },
      { letter: "B", text: "Respiratoir syncytieel virus (RSV)" },
      { letter: "C", text: "SARS-CoV-2" },
      { letter: "D", text: "Adenovirus" },
    ],
    correctAnswer: "B",
    category: "RSV",
  },
  {
    id: 2,
    question: "Wat is de gouden standaard voor diagnostiek van virale luchtweginfecties?",
    options: [
      { letter: "A", text: "Serologie (IgM/IgG)" },
      { letter: "B", text: "Antigeendetectie" },
      { letter: "C", text: "Moleculaire detectie via multiplex (RT-)PCR" },
      { letter: "D", text: "Kweek" },
    ],
    correctAnswer: "C",
    category: "Diagnostiek",
  },
  {
    id: 3,
    question: "Welke eiwitten op het influenzavirus zijn belangrijk voor binding aan cellulaire receptoren en release van nieuwe virionen?",
    options: [
      { letter: "A", text: "Spike en nucleocapside" },
      { letter: "B", text: "Hemagglutinine (HA) en neuraminidase (NA)" },
      { letter: "C", text: "F- en G-glycoproteïnen" },
      { letter: "D", text: "M- en E-eiwitten" },
    ],
    correctAnswer: "B",
    category: "Influenza",
  },
  {
    id: 4,
    question: "Wat is het verschil tussen antigene drift en antigene shift bij influenza?",
    options: [
      { letter: "A", text: "Drift veroorzaakt pandemieën; shift vereist jaarlijkse vaccinaanpassing" },
      { letter: "B", text: "Drift: kleine mutaties; shift: grote veranderingen door genetic reassortment" },
      { letter: "C", text: "Beide zijn hetzelfde fenomeen" },
      { letter: "D", text: "Shift is seizoensgebonden; drift is zoönotisch" },
    ],
    correctAnswer: "B",
    category: "Influenza",
  },
  {
    id: 5,
    question: "Welke bacteriën zijn de belangrijkste verwekkers van secundaire bacteriële pneumonie na influenza?",
    options: [
      { letter: "A", text: "E. coli en Klebsiella" },
      { letter: "B", text: "S. pneumoniae, H. influenzae en S. aureus" },
      { letter: "C", text: "Mycoplasma pneumoniae" },
      { letter: "D", text: "Pseudomonas aeruginosa" },
    ],
    correctAnswer: "B",
    category: "Influenza",
  },
  {
    id: 6,
    question: "Waar bindt SARS-CoV-2 aan op menselijke cellen?",
    options: [
      { letter: "A", text: "Sialinezuur-receptoren" },
      { letter: "B", text: "ACE-2 receptor" },
      { letter: "C", text: "CD4-receptor" },
      { letter: "D", text: "Toll-like receptoren" },
    ],
    correctAnswer: "B",
    category: "SARS-CoV-2",
  },
  {
    id: 7,
    question: "Welk preventiemiddel is sinds september 2025 opgenomen in het RVP voor kinderen jonger dan 1 jaar ter bescherming tegen RSV?",
    options: [
      { letter: "A", text: "RSV-vaccin" },
      { letter: "B", text: "Nirsevimab (monoklonaal antilichaam)" },
      { letter: "C", text: "Palivizumab (alleen voor prematuren)" },
      { letter: "D", text: "Oseltamivir" },
    ],
    correctAnswer: "B",
    category: "RSV",
  },
  {
    id: 8,
    question: "Waaraan dankt RSV zijn naam?",
    options: [
      { letter: "A", text: "Aan de seizoensgebondenheid (winter)" },
      { letter: "B", text: "Aan het vermogen syncytia (grote meerkernige cellen) te vormen" },
      { letter: "C", text: "Aan de binding aan sialinezuur" },
      { letter: "D", text: "Aan de gesegmenteerde RNA-structuur" },
    ],
    correctAnswer: "B",
    category: "RSV",
  },
  {
    id: 9,
    question: "Welke isolatiemaatregelen zijn van toepassing bij RSV-patiënten?",
    options: [
      { letter: "A", text: "Alleen handhygiëne" },
      { letter: "B", text: "Strikte isolatie (druppel + contact): schort, mondneusmasker, handschoenen" },
      { letter: "C", text: "Luchtisolatie alleen" },
      { letter: "D", text: "Geen speciale maatregelen" },
    ],
    correctAnswer: "B",
    category: "RSV",
  },
  {
    id: 10,
    question: "Welke pathofysiologische mechanismen spelen een rol bij RSV-bronchiolitis?",
    options: [
      { letter: "A", text: "Alleen direct cytopathologisch effect" },
      { letter: "B", text: "Direct cytopathologisch effect + overmatige immuunrespons → inflammatie, oedeem, necrose trilhaarcellen, mucus" },
      { letter: "C", text: "Alleen bacteriële superinfectie" },
      { letter: "D", text: "Alleen verminderde surfactantproductie" },
    ],
    correctAnswer: "B",
    category: "RSV",
  },
  {
    id: 11,
    question: "Welke complicatie van COVID-19 wordt gekenmerkt door een heterogeen syndroom met inspanningsintolerantie en concentratiestoornissen?",
    options: [
      { letter: "A", text: "ARDS" },
      { letter: "B", text: "Long-COVID" },
      { letter: "C", text: "MIS-C" },
      { letter: "D", text: "DIC" },
    ],
    correctAnswer: "B",
    category: "SARS-CoV-2",
  },
  {
    id: 12,
    question: "Welke mRNA-vaccins tegen SARS-CoV-2 coderen voor welk eiwit?",
    options: [
      { letter: "A", text: "Nucleocapside-eiwit" },
      { letter: "B", text: "Spike-eiwit" },
      { letter: "C", text: "Membraan-eiwit" },
      { letter: "D", text: "Envelop-eiwit" },
    ],
    correctAnswer: "B",
    category: "SARS-CoV-2",
  },
  {
    id: 13,
    question: "Welke seizoenscoronavirussen behoren tot de alfacoronavirussen?",
    options: [
      { letter: "A", text: "CoV-OC43 en CoV-HKU1" },
      { letter: "B", text: "CoV-229E en CoV-NL63" },
      { letter: "C", text: "SARS-CoV en MERS-CoV" },
      { letter: "D", text: "Alleen SARS-CoV-2" },
    ],
    correctAnswer: "B",
    category: "Coronavirussen",
  },
  {
    id: 14,
    question: "Binnen welke termijn moet oseltamivir bij influenza idealiter gestart worden?",
    options: [
      { letter: "A", text: "Binnen 12 uur na begin symptomen" },
      { letter: "B", text: "Binnen 48 uur na begin symptomen" },
      { letter: "C", text: "Binnen 7 dagen" },
      { letter: "D", text: "Alleen bij ziekenhuisopname" },
    ],
    correctAnswer: "B",
    category: "Influenza",
  },
  {
    id: 15,
    question: "Welke uitspraak over bovenste luchtweginfecties (BLWI) is juist?",
    options: [
      { letter: "A", text: "BLWI worden meestal door bacteriën veroorzaakt" },
      { letter: "B", text: "Virale infecties verhogen het risico op secundaire bacteriële infecties (otitis media, sinusitis, pneumonie)" },
      { letter: "C", text: "Antibiotica zijn eerste keuze bij BLWI" },
      { letter: "D", text: "Serologie is de gouden standaard voor diagnostiek" },
    ],
    correctAnswer: "B",
    category: "BLWI",
  },
  {
    id: 16,
    question: "Welke virussen kunnen acute bronchitis veroorzaken?",
    options: [
      { letter: "A", text: "Alleen influenzavirus" },
      { letter: "B", text: "Influenza A/B, parainfluenza, coronavirus, rinovirus, RSV, hMPV" },
      { letter: "C", text: "Alleen RSV" },
      { letter: "D", text: "Alleen SARS-CoV-2" },
    ],
    correctAnswer: "B",
    category: "Onderste luchtwegen",
  },
  {
    id: 17,
    question: "Welke complicatie kan optreden bij RSV-bronchiolitis bij zuigelingen?",
    options: [
      { letter: "A", text: "Alleen hoesten" },
      { letter: "B", text: "Apneus, SIADH, secundaire bacteriële pneumonie" },
      { letter: "C", text: "Geen ernstige complicaties" },
      { letter: "D", text: "Alleen milde rhinitis" },
    ],
    correctAnswer: "B",
    category: "RSV",
  },
  {
    id: 18,
    question: "Waarom is het influenzavirus bij uitstek geschikt voor pandemieën?",
    options: [
      { letter: "A", text: "Omdat het alleen mensen infecteert" },
      { letter: "B", text: "Door gesegmenteerd RNA: genetic reassortment in varkens (mengvat) kan nieuw subtype ontstaan" },
      { letter: "C", text: "Omdat er geen vaccin bestaat" },
      { letter: "D", text: "Omdat het alleen via contact overdraagbaar is" },
    ],
    correctAnswer: "B",
    category: "Influenza",
  },
]

// Vervolg introductie virologie 2 questions (18)
const vervolgIntroductieVirologie2Questions = [
  {
    id: 1,
    question: "Wat is de incubatietijd van het influenzavirus?",
    options: [
      { letter: "A", text: "1-3 dagen" },
      { letter: "B", text: "7-18 dagen" },
      { letter: "C", text: "21-49 dagen" },
      { letter: "D", text: "30-180 dagen" },
    ],
    correctAnswer: "A",
    category: "Incubatietijd",
  },
  {
    id: 2,
    question: "Welke virussen worden primair via de faeco-orale route overgedragen?",
    options: [
      { letter: "A", text: "HIV en hepatitis B" },
      { letter: "B", text: "Hepatitis A, rotavirus, norovirus, enterovirussen" },
      { letter: "C", text: "Influenza en RSV" },
      { letter: "D", text: "HSV en HPV" },
    ],
    correctAnswer: "B",
    category: "Transmissie",
  },
  {
    id: 3,
    question: "Wat betekent 'dead-end host' bij zoönotische infecties?",
    options: [
      { letter: "A", text: "De mens is de enige gastheer" },
      { letter: "B", text: "De viraemie is te laag voor mens-op-mens transmissie via de vector (bijv. West-Nijlvirus)" },
      { letter: "C", text: "De infectie is altijd dodelijk" },
      { letter: "D", text: "Er is geen vector betrokken" },
    ],
    correctAnswer: "B",
    category: "Zoönosen",
  },
  {
    id: 4,
    question: "Welk type ziektebeloop heeft hepatitis B?",
    options: [
      { letter: "A", text: "Alleen acuut" },
      { letter: "B", text: "Persistent (klaring of chronische infectie)" },
      { letter: "C", text: "Latent met reactivatie" },
      { letter: "D", text: "Sluipend progressief" },
    ],
    correctAnswer: "B",
    category: "Ziektebeloop",
  },
  {
    id: 5,
    question: "Bij reactivatie van het varicella-zostervirus spreekt men van:",
    options: [
      { letter: "A", text: "Waterpokken" },
      { letter: "B", text: "Gordelroos (herpes zoster)" },
      { letter: "C", text: "Mazelen" },
      { letter: "D", text: "Rubella" },
    ],
    correctAnswer: "B",
    category: "Herpesvirussen",
  },
  {
    id: 6,
    question: "Welk mechanisme van virale pathogenese veroorzaakt cervixcarcinoom?",
    options: [
      { letter: "A", text: "Directe lysis" },
      { letter: "B", text: "Cytokinestorm" },
      { letter: "C", text: "Maligne ontaarding (HPV)" },
      { letter: "D", text: "Immuuncomplexvorming" },
    ],
    correctAnswer: "C",
    category: "Pathogenese",
  },
  {
    id: 7,
    question: "Welke cellulaire afwijking is typisch voor mazelenvirus-infectie?",
    options: [
      { letter: "A", text: "Uilenogen (intranucleaire inclusies)" },
      { letter: "B", text: "Syncytia-formatie (multinucleaire reuzencellen)" },
      { letter: "C", text: "Geen specifieke afwijking" },
      { letter: "D", text: "Granulomen" },
    ],
    correctAnswer: "B",
    category: "Directe schade",
  },
  {
    id: 8,
    question: "Bij ernstige SARS-CoV-2-infectie met cytokinestorm wordt onder andere gegeven:",
    options: [
      { letter: "A", text: "Alleen zuurstof" },
      { letter: "B", text: "Dexamethason en IL-6-remmers" },
      { letter: "C", text: "Alleen antivirale middelen" },
      { letter: "D", text: "Geen immunomodulerende behandeling" },
    ],
    correctAnswer: "B",
    category: "Immunopathologie",
  },
  {
    id: 9,
    question: "Welk virus veroorzaakt Kaposi-sarcoom bij patiënten met AIDS?",
    options: [
      { letter: "A", text: "EBV" },
      { letter: "B", text: "HPV" },
      { letter: "C", text: "HHV-8" },
      { letter: "D", text: "CMV" },
    ],
    correctAnswer: "C",
    category: "Maligne ontaarding",
  },
  {
    id: 10,
    question: "Welke virussen veroorzaken virale gastro-enteritis?",
    options: [
      { letter: "A", text: "Alleen norovirus" },
      { letter: "B", text: "Norovirus, rotavirus, sapovirus, adenovirus" },
      { letter: "C", text: "Alleen influenza" },
      { letter: "D", text: "HIV en hepatitis B" },
    ],
    correctAnswer: "B",
    category: "Ziektebeeld",
  },
  {
    id: 11,
    question: "Virale conjunctivitis wordt in 50-60% van de gevallen veroorzaakt door:",
    options: [
      { letter: "A", text: "Herpes simplex virus" },
      { letter: "B", text: "Adenovirus" },
      { letter: "C", text: "Varicella-zoster virus" },
      { letter: "D", text: "Enterovirus" },
    ],
    correctAnswer: "B",
    category: "Ooginfecties",
  },
  {
    id: 12,
    question: "Welke uitspraak over asymptomatische infecties is juist?",
    options: [
      { letter: "A", text: "Asymptomatische personen zijn nooit besmettelijk" },
      { letter: "B", text: "Asymptomatische personen kunnen wel besmettelijk zijn (bijv. HIV, SARS-CoV-2)" },
      { letter: "C", text: "Alle virale infecties zijn symptomatisch" },
      { letter: "D", text: "Subklinische infecties leiden nooit tot immuniteit" },
    ],
    correctAnswer: "B",
    category: "Begrippen",
  },
  {
    id: 13,
    question: "Welk proces leidt bij immunopathogenese door antilichamen meestal tot weefselschade?",
    options: [
      { letter: "A", text: "Directe virusreplicatie" },
      { letter: "B", text: "Immuuncomplexvorming met neerslag in vaatwand, huid of nier" },
      { letter: "C", text: "Cytokinestorm" },
      { letter: "D", text: "Maligne transformatie" },
    ],
    correctAnswer: "B",
    category: "Immunopathologie",
  },
  {
    id: 14,
    question: "Welke virussen behoren tot de humane herpesvirussen met het hoogste risico op reactivatie bij milde immunosuppressie?",
    options: [
      { letter: "A", text: "HHV-6 en HHV-8" },
      { letter: "B", text: "HSV-1 en HSV-2" },
      { letter: "C", text: "Alleen EBV" },
      { letter: "D", text: "Alleen CMV" },
    ],
    correctAnswer: "B",
    category: "Herpesvirussen",
  },
  {
    id: 15,
    question: "Wat is een voorbeeld van een lokale virale infectie?",
    options: [
      { letter: "A", text: "Hepatitis A (darm → lever)" },
      { letter: "B", text: "Rinovirus (rhinitis, bovenste luchtwegen)" },
      { letter: "C", text: "Mazelen (systemisch exantheem)" },
      { letter: "D", text: "HIV (systemisch)" },
    ],
    correctAnswer: "B",
    category: "Lokaal vs systemisch",
  },
  {
    id: 16,
    question: "Welke virussen zijn veelvoorkomende verwekkers van virale meningitis/encefalitis?",
    options: [
      { letter: "A", text: "Alleen bacteriën" },
      { letter: "B", text: "HSV, VZV, enterovirus; arbovirussen (WNV, TBEV, JEV)" },
      { letter: "C", text: "Alleen rotavirus" },
      { letter: "D", text: "Alleen HPV" },
    ],
    correctAnswer: "B",
    category: "CNS-infecties",
  },
  {
    id: 17,
    question: "Welke SOA's kunnen door virussen worden veroorzaakt?",
    options: [
      { letter: "A", text: "Alleen bacteriële SOA's" },
      { letter: "B", text: "HPV, HSV, HBV, HCV, HIV, Mpox" },
      { letter: "C", text: "Alleen HIV" },
      { letter: "D", text: "Alleen hepatitis A" },
    ],
    correctAnswer: "B",
    category: "SOA's",
  },
  {
    id: 18,
    question: "Enterovirussen (Picornaviridae) kunnen onder andere veroorzaken:",
    options: [
      { letter: "A", text: "Alleen poliomyelitis" },
      { letter: "B", text: "Neonatale sepsis, conjunctivitis, hepatitis, myocarditis, hand-voet-mondziekte, respiratoire klachten" },
      { letter: "C", text: "Alleen gastro-enteritis" },
      { letter: "D", text: "Alleen huidinfecties" },
    ],
    correctAnswer: "B",
    category: "Enterovirussen",
  },
]

// Virale diagnostiek questions (18)
const viraleDiagnostiekQuestions = [
  {
    id: 1,
    question: "Welke volgorde van het diagnostisch proces is correct?",
    options: [
      { letter: "A", text: "Aanvraag aanvullend onderzoek → anamnese → differentiaaldiagnose → lichamelijk onderzoek" },
      { letter: "B", text: "Anamnese → lichamelijk onderzoek → differentiaaldiagnose → aanvraag aanvullend onderzoek" },
      { letter: "C", text: "Differentiaaldiagnose → anamnese → aanvraag aanvullend onderzoek → lichamelijk onderzoek" },
      { letter: "D", text: "Lichamelijk onderzoek → aanvraag aanvullend onderzoek → anamnese → differentiaaldiagnose" },
    ],
    correctAnswer: "B",
    category: "Aanvraag en afname",
  },
  {
    id: 2,
    question: "Welke buis is geschikt voor PCR/NAAT bij virale diagnostiek?",
    options: [
      { letter: "A", text: "Heparinebuis (groen)" },
      { letter: "B", text: "EDTA-buis (paars)" },
      { letter: "C", text: "Serumbuis (geel)" },
      { letter: "D", text: "Alle bovenstaande zijn geschikt" },
    ],
    correctAnswer: "B",
    category: "Materiaalsoorten",
  },
  {
    id: 3,
    question: "Waarom is heparine niet geschikt voor PCR/NAAT?",
    options: [
      { letter: "A", text: "Heparine remt de PCR-reactie" },
      { letter: "B", text: "Heparine bindt aan DNA en RNA" },
      { letter: "C", text: "Heparine interfereert met de amplificatie" },
      { letter: "D", text: "Alle bovenstaande redenen" },
    ],
    correctAnswer: "A",
    category: "Materiaalsoorten",
  },
  {
    id: 4,
    question: "Voor respiratoire virale diagnostiek wordt vaak materiaal afgenomen van:",
    options: [
      { letter: "A", text: "Alleen keeluitstrijk" },
      { letter: "B", text: "Nasofarynx, keel, BAL of sputum" },
      { letter: "C", text: "Alleen bloed" },
      { letter: "D", text: "Alleen faeces" },
    ],
    correctAnswer: "B",
    category: "Materiaalsoorten",
  },
  {
    id: 5,
    question: "Welke antilichaamklasse wijst het sterkst op een recente infectie?",
    options: [
      { letter: "A", text: "IgG" },
      { letter: "B", text: "IgM" },
      { letter: "C", text: "IgA" },
      { letter: "D", text: "IgE" },
    ],
    correctAnswer: "B",
    category: "Serologie",
  },
  {
    id: 6,
    question: "In welk stadium van een primaire infectie zie je hoge IgM- en lage IgG-titers?",
    options: [
      { letter: "A", text: "Acuut secundair" },
      { letter: "B", text: "Convalescentie" },
      { letter: "C", text: "Acuut primair" },
      { letter: "D", text: "Chronisch" },
    ],
    correctAnswer: "C",
    category: "Serologie",
  },
  {
    id: 7,
    question: "Wanneer wordt een vervolgserum idealiter afgenomen om seroconversie aan te tonen?",
    options: [
      { letter: "A", text: "1 week na het eerste serum" },
      { letter: "B", text: "2-3 weken na het eerste serum" },
      { letter: "C", text: "Direct na het eerste serum" },
      { letter: "D", text: "6 maanden na het eerste serum" },
    ],
    correctAnswer: "B",
    category: "Serologie",
  },
  {
    id: 8,
    question: "Wat is een nadeel van serologische diagnostiek?",
    options: [
      { letter: "A", text: "Kruisreacties tussen verwante virussen" },
      { letter: "B", text: "Fout-positieve IgM bij zwangeren of auto-immuunziekten" },
      { letter: "C", text: "Vertraagde antilichaamrespons in de acute fase" },
      { letter: "D", text: "Alle bovenstaande" },
    ],
    correctAnswer: "D",
    category: "Serologie",
  },
  {
    id: 9,
    question: "De HIV-combotest detecteert:",
    options: [
      { letter: "A", text: "Alleen antilichamen tegen HIV" },
      { letter: "B", text: "Alleen p24-antigeen" },
      { letter: "C", text: "p24-antigeen én antilichamen tegen HIV" },
      { letter: "D", text: "Alleen viraal RNA" },
    ],
    correctAnswer: "C",
    category: "Serologie",
  },
  {
    id: 10,
    question: "Bij PCR verdubbelt de hoeveelheid doelwit-DNA per cyclus. Na 30 cycli is de theoretische amplificatiefactor ongeveer:",
    options: [
      { letter: "A", text: "2³⁰" },
      { letter: "B", text: "30²" },
      { letter: "C", text: "2 × 30" },
      { letter: "D", text: "30" },
    ],
    correctAnswer: "A",
    category: "Moleculaire diagnostiek",
  },
  {
    id: 11,
    question: "Wat betekent een lage Ct-waarde (cycle threshold) bij real-time PCR?",
    options: [
      { letter: "A", text: "Lage virale load" },
      { letter: "B", text: "Hoge virale load" },
      { letter: "C", text: "Geen virus aanwezig" },
      { letter: "D", text: "Contaminatie" },
    ],
    correctAnswer: "B",
    category: "Moleculaire diagnostiek",
  },
  {
    id: 12,
    question: "Voor detectie van RNA-virussen (bijv. RSV, influenza) is nodig:",
    options: [
      { letter: "A", text: "Alleen PCR" },
      { letter: "B", text: "Reverse transcriptie gevolgd door PCR (RT-PCR)" },
      { letter: "C", text: "Alleen serologie" },
      { letter: "D", text: "Alleen kweek" },
    ],
    correctAnswer: "B",
    category: "Moleculaire diagnostiek",
  },
  {
    id: 13,
    question: "Bij multiplex PCR worden meerdere virale targets tegelijk gedetecteerd door:",
    options: [
      { letter: "A", text: "Meerdere buisjes te gebruiken" },
      { letter: "B", text: "Unieke fluorofoor per probe" },
      { letter: "C", text: "Sequentiële amplificatie" },
      { letter: "D", text: "Serologische bevestiging" },
    ],
    correctAnswer: "B",
    category: "Moleculaire diagnostiek",
  },
  {
    id: 14,
    question: "Waarom is contaminatie een groot risico bij PCR?",
    options: [
      { letter: "A", text: "Ampliconproducten blijven lang aanwezig en kunnen nieuwe reacties besmetten" },
      { letter: "B", text: "RNA is gevoelig voor RNase" },
      { letter: "C", text: "Primers kunnen non-specifiek binden" },
      { letter: "D", text: "Alleen B en C" },
    ],
    correctAnswer: "A",
    category: "Moleculaire diagnostiek",
  },
  {
    id: 15,
    question: "Moleculaire sneltesten (bijv. voor influenza, RSV, SARS-CoV-2) hebben als voordeel:",
    options: [
      { letter: "A", text: "Resultaat in 1-2 uur, cartridge-gebaseerd, multiplex mogelijk" },
      { letter: "B", text: "Goedkoper dan klassieke PCR" },
      { letter: "C", text: "Geen apparatuur nodig" },
      { letter: "D", text: "Hogere sensitiviteit dan lab-PCR" },
    ],
    correctAnswer: "A",
    category: "Moleculaire diagnostiek",
  },
  {
    id: 16,
    question: "Sanger-sequencing gebruikt dideoxynucleotiden (ddNTPs) voor:",
    options: [
      { letter: "A", text: "Kettingelongatie" },
      { letter: "B", text: "Kettingterminatie (elke ddNTP stopt de synthese)" },
      { letter: "C", text: "Primer binding" },
      { letter: "D", text: "DNA-extractie" },
    ],
    correctAnswer: "B",
    category: "Sequencing",
  },
  {
    id: 17,
    question: "NGS (next-generation sequencing) wordt gebruikt voor:",
    options: [
      { letter: "A", text: "Typeren van virussen, resistentiebepaling, evolutie-analyse" },
      { letter: "B", text: "Alleen kwantificatie van virale load" },
      { letter: "C", text: "Alleen serologische bevestiging" },
      { letter: "D", text: "Alleen snelle screening" },
    ],
    correctAnswer: "A",
    category: "Sequencing",
  },
  {
    id: 18,
    question: "Welke klinische gegevens zijn belangrijk bij het aanvragen van virale diagnostiek?",
    options: [
      { letter: "A", text: "Alleen symptomen sinds wanneer" },
      { letter: "B", text: "Symptomen sinds, vaccinatiestatus, reisanamnese, antivirale therapie, differentiaaldiagnose" },
      { letter: "C", text: "Alleen differentiaaldiagnose" },
      { letter: "D", text: "Alleen patiëntnummer" },
    ],
    correctAnswer: "B",
    category: "Aanvraag en afname",
  },
]

// Cytokinen questions (18)
const cytokinenQuestions = [
  {
    id: 1,
    question: "Hoe communiceren immuuncellen met elkaar en met andere cellen?",
    options: [
      { letter: "A", text: "Alleen via direct cel-cel contact" },
      { letter: "B", text: "Via signaalmoleculen van het immuunsysteem: cytokinen" },
      { letter: "C", text: "Alleen via hormonen uit de hypofyse" },
      { letter: "D", text: "Via neurotransmitters uit zenuwcellen" },
    ],
    correctAnswer: "B",
    category: "Introductie",
  },
  {
    id: 2,
    question: "Waaraan bindt een cytokine op de doelwitcel?",
    options: [
      { letter: "A", text: "Aan het DNA in de kern" },
      { letter: "B", text: "Aan een specifieke receptor op de celmembraan" },
      { letter: "C", text: "Aan antilichamen in het bloed" },
      { letter: "D", text: "Aan complementeiwitten" },
    ],
    correctAnswer: "B",
    category: "Introductie",
  },
  {
    id: 3,
    question: "Welke onderverdeling van cytokinen bestaat er?",
    options: [
      { letter: "A", text: "Alleen groeifactoren en chemokinen" },
      { letter: "B", text: "Groeifactoren, chemokinen en overige cytokinen" },
      { letter: "C", text: "Pro- en anti-inflammatoire cytokinen alleen" },
      { letter: "D", text: "Lokale en systemische cytokinen" },
    ],
    correctAnswer: "B",
    category: "Onderverdeling",
  },
  {
    id: 4,
    question: "Een cytokine dat aanzet tot proliferatie (celdeling) wordt een ... genoemd.",
    options: [
      { letter: "A", text: "Chemokine" },
      { letter: "B", text: "Groeifactor" },
      { letter: "C", text: "Interleukine" },
      { letter: "D", text: "Interferon" },
    ],
    correctAnswer: "B",
    category: "Onderverdeling",
  },
  {
    id: 5,
    question: "Een cytokine dat cellen aantrekt (chemotaxis) wordt een ... genoemd.",
    options: [
      { letter: "A", text: "Groeifactor" },
      { letter: "B", text: "Chemokine" },
      { letter: "C", text: "TNF" },
      { letter: "D", text: "Interferon" },
    ],
    correctAnswer: "B",
    category: "Onderverdeling",
  },
  {
    id: 6,
    question: "IL-12 heeft effect op T-cellen én NK-cellen. Dit is een voorbeeld van:",
    options: [
      { letter: "A", text: "Redundantie" },
      { letter: "B", text: "Pleiotropie" },
      { letter: "C", text: "Synergie" },
      { letter: "D", text: "Inhibitie" },
    ],
    correctAnswer: "B",
    category: "Effecten",
  },
  {
    id: 7,
    question: "TNF-α en IFN-γ stimuleren beide endotheelcellen. Dit is een voorbeeld van:",
    options: [
      { letter: "A", text: "Pleiotropie" },
      { letter: "B", text: "Redundantie" },
      { letter: "C", text: "Additie" },
      { letter: "D", text: "Autocrien effect" },
    ],
    correctAnswer: "B",
    category: "Effecten",
  },
  {
    id: 8,
    question: "Wat is de benaming voor een effect van een cytokine op de cel die het cytokine zelf produceert?",
    options: [
      { letter: "A", text: "Endocrien" },
      { letter: "B", text: "Paracrien" },
      { letter: "C", text: "Autocrien" },
      { letter: "D", text: "Exocrien" },
    ],
    correctAnswer: "C",
    category: "Effecten",
  },
  {
    id: 9,
    question: "Wat is de benaming voor een effect van een cytokine op cellen elders in het lichaam?",
    options: [
      { letter: "A", text: "Autocrien" },
      { letter: "B", text: "Paracrien" },
      { letter: "C", text: "Endocrien" },
      { letter: "D", text: "Lokaal" },
    ],
    correctAnswer: "C",
    category: "Effecten",
  },
  {
    id: 10,
    question: "Effecten van cytokinen die elkaar versterken heet:",
    options: [
      { letter: "A", text: "Redundantie" },
      { letter: "B", text: "Pleiotropie" },
      { letter: "C", text: "Synergie" },
      { letter: "D", text: "Inhibitie" },
    ],
    correctAnswer: "C",
    category: "Effecten",
  },
  {
    id: 11,
    question: "Welke route wordt geactiveerd na binding van een cytokine aan zijn receptor?",
    options: [
      { letter: "A", text: "MAPK-route" },
      { letter: "B", text: "JAK-STAT signalering" },
      { letter: "C", text: "cAMP-route" },
      { letter: "D", text: "Calcium-signalering" },
    ],
    correctAnswer: "B",
    category: "JAK-STAT",
  },
  {
    id: 12,
    question: "Waarom zijn JAK-remmers effectief bij auto-immuunziekten zoals reumatoïde artritis?",
    options: [
      { letter: "A", text: "Ze blokkeren de productie van antistoffen door B-cellen" },
      { letter: "B", text: "Ze verhogen de expressie van pro-inflammatoire cytokinen" },
      { letter: "C", text: "Ze remmen de fosforylering van STAT-eiwitten en onderbreken cytokinesignalering" },
      { letter: "D", text: "Ze remmen de migratie van neutrofielen naar ontstekingshaarden" },
    ],
    correctAnswer: "C",
    category: "JAK-STAT",
  },
  {
    id: 13,
    question: "Een patiënt met sepsis heeft hoge spiegels van IL-6 en TNF-α. Welke verklaring past het best bij het symptoom hypotensie?",
    options: [
      { letter: "A", text: "IL-6 en TNF-α stimuleren Treg-cellen en verlagen de hartslag" },
      { letter: "B", text: "IL-6 en TNF-α veroorzaken vasodilatatie en verhogen endotheelpermeabiliteit" },
      { letter: "C", text: "IL-6 en TNF-α remmen acute-fase-eiwitten in de lever" },
      { letter: "D", text: "IL-6 en TNF-α verminderen cytokineproductie door macrofagen" },
    ],
    correctAnswer: "B",
    category: "Klinisch",
  },
  {
    id: 14,
    question: "Een patiënt met een virale infectie heeft hoge IL-10 spiegels. Wat betekent dit waarschijnlijk?",
    options: [
      { letter: "A", text: "IL-10 stimuleert Th1-respons" },
      { letter: "B", text: "Het immuunsysteem is volledig geactiveerd" },
      { letter: "C", text: "IL-10 verhoogt IL-1 productie" },
      { letter: "D", text: "Er is een poging tot remming van ontsteking" },
    ],
    correctAnswer: "D",
    category: "Klinisch",
  },
  {
    id: 15,
    question: "Waarom is de indeling van cytokinen in pro- en anti-inflammatoir een oversimplificatie?",
    options: [
      { letter: "A", text: "Omdat er geen anti-inflammatoire cytokinen bestaan" },
      { letter: "B", text: "Omdat het effect afhangt van context: concentratie, timing, doelwitcel en combinatie met andere cytokinen" },
      { letter: "C", text: "Omdat alle cytokinen pro-inflammatoir zijn" },
      { letter: "D", text: "Omdat cytokinen alleen lokaal werken" },
    ],
    correctAnswer: "B",
    category: "Pro-anti-inflammatoir",
  },
  {
    id: 16,
    question: "Welke uitspraak over cytokinen in netwerken is juist?",
    options: [
      { letter: "A", text: "Cytokinen werken altijd geïsoleerd" },
      { letter: "B", text: "Cytokinen werken in complexe netwerken en kunnen elkaar versterken of remmen" },
      { letter: "C", text: "Er is geen interactie tussen verschillende cytokinen" },
      { letter: "D", text: "Alleen pro-inflammatoire cytokinen werken in netwerken" },
    ],
    correctAnswer: "B",
    category: "Netwerken",
  },
  {
    id: 17,
    question: "Welke cytokinen zijn typisch pro-inflammatoir?",
    options: [
      { letter: "A", text: "Alleen IL-10" },
      { letter: "B", text: "TNF-α, IL-1, IL-6" },
      { letter: "C", text: "Alleen IL-10 en TGF-β" },
      { letter: "D", text: "Geen van de bovenstaande" },
    ],
    correctAnswer: "B",
    category: "Pro-anti-inflammatoir",
  },
  {
    id: 18,
    question: "IL-10 remt vooral:",
    options: [
      { letter: "A", text: "Th2-respons" },
      { letter: "B", text: "Th1 en pro-inflammatoire cytokinen" },
      { letter: "C", text: "B-cel activatie" },
      { letter: "D", text: "NK-cel activiteit" },
    ],
    correctAnswer: "B",
    category: "Pro-anti-inflammatoir",
  },
]

// Infectieuze oorzaken van koorts bij kinderen questions (18)
const infectieuzeOorzakenKoortsQuestions = [
  {
    id: 1,
    question: "Wat is de meest betrouwbare manier om koorts te meten bij kinderen onder de 3 maanden?",
    options: [
      { letter: "A", text: "Oorthermometer" },
      { letter: "B", text: "Rectale thermometer" },
      { letter: "C", text: "Voorhoofdthermometer" },
      { letter: "D", text: "Okselthermometer" },
    ],
    correctAnswer: "B",
    category: "Koorts",
  },
  {
    id: 2,
    question: "In hoeveel van de 1000 consulten van kinderen bij de huisarts betreft het koorts?",
    options: [
      { letter: "A", text: "Ongeveer 100" },
      { letter: "B", text: "Ongeveer 250" },
      { letter: "C", text: "Ongeveer 430" },
      { letter: "D", text: "Ongeveer 600" },
    ],
    correctAnswer: "C",
    category: "Koorts",
  },
  {
    id: 3,
    question: "Welke onderste luchtweginfectie wordt vooral veroorzaakt door het RS-virus?",
    options: [
      { letter: "A", text: "Pneumonie" },
      { letter: "B", text: "Bronchiolitis" },
      { letter: "C", text: "Tonsillitis" },
      { letter: "D", text: "Otitis media" },
    ],
    correctAnswer: "B",
    category: "Luchtwegen",
  },
  {
    id: 4,
    question: "Otitis media valt onder welke categorie luchtweginfecties?",
    options: [
      { letter: "A", text: "Onderste luchtwegen" },
      { letter: "B", text: "Bovenste luchtwegen" },
      { letter: "C", text: "Alleen middenoor" },
      { letter: "D", text: "Onderste en bovenste" },
    ],
    correctAnswer: "B",
    category: "Luchtwegen",
  },
  {
    id: 5,
    question: "Welke uitspraak over bovenste luchtweginfecties is juist?",
    options: [
      { letter: "A", text: "De meeste worden veroorzaakt door bacteriën" },
      { letter: "B", text: "De meeste worden veroorzaakt door virussen" },
      { letter: "C", text: "Ze komen alleen bij volwassenen voor" },
      { letter: "D", text: "Tonsillitis is altijd viraal" },
    ],
    correctAnswer: "B",
    category: "Luchtwegen",
  },
  {
    id: 6,
    question: "Welke symptomen zijn typisch voor bronchiolitis?",
    options: [
      { letter: "A", text: "Alleen neusverkoudheid" },
      { letter: "B", text: "Piepende ademhaling (wheezen), tachypneu, intrekkingen" },
      { letter: "C", text: "Alleen hoge koorts" },
      { letter: "D", text: "Pijnlijke mictie" },
    ],
    correctAnswer: "B",
    category: "Bronchiolitis",
  },
  {
    id: 7,
    question: "Welke bacterie is de meest typische verwekker van bacteriële pneumonie bij kinderen?",
    options: [
      { letter: "A", text: "Escherichia coli" },
      { letter: "B", text: "Streptococcus pneumoniae" },
      { letter: "C", text: "Mycoplasma pneumoniae" },
      { letter: "D", text: "Bordetella pertussis" },
    ],
    correctAnswer: "B",
    category: "Pneumonie",
  },
  {
    id: 8,
    question: "Bij pneumonie door influenza is er een risico op bacteriële superinfectie met:",
    options: [
      { letter: "A", text: "Streptococcus pneumoniae" },
      { letter: "B", text: "Staphylococcus aureus" },
      { letter: "C", text: "Haemophilus influenzae" },
      { letter: "D", text: "Mycoplasma pneumoniae" },
    ],
    correctAnswer: "B",
    category: "Pneumonie",
  },
  {
    id: 9,
    question: "Welke vaccinatie werd in 2025 in Nederland geïntroduceerd voor kinderen?",
    options: [
      { letter: "A", text: "Influenzavaccinatie" },
      { letter: "B", text: "RS-vaccinatie" },
      { letter: "C", text: "Pneumokokkenvaccinatie" },
      { letter: "D", text: "Meningokokkenvaccinatie" },
    ],
    correctAnswer: "B",
    category: "Vaccinatie",
  },
  {
    id: 10,
    question: "Welke verwekker van meningitis is een bacterie?",
    options: [
      { letter: "A", text: "Enterovirus" },
      { letter: "B", text: "Neisseria meningitidis" },
      { letter: "C", text: "Herpesvirus" },
      { letter: "D", text: "Adenovirus" },
    ],
    correctAnswer: "B",
    category: "Meningitis",
  },
  {
    id: 11,
    question: "Bij zuigelingen met meningitis kan een volle of bomberende fontanel voorkomen. Wat is nog een kenmerk bij zuigelingen?",
    options: [
      { letter: "A", text: "Meer drinken" },
      { letter: "B", text: "Minder drinken" },
      { letter: "C", text: "Geen koorts" },
      { letter: "D", text: "Geen nekstijfheid" },
    ],
    correctAnswer: "B",
    category: "Meningitis",
  },
  {
    id: 12,
    question: "Petechiën bij meningitis zijn:",
    options: [
      { letter: "A", text: "Wegdrukbare vlekjes" },
      { letter: "B", text: "Niet-wegdrukbare vlekjes" },
      { letter: "C", text: "Alleen op het gezicht" },
      { letter: "D", text: "Altijd aanwezig" },
    ],
    correctAnswer: "B",
    category: "Meningitis",
  },
  {
    id: 13,
    question: "Bij hoeveel van de 10 kinderen met meningitis is nekstijfheid aanwezig?",
    options: [
      { letter: "A", text: "1 tot 3" },
      { letter: "B", text: "4 tot 6" },
      { letter: "C", text: "7 tot 9" },
      { letter: "D", text: "Altijd bij alle 10" },
    ],
    correctAnswer: "C",
    category: "Meningitis",
  },
  {
    id: 14,
    question: "Welke verwekker veroorzaakt meningococcenziekte/meningococcensepsis?",
    options: [
      { letter: "A", text: "Streptococcus pneumoniae" },
      { letter: "B", text: "Neisseria meningitidis" },
      { letter: "C", text: "Haemophilus influenzae" },
      { letter: "D", text: "Enterovirus" },
    ],
    correctAnswer: "B",
    category: "Meningococ",
  },
  {
    id: 15,
    question: "Waarom moet een kind met petechiën en ecchymosen bij verdenking meningococcenziekte snel naar het ziekenhuis?",
    options: [
      { letter: "A", text: "Omdat de ziekte mild verloopt" },
      { letter: "B", text: "Omdat het ziektebeeld zeer ernstig is en snel fataal kan verlopen" },
      { letter: "C", text: "Omdat thuisbehandeling voldoende is" },
      { letter: "D", text: "Omdat er geen spoed is" },
    ],
    correctAnswer: "B",
    category: "Meningococ",
  },
  {
    id: 16,
    question: "Welke verwekker zit NIET in het landelijke vaccinatieprogramma?",
    options: [
      { letter: "A", text: "Neisseria meningitidis" },
      { letter: "B", text: "Streptococcus pneumoniae" },
      { letter: "C", text: "Moraxella catarrhalis" },
      { letter: "D", text: "Bordetella pertussis" },
    ],
    correctAnswer: "C",
    category: "Vaccinatie",
  },
  {
    id: 17,
    question: "Bij een urineweginfectie bij een kind:",
    options: [
      { letter: "A", text: "Is verwijzing naar de kinderarts niet nodig" },
      { letter: "B", text: "Moet het kind altijd naar de kinderarts voor aanvullend onderzoek" },
      { letter: "C", text: "Is de verwekker meestal viraal" },
      { letter: "D", text: "Zijn er geen anatomische afwijkingen mogelijk" },
    ],
    correctAnswer: "B",
    category: "UTI",
  },
  {
    id: 18,
    question: "Welke restverschijnselen kunnen kinderen na meningitis houden?",
    options: [
      { letter: "A", text: "Alleen tijdelijke vermoeidheid" },
      { letter: "B", text: "Gehoorverlies, neurologische schade, motorische stoornissen" },
      { letter: "C", text: "Geen restverschijnselen" },
      { letter: "D", text: "Alleen littekens" },
    ],
    correctAnswer: "B",
    category: "Meningitis",
  },
]

// Ontstekingsmediatoren questions (18)
const ontstekingsmediatorenQuestions = [
  {
    id: 1,
    question: "Wat zijn ontstekingsmediatoren?",
    options: [
      { letter: "A", text: "Alleen eiwitten die door de lever worden geproduceerd" },
      { letter: "B", text: "Het communicatiemiddel tussen cellen die deelnemen aan de ontstekingsreactie; ze stimuleren of remmen cellulaire activiteit" },
      { letter: "C", text: "Uitsluitend antistoffen" },
      { letter: "D", text: "Alleen hormonen uit de bijnierschors" },
    ],
    correctAnswer: "B",
    category: "Introductie",
  },
  {
    id: 2,
    question: "Tot welke moleculaire categorie behoren histamine en serotonine?",
    options: [
      { letter: "A", text: "Klein-moleculaire verbinding" },
      { letter: "B", text: "Aminozuur-derivaat" },
      { letter: "C", text: "Lipide" },
      { letter: "D", text: "Eiwit" },
    ],
    correctAnswer: "B",
    category: "Moleculaire categorieën",
  },
  {
    id: 3,
    question: "Welke mediatoren worden direct uit opslag vrijgegeven na een prikkel?",
    options: [
      { letter: "A", text: "Prostaglandinen en leukotrienen" },
      { letter: "B", text: "Histamine, serotonine en lysosomale enzymen" },
      { letter: "C", text: "Cytokinen en complementfactoren" },
      { letter: "D", text: "NO en ROS" },
    ],
    correctAnswer: "B",
    category: "Vrijkomen",
  },
  {
    id: 4,
    question: "Bij acute allergische reacties spelen mestcellen een essentiële rol. Wat gebeurt er bij activatie?",
    options: [
      { letter: "A", text: "Mestcellen produceren pas dan histamine" },
      { letter: "B", text: "Cross-linking van IgE-receptoren door allergeen leidt tot degranulatie; histamine is al opgeslagen in granula" },
      { letter: "C", text: "Mestcellen fagocyteren het allergeen" },
      { letter: "D", text: "Er is geen rol voor IgE" },
    ],
    correctAnswer: "B",
    category: "Acute allergie",
  },
  {
    id: 5,
    question: "Het NADPH-oxidase-complex zet O₂ om in:",
    options: [
      { letter: "A", text: "Water (H₂O)" },
      { letter: "B", text: "Superoxide (O₂•⁻)" },
      { letter: "C", text: "Stikstofoxide (NO)" },
      { letter: "D", text: "Waterstofperoxide (H₂O₂)" },
    ],
    correctAnswer: "B",
    category: "Zuurstofradicalen",
  },
  {
    id: 6,
    question: "Welk enzym produceert uit H₂O₂ en Cl⁻ de microbicide producten HOCl en OH•?",
    options: [
      { letter: "A", text: "Superoxide dismutase" },
      { letter: "B", text: "Katalase" },
      { letter: "C", text: "Myeloperoxidase" },
      { letter: "D", text: "Glutathion-peroxidase" },
    ],
    correctAnswer: "C",
    category: "Zuurstofradicalen",
  },
  {
    id: 7,
    question: "Zuurstofradicalen activeren het NLRP3-inflammasoom. Wat is het gevolg?",
    options: [
      { letter: "A", text: "Directe productie van TNF" },
      { letter: "B", text: "Pro-IL-1β wordt geknipt waardoor IL-1β vrijkomt" },
      { letter: "C", text: "Remming van NF-κB" },
      { letter: "D", text: "Vasodilatatie" },
    ],
    correctAnswer: "B",
    category: "NLRP3",
  },
  {
    id: 8,
    question: "Bij chronische granulomateuze ziekte (CGD) is er een defect in:",
    options: [
      { letter: "A", text: "Integrine β2-keten (CD18)" },
      { letter: "B", text: "NADPH-oxidase" },
      { letter: "C", text: "LYST-gen (lysosoom-fagosoom fusie)" },
      { letter: "D", text: "Complement C3" },
    ],
    correctAnswer: "B",
    category: "Immunodeficiënties",
  },
  {
    id: 9,
    question: "Fosfolipase A2 maakt arachidonzuur vrij uit de fosfolipidenmembraan. Welke route leidt tot prostaglandinen en tromboxaan?",
    options: [
      { letter: "A", text: "Lipoxygenasen" },
      { letter: "B", text: "Cyclo-oxygenasen (COX-1, COX-2)" },
      { letter: "C", text: "Directe oxidatie" },
      { letter: "D", text: "Complementcascade" },
    ],
    correctAnswer: "B",
    category: "Arachidonzuur",
  },
  {
    id: 10,
    question: "Waarom geven aselectieve NSAIDs (zoals aspirine) risico op maagulcera?",
    options: [
      { letter: "A", text: "Ze remmen alleen COX-2" },
      { letter: "B", text: "Ze blokkeren COX-1 en COX-2; COX-1 is constitutief actief in de maag en produceert beschermende prostaglandinen" },
      { letter: "C", text: "Ze stimuleren maagzuurproductie" },
      { letter: "D", text: "Ze remmen alleen lipoxygenase" },
    ],
    correctAnswer: "B",
    category: "Ontstekingsremmers",
  },
  {
    id: 11,
    question: "Selectieve COX-2-remmers geven een verhoogd risico op hoge bloeddruk en stolsels omdat:",
    options: [
      { letter: "A", text: "COX-2 in de maag wordt geremd" },
      { letter: "B", text: "COX-1 blijft actief (tromboxaan); endotheel produceert via COX-2 prostacycline dat vasodilatatie en anti-aggregatie geeft – dit wordt geremd" },
      { letter: "C", text: "Ze de lever beschadigen" },
      { letter: "D", text: "Ze lipoxygenase remmen" },
    ],
    correctAnswer: "B",
    category: "Ontstekingsremmers",
  },
  {
    id: 12,
    question: "Corticosteroïden remmen onder andere fosfolipase A2. Wat is het gevolg?",
    options: [
      { letter: "A", text: "Meer arachidonzuur wordt vrijgemaakt" },
      { letter: "B", text: "Geen arachidonzuurvrijmaking; ook remming van NF-κB en lymfocytenproliferatie" },
      { letter: "C", text: "Alleen COX wordt geremd" },
      { letter: "D", text: "Alleen lipoxygenase wordt geremd" },
    ],
    correctAnswer: "B",
    category: "Ontstekingsremmers",
  },
  {
    id: 13,
    question: "Welke cytokinen zijn de belangrijkste stimuli voor de acutefase-reactie?",
    options: [
      { letter: "A", text: "Alleen IL-10" },
      { letter: "B", text: "IL-1, IL-6 en TNF" },
      { letter: "C", text: "Alleen IFN-γ" },
      { letter: "D", text: "Alleen IL-4" },
    ],
    correctAnswer: "B",
    category: "Acutefase",
  },
  {
    id: 14,
    question: "De Hagemanfactor (FXII) wordt geactiveerd door beschadigd endotheel. Welke cascade leidt tot bradykinine?",
    options: [
      { letter: "A", text: "Stollingscascade" },
      { letter: "B", text: "Kininecascade (Factor XIIa → prekallikreïne → kallikreïne → kininogeen → bradykinine)" },
      { letter: "C", text: "Complementcascade" },
      { letter: "D", text: "Fibrinolytisch systeem" },
    ],
    correctAnswer: "B",
    category: "Plasma-cascades",
  },
  {
    id: 15,
    question: "Waar worden stollingsfactoren, acuutfase-eiwitten en complementfactoren voornamelijk geproduceerd?",
    options: [
      { letter: "A", text: "Lokaal door fagocyten" },
      { letter: "B", text: "Lokaal door mestcellen" },
      { letter: "C", text: "Systemisch door de lever" },
      { letter: "D", text: "Systemisch door de bijnierschors" },
    ],
    correctAnswer: "C",
    category: "Productielocatie",
  },
  {
    id: 16,
    question: "Pleiotropie bij cytokinen betekent:",
    options: [
      { letter: "A", text: "Meerdere cytokinen hebben hetzelfde effect" },
      { letter: "B", text: "Één cytokine heeft meerdere effecten" },
      { letter: "C", text: "Cytokinen werken alleen lokaal" },
      { letter: "D", text: "Cytokinen worden alleen door T-cellen gemaakt" },
    ],
    correctAnswer: "B",
    category: "Cytokinen",
  },
  {
    id: 17,
    question: "Lipoxinen, geproduceerd via lipoxygenasen, hebben een:",
    options: [
      { letter: "A", text: "Pro-inflammatoire werking" },
      { letter: "B", text: "Ontstekingsremmende werking" },
      { letter: "C", text: "Geen rol bij ontsteking" },
      { letter: "D", text: "Alleen vasoconstrictieve werking" },
    ],
    correctAnswer: "B",
    category: "Arachidonzuur",
  },
  {
    id: 18,
    question: "NO wordt door eNOS in het endotheel geproduceerd. Wat is de fysiologische functie in de vaatwand?",
    options: [
      { letter: "A", text: "Vasoconstrictie" },
      { letter: "B", text: "Vasodilatatie en relaxatie van gladde spiercellen" },
      { letter: "C", text: "Plaatjesaggregatie" },
      { letter: "D", text: "Chemotaxie" },
    ],
    correctAnswer: "B",
    category: "NO",
  },
]

// Wat is koorts questions (18)
const watIsKoortsQuestions = [
  {
    id: 1,
    question: "Waarom is de gemiddelde lichaamstemperatuur van de mens rond de 37°C?",
    options: [
      { letter: "A", text: "Alleen vanwege enzym efficiëntie" },
      { letter: "B", text: "Vanwege enzym efficiëntie, pathogeenverdediging, homeostase en evolutionaire aanpassing" },
      { letter: "C", text: "Alleen vanwege pathogeenverdediging" },
      { letter: "D", text: "Dat is niet waar; het is 36°C" },
    ],
    correctAnswer: "B",
    category: "Thermoregulatie",
  },
  {
    id: 2,
    question: "Welk orgaan is het centrale regelcentrum voor temperatuurregulatie?",
    options: [
      { letter: "A", text: "De lever" },
      { letter: "B", text: "De hypothalamus" },
      { letter: "C", text: "De schildklier" },
      { letter: "D", text: "De bijnier" },
    ],
    correctAnswer: "B",
    category: "Thermoregulatie",
  },
  {
    id: 3,
    question: "Welke mechanismen gebruikt het lichaam om warmte af te geven?",
    options: [
      { letter: "A", text: "Vasoconstrictie en rillen" },
      { letter: "B", text: "Zweten, vasodilatatie en verlaagd basaal metabolisme" },
      { letter: "C", text: "Pilo-erectie en verhoogde activiteit" },
      { letter: "D", text: "Alleen vasoconstrictie" },
    ],
    correctAnswer: "B",
    category: "Thermoregulatie",
  },
  {
    id: 4,
    question: "Wat is de grootste vorm van warmteverlies van het lichaam?",
    options: [
      { letter: "A", text: "Evaporatie (zweten)" },
      { letter: "B", text: "Radiatie (~60%)" },
      { letter: "C", text: "Conductie naar objecten" },
      { letter: "D", text: "Convectie" },
    ],
    correctAnswer: "B",
    category: "Thermoregulatie",
  },
  {
    id: 5,
    question: "Koorts is een fysiologische reactie die wordt geïnitieerd door:",
    options: [
      { letter: "A", text: "Directe schade aan de hypothalamus" },
      { letter: "B", text: "Pyrogenen" },
      { letter: "C", text: "Alleen virussen" },
      { letter: "D", text: "Paracetamol" },
    ],
    correctAnswer: "B",
    category: "Koorts",
  },
  {
    id: 6,
    question: "Welke cellen produceren endogene pyrogenen zoals IL-1, IL-6 en TNF-α?",
    options: [
      { letter: "A", text: "Erytrocyten" },
      { letter: "B", text: "Macrofagen en monocyten" },
      { letter: "C", text: "Alleen T-cellen" },
      { letter: "D", text: "Hepatocyten" },
    ],
    correctAnswer: "B",
    category: "Pyrogenen",
  },
  {
    id: 7,
    question: "PGE2 wordt gesynthetiseerd door welk enzym en wat is het effect?",
    options: [
      { letter: "A", text: "Lipoxygenase; verlaagt de setpoint" },
      { letter: "B", text: "Cyclo-oxygenase (COX); verhoogt de setpoint-temperatuur in de hypothalamus" },
      { letter: "C", text: "Myeloperoxidase; remt koorts" },
      { letter: "D", text: "NADPH-oxidase; verhoogt de temperatuur" },
    ],
    correctAnswer: "B",
    category: "PGE2",
  },
  {
    id: 8,
    question: "Welke fysiologische reacties treden op wanneer de hypothalamus de setpoint-temperatuur verhoogt?",
    options: [
      { letter: "A", text: "Vasodilatatie en zweten" },
      { letter: "B", text: "Vasoconstrictie, rillen, verhoogde stofwisseling en gedragsveranderingen" },
      { letter: "C", text: "Alleen gedragsveranderingen" },
      { letter: "D", text: "Geen; de temperatuur stijgt automatisch" },
    ],
    correctAnswer: "B",
    category: "Setpoint",
  },
  {
    id: 9,
    question: "Wat zijn logische verschijnselen wanneer de koorts weer zakt?",
    options: [
      { letter: "A", text: "Vasoconstrictie en rillen" },
      { letter: "B", text: "Vasodilatatie, zweten en lichte kleding willen dragen" },
      { letter: "C", text: "Onder dikke dekens kruipen" },
      { letter: "D", text: "Verhoogde activiteit" },
    ],
    correctAnswer: "B",
    category: "Koortsdaling",
  },
  {
    id: 10,
    question: "Hoe verschilt hyperthermie van koorts?",
    options: [
      { letter: "A", text: "Hyperthermie is ernstiger dan koorts" },
      { letter: "B", text: "Bij hyperthermie is het setpoint onveranderd; bij koorts wordt het setpoint verhoogd" },
      { letter: "C", text: "Er is geen verschil" },
      { letter: "D", text: "Hyperthermie wordt veroorzaakt door virussen" },
    ],
    correctAnswer: "B",
    category: "Hyperthermie",
  },
  {
    id: 11,
    question: "Wat is een fysiologische functie van koorts?",
    options: [
      { letter: "A", text: "Koorts heeft geen nut" },
      { letter: "B", text: "Betere motiliteit van leukocyten, stimulatie interferonproductie, T-celactivatie en remming van pathogeen-groei" },
      { letter: "C", text: "Alleen remming van pathogeen-groei" },
      { letter: "D", text: "Snellere genezing door temperatuurverlaging" },
    ],
    correctAnswer: "B",
    category: "Functie koorts",
  },
  {
    id: 12,
    question: "Waarop moet paracetamol bij kinderen worden gedoseerd?",
    options: [
      { letter: "A", text: "Op leeftijd" },
      { letter: "B", text: "Op gewicht" },
      { letter: "C", text: "Op lengte" },
      { letter: "D", text: "Paracetamol is niet veilig voor kinderen" },
    ],
    correctAnswer: "B",
    category: "Paracetamol",
  },
  {
    id: 13,
    question: "Is koorts an sich een indicatie voor paracetamol?",
    options: [
      { letter: "A", text: "Ja, altijd" },
      { letter: "B", text: "Nee; paracetamol kan wel zinvol zijn bij vochtintake of pijn" },
      { letter: "C", text: "Alleen bij kinderen onder 1 jaar" },
      { letter: "D", text: "Alleen bij hoge koorts (>40°C)" },
    ],
    correctAnswer: "B",
    category: "Paracetamol",
  },
  {
    id: 14,
    question: "Wat is een nadeel van paracetamol bij koorts?",
    options: [
      { letter: "A", text: "Het verlaagt de temperatuur te snel" },
      { letter: "B", text: "Onderdrukking van een natuurlijke immuunreactie; bijwerkingen en levertoxiciteit" },
      { letter: "C", text: "Het werkt niet bij kinderen" },
      { letter: "D", text: "Er zijn geen nadelen" },
    ],
    correctAnswer: "B",
    category: "Paracetamol",
  },
  {
    id: 15,
    question: "Waar kunnen adequate doseringen paracetamol voor kinderen worden gevonden?",
    options: [
      { letter: "A", text: "Alleen in de bijsluiter" },
      { letter: "B", text: "In het kinderformularium (www.kinderformularium.nl)" },
      { letter: "C", text: "Er zijn geen officiële bronnen" },
      { letter: "D", text: "Alleen via de apotheker" },
    ],
    correctAnswer: "B",
    category: "Paracetamol",
  },
  {
    id: 16,
    question: "Bij een kind met koorts is het van belang om:",
    options: [
      { letter: "A", text: "Alleen de temperatuur te meten" },
      { letter: "B", text: "Alarmsymptomen te herkennen, de ernst in te schatten en een focus van de koorts te vinden" },
      { letter: "C", text: "Direct antibiotica te geven" },
      { letter: "D", text: "Altijd paracetamol te geven" },
    ],
    correctAnswer: "B",
    category: "Alarmsymptomen",
  },
  {
    id: 17,
    question: "Welke voorbeelden van exogene pyrogenen bestaan er?",
    options: [
      { letter: "A", text: "IL-1 en TNF-α" },
      { letter: "B", text: "LPS (lipopolysacchariden), toxines van pathogenen" },
      { letter: "C", text: "Prostaglandine E2" },
      { letter: "D", text: "Paracetamol" },
    ],
    correctAnswer: "B",
    category: "Pyrogenen",
  },
  {
    id: 18,
    question: "In de stijgende fase van koorts voelt een patiënt zich vaak koud en rilt. Waarom?",
    options: [
      { letter: "A", text: "Omdat de omgeving koud is" },
      { letter: "B", text: "Het setpoint is verhoogd; de actuele temperatuur ligt eronder, dus het lichaam probeert op te warmen via vasoconstrictie en rillen" },
      { letter: "C", text: "Door bijwerkingen van paracetamol" },
      { letter: "D", text: "Omdat er geen koorts is" },
    ],
    correctAnswer: "B",
    category: "Koortsfasen",
  },
]

// Specifieke verwekkers lagere luchtweginfecties questions (18)
const specifiekeVerwekkersLagereLuchtweginfectiesQuestions = [
  {
    id: 1,
    question: "Zijn de lagere luchtwegen en longen bij gezonde personen een steriel milieu?",
    options: [
      { letter: "A", text: "Ja, de long is steriel" },
      { letter: "B", text: "Nee; het microbioom van de lagere luchtwegen is deels vergelijkbaar met dat van de hogere luchtwegen" },
      { letter: "C", text: "Alleen bij kinderen" },
      { letter: "D", text: "Alleen bij COPD-patiënten" },
    ],
    correctAnswer: "B",
    category: "Microbioom",
  },
  {
    id: 2,
    question: "Wat is het verschil tussen CAP en HAP qua verwekkers?",
    options: [
      { letter: "A", text: "Er is geen verschil" },
      { letter: "B", text: "Bij HAP worden vaker gram-negatieve verwekkers aangetroffen dan in de gemeenschap; antibioticabeleid is breder" },
      { letter: "C", text: "Bij CAP zijn er meer virussen" },
      { letter: "D", text: "HAP wordt alleen door Legionella veroorzaakt" },
    ],
    correctAnswer: "B",
    category: "CAP",
  },
  {
    id: 3,
    question: "Welke bacterie is wereldwijd de meest voorkomende typische verwekker van CAP?",
    options: [
      { letter: "A", text: "Haemophilus influenzae" },
      { letter: "B", text: "Streptococcus pneumoniae (pneumokok)" },
      { letter: "C", text: "Legionella pneumophila" },
      { letter: "D", text: "Mycoplasma pneumoniae" },
    ],
    correctAnswer: "B",
    category: "Pneumokok",
  },
  {
    id: 4,
    question: "Waarom is de pneumokokken urine-antigeentest niet aanbevolen bij jonge kinderen?",
    options: [
      { letter: "A", text: "De test is te duur" },
      { letter: "B", text: "Frequente pneumokokkendragerschap kan leiden tot vals-positieve resultaten; de test is onvoldoende specifiek" },
      { letter: "C", text: "Kinderen produceren geen urine" },
      { letter: "D", text: "De test werkt alleen bij volwassenen" },
    ],
    correctAnswer: "B",
    category: "Pneumokok diagnostiek",
  },
  {
    id: 5,
    question: "Welke patiëntengroep heeft een verhoogd risico op pneumokokkenpneumonie?",
    options: [
      { letter: "A", text: "Alleen kinderen onder 5 jaar" },
      { letter: "B", text: "HIV-patiënten hebben een significant verhoogd risico op invasieve pneumokokkenziekte" },
      { letter: "C", text: "Alleen zwangere vrouwen" },
      { letter: "D", text: "Alleen diabetici" },
    ],
    correctAnswer: "B",
    category: "Pneumokok",
  },
  {
    id: 6,
    question: "Is Haemophilus influenzae de verwekker van de griep?",
    options: [
      { letter: "A", text: "Ja, H. influenzae veroorzaakt griep" },
      { letter: "B", text: "Nee; ondanks de naam is H. influenzae een bacterie die lagere luchtweginfecties kan veroorzaken, niet het influenzavirus" },
      { letter: "C", text: "Alleen serotype b" },
      { letter: "D", text: "Alleen bij kinderen" },
    ],
    correctAnswer: "B",
    category: "Haemophilus",
  },
  {
    id: 7,
    question: "Welke bacterie is een van de meest voorkomende bacteriële oorzaken van COPD-exacerbaties?",
    options: [
      { letter: "A", text: "Streptococcus pneumoniae" },
      { letter: "B", text: "Haemophilus influenzae" },
      { letter: "C", text: "Legionella pneumophila" },
      { letter: "D", text: "Mycoplasma pneumoniae" },
    ],
    correctAnswer: "B",
    category: "Haemophilus",
  },
  {
    id: 8,
    question: "Welke van de volgende zijn atypische verwekkers van CAP?",
    options: [
      { letter: "A", text: "Pneumokokken en Haemophilus influenzae" },
      { letter: "B", text: "Coxiella burnetii, Legionella species, Chlamydia psittaci en Mycoplasma pneumoniae" },
      { letter: "C", text: "Staphylococcus aureus en Klebsiella" },
      { letter: "D", text: "Alleen virussen" },
    ],
    correctAnswer: "B",
    category: "Atypisch",
  },
  {
    id: 9,
    question: "Waarom zijn atypische verwekkers niet goed te behandelen met beta-lactam antibiotica?",
    options: [
      { letter: "A", text: "Ze zijn resistent tegen alle antibiotica" },
      { letter: "B", text: "Ze zijn moeilijk te detecteren met Gram-preparaat, moeilijk te kweken en hebben vaak geen celwand (beta-lactam werkt op celwandsynthese)" },
      { letter: "C", text: "Beta-lactam werkt alleen bij virussen" },
      { letter: "D", text: "Ze komen alleen in het ziekenhuis voor" },
    ],
    correctAnswer: "B",
    category: "Atypisch",
  },
  {
    id: 10,
    question: "Bij een patiënt met pneumonie die niet verbetert na amoxicillin, en recent in een ongebruikte vakantiewoning verbleef: aan welke verwekker moet je denken?",
    options: [
      { letter: "A", text: "Alleen pneumokokken" },
      { letter: "B", text: "Legionella pneumophila" },
      { letter: "C", text: "Haemophilus influenzae" },
      { letter: "D", text: "Alleen virussen" },
    ],
    correctAnswer: "B",
    category: "Legionella",
  },
  {
    id: 11,
    question: "Hoe wordt Legionella pneumophila voornamelijk overgedragen?",
    options: [
      { letter: "A", text: "Via direct contact" },
      { letter: "B", text: "Via wateraerosolen (inhalatie)" },
      { letter: "C", text: "Via voedsel" },
      { letter: "D", text: "Via bloedtransfusie" },
    ],
    correctAnswer: "B",
    category: "Legionella",
  },
  {
    id: 12,
    question: "Welke extrapulmonale symptomen komen vaak voor bij Legionella-pneumonie?",
    options: [
      { letter: "A", text: "Alleen huiduitslag" },
      { letter: "B", text: "Neuropsychologisch (hoofdpijn, lethargie, verwardheid) in 60%, diarree 25%, misselijkheid/braken 20%" },
      { letter: "C", text: "Geen extrapulmonale symptomen" },
      { letter: "D", text: "Alleen gewrichtspijn" },
    ],
    correctAnswer: "B",
    category: "Legionella",
  },
  {
    id: 13,
    question: "Welke verwekker wordt geassocieerd met 'walking pneumonia'?",
    options: [
      { letter: "A", text: "Streptococcus pneumoniae" },
      { letter: "B", text: "Mycoplasma pneumoniae" },
      { letter: "C", text: "Legionella pneumophila" },
      { letter: "D", text: "Haemophilus influenzae" },
    ],
    correctAnswer: "B",
    category: "Mycoplasma",
  },
  {
    id: 14,
    question: "Waarom werken beta-lactam antibiotica niet tegen Mycoplasma pneumoniae?",
    options: [
      { letter: "A", text: "Mycoplasma is een virus" },
      { letter: "B", text: "Mycoplasma heeft geen celwand; beta-lactam remt celwandsynthese" },
      { letter: "C", text: "Mycoplasma produceert beta-lactamase" },
      { letter: "D", text: "Beta-lactam werkt wel tegen Mycoplasma" },
    ],
    correctAnswer: "B",
    category: "Mycoplasma",
  },
  {
    id: 15,
    question: "Hoe vaak treden verheffingen van Mycoplasma pneumoniae-infecties op?",
    options: [
      { letter: "A", text: "Elke winter" },
      { letter: "B", text: "Elke 4 tot 7 jaar" },
      { letter: "C", text: "Alleen in de zomer" },
      { letter: "D", text: "Nooit" },
    ],
    correctAnswer: "B",
    category: "Mycoplasma",
  },
  {
    id: 16,
    question: "Welke definitie van pneumonie wordt in internationale richtlijnen gebruikt?",
    options: [
      { letter: "A", text: "Alleen koorts en hoest" },
      { letter: "B", text: "Nieuw longinfiltraat op thoraxfoto + ten minste drie van: verminderd ademgeruis, bronchiaal ademgeruis, fijne crepitaties, abnormale stemfremitus, gedempte percussie" },
      { letter: "C", text: "Alleen positieve sputumkweek" },
      { letter: "D", text: "Alleen dyspnoe" },
    ],
    correctAnswer: "B",
    category: "CAP",
  },
  {
    id: 17,
    question: "Welk serotype van Haemophilus influenzae is het meest virulent?",
    options: [
      { letter: "A", text: "Serotype a" },
      { letter: "B", text: "Serotype b (Hib)" },
      { letter: "C", text: "Serotype f" },
      { letter: "D", text: "Alle serotypes even virulent" },
    ],
    correctAnswer: "B",
    category: "Haemophilus",
  },
  {
    id: 18,
    question: "Bij welke temperatuur vermenigvuldigt Legionella zich?",
    options: [
      { letter: "A", text: "Onder 10°C" },
      { letter: "B", text: "Tussen 20 en 45°C" },
      { letter: "C", text: "Alleen boven 50°C" },
      { letter: "D", text: "Alleen bij vriespunt" },
    ],
    correctAnswer: "B",
    category: "Legionella",
  },
]

// Therapie lagere luchtweginfecties questions (18)
const therapieLagereLuchtweginfectiesQuestions = [
  {
    id: 1,
    question: "Wat bepaalt de indicatie voor behandeling van lagere luchtweginfecties?",
    options: [
      { letter: "A", text: "Alleen de duur van de klachten" },
      { letter: "B", text: "De ernst van de klachten én het risico op een bijzondere verwekker" },
      { letter: "C", text: "Alleen de leeftijd van de patiënt" },
      { letter: "D", text: "Alleen de aanwezigheid van koorts" },
    ],
    correctAnswer: "B",
    category: "Indicatie",
  },
  {
    id: 2,
    question: "Een patiënt met pneumonie heeft eerder antibiotica gehad voor dezelfde klachten. Waar moet je aan denken?",
    options: [
      { letter: "A", text: "Geen consequenties voor de behandeling" },
      { letter: "B", text: "Resistentie; dit kan de empirische keuze beïnvloeden" },
      { letter: "C", text: "Alleen virale infectie" },
      { letter: "D", text: "Verwijzing is altijd nodig" },
    ],
    correctAnswer: "B",
    category: "Anamnese",
  },
  {
    id: 3,
    question: "Bloed ophoesten bij een patiënt met luchtweginfectie: aan welke verwekker moet je denken?",
    options: [
      { letter: "A", text: "Alleen pneumokokken" },
      { letter: "B", text: "Tuberculose" },
      { letter: "C", text: "Mycoplasma pneumoniae" },
      { letter: "D", text: "Legionella" },
    ],
    correctAnswer: "B",
    category: "Anamnese",
  },
  {
    id: 4,
    question: "Welke risicofactor verhoogt het risico op een ernstiger beloop van pneumonie?",
    options: [
      { letter: "A", text: "Leeftijd tussen 20 en 40 jaar" },
      { letter: "B", text: "Leeftijd <3 maanden of >75 jaar" },
      { letter: "C", text: "Geen comorbiditeit" },
      { letter: "D", text: "Normale immuunstatus" },
    ],
    correctAnswer: "B",
    category: "Risicofactoren",
  },
  {
    id: 5,
    question: "Welke comorbiditeit verhoogt het risico op ernstiger beloop van pneumonie?",
    options: [
      { letter: "A", text: "Geen van deze" },
      { letter: "B", text: "Hart- en longziekten, diabetes mellitus, neurologische aandoeningen, lever- of nierfunctiestoornissen, immunodeficiëntie, prematuriteit" },
      { letter: "C", text: "Alleen hypertensie" },
      { letter: "D", text: "Alleen astma" },
    ],
    correctAnswer: "B",
    category: "Risicofactoren",
  },
  {
    id: 6,
    question: "Bij welke anamnese moet je denken aan een atypische verwekker zoals Chlamydia psittaci?",
    options: [
      { letter: "A", text: "Huisgenoten ziek" },
      { letter: "B", text: "Duivencontact" },
      { letter: "C", text: "Eerdere antibiotica" },
      { letter: "D", text: "Diabetes mellitus" },
    ],
    correctAnswer: "B",
    category: "Atypisch",
  },
  {
    id: 7,
    question: "Wat is de eerste keus antibiotica voor pneumonie volgens de NHG-standaard?",
    options: [
      { letter: "A", text: "Doxycycline" },
      { letter: "B", text: "Amoxicilline" },
      { letter: "C", text: "Azitromycine" },
      { letter: "D", text: "Ciprofloxacine" },
    ],
    correctAnswer: "B",
    category: "Behandeling",
  },
  {
    id: 8,
    question: "Bij onvoldoende effect van amoxicilline na 2 dagen: wat is een passende vervolgstap?",
    options: [
      { letter: "A", text: "Verhogen van de amoxicillinedosis" },
      { letter: "B", text: "Overschakelen naar doxycycline of azitromycine" },
      { letter: "C", text: "Stoppen met antibiotica" },
      { letter: "D", text: "Alleen paracetamol toevoegen" },
    ],
    correctAnswer: "B",
    category: "Behandeling",
  },
  {
    id: 9,
    question: "Wat is de CURB-65 score en wanneer is thuisbehandeling passend?",
    options: [
      { letter: "A", text: "CURB-65 2 of hoger: thuis behandelen" },
      { letter: "B", text: "CURB-65 0–1: thuis behandelen; 2: ziekenhuis; 3+: ernstig/ICU" },
      { letter: "C", text: "CURB-65 is niet relevant voor verwijzing" },
      { letter: "D", text: "CURB-65 3+: thuis behandelen" },
    ],
    correctAnswer: "B",
    category: "CURB-65",
  },
  {
    id: 10,
    question: "Wanneer moet je een patiënt met pneumonie verwijzen naar het ziekenhuis?",
    options: [
      { letter: "A", text: "Alleen bij koorts" },
      { letter: "B", text: "Bij ernstig ziek zijn, verslechtering, onvoldoende verbetering na behandeling, of aanhoudende klachten" },
      { letter: "C", text: "Nooit bij thuisbehandeling" },
      { letter: "D", text: "Alleen bij kinderen" },
    ],
    correctAnswer: "B",
    category: "Verwijzing",
  },
  {
    id: 11,
    question: "Wat is belangrijk bij thuisbehandeling van pneumonie?",
    options: [
      { letter: "A", text: "Geen instructies nodig" },
      { letter: "B", text: "Goede instructies; plotseling bloed ophoesten is reden voor contact; controles na 24–48 uur" },
      { letter: "C", text: "Alleen controle na 1 week" },
      { letter: "D", text: "Geen follow-up nodig" },
    ],
    correctAnswer: "B",
    category: "Thuisbehandeling",
  },
  {
    id: 12,
    question: "Wanneer moet je contact opnemen bij een patiënt die thuis antibiotica gebruikt voor pneumonie?",
    options: [
      { letter: "A", text: "Alleen na 1 week" },
      { letter: "B", text: "Controle na 24 uur; contact na 48–72 uur bij onvoldoende verbetering" },
      { letter: "C", text: "Nooit tussentijds" },
      { letter: "D", text: "Alleen bij koorts" },
    ],
    correctAnswer: "B",
    category: "Instructies",
  },
  {
    id: 13,
    question: "Welke alarmsymptomen bij pneumonie vereisen direct contact?",
    options: [
      { letter: "A", text: "Alleen milde hoest" },
      { letter: "B", text: "Toenemende klachten, kortademigheid, aanhoudende koorts, pijn op de borst, hemoptoë" },
      { letter: "C", text: "Geen alarmsymptomen" },
      { letter: "D", text: "Alleen vermoeidheid" },
    ],
    correctAnswer: "B",
    category: "Alarmsymptomen",
  },
  {
    id: 14,
    question: "Hoe vaak komt pleuravocht/empyeem voor bij bacteriële pneumonie?",
    options: [
      { letter: "A", text: "Minder dan 5%" },
      { letter: "B", text: "Ongeveer 40%; 5–10% is gecompliceerd" },
      { letter: "C", text: "Meer dan 80%" },
      { letter: "D", text: "Nooit" },
    ],
    correctAnswer: "B",
    category: "Complicatie",
  },
  {
    id: 15,
    question: "Wanneer is drainage geïndiceerd bij pleuravocht bij pneumonie?",
    options: [
      { letter: "A", text: "Bij elk pleuravocht" },
      { letter: "B", text: "Bij pus (empyeem)" },
      { letter: "C", text: "Nooit" },
      { letter: "D", text: "Alleen bij virale pneumonie" },
    ],
    correctAnswer: "B",
    category: "Empyeem",
  },
  {
    id: 16,
    question: "Welke verwekkers worden het vaakst geassocieerd met empyeem?",
    options: [
      { letter: "A", text: "Alleen virussen" },
      { letter: "B", text: "S. pneumoniae, S. aureus, E. coli, Klebsiella, anaeroben" },
      { letter: "C", text: "Alleen atypische verwekkers" },
      { letter: "D", text: "Mycoplasma pneumoniae" },
    ],
    correctAnswer: "B",
    category: "Empyeem",
  },
  {
    id: 17,
    question: "Bij reisanamnese en pneumonie: aan welke atypische verwekker moet je denken?",
    options: [
      { letter: "A", text: "Mycoplasma pneumoniae" },
      { letter: "B", text: "Legionella" },
      { letter: "C", text: "Chlamydia psittaci" },
      { letter: "D", text: "Coxiella burnetii" },
    ],
    correctAnswer: "B",
    category: "Atypisch",
  },
  {
    id: 18,
    question: "Waarom is anamnese belangrijk bij de keuze voor behandeling van lagere luchtweginfecties?",
    options: [
      { letter: "A", text: "Alleen voor de diagnose" },
      { letter: "B", text: "Voor empirische keuze; bijzondere verwekkers kunnen andere behandeling vragen" },
      { letter: "C", text: "Niet relevant voor behandeling" },
      { letter: "D", text: "Alleen voor verwijzing" },
    ],
    correctAnswer: "B",
    category: "Anamnese",
  },
]

// Homing, migratie en recirculatie questions (18)
const homingMigratieRecirculatieQuestions = [
  {
    id: 1,
    question: "Waar herkennen lymfocyten hun antigeen vooral?",
    options: [
      { letter: "A", text: "In het bloed" },
      { letter: "B", text: "In de lymfeklier" },
      { letter: "C", text: "In het beenmerg" },
      { letter: "D", text: "In de thymus" },
    ],
    correctAnswer: "B",
    category: "Circulatie",
  },
  {
    id: 2,
    question: "Via welke route komen de meeste lymfocyten (95%) de lymfeklier binnen?",
    options: [
      { letter: "A", text: "Via de afferente lymfe" },
      { letter: "B", text: "Via de hoog endotheliale venulen (HEV)" },
      { letter: "C", text: "Via de efferente lymfe" },
      { letter: "D", text: "Via de medullaire sinus" },
    ],
    correctAnswer: "B",
    category: "HEV",
  },
  {
    id: 3,
    question: "Waar worden B-lymfocyten geproduceerd?",
    options: [
      { letter: "A", text: "In de thymus" },
      { letter: "B", text: "In het beenmerg" },
      { letter: "C", text: "In de lymfeklier" },
      { letter: "D", text: "In de milt" },
    ],
    correctAnswer: "B",
    category: "B-cellen",
  },
  {
    id: 4,
    question: "Wat bepaalt of een B-cel in de lymfeklier geactiveerd wordt en uitrijpt?",
    options: [
      { letter: "A", text: "De route waarlangs de B-cel de lymfeklier binnenkwam" },
      { letter: "B", text: "Herkenning van vrij antigeen door de B-cel en het krijgen van CD4+ T-celhulp" },
      { letter: "C", text: "De productie van chemokinen door fibroblasten" },
      { letter: "D", text: "Stimulatie door dendritische cellen in de paracortex" },
    ],
    correctAnswer: "B",
    category: "B-cellen",
  },
  {
    id: 5,
    question: "Hoe komen B-geheugencellen uit de lymfeklier in het bloed?",
    options: [
      { letter: "A", text: "Via de afferente lymfe" },
      { letter: "B", text: "Via de efferente lymfe en de ductus thoracicus" },
      { letter: "C", text: "Direct via de HEV" },
      { letter: "D", text: "Via de medullaire sinus" },
    ],
    correctAnswer: "B",
    category: "Recirculatie",
  },
  {
    id: 6,
    question: "In welk orgaan vindt de uitrijping van pro-T-lymfocyt tot naïeve T-lymfocyt plaats?",
    options: [
      { letter: "A", text: "Beenmerg" },
      { letter: "B", text: "Thymus" },
      { letter: "C", text: "Lymfeklier" },
      { letter: "D", text: "Milt" },
    ],
    correctAnswer: "B",
    category: "T-cellen",
  },
  {
    id: 7,
    question: "Waar komen naïeve T-cellen in de lymfeklier terecht?",
    options: [
      { letter: "A", text: "In de follikels (outer cortex)" },
      { letter: "B", text: "In de paracortex (binnenste schors)" },
      { letter: "C", text: "In de mergstrengen" },
      { letter: "D", text: "In de medullaire sinus" },
    ],
    correctAnswer: "B",
    category: "T-cellen",
  },
  {
    id: 8,
    question: "Welke moleculen spelen een rol bij het afremmen en hechten van lymfocyten aan het endotheel?",
    options: [
      { letter: "A", text: "Alleen antilichamen" },
      { letter: "B", text: "Selectinen, adressinen en integrinen" },
      { letter: "C", text: "Alleen chemokinen" },
      { letter: "D", text: "Alleen complement" },
    ],
    correctAnswer: "B",
    category: "Transmigratie",
  },
  {
    id: 9,
    question: "Hoe wijkt de morfologie van HEV-endotheel af van normaal endotheel?",
    options: [
      { letter: "A", text: "HEV-endotheelcellen zijn langer" },
      { letter: "B", text: "HEV-endotheelcellen zijn hoger en bevatten meer cytoplasma" },
      { letter: "C", text: "HEV-endotheelcellen hebben meer uitlopers" },
      { letter: "D", text: "Er is geen verschil" },
    ],
    correctAnswer: "B",
    category: "HEV",
  },
  {
    id: 10,
    question: "Welke binding is correct voor naïeve T-lymfocyten bij homing via de HEV?",
    options: [
      { letter: "A", text: "L-selectine bindt aan GlyCAM-1" },
      { letter: "B", text: "L-selectine bindt aan ICAM-1" },
      { letter: "C", text: "CCR7 bindt aan GlyCAM-1" },
      { letter: "D", text: "LFA-1 bindt aan CCL19" },
    ],
    correctAnswer: "A",
    category: "Homing",
  },
  {
    id: 11,
    question: "Hoe draagt de morfologie van de HEV bij aan de migratie van lymfocyten?",
    options: [
      { letter: "A", text: "Het hoge endotheel zorgt ervoor dat het bloed niet verder kan stromen" },
      { letter: "B", text: "Het hoge endotheel zorgt voor wervelingen; lymfocyten botsen vaker tegen de wand en blijven makkelijker plakken" },
      { letter: "C", text: "Tussen de hoge endotheelcellen bevinden zich diepe instulpingen" },
      { letter: "D", text: "Het hoge endotheel remt chemokinen af" },
    ],
    correctAnswer: "B",
    category: "HEV",
  },
  {
    id: 12,
    question: "Wat is de eerste stap in het transmigratieproces van lymfocyten?",
    options: [
      { letter: "A", text: "Diapedese" },
      { letter: "B", text: "Rollen en adhesie" },
      { letter: "C", text: "Firm adhesion" },
      { letter: "D", text: "Chemokine receptor signaling" },
    ],
    correctAnswer: "B",
    category: "Transmigratie",
  },
  {
    id: 13,
    question: "Welke cellen zijn de eerste die het weefsel infiltreren bij een acute ontsteking?",
    options: [
      { letter: "A", text: "Lymfocyten" },
      { letter: "B", text: "Neutrofiele granulocyten" },
      { letter: "C", text: "B-geheugencellen" },
      { letter: "D", text: "Plasmacellen" },
    ],
    correctAnswer: "B",
    category: "Ontsteking",
  },
  {
    id: 14,
    question: "Welke moleculen spelen een rol bij rolling naar ontstekingslocaties?",
    options: [
      { letter: "A", text: "Alleen integrinen" },
      { letter: "B", text: "Sialyl-Lewis-X-gemodificeerde eiwitten (CD15), E-selectine en P-selectine" },
      { letter: "C", text: "Alleen L-selectine" },
      { letter: "D", text: "Alleen chemokinen" },
    ],
    correctAnswer: "B",
    category: "Ontsteking",
  },
  {
    id: 15,
    question: "Op welke cellen worden sialyl-Lewis-X-gemodificeerde eiwitten tot expressie gebracht?",
    options: [
      { letter: "A", text: "Alleen op lymfocyten" },
      { letter: "B", text: "Alleen op granulocyten en monocyten" },
      { letter: "C", text: "Op alle leukocyten" },
      { letter: "D", text: "Alleen op endotheelcellen" },
    ],
    correctAnswer: "B",
    category: "Ontsteking",
  },
  {
    id: 16,
    question: "Waar wordt E-selectine tot expressie gebracht?",
    options: [
      { letter: "A", text: "Op lymfocyten" },
      { letter: "B", text: "Alleen door endotheelcellen" },
      { letter: "C", text: "Op granulocyten" },
      { letter: "D", text: "Op dendritische cellen" },
    ],
    correctAnswer: "B",
    category: "Ontsteking",
  },
  {
    id: 17,
    question: "Waar produceren plasmacellen na activatie in de lymfeklier antilichamen?",
    options: [
      { letter: "A", text: "In de follikels" },
      { letter: "B", text: "In de mergstrengen van de lymfeklier" },
      { letter: "C", text: "In de paracortex" },
      { letter: "D", text: "In het bloed" },
    ],
    correctAnswer: "B",
    category: "B-cellen",
  },
  {
    id: 18,
    question: "Hoe lang duurt de volledige recirculatieroute van geheugencellen?",
    options: [
      { letter: "A", text: "Enkele minuten" },
      { letter: "B", text: "Ongeveer 24 uur" },
      { letter: "C", text: "Enkele weken" },
      { letter: "D", text: "Meerdere maanden" },
    ],
    correctAnswer: "B",
    category: "Recirculatie",
  },
]

// Infectieuze lymfadenopathie – tweede lijn questions (18)
const infectieuzeLymfadenopathieQuestions = [
  {
    id: 1,
    question: "HIV staat in de differentiaaldiagnose van lymfadenopathie. Waarom?",
    options: [
      { letter: "A", text: "HIV veroorzaakt nooit lymfadenopathie" },
      { letter: "B", text: "HIV is een belangrijke oorzaak van infectieuze lymfadenopathie en moet altijd overwogen worden" },
      { letter: "C", text: "Alleen bij immuungecompromitteerden" },
      { letter: "D", text: "Alleen bij kinderen" },
    ],
    correctAnswer: "B",
    category: "Differentiaaldiagnose",
  },
  {
    id: 2,
    question: "Welke niet-infectieuze oorzaken van lymfadenopathie bestaan er?",
    options: [
      { letter: "A", text: "Alleen maligniteiten" },
      { letter: "B", text: "Auto-immuunziekten (SLE, RA), maligniteiten (lymfomen, metastasen), iatrogene oorzaken (geneesmiddelen, vaccinaties), sarcoïdose" },
      { letter: "C", text: "Alleen virale infecties" },
      { letter: "D", text: "Geen" },
    ],
    correctAnswer: "B",
    category: "Differentiaaldiagnose",
  },
  {
    id: 3,
    question: "Welke verwekker veroorzaakt kattenkrabziekte?",
    options: [
      { letter: "A", text: "EBV" },
      { letter: "B", text: "Bartonella henselae" },
      { letter: "C", text: "Toxoplasma gondii" },
      { letter: "D", text: "Mycobacterium tuberculosis" },
    ],
    correctAnswer: "B",
    category: "Kattenkrabziekte",
  },
  {
    id: 4,
    question: "Welk bloedbeeld wordt typisch gezien bij acute EBV-infectie?",
    options: [
      { letter: "A", text: "Anemie met laag MCV" },
      { letter: "B", text: "Leukocytose met atypische lymfocyten" },
      { letter: "C", text: "Thrombocytopenie met petechiën" },
      { letter: "D", text: "Neutropenie" },
    ],
    correctAnswer: "B",
    category: "EBV",
  },
  {
    id: 5,
    question: "Hoe kan een CMV-infectie onderscheiden worden van EBV?",
    options: [
      { letter: "A", text: "CMV geeft geen mononucleosis" },
      { letter: "B", text: "Bij CMV is de Paul Bunnell-reactie (Monospot) negatief, bij EBV positief" },
      { letter: "C", text: "CMV geeft geen atypische lymfocyten" },
      { letter: "D", text: "CMV heeft meer complicaties" },
    ],
    correctAnswer: "B",
    category: "CMV",
  },
  {
    id: 6,
    question: "Welke complicatie kan optreden na amoxicilline bij EBV-infectie?",
    options: [
      { letter: "A", text: "Geen" },
      { letter: "B", text: "Rash (EBV-geïnduceerde allergische reactie)" },
      { letter: "C", text: "Miltruptuur" },
      { letter: "D", text: "Hepatitis" },
    ],
    correctAnswer: "B",
    category: "EBV",
  },
  {
    id: 7,
    question: "Hoe wordt toxoplasmose voornamelijk overgedragen?",
    options: [
      { letter: "A", text: "Alleen via bloedtransfusie" },
      { letter: "B", text: "Via kattenbak, tuin, gecontamineerde groenten, ongekookt vlees; ook bloed/orgaandonatie en congenitaal" },
      { letter: "C", text: "Alleen via kattenkrabben" },
      { letter: "D", text: "Aërogeen" },
    ],
    correctAnswer: "B",
    category: "Toxoplasmose",
  },
  {
    id: 8,
    question: "Welk percentage van postnataal verworven toxoplasmose-infecties verloopt asymptomatisch?",
    options: [
      { letter: "A", text: "Minder dan 20%" },
      { letter: "B", text: "80–90%" },
      { letter: "C", text: "100%" },
      { letter: "D", text: "50%" },
    ],
    correctAnswer: "B",
    category: "Toxoplasmose",
  },
  {
    id: 9,
    question: "Wat is de standaardbehandeling van toxoplasmose?",
    options: [
      { letter: "A", text: "Amoxicilline" },
      { letter: "B", text: "Pyrimethamine + sulfadiazine + folinezuur" },
      { letter: "C", text: "Doxycycline" },
      { letter: "D", text: "Geen behandeling nodig" },
    ],
    correctAnswer: "B",
    category: "Toxoplasmose",
  },
  {
    id: 10,
    question: "Hoe wordt kattenkrabziekte overgedragen?",
    options: [
      { letter: "A", text: "Via besmet voedsel" },
      { letter: "B", text: "Krab of beet van een kat" },
      { letter: "C", text: "Aërogeen" },
      { letter: "D", text: "Bloedtransfusie" },
    ],
    correctAnswer: "B",
    category: "Kattenkrabziekte",
  },
  {
    id: 11,
    question: "Welke diagnostiek is het meest gevoelig voor kattenkrabziekte?",
    options: [
      { letter: "A", text: "Serologie alleen" },
      { letter: "B", text: "PCR op pus of biopt" },
      { letter: "C", text: "Bloedkweek" },
      { letter: "D", text: "Röntgenfoto" },
    ],
    correctAnswer: "B",
    category: "Kattenkrabziekte",
  },
  {
    id: 12,
    question: "Wat is het beloop van kattenkrabziekte bij immuuncompetente patiënten?",
    options: [
      { letter: "A", text: "Altijd behandeling nodig" },
      { letter: "B", text: "Spontane genezing van de lymfadenitis na weken" },
      { letter: "C", text: "Chronisch progressief" },
      { letter: "D", text: "Altijd gecompliceerd" },
    ],
    correctAnswer: "B",
    category: "Kattenkrabziekte",
  },
  {
    id: 13,
    question: "Hoe presenteert tuberculeuze lymfadenitis zich klinisch?",
    options: [
      { letter: "A", text: "Acuut pijnlijke, rode klieren" },
      { letter: "B", text: "Vaste, geïsoleerde, chronische, niet-pijnlijke lymfadenopathie; vooral cervical (scrofula)" },
      { letter: "C", text: "Alleen bij kinderen" },
      { letter: "D", text: "Alleen met koorts" },
    ],
    correctAnswer: "B",
    category: "Tuberculose",
  },
  {
    id: 14,
    question: "Waar moet een lymfeklierbiopt bij verdenking tuberculeuze lymfadenitis naartoe?",
    options: [
      { letter: "A", text: "Alleen naar Pathologie" },
      { letter: "B", text: "Naar Medische Microbiologie, niet naar Pathologie" },
      { letter: "C", text: "Naar beide" },
      { letter: "D", text: "Naar het chemisch lab" },
    ],
    correctAnswer: "B",
    category: "Tuberculose",
  },
  {
    id: 15,
    question: "Welke uitspraak over tuberculose-diagnostiek is juist?",
    options: [
      { letter: "A", text: "Serologie/antistoffen zijn de gouden standaard voor actieve TB" },
      { letter: "B", text: "Mycobacteriële kweek is de gouden standaard; IGRA en TST zijn onvoldoende voor actieve TB" },
      { letter: "C", text: "Alleen PCR is betrouwbaar" },
      { letter: "D", text: "Röntgenfoto is voldoende" },
    ],
    correctAnswer: "B",
    category: "Tuberculose",
  },
  {
    id: 16,
    question: "Welke infectie wordt gekenmerkt door abcedering (pusvorming) van lymfeklieren?",
    options: [
      { letter: "A", text: "Alleen EBV" },
      { letter: "B", text: "Tuberculeuze lymfadenitis en kattenkrabziekte" },
      { letter: "C", text: "Alleen toxoplasmose" },
      { letter: "D", text: "Alleen CMV" },
    ],
    correctAnswer: "B",
    category: "Differentiaaldiagnose",
  },
  {
    id: 17,
    question: "Een 32-jarige heeft koorts, vermoeidheid en milde pijnloze halslymfadenopathie. Geen keelpijn. Atypische lymfocyten, Monospot negatief. Wat is de meest waarschijnlijke verwekker?",
    options: [
      { letter: "A", text: "EBV" },
      { letter: "B", text: "CMV" },
      { letter: "C", text: "Kattenkrabziekte" },
      { letter: "D", text: "Tuberculose" },
    ],
    correctAnswer: "B",
    category: "Casus",
  },
  {
    id: 18,
    question: "Hoe wordt EBV overgedragen?",
    options: [
      { letter: "A", text: "Aërogeen" },
      { letter: "B", text: "Speekselcontact ('kissing disease')" },
      { letter: "C", text: "Via katten" },
      { letter: "D", text: "Bloedtransfusie" },
    ],
    correctAnswer: "B",
    category: "EBV",
  },
]

// Introductie verworven immuniteit questions (18)
const introductieVerworvenImmuniteitQuestions = [
  {
    id: 1,
    question: "Waar vindt de initiatie van de verworven immuunrespons plaats?",
    options: [
      { letter: "A", text: "In het beenmerg" },
      { letter: "B", text: "In perifere lymfoïde organen" },
      { letter: "C", text: "In de thymus" },
      { letter: "D", text: "In de lever" },
    ],
    correctAnswer: "B",
    category: "Verworven immuniteit",
  },
  {
    id: 2,
    question: "Welk kenmerk onderscheidt verworven van aangeboren immuniteit?",
    options: [
      { letter: "A", text: "Verworven immuniteit gebruikt genoom-gecodeerde receptoren met patroonherkenning" },
      { letter: "B", text: "Verworven immuniteit heeft gerearrangeerde receptoren (TCR, BCR) en bouwt een geheugenpopulatie op" },
      { letter: "C", text: "Verworven immuniteit reageert sneller dan aangeboren" },
      { letter: "D", text: "Verworven immuniteit is niet-klonaal" },
    ],
    correctAnswer: "B",
    category: "Kenmerken",
  },
  {
    id: 3,
    question: "T-helpercellen herkennen antigeen gepresenteerd in HLA-II. Op welke cellen komt HLA-II voor?",
    options: [
      { letter: "A", text: "Alleen op dendritische cellen" },
      { letter: "B", text: "Op dendritische cellen, macrofagen en B-cellen" },
      { letter: "C", text: "Op alle kernhoudende cellen" },
      { letter: "D", text: "Alleen op cytotoxische T-cellen" },
    ],
    correctAnswer: "B",
    category: "T-lymfocyten",
  },
  {
    id: 4,
    question: "Cytotoxische T-cellen herkennen antigeen in HLA-I. Waar is HLA-I aanwezig?",
    options: [
      { letter: "A", text: "Alleen op antigeenpresenterende cellen" },
      { letter: "B", text: "Alleen op B-cellen en macrofagen" },
      { letter: "C", text: "Op alle kernhoudende cellen" },
      { letter: "D", text: "Alleen op dendritische cellen" },
    ],
    correctAnswer: "C",
    category: "T-lymfocyten",
  },
  {
    id: 5,
    question: "Welke marker onderscheidt T-helpercellen van cytotoxische T-cellen?",
    options: [
      { letter: "A", text: "CD4 op T-helpercellen, CD8 op cytotoxische T-cellen" },
      { letter: "B", text: "Beide hebben CD4" },
      { letter: "C", text: "Beide hebben CD8" },
      { letter: "D", text: "CD4 op cytotoxische T-cellen, CD8 op T-helpercellen" },
    ],
    correctAnswer: "A",
    category: "T-lymfocyten",
  },
  {
    id: 6,
    question: "Wat is het belangrijkste product van effector-B-lymfocyten?",
    options: [
      { letter: "A", text: "Cytokinen" },
      { letter: "B", text: "Antilichamen (antistoffen)" },
      { letter: "C", text: "Perforine en granzyme" },
      { letter: "D", text: "IFN-γ" },
    ],
    correctAnswer: "B",
    category: "B-lymfocyten",
  },
  {
    id: 7,
    question: "Welke cellen kunnen door T-helpercellen (via cytokinen) geactiveerd worden?",
    options: [
      { letter: "A", text: "Alleen B-cellen" },
      { letter: "B", text: "Macrofagen, cytotoxische T-cellen en B-cellen" },
      { letter: "C", text: "Virusgeïnfecteerde cellen direct" },
      { letter: "D", text: "Thymocyten" },
    ],
    correctAnswer: "B",
    category: "T-helpercellen",
  },
  {
    id: 8,
    question: "Welke lymfocyten zijn vooral betrokken bij afweer tegen bacteriën (extracellulair)?",
    options: [
      { letter: "A", text: "Cytotoxische T-lymfocyten" },
      { letter: "B", text: "B-lymfocyten (antistoffen)" },
      { letter: "C", text: "Alleen T-helpercellen" },
      { letter: "D", text: "Regulatoire T-cellen" },
    ],
    correctAnswer: "B",
    category: "Effectorfase",
  },
  {
    id: 9,
    question: "Welke lymfocyten zijn vooral betrokken bij afweer tegen virussen (intracellulair)?",
    options: [
      { letter: "A", text: "B-lymfocyten" },
      { letter: "B", text: "Cytotoxische T-lymfocyten" },
      { letter: "C", text: "Alleen T-helpercellen" },
      { letter: "D", text: "Folliculaire T-helpercellen alleen" },
    ],
    correctAnswer: "B",
    category: "Effectorfase",
  },
  {
    id: 10,
    question: "Welke T-helper subset produceert IFN-γ, TNF-α en IL-2 en is belangrijk voor intracellulaire pathogenen?",
    options: [
      { letter: "A", text: "Th2" },
      { letter: "B", text: "Th1" },
      { letter: "C", text: "Th17" },
      { letter: "D", text: "Tfh" },
    ],
    correctAnswer: "B",
    category: "T-helper subsets",
  },
  {
    id: 11,
    question: "Welke T-helper subset produceert IL-4 en IL-5 en is belangrijk voor afweer tegen parasitaire wormen?",
    options: [
      { letter: "A", text: "Th1" },
      { letter: "B", text: "Th2" },
      { letter: "C", text: "Th17" },
      { letter: "D", text: "Tfh" },
    ],
    correctAnswer: "B",
    category: "T-helper subsets",
  },
  {
    id: 12,
    question: "Welke T-helper subset produceert IL-17 en is belangrijk voor extracellulaire pathogenen en schimmels?",
    options: [
      { letter: "A", text: "Th1" },
      { letter: "B", text: "Th2" },
      { letter: "C", text: "Th17" },
      { letter: "D", text: "Tfh" },
    ],
    correctAnswer: "C",
    category: "T-helper subsets",
  },
  {
    id: 13,
    question: "Welke T-helper subset produceert IL-21 en helpt B-cellen bij proliferatie en differentiatie?",
    options: [
      { letter: "A", text: "Th1" },
      { letter: "B", text: "Th2" },
      { letter: "C", text: "Th17" },
      { letter: "D", text: "Tfh (folliculaire T-helpercellen)" },
    ],
    correctAnswer: "D",
    category: "T-helper subsets",
  },
  {
    id: 14,
    question: "Wat is de functie van regulatoire T-cellen (Treg)?",
    options: [
      { letter: "A", text: "Ze versterken de immuunrespons" },
      { letter: "B", text: "Ze reguleren de immuunrespons: voorkomen te lange of te sterke reactie, doven respons uit" },
      { letter: "C", text: "Ze produceren antilichamen" },
      { letter: "D", text: "Ze doden geïnfecteerde cellen" },
    ],
    correctAnswer: "B",
    category: "Regulatoire T-cellen",
  },
  {
    id: 15,
    question: "Bij afwezigheid van regulatoire T-cellen (Treg) neemt het risico toe op:",
    options: [
      { letter: "A", text: "Infecties" },
      { letter: "B", text: "Auto-immuunziekten en allergieën" },
      { letter: "C", text: "Lymfomen" },
      { letter: "D", text: "Neutropenie" },
    ],
    correctAnswer: "B",
    category: "Regulatoire T-cellen",
  },
  {
    id: 16,
    question: "Humorale immuniteit wordt vooral gemedieerd door:",
    options: [
      { letter: "A", text: "Cytotoxische T-cellen" },
      { letter: "B", text: "B-cellen en antistoffen" },
      { letter: "C", text: "Macrofagen" },
      { letter: "D", text: "Neutrofiele granulocyten" },
    ],
    correctAnswer: "B",
    category: "Humorale immuniteit",
  },
  {
    id: 17,
    question: "Cellulaire immuniteit wordt vooral gemedieerd door:",
    options: [
      { letter: "A", text: "B-cellen en antistoffen" },
      { letter: "B", text: "Cytotoxische T-cellen" },
      { letter: "C", text: "Neutrofielen" },
      { letter: "D", text: "Eosinofielen" },
    ],
    correctAnswer: "B",
    category: "Cellulaire immuniteit",
  },
  {
    id: 18,
    question: "De T-celreceptor (TCR) herkent antigeen alleen als het gepresenteerd wordt in:",
    options: [
      { letter: "A", text: "Vrije vorm in het bloed" },
      { letter: "B", text: "HLA-moleculen (MHC)" },
      { letter: "C", text: "Antilichamen" },
      { letter: "D", text: "Complement" },
    ],
    correctAnswer: "B",
    category: "T-celreceptor",
  },
  {
    id: 19,
    question: "Welke effectorstoffen gebruiken cytotoxische T-cellen om geïnfecteerde cellen te doden?",
    options: [
      { letter: "A", text: "Antistoffen" },
      { letter: "B", text: "Perforine en granzyme" },
      { letter: "C", text: "IL-4 en IL-5" },
      { letter: "D", text: "Complement" },
    ],
    correctAnswer: "B",
    category: "Effectorfase",
  },
  {
    id: 20,
    question: "Welke celtypen kunnen antigeen presenteren aan T-helpercellen (HLA-II)?",
    options: [
      { letter: "A", text: "Alleen dendritische cellen" },
      { letter: "B", text: "Dendritische cellen, macrofagen en B-cellen" },
      { letter: "C", text: "Alle kernhoudende cellen" },
      { letter: "D", text: "Alleen cytotoxische T-cellen" },
    ],
    correctAnswer: "B",
    category: "Antigeenpresentatie",
  },
]

// Secundaire lymfoïde organen questions (18)
const secundaireLymfoideOrganenQuestions = [
  {
    id: 1,
    question: "Wat is het verschil tussen primaire en secundaire lymfoïde organen?",
    options: [
      { letter: "A", text: "In primaire organen worden lymfocyten gevormd; in secundaire kunnen ze geactiveerd worden (immuunrespons)" },
      { letter: "B", text: "Primaire organen zijn groter dan secundaire" },
      { letter: "C", text: "Secundaire organen bevatten alleen B-cellen" },
      { letter: "D", text: "Er is geen functioneel verschil" },
    ],
    correctAnswer: "A",
    category: "Primaire vs secundaire",
  },
  {
    id: 2,
    question: "Welke organen zijn primaire lymfoïde organen?",
    options: [
      { letter: "A", text: "Lymfeklieren en milt" },
      { letter: "B", text: "Thymus en beenmerg" },
      { letter: "C", text: "Tonsillen en appendix" },
      { letter: "D", text: "Peyer-patches en adenoïden" },
    ],
    correctAnswer: "B",
    category: "Primaire vs secundaire",
  },
  {
    id: 3,
    question: "In welk gebied van de lymfeklier zijn follikels aanwezig?",
    options: [
      { letter: "A", text: "Medulla" },
      { letter: "B", text: "Paracortex" },
      { letter: "C", text: "Outer cortex" },
      { letter: "D", text: "Mergstrengen" },
    ],
    correctAnswer: "C",
    category: "Lymfeklier opbouw",
  },
  {
    id: 4,
    question: "In welk gebied van de lymfeklier zijn hoog endotheliale venulen (HEV) aanwezig?",
    options: [
      { letter: "A", text: "Outer cortex" },
      { letter: "B", text: "Paracortex" },
      { letter: "C", text: "Medulla" },
      { letter: "D", text: "Kapselsinus" },
    ],
    correctAnswer: "B",
    category: "Lymfeklier opbouw",
  },
  {
    id: 5,
    question: "Hoe herken je een HEV histologisch?",
    options: [
      { letter: "A", text: "Door platte endotheelcellen" },
      { letter: "B", text: "Door hoog (cuboidaal/kolomvormig) endotheel in plaats van plat endotheel" },
      { letter: "C", text: "Door de aanwezigheid van erytrocyten" },
      { letter: "D", text: "Door de afwezigheid van lymfocyten" },
    ],
    correctAnswer: "B",
    category: "HEV",
  },
  {
    id: 6,
    question: "Via welke route komt het grootste deel van de lymfocyten de lymfeklier binnen?",
    options: [
      { letter: "A", text: "Via de afferente lymfe (95%)" },
      { letter: "B", text: "Via de HEV (95%) en een klein deel via afferente lymfe (5%)" },
      { letter: "C", text: "Via de efferente lymfe" },
      { letter: "D", text: "Via de trabekelsinus" },
    ],
    correctAnswer: "B",
    category: "Routes",
  },
  {
    id: 7,
    question: "Waar bevinden zich de meeste dendritische cellen in de lymfeklier, en wat doen ze daar?",
    options: [
      { letter: "A", text: "In de outer cortex – presenteren antigeen aan B-cellen" },
      { letter: "B", text: "In de paracortex – presenteren antigeen aan T-cellen" },
      { letter: "C", text: "In de medulla – verwijderen apoptotische cellen" },
      { letter: "D", text: "In de sinussen – verwijderen antigeen uit de lymfe" },
    ],
    correctAnswer: "B",
    category: "Dendritische cellen",
  },
  {
    id: 8,
    question: "Waar zijn macrofagen vooral aanwezig in de lymfeklier, en wat is hun belangrijkste rol?",
    options: [
      { letter: "A", text: "In het T-celgebied – presenteren antigeen aan T-cellen" },
      { letter: "B", text: "In de sinussen – verwijderen antigeen en celafval uit de lymfe" },
      { letter: "C", text: "In de mergstrengen – opruimen van plasmacellen" },
      { letter: "D", text: "In de follikels – antigeenpresentatie tijdens kiemcentrumreactie" },
    ],
    correctAnswer: "B",
    category: "Macrofagen",
  },
  {
    id: 9,
    question: "Welke receptoren zijn belangrijk voor de functie van folliculaire dendritische cellen (FDC)?",
    options: [
      { letter: "A", text: "Alleen B-celreceptoren" },
      { letter: "B", text: "Complementreceptoren en Fc-receptoren" },
      { letter: "C", text: "Alleen Toll-like receptoren" },
      { letter: "D", text: "Alleen TCR" },
    ],
    correctAnswer: "B",
    category: "FDC",
  },
  {
    id: 10,
    question: "In welke gebieden van de lymfeklier zijn B-cellen (anti-IgM positief) vooral aanwezig?",
    options: [
      { letter: "A", text: "Alleen in de paracortex" },
      { letter: "B", text: "In de outer cortex en in de medulla" },
      { letter: "C", text: "Alleen in de kapselsinus" },
      { letter: "D", text: "Alleen in de trabekelsinus" },
    ],
    correctAnswer: "B",
    category: "B-lymfocyten",
  },
  {
    id: 11,
    question: "Waar produceren plasmacellen na activatie in de lymfeklier antilichamen?",
    options: [
      { letter: "A", text: "In de paracortex" },
      { letter: "B", text: "In de mergstrengen van de lymfeklier" },
      { letter: "C", text: "In de follikels" },
      { letter: "D", text: "In de HEV" },
    ],
    correctAnswer: "B",
    category: "Plasmacellen",
  },
  {
    id: 12,
    question: "Aan de aanwezigheid van welke structuur kun je het T-celgebied van de lymfeklier herkennen?",
    options: [
      { letter: "A", text: "Veel sinussen" },
      { letter: "B", text: "Hoog-endotheliale venulen (HEV)" },
      { letter: "C", text: "Follikels" },
      { letter: "D", text: "Afferente lymfevaten" },
    ],
    correctAnswer: "B",
    category: "T-lymfocyten",
  },
  {
    id: 13,
    question: "Hoe verklaar je de aanwezigheid van T-cellen in de mergstrengen en mergsinussen?",
    options: [
      { letter: "A", text: "Dit zijn T-cellen die de lymfeklier gaan verlaten (via efferente lymfe)" },
      { letter: "B", text: "Dit zijn T-cellen die hulp geven aan B-cellen" },
      { letter: "C", text: "Dit zijn T-cellen die net zijn aangekomen" },
      { letter: "D", text: "Dit zijn T-cellen die een rol spelen bij de kiemcentrumreactie" },
    ],
    correctAnswer: "A",
    category: "T-lymfocyten",
  },
  {
    id: 14,
    question: "Welke cellen verwerken antigenen die via de conduits worden aangevoerd in de paracortex?",
    options: [
      { letter: "A", text: "Macrofagen" },
      { letter: "B", text: "Dendritische cellen" },
      { letter: "C", text: "Folliculaire dendritische cellen" },
      { letter: "D", text: "Plasmacellen" },
    ],
    correctAnswer: "B",
    category: "Conduits",
  },
  {
    id: 15,
    question: "Hoe kunnen reticulair bindweefsel en fibroblasten een rol spelen bij de migratie van cellen door de lymfeklier?",
    options: [
      { letter: "A", text: "Alleen doordat er een drukgradiënt in de conduits is" },
      { letter: "B", text: "Cellen binden met adhesiemoleculen aan matrixeiwitten; fibroblasten produceren chemokinen per compartiment" },
      { letter: "C", text: "Het werkt als een zeef voor celgrootte" },
      { letter: "D", text: "Alleen door diffusie" },
    ],
    correctAnswer: "B",
    category: "Reticulair bindweefsel",
  },
  {
    id: 16,
    question: "Via welke route komen antigeen en dendritische cellen de lymfeklier binnen?",
    options: [
      { letter: "A", text: "Via de HEV" },
      { letter: "B", text: "Via de efferente lymfe" },
      { letter: "C", text: "Via de afferente lymfe" },
      { letter: "D", text: "Via de mergsinussen" },
    ],
    correctAnswer: "C",
    category: "Routes",
  },
  {
    id: 17,
    question: "Waar bevinden zich folliculaire dendritische cellen (FDC) en wat is hun relatie tot gewone dendritische cellen?",
    options: [
      { letter: "A", text: "In de paracortex; FDC zijn hetzelfde als gewone DC" },
      { letter: "B", text: "In de follikels; FDC zijn gerelateerd aan fibroblasten, niet aan de DC in de paracortex" },
      { letter: "C", text: "In de sinussen; FDC presenteren antigeen aan T-cellen" },
      { letter: "D", text: "In de medulla; FDC zijn macrofagen" },
    ],
    correctAnswer: "B",
    category: "FDC",
  },
  {
    id: 18,
    question: "Welke structuren bevinden zich in de outer cortex van de lymfeklier?",
    options: [
      { letter: "A", text: "Alleen HEV" },
      { letter: "B", text: "Kapsel, kapselsinus, follikels, trabekelsinus" },
      { letter: "C", text: "Mergstrengen en mergsinussen" },
      { letter: "D", text: "Alleen paracortex" },
    ],
    correctAnswer: "B",
    category: "Lymfeklier opbouw",
  },
]

// Antivirale therapie questions (18)
const antiviraleTherapieQuestions = [
  {
    id: 1,
    question: "Waarom moeten antivirale middelen virus-specifieke aangrijpingspunten hebben?",
    options: [
      { letter: "A", text: "Omdat virussen geen gastheercel nodig hebben" },
      { letter: "B", text: "Virussen repliceren in gastheercellen; middelen mogen de gastheercel niet schaden" },
      { letter: "C", text: "Omdat alle virussen hetzelfde zijn" },
      { letter: "D", text: "Antivirale middelen werken alleen buiten de cel" },
    ],
    correctAnswer: "B",
    category: "Introductie",
  },
  {
    id: 2,
    question: "Op welk punt in de influenza-replicatiecyclus grijpen neuraminidaseremmers aan?",
    options: [
      { letter: "A", text: "Bij fusie van het virus met de cel" },
      { letter: "B", text: "Bij transcriptie en replicatie in de nucleus" },
      { letter: "C", text: "Bij assembly en release (loslating virus van de cel)" },
      { letter: "D", text: "Bij binding aan de receptor" },
    ],
    correctAnswer: "C",
    category: "Influenza",
  },
  {
    id: 3,
    question: "Welk middel is het meest gebruikt voor orale behandeling van influenza?",
    options: [
      { letter: "A", text: "Zanamivir" },
      { letter: "B", text: "Oseltamivir" },
      { letter: "C", text: "Baloxavir" },
      { letter: "D", text: "Amantadine" },
    ],
    correctAnswer: "B",
    category: "Influenza",
  },
  {
    id: 4,
    question: "Bij welke patiënten met influenza is antivirale behandeling geïndiceerd?",
    options: [
      { letter: "A", text: "Alleen bij gezonde jongvolwassenen" },
      { letter: "B", text: "Kwetsbare patiënten (leeftijd, comorbiditeit) met klachten <48 uur" },
      { letter: "C", text: "Alleen bij ziekenhuisopname" },
      { letter: "D", text: "Bij klachten langer dan 1 week" },
    ],
    correctAnswer: "B",
    category: "Influenza",
  },
  {
    id: 5,
    question: "Welke behandeloptie kies je bij verdenking op een bacteriële superinfectie na influenza?",
    options: [
      { letter: "A", text: "Geen behandeling" },
      { letter: "B", text: "Antibiotica" },
      { letter: "C", text: "Verhogen van de dosis oseltamivir" },
      { letter: "D", text: "Paracetamol bijgeven" },
    ],
    correctAnswer: "B",
    category: "Influenza",
  },
  {
    id: 6,
    question: "Waarom is het belangrijk om voor het starten van nirmatrelvir/ritonavir (Paxlovid) te controleren welke andere medicatie de patiënt gebruikt?",
    options: [
      { letter: "A", text: "Veel geneesmiddelen inactiveren nirmatrelvir" },
      { letter: "B", text: "Ritonavir kan de spiegels van andere geneesmiddelen verhogen (CYP3A, Pgp-remmer)" },
      { letter: "C", text: "Veel geneesmiddelen inactiveren ritonavir" },
      { letter: "D", text: "Ritonavir verlaagt de spiegels van andere geneesmiddelen" },
    ],
    correctAnswer: "B",
    category: "SARS-CoV-2",
  },
  {
    id: 7,
    question: "Wat is de rol van ritonavir in de combinatie nirmatrelvir/ritonavir (Paxlovid)?",
    options: [
      { letter: "A", text: "Ritonavir remt direct SARS-CoV-2" },
      { letter: "B", text: "Ritonavir remt CYP450 en verhoogt daardoor de plasmaconcentratie van nirmatrelvir" },
      { letter: "C", text: "Ritonavir vervangt nirmatrelvir" },
      { letter: "D", text: "Ritonavir verlaagt de bijwerkingen" },
    ],
    correctAnswer: "B",
    category: "SARS-CoV-2",
  },
  {
    id: 8,
    question: "Binnen hoeveel dagen na begin klachten moet nirmatrelvir/ritonavir (Paxlovid) bij SARS-CoV-2 gestart worden?",
    options: [
      { letter: "A", text: "Binnen 24 uur" },
      { letter: "B", text: "Binnen 5 dagen" },
      { letter: "C", text: "Binnen 10 dagen" },
      { letter: "D", text: "Binnen 14 dagen" },
    ],
    correctAnswer: "B",
    category: "SARS-CoV-2",
  },
  {
    id: 9,
    question: "Hoe behandel je herpes simplex virus encefalitis?",
    options: [
      { letter: "A", text: "Ganciclovir iv 5 mg/kg 2× dd 14-21 dagen" },
      { letter: "B", text: "Valganciclovir 2× dd 900 mg per os" },
      { letter: "C", text: "Aciclovir iv 10 mg/kg 3× dd minimaal 14 dagen" },
      { letter: "D", text: "Valaciclovir 3× dd 1000 mg per os" },
    ],
    correctAnswer: "C",
    category: "HSV",
  },
  {
    id: 10,
    question: "Wat is het werkingsmechanisme van aciclovir?",
    options: [
      { letter: "A", text: "Remt virale neuraminidase" },
      { letter: "B", text: "Nucleoside-analoog dat selectief de replicatie van HSV-1, HSV-2 en VZV remt" },
      { letter: "C", text: "Remt het virale protease" },
      { letter: "D", text: "Remt het M2-ionkanaal" },
    ],
    correctAnswer: "B",
    category: "HSV",
  },
  {
    id: 11,
    question: "Welke virussen worden geremd door (val)aciclovir?",
    options: [
      { letter: "A", text: "Alleen CMV" },
      { letter: "B", text: "HSV-1, HSV-2 en VZV" },
      { letter: "C", text: "Alleen influenza" },
      { letter: "D", text: "SARS-CoV-2" },
    ],
    correctAnswer: "B",
    category: "HSV",
  },
  {
    id: 12,
    question: "Welk oraal middel is werkzaam tegen zowel CMV als HSV en VZV?",
    options: [
      { letter: "A", text: "Valaciclovir" },
      { letter: "B", text: "Valganciclovir" },
      { letter: "C", text: "Letermovir" },
      { letter: "D", text: "Maribavir" },
    ],
    correctAnswer: "B",
    category: "CMV",
  },
  {
    id: 13,
    question: "Valganciclovir is de prodrug van welk middel?",
    options: [
      { letter: "A", text: "Aciclovir" },
      { letter: "B", text: "Ganciclovir" },
      { letter: "C", text: "Oseltamivir" },
      { letter: "D", text: "Nirmatrelvir" },
    ],
    correctAnswer: "B",
    category: "CMV",
  },
  {
    id: 14,
    question: "Welke middelen zijn alleen werkzaam tegen CMV (niet tegen HSV of VZV)?",
    options: [
      { letter: "A", text: "Valganciclovir en ganciclovir" },
      { letter: "B", text: "Letermovir en maribavir" },
      { letter: "C", text: "Aciclovir en valaciclovir" },
      { letter: "D", text: "Oseltamivir en zanamivir" },
    ],
    correctAnswer: "B",
    category: "CMV",
  },
  {
    id: 15,
    question: "Waarom wordt baloxavir bij immuungecompromitteerde patiënten met influenza niet preferent gebruikt?",
    options: [
      { letter: "A", text: "Het is niet werkzaam tegen influenza" },
      { letter: "B", text: "Hoger risico op resistentieontwikkeling; oseltamivir heeft de voorkeur" },
      { letter: "C", text: "Het is alleen werkzaam tegen influenza B" },
      { letter: "D", text: "Het mag niet oraal gegeven worden" },
    ],
    correctAnswer: "B",
    category: "Influenza",
  },
  {
    id: 16,
    question: "Welke diagnostiek wordt gebruikt om influenza, SARS-CoV-2 en RSV te onderscheiden bij griepachtige klachten?",
    options: [
      { letter: "A", text: "Alleen serologie" },
      { letter: "B", text: "Nasofarynxuitstrijk voor moleculaire diagnostiek (multiplex PCR)" },
      { letter: "C", text: "Bloedkweek" },
      { letter: "D", text: "Röntgen thorax" },
    ],
    correctAnswer: "B",
    category: "Diagnostiek",
  },
  {
    id: 17,
    question: "Welke bronnen kun je raadplegen voor antivirale behandeladviezen?",
    options: [
      { letter: "A", text: "Alleen de huisarts" },
      { letter: "B", text: "NHG-richtlijn, FMS-richtlijn, antibiotica boekje Erasmus MC" },
      { letter: "C", text: "Alleen Wikipedia" },
      { letter: "D", text: "Geen bronnen nodig" },
    ],
    correctAnswer: "B",
    category: "Bronnen",
  },
  {
    id: 18,
    question: "Bij ernstig COVID-19 (ziekenhuis) met voornamelijk immunopathologisch beeld wordt vaak gestart met:",
    options: [
      { letter: "A", text: "Alleen antivirale middelen" },
      { letter: "B", text: "Dexamethason (ontstekingsremming); eventueel IL-6-remmers of JAK-remmer" },
      { letter: "C", text: "Alleen paracetamol" },
      { letter: "D", text: "Antibiotica" },
    ],
    correctAnswer: "B",
    category: "SARS-CoV-2",
  },
]

// De grote drie Malaria questions (18)
const deGroteDrieMalariaQuestions = [
  {
    id: 1,
    question: "In welke van onderstaande landen is malaria op dit moment endemisch?",
    options: [
      { letter: "A", text: "Angola, Maleisië, Pakistan en Brazilië" },
      { letter: "B", text: "Marokko, Angola en Brazilië" },
      { letter: "C", text: "Nederland, België en Duitsland" },
      { letter: "D", text: "Alleen in Zuidoost-Azië" },
    ],
    correctAnswer: "A",
    category: "Epidemiologie",
  },
  {
    id: 2,
    question: "Welke symptomen passen bij ongecompliceerde malaria?",
    options: [
      { letter: "A", text: "Nierinsufficiëntie en shock" },
      { letter: "B", text: "Hoofdpijn, spierpijn, misselijkheid en malaise" },
      { letter: "C", text: "Keelpijn en hoesten" },
      { letter: "D", text: "Verminderd bewustzijn" },
    ],
    correctAnswer: "B",
    category: "Klinische presentatie",
  },
  {
    id: 3,
    question: "Welke symptomen passen bij ernstige malaria?",
    options: [
      { letter: "A", text: "Hoofdpijn en spierpijn" },
      { letter: "B", text: "Nierinsufficiëntie, acidose, shock en verminderd bewustzijn" },
      { letter: "C", text: "Keelpijn en jeuk" },
      { letter: "D", text: "Alleen koorts" },
    ],
    correctAnswer: "B",
    category: "Klinische presentatie",
  },
  {
    id: 4,
    question: "Welk koortspatroon hoort bij P. falciparum?",
    options: [
      { letter: "A", text: "Tertian (elke 48 uur)" },
      { letter: "B", text: "Quartan (elke 72 uur)" },
      { letter: "C", text: "Irregulier" },
      { letter: "D", text: "Geen koorts" },
    ],
    correctAnswer: "C",
    category: "Klinische presentatie",
  },
  {
    id: 5,
    question: "Welk koortspatroon hoort bij P. malariae?",
    options: [
      { letter: "A", text: "Tertian (elke 48 uur)" },
      { letter: "B", text: "Quartan (elke 72 uur)" },
      { letter: "C", text: "Irregulier" },
      { letter: "D", text: "Geen koorts" },
    ],
    correctAnswer: "B",
    category: "Klinische presentatie",
  },
  {
    id: 6,
    question: "Welk koortspatroon hoort bij P. vivax en P. ovale?",
    options: [
      { letter: "A", text: "Tertian (elke 48 uur)" },
      { letter: "B", text: "Quartan (elke 72 uur)" },
      { letter: "C", text: "Irregulier" },
      { letter: "D", text: "Geen koorts" },
    ],
    correctAnswer: "A",
    category: "Klinische presentatie",
  },
  {
    id: 7,
    question: "In welke volgorde ontstaan de volgende stadia in de mens na infectie met Plasmodium falciparum?",
    options: [
      { letter: "A", text: "Sporozoïeten → leverschizont → merozoïet → trofozoïet → bloedschizont → gametocyt" },
      { letter: "B", text: "Gametocyt → bloedschizont → trofozoïet → merozoïet → leverschizont → sporozoïeten" },
      { letter: "C", text: "Merozoïet → sporozoïeten → leverschizont → trofozoïet → gametocyt → bloedschizont" },
      { letter: "D", text: "Trofozoïet → gametocyt → sporozoïeten → leverschizont → merozoïet → bloedschizont" },
    ],
    correctAnswer: "A",
    category: "Pathofysiologie",
  },
  {
    id: 8,
    question: "Wat maakt dat malaria tropica ernstiger kan verlopen dan malaria tertiana en malaria quartana?",
    options: [
      { letter: "A", text: "Anemie en trombocytopenie" },
      { letter: "B", text: "Cerebrale malaria en orgaanschade door sekwestratie (alleen bij P. falciparum)" },
      { letter: "C", text: "Koorts" },
      { letter: "D", text: "Alle Plasmodium-soorten veroorzaken dezelfde ernst" },
    ],
    correctAnswer: "B",
    category: "Pathofysiologie",
  },
  {
    id: 9,
    question: "Wat is normaal gesproken de incubatietijd van malaria tropica?",
    options: [
      { letter: "A", text: "1 uur" },
      { letter: "B", text: "1 dag" },
      { letter: "C", text: "1 week" },
      { letter: "D", text: "1 maand" },
    ],
    correctAnswer: "C",
    category: "Pathofysiologie",
  },
  {
    id: 10,
    question: "Is bloedafname voor malaria-diagnostiek zinloos als de patiënt op het moment van afname geen koorts heeft?",
    options: [
      { letter: "A", text: "Ja, bloedafname is alleen zinvol tijdens koorts" },
      { letter: "B", text: "Nee, het moment van bloedafname is niet afhankelijk van koortsperioden" },
      { letter: "C", text: "Ja, men moet wachten tot de volgende koortsperiode" },
      { letter: "D", text: "Alleen bij P. falciparum is bloedafname zinloos zonder koorts" },
    ],
    correctAnswer: "B",
    category: "Diagnostiek",
  },
  {
    id: 11,
    question: "Welke van onderstaande afwijkingen in bloed zijn passend bij malaria tropica?",
    options: [
      { letter: "A", text: "Verhoogd lactaat, trombocytopenie en verlaagd hematocriet" },
      { letter: "B", text: "Verhoogd hematocriet" },
      { letter: "C", text: "Geen afwijkingen" },
      { letter: "D", text: "Alleen verhoogd lactaat" },
    ],
    correctAnswer: "A",
    category: "Diagnostiek",
  },
  {
    id: 12,
    question: "Welke volgorde geeft de juiste sensitiviteit van malaria-diagnostische methoden aan (van hoog naar laag)?",
    options: [
      { letter: "A", text: "Dikke druppel, uitstrijk, antigeensneltest" },
      { letter: "B", text: "Antigeensneltest, dikke druppel, uitstrijk" },
      { letter: "C", text: "Uitstrijk, antigeensneltest, dikke druppel" },
      { letter: "D", text: "Antigeensneltest, uitstrijk, dikke druppel" },
    ],
    correctAnswer: "A",
    category: "Diagnostiek",
  },
  {
    id: 13,
    question: "Welke behandeling past bij ongecompliceerde malaria?",
    options: [
      { letter: "A", text: "Intraveneuze therapie en intensive care" },
      { letter: "B", text: "Orale therapie" },
      { letter: "C", text: "Geen behandeling nodig" },
      { letter: "D", text: "Alleen symptomatische behandeling" },
    ],
    correctAnswer: "B",
    category: "Behandeling",
  },
  {
    id: 14,
    question: "Welke behandeling past bij ernstige malaria?",
    options: [
      { letter: "A", text: "Alleen orale therapie" },
      { letter: "B", text: "Intraveneuze therapie en intensive care" },
      { letter: "C", text: "Geen behandeling nodig" },
      { letter: "D", text: "Alleen paracetamol" },
    ],
    correctAnswer: "B",
    category: "Behandeling",
  },
  {
    id: 15,
    question: "Welke Plasmodium-soort komt veel voor in de Indonesische archipel en kan hypnozoïeten vormen met uitgestelde malaria tertiana?",
    options: [
      { letter: "A", text: "P. falciparum" },
      { letter: "B", text: "P. malariae" },
      { letter: "C", text: "P. ovale" },
      { letter: "D", text: "P. vivax" },
    ],
    correctAnswer: "D",
    category: "Behandeling",
  },
  {
    id: 16,
    question: "Kan profylaxe de vorming van hypnozoïeten voorkomen?",
    options: [
      { letter: "A", text: "Ja, alle profylaxe voorkomt hypnozoïeten" },
      { letter: "B", text: "Nee, geen enkele profylaxe kan de vorming van hypnozoïeten voorkomen" },
      { letter: "C", text: "Alleen atovaquon-proguanil voorkomt hypnozoïeten" },
      { letter: "D", text: "Chloroquine voorkomt hypnozoïeten" },
    ],
    correctAnswer: "B",
    category: "Preventie",
  },
  {
    id: 17,
    question: "Waar beschermt malaria profylaxe tegen?",
    options: [
      { letter: "A", text: "Tegen infectie en tegen vorming van hypnozoïeten" },
      { letter: "B", text: "Tegen de ziekte (bloedstadium), niet tegen infectie of hypnozoïeten" },
      { letter: "C", text: "Tegen alle stadia van Plasmodium" },
      { letter: "D", text: "Profylaxe beschermt niet" },
    ],
    correctAnswer: "B",
    category: "Preventie",
  },
  {
    id: 18,
    question: "Bij welke Plasmodium-soort komt chloroquine-resistentie voor in Zuidoost-Azië?",
    options: [
      { letter: "A", text: "Alleen P. falciparum" },
      { letter: "B", text: "P. vivax" },
      { letter: "C", text: "P. malariae" },
      { letter: "D", text: "Geen van de soorten" },
    ],
    correctAnswer: "B",
    category: "Behandeling",
  },
]

// Duurzame hiv zorg in sub-Sahara-Afrika questions (18)
const duurzameHivZorgQuestions = [
  {
    id: 1,
    question: "Hoeveel procent van de mensen met HIV in de wereld woont in sub-Sahara Afrika?",
    options: [
      { letter: "A", text: "15%" },
      { letter: "B", text: "33%" },
      { letter: "C", text: "50%" },
      { letter: "D", text: "67%" },
    ],
    correctAnswer: "D",
    category: "Epidemiologie",
  },
  {
    id: 2,
    question: "Sub-Sahara Afrika bestaat uit hoeveel landen en heeft ongeveer hoeveel inwoners?",
    options: [
      { letter: "A", text: "20 landen, 500 miljoen mensen" },
      { letter: "B", text: "46 landen, 1,1 miljard mensen" },
      { letter: "C", text: "30 landen, 2 miljard mensen" },
      { letter: "D", text: "50 landen, 800 miljoen mensen" },
    ],
    correctAnswer: "B",
    category: "Epidemiologie",
  },
  {
    id: 3,
    question: "Is het aantal mensen met HIV in sub-Sahara Afrika stabiel, neemt het af, of neemt het toe?",
    options: [
      { letter: "A", text: "Neemt af" },
      { letter: "B", text: "Blijft stabiel" },
      { letter: "C", text: "Neemt toe" },
      { letter: "D", text: "Wisselt per jaar" },
    ],
    correctAnswer: "C",
    category: "Epidemiologie",
  },
  {
    id: 4,
    question: "Welke uitspraken over ART zijn juist?",
    options: [
      { letter: "A", text: "Na ongeveer 3 weken behandeling ben je volledig genezen" },
      { letter: "B", text: "Door onderdrukking van het virus ontwikkel je geen AIDS en kun je een gezond leven leiden; je bent nauwelijks besmettelijk; levenslange behandeling nodig" },
      { letter: "C", text: "ART voorkomt alleen besmetting van anderen, niet AIDS" },
      { letter: "D", text: "ART geneest HIV volledig na 6 maanden" },
    ],
    correctAnswer: "B",
    category: "ART",
  },
  {
    id: 5,
    question: "Waarom duurde het erg lang voordat ART beschikbaar kwam in sub-Sahara Afrika?",
    options: [
      { letter: "A", text: "De medicijnen werkten niet in Afrika" },
      { letter: "B", text: "De middelen waren te duur en er was geen goed gezondheidszorgsysteem voor chronische behandeling" },
      { letter: "C", text: "Er was geen vraag naar behandeling" },
      { letter: "D", text: "De WHO verbood het gebruik" },
    ],
    correctAnswer: "B",
    category: "ART",
  },
  {
    id: 6,
    question: "Ongeveer hoeveel mensen met HIV krijgen momenteel ART, en wat is het internationale doel voor 2030?",
    options: [
      { letter: "A", text: "5 miljoen (70%), doel 80%" },
      { letter: "B", text: "18 miljoen (~70%), doel 95%" },
      { letter: "C", text: "25 miljoen (100%), doel 100%" },
      { letter: "D", text: "10 miljoen (50%), doel 95%" },
    ],
    correctAnswer: "B",
    category: "ART",
  },
  {
    id: 7,
    question: "Wat is een verticaal programma in de context van HIV-zorg?",
    options: [
      { letter: "A", text: "Een programma dat alleen verticale overdracht van HIV bestrijdt" },
      { letter: "B", text: "Ziekte-specifieke programma's die los staan van het algemene gezondheidszorgsysteem, met eigen budgetten en management" },
      { letter: "C", text: "Een programma dat alleen in hoogbouw-klinieken werkt" },
      { letter: "D", text: "Een programma dat alleen kinderen behandelt" },
    ],
    correctAnswer: "B",
    category: "Verticaal programma",
  },
  {
    id: 8,
    question: "Waarom is het verticale HIV-programma niet langer houdbaar?",
    options: [
      { letter: "A", text: "HIV is uitgeroeid" },
      { letter: "B", text: "Donorgeld neemt af; tekort zorgpersoneel; complexere zorg door co-morbiditeit; scheefgroei HIV vs. andere zorg" },
      { letter: "C", text: "De medicijnen zijn te goedkoop geworden" },
      { letter: "D", text: "Er zijn te veel klinieken" },
    ],
    correctAnswer: "B",
    category: "Verticaal programma",
  },
  {
    id: 9,
    question: "Welke van de volgende is GEEN van de zeven evaluatiecriteria voor HIV-zorg?",
    options: [
      { letter: "A", text: "Kosten" },
      { letter: "B", text: "Efficiëntie" },
      { letter: "C", text: "Besmettelijkheid" },
      { letter: "D", text: "Gelijkheid" },
    ],
    correctAnswer: "C",
    category: "Evaluatiecriteria",
  },
  {
    id: 10,
    question: "Waarom is de efficiëntie van verticale HIV-zorg laag voor het gezondheidszorgsysteem als geheel?",
    options: [
      { letter: "A", text: "De HIV-klinieken zijn te klein" },
      { letter: "B", text: "Een systeem van verticale zorg per ziekte is inefficiënt; integratie over meerdere ziekten is efficiënter" },
      { letter: "C", text: "De medicijnen zijn te duur" },
      { letter: "D", text: "Er zijn te weinig patiënten" },
    ],
    correctAnswer: "B",
    category: "Huidige beleid",
  },
  {
    id: 11,
    question: "Waarom is de patiëntvriendelijkheid van verticale HIV-zorg laag voor patiënten met comorbiditeiten?",
    options: [
      { letter: "A", text: "De wachttijden zijn te kort" },
      { letter: "B", text: "Ze moeten naar meerdere zorgaanbieders om de juiste zorg te krijgen" },
      { letter: "C", text: "De medicijnen smaken niet goed" },
      { letter: "D", text: "Er is te veel keuze" },
    ],
    correctAnswer: "B",
    category: "Huidige beleid",
  },
  {
    id: 12,
    question: "Wat is taakverschuiving in de context van HIV-zorg?",
    options: [
      { letter: "A", text: "Het verplaatsen van klinieken naar andere locaties" },
      { letter: "B", text: "De delegatie van taken naar minder gespecialiseerde gezondheidswerkers" },
      { letter: "C", text: "Het wisselen van medicijnen" },
      { letter: "D", text: "Het verplaatsen van patiënten naar andere landen" },
    ],
    correctAnswer: "B",
    category: "Taakverschuivingen",
  },
  {
    id: 13,
    question: "Wat is het effect van taakverschuivingen op de kosten van HIV-zorg?",
    options: [
      { letter: "A", text: "Kosten nemen toe" },
      { letter: "B", text: "Kosten nemen af (goedkoper personeel, meer beschikbaar)" },
      { letter: "C", text: "Kosten blijven gelijk" },
      { letter: "D", text: "Kosten verdubbelen" },
    ],
    correctAnswer: "B",
    category: "Taakverschuivingen",
  },
  {
    id: 14,
    question: "Wat is decentralisatie in de context van HIV-zorg?",
    options: [
      { letter: "A", text: "Het verplaatsen van de hoofdstad" },
      { letter: "B", text: "Het overhevelen van taken en verantwoordelijkheden naar een lager niveau; zorg uit klinieken halen en meer naar de gemeenschap brengen" },
      { letter: "C", text: "Het sluiten van kleine klinieken" },
      { letter: "D", text: "Het verlagen van de dosering medicijnen" },
    ],
    correctAnswer: "B",
    category: "Decentralisatie",
  },
  {
    id: 15,
    question: "Welke voorbeelden van decentralisatie van HIV-zorg worden genoemd?",
    options: [
      { letter: "A", text: "Alleen grotere ziekenhuizen bouwen" },
      { letter: "B", text: "Zorg aan huis, zorg bij buurtcentra of kerken, automaten voor medicijnverstrekking" },
      { letter: "C", text: "Alleen artsen inzetten" },
      { letter: "D", text: "Geen van de bovenstaande" },
    ],
    correctAnswer: "B",
    category: "Decentralisatie",
  },
  {
    id: 16,
    question: "Wat is integratie in de context van HIV-zorg?",
    options: [
      { letter: "A", text: "Het samenvoegen van twee afzonderlijke delen; HIV-zorg combineren met andere zorg" },
      { letter: "B", text: "Het scheiden van HIV-zorg van andere zorg" },
      { letter: "C", text: "Het verhogen van de dosis medicijnen" },
      { letter: "D", text: "Het sluiten van HIV-klinieken" },
    ],
    correctAnswer: "A",
    category: "Integratie",
  },
  {
    id: 17,
    question: "Waarom is de gelijkheid van verticale HIV-zorg zeer laag?",
    options: [
      { letter: "A", text: "Er zijn te veel klinieken" },
      { letter: "B", text: "Er is goede zorg voor HIV; niet voor andere aandoeningen; het HIV-systeem trekt zorgpersoneel uit andere sectoren" },
      { letter: "C", text: "De medicijnen zijn te goedkoop" },
      { letter: "D", text: "Er zijn te weinig patiënten" },
    ],
    correctAnswer: "B",
    category: "Huidige beleid",
  },
  {
    id: 18,
    question: "In welke periode brak de HIV-pandemie uit in sub-Sahara Afrika, en wanneer kwam ART beschikbaar door internationale initiatieven?",
    options: [
      { letter: "A", text: "Uitbraak jaren 60, ART jaren 70" },
      { letter: "B", text: "Uitbraak eind jaren 80/begin jaren 90, ART rond 2000" },
      { letter: "C", text: "Uitbraak jaren 2000, ART jaren 2010" },
      { letter: "D", text: "Uitbraak jaren 70, ART jaren 90" },
    ],
    correctAnswer: "B",
    category: "Epidemiologie",
  },
]

// Immunologische consequenties hiv questions (18)
const immunologischeConsequentiesHivQuestions = [
  {
    id: 1,
    question: "Welke immuuncellen worden het meest beïnvloed door een HIV-1-infectie?",
    options: [
      { letter: "A", text: "B-cellen" },
      { letter: "B", text: "T-helpercellen (CD4+ T-cellen)" },
      { letter: "C", text: "Monocyten" },
      { letter: "D", text: "Neutrofielen" },
    ],
    correctAnswer: "B",
    category: "Acute en chronische infectie",
  },
  {
    id: 2,
    question: "Wat is de voornaamste reden voor de hoge sterfte onder mensen met AIDS?",
    options: [
      { letter: "A", text: "HIV-1 doodt patiënten direct" },
      { letter: "B", text: "Verlies van B-cellen" },
      { letter: "C", text: "Verhoogde vatbaarheid voor (opportunistische) infecties" },
      { letter: "D", text: "Plotseling hartfalen" },
    ],
    correctAnswer: "C",
    category: "Ziekteprogressie",
  },
  {
    id: 3,
    question: "Welke co-receptor gebruikt HIV-1 R5-stam om macrofagen te infecteren?",
    options: [
      { letter: "A", text: "CXCR4" },
      { letter: "B", text: "CCR5" },
      { letter: "C", text: "CD4" },
      { letter: "D", text: "CD8" },
    ],
    correctAnswer: "B",
    category: "HIV-entry",
  },
  {
    id: 4,
    question: "Waarom wordt HIV-1-infectie niet opgeruimd door het immuunsysteem?",
    options: [
      { letter: "A", text: "Het immuunsysteem reageert sterk maar heeft geen geheugen tegen HIV-1" },
      { letter: "B", text: "HIV-1 integreert in het DNA van de gastheer en kan zo aan het immuunsysteem ontsnappen" },
      { letter: "C", text: "HIV-1 veroorzaakt geen immuunreactie" },
      { letter: "D", text: "HIV-1 infecteert voornamelijk rode bloedcellen" },
    ],
    correctAnswer: "B",
    category: "Latent reservoir",
  },
  {
    id: 5,
    question: "Wanneer wordt het latente HIV-1-reservoir gevormd?",
    options: [
      { letter: "A", text: "Pas na jaren chronische infectie" },
      { letter: "B", text: "Tijdens de eerste dagen van acute infectie; het blijft daarna bestaan" },
      { letter: "C", text: "Alleen bij AIDS" },
      { letter: "D", text: "cART voorkomt de vorming van het reservoir" },
    ],
    correctAnswer: "B",
    category: "Latent reservoir",
  },
  {
    id: 6,
    question: "Welke cellen worden door HIV-1-mutaties het meest gehinderd in hun cytotoxische functie tegen geïnfecteerde cellen?",
    options: [
      { letter: "A", text: "NK-cellen" },
      { letter: "B", text: "CD8+ T-cellen" },
      { letter: "C", text: "Macrofagen" },
      { letter: "D", text: "B-cellen" },
    ],
    correctAnswer: "B",
    category: "Immuunontsnapping",
  },
  {
    id: 7,
    question: "Welke cellen produceren de HIV-1-neutraliserende antilichamen?",
    options: [
      { letter: "A", text: "B-cellen" },
      { letter: "B", text: "NK-cellen" },
      { letter: "C", text: "CD4+ T-cellen" },
      { letter: "D", text: "Macrofagen" },
    ],
    correctAnswer: "A",
    category: "Adaptieve immuniteit",
  },
  {
    id: 8,
    question: "Is T-celuitputting bij chronische antigeenstimulatie functioneel?",
    options: [
      { letter: "A", text: "Nee, dit is een tekortkoming in het immuunsysteem" },
      { letter: "B", text: "Ja, dit voorkomt overmatige stimulatie en daarmee schade door chronische inflammatie" },
      { letter: "C", text: "Ja, dit beperkt de hoeveelheid energie die zou worden besteed" },
      { letter: "D", text: "Nee, het heeft geen functie" },
    ],
    correctAnswer: "B",
    category: "T-celuitputting",
  },
  {
    id: 9,
    question: "Geneest cART HIV-1-infectie?",
    options: [
      { letter: "A", text: "Ja, cART geneest HIV-1 volledig" },
      { letter: "B", text: "Nee, cART onderdrukt replicatie maar geneest niet; bij stoppen komt het virus terug" },
      { letter: "C", text: "Alleen bij vroege start" },
      { letter: "D", text: "Alleen bij elite controllers" },
    ],
    correctAnswer: "B",
    category: "cART",
  },
  {
    id: 10,
    question: "Welke beschrijving past bij een elite controller (EC)?",
    options: [
      { letter: "A", text: "Herhaald blootgesteld aan HIV, geen infectie" },
      { letter: "B", text: "Ondetecteerbare viral load zonder cART; zeer kleine subgroep (<0,5%)" },
      { letter: "C", text: "AIDS binnen 3-5 jaar" },
      { letter: "D", text: "Normale progressie in 5-10 jaar" },
    ],
    correctAnswer: "B",
    category: "Subgroepen",
  },
  {
    id: 11,
    question: "Welke factor is geassocieerd met HESN (herhaald blootgesteld, seronegatief)?",
    options: [
      { letter: "A", text: "HLA-B35" },
      { letter: "B", text: "CCR5 Δ32-deletie (homozygoot)" },
      { letter: "C", text: "X4-virus" },
      { letter: "D", text: "Hoge viral load" },
    ],
    correctAnswer: "B",
    category: "Subgroepen",
  },
  {
    id: 12,
    question: "Welke factor is geassocieerd met snelle progressie naar AIDS?",
    options: [
      { letter: "A", text: "CCR5 Δ32-deletie" },
      { letter: "B", text: "HLA-B57" },
      { letter: "C", text: "HLA-B35, X4-virus, hoge viral load" },
      { letter: "D", text: "Nef-deleties" },
    ],
    correctAnswer: "C",
    category: "Subgroepen",
  },
  {
    id: 13,
    question: "Welke cellen vormen het primaire latente HIV-1-reservoir?",
    options: [
      { letter: "A", text: "CD8+ T-cellen" },
      { letter: "B", text: "Geheugen-CD4+ T-cellen (en ook macrofagen)" },
      { letter: "C", text: "B-cellen" },
      { letter: "D", text: "Neutrofielen" },
    ],
    correctAnswer: "B",
    category: "Latent reservoir",
  },
  {
    id: 14,
    question: "Waarom falen HIV-1-specifieke CD8+ T-cellen uiteindelijk om het virus te controleren?",
    options: [
      { letter: "A", text: "Ze zijn niet antigeenspecifiek" },
      { letter: "B", text: "Ze zijn niet kruisreactief op viral escape-mutaties; ze worden uitgeput; ze hebben CD4+ hulp nodig voor langetermijn effector-geheugencellen" },
      { letter: "C", text: "HIV-1 infecteert CD8+ T-cellen direct" },
      { letter: "D", text: "B-cellen blokkeren hun functie" },
    ],
    correctAnswer: "B",
    category: "Adaptieve immuniteit",
  },
  {
    id: 15,
    question: "Wat zijn de twee hoofdtypen HIV-1-vaccins?",
    options: [
      { letter: "A", text: "Preventief en curatief" },
      { letter: "B", text: "Profylactisch en therapeutisch" },
      { letter: "C", text: "Actief en passief" },
      { letter: "D", text: "mRNA en vector" },
    ],
    correctAnswer: "B",
    category: "HIV-vaccin",
  },
  {
    id: 16,
    question: "Waarom is er nog geen effectief HIV-1-vaccin?",
    options: [
      { letter: "A", text: "HIV-1 is te zwak" },
      { letter: "B", text: "Snelle integratie in gastheergenoom (persistent reservoir) en hoge genetische variabiliteit/mutatiesnelheid" },
      { letter: "C", text: "Er is geen vraag naar" },
      { letter: "D", text: "mRNA-technologie ontbreekt" },
    ],
    correctAnswer: "B",
    category: "HIV-vaccin",
  },
  {
    id: 17,
    question: "Welke kenmerken horen bij HIV-1-infectie?",
    options: [
      { letter: "A", text: "Verhoogd aantal CD4+ T-cellen" },
      { letter: "B", text: "Hyperactivatie van het immuunsysteem, ontsnapping en uitputting, verlies van CD4+ T-cellen, verworven immuundeficiëntie, aanleg latent viraal reservoir" },
      { letter: "C", text: "B-cel deficiëntie als primair kenmerk" },
      { letter: "D", text: "Mutaties in cytokine-receptoren" },
    ],
    correctAnswer: "B",
    category: "Kenmerken HIV-1",
  },
  {
    id: 18,
    question: "Welke co-receptor gebruiken X4-stammen van HIV-1?",
    options: [
      { letter: "A", text: "CCR5" },
      { letter: "B", text: "CXCR4" },
      { letter: "C", text: "CD4" },
      { letter: "D", text: "Geen co-receptor" },
    ],
    correctAnswer: "B",
    category: "HIV-entry",
  },
]

// Tuberculose bij migranten questions (18)
const tuberculoseBijMigrantenQuestions = [
  {
    id: 1,
    question: "Welk percentage van de tuberculosegevallen in Nederland komt voor bij mensen die niet in Nederland zijn geboren?",
    options: [
      { letter: "A", text: "Ongeveer 25%" },
      { letter: "B", text: "Ongeveer 50%" },
      { letter: "C", text: "Ongeveer 75%" },
      { letter: "D", text: "Ongeveer 95%" },
    ],
    correctAnswer: "C",
    category: "Epidemiologie",
  },
  {
    id: 2,
    question: "Welke landen hebben een hoge TB-incidentie (>100 per 100.000)?",
    options: [
      { letter: "A", text: "Nederland, Duitsland, Verenigde Staten" },
      { letter: "B", text: "Indonesië, India, Zuid-Afrika" },
      { letter: "C", text: "Alleen Nederland" },
      { letter: "D", text: "Alleen landen in Europa" },
    ],
    correctAnswer: "B",
    category: "Epidemiologie",
  },
  {
    id: 3,
    question: "Welk percentage van de met Mycobacterium tuberculosis geïnfecteerde personen ontwikkelt actieve tuberculose?",
    options: [
      { letter: "A", text: "1–2%" },
      { letter: "B", text: "10–15%" },
      { letter: "C", text: "30–50%" },
      { letter: "D", text: "70–80%" },
    ],
    correctAnswer: "B",
    category: "Latente infectie",
  },
  {
    id: 4,
    question: "Wat is de huidige standaard voor binnenkomstscreening op tuberculose bij migranten in Nederland?",
    options: [
      { letter: "A", text: "IGRA (Interferon Gamma Release Assay)" },
      { letter: "B", text: "TST (tuberculine huidtest)" },
      { letter: "C", text: "Chest X-ray (röntgenfoto van de longen)" },
      { letter: "D", text: "Sputumkweek" },
    ],
    correctAnswer: "C",
    category: "Screening",
  },
  {
    id: 5,
    question: "Welk voordeel heeft een chest X-ray bij binnenkomstscreening?",
    options: [
      { letter: "A", text: "Detecteert latente infectie" },
      { letter: "B", text: "Testuitslag wordt niet beïnvloed door doorgemaakte infectie" },
      { letter: "C", text: "Detecteert extrapulmonale TB" },
      { letter: "D", text: "Geen vals-positieven bij eerdere longschade" },
    ],
    correctAnswer: "B",
    category: "Chest X-ray",
  },
  {
    id: 6,
    question: "Welk nadeel heeft een chest X-ray bij binnenkomstscreening?",
    options: [
      { letter: "A", text: "Kan geen latente infectie aantonen" },
      { letter: "B", text: "Is te duur" },
      { letter: "C", text: "Vereist bloedafname" },
      { letter: "D", text: "Geen van bovenstaande" },
    ],
    correctAnswer: "A",
    category: "Chest X-ray",
  },
  {
    id: 7,
    question: "Waarom overweegt de Nederlandse overheid het screeningsbeleid te herzien?",
    options: [
      { letter: "A", text: "Chest X-ray is te duur" },
      { letter: "B", text: "De meeste TB-gevallen onder migranten worden actief na aankomst in Nederland (latente infectie die later activeert)" },
      { letter: "C", text: "IGRA is goedkoper" },
      { letter: "D", text: "Er is geen TB meer in Nederland" },
    ],
    correctAnswer: "B",
    category: "Screening",
  },
  {
    id: 8,
    question: "Welk nadeel heeft de TST (tuberculine huidtest) ten opzichte van IGRA?",
    options: [
      { letter: "A", text: "TST is duurder" },
      { letter: "B", text: "TST is ook positief bij BCG-vaccinatie" },
      { letter: "C", text: "TST vereist geen follow-up" },
      { letter: "D", text: "TST detecteert geen latente infectie" },
    ],
    correctAnswer: "B",
    category: "TST vs IGRA",
  },
  {
    id: 9,
    question: "Wat is een belangrijk nadeel van screening op latente tuberculose-infectie?",
    options: [
      { letter: "A", text: "Te weinig mensen worden gedetecteerd" },
      { letter: "B", text: "Overbehandeling: het merendeel van de mensen met latente infectie wordt nooit ziek (~10% ontwikkelt actieve TB)" },
      { letter: "C", text: "Geen behandeling beschikbaar" },
      { letter: "D", text: "Test is niet betrouwbaar" },
    ],
    correctAnswer: "B",
    category: "Latente screening",
  },
  {
    id: 10,
    question: "Wat betekent 1 QALY (Quality Adjusted Life Year)?",
    options: [
      { letter: "A", text: "1 jaar in verminderde gezondheid" },
      { letter: "B", text: "1 jaar in perfecte gezondheid" },
      { letter: "C", text: "1 jaar verloren door overlijden" },
      { letter: "D", text: "1 jaar behandeling" },
    ],
    correctAnswer: "B",
    category: "Kosteneffectiviteit",
  },
  {
    id: 11,
    question: "Bij tuberculose wordt aangenomen dat de kwaliteit van leven met 33% daalt tijdens de ziekte. Hoeveel QALY-verlies per jaar betekent dit?",
    options: [
      { letter: "A", text: "0,10 QALY" },
      { letter: "B", text: "0,33 QALY" },
      { letter: "C", text: "0,67 QALY" },
      { letter: "D", text: "1,00 QALY" },
    ],
    correctAnswer: "B",
    category: "Kosteneffectiviteit",
  },
  {
    id: 12,
    question: "Onder welke kosten per gewonnen QALY wordt een interventie in Nederland over het algemeen als kosteneffectief beschouwd?",
    options: [
      { letter: "A", text: "Onder €20.000" },
      { letter: "B", text: "Onder €50.000" },
      { letter: "C", text: "Onder €80.000" },
      { letter: "D", text: "Onder €100.000" },
    ],
    correctAnswer: "C",
    category: "Kosteneffectiviteit",
  },
  {
    id: 13,
    question: "Welke kosten vallen onder de directe kosten van TB-screening?",
    options: [
      { letter: "A", text: "Alleen bron- en contactonderzoek" },
      { letter: "B", text: "CXR, IGRA/TST, smear-test, behandeling actieve/latente TB, bijwerkingen" },
      { letter: "C", text: "Alleen ziekenhuisopname" },
      { letter: "D", text: "Alleen behandeling niet-gescreende TB" },
    ],
    correctAnswer: "B",
    category: "Kosten",
  },
  {
    id: 14,
    question: "Voor welke migranten is IGRA-binnenkomstscreening kosteneffectief?",
    options: [
      { letter: "A", text: "Alle migranten" },
      { letter: "B", text: "Alleen migranten uit landen met TB-incidentie onder 50 per 100.000" },
      { letter: "C", text: "Migranten uit landen waar de TB-incidentie boven 100 per 100.000 ligt" },
      { letter: "D", text: "Alleen migranten uit Europa" },
    ],
    correctAnswer: "C",
    category: "Kosteneffectiviteit",
  },
  {
    id: 15,
    question: "Wat is de verwekker van tuberculose?",
    options: [
      { letter: "A", text: "Mycobacterium leprae" },
      { letter: "B", text: "Mycobacterium tuberculosis" },
      { letter: "C", text: "Mycobacterium avium" },
      { letter: "D", text: "Streptococcus pneumoniae" },
    ],
    correctAnswer: "B",
    category: "Epidemiologie",
  },
  {
    id: 16,
    question: "Wat gebeurt er bij een positieve IGRA of TST voordat behandeling van latente TB kan worden overwogen?",
    options: [
      { letter: "A", text: "Directe behandeling starten" },
      { letter: "B", text: "Altijd een vervolg-chest X-ray om actieve TB uit te sluiten" },
      { letter: "C", text: "Geen vervolgonderzoek nodig" },
      { letter: "D", text: "Alleen bloedonderzoek" },
    ],
    correctAnswer: "B",
    category: "Screening",
  },
  {
    id: 17,
    question: "Waarom is de prevalentie van M. tuberculosis-infectie vaak veel hoger dan de incidentie van actieve TB suggereert?",
    options: [
      { letter: "A", text: "Omdat actieve TB niet wordt geregistreerd" },
      { letter: "B", text: "Omdat mensen een latente infectie jaren of decennia kunnen dragen zonder actief ziek te worden" },
      { letter: "C", text: "Omdat screening niet plaatsvindt" },
      { letter: "D", text: "Omdat BCG-vaccinatie de prevalentie verhoogt" },
    ],
    correctAnswer: "B",
    category: "Latente infectie",
  },
  {
    id: 18,
    question: "Welke kosten kunnen door screening op en behandeling van latente TB worden voorkomen?",
    options: [
      { letter: "A", text: "Alleen directe kosten van de screening zelf" },
      { letter: "B", text: "Indirecte kosten zoals behandeling van niet-gescreende TB, ziekenhuisopname en bron- en contactonderzoek" },
      { letter: "C", text: "Geen kosten" },
      { letter: "D", text: "Alleen kosten van de IGRA-test" },
    ],
    correctAnswer: "B",
    category: "Kosten",
  },
]

// Tuberculose – een inleiding questions (18)
const tuberculoseInleidingQuestions = [
  {
    id: 1,
    question: "Welke van de volgende omstandigheden draagt NIET bij aan de reactivatie van tuberculose?",
    options: [
      { letter: "A", text: "Te veel blootstelling aan zonlicht" },
      { letter: "B", text: "HIV" },
      { letter: "C", text: "Immuunsuppressieve medicatie" },
      { letter: "D", text: "Oudere leeftijd" },
    ],
    correctAnswer: "A",
    category: "Kliniek",
  },
  {
    id: 2,
    question: "Waar zit de infectie bij een pulmonale tuberculose?",
    options: [
      { letter: "A", text: "In het centraal zenuwstelsel" },
      { letter: "B", text: "In het hartzakje (pericardiaal)" },
      { letter: "C", text: "In de longen" },
      { letter: "D", text: "In de pleuraholte" },
    ],
    correctAnswer: "C",
    category: "Kliniek",
  },
  {
    id: 3,
    question: "Welk kenmerk hoort NIET bij de diagnostiek van actieve tuberculose?",
    options: [
      { letter: "A", text: "Tuberculose omvat verschillende bacteriesoorten" },
      { letter: "B", text: "Tuberculose groeit langzaam" },
      { letter: "C", text: "Samples voor tuberculose diagnostiek moeten warm worden bewaard" },
      { letter: "D", text: "Voor de detectie van tuberculose is een speciale kleuring vereist" },
    ],
    correctAnswer: "C",
    category: "Diagnostiek",
  },
  {
    id: 4,
    question: "Koorts, nachtzweten en onverklaard gewichtsverlies bij tuberculose worden genoemd:",
    options: [
      { letter: "A", text: "B-symptomen" },
      { letter: "B", text: "Ziekte indicatoren" },
      { letter: "C", text: "Tumorsymptomen" },
      { letter: "D", text: "Infectieuze symptomen" },
    ],
    correctAnswer: "A",
    category: "Kliniek",
  },
  {
    id: 5,
    question: "Welk percentage van de mensen geneest spontaan na een primaire tuberculose-infectie?",
    options: [
      { letter: "A", text: "5%" },
      { letter: "B", text: "50%" },
      { letter: "C", text: "90%" },
      { letter: "D", text: "99%" },
    ],
    correctAnswer: "C",
    category: "Stadia",
  },
  {
    id: 6,
    question: "Na hoeveel weken kan de Mantoux-test positief worden na een primaire infectie?",
    options: [
      { letter: "A", text: "1–2 weken" },
      { letter: "B", text: "6–8 weken" },
      { letter: "C", text: "12 weken" },
      { letter: "D", text: "6 maanden" },
    ],
    correctAnswer: "B",
    category: "Stadia",
  },
  {
    id: 7,
    question: "Welk percentage van de mensen met latente tuberculose ontwikkelt binnen 2 jaar reactieve tuberculose?",
    options: [
      { letter: "A", text: "1%" },
      { letter: "B", text: "5%" },
      { letter: "C", text: "10%" },
      { letter: "D", text: "25%" },
    ],
    correctAnswer: "B",
    category: "Stadia",
  },
  {
    id: 8,
    question: "Welke infectie verhoogt het risico op reactivatie van latente tuberculose?",
    options: [
      { letter: "A", text: "Hepatitis B" },
      { letter: "B", text: "HIV" },
      { letter: "C", text: "Influenza" },
      { letter: "D", text: "COVID-19" },
    ],
    correctAnswer: "B",
    category: "Stadia",
  },
  {
    id: 9,
    question: "Wat is een belangrijk verschil tussen de Mantoux-test en de IGRA?",
    options: [
      { letter: "A", text: "De Mantoux is een bloedtest, de IGRA een huidtest" },
      { letter: "B", text: "De IGRA wordt niet beïnvloed door BCG-vaccinatie, de Mantoux wel" },
      { letter: "C", text: "De Mantoux is duurder dan de IGRA" },
      { letter: "D", text: "De IGRA geeft uitslag na 72 uur" },
    ],
    correctAnswer: "B",
    category: "Latente TB",
  },
  {
    id: 10,
    question: "Voor welke vorm van tuberculose zijn Mantoux en IGRA geschikt?",
    options: [
      { letter: "A", text: "Alleen actieve tuberculose" },
      { letter: "B", text: "Alleen latente tuberculose" },
      { letter: "C", text: "Beide actieve en latente tuberculose" },
      { letter: "D", text: "Geen van beide" },
    ],
    correctAnswer: "B",
    category: "Latente TB",
  },
  {
    id: 11,
    question: "Bij welk type patiënt is de IGRA vaak betrouwbaarder dan de Mantoux?",
    options: [
      { letter: "A", text: "Bij gezonde volwassenen" },
      { letter: "B", text: "Bij patiënten met een verzwakt immuunsysteem" },
      { letter: "C", text: "Bij kinderen zonder BCG" },
      { letter: "D", text: "Bij zwangere vrouwen" },
    ],
    correctAnswer: "B",
    category: "Latente TB",
  },
  {
    id: 12,
    question: "Welke sociale determinant draagt bij aan een stijging van de tuberculose-incidentie?",
    options: [
      { letter: "A", text: "Rijke stedelijke gebieden" },
      { letter: "B", text: "Dak- en thuisloosheid" },
      { letter: "C", text: "Hoge opleiding" },
      { letter: "D", text: "Goede huisvesting" },
    ],
    correctAnswer: "B",
    category: "Sociale determinanten",
  },
  {
    id: 13,
    question: "Hoeveel mensen sterven jaarlijks aan tuberculose volgens de WHO?",
    options: [
      { letter: "A", text: "Ongeveer 140.000" },
      { letter: "B", text: "Ongeveer 1,4 miljoen" },
      { letter: "C", text: "Ongeveer 14 miljoen" },
      { letter: "D", text: "Ongeveer 140 miljoen" },
    ],
    correctAnswer: "B",
    category: "Epidemiologie",
  },
  {
    id: 14,
    question: "Wat is de trend in de sterfte door tuberculose wereldwijd (2010–2022)?",
    options: [
      { letter: "A", text: "De sterfte stijgt, vooral bij mensen met HIV" },
      { letter: "B", text: "De sterfte daalt, met een grotere afname bij mensen met HIV dan bij mensen zonder HIV" },
      { letter: "C", text: "De sterfte blijft gelijk" },
      { letter: "D", text: "De sterfte daalt alleen bij mensen zonder HIV" },
    ],
    correctAnswer: "B",
    category: "Epidemiologie",
  },
  {
    id: 15,
    question: "Hoe worden sterfgevallen door TB bij mensen met HIV officieel geclassificeerd?",
    options: [
      { letter: "A", text: "Als doodsoorzaak tuberculose" },
      { letter: "B", text: "Als doodsoorzaak HIV/AIDS, met TB als bijdragende oorzaak" },
      { letter: "C", text: "Als doodsoorzaak longziekte" },
      { letter: "D", text: "Als doodsoorzaak infectie" },
    ],
    correctAnswer: "B",
    category: "Epidemiologie",
  },
  {
    id: 16,
    question: "Wat is cruciaal bij het verzamelen, vervoeren en verwerken van monsters voor tuberculosediagnostiek?",
    options: [
      { letter: "A", text: "Monsters moeten warm bewaard worden" },
      { letter: "B", text: "Monsters moeten binnen 1 uur verwerkt worden" },
      { letter: "C", text: "Het moet veilig gebeuren, omdat tuberculose besmettelijk is" },
      { letter: "D", text: "Monsters moeten bevroren worden" },
    ],
    correctAnswer: "C",
    category: "Diagnostiek",
  },
  {
    id: 17,
    question: "Welk deel van de wereldbevolking is geïnfecteerd met tuberculose (latente infectie)?",
    options: [
      { letter: "A", text: "Minder dan 5%" },
      { letter: "B", text: "Ongeveer 10%" },
      { letter: "C", text: "Meer dan een derde" },
      { letter: "D", text: "Meer dan de helft" },
    ],
    correctAnswer: "C",
    category: "Epidemiologie",
  },
  {
    id: 18,
    question: "Welke risicofactoren worden naast HIV genoemd om aan te pakken bij tuberculose?",
    options: [
      { letter: "A", text: "Alleen roken" },
      { letter: "B", text: "Ondervoeding, alcoholisme, roken en diabetes mellitus" },
      { letter: "C", text: "Alleen diabetes" },
      { letter: "D", text: "Geen andere factoren" },
    ],
    correctAnswer: "B",
    category: "Epidemiologie",
  },
]

// Niet-infectieuze oorzaken van koorts bij kinderen questions (18)
const nietInfectieuzeOorzakenKoortsQuestions = [
  {
    id: 1,
    question: "Bij ieder kind met koorts dien je altijd een infectie in je differentiaaldiagnose te overwegen. Klopt dit?",
    options: [
      { letter: "A", text: "Nee, infectie hoeft niet altijd overwogen te worden" },
      { letter: "B", text: "Ja, bij ieder kind met koorts moet je altijd een infectie in je DD overwegen" },
      { letter: "C", text: "Alleen bij kinderen onder de 1 jaar" },
      { letter: "D", text: "Alleen als er geen duidelijke oorzaak is" },
    ],
    correctAnswer: "B",
    category: "Differentiaaldiagnose",
  },
  {
    id: 2,
    question: "Wanneer er geen duidelijke oorzaak van koorts is, wat is dan van belang?",
    options: [
      { letter: "A", text: "Afwachten en geen onderzoek doen" },
      { letter: "B", text: "Onderzoek inzetten naar onderliggende problemen (infectieus of niet-infectieus) die tijdige behandeling behoeven" },
      { letter: "C", text: "Alleen antibiotica voorschrijven" },
      { letter: "D", text: "Alleen paracetamol geven" },
    ],
    correctAnswer: "B",
    category: "Differentiaaldiagnose",
  },
  {
    id: 3,
    question: "Welke niet-infectieuze oorzaak van koorts past bij een teveel aan schildklierhormoon?",
    options: [
      { letter: "A", text: "Hypothyreoïdie" },
      { letter: "B", text: "Hyperthyreoïdie" },
      { letter: "C", text: "Diabetes mellitus" },
      { letter: "D", text: "Addison" },
    ],
    correctAnswer: "B",
    category: "Pathways",
  },
  {
    id: 4,
    question: "Bij trombose komen pyrogenen vrij door weefselschade. Welke cytokinen zijn dat?",
    options: [
      { letter: "A", text: "Alleen IL-10" },
      { letter: "B", text: "IL-1, IL-6, IL-8 en TNF-α" },
      { letter: "C", text: "Alleen IFN-γ" },
      { letter: "D", text: "Geen cytokinen" },
    ],
    correctAnswer: "B",
    category: "Pathways",
  },
  {
    id: 5,
    question: "Welke uitspraak over auto-immuniteit en koorts is juist?",
    options: [
      { letter: "A", text: "Alle auto-immuunziekten presenteren zich met koorts" },
      { letter: "B", text: "Vooral systemische auto-immuunziekten presenteren zich met koorts; orgaanspecifieke meestal niet" },
      { letter: "C", text: "Alleen orgaanspecifieke auto-immuunziekten geven koorts" },
      { letter: "D", text: "Geen auto-immuunziekten geven koorts" },
    ],
    correctAnswer: "B",
    category: "Auto-immuniteit",
  },
  {
    id: 6,
    question: "Welke auto-immuunziekte presenteert zich typisch ZONDER koorts?",
    options: [
      { letter: "A", text: "Systemische lupus erythematodes" },
      { letter: "B", text: "Systemische vasculitis" },
      { letter: "C", text: "Diabetes mellitus type I" },
      { letter: "D", text: "Beide A en B" },
    ],
    correctAnswer: "C",
    category: "Auto-immuniteit",
  },
  {
    id: 7,
    question: "Auto-inflammatoire aandoeningen worden gekenmerkt door:",
    options: [
      { letter: "A", text: "Aanwezigheid van autoantistoffen" },
      { letter: "B", text: "Verstoring in het aangeboren immuunsysteem, spontane inflammatie en koorts, en het ontbreken van autoantistoffen" },
      { letter: "C", text: "Alleen T- en B-cel activatie" },
      { letter: "D", text: "Alleen bij volwassenen" },
    ],
    correctAnswer: "B",
    category: "Auto-inflammatie",
  },
  {
    id: 8,
    question: "Welke aandoening valt onder de periodieke koortssyndromen (auto-inflammatie)?",
    options: [
      { letter: "A", text: "Diabetes type I" },
      { letter: "B", text: "Familiaire mediterrane koorts" },
      { letter: "C", text: "Ziekte van Graves" },
      { letter: "D", text: "Coeliakie" },
    ],
    correctAnswer: "B",
    category: "Auto-inflammatie",
  },
  {
    id: 9,
    question: "Bij maligniteit is koorts:",
    options: [
      { letter: "A", text: "Altijd het enige symptoom" },
      { letter: "B", text: "Zelden het enige symptoom; denk aan ongewenst gewichtsverlies, snel optredende blauwe plekken" },
      { letter: "C", text: "Nooit aanwezig" },
      { letter: "D", text: "Alleen bij hersentumoren" },
    ],
    correctAnswer: "B",
    category: "Maligniteit",
  },
  {
    id: 10,
    question: "Welke tumoren kunnen zelf cytokinen produceren en daardoor koorts geven?",
    options: [
      { letter: "A", text: "Alleen longcarcinoom" },
      { letter: "B", text: "Neuro-endocriene tumoren" },
      { letter: "C", text: "Alleen hersentumoren" },
      { letter: "D", text: "Geen tumoren" },
    ],
    correctAnswer: "B",
    category: "Maligniteit",
  },
  {
    id: 11,
    question: "Wat betekent het acroniem I MADE bij de oorzaken van koorts?",
    options: [
      { letter: "A", text: "I = Idiopathisch, M = Maligniteit, A = Auto-immuun, D = Drugs, E = Endocrien" },
      { letter: "B", text: "I = Infectieus, M = Maligniteit, A = Auto-immuun/Auto-inflammatoir, D = Drugs, E = Everything else (endocrien, neurologisch)" },
      { letter: "C", text: "I = Immuun, M = Metabool, A = Auto-immuun, D = Degeneratief, E = Endocrien" },
      { letter: "D", text: "I = Infectieus, M = Metabool, A = Allergie, D = Drugs, E = Endocrien" },
    ],
    correctAnswer: "B",
    category: "I MADE",
  },
  {
    id: 12,
    question: "Hoeveel dagen koorts is minimaal vereist voor de diagnose Kawasaki?",
    options: [
      { letter: "A", text: "1 dag" },
      { letter: "B", text: "3 dagen" },
      { letter: "C", text: "5 dagen" },
      { letter: "D", text: "7 dagen" },
    ],
    correctAnswer: "C",
    category: "Kawasaki",
  },
  {
    id: 13,
    question: "Welk percentage van de Kawasaki-patiënten zijn kinderen onder de 5 jaar?",
    options: [
      { letter: "A", text: "20%" },
      { letter: "B", text: "50%" },
      { letter: "C", text: "80%" },
      { letter: "D", text: "100%" },
    ],
    correctAnswer: "C",
    category: "Kawasaki",
  },
  {
    id: 14,
    question: "Welk percentage van de patiënten met onbehandelde Kawasaki ontwikkelt coronair arterie-aneurysmata?",
    options: [
      { letter: "A", text: "5%" },
      { letter: "B", text: "25%" },
      { letter: "C", text: "50%" },
      { letter: "D", text: "75%" },
    ],
    correctAnswer: "B",
    category: "Kawasaki",
  },
  {
    id: 15,
    question: "De behandeling van Kawasaki is gericht op:",
    options: [
      { letter: "A", text: "Alleen antibiotica" },
      { letter: "B", text: "Verminderen van inflammatie (IVIG, corticosteroiden) en voorkomen van trombose (acetylsalicylzuur)" },
      { letter: "C", text: "Alleen paracetamol" },
      { letter: "D", text: "Chirurgie" },
    ],
    correctAnswer: "B",
    category: "Kawasaki",
  },
  {
    id: 16,
    question: "Welke bevinding past bij de diagnostische criteria van Kawasaki?",
    options: [
      { letter: "A", text: "Bilateraal bulbaire conjunctivale vaatinjectie met exsudaat" },
      { letter: "B", text: "Bilateraal bulbaire conjunctivale vaatinjectie zonder exsudaat" },
      { letter: "C", text: "Unilaterale conjunctivitis" },
      { letter: "D", text: "Geen oogafwijkingen" },
    ],
    correctAnswer: "B",
    category: "Kawasaki",
  },
  {
    id: 17,
    question: "Hyperthyreoïdie geeft koorts door:",
    options: [
      { letter: "A", text: "Verlaagd basaal metabolisme" },
      { letter: "B", text: "Verhoogd basaal metabolisme door teveel schildklierhormoon (T3, T4)" },
      { letter: "C", text: "Directe schade aan de hypothalamus" },
      { letter: "D", text: "Pyrogenen uit bacteriën" },
    ],
    correctAnswer: "B",
    category: "Endocrien",
  },
  {
    id: 18,
    question: "Welke structuur is het primaire thermoregulatiecentrum?",
    options: [
      { letter: "A", text: "Hypofyse" },
      { letter: "B", text: "Hypothalamus" },
      { letter: "C", text: "Cerebellum" },
      { letter: "D", text: "Thalamus" },
    ],
    correctAnswer: "B",
    category: "Pathways",
  },
]

const getImagesFromMap = (map) =>
  Object.keys(map)
    .sort((a, b) => {
      const numA = parseInt(a.replace(/.*-image(\d+)$/, '$1'), 10) || 0
      const numB = parseInt(b.replace(/.*-image(\d+)$/, '$1'), 10) || 0
      return numA - numB
    })
    .map(id => {
      const num = id.replace(/.*-image(\d+)$/, '$1')
      return { id, name: `Afbeelding ${parseInt(num, 10)}` }
    })

const getQuestionCount = (map) =>
  Object.values(map).reduce((sum, arr) => sum + (arr?.length || 0), 0)

const practiceQuestionsCourseStructure = {
  blok3: {
    name: "Blok 3: Groei en Ontwikkeling II",
    weeks: [
      {
        name: "Week 1",
        cases: [
          {
            name: "Casus 1: Van embryo naar baby",
            lmes: [
              { id: "embryogenese", name: "Embryogenese Bouwplan", type: "simple" },
              { id: "beeldvorming", name: "Foetale beeldvorming en de 13 wekenecho", type: "simple" },
              { id: "extraembryonaal", name: "Het embryo en de extra embryonale structuren", type: "simple" }
            ]
          },
          {
            name: "Casus 2: Spina bifida",
            lmes: [
              { id: "extremiteiten", name: "Ontwikkeling extremiteiten en gewrichtsleer", type: "simple" }
            ]
          }
        ]
      }
    ]
  },
  blok4: {
    name: "Blok 4: Microbiologie en Immunologie",
    weeks: [
      {
        name: "Week 1",
        cases: [
          {
            name: "Casus 1: Algemene introductie",
            lmes: [
              { id: "aangeboren-immuniteit-herkenning", name: "Aangeboren immuniteit - herkenning", type: "simple" },
              { id: "introductie-bacteriologie", name: "Introductie bacteriologie", type: "simple" },
              { id: "introductie-immunologie", name: "Introductie en overzicht immunologie", type: "simple" },
              { id: "introductie-mycologie", name: "Introductie mycologie", type: "simple" },
              { id: "introductie-parasitologie", name: "Introductie parasitologie", type: "simple" },
              { id: "introductie-virologie", name: "Introductie virologie – deel 1", type: "simple" },
              { id: "voorbereiding-vow-microbiologie", name: "Voorbereiding VOW Microbiologie", type: "simple" }
            ]
          },
          {
            name: "Casus 2: Vrouw met Urineweginfectie",
            lmes: [
              { id: "aangeboren-immuniteit-respons", name: "Aangeboren immuniteit – respons", type: "simple" },
              { id: "antibiotica-leerlijn", name: "Antibiotica leerlijn", type: "simple" },
              { id: "introductie-antimicrobiele-therapie", name: "Introductie antimicrobiële therapie", type: "simple" },
              { id: "urineweginfecties", name: "Urineweginfecties", type: "simple" }
            ]
          }
        ]
      },
      {
        name: "Week 2",
        cases: [
          {
            name: "Casus 3: Kind met RS-virus",
            lmes: [
              { id: "infectiepreventie", name: "Infectiepreventie", type: "simple" },
              { id: "introductie-luchtweginfecties", name: "Introductie luchtweginfecties", type: "simple" },
              { id: "microscopische-anatomie-luchtwegen", name: "Microscopische anatomie luchtwegen", type: "simple" },
              { id: "pathofysiologie-virale-luchtweginfecties", name: "Pathofysiologie virale luchtweginfecties", type: "simple" },
              { id: "vervolg-introductie-virologie-2", name: "Vervolg introductie virologie 2", type: "simple" },
              { id: "virale-diagnostiek", name: "Virale diagnostiek", type: "simple" }
            ]
          },
          {
            name: "Casus 4: Kind met koorts",
            lmes: [
              { id: "cytokinen", name: "Cytokinen", type: "simple" },
              { id: "infectieuze-oorzaken-koorts", name: "Infectieuze oorzaken van koorts bij kinderen", type: "simple" },
              { id: "niet-infectieuze-oorzaken-koorts", name: "Niet-infectieuze oorzaken van koorts bij kinderen", type: "simple" },
              { id: "ontstekingsmediatoren", name: "Ontstekingsmediatoren", type: "simple" },
              { id: "wat-is-koorts", name: "Wat is koorts", type: "simple" }
            ]
          }
        ]
      },
      {
        name: "Week 3",
        cases: [
          {
            name: "Casus 5: Onderste luchtweginfectie",
            lmes: [
              { id: "specifieke-verwekkers-lagere-luchtweginfecties", name: "Specifieke verwekkers lagere luchtweginfecties", type: "simple" },
              { id: "therapie-lagere-luchtweginfecties", name: "Therapie lagere luchtweginfecties", type: "simple" }
            ]
          },
          {
            name: "Casus 6: Lymfeklier",
            lmes: [
              { id: "homing-migratie-recirculatie", name: "Homing, migratie en recirculatie", type: "simple" },
              { id: "infectieuze-lymfadenopathie", name: "Infectieuze lymfadenopathie – tweede lijn", type: "simple" },
              { id: "introductie-verworven-immuniteit", name: "Introductie verworven immuniteit", type: "simple" },
              { id: "secundaire-lymfoide-organen", name: "Secundaire lymfoïde organen", type: "simple" }
            ]
          }
        ]
      },
      {
        name: "Week 4",
        cases: [
          {
            name: "Casus 8: HIV",
            lmes: [
              { id: "antivirale-therapie", name: "Antivirale therapie", type: "simple" },
              { id: "de-grote-drie-malaria", name: "De grote drie Malaria", type: "simple" },
              { id: "duurzame-hiv-zorg", name: "Duurzame hiv zorg in sub-Sahara-Afrika", type: "simple" },
              { id: "immunologische-consequenties-hiv", name: "Immunologische consequenties hiv", type: "simple" },
              { id: "tuberculose-bij-migranten", name: "Tuberculose bij migranten", type: "simple" },
              { id: "tuberculose-inleiding", name: "Tuberculose – een inleiding", type: "simple" }
            ]
          }
        ]
      },
      {
        name: "Week 5",
        cases: [
          {
            name: "Casus 7",
            lmes: [
              { id: "lme5-schimmelinfecties", name: "Schimmelinfecties van de huid, nagels en haren", type: "simple", questionsMap: lme5QuestionsMap },
              { id: "lme6-voorbereiding-vow-milt", name: "Voorbereiding VOW Milt", type: "simple", questionsMap: lme6QuestionsMap }
            ]
          },
          {
            name: "Casus 9",
            lmes: [
              { id: "lme1-parasitaire-verwekkers-gastro-enteritis", name: "Parasitaire verwekkers van gastro-enteritis", type: "image-based", questionsMap: lme1QuestionsMap },
              { id: "lme2-virale-verwekkers-gastro-enteritis", name: "Virale verwekkers van gastro-enteritis", type: "image-based", questionsMap: lme2QuestionsMap },
              { id: "lme3-welk-antibioticum-kies-ik", name: "Welk antibioticum kies ik", type: "image-based", questionsMap: lme3QuestionsMap }
            ]
          },
          {
            name: "Casus 10: Vaccinatie",
            lmes: [
              { id: "casus10-lme1-dwang-en-drang-historisch-perspectief", name: "Dwang en drang in historisch perspectief", type: "image-based", questionsMap: casus10Lme1QuestionsMap },
              { id: "casus10-lme2-immunomodulatie", name: "Immunomodulatie", type: "image-based", questionsMap: casus10Lme2QuestionsMap },
              { id: "casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas", name: "Rechtvaardiging dwang en drang - Morele dilemma's bij vaccineren", type: "image-based", questionsMap: casus10Lme3QuestionsMap },
              { id: "casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie", name: "Waarom een hoge vaccinatiegraad? De wiskunde van vaccinatie", type: "image-based", questionsMap: casus10Lme4QuestionsMap }
            ]
          }
        ]
      },
      {
        name: "Week 6",
        cases: [
          {
            name: "Casus 11: Primaire immuundeficiënties",
            lmes: [
              { id: "casus11-lme1-leefstijl-en-immuunsysteem", name: "Leefstijl en immuunsysteem", type: "image-based", questionsMap: casus11Lme1QuestionsMap }
            ]
          },
          {
            name: "Casus 12: Lijninfecties & resistenties",
            lmes: [
              { id: "casus12-lme1-antibioticaresistentie-en-therapie", name: "Antibioticaresistentie en therapie", type: "image-based", questionsMap: casus12Lme1QuestionsMap },
              { id: "casus12-lme2-sepsis", name: "Sepsis", type: "image-based", questionsMap: casus12Lme2QuestionsMap },
              { id: "casus12-lme3-patient-en-medicatieveiligheid", name: "Patient- en medicatieveiligheid", type: "image-based", questionsMap: casus12Lme3QuestionsMap },
              { id: "casus12-lme4-zorggerelateerde-infecties", name: "Zorggerelateerde infecties", type: "image-based", questionsMap: casus12Lme4QuestionsMap }
            ]
          }
        ]
      },
      {
        name: "Week 7",
        cases: [
          {
            name: "Casus 13: Een piloot met koorts",
            lmes: [
              { id: "casus13-lme1-antibiotica-introductie", name: "Antibiotica Introductie", type: "image-based", questionsMap: casus13Lme1QuestionsMap },
              { id: "casus13-lme2-antibiotica-resistentie", name: "Antibiotica Resistentie", type: "image-based", questionsMap: casus13Lme2QuestionsMap }
            ]
          }
        ]
      }
    ]
  }
}

const PRACTICE_QUESTION_ORDER = Object.values(practiceQuestionsCourseStructure)
  .flatMap(blok => blok.weeks)
  .flatMap(week => week.cases)
  .flatMap(casus => casus.lmes)
  .flatMap(lmeItem => (
    lmeItem.type === 'simple'
      ? [lmeItem.id]
      : getImagesFromMap(lmeItem.questionsMap).map(img => img.id)
  ))

const PracticeQuestionsPage = () => {
  const [searchParams] = useSearchParams()
  const lmeParam = searchParams.get('lme')
  const [expandedBlok, setExpandedBlok] = useState('blok4') // Default: direct naar Blok 4 lijst
  const currentPracticeIndex = lmeParam ? PRACTICE_QUESTION_ORDER.indexOf(lmeParam) : -1
  const prevPracticeLme = currentPracticeIndex > 0 ? PRACTICE_QUESTION_ORDER[currentPracticeIndex - 1] : null
  const nextPracticeLme = currentPracticeIndex >= 0 && currentPracticeIndex < PRACTICE_QUESTION_ORDER.length - 1
    ? PRACTICE_QUESTION_ORDER[currentPracticeIndex + 1]
    : null

  const getLmeQuestionCount = (lmeItem) => {
    if (lmeItem.type === 'image-based' && lmeItem.questionsMap) return getQuestionCount(lmeItem.questionsMap)
    if (lmeItem.type === 'simple' && lmeItem.questionsMap) return getQuestionCount(lmeItem.questionsMap)
    const lmeId = lmeItem.id
    const q = (() => {
      if (lmeId === 'embryogenese') return embryogeneseQuestions
      if (lmeId === 'beeldvorming') return beeldvormingQuestions
      if (lmeId === 'extraembryonaal') return extraembryonaalQuestions
      if (lmeId === 'extremiteiten') return extremiteitenQuestions
      if (lmeId === 'aangeboren-immuniteit-herkenning') return aangeborenImmuniteitHerkenningQuestions
      if (lmeId === 'introductie-bacteriologie') return introductieBacteriologieQuestions
      if (lmeId === 'introductie-immunologie') return introductieImmunologieQuestions
      if (lmeId === 'introductie-mycologie') return introductieMycologieQuestions
      if (lmeId === 'introductie-parasitologie') return introductieParasitologieQuestions
      if (lmeId === 'introductie-virologie') return introductieVirologieQuestions
      if (lmeId === 'voorbereiding-vow-microbiologie') return voorbereidingVOWMicrobiologieQuestions
      if (lmeId === 'aangeboren-immuniteit-respons') return aangeborenImmuniteitResponsQuestions
      if (lmeId === 'antibiotica-leerlijn') return antibioticaLeerlijnQuestions
      if (lmeId === 'introductie-antimicrobiele-therapie') return introductieAntimicrobieleTherapieQuestions
      if (lmeId === 'urineweginfecties') return urineweginfectiesQuestions
      if (lmeId === 'infectiepreventie') return infectiepreventieQuestions
      if (lmeId === 'introductie-luchtweginfecties') return introductieLuchtweginfectiesQuestions
      if (lmeId === 'microscopische-anatomie-luchtwegen') return microscopischeAnatomieLuchtwegenQuestions
      if (lmeId === 'pathofysiologie-virale-luchtweginfecties') return pathofysiologieViraleLuchtweginfectiesQuestions
      if (lmeId === 'vervolg-introductie-virologie-2') return vervolgIntroductieVirologie2Questions
      if (lmeId === 'virale-diagnostiek') return viraleDiagnostiekQuestions
      if (lmeId === 'cytokinen') return cytokinenQuestions
      if (lmeId === 'infectieuze-oorzaken-koorts') return infectieuzeOorzakenKoortsQuestions
      if (lmeId === 'niet-infectieuze-oorzaken-koorts') return nietInfectieuzeOorzakenKoortsQuestions
      if (lmeId === 'ontstekingsmediatoren') return ontstekingsmediatorenQuestions
      if (lmeId === 'wat-is-koorts') return watIsKoortsQuestions
      if (lmeId === 'specifieke-verwekkers-lagere-luchtweginfecties') return specifiekeVerwekkersLagereLuchtweginfectiesQuestions
      if (lmeId === 'therapie-lagere-luchtweginfecties') return therapieLagereLuchtweginfectiesQuestions
      if (lmeId === 'homing-migratie-recirculatie') return homingMigratieRecirculatieQuestions
      if (lmeId === 'infectieuze-lymfadenopathie') return infectieuzeLymfadenopathieQuestions
      if (lmeId === 'introductie-verworven-immuniteit') return introductieVerworvenImmuniteitQuestions
      if (lmeId === 'secundaire-lymfoide-organen') return secundaireLymfoideOrganenQuestions
      if (lmeId === 'antivirale-therapie') return antiviraleTherapieQuestions
      if (lmeId === 'de-grote-drie-malaria') return deGroteDrieMalariaQuestions
      if (lmeId === 'duurzame-hiv-zorg') return duurzameHivZorgQuestions
      if (lmeId === 'immunologische-consequenties-hiv') return immunologischeConsequentiesHivQuestions
      if (lmeId === 'tuberculose-bij-migranten') return tuberculoseBijMigrantenQuestions
      if (lmeId === 'tuberculose-inleiding') return tuberculoseInleidingQuestions
      if (lme5QuestionsMap[lmeId]) return lme5QuestionsMap[lmeId]
      if (lme6QuestionsMap[lmeId]) return lme6QuestionsMap[lmeId]
      if (lme1QuestionsMap[lmeId]) return lme1QuestionsMap[lmeId]
      if (lme2QuestionsMap[lmeId]) return lme2QuestionsMap[lmeId]
      if (lme3QuestionsMap[lmeId]) return lme3QuestionsMap[lmeId]
      if (casus10Lme1QuestionsMap[lmeId]) return casus10Lme1QuestionsMap[lmeId]
      if (casus10Lme2QuestionsMap[lmeId]) return casus10Lme2QuestionsMap[lmeId]
      if (casus10Lme3QuestionsMap[lmeId]) return casus10Lme3QuestionsMap[lmeId]
      if (casus10Lme4QuestionsMap[lmeId]) return casus10Lme4QuestionsMap[lmeId]
      if (casus11Lme1QuestionsMap[lmeId]) return casus11Lme1QuestionsMap[lmeId]
      if (casus12Lme1QuestionsMap[lmeId]) return casus12Lme1QuestionsMap[lmeId]
      if (casus12Lme2QuestionsMap[lmeId]) return casus12Lme2QuestionsMap[lmeId]
      if (casus12Lme3QuestionsMap[lmeId]) return casus12Lme3QuestionsMap[lmeId]
      if (casus12Lme4QuestionsMap[lmeId]) return casus12Lme4QuestionsMap[lmeId]
      if (casus13Lme1QuestionsMap[lmeId]) return casus13Lme1QuestionsMap[lmeId]
      if (casus13Lme2QuestionsMap[lmeId]) return casus13Lme2QuestionsMap[lmeId]
      return null
    })()
    return Array.isArray(q) ? q.length : (q && typeof q === 'object' ? getQuestionCount(q) : 0)
  }
  
  // Determine which questions to show
  const getQuestions = () => {
    if (lmeParam === 'embryogenese') return embryogeneseQuestions
    if (lmeParam === 'beeldvorming') return beeldvormingQuestions
    if (lmeParam === 'extraembryonaal') return extraembryonaalQuestions
    if (lmeParam === 'extremiteiten') return extremiteitenQuestions
    if (lmeParam === 'aangeboren-immuniteit-herkenning') return aangeborenImmuniteitHerkenningQuestions
    if (lmeParam === 'introductie-bacteriologie') return introductieBacteriologieQuestions
    if (lmeParam === 'introductie-immunologie') return introductieImmunologieQuestions
    if (lmeParam === 'introductie-mycologie') return introductieMycologieQuestions
    if (lmeParam === 'introductie-parasitologie') return introductieParasitologieQuestions
    if (lmeParam === 'introductie-virologie') return introductieVirologieQuestions
    if (lmeParam === 'voorbereiding-vow-microbiologie') return voorbereidingVOWMicrobiologieQuestions
    if (lmeParam === 'aangeboren-immuniteit-respons') return aangeborenImmuniteitResponsQuestions
    if (lmeParam === 'antibiotica-leerlijn') return antibioticaLeerlijnQuestions
    if (lmeParam === 'introductie-antimicrobiele-therapie') return introductieAntimicrobieleTherapieQuestions
    if (lmeParam === 'urineweginfecties') return urineweginfectiesQuestions
    if (lmeParam === 'infectiepreventie') return infectiepreventieQuestions
    if (lmeParam === 'introductie-luchtweginfecties') return introductieLuchtweginfectiesQuestions
    if (lmeParam === 'microscopische-anatomie-luchtwegen') return microscopischeAnatomieLuchtwegenQuestions
    if (lmeParam === 'pathofysiologie-virale-luchtweginfecties') return pathofysiologieViraleLuchtweginfectiesQuestions
    if (lmeParam === 'vervolg-introductie-virologie-2') return vervolgIntroductieVirologie2Questions
    if (lmeParam === 'virale-diagnostiek') return viraleDiagnostiekQuestions
    if (lmeParam === 'cytokinen') return cytokinenQuestions
    if (lmeParam === 'infectieuze-oorzaken-koorts') return infectieuzeOorzakenKoortsQuestions
    if (lmeParam === 'niet-infectieuze-oorzaken-koorts') return nietInfectieuzeOorzakenKoortsQuestions
    if (lmeParam === 'ontstekingsmediatoren') return ontstekingsmediatorenQuestions
    if (lmeParam === 'wat-is-koorts') return watIsKoortsQuestions
    if (lmeParam === 'specifieke-verwekkers-lagere-luchtweginfecties') return specifiekeVerwekkersLagereLuchtweginfectiesQuestions
    if (lmeParam === 'therapie-lagere-luchtweginfecties') return therapieLagereLuchtweginfectiesQuestions
    if (lmeParam === 'homing-migratie-recirculatie') return homingMigratieRecirculatieQuestions
    if (lmeParam === 'infectieuze-lymfadenopathie') return infectieuzeLymfadenopathieQuestions
    if (lmeParam === 'introductie-verworven-immuniteit') return introductieVerworvenImmuniteitQuestions
    if (lmeParam === 'secundaire-lymfoide-organen') return secundaireLymfoideOrganenQuestions
    if (lmeParam === 'antivirale-therapie') return antiviraleTherapieQuestions
    if (lmeParam === 'de-grote-drie-malaria') return deGroteDrieMalariaQuestions
    if (lmeParam === 'duurzame-hiv-zorg') return duurzameHivZorgQuestions
    if (lmeParam === 'immunologische-consequenties-hiv') return immunologischeConsequentiesHivQuestions
    if (lmeParam === 'tuberculose-bij-migranten') return tuberculoseBijMigrantenQuestions
    if (lmeParam === 'tuberculose-inleiding') return tuberculoseInleidingQuestions
    // LME 5: Schimmelinfecties van de huid, nagels en haren (per LME, alle vragen gecombineerd)
    if (lmeParam === 'lme5-schimmelinfecties') return Object.values(lme5QuestionsMap).flat()
    // LME 6: Voorbereiding VOW Milt (per LME, alle vragen gecombineerd)
    if (lmeParam === 'lme6-voorbereiding-vow-milt') return Object.values(lme6QuestionsMap).flat()
    if (lme5QuestionsMap[lmeParam]) return lme5QuestionsMap[lmeParam]
    if (lme6QuestionsMap[lmeParam]) return lme6QuestionsMap[lmeParam]
    // LME 1: Parasitaire verwekkers van gastro-enteritis
    if (lme1QuestionsMap[lmeParam]) return lme1QuestionsMap[lmeParam]
    // LME 2: Virale verwekkers van gastro-enteritis
    if (lme2QuestionsMap[lmeParam]) return lme2QuestionsMap[lmeParam]
    // LME 3: Welk antibioticum kies ik
    if (lme3QuestionsMap[lmeParam]) return lme3QuestionsMap[lmeParam]
    // Casus 10 LME 1: Dwang en drang in historisch perspectief
    if (casus10Lme1QuestionsMap[lmeParam]) return casus10Lme1QuestionsMap[lmeParam]
    // Casus 10 LME 2: Immunomodulatie
    if (casus10Lme2QuestionsMap[lmeParam]) return casus10Lme2QuestionsMap[lmeParam]
    // Casus 10 LME 3: Rechtvaardiging dwang en drang - Morele dilemma's bij vaccineren
    if (casus10Lme3QuestionsMap[lmeParam]) return casus10Lme3QuestionsMap[lmeParam]
    // Casus 10 LME 4: Waarom hoge vaccinatiegraad - De wiskunde van vaccinatie
    if (casus10Lme4QuestionsMap[lmeParam]) return casus10Lme4QuestionsMap[lmeParam]
    // Casus 11 LME 1: Leefstijl en immuunsysteem (Week 6 Casus 11 Primaire immuundeficiënties)
    if (casus11Lme1QuestionsMap[lmeParam]) return casus11Lme1QuestionsMap[lmeParam]
    // Casus 12 LME 1: Antibioticaresistentie en therapie
    if (casus12Lme1QuestionsMap[lmeParam]) return casus12Lme1QuestionsMap[lmeParam]
    // Casus 12 LME 2: Sepsis
    if (casus12Lme2QuestionsMap[lmeParam]) return casus12Lme2QuestionsMap[lmeParam]
    // Casus 12 LME 3: Voorbereiding Patient- en medicatieveiligheid
    if (casus12Lme3QuestionsMap[lmeParam]) return casus12Lme3QuestionsMap[lmeParam]
    // Casus 12 LME 4: Zorggerelateerde infecties
    if (casus12Lme4QuestionsMap[lmeParam]) return casus12Lme4QuestionsMap[lmeParam]
    // Casus 13 LME 1: Antibiotica Introductie
    if (casus13Lme1QuestionsMap[lmeParam]) return casus13Lme1QuestionsMap[lmeParam]
    // Casus 13 LME 2: Antibiotica Resistentie
    if (casus13Lme2QuestionsMap[lmeParam]) return casus13Lme2QuestionsMap[lmeParam]
    // Default (incl. alle-random): show all questions combined
    const blok3Count = embryogeneseQuestions.length + beeldvormingQuestions.length + extraembryonaalQuestions.length + extremiteitenQuestions.length
    const blok4Count = blok3Count + aangeborenImmuniteitHerkenningQuestions.length + introductieBacteriologieQuestions.length + introductieImmunologieQuestions.length + introductieMycologieQuestions.length + introductieParasitologieQuestions.length
    const allQuestions = [
      ...embryogeneseQuestions.map((q, i) => ({ ...q, id: i + 1 })),
      ...beeldvormingQuestions.map((q, i) => ({ ...q, id: embryogeneseQuestions.length + i + 1 })),
      ...extraembryonaalQuestions.map((q, i) => ({ ...q, id: embryogeneseQuestions.length + beeldvormingQuestions.length + i + 1 })),
      ...extremiteitenQuestions.map((q, i) => ({ ...q, id: embryogeneseQuestions.length + beeldvormingQuestions.length + extraembryonaalQuestions.length + i + 1 })),
      ...aangeborenImmuniteitHerkenningQuestions.map((q, i) => ({ ...q, id: blok3Count + i + 1 })),
      ...introductieBacteriologieQuestions.map((q, i) => ({ ...q, id: blok3Count + aangeborenImmuniteitHerkenningQuestions.length + i + 1 })),
      ...introductieImmunologieQuestions.map((q, i) => ({ ...q, id: blok3Count + aangeborenImmuniteitHerkenningQuestions.length + introductieBacteriologieQuestions.length + i + 1 })),
      ...introductieMycologieQuestions.map((q, i) => ({ ...q, id: blok3Count + aangeborenImmuniteitHerkenningQuestions.length + introductieBacteriologieQuestions.length + introductieImmunologieQuestions.length + i + 1 })),
      ...introductieParasitologieQuestions.map((q, i) => ({ ...q, id: blok4Count - introductieParasitologieQuestions.length + i + 1 })),
      ...introductieVirologieQuestions.map((q, i) => ({ ...q, id: blok4Count + i + 1 })),
      ...voorbereidingVOWMicrobiologieQuestions.map((q, i) => ({ ...q, id: blok4Count + introductieVirologieQuestions.length + i + 1 })),
      ...aangeborenImmuniteitResponsQuestions.map((q, i) => ({ ...q, id: blok4Count + introductieVirologieQuestions.length + voorbereidingVOWMicrobiologieQuestions.length + i + 1 })),
      ...antibioticaLeerlijnQuestions.map((q, i) => ({ ...q, id: blok4Count + introductieVirologieQuestions.length + voorbereidingVOWMicrobiologieQuestions.length + aangeborenImmuniteitResponsQuestions.length + i + 1 })),
      ...introductieAntimicrobieleTherapieQuestions.map((q, i) => ({ ...q, id: blok4Count + introductieVirologieQuestions.length + voorbereidingVOWMicrobiologieQuestions.length + aangeborenImmuniteitResponsQuestions.length + antibioticaLeerlijnQuestions.length + i + 1 })),
      ...urineweginfectiesQuestions.map((q, i) => ({ ...q, id: blok4Count + introductieVirologieQuestions.length + voorbereidingVOWMicrobiologieQuestions.length + aangeborenImmuniteitResponsQuestions.length + antibioticaLeerlijnQuestions.length + introductieAntimicrobieleTherapieQuestions.length + i + 1 })),
      ...infectiepreventieQuestions.map((q, i) => ({ ...q, id: blok4Count + introductieVirologieQuestions.length + voorbereidingVOWMicrobiologieQuestions.length + aangeborenImmuniteitResponsQuestions.length + antibioticaLeerlijnQuestions.length + introductieAntimicrobieleTherapieQuestions.length + urineweginfectiesQuestions.length + i + 1 })),
      ...introductieLuchtweginfectiesQuestions.map((q, i) => ({ ...q, id: blok4Count + introductieVirologieQuestions.length + voorbereidingVOWMicrobiologieQuestions.length + aangeborenImmuniteitResponsQuestions.length + antibioticaLeerlijnQuestions.length + introductieAntimicrobieleTherapieQuestions.length + urineweginfectiesQuestions.length + infectiepreventieQuestions.length + i + 1 })),
      ...microscopischeAnatomieLuchtwegenQuestions.map((q, i) => ({ ...q, id: blok4Count + introductieVirologieQuestions.length + voorbereidingVOWMicrobiologieQuestions.length + aangeborenImmuniteitResponsQuestions.length + antibioticaLeerlijnQuestions.length + introductieAntimicrobieleTherapieQuestions.length + urineweginfectiesQuestions.length + infectiepreventieQuestions.length + introductieLuchtweginfectiesQuestions.length + i + 1 })),
      ...pathofysiologieViraleLuchtweginfectiesQuestions.map((q, i) => ({ ...q, id: blok4Count + introductieVirologieQuestions.length + voorbereidingVOWMicrobiologieQuestions.length + aangeborenImmuniteitResponsQuestions.length + antibioticaLeerlijnQuestions.length + introductieAntimicrobieleTherapieQuestions.length + urineweginfectiesQuestions.length + infectiepreventieQuestions.length + introductieLuchtweginfectiesQuestions.length + microscopischeAnatomieLuchtwegenQuestions.length + i + 1 })),
      ...vervolgIntroductieVirologie2Questions.map((q, i) => ({ ...q, id: blok4Count + introductieVirologieQuestions.length + voorbereidingVOWMicrobiologieQuestions.length + aangeborenImmuniteitResponsQuestions.length + antibioticaLeerlijnQuestions.length + introductieAntimicrobieleTherapieQuestions.length + urineweginfectiesQuestions.length + infectiepreventieQuestions.length + introductieLuchtweginfectiesQuestions.length + microscopischeAnatomieLuchtwegenQuestions.length + pathofysiologieViraleLuchtweginfectiesQuestions.length + i + 1 })),
      ...viraleDiagnostiekQuestions.map((q, i) => ({ ...q, id: blok4Count + introductieVirologieQuestions.length + voorbereidingVOWMicrobiologieQuestions.length + aangeborenImmuniteitResponsQuestions.length + antibioticaLeerlijnQuestions.length + introductieAntimicrobieleTherapieQuestions.length + urineweginfectiesQuestions.length + infectiepreventieQuestions.length + introductieLuchtweginfectiesQuestions.length + microscopischeAnatomieLuchtwegenQuestions.length + pathofysiologieViraleLuchtweginfectiesQuestions.length + vervolgIntroductieVirologie2Questions.length + i + 1 })),
      ...cytokinenQuestions.map((q, i) => ({ ...q, id: blok4Count + introductieVirologieQuestions.length + voorbereidingVOWMicrobiologieQuestions.length + aangeborenImmuniteitResponsQuestions.length + antibioticaLeerlijnQuestions.length + introductieAntimicrobieleTherapieQuestions.length + urineweginfectiesQuestions.length + infectiepreventieQuestions.length + introductieLuchtweginfectiesQuestions.length + microscopischeAnatomieLuchtwegenQuestions.length + pathofysiologieViraleLuchtweginfectiesQuestions.length + vervolgIntroductieVirologie2Questions.length + viraleDiagnostiekQuestions.length + i + 1 })),
      ...infectieuzeOorzakenKoortsQuestions.map((q, i) => ({ ...q, id: blok4Count + introductieVirologieQuestions.length + voorbereidingVOWMicrobiologieQuestions.length + aangeborenImmuniteitResponsQuestions.length + antibioticaLeerlijnQuestions.length + introductieAntimicrobieleTherapieQuestions.length + urineweginfectiesQuestions.length + infectiepreventieQuestions.length + introductieLuchtweginfectiesQuestions.length + microscopischeAnatomieLuchtwegenQuestions.length + pathofysiologieViraleLuchtweginfectiesQuestions.length + vervolgIntroductieVirologie2Questions.length + viraleDiagnostiekQuestions.length + cytokinenQuestions.length + i + 1 })),
      ...nietInfectieuzeOorzakenKoortsQuestions.map((q, i) => ({ ...q, id: blok4Count + introductieVirologieQuestions.length + voorbereidingVOWMicrobiologieQuestions.length + aangeborenImmuniteitResponsQuestions.length + antibioticaLeerlijnQuestions.length + introductieAntimicrobieleTherapieQuestions.length + urineweginfectiesQuestions.length + infectiepreventieQuestions.length + introductieLuchtweginfectiesQuestions.length + microscopischeAnatomieLuchtwegenQuestions.length + pathofysiologieViraleLuchtweginfectiesQuestions.length + vervolgIntroductieVirologie2Questions.length + viraleDiagnostiekQuestions.length + cytokinenQuestions.length + infectieuzeOorzakenKoortsQuestions.length + i + 1 })),
      ...ontstekingsmediatorenQuestions.map((q, i) => ({ ...q, id: blok4Count + introductieVirologieQuestions.length + voorbereidingVOWMicrobiologieQuestions.length + aangeborenImmuniteitResponsQuestions.length + antibioticaLeerlijnQuestions.length + introductieAntimicrobieleTherapieQuestions.length + urineweginfectiesQuestions.length + infectiepreventieQuestions.length + introductieLuchtweginfectiesQuestions.length + microscopischeAnatomieLuchtwegenQuestions.length + pathofysiologieViraleLuchtweginfectiesQuestions.length + vervolgIntroductieVirologie2Questions.length + viraleDiagnostiekQuestions.length + cytokinenQuestions.length + infectieuzeOorzakenKoortsQuestions.length + nietInfectieuzeOorzakenKoortsQuestions.length + i + 1 })),
      ...watIsKoortsQuestions.map((q, i) => ({ ...q, id: blok4Count + introductieVirologieQuestions.length + voorbereidingVOWMicrobiologieQuestions.length + aangeborenImmuniteitResponsQuestions.length + antibioticaLeerlijnQuestions.length + introductieAntimicrobieleTherapieQuestions.length + urineweginfectiesQuestions.length + infectiepreventieQuestions.length + introductieLuchtweginfectiesQuestions.length + microscopischeAnatomieLuchtwegenQuestions.length + pathofysiologieViraleLuchtweginfectiesQuestions.length + vervolgIntroductieVirologie2Questions.length + viraleDiagnostiekQuestions.length + cytokinenQuestions.length + infectieuzeOorzakenKoortsQuestions.length + nietInfectieuzeOorzakenKoortsQuestions.length + ontstekingsmediatorenQuestions.length + i + 1 })),
      ...specifiekeVerwekkersLagereLuchtweginfectiesQuestions.map((q, i) => ({ ...q, id: blok4Count + introductieVirologieQuestions.length + voorbereidingVOWMicrobiologieQuestions.length + aangeborenImmuniteitResponsQuestions.length + antibioticaLeerlijnQuestions.length + introductieAntimicrobieleTherapieQuestions.length + urineweginfectiesQuestions.length + infectiepreventieQuestions.length + introductieLuchtweginfectiesQuestions.length + microscopischeAnatomieLuchtwegenQuestions.length + pathofysiologieViraleLuchtweginfectiesQuestions.length + vervolgIntroductieVirologie2Questions.length + viraleDiagnostiekQuestions.length + cytokinenQuestions.length + infectieuzeOorzakenKoortsQuestions.length + nietInfectieuzeOorzakenKoortsQuestions.length + ontstekingsmediatorenQuestions.length + watIsKoortsQuestions.length + i + 1 })),
      ...therapieLagereLuchtweginfectiesQuestions.map((q, i) => ({ ...q, id: blok4Count + introductieVirologieQuestions.length + voorbereidingVOWMicrobiologieQuestions.length + aangeborenImmuniteitResponsQuestions.length + antibioticaLeerlijnQuestions.length + introductieAntimicrobieleTherapieQuestions.length + urineweginfectiesQuestions.length + infectiepreventieQuestions.length + introductieLuchtweginfectiesQuestions.length + microscopischeAnatomieLuchtwegenQuestions.length + pathofysiologieViraleLuchtweginfectiesQuestions.length + vervolgIntroductieVirologie2Questions.length + viraleDiagnostiekQuestions.length + cytokinenQuestions.length + infectieuzeOorzakenKoortsQuestions.length + nietInfectieuzeOorzakenKoortsQuestions.length + ontstekingsmediatorenQuestions.length + watIsKoortsQuestions.length + specifiekeVerwekkersLagereLuchtweginfectiesQuestions.length + i + 1 })),
      ...homingMigratieRecirculatieQuestions.map((q, i) => ({ ...q, id: blok4Count + introductieVirologieQuestions.length + voorbereidingVOWMicrobiologieQuestions.length + aangeborenImmuniteitResponsQuestions.length + antibioticaLeerlijnQuestions.length + introductieAntimicrobieleTherapieQuestions.length + urineweginfectiesQuestions.length + infectiepreventieQuestions.length + introductieLuchtweginfectiesQuestions.length + microscopischeAnatomieLuchtwegenQuestions.length + pathofysiologieViraleLuchtweginfectiesQuestions.length + vervolgIntroductieVirologie2Questions.length + viraleDiagnostiekQuestions.length + cytokinenQuestions.length + infectieuzeOorzakenKoortsQuestions.length + nietInfectieuzeOorzakenKoortsQuestions.length + ontstekingsmediatorenQuestions.length + watIsKoortsQuestions.length + specifiekeVerwekkersLagereLuchtweginfectiesQuestions.length + therapieLagereLuchtweginfectiesQuestions.length + i + 1 })),
      ...infectieuzeLymfadenopathieQuestions.map((q, i) => ({ ...q, id: blok4Count + introductieVirologieQuestions.length + voorbereidingVOWMicrobiologieQuestions.length + aangeborenImmuniteitResponsQuestions.length + antibioticaLeerlijnQuestions.length + introductieAntimicrobieleTherapieQuestions.length + urineweginfectiesQuestions.length + infectiepreventieQuestions.length + introductieLuchtweginfectiesQuestions.length + microscopischeAnatomieLuchtwegenQuestions.length + pathofysiologieViraleLuchtweginfectiesQuestions.length + vervolgIntroductieVirologie2Questions.length + viraleDiagnostiekQuestions.length + cytokinenQuestions.length + infectieuzeOorzakenKoortsQuestions.length + nietInfectieuzeOorzakenKoortsQuestions.length + ontstekingsmediatorenQuestions.length + watIsKoortsQuestions.length + specifiekeVerwekkersLagereLuchtweginfectiesQuestions.length + therapieLagereLuchtweginfectiesQuestions.length + homingMigratieRecirculatieQuestions.length + i + 1 })),
      ...introductieVerworvenImmuniteitQuestions.map((q, i) => ({ ...q, id: blok4Count + introductieVirologieQuestions.length + voorbereidingVOWMicrobiologieQuestions.length + aangeborenImmuniteitResponsQuestions.length + antibioticaLeerlijnQuestions.length + introductieAntimicrobieleTherapieQuestions.length + urineweginfectiesQuestions.length + infectiepreventieQuestions.length + introductieLuchtweginfectiesQuestions.length + microscopischeAnatomieLuchtwegenQuestions.length + pathofysiologieViraleLuchtweginfectiesQuestions.length + vervolgIntroductieVirologie2Questions.length + viraleDiagnostiekQuestions.length + cytokinenQuestions.length + infectieuzeOorzakenKoortsQuestions.length + nietInfectieuzeOorzakenKoortsQuestions.length + ontstekingsmediatorenQuestions.length + watIsKoortsQuestions.length + specifiekeVerwekkersLagereLuchtweginfectiesQuestions.length + therapieLagereLuchtweginfectiesQuestions.length + homingMigratieRecirculatieQuestions.length + infectieuzeLymfadenopathieQuestions.length + i + 1 })),
      ...secundaireLymfoideOrganenQuestions.map((q, i) => ({ ...q, id: blok4Count + introductieVirologieQuestions.length + voorbereidingVOWMicrobiologieQuestions.length + aangeborenImmuniteitResponsQuestions.length + antibioticaLeerlijnQuestions.length + introductieAntimicrobieleTherapieQuestions.length + urineweginfectiesQuestions.length + infectiepreventieQuestions.length + introductieLuchtweginfectiesQuestions.length + microscopischeAnatomieLuchtwegenQuestions.length + pathofysiologieViraleLuchtweginfectiesQuestions.length + vervolgIntroductieVirologie2Questions.length + viraleDiagnostiekQuestions.length + cytokinenQuestions.length + infectieuzeOorzakenKoortsQuestions.length + nietInfectieuzeOorzakenKoortsQuestions.length + ontstekingsmediatorenQuestions.length + watIsKoortsQuestions.length + specifiekeVerwekkersLagereLuchtweginfectiesQuestions.length + therapieLagereLuchtweginfectiesQuestions.length + homingMigratieRecirculatieQuestions.length + infectieuzeLymfadenopathieQuestions.length + introductieVerworvenImmuniteitQuestions.length + i + 1 })),
      ...antiviraleTherapieQuestions.map((q, i) => ({ ...q, id: blok4Count + introductieVirologieQuestions.length + voorbereidingVOWMicrobiologieQuestions.length + aangeborenImmuniteitResponsQuestions.length + antibioticaLeerlijnQuestions.length + introductieAntimicrobieleTherapieQuestions.length + urineweginfectiesQuestions.length + infectiepreventieQuestions.length + introductieLuchtweginfectiesQuestions.length + microscopischeAnatomieLuchtwegenQuestions.length + pathofysiologieViraleLuchtweginfectiesQuestions.length + vervolgIntroductieVirologie2Questions.length + viraleDiagnostiekQuestions.length + cytokinenQuestions.length + infectieuzeOorzakenKoortsQuestions.length + nietInfectieuzeOorzakenKoortsQuestions.length + ontstekingsmediatorenQuestions.length + watIsKoortsQuestions.length + specifiekeVerwekkersLagereLuchtweginfectiesQuestions.length + therapieLagereLuchtweginfectiesQuestions.length + homingMigratieRecirculatieQuestions.length + infectieuzeLymfadenopathieQuestions.length + introductieVerworvenImmuniteitQuestions.length + secundaireLymfoideOrganenQuestions.length + i + 1 })),
      ...deGroteDrieMalariaQuestions.map((q, i) => ({ ...q, id: blok4Count + introductieVirologieQuestions.length + voorbereidingVOWMicrobiologieQuestions.length + aangeborenImmuniteitResponsQuestions.length + antibioticaLeerlijnQuestions.length + introductieAntimicrobieleTherapieQuestions.length + urineweginfectiesQuestions.length + infectiepreventieQuestions.length + introductieLuchtweginfectiesQuestions.length + microscopischeAnatomieLuchtwegenQuestions.length + pathofysiologieViraleLuchtweginfectiesQuestions.length + vervolgIntroductieVirologie2Questions.length + viraleDiagnostiekQuestions.length + cytokinenQuestions.length + infectieuzeOorzakenKoortsQuestions.length + nietInfectieuzeOorzakenKoortsQuestions.length + ontstekingsmediatorenQuestions.length + watIsKoortsQuestions.length + specifiekeVerwekkersLagereLuchtweginfectiesQuestions.length + therapieLagereLuchtweginfectiesQuestions.length + homingMigratieRecirculatieQuestions.length + infectieuzeLymfadenopathieQuestions.length + introductieVerworvenImmuniteitQuestions.length + secundaireLymfoideOrganenQuestions.length + antiviraleTherapieQuestions.length + i + 1 })),
      ...duurzameHivZorgQuestions.map((q, i) => ({ ...q, id: blok4Count + introductieVirologieQuestions.length + voorbereidingVOWMicrobiologieQuestions.length + aangeborenImmuniteitResponsQuestions.length + antibioticaLeerlijnQuestions.length + introductieAntimicrobieleTherapieQuestions.length + urineweginfectiesQuestions.length + infectiepreventieQuestions.length + introductieLuchtweginfectiesQuestions.length + microscopischeAnatomieLuchtwegenQuestions.length + pathofysiologieViraleLuchtweginfectiesQuestions.length + vervolgIntroductieVirologie2Questions.length + viraleDiagnostiekQuestions.length + cytokinenQuestions.length + infectieuzeOorzakenKoortsQuestions.length + nietInfectieuzeOorzakenKoortsQuestions.length + ontstekingsmediatorenQuestions.length + watIsKoortsQuestions.length + specifiekeVerwekkersLagereLuchtweginfectiesQuestions.length + therapieLagereLuchtweginfectiesQuestions.length + homingMigratieRecirculatieQuestions.length + infectieuzeLymfadenopathieQuestions.length + introductieVerworvenImmuniteitQuestions.length + secundaireLymfoideOrganenQuestions.length + antiviraleTherapieQuestions.length + deGroteDrieMalariaQuestions.length + i + 1 })),
      ...immunologischeConsequentiesHivQuestions.map((q, i) => ({ ...q, id: blok4Count + introductieVirologieQuestions.length + voorbereidingVOWMicrobiologieQuestions.length + aangeborenImmuniteitResponsQuestions.length + antibioticaLeerlijnQuestions.length + introductieAntimicrobieleTherapieQuestions.length + urineweginfectiesQuestions.length + infectiepreventieQuestions.length + introductieLuchtweginfectiesQuestions.length + microscopischeAnatomieLuchtwegenQuestions.length + pathofysiologieViraleLuchtweginfectiesQuestions.length + vervolgIntroductieVirologie2Questions.length + viraleDiagnostiekQuestions.length + cytokinenQuestions.length + infectieuzeOorzakenKoortsQuestions.length + nietInfectieuzeOorzakenKoortsQuestions.length + ontstekingsmediatorenQuestions.length + watIsKoortsQuestions.length + specifiekeVerwekkersLagereLuchtweginfectiesQuestions.length + therapieLagereLuchtweginfectiesQuestions.length + homingMigratieRecirculatieQuestions.length + infectieuzeLymfadenopathieQuestions.length + introductieVerworvenImmuniteitQuestions.length + secundaireLymfoideOrganenQuestions.length + antiviraleTherapieQuestions.length + deGroteDrieMalariaQuestions.length + duurzameHivZorgQuestions.length + i + 1 })),
      ...tuberculoseBijMigrantenQuestions.map((q, i) => ({ ...q, id: blok4Count + introductieVirologieQuestions.length + voorbereidingVOWMicrobiologieQuestions.length + aangeborenImmuniteitResponsQuestions.length + antibioticaLeerlijnQuestions.length + introductieAntimicrobieleTherapieQuestions.length + urineweginfectiesQuestions.length + infectiepreventieQuestions.length + introductieLuchtweginfectiesQuestions.length + microscopischeAnatomieLuchtwegenQuestions.length + pathofysiologieViraleLuchtweginfectiesQuestions.length + vervolgIntroductieVirologie2Questions.length + viraleDiagnostiekQuestions.length + cytokinenQuestions.length + infectieuzeOorzakenKoortsQuestions.length + nietInfectieuzeOorzakenKoortsQuestions.length + ontstekingsmediatorenQuestions.length + watIsKoortsQuestions.length + specifiekeVerwekkersLagereLuchtweginfectiesQuestions.length + therapieLagereLuchtweginfectiesQuestions.length + homingMigratieRecirculatieQuestions.length + infectieuzeLymfadenopathieQuestions.length + introductieVerworvenImmuniteitQuestions.length + secundaireLymfoideOrganenQuestions.length + antiviraleTherapieQuestions.length + deGroteDrieMalariaQuestions.length + duurzameHivZorgQuestions.length + immunologischeConsequentiesHivQuestions.length + i + 1 })),
      ...tuberculoseInleidingQuestions.map((q, i) => ({ ...q, id: blok4Count + introductieVirologieQuestions.length + voorbereidingVOWMicrobiologieQuestions.length + aangeborenImmuniteitResponsQuestions.length + antibioticaLeerlijnQuestions.length + introductieAntimicrobieleTherapieQuestions.length + urineweginfectiesQuestions.length + infectiepreventieQuestions.length + introductieLuchtweginfectiesQuestions.length + microscopischeAnatomieLuchtwegenQuestions.length + pathofysiologieViraleLuchtweginfectiesQuestions.length + vervolgIntroductieVirologie2Questions.length + viraleDiagnostiekQuestions.length + cytokinenQuestions.length + infectieuzeOorzakenKoortsQuestions.length + nietInfectieuzeOorzakenKoortsQuestions.length + ontstekingsmediatorenQuestions.length + watIsKoortsQuestions.length + specifiekeVerwekkersLagereLuchtweginfectiesQuestions.length + therapieLagereLuchtweginfectiesQuestions.length + homingMigratieRecirculatieQuestions.length + infectieuzeLymfadenopathieQuestions.length + introductieVerworvenImmuniteitQuestions.length + secundaireLymfoideOrganenQuestions.length + antiviraleTherapieQuestions.length + deGroteDrieMalariaQuestions.length + duurzameHivZorgQuestions.length + immunologischeConsequentiesHivQuestions.length + tuberculoseBijMigrantenQuestions.length + i + 1 }))
    ]
    return allQuestions
  }

  const getTitle = () => {
    if (lmeParam === 'embryogenese') return 'Embryogenese Bouwplan'
    if (lmeParam === 'beeldvorming') return 'Foetale Beeldvorming'
    if (lmeParam === 'extraembryonaal') return 'Extra Embryonale Structuren'
    if (lmeParam === 'extremiteiten') return 'Extremiteiten & Gewrichtsleer'
    if (lmeParam === 'aangeboren-immuniteit-herkenning') return 'Aangeboren Immuniteit - Herkenning'
    if (lmeParam === 'introductie-bacteriologie') return 'Introductie Bacteriologie'
    if (lmeParam === 'introductie-immunologie') return 'Introductie en overzicht immunologie'
    if (lmeParam === 'introductie-mycologie') return 'Introductie mycologie'
    if (lmeParam === 'introductie-parasitologie') return 'Introductie parasitologie'
    if (lmeParam === 'introductie-virologie') return 'Introductie virologie – deel 1'
    if (lmeParam === 'voorbereiding-vow-microbiologie') return 'Voorbereiding VOW Microbiologie'
    if (lmeParam === 'aangeboren-immuniteit-respons') return 'Aangeboren immuniteit – respons'
    if (lmeParam === 'antibiotica-leerlijn') return 'Antibiotica leerlijn'
    if (lmeParam === 'introductie-antimicrobiele-therapie') return 'Introductie antimicrobiële therapie'
    if (lmeParam === 'urineweginfecties') return 'Urineweginfecties'
    if (lmeParam === 'infectiepreventie') return 'Infectiepreventie'
    if (lmeParam === 'introductie-luchtweginfecties') return 'Introductie luchtweginfecties'
    if (lmeParam === 'microscopische-anatomie-luchtwegen') return 'Microscopische anatomie luchtwegen'
    if (lmeParam === 'pathofysiologie-virale-luchtweginfecties') return 'Pathofysiologie virale luchtweginfecties'
    if (lmeParam === 'vervolg-introductie-virologie-2') return 'Vervolg introductie virologie 2'
    if (lmeParam === 'virale-diagnostiek') return 'Virale diagnostiek'
    if (lmeParam === 'cytokinen') return 'Cytokinen'
    if (lmeParam === 'infectieuze-oorzaken-koorts') return 'Infectieuze oorzaken van koorts bij kinderen'
    if (lmeParam === 'niet-infectieuze-oorzaken-koorts') return 'Niet-infectieuze oorzaken van koorts bij kinderen'
    if (lmeParam === 'ontstekingsmediatoren') return 'Ontstekingsmediatoren'
    if (lmeParam === 'wat-is-koorts') return 'Wat is koorts'
    if (lmeParam === 'specifieke-verwekkers-lagere-luchtweginfecties') return 'Specifieke verwekkers lagere luchtweginfecties'
    if (lmeParam === 'therapie-lagere-luchtweginfecties') return 'Therapie lagere luchtweginfecties'
    if (lmeParam === 'homing-migratie-recirculatie') return 'Homing, migratie en recirculatie'
    if (lmeParam === 'infectieuze-lymfadenopathie') return 'Infectieuze lymfadenopathie – tweede lijn'
    if (lmeParam === 'introductie-verworven-immuniteit') return 'Introductie verworven immuniteit'
    if (lmeParam === 'secundaire-lymfoide-organen') return 'Secundaire lymfoïde organen'
    if (lmeParam === 'antivirale-therapie') return 'Antivirale therapie'
    if (lmeParam === 'de-grote-drie-malaria') return 'De grote drie Malaria'
    if (lmeParam === 'duurzame-hiv-zorg') return 'Duurzame hiv zorg in sub-Sahara-Afrika'
    if (lmeParam === 'immunologische-consequenties-hiv') return 'Immunologische consequenties hiv'
    if (lmeParam === 'tuberculose-bij-migranten') return 'Tuberculose bij migranten'
    if (lmeParam === 'tuberculose-inleiding') return 'Tuberculose – een inleiding'
    if (lmeParam === 'lme5-schimmelinfecties') return 'Schimmelinfecties van de huid, nagels en haren'
    if (lmeParam === 'lme6-voorbereiding-vow-milt') return 'Voorbereiding VOW Milt'
    if (lme5QuestionsMap[lmeParam]) return `Schimmelinfecties – Afbeelding ${lmeParam.replace('lme5-schimmelinfecties-image', '')}`
    if (lme6QuestionsMap[lmeParam]) return `Voorbereiding VOW Milt – Afbeelding ${lmeParam.replace('lme6-voorbereiding-vow-milt-image', '')}`
    if (lme1QuestionsMap[lmeParam]) return `Parasitaire verwekkers gastro-enteritis – Afbeelding ${lmeParam.replace('lme1-parasitaire-verwekkers-gastro-enteritis-image', '')}`
    if (lme2QuestionsMap[lmeParam]) return `Virale verwekkers gastro-enteritis – Afbeelding ${lmeParam.replace('lme2-virale-verwekkers-gastro-enteritis-image', '')}`
    if (lme3QuestionsMap[lmeParam]) return `Welk antibioticum kies ik – Afbeelding ${lmeParam.replace('lme3-welk-antibioticum-kies-ik-image', '')}`
    if (casus10Lme1QuestionsMap[lmeParam]) return `Dwang en drang in historisch perspectief – Afbeelding ${lmeParam.replace('casus10-lme1-dwang-en-drang-historisch-perspectief-image', '')}`
    if (casus10Lme2QuestionsMap[lmeParam]) return `Immunomodulatie – Afbeelding ${lmeParam.replace('casus10-lme2-immunomodulatie-image', '')}`
    if (casus10Lme3QuestionsMap[lmeParam]) return `Rechtvaardiging dwang en drang – Afbeelding ${lmeParam.replace('casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image', '')}`
    if (casus10Lme4QuestionsMap[lmeParam]) return `De wiskunde van vaccinatie – Afbeelding ${lmeParam.replace('casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image', '')}`
    if (casus11Lme1QuestionsMap[lmeParam]) return `Leefstijl en immuunsysteem – Afbeelding ${lmeParam.replace('casus11-lme1-leefstijl-en-immuunsysteem-image', '')}`
    if (casus12Lme1QuestionsMap[lmeParam]) return `Antibioticaresistentie en therapie – Afbeelding ${lmeParam.replace('casus12-lme1-antibioticaresistentie-en-therapie-image', '')}`
    if (casus12Lme2QuestionsMap[lmeParam]) return `Sepsis – Afbeelding ${lmeParam.replace('casus12-lme2-sepsis-image', '')}`
    if (casus12Lme3QuestionsMap[lmeParam]) return `Patient- en medicatieveiligheid – Afbeelding ${lmeParam.replace('casus12-lme3-patient-en-medicatieveiligheid-image', '')}`
    if (casus12Lme4QuestionsMap[lmeParam]) return `Zorggerelateerde infecties – Afbeelding ${lmeParam.replace('casus12-lme4-zorggerelateerde-infecties-image', '')}`
    if (casus13Lme1QuestionsMap[lmeParam]) return `Antibiotica Introductie – Afbeelding ${lmeParam.replace('casus13-lme1-antibiotica-introductie-image', '')}`
    if (casus13Lme2QuestionsMap[lmeParam]) return `Antibiotica Resistentie – Afbeelding ${lmeParam.replace('casus13-lme2-antibiotica-resistentie-image', '')}`
    if (lmeParam === 'alle-random') return 'Alle vragen (random)'
    return 'Alle Oefenvragen'
  }

  const getSubtitle = () => {
    if (lmeParam === 'embryogenese') return 'Test je kennis met 19 meerkeuzevragen over embryogenese.'
    if (lmeParam === 'beeldvorming') return 'Test je kennis met 18 meerkeuzevragen over foetale beeldvorming.'
    if (lmeParam === 'extraembryonaal') return 'Test je kennis met 15 meerkeuzevragen over extra embryonale structuren.'
    if (lmeParam === 'extremiteiten') return 'Test je kennis met 15 meerkeuzevragen over gewrichtsleer en embryologie.'
    if (lmeParam === 'aangeboren-immuniteit-herkenning') return 'Test je kennis met 18 meerkeuzevragen over aangeboren immuniteit en herkenning.'
    if (lmeParam === 'introductie-bacteriologie') return 'Test je kennis met 18 meerkeuzevragen over bacteriologie.'
    if (lmeParam === 'introductie-immunologie') return 'Test je kennis met 18 meerkeuzevragen over immunologie.'
    if (lmeParam === 'introductie-mycologie') return 'Test je kennis met 18 meerkeuzevragen over mycologie.'
    if (lmeParam === 'introductie-parasitologie') return 'Test je kennis met 18 meerkeuzevragen over parasitologie.'
    if (lmeParam === 'introductie-virologie') return 'Test je kennis met 18 meerkeuzevragen over virologie.'
    if (lmeParam === 'voorbereiding-vow-microbiologie') return 'Test je kennis met 18 meerkeuzevragen over VOW Microbiologie.'
    if (lmeParam === 'aangeboren-immuniteit-respons') return 'Test je kennis met 18 meerkeuzevragen over aangeboren immuniteit – respons.'
    if (lmeParam === 'antibiotica-leerlijn') return 'Test je kennis met 18 meerkeuzevragen over antibiotica.'
    if (lmeParam === 'introductie-antimicrobiele-therapie') return 'Test je kennis met 18 meerkeuzevragen over antimicrobiële therapie.'
    if (lmeParam === 'urineweginfecties') return 'Test je kennis met 18 meerkeuzevragen over urineweginfecties.'
    if (lmeParam === 'infectiepreventie') return 'Test je kennis met 18 meerkeuzevragen over infectiepreventie.'
    if (lmeParam === 'introductie-luchtweginfecties') return 'Test je kennis met 18 meerkeuzevragen over luchtweginfecties.'
    if (lmeParam === 'microscopische-anatomie-luchtwegen') return 'Test je kennis met 18 meerkeuzevragen over microscopische anatomie van de luchtwegen.'
    if (lmeParam === 'pathofysiologie-virale-luchtweginfecties') return 'Test je kennis met 18 meerkeuzevragen over pathofysiologie virale luchtweginfecties.'
    if (lmeParam === 'vervolg-introductie-virologie-2') return 'Test je kennis met 18 meerkeuzevragen over vervolg introductie virologie 2.'
    if (lmeParam === 'virale-diagnostiek') return 'Test je kennis met 18 meerkeuzevragen over virale diagnostiek.'
    if (lmeParam === 'cytokinen') return 'Test je kennis met 18 meerkeuzevragen over cytokinen.'
    if (lmeParam === 'infectieuze-oorzaken-koorts') return 'Test je kennis met 18 meerkeuzevragen over infectieuze oorzaken van koorts bij kinderen.'
    if (lmeParam === 'niet-infectieuze-oorzaken-koorts') return 'Test je kennis met 18 meerkeuzevragen over niet-infectieuze oorzaken van koorts bij kinderen.'
    if (lmeParam === 'ontstekingsmediatoren') return 'Test je kennis met 18 meerkeuzevragen over ontstekingsmediatoren.'
    if (lmeParam === 'wat-is-koorts') return 'Test je kennis met 18 meerkeuzevragen over wat koorts is.'
    if (lmeParam === 'specifieke-verwekkers-lagere-luchtweginfecties') return 'Test je kennis met 18 meerkeuzevragen over specifieke verwekkers lagere luchtweginfecties.'
    if (lmeParam === 'therapie-lagere-luchtweginfecties') return 'Test je kennis met 18 meerkeuzevragen over therapie lagere luchtweginfecties.'
    if (lmeParam === 'homing-migratie-recirculatie') return 'Test je kennis met 18 meerkeuzevragen over homing, migratie en recirculatie.'
    if (lmeParam === 'infectieuze-lymfadenopathie') return 'Test je kennis met 18 meerkeuzevragen over infectieuze lymfadenopathie – tweede lijn.'
    if (lmeParam === 'introductie-verworven-immuniteit') return 'Test je kennis met 20 meerkeuzevragen over introductie verworven immuniteit.'
    if (lmeParam === 'secundaire-lymfoide-organen') return 'Test je kennis met 18 meerkeuzevragen over secundaire lymfoïde organen.'
    if (lmeParam === 'antivirale-therapie') return 'Test je kennis met 18 meerkeuzevragen over antivirale therapie.'
    if (lmeParam === 'de-grote-drie-malaria') return 'Test je kennis met 18 meerkeuzevragen over De grote drie Malaria.'
    if (lmeParam === 'duurzame-hiv-zorg') return 'Test je kennis met 18 meerkeuzevragen over Duurzame hiv zorg in sub-Sahara-Afrika.'
    if (lmeParam === 'immunologische-consequenties-hiv') return 'Test je kennis met 18 meerkeuzevragen over Immunologische consequenties van HIV.'
    if (lmeParam === 'tuberculose-bij-migranten') return 'Test je kennis met 18 meerkeuzevragen over tuberculose bij migranten.'
    if (lmeParam === 'tuberculose-inleiding') return 'Test je kennis met 18 meerkeuzevragen over tuberculose – een inleiding.'
    if (lmeParam === 'lme5-schimmelinfecties') return `Test je kennis met ${getQuestionCount(lme5QuestionsMap)} meerkeuzevragen over schimmelinfecties.`
    if (lmeParam === 'lme6-voorbereiding-vow-milt') return `Test je kennis met ${getQuestionCount(lme6QuestionsMap)} meerkeuzevragen over de milt.`
    if (lme5QuestionsMap[lmeParam]) return `Test je kennis met ${lme5QuestionsMap[lmeParam]?.length || 0} meerkeuzevragen over schimmelinfecties.`
    if (lme6QuestionsMap[lmeParam]) return `Test je kennis met ${lme6QuestionsMap[lmeParam]?.length || 0} meerkeuzevragen over de milt.`
    if (lme1QuestionsMap[lmeParam]) return `Test je kennis met ${lme1QuestionsMap[lmeParam]?.length || 0} meerkeuzevragen over parasitaire verwekkers van gastro-enteritis.`
    if (lme2QuestionsMap[lmeParam]) return `Test je kennis met ${lme2QuestionsMap[lmeParam]?.length || 0} meerkeuzevragen over virale verwekkers van gastro-enteritis.`
    if (lme3QuestionsMap[lmeParam]) return `Test je kennis met ${lme3QuestionsMap[lmeParam]?.length || 0} meerkeuzevragen over antibioticakeuze.`
    if (casus10Lme1QuestionsMap[lmeParam]) return `Test je kennis met ${casus10Lme1QuestionsMap[lmeParam]?.length || 0} meerkeuzevragen over dwang en drang in historisch perspectief.`
    if (casus10Lme2QuestionsMap[lmeParam]) return `Test je kennis met ${casus10Lme2QuestionsMap[lmeParam]?.length || 0} meerkeuzevragen over immunomodulatie.`
    if (casus10Lme3QuestionsMap[lmeParam]) return `Test je kennis met ${casus10Lme3QuestionsMap[lmeParam]?.length || 0} meerkeuzevragen over rechtvaardiging dwang en drang – morele dilemma's bij vaccineren.`
    if (casus10Lme4QuestionsMap[lmeParam]) return `Test je kennis met ${casus10Lme4QuestionsMap[lmeParam]?.length || 0} meerkeuzevragen over de wiskunde van vaccinatie.`
    if (casus11Lme1QuestionsMap[lmeParam]) return `Test je kennis met ${casus11Lme1QuestionsMap[lmeParam]?.length || 0} meerkeuzevragen over leefstijl en immuunsysteem.`
    if (casus12Lme1QuestionsMap[lmeParam]) return `Test je kennis met ${casus12Lme1QuestionsMap[lmeParam]?.length || 0} meerkeuzevragen over antibioticaresistentie en therapie.`
    if (casus12Lme2QuestionsMap[lmeParam]) return `Test je kennis met ${casus12Lme2QuestionsMap[lmeParam]?.length || 0} meerkeuzevragen over sepsis.`
    if (casus12Lme3QuestionsMap[lmeParam]) return `Test je kennis met ${casus12Lme3QuestionsMap[lmeParam]?.length || 0} meerkeuzevragen over patient- en medicatieveiligheid.`
    if (casus12Lme4QuestionsMap[lmeParam]) return `Test je kennis met ${casus12Lme4QuestionsMap[lmeParam]?.length || 0} meerkeuzevragen over zorggerelateerde infecties.`
    if (casus13Lme1QuestionsMap[lmeParam]) return `Test je kennis met ${casus13Lme1QuestionsMap[lmeParam]?.length || 0} meerkeuzevragen over antibiotica introductie.`
    if (casus13Lme2QuestionsMap[lmeParam]) return `Test je kennis met ${casus13Lme2QuestionsMap[lmeParam]?.length || 0} meerkeuzevragen over antibiotica resistentie.`
    if (lmeParam === 'alle-random') return 'Oefen alle meerkeuzevragen in willekeurige volgorde.'
    return 'Test je kennis met 607 meerkeuzevragen over alle LMEs.'
  }

  const questions = useMemo(() => {
    const q = getQuestions()
    if (lmeParam === 'alle-random') {
      const arr = [...q]
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[arr[i], arr[j]] = [arr[j], arr[i]]
      }
      return arr.map((item, idx) => ({ ...item, id: idx + 1 }))
    }
    return q
  }, [lmeParam])
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
      <Navbar />
      <div className="h-20" />

      <main className="container-custom py-8 md:py-12">
        {/* Back to Summary / Overzicht */}
        {lmeParam && (
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-6 max-w-3xl mx-auto"
          >
            <Link
              to={lmeParam === 'alle-random' ? '/oefenvragen' : `/summary?lme=${lmeParam}`}
              className="inline-flex items-center gap-2 text-navy-600 hover:text-primary-600 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span className="font-medium">
                {lmeParam === 'alle-random' ? 'Terug naar overzicht' : 'Terug naar samenvatting'}
              </span>
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
          
          {/* Course structure: Blok → Week → Casus → LME (net als samenvattingen) */}
          {!lmeParam && (
            <div className="max-w-2xl mx-auto mt-8 space-y-4">
              {/* Blok 3 */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <button
                  onClick={() => setExpandedBlok(expandedBlok === 'blok3' ? null : 'blok3')}
                  className="w-full flex items-center justify-between p-5 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-primary-100 rounded-xl">
                      <GraduationCap className="w-6 h-6 text-primary-600" />
                    </div>
                    <div className="text-left">
                      <h2 className="text-lg font-bold text-slate-900">
                        {practiceQuestionsCourseStructure.blok3.name}
                      </h2>
                      <p className="text-sm text-slate-500">1 week · 2 casussen · 4 LME's</p>
                    </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${expandedBlok === 'blok3' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {expandedBlok === 'blok3' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5">
                        {practiceQuestionsCourseStructure.blok3.weeks.map((week, weekIndex) => (
                          <div key={weekIndex} className="border-l-2 border-slate-200 pl-5 ml-5">
                            <div className="flex items-center gap-3 mb-4 -ml-7">
                              <div className="w-3 h-3 rounded-full bg-primary-500 border-4 border-white shadow-sm" />
                              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-lg">
                                <Calendar className="w-4 h-4 text-slate-600" />
                                <span className="font-medium text-slate-700 text-sm">{week.name}</span>
                              </div>
                            </div>
                            {week.cases.map((casus, casusIndex) => (
                              <div key={casusIndex} className="mb-4">
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="p-2 bg-amber-100 rounded-lg">
                                    <Stethoscope className="w-4 h-4 text-amber-700" />
                                  </div>
                                  <span className="font-medium text-slate-800 text-sm">{casus.name}</span>
                                </div>
                                <div className="ml-9 space-y-2">
                                  {casus.lmes.map((lmeItem, lmeIndex) => (
                                    <Link
                                      key={lmeIndex}
                                      to={`/oefenvragen?lme=${lmeItem.id}`}
                                      className="flex items-center justify-between p-3 rounded-xl bg-accent-50 border border-accent-200 hover:border-accent-300 transition-colors"
                                    >
                                      <div className="flex items-center gap-3">
                                        <div className="p-1.5 rounded-lg bg-accent-200">
                                          <ClipboardCheck className="w-4 h-4 text-accent-700" />
                                        </div>
                                        <span className="font-medium text-accent-800 text-sm">
                                          {lmeItem.name}
                                        </span>
                                        <span className="text-xs text-accent-600">
                                          ({getLmeQuestionCount(lmeItem)} vragen)
                                        </span>
                                      </div>
                                      <ChevronRight className="w-4 h-4 text-accent-500" />
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Blok 4 */}
              <div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
                <button
                  onClick={() => setExpandedBlok(expandedBlok === 'blok4' ? null : 'blok4')}
                  className="w-full flex items-center justify-between p-5 hover:bg-slate-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-indigo-100 rounded-xl">
                      <Shield className="w-6 h-6 text-indigo-600" />
                    </div>
                    <div className="text-left">
                      <h2 className="text-lg font-bold text-slate-900">
                        {practiceQuestionsCourseStructure.blok4.name}
                      </h2>
                      <p className="text-sm text-slate-500">7 weken · 6 casussen · 46 LME's</p>
                    </div>
                  </div>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform ${expandedBlok === 'blok4' ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {expandedBlok === 'blok4' && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5">
                        {practiceQuestionsCourseStructure.blok4.weeks.map((week, weekIndex) => (
                          <div key={weekIndex} className="border-l-2 border-slate-200 pl-5 ml-5">
                            <div className="flex items-center gap-3 mb-4 -ml-7">
                              <div className="w-3 h-3 rounded-full bg-indigo-500 border-4 border-white shadow-sm" />
                              <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-100 rounded-lg">
                                <Calendar className="w-4 h-4 text-slate-600" />
                                <span className="font-medium text-slate-700 text-sm">{week.name}</span>
                              </div>
                            </div>
                            {week.cases.map((casus, casusIndex) => (
                              <div key={casusIndex} className="mb-4">
                                <div className="flex items-center gap-3 mb-3">
                                  <div className="p-2 bg-amber-100 rounded-lg">
                                    <Stethoscope className="w-4 h-4 text-amber-700" />
                                  </div>
                                  <span className="font-medium text-slate-800 text-sm">{casus.name}</span>
                                </div>
                                <div className="ml-9 space-y-2">
                                  {casus.lmes.map((lmeItem, lmeIndex) => (
                                    lmeItem.type === 'simple' ? (
                                      <Link
                                        key={lmeIndex}
                                        to={`/oefenvragen?lme=${lmeItem.id}`}
                                        className="flex items-center justify-between p-3 rounded-xl bg-accent-50 border border-accent-200 hover:border-accent-300 transition-colors"
                                      >
                                        <div className="flex items-center gap-3">
                                          <div className="p-1.5 rounded-lg bg-accent-200">
                                            <ClipboardCheck className="w-4 h-4 text-accent-700" />
                                          </div>
                                          <span className="font-medium text-accent-800 text-sm">
                                            {lmeItem.name}
                                          </span>
                                          <span className="text-xs text-accent-600">
                                            ({getLmeQuestionCount(lmeItem)} vragen)
                                          </span>
                                        </div>
                                        <ChevronRight className="w-4 h-4 text-accent-500" />
                                      </Link>
                                    ) : (
                                      <div key={lmeIndex} className="space-y-2">
                                        <div className="flex items-center gap-2 text-sm font-medium text-slate-700 py-2">
                                          <ClipboardCheck className="w-4 h-4 text-accent-600" />
                                          {lmeItem.name} ({getLmeQuestionCount(lmeItem)} vragen)
                                        </div>
                                        <div className="ml-6 grid grid-cols-2 sm:grid-cols-3 gap-2">
                                          {getImagesFromMap(lmeItem.questionsMap).map((img) => (
                                            <Link
                                              key={img.id}
                                              to={`/oefenvragen?lme=${img.id}`}
                                              className="px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 hover:border-accent-300 hover:bg-accent-50 text-sm text-slate-700 hover:text-accent-800 transition-colors"
                                            >
                                              {img.name}
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    )
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Oefen alle vragen random */}
              <Link
                to="/oefenvragen?lme=alle-random"
                className="block mt-6"
              >
                <div className="bg-gradient-to-r from-accent-50 to-primary-50 rounded-2xl border-2 border-accent-200 hover:border-accent-400 p-6 transition-all hover:shadow-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-accent-200 rounded-xl">
                        <Shuffle className="w-6 h-6 text-accent-700" />
                      </div>
                      <div>
                        <h3 className="text-lg font-bold text-slate-900">Oefen alle vragen random</h3>
                        <p className="text-sm text-slate-600 mt-0.5">
                          Alle meerkeuzevragen in willekeurige volgorde – ideaal voor examentraining
                        </p>
                      </div>
                    </div>
                    <ChevronRight className="w-6 h-6 text-accent-600" />
                  </div>
                </div>
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

        {/* Question Navigation Dots - max 3 rijen, rest scrollbaar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="mb-8 max-w-3xl mx-auto overflow-y-auto"
          style={{ maxHeight: 'calc(3 * (2.25rem + 0.5rem))' }}
        >
          <div className="flex flex-wrap justify-center gap-2">
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
          </div>
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

        {/* Previous / Next Practice Set */}
        {lmeParam && lmeParam !== 'alle-random' && (prevPracticeLme || nextPracticeLme) && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="max-w-3xl mx-auto mt-8"
          >
            <div className="flex items-center justify-between gap-3">
              {prevPracticeLme ? (
                <Link
                  to={`/oefenvragen?lme=${prevPracticeLme}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-navy-200 text-navy-700 hover:text-primary-600 hover:border-primary-300 transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" />
                  Vorige oefenvragen
                </Link>
              ) : <span />}
              {nextPracticeLme ? (
                <Link
                  to={`/oefenvragen?lme=${nextPracticeLme}`}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-navy-200 text-navy-700 hover:text-primary-600 hover:border-primary-300 transition-colors"
                >
                  Volgende oefenvragen
                  <ChevronRight className="w-4 h-4" />
                </Link>
              ) : <span />}
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
