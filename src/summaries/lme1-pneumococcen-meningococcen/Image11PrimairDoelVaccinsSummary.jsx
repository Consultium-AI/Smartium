import { Syringe } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image11PrimairDoelVaccinsSummary = () => {
  const tableOfContents = [
    { id: 'doel', title: 'Primair doel vaccins', icon: Syringe },
  ]

  return (
    <SummaryLayout
      title="Primair doel van vaccins tegen gekapselde bacteriën"
      description="Het induceren van specifieke antilichamen gericht tegen polysachariden van het bacteriële kapsel."
      caseLabel="Week 5 Casus 7 LME 1: Afbeelding 11"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme1-pneumococcen-image11"
    >
      <section id="doel" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Syringe className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Primair doel vaccins
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-6 bg-indigo-50 rounded-xl border-l-4 border-indigo-400">
            <p className="text-indigo-800 font-medium text-lg m-0">
              Het primaire doel van vaccins tegen gekapselde bacteriën is het <strong>induceren van specifieke antilichamen gericht tegen polysachariden van het bacteriële kapsel</strong>.
            </p>
          </div>
          
          <p>
            Deze antilichamen markeren de bacteriën voor vernietiging door het immuunsysteem (opsonisatie) en spelen een cruciale rol in de bescherming tegen invasieve infecties.
          </p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image11PrimairDoelVaccinsSummary
