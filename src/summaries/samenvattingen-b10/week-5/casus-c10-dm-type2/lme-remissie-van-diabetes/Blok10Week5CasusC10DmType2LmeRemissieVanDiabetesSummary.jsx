import {
  Activity,
  BookOpen,
  ClipboardList,
  FileText,
  HeartPulse,
  Lightbulb,
  Pill,
  RefreshCw,
  Scale,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Section01BrondocumentTitel from './sections/Section01BrondocumentTitel'
import Section02Leerdoelen from './sections/Section02Leerdoelen'
import Section03IntroductieRemissieVanDiabetesType2 from './sections/Section03IntroductieRemissieVanDiabetesType2'
import Section04Tabel1WatWordtBedoeldMetRemissie from './sections/Section04Tabel1WatWordtBedoeldMetRemissie'
import Section05HoeOntstaatRemissie from './sections/Section05HoeOntstaatRemissie'
import Section06LeefstijlAlsBehandeling from './sections/Section06LeefstijlAlsBehandeling'
import Section07MedicatieAlsBehandeling from './sections/Section07MedicatieAlsBehandeling'
import Section08BariatrischeChirurgie from './sections/Section08BariatrischeChirurgie'
import Section09WanneerKiesJeWelkeBehandeling from './sections/Section09WanneerKiesJeWelkeBehandeling'
import Section10WaaromOntstaatRelapse from './sections/Section10WaaromOntstaatRelapse'
import Section11BelangrijksteKernideeenVoorDeKliniek from './sections/Section11BelangrijksteKernideeenVoorDeKliniek'
import Section12Samenvatting from './sections/Section12Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'LME45 – _Remissie_van_diabetes', icon: FileText },
  { id: 'sect-02', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-03', title: 'Introductie: remissie van diabetes type 2', icon: Lightbulb },
  { id: 'sect-04', title: 'Tabel 1. Wat wordt bedoeld met remissie?', icon: Table2 },
  { id: 'sect-05', title: 'Hoe ontstaat remissie?', icon: Activity },
  { id: 'sect-06', title: 'Leefstijl als behandeling', icon: HeartPulse },
  { id: 'sect-07', title: 'Medicatie als behandeling', icon: Pill },
  { id: 'sect-08', title: 'Bariatrische chirurgie', icon: Stethoscope },
  { id: 'sect-09', title: 'Wanneer kies je welke behandeling?', icon: ClipboardList },
  { id: 'sect-10', title: 'Waarom ontstaat relapse?', icon: RefreshCw },
  { id: 'sect-11', title: 'Belangrijkste kernideeën voor de kliniek', icon: Stethoscope },
  { id: 'sect-12', title: 'Samenvatting', icon: Scale },
]

const Blok10Week5CasusC10DmType2LmeRemissieVanDiabetesSummary = () => (
  <SummaryLayout
    title="Remissie van diabetes"
    moduleKind="lme"
    caseLabel="Week 5 · Casus C10: DM type 2"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Section01BrondocumentTitel />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Section02Leerdoelen />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Section03IntroductieRemissieVanDiabetesType2 />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Section04Tabel1WatWordtBedoeldMetRemissie />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Section05HoeOntstaatRemissie />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Section06LeefstijlAlsBehandeling />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Section07MedicatieAlsBehandeling />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Section08BariatrischeChirurgie />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Section09WanneerKiesJeWelkeBehandeling />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Section10WaaromOntstaatRelapse />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <Section11BelangrijksteKernideeenVoorDeKliniek />
    </section>
    <section id="sect-12" className="scroll-mt-24 mb-12">
      <Section12Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week5CasusC10DmType2LmeRemissieVanDiabetesSummary
