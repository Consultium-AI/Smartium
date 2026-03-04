import { Forward } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image18PriDefinitieSummary = () => {
  const toc = [{ id: 'pri', title: 'PRI – vooruitkijken', icon: Forward }]
  return (
    <SummaryLayout
      title="PRI – vooruitkijken"
      description="Prospectieve aanpak om herhaling te voorkomen."
      caseLabel="Week 6 Casus 12 LME 3: Afbeelding 18"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme3-patient-en-medicatieveiligheid-image18"
    >
      <section id="pri" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">PRI</h2>
        <p className="text-slate-700 mb-4">Bij een PRI kijk je <strong>vooruit</strong>: hoe zorg je ervoor dat een soortgelijke fout zich niet opnieuw voordoet?</p>
        <p className="text-slate-700 text-sm">In tegenstelling tot PRISMA (retrospectief) is PRI prospectief gericht op preventie van herhaling.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image18PriDefinitieSummary
