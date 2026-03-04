import { BookOpen } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image01IntroductieSummary = () => {
  const toc = [{ id: 'intro', title: 'Introductie en leerdoelen', icon: BookOpen }]
  return (
    <SummaryLayout
      title="Introductie – Sepsis"
      description="Leerdoelen en inhoud van de module over sepsis."
      caseLabel="Week 6 Casus 12 LME 2: Afbeelding 1"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme2-sepsis-image01"
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
              <li>Uitleggen wat sepsis is</li>
              <li>Voorbeelden geven van het ontstaan van sepsis, met nadruk op de infectiebron</li>
              <li>Sepsis herkennen in een casus</li>
              <li>Scores toepassen op een casus om de ernst te voorspellen</li>
              <li>Onderbouwen wat het nut heeft van scores in sepsis</li>
              <li>De belangrijkste elementen in de behandeling van sepsis noemen</li>
            </ul>
          </div>
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Inhoud</h4>
            <p className="text-teal-700 text-sm mb-2">De maatschappelijke impact van sepsis; sepsis en septische shock: definities; pathogenese; infectiefocus; screening tools; sepsis in de praktijk: analyse, diagnostiek en behandeling.</p>
          </div>
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Tijd</h4>
            <p className="text-amber-700 text-sm m-0">Het doornemen van deze module kost ongeveer één uur.</p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image01IntroductieSummary
