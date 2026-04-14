import {
  BookOpen,
  Droplets,
  Table2,
  GitBranch,
  Activity,
  ShieldAlert,
  Stethoscope,
  ListChecks,
  CheckCircle2,
} from 'lucide-react'
import SummaryLayout from '../../../../../components/SummaryLayout'
import Sect01Intro from './Sect01Intro'
import Sect02Creatinine from './Sect02Creatinine'
import Sect03AnatomischeIndeling from './Sect03AnatomischeIndeling'
import Sect04Prerenaal from './Sect04Prerenaal'
import Sect05Renaal from './Sect05Renaal'
import Sect06Anurie from './Sect06Anurie'
import Sect07Postrenaal from './Sect07Postrenaal'
import Sect08Ziektebeelden from './Sect08Ziektebeelden'
import Sect09Samengevat from './Sect09Samengevat'

const Blok9Week1Casus1AcuteNierschadeMiniSummary = () => {
  const tableOfContents = [
    { id: 'mini-sect-01', title: 'Acute nierschade (acute nierinsufficiëntie)', icon: BookOpen },
    { id: 'mini-sect-02', title: 'Een afwijkende serumcreatininewaarde betekent niet altijd echte nierschade.', icon: Droplets },
    { id: 'mini-sect-03', title: 'Praktisch is de anatomische indeling in prerenaal, renaal en postrenaal zeer bruikbaar.', icon: Table2 },
    { id: 'mini-sect-04', title: 'Prerenaal zit de oorzaak meestal buiten de nier zelf.', icon: GitBranch },
    { id: 'mini-sect-05', title: 'Renaal betekent intrinsieke nierschade.', icon: Activity },
    { id: 'mini-sect-06', title: 'Het onderscheid tussen prerenaal en ATN is klinisch soms lastig.', icon: ShieldAlert },
    { id: 'mini-sect-07', title: 'Postrenaal betekent een obstructie ná de nier, waardoor urine niet goed kan afvloeien.', icon: Stethoscope },
    { id: 'mini-sect-08', title: 'Een aantal ziektebeelden illustreert dat de context bepalend is.', icon: ListChecks },
    { id: 'mini-sect-09', title: 'Samengevat is acute nierschade een meestal herstelbare, plotselinge daling van de nierfunctie.', icon: CheckCircle2 },
  ]

  return (
    <SummaryLayout
      title="Acute nierschade"
      description="Acute nierschade (acute nierinsufficiëntie) is een plotselinge daling van de nierfunctie, meestal in uren tot dagen, en in principe herstelbaar."
      caseLabel="Week 1 · Casus 1: Patiënt met acute nierschade"
      blokLabel="Blok 9"
      tableOfContents={tableOfContents}
      summaryVariantToggle={{
        activeLmeId: 'blok9-week1-casus1-acute-nierschade-mini',
        variants: [
          { id: 'blok9-week1-casus1-acute-nierschade', label: 'Uitgebreid' },
          { id: 'blok9-week1-casus1-acute-nierschade-mini', label: 'Kort' },
        ],
      }}
    >
      <section id="mini-sect-01" className="scroll-mt-24 mb-12">
        <Sect01Intro />
      </section>
      <section id="mini-sect-02" className="scroll-mt-24 mb-12">
        <Sect02Creatinine />
      </section>
      <section id="mini-sect-03" className="scroll-mt-24 mb-12">
        <Sect03AnatomischeIndeling />
      </section>
      <section id="mini-sect-04" className="scroll-mt-24 mb-12">
        <Sect04Prerenaal />
      </section>
      <section id="mini-sect-05" className="scroll-mt-24 mb-12">
        <Sect05Renaal />
      </section>
      <section id="mini-sect-06" className="scroll-mt-24 mb-12">
        <Sect06Anurie />
      </section>
      <section id="mini-sect-07" className="scroll-mt-24 mb-12">
        <Sect07Postrenaal />
      </section>
      <section id="mini-sect-08" className="scroll-mt-24 mb-12">
        <Sect08Ziektebeelden />
      </section>
      <section id="mini-sect-09" className="scroll-mt-24 mb-12">
        <Sect09Samengevat />
      </section>
    </SummaryLayout>
  )
}

export default Blok9Week1Casus1AcuteNierschadeMiniSummary
