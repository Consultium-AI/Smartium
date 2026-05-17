import {
  Activity,
  AlertTriangle,
  Baby,
  BookOpen,
  Clock3,
  FileText,
  Lightbulb,
  Route,
  Stethoscope,
  Table2,
  UserRound,
  Wind,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02MalabsorptieHetBasisidee from './sections/Sect02MalabsorptieHetBasisidee'
import Sect03Tabel1BelangrijkeOorzaken from './sections/Sect03Tabel1BelangrijkeOorzaken'
import Sect04SpugendeZuigeling from './sections/Sect04SpugendeZuigeling'
import Sect05KleuterOndervoedingEnChronischeDiarree from './sections/Sect05KleuterOndervoedingEnChronischeDiarree'
import Sect06CoeliakieDiagnostiek from './sections/Sect06CoeliakieDiagnostiek'
import Sect07KindNegenJaarCysticFibrosis from './sections/Sect07KindNegenJaarCysticFibrosis'
import Sect08Dios from './sections/Sect08Dios'
import Sect09LeverziekteBijCf from './sections/Sect09LeverziekteBijCf'
import Sect10VolwasseneAcuteOfChronischeDiarree from './sections/Sect10VolwasseneAcuteOfChronischeDiarree'
import Sect11VolwasseneDiarreeIcterusEnPancreas from './sections/Sect11VolwasseneDiarreeIcterusEnPancreas'
import Sect12Samenvatting from './sections/Sect12Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Malabsorptie: het basisidee', icon: Lightbulb },
  { id: 'sect-03', title: 'Tabel 1. Belangrijke oorzaken van malabsorptie', icon: Table2 },
  { id: 'sect-04', title: 'Spugende zuigeling: denk aan koemelkeiwitenteropathie', icon: Baby },
  {
    id: 'sect-05',
    title: 'Kleuter met afwijkende gewichtsgroei: ondervoeding en chronische diarree',
    icon: UserRound,
  },
  { id: 'sect-06', title: 'Coeliakie: diagnostiek stap voor stap', icon: Stethoscope },
  {
    id: 'sect-07',
    title: 'Kind van 9 jaar met groeiachterstand en luchtweginfecties: denk aan cystic fibrosis',
    icon: Wind,
  },
  {
    id: 'sect-08',
    title: 'DIOS: distaal intestinaal obstructiesyndroom',
    icon: Route,
  },
  { id: 'sect-09', title: 'Leverziekte bij CF', icon: Activity },
  {
    id: 'sect-10',
    title: 'Volwassene met diarree: acute of chronische diarree? · Tabel 6',
    icon: Clock3,
  },
  {
    id: 'sect-11',
    title: 'Volwassene met diarree en icterus: pancreatitis, leverfalen en pancreasinsufficiëntie',
    icon: AlertTriangle,
  },
  { id: 'sect-12', title: 'Samenvatting', icon: FileText },
]

const Blok10Week2CasusC04DiarreeMalabsorptieSummary = () => (
  <SummaryLayout
    title="Malabsorptie"
    moduleKind="lme"
    description="Malabsorptie betekent dat voedingsstoffen niet goed worden opgenomen of benut. Daardoor kunnen klachten ontstaan zoals diarree, vetdiarree, buikpijn, gewichtsverlies, tekorten aan vitamines en mineralen, en bij kinderen vooral groeiachterstand."
    caseLabel="Week 2 · Casus C04: Diarree"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
    practiceLink="/oefenvragen?lme=blok10-week2-casus-c04-diarree-malabsorptie"
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02MalabsorptieHetBasisidee />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03Tabel1BelangrijkeOorzaken />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04SpugendeZuigeling />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05KleuterOndervoedingEnChronischeDiarree />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06CoeliakieDiagnostiek />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07KindNegenJaarCysticFibrosis />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08Dios />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09LeverziekteBijCf />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Sect10VolwasseneAcuteOfChronischeDiarree />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <Sect11VolwasseneDiarreeIcterusEnPancreas />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <Sect12Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week2CasusC04DiarreeMalabsorptieSummary
