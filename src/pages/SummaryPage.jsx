import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  FileText, Home, BookOpen, Clock, ChevronUp, ChevronDown, ChevronRight,
  Brain, Bone, Hand, Activity, GraduationCap, Folder, Calendar, Stethoscope,
  ClipboardCheck
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

  // Course structure
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
    { id: 'inleiding', title: 'Inleiding: Ledemaatknoppen en de AER', icon: Brain },
    { id: 'proximodistaal', title: 'Proximodistale opbouw', icon: Bone },
    { id: 'orientatie', title: 'Oriëntatie en assen', icon: Activity },
    { id: 'dermatomen', title: 'Dermatomen vs huidverzorgingsgebieden', icon: Hand },
    { id: 'botontwikkeling', title: 'Botontwikkeling', icon: Bone },
    { id: 'juncturae', title: 'Juncturae (gewrichtsverbindingen)', icon: Activity },
  ]

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
            
            <div className="flex items-center gap-2 px-4 py-2 bg-primary-100 text-primary-700 rounded-full">
              <FileText className="w-4 h-4" />
              <span className="font-medium text-sm">Samenvatting</span>
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
        {/* Course Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <div className="bg-white rounded-2xl border border-navy-100 shadow-soft overflow-hidden">
            {/* Blok Header */}
            <button
              onClick={() => setExpandedBlok(expandedBlok === 'blok3' ? null : 'blok3')}
              className="w-full flex items-center justify-between p-4 md:p-6 hover:bg-navy-50 transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="p-3 bg-primary-100 rounded-xl">
                  <GraduationCap className="w-6 h-6 text-primary-600" />
                </div>
                <div className="text-left">
                  <h2 className="text-lg md:text-xl font-bold text-navy-900">
                    {courseStructure.blok3.name}
                  </h2>
                  <p className="text-sm text-navy-500">1 week • 1 casus • 1 LME</p>
                </div>
              </div>
              <ChevronDown className={`w-5 h-5 text-navy-400 transition-transform ${expandedBlok === 'blok3' ? 'rotate-180' : ''}`} />
            </button>

            {/* Blok Content */}
            <AnimatePresence>
              {expandedBlok === 'blok3' && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="overflow-hidden"
                >
                  <div className="px-4 md:px-6 pb-4 md:pb-6">
                    {courseStructure.blok3.weeks.map((week, weekIndex) => (
                      <div key={weekIndex} className="border-l-2 border-primary-200 pl-4 ml-4">
                        {/* Week Header */}
                        <div className="flex items-center gap-3 mb-4 -ml-6">
                          <div className="w-4 h-4 rounded-full bg-primary-500 border-4 border-white shadow" />
                          <div className="flex items-center gap-2 px-3 py-1.5 bg-primary-50 rounded-lg">
                            <Calendar className="w-4 h-4 text-primary-600" />
                            <span className="font-semibold text-primary-700">{week.name}</span>
                          </div>
                        </div>

                        {/* Cases */}
                        {week.cases.map((casus, casusIndex) => (
                          <div key={casusIndex} className="ml-2 mb-4">
                            <div className="flex items-center gap-3 mb-3">
                              <div className="p-2 bg-accent-100 rounded-lg">
                                <Stethoscope className="w-4 h-4 text-accent-600" />
                              </div>
                              <span className="font-medium text-navy-800">{casus.name}</span>
                            </div>

                            {/* LMEs */}
                            <div className="ml-8 space-y-2">
                              {casus.lmes.map((lme, lmeIndex) => (
                                <motion.div
                                  key={lmeIndex}
                                  whileHover={{ x: 4 }}
                                  className={`flex items-center justify-between p-3 rounded-xl border-2 transition-colors ${
                                    lme.available 
                                      ? 'bg-emerald-50 border-emerald-200 cursor-pointer hover:border-emerald-300' 
                                      : 'bg-navy-50 border-navy-100'
                                  }`}
                                >
                                  <div className="flex items-center gap-3">
                                    <div className={`p-1.5 rounded-lg ${lme.available ? 'bg-emerald-200' : 'bg-navy-200'}`}>
                                      <BookOpen className={`w-4 h-4 ${lme.available ? 'text-emerald-700' : 'text-navy-500'}`} />
                                    </div>
                                    <div>
                                      <span className={`font-medium ${lme.available ? 'text-emerald-800' : 'text-navy-500'}`}>
                                        LME: {lme.name}
                                      </span>
                                      {lme.available && (
                                        <div className="flex items-center gap-4 mt-1">
                                          <span className="text-xs text-emerald-600 flex items-center gap-1">
                                            <Clock className="w-3 h-3" />
                                            12 min leestijd
                                          </span>
                                          <span className="text-xs text-emerald-600 flex items-center gap-1">
                                            <FileText className="w-3 h-3" />
                                            6 secties
                                          </span>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  {lme.available && (
                                    <ChevronRight className="w-5 h-5 text-emerald-500" />
                                  )}
                                </motion.div>
                              ))}
                            </div>
                          </div>
                        ))}

                        {/* Practice Questions Link */}
                        <Link to="/oefenvragen" className="ml-2">
                          <motion.div
                            whileHover={{ x: 4 }}
                            className="flex items-center justify-between p-3 rounded-xl bg-accent-50 border-2 border-accent-200 hover:border-accent-300 transition-colors"
                          >
                            <div className="flex items-center gap-3">
                              <div className="p-1.5 rounded-lg bg-accent-200">
                                <ClipboardCheck className="w-4 h-4 text-accent-700" />
                              </div>
                              <div>
                                <span className="font-medium text-accent-800">
                                  Oefenvragen: Gewrichtsleer & Embryologie
                                </span>
                                <p className="text-xs text-accent-600 mt-0.5">15 meerkeuzevragen</p>
                              </div>
                            </div>
                            <ChevronRight className="w-5 h-5 text-accent-500" />
                          </motion.div>
                        </Link>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>

        {/* Summary Content */}
        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          {/* Sidebar - Table of Contents */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="hidden lg:block"
          >
            <div className="sticky top-24 bg-white rounded-2xl shadow-soft border border-navy-100 p-5">
              <h3 className="font-bold text-navy-800 mb-4 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-primary-500" />
                Inhoud
              </h3>
              <nav className="space-y-1">
                {tableOfContents.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className={`flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                      activeSection === item.id
                        ? 'bg-primary-50 text-primary-700 font-medium'
                        : 'text-navy-600 hover:bg-navy-50 hover:text-navy-800'
                    }`}
                  >
                    <item.icon className="w-4 h-4 shrink-0" />
                    <span className="line-clamp-1">{item.title}</span>
                  </a>
                ))}
              </nav>

              <div className="mt-6 pt-4 border-t border-navy-100">
                <Link
                  to="/oefenvragen"
                  className="flex items-center gap-2 px-3 py-2.5 bg-accent-50 text-accent-700 rounded-xl font-medium hover:bg-accent-100 transition-colors"
                >
                  <ClipboardCheck className="w-4 h-4" />
                  <span>Oefen met vragen</span>
                </Link>
              </div>
            </div>
          </motion.aside>

          {/* Main Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl shadow-soft border border-navy-100 overflow-hidden"
          >
            {/* Article Header */}
            <div className="px-6 py-8 md:px-10 md:py-10 bg-gradient-to-r from-primary-50 to-accent-50 border-b border-navy-100">
              <div className="flex flex-wrap gap-2 mb-4">
                <span className="px-3 py-1 bg-primary-100 text-primary-700 rounded-full text-xs font-medium">
                  Blok 3 • Week 1
                </span>
                <span className="px-3 py-1 bg-accent-100 text-accent-700 rounded-full text-xs font-medium">
                  Casus 2: Spina bifida
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-navy-900 mb-3">
                LME: Ontwikkeling extremiteiten en gewrichtsleer
              </h1>
              <p className="text-navy-600 max-w-2xl">
                Een uitgebreide samenvatting over de embryologische ontwikkeling van ledematen, botontwikkeling en gewrichtsverbindingen.
              </p>
              <div className="flex items-center gap-6 mt-4 text-sm text-navy-500">
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4" />
                  ~12 min leestijd
                </span>
                <span className="flex items-center gap-1.5">
                  <FileText className="w-4 h-4" />
                  6 secties
                </span>
              </div>
            </div>

            {/* Article Body */}
            <div className="px-6 py-8 md:px-10 md:py-10 prose prose-navy max-w-none">
              {/* Section 1 */}
              <section id="inleiding" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-primary-100 rounded-xl">
                    <Brain className="w-5 h-5 text-primary-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-navy-900 m-0">
                    Inleiding: Ledemaatknoppen en de Apicale Ectodermale Richel (AER)
                  </h2>
                </div>
                <div className="text-navy-700 space-y-4">
                  <p>
                    Tijdens de vroege ontwikkeling van de ledematen ontstaan arm- en beenknoppen uit <strong>mesenchymaal weefsel</strong> dat afkomstig is uit het <strong>laterale plaatmesoderm</strong>, met daaroverheen een laag ectoderm. Aan de distale rand van zo'n ledemaatknop wordt het ectoderm dikker en vormt het de apicale ectodermale richel (AER).
                  </p>
                  <p>
                    De AER is essentieel voor de <strong>proximodistale uitgroei</strong> (van romp naar hand/voet), omdat deze richel signalen afgeeft die het onderliggende mesenchym in een ongedifferentieerde, snel delende toestand houdt. Daardoor blijft er een zone bestaan waarin cellen blijven prolifereren, terwijl cellen die verder van de AER af komen juist gaan differentiëren.
                  </p>
                  <div className="p-4 bg-primary-50 rounded-xl border-l-4 border-primary-400">
                    <h4 className="font-bold text-primary-800 mb-2">💡 Inductie-concept</h4>
                    <p className="text-primary-700 m-0">
                      Dit principe past binnen het bredere concept van <strong>inductie</strong>: organen en structuren worden gevormd door interacties tussen cellen en weefsels, waarbij een "inductor" een signaal afgeeft en een "responder" dit signaal ontvangt en daarop reageert. Alleen wanneer het responderweefsel <em>competent</em> is, kan het daadwerkelijk op die inductieve prikkel reageren.
                    </p>
                  </div>
                  <p>
                    In de ledemaatontwikkeling is de <strong>epitheel–mesenchym interactie</strong> tussen AER (ectoderm/epitheel) en mesenchym een klassiek voorbeeld van zulke inductie.
                  </p>
                </div>
              </section>

              <hr className="my-8 border-navy-200" />

              {/* Section 2 */}
              <section id="proximodistaal" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-accent-100 rounded-xl">
                    <Bone className="w-5 h-5 text-accent-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-navy-900 m-0">
                    Proximodistale opbouw en vingervorming
                  </h2>
                </div>
                <div className="text-navy-700 space-y-4">
                  <p>
                    De proximodistale opbouw van een ledemaat kan je beschrijven in <strong>drie opeenvolgende segmenten</strong>:
                  </p>
                  <div className="grid md:grid-cols-3 gap-4">
                    <div className="p-4 bg-primary-50 rounded-xl text-center">
                      <div className="text-2xl mb-2">1️⃣</div>
                      <h4 className="font-bold text-primary-800">Stylopod</h4>
                      <p className="text-sm text-primary-600 m-0"><span className="font-medium">Bovenarm/bovenbeen:</span><br/>humerus of femur</p>
                    </div>
                    <div className="p-4 bg-accent-50 rounded-xl text-center">
                      <div className="text-2xl mb-2">2️⃣</div>
                      <h4 className="font-bold text-accent-800">Zeugopod</h4>
                      <p className="text-sm text-accent-600 m-0"><span className="font-medium">Onderarm/onderbeen:</span><br/>radius/ulna, tibia/fibula</p>
                    </div>
                    <div className="p-4 bg-emerald-50 rounded-xl text-center">
                      <div className="text-2xl mb-2">3️⃣</div>
                      <h4 className="font-bold text-emerald-800">Autopod</h4>
                      <p className="text-sm text-emerald-600 m-0">Hand/voet: carpalia, metacarpalia, digiti</p>
                    </div>
                  </div>
                  <p>
                    Terwijl de ledemaat verder groeit, verschijnt distaal een <strong>hand- of voetplaat</strong>. De uiteindelijke vorming van afzonderlijke vingers en tenen gebeurt niet doordat er "gaten" worden uitgesneden, maar doordat in de gebieden tussen de digitale stralen geprogrammeerde celdood (apoptose) optreedt.
                  </p>
                  <p>
                    Daardoor verdwijnen de weefselbruggen tussen de stralen en blijven afzonderlijke vingers of tenen over. Dit mechanisme is een kernidee om te onthouden bij het begrijpen van <em>aangeboren afwijkingen</em> waarbij vingers of tenen juist vergroeid blijven (syndactylie).
                  </p>
                </div>
              </section>

              <hr className="my-8 border-navy-200" />

              {/* Section 3 */}
              <section id="orientatie" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-purple-100 rounded-xl">
                    <Activity className="w-5 h-5 text-purple-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-navy-900 m-0">
                    Oriëntatie: Pre-axiaal en Post-axiaal
                  </h2>
                </div>
                <div className="text-navy-700 space-y-4">
                  <p>
                    Naast de proximodistale organisatie speelt ook de oriëntatie van de ledemaat een rol via de hoofdas(sen), waaronder het onderscheid tussen <strong>pre-axiaal</strong> en <strong>post-axiaal</strong>.
                  </p>
                  <p>
                    In de proximodistale ontwikkeling ligt craniaal de pre-axiale begrenzing en caudaal de post-axiale begrenzing. Door de <strong>rotatie van de ledematen</strong> tijdens de embryonale ontwikkeling wordt de uiteindelijke anatomische ligging in het bovenste en onderste lidmaat anders geïnterpreteerd:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
                      <h4 className="font-bold text-blue-800 mb-3">💪 Bovenste lidmaat</h4>
                      <ul className="space-y-2 text-blue-700 m-0 pl-0 list-none">
                        <li>• Pre-axiaal → <strong>radiale zijde</strong></li>
                        <li>• Post-axiaal → <strong>ulnaire zijde</strong></li>
                      </ul>
                    </div>
                    <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200">
                      <h4 className="font-bold text-emerald-800 mb-3">🦵 Onderste lidmaat</h4>
                      <ul className="space-y-2 text-emerald-700 m-0 pl-0 list-none">
                        <li>• Pre-axiaal → <strong>tibiale zijde</strong></li>
                        <li>• Post-axiaal → <strong>fibulaire zijde</strong></li>
                      </ul>
                    </div>
                  </div>
                  <p>
                    Dit kader helpt bij het plaatsen van <em>reductiedefecten</em> en variaties in ledemaatvorming.
                  </p>
                </div>
              </section>

              <hr className="my-8 border-navy-200" />

              {/* Section 4 */}
              <section id="dermatomen" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-orange-100 rounded-xl">
                    <Hand className="w-5 h-5 text-orange-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-navy-900 m-0">
                    Dermatomen versus Huidverzorgingsgebieden
                  </h2>
                </div>
                <div className="text-navy-700 space-y-4">
                  <p>
                    Voor het begrijpen van sensibiliteit in arm en hand is het onderscheid tussen <strong>dermatomen</strong> en <strong>huidverzorgingsgebieden</strong> belangrijk.
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
                      <h4 className="font-bold text-amber-800 mb-2">🎯 Dermatoom</h4>
                      <p className="text-amber-700 m-0">
                        Een huidgebied dat sensibel wordt geïnnerveerd door <strong>één spinaal segment</strong> (één ruggenmergzenuw).
                      </p>
                    </div>
                    <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
                      <h4 className="font-bold text-teal-800 mb-2">🔀 Huidverzorgingsgebied</h4>
                      <p className="text-teal-700 m-0">
                        Resultaat van plexusvorming (bv. plexus brachialis); bestaat uit vezels van <strong>meerdere spinale niveaus</strong>.
                      </p>
                    </div>
                  </div>
                  <p>
                    Huidverzorgingsgebieden van perifere zenuwen (zoals <strong>nervus medianus</strong>, <strong>ulnaris</strong> en <strong>radialis</strong>) zijn het resultaat van de ontwikkeling van plexussen en bestaan meestal uit vezels van meerdere spinale niveaus.
                  </p>
                  <div className="p-4 bg-red-50 rounded-xl border-l-4 border-red-400">
                    <h4 className="font-bold text-red-800 mb-2">⚕️ Klinische relevantie</h4>
                    <p className="text-red-700 m-0">
                      Dit verklaart waarom een laesie op <strong>wortelniveau</strong> (dermatoompatroon) anders presenteert dan een <strong>perifere zenuwlaesie</strong> (huidverzorgingsgebied).
                    </p>
                  </div>
                </div>
              </section>

              <hr className="my-8 border-navy-200" />

              {/* Section 5 */}
              <section id="botontwikkeling" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-indigo-100 rounded-xl">
                    <Bone className="w-5 h-5 text-indigo-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-navy-900 m-0">
                    Botontwikkeling: Endochondrale en Desmale Verbening
                  </h2>
                </div>
                <div className="text-navy-700 space-y-4">
                  <p>
                    De ontwikkeling van botten kan op <strong>twee hoofdmanieren</strong> verlopen:
                  </p>
                  <div className="space-y-4">
                    <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-200">
                      <h4 className="font-bold text-indigo-800 mb-3">🦴 Endochondrale botvorming</h4>
                      <p className="text-indigo-700 mb-3">
                        Eerst ontstaat een <strong>kraakbeenmodel</strong>: mesenchymale cellen differentiëren naar chondrocyten, waarna een kraakbenige aanleg zichtbaar wordt.
                      </p>
                      <div className="flex flex-wrap items-center gap-2 text-sm">
                        <span className="px-3 py-1 bg-indigo-200 text-indigo-800 rounded-full font-medium">Mesenchym</span>
                        <span className="text-indigo-400">→</span>
                        <span className="px-3 py-1 bg-indigo-200 text-indigo-800 rounded-full font-medium">Kraakbeenmodel</span>
                        <span className="text-indigo-400">→</span>
                        <span className="px-3 py-1 bg-indigo-200 text-indigo-800 rounded-full font-medium">Primaire ossificatie</span>
                        <span className="text-indigo-400">→</span>
                        <span className="px-3 py-1 bg-indigo-200 text-indigo-800 rounded-full font-medium">Secundaire ossificatie</span>
                        <span className="text-indigo-400">→</span>
                        <span className="px-3 py-1 bg-indigo-200 text-indigo-800 rounded-full font-medium">Groeischijf</span>
                      </div>
                    </div>
                    <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
                      <h4 className="font-bold text-slate-800 mb-3">💀 Desmale (intramembraneuze) verbening</h4>
                      <p className="text-slate-700 mb-3">
                        Er is <strong>geen kraakbeenmodel</strong>: mesenchym differentieert direct naar osteoblasten die botmatrix produceren.
                      </p>
                      <div className="flex flex-wrap items-center gap-2 text-sm">
                        <span className="px-3 py-1 bg-slate-200 text-slate-800 rounded-full font-medium">Mesenchym</span>
                        <span className="text-slate-400">→</span>
                        <span className="px-3 py-1 bg-slate-200 text-slate-800 rounded-full font-medium">Osteoblasten</span>
                        <span className="text-slate-400">→</span>
                        <span className="px-3 py-1 bg-slate-200 text-slate-800 rounded-full font-medium">Botmatrix</span>
                      </div>
                      <p className="text-slate-600 text-sm mt-3 m-0">
                        Voorbeelden: platte beenderen zoals delen van de schedel, clavicula
                      </p>
                    </div>
                  </div>
                  <p>
                    Bij endochondrale ossificatie speelt <strong>vascularisatie</strong> een belangrijke rol: bloedvaten dringen binnen en maken de omgeving geschikt voor osteoblastdifferentiatie en botmatrixvorming. Lengtegroei blijft mogelijk via de <strong>groeischijf</strong>.
                  </p>
                </div>
              </section>

              <hr className="my-8 border-navy-200" />

              {/* Section 6 */}
              <section id="juncturae" className="scroll-mt-24">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-rose-100 rounded-xl">
                    <Activity className="w-5 h-5 text-rose-600" />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-navy-900 m-0">
                    Juncturae: Gewrichtsverbindingen
                  </h2>
                </div>
                <div className="text-navy-700 space-y-4">
                  <p>
                    <strong>Juncturae</strong> zijn de manieren waarop botten met elkaar verbonden kunnen zijn. Sommige verbindingen zijn nauwelijks beweeglijk, andere juist sterk beweeglijk.
                  </p>
                  <h3 className="text-lg font-bold text-navy-800">Vier hoofdtypen:</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                      <h4 className="font-bold text-blue-800 mb-2">🔗 Junctura fibrosa</h4>
                      <p className="text-blue-700 text-sm m-0">Bindweefselverbinding<br/><span className="opacity-75">Voorbeeld: syndesmose</span></p>
                    </div>
                    <div className="p-4 bg-purple-50 rounded-xl border border-purple-200">
                      <h4 className="font-bold text-purple-800 mb-2">⚪ Junctura cartilaginea</h4>
                      <p className="text-purple-700 text-sm m-0">Kraakbeenverbinding<br/><span className="opacity-75">Voorbeeld: discus intervertebralis</span></p>
                    </div>
                    <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
                      <h4 className="font-bold text-amber-800 mb-2">🦴 Junctura ossea</h4>
                      <p className="text-amber-700 text-sm m-0">Botverbinding (fusie)<br/><span className="opacity-75">Voorbeeld: acetabulum/heupbeenfusie</span></p>
                    </div>
                    <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                      <h4 className="font-bold text-emerald-800 mb-2">⭐ Junctura synovialis</h4>
                      <p className="text-emerald-700 text-sm m-0">Synoviaal gewricht (diarthrose)<br/><span className="opacity-75">Meest beweeglijk! Bv. enkel, schouder</span></p>
                    </div>
                  </div>

                  <h3 className="text-lg font-bold text-navy-800 mt-6">Synoviaal gewricht in detail:</h3>
                  <p>
                    Synoviale gewrichten worden gekenmerkt door gewrichtsvlakken met <strong>hyalien kraakbeen</strong>, een gewrichtsspleet en een <strong>gewrichtskapsel (capsula articularis)</strong>.
                  </p>
                  <div className="p-5 bg-navy-50 rounded-xl border border-navy-200">
                    <h4 className="font-bold text-navy-800 mb-3">Het gewrichtskapsel bestaat uit 2 lagen:</h4>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <span className="w-8 h-8 bg-primary-500 text-white rounded-lg flex items-center justify-center font-bold shrink-0">1</span>
                        <div>
                          <strong className="text-navy-800">Membrana synovialis</strong> <span className="text-navy-500">(binnenlaag)</span>
                          <p className="text-navy-600 text-sm m-0 mt-1">Produceert synovia (gewrichtsvloeistof)</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <span className="w-8 h-8 bg-accent-500 text-white rounded-lg flex items-center justify-center font-bold shrink-0">2</span>
                        <div>
                          <strong className="text-navy-800">Membrana fibrosa</strong> <span className="text-navy-500">(buitenlaag)</span>
                          <p className="text-navy-600 text-sm m-0 mt-1">Stevige bindweefsellaag voor stabiliteit</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-4 bg-cyan-50 rounded-xl border-l-4 border-cyan-400">
                    <h4 className="font-bold text-cyan-800 mb-2">💧 Synovia (gewrichtsvloeistof)</h4>
                    <p className="text-cyan-700 m-0">
                      Essentieel voor <strong>voeding van het hyaliene kraakbeen</strong> en voor het <strong>verminderen van wrijving</strong> tussen de gewrichtsvlakken.
                    </p>
                  </div>
                  <p>
                    Daarmee sluiten de thema's van ontwikkeling, weefselinteractie en uiteindelijke functie van het bewegingsapparaat logisch op elkaar aan.
                  </p>
                </div>
              </section>

              {/* CTA to Practice Questions */}
              <div className="mt-12 p-6 bg-gradient-to-r from-accent-50 to-primary-50 rounded-2xl border border-accent-200">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-bold text-navy-900 mb-1">Klaar om te oefenen?</h3>
                    <p className="text-navy-600 text-sm m-0">Test je kennis met 15 meerkeuzevragen.</p>
                  </div>
                  <Link
                    to="/oefenvragen"
                    className="flex items-center gap-2 px-6 py-3 bg-accent-500 text-white rounded-xl font-bold hover:bg-accent-600 transition-colors shrink-0"
                  >
                    <ClipboardCheck className="w-5 h-5" />
                    Naar Oefenvragen
                  </Link>
                </div>
              </div>
            </div>
          </motion.article>
        </div>
      </main>

      {/* Scroll to top button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-600 transition-colors z-50"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-6 text-center text-navy-400 text-sm border-t border-navy-100 mt-12">
        <p>© {new Date().getFullYear()} Smartium. Slim studeren, beter onthouden.</p>
      </footer>
    </div>
  )
}

export default SummaryPage
