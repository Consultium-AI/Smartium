import {
  Activity, BookOpen, Brain, ClipboardCheck, Dna, Layers, Microscope, Shield, Stethoscope, Target,
} from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const CytokinenSummary = () => {
  const tableOfContents = [
    { id: 'intro', title: 'Introductie cytokinen', icon: BookOpen },
    { id: 'onderverdeling', title: 'Onderverdeling van cytokinen', icon: Layers },
    { id: 'effecten', title: 'Effecten en begrippen', icon: Activity },
    { id: 'jak-stat', title: 'JAK-STAT signalering', icon: Target },
    { id: 'pro-anti', title: 'Pro- en anti-inflammatoire cytokinen', icon: Shield },
    { id: 'netwerken', title: 'Cytokinen in netwerken', icon: Microscope },
    { id: 'klinisch', title: 'Klinisch belang', icon: Stethoscope },
    { id: 'samenvatting', title: 'Samenvatting', icon: ClipboardCheck },
  ]

  return (
    <SummaryLayout
      title="Cytokinen"
      description="Signaalmoleculen van het immuunsysteem: onderverdeling, effecten, JAK-STAT signalering en klinische relevantie."
      caseLabel="Casus 4: Kind met koorts"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=cytokinen"
    >
      {/* Section 1: Introductie */}
      <section id="intro" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Introductie cytokinen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Hoe communiceren immuuncellen met elkaar en met andere cellen? Dit gebeurt via de <strong>signaalmoleculen van het immuunsysteem: cytokinen</strong>. Cytokinen zijn eiwitten die door immuuncellen en andere cellen worden geproduceerd en die de activiteit van doelwitcellen beïnvloeden.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Binding en werkingsmechanisme</h4>
            <p className="text-primary-700 text-sm m-0">
              Cytokinen binden aan specifieke <strong>receptoren</strong> op de celmembraan van doelwitcellen. Na binding wordt een intracellulair signaal geactiveerd dat leidt tot veranderingen in genexpressie en celfunctie.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 2: Onderverdeling */}
      <section id="onderverdeling" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center">
            <Layers className="w-5 h-5 text-accent-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Onderverdeling van cytokinen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Cytokinen kunnen worden onderverdeeld in drie hoofdgroepen op basis van hun functie:
          </p>
          
          <div className="grid md:grid-cols-3 gap-4">
            <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
              <h4 className="font-bold text-primary-800 mb-2">Groeifactoren</h4>
              <p className="text-primary-700 text-sm m-0">
                Cytokinen die aanzetten tot <strong>proliferatie</strong> (celdeling). Stimuleren groei en differentiatie van cellen.
              </p>
            </div>
            <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
              <h4 className="font-bold text-teal-800 mb-2">Chemokinen</h4>
              <p className="text-teal-700 text-sm m-0">
                Cytokinen die cellen <strong>aantrekken</strong> (chemotaxis). Sturen migratie van leukocyten naar ontstekingshaarden.
              </p>
            </div>
            <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-2">Overige cytokinen</h4>
              <p className="text-amber-700 text-sm m-0">
                Cytokinen met andere functies zoals immunomodulatie, activatie van inflammatie of regulatie van celoverleving.
              </p>
            </div>
          </div>
          
          <p>
            Er bestaan verschillende <strong>cytokinefamilies</strong> en <strong>families van cytokinereceptoren</strong>. Voorbeelden van cytokinefamilies zijn onder meer interleukines (IL), interferonen (IFN), tumornecrosefactoren (TNF) en koloniestimulerende factoren (CSF).
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3: Effecten en begrippen */}
      <section id="effecten" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Effecten en begrippen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Cytokinen kunnen op verschillende manieren werken. De begrippen <strong>pleiotropie</strong>, <strong>redundantie</strong>, <strong>synergie</strong>, <strong>additie</strong> en <strong>inhibitie</strong> beschrijven karakteristieke effecten:
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Begrip</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Betekenis</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Voorbeeld</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Pleiotropie</strong></td><td className="border border-slate-200 pl-3 py-2">Eén cytokine heeft effect op meerdere celtypen</td><td className="border border-slate-200 pl-3 py-2">IL-12 werkt op T-cellen én NK-cellen</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Redundantie</strong></td><td className="border border-slate-200 pl-3 py-2">Meerdere cytokinen hebben hetzelfde effect</td><td className="border border-slate-200 pl-3 py-2">TNF-α en IFN-γ stimuleren beide endotheelcellen</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Synergie</strong></td><td className="border border-slate-200 pl-3 py-2">Effecten versterken elkaar</td><td className="border border-slate-200 pl-3 py-2">Samenwerking sterker dan individueel</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Additie</strong></td><td className="border border-slate-200 pl-3 py-2">Effecten tellen op</td><td className="border border-slate-200 pl-3 py-2">Gecombineerd effect</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Inhibitie</strong></td><td className="border border-slate-200 pl-3 py-2">Eén cytokine remt het effect van een ander</td><td className="border border-slate-200 pl-3 py-2">IL-10 remt pro-inflammatoire cytokinen</td></tr>
              </tbody>
            </table>
          </div>
          
          <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-200">
            <h4 className="font-bold text-indigo-800 mb-2">Werkingsbereik</h4>
            <p className="text-indigo-700 text-sm mb-2">
              <strong>Autocrien:</strong> effect op de cel die het cytokine zelf produceert.
            </p>
            <p className="text-indigo-700 text-sm mb-2">
              <strong>Paracrien:</strong> effect op naburige cellen.
            </p>
            <p className="text-indigo-700 text-sm m-0">
              <strong>Endocrien:</strong> effect op cellen elders in het lichaam (via de bloedbaan).
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4: JAK-STAT signalering */}
      <section id="jak-stat" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-purple-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            JAK-STAT signalering
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Na activatie van een cytokinereceptor verloopt de intracellulaire signalering vaak via de <strong>JAK-STAT route</strong>:
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Stappen JAK-STAT signalering</h4>
            <ol className="list-decimal pl-6 space-y-2 text-primary-700 text-sm">
              <li><strong>Cytokine binding</strong> aan de receptor op de celmembraan</li>
              <li><strong>JAK-kinasen</strong> (Janus kinases) worden geactiveerd en fosforyleren elkaar</li>
              <li><strong>STAT-eiwitten</strong> (Signal Transducers and Activators of Transcription) worden door JAK gefosforyleerd</li>
              <li>Gefosforyleerde STAT-eiwitten vormen <strong>dimeeren</strong> en transloceren naar de kern</li>
              <li>In de kern binden ze aan DNA en reguleren de <strong>transcriptie</strong> van cytokine-afhankelijke genen</li>
            </ol>
          </div>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2 flex items-center gap-2">
              <Stethoscope className="w-4 h-4" />
              Therapeutische relevantie
            </h4>
            <p className="text-rose-700 m-0">
              <strong>JAK-remmers</strong> grijpen in op deze route; ze remmen de fosforylering van STAT-eiwitten en onderbreken cytokinesignalering. Daardoor verminderen ze ontstekingsactiviteit bij auto-immuunziekten zoals reumatoïde artritis.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 5: Pro- en anti-inflammatoire cytokinen */}
      <section id="pro-anti" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 text-red-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Pro- en anti-inflammatoire cytokinen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Cytokinen kunnen worden ingedeeld naar hun effect op ontsteking. <strong>Pro-inflammatoire</strong> cytokinen (zoals TNF-α, IL-1, IL-6) bevorderen ontsteking; <strong>anti-inflammatoire</strong> cytokinen (zoals IL-10) remmen ontsteking.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-red-50 rounded-xl border border-red-200">
              <h4 className="font-bold text-red-800 mb-2">Pro-inflammatoire effecten</h4>
              <p className="text-red-700 text-sm mb-2">
                Activatie endotheelcellen → vasodilatatie, verhoogde permeabiliteit; inductie acute-fase-eiwitten in de lever; koorts; stimulatie macrofagen en andere immuuncellen.
              </p>
              <p className="text-red-700 text-sm m-0">
                <strong>Lokale effecten:</strong> roodheid, zwelling, warmte bij ontstekingshaard. <strong>Systemische effecten:</strong> koorts, acute-fase-eiwitten, hypotensie bij sepsis.
              </p>
            </div>
            <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200">
              <h4 className="font-bold text-emerald-800 mb-2">Anti-inflammatoire effecten</h4>
              <p className="text-emerald-700 text-sm m-0">
                IL-10 remt Th1-respons en pro-inflammatoire cytokinen. Hoge IL-10 spiegels bij virale infectie duiden vaak op een poging tot remming van ontsteking.
              </p>
            </div>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Nuttige oversimplificatie</h4>
            <p className="text-amber-700 text-sm m-0">
              De indeling in pro- en anti-inflammatoir is een <strong>nuttige maar vereenvoudigde benadering</strong>. In werkelijkheid hangt het effect af van context: concentratie, timing, doelwitcel en combinatie met andere cytokinen. Cytokinen werken niet geïsoleerd maar in complexe netwerken.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 6: Cytokinen in netwerken */}
      <section id="netwerken" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Microscope className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Cytokinen in netwerken
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Cytokinen functioneren <strong>niet geïsoleerd</strong> maar in complexe netwerken. Ze kunnen elkaars werking positief of negatief beïnvloeden.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Netwerkwerking</h4>
            <p className="text-primary-700 text-sm m-0">
              In een cytokinenetwerk kunnen cytokinen elkaar versterken (synergie), optellen (additie) of remmen (inhibitie). De balans tussen pro- en anti-inflammatoire signalen bepaalt het uiteindelijke ontstekingsbeeld. Bij ziekte kan deze balans verstoord raken.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 7: Klinisch belang */}
      <section id="klinisch" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-rose-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Klinisch belang
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Cytokinen spelen een centrale rol bij ontstekingsziekten en infecties. Hun effecten en netwerken zijn relevant voor ziektebeeld, diagnostiek en behandeling.
          </p>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2">Sepsis en hypotensie</h4>
            <p className="text-rose-700 text-sm m-0">
              Bij sepsis zijn IL-6 en TNF-α vaak verhoogd. Deze cytokinen activeren endotheelcellen en veroorzaken <strong>vasodilatatie</strong> en <strong>verhoogde permeabiliteit</strong>, wat leidt tot een lage bloeddruk (hypotensie).
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">JAK-remmers</h4>
            <p className="text-teal-700 text-sm m-0">
              JAK-remmers worden toegepast bij reumatoïde artritis en andere auto-immuunziekten. Ze remmen de JAK-STAT-route, waardoor transcriptie van cytokine-afhankelijke genen wordt geremd en ontstekingsactiviteit afneemt.
            </p>
          </div>
          
          <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200">
            <h4 className="font-bold text-emerald-800 mb-2">IL-10 bij virale infectie</h4>
            <p className="text-emerald-700 text-sm m-0">
              Hoge IL-10 spiegels bij een virale infectie wijzen op een poging tot remming van ontsteking. IL-10 is overwegend anti-inflammatoir en remt Th1 en pro-inflammatoire cytokinen.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 8: Samenvatting */}
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
            <li>Cytokinen zijn signaalmoleculen van het immuunsysteem; ze binden aan receptoren en beïnvloeden celfunctie.</li>
            <li>Onderverdeling: groeifactoren, chemokinen en overige cytokinen; er bestaan verschillende cytokine- en receptorfamilies.</li>
            <li>Pleiotropie, redundantie, synergie, additie en inhibitie beschrijven karakteristieke effecten van cytokinen.</li>
            <li>JAK-STAT signalering: cytokine binding → JAK-activatie → STAT-fosforylering → transcriptie in de kern.</li>
            <li>Pro- en anti-inflammatoire cytokinen; lokale en systemische effecten; de indeling is een nuttige oversimplificatie.</li>
            <li>Cytokinen werken in netwerken; ze kunnen elkaar versterken of remmen.</li>
            <li>Klinisch: sepsis (hypotensie door TNF-α/IL-6), JAK-remmers bij auto-immuunziekten, IL-10 als anti-inflammatoir signaal.</li>
          </ul>
        </div>
      </section>
    </SummaryLayout>
  )
}

