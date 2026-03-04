import { BookOpen } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image21DefinitiesSummary = ({ standalone = true }) => {
  const toc = [{ id: 'definities', title: 'Kernbegrippen', icon: BookOpen }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Kernbegrippen sepsis"
      description="Orgaanfalen, bacteriemie, vochtresuscitatie, SOFA en mortaliteit."
      caseLabel="Week 6 Casus 12 LME 2: Afbeelding 21"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme2-sepsis-image21"
    >
      <section id="definities" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Kernbegrippen</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li><strong>Orgaanfalen:</strong> Acuut verlies van orgaanfunctie (nieren, lever, longen, hart)</li>
          <li><strong>Bacteriemie:</strong> Bacteriën in de bloedbaan</li>
          <li><strong>Vochtresuscitatie:</strong> Kristalloïd 30 mL/kg in 3 uur bij septische shock</li>
          <li><strong>SOFA:</strong> Sequential Organ Failure Assessment – score voor orgaandysfunctie</li>
          <li><strong>Mortaliteit:</strong> 15–50% afhankelijk van ernst</li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image21DefinitiesSummary
