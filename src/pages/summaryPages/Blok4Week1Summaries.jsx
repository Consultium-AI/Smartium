import SummaryLayout from '../../components/SummaryLayout'
import { 
  FileText, Home, BookOpen, Clock, ChevronUp, ChevronDown, ChevronRight,
  Brain, Bone, Hand, Activity, GraduationCap, Calendar, Stethoscope,
  ClipboardCheck, Layers, Target, Droplets, ArrowRight, ArrowLeft, Baby, Dna, Shield, Microscope,
  Users, BarChart3
} from 'lucide-react'
const AangeborenImmuniteitHerkenningSummary = () => {
  const tableOfContents = [
    { id: 'introductie', title: 'Introductie aangeboren immuniteit', icon: Shield },
    { id: 'mononucleaire-fagocyten', title: 'Mononucleaire fagocyten', icon: Activity },
    { id: 'pamps', title: 'Pathogeen-geassocieerde moleculaire patronen', icon: Target },
    { id: 'prrs', title: 'Receptoren voor patroonherkenning', icon: Layers },
    { id: 'activatie', title: 'Activatie van PRRs', icon: Brain },
    { id: 'casus', title: 'Casus: Schimmelmeningitis', icon: Stethoscope },
    { id: 'superantigenen', title: 'Superantigenen', icon: Dna },
  ]

  return (
    <SummaryLayout
      title="Aangeboren immuniteit - herkenning"
      description="Receptoren van de aangeboren afweer, PAMPs, PRRs en de gevolgen van activatie."
      caseLabel="Casus 1: Algemene introductie"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=aangeboren-immuniteit-herkenning"
    >
      {/* Section 1: Introductie */}
      <section id="introductie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Introductie aangeboren immuniteit
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            De <strong>aangeboren immuniteit</strong> vormt de eerste verdedigingslinie tegen micro-organismen die de epitheelbarriÃ¨re doorbreken. <strong>Macrofagen</strong> en <strong>dendritische cellen</strong> zijn de belangrijkste cellulaire componenten in weefsels en kunnen direct reageren, lang voordat het verworven immuunsysteem actief wordt.
          </p>
          
          <p>
            Cellen van het aangeboren immuunsysteem gebruiken diverse <strong>receptoren</strong> om micro-organismen te herkennen en op te ruimen. Binding van microbiÃ«le componenten aan deze receptoren leidt tot <strong>fagocytose</strong> en activatie van macrofagen of dendritische cellen, wat de productie van ontstekingsmediatoren op gang brengt en de ontstekingsreactie start.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 2: Mononucleaire fagocyten */}
      <section id="mononucleaire-fagocyten" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-accent-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Mononucleaire fagocyten
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Cellen in strategische posities in organen initiÃ«ren een snelle aangeboren immuunrespons. <strong>Macrofagen</strong> en <strong>dendritische cellen</strong> zijn first responders, gespecialiseerd in herkennen, opnemen en verwerken van antigenen. Samen met <strong>monocyten</strong> worden ze mononucleaire fagocyten genoemd.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
              <h4 className="font-bold text-primary-800 mb-2">Dendritische cellen</h4>
              <p className="text-primary-700 text-sm">
                Migreren naar T-celgebieden in secundaire lymfoÃ¯de organen en kunnen naÃ¯eve T-cellen stimuleren.
              </p>
            </div>
            <div className="p-5 bg-accent-50 rounded-xl border border-accent-200">
              <h4 className="font-bold text-accent-800 mb-2">Macrofagen</h4>
              <p className="text-accent-700 text-sm">
                Weefselresidente cellen met sterke fagocyterende capaciteit; belangrijk voor weefselhomeostase en reparatie.
              </p>
            </div>
          </div>
          
          <div className="p-5 bg-slate-50 rounded-xl border-l-4 border-primary-400">
            <h4 className="font-bold text-slate-800 mb-2">Weefsel-specifieke macrofagen</h4>
            <p className="text-slate-600 mb-3">
              Tijdens embryogenese ontstaan macrofagen vroeg in perifere weefsels. Na ontwikkeling ontstaan monocyten in het <strong>beenmerg</strong> (~10â¹ per dag), migreren naar het <strong>bloed</strong> en differentiÃ«ren tot weefsel-specifieke macrofagen.
            </p>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="px-3 py-1 bg-slate-200 text-slate-800 rounded-full">Microglia (CZS)</span>
              <span className="px-3 py-1 bg-slate-200 text-slate-800 rounded-full">Alveolaire macrofaag (long)</span>
              <span className="px-3 py-1 bg-slate-200 text-slate-800 rounded-full">Kupffer cellen (lever)</span>
              <span className="px-3 py-1 bg-slate-200 text-slate-800 rounded-full">Langerhans cel (huid)</span>
              <span className="px-3 py-1 bg-slate-200 text-slate-800 rounded-full">Marginale zone macrofaag (milt)</span>
            </div>
          </div>
          
          <p>
            Tijdens homeostase wordt de macrofaagpopulatie in stand gehouden door lokale <strong>proliferatie</strong>. Bij infectie kunnen macrofagen ook ontstaan uit <strong>monocyten</strong> die vanuit het bloed naar het weefsel migreren en <strong>differentiÃ«ren</strong> tot macrofaag.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3: PAMPs */}
      <section id="pamps" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-purple-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Pathogeen-geassocieerde moleculaire patronen (PAMPs)
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            <strong>PAMPs</strong> zijn moleculen van micro-organismen die door het aangeboren immuunsysteem worden herkend. Ze zijn evolutionair geconserveerd en divers van structuur. PAMPs kunnen bestaan uit lipiden, eiwitten, koolhydraten, nucleÃ¯nezuren of een combinatie daarvan.
          </p>
          
          <div className="space-y-3">
            <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-2">Gram-positieve bacteriÃ«n</h4>
              <p className="text-amber-700 text-sm">
                PGN (peptidoglycaan), LTA (lipoteÃ¯choÃ¯nezuur), TA (teÃ¯choÃ¯nezuur), flagelline
              </p>
            </div>
            <div className="p-5 bg-red-50 rounded-xl border border-red-200">
              <h4 className="font-bold text-red-800 mb-2">Gram-negatieve bacteriÃ«n</h4>
              <p className="text-red-700 text-sm">
                LPS (lipopolysaccharide/endotoxine), PGN, flagelline, T3SS (Type III Secretion System)
              </p>
            </div>
            <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
              <h4 className="font-bold text-teal-800 mb-2">MycobacteriÃ«n</h4>
              <p className="text-teal-700 text-sm">
                TDM, MA, AG, LAM, PIM, PGN
              </p>
            </div>
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-800 mb-2">DNA</h4>
              <p className="text-slate-600 text-sm">
                Aanwezig in alle bacteriÃ«ntypen; universele PAMP
              </p>
            </div>
          </div>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2">Belangrijk</h4>
            <p className="text-rose-700 m-0">
              PAMPs komen voor op zowel pathogene als niet-pathogene micro-organismen. De termen <strong>MAMPs</strong> (Microbe-Associated Molecular Patterns) en PAMPs worden vaak door elkaar gebruikt.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4: PRRs */}
      <section id="prrs" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Layers className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Receptoren voor patroonherkenning (PRRs)
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Het aangeboren immuunsysteem gebruikt een breed scala aan receptoren. <strong>Patroonherkenningsreceptoren (PRRs)</strong> herkennen PAMPs direct. <strong>Opsoninereceptoren</strong> (Fc-receptoren, complementreceptoren) herkennen antistoffen en complement, niet direct micro-organismen; ze hebben altijd brugmoleculen nodig.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-200">
              <h4 className="font-bold text-indigo-800 mb-2">Cellularereceptoren</h4>
              <ul className="space-y-1 text-indigo-700 text-sm">
                <li>â€¢ Opsonine R: FcR, complement R â†’ fagocytose en signalering</li>
                <li>â€¢ Endocytose R: scavenger R, C-type lectine R â†’ fagocytose en signalering</li>
                <li>â€¢ TLR (membraangebonden) â†’ signalering</li>
                <li>â€¢ NLR, RLR, DSR (cytosolisch) â†’ signalering</li>
              </ul>
            </div>
            <div className="p-5 bg-cyan-50 rounded-xl border border-cyan-200">
              <h4 className="font-bold text-cyan-800 mb-2">Humorale receptoren</h4>
              <p className="text-cyan-700 text-sm">
                Collectines, ficolines, pentraxines â†’ fagocytose en signalering
              </p>
            </div>
          </div>
          
          <div className="p-5 bg-slate-50 rounded-xl border-l-4 border-indigo-400">
            <h4 className="font-bold text-slate-800 mb-2">Endocytose en fagocytose</h4>
            <p className="text-slate-600 m-0">
              <strong>Endocytose</strong> is opname van extracellulair materiaal via membraanvesikels. Onderscheid: pinocytose (vloeistof), receptor-gemedieerde endocytose (moleculen), fagocytose (partikels zoals micro-organismen). Zowel endocytose als fagocytose kunnen leiden tot signaaltransductie en worden geÃ¯nitieerd door binding aan receptoren.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 5: Activatie */}
      <section id="activatie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <Brain className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Activatie van patroonherkenningsreceptoren
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Binding van PAMPs aan PRRs induceert vaak <strong>dimerisatie</strong>. Adaptormoleculen (TRAM, TRIF, TIRAP, MyD88) binden aan de intracellulaire domeinen en koppelen aan signaaltransductiemoleculen. ProteÃ¯nekinases (MAPK, IKK) worden activ en fosforyleren transcriptiefactoren. Deze verplaatsen naar de kern en induceren genexpressie.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-2">TLR4 (plasmamembraan)</h4>
              <p className="text-blue-700 text-sm">
                LPS â†’ MyD88/TIRAP â†’ MAPK, IKK â†’ AP-1, NF-ÎºB â†’ cytokinen, chemokinen, costimulatoire moleculen
              </p>
            </div>
            <div className="p-5 bg-purple-50 rounded-xl border border-purple-200">
              <h4 className="font-bold text-purple-800 mb-2">TLR3 (endosoom)</h4>
              <p className="text-purple-700 text-sm">
                dsRNA â†’ TRAM/TRIF â†’ TBK1 â†’ IRF â†’ type I interferon (IFN Î±/Î²)
              </p>
            </div>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Inflammasoom</h4>
            <p className="text-amber-700 text-sm">
              NLR-receptoren (bijv. NLRP3) vormen een multi-eiwitcomplex. Bij activatie wordt caspase-1 actief en zet pro-IL-1Î² om in actief IL-1Î². Triggers: urinezuurkristallen (jicht), cholesterolkristallen, flagelline, extracellulair ATP.
            </p>
          </div>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2 flex items-center gap-2">
              <Stethoscope className="w-4 h-4" />
              Klinische relevantie: Jicht
            </h4>
            <p className="text-rose-700 m-0">
              Urinezuurkristallen die in gewrichten precipiteren activeren het NLRP3-inflammasoom in macrofagen, waardoor IL-1Î² wordt geproduceerd en een pijnlijke ontsteking ontstaat.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 6: Casus */}
      <section id="casus" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-rose-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Casus: Schimmelmeningitis
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Zeldzame mutaties in PRRs of signaaltransductiemoleculen geven unieke inzichten in de immuunfunctie. Een casus: een meisje van 7 jaar met schimmelmeningitis door <em>Candida dubliniensis</em> (koorts, hoofdpijn, gedragsveranderingen, insulten). Genetisch onderzoek toonde een mutatie in het <strong>CARD9-gen</strong>.
          </p>
          
          <div className="p-5 bg-purple-50 rounded-xl border border-purple-200">
            <h4 className="font-bold text-purple-800 mb-2">CARD9 en signaaltransductie</h4>
            <p className="text-purple-700 text-sm">
              CARD9 is een cruciaal onderdeel van de signaaltransductieroute voor C-type lectine receptoren. De <em>Candida</em>-celwand bevat mannan en Î²-glucanen. Dectin-2 en de mannosereceptor herkennen mannan; Dectin-1 herkent Î²-glucanen. Zonder CARD9 faalt de schimmelafweer.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 7: Superantigenen */}
      <section id="superantigenen" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
            <Dna className="w-5 h-5 text-red-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Superantigenen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            <strong>Superantigenen</strong> zijn exotoxines die door micro-organismen worden geproduceerd. Ze veroorzaken effecten vergelijkbaar met endotoxines (LPS): koorts, intravasale stolling, shock. Het mechanisme verschilt: ze betrekken niet alleen receptoren van de aangeboren immuniteit maar ook antigeen-specifieke receptoren van lymfocyten.
          </p>
          
          <div className="p-5 bg-red-50 rounded-xl border border-red-200">
            <h4 className="font-bold text-red-800 mb-2">Mechanisme</h4>
            <p className="text-red-700 text-sm">
              Superantigenen binden aan MHC Klasse II op APCs en aan de variabele regio (VÎ²) van de T-celreceptor. Deze binding vindt plaats <em>buiten</em> de peptidebindingsplaats, wat leidt tot niet-specifieke activatie van een groot deel van de T-cellen.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-800 mb-2">BacteriÃ«n</h4>
              <p className="text-slate-600 text-sm">
                <em>Staphylococcus aureus</em>, <em>Streptococcus pyogenes</em>
              </p>
            </div>
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-800 mb-2">Virussen</h4>
              <p className="text-slate-600 text-sm">
                EBV, HIV (induceren gastheercellen om superantigenen te produceren)
              </p>
            </div>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border-l-4 border-amber-400">
            <h4 className="font-bold text-amber-800 mb-2">Polyclonale B-celactivatie</h4>
            <p className="text-amber-700 m-0">
              Superantigenen kunnen ook B-cellen activeren. Bijvoorbeeld: Protein A van <em>S. aureus</em> bindt aan de niet-variabele domeinen van de B-celreceptor, wat leidt tot polyclonale B-celactivatie.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

