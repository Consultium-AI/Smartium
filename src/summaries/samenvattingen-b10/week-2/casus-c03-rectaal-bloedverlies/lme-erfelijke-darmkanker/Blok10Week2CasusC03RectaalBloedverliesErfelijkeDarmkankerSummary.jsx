import {
  Activity,
  BookOpen,
  Dna,
  HeartPulse,
  Microscope,
  Stethoscope,
  Table2,
  Target,
  Users,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02ErfelijkeDarmkankerKort from './sections/Sect02ErfelijkeDarmkankerKort'
import Sect03WatIsLynchsyndroom from './sections/Sect03WatIsLynchsyndroom'
import Sect04Tabel2TumorenEnGeheugensteun from './sections/Sect04Tabel2TumorenEnGeheugensteun'
import Sect05HoeOntstaatLynchsyndroom from './sections/Sect05HoeOntstaatLynchsyndroom'
import Sect06TwoHitEnEpigenetisch from './sections/Sect06TwoHitEnEpigenetisch'
import Sect07Overerving from './sections/Sect07Overerving'
import Sect08HoeVerschillendRisicoPerGen from './sections/Sect08HoeVerschillendRisicoPerGen'
import Sect09WanneerDenkenIntro from './sections/Sect09WanneerDenkenIntro'
import Sect10PersoonlijkeVoorgeschiedenis from './sections/Sect10PersoonlijkeVoorgeschiedenis'
import Sect11Familieanamnese from './sections/Sect11Familieanamnese'
import Sect12Tabel4Voorbeelden from './sections/Sect12Tabel4Voorbeelden'
import Sect13KortSamengevatVerdenking from './sections/Sect13KortSamengevatVerdenking'
import Sect14TumoronderzoekScreening from './sections/Sect14TumoronderzoekScreening'
import Sect15VaststellingDiagnose from './sections/Sect15VaststellingDiagnose'
import Sect16WaaromWetenPatiënt from './sections/Sect16WaaromWetenPatiënt'
import Sect17KinderwensEnFamilie from './sections/Sect17KinderwensEnFamilie'
import Sect18AndereVormenErfelijkeDarmkanker from './sections/Sect18AndereVormenErfelijkeDarmkanker'
import Sect19Samenvatting from './sections/Sect19Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Erfelijke darmkanker in het kort · Tabel 1', icon: HeartPulse },
  { id: 'sect-03', title: 'Wat is Lynchsyndroom?', icon: Target },
  { id: 'sect-04', title: 'Tabel 2 · Lynch-tumoren', icon: Table2 },
  { id: 'sect-05', title: 'Hoe ontstaat Lynchsyndroom?', icon: Dna },
  { id: 'sect-06', title: 'Two-hit en epigenetisch', icon: Dna },
  { id: 'sect-07', title: 'Overerving', icon: Users },
  { id: 'sect-08', title: 'Risico per gen · Tabel 3', icon: Table2 },
  { id: 'sect-09', title: 'Wanneer denken aan Lynch?', icon: Stethoscope },
  { id: 'sect-10', title: 'Persoonlijke voorgeschiedenis', icon: Stethoscope },
  { id: 'sect-11', title: 'Familieanamnese', icon: Users },
  { id: 'sect-12', title: 'Tabel 4 · Voorbeelden', icon: Table2 },
  { id: 'sect-13', title: 'Kort samengevat (verdenking)', icon: Activity },
  { id: 'sect-14', title: 'Tumoronderzoek', icon: Microscope },
  { id: 'sect-15', title: 'Vaststelling diagnose', icon: Dna },
  { id: 'sect-16', title: 'Waarom weten? · Patiënt', icon: HeartPulse },
  { id: 'sect-17', title: 'Kinderwens en familie', icon: Users },
  { id: 'sect-18', title: 'Andere erfelijke vormen', icon: Target },
  { id: 'sect-19', title: 'Samenvatting', icon: BookOpen },
]

const Blok10Week2CasusC03RectaalBloedverliesErfelijkeDarmkankerSummary = () => (
  <SummaryLayout
    title="Erfelijke darmkanker"
    moduleKind="lme"
    description="Colorectaal carcinoom (CRC) is een van de meest voorkomende vormen van kanker in Nederland. Het lifetime risico op CRC ligt in de bevolking rond de 5–6%. In 2025 kregen ongeveer 12.000 mensen de diagnose CRC en ongeveer 4.500 mensen overleden aan de gevolgen ervan."
    caseLabel="Week 2 · Casus C03: Rectaal bloedverlies"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02ErfelijkeDarmkankerKort />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03WatIsLynchsyndroom />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04Tabel2TumorenEnGeheugensteun />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05HoeOntstaatLynchsyndroom />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06TwoHitEnEpigenetisch />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07Overerving />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08HoeVerschillendRisicoPerGen />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09WanneerDenkenIntro />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Sect10PersoonlijkeVoorgeschiedenis />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <Sect11Familieanamnese />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <Sect12Tabel4Voorbeelden />
    </section>
    <section id="sect-13" className="scroll-mt-24 mb-12">
      <Sect13KortSamengevatVerdenking />
    </section>
    <section id="sect-14" className="scroll-mt-24 mb-12">
      <Sect14TumoronderzoekScreening />
    </section>
    <section id="sect-15" className="scroll-mt-24 mb-12">
      <Sect15VaststellingDiagnose />
    </section>
    <section id="sect-16" className="scroll-mt-24 mb-12">
      <Sect16WaaromWetenPatiënt />
    </section>
    <section id="sect-17" className="scroll-mt-24 mb-12">
      <Sect17KinderwensEnFamilie />
    </section>
    <section id="sect-18" className="scroll-mt-24 mb-12">
      <Sect18AndereVormenErfelijkeDarmkanker />
    </section>
    <section id="sect-19" className="scroll-mt-24 mb-12">
      <Sect19Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week2CasusC03RectaalBloedverliesErfelijkeDarmkankerSummary
