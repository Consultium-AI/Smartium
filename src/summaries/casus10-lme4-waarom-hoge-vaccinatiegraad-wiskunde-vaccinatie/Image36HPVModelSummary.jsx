import { BarChart3 } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image36HPVModelSummary = ({ standalone = true }) => {
  const toc = [{ id: 'hpvmodel', title: 'HPV-model – Levensjaren gewonnen', icon: BarChart3 }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="HPV-model – Levensjaren gewonnen"
      description="Vergelijking meisjes-vaccinatie vs. meisjes + jongens bij verschillende vaccinatiegraden."
      caseLabel="Week 5 Casus 10 LME 4: Afbeelding 36"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image36"
    >
      <section id="hpvmodel" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Modelresultaten</h2>
        <p className="text-slate-700 mb-4">Het toevoegen van jongens aan het HPV-vaccinatieprogramma levert meer gezondheidswinst op dan alleen het verhogen van de vaccinatiegraad bij meisjes. Bij 60% vaccinatiegraad levert meisjes + jongens meer levensjaren op dan 100% meisjes alleen.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image36HPVModelSummary
