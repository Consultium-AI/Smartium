import { User } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image05AutonomiePaternalismeSummary = () => {
  const toc = [{ id: 'autonomie', title: 'Autonomie en paternalisme', icon: User }]
  return (
    <SummaryLayout
      title="Autonomie en paternalisme"
      description="De spanning tussen respect voor autonomie en paternalistisch ingrijpen."
      caseLabel="Week 5 Casus 10 LME 3: Afbeelding 5"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image05"
    >
      <section id="autonomie" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Autonomie en paternalisme</h2>
        <p className="text-slate-700 mb-4"><strong>Autonomie</strong> betekent dat mensen zelf beslissingen mogen nemen. <strong>Paternalisme</strong> is ingrijpen in iemands vrijheid om hem te beschermen. Bij vaccinatie van kinderen spelen beide een rol.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image05AutonomiePaternalismeSummary
