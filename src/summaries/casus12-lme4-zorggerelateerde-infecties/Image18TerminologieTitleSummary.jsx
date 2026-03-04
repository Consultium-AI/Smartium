import { BookMarked } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image18TerminologieTitleSummary = () => {
  const toc = [{ id: 'terminologie', title: 'Terminologie', icon: BookMarked }]
  return (
    <SummaryLayout
      title="Terminologie"
      description="Inleiding op belangrijke termen bij zorggerelateerde infecties."
      caseLabel="Week 6 Casus 12 LME 4: Afbeelding 18"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme4-zorggerelateerde-infecties-image18"
    >
      <section id="terminologie" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Terminologie</h2>
        <p className="text-slate-700">In het kader van zorggerelateerde infecties worden veel verschillende termen gebruikt, zoals:</p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700 mt-4">
          <li>Endogene vs exogene bronnen</li>
          <li>Primaire vs secundaire infecties</li>
          <li>Community acquired vs hospital acquired</li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image18TerminologieTitleSummary
