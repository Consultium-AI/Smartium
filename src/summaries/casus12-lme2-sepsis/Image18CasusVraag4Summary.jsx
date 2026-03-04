import { Activity } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image18CasusVraag4Summary = () => {
  const toc = [{ id: 'vocht', title: 'Casus – Vraag 4: Vochttherapie', icon: Activity }]
  return (
    <SummaryLayout
      title="Casus: 78-jarige man – Vraag 4"
      description="Vochttherapie bij septische shock."
      caseLabel="Week 6 Casus 12 LME 2: Afbeelding 18"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme2-sepsis-image18"
    >
      <section id="vocht" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Casus – Vraag 4: Vochttherapie</h2>
        <p className="text-slate-700 mb-4">Welke vochttherapie is geïndiceerd bij septische shock?</p>
        <p className="text-slate-700 mb-4"><strong>Kristalloïd 30 mL/kg</strong> in de eerste 3 uur (Surviving Sepsis Campaign). Gebruik kristalloïden (bijv. NaCl 0,9% of Ringer-lactaat), geen colloïden als eerste keuze.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image18CasusVraag4Summary
