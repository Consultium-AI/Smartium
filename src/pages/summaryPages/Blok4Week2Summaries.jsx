import SummaryLayout from '../../components/SummaryLayout'
import { 
  FileText, Home, BookOpen, Clock, ChevronUp, ChevronDown, ChevronRight,
  Brain, Bone, Hand, Activity, GraduationCap, Calendar, Stethoscope,
  ClipboardCheck, Layers, Target, Droplets, ArrowRight, ArrowLeft, Baby, Dna, Shield, Microscope,
  Users, BarChart3
} from 'lucide-react'
const AangeborenImmuniteitResponsSummary = () => {
  const tableOfContents = [
    { id: 'fagocytose', title: 'Fagocytose en antimicrobiÃ«le mechanismen', icon: Shield },
    { id: 'macrofaag-neutrofiel', title: 'Macrofaag vs neutrofiele granulocyt', icon: Activity },
    { id: 'complement', title: 'Complement', icon: Target },
    { id: 'nk-cellen', title: 'NK-cellen', icon: Dna },
  ]

  return (
    <SummaryLayout
      title="Aangeboren immuniteit â€“ respons"
      description="Effectormechanismen van de aangeboren afweer: fagocytose, complement en NK-cellen."
      caseLabel="Casus 2: Vrouw met Urineweginfectie"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=aangeboren-immuniteit-respons"
    >
      {/* Section 1: Fagocytose en antimicrobiÃ«le mechanismen */}
      <section id="fagocytose" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Fagocytose en antimicrobiÃ«le mechanismen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            MyeloÃ¯de cellen zoals <strong>macrofagen</strong> en <strong>neutrofiele granulocyten</strong> ruimen extracellulaire micro-organismen op. Herkenning via receptoren leidt tot activatie van effectormechanismen.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Stap</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Beschrijving</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">1. Herkenning en aanhechting</td><td className="border border-slate-200 pl-3 py-2">Microben binden aan fagocytenreceptoren</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">2. Opslokking</td><td className="border border-slate-200 pl-3 py-2">Membraan sluit om microbe â†’ fagosoom</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">3. Doding en afbraak</td><td className="border border-slate-200 pl-3 py-2">Lysosomen fuseren met fagosoom â†’ fagolysosoom; enzymatische afbraak</td></tr>
              </tbody>
            </table>
          </div>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-2">Enzymatisch</h4>
              <p className="text-amber-700 text-sm m-0">
                Lysosomale enzymen in het fagolysosoom breken micro-organismen af.
              </p>
            </div>
            <div className="p-5 bg-rose-50 rounded-xl border border-rose-200">
              <h4 className="font-bold text-rose-800 mb-2">ROS (zuurstofradicalen)</h4>
              <p className="text-rose-700 text-sm mb-2">
                NADPH-oxidase: O<sub>2</sub> â†’ O<sub>2</sub>â€¢<sup>âˆ’</sup> â†’ H<sub>2</sub>O<sub>2</sub>. Met MPO en Cl<sup>âˆ’</sup> â†’ HOCl (hypochlorig zuur).
              </p>
            </div>
            <div className="p-5 bg-purple-50 rounded-xl border border-purple-200">
              <h4 className="font-bold text-purple-800 mb-2">Stikstofoxide (NO)</h4>
              <p className="text-purple-700 text-sm m-0">
                iNOS zet arginine om in NO; samen met O<sub>2</sub>â€¢<sup>âˆ’</sup> â†’ reactieve stikstofspecies (RNS) voor microbiÃ«le doding.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 2: Macrofaag vs neutrofiele granulocyt */}
      <section id="macrofaag-neutrofiel" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-accent-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Macrofaag vs neutrofiele granulocyt
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
              <h4 className="font-bold text-blue-800 mb-2">Macrofaag</h4>
              <ul className="space-y-1 text-blue-700 text-sm">
                <li>â€¢ Kan restanten van afgebroken micro-organismen uitscheiden</li>
                <li>â€¢ Scheidt na activatie mediatoren uit die NK-cellen en Th1-cellen activeren</li>
              </ul>
            </div>
            <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
              <h4 className="font-bold text-teal-800 mb-2">Neutrofiele granulocyt</h4>
              <ul className="space-y-1 text-teal-700 text-sm">
                <li>â€¢ Specifieke granula met collagenase en gelatinase â†’ afbraak extracellulaire matrix voor migratie</li>
                <li>â€¢ Worden pas gerekruteerd als nodig; korte levensduur na activatie (enzymen schadelijk voor eigen weefsel)</li>
                <li>â€¢ <strong>NETose:</strong> DNA wordt uitgescheiden; micro-organismen plakken eraan en worden gedood</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3: Complement */}
      <section id="complement" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Complement
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Het complementsysteem behoort tot de <strong>humorale tak</strong> van de aangeboren immuniteit (naast de cellulaire tak: macrofagen en neutrofielen).
          </p>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Drie activatieroutes</h4>
            <ul className="space-y-1 text-amber-700 text-sm">
              <li>â€¢ <strong>Klassieke route:</strong> antigeen-antilichaamcomplexen</li>
              <li>â€¢ <strong>Lectine route:</strong> lectine bindt aan pathogeenoppervlak (MB-lectine)</li>
              <li>â€¢ <strong>Alternatieve route:</strong> pathogeenoppervlakken direct</li>
            </ul>
          </div>
          
          <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-2">Drie effectorfuncties</h4>
            <ul className="space-y-1 text-blue-700 text-sm">
              <li>â€¢ <strong>Recrutering inflammatoire cellen</strong></li>
              <li>â€¢ <strong>Opsonisatie</strong> van pathogenen</li>
              <li>â€¢ <strong>Doding</strong> van pathogenen</li>
            </ul>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Component</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Functie</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">C5a</td><td className="border border-slate-200 pl-3 py-2">Anafylatoxine; aantrekken van leukocyten</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">C3b</td><td className="border border-slate-200 pl-3 py-2">Opsonine; stimuleert fagocytose</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">C4bC2a</td><td className="border border-slate-200 pl-3 py-2">Klassieke C3-convertase; splits C3 in C3a en C3b</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">C5â€“C9</td><td className="border border-slate-200 pl-3 py-2">Membraanaanvalscomplex (MAC); pore in membraan â†’ lysis</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4: NK-cellen */}
      <section id="nk-cellen" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <Dna className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            NK-cellen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            <strong>Aangeboren lymfoÃ¯de cellen (ILCs)</strong> spelen een belangrijke rol in de aangeboren afweer. De bekendste zijn de <strong>NK-cellen</strong> (natural killer cells).
          </p>
          
          <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-200">
            <h4 className="font-bold text-indigo-800 mb-2">Activatie</h4>
            <p className="text-indigo-700 text-sm mb-2">
              Activatie door <strong>balans</strong> tussen activerende en inhiberende receptoren: meer binding aan activerende receptoren of minder binding aan inhiberende receptoren (bijv. MHC I).
            </p>
            <p className="text-indigo-700 text-sm m-0">
              <strong>ADCC</strong> (antibody-dependent cellular cytotoxicity): FcÎ³-receptoren (CD16) herkennen Fc-deel van IgG gebonden aan antigenen op doelwitcellen.
            </p>
          </div>
          
          <div className="p-5 bg-rose-50 rounded-xl border border-rose-200">
            <h4 className="font-bold text-rose-800 mb-2">Twee dodingmechanismen</h4>
            <p className="text-rose-700 text-sm mb-2">
              NK-cellen en cytotoxische T-cellen gebruiken dezelfde mechanismen:
            </p>
            <ul className="space-y-1 text-rose-700 text-sm">
              <li>â€¢ <strong>FasLâ€“Fas interactie:</strong> inductie van apoptose</li>
              <li>â€¢ <strong>Perforine en granzymen:</strong> perforine maakt pore; granzymen induceren apoptose</li>
            </ul>
            <p className="text-rose-700 text-sm mt-2 m-0">
              NK-cellen scheiden ook IFNÎ³ en TNFÎ± uit voor immunomodulatie.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

