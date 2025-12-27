import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FileText, Home, BookOpen, Clock, ChevronUp, ChevronDown, ChevronRight,
  Brain, Bone, Hand, Activity, GraduationCap, Calendar, Stethoscope,
  ClipboardCheck, Layers, Target, Droplets, ArrowRight
} from 'lucide-react'
import { useState, useEffect } from 'react'

const SummaryPage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeSection, setActiveSection] = useState('')
  const [expandedBlok, setExpandedBlok] = useState('blok3')

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

  const courseStructure = {
    blok3: {
      name: "Blok 3: Groei en Ontwikkeling II",
      weeks: [
        {
          name: "Week 1",
          cases: [
            {
              name: "Casus 2: Spina bifida",
              lmes: [
                { name: "Ontwikkeling extremiteiten en gewrichtsleer", available: true }
              ]
            }
          ]
        }
      ]
    }
  }

  const tableOfContents = [
    { id: 'inleiding', title: 'Ledemaatknoppen en de AER', icon: Brain },
    { id: 'proximodistaal', title: 'Proximodistale opbouw', icon: Layers },
    { id: 'orientatie', title: 'Oriëntatie en assen', icon: Target },
    { id: 'dermatomen', title: 'Dermatomen vs huidgebieden', icon: Hand },
    { id: 'botontwikkeling', title: 'Botontwikkeling', icon: Bone },
    { id: 'juncturae', title: 'Gewrichtsverbindingen', icon: Activity },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Header */}
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

      <main className="container-custom py-8 md:py-12">
        {/* Course Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
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
                  <p className="text-sm text-slate-500">1 week · 1 casus · 1 LME</p>
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
                              {casus.lmes.map((lme, lmeIndex) => (
                                <div
                                  key={lmeIndex}
                                  className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 border border-emerald-200"
                                >
                                  <div className="flex items-center gap-3">
                                    <div className="p-1.5 rounded-lg bg-emerald-200">
                                      <BookOpen className="w-4 h-4 text-emerald-700" />
                                    </div>
                                    <div>
                                      <span className="font-medium text-emerald-800 text-sm">
                                        LME: {lme.name}
                                      </span>
                                      <div className="flex items-center gap-3 mt-0.5">
                                        <span className="text-xs text-emerald-600 flex items-center gap-1">
                                          <Clock className="w-3 h-3" />
                                          12 min
                                        </span>
                                        <span className="text-xs text-emerald-600 flex items-center gap-1">
                                          <FileText className="w-3 h-3" />
                                          6 secties
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                  <ChevronRight className="w-4 h-4 text-emerald-500" />
                                </div>
                              ))}
                            </div>
                          </div>
                        ))}

                        <Link to="/oefenvragen" className="block">
                          <div className="flex items-center justify-between p-3 rounded-xl bg-accent-50 border border-accent-200 hover:border-accent-300 transition-colors ml-9">
                            <div className="flex items-center gap-3">
                              <div className="p-1.5 rounded-lg bg-accent-200">
                                <ClipboardCheck className="w-4 h-4 text-accent-700" />
                              </div>
                              <div>
                                <span className="font-medium text-accent-800 text-sm">
                                  Oefenvragen
                                </span>
                                <p className="text-xs text-accent-600">15 meerkeuzevragen</p>
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

        {/* Content Grid */}
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
                  to="/oefenvragen"
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
                  Casus 2: Spina bifida
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                Ontwikkeling extremiteiten en gewrichtsleer
              </h1>
              <p className="text-slate-600 max-w-2xl leading-relaxed">
                Embryologische ontwikkeling van ledematen, botontwikkeling en gewrichtsverbindingen.
              </p>
              <div className="flex items-center gap-5 mt-5 text-sm text-slate-500">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  12 min leestijd
                </span>
                <span className="flex items-center gap-1.5">
                  <FileText className="w-4 h-4" />
                  6 secties
                </span>
              </div>
            </div>

            {/* Content */}
            <div className="px-6 py-8 md:px-8 md:py-10">
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

              {/* CTA */}
              <div className="mt-12 p-6 bg-gradient-to-r from-accent-50 to-primary-50 rounded-2xl border border-accent-200">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="font-bold text-slate-900 mb-1">Klaar om te oefenen?</h3>
                    <p className="text-slate-600 text-sm">Test je kennis met 15 meerkeuzevragen.</p>
                  </div>
                  <Link
                    to="/oefenvragen"
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
      </main>

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

      {/* Footer */}
      <footer className="py-8 text-center text-slate-400 text-sm border-t border-slate-200 mt-12">
        <p>© {new Date().getFullYear()} Smartium</p>
      </footer>
    </div>
  )
}

export default SummaryPage
