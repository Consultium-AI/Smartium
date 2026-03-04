import { Video } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image04Kennisclip1Summary = () => {
  const tableOfContents = [
    { id: 'inleiding', title: 'Inleiding en classificatie', icon: Video },
    { id: 'kennisclip', title: 'Kennisclip 1', icon: Video },
  ]

  return (
    <SummaryLayout
      title="Kennisclip 1 – Parasitaire verwekkers van diarree"
      description="Classificatie van darmparasieten en introductie op de kennisclip over protozoa en helminthen."
      caseLabel="Week 5 Casus 9 LME 1: Afbeelding 4"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme1-parasitaire-verwekkers-gastro-enteritis-image04"
    >
      <section id="inleiding" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Video className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Inleiding en classificatie
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Darmparasieten kunnen diarree veroorzaken. Op basis van hun structurele kenmerken kunnen darmparasieten in drie hoofdgroepen worden ingedeeld:
          </p>
          
          <div className="grid md:grid-cols-3 gap-3">
            <div className="p-4 bg-teal-50 rounded-xl border border-teal-200">
              <h4 className="font-bold text-teal-800 text-sm mb-2">Protozoa</h4>
              <p className="text-teal-600 text-sm">Eencelligen</p>
            </div>
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200">
              <h4 className="font-bold text-amber-800 text-sm mb-2">Rondwormen</h4>
              <p className="text-amber-600 text-sm">Nematoden</p>
            </div>
            <div className="p-4 bg-rose-50 rounded-xl border border-rose-200">
              <h4 className="font-bold text-rose-800 text-sm mb-2">Platwormen</h4>
              <p className="text-rose-600 text-sm">Cestoden, trematoden</p>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-slate-200 my-10" />

      <section id="kennisclip" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-teal-100 rounded-xl flex items-center justify-center">
            <Video className="w-5 h-5 text-teal-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Kennisclip 1
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>In deze kennisclip wordt uitgelegd:</p>
          <ul className="list-disc pl-6 space-y-1 text-slate-600 text-sm">
            <li>Welke parasieten gastro-intestinale klachten veroorzaken</li>
            <li>Wat de meest voorkomende parasitaire protozoa zijn die diarree veroorzaken</li>
            <li>Wat de meest voorkomende klachten zijn die darmparasieten veroorzaken</li>
            <li>Wat de geografische verspreiding is van deze darmparasieten</li>
          </ul>
          <p className="text-slate-600 text-sm">
            Daarna volgen meerdere vragen om de verkregen kennis toe te passen.
          </p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image04Kennisclip1Summary
