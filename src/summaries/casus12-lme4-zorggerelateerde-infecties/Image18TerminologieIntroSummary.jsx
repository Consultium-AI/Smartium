import { BookMarked } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image18TerminologieIntroSummary = ({ standalone = true }) => {
  const toc = [{ id: 'terminologie', title: 'Terminologie', icon: BookMarked }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Terminologie"
      description="Introductie op de terminologie bij zorggerelateerde infecties."
      caseLabel="Week 6 Casus 12 LME 4: Afbeelding 18"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme4-zorggerelateerde-infecties-image18"
    >
      <section id="terminologie" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Terminologie</h2>
        <p className="text-slate-700 leading-relaxed">
          In het kader van zorggerelateerde infecties worden veel verschillende termen gebruikt, zoals endogene vs. exogene bronnen, primaire vs. secundaire infecties, of community acquired vs. hospital acquired. Het correct begrijpen van deze termen is essentieel voor de juiste diagnostiek en behandeling.
        </p>
      </section>
    </SummaryLayout>
  )
}

export default Image18TerminologieIntroSummary
