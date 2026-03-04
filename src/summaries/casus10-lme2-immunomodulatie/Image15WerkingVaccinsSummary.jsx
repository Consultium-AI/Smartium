import { Syringe } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image15WerkingVaccinsSummary = () => {
  const toc = [{ id: 'vaccins', title: 'Werking van vaccins', icon: Syringe }]
  return (
    <SummaryLayout
      title="Werking van vaccins"
      description="Van vaccininjectie tot immunologisch geheugen."
      caseLabel="Week 5 Casus 10 LME 2: Afbeelding 15"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme2-immunomodulatie-image15"
    >
      <section id="vaccins" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Werking van vaccins</h2>
        <p className="text-slate-700 mb-4">Een vaccin stimuleert het aangeboren en adaptieve immuunsysteem. Antigenen worden opgenomen door dendritische cellen en macrofagen, die migreren naar lymfeklieren. Daar presenteren ze verwerkt antigeen aan T-cellen en intact antigeen aan B-cellen. Dit leidt tot klonale expansie en immunologisch geheugen (CTL, plasmacellen, memory cellen).</p>
      </section>
    </SummaryLayout>
  )
}

export default Image15WerkingVaccinsSummary
