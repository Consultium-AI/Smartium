// Auto-generated Blok 6 samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-blok6-samenvattingen.mjs --module het-lichaam-in-beeld
import {
  Activity,
  BookOpen,
  CircleCheck,
  FileText,
  HeartPulse,
  Layers,
  Microscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import SectLeerdoelen from './sections/SectLeerdoelen'
import SectVlakkenEnRichtingenInDeRadiologie from './sections/SectVlakkenEnRichtingenInDeRadiologie'
import SectDeDrieBelangrijksteAnatomischeVlakke from './sections/SectDeDrieBelangrijksteAnatomischeVlakke'
import SectRichtingstermen from './sections/SectRichtingstermen'
import SectBeeldoriNtatie from './sections/SectBeeldoriNtatie'
import SectRNtgenfotoSDeBasisVanMedischeBeeldvo from './sections/SectRNtgenfotoSDeBasisVanMedischeBeeldvo'
import SectHoeWerktEenRNtgenfoto from './sections/SectHoeWerktEenRNtgenfoto'
import SectToepassingenVanRNtgen from './sections/SectToepassingenVanRNtgen'
import SectVoorEnNadelenVanRNtgen from './sections/SectVoorEnNadelenVanRNtgen'
import SectDeXThorax from './sections/SectDeXThorax'
import SectCtScanDwarsdoorsnedenMetRNtgenstrali from './sections/SectCtScanDwarsdoorsnedenMetRNtgenstrali'
import SectHoeWerktCt from './sections/SectHoeWerktCt'
import SectToepassingenVanCt from './sections/SectToepassingenVanCt'
import SectVoorEnNadelenVanCt from './sections/SectVoorEnNadelenVanCt'
import SectContrastfasenBijCt from './sections/SectContrastfasenBijCt'
import SectKlinischVoorbeeldCtBijHoofdletsel from './sections/SectKlinischVoorbeeldCtBijHoofdletsel'
import SectMriBeeldvormingMetMagneetveldenEnRad from './sections/SectMriBeeldvormingMetMagneetveldenEnRad'
import SectHoeWerktMri from './sections/SectHoeWerktMri'
import SectT1EnT2 from './sections/SectT1EnT2'
import SectToepassingenVanMri from './sections/SectToepassingenVanMri'
import SectVeiligheidBijMri from './sections/SectVeiligheidBijMri'
import SectVoorEnNadelenVanMri from './sections/SectVoorEnNadelenVanMri'
import SectKlinischVoorbeeldMriBijRugklachten from './sections/SectKlinischVoorbeeldMriBijRugklachten'
import SectEchografieBeeldvormingMetGeluidsgolv from './sections/SectEchografieBeeldvormingMetGeluidsgolv'
import SectHoeWerktEchografie from './sections/SectHoeWerktEchografie'
import SectBelangrijkeEchobegrippen from './sections/SectBelangrijkeEchobegrippen'
import SectToepassingenVanEchografie from './sections/SectToepassingenVanEchografie'
import SectVoorEnNadelenVanEchografie from './sections/SectVoorEnNadelenVanEchografie'
import SectKlinischVoorbeeldAcuteBuikpijn from './sections/SectKlinischVoorbeeldAcuteBuikpijn'
import SectFoetaleEchografie from './sections/SectFoetaleEchografie'
import SectVergelijkingVanDeBeeldvormendeTechni from './sections/SectVergelijkingVanDeBeeldvormendeTechni'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Vlakken en richtingen in de radiologie", icon: FileText },
    { id: 'sect-03', title: "De drie belangrijkste anatomische vlakken", icon: Layers },
    { id: 'sect-04', title: "Richtingstermen", icon: FileText },
    { id: 'sect-05', title: "Beeldoriëntatie", icon: FileText },
    { id: 'sect-06', title: "Röntgenfoto’s: de basis van medische beeldvorming", icon: FileText },
    { id: 'sect-07', title: "Hoe werkt een röntgenfoto?", icon: FileText },
    { id: 'sect-08', title: "Toepassingen van röntgen", icon: FileText },
    { id: 'sect-09', title: "Voor- en nadelen van röntgen", icon: FileText },
    { id: 'sect-10', title: "De X-thorax", icon: FileText },
    { id: 'sect-11', title: "CT-scan: dwarsdoorsneden met röntgenstraling", icon: FileText },
    { id: 'sect-12', title: "Hoe werkt CT?", icon: FileText },
    { id: 'sect-13', title: "Toepassingen van CT", icon: FileText },
    { id: 'sect-14', title: "Voor- en nadelen van CT", icon: FileText },
    { id: 'sect-15', title: "Contrastfasen bij CT", icon: FileText },
    { id: 'sect-16', title: "Klinisch voorbeeld: CT bij hoofdletsel", icon: FileText },
    { id: 'sect-17', title: "MRI: beeldvorming met magneetvelden en radiogolven", icon: FileText },
    { id: 'sect-18', title: "Hoe werkt MRI?", icon: FileText },
    { id: 'sect-19', title: "T1 en T2", icon: FileText },
    { id: 'sect-20', title: "Toepassingen van MRI", icon: FileText },
    { id: 'sect-21', title: "Veiligheid bij MRI", icon: FileText },
    { id: 'sect-22', title: "Voor- en nadelen van MRI", icon: FileText },
    { id: 'sect-23', title: "Klinisch voorbeeld: MRI bij rugklachten", icon: Activity },
    { id: 'sect-24', title: "Echografie: beeldvorming met geluidsgolven", icon: FileText },
    { id: 'sect-25', title: "Hoe werkt echografie?", icon: FileText },
    { id: 'sect-26', title: "Belangrijke echobegrippen", icon: FileText },
    { id: 'sect-27', title: "Toepassingen van echografie", icon: FileText },
    { id: 'sect-28', title: "Voor- en nadelen van echografie", icon: FileText },
    { id: 'sect-29', title: "Klinisch voorbeeld: acute buikpijn", icon: FileText },
    { id: 'sect-30', title: "Foetale echografie", icon: FileText },
    { id: 'sect-31', title: "Vergelijking van de beeldvormende technieken", icon: FileText },
    { id: 'sect-32', title: "Samenvatting", icon: CircleCheck },
]

