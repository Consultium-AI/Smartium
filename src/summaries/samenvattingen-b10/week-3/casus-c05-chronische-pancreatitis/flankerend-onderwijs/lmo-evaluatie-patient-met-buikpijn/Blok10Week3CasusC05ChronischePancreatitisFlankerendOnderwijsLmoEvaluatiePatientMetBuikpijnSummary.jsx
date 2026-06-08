import {
  AlertTriangle,
  BookOpen,
  FileText,
  LayoutList,
  ListChecks,
  Stethoscope,
  Table2,
} from 'lucide-react'
import SummaryLayout from '../../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './sections/Sect01Leerdoelen'
import Sect02EvaluatieVolwassenPatientMetBuikpijn from './sections/Sect02EvaluatieVolwassenPatientMetBuikpijn'
import Sect03WaaromSystematischeAanpakBelangrijkIs from './sections/Sect03WaaromSystematischeAanpakBelangrijkIs'
import Sect04AnamneseBasisVanDeDifferentiaaldiagnose from './sections/Sect04AnamneseBasisVanDeDifferentiaaldiagnose'
import Sect05UrgenteEnNietUrgenteOorzaken from './sections/Sect05UrgenteEnNietUrgenteOorzaken'
import Sect06LichamelijkOnderzoekZoekenNaarAlarmsignalen from './sections/Sect06LichamelijkOnderzoekZoekenNaarAlarmsignalen'
import Sect07AlarmsymptomenDieJeNietMagMissen from './sections/Sect07AlarmsymptomenDieJeNietMagMissen'
import Sect08SystematischDifferentiaaldiagnostischDenken from './sections/Sect08SystematischDifferentiaaldiagnostischDenken'
import Sect09SamenvattingVanDeAanpak from './sections/Sect09SamenvattingVanDeAanpak'
import Sect10Samenvatting from './sections/Sect10Samenvatting'

const tableOfContents = [
  { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
  { id: 'sect-02', title: 'Evaluatie volwassen patiënt', icon: Stethoscope },
  { id: 'sect-03', title: 'Systematische aanpak', icon: LayoutList },
  { id: 'sect-04', title: 'Anamnese', icon: ListChecks },
  { id: 'sect-05', title: 'Urgentie · Tabel 1', icon: Table2 },
  { id: 'sect-06', title: 'Lichamelijk onderzoek', icon: Stethoscope },
  { id: 'sect-07', title: 'Alarmsymptomen · Tabel 2', icon: AlertTriangle },
  { id: 'sect-08', title: 'Differentiaaldiagnostisch denken', icon: LayoutList },
  { id: 'sect-09', title: 'Aanpak · Tabel 3', icon: Table2 },
  { id: 'sect-10', title: 'Samenvatting', icon: FileText },
]

const Blok10Week3CasusC05ChronischePancreatitisFlankerendOnderwijsLmoEvaluatiePatientMetBuikpijnSummary = () => (
  <SummaryLayout
    title="Evaluatie patiënt met buikpijn"
    moduleKind="lmo"
    description="Buikpijn is een veelvoorkomende klacht en kan variëren van onschuldig en zelflimiterend tot levensbedreigend. Daarom is het belangrijk om de beoordeling gestructureerd aan te pakken."
    caseLabel="Week 3 · Casus C05: Chronische pancreatitis"
    blokLabel="Blok 10"
    tableOfContents={tableOfContents}
    practiceLink="/oefenvragen?lme=blok10-week3-casus-c05-chronische-pancreatitis-lmo-evaluatie-patient-met-buikpijn"
  >
    <section id="sect-01" className="scroll-mt-24 mb-12">
      <Sect01Leerdoelen />
    </section>
    <section id="sect-02" className="scroll-mt-24 mb-12">
      <Sect02EvaluatieVolwassenPatientMetBuikpijn />
    </section>
    <section id="sect-03" className="scroll-mt-24 mb-12">
      <Sect03WaaromSystematischeAanpakBelangrijkIs />
    </section>
    <section id="sect-04" className="scroll-mt-24 mb-12">
      <Sect04AnamneseBasisVanDeDifferentiaaldiagnose />
    </section>
    <section id="sect-05" className="scroll-mt-24 mb-12">
      <Sect05UrgenteEnNietUrgenteOorzaken />
    </section>
    <section id="sect-06" className="scroll-mt-24 mb-12">
      <Sect06LichamelijkOnderzoekZoekenNaarAlarmsignalen />
    </section>
    <section id="sect-07" className="scroll-mt-24 mb-12">
      <Sect07AlarmsymptomenDieJeNietMagMissen />
    </section>
    <section id="sect-08" className="scroll-mt-24 mb-12">
      <Sect08SystematischDifferentiaaldiagnostischDenken />
    </section>
    <section id="sect-09" className="scroll-mt-24 mb-12">
      <Sect09SamenvattingVanDeAanpak />
    </section>
    <section id="sect-10" className="scroll-mt-24 mb-12">
      <Sect10Samenvatting />
    </section>
  </SummaryLayout>
)

export default Blok10Week3CasusC05ChronischePancreatitisFlankerendOnderwijsLmoEvaluatiePatientMetBuikpijnSummary
