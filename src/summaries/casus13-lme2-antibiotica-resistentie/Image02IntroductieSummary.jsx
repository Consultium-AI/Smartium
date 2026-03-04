import { BookOpen } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image02IntroductieSummary = () => {
  const toc = [{ id: 'intro', title: 'Introductie en leerdoelen', icon: BookOpen }]
  return (
    <SummaryLayout
      title="Introductie – Antibioticaresistentie"
      description="Leerdoelen, doelgroep en inhoud van de module Antibioticaresistentie."
      caseLabel="Week 7 Casus 13 LME 2: Afbeelding 2"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme2-antibiotica-resistentie-image02"
    >
      <section id="intro" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <BookOpen className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Leerdoelen</h2>
        </div>
        <div className="text-slate-700 space-y-4 leading-relaxed">
          <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
            <h4 className="font-bold text-primary-800 mb-2">Na het doorlopen van deze module</h4>
            <p className="text-primary-700 text-sm">Kun je de vier verschillende resistentiemechanismen uitleggen en de kennis toepassen.</p>
          </div>
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Doelgroep</h4>
            <p className="text-teal-700 text-sm">Studenten geneeskunde in het eerste jaar van de bachelor.</p>
          </div>
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Inhoud</h4>
            <ul className="list-disc pl-6 space-y-1 text-amber-700 text-sm">
              <li>1. Het ontstaan van resistentie</li>
              <li>2. Resistentiemechanismen</li>
            </ul>
          </div>
          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-2">Voorkennis</h4>
            <p className="text-slate-700 text-sm m-0">Om deze e-module te maken moet je de e-module &apos;Antibiotica Introductie&apos; gemaakt hebben.</p>
          </div>
          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-2">Tijd</h4>
            <p className="text-slate-700 text-sm m-0">Het doornemen van deze module kost ongeveer 1 uur.</p>
          </div>
          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-2">Rooster</h4>
            <p className="text-slate-700 text-sm m-0">Deze module hoort bij bachelor 1, blok 4: Afweer en Aanpak van Infecties.</p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image02IntroductieSummary
