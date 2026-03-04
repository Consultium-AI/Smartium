import { BookOpen } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image01IntroductieSummary = () => {
  const tableOfContents = [
    { id: 'intro', title: 'Introductie en leerdoelen', icon: BookOpen },
  ]

  return (
    <SummaryLayout
      title="Introductie – Viraal exantheem kind"
      description="Leerdoelen, doelgroep en inhoud van de module over virale exantheemziekten bij kinderen."
      caseLabel="Week 5 Casus 7 LME 3: Afbeelding 1"
      tableOfContents={tableOfContents}
      practiceLink="/oefenvragen?lme=lme3-viraal-exantheem-image01"
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
            <p className="text-primary-700 mb-2">Als je deze module hebt doorgenomen ben je in staat om:</p>
            <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
              <li>De meest voorkomende oorzaken van huiduitslag bij kinderen te benoemen</li>
              <li>De belangrijkste differentiaaldiagnose van rash bij kinderen te kennen</li>
            </ul>
          </div>
          
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Doelgroep</h4>
            <p className="text-teal-700 text-sm m-0">
              Deze module richt zich op studenten in de bachelor Geneeskunde.
            </p>
          </div>
          
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Inhoud</h4>
            <ul className="list-disc pl-6 space-y-1 text-amber-700 text-sm">
              <li>Introductie exantheem: wat is een rash?</li>
              <li>Infectieuze exantheemziekten op de kinderleeftijd</li>
              <li>Overige oorzaken van rash bij kinderen</li>
            </ul>
          </div>
          
          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-2">Tijd</h4>
            <p className="text-slate-600 text-sm m-0">
              Het doornemen van deze module kost ongeveer 2 uur (inclusief de benodigde literatuur).
            </p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image01IntroductieSummary
