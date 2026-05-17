import {
  Activity,
  BookOpen,
  Droplets,
  FileText,
  MapPin,
  Microscope,
  Pill,
  Stethoscope,
  Table2,
  AlertCircle,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import { blok10Week2CasusC03RectaalBloedverliesAcuteBuikEnAcuteBuikpijnPracticeHref } from './Blok10Week2CasusC03RectaalBloedverliesAcuteBuikEnAcuteBuikpijnOefenvragen'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02AcuteBuikpijnEnAcuteBuik from './sections/Sect02AcuteBuikpijnEnAcuteBuik'
import Sect03LocatieVanDePijn from './sections/Sect03LocatieVanDePijn'
import Sect04Appendicitis from './sections/Sect04Appendicitis'
import Sect05GalblaasEnCholecystolithiasis from './sections/Sect05GalblaasEnCholecystolithiasis'
import Sect06CholecystitisEnBehandeling from './sections/Sect06CholecystitisEnBehandeling'
import Sect07Choledocholithiasis from './sections/Sect07Choledocholithiasis'
import Sect08Cholangitis from './sections/Sect08Cholangitis'
import Sect09Diverticulitis from './sections/Sect09Diverticulitis'
import Sect10IleusEnDiffuseBuikpijn from './sections/Sect10IleusEnDiffuseBuikpijn'
import Sect11Samenvatting from './sections/Sect11Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Acute buikpijn en acute buik · Tabel 1', icon: AlertCircle },
  { id: 'sect-03', title: 'Locatie van de pijn · Tabel 2', icon: MapPin },
  { id: 'sect-04', title: 'Appendicitis · Tabel 3', icon: Stethoscope },
  { id: 'sect-05', title: 'Galblaas en cholecystolithiasis', icon: Droplets },
  { id: 'sect-06', title: 'Cholecystitis · Tabel 4 · Behandeling', icon: Activity },
  { id: 'sect-07', title: 'Choledocholithiasis', icon: Microscope },
  { id: 'sect-08', title: 'Cholangitis · Tabel 5', icon: Table2 },
  { id: 'sect-09', title: 'Diverticulitis', icon: Pill },
  { id: 'sect-10', title: 'Ileus · Tabel 6', icon: FileText },
  { id: 'sect-11', title: 'Samenvatting', icon: BookOpen },
]

const Blok10Week2CasusC03RectaalBloedverliesAcuteBuikEnAcuteBuikpijnSummary = () => (
  <SummaryLayout
    title="Acute buik en acute buikpijn"
    moduleKind="lme"
    description="Acute buikpijn is een veelgebruikte term voor een plots ontstane, niet-traumatische, ernstige buikpijn die vaak korter dan 5 dagen bestaat."
    caseLabel="Week 2 · Casus C03: Rectaal bloedverlies"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
    practiceLink={blok10Week2CasusC03RectaalBloedverliesAcuteBuikEnAcuteBuikpijnPracticeHref}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02AcuteBuikpijnEnAcuteBuik />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03LocatieVanDePijn />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04Appendicitis />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05GalblaasEnCholecystolithiasis />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06CholecystitisEnBehandeling />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07Choledocholithiasis />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08Cholangitis />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09Diverticulitis />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Sect10IleusEnDiffuseBuikpijn />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <Sect11Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week2CasusC03RectaalBloedverliesAcuteBuikEnAcuteBuikpijnSummary