// Blok 4 - Week 2 Casus 4 LME 2: Infectieuze oorzaken van koorts bij kinderen Content
const InfectieuzeOorzakenKoortsSummary = () => {
  const tableOfContents = [
    { id: 'intro', title: 'Koorts bij kinderen - introductie', icon: BookOpen },
    { id: 'luchtwegen', title: 'Luchtweginfecties', icon: Activity },
    { id: 'bovenste', title: 'Bovenste luchtwegen', icon: Layers },
    { id: 'onderste', title: 'Onderste luchtwegen', icon: Target },
    { id: 'meningitis', title: 'Meningitis', icon: Shield },
    { id: 'meningococ', title: 'Meningococcenziekte', icon: Stethoscope },
    { id: 'overige', title: 'Andere veelvoorkomende infecties', icon: Microscope },
    { id: 'vaccinatie', title: 'Vaccinatie', icon: ClipboardCheck },
    { id: 'samenvatting', title: 'Samenvatting', icon: Layers },
  ]

  return (
    <SummaryLayout
      title="Infectieuze oorzaken van koorts bij kinderen"
      description="Van luchtweginfecties tot meningitis: symptomen, verwekkers en alarmtekens bij koorts bij kinderen."
      caseLabel="Casus 4: Kind met koorts"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=infectieuze-oorzaken-koorts"
    >
      {/* Section 1: Koorts bij kinderen - introductie */}
      <section id="intro" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Koorts bij kinderen - introductie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Koorts is een veelvoorkomend symptoom en een normale reactie van het lichaam op een virus of bacterie. Voor de juiste interpretatie moet koorts <strong>betrouwbaar</strong> worden gemeten. Het meest betrouwbaar, vooral voor kinderen onder de 3 maanden, meet je met een <strong>rectale thermometer</strong>.
          </p>
          
          <p>
            In ongeveer <strong>430 van de 1000</strong> consulten van kinderen bij de huisarts betreft het koorts. Infectieuze koorts is bij kinderen heel gewoon en meestal <strong>self-limiting</strong> en daarmee onschuldig. Soms gaat het echter om een ernstige infectie en is het heel belangrijk snel te herkennen en behandelen.
          </p>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Risicogroepen</h4>
            <p className="text-amber-700 text-sm m-0">
              Deze module richt zich op koorts bij tevoren "gezonde" kinderen. Sommige kinderen hebben meer risico op ernstig ziek worden: kinderen met trisomie 21, diabetes mellitus, of aangeboren hart- of longaandoeningen.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 2: Luchtweginfecties - anatomie */}
      <section id="luchtwegen" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Luchtweginfecties
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Infecties van de luchtwegen kunnen worden onderscheiden in <strong>bovenste</strong> en <strong>onderste luchtweginfecties</strong>.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
              <h4 className="font-bold text-primary-800 mb-2">Bovenste luchtwegen</h4>
              <p className="text-primary-700 text-sm m-0">
                Neusholte, keelholte (farynx), mondholte. Infecties: rhinitis, sinusitis, faryngitis, tonsillitis, otitis media.
              </p>
            </div>
            <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
              <h4 className="font-bold text-teal-800 mb-2">Onderste luchtwegen</h4>
              <p className="text-teal-700 text-sm m-0">
                Larynx, trachea, bronchi, bronchiolen, longen. Infecties: bronchiolitis, pneumonie.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3: Bovenste luchtwegen */}
      <section id="bovenste" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center">
            <Layers className="w-5 h-5 text-accent-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Bovenste luchtweginfecties
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Kinderen hebben heel vaak een bovenste luchtweginfectie. Vaak zijn het slijmvlies van de neus en/of keel ontstoken. Soms zijn ook de tonsillen aangedaan en vergroot. <strong>De meeste bovenste luchtweginfecties worden veroorzaakt door virussen.</strong> Bacteriële verwekkers spelen een rol bij tonsillitis en otitis media. <em>Let op: otitis media valt onder de bovenste luchtwegproblemen.</em>
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Symptomen</h4>
            <p className="text-primary-700 text-sm m-0">
              Hoesten, keelpijn, heesheid, loopneus, niezen, oorpijn.
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Virale verwekkers (seizoensgebonden)</h4>
            <p className="text-teal-700 text-sm mb-2">
              Rinovirus, coronavirus, adenovirus, RSV, enterovirus, influenza, para-influenza. Epidemiologisch komen infecties vaak in clusters voor (gezin, crèche) en in dezelfde periode van het jaar.
            </p>
            <p className="text-teal-700 text-sm m-0">
              <strong>Bacteriële verwekkers:</strong> Groep A-streptokokken (faryngitis), Staphylococcus aureus (conjunctivitis, rhinosinusitis, otitis), Chlamydia trachomatis (conjunctivitis). Adenovirus kan conjunctivitis, rhinitis, otitis én faryngitis veroorzaken.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4: Onderste luchtwegen - bronchiolitis en pneumonie */}
      <section id="onderste" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-purple-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Onderste luchtweginfecties
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Onderste luchtweginfecties kunnen zich op kinderleeftijd presenteren als <strong>bronchiolitis</strong> of <strong>pneumonie</strong>.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Bronchiolitis</h4>
            <p className="text-primary-700 text-sm mb-2">
              Ontstaat door virale infectie; ernstige vernauwing van de bronchiolen. Meest beruchte verwekker: <strong>RSV</strong>. Voor kinderen &lt;2 jaar regelmatig voorkomend; voor volwassenen zeldzaam. Risicofactoren: prematuriteit, aangeboren hart-/longziekte, immuunproblemen.
            </p>
            <p className="text-primary-700 text-sm mb-2">
              <strong>Symptomen:</strong> neusverkoudheid, lichte koorts (~38°C), hoesten, piepende ademhaling (wheezen), tachypneu, oppervlakkige ademhaling, intrekkingen, slecht drinken, apneu's.
            </p>
            <p className="text-primary-700 text-sm m-0">
              Seizoensgebonden; veelvoorkomende reden voor ziekenhuisopname bij kinderen &lt;2 jaar. In 2025 start in Nederland de <strong>RS-vaccinatie</strong> in het rijksvaccinatieprogramma.
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Pneumonie</h4>
            <p className="text-teal-700 text-sm mb-2">
              Ontsteking van het longweefsel. Typisch: koorts, hoesten, tachypneu. Symptomen: dyspneu (intrekkingen, neusvleugelen, hulpademhalingsspieren, zuurstofbehoefte), kreunen, buikpijn, pijn op de borst, braken.
            </p>
            <p className="text-teal-700 text-sm mb-2">
              <strong>Virale verwekkers:</strong> RSV, humaan metapneumovirus, adenovirus, bocavirus, parainfluenzavirus.
            </p>
            <p className="text-teal-700 text-sm mb-2">
              <strong>Typische bacteriële verwekkers:</strong> Streptococcus pneumoniae, Haemophilus influenzae, Moraxella catarrhalis.
            </p>
            <p className="text-teal-700 text-sm mb-2">
              <strong>Atypische pneumonie:</strong> Mycoplasma pneumoniae, Chlamydia pneumoniae, Chlamydia trachomatis, Legionella pneumophila, Bordetella pertussis.
            </p>
            <p className="text-teal-700 text-sm m-0">
              <strong>Superinfectie:</strong> bij pneumonie door influenza is er risico op bacteriële superinfectie met Staphylococcus aureus.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 5: Meningitis */}
      <section id="meningitis" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 text-red-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Meningitis
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Meningitis is een <strong>levensbedreigende</strong> ontsteking van de hersenvliezen; er kan ook betrokkenheid zijn van de hersenen (encefalitis). Kinderen die dit hebben zijn heel ziek, maar de symptomen kunnen sterk wisselen en zijn niet altijd duidelijk. Juist daarom kan het als dokter lastig zijn dit ziektebeeld bij kinderen tijdig te herkennen.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Symptomen</h4>
            <p className="text-primary-700 text-sm mb-2">
              Ernstige hoofdpijn, pijn in nek en rug, hoge koorts, nekstijfheid/luierpijn, misselijkheid, braken, fotofobie en fonofobie, epileptische aanvallen, verwardheid of verminderd bewustzijn.
            </p>
            <p className="text-primary-700 text-sm mb-2">
              <strong>Bij zuigelingen:</strong> minder drinken, volle/bomberende fontanel.
            </p>
            <p className="text-primary-700 text-sm m-0">
              Soms petechiën op de huid: <strong>niet-wegdrukbare vlekjes</strong> (kleur verandert niet bij strijken). Nekstijfheid: kin kan niet op de borst; bij bewegen hoofd naar borst worden de benen opgetrokken (Brudzinski). Bij 7–9 van de 10 kinderen met meningitis is nekstijfheid aanwezig.
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Verwekkers</h4>
            <p className="text-teal-700 text-sm mb-2">
              <strong>Bacterieel:</strong> Neisseria meningitidis (meningococ), Streptococcus pneumoniae (pneumococ), Haemophilus influenzae.
            </p>
            <p className="text-teal-700 text-sm m-0">
              <strong>Viraal:</strong> Enterovirus, herpesvirus. <strong>Atypisch:</strong> ook mogelijk.
            </p>
          </div>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2 flex items-center gap-2">
              <Stethoscope className="w-4 h-4" />
              Restverschijnselen
            </h4>
            <p className="text-rose-700 m-0">
              Na meningitis kunnen kinderen levenslang restverschijnselen houden: gehoorverlies, neurologische schade, motorische stoornissen, littekens en huidbeschadigingen.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 6: Meningococcenziekte */}
      <section id="meningococ" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-rose-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Meningococcenziekte / meningococcensepsis
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            <strong>Neisseria meningitidis</strong> (meningococ) kan naast meningitis ook <strong>meningococcenziekte/meningococcensepsis</strong> veroorzaken. Dit ziektebeeld is zeer ernstig en kan snel fataal verlopen.
          </p>
          
          <div className="p-5 bg-red-50 rounded-xl border border-red-200">
            <h4 className="font-bold text-red-800 mb-2">Kenmerk: niet-wegdrukbare huidafwijkingen</h4>
            <p className="text-red-700 text-sm mb-2">
              Petechiën (kleine vlekjes) tot ecchymosen (samenvloeiende grote vlekken); op romp, extremiteiten en conjunctivae.
            </p>
            <p className="text-red-700 text-sm m-0">
              De snelheid waarmee petechiën, purpura en ecchymosen ontstaan na de eerste ziekteverschijnselen is een indicatie voor de ernst. <strong>Een kind met deze klachten moet heel snel in het ziekenhuis geholpen worden.</strong>
            </p>
          </div>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Symptomen zuigelingen en overige</h4>
            <p className="text-primary-700 text-sm mb-2">
              Zuigelingen: grauw zien, slecht drinken, koorts, sufheid, convulsies. Ook: koude rillingen, braken, diarree. In de eerste uren kan een rubella-achtig exantheem optreden.
            </p>
            <p className="text-primary-700 text-sm m-0">
              Meningeale prikkelingsverschijnselen (hoofdpijn, nekstijfheid, luierpijn) kunnen afwezig zijn of pas laat optreden.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 7: Andere veelvoorkomende infecties */}
      <section id="overige" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Microscope className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Andere veelvoorkomende infecties
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Kinderen kunnen koorts krijgen door diverse andere ontstekingen. Bij <strong>gastro-enteritis</strong> zijn de meeste verwekkers viraal; kinderen hebben een hoger risico op dehydratie.
          </p>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Urineweginfecties</h4>
            <p className="text-teal-700 text-sm mb-2">
              Relatief vaak bij kinderen; vaak bacterieel. Kinderen met een UTI moeten altijd naar de kinderarts voor aanvullend onderzoek en uitsluiting van anatomische afwijkingen.
            </p>
            <p className="text-teal-700 text-sm m-0">
              <strong>Klachten &lt;3 maanden:</strong> koorts, braken, lethargie, prikkelbaarheid. <strong>≥3 maanden:</strong> preverbale fase: koorts vaak; verbale fase: frequent plassen, pijnlijke mictie. Buikpijn en flankpijn kunnen voorkomen.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 8: Vaccinatie */}
      <section id="vaccinatie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <ClipboardCheck className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Vaccinatie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            In het landelijke vaccinatieprogramma zitten onder meer: <strong>Neisseria meningitidis</strong>, <strong>Streptococcus pneumoniae</strong>, <strong>Haemophilus influenzae</strong>, <strong>Bordetella pertussis</strong>. Niet in het programma: adenovirus, Moraxella catarrhalis, Mycoplasma pneumoniae.
          </p>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">RS-vaccinatie 2025</h4>
            <p className="text-amber-700 text-sm m-0">
              In 2025 start in Nederland een nieuwe vaccinatie die mogelijk impact heeft op ziekenhuisopnames bij kinderen op basis van onderste luchtweginfecties (met name bronchiolitis).
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 9: Samenvatting */}
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
            <li>Koorts: betrouwbaar meten (rectaal bij &lt;3 maanden); ~430/1000 huisartsconsulten; meestal self-limiting.</li>
            <li>Luchtweginfecties: bovenste (meestal viraal; tonsillitis, otitis media) en onderste (bronchiolitis vooral RSV; pneumonie virale, typische en atypische verwekkers).</li>
            <li>Bronchiolitis: kinderen &lt;2 jaar; RSV; wheezen, tachypneu, intrekkingen; RS-vaccinatie 2025.</li>
            <li>Meningitis: levensbedreigend; nekstijfheid, petechiën; bacterieel (meningococ, pneumococ, H. influenzae); restverschijnselen mogelijk.</li>
            <li>Meningococcenziekte: zeer ernstig; niet-wegdrukbare vlekken; snel ziekenhuis.</li>
            <li>UTI: vaak bacterieel; verwijzing kinderarts; symptomen variëren per leeftijd.</li>
            <li>Vaccinatieprogramma: meningococ, pneumococ, H. influenzae, pertussis.</li>
          </ul>
        </div>
      </section>
    </SummaryLayout>
  )
}

// Blok 4 - Week 2 Casus 4 LME 3: Niet-infectieuze oorzaken van koorts bij kinderen Content
const NietInfectieuzeOorzakenKoortsSummary = () => {
  const tableOfContents = [
    { id: 'casus', title: 'Casus en differentiaaldiagnose', icon: Stethoscope },
    { id: 'pathways', title: 'Pathways koorts', icon: Activity },
    { id: 'overige', title: 'Overige oorzaken', icon: Layers },
    { id: 'imade', title: 'I MADE-acroniem', icon: ClipboardCheck },
    { id: 'kawasaki', title: 'Kawasaki', icon: Target },
    { id: 'samenvatting', title: 'Samenvatting', icon: BookOpen },
  ]

  return (
    <SummaryLayout
      title="Niet-infectieuze oorzaken van koorts bij kinderen"
      description="Van pathways en thermoregulatie tot auto-immuunziekten en Kawasaki: differentiaaldiagnose bij koorts."
      caseLabel="Casus 4: Kind met koorts"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=niet-infectieuze-oorzaken-koorts"
    >
      {/* Section 1: Casus en differentiaaldiagnose */}
      <section id="casus" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Casus en differentiaaldiagnose
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            In de casus presenteert een kind met koorts. Het is belangrijk om bij <strong>ieder kind met koorts</strong> altijd een infectie in je differentiaaldiagnose te overwegen. Wanneer er geen duidelijke oorzaak is, is aanvullend onderzoek nodig naar onderliggende problemen (infectieus dan wel niet-infectieus) die tijdige behandeling behoeven.
          </p>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Kernpunt</h4>
            <p className="text-amber-700 text-sm m-0">
              Alleen bij duidelijke informatie kan een oorzaak worden uitgesloten. Bijvoorbeeld: medicatie kan worden uitgesloten als het kind geen medicatie gebruikt. Infectie blijft vaak het meest waarschijnlijk in de DD; auto-immuun of auto-inflammatoire beelden hebben zeker ook een plaats in de DD.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 2: Pathways koorts */}
      <section id="pathways" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Pathways koorts
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            In de thermoregulatie en pathofysiologie van koorts spelen verschillende mechanismen een rol. Naast infectie kunnen ook andere problemen in de pathway koorts geven:
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Niet-infectieuze mechanismen in de pathway</h4>
            <ul className="list-disc pl-6 space-y-2 text-primary-700 text-sm">
              <li><strong>Schade hypothalamus</strong> – verstoorde thermoregulatie</li>
              <li><strong>Teveel aan schildklierhormoon</strong> – verhoogd basaal metabolisme</li>
              <li><strong>Andere redenen voor pyrogenen</strong> – auto-immuun/auto-inflammatoir; trombose, longembolie; maligniteit</li>
              <li><strong>Overmatige stimulatie sympathicus</strong></li>
              <li><strong>Overmatige prostaglandineproductie</strong></li>
            </ul>
          </div>
          
          <p>
            De <strong>hypothalamus</strong> reguleert de lichaamstemperatuur; temperatuurgevoelige receptoren in huid en hypothalamus sturen signalen. Bij verhoogde temperatuur: zweten, vasodilatatie; bij verlaagde temperatuur: rillen, vasoconstrictie, pilo-erectie, verhoogd basaal metabolisme. Pyrogenen (exogeen zoals LPS, endogeen zoals cytokinen) leiden via PGE2 en de OVLT naar de POA van de hypothalamus en tot koorts.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3: Overige oorzaken */}
      <section id="overige" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center">
            <Layers className="w-5 h-5 text-accent-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Overige oorzaken koorts bij kinderen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Niet-infectieuze oorzaken van koorts kunnen worden ingedeeld naar pathofysiologisch mechanisme:
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
              <h4 className="font-bold text-primary-800 mb-2">Auto-immuniteit</h4>
              <p className="text-primary-700 text-sm mb-2">
                Ontregeling verworven immuunsysteem; T- en B-cellen tegen lichaamseigen antigenen, inflammatie en weefselschade. Koorts kan een uiting zijn van een auto-immuunziekte, maar niet alle presenteren met koorts.
              </p>
              <p className="text-primary-700 text-sm mb-2">
                <strong>Met koorts:</strong> systemische lupus erythematodes, systemische vasculitis. <strong>Zonder koorts:</strong> diabetes type I, coeliakie, ziekte van Graves.
              </p>
              <p className="text-primary-700 text-sm m-0">
                Vooral <strong>systemische</strong> auto-immuunziekten presenteren zich met koorts; orgaanspecifieke meestal niet.
              </p>
            </div>
            <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
              <h4 className="font-bold text-teal-800 mb-2">Auto-inflammatie</h4>
              <p className="text-teal-700 text-sm mb-2">
                Verstoring aangeboren immuunsysteem → spontane activering en productie van pro-inflammatoire cytokinen (IL-1, IL-6, TNF-α). Kenmerk: spontane inflammatie en koorts; <strong>geen autoantistoffen</strong> (aangeboren immuunsysteem).
              </p>
              <p className="text-teal-700 text-sm m-0">
                Bekendste groep: <strong>periodieke koortssyndromen</strong>. Voorbeelden: colitis ulcerosa, ziekte van Crohn, CRMO, systemische juveniele idiopathische artritis, familiaire mediterrane koorts.
              </p>
            </div>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Maligniteit</h4>
            <p className="text-amber-700 text-sm mb-2">
              Een maligniteit kan zich presenteren met koorts. Koorts is zelden het enige symptoom (denk aan ongewenst gewichtsverlies, snel optredende blauwe plekken).
            </p>
            <p className="text-amber-700 text-sm mb-2">
              Mechanismen: infectie bij niet goed functionerende witte bloedcellen; inflammatie; aantasting thermoregulatiecentrum door hersentumoren/metastasen; vrijkomen cytokinen (pyrogenen) door immuunreactie op tumor of weefselafbraak; bepaalde tumoren (neuro-endocriene) produceren zelf cytokinen.
            </p>
            <p className="text-amber-700 text-sm m-0">
              <strong>Medicatie</strong> kan ook koorts geven (bijv. via hypothalamus).
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-rose-50 rounded-xl border border-rose-200">
              <h4 className="font-bold text-rose-800 mb-2">Trombose/longembolie</h4>
              <p className="text-rose-700 text-sm m-0">
                Bloedvat verstopt door bloedstolsel. Door weefselschade komen pyrogenen vrij (IL-1, IL-6, IL-8, TNF-α).
              </p>
            </div>
            <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-200">
              <h4 className="font-bold text-indigo-800 mb-2">Endocrien</h4>
              <p className="text-indigo-700 text-sm m-0">
                <strong>Hyperthyreoïdie:</strong> teveel schildklierhormoon (T3, T4) → hoger basaal metabolisme → hogere temperatuur.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4: I MADE */}
      <section id="imade" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <ClipboardCheck className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            I MADE-acroniem
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Om de verschillende oorzaken van koorts te onthouden kun je het acroniem <strong>I MADE</strong> gebruiken:
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">I MADE</h4>
            <ul className="list-disc pl-6 space-y-2 text-primary-700 text-sm">
              <li><strong>I</strong> – Infectieus</li>
              <li><strong>M</strong> – Maligniteit</li>
              <li><strong>A</strong> – Auto-immuun/Auto-inflammatoir</li>
              <li><strong>D</strong> – Drugs (medicatie)</li>
              <li><strong>E</strong> – Everything else (m.n. endocrien en neurologisch)</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 5: Kawasaki */}
      <section id="kawasaki" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-red-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Kawasaki
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Kawasaki is een middelgrote vasculitis en een belangrijke niet-infectieuze oorzaak van koorts bij jonge kinderen. <strong>80% van de presentaties zijn kinderen onder de 5 jaar.</strong>
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Diagnostische criteria</h4>
            <p className="text-primary-700 text-sm mb-2">
              <strong>Aanhoudende koorts (minimaal 5 dagen)</strong> gecombineerd met ten minste 4 van de volgende criteria:
            </p>
            <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm mb-2">
              <li><strong>Extremiteiten:</strong> acuut: erytheem handpalmen/voetzolen, oedemateuze handen/voeten; subacuut (week 2/3): periunguaal vervellen</li>
              <li><strong>Polymorf exantheem</strong></li>
              <li><strong>Bilateraal bulbaire conjunctivale vaatinjectie zonder exsudaat</strong></li>
              <li><strong>Tong en lippen:</strong> erytheem, aardbeientong, gebarsten lippen, diffuse roodheid mond- en keelslijmvlies</li>
              <li><strong>Cervicale lymfadenopathie</strong> (&gt;1,5 cm), meestal unilateraal</li>
            </ul>
            <p className="text-primary-700 text-sm m-0">
              Plus exclusie van andere ziekten met een zelfde presentatie.
            </p>
          </div>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2 flex items-center gap-2">
              <Stethoscope className="w-4 h-4" />
              Complicaties en behandeling
            </h4>
            <p className="text-rose-700 text-sm mb-2">
              Ook de <strong>coronairen</strong> kunnen betrokken zijn. Onbehandeld ontwikkelt 25% coronair arterie-aneurysmata. Tijdig herkennen en behandelen is cruciaal.
            </p>
            <p className="text-rose-700 text-sm m-0">
              <strong>Behandeling:</strong> verminderen van inflammatie (IVIG, corticosteroiden) en voorkomen van trombose (acetylsalicylzuur).
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 6: Samenvatting */}
      <section id="samenvatting" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Samenvatting
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <ul className="list-disc pl-6 space-y-2">
            <li>Bij ieder kind met koorts: altijd infectie in de DD overwegen.</li>
            <li>Pathways: niet-infectieuze mechanismen o.a. schade hypothalamus, hyperthyreoïdie, pyrogenen (auto-immuun, trombose, maligniteit), overmatige prostaglandine productie.</li>
            <li>Oorzaken: auto-immuniteit (systemisch vs. orgaanspecifiek), auto-inflammatie (geen autoantistoffen, periodieke koortssyndromen), maligniteit, trombose/longembolie, endocrien (hyperthyreoïdie).</li>
            <li>I MADE: Infectieus, Maligniteit, Auto-immuun/Auto-inflammatoir, Drugs, Everything else.</li>
            <li>Kawasaki: koorts ≥5 dagen + 4 van 5 criteria; vasculitis; 80% &lt;5 jaar; 25% coronair aneurysmata onbehandeld; behandeling IVIG, corticosteroiden, acetylsalicylzuur.</li>
          </ul>
        </div>
      </section>
    </SummaryLayout>
  )
}

