import { BookOpen } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image01IntroductieSummary = ({ standalone = true }) => {
  const toc = [{ id: 'intro', title: 'Introductie en leerdoelen', icon: BookOpen }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Introductie – Leefstijl en immuunsysteem"
      description="Leerdoelen en inhoud van de module over de wisselwerking tussen leefstijl en het immuunsysteem."
      caseLabel="Week 6 Casus 11 LME 1: Afbeelding 1"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus11-lme1-leefstijl-en-immuunsysteem-image01"
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
              <li>Uitleggen wat leefstijlfactoren zijn en voorbeelden geven</li>
              <li>Beschrijven hoe verschillende leefstijlfactoren het immuunsysteem beïnvloeden</li>
              <li>Uitleggen wat inflammaging, immunosenescence en trained immunity betekenen</li>
              <li>Onderbouwen wat, vanuit immunologisch perspectief, een gezonde leefstijl is</li>
            </ul>
          </div>
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Inhoud</h4>
            <p className="text-teal-700 text-sm mb-2">De module behandelt: exposoom, leefstijlfactoren en leefstijlziekten, inflammaging/immunosenescence/trained immunity, voeding en immuunsysteem, andere leefstijlfactoren, en afsluiting.</p>
          </div>
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Tijd</h4>
            <p className="text-amber-700 text-sm m-0">Het doornemen van deze module kost ongeveer 90 minuten.</p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image01IntroductieSummary
