import { Target } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image09InfectiefocusSummary = () => {
  const toc = [{ id: 'focus', title: 'Infectiefocus', icon: Target }]
  return (
    <SummaryLayout
      title="Infectiefocus"
      description="Meest voorkomende bronnen van sepsis en volgorde van prevalentie."
      caseLabel="Week 6 Casus 12 LME 2: Afbeelding 9"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme2-sepsis-image09"
    >
      <section id="focus" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Infectiefocus</h2>
        <p className="text-slate-700 mb-4">De infectie die sepsis veroorzaakt, ontstaat niet altijd primair in de bloedbaan. Vaker komt de infectie uit een ander orgaansysteem (een &apos;focus&apos;).</p>
        <h3 className="font-bold text-slate-800 mb-2">Volgorde van meest naar minst voorkomend</h3>
        <ol className="list-decimal pl-6 space-y-2 text-slate-700">
          <li>Long (~47%)</li>
          <li>Abdomen (~20%)</li>
          <li>Bloedbaan en overig (~15%)</li>
          <li>Urinewegen (~10%)</li>
          <li>Huid en weke delen (~8%)</li>
        </ol>
        <p className="text-slate-700 mt-4 text-sm">Bij het zoeken naar het infectiefocus: onderzoek in ieder geval longen, urinewegen en abdomen (appendicitis, cholangitis).</p>
      </section>
    </SummaryLayout>
  )
}

export default Image09InfectiefocusSummary
