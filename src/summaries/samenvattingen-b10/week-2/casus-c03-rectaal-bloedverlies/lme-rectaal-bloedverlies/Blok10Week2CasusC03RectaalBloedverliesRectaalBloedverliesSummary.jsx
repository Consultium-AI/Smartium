import {
  Activity,
  BookOpen,
  HeartPulse,
  Microscope,
  Stethoscope,
  Syringe,
  Table2,
  Target,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02RectaalBloedverliesDenkBreed from './sections/Sect02RectaalBloedverliesDenkBreed'
import Sect03AandachtsvraagHelderRood from './sections/Sect03AandachtsvraagHelderRood'
import Sect04AnatomieMesenterialeVaten from './sections/Sect04AnatomieMesenterialeVaten'
import Sect05AandachtsvraagCollateralen from './sections/Sect05AandachtsvraagCollateralen'
import Sect06AcuteMesenterialeIschemieIntro from './sections/Sect06AcuteMesenterialeIschemieIntro'
import Sect07Tabel2AmiNomi from './sections/Sect07Tabel2AmiNomi'
import Sect08KlinischePresentatieAmi from './sections/Sect08KlinischePresentatieAmi'
import Sect09DiagnostiekAmi from './sections/Sect09DiagnostiekAmi'
import Sect10AandachtsvraagLactaat from './sections/Sect10AandachtsvraagLactaat'
import Sect11BehandelingAmi from './sections/Sect11BehandelingAmi'
import Sect12BelangrijkeKlinischeBoodschap from './sections/Sect12BelangrijkeKlinischeBoodschap'
import Sect13HemorroidenIntroEnKlachten from './sections/Sect13HemorroidenIntroEnKlachten'
import Sect14Tabel3EnBehandelingHemorroiden from './sections/Sect14Tabel3EnBehandelingHemorroiden'
import Sect15OnderzoekAnusRectum from './sections/Sect15OnderzoekAnusRectum'
import Sect16FissuraAniKlachten from './sections/Sect16FissuraAniKlachten'
import Sect17FissuraAniKlassificatie from './sections/Sect17FissuraAniKlassificatie'
import Sect18FissuraAniBehandeling from './sections/Sect18FissuraAniBehandeling'
import Sect19FissuraAniAandachtsvraag from './sections/Sect19FissuraAniAandachtsvraag'
import Sect20AngiografieEmbolisatieCoiling from './sections/Sect20AngiografieEmbolisatieCoiling'
import Sect21Samenvatting from './sections/Sect21Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Denk breed', icon: Target },
  { id: 'sect-03', title: 'Aandachtsvraag · helder rood', icon: Activity },
  { id: 'sect-04', title: 'Mesenteriale vaten · Tabel 1', icon: HeartPulse },
  { id: 'sect-05', title: 'Aandachtsvraag · collateralen', icon: Activity },
  { id: 'sect-06', title: 'Acute mesenteriale ischemie', icon: Stethoscope },
  { id: 'sect-07', title: 'AMI en NOMI · Tabel 2', icon: Table2 },
  { id: 'sect-08', title: 'Klinische presentatie AMI', icon: Stethoscope },
  { id: 'sect-09', title: 'Diagnostiek AMI', icon: Microscope },
  { id: 'sect-10', title: 'Aandachtsvraag · lactaat', icon: Activity },
  { id: 'sect-11', title: 'Behandeling AMI', icon: Syringe },
  { id: 'sect-12', title: 'Belangrijke boodschap', icon: HeartPulse },
  { id: 'sect-13', title: 'Hemorroïden', icon: Target },
  { id: 'sect-14', title: 'Hemorroïden · Tabel 3', icon: Table2 },
  { id: 'sect-15', title: 'Onderzoek anus en rectum', icon: Stethoscope },
  { id: 'sect-16', title: 'Fissura ani · klachten', icon: Stethoscope },
  { id: 'sect-17', title: 'Fissura ani · klassificatie', icon: Stethoscope },
  { id: 'sect-18', title: 'Fissura ani · behandeling', icon: Syringe },
  { id: 'sect-19', title: 'Aandachtsvraag · chronische fissuur', icon: Activity },
  { id: 'sect-20', title: 'Angiografie en coiling', icon: Microscope },
  { id: 'sect-21', title: 'Samenvatting', icon: BookOpen },
]

const Blok10Week2CasusC03RectaalBloedverliesRectaalBloedverliesSummary = () => (
  <SummaryLayout
    title="Rectaal bloedverlies"
    moduleKind="lme"
    description="Rectaal bloedverlies is een belangrijk symptoom, maar de oorzaak ligt niet altijd laag in het maagdarmkanaal. Meestal komt het bloed uit een bron in het onderste deel van de tractus digestivus. Daarbij hoort het distale terminale ileum, het colon en het rectum."
    caseLabel="Week 2 · Casus C03: Rectaal bloedverlies"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02RectaalBloedverliesDenkBreed />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03AandachtsvraagHelderRood />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04AnatomieMesenterialeVaten />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05AandachtsvraagCollateralen />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06AcuteMesenterialeIschemieIntro />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07Tabel2AmiNomi />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08KlinischePresentatieAmi />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09DiagnostiekAmi />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Sect10AandachtsvraagLactaat />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <Sect11BehandelingAmi />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <Sect12BelangrijkeKlinischeBoodschap />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <Sect13HemorroidenIntroEnKlachten />
    </section>
    <section id="sect-14" className="scroll-mt-24 mb-12">
      <Sect14Tabel3EnBehandelingHemorroiden />
    </section>
    <section id="sect-15" className="scroll-mt-24 mb-12">
      <Sect15OnderzoekAnusRectum />
    </section>
    <section id="sect-16" className="scroll-mt-24 mb-12">
      <Sect16FissuraAniKlachten />
    </section>
    <section id="sect-17" className="scroll-mt-24 mb-12">
      <Sect17FissuraAniKlassificatie />
    </section>
    <section id="sect-18" className="scroll-mt-24 mb-12">
      <Sect18FissuraAniBehandeling />
    </section>
    <section id="sect-19" className="scroll-mt-24 mb-12">
      <Sect19FissuraAniAandachtsvraag />
    </section>
    <section id="sect-20" className="scroll-mt-24 mb-12">
      <Sect20AngiografieEmbolisatieCoiling />
    </section>
    <section id="sect-21" className="scroll-mt-24 mb-12">
      <Sect21Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week2CasusC03RectaalBloedverliesRectaalBloedverliesSummary
