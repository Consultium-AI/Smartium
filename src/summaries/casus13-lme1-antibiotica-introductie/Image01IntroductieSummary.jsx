import { BookOpen } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image01IntroductieSummary = ({ standalone = true }) => {
  const toc = [{ id: 'intro', title: 'Introductie en leerdoelen', icon: BookOpen }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Introductie – Antibiotica"
      description="Leerdoelen en inhoud van de module Introductie Antibiotica."
      caseLabel="Week 7 Casus 13 LME 1: Afbeelding 1"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme1-antibiotica-introductie-image01"
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
            <p className="text-primary-700 text-sm mb-2">Als je deze module hebt doorgenomen:</p>
            <ul className="list-disc pl-6 space-y-1 text-primary-700 text-sm">
              <li>Kun je vier manieren noemen waarop de verschillende antibiotica aangrijpen op bacteriën</li>
              <li>Ken je van de 13 antibiotica uit de exemplarische geneesmiddelenlijst: indicatie, manier van toedienen, belangrijkste bijwerkingen, spectrum en opvallende bijzonderheden</li>
              <li>Ken je van 2 antibiotica de klasse en werkingsmechanisme</li>
            </ul>
          </div>
          <div className="p-5 bg-teal-50 rounded-xl border border-teal-200">
            <h4 className="font-bold text-teal-800 mb-2">Doelgroep</h4>
            <p className="text-teal-700 text-sm">Deze module richt zich op studenten Geneeskunde in het eerste jaar van de bachelor.</p>
          </div>
          <div className="p-5 bg-amber-50 rounded-xl border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-2">Inhoud</h4>
            <ul className="list-disc pl-6 space-y-1 text-amber-700 text-sm">
              <li>1. Achtergrond</li>
              <li>2. Basiskennis antibiotica</li>
            </ul>
          </div>
          <div className="p-5 bg-slate-50 rounded-xl border border-slate-200">
            <h4 className="font-bold text-slate-800 mb-2">Tijd</h4>
            <p className="text-slate-700 text-sm m-0">Het doornemen van deze e-module kost ongeveer 1,5 uur (inclusief naslagwerk en video&apos;s). De verdiepende video&apos;s zijn niet inbegrepen.</p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image01IntroductieSummary
