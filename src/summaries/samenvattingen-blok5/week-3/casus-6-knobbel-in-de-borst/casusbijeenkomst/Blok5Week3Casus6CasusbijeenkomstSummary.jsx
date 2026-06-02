import {
  Activity,
  BookOpen,
  CircleCheck,
  Droplets,
  FileText,
  HeartPulse,
  Layers,
  Microscope,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import SummarySectionHeader from './SummarySectionHeader'
import SectLeerdoelen from './sections/SectLeerdoelen'
import SectCasusEnKlinischeContext from './sections/SectCasusEnKlinischeContext'
import SectIndelingVanBeenzwelling from './sections/SectIndelingVanBeenzwelling'
import SectEtiologischeGroepen from './sections/SectEtiologischeGroepen'
import SectDeKansOpEenBepaaldeOorzaakHangtSterk from './sections/SectDeKansOpEenBepaaldeOorzaakHangtSterk'
import SectVeneuzeInsufficiëntieVarices from './sections/SectVeneuzeInsufficiëntieVarices'
import SectHartfalen from './sections/SectHartfalen'
import SectTrombosebeen from './sections/SectTrombosebeen'
import SectErysipelasCellulitis from './sections/SectErysipelasCellulitis'
import SectLymfoedeem from './sections/SectLymfoedeem'
import SectMaligniteit from './sections/SectMaligniteit'
import SectMedicamenteusOedeemAmlodipine from './sections/SectMedicamenteusOedeemAmlodipine'
import SectTraumaEnCompartiment from './sections/SectTraumaEnCompartiment'
import SectVeneuzeHypertensieBijAdipositas from './sections/SectVeneuzeHypertensieBijAdipositas'
import SectBelangrijkeDiagnostischeKeuzes from './sections/SectBelangrijkeDiagnostischeKeuzes'
import SectSamenvatting from './sections/SectSamenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Casus en klinische context', icon: Activity },
  { id: 'sect-03', title: 'Indeling van beenzwelling', icon: Table2 },
  { id: 'sect-04', title: 'Klinisch redeneren', icon: Layers },
  { id: 'sect-05', title: 'Belangrijke ziektebeelden', icon: HeartPulse },
  { id: 'sect-06', title: 'Veneuze hypertensie bij adipositas', icon: Droplets },
  { id: 'sect-07', title: 'Diagnostische keuzes', icon: Microscope },
  { id: 'sect-08', title: 'Samenvatting', icon: CircleCheck },
]

const SectionDivider = () => (
  <hr className="border-slate-200 dark:border-slate-700 my-10" />
)

const Blok5Week3Casus6CasusbijeenkomstSummary = () => (
  <SummaryLayout
    title="Knobbel in de borst"
    moduleKind="casusbijeenkomst"
    description="De casusbijeenkomst leert je klinisch redeneren bij zwelling van de benen: diffuus versus lokaal, etiologische groepen, en de belangrijkste oorzaken van veneuze insufficiëntie tot trombose, infectie, hartfalen en maligniteit."
    caseLabel="Week 3 · Casus 6: Knobbel in de borst"
    blokLabel="Blok 5"
    practiceLink="/oefenvragen?lme=blok5-week3-casus6-casusbijeenkomst"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={BookOpen} title="Leerdoelen" tone="primary" />
      <SectLeerdoelen />
    </section>

    <SectionDivider />

    <section id="sect-02" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Activity} title="Casus en klinische context" tone="accent" />
      <SectCasusEnKlinischeContext />
    </section>

    <SectionDivider />

    <section id="sect-03" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Table2} title="Indeling van beenzwelling" tone="sky" />
      <div className="space-y-5">
        <SectIndelingVanBeenzwelling />
        <SectEtiologischeGroepen />
      </div>
    </section>

    <SectionDivider />

    <section id="sect-04" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Layers} title="Klinisch redeneren" tone="indigo" />
      <SectDeKansOpEenBepaaldeOorzaakHangtSterk />
    </section>

    <SectionDivider />

    <section id="sect-05" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={HeartPulse} title="Belangrijke ziektebeelden" tone="rose" />
      <div className="space-y-5">
        <SectVeneuzeInsufficiëntieVarices />
        <SectHartfalen />
        <SectTrombosebeen />
        <SectErysipelasCellulitis />
        <SectLymfoedeem />
        <SectMaligniteit />
        <SectMedicamenteusOedeemAmlodipine />
        <SectTraumaEnCompartiment />
      </div>
    </section>

    <SectionDivider />

    <section id="sect-06" className="scroll-mt-24 mb-12">
      <SummarySectionHeader
        icon={Droplets}
        title="Veneuze hypertensie bij adipositas"
        tone="purple"
      />
      <SectVeneuzeHypertensieBijAdipositas />
    </section>

    <SectionDivider />

    <section id="sect-07" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={Microscope} title="Diagnostische keuzes" tone="amber" />
      <SectBelangrijkeDiagnostischeKeuzes />
    </section>

    <SectionDivider />

    <section id="sect-08" className="scroll-mt-24 mb-12">
      <SummarySectionHeader icon={CircleCheck} title="Samenvatting" tone="emerald" />
      <SectSamenvatting />
    </section>
  </SummaryLayout>
)

export default Blok5Week3Casus6CasusbijeenkomstSummary