// Blok 4 - Week 1 Casus 2 LME 2: Antibiotica leerlijn Content
const AntibioticaLeerlijnSummary = () => {
  const tableOfContents = [
    { id: 'introductie', title: 'Introductie en geschiedenis', icon: BookOpen },
    { id: 'classificatie', title: 'Classificatie van antibiotica', icon: Layers },
    { id: 'betalactam', title: 'BÃ¨talactamantibiotica', icon: Shield },
    { id: 'overige', title: 'Overige antibioticaklassen', icon: Target },
    { id: 'keuze', title: 'Antibioticakeuze', icon: ClipboardCheck },
  ]

  return (
    <SummaryLayout
      title="Antibiotica leerlijn"
      description="Classificatie, werkingsmechanismen en eigenschappen van veelgebruikte antibiotica."
      caseLabel="Casus 2: Vrouw met Urineweginfectie"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=antibiotica-leerlijn"
    >
      {/* Section 1: Introductie en geschiedenis */}
      <section id="introductie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Introductie en geschiedenis
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            <strong>Antibioticaresistentie</strong> vormt Ã©Ã©n van de grootste bedreigingen voor de gezondheidszorg. Door onnodig of onjuist gebruik verliezen steeds meer bacteriÃ«n hun gevoeligheid. Nieuwe klassen worden nauwelijks ontwikkeld; geschat wordt dat in 2050 jaarlijks ~10 miljoen mensen sterven aan de gevolgen van resistentie.
          </p>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Geschiedenis</h4>
            <p className="text-amber-700 text-sm mb-2">
              <strong>Penicilline</strong> werd in 1928 door Alexander Fleming ontdekt (schimmel <em>Penicillium chrysogenum</em> remde <em>S. aureus</em>). Tijdens de Tweede Wereldoorlog werd penicilline breed ingezet en redde vele levens.
            </p>
            <p className="text-amber-700 text-sm m-0">
              Na 1987 zijn geen nieuwe klassen meer op de markt gekomen â€“ alleen modificaties. Dit heet de <strong>discovery void</strong>.
            </p>
          </div>
          
          <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-2">Relevantie</h4>
            <p className="text-blue-700 text-sm m-0">
              Antibiotica voorschrijven hoort bij het dagelijks werk van vrijwel elke arts. In deze module leer je de basisprincipes: hoe ze werken, wanneer je ze gebruikt en wat hun belangrijkste eigenschappen zijn.
            </p>
          </div>
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
            Classificatie van antibiotica
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Antibiotica kunnen worden ingedeeld op basis van <strong>werkingsspectrum</strong>, <strong>chemische structuur</strong> of <strong>werkingsmechanisme</strong>.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
              <h4 className="font-bold text-teal-800 mb-2">Spectrum</h4>
              <ul className="space-y-1 text-teal-700 text-sm">
                <li>â€¢ <strong>Smalspectrum:</strong> beperkte groep bacteriÃ«n</li>
                <li>â€¢ <strong>Breedspectrum:</strong> breed werkingsgebied</li>
              </ul>
            </div>
            <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-200">
              <h4 className="font-bold text-indigo-800 mb-2">Per antibioticum</h4>
              <p className="text-indigo-700 text-sm m-0">
                Indicatie, toedieningswijze, belangrijkste bijwerkingen, spectrum en voorzorgsmaatregelen.
              </p>
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Werkingsmechanisme</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Voorbeelden</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">Celwandsyntheseremmers</td><td className="border border-slate-200 pl-3 py-2">BÃ¨talactamantibiotica (penicillinen, cefalosporinen, carbapenems)</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">NucleÃ¯nezuursyntheseremmers</td><td className="border border-slate-200 pl-3 py-2">Chinolonen (ciprofloxacine), metronidazol, nitrofurantoine</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Foliumzuurmetabolismeremmers</td><td className="border border-slate-200 pl-3 py-2">Trimethoprim, co-trimoxazol</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Eiwitsyntheseremmers</td><td className="border border-slate-200 pl-3 py-2">Macroliden (azitromycine, claritromycine), tetracyclines (doxycycline)</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3: BÃ¨talactamantibiotica */}
      <section id="betalactam" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            BÃ¨talactamantibiotica
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            BÃ¨talactamantibiotica zijn <strong>celwandsyntheseremmers</strong>. Ze binden aan de bacteriÃ«le celwand en verstoren de vorming van de peptidoglycaanlaag. Ze bevatten allemaal een <strong>bÃ¨talactamring</strong>. BacteriÃ«n kunnen <strong>bÃ¨talactamases</strong> produceren die deze antibiotica inactiveren.
          </p>
          
          <div className="p-5 bg-rose-50 rounded-xl border border-rose-200">
            <h4 className="font-bold text-rose-800 mb-2">Allergie</h4>
            <p className="text-rose-700 text-sm m-0">
              Een allergie voor de bÃ¨talactamring betekent allergie voor de hele groep. Een allergie kan ook specifiek zijn voor een zijketen (bijv. amoxicilline wel, penicilline niet).
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Klasse</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Voorbeelden</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">Penicillinen (smal)</td><td className="border border-slate-200 pl-3 py-2">Penicilline, flucloxacilline</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Penicillinen (breed)</td><td className="border border-slate-200 pl-3 py-2">Amoxicilline</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Penicilline + bÃ¨talactamaseremmer</td><td className="border border-slate-200 pl-3 py-2">Amoxicilline-clavulaanzuur (AugmentinÂ®)</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Cefalosporinen</td><td className="border border-slate-200 pl-3 py-2">Ceftriaxon (3e generatie)</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Carbapenems</td><td className="border border-slate-200 pl-3 py-2">Meropenem</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4: Overige antibioticaklassen */}
      <section id="overige" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Overige antibioticaklassen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Klasse</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Mechanisme</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Voorbeelden</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">Chinolonen</td><td className="border border-slate-200 pl-3 py-2">NucleÃ¯nezuursynthese</td><td className="border border-slate-200 pl-3 py-2">Ciprofloxacine</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Macroliden</td><td className="border border-slate-200 pl-3 py-2">Eiwitsynthese (50S)</td><td className="border border-slate-200 pl-3 py-2">Azitromycine, claritromycine</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Tetracyclines</td><td className="border border-slate-200 pl-3 py-2">Eiwitsynthese (30S)</td><td className="border border-slate-200 pl-3 py-2">Doxycycline</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Foliumzuurremmers</td><td className="border border-slate-200 pl-3 py-2">Foliumzuurmetabolisme</td><td className="border border-slate-200 pl-3 py-2">Trimethoprim, co-trimoxazol</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Overig</td><td className="border border-slate-200 pl-3 py-2">NucleÃ¯nezuur / anaeroben</td><td className="border border-slate-200 pl-3 py-2">Nitrofurantoine, metronidazol</td></tr>
              </tbody>
            </table>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Exemplarische geneesmiddelenlijst (12)</h4>
            <p className="text-amber-700 text-sm m-0">
              Penicilline, flucloxacilline, amoxicilline, amoxicilline-clavulaanzuur, doxycycline, claritromycine, azitromycine, co-trimoxazol, ciprofloxacine, nitrofurantoine, trimethoprim, metronidazol. Daarnaast: ceftriaxon en meropenem (klasse en werkingsmechanisme).
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 5: Antibioticakeuze */}
      <section id="keuze" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <ClipboardCheck className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Antibioticakeuze
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Artsen gebruiken een overzicht van antibiotica met hun werkingsspectrum om het meest geschikte middel te kiezen op basis van de vermoedelijke verwekker. Het schema gaat uit van het <strong>theoretische</strong> werkingsspectrum.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border-l-4 border-primary-400">
            <h4 className="font-bold text-primary-800 mb-2">Factoren bij antibioticakeuze</h4>
            <ul className="space-y-1 text-primary-700 text-sm">
              <li>â€¢ Lokale resistentiepatronen</li>
              <li>â€¢ Toedieningsvorm</li>
              <li>â€¢ AllergieÃ«n</li>
              <li>â€¢ Bijwerkingen</li>
              <li>â€¢ Locatie van de infectie</li>
              <li>â€¢ Kosten</li>
            </ul>
          </div>
          
          <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-2">Voorbeelden</h4>
            <p className="text-blue-700 text-sm mb-2">
              <em>Neisseria meningitidis</em> is doorgaans gevoelig voor penicilline. Intracellulaire bacteriÃ«n (Legionella, Mycoplasma) zijn gevoelig voor macroliden zoals azitromycine, niet voor amoxicilline. Amoxicilline-clavulaanzuur dekt gram-positieven Ã©n gram-negatieve anaeroben (bijv. geÃ¯nfecteerde diabetische voet). Metronidazol voor anaerobendekking (bijv. geperforeerde appendicitis).
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

// Blok 4 - Week 1 Casus 2 LME 3: Introductie antimicrobiÃ«le therapie Content
const IntroductieAntimicrobieleTherapieSummary = () => {
  const tableOfContents = [
    { id: 'principes', title: 'Behandelprincipes bij infecties', icon: BookOpen },
    { id: 'self-limiting', title: 'Self-limiting infecties', icon: Shield },
    { id: 'focus', title: 'Verwijderen van het focus', icon: Target },
    { id: 'replicatie', title: 'BacteriÃ«le replicatie verstoren', icon: Layers },
    { id: 'middelen', title: 'AntimicrobiÃ«le middelen en resistentie', icon: ClipboardCheck },
  ]

  return (
    <SummaryLayout
      title="Introductie antimicrobiÃ«le therapie"
      description="Principes voor de behandeling van infectieziekten: self-limiting infecties, focusverwijdering en verstoring van bacteriÃ«le replicatie."
      caseLabel="Casus 2: Vrouw met Urineweginfectie"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=introductie-antimicrobiele-therapie"
    >
      {/* Section 1: Behandelprincipes */}
      <section id="principes" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Behandelprincipes bij infecties
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Bij de behandeling van infectieziekten kunnen drie principes worden toegepast:
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
              <h4 className="font-bold text-primary-800 mb-2">Self-limiting</h4>
              <p className="text-primary-700 text-sm m-0">
                Infecties die vanzelf overgaan; het immuunsysteem speelt hierbij een grote rol.
              </p>
            </div>
            <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
              <h4 className="font-bold text-teal-800 mb-2">Focus verwijderen</h4>
              <p className="text-teal-700 text-sm m-0">
                Het verwijderen van de infectiebron (bijv. drainage) kan soms volstaan.
              </p>
            </div>
            <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-200">
              <h4 className="font-bold text-indigo-800 mb-2">Replicatie beÃ¯nvloeden</h4>
              <p className="text-indigo-700 text-sm m-0">
                De replicatie van de verwekker verstoren met antimicrobiÃ«le middelen.
              </p>
            </div>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Belangrijk</h4>
            <p className="text-amber-700 text-sm m-0">
              Infecties waarbij ingegrepen moet worden, hoeven niet altijd met antibiotica of andere geneesmiddelen behandeld te worden. Soms volstaat het verwijderen van het focus.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 2: Self-limiting infecties */}
      <section id="self-limiting" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Self-limiting infecties en ondersteuning van het immuunsysteem
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Veel infecties gaan vanzelf over. Het immuunsysteem speelt daarbij een grote rol. In verder gezonde personen behoeven met name <strong>virale infecties</strong> vaak geen behandeling.
          </p>
          
          <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-2">Voorbeelden virale infecties</h4>
            <ul className="space-y-1 text-blue-700 text-sm">
              <li>â€¢ <strong>Influenza (griep)</strong> â€“ vaak self-limiting bij gezonde personen</li>
              <li>â€¢ <strong>Waterpokken (varicella)</strong> â€“ meestal geen behandeling nodig</li>
            </ul>
          </div>
          
          <p>
            Ook veel <strong>bacteriÃ«le infecties</strong> gaan vanzelf over, bijvoorbeeld diarree veroorzaakt door <em>E. coli</em>.
          </p>
          
          <div className="p-5 bg-rose-50 rounded-xl border border-rose-200">
            <h4 className="font-bold text-rose-800 mb-2">Immunogecompromitteerde patiÃ«nten</h4>
            <p className="text-rose-700 text-sm mb-2">
              PatiÃ«nten die een stamceltransplantatie hebben ondergaan gebruiken veel <strong>immuunsuppressiva</strong>. De eigen afweer is vaak niet in staat infecties te bestrijden; de kans op infecties met <strong>opportunistische micro-organismen</strong> is groter.
            </p>
            <p className="text-rose-700 text-sm m-0">
              Banale infecties die bij gezonde personen self-limiting zijn, kunnen dan <strong>levensbedreigend</strong> worden. Behandeling kan bestaan uit het <strong>verlagen</strong> van de dosering immuunsuppressiva. Vaak is ook aanvullende therapie nodig, zoals <strong>antivirale geneesmiddelen</strong> (bijv. bij herpes simplex).
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3: Verwijderen van het focus */}
      <section id="focus" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Verwijderen van het focus van de infectie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            In sommige gevallen moet het <strong>focus van de infectie</strong> worden verwijderd. Soms volstaat dit zonder antibiotica of andere geneesmiddelen.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border-l-4 border-primary-400">
            <h4 className="font-bold text-primary-800 mb-2">Voorbeelden</h4>
            <ul className="space-y-1 text-primary-700 text-sm">
              <li>â€¢ <strong>Drainage</strong> van een abces</li>
              <li>â€¢ Verwijderen van een geÃ¯nfecteerd implantaat of katheter</li>
              <li>â€¢ Chirurgische sanering van geÃ¯nfecteerd weefsel</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4: BacteriÃ«le replicatie verstoren */}
      <section id="replicatie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Layers className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            BacteriÃ«le replicatie verstoren
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Het stoppen van het metabolisme van een cel of organisme, waardoor deze niet meer kan functioneren en/of zich kan repliceren en tenslotte te gronde gaat, is een effectieve manier van antimicrobiÃ«le therapie.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-200">
              <h4 className="font-bold text-indigo-800 mb-2">AntimicrobiÃ«le geneesmiddelen</h4>
              <p className="text-indigo-700 text-sm m-0">
                Meestal wordt gebruik gemaakt van antimicrobiÃ«le geneesmiddelen, zoals <strong>antibiotica</strong>.
              </p>
            </div>
            <div className="p-5 bg-violet-50 rounded-xl border border-violet-200">
              <h4 className="font-bold text-violet-800 mb-2">Bacteriofagen</h4>
              <p className="text-violet-700 text-sm m-0">
                Ook met <strong>bacteriofagen</strong> kunnen bacteriÃ«n te gronde gericht worden. Aan faagtherapie zitten veel haken en ogen; in de westerse geneeskunde is dit (nog) geen gangbare therapie.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 5: AntimicrobiÃ«le middelen en resistentie */}
      <section id="middelen" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center">
            <ClipboardCheck className="w-5 h-5 text-accent-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            AntimicrobiÃ«le middelen en resistentie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            AntimicrobiÃ«le middelen kunnen worden onderverdeeld in:
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Type</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Voorbeelden verwekkers</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Antibacterieel (antibiotica)</strong></td><td className="border border-slate-200 pl-3 py-2">Pneumokok, <em>Haemophilus influenzae</em>, <em>M. tuberculosis</em>, <em>Staphylococcus aureus</em></td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Antiviraal</strong></td><td className="border border-slate-200 pl-3 py-2">SARS-CoV, Hepatitis C, Influenza, Herpes simplex</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Antifungale (antimycotica)</strong></td><td className="border border-slate-200 pl-3 py-2"><em>Candida albicans</em>, <em>Aspergillus fumigatus</em></td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Antiparasitair</strong></td><td className="border border-slate-200 pl-3 py-2"><em>Plasmodium falciparum</em>, <em>Giardia lamblia</em>, <em>Ascaris</em> spp.</td></tr>
              </tbody>
            </table>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">AntimicrobiÃ«le resistentie</h4>
            <p className="text-amber-700 text-sm m-0">
              Bij gebruik van antimicrobiÃ«le middelen gaan gevoelige micro-organismen dood. Organismen die resistent zijn hebben een voordeel en kunnen overleven. Onder <strong>selectiedruk</strong> kunnen resistente micro-organismen steeds verder uitgroeien en zich verspreiden. Resistentie-ontwikkeling en preventie komen later in het blok uitgebreid aan bod.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

