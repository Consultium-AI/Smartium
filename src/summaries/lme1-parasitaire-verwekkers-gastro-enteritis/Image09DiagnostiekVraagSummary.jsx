import { HelpCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image09DiagnostiekVraagSummary = ({ standalone = true }) => {
  const tableOfContents = [
    { id: 'vraag', title: 'Diagnostiek en verschillen', icon: HelpCircle },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title="Hoe kunnen darmparasieten aangetoond worden?"
      description="Centrale vraag over diagnostiek en verschillen met virale en bacteriele verwekkers."
      caseLabel="Week 5 Casus 9 LME 1: Afbeelding 9"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme1-parasitaire-verwekkers-gastro-enteritis-image09"
    >
      <section id="vraag" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <HelpCircle className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Centrale vraag hoofdstuk 2
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Leerdoel</h4>
            <p className="text-primary-700 m-0">
              Hoe kunnen darmparasieten aangetoond worden en wat zijn de belangrijkste verschillen ten opzichte van virale en bacteriele verwekkers van diarree?
            </p>
          </div>
          
          <p>
            Microscopie is een belangrijk diagnostisch hulpmiddel bij parasieten: ze zijn eukaryoot en relatief groot in vergelijking met virussen en bacteriën, waardoor ze microscopisch (en soms macroscopisch) zichtbaar zijn.
          </p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image09DiagnostiekVraagSummary
