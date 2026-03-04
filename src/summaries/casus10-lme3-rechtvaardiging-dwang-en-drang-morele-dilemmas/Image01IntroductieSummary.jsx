import { BookOpen } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image01IntroductieSummary = () => {
  const toc = [{ id: 'intro', title: 'Introductie en leerdoelen', icon: BookOpen }]
  return (
    <SummaryLayout
      title="Introductie – Rechtvaardiging dwang en drang"
      description="Leerdoelen en inhoud van de module over morele dilemma's bij vaccineren."
      caseLabel="Week 5 Casus 10 LME 3: Afbeelding 1"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image01"
    >
      <section id="intro" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Introductie en leerdoelen</h2>
        </div>
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Leerdoelen</h4>
            <p className="text-primary-700 mb-2">Na het doorlopen van deze module kun je:</p>
            <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
              <li>Dwang en drang bij vaccinatie ethisch analyseren en rechtvaardigen</li>
              <li>Morele dilemma's bij vaccineren herkennen en bespreken</li>
              <li>De spanning tussen autonomie en volksgezondheid verwoorden</li>
            </ul>
          </div>
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Doelgroep</h4>
            <p className="text-teal-700 text-sm m-0">Deze module richt zich op studenten in de bachelor Geneeskunde.</p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image01IntroductieSummary