// Blok 4 - LME 2: Introductie bacteriologie Content
const IntroductieBacteriologieSummary = () => {
  const tableOfContents = [
    { id: 'inleiding-metabolisme', title: 'BacteriÃ«n: inleiding en metabolisme', icon: Microscope },
    { id: 'groei-deling', title: 'Groei en deling', icon: Activity },
    { id: 'vorm-ligging', title: 'Vorm en ligging', icon: Target },
    { id: 'celbouw', title: 'Bouw van de bacteriÃ«le cel', icon: Layers },
    { id: 'naamgeving', title: 'Naamgeving en verwantschap', icon: BookOpen },
    { id: 'kolonisatie-infectie', title: 'Kolonisatie en infectie', icon: Stethoscope },
  ]

  return (
    <SummaryLayout
      title="Introductie bacteriologie"
      description="Prokaryote cellen, metabolisme, celbouw, naamgeving en het onderscheid tussen kolonisatie en infectie."
      caseLabel="Casus 1: Algemene introductie"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=introductie-bacteriologie"
    >
      {/* Section 1: Inleiding en metabolisme */}
      <section id="inleiding-metabolisme" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Microscope className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            BacteriÃ«n: inleiding en metabolisme
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            BacteriÃ«n zijn de oudste levensvorm op aarde. Ze zijn eencellig, ongeveer <strong>1â€“10 micrometer</strong> groot, en kunnen voedingsstoffen uit hun omgeving opnemen, afbreken en weer opbouwen. Ze vormen het grootste deel van de <strong>residente flora (microbiota)</strong> van mensen en andere organismen.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200">
              <h4 className="font-bold text-emerald-800 mb-2">Voordelen microbiota</h4>
              <ul className="space-y-2 text-emerald-700 text-sm">
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 mt-0.5 shrink-0" />Bescherming via competitie om ruimte en voedingsstoffen</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 mt-0.5 shrink-0" />Stimulatie immuunsysteem</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 mt-0.5 shrink-0" />Vertering complexe koolhydraten</li>
                <li className="flex items-start gap-2"><ArrowRight className="w-4 h-4 mt-0.5 shrink-0" />Productie B-vitaminen en vitamine K</li>
              </ul>
            </div>
            <div className="p-5 bg-rose-50 rounded-xl border border-rose-200">
              <h4 className="font-bold text-rose-800 mb-2">Infecties</h4>
              <p className="text-rose-700 text-sm">
                <strong>Exogene infecties:</strong> van buitenaf (gecontamineerd voedsel, water, medische ingrepen). <strong>Endogene infecties:</strong> van binnenuit, door koloniserende micro-organismen bij verminderde weerstand.
              </p>
            </div>
          </div>
          
          <div className="p-5 bg-slate-50 rounded-xl border-l-4 border-primary-400">
            <h4 className="font-bold text-slate-800 mb-2">Metabolisme: ademhaling</h4>
            <div className="space-y-2 text-slate-600 text-sm">
              <p><strong>Strikt aeroob:</strong> alleen zuurstof (bijv. <em>Pseudomonas aeruginosa</em>)</p>
              <p><strong>Strikt anaeroob:</strong> geen zuurstof (bijv. <em>Clostridium difficile</em> in darm)</p>
              <p><strong>Facultatief:</strong> met of zonder zuurstof (meeste humane pathogene bacteriÃ«n, bijv. <em>E. coli</em>)</p>
            </div>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Fermentatie</h4>
            <p className="text-amber-700 text-sm">
              Naast ademhaling kunnen bacteriÃ«n glucose via fermentatie afbreken. <strong>Non-fermenters</strong> (bijv. <em>Pseudomonas</em>) kunnen glucose niet afbreken. Het onderscheid is belangrijk voor antibioticakeuze: sommige antibiotica werken niet tegen non-fermenters.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 2: Groei en deling */}
      <section id="groei-deling" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-accent-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Groei en deling
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            BacteriÃ«le groei betekent toename in <strong>aantal</strong>, niet in grootte. BacteriÃ«n vermenigvuldigen zich via <strong>binaire deling</strong> (ongeslachtelijke voortplanting). De delingssnelheid hangt af van: (1) de soort bacterie, (2) voedingsstoffen en milieu (pH, zuurstof, COâ‚‚), (3) temperatuur (humane pathogenen: ~35â€“37Â°C).
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-2">Snelle groeiers</h4>
              <p className="text-blue-700 text-sm">
                <em>E. coli</em>: deling elke ~20 minuten onder ideale omstandigheden
              </p>
            </div>
            <div className="p-5 bg-purple-50 rounded-xl border border-purple-200">
              <h4 className="font-bold text-purple-800 mb-2">Langzame groeiers</h4>
              <p className="text-purple-700 text-sm">
                <em>Mycobacterium tuberculosis</em>: 15â€“20 uur per deling
              </p>
            </div>
          </div>
          
          <div className="p-5 bg-slate-50 rounded-xl border-l-4 border-accent-400">
            <h4 className="font-bold text-slate-800 mb-2">Groeifasen in kweekmedium</h4>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="px-3 py-1 bg-slate-200 text-slate-800 rounded-full">Lag-fase</span>
              <span className="text-slate-400">â†’</span>
              <span className="px-3 py-1 bg-slate-200 text-slate-800 rounded-full">ExponentiÃ«le fase</span>
              <span className="text-slate-400">â†’</span>
              <span className="px-3 py-1 bg-slate-200 text-slate-800 rounded-full">Stationaire fase</span>
              <span className="text-slate-400">â†’</span>
              <span className="px-3 py-1 bg-slate-200 text-slate-800 rounded-full">Afsterving</span>
            </div>
            <p className="text-slate-600 text-sm mt-2">
              Tijdens de exponentiÃ«le fase neemt het aantal bacteriÃ«n logaritmisch toe door snelle celdeling.
            </p>
          </div>
          
          <p>
            Een <strong>kolonie</strong> (KVE/CFU) is een zichtbare massa bacteriÃ«n ontstaan uit Ã©Ã©n bacterie. BacteriÃ«n in een kolonie delen dezelfde genetische eigenschappen.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3: Vorm en ligging */}
      <section id="vorm-ligging" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-purple-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Vorm en ligging
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            BacteriÃ«n worden ingedeeld op <strong>vorm</strong>: staafvormig (bacillen), bolvormig (kokken/coccoÃ¯d), kommavormig of spiraalvormig, en vele tussenvormen. De <strong>ligging</strong> ten opzichte van elkaar wordt bepaald door de delingswijze en is soortafhankelijk.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-200">
              <h4 className="font-bold text-indigo-800 mb-2">Kokken</h4>
              <p className="text-indigo-700 text-sm">
                Diplokokken (paren), streptokokken (ketens), stafylokokken (trossen), tetrad, sarcina
              </p>
            </div>
            <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
              <h4 className="font-bold text-teal-800 mb-2">Bacillen</h4>
              <p className="text-teal-700 text-sm">
                Enkele staaf, diplobacillen, streptobacillen, palissaden (zij-aan-zij)
              </p>
            </div>
          </div>
          
          <p>
            Bij Gramkleuring: grampositieve kokken vaak in trossen; gramnegatieve staven vaak willekeurig of zij-aan-zij.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4: Bouw van de bacteriÃ«le cel */}
      <section id="celbouw" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Layers className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Bouw van de bacteriÃ«le cel
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            BacteriÃ«n zijn <strong>prokaryoten</strong>: geen celkern, <strong>circulair chromosomaal DNA</strong>, <strong>kleine ribosomen (70S)</strong> versus grote (80S) in eukaryoten. Ribosomen zijn nodig voor <strong>translatie</strong>. Prokaryoten planten zich ongeslachtelijk voort (DNA-overdracht is wel mogelijk).
          </p>
          
          <div className="p-5 bg-slate-50 rounded-xl border-l-4 border-indigo-400">
            <h4 className="font-bold text-slate-800 mb-2">Celomhulling</h4>
            <p className="text-slate-600 text-sm mb-2">
              Elke bacterie heeft een <strong>celwand</strong> (peptidoglycaan) en een <strong>binnenmembraan</strong>. Gramnegatieve bacteriÃ«n hebben ook een <strong>buitenmembraan</strong> met <strong>porines</strong> voor transport van hydrofiele stoffen.
            </p>
            <p className="text-slate-600 text-sm m-0">
              <strong>Gram-positief:</strong> dikke peptidoglycaanlaag (20â€“80 nm). <strong>Gram-negatief:</strong> dunne peptidoglycaanlaag (5â€“10 nm), buitenmembraan met LPS.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-2">Virulentiefactoren</h4>
              <p className="text-amber-700 text-sm">
                <strong>Pili/fimbriae:</strong> hechting. <strong>Flagellen:</strong> beweging. <strong>Kapsel:</strong> bescherming tegen immuunsysteem en uitdroging.
              </p>
            </div>
            <div className="p-5 bg-cyan-50 rounded-xl border border-cyan-200">
              <h4 className="font-bold text-cyan-800 mb-2">Plasmiden</h4>
              <p className="text-cyan-700 text-sm">
                Extra-chromosomaal circulair DNA; kunnen virulentie- en resistentiegenen bevatten; overdraagbaar tussen bacteriÃ«n.
              </p>
            </div>
          </div>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2 flex items-center gap-2">
              <Stethoscope className="w-4 h-4" />
              Antibiotica en toxinen
            </h4>
            <p className="text-rose-700 text-sm mb-2">
              <strong>Î²-lactam antibiotica</strong> (penicillines, cefalosporines) remmen peptidoglycaansynthese; effectiever tegen Gram-positieve bacteriÃ«n.
            </p>
            <p className="text-rose-700 text-sm m-0">
              <strong>Endotoxinen:</strong> gebonden aan de bacterie (LPS in Gram-negatief). <strong>Exotoxinen:</strong> uitgescheiden toxische eiwitten.
            </p>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Atypische bacteriÃ«n</h4>
            <p className="text-amber-700 text-sm mb-2">
              <em>MycobacteriÃ«n</em>: complexe lipiden (mycolzuren). <em>Chlamydiae</em>: alleen intracellulair. <em>Mycoplasma</em>: geen celwand.
            </p>
          </div>
          
          <div className="p-5 bg-red-50 rounded-xl border border-red-200">
            <h4 className="font-bold text-red-800 mb-2">Sporen</h4>
            <p className="text-red-700 text-sm">
              Sommige bacteriÃ«n vormen <strong>endosporen</strong> met sporemembraan, peptidoglycaan en keratine-achtige eiwitlaag. Ze zijn zeer resistent tegen chemicaliÃ«n, UV, maagzuur en antibiotica. <em>Clostridium difficile</em>-sporen overleven antibiotica; na uitroeiing van darmflora kunnen ze kiemen en dominant worden, met exotoxines die diarree veroorzaken.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 5: Naamgeving */}
      <section id="naamgeving" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Naamgeving en verwantschap
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            BacteriÃ«n worden op grond van genetische verwantschap ingedeeld: <strong>phylum</strong> â†’ klasse â†’ order â†’ familie â†’ <strong>genus</strong> â†’ <strong>species</strong>. Species zijn het meest nauw verwant.
          </p>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Genus en species</h4>
            <p className="text-teal-700 text-sm">
              <em>Staphylococcus aureus</em>: genus = Staphylococcus, species = aureus. <em>S. epidermidis</em> is minder virulent (coagulase-negatief). Meerdere species: <em>Staphylococcus</em> spp. of stafylokokken.
            </p>
          </div>
          
          <div className="p-5 bg-slate-50 rounded-xl border-l-4 border-teal-400">
            <h4 className="font-bold text-slate-800 mb-2">Stam en isolaat</h4>
            <p className="text-slate-600 text-sm mb-2">
              Binnen een species bestaan <strong>stammen (klonen)</strong>: genetische varianten afkomstig van dezelfde voorloper. Bijv. ETEC (enterotoxine-producerende E. coli) vs. normale darm-E. coli.
            </p>
            <p className="text-slate-600 text-sm m-0">
              Een <strong>isolaat</strong> is een verzameling bacteriÃ«n afkomstig van Ã©Ã©n cel, zoals bij isolatie van een ziekteverwekker in het lab.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 6: Kolonisatie en infectie */}
      <section id="kolonisatie-infectie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-rose-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Kolonisatie en infectie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            <strong>Kolonisatie</strong> is de aanwezigheid van een micro-organisme op of in een gastheer, met groei en vermenigvuldiging <em>zonder</em> schade. De koloniserende micro-organismen vormen de <strong>residente flora</strong>, <strong>microbioom</strong> of <strong>microbiota</strong>. Ze koloniseren plaatsen in contact met de buitenwereld: huid, mond, darmen, vagina, enz.
          </p>
          
          <p>
            <strong>Infectie</strong> betekent dat de gastheer schade wordt toegebracht. De meeste bacteriÃ«n zijn onschuldig; veel zijn potentieel pathogeen onder bepaalde omstandigheden; weinige zijn vrijwel altijd pathogeen (bijv. <em>Mycobacterium tuberculosis</em>).
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-2">Exogene infecties</h4>
              <p className="text-blue-700 text-sm">
                Van buitenaf: gecontamineerd eten/water, insectenbeten, medische ingrepen, mens-op-mens (COVID, griep, SOA's, meningitis). In de zorg: overdracht van bacteriestam van zorgverlener of patiÃ«nt naar andere patiÃ«nt.
              </p>
            </div>
            <div className="p-5 bg-purple-50 rounded-xl border border-purple-200">
              <h4 className="font-bold text-purple-800 mb-2">Endogene infecties</h4>
              <p className="text-purple-700 text-sm">
                Van binnenuit: door bacteriÃ«n van de residente flora. Ontstaan bij verminderde weerstand, antibioticagebruik (beschermende flora gedood), of doorbroken huidbarriÃ¨re (wond). Urineweginfecties: vaak door darmbacteriÃ«n (E. coli) die in de blaas infectie veroorzaken.
              </p>
            </div>
          </div>
          
          <div className="p-5 bg-slate-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-slate-800 mb-2">Commensale flora</h4>
            <p className="text-slate-600 m-0">
              Normaal voorkomende flora op een lichaamsdeel heet <strong>commensale flora</strong>. Kennis hiervan is belangrijk om bij labuitslagen ziekteverwekkers te onderscheiden van normale flora. Huid: vooral stafylokokken en grampositieve staafjes. ~20% draagt <em>S. aureus</em> zonder klachten; pas bij doorbroken huidbarriÃ¨re kan infectie ontstaan.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

// Blok 4 - LME 3: Introductie en overzicht immunologie Content
const IntroductieImmunologieSummary = () => {
  const tableOfContents = [
    { id: 'aangeboren-verworven', title: 'Aangeboren vs verworven afweer', icon: Shield },
    { id: 'vaccinatie', title: 'Passieve en actieve immunisatie', icon: Activity },
    { id: 'herkenning', title: 'Herkenning van indringers', icon: Target },
    { id: 'kapstok', title: 'Kapstok immunologie', icon: Layers },
    { id: 'cellen', title: 'Cellen van het immuunsysteem', icon: Brain },
    { id: 'b-t-lymfocyten', title: 'B- en T-lymfocyten', icon: Dna },
    { id: 'diversiteit', title: 'Diversiteit en verworven immuniteit', icon: ClipboardCheck },
  ]

  return (
    <SummaryLayout
      title="Introductie en overzicht immunologie"
      description="Aangeboren en verworven immuniteit, celtypen, herkenning en de kapstok van het immuunsysteem."
      caseLabel="Casus 1: Algemene introductie"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=introductie-immunologie"
    >
      {/* Section 1: Aangeboren vs verworven */}
      <section id="aangeboren-verworven" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Aangeboren vs verworven afweer
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Mensen worden voortdurend blootgesteld aan schadelijke micro-organismen. Een functionerend immuunsysteem voorkomt dat infecties tot ziekte leiden. Er wordt onderscheid gemaakt tussen <strong>aangeboren</strong> en <strong>verworven</strong> afweer.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-2">Aangeboren afweer</h4>
              <ul className="space-y-1 text-blue-700 text-sm">
                <li>â€¢ Macrofaag, fagocytose</li>
                <li>â€¢ Neutrofiele granulocyt, eosinofiel, basofiel</li>
                <li>â€¢ Dendritische cel, NK-cel</li>
              </ul>
            </div>
            <div className="p-5 bg-purple-50 rounded-xl border border-purple-200">
              <h4 className="font-bold text-purple-800 mb-2">Verworven afweer</h4>
              <ul className="space-y-1 text-purple-700 text-sm">
                <li>â€¢ T-lymfocyten</li>
                <li>â€¢ Plasmacellen, antistoffen</li>
                <li>â€¢ Immunologisch geheugen</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 2: Vaccinatie */}
      <section id="vaccinatie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-accent-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Passieve en actieve immunisatie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Vaccinatie (bijv. DKTP, de K = kinkhoest) beschermt kinderen tegen infectieziekten. Het onderscheid tussen passieve en actieve immunisatie is belangrijk.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-2">Passieve immunisatie</h4>
              <p className="text-amber-700 text-sm">
                Beschermende <strong>antistoffen</strong> worden overgedragen of toegediend. Voorbeelden: tetanus-antistoffen bij een schaafwond (na laatste vaccinatie &gt;10 jaar geleden), overdracht van moeder naar kind via de placenta. <strong>Kortdurende</strong> bescherming: antistoffen hebben een halfwaardetijd en verdwijnen uit het lichaam.
              </p>
            </div>
            <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200">
              <h4 className="font-bold text-emerald-800 mb-2">Actieve immunisatie</h4>
              <p className="text-emerald-700 text-sm">
                <strong>Geheugencellen</strong> worden gevormd; bij volgend contact met de ziekteverwekker worden ze geactiveerd en zorgen voor bescherming. Geheugencellen blijven aanwezig â†’ <strong>langdurige</strong> bescherming.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3: Herkenning */}
      <section id="herkenning" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Herkenning van indringers
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Immuuncellen moeten indringers herkennen voordat ze deze gericht kunnen bestrijden. De herkenning verschilt per celtype:
          </p>
          
          <div className="space-y-3">
            <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-2">Macrofagen</h4>
              <p className="text-blue-700 text-sm">
                Herkenning van <strong>moleculaire patronen</strong> op en in indringers (PAMPs via PRRs)
              </p>
            </div>
            <div className="p-5 bg-purple-50 rounded-xl border border-purple-200">
              <h4 className="font-bold text-purple-800 mb-2">B-lymfocyten</h4>
              <p className="text-purple-700 text-sm">
                <strong>Specifieke herkenning</strong> van extracellulaire antigenen, niet gebonden aan MHC-moleculen
              </p>
            </div>
            <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
              <h4 className="font-bold text-teal-800 mb-2">T-lymfocyten</h4>
              <p className="text-teal-700 text-sm">
                <strong>Specifieke herkenning</strong> van kleine peptiden gebonden aan MHC klasse I- of MHC klasse II-moleculen
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4: Kapstok */}
      <section id="kapstok" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Layers className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Kapstok immunologie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Het immuunsysteem wordt in vier kwadranten ingedeeld, met <strong>ontsteking</strong> (de reactie van het lichaam op weefselschade) centraal. Horizontaal: aangeboren vs verworven. Verticaal: humoraal (effectormoleculen in bloed/lymfe) vs cellulair (cellen).
          </p>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-2">Aangeboren - humoraal</h4>
              <p className="text-amber-700 text-sm">
                Complement, MBL; initiatie in perifere weefsels
              </p>
            </div>
            <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-2">Aangeboren - cellulair</h4>
              <p className="text-blue-700 text-sm">
                Macrofagen, DC, granulocyten, NK-cellen; PRRs; fagocytose
              </p>
            </div>
            <div className="p-5 bg-purple-50 rounded-xl border border-purple-200">
              <h4 className="font-bold text-purple-800 mb-2">Verworven - humoraal</h4>
              <p className="text-purple-700 text-sm">
                Antistoffen; B-lymfocyten, plasmacellen; initiatie in lymfoÃ¯de organen
              </p>
            </div>
            <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
              <h4 className="font-bold text-teal-800 mb-2">Verworven - cellulair</h4>
              <p className="text-teal-700 text-sm">
                Helper- en cytotoxische T-lymfocyten; T-celreceptoren
              </p>
            </div>
          </div>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2">Ziektebeelden</h4>
            <p className="text-rose-700 text-sm m-0">
              ImmuundeficiÃ«nties, allergie en overgevoeligheid, vaccinatie/immuunmodulatie, leukemieÃ«n/lymfomen (woekering), auto-immuunziekten of auto-inflammatie (ontregeld of gericht tegen zelf).
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 5: Cellen */}
      <section id="cellen" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <Brain className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Cellen van het immuunsysteem
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Alle immuuncellen ontstaan uit de <strong>hematopoietische stamcel</strong> in het beenmerg. Twee hoofdstromen: <strong>myeloide</strong> en <strong>lymfoÃ¯de</strong> lijn.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Aangeboren afweer</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Functie</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">Monocyt</td><td className="border border-slate-200 pl-3 py-2">Fagocytose</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Macrofaag</td><td className="border border-slate-200 pl-3 py-2">Fagocytose</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Neutrofiele granulocyt</td><td className="border border-slate-200 pl-3 py-2">Fagocytose</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Eosinofiele granulocyt</td><td className="border border-slate-200 pl-3 py-2">Doden van wormen</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Basofiele granulocyt</td><td className="border border-slate-200 pl-3 py-2">Vrijmaken histamine en vasoactieve stoffen</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Dendritische cel</td><td className="border border-slate-200 pl-3 py-2">Antigeenpresentatie</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">NK-cel</td><td className="border border-slate-200 pl-3 py-2">Doden virusgeÃ¯nfecteerde cellen</td></tr>
              </tbody>
            </table>
          </div>
          
          <div className="overflow-x-auto mt-4">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Verworven afweer</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Functie</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">B-lymfocyt</td><td className="border border-slate-200 pl-3 py-2">Productie antilichamen</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Cytotoxische T-lymfocyt</td><td className="border border-slate-200 pl-3 py-2">Doden virusgeÃ¯nfecteerde cellen</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">T-helper lymfocyt</td><td className="border border-slate-200 pl-3 py-2">Cytokinen, activatie B-cellen en macrofagen</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 6: B- en T-lymfocyten */}
      <section id="b-t-lymfocyten" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
            <Dna className="w-5 h-5 text-purple-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            B- en T-lymfocyten
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Na activatie rijpen B- en T-lymfocyten uit tot <strong>effectorcellen</strong>. Een effector B-lymfocyt heet een <strong>plasmacel</strong>.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-2">Effector B-lymfocyten (plasmacellen)</h4>
              <p className="text-blue-700 text-sm mb-2">
                Scheiden <strong>antilichamen</strong> uit (IgM, IgG, IgA, IgE). Antilichamen zijn uitgescheiden immunoglobulinen met dezelfde basisstructuur als membraangebonden immunoglobulinen op B-cellen. Ze bestaan uit variabele en constante domeinen; de <strong>variabele domeinen</strong> vormen de antigeenbindende delen.
              </p>
            </div>
            <div className="p-5 bg-purple-50 rounded-xl border border-purple-200">
              <h4 className="font-bold text-purple-800 mb-2">Effector T-lymfocyten</h4>
              <p className="text-purple-700 text-sm mb-2">
                Scheiden <strong>cytokinen</strong>, <strong>perforinen</strong> en <strong>granzymen</strong> uit. Cytokinen binden aan receptoren op andere cellen en beÃ¯nvloeden hun gedrag; worden ook door macrofagen, B-cellen en epitheelcellen geproduceerd. Perforinen en granzymen zitten in granula van cytotoxische T-cellen; na contact met doelwitcel komen ze vrij; perforinen maken de weg vrij voor granzymen, die apoptose induceren.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 7: Diversiteit */}
      <section id="diversiteit" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <ClipboardCheck className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Diversiteit als basis van verworven immuniteit
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            <strong>Diversiteit</strong> vormt de basis voor de verworven immuniteit: de <strong>receptoren</strong> van B- en T-lymfocyten vertonen een grote mate van diversiteit. Via een <strong>genherschikkingsproces</strong> worden verschillende genen aan elkaar gekoppeld; de antigeenspecifieke receptoren komen pas daarna tot expressie.
          </p>
          
          <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-200">
            <h4 className="font-bold text-indigo-800 mb-2">Gevolg</h4>
            <p className="text-indigo-700 text-sm">
              De receptoren zijn uniek; er zijn dus maar weinig lymfocyten met een bepaalde, specifieke receptor. Dit zorgt ervoor dat de cellen van de verworven immuniteit een grote diversiteit aan micro-organismen kunnen herkennen. Bij herkenning: <strong>klonale selectie</strong> en <strong>expansie</strong> van de specifieke lymfocyt.
            </p>
          </div>
          
          <p>
            De verschillende onderdelen van het immuunsysteem functioneren niet los van elkaar; ze activeren elkaar en zijn nodig voor een effectieve immuunrespons.
          </p>
        </div>
      </section>
    </SummaryLayout>
  )
}

