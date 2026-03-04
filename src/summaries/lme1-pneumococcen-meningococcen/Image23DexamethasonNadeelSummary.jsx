import { Syringe } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image23DexamethasonNadeelSummary = () => {
  const tableOfContents = [
    { id: 'nadeel', title: 'Potentieel nadeel dexamethason', icon: Syringe },
    { id: 'afweging', title: 'Afweging', icon: Syringe },
  ]

  return (
    <SummaryLayout
      title="Dexamethason – Potentieel nadeel"
      description="Remming van het aangeboren immuunsysteem en de afweging bij meningitis en septische shock."
      caseLabel="Week 5 Casus 7 LME 1: Afbeelding 23"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme1-pneumococcen-image23"
    >
      <section id="nadeel" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Syringe className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Potentieel nadeel dexamethason
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <p className="text-amber-800 m-0">
              <strong>Remming van het aangeboren immuunsysteem</strong> – zoals macrofagen en neutrofielen. Corticosteroïden onderdrukken de immuunrespons, wat theoretisch de bacteriële clearing kan vertragen.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      <section id="afweging" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Syringe className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Afweging
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Bij patiënten met meningitis en septische shock weegt het potentiële voordeel van dexamethason (verminderde inflammatie, minder neurologische schade, lagere mortaliteit) op tegen het potentiële nadeel. De eerste dosis dient bij voorkeur vóór of gelijktijdig met de eerste dosis antibiotica te worden gegeven.
          </p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image23DexamethasonNadeelSummary
