import { BookOpen, Stethoscope, Activity, Target, Users, BarChart3, ClipboardCheck } from 'lucide-react'
import SummaryLayout from '../components/SummaryLayout'

const TuberculoseInleidingSummary = () => {
  const tableOfContents = [
    { id: 'intro', title: 'Introductie', icon: BookOpen },
    { id: 'kliniek-diagnostiek', title: 'Kliniek en diagnostiek', icon: Stethoscope },
    { id: 'stadia', title: 'Tuberculose stadia', icon: Activity },
    { id: 'latente-tb', title: 'Latente tuberculose', icon: Target },
    { id: 'sociale-determinanten', title: 'Sociale determinanten', icon: Users },
    { id: 'epidemiologie', title: 'Epidemiologie', icon: BarChart3 },
    { id: 'samenvatting', title: 'Samenvatting', icon: ClipboardCheck },
  ]

  return (
    <SummaryLayout
      title="Tuberculose – een inleiding"
      description="Hoofdlijnen van TB-epidemiologie, kliniek, diagnostiek, stadia, latente infectie en sociale determinanten."
      caseLabel="Casus 8: HIV"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=tuberculose-inleiding"
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
            Deze leermodule vormt deel 1 van een tweeluik over tuberculose. Deel 2 gaat over het screenen van migrantenpopulaties. Hier behandelen we de basis: kliniek, diagnostiek, stadia, latente infectie en epidemiologie.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Leerdoel</h4>
            <p className="text-primary-700 text-sm m-0">
              De student kan de hoofdlijnen van de tuberculose (TB) epidemiologie weergeven, uitleggen waarom migranten in Nederland worden gescreend, en de verschillende manieren om te screenen voor TB beschrijven.
            </p>
          </div>
          
          <p className="text-slate-600 text-sm">
            Voorkennis: Hoepelman (2024), paragraaf 9.7 &apos;Tuberculose en andere mycobacteriële infecties&apos; (pag. 122–127), met uitzondering van 9.7.7. Optioneel: WHO Global Tuberculosis Report 2023.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 2: Kliniek en diagnostiek */}
      <section id="kliniek-diagnostiek" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Kliniek en diagnostiek
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Reactivatie van tuberculose</h4>
          <p>
            Tuberculose kan opnieuw actief worden nadat het eerder latent was. Factoren die <strong>wel</strong> bijdragen aan reactivatie: <strong>HIV</strong>, <strong>immuunsuppressieve medicatie</strong> en <strong>oudere leeftijd</strong>. Te veel blootstelling aan zonlicht draagt <strong>niet</strong> bij; het immuunsysteem wordt niet direct door zonlicht beïnvloed in relatie tot TB-reactivatie.
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Pulmonale tuberculose</h4>
          <p>
            Een tuberculose-infectie is meestal <strong>pulmonaal</strong>. Bij een pulmonale infectie is <em>Mycobacterium tuberculosis</em> actief in het longweefsel zelf; dit is de meest voorkomende vorm van tuberculose.
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Kenmerken van TB-diagnostiek</h4>
          <p>
            Tuberculose heeft speciale kenmerken die andere infecties niet hebben: het omvat verschillende bacteriesoorten, groeit langzaam en vereist een speciale kleuring voor detectie. <strong>Samples hoeven niet warm bewaard of snel vervoerd te worden</strong>. Wel is het cruciaal dat verzamelen, vervoeren en verwerken van het monster veilig gebeurt, omdat tuberculose besmettelijk is. Tuberculosediagnostiek wordt uitgevoerd in laboratoriumruimtes die voldoen aan strikte veiligheidsnormen.
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">B-symptomen</h4>
          <p>
            Bij tuberculose komen vaak symptomen voor zoals <strong>koorts</strong>, <strong>nachtzweten</strong> en <strong>onverklaard gewichtsverlies</strong>. Deze klachten heten <strong>B-symptomen</strong> en kunnen ook voorkomen bij lymfoom, solide tumoren of chronische infecties.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3: Tuberculose stadia */}
      <section id="stadia" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Tuberculose stadia
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Het natuurlijk beloop van tuberculose verloopt via: <strong>transmissie</strong> → <strong>primaire tuberculose</strong> → <strong>latente tuberculose</strong> → (eventueel) <strong>reactieve tuberculose</strong>.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Stadium</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Kenmerken</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">Transmissie</td><td className="border border-slate-200 pl-3 py-2">Luchtweg-overdracht van M. tuberculosis</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Primaire tuberculose</td><td className="border border-slate-200 pl-3 py-2">Positieve Mantoux-test na 6–8 weken; primaire laesie/complex zichtbaar op röntgenfoto</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Latente tuberculose</td><td className="border border-slate-200 pl-3 py-2">90% spontane genezing binnen 6 maanden; 5% progressie naar reactieve TB binnen 2 jaar</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Reactieve tuberculose</td><td className="border border-slate-200 pl-3 py-2">Actieve ziekte; HIV-infectie verhoogt het risico op reactivatie</td></tr>
              </tbody>
            </table>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border-l-4 border-amber-400">
            <h4 className="font-bold text-amber-800 mb-2">Latente tuberculose-infectie (TBI)</h4>
            <p className="text-amber-700 text-sm m-0">
              Wereldwijd is meer dan een derde van de mensen geïnfecteerd met tuberculose; niet allen worden ziek. Bij een latente infectie zijn er geen symptomen en voelt de patiënt zich niet ziek, maar de bacterie is nog aanwezig. Er is altijd een risico op reactivatie, vooral bij een verzwakt immuunsysteem.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4: Latente tuberculose */}
      <section id="latente-tb" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Latente tuberculose
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Mantoux en IGRA zijn tests voor het aantonen van <strong>latente</strong> tuberculose-infectie, niet voor actieve tuberculose. Diagnose van actieve TB vereist directe detectie van de bacterie (bijv. kweek, PCR op sputum of pus).
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Test</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Mantoux</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">IGRA</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">Type</td><td className="border border-slate-200 pl-3 py-2">Huidtest</td><td className="border border-slate-200 pl-3 py-2">Bloedtest</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Mechanisme</td><td className="border border-slate-200 pl-3 py-2">Type IV overgevoeligheid op PPD</td><td className="border border-slate-200 pl-3 py-2">T-celreactie op M. tuberculosis-antigenen</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">BCG-vaccinatie</td><td className="border border-slate-200 pl-3 py-2">Beïnvloedt uitslag</td><td className="border border-slate-200 pl-3 py-2">Beïnvloedt uitslag niet</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Kosten</td><td className="border border-slate-200 pl-3 py-2">Goedkoop</td><td className="border border-slate-200 pl-3 py-2">Duur (€60–150)</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Uitslag</td><td className="border border-slate-200 pl-3 py-2">Na 72 uur</td><td className="border border-slate-200 pl-3 py-2">Na 24 uur</td></tr>
              </tbody>
            </table>
          </div>
          
          <p>
            De Mantoux-test vereist een getrainde professional voor intracutane toediening en aflezing. Bij ouderen, jonge kinderen of BCG-gevaccineerden kan de Mantoux minder betrouwbaar zijn. Bij een verzwakt immuunsysteem is de <strong>IGRA vaak betrouwbaarder</strong> dan de Mantoux.
          </p>
          
          <p className="text-slate-600 text-sm">
            Screening in Nederland: zorg- en laboratoriumpersoneel; mensen met verhoogd risico (HIV, uit hoog-endemische gebieden, start immunosuppressiva bij auto-immuunziekten).
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 5: Sociale determinanten */}
      <section id="sociale-determinanten" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
            <Users className="w-5 h-5 text-rose-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Sociale determinanten
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Tuberculose is sterk verbonden met sociale omstandigheden. Sociale determinanten die bijdragen aan een stijging van de tuberculose-incidentie:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>HIV-infectie</strong> – verzwakt immuunsysteem, hoger risico op actieve TB</li>
            <li><strong>Dak- en thuisloosheid</strong> – beperkte toegang tot zorg, slechte leefomstandigheden</li>
            <li><strong>Grote steden en concentratie van risicogroepen</strong> – migranten, lage inkomens</li>
            <li><strong>Armoede</strong> – beperkte toegang tot zorg, slechte voeding, onhygiënische omstandigheden</li>
            <li><strong>Overbevolking en slechte huisvesting</strong> – onvoldoende ventilatie, bevordert transmissie</li>
            <li><strong>Ondervoeding</strong> – verzwakt immuunsysteem</li>
            <li><strong>Werkloosheid en instabiele werkomstandigheden</strong> – beperkte toegang tot zorg</li>
            <li><strong>Alcohol- en drugsverslaving</strong> – verzwakt immuunsysteem, risicovolle leefstijl</li>
            <li><strong>Discriminatie en marginalisatie</strong> – minder toegang tot zorg voor risicogroepen</li>
            <li><strong>Onvoldoende toegang tot gezondheidszorg</strong> – vertraagt diagnose en behandeling, verhoogt transmissie</li>
          </ul>
          <p>
            Effectieve bestrijding vereist niet alleen medische interventies, maar ook sociale verbeteringen en beleidsmaatregelen om onderliggende ongelijkheden aan te pakken.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 6: Epidemiologie */}
      <section id="epidemiologie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-emerald-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Epidemiologie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Volgens het WHO Global Tuberculosis Report 2023: de sterfte door tuberculose daalt wereldwijd. De sterfte daalt bij zowel mensen met als zonder HIV, maar de <strong>daling is groter bij mensen met HIV</strong>, dankzij verbeterde HIV-behandeling.
          </p>
          <p>
            Tuberculose blijft echter een belangrijke doodsoorzaak bij mensen met HIV, vooral bij een verzwakt immuunsysteem (AIDS). Ongeveer <strong>1,4 miljoen</strong> mensen sterven jaarlijks aan tuberculose. Doden door TB bij mensen met HIV worden officieel geclassificeerd als doodsoorzaak HIV/AIDS, met TB als bijdragende oorzaak.
          </p>
          <p>
            Andere risicofactoren om aan te pakken: ondervoeding, alcoholisme, roken en diabetes mellitus.
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
            <li><strong>Kliniek:</strong> B-symptomen (koorts, nachtzweten, gewichtsverlies). Pulmonale TB meest voorkomend. Reactivatie door HIV, immunosuppressie, oudere leeftijd; niet door zonlicht.</li>
            <li><strong>Diagnostiek:</strong> Actieve TB: kweek en PCR; veilig materiaal. Samples hoeven niet warm; wel veilig verzamelen/vervoeren. Latente TB: Mantoux of IGRA; IGRA betrouwbaarder bij BCG en immuundeficiëntie.</li>
            <li><strong>Stadia:</strong> Transmissie → primaire TB (Mantoux + na 6–8 weken) → latente TB (90% genezing, 5% progressie binnen 2 jaar). HIV verhoogt reactivatie.</li>
            <li><strong>Sociale determinanten:</strong> HIV, armoede, dakloosheid, ondervoeding, slechte huisvesting, beperkte toegang tot zorg.</li>
            <li><strong>Epidemiologie:</strong> ~1,4 miljoen doden/jaar. Sterfte daalt; grotere daling bij mensen met HIV door betere HIV-behandeling.</li>
          </ul>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default TuberculoseInleidingSummary