const Blok6Week3Casus6HetLichaamInBeeldSummary = () => (
  <SummaryLayout
    title="Het lichaam in beeld"
    description="Bij beeldvorming is het heel belangrijk dat je goed kunt oriënteren. Beelden van het lichaam worden namelijk in verschillende vlakken bekeken. Als je weet welk vlak je ziet, kun je anatomische structuren en afwijkingen veel makkelijker…"
    caseLabel="Week 3 · Casus 6: Een patiënt met een ruis"
    blokLabel="Blok 6"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectVlakkenEnRichtingenInDeRadiologie />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectDeDrieBelangrijksteAnatomischeVlakke />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectRichtingstermen />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectBeeldoriNtatie />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectRNtgenfotoSDeBasisVanMedischeBeeldvo />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectHoeWerktEenRNtgenfoto />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectToepassingenVanRNtgen />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectVoorEnNadelenVanRNtgen />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectDeXThorax />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <SectCtScanDwarsdoorsnedenMetRNtgenstrali />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <SectHoeWerktCt />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <SectToepassingenVanCt />
    </section>
    <section id="sect-14" className="scroll-mt-24 mb-12">
      <SectVoorEnNadelenVanCt />
    </section>
    <section id="sect-15" className="scroll-mt-24 mb-12">
      <SectContrastfasenBijCt />
    </section>
    <section id="sect-16" className="scroll-mt-24 mb-12">
      <SectKlinischVoorbeeldCtBijHoofdletsel />
    </section>
    <section id="sect-17" className="scroll-mt-24 mb-12">
      <SectMriBeeldvormingMetMagneetveldenEnRad />
    </section>
    <section id="sect-18" className="scroll-mt-24 mb-12">
      <SectHoeWerktMri />
    </section>
    <section id="sect-19" className="scroll-mt-24 mb-12">
      <SectT1EnT2 />
    </section>
    <section id="sect-20" className="scroll-mt-24 mb-12">
      <SectToepassingenVanMri />
    </section>
    <section id="sect-21" className="scroll-mt-24 mb-12">
      <SectVeiligheidBijMri />
    </section>
    <section id="sect-22" className="scroll-mt-24 mb-12">
      <SectVoorEnNadelenVanMri />
    </section>
    <section id="sect-23" className="scroll-mt-24 mb-12">
      <SectKlinischVoorbeeldMriBijRugklachten />
    </section>
    <section id="sect-24" className="scroll-mt-24 mb-12">
      <SectEchografieBeeldvormingMetGeluidsgolv />
    </section>
    <section id="sect-25" className="scroll-mt-24 mb-12">
      <SectHoeWerktEchografie />
    </section>
    <section id="sect-26" className="scroll-mt-24 mb-12">
      <SectBelangrijkeEchobegrippen />
    </section>
    <section id="sect-27" className="scroll-mt-24 mb-12">
      <SectToepassingenVanEchografie />
    </section>
    <section id="sect-28" className="scroll-mt-24 mb-12">
      <SectVoorEnNadelenVanEchografie />
    </section>
    <section id="sect-29" className="scroll-mt-24 mb-12">
      <SectKlinischVoorbeeldAcuteBuikpijn />
    </section>
    <section id="sect-30" className="scroll-mt-24 mb-12">
      <SectFoetaleEchografie />
    </section>
    <section id="sect-31" className="scroll-mt-24 mb-12">
      <SectVergelijkingVanDeBeeldvormendeTechni />
    </section>
    <section id="sect-32" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default Blok6Week3Casus6HetLichaamInBeeldSummary
