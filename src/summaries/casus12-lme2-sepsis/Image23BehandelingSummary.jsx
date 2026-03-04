import { HeartPulse } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image23BehandelingSummary = () => {
  const toc = [{ id: 'behandeling', title: 'Behandeling sepsis', icon: HeartPulse }]
  return (
    <SummaryLayout
      title="Behandeling van sepsis"
      description="Vochtresuscitatie, antibiotica en noradrenaline."
      caseLabel="Week 6 Casus 12 LME 2: Afbeelding 23"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme2-sepsis-image23"
    >
      <section id="behandeling" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Behandeling van sepsis</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li><strong>Vochtresuscitatie:</strong> Kristalloïd 30 mL/kg in 3 uur bij septische shock</li>
          <li><strong>Antibiotica:</strong> Binnen 1 uur (of 4 uur bij niet-shock) na herkenning sepsis</li>
          <li><strong>Vasopressor:</strong> Noradrenaline als eerste keuze bij persisterende hypotensie; doel MAP ≥65 mmHg</li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image23BehandelingSummary
