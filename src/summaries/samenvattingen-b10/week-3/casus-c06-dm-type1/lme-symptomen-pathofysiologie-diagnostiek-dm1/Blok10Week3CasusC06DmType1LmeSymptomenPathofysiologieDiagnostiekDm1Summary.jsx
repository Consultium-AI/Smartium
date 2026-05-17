import {
  BookOpen,
  FlaskConical,
  Activity,
  ClipboardList,
  Stethoscope,
  TestTube2,
  Droplets,
  ScanLine,
  Gauge,
  Layers,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02PathofysiologieVanDiabetesMellitusType1 from './sections/Sect02PathofysiologieVanDiabetesMellitusType1'
import Sect03InsulinetekortEnMetabolisme from './sections/Sect03InsulinetekortEnMetabolisme'
import Sect04Symptomen from './sections/Sect04Symptomen'
import Sect05Diagnostiek from './sections/Sect05Diagnostiek'
import Sect06AntistoffenBijDiagnostiek from './sections/Sect06AntistoffenBijDiagnostiek'
import Sect07MonitoringVanDiabetes from './sections/Sect07MonitoringVanDiabetes'
import Sect08HbA1cEnTimeInRange from './sections/Sect08HbA1cEnTimeInRange'
import Sect09SamenvattingDiagnostischEnMonitoringPrincipe from './sections/Sect09SamenvattingDiagnostischEnMonitoringPrincipe'
import Sect10Samenvatting from './sections/Sect10Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Pathofysiologie van diabetes mellitus type 1', icon: FlaskConical },
  { id: 'sect-03', title: 'Wat doet een insulinetekort met het lichaam?', icon: Activity },
  { id: 'sect-04', title: 'Symptomen van diabetes mellitus type 1', icon: Stethoscope },
  { id: 'sect-05', title: 'Diagnostiek van diabetes mellitus type 1', icon: TestTube2 },
  { id: 'sect-06', title: 'Antistoffen bij de diagnostiek', icon: Droplets },
  { id: 'sect-07', title: 'Monitoring van diabetes mellitus type 1', icon: ScanLine },
  { id: 'sect-08', title: 'HbA1c en time in range', icon: Gauge },
  { id: 'sect-09', title: 'Samenvatting van het diagnostische en monitoringsprincipe', icon: Layers },
  { id: 'sect-10', title: 'Samenvatting', icon: ClipboardList },
]

const Blok10Week3CasusC06DmType1LmeSymptomenPathofysiologieDiagnostiekDm1Summary = () => (
  <SummaryLayout
    title="Symptomen, pathofysiologie en diagnostiek van diabetes mellitus type 1"
    moduleKind="lme"
    description={
      <>
        Diabetes mellitus type 1, vaak afgekort als DM-1, is een{' '}
        <strong className="text-slate-800 dark:text-slate-100">auto-immuunziekte van de alvleesklier</strong>. Dat betekent dat het eigen afweersysteem lichaamscellen aanvalt. Bij DM-1 zijn vooral de{' '}
        <strong className="text-slate-800 dark:text-slate-100">β-cellen in de eilandjes van Langerhans</strong> aangetast. Deze β-cellen maken normaal{' '}
        <strong className="text-slate-800 dark:text-slate-100">insuline</strong>.
      </>
    }
    caseLabel="Week 3 · Casus C06: DM type 1"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02PathofysiologieVanDiabetesMellitusType1 />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03InsulinetekortEnMetabolisme />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04Symptomen />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05Diagnostiek />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06AntistoffenBijDiagnostiek />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07MonitoringVanDiabetes />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08HbA1cEnTimeInRange />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09SamenvattingDiagnostischEnMonitoringPrincipe />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Sect10Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week3CasusC06DmType1LmeSymptomenPathofysiologieDiagnostiekDm1Summary
