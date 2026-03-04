import { HelpCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image03WatZijnZISummary = () => {
  const toc = [{ id: 'wat-zijn-zi', title: 'Wat zijn zorggerelateerde infecties?', icon: HelpCircle }]
  return (
    <SummaryLayout
      title="Wat zijn zorggerelateerde infecties?"
      description="Inleiding op het begrip zorggerelateerde infecties."
      caseLabel="Week 6 Casus 12 LME 4: Afbeelding 3"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme4-zorggerelateerde-infecties-image03"
    >
      <section id="wat-zijn-zi" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Wat zijn zorggerelateerde infecties?</h2>
        <p className="text-slate-700">Zorggerelateerde infecties zijn infecties die ontstaan tijdens of na het verlenen van zorg. Ze kunnen optreden in ziekenhuizen, verpleeghuizen en andere zorginstellingen. De module gaat dieper in op de definitie, impact en preventie van deze infecties.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image03WatZijnZISummary