// Blok 4 - Week 2 Casus 4 LME 4: Ontstekingsmediatoren Content
const OntstekingsmediatorenSummary = () => {
  const tableOfContents = [
    { id: 'intro', title: 'Introductie ontstekingsmediatoren', icon: BookOpen },
    { id: 'categorieen', title: 'Moleculaire categorieën', icon: Layers },
    { id: 'vrijkomen', title: 'Vrijkomen van mediatoren', icon: Activity },
    { id: 'allergie', title: 'Acute allergische reactie', icon: Shield },
    { id: 'radicalen', title: 'Zuurstof- en stikstofradicalen', icon: Target },
    { id: 'arachidonzuur', title: 'Arachidonzuurmetabolieten', icon: Microscope },
    { id: 'ontstekingsremmers', title: 'Ontstekingsremmers', icon: Stethoscope },
    { id: 'acutefase', title: 'Acutefase-reactie', icon: ClipboardCheck },
    { id: 'plasma', title: 'Plasma-mediatorsystemen', icon: Layers },
    { id: 'samenvatting', title: 'Samenvatting', icon: BookOpen },
  ]

  return (
    <SummaryLayout
      title="Ontstekingsmediatoren"
      description="Van moleculaire categorieën tot plasma-cascades: overzicht van mediatoren van de acute ontstekingsreactie."
      caseLabel="Casus 4: Kind met koorts"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=ontstekingsmediatoren"
    >
      {/* Section 1: Introductie */}
      <section id="intro" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Introductie ontstekingsmediatoren
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Ontstekingsmediatoren zijn het <strong>communicatiemiddel</strong> tussen de cellen die deelnemen aan de ontstekingsreactie. Ze stimuleren of remmen de cellulaire activiteit en sturen daarmee de acute en chronische ontstekingsreactie.
          </p>
          
          <p>
            Mediatoren worden geproduceerd als reactie op blootstelling aan micro-organismen of necrotisch weefsel, en als gevolg van immuunreacties. De aanmaak van ontstekingsmediatoren leidt vaak tot activatie of het vrijkomen van andere mediatoren; zo kan een <strong>cascade</strong> worden teweeggebracht die de ontstekingsreactie versterkt of remt.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 2: Moleculaire categorieën */}
      <section id="categorieen" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-accent-100 rounded-xl flex items-center justify-center">
            <Layers className="w-5 h-5 text-accent-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Moleculaire categorieën
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Ontstekingsmediatoren zijn heel verschillend wat betreft moleculaire bouw en plaats van productie en werking. Diverse mediatoren worden in de <strong>lever</strong> gemaakt en circuleren in inactieve vorm in het bloed. Andere worden door cellen op de plaats van ontsteking geproduceerd; ze zijn opgeslagen in de cel of worden direct na productie uitgescheiden.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Categorie</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Voorbeelden</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Klein-moleculaire verbinding</strong></td><td className="border border-slate-200 pl-3 py-2">Stikstofoxide (NO), reactief zuurstof (ROS)</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Aminozuur-derivaat</strong></td><td className="border border-slate-200 pl-3 py-2">Serotonine, histamine</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Lipide</strong></td><td className="border border-slate-200 pl-3 py-2">Leukotrienen, prostaglandinen, cortisol</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2"><strong>Eiwit</strong></td><td className="border border-slate-200 pl-3 py-2">Stollingsfactoren, cytokinen, chemokinen, complementfactoren, lysosomale enzymen, acuutfase-eiwitten</td></tr>
              </tbody>
            </table>
          </div>
          
          <div id="vrijkomen" className="p-5 bg-teal-50 rounded-xl border border-teal-200 scroll-mt-24">
            <h4 className="font-bold text-teal-800 mb-2">Vrijkomen</h4>
            <p className="text-teal-700 text-sm mb-2">
              <strong>Uit opslag:</strong> histamine, serotonine, lysosomale enzymen (direct vrijgegeven na prikkel).
            </p>
            <p className="text-teal-700 text-sm m-0">
              <strong>Direct na synthese:</strong> ROS, stollingsfactoren, cortisol, leukotrienen, NO, cytokinen/chemokinen, complementfactoren, acuutfase-eiwitten, prostaglandinen.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3: Acute allergische reactie */}
      <section id="allergie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 text-red-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Acute allergische reactie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Bij acute allergische reacties is de tijd tussen contact met het allergeen en het optreden van symptomen (hoesten, niezen, huiduitslag, soms allergische shock) vaak niet meer dan één minuut.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Mestcellen</h4>
            <p className="text-primary-700 text-sm mb-2">
              <strong>Mestcellen</strong> spelen een essentiële rol. Ontstekingsmediatoren zoals histamine zijn al aangemaakt en opgeslagen in de <strong>granula</strong> van mestcellen.
            </p>
            <p className="text-primary-700 text-sm mb-2">
              Door binding van antigeen-IgE-complexen aan IgE-receptoren worden mestcellen geactiveerd. Hierop volgt een snelle <strong>degranulatie</strong> (uitstoot van de inhoud van de granula), soms in grote hoeveelheden met systemische effecten.
            </p>
            <p className="text-primary-700 text-sm m-0">
              Cross-linking van IgE-receptoren door allergeen is cruciaal voor activatie.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4: Zuurstof- en stikstofradicalen */}
      <section id="radicalen" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Zuurstof- en stikstofradicalen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Bij contact met pathogenen reageren aangeboren immuuncellen snel door onder meer <strong>zuurstofradicalen</strong> (ROS) en <strong>stikstofradicalen</strong> (NO) te produceren. Het NADPH-oxidase-complex zet O₂ om in <strong>superoxide (O₂•⁻)</strong>. Superoxide dismutase vormt H₂O₂; katalase en glutathion-peroxidase breken H₂O₂ af. <strong>Myeloperoxidase</strong> produceert uit H₂O₂ + Cl⁻ de microbicide producten <strong>HOCl</strong> en <strong>OH•</strong>.
          </p>
          
          <p>
            <strong>iNOS</strong> (in macrofagen) zet L-arginine om in <strong>NO•</strong>. Superoxide en NO• vormen niet-enzymatisch <strong>peroxynitriet (ONOO⁻)</strong> – sterk microbicide. Zuurstofradicalen worden ook door mitochondriën gemaakt; bescherming via superoxide dismutase, katalase, glutathion-peroxidase en anti-oxidanten (vitamine E, C, A, bètacaroteen) is essentieel.
          </p>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Cellulaire schade door radicalen</h4>
            <p className="text-amber-700 text-sm mb-2">
              <strong>Lipide peroxidatie</strong> → membraanschade → lysis. <strong>Eiwit-modificatie</strong> → onjuiste vouwing → enzymdisfunctie. <strong>DNA-schade</strong> → breuk → apoptose.
            </p>
            <p className="text-amber-700 text-sm m-0">
              ROS bepalen de redox-status; ze activeren redox-sensoren en induceren genexpressie van anti-oxidatieve enzymen en cytokinen. Zuurstofradicalen activeren ook het <strong>NLRP3-inflammasoom</strong>, dat pro-IL-1β knipt waardoor IL-1β vrijkomt.
            </p>
          </div>
          
          <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-200">
            <h4 className="font-bold text-indigo-800 mb-2">NO</h4>
            <p className="text-indigo-700 text-sm mb-2">
              NO wordt ook door <strong>eNOS</strong> (endotheel) en <strong>nNOS</strong> (zenuwcellen) geproduceerd. In zenuwcellen fungeert NO als neurotransmitter.
            </p>
            <p className="text-indigo-700 text-sm m-0">
              <strong>Fysiologische functie in de vaatwand:</strong> vasodilatatie en relaxatie van gladde spiercellen.
            </p>
          </div>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2 flex items-center gap-2">
              <Stethoscope className="w-4 h-4" />
              Primaire immunodeficiënties
            </h4>
            <p className="text-rose-700 text-sm mb-2">
              <strong>Chronische granulomateuze ziekte (CGD):</strong> defect in NADPH-oxidase → verminderde oxidatieve burst → granulomen.
            </p>
            <p className="text-rose-700 text-sm mb-2">
              <strong>Chédiak-Higashi:</strong> mutatie LYST-gen → verstoorde fusie lysosomen met fagosomen.
            </p>
            <p className="text-rose-700 text-sm m-0">
              <strong>LAD-1:</strong> defect integrine β2-keten (CD18) → verstoorde adhesie leukocyten aan endotheel.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 5: Arachidonzuurmetabolieten */}
      <section id="arachidonzuur" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
            <Microscope className="w-5 h-5 text-purple-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Arachidonzuurmetabolieten
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            <strong>Fosfolipase A2</strong> (geactiveerd door receptoren of complementfragment C5a) maakt arachidonzuur vrij uit de fosfolipidenmembraan. Dit vetzuur is een precursor voor ontstekingsmediatoren.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
              <h4 className="font-bold text-primary-800 mb-2">Lipoxygenasen</h4>
              <p className="text-primary-700 text-sm mb-2">
                Producten: <strong>lipoxinen</strong> (ontstekingsremmend), <strong>leukotrienen</strong> (chemotaxie, vasoconstrictie, ↑ permeabiliteit).
              </p>
              <p className="text-primary-700 text-sm m-0">
                Lipoxinen zijn anti-inflammatoir; remming van lipoxygenase zou dus contraproductief zijn.
              </p>
            </div>
            <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
              <h4 className="font-bold text-teal-800 mb-2">Cyclo-oxygenasen (COX-1, COX-2)</h4>
              <p className="text-teal-700 text-sm mb-2">
                Producten: <strong>prostaglandinen</strong> (vaatverwijding, oedeemvorming, ↓ plaatjesaggregatie), <strong>tromboxaan TxA₂</strong> (vasoconstrictie, ↑ plaatjesaggregatie).
              </p>
              <p className="text-teal-700 text-sm m-0">
                COX-1: constitutief actief in maag (bescherming). COX-2: geïnduceerd door ontsteking.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 6: Ontstekingsremmers */}
      <section id="ontstekingsremmers" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-rose-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Ontstekingsremmers
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Corticosteroïden</h4>
            <p className="text-primary-700 text-sm mb-2">
              Remmen <strong>fosfolipase A2</strong> → geen arachidonzuurvrijmaking. Ook: remming lymfocytenproliferatie (lymfocyten produceren TNF, IL-6, IFN-γ) en blokkade van <strong>NF-κB</strong>-activatie.
            </p>
            <p className="text-primary-700 text-sm m-0">
              NF-κB is de primaire transcriptiefactor die in zowel aangeboren als adaptieve immuunresponsen wordt geactiveerd; NF-κB stimuleert transcriptie van pro-inflammatoire cytokinen (IL-1, TNF, IL-6).
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">NSAIDs (aspirine, ibuprofen)</h4>
            <p className="text-teal-700 text-sm mb-2">
              Remmen <strong>cyclo-oxygenasen</strong> (COX-1 en COX-2) → geen prostaglandinen en tromboxaan. Aselectieve remmers blokkeren ook maag-beschermende prostaglandinen (COX-1 in maag) → risico op <strong>maagulcera</strong>.
            </p>
            <p className="text-teal-700 text-sm m-0">
              <strong>Selectieve COX-2-remmers</strong> (celecoxib, rofecoxib): minder maagulcera, maar verhoogd risico op <strong>hoge bloeddruk</strong> en <strong>stolsels</strong> (COX-1 blijft actief → tromboxaan; endotheel produceert via COX-2 prostacycline dat vasodilatatie en anti-aggregatie geeft).
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 7: Acutefase-reactie */}
      <section id="acutefase" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <ClipboardCheck className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Acutefase-reactie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Bij systemische ontstekingsreacties is er meestal na ongeveer <strong>24 uur</strong> sprake van een acutefase-reactie. Dit is de systemische respons wanneer de concentratie van bepaalde pro-inflammatoire cytokinen boven een drempelwaarde komt.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Belangrijkste stimuli</h4>
            <p className="text-primary-700 text-sm mb-2">
              <strong>IL-1, IL-6 en TNF</strong> zijn de belangrijkste stimuli. Uitingen: verhoogde temperatuur, productie van <strong>acuutfase-eiwitten</strong> door de lever (complement, stollingsfactoren, protease-inhibitoren, ferritine).
            </p>
            <p className="text-primary-700 text-sm m-0">
              Cytokinen bereiken de hersenen → prostaglandinen → koorts en sickness behaviour. Beenmerg wordt gestimuleerd tot productie van monocyten en neutrofielen.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 8: Plasma-mediatorsystemen */}
      <section id="plasma" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Layers className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Plasma-mediatorsystemen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Bij een acute ontstekingsreactie met systemische effecten worden mediatoren in het plasma geactiveerd. Dit zijn <strong>enzymcascades</strong> die nauw met elkaar verweven zijn.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Cascades</h4>
            <p className="text-primary-700 text-sm mb-2">
              <strong>Beschadigd endotheel</strong> (collageen, basaalmembraan, geactiveerde plaatjes, plasmine) activeert <strong>Hagemanfactor (FXII)</strong>.
            </p>
            <p className="text-primary-700 text-sm mb-2">
              <strong>Kininecascade:</strong> Factor XIIa → prekallikreïne → kallikreïne → kininogeen → <strong>bradykinine</strong> (pijn, vaatverwijding, gladde spiercontractie).
            </p>
            <p className="text-primary-700 text-sm mb-2">
              <strong>Stollingscascade:</strong> Factor XIIa → XI → X → protrombine → trombine → fibrinogeen → fibrine.
            </p>
            <p className="text-primary-700 text-sm mb-2">
              <strong>Fibrinolytisch systeem:</strong> kallikreïne activeert; plasminogeen → plasmine → fibrinedegradatieproducten (chemotaxie, vaatverwijding).
            </p>
            <p className="text-primary-700 text-sm m-0">
              <strong>Complementcascade:</strong> plasmine activeert; C3 → C3a (chemotaxie, vaatverwijding).
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Productielocatie</h4>
            <p className="text-teal-700 text-sm mb-2">
              <strong>Lokaal – fagocyten:</strong> ROS, cytokinen, chemokinen, prostaglandinen, leukotrienen, NO, lysosomale enzymen.
            </p>
            <p className="text-teal-700 text-sm mb-2">
              <strong>Lokaal – mestcellen:</strong> histamine, serotonine.
            </p>
            <p className="text-teal-700 text-sm mb-2">
              <strong>Systemisch – lever:</strong> stollingsfactoren, acuutfase-eiwitten, complementfactoren. <strong>Systemisch – bijnierschors:</strong> cortisol.
            </p>
            <p className="text-teal-700 text-sm m-0">
              Cytokinen functioneren in netwerken; <strong>pleiotropie</strong> (één cytokine, meerdere effecten) en <strong>redundantie</strong> (meerdere cytokinen, zelfde effect) zijn sleutelbegrippen.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 9: Samenvatting */}
      <section id="samenvatting" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Samenvatting
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <ul className="list-disc pl-6 space-y-2">
            <li>Ontstekingsmediatoren: communicatie tussen cellen; cascade-effecten versterken of remmen ontsteking.</li>
            <li>Moleculaire categorieën: klein-moleculair (NO, ROS), aminozuur-derivaat (histamine, serotonine), lipide (leukotrienen, prostaglandinen, cortisol), eiwit (stollingsfactoren, cytokinen, complement, lysosomale enzymen, acuutfase-eiwitten).</li>
            <li>Vrijkomen: uit opslag (histamine, serotonine, lysosomale enzymen) vs. direct na synthese.</li>
            <li>Acute allergie: mestcellen, IgE-cross-linking, degranulatie, histamine.</li>
            <li>Radicalen: NADPH-oxidase; superoxide, H₂O₂, myeloperoxidase (HOCl); iNOS (NO); peroxynitriet; NLRP3-inflammasoom.</li>
            <li>Arachidonzuur: PLA2; lipoxygenasen (lipoxinen, leukotrienen); COX (prostaglandinen, tromboxaan).</li>
            <li>Ontstekingsremmers: corticosteroïden (PLA2, NF-κB); NSAIDs (COX); selectieve COX-2-remmers (risico hypertensie, stolsels).</li>
            <li>Acutefase: IL-1, IL-6, TNF; ~24 uur; acuutfase-eiwitten door lever.</li>
            <li>Plasma-cascades: Hagemanfactor, kinine, stolling, fibrinolytisch, complement.</li>
          </ul>
        </div>
      </section>
    </SummaryLayout>
  )
}

