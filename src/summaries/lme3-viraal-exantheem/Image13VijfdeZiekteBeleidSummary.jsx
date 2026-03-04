import { Pill, AlertTriangle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image13VijfdeZiekteBeleidSummary = () => {
  const tableOfContents = [
    { id: 'beleid', title: 'Beleid vijfde ziekte', icon: Pill },
    { id: 'zwanger', title: 'Zwangere vrouwen', icon: AlertTriangle },
  ]

  return (
    <SummaryLayout
      title="Vijfde ziekte – Beleid"
      description="Behandeling van erythema infectiosum en het belang van monitoring bij zwangere vrouwen."
      caseLabel="Week 5 Casus 7 LME 3: Afbeelding 13"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme3-viraal-exantheem-image13"
    >
      <section id="beleid" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Pill className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Beleid vijfde ziekte
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Er zijn geen specifieke behandelingen mogelijk en meestal ook niet nodig. Koortsremmende middelen zoals paracetamol kunnen worden gebruikt.
          </p>
        </div>
      </section>

      <section id="zwanger" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Zwangere vrouwen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <p className="text-amber-700 text-sm m-0">
              <strong>Zwangere vrouwen</strong> die blootgesteld worden aan parvovirus B19 moeten <strong>nauwlettend worden gevolgd</strong> vanwege het risico op het ontstaan van een ernstige anemie bij de foetus.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image13VijfdeZiekteBeleidSummary
