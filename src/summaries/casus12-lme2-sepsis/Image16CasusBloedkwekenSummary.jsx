import { FlaskConical } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image16CasusBloedkwekenSummary = () => {
  const toc = [{ id: 'bloedkweken', title: 'Casus – Bloedkweken vóór antibiotica', icon: FlaskConical }]
  return (
    <SummaryLayout
      title="Casus – Bloedkweken vóór antibiotica"
      description="Prioriteit: bloedkweken afnemen vóór start antibiotica."
      caseLabel="Week 6 Casus 12 LME 2: Afbeelding 16"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme2-sepsis-image16"
    >
      <section id="bloedkweken" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Casus – Bloedkweken</h2>
        <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 mb-4">
          <strong>Belangrijk:</strong> Bloedkweken moeten altijd vóór de start van antibiotica worden afgenomen. Start van antibiotica vóór bloedafname verlaagt de kweekopbrengst aanzienlijk en bemoeilijkt het identificeren van de verwekker en resistentiepatroon.
        </div>
        <p className="text-slate-700">Bij verdenking sepsis: eerst bloedkweken afnemen (bij voorkeur 2 sets uit verschillende venapuncties), daarna zo snel mogelijk empirische antibiotica starten.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image16CasusBloedkwekenSummary
