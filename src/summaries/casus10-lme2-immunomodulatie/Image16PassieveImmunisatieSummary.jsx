import { Shield } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image16PassieveImmunisatieSummary = () => {
  const toc = [{ id: 'passief', title: 'Passieve immunisatie', icon: Shield }]
  return (
    <SummaryLayout
      title="Passieve immunisatie"
      description="Immunoglobulinen voor directe bescherming."
      caseLabel="Week 5 Casus 10 LME 2: Afbeelding 16"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme2-immunomodulatie-image16"
    >
      <section id="passief" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Passieve immunisatie</h2>
        <p className="text-slate-700 mb-4">Bij patiënten met een verzwakt immuunsysteem of immuunstoornis worden antistoffen (immunoglobulinen) toegediend. Immunoglobuline bindt aan antigenen op micro-organismen en inactiveert ze. Het lichaam produceert deze antistoffen niet zelf; de bescherming is direct maar tijdelijk. Indicaties: te weinig antistoffen, geen antistoffen sinds geboorte, disfunctionerende immuuncellen, auto-immuunziekte.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image16PassieveImmunisatieSummary
