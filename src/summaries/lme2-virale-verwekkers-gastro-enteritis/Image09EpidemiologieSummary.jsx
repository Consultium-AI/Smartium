import { BarChart3 } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image09EpidemiologieSummary = ({ standalone = true }) => {
  const tableOfContents = [
    { id: 'epi', title: 'Epidemiologie virale gastro-enteritis', icon: BarChart3 },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title="Epidemiologie virale gastro-enteritis"
      description="Seizoenspatronen en uitbraken van rotavirus, norovirus, adenovirus en astrovirus."
      caseLabel="Week 5 Casus 9 LME 2: Afbeelding 9"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme2-virale-verwekkers-gastro-enteritis-image09"
    >
      <section id="epi" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <BarChart3 className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Epidemiologie virale gastro-enteritis
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Rotavirus</h4>
            <p className="text-primary-700 text-sm m-0">
              Seizoensgebonden: piek in de winter en het vroege voorjaar (februari–maart). Vooral bij jonge kinderen.
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Norovirus</h4>
            <p className="text-primary-700 text-sm m-0">
              Seizoensgebonden: piek in de winter. Verantwoordelijk voor veel uitbraken in zorginstellingen, cruiseschepen en kinderdagverblijven.
            </p>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Adenovirus</h4>
            <p className="text-amber-700 text-sm m-0">
              Geen duidelijk seizoenspatroon; het hele jaar door.
            </p>
          </div>
          
          <div className="p-5 bg-rose-50 rounded-xl border border-rose-200">
            <h4 className="font-bold text-rose-800 mb-2">Astrovirus</h4>
            <p className="text-rose-700 text-sm m-0">
              Seizoensgebonden: piek in de winter.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image09EpidemiologieSummary
