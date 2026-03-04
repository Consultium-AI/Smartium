import { User } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image15CasusVraag1Summary = () => {
  const toc = [{ id: 'casus', title: 'Casus – Vraag 1', icon: User }]
  return (
    <SummaryLayout
      title="Casus: 78-jarige man – Vraag 1"
      description="SOFA-score en mortaliteitsrisico bij sepsis."
      caseLabel="Week 6 Casus 12 LME 2: Afbeelding 15"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme2-sepsis-image15"
    >
      <section id="casus" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Casus – Vraag 1</h2>
        <p className="text-slate-700 mb-4">78-jarige man, opgenomen met pneumonie. SOFA-score 4. Wat is het geschatte mortaliteitsrisico?</p>
        <p className="text-slate-700 mb-4">Bij SOFA-score 4 is het mortaliteitsrisico ongeveer <strong>10%</strong>. SOFA correleert met mortaliteit: hogere score = hoger risico.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image15CasusVraag1Summary
