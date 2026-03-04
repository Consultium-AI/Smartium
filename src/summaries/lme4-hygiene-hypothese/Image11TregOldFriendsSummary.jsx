import { Activity } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image11TregOldFriendsSummary = () => {
  const tableOfContents = [
    { id: 'treg', title: 'Treg-cellen', icon: Activity },
    { id: 'remming', title: 'Remming Th1, Th2, Th17', icon: Activity },
  ]

  return (
    <SummaryLayout
      title="Old friends – Rol van Treg-cellen"
      description="Regulatoire T-cellen: stimulatie door microbioom en helminthen, remming van Th1, Th2 en Th17."
      caseLabel="Week 5 Casus 7 LME 4: Afbeelding 11"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme4-hygiene-hypothese-image11"
    >
      <section id="treg" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Treg-cellen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Een gebalanceerd microbioom stimuleert, volgens de Old friends-hypothese, de ontwikkeling van verschillende typen T-helpercellen. Parasitaire wormen leven in de darm in evenwicht met de andere commensale micro-organismen. Dit microbioom stimuleert de ontwikkeling van <strong>Treg-cellen</strong> (regulatoire T-cellen).
          </p>
        </div>
      </section>

      <section id="remming" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-amber-100 rounded-xl flex items-center justify-center">
            <Activity className="w-5 h-5 text-amber-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Remmende werking
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Treg-cellen remmen enerzijds de werking van Th17 en Th1-cellen (die auto-immuniteit veroorzaken), anderzijds remmen ze ook Th2-cellen (belangrijke stimulatoren van allergie). Vooral door productie van <strong>IL-10</strong> en <strong>TGF-β</strong> remmen zij de activiteit van Th1- en Th2-cellen.
          </p>
          
          <div className="p-5 bg-slate-50 rounded-xl border-l-4 border-primary-400">
            <p className="text-slate-600 text-sm m-0">
              Th1-cellen zijn betrokken bij veel auto-immuunresponsen (IFN-γ, TNF). Th2-cellen zijn belangrijk bij de inductie van allergie door IL-4, IL-5 en IL-13 (stimuleren o.a. B-cellen en eosinofiele granulocyten).
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image11TregOldFriendsSummary
