import SummaryLayout from '../../components/SummaryLayout'
import { 
  FileText, Home, BookOpen, Clock, ChevronUp, ChevronDown, ChevronRight,
  Brain, Bone, Hand, Activity, GraduationCap, Calendar, Stethoscope,
  ClipboardCheck, Layers, Target, Droplets, ArrowRight, ArrowLeft, Baby, Dna, Shield, Microscope,
  Users, BarChart3
} from 'lucide-react'
const ViraleDiagnostiekSummary = () => {
  const tableOfContents = [
    { id: 'aanvraag', title: 'Aanvraag en afname materiaal', icon: ClipboardCheck },
    { id: 'serologie', title: 'Serologische diagnostiek', icon: Target },
    { id: 'moleculair', title: 'Moleculaire diagnostiek', icon: Microscope },
    { id: 'samenvatting', title: 'Samenvatting', icon: Layers },
  ]

  return (
    <SummaryLayout
      title="Virale diagnostiek"
      description="Aanvraag, monsterafname, serologie en moleculaire technieken voor virale diagnostiek."
      caseLabel="Casus 3: Kind met RS-virus"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=virale-diagnostiek"
    >
      {/* Section 1: Aanvraag en afname materiaal */}
      <section id="aanvraag" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <ClipboardCheck className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Aanvraag en afname materiaal
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Voor een juiste virale diagnose: kies de juiste test, neem het juiste materiaal af en stuur het onder de juiste condities naar het lab. Het aanvraagformulier moet volledig ingevuld zijn; per materiaalsoort een aparte aanvraag.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">PatiÃ«ntidentificatie en klinische gegevens</h4>
            <p className="text-primary-700 text-sm mb-2">
              <strong>Verplicht:</strong> naam, geboortedatum, patiÃ«ntnummer op zowel aanvraag als materiaal. Aanvragergegevens voor terugkoppeling en contact door arts-microbioloog.
            </p>
            <p className="text-primary-700 text-sm m-0">
              <strong>Klinische gegevens:</strong> symptomen sinds (datum), vaccinatiestatus, reisanamnese/epidemiologie, (antivirale) therapie, differentiaaldiagnose/gewenst onderzoek.
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Afnamedatum</h4>
            <p className="text-teal-700 text-sm m-0">
              Correct registreren voor juiste weergave in uitslag en volgorde van vervolgmonsters. Relatie afnamedatumâ€“ziekteduur bepaalt betrouwbaarheid en interpretatie. Suboptimale bewaarcondities kunnen kwaliteit aantasten.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Materiaalsoort</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Opmerkingen</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Bloed/serum</strong></td><td className="border border-slate-200 pl-3 py-2">Stolbloed (geel); EDTA (paars); Heparine (groen) â€“ <strong>niet voor PCR/NAAT</strong> (heparine remt PCR â†’ fout-negatief)</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Uitstrijken</strong></td><td className="border border-slate-200 pl-3 py-2">VTM/UTM (virus transport medium); borsteltje; vermeld locatie (bijv. "blaasje linker schouder")</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Respiratoir</strong></td><td className="border border-slate-200 pl-3 py-2">Nasofarynxuitstrijk, keeluitstrijk, BAL (gespecialiseerd personeel), sputum (echt sputum, geen speeksel)</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Faeces</strong></td><td className="border border-slate-200 pl-3 py-2">2â€“5 g/ml in steriel potje; indicaties: diarree, acute slappe verlamming, myocarditis</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Liquor</strong></td><td className="border border-slate-200 pl-3 py-2">Lumbaalpunctie; steriele buis; bij antistofindex: tegelijk serum afnemen</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Biopsie</strong></td><td className="border border-slate-200 pl-3 py-2">Steriel potje met steriele zoutoplossing (huid, darm)</td></tr>
              </tbody>
            </table>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Transport en bewaarcondities</h4>
            <p className="text-amber-700 text-sm m-0">
              <strong>Virus transport medium (VTM):</strong> optimale pH, antibiotica tegen bacteriegroei. Virussen kunnen geÃ¯nactiveerd worden door zonlicht, hitte, pH-wisselingen. Virale genoom: gevoelig voor nucleasen, dehydratie, hitte. Zo kort mogelijk tussen afname en test. Onbekende virussen â†’ altijd veiligheidsmaatregelen.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 2: Serologische diagnostiek */}
      <section id="serologie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Serologische diagnostiek
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Immuno-assays detecteren <strong>antigenen</strong> (virale eiwitten) of <strong>antilichamen</strong> (humorale respons). Technieken: EIA/ELISA, CLIA (chemiluminescentie), blot, IF, PRNT.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">IgM en IgG</h4>
            <p className="text-primary-700 text-sm mb-2">
              <strong>IgM:</strong> eerste respons; duidt op recente infectie (ezelsbrug: M = momenteel). <strong>IgG:</strong> later, vaak levenslang (ezelsbrug: G = geweest). Isotype-switch na enkele dagen. Vervolgserum 2â€“3 weken na acute fase voor dynamiek.
            </p>
            <p className="text-primary-700 text-sm m-0">
              <strong>Stadia:</strong> acuut primair (hoge IgM, lage IgG); acuut secundair (sterke IgG, geen/zwakke IgM); convalescentie (alleen IgG); chronisch (hoge IgG, geen IgM).
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">EIA/ELISA en CLIA</h4>
            <p className="text-teal-700 text-sm m-0">
              <strong>Antilichaamdetectie:</strong> antigeen gecoat op plaat â†’ serum â†’ enzymgekoppeld secundair antilichaam â†’ substraat â†’ kleur. Titer = hoogste verdunning nog positief. <strong>Antigeendetectie:</strong> capture-antilichaam â†’ patiÃ«ntmateriaal â†’ detectie-antilichaam met enzym. CLIA: geautomatiseerd, hoog volume.
            </p>
          </div>
          
          <div className="p-5 bg-rose-50 rounded-xl border border-rose-200">
            <h4 className="font-bold text-rose-800 mb-2">Voor- en nadelen serologie</h4>
            <p className="text-rose-700 text-sm mb-2">
              <strong>Voordelen:</strong> bruikbaar als virus al verdwenen; voor moeilijk detecteerbare pathogenen; immuniteitsbepaling (bijv. postvaccinaal mazelen).
            </p>
            <p className="text-rose-700 text-sm m-0">
              <strong>Nadelen:</strong> niet geschikt voor zeer acuut moment (nog geen antistoffen); tweede serum vaak nodig; kruisreactie bij gelijkende virussen; fout-positieve IgM bij zwangeren, auto-immuunziekte, andere infecties.
            </p>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Voorbeelden</h4>
            <p className="text-amber-700 text-sm m-0">
              <strong>CMV:</strong> IgM + IgG; bij verdenking infectie &gt;3â€“4 maanden: aviditytest (hoge avidity = infectie â‰¥3â€“4 maanden geleden). <strong>HIV:</strong> combotest (p24 + antistoffen); positieve screening â†’ bevestigingstest.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3: Moleculaire diagnostiek */}
      <section id="moleculair" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Microscope className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Moleculaire diagnostiek
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            <strong>PCR</strong> (polymerasekettingreactie): vermenigvuldigt DNA-fragment; 30 cycli â‰ˆ 2Â³â° kopieÃ«n. Detectie: agarosegel of real-time met fluorescentie. <strong>RNA-virussen:</strong> eerst reverse transcriptase (RNA â†’ cDNA) â†’ RT-PCR.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Ct-waarde (cycle threshold)</h4>
            <p className="text-primary-700 text-sm m-0">
              Aantal cycli nodig om fluorescentiesignaal boven achtergrond te detecteren. <strong>Lage Ct</strong> = hoge virale load. <strong>Hoge Ct</strong> = lage virale load. Met standaard: kwantificatie in kopieÃ«n of IU mogelijk.
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Multiplex PCR en aandachtspunten</h4>
            <p className="text-teal-700 text-sm mb-2">
              <strong>Multiplex PCR:</strong> meerdere targets tegelijk; elke probe uniek fluorofoorlabel voor aparte detectie.
            </p>
            <p className="text-teal-700 text-sm m-0">
              <strong>Aandachtspunten:</strong> primers/probes moeten matchen; conserved regions bij snelle evolutie; non-specifieke binding; <strong>contaminatie</strong> â†’ fout-positief (ampliconproducten blijven jaren in omgeving; RNA kwetsbaarder voor RNase); strikte scheiding preparatie- en amplificatieruimte; sample-integriteit (VTM, temperatuur, transport).
            </p>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Andere NAATs en sneltesten</h4>
            <p className="text-amber-700 text-sm m-0">
              TMA, LAMP, CRISPR. Moleculaire sneltesten: 1â€“2 uur; sample direct in cartridge; multiplex (influenza A/B, RSV, SARS-CoV-2); syndroompanels (&gt;10 targets) voor gastro-enteritis, luchtwegen, meningitis.
            </p>
          </div>
          
          <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-200">
            <h4 className="font-bold text-indigo-800 mb-2">Sanger sequencing en NGS</h4>
            <p className="text-indigo-700 text-sm mb-2">
              <strong>DNA-sequencing:</strong> bepalen volgorde basen (A, C, T, G). <strong>Sanger</strong> (dideoxy kettingterminatie): ddNTPs stoppen elongatie; fragmenten op gel/capillair; fluorofoor per base. Toepassingen: typeren (enterovirussen), resistentie (HIV), evolutie (SARS-CoV-2), verwantschap (nosocomiale transmissie).
            </p>
            <p className="text-indigo-700 text-sm m-0">
              <strong>NGS:</strong> parallelle analyse grote hoeveelheden DNA. Voordelen: heel genoom zonder voorafgaande kennis, hoge throughput, enkel-nucleotide resolutie. Toepassingen: nieuwe virussen, resistentie (HIV, CMV, HBV, HCV), epidemiologie, genotypering. Nadelen: complex, duur, veel data.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4: Samenvatting */}
      <section id="samenvatting" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Layers className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Samenvatting
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <ul className="list-disc pl-6 space-y-2">
            <li>Aanvraag: volledige patiÃ«ntidentificatie, klinische gegevens, afnamedatum; per materiaalsoort aparte aanvraag.</li>
            <li>Materiaal: juiste buis (geen heparine voor PCR), VTM voor uitstrijken, correcte bewaar- en transportcondities.</li>
            <li>Serologie: antigenen of antilichamen; IgM = recent, IgG = verleden; voor- en nadelen per indicatie.</li>
            <li>Moleculair: PCR/RT-PCR, Ct-waarde, multiplex; aandacht voor contaminatie en sample-integriteit.</li>
            <li>Sequencing: Sanger en NGS voor typeren, resistentie, evolutie, nieuwe virussen.</li>
          </ul>
        </div>
      </section>
    </SummaryLayout>
  )
}

