import { ShieldCheck } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image09PreventieveMaatregelenIntroSummary = () => {
  const toc = [{ id: 'preventie', title: 'Preventieve maatregelen', icon: ShieldCheck }]
  return (
    <SummaryLayout
      title="Preventieve maatregelen"
      description="Introductie op preventieve maatregelen tegen zorggerelateerde infecties."
      caseLabel="Week 6 Casus 12 LME 4: Afbeelding 9"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme4-zorggerelateerde-infecties-image09"
    >
      <section id="preventie" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Preventieve maatregelen</h2>
        <p className="text-slate-700 leading-relaxed">
          Preventie van infecties in het ziekenhuis is een onderdeel van goede patiëntenzorg. Persoonlijke beschermingsmiddelen zoals mondmaskers spelen een belangrijke rol bij het voorkomen van overdracht van micro-organismen.
        </p>
      </section>
    </SummaryLayout>
  )
}

export default Image09PreventieveMaatregelenIntroSummary
