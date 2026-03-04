import { CheckCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image34SlotSummary = () => {
  const toc = [{ id: 'slot', title: 'Slot', icon: CheckCircle }]
  return (
    <SummaryLayout
      title="Slot"
      description="Afsluiting van hoofdstuk 7."
      caseLabel="Week 5 Casus 10 LME 4: Afbeelding 34"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image34"
    >
      <section id="slot" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Slot</h2>
        <p className="text-slate-700 mb-4">Je hebt de risico's van een te lage vaccinatiegraad doorgenomen. Test je kennis met de oefenvragen.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image34SlotSummary
