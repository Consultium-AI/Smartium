import { Scale } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image09WettelijkGeregeldeDrangSummary = () => {
  const toc = [{ id: 'drang', title: 'Wettelijk geregelde drang', icon: Scale }]
  return (
    <SummaryLayout
      title="Wettelijk geregelde drang"
      description="1940-1971: vrijstellingen medisch en gewetensbezwaar."
      caseLabel="Week 5 Casus 10 LME 1: Afbeelding 9"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme1-dwang-en-drang-historisch-perspectief-image09"
    >
      <section id="drang" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Wettelijk geregelde drang (1940-1971)</h2>
        <p className="text-slate-700 mb-4">Vanaf 1940 werd vaccinatie weer via wetgeving gestimuleerd. Er waren vrijstellingen mogelijk: medische contra-indicaties en gewetensbezwaar. Dit creëerde een balans tussen collectieve gezondheid en individuele vrijheid.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image09WettelijkGeregeldeDrangSummary
