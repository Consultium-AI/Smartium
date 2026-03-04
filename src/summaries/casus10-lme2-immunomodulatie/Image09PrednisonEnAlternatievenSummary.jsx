import { BarChart3 } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image09PrednisonEnAlternatievenSummary = () => {
  const toc = [{ id: 'prednison', title: 'Prednison en alternatieven', icon: BarChart3 }]
  return (
    <SummaryLayout
      title="Prednison en alternatieven"
      description="Infectierisico en alternatieve immunosuppressiva."
      caseLabel="Week 5 Casus 10 LME 2: Afbeelding 9"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme2-immunomodulatie-image09"
    >
      <section id="prednison" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Prednison en infectierisico</h2>
        <p className="text-slate-700 mb-4">Prednison verhoogt het infectierisico dosisafhankelijk. Alternatieven: azathioprine, methotrexaat, mycofenolzuren, ciclosporine, en biologicals zoals anti-TNF en anti-IL6.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image09PrednisonEnAlternatievenSummary
