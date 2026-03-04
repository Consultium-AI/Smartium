import { AlertTriangle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image17CasusSeptischeShockSummary = () => {
  const toc = [{ id: 'shock', title: 'Casus – Septische shock', icon: AlertTriangle }]
  return (
    <SummaryLayout
      title="Casus – Septische shock"
      description="Definitie: vasopressoren nodig en/of verhoogd lactaat."
      caseLabel="Week 6 Casus 12 LME 2: Afbeelding 17"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme2-sepsis-image17"
    >
      <section id="shock" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Septische shock</h2>
        <p className="text-slate-700 mb-4">Septische shock is een subset van sepsis waarbij sprake is van acuut circulatoir falen. De definitie volgens Sepsis-3:</p>
        <div className="p-4 bg-red-50 rounded-xl border border-red-200">
          <h4 className="font-bold text-red-800 mb-2">Criteria septische shock</h4>
          <ul className="list-disc pl-6 space-y-1 text-red-700 text-sm">
            <li>Persisterende hypotensie die vasopressoren nodig heeft om MAP van minimaal 65 mmHg te houden</li>
            <li>En/of serumlactaat boven 2 mmol/L ondanks adequate vochtresuscitatie</li>
          </ul>
        </div>
        <p className="text-slate-700 mt-4">Patiënten met septische shock hebben een hogere mortaliteit dan patiënten met sepsis zonder shock.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image17CasusSeptischeShockSummary
