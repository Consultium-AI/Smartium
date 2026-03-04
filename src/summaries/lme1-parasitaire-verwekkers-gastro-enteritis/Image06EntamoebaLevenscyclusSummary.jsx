import { RefreshCw } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image06EntamoebaLevenscyclusSummary = () => {
  const tableOfContents = [
    { id: 'cyclus', title: 'Levenscyclus Entamoeba histolytica', icon: RefreshCw },
  ]

  return (
    <SummaryLayout
      title="Levenscyclus van Entamoeba histolytica"
      description="Ontwikkelingscyclus, transmissie en pathogenese van amoebendysenterie."
      caseLabel="Week 5 Casus 9 LME 1: Afbeelding 6"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme1-parasitaire-verwekkers-gastro-enteritis-image06"
    >
      <section id="cyclus" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <RefreshCw className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Levenscyclus Entamoeba histolytica
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Darmprotozoa hebben een ontwikkelingscyclus met meerdere levensstadia. Bij Entamoeba histolytica onderscheiden we:
          </p>
          
          <div className="grid md:grid-cols-3 gap-3">
            <div className="p-4 bg-teal-50 rounded-xl border border-teal-200">
              <h4 className="font-bold text-teal-800 text-sm mb-2">Trofozoiet</h4>
              <p className="text-teal-600 text-sm">Actieve vorm die de darmwand binnendringt en amoebendysenterie veroorzaakt</p>
            </div>
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
              <h4 className="font-bold text-amber-800 text-sm mb-2">Precyst en cyste</h4>
              <p className="text-amber-600 text-sm">Resistente vormen in het darmlumen, uitgescheiden via ontlasting</p>
            </div>
            <div className="p-4 bg-rose-50 rounded-xl border border-rose-200">
              <h4 className="font-bold text-rose-800 text-sm mb-2">Transmissie</h4>
              <p className="text-rose-600 text-sm">Feco-orale route via besmet voedsel en water</p>
            </div>
          </div>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2">Complicaties</h4>
            <p className="text-rose-700 text-sm m-0">
              Bij invasie kan een amoebenabsces ontstaan in de lever of longen. Zichtbaar bloed in de ontlasting is kenmerkend voor amoebendysenterie.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image06EntamoebaLevenscyclusSummary
