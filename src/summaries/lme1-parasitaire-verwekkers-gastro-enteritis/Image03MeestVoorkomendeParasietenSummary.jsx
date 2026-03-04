import { Bug } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image03MeestVoorkomendeParasietenSummary = ({ standalone = true }) => {
  const tableOfContents = [
    { id: 'parasieten', title: 'Meest voorkomende darmparasieten', icon: Bug },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title="Meest voorkomende darmparasieten en klachten"
      description="Overzicht van de belangrijkste parasitaire verwekkers van gastro-enteritis en hun kenmerken."
      caseLabel="Week 5 Casus 9 LME 1: Afbeelding 3"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme1-parasitaire-verwekkers-gastro-enteritis-image03"
    >
      <section id="parasieten" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Bug className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Meest voorkomende darmparasieten
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            De meest voorkomende darmparasieten die gastro-intestinale klachten veroorzaken zijn onder andere <strong>Giardia lamblia</strong>, <strong>Cryptosporidium</strong>-soorten, <strong>Entamoeba histolytica</strong> en <strong>Ascaris lumbricoides</strong> (spoelworm).
          </p>
          
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
              <h4 className="font-bold text-teal-800 mb-2">Protozoa</h4>
              <p className="text-teal-700 text-sm">
                Eencellige parasieten zoals Giardia, Cryptosporidium en Entamoeba. Zichtbaar onder de microscoop in ontlasting.
              </p>
            </div>
            <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-2">Helminthen</h4>
              <p className="text-amber-700 text-sm">
                Meercellige wormen zoals Ascaris (rondwormen) en lintwormen (platwormen). Soms macroscopisch zichtbaar in ontlasting of bij endoscopie.
              </p>
            </div>
          </div>
          
          <div className="p-5 bg-rose-50 rounded-xl border-l-4 border-rose-400">
            <h4 className="font-bold text-rose-800 mb-2">Klinische relevantie</h4>
            <p className="text-rose-700 text-sm m-0">
              Elk type parasiet heeft karakteristieke klachten en een eigen geografische verspreiding. Anamnese (reizen, blootstelling) en ontlastingsonderzoek zijn essentieel voor de diagnose.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image03MeestVoorkomendeParasietenSummary
