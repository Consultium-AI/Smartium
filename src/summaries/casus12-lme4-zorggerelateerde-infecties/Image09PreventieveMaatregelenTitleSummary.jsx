import { ShieldCheck } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image09PreventieveMaatregelenTitleSummary = () => {
  const toc = [{ id: 'preventie', title: 'Preventieve maatregelen', icon: ShieldCheck }]
  return (
    <SummaryLayout
      title="Preventieve maatregelen"
      description="Inleiding op preventieve maatregelen tegen zorggerelateerde infecties."
      caseLabel="Week 6 Casus 12 LME 4: Afbeelding 9"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme4-zorggerelateerde-infecties-image09"
    >
      <section id="preventie" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Preventieve maatregelen</h2>
        <p className="text-slate-700">Infectiepreventie in ziekenhuizen is onderdeel van goede patiëntenzorg. De volgende slides bespreken concrete maatregelen om zorggerelateerde infecties, waaronder postoperatieve wondinfecties, te voorkomen.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image09PreventieveMaatregelenTitleSummary
