import { Video } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image20FramWaiWadSummary = ({ standalone = true }) => {
  const toc = [{ id: 'waiwad', title: 'Safety II en FRAM – WAI vs WAD', icon: Video }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Safety II en FRAM"
      description="Work-as-imagined (WAI) versus Work-as-done (WAD)."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 20"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image20"
    >
      <section id="waiwad" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Work-as-imagined vs Work-as-done</h2>
        <p className="text-slate-700 mb-4"><strong>WAI (Work-as-imagined):</strong> Theoretische zorgscenario&apos;s gebaseerd op beleidslijnen en normen.</p>
        <p className="text-slate-700 mb-4"><strong>WAD (Work-as-done):</strong> Beschrijft hoe zorgverleners effectief omgaan met de variabiliteit van situaties in de praktijk.</p>
        <p className="text-slate-700 text-sm">WAI en WAD komen zelden overeen – dat is het mooie van een FRAM-analyse: het geeft inzicht in de variatie tussen theorie en praktijk.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image20FramWaiWadSummary
