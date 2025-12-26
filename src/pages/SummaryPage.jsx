import { motion, AnimatePresence } from 'framer-motion'
import { Link } from 'react-router-dom'
import { FileText, Home, BookOpen, Clock, ChevronUp, Brain, Bone, Hand, Activity } from 'lucide-react'
import { useState, useEffect } from 'react'

const SummaryPage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400)
      
      // Determine active section
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

  const tableOfContents = [
    { id: 'inleiding', title: 'Inleiding: Ledemaatknoppen en de AER', icon: Brain },
    { id: 'proximodistaal', title: 'Proximodistale opbouw', icon: Hand },
    { id: 'orientatie', title: 'Oriëntatie en assen', icon: Activity },
    { id: 'dermatomen', title: 'Dermatomen vs huidverzorgingsgebieden', icon: Activity },
    { id: 'botontwikkeling', title: 'Botontwikkeling', icon: Bone },
    { id: 'juncturae', title: 'Juncturae (gewrichtsverbindingen)', icon: Bone },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-cream-50 via-cream-100 to-cream-200 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -right-40 w-[500px] h-[500px] bg-gradient-to-br from-primary-200/20 to-accent-200/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -left-40 w-[500px] h-[500px] bg-gradient-to-tr from-accent-200/20 to-primary-200/10 rounded-full blur-3xl"
        />
      </div>

      {/* Header */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="sticky top-0 z-50 bg-white/80 backdrop-blur-xl shadow-soft border-b border-navy-100"
      >
        <div className="container-custom">
          <div className="flex items-center justify-between h-20">
            <Link to="/" className="flex items-center gap-3 group">
              <motion.img
                src="/smartium-logo.png"
                alt="Smartium"
                className="w-10 h-10 object-contain"
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              />
              <span className="text-xl font-bold gradient-text">Smartium</span>
            </Link>

            <div className="flex items-center gap-2">
              <motion.span
                className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium"
              >
                <FileText className="w-4 h-4" />
                Samenvatting
              </motion.span>
            </div>

            <Link 
              to="/"
              className="flex items-center gap-2 px-4 py-2 text-navy-600 hover:text-primary-600 hover:bg-primary-50 rounded-xl transition-all font-medium"
            >
              <Home className="w-5 h-5" />
              <span className="hidden sm:inline">Terug naar Home</span>
            </Link>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="container-custom py-8 sm:py-12 relative z-10">
        {/* Title Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100 text-primary-700 text-sm font-medium mb-4"
          >
            <BookOpen className="w-4 h-4" />
            Anatomie & Embryologie
          </motion.div>
          
          <motion.h1 
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-navy-900"
          >
            Ledemaatontwikkeling &{' '}
            <span className="gradient-text">Bewegingsapparaat</span>
          </motion.h1>
          
          <p className="text-lg text-navy-500 max-w-3xl mx-auto mb-6">
            Een uitgebreide samenvatting over de embryologische ontwikkeling van ledematen, 
            botontwikkeling en gewrichtsverbindingen.
          </p>

          <div className="flex items-center justify-center gap-6 text-sm text-navy-400">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>~12 min leestijd</span>
            </div>
            <div className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span>6 secties</span>
            </div>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-4 gap-8">
          {/* Table of Contents - Sidebar */}
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <div className="sticky top-28">
              <div className="bg-white rounded-2xl shadow-soft border border-navy-100 p-6">
                <h3 className="text-lg font-bold text-navy-800 mb-4 flex items-center gap-2">
                  <BookOpen className="w-5 h-5 text-primary-500" />
                  Inhoud
                </h3>
                <nav className="space-y-2">
                  {tableOfContents.map((item, index) => (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.05 }}
                      className={`flex items-center gap-3 px-3 py-2 rounded-xl text-sm transition-all ${
                        activeSection === item.id
                          ? 'bg-primary-100 text-primary-700 font-medium'
                          : 'text-navy-600 hover:bg-navy-50 hover:text-navy-800'
                      }`}
                    >
                      <item.icon className="w-4 h-4 flex-shrink-0" />
                      <span className="line-clamp-2">{item.title}</span>
                    </motion.a>
                  ))}
                </nav>

                <div className="mt-6 pt-6 border-t border-navy-100">
                  <Link
                    to="/flashcards"
                    className="flex items-center gap-2 px-4 py-3 bg-accent-50 hover:bg-accent-100 rounded-xl text-accent-700 font-medium transition-all"
                  >
                    <Brain className="w-5 h-5" />
                    <span>Oefen met Flashcards</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.aside>

          {/* Main Content */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-3"
          >
            <div className="bg-white rounded-3xl shadow-soft-lg border border-navy-100 p-6 sm:p-8 lg:p-10">
              {/* Section 1 */}
              <section id="inleiding" className="mb-12 scroll-mt-32">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-primary-100">
                      <Brain className="w-5 h-5 text-primary-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-navy-900">
                      Inleiding: Ledemaatknoppen en de Apicale Ectodermale Richel (AER)
                    </h2>
                  </div>
                  
                  <div className="prose prose-navy max-w-none">
                    <p className="text-navy-600 leading-relaxed text-lg">
                      Tijdens de vroege ontwikkeling van de ledematen ontstaan arm- en beenknoppen uit{' '}
                      <strong className="text-navy-800">mesenchymaal weefsel</strong> dat afkomstig is uit het{' '}
                      <strong className="text-navy-800">laterale plaatmesoderm</strong>, met daaroverheen een laag ectoderm. 
                      Aan de distale rand van zo'n ledemaatknop wordt het ectoderm dikker en vormt het de{' '}
                      <span className="px-2 py-0.5 bg-primary-100 text-primary-700 rounded-lg font-semibold">
                        apicale ectodermale richel (AER)
                      </span>.
                    </p>
                    
                    <p className="text-navy-600 leading-relaxed mt-4">
                      De AER is essentieel voor de <strong className="text-navy-800">proximodistale uitgroei</strong> (van romp naar hand/voet), 
                      omdat deze richel signalen afgeeft die het onderliggende mesenchym in een ongedifferentieerde, 
                      snel delende toestand houdt. Daardoor blijft er een zone bestaan waarin cellen blijven prolifereren, 
                      terwijl cellen die verder van de AER af komen juist gaan differentiëren.
                    </p>

                    <div className="my-6 p-4 bg-accent-50 rounded-2xl border border-accent-200">
                      <h4 className="font-bold text-accent-800 mb-2">💡 Inductie-concept</h4>
                      <p className="text-accent-700 text-sm">
                        Dit principe past binnen het bredere concept van <strong>inductie</strong>: organen en structuren 
                        worden gevormd door interacties tussen cellen en weefsels, waarbij een "inductor" een signaal 
                        afgeeft en een "responder" dit signaal ontvangt en daarop reageert. Alleen wanneer het 
                        responderweefsel <em>competent</em> is, kan het daadwerkelijk op die inductieve prikkel reageren.
                      </p>
                    </div>

                    <p className="text-navy-600 leading-relaxed">
                      In de ledemaatontwikkeling is de <strong className="text-navy-800">epitheel–mesenchym interactie</strong> tussen 
                      AER (ectoderm/epitheel) en mesenchym een klassiek voorbeeld van zulke inductie.
                    </p>
                  </div>
                </motion.div>
              </section>

              <hr className="border-navy-100 my-8" />

              {/* Section 2 */}
              <section id="proximodistaal" className="mb-12 scroll-mt-32">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-accent-100">
                      <Hand className="w-5 h-5 text-accent-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-navy-900">
                      Proximodistale opbouw en vingervorming
                    </h2>
                  </div>
                  
                  <div className="prose prose-navy max-w-none">
                    <p className="text-navy-600 leading-relaxed text-lg">
                      De proximodistale opbouw van een ledemaat kan je beschrijven in{' '}
                      <strong className="text-navy-800">drie opeenvolgende segmenten</strong>:
                    </p>

                    <div className="grid sm:grid-cols-3 gap-4 my-6">
                      <div className="p-4 bg-primary-50 rounded-xl border border-primary-200">
                        <div className="text-2xl mb-2">1️⃣</div>
                        <h4 className="font-bold text-primary-800">Stylopod</h4>
                        <p className="text-sm text-primary-600 mt-1">
                          Bovenarm/bovenbeen: <br/>humerus of femur
                        </p>
                      </div>
                      <div className="p-4 bg-accent-50 rounded-xl border border-accent-200">
                        <div className="text-2xl mb-2">2️⃣</div>
                        <h4 className="font-bold text-accent-800">Zeugopod</h4>
                        <p className="text-sm text-accent-600 mt-1">
                          Onderarm/onderbeen: <br/>radius/ulna, tibia/fibula
                        </p>
                      </div>
                      <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200">
                        <div className="text-2xl mb-2">3️⃣</div>
                        <h4 className="font-bold text-emerald-800">Autopod</h4>
                        <p className="text-sm text-emerald-600 mt-1">
                          Hand/voet: carpalia, metacarpalia, digiti
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-navy-600 leading-relaxed">
                      Terwijl de ledemaat verder groeit, verschijnt distaal een <strong className="text-navy-800">hand- of voetplaat</strong>. 
                      De uiteindelijke vorming van afzonderlijke vingers en tenen gebeurt niet doordat er "gaten" 
                      worden uitgesneden, maar doordat in de gebieden tussen de digitale stralen{' '}
                      <span className="px-2 py-0.5 bg-red-100 text-red-700 rounded-lg font-semibold">
                        geprogrammeerde celdood (apoptose)
                      </span>{' '}
                      optreedt.
                    </p>

                    <p className="text-navy-600 leading-relaxed mt-4">
                      Daardoor verdwijnen de weefselbruggen tussen de stralen en blijven afzonderlijke vingers 
                      of tenen over. Dit mechanisme is een kernidee om te onthouden bij het begrijpen van 
                      <em> aangeboren afwijkingen</em> waarbij vingers of tenen juist vergroeid blijven (syndactylie).
                    </p>
                  </div>
                </motion.div>
              </section>

              <hr className="border-navy-100 my-8" />

              {/* Section 3 */}
              <section id="orientatie" className="mb-12 scroll-mt-32">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-purple-100">
                      <Activity className="w-5 h-5 text-purple-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-navy-900">
                      Oriëntatie: Pre-axiaal en Post-axiaal
                    </h2>
                  </div>
                  
                  <div className="prose prose-navy max-w-none">
                    <p className="text-navy-600 leading-relaxed text-lg">
                      Naast de proximodistale organisatie speelt ook de oriëntatie van de ledemaat een rol 
                      via de hoofdas(sen), waaronder het onderscheid tussen{' '}
                      <strong className="text-navy-800">pre-axiaal</strong> en{' '}
                      <strong className="text-navy-800">post-axiaal</strong>.
                    </p>
                    
                    <p className="text-navy-600 leading-relaxed mt-4">
                      In de proximodistale ontwikkeling ligt craniaal de pre-axiale begrenzing en caudaal 
                      de post-axiale begrenzing. Door de <strong className="text-navy-800">rotatie van de ledematen</strong> tijdens 
                      de embryonale ontwikkeling wordt de uiteindelijke anatomische ligging in het bovenste 
                      en onderste lidmaat anders geïnterpreteerd:
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 my-6">
                      <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                        <h4 className="font-bold text-blue-800 mb-2">💪 Bovenste lidmaat</h4>
                        <ul className="text-sm text-blue-700 space-y-1">
                          <li>• Pre-axiaal → <strong>radiale zijde</strong></li>
                          <li>• Post-axiaal → <strong>ulnaire zijde</strong></li>
                        </ul>
                      </div>
                      <div className="p-4 bg-green-50 rounded-xl border border-green-200">
                        <h4 className="font-bold text-green-800 mb-2">🦵 Onderste lidmaat</h4>
                        <ul className="text-sm text-green-700 space-y-1">
                          <li>• Pre-axiaal → <strong>tibiale zijde</strong></li>
                          <li>• Post-axiaal → <strong>fibulaire zijde</strong></li>
                        </ul>
                      </div>
                    </div>

                    <p className="text-navy-600 leading-relaxed">
                      Dit kader helpt bij het plaatsen van <em>reductiedefecten</em> en variaties in ledemaatvorming.
                    </p>
                  </div>
                </motion.div>
              </section>

              <hr className="border-navy-100 my-8" />

              {/* Section 4 */}
              <section id="dermatomen" className="mb-12 scroll-mt-32">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-orange-100">
                      <Activity className="w-5 h-5 text-orange-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-navy-900">
                      Dermatomen versus Huidverzorgingsgebieden
                    </h2>
                  </div>
                  
                  <div className="prose prose-navy max-w-none">
                    <p className="text-navy-600 leading-relaxed text-lg">
                      Voor het begrijpen van sensibiliteit in arm en hand is het onderscheid tussen{' '}
                      <strong className="text-navy-800">dermatomen</strong> en{' '}
                      <strong className="text-navy-800">huidverzorgingsgebieden</strong> belangrijk.
                    </p>

                    <div className="grid sm:grid-cols-2 gap-4 my-6">
                      <div className="p-5 bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl border border-primary-200">
                        <h4 className="font-bold text-primary-800 mb-3">🎯 Dermatoom</h4>
                        <p className="text-sm text-primary-700">
                          Een huidgebied dat sensibel wordt geïnnerveerd door{' '}
                          <strong>één spinaal segment</strong> (één ruggenmergzenuw).
                        </p>
                      </div>
                      <div className="p-5 bg-gradient-to-br from-accent-50 to-accent-100 rounded-xl border border-accent-200">
                        <h4 className="font-bold text-accent-800 mb-3">🔀 Huidverzorgingsgebied</h4>
                        <p className="text-sm text-accent-700">
                          Resultaat van plexusvorming (bv. plexus brachialis); bestaat uit vezels van{' '}
                          <strong>meerdere spinale niveaus</strong>.
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-navy-600 leading-relaxed">
                      Huidverzorgingsgebieden van perifere zenuwen (zoals <strong className="text-navy-800">nervus medianus</strong>,{' '}
                      <strong className="text-navy-800">ulnaris</strong> en <strong className="text-navy-800">radialis</strong>) zijn het resultaat 
                      van de ontwikkeling van plexussen en bestaan meestal uit vezels van meerdere spinale niveaus.
                    </p>

                    <div className="my-6 p-4 bg-yellow-50 rounded-2xl border border-yellow-200">
                      <h4 className="font-bold text-yellow-800 mb-2">⚕️ Klinische relevantie</h4>
                      <p className="text-yellow-700 text-sm">
                        Dit verklaart waarom een laesie op <strong>wortelniveau</strong> (dermatoompatroon) anders 
                        presenteert dan een <strong>perifere zenuwlaesie</strong> (huidverzorgingsgebied).
                      </p>
                    </div>
                  </div>
                </motion.div>
              </section>

              <hr className="border-navy-100 my-8" />

              {/* Section 5 */}
              <section id="botontwikkeling" className="mb-12 scroll-mt-32">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-teal-100">
                      <Bone className="w-5 h-5 text-teal-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-navy-900">
                      Botontwikkeling: Endochondrale en Desmale Verbening
                    </h2>
                  </div>
                  
                  <div className="prose prose-navy max-w-none">
                    <p className="text-navy-600 leading-relaxed text-lg">
                      De ontwikkeling van botten kan op <strong className="text-navy-800">twee hoofdmanieren</strong> verlopen:
                    </p>

                    <div className="my-6 space-y-4">
                      <div className="p-5 bg-gradient-to-r from-primary-50 to-primary-100/50 rounded-xl border border-primary-200">
                        <h4 className="font-bold text-primary-800 mb-3">🦴 Endochondrale botvorming</h4>
                        <p className="text-primary-700 text-sm mb-3">
                          Eerst ontstaat een <strong>kraakbeenmodel</strong>: mesenchymale cellen differentiëren 
                          naar chondrocyten, waarna een kraakbenige aanleg zichtbaar wordt.
                        </p>
                        <div className="flex flex-wrap gap-2 text-xs">
                          <span className="px-2 py-1 bg-primary-200 text-primary-800 rounded-lg">Mesenchym</span>
                          <span className="text-primary-400">→</span>
                          <span className="px-2 py-1 bg-primary-200 text-primary-800 rounded-lg">Kraakbeenmodel</span>
                          <span className="text-primary-400">→</span>
                          <span className="px-2 py-1 bg-primary-200 text-primary-800 rounded-lg">Primaire ossificatie</span>
                          <span className="text-primary-400">→</span>
                          <span className="px-2 py-1 bg-primary-200 text-primary-800 rounded-lg">Secundaire ossificatie</span>
                          <span className="text-primary-400">→</span>
                          <span className="px-2 py-1 bg-primary-200 text-primary-800 rounded-lg">Groeischijf</span>
                        </div>
                      </div>

                      <div className="p-5 bg-gradient-to-r from-accent-50 to-accent-100/50 rounded-xl border border-accent-200">
                        <h4 className="font-bold text-accent-800 mb-3">💀 Desmale (intramembraneuze) verbening</h4>
                        <p className="text-accent-700 text-sm mb-3">
                          Er is <strong>geen kraakbeenmodel</strong>: mesenchym differentieert direct naar 
                          osteoblasten die botmatrix produceren.
                        </p>
                        <div className="flex flex-wrap gap-2 text-xs">
                          <span className="px-2 py-1 bg-accent-200 text-accent-800 rounded-lg">Mesenchym</span>
                          <span className="text-accent-400">→</span>
                          <span className="px-2 py-1 bg-accent-200 text-accent-800 rounded-lg">Osteoblasten</span>
                          <span className="text-accent-400">→</span>
                          <span className="px-2 py-1 bg-accent-200 text-accent-800 rounded-lg">Botmatrix</span>
                        </div>
                        <p className="text-accent-600 text-xs mt-3 italic">
                          Voorbeelden: platte beenderen zoals delen van de schedel, clavicula
                        </p>
                      </div>
                    </div>
                    
                    <p className="text-navy-600 leading-relaxed">
                      Bij endochondrale ossificatie speelt <strong className="text-navy-800">vascularisatie</strong> een 
                      belangrijke rol: bloedvaten dringen binnen en maken de omgeving geschikt voor 
                      osteoblastdifferentiatie en botmatrixvorming. Lengtegroei blijft mogelijk via de{' '}
                      <strong className="text-navy-800">groeischijf</strong>.
                    </p>
                  </div>
                </motion.div>
              </section>

              <hr className="border-navy-100 my-8" />

              {/* Section 6 */}
              <section id="juncturae" className="mb-8 scroll-mt-32">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 rounded-xl bg-indigo-100">
                      <Bone className="w-5 h-5 text-indigo-600" />
                    </div>
                    <h2 className="text-2xl font-bold text-navy-900">
                      Juncturae: Gewrichtsverbindingen
                    </h2>
                  </div>
                  
                  <div className="prose prose-navy max-w-none">
                    <p className="text-navy-600 leading-relaxed text-lg">
                      <strong className="text-navy-800">Juncturae</strong> zijn de manieren waarop botten met elkaar 
                      verbonden kunnen zijn. Sommige verbindingen zijn nauwelijks beweeglijk, andere juist sterk beweeglijk.
                    </p>

                    <h3 className="text-lg font-bold text-navy-800 mt-6 mb-4">Vier hoofdtypen:</h3>

                    <div className="grid sm:grid-cols-2 gap-4 my-6">
                      <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                        <h4 className="font-bold text-slate-800 mb-2">🔗 Junctura fibrosa</h4>
                        <p className="text-sm text-slate-600">
                          Bindweefselverbinding<br/>
                          <span className="italic">Voorbeeld: syndesmose</span>
                        </p>
                      </div>
                      <div className="p-4 bg-blue-50 rounded-xl border border-blue-200">
                        <h4 className="font-bold text-blue-800 mb-2">⚪ Junctura cartilaginea</h4>
                        <p className="text-sm text-blue-600">
                          Kraakbeenverbinding<br/>
                          <span className="italic">Voorbeeld: discus intervertebralis</span>
                        </p>
                      </div>
                      <div className="p-4 bg-gray-50 rounded-xl border border-gray-200">
                        <h4 className="font-bold text-gray-800 mb-2">🦴 Junctura ossea</h4>
                        <p className="text-sm text-gray-600">
                          Botverbinding (fusie)<br/>
                          <span className="italic">Voorbeeld: acetabulum/heupbeenfusie</span>
                        </p>
                      </div>
                      <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 ring-2 ring-emerald-300">
                        <h4 className="font-bold text-emerald-800 mb-2">⭐ Junctura synovialis</h4>
                        <p className="text-sm text-emerald-600">
                          Synoviaal gewricht (diarthrose)<br/>
                          <span className="italic">Meest beweeglijk! Bv. enkel, schouder</span>
                        </p>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-navy-800 mt-8 mb-4">Synoviaal gewricht in detail:</h3>
                    
                    <p className="text-navy-600 leading-relaxed">
                      Synoviale gewrichten worden gekenmerkt door gewrichtsvlakken met{' '}
                      <strong className="text-navy-800">hyalien kraakbeen</strong>, een gewrichtsspleet en een{' '}
                      <strong className="text-navy-800">gewrichtskapsel (capsula articularis)</strong>.
                    </p>

                    <div className="my-6 p-5 bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl border border-emerald-200">
                      <h4 className="font-bold text-emerald-800 mb-4">Het gewrichtskapsel bestaat uit 2 lagen:</h4>
                      <div className="space-y-3">
                        <div className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-emerald-200 text-emerald-800 rounded-full font-bold text-sm">1</span>
                          <div>
                            <strong className="text-emerald-800">Membrana synovialis</strong>
                            <span className="text-emerald-600"> (binnenlaag)</span>
                            <p className="text-sm text-emerald-700 mt-1">Produceert synovia (gewrichtsvloeistof)</p>
                          </div>
                        </div>
                        <div className="flex items-start gap-3">
                          <span className="flex-shrink-0 w-8 h-8 flex items-center justify-center bg-teal-200 text-teal-800 rounded-full font-bold text-sm">2</span>
                          <div>
                            <strong className="text-teal-800">Membrana fibrosa</strong>
                            <span className="text-teal-600"> (buitenlaag)</span>
                            <p className="text-sm text-teal-700 mt-1">Stevige bindweefsellaag voor stabiliteit</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="my-6 p-4 bg-primary-50 rounded-2xl border border-primary-200">
                      <h4 className="font-bold text-primary-800 mb-2">💧 Synovia (gewrichtsvloeistof)</h4>
                      <p className="text-primary-700 text-sm">
                        Essentieel voor <strong>voeding van het hyaliene kraakbeen</strong> en voor het{' '}
                        <strong>verminderen van wrijving</strong> tussen de gewrichtsvlakken.
                      </p>
                    </div>

                    <p className="text-navy-600 leading-relaxed mt-6">
                      Daarmee sluiten de thema's van ontwikkeling, weefselinteractie en uiteindelijke 
                      functie van het bewegingsapparaat logisch op elkaar aan.
                    </p>
                  </div>
                </motion.div>
              </section>

              {/* Footer CTA */}
              <div className="mt-12 p-6 bg-gradient-to-r from-primary-500 to-primary-600 rounded-2xl text-white">
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">Klaar om te oefenen?</h3>
                    <p className="text-primary-100">Test je kennis met de bijbehorende flashcards.</p>
                  </div>
                  <Link
                    to="/flashcards"
                    className="flex items-center gap-2 px-6 py-3 bg-white text-primary-600 rounded-xl font-semibold hover:bg-primary-50 transition-colors"
                  >
                    <Brain className="w-5 h-5" />
                    Naar Flashcards
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
            className="fixed bottom-8 right-8 p-4 bg-primary-500 text-white rounded-full shadow-lg hover:bg-primary-600 transition-colors z-50"
          >
            <ChevronUp className="w-6 h-6" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Footer */}
      <footer className="py-8 border-t border-navy-100 bg-white/50 backdrop-blur-sm mt-16">
        <div className="container-custom text-center">
          <p className="text-navy-400 text-sm">
            © 2024 Smartium. Slim studeren, beter onthouden.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default SummaryPage