// Blok 4 - Week 1 Casus 2 LME 4: Urineweginfecties Content
const UrineweginfectiesSummary = () => {
  const tableOfContents = [
    { id: 'begrippen', title: 'Begrippen', icon: BookOpen },
    { id: 'pathogenese', title: 'Pathogenese', icon: Layers },
    { id: 'klachten', title: 'Klachten en symptomen', icon: Target },
    { id: 'diagnostiek', title: 'Diagnostiek', icon: ClipboardCheck },
    { id: 'behandeling', title: 'Behandeling', icon: Shield },
  ]

  return (
    <SummaryLayout
      title="Urineweginfecties"
      description="Begrippen, pathogenese, klachten, diagnostiek en behandeling van urineweginfecties."
      caseLabel="Casus 2: Vrouw met Urineweginfectie"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=urineweginfecties"
    >
      {/* Section 1: Begrippen */}
      <section id="begrippen" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Begrippen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            De urinewegen zijn te verdelen in de <strong>lagere</strong> (blaas, urethra, bij de man de prostaat) en <strong>hogere</strong> urinewegen (ureteren, nieren).
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Begrip</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Definitie</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Bacteriurie</strong></td><td className="border border-slate-200 pl-3 py-2">Aanwezigheid van bacteriÃ«n in de urine</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Significante bacteriurie</strong></td><td className="border border-slate-200 pl-3 py-2">â‰¥10âµ kve/ml urine</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Asymptomatische bacteriurie</strong></td><td className="border border-slate-200 pl-3 py-2">Significante bacteriurie zonder klachten of tekenen van infectie</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Cystitis</strong></td><td className="border border-slate-200 pl-3 py-2">Significante bacteriurie + klachten/tekenen; lokale infectie van de blaas</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Urineweginfectie met weefselinvasie</strong></td><td className="border border-slate-200 pl-3 py-2">Pyelonefritis of prostatitis; infectie buiten de blaas</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Urosepsis</strong></td><td className="border border-slate-200 pl-3 py-2">Uropathogenen in de bloedbaan; levensbedreigend, kan leiden tot septische shock</td></tr>
              </tbody>
            </table>
          </div>
          
          <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-2">Prevalentie</h4>
            <p className="text-blue-700 text-sm m-0">
              Urineweginfecties behoren tot de meest frequente klachten bij de huisarts. Vrouwen: 124 per 1000 per jaar; mannen: 70 per 1000 per jaar.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 2: Pathogenese */}
      <section id="pathogenese" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Layers className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Pathogenese van cystitis
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            De meeste urineweginfecties ontstaan door <strong>darmbacteriÃ«n</strong>. Bij vrouwen is de endeldarm dicht bij de urethra; bacteriÃ«n kunnen gemakkelijk koloniseren. Vrouwen hebben vaker urineweginfecties dan mannen door de <strong>kortere urethra</strong>.
          </p>
          
          <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-200">
            <h4 className="font-bold text-indigo-800 mb-2">Uropathogenen</h4>
            <p className="text-indigo-700 text-sm mb-2">
              Gram-negatieve staven uit de darm: <em>E. coli</em>, <em>Klebsiella</em> spp., <em>Proteus</em> spp. Verantwoordelijk voor het overgrote deel. Virussen, schimmels en parasieten spelen vrijwel geen rol.
            </p>
          </div>
          
          <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200">
            <h4 className="font-bold text-emerald-800 mb-2">Lokale afweer</h4>
            <ul className="space-y-1 text-emerald-700 text-sm">
              <li>â€¢ <strong>Neutrofielen:</strong> adhesinen (fimbriae E. coli) activeren receptoren â†’ IL-8, CXCR1 â†’ neutrofielen</li>
              <li>â€¢ <strong>pH en osmolaliteit:</strong> hoge osmolaliteit, lage pH (~6) maken overleving moeilijk</li>
              <li>â€¢ <strong>AntibacteriÃ«le factoren:</strong> complement, mucosaal IgA, Tamm-Horsfall-eiwitten</li>
              <li>â€¢ <strong>Normale flora:</strong> grampositieve staven, streptokokken, anaeroben houden pathogene bacteriÃ«n buiten</li>
              <li>â€¢ <strong>Urineflow:</strong> goede doorloop en volledige blaaslediging essentieel; <strong>residu</strong> = urine die achterblijft; <strong>retentieblaas</strong> = blaas met residu</li>
            </ul>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Risicofactoren</h4>
            <div className="grid md:grid-cols-3 gap-3 text-amber-700 text-sm">
              <div><strong>Anatomie:</strong> vrouwelijk geslacht, seksuele activiteit</div>
              <div><strong>Residuvorming:</strong> weinig plassen, neurogene blaas, zwangerschap, prostaatvergroting, blaasstenen</div>
              <div><strong>Verstoorde afweer:</strong> immuunsuppressiva, diabetes, urinekatheter, postmenopauze</div>
            </div>
            <p className="text-amber-700 text-sm mt-2 m-0">
              Bij oudere mannen: <strong>obstructie van de urethra</strong> (prostaatvergroting) is de belangrijkste reden. Antibiotica en zaaddodende gel kunnen de normale flora verstoren.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3: Klachten en symptomen */}
      <section id="klachten" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-accent-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Klachten en symptomen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Cystitis (lokale infectie)</h4>
            <ul className="space-y-1 text-primary-700 text-sm">
              <li>â€¢ Dysurie (pijnlijke/branderige mictie), pollakisurie, toegenomen mictiefrequentie</li>
              <li>â€¢ Loze aandrang, hematurie, troebele/stinkende urine, pijn onderbuik/rug</li>
            </ul>
          </div>
          
          <div className="p-5 bg-rose-50 rounded-xl border border-rose-200">
            <h4 className="font-bold text-rose-800 mb-2">Kinderen</h4>
            <p className="text-rose-700 text-sm m-0">
              Symptomen vaak onduidelijk. Denk aan cystitis bij: slechte groei, braken, koorts &gt;3 dagen. Jonge kinderen kunnen "pijn bij plassen" niet aangeven.
            </p>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Tekenen van weefselinvasie</h4>
            <p className="text-amber-700 text-sm mb-2">
              Pyelonefritis of prostatitis: koorts, flank- of perineumpijn, malaise, koude rillingen, acute verwardheid/delier.
            </p>
            <p className="text-amber-700 text-sm m-0">
              <strong>Urosepsis:</strong> bacteriÃ«n in de bloedbaan â†’ septische shock (daling bloeddruk, onvoldoende orgaanperfusie). Levensbedreigend.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4: Diagnostiek */}
      <section id="diagnostiek" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <ClipboardCheck className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Diagnostiek
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Een goede <strong>anamnese</strong> is essentieel. Vraag naar klachten passend bij cystitis Ã©n tekenen van weefselinvasie. Differentiaal: vaginale afscheiding, urethra-uitvloed, klachten &gt;1 week, SOA-risico.
          </p>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Risicogroepen (gecompliceerd beloop)</h4>
            <ul className="space-y-1 text-teal-700 text-sm">
              <li>â€¢ Verminderde weerstand, diabetes mellitus</li>
              <li>â€¢ Afwijkingen nieren/urinewegen (nierfunctiestoornissen, cystenieren, nierstenen, neurogene blaas)</li>
              <li>â€¢ Zwangeren, mannen, kinderen &lt;12 jaar</li>
            </ul>
          </div>
          
          <div className="p-5 bg-blue-50 rounded-xl border border-blue-200">
            <h4 className="font-bold text-blue-800 mb-2">Lichamelijk onderzoek geÃ¯ndiceerd bij</h4>
            <ul className="space-y-1 text-blue-700 text-sm">
              <li>â€¢ Vrouwen met recidiverende UWI (â‰¥3/jaar), mannen, kinderen</li>
              <li>â€¢ Koorts of tekenen van weefselinvasie</li>
              <li>â€¢ PatiÃ«nten bij wie anamnese niet mogelijk is</li>
            </ul>
            <p className="text-blue-700 text-sm mt-2 m-0">
              Onderdelen: buikonderzoek (urineretentie, flankpijn, peritoneale prikkeling), inspectie genitale regio, rectaal toucher (niet bij prostatitis; wel bij vermoeden prostaatvergroting). Bij weefselinvasie: beoordelen mate van ziek-zijn (bloeddruk, saturatie, hartfrequentie, sufheid); instabiele patiÃ«nt â†’ ziekenhuis.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Urineonderzoek</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Toelichting</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Urinestick</strong></td><td className="border border-slate-200 pl-3 py-2">Eerste stap; nitriet (uropathogenen) en leukocyten; negatief nitriet sluit UWI niet uit</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Urinesediment</strong></td><td className="border border-slate-200 pl-3 py-2">Microscopisch: leukocyten en bacteriÃ«n</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Dipslide</strong></td><td className="border border-slate-200 pl-3 py-2">Kweek in huisartsenpraktijk; na 24 uur aflezen</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Kweek</strong></td><td className="border border-slate-200 pl-3 py-2">Identificatie verwekker; gevoeligheidsbepaling; geen groei na 24â€“48 uur = &lt;100 kve/ml</td></tr>
              </tbody>
            </table>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Urine afnemen</h4>
            <p className="text-amber-700 text-sm m-0">
              <strong>Midstream urine</strong> (gewassen plas): eerst beetje in toilet, daarna opvangen in steriel potje. <strong>Clean catch</strong> bij kinderen: veel drinken, luier uit, urine direct opvangen.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 5: Behandeling */}
      <section id="behandeling" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Behandeling
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Cystitis (gezonde, niet-zwangere vrouwen)</h4>
            <p className="text-primary-700 text-sm mb-2">
              Afwachtend beleid mogelijk: UWI genezen vaak binnen een week vanzelf. Advies: veel drinken. Antibiotica werken beter en sneller dan placebo, maar geven meer bijwerkingen en resistentie.
            </p>
            <p className="text-primary-700 text-sm m-0">
              Eerste keus: <strong>nitrofurantoine</strong> of <strong>trimethoprim</strong> (bereiken blaas goed, weinig bijwerkingen). <em>Niet</em> bij weefselinvasie (slechte weefselpenetratie).
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Tekenen van weefselinvasie</h4>
            <p className="text-teal-700 text-sm m-0">
              Antibiotica met weefselpenetratie en breder spectrum: <strong>ciprofloxacine</strong>, <strong>amoxicilline-clavulaanzuur</strong>, <strong>co-trimoxazol</strong>. Gevoeligheidsbepaling belangrijk. Bij urosepsis: orale behandeling te risicovol â†’ ziekenhuis.
            </p>
          </div>
          
          <div className="p-5 bg-rose-50 rounded-xl border border-rose-200">
            <h4 className="font-bold text-rose-800 mb-2">Urosepsis</h4>
            <p className="text-rose-700 text-sm m-0">
              Levensbedreigend. Antibiotica <strong>intraveneus</strong>; vaak combinatietherapie (bijv. <strong>ceftriaxon</strong> + aminoglycoside) om resistentie te minimaliseren.
            </p>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Kinderen en zwangerschap</h4>
            <p className="text-amber-700 text-sm mb-2">
              <strong>Kinderen:</strong> dosering op gewicht; sommige antibiotica verkleuren tanden; suspensie indien tabletten niet geslikt kunnen worden.
            </p>
            <p className="text-amber-700 text-sm m-0">
              <strong>Zwangerschap en lactatie:</strong> medicatie kan ontwikkeling ongeboren kind beÃ¯nvloeden; sommige antibiotica gaan over in borstvoeding.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