// Blok 4 - Week 2 Casus 4 LME 5: Wat is koorts Content
const WatIsKoortsSummary = () => {
  const tableOfContents = [
    { id: 'intro', title: 'Introductie', icon: BookOpen },
    { id: 'thermoregulatie', title: 'Thermoregulatie', icon: Activity },
    { id: 'koorts', title: 'Koorts: definitie en mechanisme', icon: Target },
    { id: 'hyperthermie', title: 'Hyperthermie vs. koorts', icon: Shield },
    { id: 'alarmsymptomen', title: 'Alarmsymptomen', icon: Stethoscope },
    { id: 'paracetamol', title: 'Paracetamol bij koorts', icon: ClipboardCheck },
    { id: 'samenvatting', title: 'Samenvatting', icon: BookOpen },
  ]

  return (
    <SummaryLayout
      title="Wat is koorts"
      description="Thermoregulatie, definitie van koorts, mechanisme, hyperthermie en paracetamol bij kinderen met koorts."
      caseLabel="Casus 4: Kind met koorts"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=wat-is-koorts"
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
            Na het doorlopen van deze module ben je in staat om thermoregulatie uit te leggen, de definitie van koorts te benoemen, de fysiologische functie van koorts te beschrijven en alarmsymptomen bij een patiënt met koorts te herkennen.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Onderwerpen</h4>
            <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
              <li>Thermoregulatie</li>
              <li>Koorts</li>
              <li>Hyperthermie vs. koorts</li>
              <li>Paracetamol bij koorts</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 2: Thermoregulatie */}
      <section id="thermoregulatie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Thermoregulatie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            De gemiddelde lichaamstemperatuur van de mens is rond de <strong>37°C (98,6°F)</strong> om verschillende redenen: <strong>enzym efficiëntie</strong> (enzymen functioneren optimaal bij ~37°C), <strong>pathogeenverdediging</strong>, <strong>homeostase</strong> en <strong>evolutionaire aanpassing</strong>.
          </p>
          
          <p>
            Het lichaam reguleert de temperatuur via <strong>temperatuurgevoelige receptoren</strong> in de huid en hypothalamus. De <strong>hypothalamus</strong> is het centrale regelcentrum en activeert koelings- of verwarmingsmechanismen.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
              <h4 className="font-bold text-teal-800 mb-2">Warmte afgifte / productie verminderen</h4>
              <ul className="list-disc pl-6 space-y-1 text-teal-700 text-sm">
                <li>Verlaagd basaal metabolisme</li>
                <li>Zweten (evaporatie)</li>
                <li>Vasodilatatie perifeer (radiatie, convectie, conductie)</li>
                <li>Ontspannen arrector pili-spieren (haren plat → meer warmteafgifte)</li>
              </ul>
            </div>
            <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-2">Warmte productie verhogen / verlies minimaliseren</h4>
              <ul className="list-disc pl-6 space-y-1 text-amber-700 text-sm">
                <li>Verhoogd basaal metabolisme (schildklierhormoon, sympathische stimulatie, noradrenaline/adrenaline)</li>
                <li>Spieractiviteit: rillen, klappertanden</li>
                <li>Pilo-erectie (kippenvel)</li>
                <li>Vasoconstrictie perifeer</li>
              </ul>
            </div>
          </div>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Warmteverlies van het lichaam</h4>
            <p className="text-primary-700 text-sm mb-2">
              Radiatie (~60%), evaporatie (~22%), conductie naar lucht/convectie (~15%), conductie naar objecten (~3%).
            </p>
            <p className="text-primary-700 text-sm m-0">
              <strong>Willekeurige reacties:</strong> koele/warme omgeving opzoeken, kleding aanpassen, koude/warme dranken, activiteit verhogen of verminderen.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3: Koorts */}
      <section id="koorts" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-red-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Koorts: definitie en mechanisme
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            <strong>Koorts</strong> is een complexe fysiologische reactie op infectie, ontsteking of andere prikkels, gekenmerkt door een verhoging van de lichaamstemperatuur boven de normale waarde. Koorts wordt geïnitieerd door <strong>pyrogenen</strong>.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Zes stappen van het koortsmechanisme</h4>
            <ol className="list-decimal pl-6 space-y-2 text-primary-700 text-sm">
              <li><strong>Infectie of ontsteking:</strong> Pathogenen (bacteriën, virussen) of letsel/ziekte worden gedetecteerd.</li>
              <li><strong>Vrijgave van pyrogenen:</strong> Exogeen (LPS, toxines) of endogeen (IL-1, IL-6, TNF-α door macrofagen/monocyten).</li>
              <li><strong>Hypothalamische activatie:</strong> Cytokinen interageren met receptoren in de hypothalamus → productie PGE2.</li>
              <li><strong>Productie PGE2:</strong> Cyclo-oxygenase (COX) synthetiseert PGE2; PGE2 verhoogt de setpoint in het thermoregulerende centrum.</li>
              <li><strong>Aanpassing setpoint:</strong> Vasoconstrictie, rillen, verhoogde stofwisseling, gedragsveranderingen.</li>
              <li><strong>Onderhoud en beëindiging:</strong> Hogere temperatuur tot oorzaak is opgelost; daarna setpoint omlaag → vasodilatatie en zweten.</li>
            </ol>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Fasen van koorts (casus)</h4>
            <p className="text-teal-700 text-sm mb-2">
              <strong>Stijgende fase:</strong> koud gevoel, vasoconstrictie, rillen (rigor). <strong>Piek:</strong> stabiele verhoogde temperatuur. <strong>Dalende fase:</strong> warm gevoel, vasodilatatie, zweten.
            </p>
            <p className="text-teal-700 text-sm m-0">
              Bij dalende koorts probeert het lichaam warmte kwijt te raken via vasodilatatie en evaporatie (zweten); lichte kleding past bij deze fase.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4: Hyperthermie vs. koorts */}
      <section id="hyperthermie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Hyperthermie vs. koorts
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            <strong>Hyperthermie is niet hetzelfde als koorts.</strong> Bij hyperthermie is de lichaamstemperatuur verhoogd, maar het <strong>setpoint blijft onveranderd</strong>. Bij koorts wordt het setpoint door PGE2 omhoog gezet.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Fysiologische functie van koorts</h4>
            <p className="text-primary-700 text-sm mb-2">
              Koorts maakt de afweer efficiënter: betere motiliteit en activiteit van leukocyten, stimulatie van interferonproductie en T-celactivatie. De hogere temperatuur remt groei/deling van veel infectieuze verwekkers.
            </p>
            <p className="text-primary-700 text-sm m-0">
              Koorts an sich is dus een <strong>natuurlijke, nuttige reactie</strong> van het immuunsysteem.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 5: Alarmsymptomen */}
      <section id="alarmsymptomen" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-rose-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Alarmsymptomen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Bij een kind met koorts is het van belang om <strong>alarmsymptomen</strong> te herkennen en de ernst van de ziekte adequaat in te schatten. Vraag je af: zijn er symptomen die helpen de oorzaak te vinden? Is er een verhoogd risico op een gecompliceerd beloop?
          </p>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2 flex items-center gap-2">
              <Stethoscope className="w-4 h-4" />
              Belangrijke overwegingen
            </h4>
            <ul className="list-disc pl-6 space-y-1 text-rose-700 text-sm">
              <li>Focus van de koorts vinden helpt bij behandeling en prognose.</li>
              <li>Ernst van de ziekte inschatten voor juist vervolgbeleid.</li>
              <li>Risico op gecompliceerd beloop beoordelen.</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 6: Paracetamol */}
      <section id="paracetamol" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <ClipboardCheck className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Paracetamol bij koorts
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Paracetamol kan veilig gebruikt worden bij kinderen, <strong>mits gedoseerd op gewicht</strong>. Doseringen staan in het kinderformularium (www.kinderformularium.nl). Te hoge doseringen zijn zeer schadelijk voor de lever.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200">
              <h4 className="font-bold text-emerald-800 mb-2">Voordelen</h4>
              <ul className="list-disc pl-6 space-y-1 text-emerald-700 text-sm">
                <li>Koortsvermindering</li>
                <li>Beter algeheel welbevinden (vaak betere vochtintake)</li>
                <li>Pijnstilling (indien pijn aanwezig)</li>
              </ul>
            </div>
            <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-2">Nadelen</h4>
              <ul className="list-disc pl-6 space-y-1 text-amber-700 text-sm">
                <li>Onderdrukking van een natuurlijke immuunreactie</li>
                <li>Bijwerkingen en toxiciteit (lever)</li>
              </ul>
            </div>
          </div>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Indicaties</h4>
            <p className="text-primary-700 text-sm mb-2">
              <strong>Koorts an sich is geen indicatie</strong> voor paracetamol. Paracetamol kan wel zinvol zijn om adequate vochtintake te behouden (preventie dehydratie) of bij pijn bij het ziek zijn.
            </p>
            <p className="text-primary-700 text-sm m-0">
              Koorts die niet normaliseert na paracetamol wijst niet per se op ernstige ziekte; het kan betekenen dat de onderliggende oorzaak nog actief is.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 7: Samenvatting */}
      <section id="samenvatting" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Samenvatting
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <ul className="list-disc pl-6 space-y-2">
            <li>Thermoregulatie: hypothalamus, receptoren huid/hypothalamus; koeling (zweten, vasodilatatie) vs. opwarming (rillen, vasoconstrictie, verhoogd metabolisme).</li>
            <li>Koorts: fysiologische reactie op infectie/ontsteking; pyrogenen (exogeen/endogeen) → hypothalamus → PGE2 (COX) → verhoogd setpoint.</li>
            <li>Hyperthermie: verhoogde temperatuur, setpoint onveranderd.</li>
            <li>Functie koorts: betere afweer (leukocyten, interferon, T-cellen), remming pathogeen-groei.</li>
            <li>Paracetamol: doseren op gewicht; koorts an sich geen indicatie; wel bij vochtintake of pijn.</li>
          </ul>
        </div>
      </section>
    </SummaryLayout>
  )
}

