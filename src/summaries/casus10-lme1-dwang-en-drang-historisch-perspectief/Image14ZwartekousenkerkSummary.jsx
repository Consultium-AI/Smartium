import { Church } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image14ZwartekousenkerkSummary = () => {
  const toc = [{ id: 'biblebelt', title: 'Zwartekousenkerk en Bible Belt', icon: Church }]
  return (
    <SummaryLayout
      title="Zwartekousenkerk"
      description="Bible Belt, SGP en segregatie in de klas."
      caseLabel="Week 5 Casus 10 LME 1: Afbeelding 14"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme1-dwang-en-drang-historisch-perspectief-image14"
    >
      <section id="biblebelt" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Zwartekousenkerk en Bible Belt</h2>
        <p className="text-slate-700 mb-4">In de Bible Belt speelde religie een grote rol bij vaccinatieweigering. In Elspeet leidde dit tot segregatie in de klas tussen gevaccineerde en niet-gevaccineerde kinderen.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image14ZwartekousenkerkSummary