// Blok 4 - Week 2 Casus 3 LME 1: Infectiepreventie Content
const InfectiepreventieSummary = () => {
  const tableOfContents = [
    { id: 'wetgeving', title: 'Wetgeving en verantwoordelijkheden', icon: BookOpen },
    { id: 'definities', title: 'Definities', icon: Layers },
    { id: 'transmissie', title: 'Transmissieroutes en preventieve maatregelen', icon: Shield },
  ]

  return (
    <SummaryLayout
      title="Infectiepreventie"
      description="Wetgeving, definities en transmissieroutes voor infectiepreventie in de zorg."
      caseLabel="Casus 3: Kind met RS-virus"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=infectiepreventie"
    >
      {/* Section 1: Wetgeving en verantwoordelijkheden */}
      <section id="wetgeving" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Wetgeving en verantwoordelijkheden
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Infectiepreventie speelt een cruciale rol in de samenleving (surveillance, bron- en contactonderzoek, vaccinaties) en in de gezondheidszorg. Belangrijke wetgeving: <strong>Wet op de publieke gezondheid (2008)</strong> en <strong>Wet Kwaliteit, Klachten en Geschillen Zorg (Wkkgz)</strong>.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Instantie</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Verantwoordelijkheden</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Infectiepreventie team</strong></td><td className="border border-slate-200 pl-3 py-2">Beleid en richtlijnen; surveillance (bijv. CAUTI); uitbraakmanagement; onderwijs</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>RIVM</strong></td><td className="border border-slate-200 pl-3 py-2">Nationale richtlijnen; coÃ¶rdinatie infectieziektenbestrijding; monitoring landelijke trends</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>IGJ</strong></td><td className="border border-slate-200 pl-3 py-2">Toezicht naleving richtlijnen; inspecties; verscherpt toezicht bij afwijkingen; tuchtrecht</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Zorgmedewerkers</strong></td><td className="border border-slate-200 pl-3 py-2">Naleven protocollen; melden afwijkingen; handhygiÃ«ne; correcte katheterzorg</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 2: Definities */}
      <section id="definities" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Layers className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Definities
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Begrip</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Definitie</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Contaminatie</strong></td><td className="border border-slate-200 pl-3 py-2">Aanwezigheid van micro-organismen op oppervlakken, materialen of in vloeistoffen zonder ziekte te veroorzaken</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Kolonisatie</strong></td><td className="border border-slate-200 pl-3 py-2">Vestigen van micro-organismen op/in het lichaam zonder ziekte of symptomen; blijven onder controle van het immuunsysteem</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Infectie</strong></td><td className="border border-slate-200 pl-3 py-2">Micro-organismen vermenigvuldigen zich in het lichaam en veroorzaken immuunrespons, symptomen of ziekte</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Nosocomiale infectie</strong></td><td className="border border-slate-200 pl-3 py-2">Infectie ontstaan tijdens of als gevolg van verblijf in ziekenhuis/zorginstelling; niet aanwezig of in incubatiefase bij opname</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Endogene bron</strong></td><td className="border border-slate-200 pl-3 py-2">Micro-organismen al aanwezig in/op het lichaam (huidflora, darmbacteriÃ«n); kunnen onder bepaalde omstandigheden infectie veroorzaken</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Exogene bron</strong></td><td className="border border-slate-200 pl-3 py-2">Bron van buiten het lichaam: omgeving, andere personen, besmette materialen</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Directe transmissie</strong></td><td className="border border-slate-200 pl-3 py-2">Overdracht direct van persoon op persoon (bijv. via handen)</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Indirecte transmissie</strong></td><td className="border border-slate-200 pl-3 py-2">Overdracht via tussenliggende drager: besmette voorwerpen, voedsel, water</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3: Transmissieroutes en preventieve maatregelen */}
      <section id="transmissie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Transmissieroutes en preventieve maatregelen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            <strong>Algemene voorzorgsmaatregelen</strong> zijn altijd van toepassing: minimaliseren van blootstelling aan lichaamsvloeistoffen, slijmvliezen en besmette oppervlakken.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Vijf momenten van handhygiÃ«ne</h4>
            <ul className="space-y-1 text-primary-700 text-sm">
              <li>â€¢ Voor contact met een patiÃ«nt</li>
              <li>â€¢ Voor een aseptische handeling</li>
              <li>â€¢ Na blootstelling aan lichaamsvloeistoffen</li>
              <li>â€¢ Na contact met een patiÃ«nt</li>
              <li>â€¢ Na contact met de directe omgeving van een patiÃ«nt</li>
            </ul>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Asepsis</h4>
            <p className="text-teal-700 text-sm m-0">
              Voorkomen van besmetting van steriele lichaamsgebieden, wonden en medische hulpmiddelen: steriele handschoenen en materialen, desinfectie huid vÃ³Ã³r invasieve procedures, handhygiÃ«ne vÃ³Ã³r aseptische handelingen.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Transmissie</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Isolatie</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Maatregelen</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Voorbeelden</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Contact</strong></td><td className="border border-slate-200 pl-3 py-2">Eenpersoonskamer</td><td className="border border-slate-200 pl-3 py-2">Schort, handschoenen</td><td className="border border-slate-200 pl-3 py-2">Clostridium, ESBL, norovirus</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Druppel</strong></td><td className="border border-slate-200 pl-3 py-2">Eenpersoonskamer</td><td className="border border-slate-200 pl-3 py-2">Masker</td><td className="border border-slate-200 pl-3 py-2">Pneumokokken, kinkhoest, meningokokken</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>AÃ«rogeen</strong></td><td className="border border-slate-200 pl-3 py-2">Isolatiekamer met sluis, onderdruk</td><td className="border border-slate-200 pl-3 py-2">FFP2-masker</td><td className="border border-slate-200 pl-3 py-2">TBC, varicella, mazelen, Aspergillus</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Combinatie</strong></td><td className="border border-slate-200 pl-3 py-2">Strikte isolatie</td><td className="border border-slate-200 pl-3 py-2">Handschoenen, masker, schort</td><td className="border border-slate-200 pl-3 py-2">MRSA, MDR-Acinetobacter</td></tr>
              </tbody>
            </table>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Reiniging en desinfectie</h4>
            <p className="text-amber-700 text-sm mb-2">
              <strong>Reiniging:</strong> fysiek verwijderen van vuil. <strong>Desinfectie:</strong> doden/inactiveren van de meeste micro-organismen. <strong>Sterilisatie:</strong> alle micro-organismen inclusief sporen vernietigen.
            </p>
            <p className="text-amber-700 text-sm m-0">
              Het signaleren van redenen voor isolatiemaatregelen is de verantwoordelijkheid van de <strong>behandelaar</strong>.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

