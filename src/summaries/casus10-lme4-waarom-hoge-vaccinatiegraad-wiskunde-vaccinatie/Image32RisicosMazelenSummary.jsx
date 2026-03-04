import { AlertTriangle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image32RisicosMazelenSummary = ({ standalone = true }) => {
  const toc = [{ id: 'risicos', title: 'Risico\'s van een te lage vaccinatiegraad', icon: AlertTriangle }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Risico's van een te lage vaccinatiegraad"
      description="H7 – Introductie: mazelen als voorbeeld."
      caseLabel="Week 5 Casus 10 LME 4: Afbeelding 32"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image32"
    >
      <section id="risicos" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Risico's</h2>
        <p className="text-slate-700 mb-4">Bij een te lage vaccinatiegraad kunnen vaccineerbare ziekten zoals mazelen terugkomen en uitbraken veroorzaken. Mazelen is zeer besmettelijk en kan ernstige complicaties geven.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image32RisicosMazelenSummary
