import {
  BookOpen,
  CircleCheck,
  Layers,
  ListChecks,
  Microscope,
  Palette,
  Scan,
  Shapes,
  Stethoscope,
  Table2,
  Target,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02OpbouwVanDeHuid from './Sect02OpbouwVanDeHuid'
import Sect03EpidermisBouwEnCeltypen from './Sect03EpidermisBouwEnCeltypen'
import Sect04DermisEnOnderliggendeStructuren from './Sect04DermisEnOnderliggendeStructuren'
import Sect05GezondeHuidBeschadigdeHuidEnUvSchade from './Sect05GezondeHuidBeschadigdeHuidEnUvSchade'
import Sect06Dermatoscopie from './Sect06Dermatoscopie'
import Sect07GoedaardigeEnKwaadaardigeHuidtumoren from './Sect07GoedaardigeEnKwaadaardigeHuidtumoren'
import Sect08TumorenUitgaandeVanPigmentcellen from './Sect08TumorenUitgaandeVanPigmentcellen'
import Sect09Tabel6BenigneVersusMaligne from './Sect09Tabel6BenigneVersusMaligne'
import Sect10VerrucaSeborrhoica from './Sect10VerrucaSeborrhoica'
import Sect11UglyDuckFenomeen from './Sect11UglyDuckFenomeen'
import Sect12AbCDERegel from './Sect12AbCDERegel'
import Sect13TumorenUitgaandeVanEndotheelcellen from './Sect13TumorenUitgaandeVanEndotheelcellen'
import Sect14KlinischeRelevantie from './Sect14KlinischeRelevantie'
import Sect15Samenvatting from './Sect15Samenvatting'

const Blok5Week2Casus4GoedaardigeEnKwaadaardigeHuidafwijkingenSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Opbouw van de huid', icon: Layers },
    { id: 'sect-03', title: 'Epidermis: bouw en celtypen', icon: Microscope },
    { id: 'sect-04', title: 'Dermis en onderliggende structuren', icon: Layers },
    { id: 'sect-05', title: 'Gezonde huid, beschadigde huid en UV-schade', icon: Target },
    { id: 'sect-06', title: 'Dermatoscopie: kleur en structuur', icon: Scan },
    { id: 'sect-07', title: 'Goedaardige en kwaadaardige huidtumoren', icon: Shapes },
    { id: 'sect-08', title: 'Tumoren uitgaande van pigmentcellen', icon: Palette },
    { id: 'sect-09', title: 'Tabel 6: benigne versus maligne', icon: Table2 },
    { id: 'sect-10', title: 'Verruca seborrhoica en andere benigne laesies', icon: ListChecks },
    { id: 'sect-11', title: 'Het "ugly duck"-fenomeen', icon: Shapes },
    { id: 'sect-12', title: 'De ABCDE-regel', icon: ListChecks },
    { id: 'sect-13', title: 'Tumoren uitgaande van endotheelcellen', icon: Target },
    { id: 'sect-14', title: 'Klinische relevantie', icon: Stethoscope },
    { id: 'sect-15', title: 'Samenvatting', icon: CircleCheck },
  ]

  return (
    <SummaryLayout
      title="Goedaardige en kwaadaardige huidafwijkingen"
      description="De huid bestaat uit meerdere lagen en structuren die samen zorgen voor bescherming, stevigheid en herkenbare huidafwijkingen. In de dermatologie is het belangrijk om niet alleen naar de buitenkant te kijken, maar ook te begrijpen uit welke laag een afwijking afkomstig kan zijn."
      caseLabel="Week 2 · Casus 4: Donkere vlek"
      blokLabel="Blok 5"
      practiceLink="/oefenvragen?lme=blok5-week2-casus4-goedaardige-en-kwaadaardige-huidafwijkingen"
      tableOfContents={tableOfContents}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12">
        <Sect01Leerdoelen />
      </section>
      <section id="sect-02" className="scroll-mt-24 mb-12">
        <Sect02OpbouwVanDeHuid />
      </section>
      <section id="sect-03" className="scroll-mt-24 mb-12">
        <Sect03EpidermisBouwEnCeltypen />
      </section>
      <section id="sect-04" className="scroll-mt-24 mb-12">
        <Sect04DermisEnOnderliggendeStructuren />
      </section>
      <section id="sect-05" className="scroll-mt-24 mb-12">
        <Sect05GezondeHuidBeschadigdeHuidEnUvSchade />
      </section>
      <section id="sect-06" className="scroll-mt-24 mb-12">
        <Sect06Dermatoscopie />
      </section>
      <section id="sect-07" className="scroll-mt-24 mb-12">
        <Sect07GoedaardigeEnKwaadaardigeHuidtumoren />
      </section>
      <section id="sect-08" className="scroll-mt-24 mb-12">
        <Sect08TumorenUitgaandeVanPigmentcellen />
      </section>
      <section id="sect-09" className="scroll-mt-24 mb-12">
        <Sect09Tabel6BenigneVersusMaligne />
      </section>
      <section id="sect-10" className="scroll-mt-24 mb-12">
        <Sect10VerrucaSeborrhoica />
      </section>
      <section id="sect-11" className="scroll-mt-24 mb-12">
        <Sect11UglyDuckFenomeen />
      </section>
      <section id="sect-12" className="scroll-mt-24 mb-12">
        <Sect12AbCDERegel />
      </section>
      <section id="sect-13" className="scroll-mt-24 mb-12">
        <Sect13TumorenUitgaandeVanEndotheelcellen />
      </section>
      <section id="sect-14" className="scroll-mt-24 mb-12">
        <Sect14KlinischeRelevantie />
      </section>
      <section id="sect-15" className="scroll-mt-24 mb-12">
        <Sect15Samenvatting />
      </section>
    </SummaryLayout>
  )
}

export default Blok5Week2Casus4GoedaardigeEnKwaadaardigeHuidafwijkingenSummary