// Blok 4 - Week 2 Casus 3 LME 2: Introductie luchtweginfecties Content
const IntroductieLuchtweginfectiesSummary = () => {
  const tableOfContents = [
    { id: 'anatomie', title: 'Anatomie en indeling', icon: Layers },
    { id: 'verwekkers', title: 'Verwekkers', icon: Microscope },
    { id: 'kliniek', title: 'Klinische syndromen', icon: Stethoscope },
    { id: 'diagnostiek', title: 'Diagnostiek', icon: ClipboardCheck },
    { id: 'therapie', title: 'Therapie', icon: Shield },
    { id: 'kinkhoest', title: 'Kinkhoest', icon: Activity },
    { id: 'gecompliceerd', title: 'Gecompliceerde luchtweginfecties', icon: Target },
  ]

  return (
    <SummaryLayout
      title="Introductie luchtweginfecties"
      description="Bovenste en onderste luchtweginfecties: verwekkers, kliniek, diagnostiek en behandeling."
      caseLabel="Casus 3: Kind met RS-virus"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=introductie-luchtweginfecties"
    >
      {/* Section 1: Anatomie en indeling */}
      <section id="anatomie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Layers className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Anatomie en indeling
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Luchtweginfecties worden onderverdeeld in infecties van de <strong>bovenste</strong> en <strong>onderste luchtwegen</strong>. Onderste luchtweginfecties behoren tot de top drie van meest voorkomende aandoeningen in de kindergeneeskunde in Nederland.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
              <h4 className="font-bold text-primary-800 mb-2">Bovenste luchtwegen</h4>
              <p className="text-primary-700 text-sm m-0">
                Neus, keel en strottenhoofd (boven de stembanden). Infecties komen zeer veel voor en zijn meestal viraal.
              </p>
            </div>
            <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
              <h4 className="font-bold text-teal-800 mb-2">Onderste luchtwegen</h4>
              <p className="text-teal-700 text-sm m-0">
                Luchtpijp, bronchiÃ«n en longweefsel (longblaasjes). Belangrijkste syndromen: bronchiolitis en pneumonie.
              </p>
            </div>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Ongecompliceerde onderste luchtweginfectie</h4>
            <p className="text-amber-700 text-sm m-0">
              Klinische diagnose op basis van koorts, hoesten en verhoogde ademarbeid. Symptomen ontstaan buiten het ziekenhuis; geen tekenen van complicaties (aspiratie, abces, empyeem). Omvat bronchiolitis en typische en atypische pneumonie.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 2: Verwekkers */}
      <section id="verwekkers" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Microscope className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Verwekkers
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Er is overlap in verwekkers tussen bronchiolitis en pneumonie. In een individuele patiÃ«nt kunnen de verschijnselen vaak niet aan een specifieke verwekker gekoppeld worden.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Syndroom</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Verwekkers</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Bronchiolitis</strong></td><td className="border border-slate-200 pl-3 py-2">RSV, Humaan Metapneumovirus, Adenovirus, Bocavirus, Parainfluenzavirus (virale pathogenen)</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Typische pneumonie</strong></td><td className="border border-slate-200 pl-3 py-2">Streptococcus pneumoniae, Haemophilus influenzae, Moraxella catarrhalis; bij Influenza: bacteriÃ«le superinfectie met Staphylococcus aureus</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Atypische pneumonie</strong></td><td className="border border-slate-200 pl-3 py-2">Mycoplasma pneumoniae, Chlamydophila pneumoniae/trachomatis/psittaci, Coxiella burnetii (Q-koorts), Legionella pneumophila, Bordetella pertussis</td></tr>
              </tbody>
            </table>
          </div>
          
          <p>
            RSV is de meest voorkomende oorzaak van luchtweginfecties bij jonge kinderen. Voor het derde levensjaar hebben de meeste kinderen al een eerste infectie doorgemaakt. Het virus treedt vooral op tussen september en april.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3: Klinische syndromen */}
      <section id="kliniek" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Klinische syndromen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Bronchiolitis</h4>
            <p className="text-primary-700 text-sm mb-2">
              Virale infectie van de bronchioli; epidemisch in herfst en winter. Treft vooral kinderen &lt;2 jaar; zuigelingen &lt;6 maanden ernstiger. Risicofactoren: aangeboren hartafwijkingen, bronchopulmonale dysplasie, prematuriteit.
            </p>
            <p className="text-primary-700 text-sm m-0">
              <strong>Kliniek:</strong> forse rhinorroe â†’ tachy-dyspnoe en hoesten; hoge koorts ongebruikelijk. Auscultatoir: piepende en ratelende bijgeluiden.
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Typische pneumonie</h4>
            <p className="text-teal-700 text-sm m-0">
              Plotselinge hoge koorts, hoesten, tachy-dyspnoe. Kinderen maken een zieke indruk; thoracale pijn â†’ oppervlakkige ademhaling. Auscultatoir: gedempte percussie, verminderd ademgeruis, crepitaties. BacteriÃ«le superinfectie na virale infectie: (opnieuw) stijgende temperatuur en toename ziek-zijn.
            </p>
          </div>
          
          <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-200">
            <h4 className="font-bold text-indigo-800 mb-2">Atypische pneumonie</h4>
            <p className="text-indigo-700 text-sm m-0">
              Diffuus beeld; minder acuut; myalgie, artralgie, hoofdpijn. Extra-pulmonale verschijnselen (exantheem, mucositis, Stevens-Johnson) kunnen wijzen op Mycoplasma. Zuigeling 5â€“14 dagen met pussende conjunctivitis â†’ Chlamydophila trachomatis. Vogelcontact â†’ Chlamydophila psittaci. Veecontact â†’ Q-koorts. Legionella: aerosolen van vervuild water.
            </p>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Ernst-inschatting pneumonie</h4>
            <p className="text-amber-700 text-sm m-0">
              <strong>Ernstig:</strong> ademhaling &gt;70/min (&lt;2 jaar) of &gt;50/min (â‰¥2 jaar), matigeâ€“ernstige intrekkingen, neusvleugelen, apneus, saturatie &lt;92%, tachycardie, capillary refill â‰¥2 sec, niet meer zelf drinken, temperatuur â‰¥38,5 Â°C.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4: Diagnostiek */}
      <section id="diagnostiek" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <ClipboardCheck className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Diagnostiek
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Bij een ongecompliceerde onderste luchtweginfectie is <strong>niet standaard</strong> aanvullend onderzoek geÃ¯ndiceerd; de diagnose wordt vooral klinisch gesteld.
          </p>
          
          <div className="p-5 bg-rose-50 rounded-xl border border-rose-200">
            <h4 className="font-bold text-rose-800 mb-2">Niet aanbevolen</h4>
            <ul className="space-y-1 text-rose-700 text-sm">
              <li>â€¢ Bloedonderzoek (CRP, leukocyten, BSE, PCT, IL-6) differentieert onvoldoende tussen viraal en bacterieel</li>
              <li>â€¢ Serologie Mycoplasma/Chlamydophila in acute fase</li>
              <li>â€¢ X-thorax draagt niet bij aan klinische diagnose; geen onderscheid bacterieel/viraal</li>
            </ul>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Microbiologische diagnostiek</h4>
            <p className="text-teal-700 text-sm mb-2">
              Niet standaard bij mild beloop. Overwegen bij persisterende klachten &gt;48 uur onder behandeling. Aangewezen bij opname PICU. PCR op nasofarynxspoelsel/aspiraat meest sensitief voor virale en atypische verwekkers.
            </p>
            <p className="text-teal-700 text-sm m-0">
              Bloedkweek alleen bij ernstige pneumonie met i.v. antibiotica. Pneumokokken antigeen in urine: vaak positief door dragerschap; geen onderscheid infectie/dragerschap.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 5: Therapie */}
      <section id="therapie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Therapie ongecompliceerde luchtweginfecties
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Antibiotica</h4>
            <ul className="space-y-1 text-primary-700 text-sm">
              <li>â€¢ <strong>Bronchiolitis:</strong> alleen bij sterke verdenking bacteriÃ«le superinfectie</li>
              <li>â€¢ <strong>Kinderen &lt;2 jaar</strong> met milde symptomen: geen antibiotica (veelal geen bacteriÃ«le pneumonie)</li>
              <li>â€¢ <strong>Niet ziek-ogende kinderen â‰¥2 jaar</strong> met milde symptomen: expectatief beleid + follow-up</li>
              <li>â€¢ <strong>Ziek ogende kinderen</strong> met verdenking pneumonie: wel antibiotica (bacterieel en viraal niet betrouwbaar te onderscheiden)</li>
            </ul>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Indicatie</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Eerste keus</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">Ongecompliceerde pneumonie</td><td className="border border-slate-200 pl-3 py-2">Amoxicilline</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">M. pneumoniae of C. pneumoniae</td><td className="border border-slate-200 pl-3 py-2">Azitromycine of claritromycine</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Ernstig ziek, onvoldoende respons</td><td className="border border-slate-200 pl-3 py-2">Cefuroxim + claritromycine</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Secundaire bacteriÃ«le infectie bij Influenza</td><td className="border border-slate-200 pl-3 py-2">Amoxicilline-clavulaanzuur of cefuroxim</td></tr>
              </tbody>
            </table>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Overige behandeling</h4>
            <ul className="space-y-1 text-teal-700 text-sm">
              <li>â€¢ <strong>Bronchiolitis:</strong> geen corticosteroÃ¯den; geen antivirale middelen tegen RSV; proef salbutamol/ipratropium (stoppen indien geen effect)</li>
              <li>â€¢ <strong>Influenza:</strong> oseltamivir binnen 48 uur bij dreigende respiratoire insufficiÃ«ntie</li>
              <li>â€¢ <strong>Zuurstof:</strong> bij saturatie â‰¤92% of verhoogde ademarbeid; HFNC indien neusbril onvoldoende</li>
              <li>â€¢ <strong>Vocht/voeding:</strong> sonde bij onvoldoende intake of dreigende dehydratie</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 6: Kinkhoest */}
      <section id="kinkhoest" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Kinkhoest
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Kinkhoest wordt meestal veroorzaakt door <strong>Bordetella pertussis</strong> (soms B. parapertussis, B. bronchiseptica, B. holmesii). Toxineproductie leidt tot epitheelschade. <strong>Meldingsplichtige ziekte.</strong>
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Fasen</h4>
            <ul className="space-y-1 text-primary-700 text-sm">
              <li>â€¢ <strong>Catarrale fase</strong> (1â€“2 weken): rhinorroe, milde hoest; hoge koorts ongebruikelijk</li>
              <li>â€¢ <strong>Paroxysmale fase:</strong> verstikkende hoestbuien, gierende inspiratie; bij zuigelingen &lt;3 maanden: apneus, plotse dood</li>
              <li>â€¢ <strong>Reconvalescentiefase:</strong> persisterend hoesten; samen ~100 dagen (&lsquo;100-dagen hoest&rsquo;)</li>
            </ul>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Diagnostiek en therapie</h4>
            <p className="text-teal-700 text-sm mb-2">
              <strong>Diagnostiek:</strong> PCR op nasofaryngeaal materiaal (vroeg in ziekte); serologie bij kinderen &gt;1 jaar met ziekteduur &gt;3 weken. Lymfocytose bij B. pertussis.
            </p>
            <p className="text-teal-700 text-sm m-0">
              <strong>Therapie:</strong> macroliden (azitromycine 3 dagen of claritromycine 5 dagen) om bacterie te elimineren en secundaire gevallen te voorkomen. Chemoprofylaxe bij exposure. Opname bij zuigelingen &lt;3 maanden.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 7: Gecompliceerde luchtweginfecties */}
      <section id="gecompliceerd" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-rose-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Gecompliceerde onderste luchtweginfecties
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Gecompliceerd bij: <strong>longabces</strong>, <strong>pleura-empyeem</strong>, <strong>aspiratie</strong>, of <strong>HAP</strong> (begin â‰¥48 uur na opname).
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Type</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Verwekkers / Kenmerken</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>HAP</strong></td><td className="border border-slate-200 pl-3 py-2">Pseudomonas, Klebsiella, Staphylococcus; vaker gramnegatief; ernstiger beloop</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Aspiratiepneumonie</strong></td><td className="border border-slate-200 pl-3 py-2">Staphylococcus, Streptococcus pneumoniae, anaeroben; rechter onderkwab vaker aangedaan</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Pleura-empyeem</strong></td><td className="border border-slate-200 pl-3 py-2">Volgt op pneumonie; persisterende koorts en dyspnoe; gedempte percussie, verminderd ademgeruis</td></tr>
              </tbody>
            </table>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Antibiotica gecompliceerd</h4>
            <p className="text-amber-700 text-sm m-0">
              Eerste keus i.v.: HAP â†’ cefuroxim + gentamicine; aspiratie (ziekenhuis) â†’ amoxicilline-clavulaanzuur + gentamicine; aspiratie (thuis) â†’ amoxicilline-clavulaanzuur; pleura-empyeem â†’ cefuroxim + clindamycine. Empyeem: punctie bij vochtschil &gt;1 cm; drainage overwogen.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

