import { AlertTriangle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image17CasusVraag3Summary = ({ standalone = true }) => {
  const toc = [{ id: 'septische-shock', title: 'Casus – Vraag 3: Septische shock', icon: AlertTriangle }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Casus: 78-jarige man – Vraag 3"
      description="Diagnose septische shock."
      caseLabel="Week 6 Casus 12 LME 2: Afbeelding 17"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme2-sepsis-image17"
    >
      <section id="septische-shock" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Casus – Vraag 3: Septische shock</h2>
        <p className="text-slate-700 mb-4">Patiënt heeft hypotensie die niet reageert op vochtresuscitatie. Wat is de diagnose?</p>
        <p className="text-slate-700 mb-4"><strong>Septische shock.</strong> Septische shock = sepsis + acuut circulatoir falen met persisterende hypotensie ondanks adequate vochtresuscitatie, of lactaat &gt;2 mmol/L.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image17CasusVraag3Summary
