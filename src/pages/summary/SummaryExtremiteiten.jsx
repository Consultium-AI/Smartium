import SummaryLayout from '../../components/SummaryLayout'
import { Brain, Layers, Target, Hand, Bone, Activity, Stethoscope, ArrowRight, Droplets } from 'lucide-react'

export const ExtremiteitenSummary = () => {
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