// Blok 4 - Week 2 Casus 3 LME 3: Microscopische anatomie luchtwegen Content
const MicroscopischeAnatomieLuchtwegenSummary = () => {
  const tableOfContents = [
    { id: 'zones', title: 'Geleidende en respiratoire zone', icon: Layers },
    { id: 'wand', title: 'Lagen van de luchtwegwand', icon: BookOpen },
    { id: 'epitheel', title: 'Respiratoir epitheel en celtypen', icon: Microscope },
    { id: 'trachea-bronchi', title: 'Trachea, bronchi en bronchioli', icon: Activity },
    { id: 'alveoli', title: 'Alveoli en gaswisseling', icon: Target },
    { id: 'afweer', title: 'Afweermechanismen en muco-ciliary escalator', icon: Shield },
    { id: 'pcd', title: 'Primaire ciliaire dyskinesie', icon: Stethoscope },
  ]

  return (
    <SummaryLayout
      title="Microscopische anatomie luchtwegen"
      description="Histologie van de luchtwegen: geleidende en respiratoire zone, epitheel, alveoli en afweermechanismen."
      caseLabel="Casus 3: Kind met RS-virus"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=microscopische-anatomie-luchtwegen"
    >
      {/* Section 1: Geleidende en respiratoire zone */}
      <section id="zones" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Layers className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Geleidende en respiratoire zone
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            De luchtwegen worden onderverdeeld in een <strong>geleidende zone</strong> (warmt en reinigt de lucht) en een <strong>respiratoire zone</strong> (gaswisseling Oâ‚‚ en COâ‚‚).
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Verloop van de luchtwegen</h4>
            <p className="text-primary-700 text-sm m-0">
              Neus â†’ farynx â†’ larynx â†’ trachea â†’ bronchi â†’ bronchioli â†’ terminale bronchioli â†’ <strong>respiratoire bronchioli</strong> â†’ ductuli alveolares â†’ sacculi alveolares (trosjes alveoli). De respiratoire zone begint bij de respiratoire bronchioli.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Zone</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Structuur</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Functie</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">Geleidend</td><td className="border border-slate-200 pl-3 py-2">Neus t/m terminale bronchioli</td><td className="border border-slate-200 pl-3 py-2">Warmen, reinigen, geleiden lucht</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Respiratoir</td><td className="border border-slate-200 pl-3 py-2">Respiratoire bronchioli, ductuli alveolares, alveoli</td><td className="border border-slate-200 pl-3 py-2">Gaswisseling</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 2: Lagen van de luchtwegwand */}
      <section id="wand" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Lagen van de luchtwegwand
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            De wand van de luchtwegen bestaat uit vier lagen:
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Laag</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Beschrijving</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Mucosa</strong></td><td className="border border-slate-200 pl-3 py-2">Epitheelweefsel en basaalmembraan; meest oppervlakkige laag</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Submucosa</strong></td><td className="border border-slate-200 pl-3 py-2">Bevat klierweefsel dat slijm uitscheidt</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Kraakbeen/spier</strong></td><td className="border border-slate-200 pl-3 py-2">Kraakbeen houdt luchtwegen open; glad spierweefsel reguleert luchtflow</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Adventitia</strong></td><td className="border border-slate-200 pl-3 py-2">Buitenste laag; bindweefsel</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3: Respiratoir epitheel en celtypen */}
      <section id="epitheel" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Microscope className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Respiratoir epitheel en celtypen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Van neus tot en met bronchiÃ«n: <strong>respiratoir epitheel</strong> (meerrijig cilindrisch epitheel). Alle vijf celtypen maken contact met het basaalmembraan:
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Celtype</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Functie</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Cilindrische cellen met cilia</strong></td><td className="border border-slate-200 pl-3 py-2">Vervoeren slijm omhoog; reinigen luchtwegen</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Slijmbekercellen (goblet cellen)</strong></td><td className="border border-slate-200 pl-3 py-2">Produceren slijm; schadelijke stoffen blijven vastzitten</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Borstelcellen</strong></td><td className="border border-slate-200 pl-3 py-2">Waarschijnlijk chemosensorische functie</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Neuro-endocriene cellen</strong></td><td className="border border-slate-200 pl-3 py-2">Functie niet volledig bekend</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Basale cellen (stamcellen)</strong></td><td className="border border-slate-200 pl-3 py-2">Kunnen zich ontwikkelen tot andere celtypen</td></tr>
              </tbody>
            </table>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Let op</h4>
            <p className="text-amber-700 text-sm m-0">
              Respiratoir epitheel wordt af en toe onderbroken door plaveiselepitheel (stembanden, oropharynx). Vanaf bronchioli: eenlagig cilindrisch epitheel â†’ kubisch â†’ plat bij alveoli.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4: Trachea, bronchi en bronchioli */}
      <section id="trachea-bronchi" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Trachea, bronchi en bronchioli
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Trachea</h4>
            <p className="text-primary-700 text-sm m-0">
              Ongeveer 10â€“12 cm lang. Bevat hoefijzervormige kraakbeenringen; aan dorsale zijde de <strong>musculus trachealis</strong>. Splitst in 2 primaire bronchi.
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Bronchi vs bronchioli</h4>
            <p className="text-teal-700 text-sm mb-2">
              <strong>Bronchi:</strong> bevatten nog kraakbeen (onregelmatige platen). <strong>Bronchioli:</strong> geen kraakbeen; worden opengehouden door bindweefsel.
            </p>
            <p className="text-teal-700 text-sm m-0">
              <strong>Club cellen</strong> (Clara cellen): kubische cellen zonder cilia; scheiden antimicrobiÃ«le producten en <strong>surfactant</strong> uit; kunnen als stamcellen dienen.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 5: Alveoli en gaswisseling */}
      <section id="alveoli" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-rose-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Alveoli en gaswisseling
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Alveoli zijn van elkaar gescheiden door <strong>interalveolaire septa</strong> (elastisch bindweefsel). PoriÃ«n verbinden alveoli; bij obstructie kan lucht via poriÃ«n omzeild worden. Capillairen in de septa voor efficiÃ«nte gaswisseling.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Celtype</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Functie</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Type I pneumocyten</strong></td><td className="border border-slate-200 pl-3 py-2">Lang, dun, uitgestrekt; gaswisseling; ~95% alveolaire oppervlakte</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Type II pneumocyten</strong></td><td className="border border-slate-200 pl-3 py-2">Kubisch; produceren surfactant (verlaagt oppervlaktespanning); kunnen delen tot type I</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Alveolaire macrofagen</strong></td><td className="border border-slate-200 pl-3 py-2">Fagocytose; immuunafweer in alveolaire ruimte</td></tr>
              </tbody>
            </table>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Bloed-luchtbarriÃ¨re</h4>
            <p className="text-teal-700 text-sm m-0">
              Gaswisseling via Type I pneumocyt â†’ basaalmembraan â†’ endotheelcel. Surfactant voorkomt dat alveoli door oppervlaktespanning in elkaar klappen.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 6: Afweermechanismen */}
      <section id="afweer" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Afweermechanismen van de long
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <ul className="space-y-2">
            <li>â€¢ <strong>Hoesten en niezen:</strong> mechanische verwijdering van irriterende stoffen</li>
            <li>â€¢ <strong>Fagocytose door macrofagen:</strong> opruimen van bacteriÃ«n en deeltjes</li>
            <li>â€¢ <strong>Trilhaardragend epitheel:</strong> muco-ciliary escalator</li>
          </ul>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Muco-ciliary escalator</h4>
            <p className="text-teal-700 text-sm mb-2">
              Cilia bewegen gecoÃ¶rdineerd in golfbewegingen en transporteren slijm (met vuil en bacteriÃ«n) richting de mond. Normale cilia: <strong>9+2 microtubuli-structuur</strong> (9 perifere dubbele microtubuli, 2 centrale).
            </p>
            <p className="text-teal-700 text-sm m-0">
              <strong>Dynein-armen</strong> (ODA = outer dynein arms, IDA = inner dynein arms) zijn essentieel voor ciliaire beweging.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 7: Primaire ciliaire dyskinesie */}
      <section id="pcd" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Primaire ciliaire dyskinesie (PCD)
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Bij PCD zijn cilia <strong>gedeformeerd</strong> en bewegen niet goed door afwijkingen van de microtubuli (afwezige ODA, IDA of beide).
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
              <h4 className="font-bold text-primary-800 mb-2">Normaal</h4>
              <p className="text-primary-700 text-sm m-0">
                Cilia bewegen in golfbewegingen; slijm wordt naar de mond getransporteerd.
              </p>
            </div>
            <div className="p-5 bg-rose-50 rounded-xl border border-rose-200">
              <h4 className="font-bold text-rose-800 mb-2">PCD</h4>
              <p className="text-rose-700 text-sm m-0">
                Cilia zijn gedeformeerd en bewegen niet samen â†’ <strong>ophoping van slijm</strong> met vuil en bacteriÃ«n â†’ verhoogd risico op infecties.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