// Blok 4 - Week 4 Casus 8 LME 1: Antivirale therapie Content
const AntiviraleTherapieSummary = () => {
  const tableOfContents = [
    { id: 'intro', title: 'Introductie', icon: BookOpen },
    { id: 'influenza', title: 'Behandeling influenza', icon: Activity },
    { id: 'sars-cov2', title: 'Behandeling SARS-CoV-2', icon: Target },
    { id: 'hsv', title: 'Behandeling herpes simplex virus', icon: Shield },
    { id: 'cmv', title: 'Behandeling cytomegalovirus', icon: Layers },
    { id: 'samenvatting', title: 'Samenvatting', icon: ClipboardCheck },
  ]

  return (
    <SummaryLayout
      title="Antivirale therapie"
      description="Behandeling influenza, SARS-CoV-2, herpes simplex virus en cytomegalovirus. Werkingsmechanismen, indicaties en bronnen."
      caseLabel="Casus 8: HIV"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=antivirale-therapie"
    >
      {/* Section 1: Introductie */}
      <section id="intro" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Introductie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Virussen hebben een gastheercel nodig om te repliceren. Antivirale middelen dienen daarom <strong>virus-specifieke aangrijpingspunten</strong> te hebben die de gastheercel niet schaden. Na deze module kun je de meest gebruikte middelen voor influenzavirus, SARS-CoV-2, herpes simplex virus en cytomegalovirus benoemen en in eenvoudige casuÃ¯stiek deze behandelingen toepassen.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Leerdoelen</h4>
            <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
              <li>Globaal uitleggen hoe antivirale middelen voor belangrijke ziektes werken (influenza, SARS-CoV-2, HSV, CMV)</li>
              <li>Verschillende bronnen ten aanzien van antivirale therapie benoemen en deze te kunnen raadplegen en toepassen bij klinische casuÃ¯stiek</li>
            </ul>
          </div>
          
          <p className="text-slate-600 text-sm">
            Doelgroep: bachelor Geneeskunde. Geschatte tijd: literatuur ~25 min, module ~35 min. Bronnen: NHG-richtlijn Influenza, FMS-richtlijn, antibiotica boekje Erasmus MC.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 2: Behandeling influenza */}
      <section id="influenza" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Behandeling influenza
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Voor influenza zijn drie klassen antivirale middelen ontwikkeld. Ze grijpen aan op verschillende punten in de replicatiecyclus.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Klasse</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Aangrijpingspunt</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Voorbeelden</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">M2-ionkanaalremmers</td><td className="border border-slate-200 pl-3 py-2">Fusie (verzuring nodig voor vrijkomen virus)</td><td className="border border-slate-200 pl-3 py-2">Amantadine (niet meer in gebruik; resistentie)</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Polymeraseremmers</td><td className="border border-slate-200 pl-3 py-2">Transcriptie en replicatie (nucleus)</td><td className="border border-slate-200 pl-3 py-2">Baloxavir</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Neuraminidaseremmers</td><td className="border border-slate-200 pl-3 py-2">Assembly en release (remmen loslosing virus van cel)</td><td className="border border-slate-200 pl-3 py-2">Oseltamivir, zanamivir</td></tr>
              </tbody>
            </table>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-200">
              <h4 className="font-bold text-indigo-800 mb-2">Oseltamivir</h4>
              <p className="text-indigo-700 text-sm mb-2">
                Oraal; meest gebruikt. Actief tegen influenza A en B. Werkingsmechanisme: remt virale neuraminidase â†’ voorkomt loslosing virus van geÃ¯nfecteerde cel.
              </p>
              <p className="text-indigo-700 text-sm m-0">
                Indicatie: kwetsbare patiÃ«nten (leeftijd, comorbiditeit zoals astma, DM), klachten &lt;48 uur. Dosering: 2Ã— dd 75 mg, 5 dagen.
              </p>
            </div>
            <div className="p-5 bg-purple-50 rounded-xl border border-purple-200">
              <h4 className="font-bold text-purple-800 mb-2">Zanamivir en baloxavir</h4>
              <p className="text-purple-700 text-sm mb-2">
                <strong>Zanamivir:</strong> inhalatie of iv (bij ernstige ziekte, oseltamivir-resistentie). Lage orale biologische beschikbaarheid.
              </p>
              <p className="text-purple-700 text-sm m-0">
                <strong>Baloxavir:</strong> eenmalige orale dosis. Hoger risico op resistentie; bij immuungecompromitteerden oseltamivir preferent.
              </p>
            </div>
          </div>
          
          <div className="p-5 bg-rose-50 rounded-xl border border-rose-200">
            <h4 className="font-bold text-rose-800 mb-2">BacteriÃ«le superinfectie</h4>
            <p className="text-rose-700 text-sm m-0">
              Bij klinische verslechtering na enkele dagen influenza: overweeg bacteriÃ«le superinfectie. Behandeling: <strong>antibiotica</strong>, niet antivirale middelen. Bij virale infectie heeft antibiotica geen zin.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3: Behandeling SARS-CoV-2 */}
      <section id="sars-cov2" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Behandeling SARS-CoV-2
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Ongecompliceerde SARS-CoV-2 bij volwassenen met mild beloop: geen specifieke behandeling nodig. Eerstelijns: symptomatisch (paracetamol).

          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Nirmatrelvir/ritonavir (Paxlovid)</h4>
            <p className="text-primary-700 text-sm mb-2">
              Geregistreerd voor eerstelijnspatiÃ«nten die nog geen zuurstof nodig hebben maar wel risico op zeer ernstig beloop hebben. Start binnen 5 dagen na begin klachten. Nirmatrelvir remt het virale SARS-CoV-2 protease; ritonavir wordt toegevoegd als CYP3A-remmer â†’ verhoogt plasmaconcentratie nirmatrelvir.
            </p>
            <p className="text-primary-700 text-sm m-0">
              <strong>Let op:</strong> ritonavir remt CYP3A en CYP2D6, en P-glycoproteÃ¯ne â†’ kan spiegels van andere geneesmiddelen verhogen. Controleer medicatie-interacties voor start; soms contra-indicatie of dosisaanpassing.
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Antistolling en ontstekingsremming</h4>
            <p className="text-teal-700 text-sm mb-2">
              COVID-patiÃ«nten: verhoogd risico op hypercoagulabiliteit; ziekenhuispatiÃ«nten krijgen tromboseprofylaxe.
            </p>
            <p className="text-teal-700 text-sm m-0">
              Bij ernstig beloop (immunopathologisch): dexamethason; eventueel IL-6-remmers (tocilizumab, sarilumab) of JAK-remmer (baricitinib).
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4: Behandeling herpes simplex virus */}
      <section id="hsv" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Behandeling herpes simplex virus
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            <strong>Aciclovir</strong> is een nucleoside-analoog dat selectief de replicatie van HSV-1, HSV-2 en varicella-zostervirus (VZV) remt.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Indicatie</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Behandeling</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">Genitale herpes</td><td className="border border-slate-200 pl-3 py-2">Aciclovir 200 mg 5Ã— dd of valaciclovir 1000 mg 2Ã— dd</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">HSV-encefalitis</td><td className="border border-slate-200 pl-3 py-2">Aciclovir iv 10 mg/kg 3Ã— dd, minimaal 14 dagen</td></tr>
              </tbody>
            </table>
          </div>
          
          <p>
            Valaciclovir is de prodrug van aciclovir met betere orale biologische beschikbaarheid. Bij zeer ernstige HSV (encefalitis): voorkeur voor iv aciclovir; soms dubbele therapie.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 5: Behandeling cytomegalovirus */}
      <section id="cmv" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
            <Layers className="w-5 h-5 text-purple-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Behandeling cytomegalovirus
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            <strong>(Val)ganciclovir</strong> heeft antivirale activiteit tegen CMV. Valganciclovir is de prodrug van ganciclovir; na orale toediening snel gemetaboliseerd tot ganciclovir. Valganciclovir heeft ook activiteit tegen HSV en VZV.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Middel</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">CMV</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">HSV</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">VZV</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">(val)aciclovir</td><td className="border border-slate-200 pl-3 py-2">â€”</td><td className="border border-slate-200 pl-3 py-2">+</td><td className="border border-slate-200 pl-3 py-2">+</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">(val)ganciclovir</td><td className="border border-slate-200 pl-3 py-2">+</td><td className="border border-slate-200 pl-3 py-2">+</td><td className="border border-slate-200 pl-3 py-2">+</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Letermovir, maribavir</td><td className="border border-slate-200 pl-3 py-2">+</td><td className="border border-slate-200 pl-3 py-2">â€”</td><td className="border border-slate-200 pl-3 py-2">â€”</td></tr>
              </tbody>
            </table>
          </div>
          
          <p>
            CMV retinitis: (val)ganciclovir. Bij transplantatie: profylaxe op basis van donor- en ontvanger-serostatus (CMV IgG). Donor pos + ontvanger neg: hoog risico; profylaxe 6 maanden.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 6: Samenvatting */}
      <section id="samenvatting" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <ClipboardCheck className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Samenvatting
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Influenza:</strong> neuraminidaseremmers (oseltamivir, zanamivir), polymeraseremmers (baloxavir). Indicatie: kwetsbare patiÃ«nten, klachten &lt;48 uur. BacteriÃ«le superinfectie â†’ antibiotica.</li>
            <li><strong>SARS-CoV-2:</strong> mild beloop â†’ symptomatisch. Risico ernstig beloop: nirmatrelvir/ritonavir (Paxlovid), start &lt;5 dagen. Let op medicatie-interacties door ritonavir.</li>
            <li><strong>HSV/VZV:</strong> aciclovir (oraal/iv), valaciclovir (oraal). HSV-encefalitis: aciclovir iv 10 mg/kg 3Ã— dd, min. 14 dagen.</li>
            <li><strong>CMV:</strong> (val)ganciclovir. Letermovir en maribavir alleen tegen CMV. Valganciclovir ook tegen HSV en VZV.</li>
            <li>Raadpleeg NHG-, FMS-richtlijnen en antibiotica boekje voor actuele behandeladviezen.</li>
          </ul>
        </div>
      </section>
    </SummaryLayout>
  )
}

