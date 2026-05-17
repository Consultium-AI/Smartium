import {
  Activity,
  BookOpen,
  Droplets,
  FileText,
  Layers,
  Lightbulb,
  Microscope,
  Pill,
  Scan,
  Stethoscope,
  Table2,
  TestTube2,
  UtensilsCrossed,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02VerteringEnOpnameHetGroteGeheel from './sections/Sect02VerteringEnOpnameHetGroteGeheel'
import Sect03VerteringInMondMaagDunneDarm from './sections/Sect03VerteringInMondMaagDunneDarm'
import Sect04DarmepitheelStructuurEnCeltypen from './sections/Sect04DarmepitheelStructuurEnCeltypen'
import Sect05AfbraakVanKoolhydraten from './sections/Sect05AfbraakVanKoolhydraten'
import Sect06AfbraakVanEiwitten from './sections/Sect06AfbraakVanEiwitten'
import Sect07VerteringEnOpnameVanVetten from './sections/Sect07VerteringEnOpnameVanVetten'
import Sect08ZoutEnWatertransportInDeDunneDarm from './sections/Sect08ZoutEnWatertransportInDeDunneDarm'
import Sect09KlinischeRelevantieCystischeFibrose from './sections/Sect09KlinischeRelevantieCystischeFibrose'
import Sect10MalabsorptieEnExocrienePancreasinsufficiëntie from './sections/Sect10MalabsorptieEnExocrienePancreasinsufficiëntie'
import Sect11DiarreeWanneerSpreekJeErvan from './sections/Sect11DiarreeWanneerSpreekJeErvan'
import Sect12SamenvattingKlinischeRedeneringBijMalabsorptie from './sections/Sect12SamenvattingKlinischeRedeneringBijMalabsorptie'
import Sect13Samenvatting from './sections/Sect13Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Vertering en opname: het grote geheel', icon: Lightbulb },
  { id: 'sect-03', title: 'Vertering in mond, maag en dunne darm', icon: UtensilsCrossed },
  { id: 'sect-04', title: 'Het darmepitheel: structuur en celtypen · Tabel 1', icon: Layers },
  { id: 'sect-05', title: 'Afbraak van koolhydraten · Tabel 2', icon: Table2 },
  { id: 'sect-06', title: 'Afbraak van eiwitten · Tabel 3', icon: Microscope },
  { id: 'sect-07', title: 'Vertering en opname van vetten', icon: Pill },
  { id: 'sect-08', title: 'Zout- en watertransport in de dunne darm · Tabel 4', icon: Droplets },
  { id: 'sect-09', title: 'Klinische relevantie: cystische fibrose', icon: Stethoscope },
  {
    id: 'sect-10',
    title: 'Malabsorptie en exocriene pancreasinsufficiëntie · Tabel 5',
    icon: TestTube2,
  },
  { id: 'sect-11', title: 'Diarree: wanneer spreek je ervan?', icon: Activity },
  { id: 'sect-12', title: 'Samenvatting van de klinische redenering bij malabsorptie', icon: Scan },
  { id: 'sect-13', title: 'Samenvatting', icon: FileText },
]

const Blok10Week2CasusC04DiarreeVerteringEnOpnameSummary = () => (
  <SummaryLayout
    title="Vertering en opname"
    moduleKind="lme"
    description="De vertering begint in het spijsverteringskanaal als voedsel wordt afgebroken tot kleine bouwstenen. Die bouwstenen kunnen daarna door de darmcellen worden opgenomen en worden afgegeven aan het bloed of de lymfe."
    caseLabel="Week 2 · Casus C04: Diarree"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
    practiceLink="/oefenvragen?lme=blok10-week2-casus-c04-diarree-vertering-en-opname"
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02VerteringEnOpnameHetGroteGeheel />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03VerteringInMondMaagDunneDarm />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04DarmepitheelStructuurEnCeltypen />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05AfbraakVanKoolhydraten />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06AfbraakVanEiwitten />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07VerteringEnOpnameVanVetten />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08ZoutEnWatertransportInDeDunneDarm />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09KlinischeRelevantieCystischeFibrose />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Sect10MalabsorptieEnExocrienePancreasinsufficiëntie />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <Sect11DiarreeWanneerSpreekJeErvan />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <Sect12SamenvattingKlinischeRedeneringBijMalabsorptie />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <Sect13Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week2CasusC04DiarreeVerteringEnOpnameSummary
