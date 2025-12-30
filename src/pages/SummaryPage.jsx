import { motion, AnimatePresence } from 'framer-motion'
import { Link, useSearchParams } from 'react-router-dom'
import { 
  FileText, Home, BookOpen, Clock, ChevronUp, ChevronDown, ChevronRight,
  Brain, Bone, Hand, Activity, GraduationCap, Calendar, Stethoscope,
  ClipboardCheck, Layers, Target, Droplets, ArrowRight, ArrowLeft, Baby, Dna
} from 'lucide-react'
import { useState, useEffect } from 'react'

// LME 1: Embryogenese Bouwplan Content
const EmbryogeneseSummary = () => {
  const tableOfContents = [
    { id: 'week1-2', title: 'Week 1-2: Klieving en innesteling', icon: Baby },
    { id: 'gastrulatie', title: 'Week 3-4: Gastrulatie', icon: Layers },
    { id: 'neurulatie', title: 'Neurulatie', icon: Brain },
    { id: 'neurale-buisdefecten', title: 'Neurale buisdefecten', icon: Activity },
    { id: 'neurale-lijst', title: 'Neurale lijst', icon: Dna },
    { id: 'kromming', title: 'Kromming en holtevorming', icon: Target },
    { id: 'primitieve-darm', title: 'Primitieve darm', icon: Activity },
    { id: 'organogenese', title: 'Organogenese', icon: Layers },
  ]

  return (
    <SummaryLayout
      title="Embryogenese Bouwplan"
      description="Van zygote naar embryo: klieving, gastrulatie, neurulatie en vroege organogenese."
      caseLabel="Casus 1: Van embryo naar baby"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=embryogenese"
    >
      {/* Section 1 */}
      <section id="week1-2" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Baby className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Week 1-2: Klievingsdelingen en innesteling
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            In de eerste week na de bevruchting volgen de <strong>klievingsdelingen</strong> elkaar snel op. Uit de zygote ontstaat via <strong>morula</strong> en <strong>blastula</strong> een <strong>blastocyst</strong> waarin twee celpopulaties al een duidelijke taakverdeling laten zien:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
              <h4 className="font-bold text-primary-800 mb-2">Trofoblast</h4>
              <p className="text-primary-700">
                Vormt de basis voor <strong>placenta</strong> en andere extra-embryonale structuren.
              </p>
            </div>
            <div className="p-5 bg-accent-50 rounded-xl border border-accent-200">
              <h4 className="font-bold text-accent-800 mb-2">Embryoblast</h4>
              <p className="text-accent-700">
                Zal het <strong>eigenlijke embryo</strong> vormen.
              </p>
            </div>
          </div>
          
          <p>
            Het blastulaholte stadium markeert dus niet alleen een groeifase, maar ook een eerste <strong>functionele differentiatie</strong>.
          </p>
          
          <p>
            In de tweede week vindt de <strong>innesteling (nidatie)</strong> plaats: de blastocyst verankert zich in het endometrium en de interactie tussen trofoblast en maternale weefsels zet de <strong>placentatie</strong> in gang.
          </p>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2 flex items-center gap-2">
              <Stethoscope className="w-4 h-4" />
              Klinische relevantie
            </h4>
            <p className="text-rose-700 m-0">
              Afwijkingen in innesteling of vroege placenta-ontwikkeling kunnen leiden tot <strong>placenta problematiek</strong> of verkeerd gelegen innesteling.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 2 */}
      <section id="gastrulatie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center">
            <Layers className="w-5 h-5 text-accent-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Week 3-4: Gastrulatie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            In week drie tot vier start de <strong>gastrulatie</strong>, het kernmoment waarop het embryo van een relatief eenvoudige tweelagige opbouw naar een <strong>driebladig bouwplan</strong> gaat.
          </p>
          
          <div className="grid md:grid-cols-3 gap-3">
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
              <h4 className="font-bold text-blue-800 text-sm mb-2">Ectoderm</h4>
              <p className="text-blue-600 text-sm">Huid en zenuwstelsel</p>
            </div>
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
              <h4 className="font-bold text-emerald-800 text-sm mb-2">Mesoderm</h4>
              <p className="text-emerald-600 text-sm">Bind- en spierweefsels</p>
            </div>
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
              <h4 className="font-bold text-amber-800 text-sm mb-2">Endoderm</h4>
              <p className="text-amber-600 text-sm">Interne bekledingen (spijsvertering, ademhaling)</p>
            </div>
          </div>
          
          <p>
            Tijdens deze reorganisatie worden ook de <strong>lichaamsas</strong> en de ruimtelijke oriëntatie vastgelegd.
          </p>
          
          <div className="p-5 bg-slate-50 rounded-xl border-l-4 border-primary-400">
            <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
              <Target className="w-4 h-4 text-primary-500" />
              Notochord
            </h4>
            <p className="text-slate-600 m-0">
              Een centraal structurerend element dat in deze periode ontstaat. De notochord fungeert als <strong>signaalcentrum</strong> dat omliggende weefsels instrueert en is cruciaal voor het organiseren van <strong>neurale ontwikkeling</strong> en de aanleg van de <strong>wervelkolom</strong>.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3 */}
      <section id="neurulatie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
            <Brain className="w-5 h-5 text-purple-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Neurulatie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Neurulatie vormt de overgang van het algemene bouwplan naar specifieke aanleg van het <strong>centrale zenuwstelsel</strong>. Onder invloed van signalen uit de notochord wordt een deel van het ectoderm rond <strong>dag 16 na conceptie</strong> omgeschakeld naar neuro-ectoderm en vormt de <strong>neurale plaat</strong>.
          </p>
          
          <div className="p-5 bg-purple-50 rounded-xl border border-purple-200">
            <h4 className="font-bold text-purple-800 mb-3">Proces van neurulatie:</h4>
            <div className="flex flex-wrap items-center gap-2 text-sm">
              <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full">Neurale plaat</span>
              <span className="text-purple-400">→</span>
              <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full">Neurale plooien</span>
              <span className="text-purple-400">→</span>
              <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full">Neurale groeve</span>
              <span className="text-purple-400">→</span>
              <span className="px-3 py-1 bg-purple-200 text-purple-800 rounded-full">Neurale buis</span>
            </div>
          </div>
          
          <p>
            Rond <strong>dag 22</strong> begint de sluiting en in een embryo van ongeveer 23 dagen is de neurale buis al bijna volledig gesloten. Aan beide uiteinden blijven tijdelijk openingen bestaan: de <strong>neuroporus anterior</strong> en <strong>neuroporus posterior</strong>.
          </p>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2 flex items-center gap-2">
              <Stethoscope className="w-4 h-4" />
              Klinische relevantie
            </h4>
            <p className="text-rose-700 m-0">
              <strong>Folaattekort</strong> en andere risicofactoren in deze korte periode kunnen grote gevolgen hebben voor de sluiting van de neurale buis.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4 */}
      <section id="neurale-buisdefecten" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-red-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Neurale buisdefecten
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Wanneer sluiting van de neurale buis faalt, ontstaan <strong>neurale buisdefecten</strong>:
          </p>
          
          <div className="space-y-3">
            <div className="p-4 bg-red-50 rounded-xl border border-red-200">
              <h4 className="font-bold text-red-800 text-sm">Anencefalie</h4>
              <p className="text-red-600 text-sm mt-1">Craniale deel sluit niet - ernstige stoornissen in ontwikkeling van hersenen en schedeldak</p>
            </div>
            <div className="p-4 bg-red-50 rounded-xl border border-red-200">
              <h4 className="font-bold text-red-800 text-sm">Craniorachischisis</h4>
              <p className="text-red-600 text-sm mt-1">Groot deel van neurale buis sluit niet - zowel craniale als spinale delen aangedaan</p>
            </div>
            <div className="p-4 bg-red-50 rounded-xl border border-red-200">
              <h4 className="font-bold text-red-800 text-sm">Spina bifida</h4>
              <p className="text-red-600 text-sm mt-1">Lokale sluiting faalt ter hoogte van ruggenmerg - deel van ruggenmerg en wervelbogen ontwikkelen niet normaal</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 5 */}
      <section id="neurale-lijst" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Dna className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Neurale lijst (Neural Crest)
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Parallel aan de vorming van de neurale buis verschijnt op de grens tussen <strong>neurale plaat/buis en het omliggende ectoderm</strong> een tijdelijke celpopulatie: de <strong>neurale lijst</strong>.
          </p>
          
          <p>
            Deze cellen laten los, migreren door het embryo en leveren een grote bijdrage aan het <strong>perifere zenuwstelsel</strong>.
          </p>
          
          <div className="p-5 bg-indigo-50 rounded-xl border-l-4 border-indigo-400">
            <p className="text-indigo-700 m-0">
              Het idee dat een "tijdelijke" structuur een brede invloed heeft, is typisch voor dit stadium: <strong>korte vensters met grote downstream effecten</strong>.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 6 */}
      <section id="kromming" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Kromming en holtevorming (Week 4)
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Het embryo verandert van een relatief vlakke schijf naar een meer <strong>cilindervormige structuur</strong> door kromming in meerdere richtingen.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
              <h4 className="font-bold text-teal-800 mb-2">Hoofdplooiing</h4>
              <p className="text-teal-700 text-sm">
                De bucco-faryngeale membraan verschuift. Ventraal ontstaat het <strong>stomodeum</strong> (aanleg mondholte).
              </p>
            </div>
            <div className="p-5 bg-cyan-50 rounded-xl border border-cyan-200">
              <h4 className="font-bold text-cyan-800 mb-2">Staartplooiing</h4>
              <p className="text-cyan-700 text-sm">
                De cloacale membraan komt meer ventraal te liggen. De einddarm wordt naar binnen getrokken.
              </p>
            </div>
          </div>
          
          <p>
            <strong>Transversale kromming</strong> (laterale folding): de laterale lichaamswanden bewegen naar elkaar toe en sluiten ventraal, wat leidt tot vorming van de <strong>buikwand</strong>.
          </p>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2 flex items-center gap-2">
              <Stethoscope className="w-4 h-4" />
              Klinische relevantie
            </h4>
            <p className="text-rose-700 m-0">
              Falen van ventrale sluiting kan leiden tot <strong>buikwanddefecten</strong> waarbij darmen of blaas naar buiten kunnen treden.
            </p>
          </div>
          
          <p>
            Het <strong>intra-embryonale coeloom</strong> ontstaat door splitsing van het laterale plaatmesoderm in een parietale en viscerale laag. Dit is de voorloper van de grote lichaamsholtes (pericardiaal, pleuraal, peritoneaal).
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 7 */}
      <section id="primitieve-darm" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-orange-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Primitieve darm en orgaanaanleg
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Tijdens het krommingsproces transformeert het <strong>endoderm</strong> van een platte laag tot een buis: de <strong>primitieve darm</strong>.
          </p>
          
          <div className="grid md:grid-cols-3 gap-3">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center font-bold text-sm mx-auto mb-2">1</div>
              <h4 className="font-bold text-slate-800 text-sm">Voordarm</h4>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center font-bold text-sm mx-auto mb-2">2</div>
              <h4 className="font-bold text-slate-800 text-sm">Middendarm</h4>
              <p className="text-slate-500 text-xs mt-1">Verbonden met dooierzak</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
              <div className="w-8 h-8 bg-orange-500 text-white rounded-lg flex items-center justify-center font-bold text-sm mx-auto mb-2">3</div>
              <h4 className="font-bold text-slate-800 text-sm">Einddarm</h4>
            </div>
          </div>
          
          <p>
            Uit de primitieve voordarm ontstaan vanaf <strong>dag 22</strong>:
          </p>
          
          <ul className="space-y-2 ml-4">
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-orange-500 mt-1 shrink-0" />
              <span><strong>Trachea en longen</strong> - ventraal uit de voordarm caudaal van de farynx</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-orange-500 mt-1 shrink-0" />
              <span><strong>Leveraanleg</strong> - caudaal van de longaanleg</span>
            </li>
            <li className="flex items-start gap-2">
              <ArrowRight className="w-4 h-4 text-orange-500 mt-1 shrink-0" />
              <span><strong>Pancreasaanleg</strong></span>
            </li>
          </ul>
          
          <p>
            Tussen hart en lever ligt het <strong>septum transversum</strong>, dat later bijdraagt aan de ontwikkeling van het <strong>diafragma</strong>.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 8 */}
      <section id="organogenese" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <Layers className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Organogenese (Week 5-8)
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Wanneer de vroege bouwfasen eenmaal gelegd zijn, volgt de periode van <strong>organogenese</strong> (week 5-8). In deze fase groeien de reeds aangelegde structuren uit, worden ze complexer en vinden verdere differentiatie en migratieprocessen plaats.
          </p>
          
          <div className="p-5 bg-emerald-50 rounded-xl border-l-4 border-emerald-400">
            <p className="text-emerald-700 m-0">
              Klinisch wordt deze periode vaak genoemd als een venster met <strong>verhoogd risico op aangeboren afwijkingen</strong>, omdat veel organen hun vorm en verbindingen in deze weken verfijnen.
            </p>
          </div>
          
          <p>
            De rode draad van het hele traject is dat het embryo van een eenvoudige celmassa via een strak getimede reeks van vormveranderingen en differentiatiestappen naar een georganiseerd lichaam gaat. <strong>Timing, ruimtelijke relaties en tijdelijke structuren</strong> zijn bepalend voor zowel normale anatomie als voor het begrijpen van typische congenitale afwijkingen.
          </p>
        </div>
      </section>
    </SummaryLayout>
  )
}