// Blok 4 - Week 3 Casus 5 LME 1: Specifieke verwekkers lagere luchtweginfecties Content
const SpecifiekeVerwekkersLagereLuchtweginfectiesSummary = () => {
  const tableOfContents = [
    { id: 'intro', title: 'Introductie', icon: BookOpen },
    { id: 'microbioom', title: 'Microbioom van de long', icon: Microscope },
    { id: 'cap', title: 'CAP: typische verwekkers', icon: Target },
    { id: 'pneumokok', title: 'Streptococcus pneumoniae (pneumokok)', icon: Stethoscope },
    { id: 'haemophilus', title: 'Haemophilus influenzae', icon: Shield },
    { id: 'atypisch', title: 'Atypische verwekkers van CAP', icon: Layers },
    { id: 'legionella', title: 'Legionella pneumophila', icon: Activity },
    { id: 'mycoplasma', title: 'Mycoplasma pneumoniae', icon: ClipboardCheck },
    { id: 'samenvatting', title: 'Samenvatting', icon: BookOpen },
  ]

  return (
    <SummaryLayout
      title="Specifieke verwekkers lagere luchtweginfecties"
      description="Microbioom, CAP, typische en atypische verwekkers: pneumokok, Haemophilus influenzae, Legionella, Mycoplasma pneumoniae."
      caseLabel="Casus 5: Onderste luchtweginfectie"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=specifieke-verwekkers-lagere-luchtweginfecties"
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
            Na deze module kun je beredeneren welk micro-organisme(n) de meest waarschijnlijke ziekteveroorzaker(s) is/zijn bij een patiënt met luchtwegklachten, in relatie tot klachtenpatroon, epidemiologische gegevens en aanvullende diagnostiek.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Onderwerpen</h4>
            <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
              <li>Community acquired pneumonia (CAP): typische verwekkers</li>
              <li>Atypische en minder frequent voorkomende verwekkers van CAP</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 2: Microbioom */}
      <section id="microbioom" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Microscope className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Microbioom van de long
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            De long is <strong>niet steriel</strong>; het microbioom van de lagere luchtwegen is deels vergelijkbaar met dat van de hogere luchtwegen. In de longen is een lagere concentratie microbiota aanwezig dan in de hogere luchtwegen.
          </p>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Selectiemechanismen</h4>
            <p className="text-teal-700 text-sm mb-2">
              Klaring door hoesten, longmacrofagen, trilling van respiratoire cilia en antimicrobiële werking van alveolaire surfactant dragen bij aan de dynamiek van het microbioom.
            </p>
            <p className="text-teal-700 text-sm m-0">
              Bij aandoeningen zoals <strong>COPD</strong> en <strong>cystic fibrosis</strong> kunnen zowel concentratie als samenstelling van de microbiota verschuiven (hogere dichtheid, andere bacteriën zoals P. aeruginosa, S. aureus, Haemophilus).
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3: CAP typische verwekkers */}
      <section id="cap" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-red-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Community acquired pneumonia (CAP): typische verwekkers
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            <strong>CAP</strong> is een pneumonie opgelopen in de gemeenschap; <strong>HAP</strong> (hospital-acquired pneumonia) is gerelateerd aan ziekenhuisopname. Bij HAP worden vaker gram-negatieve verwekkers aangetroffen; het antibioticabeleid is daarom breder dan bij CAP.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Symptomen en diagnostiek</h4>
            <p className="text-primary-700 text-sm mb-2">
              Symptomen: hoest, koorts, sputumproductie, dyspnoe, piepen, pijn op de borst. Deze zijn niet-specifiek. Definitie pneumonie (richtlijnen): <strong>nieuw longinfiltraat op thoraxfoto</strong> + ten minste drie van: verminderd ademgeruis, bronchiaal ademgeruis, fijne crepitaties, abnormale stemfremitus, gedempte percussie.
            </p>
            <p className="text-primary-700 text-sm m-0">
              Microbiologische en moleculaire onderzoeken (kweek, antigeentesten, PCR) kunnen de verwekker vaststellen; de diagnose kan doorgaans vóór uitslag worden gesteld.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200">
              <h4 className="font-bold text-emerald-800 mb-2">Typische verwekkers</h4>
              <ul className="list-disc pl-6 space-y-1 text-emerald-700 text-sm">
                <li>Pneumokokken (S. pneumoniae)</li>
                <li>Haemophilus influenzae</li>
                <li>Moraxella catarrhalis</li>
                <li>Staphylococcus aureus</li>
                <li>Groep A streptokokken</li>
                <li>Aerobe gram-negatieven (Klebsiella, E. coli)</li>
                <li>Microaerofiele bacteriën en anaeroben (aspiratie)</li>
              </ul>
            </div>
            <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-2">Atypische verwekkers</h4>
              <p className="text-amber-700 text-sm mb-2">
                Moeilijk te detecteren met Gram-preparaat, moeilijk te kweken, niet goed te behandelen met beta-lactam.
              </p>
              <ul className="list-disc pl-6 space-y-1 text-amber-700 text-sm">
                <li>Coxiella burnetii</li>
                <li>Legionella species</li>
                <li>Chlamydia psittaci</li>
                <li>Mycoplasma pneumoniae</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4: Streptococcus pneumoniae */}
      <section id="pneumokok" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Streptococcus pneumoniae (pneumokok)
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            <strong>Streptococcus pneumoniae</strong> (pneumokok) is wereldwijd de meest voorkomende typische verwekker van CAP. Van oudsher verantwoordelijk voor &gt;60% van CAP; tegenwoordig 10-30% wereldwijd. In Nederland: 20-30% van non-invasieve pneumonieën (~7500 opnames/jaar, waarvan 5500 ≥60 jaar).
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Verwekker</h4>
            <p className="text-primary-700 text-sm mb-2">
              Grampositieve, gekapselde diplokok; commensaal van de bovenste luchtwegen. Belangrijkste antigeen: polysacharidekapsel; &gt;90 serotypes. Kinderen &lt;5 jaar zijn het voornaamste reservoir (hoog dragerschap); volwassenen/ouderen hebben weinig dragerschap maar hoge ziektelast.
            </p>
            <p className="text-primary-700 text-sm m-0">
              <strong>Diagnostiek:</strong> Sputumkweek (sensitiviteit 29-94%; afname vóór antibiotica). Pneumokokken antigeentest in urine: sensitiviteit 65-80%, specificiteit 97-100%; nadeel: antigeen weken detecteerbaar; niet aanbevolen bij jonge kinderen (frequente dragerschap → vals-positief).
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Vaccinatie</h4>
            <p className="text-teal-700 text-sm mb-2">
              Sinds 2001 vaccins in Europa; RVP 2006 (7-valent Prevenar), 2011 overstap naar 10-valent. Grote daling ziekte bij kinderen; kudde-immuniteit beschermt ook niet-gevaccineerden. Sinds 2020: ouderen 60-80 jaar vaccinatie aangeboden.
            </p>
            <p className="text-teal-700 text-sm m-0">
              <strong>Risicogroep:</strong> HIV-patiënten hebben verhoogd risico op invasieve pneumokokkenziekte; vaccinatie geadviseerd.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 5: Haemophilus influenzae */}
      <section id="haemophilus" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 text-purple-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Haemophilus influenzae
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            <strong>H. influenzae</strong> is géén verwekker van griep (influenzavirus); het is een bacterie. Ontdekt in 1892 door Pfeiffer; pas in de jaren 1930 bleek het influenzavirus de griep te veroorzaken. Belangrijke typische verwekker van CAP.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Eigenschappen</h4>
            <p className="text-primary-700 text-sm mb-2">
              Pleomorf, gramnegatief gekleurde coccobacillus. Sommige stammen zijn gekapseld; zes serotypes (a-f); <strong>serotype b (Hib)</strong> is het meest virulent. Komt uitsluitend bij mensen voor; koloniseert vooral bovenste luchtwegen.
            </p>
            <p className="text-primary-700 text-sm m-0">
              Belangrijke oorzaak van longontsteking bij volwassenen, vooral ouderen en bij COPD of immuundeficiënties. Klinisch niet te onderscheiden van andere typische verwekkers. <strong>COPD-exacerbaties:</strong> H. influenzae is een van de meest voorkomende bacteriële oorzaken.
            </p>
          </div>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2 flex items-center gap-2">
              <Stethoscope className="w-4 h-4" />
              Hib: invasieve infecties en vaccinatie
            </h4>
            <p className="text-rose-700 text-sm mb-2">
              Hib-manifestaties: meningitis (50%), epiglottitis (17%), pneumonie (15%), septische artritis (8%), cellulitis/erysipelas (6%), osteomyelitis (2%), bacteriëmie (2%).
            </p>
            <p className="text-rose-700 text-sm m-0">
              Hib-vaccin RVP sinds 1993; dragerschap gedaald van 2-4% naar &lt;1%; sterke afname ziektegevallen.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 6: Atypische verwekkers */}
      <section id="atypisch" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Layers className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Atypische verwekkers van CAP
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Atypische verwekkers zijn moeilijk te detecteren met Gram-preparaat, moeilijk te kweken met conventionele methoden en niet goed te behandelen met beta-lactam antibiotica. Op basis van anamnese en ziektebeloop kun je geen betrouwbaar onderscheid maken tussen typisch en atypisch.
          </p>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Rode vlaggen voor atypisch</h4>
            <p className="text-amber-700 text-sm m-0">
              Recent verblijf buitenshuis (vakantiewoning, douches, airco), achteruitgang na start beta-lactam (amoxicillin) → denk aan <strong>Legionella pneumophila</strong>. Milde presentatie met geleidelijk begin, "walking pneumonia" → denk aan <strong>Mycoplasma pneumoniae</strong>.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 7: Legionella pneumophila */}
      <section id="legionella" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-orange-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-orange-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Legionella pneumophila
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            <strong>Legionella spp.</strong> zijn gramnegatieve, aerobe, niet-sporevormende, ongekapselde staven; kweek alleen op speciaal selectief medium. L. pneumophila: 15 serogroepen; serogroep 1 veroorzaakt &gt;80% van legionellapneumonieën in Nederland (&gt;90% door L. pneumophila).
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
              <h4 className="font-bold text-primary-800 mb-2">Ziekteverschijnselen</h4>
              <p className="text-primary-700 text-sm mb-2">
                Klinisch niet te onderscheiden van andere pneumonieën; vaak ziekenhuis- en IC-opname. Droge hoest met pijn op de borst. Extrapulmonaal: neuropsychologisch (hoofdpijn, lethargie, verwardheid) 60%, diarree 25%, misselijkheid/braken 20%.
              </p>
              <p className="text-primary-700 text-sm m-0">
                <strong>Diagnostiek:</strong> Urine-antigeentest (meest gebruikt; sensitiviteit 50-90%, specificiteit ~100%). Kweek van respiratoir materiaal op speciaal medium; PCR beschikbaar.
              </p>
            </div>
            <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
              <h4 className="font-bold text-teal-800 mb-2">Bronnen en transmissie</h4>
              <p className="text-teal-700 text-sm mb-2">
                Legionella in oppervlaktewater en bodem. Vermenigvuldiging 20-45°C; overleving &lt;20°C (geen groei); &gt;50°C niet overleefbaar. Transmissie via <strong>wateraerosolen</strong> (inhalatie); ook aspiratie van drinkwater.
              </p>
              <p className="text-teal-700 text-sm m-0">
                Bronnen: douches, sauna's, koeltorens, whirlpools, luchtbevochtigers, ventilatie. Meldingsplicht: arts → GGD → RIVM. Aantal meldingen in NL 2013-2022 +13%; weersomstandigheden spelen een rol.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 8: Mycoplasma pneumoniae */}
      <section id="mycoplasma" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <ClipboardCheck className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Mycoplasma pneumoniae
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Mycoplasmata zijn de kleinste vrijlevende bacteriën (~0,1-0,2 × 1-2 µm); <strong>geen celwand</strong>, alleen vervormbaar plasmamembraan. Geen Gram-kleuring mogelijk; beta-lactam antibiotica werken niet. M. pneumoniae koloniseert vooral de luchtwegen en veroorzaakt "atypische" pneumonie.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Klinisch beeld</h4>
            <p className="text-primary-700 text-sm mb-2">
              Incubatietijd tot 3 weken. Symptomen: verhoging, malaise, hoofdpijn, myalgie, hoestklachten. <strong>Geleidelijk begin</strong> in contrast met plotseling begin bij lobaire pneumonie (hoge koorts, rillingen, pleuritis). "Walking pneumonia": relatief milde presentatie.
            </p>
            <p className="text-primary-700 text-sm m-0">
              Lichamelijk onderzoek: vaak weinig bevindingen; auscultatie kan crepitaties of piepen tonen, maar vaak afwezig.
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Diagnostiek en epidemiologie</h4>
            <p className="text-teal-700 text-sm mb-2">
              Kweek: speciaal medium, weinig sensitief, vaak 2 weken tot kolonies zichtbaar. Serologie: viervoudige stijging IgG (acuut/convalescent) = gouden standaard; interpretatie lastig (gezonde kinderen 20% IgM+, 50% IgG+). PCR op respiratoir materiaal: gevoeliger, sneller, specifieker; bij kinderen: 10-20% asymptomatisch dragerschap.
            </p>
            <p className="text-teal-700 text-sm m-0">
              <strong>Epidemiologie:</strong> Het hele jaar; piek in winter. Verheffingen elke 4-7 jaar (kudde-immuniteit, subtypes). Laatste verheffing NL: respiratoir seizoen 2023-2024.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 9: Samenvatting */}
      <section id="samenvatting" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Samenvatting
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <ul className="list-disc pl-6 space-y-2">
            <li>Microbioom long: niet steriel; lagere dichtheid; verschuiving bij COPD/CF.</li>
            <li>CAP vs HAP: HAP vaker gram-negatief; breder antibioticabeleid.</li>
            <li>Typisch: pneumokok (meest voorkomend), H. influenzae, Moraxella, S. aureus, groep A streptokokken, aerobe gram-negatieven.</li>
            <li>Atypisch: Legionella, Mycoplasma, Chlamydia psittaci, Coxiella burnetii; moeilijk Gram/kweek; geen beta-lactam.</li>
            <li>Pneumokok: grampositieve diplokok; urine-antigeentest; vaccinatie RVP sinds 2006; HIV-risicogroep.</li>
            <li>H. influenzae: géén griep; gramnegatieve coccobacillus; COPD-exacerbaties; Hib-vaccin sinds 1993.</li>
            <li>Legionella: wateraerosolen; 20-45°C; urine-antigeentest; extrapulmonale symptomen.</li>
            <li>Mycoplasma: geen celwand; walking pneumonia; PCR; verheffingen 4-7 jaar.</li>
          </ul>
        </div>
      </section>
    </SummaryLayout>
  )
}

// Blok 4 - Week 3 Casus 5 LME 2: Therapie lagere luchtweginfecties Content
const TherapieLagereLuchtweginfectiesSummary = () => {
  const tableOfContents = [
    { id: 'intro', title: 'Introductie', icon: BookOpen },
    { id: 'indicatie', title: 'Wanneer is behandeling nodig?', icon: Target },
    { id: 'anamnese', title: 'Anamnese en risicofactoren', icon: Stethoscope },
    { id: 'behandeling', title: 'Welke behandeling kiezen?', icon: ClipboardCheck },
    { id: 'verwijzing', title: 'Verwijzing naar het ziekenhuis', icon: Activity },
    { id: 'thuis', title: 'Thuisbehandeling en instructies', icon: Shield },
    { id: 'complicatie', title: 'Complicatie van pneumonie', icon: Layers },
    { id: 'samenvatting', title: 'Samenvatting', icon: BookOpen },
  ]

  return (
    <SummaryLayout
      title="Therapie lagere luchtweginfecties"
      description="Indicatie voor behandeling, anamnese, risicofactoren, antibioticakeuze, verwijzing en instructies bij lagere luchtweginfecties."
      caseLabel="Casus 5: Onderste luchtweginfectie"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=therapie-lagere-luchtweginfecties"
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
            Na deze module kun je uitleggen wat de indicatie is voor behandeling van lagere luchtweginfecties.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Onderwerpen</h4>
            <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
              <li>LWI: wanneer is behandeling nodig?</li>
              <li>Anamnesevragen voor ernstinschatting</li>
              <li>Risicofactoren</li>
              <li>Welke behandeling kiezen?</li>
              <li>Wanneer verwijzing naar het ziekenhuis?</li>
              <li>Thuisbehandeling en instructies</li>
              <li>Complicatie van pneumonie</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 2: Wanneer is behandeling nodig? */}
      <section id="indicatie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Wanneer is behandeling nodig?
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            De indicatie voor behandeling bij lagere luchtweginfecties hangt af van de <strong>ernst van de klachten</strong> en het <strong>risico op bepaalde verwekkers</strong>. In de anamnese moet je uitvinden of je empirisch een bacteriële oorzaak van pneumonie wilt behandelen en of de empirische keuze van antibiotica (zoals in de richtlijn) voor jouw patiënt voldoende is.
          </p>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2 flex items-center gap-2">
              <Stethoscope className="w-4 h-4" />
              Bijzondere verwekkers
            </h4>
            <p className="text-rose-700 text-sm m-0">
              Patiënten met kans op een bijzondere (atypische) verwekker moeten mogelijk anders worden behandeld. Wees hierop bedacht.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3: Anamnese en risicofactoren */}
      <section id="anamnese" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Anamnese en risicofactoren
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Anamnesevragen helpen de ernst in te schatten en het risico op een bijzondere verwekker te beoordelen.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Uit te vragen</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Risico</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">Eerdere behandeling infectie afgelopen jaar?</td><td className="border border-slate-200 pl-3 py-2">Resistente bacteriën</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Wordt er bloed opgehoest?</td><td className="border border-slate-200 pl-3 py-2">Tuberculose</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Immuungecompromitteerde patiënt?</td><td className="border border-slate-200 pl-3 py-2">Opportunistische verwekker</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Andere huisgenoten verkouden/ziek?</td><td className="border border-slate-200 pl-3 py-2">Virale verwekker</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Contact met duiven?</td><td className="border border-slate-200 pl-3 py-2">Chlamydia psittaci</td></tr>
              </tbody>
            </table>
          </div>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Anamnese voor ernstinschatting</h4>
            <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm mb-2">
              <li>Duur, beloop en aard van hoesten (droog? productief?)</li>
              <li>Andere klachten: verkoudheid, keelpijn, oorpijn, hoofdpijn, spierpijn, malaise</li>
              <li>Ernstige symptomen: koorts, dyspneu, piepen, stridor, hemoptoë, pijn borstkas (bij ademhaling)</li>
              <li>Jonge kinderen: kortdurende ademstops, hoorbare ademhaling met kwijlen, &lt;50% drinken, &gt;12 uur geen natte luier, ontroostbaar huilen</li>
              <li>Op indicatie: verslikken, aspiratie corpus alienum, ziekenhuisopname pneumonie afgelopen jaar, risicofactoren ernstig beloop, blootstellingen</li>
            </ul>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-2">Risicofactoren ernstiger beloop</h4>
              <p className="text-amber-700 text-sm mb-2">
                <strong>Leeftijd:</strong> kinderen &lt;3 maanden, ouderen &gt;75 jaar.
              </p>
              <p className="text-amber-700 text-sm m-0">
                <strong>Comorbiditeit:</strong> ernstige hart-/longaandoeningen, diabetes mellitus (vooral bij insulinegebruik), neurologische aandoeningen, lever-/nierinsufficiëntie, sterk verminderde afweer, (ex-)prematuriteit &lt;37 weken.
              </p>
            </div>
            <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
              <h4 className="font-bold text-teal-800 mb-2">Risicofactoren atypische verwekker</h4>
              <p className="text-teal-700 text-sm mb-2">
                Seizoensgebonden verheffing (Mycoplasma), reisanamnese (Legionella), diercontact (Coxiella burnetii, Chlamydia psittaci). Bij atypische verwekker slaat therapie mogelijk niet aan → evalueer na 2 dagen.
              </p>
              <p className="text-teal-700 text-sm m-0">
                <strong>Leeftijd</strong> is minder belangrijk voor risico op atypische verwekker.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4: Welke behandeling kiezen? */}
      <section id="behandeling" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <ClipboardCheck className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Welke behandeling kiezen?
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Bij verdenking op pneumonie (anamnese + lichamelijk onderzoek) en bacteriële oorzaak: keuze empirisch antibioticum. NHG-standaard Acuut hoesten. <strong>Amoxicilline</strong> is eerste keus (pneumonie vaak door S. pneumoniae; klein percentage pneumokokken resistent tegen doxycycline). Bij onvoldoende effect na 2 dagen: lage drempel overschakelen naar <strong>doxycycline</strong> of macrolide (azitromycine).
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Indicatie</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Patiënt</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Eerstekeus</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Alternatief bij overgevoeligheid</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">Pneumonie</td><td className="border border-slate-200 pl-3 py-2">Volwassenen, kinderen ≥37 kg</td><td className="border border-slate-200 pl-3 py-2">Amoxicilline 3×500 mg, 5 dagen</td><td className="border border-slate-200 pl-3 py-2">Doxycycline of azitromycine (zwangeren)</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Pneumonie</td><td className="border border-slate-200 pl-3 py-2">Kinderen &lt;37 kg (&gt;1 mnd)</td><td className="border border-slate-200 pl-3 py-2">Amoxicilline 40 mg/kg 3×, 5 dagen</td><td className="border border-slate-200 pl-3 py-2">Azitromycine 10 mg/kg 1×, 3 dagen</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Aspiratie-pneumonie</td><td className="border border-slate-200 pl-3 py-2">Volwassenen</td><td className="border border-slate-200 pl-3 py-2">Amoxicilline/clavulaanzuur 3×500/125 mg, 7 dagen</td><td className="border border-slate-200 pl-3 py-2">Clindamycine 3×600 mg, 7 dagen</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 5: Verwijzing */}
      <section id="verwijzing" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-red-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Verwijzing naar het ziekenhuis
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Anamnese en lichamelijk onderzoek kunnen ernstige ziekte of hoog-risico-indicatie voor verwijzing/opname tonen. Ziekenhuizen gebruiken vaak <strong>PSI-score</strong> of <strong>CURB-65</strong> voor risico-inschatting (30-dagen mortaliteit).
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">CURB-65</h4>
            <p className="text-primary-700 text-sm mb-2">
              Confusion, Ureum &gt;7 mmol/l, Respiratory rate ≥30/min, Bloeddruk (SBP &lt;90 of DBP ≤60), Leeftijd ≥65 jaar. Elk criterium = 1 punt.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm mb-2">
              <li><strong>0-1 punt:</strong> lage mortaliteit (~1,5%) → thuisbehandeling</li>
              <li><strong>2 punten:</strong> intermediaire mortaliteit (~9%) → ziekenhuisbehandeling overwegen</li>
              <li><strong>3+ punten:</strong> hoge mortaliteit (~22%) → ziekenhuisopname; bij 4-5 overwegen IC</li>
            </ul>
          </div>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2">Verwijscriteria</h4>
            <ul className="list-disc pl-6 space-y-1 text-rose-700 text-sm">
              <li><strong>Urgent:</strong> ernstig ziek (tachypneu, dyspneu, hypoxemie, hypotensie, tachycardie, verwardheid, sufheid)</li>
              <li>Verslechtering ondanks behandeling of snelle toename klachten</li>
              <li>Onvoldoende verbetering na 48-72 uur antibiotica</li>
              <li>Aanhoudende of toenemende klachten bij huisarts; bij risicofactoren consultatie/verwijzing overwegen</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 6: Thuisbehandeling */}
      <section id="thuis" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 text-purple-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Thuisbehandeling en instructies
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Bij thuisbehandeling is het belangrijk dat de patiënt of verzorgers goed geïnstrueerd worden. <strong>Plotseling bloed ophoesten</strong> is een nieuwe klacht die aanleiding geeft tot opnieuw contact; kan wijzen op andere verwekker of groter risico op ernstiger beloop.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Instructies bij start antibiotica</h4>
            <ul className="list-disc pl-6 space-y-2 text-primary-700 text-sm">
              <li>Controleer na 24 uur (eventueel telefonisch) bij ziekte-ernst die daartoe aanleiding geeft.</li>
              <li>Laat patiënt contact opnemen als 48-72 uur na start antibiotica klachten onvoldoende verminderen.</li>
              <li>Instrueer contact bij: toenemende klachten/achteruitgang, (toename) kortademigheid of piepen, terugkerende koorts, pijn op de borst, hemoptoë.</li>
              <li>Oudere kinderen/volwassenen: koude rillingen, verwardheid, sufheid, collaps.</li>
              <li>Jonge kinderen: voedingsproblemen, minder plassen, kortdurende ademstops, sufheid, kreunen, ontroostbaar huilen, hoorbare ademhaling met kwijlen.</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 7: Complicatie */}
      <section id="complicatie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Layers className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Complicatie van pneumonie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Een belangrijke complicatie van CAP ondanks juiste behandeling: <strong>vocht tussen pleurabladeren / empyeem</strong>, met name bij kinderen.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Pleuravocht en empyeem</h4>
            <p className="text-primary-700 text-sm mb-2">
              Bij ~40% van bacteriële pneumonie wordt röntgenologisch pleuravocht gezien. Meestal ongecompliceerd; verdwijnt met antibiotica. In 5-10% gecompliceerd (loketvorming); bij uitstel drainage → empyeem.
            </p>
            <p className="text-primary-700 text-sm mb-2">
              Snel detecteren en evalueren van pleuravochtophoping is belangrijk (impact morbiditeit/sterfte). <strong>Enige absolute indicatie voor drainage:</strong> pus (bacteriën + neutrofielen) in pleuraholte.
            </p>
            <p className="text-primary-700 text-sm m-0">
              <strong>Verwekkers community-acquired empyeem:</strong> vooral S. pneumoniae, S. aureus (grampositief); E. coli, Klebsiella (gramnegatief); anaeroben (mond/keel). Atypische verwekkers het minst vaak betrokken.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 8: Samenvatting */}
      <section id="samenvatting" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Samenvatting
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <ul className="list-disc pl-6 space-y-2">
            <li>Indicatie behandeling: ernst klachten + risico bijzondere verwekker.</li>
            <li>Anamnese: ernst (hoest, koorts, dyspneu, jonge kinderen) en risico (resistentie, tuberculose, opportunistisch, viraal, Chlamydia psittaci).</li>
            <li>Risicofactoren ernstig beloop: leeftijd (&lt;3 mnd, &gt;75 jr), comorbiditeit (DM, hart-long, neuro, lever/nier, immunodeficiëntie, prematuriteit).</li>
            <li>Eerstekeus pneumonie: amoxicilline; bij onvoldoende effect na 2 dagen → doxycycline/azitromycine.</li>
            <li>CURB-65: 0-1 thuis; 2 ziekenhuis; 3+ ernstig/ICU.</li>
            <li>Thuisbehandeling: instructies; contact bij alarmsymptomen (hemoptoë, verslechtering, 48-72u geen verbetering).</li>
            <li>Complicatie: pleuravocht/empyeem; drainage bij pus.</li>
          </ul>
        </div>
      </section>
    </SummaryLayout>
  )
}

