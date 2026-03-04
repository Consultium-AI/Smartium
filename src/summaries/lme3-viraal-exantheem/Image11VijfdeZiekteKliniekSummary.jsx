import { Activity } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image11VijfdeZiekteKliniekSummary = () => {
  const tableOfContents = [
    { id: 'etiologie', title: 'Erythema infectiosum (vijfde ziekte)', icon: Activity },
    { id: 'vroege', title: 'Vroege symptomen', icon: Activity },
    { id: 'rash', title: 'Gezichtsuitslag en latere rash', icon: Activity },
  ]

  return (
    <SummaryLayout
      title="Vijfde ziekte – Erythema infectiosum"
      description="Parvovirus B19, klinische presentatie en het kenmerkende 'slapped cheeks' beeld."
      caseLabel="Week 5 Casus 7 LME 3: Afbeelding 11"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme3-viraal-exantheem-image11"
    >
      <section id="etiologie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Erythema infectiosum (vijfde ziekte)
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Een andere veelvoorkomende kinderziekte is <strong>erythema infectiosum</strong>, in de volksmond <strong>vijfde ziekte</strong> genoemd, veroorzaakt door het <strong>parvovirus B19</strong>.
          </p>
        </div>
      </section>

      <section id="vroege" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Vroege symptomen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Vroege symptomen zijn vaak mild en kunnen omvatten:
          </p>
          
          <ul className="list-disc pl-6 space-y-1 text-slate-700">
            <li>Lage koorts</li>
            <li>Malaise</li>
            <li>Hoofdpijn</li>
            <li>Milde bovenste luchtwegklachten (bijv. keelpijn, loopneus)</li>
          </ul>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Gezichtsuitslag: 'slapped cheeks'</h4>
            <p className="text-primary-700 text-sm m-0">
              Het kenmerkende teken van erythema infectiosum is een helderrode uitslag op de wangen, vaak beschreven als <strong>"slapped cheeks"</strong> of <strong>appelwangen</strong>.
            </p>
          </div>
        </div>
      </section>

      <section id="rash" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Latere rash
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Na 1 tot 4 dagen kan een rode, kantachtige, netvormige uitslag verschijnen op de romp, armen en benen. Deze uitslag kan komen en gaan, vooral bij temperatuurveranderingen of blootstelling aan zonlicht. De uitslag duurt meestal 1 tot 3 weken, maar kan soms langer aanhouden.
          </p>
          
          <div className="p-5 bg-slate-50 rounded-xl border-l-4 border-amber-400">
            <p className="text-slate-600 text-sm m-0">
              Oudere kinderen en volwassenen kunnen <strong>gewrichtspijn en zwelling</strong> ervaren, vooral in de handen, polsen, knieën en enkels.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image11VijfdeZiekteKliniekSummary
