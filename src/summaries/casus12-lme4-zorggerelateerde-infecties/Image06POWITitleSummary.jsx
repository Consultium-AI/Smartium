import { Shield } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image06POWITitleSummary = () => {
  const toc = [{ id: 'powi', title: 'Postoperatieve wondinfecties', icon: Shield }]
  return (
    <SummaryLayout
      title="Postoperatieve wondinfecties (POWI)"
      description="Inleiding op postoperatieve wondinfecties als type zorggerelateerde infectie."
      caseLabel="Week 6 Casus 12 LME 4: Afbeelding 6"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme4-zorggerelateerde-infecties-image06"
    >
      <section id="powi" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Postoperatieve wondinfecties</h2>
        <p className="text-slate-700">Postoperatieve wondinfecties (POWI) zijn een van de meest voorkomende zorggerelateerde infecties. Ze ontstaan na een operatieve ingreep en kunnen variëren in ernst. De volgende slides gaan dieper in op oorzaken, classificatie en preventie.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image06POWITitleSummary