// Blok 4 - Week 3 Casus 6 LME 1: Homing, migratie en recirculatie Content
const HomingMigratieRecirculatieSummary = () => {
  const tableOfContents = [
    { id: 'intro', title: 'Introductie', icon: BookOpen },
    { id: 'circulatie', title: 'Circulatie van B- en T-lymfocyten', icon: Activity },
    { id: 'transmigratie-hev', title: 'Transmigratie via de HEV', icon: Layers },
    { id: 'homing', title: 'Homing van lymfocyten', icon: Target },
    { id: 'transmigratie-ontsteking', title: 'Transmigratie naar ontstekingslocaties', icon: Shield },
    { id: 'samenvatting', title: 'Samenvatting', icon: BookOpen },
  ]

  return (
    <SummaryLayout
      title="Homing, migratie en recirculatie"
      description="Routes van recirculerende lymfocyten, transmigratie via HEV, homing en leukocytenmigratie naar ontstekingshaarden."
      caseLabel="Casus 6: Lymfeklier"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=homing-migratie-recirculatie"
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
            Lymfocyten migreren door het lichaam en zijn klaar om te reageren zodra hun specifieke antigeen correct wordt gepresenteerd. Ze herkennen antigenen vooral in de <strong>lymfeklier</strong>, waar ze binnenkomen via <strong>hoog endotheliale venulen (HEV)</strong> of soms via <strong>afferente lymfe</strong>.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
              <h4 className="font-bold text-primary-800 mb-2">Effectorcellen</h4>
              <p className="text-primary-700 text-sm m-0">
                Verlaten de lymfeklier via efferente lymfe en ductus thoracicus, komen in het bloed en migreren naar de ontstekingshaard.
              </p>
            </div>
            <div className="p-5 bg-accent-50 rounded-xl border border-accent-200">
              <h4 className="font-bold text-accent-800 mb-2">Geheugencellen</h4>
              <p className="text-accent-700 text-sm m-0">
                Recirculeren via efferente lymfe en ductus thoracicus door het hele lichaam; volledige route duurt ~24 uur.
              </p>
            </div>
          </div>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Leerdoelen</h4>
            <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
              <li>Routes van recirculerende lymfocyten beschrijven</li>
              <li>Stappen van het transmigratieproces van leukocyten benoemen</li>
              <li>Rol van chemokinen in transmigratie beschrijven</li>
              <li>Interacties tussen leukocyten en endotheel benoemen</li>
            </ul>
          </div>
          
          <p className="text-slate-600 text-sm">
            Doelgroep: eerstejaars geneeskundestudenten, blok 4. Het doornemen van deze module kost ongeveer 1,5 uur.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 2: Circulatie van B- en T-lymfocyten */}
      <section id="circulatie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Circulatie van B- en T-lymfocyten
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Lymfocyten zijn cruciaal in de verworven arm van het immuunsysteem. Ze circuleren in het bloed, verblijven tijdelijk in lymfeklieren waar ze antigeen kunnen herkennen, en na activatie verlaten ze de lymfeklier en gaan naar de plaats waar het antigeen gelokaliseerd is.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Compartment</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Route</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">Bloed → lymfeklier</td><td className="border border-slate-200 pl-3 py-2">HEV (95%) of afferente lymfe (5%)</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Lymfeklier → bloed</td><td className="border border-slate-200 pl-3 py-2">Efferente lymfe → ductus thoracicus</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Bloed → milt</td><td className="border border-slate-200 pl-3 py-2">Direct uit bloed</td></tr>
              </tbody>
            </table>
          </div>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-200">
              <h4 className="font-bold text-indigo-800 mb-2">B-lymfocyten</h4>
              <p className="text-indigo-700 text-sm mb-2">
                Ontstaan in beenmerg → naïeve B-cellen in bloed → via HEV of afferente lymfe in lymfeklier → follikels (outer cortex). Geactiveerd door antigeenherkenning + CD4+ T-celhulp → plasmacel of B-geheugencel.
              </p>
              <p className="text-indigo-700 text-sm mb-2">
                Plasmacellen: mergstrengen, IgM-productie (primaire respons). B-geheugencellen: via efferente lymfe en ductus thoracicus terug in bloed. Bij secundaire respons: kiemcentrumreactie, isotype switching (vaak IgG).
              </p>
              <p className="text-indigo-700 text-sm m-0">
                Veel geactiveerde B-geheugencellen migreren naar het beenmerg om daar long-lived plasmacellen te vormen.
              </p>
            </div>
            <div className="p-5 bg-purple-50 rounded-xl border border-purple-200">
              <h4 className="font-bold text-purple-800 mb-2">T-lymfocyten</h4>
              <p className="text-purple-700 text-sm mb-2">
                Voorlopers in beenmerg → uitrijping tot naïeve T-cel in <strong>thymus</strong> → via bloed en HEV in lymfeklier → paracortex (binnenste schors).
              </p>
              <p className="text-purple-700 text-sm m-0">
                Geactiveerd door DC → effector-T-cellen (homen naar ontsteking) of geheugen-T-cellen (recirculeren).
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3: Transmigratie via de HEV */}
      <section id="transmigratie-hev" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Layers className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Transmigratie van lymfocyten via de HEV
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Lymfocyten migreren <strong>tussen endotheelcellen</strong> door. Dit gebeurt bij HEV in de lymfeklier, maar ook bij endotheel van bloedvaten in weefsels bij ontsteking. Bloedsnelheid in kleine vaten ~0,5 m/s; lymfocyten moeten eerst afremmen en stevig hechten. Selectinen, adressinen en integrinen spelen hierbij een rol.
          </p>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2 flex items-center gap-2">
              <Stethoscope className="w-4 h-4" />
              HEV-morfologie
            </h4>
            <p className="text-rose-700 text-sm m-0">
              HEV-endotheel afwijkend van normaal venule-endotheel: cellen zijn <strong>hoger</strong> en bevatten <strong>meer cytoplasma</strong> (gevolg van endotheelactivatie). Hoog endotheel veroorzaakt wervelingen in de bloedstroom → lymfocyten botsen vaker tegen de wand en blijven makkelijker plakken.
            </p>
          </div>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Moleculen op HEV</h4>
            <p className="text-primary-700 text-sm mb-2">
              HEV-endotheel brengt GlyCAM-1, ICAM-1 (CD54) en chemokinen (CCL19) tot expressie; niet op niet-geactiveerd perifeer endotheel.
            </p>
            <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
              <li>L-selectine (lymfocyt) → GlyCAM-1</li>
              <li>CCR7 (lymfocyt) → CCL19</li>
              <li>LFA-1/CD11a (lymfocyt) → ICAM-1</li>
            </ul>
            <p className="text-primary-700 text-sm mt-2 m-0">
              Na binding migreert de lymfocyt tussen endotheelcellen door naar de paracortex, waar dendritische cellen antigenen presenteren.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4: Homing van lymfocyten */}
      <section id="homing" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Homing van lymfocyten
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Naïeve lymfocyten 'homen' naar een bepaalde lymfeklier. Bij dit proces zijn verschillende adhesiemoleculen op de lymfocyten en op het endotheel van de HEV betrokken. In de lymfeklier bewegen T- en B-lymfocyten onder invloed van chemokinen naar hun eigen gebieden.
          </p>
          
          <div className="p-5 bg-slate-50 rounded-xl border-l-4 border-primary-400">
            <h4 className="font-bold text-slate-800 mb-2 flex items-center gap-2">
              <Target className="w-4 h-4 text-primary-500" />
              Drie stappen van transmigratie
            </h4>
            <ol className="list-decimal pl-6 space-y-2 text-slate-600">
              <li><strong>Rollen en adhesie</strong>: zwakke, reversibele selectine-bindingen; lymfocyt rolt langs endotheel</li>
              <li><strong>Activatie en binding</strong>: chemokinen activeren integrinen; LFA-1 bindt aan ICAM-1 → stevige adhesie</li>
              <li><strong>Diapedese en migratie</strong>: lymfocyt migreert tussen endotheelcellen door het weefsel in</li>
            </ol>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 5: Transmigratie naar ontstekingslocaties */}
      <section id="transmigratie-ontsteking" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 text-red-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Transmigratie van leukocyten naar ontstekingslocaties
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Na activatie in de lymfeklier migreren effectorcellen via efferente lymfe en bloed naar de plek waar het antigeen aanwezig is. Om bij het antigeen in het weefsel te komen, moeten de lymfocyten de bloedbaan verlaten en het endotheel passeren. Dit geldt ook voor neutrofiele granulocyten (eerste bij acute ontsteking), monocyten en plasmacellen.
          </p>
          
          <p>
            Het proces van uit de bloedbaan treden heet <strong>transmigratie</strong>. Interacties tussen leukocyten en endotheelcellen spelen een cruciale rol.
          </p>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Vier stappen transmigratie naar ontsteking</h4>
            <ol className="list-decimal pl-6 space-y-1 text-amber-700 text-sm mb-2">
              <li><strong>Rolling</strong>: selectinen op endotheel + selectine-liganden op leukocyten → zwakke, reversibele binding</li>
              <li><strong>Chemokine receptor signaling</strong>: chemokinen activeren integrinen op de leukocyt</li>
              <li><strong>Firm adhesion</strong>: geactiveerde integrinen binden aan adhesiemoleculen op endotheel</li>
              <li><strong>Transmigratie (diapedese)</strong>: leukocyt migreert tussen endotheelcellen door</li>
            </ol>
            <p className="text-amber-700 text-sm mb-2">
              <strong>Sialyl-Lewis-X (CD15)</strong>: alleen op granulocyten/monocyten. E-selectine en P-selectine op endotheel.
            </p>
            <p className="text-amber-700 text-sm m-0">
              Neutrofiele granulocyten zijn de eerste cellen bij acute ontsteking; daarna monocyten, lymfocyten en plasmacellen.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 6: Samenvatting */}
      <section id="samenvatting" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Samenvatting
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <ul className="list-disc pl-6 space-y-2">
            <li>Lymfocyten circuleren: bloed → HEV/afferente lymfe → lymfeklier → efferente lymfe → ductus thoracicus → bloed.</li>
            <li>B-cellen: beenmerg → bloed → lymfeklier (follikels); activatie door antigeen + CD4+ T-celhulp → plasmacel of B-geheugencel.</li>
            <li>T-cellen: beenmerg → thymus (uitrijping) → paracortex lymfeklier; activatie door DC → effector of geheugen.</li>
            <li>95% lymfocyten via HEV; 5% via afferente lymfe. Geheugencellen recirculeren via efferente lymfe en ductus thoracicus.</li>
            <li>HEV: hoog endotheel, meer cytoplasma; GlyCAM-1, ICAM-1, CCL19; L-selectine, CCR7, LFA-1.</li>
            <li>Transmigratie: rollen → activatie en binding → diapedese. Chemokinen activeren integrinen.</li>
            <li>Naar ontsteking: rolling → chemokine signaling → firm adhesion → transmigratie. Sialyl-Lewis-X (granulocyten/monocyten), E- en P-selectine. Neutrofielen eerst bij acute ontsteking.</li>
          </ul>
        </div>
      </section>
    </SummaryLayout>
  )
}

