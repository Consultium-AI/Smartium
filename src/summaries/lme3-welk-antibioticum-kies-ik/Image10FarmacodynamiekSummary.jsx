import { HeartPulse } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image10FarmacodynamiekSummary = () => {
  const toc = [{ id: 'pd', title: 'Farmacodynamiek', icon: HeartPulse }]
  return (
    <SummaryLayout
      title="Farmacodynamiek"
      description="Effect antibioticum op verwekker. Oraal vs IV."
      caseLabel="Week 5 Casus 9 LME 3: Afbeelding 10"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=lme3-welk-antibioticum-kies-ik-image10"
    >
      <section id="pd" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Farmacodynamiek</h2>
        <p className="text-slate-700">Effect van antibioticum op verwekker. Kies oraal als mogelijk. Bij ernstig zieken start IV, switch naar oraal bij klinische verbetering.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image10FarmacodynamiekSummary