// Blok 4 - Week 2 Casus 3 LME 4: Pathofysiologie virale luchtweginfecties Content
const PathofysiologieViraleLuchtweginfectiesSummary = () => {
  const tableOfContents = [
    { id: 'intro', title: 'Introductie virale luchtweginfecties', icon: BookOpen },
    { id: 'diagnostiek', title: 'Diagnostiek', icon: ClipboardCheck },
    { id: 'sars-cov2', title: 'SARS-CoV-2', icon: Shield },
    { id: 'influenza', title: 'Influenzavirus', icon: Activity },
    { id: 'rsv', title: 'Respiratoir syncytieel virus (RSV)', icon: Target },
    { id: 'samenvatting', title: 'Samenvatting', icon: Layers },
  ]

  return (
    <SummaryLayout
      title="Pathofysiologie virale luchtweginfecties"
      description="Virale luchtweginfecties: SARS-CoV-2, influenzavirus en RSV â€“ pathofysiologie, kliniek en behandeling."
      caseLabel="Casus 3: Kind met RS-virus"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=pathofysiologie-virale-luchtweginfecties"
    >
      {/* Section 1: Introductie */}
      <section id="intro" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Introductie virale luchtweginfecties
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Bovenste luchtweginfecties (BLWI) worden meestal door <strong>virussen</strong> veroorzaakt. Virale infecties verhogen het risico op secundaire bacteriÃ«le infecties (otitis media, sinusitis, pneumonie).
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Belangrijkste virale verwekkers BLWI</h4>
            <p className="text-primary-700 text-sm m-0">
              Adenovirus, coronavirus, rinovirus, RSV, humaan metapneumovirus, influenzavirus, parainfluenzavirus, bocavirus, enterovirussen, parechovirus, EBV, HSV. Geassocieerd met conjunctivitis, rinitis/rinosinusitis, otitis media, faryngitis/laryngitis.
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Ziektebeeld</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Belangrijkste virale verwekkers</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Acute bronchitis</strong></td><td className="border border-slate-200 pl-3 py-2">Influenza A/B, parainfluenza, coronavirus (incl. SARS-CoV-2), rinovirus, RSV, hMPV</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Bronchiolitis</strong></td><td className="border border-slate-200 pl-3 py-2">RSV (meest voorkomend), hMPV, parainfluenza, influenza, SARS-CoV-2, adenovirus</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Pneumonie (huisarts)</strong></td><td className="border border-slate-200 pl-3 py-2">SARS-CoV-2, influenza, RSV; daarna pneumokokken</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Pneumonie (ziekenhuis)</strong></td><td className="border border-slate-200 pl-3 py-2">Pneumokokken vaker; daarna virale verwekkers</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 2: Diagnostiek */}
      <section id="diagnostiek" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <ClipboardCheck className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Diagnostiek virale luchtweginfecties
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Op basis van symptomen kan een specifiek virus waarschijnlijker zijn, maar voor zekerheid is <strong>diagnostiek</strong> noodzakelijk.
          </p>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Gouden standaard</h4>
            <p className="text-teal-700 text-sm m-0">
              <strong>Virale genoomdetectie</strong> via moleculaire test (multiplex (RT-)PCR). Detecteert meerdere pathogenen tegelijk. Sneltesten beschikbaar (&lt;1 uur): SARS-CoV-2, RSV, influenza A en B. Uitgebreider panel: RSV, influenza A/B, hMPV, seizoenscoronavirussen, parainfluenza 1â€“4, adenovirus, bocavirus, enterovirus.
            </p>
          </div>
          
          <div className="p-5 bg-rose-50 rounded-xl border border-rose-200">
            <h4 className="font-bold text-rose-800 mb-2">Niet geschikt</h4>
            <p className="text-rose-700 text-sm m-0">
              Serologie (IgM/IgG) of antigeendetectie alleen zijn onvoldoende voor acute diagnostiek van respiratoire virussen.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3: SARS-CoV-2 */}
      <section id="sars-cov2" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            SARS-CoV-2
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Ontdekt eind 2019 bij cluster pneumonie van onbekende oorzaak (Wuhan). Familie <strong>Coronaviridae</strong>; bolvormig ~100 nm; lipide-envelop met spike- (S), membraan- (M) en envelop-eiwitten (E); positief enkelstrengs RNA (~30 kb); nucleocapside (N). Naam door kroonachtige spike-trimeren.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Klinisch spectrum</h4>
            <p className="text-primary-700 text-sm mb-2">
              Asymptomatisch tot mild (verkoudheid, keelpijn, koorts, anosmie) tot ernstige onderste luchtweginfectie met ARDS (cytokinestorm), hypercoagulabiliteit (tromboembolie, DIC). Complicaties &gt;1 week; risico bij leeftijd en comorbiditeit. Long-COVID: heterogeen syndroom met inspanningsintolerantie, concentratiestoornissen, autonome dysfunctie.
            </p>
            <p className="text-primary-700 text-sm m-0">
              <strong>Diagnostiek:</strong> moleculaire detectie RNA (gouden standaard); bovenste luchtwegmonsters; BAL bij gecompliceerde infectie. Antigeentesten minder gevoelig; positief correleert met besmettelijkheidsfase.
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Vaccinatie en immuniteit</h4>
            <p className="text-teal-700 text-sm m-0">
              mRNA-vaccins: lipid nanoparticles met mRNA voor spike-eiwit. Humorale immuniteit: B-cellen produceren neutraliserende antistoffen. Cellulaire immuniteit: virus-specifieke B- en T-cellen voor immunologisch geheugen; CD8+ elimineren geÃ¯nfecteerde cellen; CD4+ ondersteunen immuunreacties.
            </p>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Seizoenscoronavirussen</h4>
            <p className="text-amber-700 text-sm m-0">
              CoV-229E, -NL63 (alfacoronavirussen), CoV-OC43, -HKU1 (bÃ¨tacoronavirussen). Vooral bovenste luchtweginfecties (rhinitis); wereldwijd, piek winter. CoV-NL63: associatie met laryngotracheitis (kroep) bij kinderen. SARS en MERS: bÃ¨tacoronavirussen; zoÃ¶notisch; hoge mortaliteit.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4: Influenzavirus */}
      <section id="influenza" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Influenzavirus
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Familie <strong>Orthomyxoviridae</strong>. Drie typen: A, B, C. Influenza A en B belangrijkst voor de mens. Envelop; gesegmenteerd negatief enkelstrengs RNA (8 segmenten A/B, 7 bij C); 9â€“11 eiwitten.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">HA en NA</h4>
            <p className="text-primary-700 text-sm m-0">
              <strong>Hemagglutinine (HA):</strong> bindt aan cellulaire receptoren (sialinezuur) op respiratoir epitheel; cel binnendringen. <strong>Neuraminidase (NA):</strong> klieft receptoren; release van nieuwgevormde virussen. Beide belangrijk voor neutraliserende antistoffen. Overdracht via <strong>druppelinfectie</strong>; vermenigvuldiging beperkt tot luchtwegen.
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Influenza A vs B</h4>
            <p className="text-teal-700 text-sm mb-2">
              <strong>Influenza A:</strong> subtypering op HA en NA (18 HA, 11 NA); H1N1, H3N2; kan pandemieÃ«n veroorzaken; veel subtypes; verandert snel.
            </p>
            <p className="text-teal-700 text-sm m-0">
              <strong>Influenza B:</strong> twee lineages (Yamagata, Victoria); verandert langzaam; enige gastheer: mens. Yamagata lijkt niet meer te circuleren sinds COVID-19.
            </p>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Antigene drift en shift</h4>
            <p className="text-amber-700 text-sm mb-2">
              <strong>Drift:</strong> kleine antigene veranderingen door mutatie-accumulatie; ontsnapping aan immuunrespons; reden voor jaarlijkse vaccin aanpassing.
            </p>
            <p className="text-amber-700 text-sm m-0">
              <strong>Shift:</strong> grote veranderingen door genetische reassortment (twee virussen infecterenzelfde cel); varkens als mengvat (humaan + aviair); nieuw subtype â†’ pandemie. Voorbeeld: influenza A(H1N1)pdm09 (2009).
            </p>
          </div>
          
          <div className="p-5 bg-rose-50 rounded-xl border border-rose-200">
            <h4 className="font-bold text-rose-800 mb-2">Kliniek en behandeling</h4>
            <p className="text-rose-700 text-sm mb-2">
              Acuut begin; koorts, malaise, hoofdpijn, spierpijn, rhinitis, hoesten, keelpijn. Ongecompliceerd: ~3 dagen. Complicaties: primaire virale pneumonie, secundaire bacteriÃ«le infectie (S. pneumoniae, H. influenzae, S. aureus), ontregeling chronische ziekte.
            </p>
            <p className="text-rose-700 text-sm m-0">
              <strong>Diagnostiek:</strong> multiplex PCR. <strong>Behandeling:</strong> oseltamivir bij opgenomen patiÃ«nten met PCR-bewezen influenza; start binnen 48 uur symptomen; bij immuungecompromitteerden laagdrempelig. Vaccinatie: jaarlijks aangepast; risicogroepen (Gezondheidsraad); typisch H3N2, H1N1, B (Yamagata/Victoria).
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 5: RSV */}
      <section id="rsv" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-rose-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Respiratoir syncytieel virus (RSV)
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Naam door vermogen <strong>syncytia</strong> (grote meerkernige cellen) te vormen. Enkelstrengs RNA; 120â€“300 nm; lipide-envelop. GlycoproteÃ¯nen F (fusie) en G (hechting); F en G induceren neutraliserende antistoffen. Twee groepen: A en B.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Epidemiologie</h4>
            <p className="text-primary-700 text-sm m-0">
              Transmissie: aerosolen, handâ€“slijmvliescontact. Incubatie 2â€“8 dagen (meestal 5). Besmettelijk kort voor ziektebegin. Bijna alle kinderen &lt;3 jaar hebben RSV-IgG; herinfecties frequent; cellulaire en humorale immuniteit bieden onvoldoende bescherming; herinfecties milder dan primaire infectie.
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">RSV bronchiolitis</h4>
            <p className="text-teal-700 text-sm mb-2">
              Ontsteking bronchioli; vooral kinderen &lt;2 jaar; incidentie hoogst in eerste levensjaar. Oorzaak winterepidemie: meestal RSV. 10â€“40% van jonge kinderen met RSV-infectie ontwikkelt bronchiolitis; 10% ziekenhuisopname (hypoxie, voedingsproblemen); 10% van opnames behoeft PICU.
            </p>
            <p className="text-teal-700 text-sm m-0">
              <strong>Pathofysiologie:</strong> virus via neus/keel/ogen â†’ infecteert trilhaarepitheel â†’ verspreiding naar bronchi, bronchioli, alveoli. Direct cytopathologisch effect + overmatige immuunrespons. Inflammatie, oedeem (sub)mucosa, necrose trilhaarcellen, mucusproductie â†’ verminderde sputumklaring, airtrapping, atelectase, shunting. Kleine bronchioli bij zuigelingen â†’ snelle obstructie.
            </p>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Complicaties, behandeling en preventie</h4>
            <p className="text-amber-700 text-sm mb-2">
              <strong>Complicaties:</strong> apneus, respiratoire ondersteuning, vochtoverbelasting (SIADH), secundaire bacteriÃ«le pneumonie, mogelijk latere astma.
            </p>
            <p className="text-amber-700 text-sm mb-2">
              <strong>Behandeling:</strong> geen specifieke therapie; ondersteunende zorg (zuurstof, sondevoeding, zo nodig PICU).
            </p>
            <p className="text-amber-700 text-sm m-0">
              <strong>Preventie:</strong> sinds sept 2025: <strong>nirsevimab</strong> (monoklonaal antilichaam) in RVP voor kinderen &lt;1 jaar.
            </p>
          </div>
          
          <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-200">
            <h4 className="font-bold text-indigo-800 mb-2">Infectiepreventie RSV</h4>
            <p className="text-indigo-700 text-sm m-0">
              Druppeltransmissie (grote druppels) + contact. <strong>Strikte isolatie</strong> (druppel + contact): schort, mondneusmasker, handschoenen; handdesinfectie voor en na bezoek. Bezoek: masker voor zelfbescherming.
            </p>
          </div>
          
          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-2">RSV-seizoen</h4>
            <p className="text-slate-700 text-sm m-0">
              Voor COVID-19: vooral novemberâ€“maart. Tijdens pandemie 2020/21: weinig RSV door maatregelen. Terugkeer zomer 2021: piek eind juli; verhoogde incidentie ~1 jaar. Vanaf 2022/23 weer herfst/winter-seizoenspatroon.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 6: Samenvatting */}
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
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Virus</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Kenmerken</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Influenza</strong></td><td className="border border-slate-200 pl-3 py-2">HA en NA; gesegmenteerd RNA; superinfecties S. pneumoniae, H. influenzae, S. aureus; jaarlijks vaccin</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>RSV</strong></td><td className="border border-slate-200 pl-3 py-2">Syncytia; bronchiolitis; meest voorkomende oorzaak bronchiolitis</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>SARS-CoV-2</strong></td><td className="border border-slate-200 pl-3 py-2">ACE-2 receptor; spike-eiwit; MIS-C; MERS-CoV dezelfde familie; mRNA-vaccin</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

