import {
  BookOpen,
  LayoutGrid,
  HeartPulse,
  Baby,
  Factory,
  Droplets,
  Link2,
  GitCompare,
  FlaskConical,
  Sparkles,
  Microscope,
  Stethoscope,
  ClipboardList,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02AnatomieVanDePancreas from './sections/Sect02AnatomieVanDePancreas'
import Sect03BloedvoorzieningEnVeneuzeAfvloed from './sections/Sect03BloedvoorzieningEnVeneuzeAfvloed'
import Sect04Embryologie from './sections/Sect04Embryologie'
import Sect05ExocrieneBouw from './sections/Sect05ExocrieneBouw'
import Sect06DuctsysteemEnPancreassap from './sections/Sect06DuctsysteemEnPancreassap'
import Sect07ActivatieVanHetPancreassap from './sections/Sect07ActivatieVanHetPancreassap'
import Sect08RegulatieVanDeExocrieneFunctie from './sections/Sect08RegulatieVanDeExocrieneFunctie'
import Sect09EndocrieneFunctieVanDePancreas from './sections/Sect09EndocrieneFunctieVanDePancreas'
import Sect10AndereEndocrieneHormonen from './sections/Sect10AndereEndocrieneHormonen'
import Sect11HistologischHerkennenVanDePancreas from './sections/Sect11HistologischHerkennenVanDePancreas'
import Sect12KlinischeRelevantie from './sections/Sect12KlinischeRelevantie'
import Sect13Samenvatting from './sections/Sect13Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Anatomie van de pancreas · Tabel 1', icon: LayoutGrid },
  { id: 'sect-03', title: 'Bloedvoorziening · Tabel 2', icon: HeartPulse },
  { id: 'sect-04', title: 'Embryologie · Tabel 3', icon: Baby },
  { id: 'sect-05', title: 'Exocriene bouw', icon: Factory },
  { id: 'sect-06', title: 'Ductsysteem · Tabel 4', icon: Droplets },
  { id: 'sect-07', title: 'Activatie · Tabel 5', icon: Link2 },
  { id: 'sect-08', title: 'Regulatie exocrien', icon: GitCompare },
  { id: 'sect-09', title: 'Endocrien · Tabel 6', icon: FlaskConical },
  { id: 'sect-10', title: 'Andere endocriene hormonen', icon: Sparkles },
  { id: 'sect-11', title: 'Histologisch herkennen', icon: Microscope },
  { id: 'sect-12', title: 'Klinische relevantie', icon: Stethoscope },
  { id: 'sect-13', title: 'Samenvatting', icon: ClipboardList },
]

const Blok10Week3CasusC05ChronischePancreatitisLmeMicroscopischeAnatomiePancreasSummary = () => (
  <SummaryLayout
    title="Microscopische anatomie van de pancreas"
    moduleKind="lme"
    description={
      <>
        De pancreas is een lang, smal orgaan dat niet vrij in de buikholte ligt, maar retroperitoneaal. Dat betekent dat
        het achter het peritoneum ligt, dus als het ware achter de buikholte. De pancreas ligt ingeklemd tussen meerdere
        structuren: aan de voorzijde liggen maag en duodenum, craniaal liggen lever en galblaas, lateraal ligt de milt en
        posterieur liggen de grote buikvaten.
      </>
    }
    caseLabel="Week 3 · Casus C05: Chronische pancreatitis"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02AnatomieVanDePancreas />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03BloedvoorzieningEnVeneuzeAfvloed />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04Embryologie />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05ExocrieneBouw />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06DuctsysteemEnPancreassap />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07ActivatieVanHetPancreassap />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08RegulatieVanDeExocrieneFunctie />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09EndocrieneFunctieVanDePancreas />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Sect10AndereEndocrieneHormonen />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <Sect11HistologischHerkennenVanDePancreas />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <Sect12KlinischeRelevantie />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <Sect13Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week3CasusC05ChronischePancreatitisLmeMicroscopischeAnatomiePancreasSummary
