import { HelpCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image03WatZijnZorggerelateerdeSummary = () => {
  const toc = [{ id: 'intro', title: 'Wat zijn zorggerelateerde infecties?', icon: HelpCircle }]
  return (
    <SummaryLayout
      title="Wat zijn zorggerelateerde infecties?"
      description="Introductie op het begrip zorggerelateerde infecties en de context waarin ze voorkomen."
      caseLabel="Week 6 Casus 12 LME 4: Afbeelding 3"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme4-zorggerelateerde-infecties-image03"
    >
      <section id="intro" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <HelpCircle className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Wat zijn zorggerelateerde infecties?</h2>
        </div>
        <p className="text-slate-700 leading-relaxed">
          Zorggerelateerde infecties zijn infecties die optreden in het kader van medische zorg. Ze kunnen ontstaan bij patiënten die in het ziekenhuis worden behandeld of opgenomen. Het begrip omvat een breed spectrum aan infecties die direct of indirect samenhangen met de zorg die de patiënt ontvangt.
        </p>
      </section>
    </SummaryLayout>
  )
}

export default Image03WatZijnZorggerelateerdeSummary
