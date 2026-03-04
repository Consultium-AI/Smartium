import { Bug } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image09MicrobiotaOverzichtSummary = () => {
  const tableOfContents = [
    { id: 'microbiota', title: 'Microbiota en macrobiota', icon: Bug },
  ]

  return (
    <SummaryLayout
      title="Old friends en Biodiversiteit – Microbiota"
      description="Overzicht van de bacteriële, schimmel-, worm- en virale microbiota die met het menselijk lichaam geassocieerd zijn."
      caseLabel="Week 5 Casus 7 LME 4: Afbeelding 9"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme4-hygiene-hypothese-image09"
    >
      <section id="microbiota" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Bug className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Microbiota en macrobiota
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Het menselijk lichaam herbergt een enorme diversiteit aan micro-organismen. Deze zijn onder te verdelen in:
          </p>
          
          <div className="grid gap-3 sm:grid-cols-2">
            <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
              <h4 className="font-bold text-primary-800 mb-1">Bacteriële microbiota</h4>
              <p className="text-primary-700 text-sm m-0">10¹³–10¹⁴ organismen (Bacteriome)</p>
            </div>
            <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
              <h4 className="font-bold text-amber-800 mb-1">Schimmel-microbiota</h4>
              <p className="text-amber-700 text-sm m-0">10¹²–10¹³ organismen (Mycobiome)</p>
            </div>
            <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
              <h4 className="font-bold text-teal-800 mb-1">Helminthen</h4>
              <p className="text-teal-700 text-sm m-0">0–10⁴ organismen (Macrobiota)</p>
            </div>
            <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
              <h4 className="font-bold text-slate-800 mb-1">Virale microbiota</h4>
              <p className="text-slate-600 text-sm m-0">10¹⁴–10¹⁵ organismen (Viroom)</p>
            </div>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image09MicrobiotaOverzichtSummary
