// Auto-generated Blok 6 samenvatting — do not edit by hand.
// Regenerate: node scripts/generate-blok6-samenvattingen.mjs --module homeostase-van-natrium-kalium-en-zuur-base
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
import SectIntegratieVanNatriumKaliumEnZuurBase from './sections/SectIntegratieVanNatriumKaliumEnZuurBase'
import SectHyperkaliMieEnMetaboleAcidoseBijChro from './sections/SectHyperkaliMieEnMetaboleAcidoseBijChro'
import SectHyponatriMieHypokaliMieEnMetaboleAlk from './sections/SectHyponatriMieHypokaliMieEnMetaboleAlk'
import SectHypernatriMieHyperkaliMieEnKetoacido from './sections/SectHypernatriMieHyperkaliMieEnKetoacido'
import SectDeSamenhangTussenDeStoornissen from './sections/SectDeSamenhangTussenDeStoornissen'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
    { id: 'sect-01', title: "Leerdoelen", icon: BookOpen },
    { id: 'sect-02', title: "Integratie van natrium, kalium en zuur-base", icon: FileText },
    { id: 'sect-03', title: "Hyperkaliëmie en metabole acidose bij chronische nierschade", icon: FileText },
    { id: 'sect-04', title: "Hyponatriëmie, hypokaliëmie en metabole alkalose door lisdiuretica", icon: FileText },
    { id: 'sect-05', title: "Hypernatriëmie, hyperkaliëmie en ketoacidose bij insulinetekort", icon: FileText },
    { id: 'sect-06', title: "De samenhang tussen de stoornissen", icon: FileText },
    { id: 'sect-07', title: "Samenvatting", icon: CircleCheck },
]

const Blok6Week2Casus3HomeostaseVanNatriumKaliumEnZuurBaseSummary = () => (
  <SummaryLayout
    title="Homeostase van natrium, kalium en zuur-base"
    description="Na het doornemen van deze stof kun je uitleggen hoe de water-, kalium- en zuur-basebalans in het lichaam worden geregeld. Je begrijpt ook hoe stoornissen in de zuur-basebalans samenhangen met stoornissen in de kaliumbalans. Verder kun…"
    caseLabel="Week 2 · Casus 3: Wat een elektrolytstoornis!"
    blokLabel="Blok 6"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SectLeerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SectIntegratieVanNatriumKaliumEnZuurBase />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SectHyperkaliMieEnMetaboleAcidoseBijChro />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SectHyponatriMieHypokaliMieEnMetaboleAlk />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SectHypernatriMieHyperkaliMieEnKetoacido />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SectDeSamenhangTussenDeStoornissen />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default Blok6Week2Casus3HomeostaseVanNatriumKaliumEnZuurBaseSummary
