import { DollarSign } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image12KostenSummary = () => {
  const toc = [{ id: 'kosten', title: 'Kosten', icon: DollarSign }]
  return (
    <SummaryLayout
      title="Kosten"
      description="Kostenoverwegingen bij antibioticakeuze."
      caseLabel="Week 5 Casus 9 LME 3: Afbeelding 12"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=lme3-welk-antibioticum-kies-ik-image12"
    >
      <section id="kosten" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Kosten</h2>
        <p className="text-slate-700">Houd rekening met kosten. Voorbeeld C. difficile: vancomycine oraal is ongeveer de helft goedkoper dan fidaxomicine.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image12KostenSummary
