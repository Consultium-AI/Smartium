import SummaryLayout from '../../components/SummaryLayout'
import { Baby, Layers, Brain, Activity, Dna, Target, Stethoscope, ArrowRight } from 'lucide-react'

export const EmbryogeneseSummary = () => {
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
