import { BookOpen } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image02InleidingSummary = ({ standalone = true }) => {
  const toc = [{ id: 'inleiding', title: 'Inleiding', icon: BookOpen }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Inleiding – Wiskunde van vaccinatie"
      description="Waarom een hoge vaccinatiegraad nodig is en hoe deze wordt bepaald."
      caseLabel="Week 5 Casus 10 LME 4: Afbeelding 2"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image02"
    >
      <section id="inleiding" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Inleiding</h2>
        <p className="text-slate-700 mb-4">Vaccinatie is een belangrijke strategie om infectieziekten te bestrijden. Een hoge vaccinatiegraad is nodig om deze ziekten uit te roeien. Deze module beantwoordt vragen als: waarom is een hoge vaccinatiegraad nodig, en hoe wordt zo'n vaccinatiegraad bepaald?</p>
        <div className="p-5 bg-primary-50 rounded-xl border border-primary-200">
          <h4 className="font-bold text-primary-800 mb-2">Formules voor het blokexamen</h4>
          <p className="text-primary-700 text-sm m-0">De module bevat wiskundige formules. Alle afleidingen zijn ter illustratie; alleen de drie eindformules zijn belangrijk voor het blokexamen. Het begrijpen van de afleidingen maakt het onthouden eenvoudiger.</p>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image02InleidingSummary
