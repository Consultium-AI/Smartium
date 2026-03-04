import { CircleDot } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image10HerkenningTineaCorporisBlaasjesSummary = ({ standalone = true }) => {
  const tableOfContents = [
    { id: 'blaasjes', title: 'Tinea corporis met blaasjes', icon: CircleDot },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title="Herkenning – Tinea corporis met forse immuunreactie"
      description="Tinea corporis kan gepaard gaan met blaasjes en bultjes door een forse immuunreactie."
      caseLabel="Week 5 Casus 7 LME 5: Afbeelding 10"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme5-schimmelinfecties-image10"
    >
      <section id="blaasjes" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <CircleDot className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Tinea corporis met blaasjes en bultjes
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Schimmelinfectie: juist</h4>
            <p className="text-primary-700 text-sm m-0">
              Dit is tinea corporis. In dit geval is er een forse immuunreactie die zorgt voor blaasjes en bultjes (vesikels en papels) langs de rand.
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Klinische variatie</h4>
            <p className="text-teal-700 text-sm m-0">
              Tinea corporis kan variëren van een klassieke annulaire plek tot een meer inflammatoire presentatie met vesikels en papels door een sterke immuunrespons.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image10HerkenningTineaCorporisBlaasjesSummary
