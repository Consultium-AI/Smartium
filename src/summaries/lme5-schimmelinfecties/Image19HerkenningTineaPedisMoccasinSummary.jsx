import { Footprints } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image19HerkenningTineaPedisMoccasinSummary = ({ standalone = true }) => {
  const tableOfContents = [
    { id: 'moccasin', title: 'Tinea pedis moccasin patroon', icon: Footprints },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title="Herkenning – Tinea pedis moccasin patroon"
      description="Moccasin patroon: erythematosquameuze laesies op voetzolen en voetranden."
      caseLabel="Week 5 Casus 7 LME 5: Afbeelding 19"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme5-schimmelinfecties-image19"
    >
      <section id="moccasin" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Footprints className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Tinea pedis – moccasin patroon
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Schimmelinfectie: juist</h4>
            <p className="text-primary-700 text-sm mb-3">
              Dit is tinea pedis. Je ziet duidelijk aan de rand dat de roodheid duidelijker is en je ziet minimale schilfering.
            </p>
            <p className="text-primary-700 text-sm m-0">
              Op de voeten is een typische distributie het &quot;moccasin patroon&quot;, genoemd naar de moccasin schoenen, waarbij je erythematosquameuze (rode schilferende) laesies op de voetzolen en aan de voetranden ziet.
            </p>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Kernpunten</h4>
            <ul className="list-disc pl-6 space-y-1 text-teal-700 text-sm">
              <li>Roodheid duidelijker aan de rand</li>
              <li>Minimale schilfering</li>
              <li>Moccasin patroon: voetzolen + voetranden</li>
              <li>Erythematosquameus: rood en schilferend</li>
            </ul>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image19HerkenningTineaPedisMoccasinSummary