// LME 2: Extremiteiten en Gewrichtsleer Content
const ExtremiteitenSummary = () => {
  const tableOfContents = [
    { id: 'inleiding', title: 'Ledemaatknoppen en de AER', icon: Brain },
    { id: 'proximodistaal', title: 'Proximodistale opbouw', icon: Layers },
    { id: 'orientatie', title: 'Oriëntatie en assen', icon: Target },
    { id: 'dermatomen', title: 'Dermatomen vs huidgebieden', icon: Hand },
    { id: 'botontwikkeling', title: 'Botontwikkeling', icon: Bone },
    { id: 'juncturae', title: 'Gewrichtsverbindingen', icon: Activity },
  ]

  return (
    <SummaryLayout
      title="Ontwikkeling extremiteiten en gewrichtsleer"
      description="Embryologische ontwikkeling van ledematen, botontwikkeling en gewrichtsverbindingen."
      caseLabel="Casus 2: Spina bifida"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=extremiteiten"
    >
      {/* Section 1 */}
      <section id="inleiding" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Brain className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Ledemaatknoppen en de AER
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Tijdens de vroege ontwikkeling van de ledematen ontstaan arm- en beenknoppen uit <strong>mesenchymaal weefsel</strong> dat afkomstig is uit het <strong>laterale plaatmesoderm</strong>, met daaroverheen een laag ectoderm. Aan de distale rand van zo'n ledemaatknop wordt het ectoderm dikker en vormt het de <strong>apicale ectodermale richel (AER)</strong>.
          </p>
          <p>
            De AER is essentieel voor de <strong>proximodistale uitgroei</strong> (van romp naar hand/voet), omdat deze richel signalen afgeeft die het onderliggende mesenchym in een ongedifferentieerde, snel delende toestand houdt. Daardoor blijft er een zone bestaan waarin cellen blijven prolifereren, terwijl cellen die verder van de AER af komen juist gaan differentiëren.
          </p>
          
          <div className="p-5 bg-slate-50 rounded-xl border-l-4 border-primary-400">
            <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
              <Target className="w-4 h-4 text-primary-500" />
              Inductie-concept
            </h4>
            <p className="text-slate-600 m-0">
              Dit principe past binnen het bredere concept van <strong>inductie</strong>: organen en structuren worden gevormd door interacties tussen cellen en weefsels, waarbij een "inductor" een signaal afgeeft en een "responder" dit signaal ontvangt en daarop reageert. Alleen wanneer het responderweefsel <em>competent</em> is, kan het daadwerkelijk op die inductieve prikkel reageren.
            </p>
          </div>
          
          <p>
            In de ledemaatontwikkeling is de <strong>epitheel–mesenchym interactie</strong> tussen AER (ectoderm/epitheel) en mesenchym een klassiek voorbeeld van zulke inductie.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 2 */}
      <section id="proximodistaal" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center">
            <Layers className="w-5 h-5 text-accent-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Proximodistale opbouw en vingervorming
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            De proximodistale opbouw van een ledemaat kan je beschrijven in <strong>drie opeenvolgende segmenten</strong>:
          </p>
          
          <div className="grid md:grid-cols-3 gap-3">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="w-8 h-8 bg-primary-500 text-white rounded-lg flex items-center justify-center font-bold text-sm mb-3">1</div>
              <h4 className="font-bold text-slate-800 text-sm">Stylopod</h4>
              <p className="text-slate-500 text-sm mt-1">Bovenarm of bovenbeen: humerus of femur</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="w-8 h-8 bg-accent-500 text-white rounded-lg flex items-center justify-center font-bold text-sm mb-3">2</div>
              <h4 className="font-bold text-slate-800 text-sm">Zeugopod</h4>
              <p className="text-slate-500 text-sm mt-1">Onderarm of onderbeen: radius/ulna en tibia/fibula</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <div className="w-8 h-8 bg-emerald-500 text-white rounded-lg flex items-center justify-center font-bold text-sm mb-3">3</div>
              <h4 className="font-bold text-slate-800 text-sm">Autopod</h4>
              <p className="text-slate-500 text-sm mt-1">Hand/voet: carpalia/tarsalia, metacarpalia/metatarsalia en de digiti</p>
            </div>
          </div>
          
          <p>
            Terwijl de ledemaat verder groeit, verschijnt distaal een <strong>hand- of voetplaat</strong>. De uiteindelijke vorming van afzonderlijke vingers en tenen gebeurt niet doordat er "gaten" worden uitgesneden, maar doordat in de gebieden tussen de digitale stralen <strong>geprogrammeerde celdood (apoptose)</strong> optreedt.
          </p>
          <p>
            Daardoor verdwijnen de weefselbruggen tussen de stralen en blijven afzonderlijke vingers of tenen over. Dit mechanisme is een kernidee om te onthouden bij het begrijpen van <em>aangeboren afwijkingen</em> waarbij vingers of tenen juist vergroeid blijven.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3 */}
      <section id="orientatie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-purple-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Oriëntatie: Pre-axiaal en Post-axiaal
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Naast de proximodistale organisatie speelt ook de oriëntatie van de ledemaat een rol via de hoofdas(sen), waaronder het onderscheid tussen <strong>pre-axiaal</strong> en <strong>post-axiaal</strong>.
          </p>
          <p>
            In de proximodistale ontwikkeling ligt craniaal de pre-axiale begrenzing en caudaal de post-axiale begrenzing. Door de <strong>rotatie van de ledematen</strong> tijdens de embryonale ontwikkeling wordt de uiteindelijke anatomische ligging in het bovenste en onderste lidmaat anders geïnterpreteerd:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-blue-200 rounded-lg flex items-center justify-center text-xs">Arm</span>
                Bovenste lidmaat
              </h4>
              <ul className="space-y-2 text-blue-700 text-sm">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  Pre-axiaal defect → <strong>radiale zijde</strong>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  Post-axiaal defect → <strong>ulnaire zijde</strong>
                </li>
              </ul>
            </div>
            <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200">
              <h4 className="font-bold text-emerald-800 mb-3 flex items-center gap-2">
                <span className="w-6 h-6 bg-emerald-200 rounded-lg flex items-center justify-center text-xs">Been</span>
                Onderste lidmaat
              </h4>
              <ul className="space-y-2 text-emerald-700 text-sm">
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  Pre-axiaal defect → <strong>tibiale zijde</strong>
                </li>
                <li className="flex items-center gap-2">
                  <ArrowRight className="w-3 h-3" />
                  Post-axiaal defect → <strong>fibulaire zijde</strong>
                </li>
              </ul>
            </div>
          </div>
          
          <p>
            Dit kader helpt bij het plaatsen van <em>reductiedefecten</em> en variaties in ledemaatvorming.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4 */}
      <section id="dermatomen" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
            <Hand className="w-5 h-5 text-orange-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Dermatomen vs Huidverzorgingsgebieden
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Voor het begrijpen van sensibiliteit in arm en hand is het onderscheid tussen <strong>dermatomen</strong> en <strong>huidverzorgingsgebieden</strong> belangrijk.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-2">Dermatoom</h4>
              <p className="text-amber-700">
                Een huidgebied dat sensibel wordt geïnnerveerd door <strong>één spinaal segment</strong> (één ruggenmergzenuw).
              </p>
            </div>
            <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
              <h4 className="font-bold text-teal-800 mb-2">Huidverzorgingsgebied</h4>
              <p className="text-teal-700">
                Het resultaat van de ontwikkeling van plexussen (bijvoorbeeld plexus brachialis) en bestaat meestal uit vezels van <strong>meerdere spinale niveaus</strong>.
              </p>
            </div>
          </div>
          
          <p>
            Huidverzorgingsgebieden van perifere zenuwen (zoals <strong>nervus medianus</strong>, <strong>ulnaris</strong> en <strong>radialis</strong>) zijn het resultaat van plexusvorming en bevatten vezels van meerdere spinale niveaus.
          </p>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2 flex items-center gap-2">
              <Stethoscope className="w-4 h-4" />
              Klinische relevantie
            </h4>
            <p className="text-rose-700 m-0">
              Dit verklaart waarom een laesie op <strong>wortelniveau</strong> (dermatoompatroon) anders presenteert dan een <strong>perifere zenuwlaesie</strong> (huidverzorgingsgebied).
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 5 */}
      <section id="botontwikkeling" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Bone className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Botontwikkeling
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            De ontwikkeling van botten kan op <strong>twee hoofdmanieren</strong> verlopen:
          </p>
          
          <div className="space-y-4">
            <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-200">
              <h4 className="font-bold text-indigo-800 mb-3">Endochondrale botvorming</h4>
              <p className="text-indigo-700 mb-3">
                Bij endochondrale botvorming ontstaat eerst een <strong>kraakbeenmodel</strong>: mesenchymale cellen differentiëren naar chondrocyten, waarna een kraakbenige aanleg zichtbaar wordt. Vervolgens ontstaan ossificatiecentra; <strong>vascularisatie</strong> speelt hierbij een belangrijke rol doordat bloedvaten binnendringen en de omgeving geschikt maken voor osteoblastdifferentiatie en botmatrixvorming.
              </p>
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="px-2.5 py-1 bg-indigo-200 text-indigo-800 rounded-full">Mesenchym</span>
                <span className="text-indigo-400">→</span>
                <span className="px-2.5 py-1 bg-indigo-200 text-indigo-800 rounded-full">Kraakbeenmodel</span>
                <span className="text-indigo-400">→</span>
                <span className="px-2.5 py-1 bg-indigo-200 text-indigo-800 rounded-full">Primaire ossificatie</span>
                <span className="text-indigo-400">→</span>
                <span className="px-2.5 py-1 bg-indigo-200 text-indigo-800 rounded-full">Secundaire ossificatie</span>
                <span className="text-indigo-400">→</span>
                <span className="px-2.5 py-1 bg-indigo-200 text-indigo-800 rounded-full">Groeischijf</span>
              </div>
              <p className="text-indigo-600 text-sm mt-3">
                Zo vormt zich primair bot, later gevolgd door secundaire ossificatiecentra, terwijl lengtegroei mogelijk blijft via de groeischijf.
              </p>
            </div>
            
            <div className="p-5 bg-slate-100 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-800 mb-3">Desmale (intramembraneuze) verbening</h4>
              <p className="text-slate-600 mb-3">
                Bij desmale verbening is er <strong>geen kraakbeenmodel</strong>: mesenchym differentieert direct naar osteoblasten die botmatrix produceren.
              </p>
              <p className="text-slate-500 text-sm">
                Dit komt onder andere voor bij platte beenderen zoals delen van de schedel.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 6 */}
      <section id="juncturae" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-rose-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Gewrichtsverbindingen (Juncturae)
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            <strong>Juncturae</strong> zijn de manieren waarop botten met elkaar verbonden kunnen zijn. Sommige verbindingen zijn nauwelijks beweeglijk, andere juist sterk beweeglijk. Er worden <strong>vier hoofdtypen</strong> onderscheiden:
          </p>
          
          <div className="grid md:grid-cols-2 gap-3">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-800 text-sm">Junctura fibrosa</h4>
              <p className="text-slate-500 text-sm mt-1">Bindweefselverbinding, zoals een syndesmose</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-800 text-sm">Junctura cartilaginea</h4>
              <p className="text-slate-500 text-sm mt-1">Kraakbeenverbinding, zoals de discus intervertebralis</p>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-800 text-sm">Junctura ossea</h4>
              <p className="text-slate-500 text-sm mt-1">Botverbinding, zoals fusie van botdelen</p>
            </div>
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
              <h4 className="font-bold text-emerald-800 text-sm">Junctura synovialis</h4>
              <p className="text-emerald-600 text-sm mt-1">Synoviaal gewricht (diarthrose) - het meest beweeglijk</p>
            </div>
          </div>

          <p>
            <strong>Synoviale gewrichten</strong> worden gekenmerkt door gewrichtsvlakken met <strong>hyalien kraakbeen</strong>, een gewrichtsspleet en een <strong>gewrichtskapsel (capsula articularis)</strong>.
          </p>

          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-4">Het gewrichtskapsel bestaat uit twee lagen:</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="w-7 h-7 bg-primary-500 text-white rounded-lg flex items-center justify-center font-bold text-xs shrink-0">1</span>
                <div>
                  <span className="font-medium text-slate-800">Membrana synovialis</span>
                  <span className="text-slate-500 ml-2">(binnenste laag)</span>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <span className="w-7 h-7 bg-accent-500 text-white rounded-lg flex items-center justify-center font-bold text-xs shrink-0">2</span>
                <div>
                  <span className="font-medium text-slate-800">Membrana fibrosa</span>
                  <span className="text-slate-500 ml-2">(buitenste laag)</span>
                </div>
              </div>
            </div>
          </div>

          <div className="p-5 bg-cyan-50 rounded-xl border-l-4 border-cyan-400">
            <h4 className="font-bold text-cyan-800 mb-2 flex items-center gap-2">
              <Droplets className="w-4 h-4" />
              Synovia (gewrichtsvloeistof)
            </h4>
            <p className="text-cyan-700 m-0">
              De membrana synovialis produceert <strong>synovia</strong> (gewrichtsvloeistof), wat essentieel is voor voeding van het hyaliene kraakbeen en voor het verminderen van wrijving tussen de gewrichtsvlakken.
            </p>
          </div>
          
          <p>
            Daarmee sluiten de thema's van ontwikkeling, weefselinteractie en uiteindelijke functie van het bewegingsapparaat logisch op elkaar aan.
          </p>
        </div>
      </section>
    </SummaryLayout>
  )
}