// Blok 4 - Week 4 Casus 8 LME 2: De grote drie Malaria Content
const DeGroteDrieMalariaSummary = () => {
  const tableOfContents = [
    { id: 'intro', title: 'Introductie', icon: BookOpen },
    { id: 'klinische-presentatie', title: 'Klinische presentatie en epidemiologie', icon: Stethoscope },
    { id: 'pathofysiologie', title: 'Pathofysiologie', icon: Activity },
    { id: 'diagnostiek', title: 'Diagnostiek', icon: Microscope },
    { id: 'behandeling', title: 'Behandeling en preventie', icon: Shield },
    { id: 'samenvatting', title: 'Samenvatting', icon: ClipboardCheck },
  ]

  return (
    <SummaryLayout
      title="De grote drie Malaria"
      description="Epidemiologie, klinische presentatie, pathofysiologie, diagnostiek en behandeling van malaria. Een van de drie grote infectieziekten."
      caseLabel="Casus 8: HIV"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=de-grote-drie-malaria"
    >
      {/* Section 1: Introductie */}
      <section id="intro" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Introductie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Samen met HIV en tuberculose is malaria Ã©Ã©n van de drie &quot;grote infectieziekten&quot;. Gezamenlijk zijn deze drie infectieziekten verantwoordelijk voor vele doden per jaar. Deze module behandelt de epidemiologie, klinische presentatie, pathofysiologie, diagnostiek en behandeling van malaria.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Leerdoelen</h4>
            <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
              <li>De epidemiologie, klinische presentatie en behandeling van malaria uitleggen</li>
              <li>Malaria opnemen in de differentiÃ«le diagnose bij een patiÃ«nt met relevante reisgeschiedenis of risicofactoren</li>
            </ul>
          </div>
          
          <p className="text-slate-600 text-sm">
            Doelgroep: bachelor Geneeskunde. Bron: Leerboek Microbiologie en infectieziekten, hoofdstuk 25.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 2: Klinische presentatie en epidemiologie */}
      <section id="klinische-presentatie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Klinische presentatie en epidemiologie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Malaria wordt veroorzaakt door verschillende <strong>Plasmodium</strong>-soorten, die verschillende ziektebeelden en koortspatronen veroorzaken.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Type</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Symptomen</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">Ongecompliceerde malaria</td><td className="border border-slate-200 pl-3 py-2">Hoofdpijn, spierpijn, misselijkheid, malaise</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Ernstige malaria</td><td className="border border-slate-200 pl-3 py-2">NierinsufficiÃ«ntie, acidose, shock, verminderd bewustzijn</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Minder passend bij malaria</td><td className="border border-slate-200 pl-3 py-2">Keelpijn, hoesten, gewrichtspijn, jeuk, huidrash</td></tr>
              </tbody>
            </table>
          </div>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Geografische verspreiding</h4>
          <p>
            Malaria is endemisch in veel tropische en subtropische delen van de wereld. Het CDC (USA) geeft een actueel overzicht van landen waar malaria endemisch is via het <strong>CDC Yellow Book</strong>. Voorbeelden van endemische landen: Angola, MaleisiÃ«, Pakistan, BraziliÃ«. Marokko is <em>niet</em> endemisch.
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Koortspatronen</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Plasmodium-soort</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Koortspatroon</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">P. falciparum</td><td className="border border-slate-200 pl-3 py-2">Irregulier</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">P. malariae</td><td className="border border-slate-200 pl-3 py-2">Quartan (elke 72 uur)</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">P. vivax / P. ovale</td><td className="border border-slate-200 pl-3 py-2">Tertian (elke 48 uur)</td></tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-slate-600 text-sm">
            In Europa komen muggensoorten voor die malaria kunnen overdragen; deze kunnen P. falciparum niet overdragen, maar wel P. vivax. Tot circa 1950 kwam vivax-malaria voor in Nederland.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3: Pathofysiologie */}
      <section id="pathofysiologie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Pathofysiologie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Om de pathofysiologie van malaria te begrijpen, is inzicht in de <strong>ontwikkelingscyclus van Plasmodium</strong> essentieel.
          </p>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Ontwikkelingscyclus (volgorde na infectie)</h4>
            <p className="text-amber-700 text-sm m-0">
              SporozoÃ¯eten â†’ Leverschizont â†’ MerozoÃ¯et â†’ TrofozoÃ¯et â†’ Bloedschizont â†’ Gametocyt
            </p>
          </div>
          
          <p>
            SporozoÃ¯eten infecteren levercellen en vormen leverschizonten; na ongeveer <strong>1 week</strong> komen merozoÃ¯eten vrij die erytrocyten infecteren. In de erytrocyt volgt aseksuele vermenigvuldiging via trofozoÃ¯et naar schizont; bij rijping komen nieuwe merozoÃ¯eten vrij. Sommige parasieten differentiÃ«ren tot gametocyten.
          </p>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2 flex items-center gap-2">
              <Stethoscope className="w-4 h-4" />
              Malaria tropica vs. tertiana/quartana
            </h4>
            <p className="text-rose-700 m-0 mb-2">
              <strong>Cerebrale malaria en orgaanschade</strong> zijn het gevolg van <strong>sekwestratie</strong> (binding van geÃ¯nfecteerde erytrocyten aan endotheelcellen van capillairen). Sekwestratie komt alleen voor bij <em>P. falciparum</em>, niet bij P. vivax, P. ovale en P. malariae.
            </p>
            <p className="text-rose-700 m-0">
              Anemie, trombocytopenie en koorts komen bij <em>alle</em> soorten malaria voor.
            </p>
          </div>
          
          <p>
            <strong>Incubatietijd malaria tropica:</strong> normaal gesproken ongeveer <strong>1 week</strong>.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4: Diagnostiek */}
      <section id="diagnostiek" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Microscope className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Diagnostiek
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Aangezien malaria tropica een <strong>fulminant beloop</strong> kan hebben, is snelle en accurate diagnostiek cruciaal voor tijdige behandeling.
          </p>
          
          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-2">Bloedafname</h4>
            <ul className="list-disc pl-6 space-y-1 text-slate-700 text-sm">
              <li>Bloedafname voor malaria-diagnostiek is <strong>niet zinloos</strong> als de patiÃ«nt op het moment van afname geen koorts heeft</li>
              <li>Het moment van bloedafname is <strong>niet afhankelijk</strong> van koortsperioden</li>
              <li>Wachten tot de volgende koortsperiode is niet nodig</li>
            </ul>
          </div>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Bloedafwijkingen bij malaria tropica</h4>
          <p>
            Passend bij malaria tropica: <strong>verhoogd lactaat</strong>, <strong>trombocytopenie</strong>, <strong>verlaagd hematocriet</strong>.
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Sensitiviteit diagnostische methoden</h4>
          <p>
            Volgorde van <strong>hoge naar lage sensitiviteit</strong>: dikke druppel (thick smear) &gt; uitstrijk (blood smear) &gt; antigeensneltest.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 5: Behandeling en preventie */}
      <section id="behandeling" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Behandeling en preventie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Malaria presenteert zich aanvankelijk als griepachtig ziektebeeld (<strong>ongecompliceerde malaria</strong>). Malaria tropica kan snel verslechteren tot <strong>ernstige malaria</strong>. De behandeling verschilt per type en presentatie.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Type</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Behandeling</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">Ongecompliceerde malaria</td><td className="border border-slate-200 pl-3 py-2">Orale therapie (o.a. P. malariae)</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Ernstige malaria</td><td className="border border-slate-200 pl-3 py-2">Intraveneuze therapie, intensive care</td></tr>
              </tbody>
            </table>
          </div>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Malaria profylaxe</h4>
          <p>
            Malaria tropica ontwikkelt zich bij naÃ¯eve volwassenen als een <strong>fulminante ziekte</strong>; geÃ¯nfecteerde personen worden snel ernstig ziek (binnen enkele dagen na start van symptomen). Reizigers naar hoog endemische gebieden wordt geadviseerd malaria profylaxe te nemen.
          </p>
          
          <div className="p-5 bg-amber-50 rounded-xl border-l-4 border-amber-400">
            <h4 className="font-bold text-amber-800 mb-2">Belangrijk: profylaxe</h4>
            <p className="text-amber-700 m-0">
              Profylaxe beschermt <strong>niet</strong> tegen infectie en <strong>niet</strong> tegen de vorming van hypnozoÃ¯eten. Profylaxe beschermt wel tegen de <strong>ziekte</strong>, omdat het met name effectief is tegen stadia in erytrocyten (bloedstadium).
            </p>
          </div>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">P. vivax en P. ovale â€“ hypnozoÃ¯eten</h4>
          <p>
            P. vivax en P. ovale kunnen <strong>hypnozoÃ¯eten</strong> vormen: sporozoÃ¯eten die levercellen infecteren kunnen lang inactief blijven (maanden tot jaren). Na activatie ontstaat een uitgestelde aanval van <strong>malaria tertiana</strong>. P. vivax komt veel voor in de Indonesische archipel; P. ovale niet.
          </p>
          
          <p>
            <strong>Chloroquine</strong> doodt de erytrocytaire stadia. In Zuidoost-AziÃ« komt chloroquine-resistente P. vivax voor.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 6: Samenvatting */}
      <section id="samenvatting" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <ClipboardCheck className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Samenvatting
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Klinisch:</strong> Ongecompliceerd: hoofdpijn, spierpijn, misselijkheid, malaise. Ernstig: nierinsufficiÃ«ntie, acidose, shock, verminderd bewustzijn.</li>
            <li><strong>Epidemiologie:</strong> Endemisch in tropische/subtropische gebieden. CDC Yellow Book voor actueel overzicht. Koortspatronen: P. falciparum irregulier; P. malariae quartan (72 h); P. vivax/ovale tertian (48 h).</li>
            <li><strong>Pathofysiologie:</strong> Cyclus: sporozoÃ¯eten â†’ leverschizont â†’ merozoÃ¯et â†’ trofozoÃ¯et â†’ bloedschizont â†’ gametocyt. Sekwestratie (alleen P. falciparum) veroorzaakt cerebrale malaria en orgaanschade. Incubatietijd malaria tropica: ~1 week.</li>
            <li><strong>Diagnostiek:</strong> Bloedafname niet afhankelijk van koorts. Sensitiviteit: dikke druppel &gt; uitstrijk &gt; antigeensneltest. Bloedafwijkingen: verhoogd lactaat, trombocytopenie, verlaagd hematocriet.</li>
            <li><strong>Behandeling:</strong> Ongecompliceerd: orale therapie. Ernstig: iv-therapie, IC. Profylaxe beschermt tegen ziekte (bloedstadium), niet tegen infectie of hypnozoÃ¯eten. P. vivax/ovale: hypnozoÃ¯eten â†’ malaria tertiana.</li>
          </ul>
        </div>
      </section>
    </SummaryLayout>
  )
}