// Blok 4 - LME 4: Introductie mycologie Content
const IntroductieMycologieSummary = () => {
  const tableOfContents = [
    { id: 'introductie', title: 'Wat is mycologie?', icon: Microscope },
    { id: 'basisstructuur', title: 'Basisstructuur van fungi', icon: Layers },
    { id: 'gist-schimmel', title: 'Gist vs schimmel', icon: Target },
    { id: 'pathogenese', title: 'Pathogenese van fungi', icon: Activity },
    { id: 'infecties', title: 'Fungale infecties', icon: Stethoscope },
    { id: 'diagnostiek', title: 'Diagnostiek bij fungale infecties', icon: ClipboardCheck },
  ]

  return (
    <SummaryLayout
      title="Introductie mycologie"
      description="Basisstructuur van fungi, gist vs schimmel, pathogenese, fungale infecties en diagnostiek."
      caseLabel="Casus 1: Algemene introductie"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=introductie-mycologie"
    >
      {/* Section 1: Introductie */}
      <section id="introductie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Microscope className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Wat is mycologie?
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            <strong>Mycologie</strong> is de wetenschap die zich bezighoudt met het bestuderen van fungi. Het woord komt van het Oudgriekse Î¼ÏÎºÎ·Ï‚ (mukÄ“s), dat fungus betekent. <em>Fungus</em> is enkelvoud, <em>fungi</em> meervoud.
          </p>
          
          <p>
            Fungi zijn <strong>eukaryoten</strong> (kernhoudende micro-organismen) en worden gecategoriseerd in het rijk "Fungi". Ze zijn overal aanwezig, voornamelijk in grond en lucht, maar ook in water.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-rose-50 rounded-xl border border-rose-200">
              <h4 className="font-bold text-rose-800 mb-2">Schadelijk</h4>
              <p className="text-rose-700 text-sm">
                Fungi kunnen ziekten veroorzaken bij mensen, dieren en planten.
              </p>
            </div>
            <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200">
              <h4 className="font-bold text-emerald-800 mb-2">Nuttig</h4>
              <p className="text-emerald-700 text-sm">
                Als voedsel (paddenstoelen), bij bereiding van voeding (bier, brood), en bij de ontdekking van antibiotica.
              </p>
            </div>
          </div>
          
          <div className="p-5 bg-blue-50 rounded-xl border-l-4 border-blue-400">
            <h4 className="font-bold text-blue-800 mb-2">Fungi en antibiotica</h4>
            <p className="text-blue-700 text-sm m-0">
              Alexander Fleming ontdekte in 1928 bij toeval penicilline. Zijn kweekplaat met <em>Staphylococcus aureus</em> was gecontamineerd met de schimmel <em>Penicillium notatum</em>. De bacteriÃ«n rondom de schimmel verdwenen; de schimmel produceerde een bacteriedodende stof: penicilline.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 2: Basisstructuur */}
      <section id="basisstructuur" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center">
            <Layers className="w-5 h-5 text-accent-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Basisstructuur van fungi
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Fungi zijn eukaryoten en verschillen fundamenteel van bacteriÃ«n (prokaryoten). Ze hebben een <strong>kern met kernmembraan</strong>, meerdere chromosomen, en organellen zoals mitochondriÃ«n, Golgi-apparaat en endoplasmatisch reticulum. Fungi zijn <strong>groter dan bacteriÃ«n</strong> (meestal &gt;2 Âµm vs 0,1â€“2 Âµm), wat diagnostisch relevant is.
          </p>
          
          <p>
            Fungi kunnen zich <strong>seksueel</strong> (meiose, niet-genetisch identiek) en <strong>aseksueel</strong> (mitose, genetisch identiek) voortplanten. BacteriÃ«n alleen aseksueel. Fungale voortplanting is trager dan bacteriÃ«le.
          </p>
          
          <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-200">
            <h4 className="font-bold text-indigo-800 mb-2">Celwand</h4>
            <p className="text-indigo-700 text-sm mb-2">
              De fungale celwand is stijf en bestaat uit <strong>chitin</strong>, <strong>glucanen</strong> (Î²-1,3-D-glucan, Î²-1,6-D-glucan) en <strong>mannan</strong>. Van binnen naar buiten: celmembraan â†’ chitin â†’ glucanen â†’ mannan.
            </p>
            <p className="text-indigo-700 text-sm m-0">
              Î²-1,3-D-glucan wordt gebruikt voor diagnostiek. Glucaan- en ergosterolsynthese zijn doelwitten voor antifungale therapie.
            </p>
          </div>
          
          <div className="p-5 bg-purple-50 rounded-xl border border-purple-200">
            <h4 className="font-bold text-purple-800 mb-2">Celmembraan</h4>
            <p className="text-purple-700 text-sm m-0">
              De celmembraan is een dubbele fosfolipidenlaag met <strong>sterolen</strong>. Fungi gebruiken <strong>ergosterol</strong> (niet cholesterol zoals bij de meeste eukaryoten). Ergosterolsynthese is een belangrijk doelwit voor antifungale medicatie.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3: Gist vs schimmel */}
      <section id="gist-schimmel" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Gist vs schimmel
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-2">Gist</h4>
              <ul className="space-y-1 text-amber-700 text-sm">
                <li>â€¢ Eencellige fungus</li>
                <li>â€¢ Kolonies: wit, rond, glad</li>
                <li>â€¢ Cellen: rond tot ovaal, groter dan bacterie</li>
                <li>â€¢ Gram: donkerpaars</li>
                <li>â€¢ Voortplanting: <strong>budding</strong> (aseksueel)</li>
                <li>â€¢ Pseudohyfen: dochtercellen blijven vastzitten en verlengen</li>
              </ul>
            </div>
            <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
              <h4 className="font-bold text-teal-800 mb-2">Schimmel</h4>
              <ul className="space-y-1 text-teal-700 text-sm">
                <li>â€¢ Meercellige fungus</li>
                <li>â€¢ <strong>Hyfen</strong>: lange, draadvormige filamenten</li>
                <li>â€¢ <strong>Mycelium</strong>: netwerk van hyfen</li>
                <li>â€¢ Hyfen groeien vanuit de tip</li>
                <li>â€¢ <strong>Septae</strong>: dwarswanden met poriÃ«n (transport)</li>
                <li>â€¢ Voortplanting: aseksueel Ã©n seksueel (sporulatie)</li>
              </ul>
            </div>
          </div>
          
          <div className="p-5 bg-slate-50 rounded-xl border-l-4 border-slate-400">
            <h4 className="font-bold text-slate-800 mb-2">Sporen</h4>
            <p className="text-slate-700 text-sm mb-2">
              Fungi vormen sporen voor voortplanting. <strong>Teleomorf</strong> = seksueel stadium; <strong>anamorf</strong> = aseksueel stadium. In het lab wordt meestal het anamorfe stadium gezien.
            </p>
            <p className="text-slate-700 text-sm m-0">
              Asexuele sporen: <strong>sporangiosporen</strong> (in zak-achtige structuur), <strong>conidia</strong> (op speciale structuren), <strong>arthroconidia/aleurioconidia</strong> (uit hyfen). Sporen komen veel voor in grond en lucht.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4: Pathogenese */}
      <section id="pathogenese" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-rose-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Pathogenese van fungi
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Blootstelling aan fungi is constant (sporen in grond en lucht, commensale gisten op huid/darm). Bescherming: huid, slijmvliezen en immuunsysteem. <strong>Fagocytose</strong> door leukocyten is cruciaal voor opruiming.
          </p>
          
          <div className="p-5 bg-rose-50 rounded-xl border border-rose-200">
            <h4 className="font-bold text-rose-800 mb-2">Ontwijking immuunsysteem</h4>
            <ul className="space-y-2 text-rose-700 text-sm">
              <li><strong>1.</strong> Geen herkenning: celwandantigenen afgeschermd door niet-immunogene componenten</li>
              <li><strong>2.</strong> Ontsnappen aan fagocytose: polysacharidekapsel; massale groei (leukocyt barst); hyfen penetreren membraan; inductie celdood leukocyt</li>
            </ul>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Mycotoxines</h4>
            <p className="text-amber-700 text-sm m-0">
              Fungi kunnen <strong>mycotoxines</strong> produceren. Deze komen vooral van plantenschimmels en worden via besmet voedsel opgenomen (bijv. granen onder slechte omstandigheden).
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 5: Fungale infecties */}
      <section id="infecties" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Fungale infecties (mycosen)
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            De meeste fungi veroorzaken geen mycose bij gezonde personen. Drie hoofdtypen:
          </p>
          
          <div className="space-y-4">
            <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-2">SuperficiÃ«le en cutane infecties</h4>
              <p className="text-blue-700 text-sm mb-2">
                <strong>Superficieel:</strong> keratinelaag huid/haar/nagels; niet-destructief, asymptomatisch; cosmetische zorg (verkleuringen, bijv. pityriasis versicolor).
              </p>
              <p className="text-blue-700 text-sm m-0">
                <strong>Cutaan:</strong> door <strong>dermatophyten</strong> (breken keratin af). Ringworm (tinea): rood, rond, scherp begrensd, centrale clearing, jeuk. Nagels: <strong>onychomycose</strong>.
              </p>
            </div>
            <div className="p-5 bg-purple-50 rounded-xl border border-purple-200">
              <h4 className="font-bold text-purple-800 mb-2">Subcutane infecties</h4>
              <p className="text-purple-700 text-sm m-0">
                Zeldzaam in Nederland; soms bij toeristen/immigranten. Directe inoculatie in dieper weefsel (bijv. gebrek aan goed schoeisel in ontwikkelingslanden).
              </p>
            </div>
            <div className="p-5 bg-rose-50 rounded-xl border border-rose-200">
              <h4 className="font-bold text-rose-800 mb-2">Systemische infecties</h4>
              <p className="text-rose-700 text-sm m-0">
                Ernstig beloop, verhoogde morbiditeit en mortaliteit. In Nederland vooral bij <strong>immuungecompromitteerde</strong> patiÃ«nten of langdurig ziekenhuisopname; risicofactoren: langdurig antibioticagebruik, diabetes mellitus.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 6: Diagnostiek */}
      <section id="diagnostiek" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <ClipboardCheck className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Diagnostiek bij fungale infecties
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            De keuze van diagnostische test hangt af van het ziektebeeld. Vaak wordt een combinatie gebruikt.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Methode</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Toepassing</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">Directe microscopie</td><td className="border border-slate-200 pl-3 py-2">Snel, goedkoop; weinig sensitief, geen determinatie</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Gram-kleuring</td><td className="border border-slate-200 pl-3 py-2">Gisten en schimmels Gram-positief; onderscheid van bacteriÃ«n door morfologie en grootte</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Fluorescerende kleuring (Calcofluor white)</td><td className="border border-slate-200 pl-3 py-2">Bindt aan cellulose/chitin; fungi lichten op onder UV</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">KOH-kleuring</td><td className="border border-slate-200 pl-3 py-2">Huid, haar, nagels; lost keratine op, fungi blijven zichtbaar; huisarts kan zelf doen</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Oost-Indische inkt</td><td className="border border-slate-200 pl-3 py-2">Verdenking cryptokokken; hersenvocht; dik polysacharidekapsel â†’ heldere halo rond gist</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Kweek</td><td className="border border-slate-200 pl-3 py-2">Determinatie en gevoeligheidsbepaling; speciale platen met antibiotica (bacteriÃ«n groeien sneller)</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Serologie / moleculaire diagnostiek</td><td className="border border-slate-200 pl-3 py-2">Snellere diagnose; gericht op celwandcomponenten (glucan, galactomannan bij Aspergillus)</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Histopathologie / beeldvorming</td><td className="border border-slate-200 pl-3 py-2">Biopt bij subcutane/systemische infecties; CT voor extent en follow-up</td></tr>
              </tbody>
            </table>
          </div>
          
          <div className="p-5 bg-primary-50 rounded-xl border-l-4 border-primary-400">
            <h4 className="font-bold text-primary-800 mb-2">Snelle diagnose cutane infectie</h4>
            <p className="text-primary-700 text-sm m-0">
              Bij verdenking op cutane fungale infectie (ringworm): <strong>directe microscopie</strong> van schilfers is de snelste methode. Sommige huisartsen doen zelf een KOH-preparaat. Kweek en PCR zijn trager of duurder; dermatophyten groeien langzaam in kweek.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

