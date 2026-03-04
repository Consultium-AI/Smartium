import { BookHeart } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image15GewetensbezwaarSummary = () => {
  const toc = [{ id: 'geweten', title: 'Gewetensbezwaar', icon: BookHeart }]
  return (
    <SummaryLayout
      title="Gewetensbezwaar"
      description="Heidelberg Catechismus, Gods voorzienigheid."
      caseLabel="Week 5 Casus 10 LME 1: Afbeelding 15"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme1-dwang-en-drang-historisch-perspectief-image15"
    >
      <section id="geweten" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Gewetensbezwaar</h2>
        <p className="text-slate-700 mb-4">Religieuze bezwaren werden onder meer gebaseerd op de Heidelberg Catechismus en het geloof in Gods voorzienigheid. Ziekte en gezondheid worden gezien als onderdeel van Gods plan.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image15GewetensbezwaarSummary