// Blok 4 - Week 4 Casus 8 LME 3: Duurzame hiv zorg in sub-Sahara-Afrika Content
const DuurzameHivZorgSummary = () => {
  const tableOfContents = [
    { id: 'intro', title: 'Introductie', icon: BookOpen },
    { id: 'hiv-sub-sahara', title: 'HIV en sub-Sahara Afrika', icon: Stethoscope },
    { id: 'vernieuwen', title: 'Vernieuwen van de HIV zorg', icon: Activity },
    { id: 'samenvatting', title: 'Samenvatting', icon: ClipboardCheck },
  ]

  return (
    <SummaryLayout
      title="Duurzame hiv zorg in sub-Sahara-Afrika"
      description="Inzicht in de complexiteit van HIV-zorg in laag-inkomenslanden en het afwegen van de voor- en nadelen van verschillende zorgvormen."
      caseLabel="Casus 8: HIV"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=duurzame-hiv-zorg"
    >
      {/* Section 1: Introductie */}
      <section id="intro" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Introductie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            In deze module gaan we dieper in op de HIV-epidemie en zorgverlening in sub-Sahara Afrika, het epicentrum van de pandemie. We zien hoe de internationale gemeenschap grote successen heeft bereikt met zogenaamde &quot;verticale zorgprogramma&apos;s&quot;, maar dat deze manier van zorgaanbieding niet langer houdbaar is. Tot slot wegen we de voor- en nadelen van alternatieve zorgvormen tegen elkaar af.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Leerdoelen</h4>
            <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
              <li>Inzicht krijgen in de complexiteit van de (hiv) zorg in laag-inkomenslanden</li>
              <li>De voor- en nadelen van verschillende keuzes in het aanbieden van (hiv) zorg in lage-inkomenslanden kunnen afwegen</li>
            </ul>
          </div>
          
          <p className="text-slate-600 text-sm">
            Doelgroep: bachelor Geneeskunde. Tijd: ongeveer 30 minuten.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 2: HIV en sub-Sahara Afrika */}
      <section id="hiv-sub-sahara" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            HIV en sub-Sahara Afrika
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Sub-Sahara Afrika</h4>
          <p>
            Sub-Sahara Afrika is een subcontinent dat bestaat uit 46 landen. Er wonen ongeveer 1,1 miljard mensen, dat is zo&apos;n 15% van de totale wereldbevolking. Het is het armste continent in de wereld en het continent met het slechtste zorgsysteem. Door een gebrek aan artsen, klinieken en geld zijn wachttijden vaak erg lang, en kunnen veel mensen niet de zorg krijgen die ze nodig hebben.
          </p>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2">Epicentrum van de HIV-pandemie</h4>
            <p className="text-rose-700 m-0">
              Sub-Sahara Afrika wordt ook wel het epicentrum van de HIV-pandemie genoemd, omdat er verreweg de meeste HIV-gevallen in de wereld wonen. Ongeveer 2/3e, dus <strong>67%</strong>, van alle mensen met HIV in de wereld wonen in sub-Sahara Afrika.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Indicator</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Waarde</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">Mensen met HIV in sub-Sahara Afrika</td><td className="border border-slate-200 pl-3 py-2">~25 miljoen</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Sterfgevallen AIDS per jaar</td><td className="border border-slate-200 pl-3 py-2">~500.000</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Nieuwe infecties per jaar</td><td className="border border-slate-200 pl-3 py-2">~1 miljoen</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Trend aantal mensen met HIV</td><td className="border border-slate-200 pl-3 py-2">Neemt toe</td></tr>
              </tbody>
            </table>
          </div>
          
          <p>
            De wereldwijde gemiddelde HIV-prevalentie is 0,7%. In sub-Sahara Afrika zijn er landen waar meer dan 10% van de bevolking HIV heeft. De levensverwachting daalde sterk door de HIV-uitbraak (eind jaren 80/begin jaren 90) en herstelde zich nadat internationale initiatieven werden opgezet om behandeling te geven.
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Antiretrovirale therapie (ART)</h4>
          <p>
            Een HIV-besmetting kan behandeld worden met antiretrovirale therapie (ART). Dit zijn medicijnen die de replicatie van het virus onderdrukken. ART zorgt ervoor dat je geen AIDS ontwikkelt en een lang en gezond leven kunt leiden. Je bent ook nauwelijks tot niet meer besmettelijk voor anderen. Het grote nadeel is dat het medicijn geen genezing is, maar een chronische behandeling voor de rest van je leven. Als je stopt, komt het virus snel weer terug.
          </p>
          
          <p>
            ART is heel effectief, maar het duurde erg lang voordat de behandeling beschikbaar kwam in sub-Sahara Afrika. Redenen: de middelen waren te duur en er was geen goed gezondheidszorgsysteem om chronische behandeling te leveren. De grote internationale initiatieven, met name onder president George Bush (VS), investeerden miljarden aan ontwikkelingshulp voor HIV-behandeling in sub-Sahara Afrika.
          </p>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Huidige status</h4>
            <p className="text-teal-700 text-sm m-0">
              Op dit moment krijgen zo&apos;n 18 miljoen mensen (~70% van alle mensen met HIV) ART. De internationale doelstelling is om dit verder omhoog te krijgen naar 95% in 2030.
            </p>
          </div>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Verticaal programma</h4>
          <p>
            Het succes van het internationale initiatief ter bestrijding van HIV is toe te schrijven aan de snelle en effectieve opschaling van HIV-zorg door het opstellen van HIV-specifieke klinieken door heel sub-Sahara Afrika. Deze vorm van zorgverlening heet <strong>verticale gezondheidszorg</strong>: ziekte-specifieke programma&apos;s die los staan van het algemene gezondheidszorgsysteem, met hun eigen budgetten, management en dienstlevering.
          </p>
          
          <div className="p-5 bg-amber-50 rounded-xl border-l-4 border-amber-400">
            <h4 className="font-bold text-amber-800 mb-2">Waarom niet langer houdbaar</h4>
            <ul className="list-disc pl-6 space-y-1 text-amber-700 text-sm">
              <li>Het donorgeld neemt af, door economische onzekerheden en toenemende nationalistische regeringen in donorlanden</li>
              <li>Er zijn steeds meer zorgmedewerkers nodig, maar deze zijn er niet</li>
              <li>Mensen met HIV leven langer en hebben steeds complexere zorg nodig door co-morbiditeit</li>
              <li>Toenemende scheefgroei: HIV-programma&apos;s kregen veel geld, andere zorg heeft zich nauwelijks verder ontwikkeld</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3: Vernieuwen van de HIV zorg */}
      <section id="vernieuwen" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Vernieuwen van de HIV zorg in sub-Sahara Afrika
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Om de komende decennia goede, duurzame HIV-zorgprogramma&apos;s te kunnen blijven aanbieden, moet de zorgverlening innoveren. Met beperkte en afnemende middelen moet 95% van alle mensen behandeling krijgen en de zorg eerlijker verdeeld worden over verschillende ziekten. Er zijn verschillende keuzes die gemaakt kunnen worden, en deze moeten worden afgewogen aan de hand van zeven belangrijke maatstaven van een succesvol gezondheidszorgsysteem.
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Zeven evaluatiecriteria</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Criterium</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Beschrijving</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">Kosten</td><td className="border border-slate-200 pl-3 py-2">Totale investeringen (financieel, materieel, personeel)</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">EfficiÃ«ntie</td><td className="border border-slate-200 pl-3 py-2">Balans tussen totale kosten en totale baten</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Kwaliteit</td><td className="border border-slate-200 pl-3 py-2">Mate waarin patiÃ«nten de juiste hulp krijgen</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Haalbaarheid</td><td className="border border-slate-200 pl-3 py-2">Kans dat een programma doelen haalt</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">PatiÃ«ntvriendelijkheid</td><td className="border border-slate-200 pl-3 py-2">Mate waarin zorg aansluit bij wensen en behoeften</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Gelijkheid</td><td className="border border-slate-200 pl-3 py-2">Toegang tot zorg voor iedereen, ongeacht aandoening, afkomst, inkomen, ras</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Aanvaardbaarheid</td><td className="border border-slate-200 pl-3 py-2">Mate waarin bevolking en zorgpersoneel het eens zijn met de zorgverlening</td></tr>
              </tbody>
            </table>
          </div>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Vier zorgmodellen</h4>
          <p>
            Er worden vier manieren van zorgaanbieding vergeleken: (1) <strong>Huidige beleid</strong> (verticale, standalone HIV-klinieken), (2) <strong>Taakverschuivingen</strong>, (3) <strong>Decentralisatie</strong>, (4) <strong>Integratie</strong>.
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Huidige beleid (verticale zorg) â€“ score</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Criterium</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Score</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Reden</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">Kosten</td><td className="border border-slate-200 pl-3 py-2">Hoog</td><td className="border border-slate-200 pl-3 py-2">Nieuwe klinieken, logistiek, personeel, management</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">EfficiÃ«ntie</td><td className="border border-slate-200 pl-3 py-2">Laag</td><td className="border border-slate-200 pl-3 py-2">Verticaal per ziekte is inefficiÃ«nt; integratie efficiÃ«nter</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Kwaliteit</td><td className="border border-slate-200 pl-3 py-2">Zeer hoog</td><td className="border border-slate-200 pl-3 py-2">Hooggespecialiseerde zorg voor Ã©Ã©n aandoening</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Haalbaarheid</td><td className="border border-slate-200 pl-3 py-2">Laag</td><td className="border border-slate-200 pl-3 py-2">95%-doelstelling moeilijk haalbaar met huidige middelen</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">PatiÃ«ntvriendelijkheid</td><td className="border border-slate-200 pl-3 py-2">Laag</td><td className="border border-slate-200 pl-3 py-2">Comorbiditeiten â†’ meerdere zorgaanbieders</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Gelijkheid</td><td className="border border-slate-200 pl-3 py-2">Zeer laag</td><td className="border border-slate-200 pl-3 py-2">Goede HIV-zorg, niet voor andere aandoeningen; trekt zorgpersoneel weg</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Aanvaardbaarheid</td><td className="border border-slate-200 pl-3 py-2">Gemiddeld</td><td className="border border-slate-200 pl-3 py-2">Goed voor HIV-patiÃ«nten, minder voor andere zorg</td></tr>
              </tbody>
            </table>
          </div>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Taakverschuivingen</h4>
          <p>
            <strong>Definitie:</strong> De delegatie van taken naar minder gespecialiseerde gezondheidswerkers (bijv. taken van arts door verpleegkundige, taken van verpleegkundige door assistent). <strong>Kosten:</strong> afnemen (goedkoper personeel, meer beschikbaar). <strong>EfficiÃ«ntie:</strong> toeneemt (zelfde werk voor minder geld). <strong>Kwaliteit:</strong> kan afnemen voor complexere patiÃ«nten. <strong>Haalbaarheid:</strong> toeneemt (meer middelen). <strong>PatiÃ«ntvriendelijkheid:</strong> kan licht afnemen voor complexe patiÃ«nten (meerdere zorglagen).
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Decentralisatie</h4>
          <p>
            <strong>Definitie:</strong> Het overhevelen van taken en verantwoordelijkheden naar een lager niveau. Voor HIV-zorg: zorg uit de klinieken halen en meer naar de gemeenschap brengen (zorg aan huis, zorg bij buurtcentra of kerken, automaten voor medicijnverstrekking). Een belangrijk voordeel is dat de zorg veel bereikbaarder wordt voor de gemeenschap.
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Integratie</h4>
          <p>
            <strong>Definitie:</strong> Het samenvoegen van twee afzonderlijke delen. HIV-zorg kan worden geÃ¯ntegreerd door: (1) specifieke zorg integreren in HIV-klinieken, (2) HIV-zorg toevoegen aan andere zorgsectoren, (3) HIV-zorg volledig samenvoegen met andere eerstelijnszorg. Door te integreren wordt er meer toegang tot andere zorg bewerkstelligd.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Belangrijk</h4>
            <p className="text-primary-700 text-sm m-0">
              Er is niet per se Ã©Ã©n goed antwoord. Het belangrijkste is dat er een goede onderbouwing is van de keuze. Verschillende alternatieve zorgvormen zijn mogelijk, elk met eigen voor- en nadelen. Bij het afwegen moet je alle dimensies van een succesvol gezondheidszorgsysteem meenemen.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4: Samenvatting */}
      <section id="samenvatting" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <ClipboardCheck className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Samenvatting
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Sub-Sahara Afrika:</strong> 46 landen, 1,1 miljard mensen (15% wereldbevolking), armste continent, slechtste zorgsysteem. Epicentrum HIV: 67% van alle mensen met HIV woont daar.</li>
            <li><strong>HIV-epidemiologie:</strong> ~25 miljoen PLHIV, ~500k AIDS-doden/jaar, ~1M nieuwe infecties/jaar. Trend: neemt toe. ART: ~18 miljoen (70%) op behandeling; doel 95% in 2030.</li>
            <li><strong>ART:</strong> Onderdrukt virusreplicatie, voorkomt AIDS, vermindert besmettelijkheid. Geen genezing; levenslange behandeling. Vertraagd beschikbaar in SSA door kosten en gebrek aan zorgsysteem.</li>
            <li><strong>Verticaal programma:</strong> HIV-specifieke klinieken, eigen budgetten. Niet langer houdbaar: afnemend donorgeld, tekort zorgpersoneel, complexere zorg (co-morbiditeit), scheefgroei HIV vs. andere zorg.</li>
            <li><strong>Alternatieven:</strong> Taakverschuivingen, decentralisatie, integratie. Evaluatie aan de hand van 7 criteria: kosten, efficiÃ«ntie, kwaliteit, haalbaarheid, patiÃ«ntvriendelijkheid, gelijkheid, aanvaardbaarheid.</li>
          </ul>
        </div>
      </section>
    </SummaryLayout>
  )
}

