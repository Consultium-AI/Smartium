import { Microscope } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image04Eclip1Summary = () => {
  const tableOfContents = [
    { id: 'eclip', title: 'E-clip 1', icon: Microscope },
  ]

  return (
    <SummaryLayout
      title="E-clip 1 – Scabiës etiologie, pathogenese en transmissie"
      description="Video-onderwijs over de oorzaak, ontwikkeling en verspreiding van scabiës."
      caseLabel="Week 5 Casus 7 LME 2: Afbeelding 4"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme2-scabies-image04"
    >
      <section id="eclip" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Microscope className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            E-clip 1
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            In E-clip 1 wordt door een dermatoloog (Colette van Hees), AIOS dermatologie (Eva Huis in &apos;t Veld) en epidemioloog maatschappelijke gezondheidszorg &amp; GGD (Wilma Stolk) uitgebreid ingegaan op de <strong>etiologie, pathogenese en transmissie</strong> van scabiës.
          </p>
          
          <p className="text-slate-600 text-sm">
            De e-clip behandelt de medische en volksgezondheidsperspectieven op scabiës.
          </p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image04Eclip1Summary
