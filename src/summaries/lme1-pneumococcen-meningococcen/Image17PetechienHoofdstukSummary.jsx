import { Target } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image17PetechienHoofdstukSummary = () => {
  const tableOfContents = [
    { id: 'hoofdstuk', title: 'Herkennen van petechiën', icon: Target },
  ]

  return (
    <SummaryLayout
      title="Hoofdstuk 3: Herkennen van petechiën"
      description="Belangrijke aanwijzing op een infectie met meningococcen – kritisch diagnostisch teken."
      caseLabel="Week 5 Casus 7 LME 1: Afbeelding 17"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme1-pneumococcen-image17"
    >
      <section id="hoofdstuk" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-rose-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-rose-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Herkennen van petechiën
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-6 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <p className="text-rose-800 font-medium m-0">
              Petechiën zijn een <strong>belangrijke aanwijzing op een infectie met meningococcen</strong>. Het herkennen van petechiën is cruciaal voor snelle diagnostiek en behandeling van levensbedreigende meningokokkensepsis of -meningitis.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image17PetechienHoofdstukSummary
