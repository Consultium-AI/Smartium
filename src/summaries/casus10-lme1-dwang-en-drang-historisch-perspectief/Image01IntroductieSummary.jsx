import { BookOpen } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image01IntroductieSummary = ({ standalone = true }) => {
  const tableOfContents = [
    { id: 'intro', title: 'Introductie en leerdoelen', icon: BookOpen },
  ]

  return (
    <SummaryLayout
      standalone={standalone}
      title="Introductie – Dwang en drang in historisch perspectief"
      description="Leerdoelen, doelgroep en inhoud van de module over vaccinatiebeleid en spanningen tussen individuele vrijheid en collectieve gezondheid."
      caseLabel="Week 5 Casus 10 LME 1: Afbeelding 1"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=casus10-lme1-dwang-en-drang-historisch-perspectief-image01"
    >
      <section id="intro" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">
            Introductie en leerdoelen
          </h2>
        </div>
        
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Leerdoelen</h4>
            <p className="text-primary-700 mb-2">Na het doorlopen van deze module kun je:</p>
            <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
              <li>De historische context van vaccinatiebeleid in Nederland beschrijven, inclusief spanningen tussen individuele vrijheid en collectieve gezondheid</li>
              <li>Ethische dilemma's herkennen bij het bevorderen van vaccinatie in religieuze en culturele gemeenschappen, en strategieën formuleren</li>
              <li>Effectieve communicatiestrategieën bedenken om vertrouwen op te bouwen bij patienten of groepen met bezwaren tegen vaccinatie</li>
            </ul>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Doelgroep</h4>
            <p className="text-teal-700 text-sm m-0">
              Deze module richt zich op studenten in de bachelor Geneeskunde.
            </p>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Tijd</h4>
            <p className="text-amber-700 text-sm m-0">
              Het doornemen van deze module kost ongeveer 1 uur.
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image01IntroductieSummary
