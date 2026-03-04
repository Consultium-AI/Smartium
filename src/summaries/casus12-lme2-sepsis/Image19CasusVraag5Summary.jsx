import { Zap } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image19CasusVraag5Summary = () => {
  const toc = [{ id: 'vasopressor', title: 'Casus – Vraag 5: Vasopressor', icon: Zap }]
  return (
    <SummaryLayout
      title="Casus: 78-jarige man – Vraag 5"
      description="Vasopressor bij septische shock."
      caseLabel="Week 6 Casus 12 LME 2: Afbeelding 19"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme2-sepsis-image19"
    >
      <section id="vasopressor" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Casus – Vraag 5: Vasopressor</h2>
        <p className="text-slate-700 mb-4">Bij persisterende hypotensie ondanks vochtresuscitatie: welke vasopressor als eerste keuze?</p>
        <p className="text-slate-700 mb-4"><strong>Noradrenaline.</strong> Noradrenaline is de eerste keuze vasopressor bij septische shock. Doel: MAP ≥65 mmHg.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image19CasusVraag5Summary
