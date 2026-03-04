import { Bug } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image22EnNuCoronaSummary = ({ standalone = true }) => {
  const toc = [{ id: 'corona', title: 'En nu: Corona 2020', icon: Bug }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="En nu: Corona 2020"
      description="Kerken, SGP Van der Staaij vs Grapperhaus."
      caseLabel="Week 5 Casus 10 LME 1: Afbeelding 22"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme1-dwang-en-drang-historisch-perspectief-image22"
    >
      <section id="corona" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Corona en vaccinatie 2020</h2>
        <p className="text-slate-700 mb-4">Tijdens de coronapandemie laaiden vergelijkbare spanningen op. De discussie over kerken en corona-toegangsbewijs, met SGP Van der Staaij tegenover minister Grapperhaus, toont de blijvende relevantie.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image22EnNuCoronaSummary
