import { Target } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image09PALSSummary = () => {
  const tableOfContents = [
    { id: 'pals', title: 'PALS', icon: Target },
  ]

  return (
    <SummaryLayout
      title="PALS – Periarteriolaire lymfocytenschede"
      description="Het T-celgebied rondom de centrale arteriolen wordt PALS genoemd."
      caseLabel="Week 5 Casus 7 LME 6: Afbeelding 9"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme6-voorbereiding-vow-milt-image09"
    >
      <section id="pals" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Target className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            PALS (Periarteriolaire lymfocytenschede)
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Definitie</h4>
            <p className="text-primary-700 text-sm m-0">
              In de milt is een zogenoemde periarteriolaire lymfocytenschede aanwezig, afgekort als PALS. T-lymfocyten zijn vooral rondom de centrale arteriolen aanwezig. Dit gebied wordt ook wel de peri-arteriolaire lymfocytenschede (PALS) genoemd.
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Kernpunt</h4>
            <p className="text-teal-700 text-sm m-0">
              PALS = T-celgebied. Het T-celgebied is hetzelfde als de periarteriolaire lymfocytenschede.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image09PALSSummary
