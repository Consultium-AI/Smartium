import { GitBranch } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image10OpenGeslotenCirculatieSummary = () => {
  const tableOfContents = [
    { id: 'circulatie', title: 'Open en gesloten circulatie', icon: GitBranch },
  ]

  return (
    <SummaryLayout
      title="Open en gesloten circulatie"
      description="In de milt bestaat een open en gesloten bloedcirculatie."
      caseLabel="Week 5 Casus 7 LME 6: Afbeelding 10"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme6-voorbereiding-vow-milt-image10"
    >
      <section id="circulatie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <GitBranch className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Open en gesloten circulatie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            In de milt bestaat een <strong>open</strong> en <strong>gesloten</strong> bloedcirculatie.
          </p>
          
          <div className="grid gap-4 md:grid-cols-2">
            <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
              <h4 className="font-bold text-teal-800 mb-2">Open circulatie</h4>
              <p className="text-teal-700 text-sm m-0">
                Bloed komt uit de penseelarteriolen terecht in het rode pulpa parenchym (miltstrengen), wordt daar gefilterd, en stroomt daarna terug de veneuze sinussen in. Het bloed verlaat dus de bloedvaten en komt in direct contact met het parenchym.
              </p>
            </div>
            <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
              <h4 className="font-bold text-primary-800 mb-2">Gesloten circulatie</h4>
              <p className="text-primary-700 text-sm m-0">
                Bloed blijft omgeven door endotheel en stroomt vanuit de penseelarteriole direct in de veneuze sinussen. Via deze route stroomt het bloed sneller door de milt dan via de open circulatie.
              </p>
            </div>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image10OpenGeslotenCirculatieSummary