// Blok 4 - LME 5: Introductie parasitologie Content
const IntroductieParasitologieSummary = () => {
  const tableOfContents = [
    { id: 'wat-zijn-parasieten', title: 'Wat zijn parasieten?', icon: Microscope },
    { id: 'classificatie', title: 'Classificatie van parasieten', icon: Layers },
    { id: 'ontwikkelingscyclus', title: 'Directe en indirecte ontwikkelingscyclus', icon: Activity },
    { id: 'rondwormen-platwormen', title: 'Rondwormen en platwormen', icon: Target },
    { id: 'malaria', title: 'Malaria als voorbeeld', icon: Stethoscope },
    { id: 'spoelwormen', title: 'Spoelwormen als voorbeeld', icon: Dna },
    { id: 'diagnostiek', title: 'Diagnostiek', icon: ClipboardCheck },
    { id: 'bijzondere-ziekteverwekkers', title: 'Bijzondere ziekteverwekkers', icon: Brain },
  ]

  return (
    <SummaryLayout
      title="Introductie parasitologie"
      description="Definitie en classificatie van parasieten, malaria, spoelwormen, levenscycli en diagnostiek."
      caseLabel="Casus 1: Algemene introductie"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=introductie-parasitologie"
    >
      {/* Section 1: Wat zijn parasieten */}
      <section id="wat-zijn-parasieten" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Microscope className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Wat zijn parasieten?
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Ziekteverwekkende micro-organismen kunnen op basis van hun structurele kenmerken in <strong>vier hoofdgroepen</strong> worden ingedeeld: virussen, bacteriÃ«n, schimmels en parasieten.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Categorie</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Kenmerk</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">Virussen</td><td className="border border-slate-200 pl-3 py-2">Voor vermeerdering geheel afhankelijk van levende cellen</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">BacteriÃ«n</td><td className="border border-slate-200 pl-3 py-2">Eencellige prokaryote organismen</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Schimmels</td><td className="border border-slate-200 pl-3 py-2">Eukaryote ziekteverwekkers, met name schadelijk bij verstoorde afweer</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Parasieten</td><td className="border border-slate-200 pl-3 py-2">Eukaryote ziekteverwekkers met meerdere ontwikkelingsstadia</td></tr>
              </tbody>
            </table>
          </div>
          
          <p>
            Parasieten zijn <strong>complexe ziekteverwekkers</strong> (eukaryoot) met verschillende ontwikkelingsstadia en verschijningsvormen die optimaal aan hun omgeving zijn aangepast.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 2: Classificatie */}
      <section id="classificatie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center">
            <Layers className="w-5 h-5 text-accent-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Classificatie van parasieten
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Parasieten kunnen op verschillende manieren worden onderverdeeld:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-2">Ectoparasiet vs endoparasiet</h4>
              <ul className="space-y-1 text-blue-700 text-sm">
                <li><strong>Ectoparasiet:</strong> geleedpotig organisme (spinachtige of insect)</li>
                <li><strong>Endoparasiet:</strong> eencellige parasiet of parasitaire worm</li>
              </ul>
            </div>
            <div className="p-5 bg-purple-50 rounded-xl border border-purple-200">
              <h4 className="font-bold text-purple-800 mb-2">Eencellig vs meercellig</h4>
              <p className="text-purple-700 text-sm mb-2">
                Meercellige parasieten: <strong>rondwormen</strong> (bilateraal symmetrisch) en <strong>platwormen</strong> (lintworm of zuigworm).
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3: Ontwikkelingscyclus */}
      <section id="ontwikkelingscyclus" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Directe en indirecte ontwikkelingscyclus
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-2">Directe cyclus</h4>
              <p className="text-amber-700 text-sm">
                De parasiet heeft maar <strong>1 gastheersoort</strong> nodig. Voorbeeld: <em>Giardia lamblia</em> (mens); veroorzaakt chronische diarree; transmissie via besmet water, voedsel of handen.
              </p>
            </div>
            <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
              <h4 className="font-bold text-teal-800 mb-2">Indirecte cyclus</h4>
              <p className="text-teal-700 text-sm">
                De parasiet heeft <strong>minimaal 2 gastheersoorten</strong> nodig. Voorbeeld: runderlintworm (<em>Taenia saginata</em>) â€“ rund en mens.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4: Rondwormen en platwormen */}
      <section id="rondwormen-platwormen" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Rondwormen en platwormen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-2">Rondwormen (nematoden)</h4>
              <ul className="space-y-1 text-blue-700 text-sm">
                <li>â€¢ Geslachtelijk (mannelijke en vrouwelijke wormen)</li>
                <li>â€¢ Meestal directe ontwikkelingscyclus (1 gastheer, bijv. Ascaris)</li>
                <li>â€¢ Bilateraal symmetrisch</li>
              </ul>
            </div>
            <div className="p-5 bg-purple-50 rounded-xl border border-purple-200">
              <h4 className="font-bold text-purple-800 mb-2">Platwormen (platyhelminthen)</h4>
              <ul className="space-y-1 text-purple-700 text-sm">
                <li>â€¢ Hermafrodiet (tweeslachtelijk)</li>
                <li>â€¢ Indirecte ontwikkelingscyclus (2+ gastheren, bijv. runderlintworm)</li>
              </ul>
            </div>
          </div>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2">Verwantschap en behandeling</h4>
            <p className="text-rose-700 text-sm m-0">
              Rond- en platwormen zijn evolutionair <strong>niet verwant</strong>. Rondwormen zijn nauwer verwant aan geleedpotigen (ectoparasieten) dan aan platwormen. Breedspectrum medicatie tegen rondwormen werkt meestal niet tegen platwormen en vice versa.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 5: Malaria */}
      <section id="malaria" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-rose-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Malaria als voorbeeld van parasitaire protozoa
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            <strong>Parasitaire protozoa</strong> zijn eencellige eukaryote organismen die leven ten koste van hun gastheer. <em>Plasmodium</em>-soorten veroorzaken malaria.
          </p>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Verspreiding</h4>
            <p className="text-amber-700 text-sm mb-2">
              Tropische malaria (<em>Plasmodium falciparum</em>) komt voor in tropische en subtropische gebieden. <strong>Vectoren</strong> (zoals de mug bij malaria) zijn bepalend voor het verspreidingsgebied: zonder vector geen transmissie.
            </p>
            <p className="text-amber-700 text-sm m-0">
              Tropische malaria komt niet voor in Nederland omdat de geschikte muggensoort hier ontbreekt. Malaria tertiana (<em>P. vivax</em>) kwam vroeger wel voor; Nederland is nu malariavrij door effectieve behandeling, maar herintroductie is mogelijk (muggen komen nog voor).
            </p>
          </div>
          
          <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-200">
            <h4 className="font-bold text-indigo-800 mb-2">Afweer en immuniteit</h4>
            <p className="text-indigo-700 text-sm m-0">
              Verworven afweer tegen <em>Plasmodium falciparum</em> resulteert <strong>niet</strong> in steriele immuniteit. Mensen kunnen herhaaldelijk malaria ontwikkelen. Oorzaak: <em>Plasmodium</em> vermenigvuldigt zich via <strong>seksuele voortplanting</strong> â†’ extreme variatie tussen individuele parasieten â†’ veel infecties nodig voordat afweer ziektelast beperkt.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 6: Spoelwormen */}
      <section id="spoelwormen" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Dna className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Spoelwormen als voorbeeld van parasitaire worm
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Parasitaire wormen zijn <strong>meercellige eukaryote</strong> organismen die leven ten koste van hun gastheer. <em>Ascaris</em> veroorzaakt <strong>ascariasis</strong>.
          </p>
          
          <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-2">Transmissie</h4>
            <p className="text-blue-700 text-sm mb-2">
              <strong>Faeco-orale transmissie:</strong> orale inname van infectieuze Ascaris-eieren uit ontlasting van geÃ¯nfecteerde personen.
            </p>
            <p className="text-blue-700 text-sm m-0">
              Hoog endemisch: sloppenwijken, platteland in lage-inkomenslanden, gebrek aan riolering en veilig drinkwater. Laag endemisch: goede hygiÃ«ne (Nederland). Parasitaire infecties kwamen in Nederland vÃ³Ã³r riolering veel voor.
            </p>
          </div>
          
          <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200">
            <h4 className="font-bold text-emerald-800 mb-2">Succesvolle verspreiding</h4>
            <p className="text-emerald-700 text-sm mb-2">
              Wormen produceren <strong>zeer veel eieren</strong> (Ascaris ~200.000/dag). Chronische infecties: parasiet blijft lang aanwezig. Evolutie: parasiet veroorzaakt zo weinig mogelijk schade â€“ <em>een goede parasiet doodt zijn gastheer niet</em>.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 7: Diagnostiek */}
      <section id="diagnostiek" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <ClipboardCheck className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Diagnostiek naar parasitaire infecties
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200">
              <h4 className="font-bold text-emerald-800 mb-2">Relevant</h4>
              <ul className="space-y-1 text-emerald-700 text-sm">
                <li>â€¢ Microscopisch onderzoek (parasieten zijn relatief groot)</li>
                <li>â€¢ Serologie (antilichamen tegen parasiet)</li>
                <li>â€¢ PCR / DNA-detectie</li>
              </ul>
            </div>
            <div className="p-5 bg-rose-50 rounded-xl border border-rose-200">
              <h4 className="font-bold text-rose-800 mb-2">Minder relevant</h4>
              <p className="text-rose-700 text-sm m-0">
                <strong>Kweek:</strong> parasieten zijn over het algemeen heel moeilijk te kweken (in tegenstelling tot bacteriÃ«n en schimmels).
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 8: Bijzondere ziekteverwekkers */}
      <section id="bijzondere-ziekteverwekkers" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center">
            <Brain className="w-5 h-5 text-accent-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Wat maakt parasieten tot bijzondere ziekteverwekkers?
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <ul className="space-y-3">
            <li><strong>Diverse groep:</strong> protozoa, wormen (helminthen), geleedpotigen</li>
            <li><strong>Diverse transmissie:</strong> verschillende manieren van infectie</li>
            <li><strong>Complexe ontwikkelingscyclus:</strong> desondanks zeer succesvol</li>
            <li><strong>Veel ontwikkelingsstadia:</strong> speciale adaptaties per omgeving</li>
            <li><strong>Vaak chronische infecties</strong> (met name worminfecties): lange overlevingsduur in gastheer</li>
          </ul>
          
          <div className="p-5 bg-primary-50 rounded-xl border-l-4 border-primary-400">
            <h4 className="font-bold text-primary-800 mb-2">Take home message</h4>
            <p className="text-primary-700 text-sm m-0">
              Parasitaire infecties met faeco-orale transmissie kunnen met goede hygiÃ«ne (riolering, veilig drinkwater) worden voorkomen. ControlestrategieÃ«n zijn ondanks effectieve medicijnen vaak niet erg succesvol door gebrek aan infrastructuur in tropische gebieden.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