// Blok 4 - Week 3 Casus 6 LME 2: Infectieuze lymfadenopathie (tweede lijn) Content
const InfectieuzeLymfadenopathieSummary = () => {
  const tableOfContents = [
    { id: 'intro', title: 'Introductie', icon: BookOpen },
    { id: 'differentiaal', title: 'Differentiaaldiagnose', icon: Stethoscope },
    { id: 'ebv', title: 'EBV', icon: Activity },
    { id: 'cmv', title: 'CMV', icon: Activity },
    { id: 'toxoplasmose', title: 'Toxoplasmose', icon: Layers },
    { id: 'kattenkrabziekte', title: 'Kattenkrabziekte', icon: Shield },
    { id: 'tuberculose', title: 'Tuberculeuze lymfadenitis', icon: Microscope },
    { id: 'samenvatting', title: 'Samenvatting', icon: ClipboardCheck },
  ]

  return (
    <SummaryLayout
      title="Infectieuze lymfadenopathie – tweede lijn"
      description="Differentiaaldiagnose, EBV, CMV, toxoplasmose, kattenkrabziekte en tuberculeuze lymfadenitis: epidemiologie, transmissie, kliniek en diagnostiek."
      caseLabel="Casus 6: Lymfeklier"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=infectieuze-lymfadenopathie"
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
            Deze module gaat over lymfadenopathie met een infectieuze oorzaak in de tweede lijn. In het ziekenhuis wordt vaak veel diagnostiek ingezet. Het belangrijkste leerdoel: een casus analyseren om te bepalen waarom deze verdacht is voor <strong>EBV</strong>, <strong>CMV</strong>, <strong>kattenkrabziekte</strong>, <strong>toxoplasmose</strong> of <strong>tuberculose</strong>, gebaseerd op epidemiologie, transmissie en klinische presentatie.
          </p>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2 flex items-center gap-2">
              <Stethoscope className="w-4 h-4" />
              HIV in de differentiaaldiagnose
            </h4>
            <p className="text-rose-700 text-sm m-0">
              HIV is een belangrijke oorzaak van infectieuze lymfadenopathie, maar valt buiten het bestek van deze module. <strong>HIV staat ALTIJD in de DD van lymfadenopathie.</strong>
            </p>
          </div>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Leerdoelen</h4>
            <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
              <li>Casus analyseren: waarom verdacht voor EBV, CMV, kattenkrabziekte, toxoplasmose of tuberculose (epidemiologie, transmissie, kliniek)</li>
              <li>Belangrijkste diagnostiek noemen voor elk van deze infecties</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 2: Differentiaaldiagnose */}
      <section id="differentiaal" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Differentiaaldiagnose
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Naast infectieuze oorzaken zijn er veel niet-infectieuze oorzaken van lymfadenopathie. Het missen van een niet-infectieuze diagnose kan ernstige consequenties hebben.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-2">Niet-infectieuze oorzaken</h4>
              <ul className="list-disc pl-6 space-y-1 text-amber-700 text-sm">
                <li>Auto-immuunziekten (SLE, RA)</li>
                <li>Maligniteiten (lymfomen, metastasen: borstkanker, melanoom, longkanker)</li>
                <li>Iatrogene oorzaken (geneesmiddelreacties, vaccinatiereacties)</li>
                <li>Overige (sarcoïdose, amyloïdose)</li>
              </ul>
            </div>
            <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-200">
              <h4 className="font-bold text-indigo-800 mb-2">Specifieke infecties en verwekkers</h4>
              <ul className="list-disc pl-6 space-y-1 text-indigo-700 text-sm">
                <li>Mononucleosis infectiosa: EBV, CMV</li>
                <li>Kattenkrabziekte: Bartonella henselae</li>
                <li>Syfilis: Treponema pallidum</li>
                <li>Cellulitis: S. aureus, S. pyogenes</li>
              </ul>
            </div>
          </div>
          
          <div className="p-5 bg-slate-50 rounded-xl border-l-4 border-primary-400">
            <h4 className="font-bold text-slate-800 mb-2">Speciale kenmerken</h4>
            <ul className="list-disc pl-6 space-y-1 text-slate-600 text-sm">
              <li><strong>Abcedering:</strong> tuberculeuze lymfadenitis, kattenkrabziekte</li>
              <li><strong>Vermageren en nachtzweten:</strong> tuberculeuze lymfadenitis, chronische HIV</li>
              <li><strong>Faryngitis:</strong> acute HIV, EBV</li>
              <li><strong>Zoönose:</strong> toxoplasmose, histoplasmose</li>
            </ul>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3: EBV */}
      <section id="ebv" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-purple-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Epstein-Barr-virus (EBV)
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            EBV (HHV-4) wordt overgedragen via speekselcontact ('kissing disease'). Primaire infectie leidt tot B-celinfectie en een uitgesproken T-celrespons; de klachten (vermoeidheid, koorts, lymfadenopathie) zijn het gevolg van deze T-celrespons en verhoogde cytokinen.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Leeftijd</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Presentatie</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">Jonge kinderen</td><td className="border border-slate-200 pl-3 py-2">Meestal asymptomatisch</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Adolescenten</td><td className="border border-slate-200 pl-3 py-2">Helft symptomatisch: vermoeidheid, faryngitis, koorts, cervicale lymfadenopathie; atypische lymfocytose; hepatitis (90%); splenomegalie (50%)</td></tr>
              </tbody>
            </table>
          </div>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2">Complicaties EBV</h4>
            <p className="text-rose-700 text-sm mb-2">
              Neurologisch (myelitis transversa, nervus facialisparese, cerebellitis), rash na amoxicilline (EBV-geïnduceerd), hemolytische anemie. Zeldzaam: hemofagocytair syndroom, miltruptuur.
            </p>
            <p className="text-rose-700 text-sm m-0">
              <strong>Bloedbeeld:</strong> leukocytose met atypische lymfocyten ('carnival of cells', reactieve lymfocytose).
            </p>
          </div>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">EBV-diagnostiek</h4>
            <p className="text-primary-700 text-sm mb-2">
              Serologie (antistoffen): primaire infectie of screening pre-transplantatie. Monitoren van antistoftiters na symptomen heeft geen toegevoegde waarde. PCR op plasma bij verdenking EBV-lymfoom (immuungecompromitteerd).
            </p>
            <p className="text-primary-700 text-sm m-0">
              <strong>Antistoffen:</strong> anti-VCA IgM (acuut), anti-VCA IgG, anti-EA, anti-EBNA. Heterofiele antistoffen (Paul Bunnell/Monospot): positief bij EBV.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4: CMV */}
      <section id="cmv" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Cytomegalovirus (CMV)
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            CMV (HHV-5) is net als EBV een humaan herpesvirus. Besmetting treedt vaak prenataal/perinataal op (uitdrijving, lactatie) of via intensief contact (kinderdagverblijf: speeksel, urine). CMV is latent aanwezig met asymptomatische reactivatie (viremie, uitscheiding in urine/speeksel).
          </p>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Onderscheid CMV vs EBV</h4>
            <p className="text-amber-700 text-sm mb-2">
              CMV-mononucleosis lijkt klinisch op EBV, maar vaak <strong>geen keelpijn of tonsilhypertrofie</strong>; lymfeklieren vaak minder pijnlijk.
            </p>
            <p className="text-amber-700 text-sm m-0">
              <strong>Paul Bunnell-reactie (Monospot): negatief bij CMV, positief bij EBV.</strong> Serologie: CMV-IgM positief bij acute infectie.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 5: Toxoplasmose */}
      <section id="toxoplasmose" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Layers className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Toxoplasmose
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Toxoplasmose is een <strong>zoönose</strong>. Alleen katten kunnen oöcysten in het milieu brengen. Seroprevalentie Nederland ~30%.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Transmissie</h4>
            <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
              <li>Kattenbak, tuin, gecontamineerde groenten/fruit (oöcysten)</li>
              <li>Ongekookt/rauw vlees (weefselcysten met bradyzoïeten)</li>
              <li>Bloed- of orgaantransplantatie (tachyzoïeten)</li>
              <li>Congenitaal (primo-infectie zwangere → foetus)</li>
            </ul>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Beloop</h4>
            <p className="text-teal-700 text-sm mb-2">
              80–90% postnataal asymptomatisch. Bij max. 20%: niet-pijnlijke cervicale lymfadenopathie (1–3 weken na besmetting), griepachtige klachten, splenomegalie. Symptomen kunnen maanden aanhouden.
            </p>
            <p className="text-teal-700 text-sm mb-2">
              <strong>Immuungecompromitteerd:</strong> gedissemineerd beeld, meestal geen lymfadenopathie; cerebrale toxoplasmose bij HIV. <strong>Zeldzaam immuuncompetent:</strong> oculaire toxoplasmose (25% blindheid/slechtziendheid).
            </p>
            <p className="text-teal-700 text-sm m-0">
              <strong>Congenitaal:</strong> vroeg in zwangerschap = lagere transmissie, ernstiger gevolgen (hydrocefalie, chorioretinitis); laat = hogere transmissie, mildere gevolgen.
            </p>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Diagnostiek en behandeling</h4>
            <p className="text-amber-700 text-sm mb-2">
              <strong>Diagnostiek:</strong> serologie (seroconversie of viervoudige titerstijging); PCR op pus/body fluids (meest gevoelig, maar parasitemie kort).
            </p>
            <p className="text-amber-700 text-sm mb-2">
              <strong>Preventie:</strong> zwangeren en immuungecompromitteerden: vermijd kattenbak, tuin, onvoldoende verhit vlees. Vriesproducten zijn veilig.
            </p>
            <p className="text-amber-700 text-sm m-0">
              <strong>Behandeling:</strong> pyrimethamine + sulfadiazine + folinezuur. Secundaire profylaxe bij immuungecompromitteerden.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 6: Kattenkrabziekte */}
      <section id="kattenkrabziekte" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 text-rose-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Kattenkrabziekte (Bartonella henselae)
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Transmissie: <strong>krab of beet van een kat</strong>.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Beloop</h4>
            <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
              <li>Na 3–6 dagen: vesiculaire laesie (primair), geneest na enkele dagen</li>
              <li>1/3: lichte koorts, hoofdpijn, malaise</li>
              <li>Na 1–2 weken: regionale lymfadenitis (hals, oksel, lies); klieren groot, zacht, pijnlijk; soms draineren</li>
              <li>Immuuncompetent: spontane genezing na weken</li>
              <li>Immuungecompromitteerd: osteomyelitis, endocarditis, lever/milt/longen/CZS</li>
            </ul>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Diagnostiek en behandeling</h4>
            <p className="text-teal-700 text-sm mb-2">
              <strong>Diagnostiek:</strong> PCR op pus of biopt (meest gevoelig). Bartonella zilverimpregnatie in preparaat/kweek alleen in acute fase. Serologie beperkt (IgG bij gezonde personen; IgM/IgG sensitiviteit 50–65%).
            </p>
            <p className="text-teal-700 text-sm m-0">
              <strong>Behandeling:</strong> preventie (wond direct spoelen en desinfecteren). Meestal spontane genezing. Drainage pus verlicht klachten. Immuungecompromitteerd: doxycycline of azitromycine.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 7: Tuberculeuze lymfadenitis */}
      <section id="tuberculose" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Microscope className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Tuberculeuze lymfadenitis
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            TB veroorzaakt 43% van perifere lymfadenopathieën in lage-inkomenslanden. In hoog-inkomenslanden: 10–15% met lymfadenitis. Bij HIV: hogere incidentie en meer extrapulmonaal.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Kliniek</h4>
            <p className="text-primary-700 text-sm mb-2">
              Vaste, geïsoleerde, chronische, niet-pijnlijke lymfadenopathie; meestal één locatie, soms meerdere. Predominantly cervical (60–80%, 'scrofula'). Koorts 20–50%. Vaste adhesie aan omgeving, soms fluctuatie/drainage, erythema nodosum.
            </p>
            <p className="text-primary-700 text-sm m-0">
              <strong>Transmissie:</strong> aërogeen, daarna hematogene verspreiding.
            </p>
          </div>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2">Diagnostiek</h4>
            <p className="text-rose-700 text-sm mb-2">
              X-thorax (exclusie/demonstratie pulmonale TB). Lymfeklierbiopt (preferentieel, 70–90% vs 60% punctie). <strong>LET OP: biopt naar Medische Microbiologie, niet naar Pathologie.</strong>
            </p>
            <p className="text-rose-700 text-sm mb-2">
              Mycobacteriële kweek (gouden standaard); PCR (GeneXpert): sensitiviteit 83%, specificiteit 94%. IGRA en TST zijn onvoldoende voor actieve TB – antistoftests zijn niet geschikt voor actieve tuberculose.
            </p>
            <p className="text-rose-700 text-sm m-0">
              Serologie/antistoffen gelden niet voor actieve tuberculose.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 8: Samenvatting */}
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
            <li>HIV altijd in DD lymfadenopathie. Niet-infectieus: auto-immuun, maligniteiten, iatrogene oorzaken.</li>
            <li>EBV: speeksel; adolescenten symptomatisch; Paul Bunnell positief; atypische lymfocyten; serologie.</li>
            <li>CMV: pre/perinataal, kinderdagverblijf; Paul Bunnell negatief; geen keelpijn; CMV-IgM.</li>
            <li>Toxoplasmose: zoönose; kattenbak, vlees, congenitaal; 80–90% asymptomatisch; serologie, PCR.</li>
            <li>Kattenkrabziekte: krab/beet kat; regionale lymfadenitis (hals, oksel, lies); PCR op pus; spontane genezing.</li>
            <li>Tuberculeuze lymfadenitis: aërogeen; vaste cervicale klieren; biopt naar microbiologie; kweek, PCR.</li>
          </ul>
        </div>
      </section>
    </SummaryLayout>
  )
}

// Blok 4 - Week 3 Casus 6 LME 3: Introductie verworven immuniteit Content
const IntroductieVerworvenImmuniteitSummary = () => {
  const tableOfContents = [
    { id: 'intro', title: 'Introductie', icon: BookOpen },
    { id: 'kenmerken', title: 'Kenmerken verworven immuniteit', icon: Layers },
    { id: 'typen-t', title: 'Typen T-lymfocyten', icon: Activity },
    { id: 'interacties', title: 'Interacties tijdens immuunrespons', icon: Target },
    { id: 'effectorfase', title: 'Effectorfase', icon: Shield },
    { id: 'samenvatting', title: 'Samenvatting', icon: ClipboardCheck },
  ]

  return (
    <SummaryLayout
      title="Introductie verworven immuniteit"
      description="Kenmerken verworven immuniteit, typen T-lymfocyten, interacties tijdens de immuunrespons en effectorfase."
      caseLabel="Casus 6: Lymfeklier"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=introductie-verworven-immuniteit"
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
            De verworven (adaptieve) immuniteit is de tweede verdedigingslinie. Initiatie vindt plaats in <strong>perifere lymfoïde organen</strong>. Deze module behandelt de basisprincipes; cellulaire verworven immuniteit komt in de casus uitgebreider aan bod; humorale immuniteit wordt in week 5 verder besproken.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Leerdoelen</h4>
            <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
              <li>Voorbeelden noemen van celtypen die antigeen presenteren aan T-helpercellen (DC, macrofagen, B-cellen) en aan cytotoxische T-cellen (alle kernhoudende cellen)</li>
              <li>Rol van cytokinen in activatie van lymfocyten beschrijven</li>
              <li>Functie van verschillende typen T-cellen beschrijven</li>
              <li>Aangeven welke cellen door T-helpercellen geactiveerd kunnen worden (macrofagen, cytotoxische T-cellen, B-cellen)</li>
              <li>Benoemen welke lymfocyten belangrijk zijn voor afweer tegen bacteriën (B-lymfocyten) vs virussen (cytotoxische T-lymfocyten)</li>
            </ul>
          </div>
          
          <p className="text-slate-600 text-sm">
            Doelgroep: bachelor Geneeskunde. Geschatte tijd: ~1 uur. Inhoud: kenmerken verworven immuniteit, typen T-lymfocyten, interacties tijdens immuunrespons, effectorfase.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 2: Kenmerken verworven immuniteit */}
      <section id="kenmerken" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Layers className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Kenmerken verworven immuniteit
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            T- en B-lymfocyten hebben unieke <strong>T-celreceptoren (TCR)</strong> en <strong>B-celreceptoren (BCR)</strong> voor specifieke antigeenherkenning. Er zijn belangrijke verschillen tussen aangeboren en verworven immuniteit.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Kenmerk</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Aangeboren</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Verworven</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">Receptoren</td><td className="border border-slate-200 pl-3 py-2">Genoom-gecodeerd; patroonherkenning (PRR: TLR, mannose receptor, etc.)</td><td className="border border-slate-200 pl-3 py-2">Gerearrangeerd; specifieke herkenning (TCR, BCR)</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Respons</td><td className="border border-slate-200 pl-3 py-2">Niet-klonaal; snelle reactie</td><td className="border border-slate-200 pl-3 py-2">Klonale respons; heeft tijd nodig</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Geheugen</td><td className="border border-slate-200 pl-3 py-2">Geen geheugenpopulatie</td><td className="border border-slate-200 pl-3 py-2">Opbouw geheugenpopulatie</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Variatie</td><td className="border border-slate-200 pl-3 py-2">Altijd in alle individuen</td><td className="border border-slate-200 pl-3 py-2">Verschillend per individu</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3: Typen T-lymfocyten */}
      <section id="typen-t" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-purple-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Typen T-lymfocyten
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            T-lymfocyten herkennen antigeenpeptiden via de <strong>T-celreceptor</strong> alleen als deze gepresenteerd worden in <strong>HLA-moleculen</strong> (MHC). T-helpercellen en cytotoxische T-cellen onderscheiden zich door CD4 en CD8.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Celtype</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Product effectorcellen</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">CD4/CD8</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">TCR herkent Ag in</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">HLA aanwezig op</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">B-lymfocyten</td><td className="border border-slate-200 pl-3 py-2">Antilichamen</td><td className="border border-slate-200 pl-3 py-2">—</td><td className="border border-slate-200 pl-3 py-2">—</td><td className="border border-slate-200 pl-3 py-2">—</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">T-helpercellen</td><td className="border border-slate-200 pl-3 py-2">Cytokinen</td><td className="border border-slate-200 pl-3 py-2">CD4</td><td className="border border-slate-200 pl-3 py-2">HLA-II</td><td className="border border-slate-200 pl-3 py-2">DC, macrofagen, B-cellen</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Cytotoxische T-cellen</td><td className="border border-slate-200 pl-3 py-2">Cytokinen, perforine, granzyme</td><td className="border border-slate-200 pl-3 py-2">CD8</td><td className="border border-slate-200 pl-3 py-2">HLA-I</td><td className="border border-slate-200 pl-3 py-2">Alle kernhoudende cellen</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4: Interacties tijdens immuunrespons */}
      <section id="interacties" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Interacties tijdens de immuunrespons
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            De verworven immuunrespons kent twee takken. De <strong>CD4+ T-helpercel</strong> speelt een centrale rol: na activatie door een antigeenpresenterende cel (APC) geeft zij via cytokinen hulp aan andere celtypen.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-200">
              <h4 className="font-bold text-indigo-800 mb-2">Humorale immuniteit</h4>
              <p className="text-indigo-700 text-sm m-0">
                T-helpercel → B-cel → <strong>antistoffen</strong>. B-cellen scheiden antilichamen uit. Richt zich tegen extracellulaire pathogenen.
              </p>
            </div>
            <div className="p-5 bg-rose-50 rounded-xl border border-rose-200">
              <h4 className="font-bold text-rose-800 mb-2">Cellulaire immuniteit</h4>
              <p className="text-rose-700 text-sm m-0">
                T-helpercel → cytotoxische T-cellen. <strong>Cytotoxische T-cellen</strong> doden geïnfecteerde cellen (via perforine, granzyme). Cellulaire immuniteit omvat meer dan alleen cytotoxische T-cellen; ook andere T-cel subsets zijn betrokken.
              </p>
            </div>
          </div>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Celtypen die T-helpercellen activeren</h4>
            <p className="text-primary-700 text-sm m-0">
              T-helpercellen kunnen macrofagen, cytotoxische T-cellen en B-cellen activeren (via cytokinen).
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 5: Effectorfase */}
      <section id="effectorfase" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Effectorfase verworven immuunrespons
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            <strong>B-lymfocyten</strong> zijn vooral betrokken bij het verwijderen van bacteriën (extracellulair; bacteriën zijn vooral aanwezig buiten cellen). <strong>Cytotoxische T-lymfocyten</strong> zijn vooral betrokken bij het verwijderen van virussen (intracellulair; virussen vermenigvuldigen zich in cellen).
          </p>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">T-helper subsets en cytokinen</h4>
            <ul className="list-disc pl-6 space-y-1 text-amber-700 text-sm">
              <li><strong>Th1</strong> (IFN-γ, TNF-α, IL-2): intracellulaire pathogenen; activeert macrofagen; stimuleert proliferatie cytotoxische T-cellen</li>
              <li><strong>Th2</strong> (IL-4, IL-5): parasitaire wormen; productie en activatie eosinofiele granulocyten</li>
              <li><strong>Th17</strong> (IL-17): extracellulaire pathogenen en schimmels; inflammatie, recrutering neutrofiele granulocyten</li>
              <li><strong>Tfh</strong> (IL-21): B-cellen; extracellulaire pathogenen; proliferatie en differentiatie</li>
            </ul>
          </div>
          
          <div className="p-5 bg-slate-50 rounded-xl border-l-4 border-primary-400">
            <h4 className="font-bold text-slate-800 mb-2">Regulatoire T-lymfocyten (Treg)</h4>
            <p className="text-slate-600 text-sm mb-2">
              Treg is een subset van CD4+ T-lymfocyten. Reguleert immuunreacties via cytokinen: voorkomt te lange of te sterke reactie; dooft respons uit na antigeenverwijdering; houdt reactiviteit onder controle.
            </p>
            <p className="text-slate-600 text-sm m-0">
              Bij afwezigheid van Treg: meer <strong>auto-immuunziekten</strong> en <strong>allergieën</strong>.
            </p>
          </div>
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
            <li>Verworven: gerearrangeerde receptoren (TCR, BCR), klonale respons, geheugen, individueel.</li>
            <li>T-helper: CD4, HLA-II, cytokinen; cytotoxische T: CD8, HLA-I, cytotoxische stoffen.</li>
            <li>HLA-II op DC, macrofagen, B-cellen; HLA-I op alle kernhoudende cellen.</li>
            <li>Humorale immuniteit: B-cellen → antistoffen. Cellulaire: cytotoxische T-cellen.</li>
            <li>T-helper activeert macrofagen, cytotoxische T-cellen, B-cellen.</li>
            <li>Bacteriën: vooral B-lymfocyten. Virussen: vooral cytotoxische T-lymfocyten.</li>
            <li>Treg: regulatie; bij afwezigheid meer auto-immuunziekten en allergieën.</li>
          </ul>
        </div>
      </section>
    </SummaryLayout>
  )
}

