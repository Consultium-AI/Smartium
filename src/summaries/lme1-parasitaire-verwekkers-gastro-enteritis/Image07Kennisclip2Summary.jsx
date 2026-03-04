import { Video } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image07Kennisclip2Summary = () => {
  const tableOfContents = [
    { id: 'kennisclip', title: 'Kennisclip 2 – Gastro-intestinale wormen', icon: Video },
  ]

  return (
    <SummaryLayout
      title="Kennisclip 2 – Gastro-intestinale wormen (helminthen)"
      description="Introductie op de kennisclip over parasitaire wormen en hun klachten."
      caseLabel="Week 5 Casus 9 LME 1: Afbeelding 7"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme1-parasitaire-verwekkers-gastro-enteritis-image07"
    >
      <section id="kennisclip" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Video className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Kennisclip 2 – Gastro-intestinale wormen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <p>
            Darmparasieten kunnen op basis van hun structurele kenmerken in drie hoofdgroepen worden ingedeeld: <strong>protozoa</strong> (eencelligen), <strong>rondwormen</strong> en <strong>platwormen</strong>.
          </p>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">In deze kennisclip wordt uitgelegd:</h4>
            <ul className="list-disc pl-6 space-y-1 text-teal-700 text-sm">
              <li>Welke parasitaire wormen welke gastro-intestinale klachten veroorzaken</li>
              <li>Wat de meest voorkomende klachten zijn van deze parasitaire wormen</li>
              <li>Wat de geografische verspreiding is van deze parasitaire wormen</li>
            </ul>
            <p className="text-teal-700 text-sm mt-3 m-0">
              Daarna volgen meerdere vragen om de verkregen kennis toe te passen.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image07Kennisclip2Summary
