import { ArrowRight } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image23FramVoorbeeldSummary = ({ standalone = true }) => {
  const toc = [{ id: 'voorbeeld', title: 'FRAM – Output als input', icon: ArrowRight }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="FRAM – Output als input"
      description="De output van een activiteit is de input van de volgende."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 23"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image23"
    >
      <section id="voorbeeld" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">FRAM – Verbindingen</h2>
        <p className="text-slate-700 mb-4">De output van een startactiviteit is de input van een opvolgende activiteit. Door verbindingen te maken worden onderlinge interacties en afhankelijkheden inzichtelijk.</p>
        <p className="text-slate-700 text-sm">Voorbeeld: Praktijkondersteuner neemt bloed af → buisjes met bloed (output) → Hb laten bepalen door extern lab (input) → streefwaarde opzoeken in NHG-richtlijn.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image23FramVoorbeeldSummary
