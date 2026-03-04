import { Syringe } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image13Eclip3Summary = () => {
  const tableOfContents = [
    { id: 'eclip', title: 'E-clip 3', icon: Syringe },
  ]

  return (
    <SummaryLayout
      title="E-clip 3 – Scabiës behandeling"
      description="Video-onderwijs over de behandeling van scabiës."
      caseLabel="Week 5 Casus 7 LME 2: Afbeelding 13"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme2-scabies-image13"
    >
      <section id="eclip" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-indigo-100 rounded-xl flex items-center justify-center">
            <Syringe className="w-5 h-5 text-indigo-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            E-clip 3
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            In E-clip 3 wordt door een dermatoloog, AIOS dermatologie en epidemioloog uitgebreid ingegaan op de <strong>behandeling</strong> van scabiës, inclusief de drie behandelpijlers, medicatiekeuze en bijzondere situaties (zwangerschap, zuigelingen).
          </p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image13Eclip3Summary
