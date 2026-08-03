// Auto-generated Blok 6 samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-blok6-samenvattingen.mjs --module proteinurie
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
import SectDeGlomerulaireFiltratiebarriRe from './sections/SectDeGlomerulaireFiltratiebarriRe'
import SectOorzakenVanProteNurie from './sections/SectOorzakenVanProteNurie'
import SectDiagnostiekVanProteNurie from './sections/SectDiagnostiekVanProteNurie'
import SectFysischeTransportprocessenInDeNier from './sections/SectFysischeTransportprocessenInDeNier'
import SectProteNurieEnNatriumEnVolumeregulatie from './sections/SectProteNurieEnNatriumEnVolumeregulatie'
import SectZuurBasebalansEnDeNier from './sections/SectZuurBasebalansEnDeNier'
import SectEpoEnDeNier from './sections/SectEpoEnDeNier'
import SectCalciumFosfaatbalansEnRenaleOsteodys from './sections/SectCalciumFosfaatbalansEnRenaleOsteodys'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "De glomerulaire filtratiebarrière", icon: FileText },
    { id: 'sect-03', title: "Oorzaken van proteïnurie", icon: FileText },
    { id: 'sect-04', title: "Diagnostiek van proteïnurie", icon: Microscope },
    { id: 'sect-05', title: "Fysische transportprocessen in de nier", icon: FileText },
    { id: 'sect-06', title: "Proteïnurie en natrium- en volumeregulatie", icon: FileText },
    { id: 'sect-07', title: "Zuur-basebalans en de nier", icon: FileText },
    { id: 'sect-08', title: "EPO en de nier", icon: FileText },
    { id: 'sect-09', title: "Calcium-fosfaatbalans en renale osteodystrofie", icon: FileText },
    { id: 'sect-10', title: "Samenvatting", icon: CircleCheck },
]

const Blok6Week2Casus4ProteinurieSummary = () => (
  <SummaryLayout
    title="Proteinurie"
    description="De nier filtert bloed in de glomerulus. Dat is een heel selectief proces: water en kleine opgeloste stoffen moeten door kunnen, maar eiwitten en bloedcellen horen juist grotendeels in het bloed te blijven. Onder normale omstandigheden…"
    caseLabel="Week 2 · Casus 4: Patiënt met dikke voeten en urine-afwijkingen"
    blokLabel="Blok 6"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectDeGlomerulaireFiltratiebarriRe />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectOorzakenVanProteNurie />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectDiagnostiekVanProteNurie />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectFysischeTransportprocessenInDeNier />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectProteNurieEnNatriumEnVolumeregulatie />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectZuurBasebalansEnDeNier />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SectEpoEnDeNier />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <SectCalciumFosfaatbalansEnRenaleOsteodys />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default Blok6Week2Casus4ProteinurieSummary