// Blok 4 - LME 6: Introductie virologie â€“ deel 1 Content
const IntroductieVirologieSummary = () => {
  const tableOfContents = [
    { id: 'wat-is-virus', title: 'Wat is een virus?', icon: Microscope },
    { id: 'structuur', title: 'Virusstructuur en classificatie', icon: Layers },
    { id: 'replicatie', title: 'De 6 stappen van virale replicatie', icon: Activity },
    { id: 'baltimore', title: 'Baltimore-classificatie', icon: Target },
    { id: 'evolutie', title: 'Virus evolutie', icon: Dna },
    { id: 'diagnostiek', title: 'Diagnostische testen', icon: ClipboardCheck },
  ]

  return (
    <SummaryLayout
      title="Introductie virologie â€“ deel 1"
      description="Virusstructuur, replicatiecyclus, Baltimore-classificatie, evolutie en diagnostiek."
      caseLabel="Casus 1: Algemene introductie"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=introductie-virologie"
    >
      {/* Section 1: Wat is een virus */}
      <section id="wat-is-virus" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Microscope className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Wat is een virus?
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Een virus is <strong>heel klein</strong> (~100 nm vs bacterie ~5 Âµm vs eukaryoot ~50 Âµm). Voor zichtbaar maken is een <strong>elektronenmicroscoop</strong> nodig; bacteriÃ«n zijn nog onder de lichtmicroscoop te zien.
          </p>
          
          <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-2">Het principe</h4>
            <p className="text-blue-700 text-sm m-0">
              Een virus kan een levende cel binnendringen, vermenigvuldigen en vrijkomen als nieuw infectieus partikel. Een virus heeft een <strong>gastheercel nodig</strong> om te repliceren en is dus geen levend micro-organisme, maar een <strong>obligaat intracellulaire moleculaire parasiet</strong>.
            </p>
          </div>
          
          <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-200">
            <h4 className="font-bold text-indigo-800 mb-2">Basiscomponenten</h4>
            <p className="text-indigo-700 text-sm mb-2">
              Een virus bestaat uit een <strong>genoom</strong> en een eiwit<strong>capside</strong>, soms een <strong>envelop</strong>. Het genoom kan DNA of RNA zijn (enkel- of dubbelstrengs). De envelop is een lipide membraan â†’ virussen met envelop zijn <strong>minder stabiel</strong> dan naakte virussen.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 2: Virusstructuur en classificatie */}
      <section id="structuur" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center">
            <Layers className="w-5 h-5 text-accent-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Virusstructuur en classificatie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Virussen worden ingedeeld op basis van: <strong>soort genoom</strong>, <strong>structuur van het capside</strong>, <strong>wel/niet lipide-envelop</strong>.
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-2">Genoom</h4>
              <p className="text-amber-700 text-sm mb-2">
                DNA of RNA; enkel- of dubbelstrengs. RNA(+): kan direct als mRNA functioneren; RNA(-): moet eerst omgezet worden. Genoom kan lineair, gesegmenteerd of circulair zijn.
              </p>
            </div>
            <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
              <h4 className="font-bold text-teal-800 mb-2">Capside</h4>
              <p className="text-teal-700 text-sm mb-2">
                Eiwitmantel die genetisch materiaal omgeeft en beschermt. Structuren: <strong>icosaÃ«der</strong> (twintigvlak), <strong>helisch</strong> (schroefdraad), <strong>pleomorf</strong> (onregelmatig).
              </p>
            </div>
            <div className="p-5 bg-purple-50 rounded-xl border border-purple-200">
              <h4 className="font-bold text-purple-800 mb-2">Envelop</h4>
              <p className="text-purple-700 text-sm mb-2">
                Lipide membraan grotendeels van gastheercel (cytoplasmamembraan, ER); bevat virus-gecodeerde glycoproteÃ¯nen. Naakt virus = geen envelop; bindingsplaats op capside.
              </p>
            </div>
          </div>
          
          <div className="p-5 bg-slate-50 rounded-xl border-l-4 border-slate-400">
            <h4 className="font-bold text-slate-800 mb-2">ICTV-classificatie</h4>
            <p className="text-slate-700 text-sm m-0">
              HiÃ«rarchisch: Familie (-viridae), Geslacht (genus), Soort (species). Voorbeeld Herpesviridae: subfamilie Alphaherpesvirinae, genus simplexvirus, species <em>Herpes simplex virus type 2</em>.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3: De 6 stappen van virale replicatie */}
      <section id="replicatie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            De 6 stappen van virale replicatie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Stap</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Beschrijving</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">1. Aanhechting</td><td className="border border-slate-200 pl-3 py-2">Virion hecht aan receptor; adhesine (capside-eiwit of glycoproteÃ¯ne) bindt aan specifieke receptor; bepaalt tropisme</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">2. Penetratie</td><td className="border border-slate-200 pl-3 py-2">Envelop: membraanfusie; naakt: translocatie door membraan</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">3. Ontmanteling</td><td className="border border-slate-200 pl-3 py-2">Capside wordt verwijderd; vaak in cytoplasma of fagolysosoom; sommige DNA-virussen pas in kern</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">4. Replicatie</td><td className="border border-slate-200 pl-3 py-2">Productie viraal mRNA, capside-eiwitten en nucleÃ¯nezuur; wijze verschilt per genoomtype</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">5. Assemblage</td><td className="border border-slate-200 pl-3 py-2">Genoom omgeven door capside</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">6. Vrijkomen</td><td className="border border-slate-200 pl-3 py-2">Lysis (cel barst, vaak naakte virussen), budding (envelop van membraan), of cel-naar-cel</td></tr>
              </tbody>
            </table>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Voorbeeld: SARS-CoV-2</h4>
            <p className="text-amber-700 text-sm m-0">
              Spike-eiwit bindt aan ACE2-receptor. Hulp-eiwitten <strong>TMPRSS2</strong> en <strong>furine</strong> zijn nodig voor modificatie en goede binding. Tropisme bepaald door aanwezigheid receptor Ã©n andere gastheereiwitten.
            </p>
          </div>
          
          <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-2">Replicatielocatie</h4>
            <p className="text-blue-700 text-sm mb-2">
              DNA-virussen: meestal in celkern. RNA-virussen: meestal in cytoplasma. Uitzonderingen: Poxviridae (DNA in cytoplasma); Orthomyxoviridae/influenza (RNA deels in kern, o.a. voor CAP-snatching).
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4: Baltimore-classificatie */}
      <section id="baltimore" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Baltimore-classificatie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            David Baltimore ontwikkelde een classificatie op basis van <strong>hoe mRNA wordt geproduceerd</strong> tijdens de replicatiecyclus.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Groep</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Genoom</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Voorbeeld</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">I</td><td className="border border-slate-200 pl-3 py-2">dsDNA</td><td className="border border-slate-200 pl-3 py-2">Cytomegalovirus</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">II</td><td className="border border-slate-200 pl-3 py-2">ssDNA</td><td className="border border-slate-200 pl-3 py-2">ParvoB19</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">III</td><td className="border border-slate-200 pl-3 py-2">dsRNA</td><td className="border border-slate-200 pl-3 py-2">Rotavirus</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">IV</td><td className="border border-slate-200 pl-3 py-2">ssRNA (+)</td><td className="border border-slate-200 pl-3 py-2">SARS-CoV-2, enterovirus</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">V</td><td className="border border-slate-200 pl-3 py-2">ssRNA (-)</td><td className="border border-slate-200 pl-3 py-2">Influenza A</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">VI</td><td className="border border-slate-200 pl-3 py-2">ssRNA + reverse transcriptase</td><td className="border border-slate-200 pl-3 py-2">HIV</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">VII</td><td className="border border-slate-200 pl-3 py-2">dsDNA + reverse transcriptase</td><td className="border border-slate-200 pl-3 py-2">Hepatitis B</td></tr>
              </tbody>
            </table>
          </div>
          
          <div className="p-5 bg-primary-50 rounded-xl border-l-4 border-primary-400">
            <h4 className="font-bold text-primary-800 mb-2">Receptor-voorbeelden</h4>
            <p className="text-primary-700 text-sm m-0">
              Influenza A (hemagglutinine) â†’ siaalzuurresiduen; HIV-1 (gp120) â†’ CD4; Poliovirus (capside) â†’ CD155. Lever: Hepatitis A/B/C/E. Luchtwegen: RSV, Influenza A/B, SARS-CoV-2.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 5: Virus evolutie */}
      <section id="evolutie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
            <Dna className="w-5 h-5 text-rose-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Virus evolutie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Spontane mutaties treden op tijdens replicatie. <strong>RNA-virussen</strong> hebben meestal een <strong>hogere mutatiefrequentie</strong> dan DNA-virussen: DNA-replicatie heeft vaak een proofreading-mechanisme; RNA-virussen meestal niet. Uitzondering: <strong>coronavirussen</strong> hebben wel proofreading â†’ relatief groot RNA-genoom.
          </p>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Gevolgen van mutaties</h4>
            <ul className="space-y-1 text-amber-700 text-sm">
              <li>â€¢ Stopcodon â†’ incomplete eiwitten, gevolgen voor replicatie</li>
              <li>â€¢ <strong>Attenuatie</strong>: verzwakking pathogeniciteit; gebruikt voor verzwakte vaccins</li>
              <li>â€¢ Mutatie in actieve site enzym â†’ antivirale resistentie</li>
              <li>â€¢ Ontsnapping aan immuunrespons (antilichamen herkennen virus niet meer)</li>
            </ul>
          </div>
          
          <div className="p-5 bg-purple-50 rounded-xl border border-purple-200">
            <h4 className="font-bold text-purple-800 mb-2">Typen mutaties</h4>
            <ul className="space-y-1 text-purple-700 text-sm">
              <li>â€¢ <strong>Antigene drift</strong>: puntmutaties, deleties, inserties</li>
              <li>â€¢ <strong>Recombinatie</strong>: uitwisseling tussen virale genomen (bijv. flavivirussen)</li>
              <li>â€¢ <strong>Antigene shift</strong>: reassortering bij gesegmenteerd genoom (influenza â†’ pandemieÃ«n)</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 6: Diagnostische testen */}
      <section id="diagnostiek" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <ClipboardCheck className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Diagnostische testen in de virologie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Twee groepen: <strong>directe</strong> (detectie virusonderdeel) en <strong>indirecte</strong> (detectie immuunrespons gastheer) testen.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-2">Directe test</h4>
              <ul className="space-y-1 text-blue-700 text-sm">
                <li>â€¢ Visualisatie viruspartikel</li>
                <li>â€¢ Virusgenoom-detectie (PCR)</li>
                <li>â€¢ Virusreplicatie (kweek)</li>
                <li>â€¢ Virus eiwit/antigeen-detectie (immuno-assay)</li>
              </ul>
              <p className="text-blue-600 text-xs mt-2">Routine: immuno-assay antigen, PCR. Niet routine: elektronenmicroscopie, virale kweek.</p>
            </div>
            <div className="p-5 bg-purple-50 rounded-xl border border-purple-200">
              <h4 className="font-bold text-purple-800 mb-2">Indirecte test</h4>
              <p className="text-purple-700 text-sm">
                Detectie immuunrespons: <strong>serologische testen</strong> voor virus-specifieke antilichamen (IgM, IgG). Immuno-assay.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

