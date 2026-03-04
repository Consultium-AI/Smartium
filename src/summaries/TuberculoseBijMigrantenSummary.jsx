import { BookOpen, Stethoscope, Activity, Target, ClipboardCheck } from 'lucide-react'
import SummaryLayout from '../components/SummaryLayout'

const TuberculoseBijMigrantenSummary = () => {
  const tableOfContents = [
    { id: 'intro', title: 'Introductie', icon: BookOpen },
    { id: 'epidemiologie', title: 'Tuberculose epidemiologie', icon: Stethoscope },
    { id: 'migranten-screening', title: 'Migranten screening voor tuberculose', icon: Activity },
    { id: 'kosteneffectiviteit', title: 'Kosteneffectiviteitsanalyse', icon: Target },
    { id: 'samenvatting', title: 'Samenvatting', icon: ClipboardCheck },
  ]

  return (
    <SummaryLayout
      title="Tuberculose bij migranten"
      description="TB-epidemiologie in Nederland, migrantenscreening en kosteneffectiviteitsanalyse van verschillende screeningsstrategieën."
      caseLabel="Casus 8: HIV"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=tuberculose-bij-migranten"
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
            In deze module gaan we dieper in op de tuberculose-epidemiologie in Nederland, met een specifieke focus op migrantenpopulaties. We bekijken verschillende strategieën voor het testen en screenen op TB en evalueren deze.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Leerdoelen</h4>
            <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
              <li>Begrijpen van de TB-epidemiologie in Nederland en primair de rol van migranten</li>
              <li>Verschillende manieren om voor TB te testen en screenen kennen en tegen elkaar afwegen aan de hand van een kosteneffectiviteitsanalyse</li>
            </ul>
          </div>
          
          <p className="text-slate-600 text-sm">
            Doelgroep: bachelor Geneeskunde. Tijd: ongeveer 30 minuten.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 2: Tuberculose epidemiologie */}
      <section id="epidemiologie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Stethoscope className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Tuberculose epidemiologie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Tuberculose in de wereld</h4>
          <p>
            Tuberculose is een veelvoorkomende infectieziekte en een belangrijke wereldwijde doodsoorzaak. Armoede is een belangrijke risicofactor voor TB. De ziektelast is ongelijk verdeeld over de wereld. Landen met een hoge incidentie (&gt;100 per 100.000) zijn onder meer Indonesië, India, Zuid-Afrika en veel landen in sub-Sahara Afrika en Zuidoost-Azië. Nederland, de Verenigde Staten en Duitsland hebben een lage incidentie.
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Tuberculose-infectie (latent vs. actief)</h4>
          <p>
            Tuberculose wordt veroorzaakt door <strong>Mycobacterium tuberculosis</strong>. De meerderheid van de infecties leidt niet tot actieve ziekte; een groot deel ontwikkelt een <strong>latente infectie</strong>. Slechts ongeveer <strong>10–15%</strong> van de met M. tuberculosis geïnfecteerde personen ontwikkelt actieve tuberculose. Omdat mensen een latente infectie jaren of decennia kunnen dragen, is de prevalentie van M. tuberculosis-infectie vaak veel hoger dan de incidentie van actieve TB suggereert. In sommige landen is tot 30–50% van de bevolking geïnfecteerd; in Nederland is dit <strong>onder 10%</strong>.
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Tuberculose in Nederland</h4>
          <p>
            Het aantal tuberculosegevallen in Nederland daalt al jaren. In de jaren 80 waren er ongeveer 1600 gevallen per jaar; nu zijn dat er circa 800. Ongeveer <strong>75%</strong> van alle huidige TB-gevallen komt voor bij mensen die niet in Nederland zijn geboren (eerste-generatie migranten). Omdat bijna alle TB-gevallen in Nederland voorkomen onder migranten uit hoog-endemische landen, wordt er een screeningsprogramma aangeboden. De huidige standaard is screening via een <strong>chest X-ray</strong> (röntgenfoto van de longen) bij binnenkomst in Nederland.
          </p>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 3: Migranten screening voor tuberculose */}
      <section id="migranten-screening" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Migranten screening voor tuberculose
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Binnenkomstscreening met chest X-ray</h4>
          <p>
            Omdat bijna alle TB-gevallen in Nederland voorkomen onder migranten uit hoog-endemische landen, wordt er een screening aangeboden. De huidige standaard is screening via een <strong>chest X-ray</strong> bij binnenkomst in Nederland.
          </p>
          
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Aspect</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Chest X-ray</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">Voordelen</td><td className="border border-slate-200 pl-3 py-2">Detecteert actieve/open TB; relatief makkelijk uit te voeren; relatief goedkoop; testuitslag niet beïnvloed door doorgemaakte infectie</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Nadelen</td><td className="border border-slate-200 pl-3 py-2">Kan geen latente infectie aantonen; kan geen extrapulmonale TB aantonen; vals-positief bij eerdere TB of longschade; zieken kunnen migratie uitstellen</td></tr>
              </tbody>
            </table>
          </div>
          
          <p>
            Longafwijkingen op de röntgenfoto worden gevolgd door een kweek ter bevestiging, waarna behandeling kan worden gestart. Omdat een chest X-ray alleen screent op ziekteverschijnselen, worden mensen met latente infectie niet gedetecteerd. De meeste TB-gevallen onder migranten worden actief <em>na</em> aankomst in Nederland (latente infectie die later activeert). De Nederlandse overheid overweegt daarom het screeningsbeleid te herzien.
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Alternatieve aanpak: TST en IGRA</h4>
          <p>
            Twee alternatieve tests voor screening op <strong>latente infectie</strong>:
          </p>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Test</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Werking</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Kenmerken</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">TST (tuberculine huidtest)</td><td className="border border-slate-200 pl-3 py-2">M. tuberculosis-antigeen subcutaan; immuunrespons (ontsteking) na 2–3 dagen</td><td className="border border-slate-200 pl-3 py-2">Relatief goedkoop; ook positief bij BCG-vaccinatie en doorgemaakte infectie; kan actieve, genezen en BCG niet onderscheiden</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">IGRA</td><td className="border border-slate-200 pl-3 py-2">Bloedafname; immuunreactie op M. tuberculosis in het lab</td><td className="border border-slate-200 pl-3 py-2">Minder kans op vals-positief; beter in detectie van werkelijke infectie; relatief duur</td></tr>
              </tbody>
            </table>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border-l-4 border-amber-400">
            <h4 className="font-bold text-amber-800 mb-2">Nadeel screening op latente infectie</h4>
            <p className="text-amber-700 text-sm m-0">
              Screening op latente infectie is duur en kan vals-positieve uitslagen geven. Een positieve IGRA of TST vereist altijd een vervolg-chest X-ray om actieve TB uit te sluiten. Belangrijk nadeel: <strong>overbehandeling</strong> – het merendeel van de mensen met een latente infectie wordt nooit ziek (slechts ~10% ontwikkelt actieve TB); veel mensen die nooit ziek zouden worden, moeten toch worden behandeld.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      {/* Section 4: Kosteneffectiviteitsanalyse */}
      <section id="kosteneffectiviteit" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Kosteneffectiviteitsanalyse
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Het afwegen van voor- en nadelen van verschillende screeningsmethoden maakt een directe keuze moeilijk. Kosteneffectiviteitsanalyses maken een objectieve vergelijking mogelijk. Het doel is een strategie te kiezen die de meeste gezondheidswinst oplevert voor het minste geld.
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">QALY en kosten</h4>
          <p>
            Gezondheidseffecten worden uitgedrukt in <strong>Quality Adjusted Life Years (QALYs)</strong>. 1 QALY = één jaar in perfecte gezondheid. Een verloren jaar door vroegtijdig overlijden = verlies van 1 QALY. Bij tuberculose wordt aangenomen dat de kwaliteit van leven met 33% daalt tijdens de ziekte → verlies van 0,33 QALY per jaar. Kosten per QALY = totale kosten van een interventie (vergeleken met een andere) gedeeld door de geschatte QALYs gewonnen.
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Bereidheid-tot-betalen drempels</h4>
          <p>
            In Nederland wordt een interventie over het algemeen als kosteneffectief beschouwd als de kosten per gewonnen QALY <strong>onder €80.000</strong> liggen. Drempels: €0 (kostenbesparend), €20.000 en €80.000 per QALY.
          </p>
          
          <h4 className="font-bold text-slate-800 mt-6 mb-2">Directe vs. indirecte kosten</h4>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-slate-100">
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Type</th>
                  <th className="border border-slate-200 pl-3 py-2 text-left font-bold">Voorbeelden</th>
                </tr>
              </thead>
              <tbody>
                <tr><td className="border border-slate-200 pl-3 py-2">Directe kosten</td><td className="border border-slate-200 pl-3 py-2">CXR, IGRA/TST, smear-test, behandeling actieve/latente TB, bijwerkingen</td></tr>
                <tr><td className="border border-slate-200 pl-3 py-2">Indirecte kosten</td><td className="border border-slate-200 pl-3 py-2">CXR/diagnostiek bij verdenking TB; behandeling niet-gescreende TB; ziekenhuisopname; bron- en contactonderzoek</td></tr>
              </tbody>
            </table>
          </div>
          
          <p>
            Indirecte kosten zijn vaak kosten die kunnen worden <strong>voorkomen</strong> door een interventie. Door screening op en behandeling van latente TB voorkom je (mogelijk) latere activatie en daarmee geassocieerde zorgkosten.
          </p>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">IGRA vs. chest X-ray</h4>
            <p className="text-teal-700 text-sm m-0">
              IGRA-binnenkomstscreening is alleen kosteneffectief voor migranten uit landen waar de TB-incidentie <strong>boven 100 per 100.000</strong> ligt. Voor deze groep liggen bijna alle punten onder de willingness-to-pay drempel van €80.000 per QALY. De interventie is duurder dan chest X-ray, maar de gezondheidswinst is dusdanig groter dat de extra investering de moeite waard is.
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
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Epidemiologie:</strong> TB-incidentie in Nederland laag; ~75% van de gevallen bij mensen niet geboren in Nederland. Wereldwijd: hoge incidentie in Afrika, Zuidoost-Azië (India, Indonesië, Zuid-Afrika). Latente infectie: 10–15% ontwikkelt actieve TB; prevalentie infectie veel hoger dan incidentie.</li>
            <li><strong>Binnenkomstscreening:</strong> Huidige standaard: chest X-ray. Voordelen: detecteert actieve TB, goedkoop, makkelijk. Nadelen: geen latente infectie, geen extrapulmonale TB, vals-positief bij eerdere longschade.</li>
            <li><strong>Alternatieven:</strong> TST en IGRA voor latente infectie. TST: goedkoop, maar positief bij BCG/doorgemaakte infectie. IGRA: minder vals-positief, duurder. Nadeel latente screening: overbehandeling (meeste worden nooit ziek).</li>
            <li><strong>Kosteneffectiviteit:</strong> QALY als maat voor gezondheidswinst. NL-drempel: €80.000 per QALY. IGRA kosteneffectief alleen voor migranten uit landen met TB-incidentie &gt;100/100.000.</li>
          </ul>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default TuberculoseBijMigrantenSummary
