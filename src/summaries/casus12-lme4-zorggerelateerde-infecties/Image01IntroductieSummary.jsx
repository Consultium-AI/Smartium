import { BookOpen } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image01IntroductieSummary = () => {
  const toc = [{ id: 'intro', title: 'Introductie en leerdoelen', icon: BookOpen }]
  return (
    <SummaryLayout
      title="Introductie – Zorggerelateerde infecties"
      description="Leerdoelen en inhoud van de module over zorggerelateerde infecties."
      caseLabel="Week 6 Casus 12 LME 4: Afbeelding 1"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme4-zorggerelateerde-infecties-image01"
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
            <p className="text-primary-700 text-sm mb-2">Als je deze module hebt doorgenomen ben je in staat:</p>
            <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
              <li>Te beredeneren welke onbedoelde schadelijke effecten kunnen optreden als gevolg van patiëntenzorg op individueel niveau</li>
            </ul>
          </div>
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Doelgroep</h4>
            <p className="text-teal-700 text-sm">Deze module richt zich op studenten in de bachelor Geneeskunde in het eerste jaar.</p>
          </div>
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Inhoud</h4>
            <ul className="list-disc pl-6 space-y-1 text-amber-700 text-sm">
              <li>Hoofdstuk 1: Wat zijn zorggerelateerde infecties?</li>
              <li>Hoofdstuk 2: Postoperatieve wondinfecties</li>
              <li>Hoofdstuk 3: Preventieve maatregelen</li>
              <li>Hoofdstuk 4: Urineweginfecties</li>
              <li>Hoofdstuk 5: De bron van de infectie</li>
              <li>Hoofdstuk 6: Terminologie</li>
            </ul>
          </div>
          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-2">Tijd</h4>
            <p className="text-slate-700 text-sm mb-1">Het doornemen van deze module kost ongeveer 25 minuten.</p>
            <p className="text-slate-700 text-sm m-0">Het bestuderen van de voorbereidende literatuur kost ongeveer 30 minuten.</p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image01IntroductieSummary