// Blok 4 - Week 3 Casus 6 LME 4: Secundaire lymfoïde organen Content
const SecundaireLymfoideOrganenSummary = () => {
  const tableOfContents = [
    { id: 'intro', title: 'Introductie', icon: BookOpen },
    { id: 'primaire-secundaire', title: 'Primaire vs secundaire lymfoïde organen', icon: Layers },
    { id: 'lymfeklier', title: 'Opbouw lymfeklier', icon: Activity },
    { id: 'celtypen', title: 'Celtypen in de lymfeklier', icon: Target },
    { id: 'reticulair', title: 'Reticulair bindweefsel en conduits', icon: Microscope },
    { id: 'routes', title: 'Routes van cellen en antigeen', icon: Shield },
    { id: 'samenvatting', title: 'Samenvatting', icon: ClipboardCheck },
  ]

  return (
    <SummaryLayout
      title="Secundaire lymfoïde organen"
      description="Opbouw lymfeklier en milt, celtypen en hun locaties, reticulair bindweefsel, routes van cellen en antigeen."
      caseLabel="Casus 6: Lymfeklier"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=secundaire-lymfoide-organen"
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
            Secundaire lymfoïde organen zijn de organen waar alles wat nodig is voor de totstandkoming van een immuunrespons op een efficiënte manier wordt samengebracht. De module behandelt de opbouw van de <strong>lymfeklier</strong> en de <strong>milt</strong>, het begrip <strong>MALT</strong> (mucosa-associated lymphoid tissue) en <strong>tertiaire lymfoïde structuren</strong>.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Leerdoelen</h4>
            <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
              <li>Verschillende gebieden in de lymfeklier en de milt benoemen en aangeven welke celtypen in welk gebied vooral aanwezig zijn</li>
              <li>Structurele en functionele verschillen tussen de lymfeklier en de milt benoemen</li>
              <li>Uitleggen wat bedoeld wordt met de term tertiaire lymfoïde structuren</li>
              <li>De opbouw van de lymfeklier beschrijven met de daarin aanwezige celtypen</li>
              <li>Aangeven via welke routes cellen en antigeen de lymfeklier binnenkomen en weer verlaten</li>
            </ul>
          </div>
          
          <p className="text-slate-600 text-sm">
            Doelgroep: bachelor Geneeskunde, blok 4 – Afweer en aanpak van infecties. Geschatte tijd: ~2 uur.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 2: Primaire vs secundaire lymfoïde organen */}
      <section id="primaire-secundaire" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Layers className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Primaire vs secundaire lymfoïde organen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            In <strong>primaire lymfoïde organen</strong> (thymus, beenmerg) worden lymfocyten gevormd vanuit voorlopercellen. In <strong>secundaire lymfoïde organen</strong> kunnen lymfocyten geactiveerd worden, leidend tot de totstandkoming van een immuunrespons.
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-2">Primaire organen</h4>
              <ul className="list-disc pl-6 space-y-1 text-amber-700 text-sm">
                <li>Thymus</li>
                <li>Beenmerg</li>
              </ul>
            </div>
            <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-200">
              <h4 className="font-bold text-indigo-800 mb-2">Secundaire organen</h4>
              <ul className="list-disc pl-6 space-y-1 text-indigo-700 text-sm">
                <li>Lymfeklieren</li>
                <li>Milt</li>
                <li>Adenoïden, tonsillen</li>
                <li>Peyer-patches (dunne darm)</li>
                <li>Appendix</li>
              </ul>
            </div>
          </div>
          
          <div className="p-5 bg-slate-50 rounded-xl border-l-4 border-primary-400">
            <h4 className="font-bold text-slate-800 mb-2">Gemeenschappelijke kenmerken secundaire organen</h4>
            <p className="text-slate-600 text-sm mb-2">
              In al deze organen of structuren is een mate van organisatie aanwezig, met verschillende celtypen in hun eigen gebied. B-cellen liggen veelal bij elkaar, georganiseerd in primaire follikels; na activatie ontstaat een follikelcentrum (secundair follikel).
            </p>
            <p className="text-slate-600 text-sm m-0">
              Niet alle secundaire organen zijn omgeven door een kapsel. Antigeen wordt in de lymfeklier via lymfe aangevoerd; in de milt via het bloed.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3: Opbouw lymfeklier */}
      <section id="lymfeklier" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-purple-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-purple-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Opbouw lymfeklier
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            In de lymfeklier kunnen verschillende gebieden worden onderscheiden: <strong>outer cortex</strong>, <strong>paracortex</strong> en <strong>medulla</strong>. Elk gebied heeft specifieke kenmerken en herbergt bepaalde celtypen.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Gebied</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Kenmerken</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Structuren</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">Outer cortex</td><td className="border border-slate-200 pl-3 py-2">Follikels aanwezig</td><td className="border border-slate-200 pl-3 py-2">Kapsel, kapselsinus, follikels, trabekelsinus</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Paracortex</td><td className="border border-slate-200 pl-3 py-2">Celdicht gebied, HEV aanwezig</td><td className="border border-slate-200 pl-3 py-2">Hoog endotheliale venulen (HEV)</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Medulla</td><td className="border border-slate-200 pl-3 py-2">Losmazig gebied, sinussen en strengen zichtbaar</td><td className="border border-slate-200 pl-3 py-2">Mergstrengen, mergsinussen</td></tr>
              </tbody>
            </table>
          </div>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">HEV (hoog endotheliale venulen)</h4>
            <p className="text-primary-700 text-sm m-0">
              HEV bevinden zich in de paracortex. Ze zijn te herkennen aan <strong>hoog endotheel</strong> (cuboidale/kolomvormige cellen) in plaats van platte endotheelcellen zoals bij normaal endotheel. Via de HEV komen ~95% van de lymfocyten de lymfeklier binnen.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4: Celtypen in de lymfeklier */}
      <section id="celtypen" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Celtypen in de lymfeklier
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-indigo-50 rounded-xl border border-indigo-200">
              <h4 className="font-bold text-indigo-800 mb-2">B-lymfocyten</h4>
              <p className="text-indigo-700 text-sm mb-2">
                Vooral in outer cortex (follikels) en medulla. Anti-IgM kleuring: B-cellen in follikels tonen membraanaankleuring; plasmacellen in mergstrengen tonen sterke cytoplasmatische aankleuring (IgM+).
              </p>
              <p className="text-indigo-700 text-sm m-0">
                Plasmacellen: mergstrengen; IgM-productie.
              </p>
            </div>
            <div className="p-5 bg-purple-50 rounded-xl border border-purple-200">
              <h4 className="font-bold text-purple-800 mb-2">T-lymfocyten</h4>
              <p className="text-purple-700 text-sm mb-2">
                Vooral in paracortex. T-celgebied herkenbaar aan: celrijk gebied + aanwezigheid van HEV. T-cellen in mergstrengen en mergsinussen zijn T-cellen die de lymfeklier gaan verlaten (effector- en memory-T-cellen via efferente lymfe).
              </p>
              <p className="text-purple-700 text-sm m-0">
                Na stimulatie: effector T-cellen naar ontstekingssites; memory T-cellen recirculeren.
              </p>
            </div>
          </div>
          
          <div className="space-y-4">
            <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
              <h4 className="font-bold text-teal-800 mb-2">Dendritische cellen (DC)</h4>
              <p className="text-teal-700 text-sm mb-2">
                Meeste DC in <strong>paracortex</strong>; daar presenteren ze antigeen aan T-cellen. Naïeve T-cellen kunnen alleen door DC geactiveerd worden. DC in randsinus en trabekelsinussen zijn recent met de lymfe vanuit weefsels aangekomen.
              </p>
              <p className="text-teal-700 text-sm m-0">
                DC verwerken antigenen die via de conduits worden aangevoerd en presenteren deze aan T-cellen.
              </p>
            </div>
            <div className="p-5 bg-rose-50 rounded-xl border border-rose-200">
              <h4 className="font-bold text-rose-800 mb-2">Macrofagen</h4>
              <p className="text-rose-700 text-sm mb-2">
                Vooral in <strong>sinussen</strong> (randsinus, trabekelsinus, medullaire sinus): aan- en afvoerroutes van lymfe. Belangrijkste taak: schoonmaken van de lymfe; verwijderen van antigeen, afbraakproducten en debris van immuunreacties.
              </p>
              <p className="text-rose-700 text-sm m-0">
                Macrofagen in kapselsinus: overdracht van antigeen naar B-cellen in de follikel, wat de B-celrespons stimuleert.
              </p>
            </div>
            <div className="p-5 bg-emerald-50 rounded-xl border border-emerald-200">
              <h4 className="font-bold text-emerald-800 mb-2">Folliculaire dendritische cellen (FDC)</h4>
              <p className="text-emerald-700 text-sm mb-2">
                Gerelateerd aan fibroblasten, NIET aan de DC in de paracortex. In <strong>follikels</strong>. Presenteren geconcentreerd antigeen aan B-cellen die affiniteitsmaturatie hebben doorgemaakt. FDC hebben <strong>Fc-receptoren</strong> en <strong>complementreceptoren</strong> om immuuncomplexen (antigeen + Ig + complement) vast te houden.
              </p>
              <p className="text-emerald-700 text-sm m-0">
                Als de B-celreceptor niet met hogere affiniteit bindt → B-cel gaat in apoptose.
              </p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 5: Reticulair bindweefsel en conduits */}
      <section id="reticulair" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-slate-100 rounded-xl flex items-center justify-center">
            <Microscope className="w-5 h-5 text-slate-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Reticulair bindweefsel en conduits
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            De interne structuur van de lymfeklier wordt gevormd door <strong>reticulair bindweefsel</strong>. Behalve ondersteunend is dit weefsel belangrijk bij het transport van lymfe (met antigenen) en van cellen in de lymfeklier.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Rol bij migratie</h4>
            <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
              <li>Cellen binden met adhesiemoleculen (integrinen) aan collageen en matrixeiwitten; reticulair bindweefsel fungeert als geleide</li>
              <li>Reticulaire fibroblasten in verschillende compartimenten produceren verschillende chemokinen → verdeling van T-cellen (paracortex) en B-cellen (outer cortex)</li>
            </ul>
          </div>
          
          <p>
            <strong>Conduits</strong> zijn kanalen in het reticulair bindweefsel waarlangs antigeen wordt aangevoerd. Dendritische cellen in de paracortex verwerken antigenen die via de conduits worden aangevoerd en presenteren deze aan T-cellen.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 6: Routes van cellen en antigeen */}
      <section id="routes" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <Shield className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Routes van cellen en antigeen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Celtype</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Aanvoer</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Afvoer</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">B-lymfocyten</td><td className="border border-slate-200 pl-3 py-2">HEV + afferente lymfe</td><td className="border border-slate-200 pl-3 py-2">Efferente lymfe</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">T-lymfocyten</td><td className="border border-slate-200 pl-3 py-2">HEV + afferente lymfe</td><td className="border border-slate-200 pl-3 py-2">Efferente lymfe</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Antigeen</td><td className="border border-slate-200 pl-3 py-2">Afferente lymfe</td><td className="border border-slate-200 pl-3 py-2">Efferente lymfe</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Dendritische cellen</td><td className="border border-slate-200 pl-3 py-2">Afferente lymfe</td><td className="border border-slate-200 pl-3 py-2">—</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Macrofagen</td><td className="border border-slate-200 pl-3 py-2">Afferente lymfe</td><td className="border border-slate-200 pl-3 py-2">—</td></tr>
              </tbody>
            </table>
          </div>
          
          <p className="text-slate-600 text-sm">
            ~95% van de lymfocyten komt binnen via de HEV, ~5% via afferente lymfe. Cellen kunnen alleen via de efferente lymfe de lymfeklier verlaten. De lymfeklier reinigt de lymfe: antigeen in efferente lymfe is minder dan in afferente.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 7: Samenvatting */}
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
            <li>Primaire organen: thymus, beenmerg (vorming lymfocyten). Secundaire: lymfeklieren, milt, MALT, tonsillen, Peyer-patches, appendix (activatie immuunrespons).</li>
            <li>Lymfeklier: outer cortex (follikels) → paracortex (HEV, T-cellen) → medulla (mergstrengen, mergsinussen).</li>
            <li>B-cellen: follikels; plasmacellen: mergstrengen. T-cellen: paracortex; T-cellen in medulla verlaten de lymfeklier.</li>
            <li>DC: paracortex, antigeenpresentatie aan T-cellen. Macrofagen: sinussen, reinigen lymfe. FDC: follikels, affiniteitsmaturatie, Fc- en complementreceptoren.</li>
            <li>Reticulair bindweefsel: structuur + transport; chemokinen; conduits voor antigeen.</li>
            <li>Lymfocyten: HEV (95%) + afferente lymfe (5%) in; efferente lymfe uit. Antigeen en DC/macrofagen: afferente lymfe in.</li>
          </ul>
        </div>
      </section>
    </SummaryLayout>
  )
}
export {
  CytokinenSummary,
  InfectieuzeOorzakenKoortsSummary,
  NietInfectieuzeOorzakenKoortsSummary,
  OntstekingsmediatorenSummary,
  WatIsKoortsSummary,
  SpecifiekeVerwekkersLagereLuchtweginfectiesSummary,
  TherapieLagereLuchtweginfectiesSummary,
  HomingMigratieRecirculatieSummary,
  InfectieuzeLymfadenopathieSummary,
  IntroductieVerworvenImmuniteitSummary,
  SecundaireLymfoideOrganenSummary,
}