// Blok 4 - Week 2 Casus 3 LME 5: Vervolg introductie virologie 2 Content
const VervolgIntroductieVirologie2Summary = () => {
  const tableOfContents = [
    { id: 'begrippen', title: 'Belangrijke begrippen', icon: BookOpen },
    { id: 'transmissie', title: 'Transmissieroutes', icon: Activity },
    { id: 'ziektebeloop', title: 'Ziektebeloop in de tijd', icon: Layers },
    { id: 'pathogenese', title: 'Virale pathogenese', icon: Target },
    { id: 'ziektebeeld', title: 'Indeling op ziektebeeld', icon: Stethoscope },
    { id: 'samenvatting', title: 'Samenvatting', icon: Layers },
  ]

  return (
    <SummaryLayout
      title="Vervolg introductie virologie 2"
      description="Belangrijke begrippen, transmissieroutes, virale pathogenese en indeling van virale infecties op ziektebeeld."
      caseLabel="Casus 3: Kind met RS-virus"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=vervolg-introductie-virologie-2"
    >
      {/* Section 1: Belangrijke begrippen */}
      <section id="begrippen" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Belangrijke begrippen in de virologie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            In de virologie zijn centrale begrippen: <strong>besmettingsweg/transmissieroute</strong>, <strong>incubatietijd</strong>, <strong>besmettelijke periode</strong>, het verschil tussen <strong>asymptomatische en symptomatische infecties</strong>, het verschil tussen <strong>latente, lytische en chronische infectie</strong>, de rol van de gastheerrespons en de kans op re-infectie.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Incubatietijd</h4>
            <p className="text-primary-700 text-sm mb-2">
              Het interval tussen besmetting en het begin van symptomen. Voorbeelden: influenza 1â€“3 dagen; hepatitis B 30â€“180 dagen; EBV 21â€“49 dagen; VZV 10â€“21 dagen; mazelen 7â€“18 dagen.
            </p>
            <p className="text-primary-700 text-sm m-0">
              <strong>Besmettelijke periode:</strong> influenza: dag vÃ³Ã³r symptomen tot 5â€“7 dagen; hepatitis B: ca. 6 weken vÃ³Ã³r klachten tot verdwijnen HBsAg; VZV: 2 dagen vÃ³Ã³r huiduitslag tot indrogen blaasjes; mazelen: 4 dagen vÃ³Ã³r tot 4 dagen na exantheem.
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Symptomatisch vs asymptomatisch</h4>
            <p className="text-teal-700 text-sm m-0">
              Blootstelling leidt niet altijd tot infectie; infectie niet altijd tot ziekte. <strong>Symptomatisch:</strong> met ziekteverschijnselen. <strong>Asymptomatisch/subklinisch:</strong> zonder duidelijke klachten. Asymptomatische personen kunnen wel besmettelijk zijn (bijv. HIV, SARS-CoV-2). Na subklinische infectie of herstel kan <strong>carriage</strong> en <strong>shedding</strong> blijven bestaan (bijv. enterovirus in feces). Voorbeeld poliovirus: &gt;70% asymptomatisch; 30% mild; 1â€“5% aseptische meningitis; 0,1â€“0,5% acute flaccide paralyse.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 2: Transmissieroutes */}
      <section id="transmissie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Transmissieroutes en porte d'entrÃ©e
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Virussen bereiken de gastheer via verschillende <strong>besmettingsbronnen</strong> en <strong>transmissieroutes</strong>. Naast horizontale transmissie (mens-op-mens) bestaat verticale transmissie (moederâ€“kind: transplacentair of perinataal).
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Transmissieroute</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Voorbeelden virussen</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Respiratoir</strong></td><td className="border border-slate-200 pl-3 py-2">Influenza, RSV, parainfluenza, adenovirus, rinovirus, coronavirus, mazelen, VZV, SARS-CoV-2</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Faeco-oraal</strong></td><td className="border border-slate-200 pl-3 py-2">Hepatitis A, rotavirus, norovirus, enterovirussen, poliovirus</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Seksueel</strong></td><td className="border border-slate-200 pl-3 py-2">HIV, HBV, HSV, HPV, HTLV</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Bloed</strong></td><td className="border border-slate-200 pl-3 py-2">HIV, hepatitis B en C</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Verticaal</strong></td><td className="border border-slate-200 pl-3 py-2">CMV, rubella, parvovirus B19, HIV (ook bij bevalling/borstvoeding)</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Via insectenbeet</strong></td><td className="border border-slate-200 pl-3 py-2">Arbovirussen (dengue, chikungunya, TBEV)</td></tr>
              </tbody>
            </table>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">ZoÃ¶notische infecties</h4>
            <p className="text-amber-700 text-sm m-0">
              Infectie via contact met wilde of gedomesticeerde dieren en/of hun producten. Vectoren (muggen, teken, vlooien) kunnen overdracht verzorgen. Voorbeeld: dengue en gele koorts via muggen mens-op-mens. Bij West-Nijlvirus is de mens een <strong>dead-end host</strong>: viraemie te laag voor mens-op-mens transmissie via mug.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3: Ziektebeloop in de tijd */}
      <section id="ziektebeloop" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Layers className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Ziektebeloop in de tijd
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Type</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Beschrijving</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Voorbeeld</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Acuut</strong></td><td className="border border-slate-200 pl-3 py-2">Self-limiting; pathogeen wordt geklaard</td><td className="border border-slate-200 pl-3 py-2">Influenza</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Persistent</strong></td><td className="border border-slate-200 pl-3 py-2">Klinisch herstel; pathogeen blijft aanwezig</td><td className="border border-slate-200 pl-3 py-2">Hepatitis B (chronisch of klaring)</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Latent met reactivatie</strong></td><td className="border border-slate-200 pl-3 py-2">Virus latent; reactiveert bij verminderde immuniteit</td><td className="border border-slate-200 pl-3 py-2">HSV-1 (koortslip), VZV (gordelroos)</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Persistent progressief</strong></td><td className="border border-slate-200 pl-3 py-2">Zonder behandeling progressie naar ernstige ziekte</td><td className="border border-slate-200 pl-3 py-2">HIV â†’ AIDS (opportunistische infecties)</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Sluipend progressief</strong></td><td className="border border-slate-200 pl-3 py-2">Langzame progressie zonder duidelijke pieken</td><td className="border border-slate-200 pl-3 py-2">Creutzfeldt-Jakob (prion, geen virus)</td></tr>
              </tbody>
            </table>
          </div>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Humane herpesvirussen</h4>
            <p className="text-primary-700 text-sm mb-2">
              HHV-1 (HSV-1), HHV-2 (HSV-2), HHV-3 (VZV), HHV-4 (EBV), HHV-5 (CMV), HHV-6/7 (roseolovirus), HHV-8 (Kaposi-sarcoom). Patroon: primaire infectie â†’ latentie â†’ reactivatie. Risico op reactivatie hangt af van mate van immunocompromittering: HSV-1/2 snel; VZV, EBV, CMV bij meer immunosuppressie; HHV-6, HHV-8 bij ernstige immunosuppressie (stamceltransplantatie, eindstadium AIDS).
            </p>
            <p className="text-primary-700 text-sm m-0">
              <strong>VZV:</strong> primaire infectie = waterpokken; reactivatie = gordelroos (herpes zoster). Bij immuuncompetenten vaak Ã©Ã©n dermatoom; bij immuungecompromitteerden meerdere dermatomen of systemisch.
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Lokale vs systemische infectie</h4>
            <p className="text-teal-700 text-sm m-0">
              <strong>Lokaal:</strong> infectie op plaats van binnenkomst (bijv. rinovirus â†’ rhinitis). <strong>Systemisch:</strong> replicatie op binnenkomstplaats, daarna verspreiding via bloed/lymfe/CZS (bijv. hepatitis A: darm â†’ lever â†’ hepatitis).
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4: Virale pathogenese */}
      <section id="pathogenese" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-rose-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Virale pathogenese
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Virale pathogenese kan bestaan uit: <strong>directe schade</strong>, <strong>afweerreactie</strong> (inclusief immunologische kruisreactie), en <strong>maligne ontaarding</strong>.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Directe schade</h4>
            <p className="text-primary-700 text-sm m-0">
              Lysis van gastheercellen door intracellulaire virusreplicatie. Voorbeelden: influenza A (degeneratie respiratoir epitheel); poliovirus (destructie motorneuronen); rotavirus (infectie mature enterocyten â†’ diarree); HSV (lytische replicatie in epitheel). Mazelenvirus: syncytia-formatie (multinucleaire reuzencellen). CMV: intranucleaire inclusielichaampjes ("uilenogen").
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Afweerreactie en immunopathologie</h4>
            <p className="text-teal-700 text-sm mb-2">
              De meeste ziekteverschijnselen zijn het gevolg van de afweerreactie: koorts, roodheid, pijn, zwelling door pro-inflammatoire cytokinen; lymfeklierzwelling, miltvergroting. Type I interferon bij influenza: hoofdpijn, spierpijn, koorts, malaise.
            </p>
            <p className="text-teal-700 text-sm mb-2">
              <strong>Cytokinestorm:</strong> IL-6, IP-10, IFNÎ³, TNF; levensbedreigend, multi-orgaanfalen; bij ernstige SARS-CoV-2. Behandeling: dexamethason, IL-6-remmers.
            </p>
            <p className="text-teal-700 text-sm m-0">
              <strong>Immuuncomplexen:</strong> antilichaam-antigeen complexen â†’ neerslag in vaatwand, huid, nier â†’ weefselschade. Voorbeeld: polyarteritis nodosa of glomerulonefritis bij hepatitis B (HBsAg-anti-HBs).
            </p>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Maligne ontaarding</h4>
            <p className="text-amber-700 text-sm m-0">
              Virussen verstoren regulatie celdeling â†’ kanker. HPV (belangrijkste oorzaak cervixcarcinoom), EBV (Burkitt-lymfoom, nasofaryngeaal carcinoom), HBV/HCV (hepatocellulair carcinoom), HHV-8 (Kaposi-sarcoom, vooral bij AIDS), HTLV-1 (adult T-cel leukemie).
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 5: Indeling op ziektebeeld */}
      <section id="ziektebeeld" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Indeling virale infecties op ziektebeeld
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Ziektebeeld</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Belangrijkste virale verwekkers</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Gastro-enteritis</strong></td><td className="border border-slate-200 pl-3 py-2">Norovirus, rotavirus, sapovirus, adenovirus</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Hepatitis</strong></td><td className="border border-slate-200 pl-3 py-2">HAV, HBV, HCV, HEV; HBV+delta; CMV, EBV, HSV, VZV (soms)</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Huidinfecties</strong></td><td className="border border-slate-200 pl-3 py-2">Lokaal: HPV, molluscum contagiosum, HSV, VZV. Exanthemen: mazelen, rubella, vijfde/zesde ziekte</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Luchtweginfecties</strong></td><td className="border border-slate-200 pl-3 py-2">Influenza A, RSV, SARS-CoV-2</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Meningitis/encefalitis</strong></td><td className="border border-slate-200 pl-3 py-2">HSV, VZV, enterovirus; polio/non-polio enterovirussen; arbovirussen (WNV, TBEV, JEV)</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Ooginfecties</strong></td><td className="border border-slate-200 pl-3 py-2">Virale conjunctivitis: 50â€“60% adenovirus</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>SOA's</strong></td><td className="border border-slate-200 pl-3 py-2">HPV (condylomata, cervixcarcinoom), HSV-2/1 (herpes genitalis), HBV, HCV, HIV, Mpox</td></tr>
              </tbody>
            </table>
          </div>
          
          <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-200">
            <h4 className="font-bold text-indigo-800 mb-2">Enterovirussen (Picornaviridae)</h4>
            <p className="text-indigo-700 text-sm m-0">
              Polio- en non-polio enterovirussen. Breed tropisme â†’ vele ziektebeelden: neonatale sepsis, conjunctivitis, hepatitis, myocarditis, hand-voet-mondziekte, respiratoire klachten, neurologische verschijnselen. Voorbeelden: poliovirus, coxsackievirus, ECHO-virus, enterovirus 71.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 6: Samenvatting */}
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
            <li>Transmissieroutes, incubatietijd en besmettelijke periode variÃ«ren per virus.</li>
            <li>Asymptomatische infecties kunnen besmettelijk zijn; infectierisico hangt vaak af van gedrag; preventie kan transmissie voorkomen.</li>
            <li>Ziektebeloop: acuut, persistent, latent met reactivatie, persistent progressief, sluipend progressief.</li>
            <li>Pathogenese: directe schade, afweerreactie (inclusief cytokinestorm, immuuncomplexen), maligne ontaarding.</li>
            <li>Virussen kunnen per ziektebeeld worden ingedeeld; veel virussen hebben breed tropisme.</li>
          </ul>
        </div>
      </section>
    </SummaryLayout>
  )
}


export { AangeborenImmuniteitResponsSummary, AntibioticaLeerlijnSummary, IntroductieAntimicrobieleTherapieSummary, UrineweginfectiesSummary, InfectiepreventieSummary, IntroductieLuchtweginfectiesSummary, MicroscopischeAnatomieLuchtwegenSummary, PathofysiologieViraleLuchtweginfectiesSummary, VervolgIntroductieVirologie2Summary }
