import { Scale } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image23ReflectieGrapperhausSummary = ({ standalone = true }) => {
  const toc = [{ id: 'grapperhaus', title: 'Reflectie Grapperhaus', icon: Scale }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Reflectie Grapperhaus"
      description="Multiculturele samenleving, balans volksgezondheid en religieuze vrijheid."
      caseLabel="Week 5 Casus 10 LME 1: Afbeelding 23"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme1-dwang-en-drang-historisch-perspectief-image23"
    >
      <section id="grapperhaus" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Balans in een multiculturele samenleving</h2>
        <p className="text-slate-700 mb-4">Minister Grapperhaus benadrukte de noodzaak van een balans tussen volksgezondheid en religieuze vrijheid in een multiculturele samenleving. Het historisch perspectief helpt bij het begrijpen van deze spanningen.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image23ReflectieGrapperhausSummary
