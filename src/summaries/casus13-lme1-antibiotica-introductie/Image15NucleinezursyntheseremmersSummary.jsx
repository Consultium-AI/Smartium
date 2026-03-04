import { Dna } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image15NucleinezursyntheseremmersSummary = () => {
  const toc = [{ id: 'nucleinezur', title: 'Nucleïnezuursyntheseremmers', icon: Dna }]
  return (
    <SummaryLayout
      title="Nucleïnezuursyntheseremmers"
      description="Antibiotica die de bacteriële nucleïnezuursynthese remmen."
      caseLabel="Week 7 Casus 13 LME 1: Afbeelding 15"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme1-antibiotica-introductie-image15"
    >
      <section id="nucleinezur" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Nucleïnezuursyntheseremmers</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Antibiotica die de bacteriële nucleïnezuursynthese remmen. Bestudeer in het naslagwerk:
        </p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Chinolonen: ciprofloxacin</li>
          <li>Metronidazol</li>
          <li>Nitrofurantoïne</li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image15NucleinezursyntheseremmersSummary
