import { Clock } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image13DuurBehandelingSummary = ({ standalone = true }) => {
  const toc = [{ id: 'duur', title: 'Duur van behandeling', icon: Clock }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Waarom infectiefocus zoeken – Duur van behandeling"
      description="Beïnvloeding van behandelduur door infectiefocus."
      caseLabel="Week 6 Casus 12 LME 2: Afbeelding 13"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus12-lme2-sepsis-image13"
    >
      <section id="duur" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Duur van behandeling</h2>
        <p className="text-slate-700 mb-4">De gevonden infectiefocus bepaalt mede hoe lang antibiotica gegeven worden:</p>
        <ul className="list-disc pl-6 space-y-2 text-slate-700">
          <li>Bij adequate focuscontrole (drainage, verwijdering katheter): vaak kortere kuur</li>
          <li>Bij persisterende focus of moeilijk bereikbare focus: langere kuur nodig</li>
          <li>Richtlijnen geven per focus aanbevolen behandelduur</li>
        </ul>
      </section>
    </SummaryLayout>
  )
}

export default Image13DuurBehandelingSummary
