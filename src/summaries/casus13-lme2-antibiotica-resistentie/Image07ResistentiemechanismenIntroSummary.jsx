import { Video } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image07ResistentiemechanismenIntroSummary = ({ standalone = true }) => {
  const toc = [{ id: 'mechanismen', title: 'Resistentiemechanismen', icon: Video }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Resistentiemechanismen – Introductie"
      description="Overzicht van natuurlijke en verkregen resistentiemechanismen."
      caseLabel="Week 7 Casus 13 LME 2: Afbeelding 7"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme2-antibiotica-resistentie-image07"
    >
      <section id="mechanismen" className="scroll-mt-24 mb-12">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center">
            <Video className="w-5 h-5 text-primary-600" />
          </div>
          <h2 className="text-xl font-bold text-slate-900">Resistentiemechanismen</h2>
        </div>
        <p className="text-slate-700 leading-relaxed">
          Zoals gezegd zijn er verschillende resistentiemechanismen. Dit kunnen natuurlijke resistentiemechanismen zijn, maar ook verkregen resistentiemechanismen. In de video worden deze toegelicht (ca. 5 minuten).
        </p>
      </section>
    </SummaryLayout>
  )
}

export default Image07ResistentiemechanismenIntroSummary
