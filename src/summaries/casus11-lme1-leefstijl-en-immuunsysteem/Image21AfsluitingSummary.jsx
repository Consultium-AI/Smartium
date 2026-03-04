import { CheckCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image21AfsluitingSummary = () => {
  const toc = [{ id: 'afsluiting', title: 'Afsluiting en leefstijladviezen', icon: CheckCircle }]
  return (
    <SummaryLayout
      title="Afsluiting en reflectie"
      description="Leefstijladviezen vanuit immunologisch perspectief."
      caseLabel="Week 6 Casus 11 LME 1: Afbeelding 21"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus11-lme1-leefstijl-en-immuunsysteem-image21"
    >
      <section id="afsluiting" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Leefstijladviezen</h2>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li><strong>Voeding:</strong> beperk calorieën, koolhydraten, vlees en zout; eet voldoende groenten, fruit, noten, PUFA, vitamine A en D; borstvoeding waar mogelijk</li>
          <li><strong>Beweging:</strong> regelmatig bewegen</li>
          <li><strong>Stress en slaap:</strong> voldoende ontspanning en slaap</li>
          <li><strong>Stoppen met roken</strong></li>
          <li><strong>Matig alcoholgebruik</strong></li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image21AfsluitingSummary
