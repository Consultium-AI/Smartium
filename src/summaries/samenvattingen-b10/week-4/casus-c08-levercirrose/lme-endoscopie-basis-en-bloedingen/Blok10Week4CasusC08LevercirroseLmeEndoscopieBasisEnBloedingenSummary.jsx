import {
  Activity,
  AlertTriangle,
  BookOpen,
  FileText,
  HeartPulse,
  Lightbulb,
  Microscope,
  Pill,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02WatIsEenGastrointestinaleBloeding from './sections/Sect02WatIsEenGastrointestinaleBloeding'
import Sect03KlinischePresentatie from './sections/Sect03KlinischePresentatie'
import Sect04OorzakenEnEpidemiologie from './sections/Sect04OorzakenEnEpidemiologie'
import Sect05Risicofactoren from './sections/Sect05Risicofactoren'
import Sect06OpvangEnStabilisatie from './sections/Sect06OpvangEnStabilisatie'
import Sect07ScoresVoorRisicostratificatie from './sections/Sect07ScoresVoorRisicostratificatie'
import Sect08Diagnostiek from './sections/Sect08Diagnostiek'
import Sect09Behandeling from './sections/Sect09Behandeling'
import Sect10SamenvattingVanDeKlinischeAanpak from './sections/Sect10SamenvattingVanDeKlinischeAanpak'
import Sect11Samenvatting from './sections/Sect11Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Wat is een gastro-intestinale bloeding? · Tabel 1', icon: Table2 },
  { id: 'sect-03', title: 'Klinische presentatie · Tabel 2', icon: Stethoscope },
  { id: 'sect-04', title: 'Oorzaken en epidemiologie · Tabel 3', icon: AlertTriangle },
  { id: 'sect-05', title: 'Risicofactoren', icon: Activity },
  { id: 'sect-06', title: 'Opvang en stabilisatie · Tabel 4', icon: HeartPulse },
  { id: 'sect-07', title: 'Scores voor risicostratificatie', icon: Lightbulb },
  { id: 'sect-08', title: 'Diagnostiek', icon: Microscope },
  { id: 'sect-09', title: 'Behandeling', icon: Pill },
  { id: 'sect-10', title: 'Samenvatting van de klinische aanpak', icon: FileText },
  { id: 'sect-11', title: 'Samenvatting', icon: FileText },
]

const Blok10Week4CasusC08LevercirroseLmeEndoscopieBasisEnBloedingenSummary = () => (
  <SummaryLayout
    title="Endoscopie basis en bloedingen"
    moduleKind="lme"
    description="Een bloeding uit de tractus digestivus is een veelvoorkomende en potentieel levensbedreigende acute presentatie."
    caseLabel="Week 4 · Casus C08: Levercirrose"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02WatIsEenGastrointestinaleBloeding />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03KlinischePresentatie />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04OorzakenEnEpidemiologie />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05Risicofactoren />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06OpvangEnStabilisatie />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07ScoresVoorRisicostratificatie />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08Diagnostiek />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09Behandeling />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Sect10SamenvattingVanDeKlinischeAanpak />
    </section>
    <section id="sect-11" className="scroll-mt-24 mb-12">
      <Sect11Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week4CasusC08LevercirroseLmeEndoscopieBasisEnBloedingenSummary
