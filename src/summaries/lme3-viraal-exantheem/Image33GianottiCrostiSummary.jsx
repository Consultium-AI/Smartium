import { Activity } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image33GianottiCrostiSummary = () => {
  const tableOfContents = [
    { id: 'definitie', title: 'Gianotti-Crosti syndroom', icon: Activity },
    { id: 'kliniek', title: 'Klinische presentatie', icon: Activity },
  ]

  return (
    <SummaryLayout
      title="Gianotti-Crosti syndroom"
      description="Papulaire acrodermatitis: een self-limiting huidafwijking bij jonge kinderen."
      caseLabel="Week 5 Casus 7 LME 3: Afbeelding 33"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme3-viraal-exantheem-image33"
    >
      <section id="definitie" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Gianotti-Crosti syndroom (GCS)
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Het <strong>Gianotti-Crosti syndroom</strong> (GCS), ook wel <strong>papulaire acrodermatitis</strong> genoemd, is een self-limiting huidafwijking die veel voorkomt bij jonge kinderen.
          </p>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Triggers</h4>
            <p className="text-amber-700 text-sm m-0">
              Virale infecties en vaccinaties worden vaak gerapporteerd als triggers. Typisch is er een recente virale infectie aan voorafgegaan.
            </p>
          </div>
        </div>
      </section>

      <section id="kliniek" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Klinische presentatie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            De huiduitslag manifesteert zich typisch symmetrisch met roze en roodbruine papels. Typische aangedane gebieden zijn de wangen, billen en strekzijden van onderarmen en benen.
          </p>
          
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <p className="text-primary-700 text-sm m-0">
              De papels verdwijnen meestal spontaan binnen enkele weken, hoewel GCS soms langer kan aanhouden.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image33GianottiCrostiSummary
