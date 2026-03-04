import { Layers } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image08GramSummary = ({ standalone = true }) => {
  const toc = [{ id: 'gram', title: 'Gram-positief en gram-negatief', icon: Layers }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Gram-positieve en gram-negatieve bacteriën bij sepsis"
      description="Prevalentie en TLR-herkenning van bacteriële componenten."
      caseLabel="Week 6 Casus 12 LME 2: Afbeelding 8"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme2-sepsis-image08"
    >
      <section id="gram" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Gram-positief en gram-negatief</h2>
        <p className="text-slate-700 mb-4">Beide groepen zijn belangrijke oorzaken van sepsis en zitten in de empirische therapie. Literatuur varieert: sommige studies tonen meer gram-positieven, andere meer gram-negatieven. Nethmap 2023: gram-positieven dominant (veel Coagulase-negatieve stafylokokken, vaak contaminatie).</p>
        <h3 className="font-bold text-slate-800 mb-2">TLR-herkenning</h3>
        <ul className="list-disc pl-6 space-y-1 text-slate-700">
          <li>LPS (TLR4) – gram-negatief</li>
          <li>Peptidoglycaan, lipoproteïnen, lipoteichoïnezuur (TLR2)</li>
          <li>Flagellen (TLR5)</li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image08GramSummary
