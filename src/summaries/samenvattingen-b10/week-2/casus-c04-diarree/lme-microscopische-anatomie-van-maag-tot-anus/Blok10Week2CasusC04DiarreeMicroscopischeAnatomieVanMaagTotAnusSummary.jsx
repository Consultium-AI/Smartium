import {
  BookMarked,
  BookOpen,
  CircleDot,
  FileText,
  Layers,
  LayoutTemplate,
  Lightbulb,
  Microscope,
  Pill,
  Scan,
  Stethoscope,
  Table2,
  UtensilsCrossed,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02AlgemeneBouwVanDeTractusDigestivus from './sections/Sect02AlgemeneBouwVanDeTractusDigestivus'
import Sect03SerosaAdventitiaEnDeBuikholte from './sections/Sect03SerosaAdventitiaEnDeBuikholte'
import Sect04DeMaagFunctieEnRegios from './sections/Sect04DeMaagFunctieEnRegios'
import Sect05MaagklierenEnCeltypen from './sections/Sect05MaagklierenEnCeltypen'
import Sect06RegionaleVerschillenEnFunctioneleKoppelingMaag from './sections/Sect06RegionaleVerschillenEnFunctioneleKoppelingMaag'
import Sect07DunneDarmOpbouwEnFunctie from './sections/Sect07DunneDarmOpbouwEnFunctie'
import Sect08CeltypenInDeDunneDarm from './sections/Sect08CeltypenInDeDunneDarm'
import Sect09VerschillenTussenDuodenumJejunumEnIleum from './sections/Sect09VerschillenTussenDuodenumJejunumEnIleum'
import Sect10OpnameVanVoedingsstoffen from './sections/Sect10OpnameVanVoedingsstoffen'
import Sect11DikkeDarmFunctieEnBouw from './sections/Sect11DikkeDarmFunctieEnBouw'
import Sect12OesofagusAnusEnTotaalbeeld from './sections/Sect12OesofagusAnusEnTotaalbeeld'
import Sect13Samenvatting from './sections/Sect13Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Algemene bouw van de tractus digestivus · Tabel 1', icon: LayoutTemplate },
  { id: 'sect-03', title: 'Serosa, adventitia en de buikholte', icon: Layers },
  { id: 'sect-04', title: 'De maag: functie en regio’s', icon: UtensilsCrossed },
  { id: 'sect-05', title: 'Maagklieren en celtypen · Tabel 2', icon: Microscope },
  { id: 'sect-06', title: 'Regionale verschillen en functionele koppeling (maag)', icon: Lightbulb },
  { id: 'sect-07', title: 'De dunne darm: opbouw en functie', icon: Scan },
  { id: 'sect-08', title: 'Celtypen in de dunne darm · Tabel 3', icon: Table2 },
  { id: 'sect-09', title: 'Duodenum, jejunum en ileum · Tabel 4', icon: CircleDot },
  { id: 'sect-10', title: 'Opname van voedingsstoffen', icon: Pill },
  { id: 'sect-11', title: 'De dikke darm: functie en bouw', icon: Stethoscope },
  { id: 'sect-12', title: 'Oesofagus, anus en het totaalbeeld', icon: BookMarked },
  { id: 'sect-13', title: 'Samenvatting', icon: FileText },
]

const Blok10Week2CasusC04DiarreeMicroscopischeAnatomieVanMaagTotAnusSummary = () => (
  <SummaryLayout
    title="Microscopische anatomie van maag tot anus"
    moduleKind="lme"
    description="De tractus digestivus is in de hele lengte opgebouwd volgens een vaste basis. Dat maakt het makkelijker om verschillende weefsels onder de microscoop te herkennen."
    caseLabel="Week 2 · Casus C04: Diarree"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02AlgemeneBouwVanDeTractusDigestivus />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03SerosaAdventitiaEnDeBuikholte />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04DeMaagFunctieEnRegios />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05MaagklierenEnCeltypen />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06RegionaleVerschillenEnFunctioneleKoppelingMaag />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07DunneDarmOpbouwEnFunctie />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08CeltypenInDeDunneDarm />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09VerschillenTussenDuodenumJejunumEnIleum />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Sect10OpnameVanVoedingsstoffen />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <Sect11DikkeDarmFunctieEnBouw />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <Sect12OesofagusAnusEnTotaalbeeld />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <Sect13Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week2CasusC04DiarreeMicroscopischeAnatomieVanMaagTotAnusSummary