// Blok 4 - LME 7: Voorbereiding VOW Microbiologie Content
const VoorbereidingVOWMicrobiologieSummary = () => {
  const tableOfContents = [
    { id: 'laboratorium', title: 'Laboratorium MMIZ', icon: Microscope },
    { id: 'huisregels', title: 'Huisregels en laboratoriumzaal', icon: Shield },
    { id: 'microscoop', title: 'Werking microscoop', icon: Activity },
    { id: 'directe-preparaten', title: 'Directe preparaten van bacteriÃ«n', icon: Layers },
    { id: 'gramkleuring', title: 'Gramkleuring', icon: Target },
    { id: 'bacteriele-kweek', title: 'BacteriÃ«le kweek', icon: Stethoscope },
  ]

  return (
    <SummaryLayout
      title="Voorbereiding VOW Microbiologie"
      description="Veilig werken in het lab, microscoop, Gram-kleuring en bacteriÃ«le kweek voor het vaardigheidsonderwijs."
      caseLabel="Casus 1: Algemene introductie"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=voorbereiding-vow-microbiologie"
    >
      {/* Section 1: Laboratorium MMIZ */}
      <section id="laboratorium" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Microscope className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Laboratorium Medische Microbiologie & Infectieziekten
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Op het laboratorium van de afdeling Medische Microbiologie en Infectieziekten (MMIZ) worden analyses gedaan op materialen van patiÃ«nten.
          </p>
          
          <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-2">Materialen</h4>
            <p className="text-blue-700 text-sm mb-2">
              Bloed, urine, faeces (ontlasting), liquor (hersenvloeistof) en andere patiÃ«ntmaterialen.
            </p>
          </div>
          
          <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-200">
            <h4 className="font-bold text-indigo-800 mb-2">Methoden en pathogenen</h4>
            <p className="text-indigo-700 text-sm m-0">
              Door microscopie, kweken en andere (innovatieve) methoden wordt vastgesteld of er sprake is van een infectie met <strong>bacteriÃ«n</strong>, <strong>gisten</strong>, <strong>schimmels</strong> of <strong>parasieten</strong>.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 2: Huisregels en laboratoriumzaal */}
      <section id="huisregels" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 text-accent-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Huisregels en laboratoriumzaal EE-1732
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Het vaardigheidsonderwijs (VOW) vindt plaats in <strong>laboratoriumzaal EE-1732</strong> (17e verdieping EE-gebouw), omdat grote groepen niet in het diagnostisch laboratorium kunnen worden onderwezen. De zaal ligt in een gebied met veel wetenschappelijk onderzoek; onderzoeklaboratoria en kantoren zijn in de directe omgeving.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-2">Verzoeken aan studenten</h4>
              <ul className="space-y-1 text-amber-700 text-sm">
                <li>â€¢ Jassen en tassen in kluisjes in het onderwijscentrum <em>vÃ³Ã³r</em> het EE-gebouw</li>
                <li>â€¢ Zacht spreken in hal en gangen</li>
                <li>â€¢ Niet onnodig lang blijven; direct na het VOW vertrekken</li>
                <li>â€¢ Medewerkers voorrang geven in liften</li>
              </ul>
            </div>
            <div className="p-5 bg-rose-50 rounded-xl border border-rose-200">
              <h4 className="font-bold text-rose-800 mb-2">Niet toegestaan</h4>
              <ul className="space-y-1 text-rose-700 text-sm">
                <li>â€¢ Andere ruimtes op EE-17 betreden (behalve toiletten)</li>
                <li>â€¢ Koffieautomaten op EE-17 gebruiken</li>
              </ul>
            </div>
          </div>
          
          <div className="p-5 bg-slate-50 rounded-xl border-l-4 border-slate-400">
            <h4 className="font-bold text-slate-800 mb-2">Waarom huisregels?</h4>
            <p className="text-slate-700 text-sm mb-2">
              Tijdens VOW Casus 1 en 6 werk je met <strong>levende micro-organismen</strong>, soms in grote hoeveelheden. Door optimale groeiomstandigheden worden bacteriÃ«n met het blote oog zichtbaar: een <strong>kolonie (KVE)</strong> bevat na 24 uur tot miljoenen bacteriÃ«n. Netjes werken en veiligheidsvoorschriften zijn noodzakelijk.
            </p>
            <p className="text-slate-700 text-sm m-0">
              Regels: geen mobiele telefoons/foto's, handen wassen, handschoenen dragen, oogbescherming.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3: Werking microscoop */}
      <section id="microscoop" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Werking van de microscoop
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Belangrijke onderdelen: oculairs, preparaathouder, grof en fijn scherpstelling, aan-uitschakelaar, kruistafel bediening, LED-licht, condensor met diafragma, objectief revolver, lichtintensiteit regeling.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Stap</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Instructie</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">1</td><td className="border border-slate-200 pl-3 py-2">Microscoop aanzetten; kruistafel volledig verlagen met grof scherpstelling</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">2</td><td className="border border-slate-200 pl-3 py-2">Preparaat onder de preparaathouder vastzetten â€“ <strong>niet ondersteboven!</strong></td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">3</td><td className="border border-slate-200 pl-3 py-2">Beginnen met laagste vergroting (10Ã— objectief)</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">4</td><td className="border border-slate-200 pl-3 py-2">Met beide ogen door oculairs kijken; kruistafel langzaam omhoog tot scherp beeld</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">5</td><td className="border border-slate-200 pl-3 py-2">Voor hoogste vergroting: <strong>eerst druppel olie</strong> op preparaat</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">6</td><td className="border border-slate-200 pl-3 py-2">Fijn scherpstellen; na gebruik: kruistafel verlagen, kleinste lens, preparaat verwijderen, olie afnemen, uitzetten</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4: Directe preparaten */}
      <section id="directe-preparaten" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Layers className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Directe preparaten van bacteriÃ«n
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            BacteriÃ«n zijn <strong>1â€“10 Âµm</strong> groot â€“ te klein voor het blote oog, maar <strong>zichtbaar met de lichtmicroscoop</strong> (in tegenstelling tot virussen). Preparaten worden gemaakt van direct patiÃ«ntmateriaal wanneer een hoog aantal bacteriÃ«n wordt verwacht.
          </p>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Voorbeelden</h4>
            <p className="text-amber-700 text-sm m-0">
              Sputum bij luchtweginfectie; liquor bij meningitis. Zonder kleuring is niets zichtbaar â€“ een <strong>kleurmethode</strong> is nodig. De <strong>Gram-kleuring</strong> (Hans Christian Gram, eind 19e eeuw) is de belangrijkste methode.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 5: Gramkleuring */}
      <section id="gramkleuring" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Gramkleuring
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            De Gramkleuring is gebaseerd op het verschil in <strong>celwandstructuur</strong>. Grampositieve bacteriÃ«n kleuren <strong>paars</strong>; gramnegatieve bacteriÃ«n kleuren <strong>roze</strong>.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-purple-50 rounded-xl border border-purple-200">
              <h4 className="font-bold text-purple-800 mb-2">Grampositief</h4>
              <p className="text-purple-700 text-sm mb-2">
                Dikke peptidoglycaanlaag aan de buitenzijde. Na kristalviolet + lugol ondoorlaatbaar voor ethanol â†’ behoudt paarse kleur.
              </p>
            </div>
            <div className="p-5 bg-pink-50 rounded-xl border border-pink-200">
              <h4 className="font-bold text-pink-800 mb-2">Gramnegatief</h4>
              <p className="text-pink-700 text-sm mb-2">
                Dunne peptidoglycaanlaag + buitenmembraan. Ontkleurt met ethanol; nakleuring met fuchsine â†’ roze.
              </p>
            </div>
          </div>
          
          <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-2">Vorm en ligging</h4>
            <p className="text-blue-700 text-sm mb-2">
              Gramkleuring toont ook <strong>vorm</strong> (staven, korte staven, kokken) en <strong>ligging</strong> (trossen, ketens, diplokokken, willekeurig) â€“ belangrijk voor vroege bepaling.
            </p>
            <p className="text-blue-700 text-sm m-0">
              Voorbeelden: <em>Staphylococcus aureus</em> (Gram+ kokken, trossen); <em>Streptococcus pyogenes</em> (Gram+ kokken, ketens); <em>Clostridium difficile</em> (Gram+ staven); <em>Neisseria</em> (Gramâˆ’ diplokokken); <em>E. coli</em> (Gramâˆ’ staven).
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Reagens</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Volgorde</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">Kristalviolet</td><td className="border border-slate-200 pl-3 py-2">1</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Lugol</td><td className="border border-slate-200 pl-3 py-2">2</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Ethanol 96%</td><td className="border border-slate-200 pl-3 py-2">3 (ontkleuring)</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Fuchsine</td><td className="border border-slate-200 pl-3 py-2">4 (nakleuring)</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 6: BacteriÃ«le kweek */}
      <section id="bacteriele-kweek" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-rose-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            BacteriÃ«le kweek
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Het kweken van bacteriÃ«n heeft als doel ze te vermenigvuldigen tot er genoeg zijn om ze zichtbaar te maken en microbiologische testen uit te voeren. Het laboratorium creÃ«ert ideale omstandigheden met speciale voedingsbodems.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-2">Media</h4>
              <ul className="space-y-1 text-amber-700 text-sm">
                <li>â€¢ <strong>Vast:</strong> agarplaten (petrischaal met gelei-achtige substantie)</li>
                <li>â€¢ <strong>Vloeibaar:</strong> bloedkweekflesjes</li>
                <li>â€¢ Bloedagar, chocoladeagar (electief); selectieve agars (remmen commensalen)</li>
              </ul>
            </div>
            <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
              <h4 className="font-bold text-teal-800 mb-2">Mengcultuur</h4>
              <p className="text-teal-700 text-sm">
                Naast pathogenen wordt ook commensale flora gekweekt. Bij een infectie zijn pathogenen meestal overheersend. De verhouding commensalen/pathogenen zegt iets over de relevantie.
              </p>
            </div>
          </div>
          
          <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-2">Praktische aspecten</h4>
            <ul className="space-y-1 text-blue-700 text-sm">
              <li>â€¢ <strong>Optimale temperatuur:</strong> ~35Â°C (lichaamstemperatuur; pathogene bacteriÃ«n gedijen hier)</li>
              <li>â€¢ <strong>Duur:</strong> meeste pathogenen 2â€“5 dagen; <em>M. tuberculosis</em> uitzondering: speciaal medium, 6 weken</li>
              <li>â€¢ Na 12â€“18 uur: koloniemorfologie voor identificatie</li>
              <li>â€¢ <strong>Gevoeligheid:</strong> eerst reincultuur uit mengcultuur; 12â€“18 uur incubatie; daarna antibiogram (nog 12â€“18 uur)</li>
            </ul>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}


export { AangeborenImmuniteitHerkenningSummary, IntroductieBacteriologieSummary, IntroductieImmunologieSummary, IntroductieMycologieSummary, IntroductieParasitologieSummary, IntroductieVirologieSummary, VoorbereidingVOWMicrobiologieSummary }
