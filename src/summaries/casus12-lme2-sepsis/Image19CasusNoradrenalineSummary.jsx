import { Activity } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image19CasusNoradrenalineSummary = () => {
  const toc = [{ id: 'noradrenaline', title: 'Casus – Noradrenaline als eerste vasopressor', icon: Activity }]
  return (
    <SummaryLayout
      title="Casus – Noradrenaline als eerste vasopressor"
      description="Noradrenaline is de eerste keuze vasopressor bij septische shock."
      caseLabel="Week 6 Casus 12 LME 2: Afbeelding 19"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme2-sepsis-image19"
    >
      <section id="noradrenaline" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Vasopressoren bij septische shock</h2>
        <p className="text-slate-700 mb-4">Wanneer vochtresuscitatie onvoldoende is om de bloeddruk te herstellen, moeten vasopressoren worden gestart.</p>
        <div className="p-4 bg-primary-50 rounded-xl border border-primary-200">
          <h4 className="font-bold text-primary-800 mb-2">Eerste keuze</h4>
          <p className="text-primary-700 text-sm">Noradrenaline is de eerste keuze vasopressor bij septische shock om MAP van minimaal 65 mmHg te bereiken. Dopamine wordt niet meer aanbevolen als eerste keuze vanwege meer bijwerkingen zoals aritmieën.</p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image19CasusNoradrenalineSummary