// Blok 4 - Week 4 Casus 8 LME 4: Immunologische consequenties hiv Content
const ImmunologischeConsequentiesHivSummary = () => {
  const tableOfContents = [
    { id: 'intro', title: 'Introductie', icon: BookOpen },
    { id: 'acute-chronisch', title: 'Acute en chronische HIV-1-infectie', icon: Stethoscope },
    { id: 'ziekteprogressie', title: 'Ziekteprogressie en antiretrovirale therapie', icon: Activity },
    { id: 'hiv-vaccin', title: 'HIV-1-vaccin', icon: Shield },
    { id: 'samenvatting', title: 'Samenvatting', icon: ClipboardCheck },
  ]

  return (
    <SummaryLayout
      title="Immunologische consequenties van HIV"
      description="Immuunreacties tijdens acute en chronische HIV-1-infectie, ziekteprogressie, cART en uitdagingen voor een HIV-1-vaccin."
      caseLabel="Casus 8: HIV"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=immunologische-consequenties-hiv"
    >
      {/* Section 1: Introductie */}
      <section id="intro" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Introductie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Waarom is HIV-1 anders dan EBV, CMV of HCV? Waarom kan ons immuunsysteem HIV-1 niet onder controle houden? Waarom sterven patiÃ«nten aan opportunistische infecties (niet aan HIV-1 zelf) als ze niet worden behandeld? En waarom hebben we nog geen vaccinatie? In deze module leer je de antwoorden en begrijp je waarom HIV-1 nog steeds een wereldwijd gezondheidsprobleem is.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Leerdoelen</h4>
            <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
              <li>De immuunreacties tijdens acute en chronische HIV-1-infectie beschrijven</li>
              <li>De gevolgen van HIV-1-infectie op cellen van het immuunsysteem beschrijven</li>
              <li>De consequenties van HIV-1-infectie op het functioneren van de afweer beredeneren</li>
            </ul>
          </div>
          
          <p className="text-slate-600 text-sm">
            Doelgroep: bachelor Geneeskunde â€“ blok 4, Afweer en aanpak van infecties. Tijd: ongeveer 1 uur.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 2: Acute en chronische HIV-1-infectie */}
      <section id="acute-chronisch" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Acute en chronische HIV-1-infectie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Verloop zonder cART</h4>
          <p>
            Zonder combinatie antiretrovirale therapie (cART) verloopt HIV-1-infectie in drie fasen: <strong>acute infectie</strong> (0â€“3â€“6 maanden), <strong>chronische infectie</strong> (tot ~10â€“12 jaar) en <strong>AIDS</strong>. De virale load piekt acuut, daalt naar een setpoint en stijgt weer bij AIDS. CD4+ T-cellen dalen acuut, herstellen gedeeltelijk en dalen daarna progressief tot zeer lage waarden bij AIDS.
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">CD4+ T-cellen â€“ centrale rol</h4>
          <p>
            CD4+ T-cellen zijn essentiÃ«le helpercellen voor zowel aangeboren als adaptieve immuunreacties. DC&apos;s presenteren antigeen in HLA-klasse II aan CD4+ T-cellen; geactiveerde CD4+ T-cellen ondersteunen NK-cellen (cytokinen), macrofagen, DC&apos;s (verbeterde presentatie aan CD8+ T-cellen in HLA-I) en B-cellen (directe interactie â†’ neutraliserende antilichamen).
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">HIV-1-entry en co-receptoren</h4>
          <p>
            HIV-1 veroorzaakt &gt;95% van alle HIV-infecties wereldwijd. HIV-2 komt endemisch voor in West-Afrika en is minder pathogeen. HIV-1 gp120 bindt aan <strong>CD4</strong> en een <strong>co-receptor</strong> (CCR5 of CXCR4). Alleen CD4+ cellen (CD4+ T-cellen, monocyten/macrofagen) kunnen geÃ¯nfecteerd worden. <strong>R5-stammen</strong> gebruiken CCR5 (monocyten, macrofagen, geactiveerde T-cellen; primair virus). <strong>X4-stammen</strong> gebruiken CXCR4 (T-cellen; secundair virus). Geactiveerde CD4+ T-cellen brengen CCR5 tot expressie; rustende CD4+ T-cellen CXCR4.
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">HIV-1-transmissie en -verspreiding</h4>
          <p>
            DC&apos;s zijn vaak het eerste celtype dat HIV-1 tegenkomt. Ze internaliseren of raken geÃ¯nfecteerd, migreren naar de lymfeklier en activeren CD4+ T-cellen; geÃ¯nfecteerde DC&apos;s kunnen deze T-cellen infecteren. Geactiveerde CD4+ T-cellen worden gerekruteerd naar de infectieplaats. Macrofagen in het slijmvlies zijn een primair doelwit voor R5-virussen (CD4+CCR5). GeÃ¯nfecteerde macrofagen kunnen geactiveerde CD4+ T-cellen infecteren. Resultaat: meer geÃ¯nfecteerde cellen, virale replicatie in lymfoÃ¯de organen en verhoogde virale load in perifeer bloed.
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Aangeboren immuunreacties</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Celtype</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Acute infectie</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Chronische infectie</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">Macrofagen</td><td className="border border-slate-200 pl-3 py-2">Antivirale factoren, verspreiding HIV, APC</td><td className="border border-slate-200 pl-3 py-2">Verminderde functies</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">DC</td><td className="border border-slate-200 pl-3 py-2">APC, verspreiding HIV</td><td className="border border-slate-200 pl-3 py-2">Verminderde functies</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">NK-cellen</td><td className="border border-slate-200 pl-3 py-2">Cytotoxisch, effectorcytokinen</td><td className="border border-slate-200 pl-3 py-2">Verminderde functies</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            DC&apos;s hebben een tweezijdige rol: ze kunnen HIV-1 verspreiden Ã©n zijn professionele APC&apos;s. GeÃ¯nfecteerde macrofagen vormen een latent reservoir; geÃ¯nfecteerde monocyten/macrofagen hebben verminderde functies (verstoorde antigeenpresentatie) â†’ opportunistische infecties (toxoplasmose, candidiasis). NK-cellen doden geÃ¯nfecteerde cellen tot er genoeg HIV-specifieke CD8+ T-cellen zijn; ze produceren IFN-Î³ en TNF-Î±. Acute HIV-1 leidt tot inflammatoire cytokinen (IFN-Î±/Î², IFN-Î³, IL-12, IL-10); hoge cytokinenspiegels dragen bij aan chronische immuunactivatie.
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Adaptieve immuunreacties</h4>
          <p>
            De meerderheid van PWH ontwikkelt een HIV-1-specifieke T- en B-celrespons tijdens acute infectie, die de ziekteprogressie vertraagt. Bij de meeste PWH zijn deze responsen echter onvoldoende om HIV-1-replicatie blijvend te controleren â†’ ziekteprogressie zonder ART. Een kenmerk van HIV-1 is <strong>chronische immuunactivatie</strong>, met nadelige effecten op aangeboren en adaptieve immuniteit en uiteindelijk immuunuitputting. Oorzaken: cytokinen, reactivatie van andere chronische infecties (bijv. CMV), verminderde darmbarriÃ¨refunctie â†’ microbiÃ«le translocatie.
          </p>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2">CD4+ T-cellen â€“ verlies en gevolgen</h4>
            <p className="text-rose-700 mb-2">
              HIV-1 infecteert CD4+ T-helpercellen en leidt via directe en indirecte mechanismen tot hun verlies. GeÃ¯nfecteerde CD4+ worden direct gedood; niet-geÃ¯nfecteerde sterven door HIV-geÃ¯nduceerde hyperimmuunactivatie. Verlies van CD4+ â†’ verworven immunodeficiÃ«ntie: verminderde respons op opportunistische infecties, nieuwe pathogenen en vaccins. NaÃ¯eve CD4+ nemen af; geheugen-CD4+ raken uitgeput en kunnen CD8+ T-cellen niet meer helpen. T-celafhankelijke B-celreacties hebben CD4+ nodig â†’ B-celfunctie verminderd.
            </p>
            <p className="text-rose-700 m-0">
              <strong>CD8+ T-cellen:</strong> HIV-specifieke CD8+ T-cellen zijn cruciaal voor initiÃ«le controle van viremie (tot 10% van T-cellen acuut). Ze doden geÃ¯nfecteerde cellen en scheiden IFN-Î³ af. Uiteindelijk falen ze: niet kruisreactief op escape-mutaties, geen langetermijn effector-geheugencellen (CD4+ hulp nodig), worden uitgeput. <strong>B-cellen:</strong> produceren neutraliserende antilichamen maar hebben geen CD4; B-celfunctie is te laag en te laat. HIV-1 ontwijkt neutraliserende antilichamen door hoge mutatiesnelheid; abnormale B-celactivatie kan leiden tot AIDS-geassocieerde lymfomen.
            </p>
          </div>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">T-celuitputting</h4>
          <p>
            Chronische antigeenstimulatie (bijv. bij HIV-1) leidt tot T-celuitputting. Kenmerken: verhoogde expressie van remmende receptoren (PD-1), verlies van effectorfunctie, verlies van proliferatiecapaciteit, verhoogde apoptose. T-celuitputting is een <strong>adaptief mechanisme</strong> dat weefselschade door chronische inflammatie en auto-immuniteit beperkt.
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Lymfeklierstructuur</h4>
          <p>
            Lymfeklieren spelen een centrale rol bij infectiecontrole. Tijdens HIV-1-infectie raken ze chronisch ontstoken; voorbeelden van structurele veranderingen: lymfeklierfibrose, folliculaire verstoring en uitputting.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3: Ziekteprogressie en antiretrovirale therapie */}
      <section id="ziekteprogressie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Ziekteprogressie en antiretrovirale therapie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            cART onderdrukt HIV-1-replicatie en viremie, maar <strong>geneest HIV-1 niet</strong>; zodra cART wordt gestopt, komt het virus terug. HIV-1 integreert in het gastheer-DNA en kan zo aan het immuunsysteem ontsnappen.
          </p>
          
          <div className="p-5 bg-amber-50 rounded-xl border-l-4 border-amber-400">
            <h4 className="font-bold text-amber-800 mb-2">Latent viraal reservoir</h4>
            <p className="text-amber-700 text-sm mb-2">
              HIV-1 infecteert geactiveerde CD4+ T-cellen en integreert als provirus in het gastheergenoom. Sommige geÃ¯nfecteerde cellen worden langlevende rustende geheugen-CD4+ T-cellen â†’ latent reservoir. Als geÃ¯ntegreerd provirus is HIV-1 transcriptioneel stil; er worden weinig tot geen virale eiwitten geproduceerd â†’ immuunsysteem kan deze cellen niet detecteren. Het reservoir wordt gevormd in de eerste dagen na infectie en blijft bestaan. Slechts 1â€“10 CD4+ T-cellen per miljoen dragen een slapend provirus. Het latente reservoir is het grootste obstakel voor HIV-genezing en vaccinatie.
            </p>
            <p className="text-amber-700 text-sm m-0">
              Cellulaire reservoirs: vooral geheugen-CD4+ T-cellen; ook macrofagen, microglia, Tfh, astrocyten, DC. Anatomische locaties: CNS, lymfevaten, longen, milt, GALT, vetweefsel, beenmerg, genitaal kanaal.
            </p>
          </div>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Verloop met cART</h4>
          <p>
            Na start van cART daalt de virale load snel onder de detectiegrens; CD4+ T-cellen nemen geleidelijk toe (immunologische reconstitutie). Vroege cART-initiatie: latent reservoir kan geminimaliseerd worden; minder cytokinen en immuunactivatie; minder T- en B-celdysfunctie.
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Subgroepen ziekteprogressie (zonder cART)</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Subgroep</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Kenmerken</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">HESN</td><td className="border border-slate-200 pl-3 py-2">Herhaald blootgesteld, geen infectie; lage aantallen geactiveerde CD4+ in mucosa; CCR5 Î”32-deletie</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Normale progressoren</td><td className="border border-slate-200 pl-3 py-2">Meerderheid; 5â€“10 jaar tot AIDS</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Snelle progressoren</td><td className="border border-slate-200 pl-3 py-2">10â€“15%; AIDS binnen 3â€“5 jaar; hoge viral load, X4-virus, HLA-B35</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">LTNP / EC</td><td className="border border-slate-200 pl-3 py-2">LTNP: tot 9%, hoge CD4+, lang asymptomatisch. EC: &lt;0,5%, ondetecteerbare viral load zonder cART. Factoren: Nef-deleties, HLA-B57, breed neutraliserende antilichamen</td></tr>
              </tbody>
            </table>
          </div>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Uitdagingen cART</h4>
          <p>
            10â€“40% immunologische non-responders (virale suppressie maar CD4+ normaliseren niet). cART leidt tot gedeeltelijk herstel van cellulaire immuniteit; persistent door immuunactivatie, low-level replicatie in weefsels, persistente antigeenpresentatie. Wereldwijd: toxiciteit, kosten, levenslange therapie, therapietrouw, resistentie. Niet-AIDS-comorbiditeiten (cardiovasculair, maligniteiten, osteoporose, neurocognitief) hangen samen met persistente immuunactivatie en chronische inflammatie.
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Ontsnapping aan immuunreacties</h4>
          <p>
            HIV-1 kan immuunreacties ontwijken via mutaties (immuunsysteem herkent HIV-1 niet) of virale factoren (cellulaire/virale processen veranderen). Mutaties in HIV-1-specifieke eiwitten belemmeren CD8+ T-cellen bij herkenning en doding van geÃ¯nfecteerde cellen. NK-cellen en macrofagen herkennen geen specifieke antigenen; B-cellen produceren neutraliserende antilichamen maar HIV-mutaties veroorzaken neutralisatiefalen.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4: HIV-1-vaccin */}
      <section id="hiv-vaccin" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            HIV-1-vaccin
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Er zijn twee typen HIV-1-vaccins: <strong>profylactisch</strong> (voorkomt HIV-infectie bij HIV-naÃ¯eve personen) en <strong>therapeutisch</strong> (stelt het immuunsysteem van PWH in staat HIV-replicatie te onderdrukken zonder cART = functionele genezing).
          </p>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2">Waarom nog geen effectief HIV-1-vaccin?</h4>
            <ul className="list-disc pl-6 space-y-1 text-rose-700 text-sm">
              <li>Snelle integratie van HIV-1 in het gastheergenoom â†’ persistent virusreservoir</li>
              <li>Hoge genetische variabiliteit en mutatiesnelheid van HIV-1</li>
            </ul>
            <p className="text-rose-700 text-sm mt-2">
              Verschillende klinische vaccinproeven zijn stopgezet wegens gebrek aan werkzaamheid. Tot nu toe toonde alleen RV144 (Thailand) enige bescherming (31,2%) â€“ te laag. mRNA-vaccins kunnen als nieuw afgiftesysteem dienen, maar de uitdagingen (genetische variabiliteit, mutatiesnelheid) blijven. Vaccins die T-celimmuniteit induceren kunnen infectie niet voorkomen en dragen het risico van een latent reservoir; ze kunnen wel virale replicatie onderdrukken (therapeutisch).
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 5: Samenvatting */}
      <section id="samenvatting" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <ClipboardCheck className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Samenvatting
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p className="font-bold text-slate-800">Wat maakt HIV-1 zo schadelijk?</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>HIV-1 infecteert de centrale helpercel van het aangeboren en adaptieve immuunsysteem: CD4+ T-helpercellen.</li>
            <li>HIV-1-infectie resulteert in chronische immuunactivatie â†’ cellulaire uitputting en schade door chronische inflammatie.</li>
            <li>HIV-1 muteert heel snel â†’ het adaptieve systeem krijgt te weinig grip.</li>
            <li>HIV-1 verstopt zich als provirus â†’ wordt niet geÃ«limineerd.</li>
          </ul>
          <p>
            PWH sterven primair aan opportunistische infecties (niet aan HIV-1 zelf) door verlies van CD4+ T-cellen. cART onderdrukt replicatie maar geneest niet; het latente reservoir blijft bestaan. Een effectief HIV-1-vaccin ontbreekt door integratie, hoge variabiliteit en mutatiesnelheid.
          </p>
        </div>
      </section>
    </SummaryLayout>
  )
}


export { ViraleDiagnostiekSummary, AntiviraleTherapieSummary, DeGroteDrieMalariaSummary, DuurzameHivZorgSummary, ImmunologischeConsequentiesHivSummary }
