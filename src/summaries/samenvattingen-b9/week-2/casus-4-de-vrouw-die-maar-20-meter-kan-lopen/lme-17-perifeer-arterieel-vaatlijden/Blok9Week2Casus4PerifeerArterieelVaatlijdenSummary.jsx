import {
  BookOpen,
  Activity,
  Stethoscope,
  LineChart,
  ShieldAlert,
  ClipboardList,
  Microscope,
  GitBranch,
  HeartPulse,
  Syringe,
  ListChecks,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Leerdoelen from './Sect01Leerdoelen'
import Sect02WatGebeurtEr from './Sect02WatGebeurtEr'
import Sect03KlinischePresentatie from './Sect03KlinischePresentatie'
import Sect04Prognose from './Sect04Prognose'
import Sect05RisicofactorenEnPreventie from './Sect05RisicofactorenEnPreventie'
import Sect06AnamneseEnLichamelijkOnderzoek from './Sect06AnamneseEnLichamelijkOnderzoek'
import Sect07AanvullendOnderzoek from './Sect07AanvullendOnderzoek'
import Sect08DifferentiaaldiagnoseEnAcuteIschemie from './Sect08DifferentiaaldiagnoseEnAcuteIschemie'
import Sect09ConservatieveBehandeling from './Sect09ConservatieveBehandeling'
import Sect10InvasieveBehandelingEnAmputatie from './Sect10InvasieveBehandelingEnAmputatie'
import Sect11Samenvatting from './Sect11Samenvatting'

const Blok9Week2Casus4PerifeerArterieelVaatlijdenSummary = () => {
  const tableOfContents = [
    { id: 'sect-01', title: 'Leerdoelen', icon: BookOpen },
    { id: 'sect-02', title: 'Perifeer arterieel vaatlijden: wat gebeurt er?', icon: Activity },
    { id: 'sect-03', title: 'Klinische presentatie en ernst', icon: Stethoscope },
    { id: 'sect-04', title: 'Prognose van claudicatio en kritieke ischemie', icon: LineChart },
    { id: 'sect-05', title: 'Risicofactoren en preventie', icon: ShieldAlert },
    { id: 'sect-06', title: 'Anamnese en lichamelijk onderzoek', icon: ClipboardList },
    { id: 'sect-07', title: 'Aanvullend onderzoek en diagnostiek', icon: Microscope },
    { id: 'sect-08', title: 'Differentiaaldiagnose en acute ischemie', icon: GitBranch },
    { id: 'sect-09', title: 'Behandeling van PAV', icon: HeartPulse },
    { id: 'sect-10', title: 'Invasieve behandeling', icon: Syringe },
    { id: 'sect-11', title: 'Samenvatting', icon: ListChecks },
  ]

  return (
    <SummaryLayout
      title="Perifeer arterieel vaatlijden"
      description="Perifeer arterieel vaatlijden is een uitgebreid ziektebeeld dat vooral wordt veroorzaakt door atherosclerose. Dat betekent dat er in de wand van de slagader vet- en ontstekingsafzettingen ontstaan. In het begin is er vaak nog weinig aan de hand, maar de afwijking kan geleidelijk toenemen."
      caseLabel="Week 2 · Casus 4: De vrouw die maar 20 meter kan lopen"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=blok9-week2-casus4-perifeer-arterieel-vaatlijden"
      summaryVariantToggle={{
        activeLmeId: 'blok9-week2-casus4-perifeer-arterieel-vaatlijden',
        variants: [
          { id: 'blok9-week2-casus4-perifeer-arterieel-vaatlijden', label: 'Uitgebreid' },
          { id: 'blok9-week2-casus4-perifeer-arterieel-vaatlijden-mini', label: 'Kort' },
        ],
      }}
    >
      <section id="sect-01" className="scroll-mt-24 mb-12"><Sect01Leerdoelen /></section>
      <section id="sect-02" className="scroll-mt-24 mb-12"><Sect02WatGebeurtEr /></section>
      <section id="sect-03" className="scroll-mt-24 mb-12"><Sect03KlinischePresentatie /></section>
      <section id="sect-04" className="scroll-mt-24 mb-12"><Sect04Prognose /></section>
      <section id="sect-05" className="scroll-mt-24 mb-12"><Sect05RisicofactorenEnPreventie /></section>
      <section id="sect-06" className="scroll-mt-24 mb-12"><Sect06AnamneseEnLichamelijkOnderzoek /></section>
      <section id="sect-07" className="scroll-mt-24 mb-12"><Sect07AanvullendOnderzoek /></section>
      <section id="sect-08" className="scroll-mt-24 mb-12"><Sect08DifferentiaaldiagnoseEnAcuteIschemie /></section>
      <section id="sect-09" className="scroll-mt-24 mb-12"><Sect09ConservatieveBehandeling /></section>
      <section id="sect-10" className="scroll-mt-24 mb-12"><Sect10InvasieveBehandelingEnAmputatie /></section>
      <section id="sect-11" className="scroll-mt-24 mb-12"><Sect11Samenvatting /></section>
    </SummaryLayout>
  )
}

export default Blok9Week2Casus4PerifeerArterieelVaatlijdenSummary
