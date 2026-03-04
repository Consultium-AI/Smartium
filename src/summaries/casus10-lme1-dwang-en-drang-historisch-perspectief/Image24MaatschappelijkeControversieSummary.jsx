import { Link2 } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image24MaatschappelijkeControversieSummary = () => {
  const toc = [{ id: 'slot', title: 'Maatschappelijke controversie', icon: Link2 }]
  return (
    <SummaryLayout
      title="Maatschappelijke controversie"
      description="Slot: rol artsen als bruggenbouwers."
      caseLabel="Week 5 Casus 10 LME 1: Afbeelding 24"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme1-dwang-en-drang-historisch-perspectief-image24"
    >
      <section id="slot" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Slot: rol van artsen</h2>
        <p className="text-slate-700 mb-4">Vaccinatie blijft een maatschappelijke controversie. Artsen kunnen als bruggenbouwers fungeren: door respectvol te communiceren en begrip te tonen voor verschillende perspectieven.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image24MaatschappelijkeControversieSummary
