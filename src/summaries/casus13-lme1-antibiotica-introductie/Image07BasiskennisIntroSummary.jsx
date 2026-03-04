import { BookMarked } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image07BasiskennisIntroSummary = ({ standalone = true }) => {
  const toc = [{ id: 'basiskennis', title: 'Basiskennis antibiotica', icon: BookMarked }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Basiskennis antibiotica"
      description="Wat je leert over belangrijke antibiotica in dit hoofdstuk."
      caseLabel="Week 7 Casus 13 LME 1: Afbeelding 7"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme1-antibiotica-introductie-image07"
    >
      <section id="basiskennis" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Basiskennis antibiotica</h2>
        <p className="text-slate-700 leading-relaxed">
          In dit hoofdstuk leer je van enkele belangrijke antibiotica de indicatie, de manier van toediening, de belangrijkste bijwerkingen, het spectrum en opvallende bijzonderheden.
        </p>
      </section>
    </SummaryLayout>
  )
}

export default Image07BasiskennisIntroSummary
