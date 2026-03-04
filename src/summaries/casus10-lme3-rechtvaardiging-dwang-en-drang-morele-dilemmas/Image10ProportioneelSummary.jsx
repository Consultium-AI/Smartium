import { Scale } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image10ProportioneelSummary = () => {
  const toc = [{ id: 'proportie', title: 'Proportioneel ingrijpen', icon: Scale }]
  return (
    <SummaryLayout
      title="Proportioneel ingrijpen"
      description="Het proportionaliteitsbeginsel bij vaccinatiebeleid."
      caseLabel="Week 5 Casus 10 LME 3: Afbeelding 10"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme3-rechtvaardiging-dwang-en-drang-morele-dilemmas-image10"
    >
      <section id="proportie" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Proportioneel ingrijpen</h2>
        <p className="text-slate-700 mb-4">Ingrijpen moet proportioneel zijn: de maatregel moet in verhouding staan tot het doel. Milde drang (voorlichting) is minder ingrijpend dan dwang (wettelijke plicht).</p>
      </section>
    </SummaryLayout>
  )
}

export default Image10ProportioneelSummary
