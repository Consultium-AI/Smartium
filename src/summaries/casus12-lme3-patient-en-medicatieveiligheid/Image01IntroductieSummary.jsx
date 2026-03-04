import { BookOpen } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image01IntroductieSummary = ({ standalone = true }) => {
  const toc = [{ id: 'intro', title: 'Introductie en leerdoelen', icon: BookOpen }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Introductie – Medicatieveiligheid"
      description="Leerdoelen en inhoud van de module over patient- en medicatieveiligheid."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 1"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image01"
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
            <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
              <li>De belangrijkste verschillen tussen Safety I en Safety II beschrijven</li>
              <li>6 stappen van het medicatieproces benoemen en bij elke stap een voorbeeld van een mogelijke fout noemen</li>
              <li>Verschillende onderzoeksvormen met betrekking tot medicatieveiligheid noemen</li>
              <li>Proces- en systeemdenken in eigen woorden uitleggen</li>
              <li>Systeem- en procesdenken toepassen op medicatie- en patiëntveiligheidscasuïstiek</li>
              <li>Uitleggen wat de Functional Resonance Analysis Method (FRAM) is</li>
              <li>FRAM toepassen in de (beroeps)praktijk</li>
            </ul>
          </div>
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Inhoud</h4>
            <p className="text-teal-700 text-sm mb-2">Safety I en Safety II; stappen medicatieproces; medicatiefouten identificeren, melden, analyseren en evalueren; onderzoeksmethoden; second victim; systeem- en procesdenken.</p>
          </div>
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Tijd</h4>
            <p className="text-amber-700 text-sm m-0">Het doornemen van deze module kost ongeveer 1 uur (exclusief optionele video).</p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image01IntroductieSummary
