import { XCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image13GeslotenCirculatieSummary = ({ standalone = true }) => {
  const tableOfContents = [
    { id: 'gesloten', title: 'Gesloten circulatie', icon: XCircle },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title="Gesloten circulatie"
      description="Bij gesloten circulatie komt het bloed NIET in het rode pulpa parenchym terecht."
      caseLabel="Week 5 Casus 7 LME 6: Afbeelding 13"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme6-voorbereiding-vow-milt-image13"
    >
      <section id="gesloten" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <XCircle className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Gesloten circulatie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Kenmerk</h4>
            <p className="text-primary-700 text-sm m-0">
              Bij de gesloten bloedcirculatie blijft het bloed omgeven door endotheel, en stroomt vanuit de penseelarteriole direct in de veneuze sinussen. Via deze route stroomt het bloed sneller door de milt dan via de open circulatie.
            </p>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Belangrijk verschil</h4>
            <p className="text-amber-700 text-sm m-0">
              Bij de gesloten circulatie komt het bloed <strong>niet</strong> terecht in het rode pulpa parenchym. Het bloed blijft binnen de endotheelbeklede vaten.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image13GeslotenCirculatieSummary