// Reusable Layout Component
const SummaryLayout = ({ title, description, caseLabel, tableOfContents, practiceLink, children }) => {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
      
      const sections = document.querySelectorAll('section[id]')
      let current = ''
      sections.forEach(section => {
        const sectionTop = section.offsetTop
        if (window.scrollY >= sectionTop - 200) {
          current = section.getAttribute('id')
        }
      })
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <>
      <div className="grid lg:grid-cols-[260px_1fr] gap-8">
        {/* Sidebar */}
        <motion.aside
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          className="hidden lg:block"
        >
          <div className="sticky top-24 bg-white rounded-2xl shadow-sm border border-slate-200 p-5">
            <h3 className="font-bold text-slate-800 mb-4 flex items-center gap-2 text-sm uppercase tracking-wide">
              <BookOpen className="w-4 h-4 text-primary-500" />
              Inhoud
            </h3>
            <nav className="space-y-1">
              {tableOfContents.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm transition-all ${
                    activeSection === item.id
                      ? 'bg-primary-50 text-primary-700 font-medium'
                      : 'text-slate-600 hover:bg-slate-50 hover:text-slate-800'
                  }`}
                >
                  <item.icon className="w-4 h-4 shrink-0 opacity-70" />
                  <span>{item.title}</span>
                </a>
              ))}
            </nav>

            <div className="mt-6 pt-4 border-t border-slate-200">
              <Link
                to={practiceLink}
                className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-accent-500 text-white rounded-xl font-medium hover:bg-accent-600 transition-colors text-sm"
              >
                <ClipboardCheck className="w-4 h-4" />
                Oefenvragen
              </Link>
            </div>
          </div>
        </motion.aside>

        {/* Main Content */}
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden"
        >
          {/* Header */}
          <div className="px-6 py-8 md:px-8 md:py-10 border-b border-slate-100">
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-full text-xs font-medium">
                Blok 3 · Week 1
              </span>
              <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-medium">
                {caseLabel}
              </span>
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
              {title}
            </h1>
            <p className="text-slate-600 max-w-2xl leading-relaxed">
              {description}
            </p>
            <div className="flex items-center gap-5 mt-5 text-sm text-slate-500">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                ~15 min leestijd
              </span>
              <span className="flex items-center gap-1.5">
                <FileText className="w-4 h-4" />
                {tableOfContents.length} secties
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="px-6 py-8 md:px-8 md:py-10">
            {children}

            {/* CTA */}
            <div className="mt-12 p-6 bg-gradient-to-r from-accent-50 to-primary-50 rounded-2xl border border-accent-200">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                <div>
                  <h3 className="font-bold text-slate-900 mb-1">Klaar om te oefenen?</h3>
                  <p className="text-slate-600 text-sm">Test je kennis met meerkeuzevragen.</p>
                </div>
                <Link
                  to={practiceLink}
                  className="flex items-center gap-2 px-6 py-3 bg-accent-500 text-white rounded-xl font-bold hover:bg-accent-600 transition-colors shrink-0"
                >
                  <ClipboardCheck className="w-5 h-5" />
                  Oefenvragen
                </Link>
              </div>
            </div>
          </div>
        </motion.article>
      </div>

      {/* Scroll to top */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 bg-slate-900 text-white rounded-full shadow-lg hover:bg-slate-800 transition-colors z-50"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  )
}

// Main Summary Page Component
const SummaryPage = () => {
  const [searchParams] = useSearchParams()
  const lme = searchParams.get('lme') || 'index'
  const [expandedBlok, setExpandedBlok] = useState('blok3')

  const courseStructure = {
    blok3: {
      name: "Blok 3: Groei en Ontwikkeling II",
      weeks: [
        {
          name: "Week 1",
          cases: [
            {
              name: "Casus 1: Van embryo naar baby",
              lmes: [
                { id: "embryogenese", name: "Embryogenese Bouwplan", available: true }
              ]
            },
            {
              name: "Casus 2: Spina bifida",
              lmes: [
                { id: "extremiteiten", name: "Ontwikkeling extremiteiten en gewrichtsleer", available: true }
              ]
            }
          ]
        }
      ]
    }
  }

  // Render specific LME content
  if (lme === 'embryogenese') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <EmbryogeneseSummary />
        </main>
        <Footer />
      </div>
    )
  }

  if (lme === 'extremiteiten') {
    return (
      <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <Header />
        <main className="container-custom py-8 md:py-12">
          <BackButton />
          <ExtremiteitenSummary />
        </main>
        <Footer />
      </div>
    )
  }

  // Default: show index/navigation
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      <Header />

      <main className="container-custom py-8 md:py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          <h1 className="text-3xl font-bold text-slate-900 mb-2 text-center">Samenvattingen</h1>
          <p className="text-slate-500 text-center mb-8">Kies een LME om de samenvatting te bekijken.</p>

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
                    {courseStructure.blok3.name}
                  </h2>
                  <p className="text-sm text-slate-500">1 week · 2 casussen · 2 LME's</p>
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
                    {courseStructure.blok3.weeks.map((week, weekIndex) => (
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
                                  to={`/summary?lme=${lmeItem.id}`}
                                  className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 border border-emerald-200 hover:border-emerald-300 transition-colors"
                                >
                                  <div className="flex items-center gap-3">
                                    <div className="p-1.5 rounded-lg bg-emerald-200">
                                      <BookOpen className="w-4 h-4 text-emerald-700" />
                                    </div>
                                    <div>
                                      <span className="font-medium text-emerald-800 text-sm">
                                        LME: {lmeItem.name}
                                      </span>
                                      <div className="flex items-center gap-3 mt-0.5">
                                        <span className="text-xs text-emerald-600 flex items-center gap-1">
                                          <Clock className="w-3 h-3" />
                                          ~15 min
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <ChevronRight className="w-4 h-4 text-emerald-500" />
                                </Link>
                              ))}
                            </div>
                          </div>
                        ))}

                        <Link to="/oefenvragen" className="block ml-9">
                          <div className="flex items-center justify-between p-3 rounded-xl bg-accent-50 border border-accent-200 hover:border-accent-300 transition-colors">
                            <div className="flex items-center gap-3">
                              <div className="p-1.5 rounded-lg bg-accent-200">
                                <ClipboardCheck className="w-4 h-4 text-accent-700" />
                              </div>
                              <div>
                                <span className="font-medium text-accent-800 text-sm">
                                  Alle oefenvragen
                                </span>
                                <p className="text-xs text-accent-600">34 meerkeuzevragen</p>
                              </div>
                            </div>
                            <ChevronRight className="w-4 h-4 text-accent-500" />
                          </div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  )
}

// Header Component
const Header = () => (
  <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200">
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
        
        <div className="flex items-center gap-2 px-4 py-2 bg-slate-100 text-slate-700 rounded-full">
          <FileText className="w-4 h-4" />
          <span className="font-medium text-sm">Samenvatting</span>
        </div>

        <Link
          to="/"
          className="flex items-center gap-2 text-slate-600 hover:text-primary-600 transition-colors"
        >
          <Home className="w-4 h-4" />
          <span className="hidden sm:inline font-medium">Home</span>
        </Link>
      </div>
    </div>
  </header>
)

// Back Button Component
const BackButton = () => (
  <motion.div
    initial={{ opacity: 0, x: -10 }}
    animate={{ opacity: 1, x: 0 }}
    className="mb-6"
  >
    <Link
      to="/summary"
      className="inline-flex items-center gap-2 text-slate-600 hover:text-primary-600 transition-colors"
    >
      <ArrowLeft className="w-4 h-4" />
      <span className="font-medium">Terug naar overzicht</span>
    </Link>
  </motion.div>
)

// Footer Component
const Footer = () => (
  <footer className="py-8 text-center text-slate-400 text-sm border-t border-slate-200 mt-12">
    <p>© {new Date().getFullYear()} Smartium</p>
  </footer>
)

export default SummaryPage
