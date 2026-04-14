// Auto-generated from: LME 60 – Dermatoloog in je broekzak.docx
// Regenerate: node scripts/generate-blok5-mini-summaries.mjs

const sections = [
  {
    id: "mini-sect-01",
    title: "Huidkanker komt veel voor en de incidentie stijgt.",
    icon: "BookOpen",
    html: `<p>Huidkanker komt veel voor en de incidentie stijgt. Vooral bij melanoom is vroege herkenning belangrijk, omdat dit de prognose kan verbeteren. Een app die met een smartphonefoto een huidafwijking beoordeelt, kan daarom nuttig zijn. Door de snelle ontwikkeling van smartphonecamera’s en het grote aantal smartphonegebruikers heeft zo’n app in theorie een groot bereik. De toegevoegde waarde zit niet alleen in het vroeg opsporen van huidkanker, maar ook in het herkennen van goedaardige afwijkingen, waardoor onnodige zorg kan worden verminderd.</p>`,
  },
  {
    id: "mini-sect-02",
    title: "Naast apps bestaat de ABCDE-methode om verdachte moedervlekken te beoordelen.",
    icon: "Layers",
    html: `<p>Naast apps bestaat de ABCDE-methode om verdachte moedervlekken te beoordelen. Deze methode is bedoeld voor patiënten, de algemene bevolking en zorgverleners. A staat voor asymmetrie, B voor een grillige border, C voor meerdere kleuren, D voor diameter groter dan 5 mm en E voor evolving: verandering van vorm of kleur, of klachten zoals jeuk of bloeding. Het doel van de ABCDE-methode is verdachte huidafwijkingen eerder herkennen, zodat huidkanker sneller wordt opgemerkt.</p>`,
  },
  {
    id: "mini-sect-03",
    title: "De prestaties van herkenning verschillen sterk per beoordelaar en situatie.",
    icon: "Stethoscope",
    html: `<p>De prestaties van herkenning verschillen sterk per beoordelaar en situatie. De algemene bevolking kan met de ABCDE-methode redelijk goed verdachte plekjes herkennen, maar artsen en vooral dermatologen doen het vaak beter, zeker met aanvullende middelen zoals dermatoscopie. Sensitiviteit betekent hoe goed een test de ziekte vindt: bij een sensitiviteit van 80% worden 80 van de 100 zieken herkend. Specificiteit betekent hoe goed een test mensen zonder ziekte juist negatief beoordeelt: bij 80% specificiteit krijgen 80 van de 100 gezonde mensen een negatieve uitslag. Sensitiviteit gaat dus over het missen van ziekte, specificiteit over het vermijden van fout-positieven.</p>`,
  },
  {
    id: "mini-sect-04",
    title: "Bij huidkankerapps komen drie begrippen vaak terug: Artificial Intelligence, Machine…",
    icon: "Activity",
    html: `<p>Bij huidkankerapps komen drie begrippen vaak terug: Artificial Intelligence, Machine Learning en Deep Learning. AI is de verzamelnaam voor methoden waarmee computers taken uitvoeren die als intelligent worden gezien. Bij Machine Learning leert een algoritme van data, vaak met door de ontwikkelaar geselecteerde kenmerken zoals grootte of kleur. Deep Learning gaat verder: het netwerk krijgt direct de volledige foto en leert zelf welke kenmerken belangrijk zijn. Bij beeldherkenning wordt vaak een Convolutional Neural Network gebruikt. Dit netwerk bestaat uit meerdere lagen van verbonden nodes en gebruikt convoluties om relevante informatie uit het beeld te halen, waarna uiteindelijk een classificatie volgt.</p>`,
  },
  {
    id: "mini-sect-05",
    title: "Een Deep Learning-algoritme moet getraind worden met veel beelden.",
    icon: "ShieldAlert",
    html: `<p>Een Deep Learning-algoritme moet getraind worden met veel beelden. Daarvoor zijn drie dingen nodig: beelden mét de afwijking die herkend moet worden, beelden zonder die afwijking of met andere afwijkingen, en labels met de juiste classificatie. Bij de ontwikkeling van SkinVision zijn meer dan 100.000 beelden gebruikt. Het opbouwen van zo’n dataset kost veel tijd en vraagt zorgvuldigheid. De kwaliteit van de dataset is cruciaal: de beelden moeten representatief zijn voor de afwijking én voor de doelgroep van de app. Daarbij maakt het uit met welk apparaat de beelden zijn gemaakt, bijvoorbeeld smartphone of dermatoscoop, en welke instellingen daarbij horen. Ook de labels moeten betrouwbaar zijn. De beste standaard is histopathologische beoordeling; soms wordt het oordeel van meerdere pathologen gecombineerd, omdat niet altijd direct volledige overeenstemming bestaat.</p>`,
  },
  {
    id: "mini-sect-06",
    title: "Bij het ontwikkelen en beoordelen van een model is generaliseerbaarheid essentieel.",
    icon: "ClipboardList",
    html: `<p>Bij het ontwikkelen en beoordelen van een model is generaliseerbaarheid essentieel. Een systeem kan uitstekend lijken te werken op de data waarop het getraind is, maar dat zegt nog niets over de praktijk. Daarom wordt een dataset gesplitst in een trainingsset en een testset. Het model leert eerst van de trainingsdata, daarna worden de parameters bepaald, en vervolgens wordt getest op afzonderlijke data die het nog niet eerder heeft gezien. Nog sterker is testen op een externe dataset, bijvoorbeeld uit een ander ziekenhuis met andere camera’s en andere pathologen. Alleen als een methode ook op meerdere externe datasets goed presteert, is toepassing in de praktijk echt plausibel.</p>`,
  },
  {
    id: "mini-sect-07",
    title: "Naast sensitiviteit en specificiteit is ook de positief voorspellende waarde van belang.",
    icon: "GitBranch",
    html: `<p>Naast sensitiviteit en specificiteit is ook de positief voorspellende waarde van belang. Die hangt sterk af van de prevalentie van de ziekte in de onderzochte groep. Als een ziekte zeldzaam is, kan een test nog best goed zijn en toch veel fout-positieven geven. In een voorbeeld met verzekerden in 2019 leidde de huidkanker-app tot 15.800 hoge-risicobeoordelingen en 92 bevestigde huidkankerdiagnoses na zo’n beoordeling. Dat komt neer op een PPV van 92/15.800, dus ongeveer 0,005, ofwel 5 per 1000. Slechts een klein deel van de als hoog risico ingeschatte gevallen bleek dus daadwerkelijk malign. Dat is relevant, omdat een lage PPV veel onterechte ongerustheid en extra zorg kan veroorzaken. Als een app gericht wordt ingezet bij mensen met een hoger risico, zal de PPV waarschijnlijk stijgen en het aantal fout-positieve verwijzingen dalen. Mogelijke kenmerken voor zo’n doelgroep zijn leeftijd boven 50 jaar, zonverbranding op jonge leeftijd, huidmaligniteiten of actinische keratosen in de voorgeschiedenis, een licht huidtype en een hoog aantal moedervlekken.</p>`,
  },
  {
    id: "mini-sect-08",
    title: "Een belangrijk probleem bij algoritmen is bias: een scheve uitkomst doordat het systeem…",
    icon: "Microscope",
    html: `<p>Een belangrijk probleem bij algoritmen is bias: een scheve uitkomst doordat het systeem tijdens training ongewenste voorkeuren leert. Bij huidkankerapps kan bias ontstaan door huidkleur, omdat veel datasets vooral bestaan uit mensen met een lichte huid, waardoor algoritmen minder goed werken op gepigmenteerde huid. Ook behaarde huid, tatoeages en objecten naast het plekje kunnen de beoordeling verstoren. Een liniaal naast een moedervlek kan bijvoorbeeld het algoritme misleiden als die in de trainingsdata vaak samen met melanomen voorkwam. Bias is dus een praktisch probleem dat de kwaliteit van de app echt kan beïnvloeden.</p>`,
  },
  {
    id: "mini-sect-09",
    title: "De invoering van huidkankerapps in de praktijk wordt bemoeilijkt door het grote aanbod…",
    icon: "FlaskConical",
    html: `<p>De invoering van huidkankerapps in de praktijk wordt bemoeilijkt door het grote aanbod aan gezondheidsapps. Voor beroepsverenigingen is het moeilijk om elke app afzonderlijk te beoordelen. In Nederland is daarom onder andere een medische app checker ontwikkeld. Voor huidkankerapps geldt dat veel apps beweren huidkanker te kunnen detecteren op basis van een foto, maar een systematische review concludeerde dat vrijwel alle apps onvoldoende gevalideerd zijn. Toch worden sommige apps vergoed door zorgverzekeraars. Mogelijke voordelen zijn vroegere detectie, een lagere drempel om zorg te zoeken en mogelijk lagere zorguitgaven. Daartegenover staan risico’s zoals fout-positieven, overdiagnostiek, onnodige verwijzingen en extra belasting voor patiënt en zorgverlener. Overdiagnostiek betekent dat een aandoening wordt gevonden die zonder screening waarschijnlijk geen klachten had veroorzaakt.</p>`,
  },
  {
    id: "mini-sect-10",
    title: "Ook regelgeving is belangrijk.",
    icon: "Pill",
    html: `<p>Ook regelgeving is belangrijk. In Europa kan een huidkankerapp niet zomaar door de ontwikkelaar zelf worden gecertificeerd. Voor een app zoals SkinVision geldt minimaal klasse 2a en is een certificaat van een notified body nodig. In de Verenigde Staten is de toelating nog strenger, en daar moet ook de toegevoegde waarde voor het zorgsysteem worden aangetoond.</p>`,
  },
  {
    id: "mini-sect-11",
    title: "Apps kunnen niet alleen worden gebruikt voor detectie, maar ook voor preventie.",
    icon: "CheckCircle2",
    html: `<p>Apps kunnen niet alleen worden gebruikt voor detectie, maar ook voor preventie. Een voorbeeld is een app die laat zien wat UV-straling op de huid kan doen, zoals Sunface of een UV-selfie-app. Daarmee wordt zichtbaar wat langdurige zonblootstelling met het gezicht kan veroorzaken. Zo’n app kan bewustwording vergroten over de schadelijke effecten van UV-licht. In een studie onder scholieren leidde dit tot minder zonnebankgebruik en vaker zelfonderzoek van de huid. Preventieve apps kunnen dus gedrag beïnvloeden en mensen attenderen op zonnebrand, overmatige zonblootstelling, het belang van SPF-zonnecrème en het vermijden van de zon tijdens piekuren.</p>`,
  }
]

const config = {
  baseLmeId: "blok5-week7-casus14-dermatoloog-in-je-broekzak",
  title: "Dermatoloog in je broekzak",
  description: "Huidkanker komt veel voor en de incidentie stijgt. Vooral bij melanoom is vroege herkenning belangrijk, omdat dit de prognose kan verbeteren. Een app die met een smartphonefoto een huidafwijking beoordeelt, kan daarom nuttig zijn. Door de snelle ontwikkeling van smartphonecamera’s en het grote aantal smartphonegebruikers heeft zo’n app in theori…",
  caseLabel: "Week 7 · Casus 14: AI in de zorg",
  practiceLink: "/oefenvragen?lme=blok5-week7-casus14-dermatoloog-in-je-broekzak",
  sections,
}

export default config
