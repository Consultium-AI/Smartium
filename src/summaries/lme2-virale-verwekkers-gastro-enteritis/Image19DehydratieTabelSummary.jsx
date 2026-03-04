import { AlertCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image19DehydratieTabelSummary = ({ standalone = true }) => {
  const tableOfContents = [{ id: 'tabel', title: 'Hoe ziek is Elise', icon: AlertCircle }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Hoe ziek is Elise"
      description="Dehydratietabel en behandelindicatie."
      caseLabel="Week 5 Casus 9 LME 2: Afbeelding 19"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme2-virale-verwekkers-gastro-enteritis-image19"
    >
      <section id="tabel" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <AlertCircle className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Hoe ziek is Elise</h2>
        </div>
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>Mild: ORS thuis. Matig: ORS eventueel ziekenhuis. Ernstig: ziekenhuisopname IV. Elise heeft milde dehydratie.</p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image19DehydratieTabelSummary
