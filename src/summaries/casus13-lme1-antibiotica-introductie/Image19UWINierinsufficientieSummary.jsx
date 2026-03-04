import { AlertCircle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image19UWINierinsufficientieSummary = ({ standalone = true }) => {
  const toc = [{ id: 'nier', title: 'UWI bij nierinsufficiëntie', icon: AlertCircle }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="UWI bij nierinsufficiëntie"
      description="Nitrofurantoïne en trimethoprim bij verminderde nierfunctie."
      caseLabel="Week 7 Casus 13 LME 1: Afbeelding 19"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme1-antibiotica-introductie-image19"
    >
      <section id="nier" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">UWI bij nierinsufficiëntie/dialyse</h2>
        <p className="text-slate-700 leading-relaxed">
          Bij een vrouw met een urineweginfectie en ernstige nierinsufficiëntie die dialyse ondergaat, is het belangrijk antibiotica te kiezen die effectief en veilig zijn bij een verminderde nierfunctie. <strong>Nitrofurantoïne</strong> en <strong>trimethoprim</strong> worden afgeraden bij een verminderde nierfunctie.
        </p>
      </section>
    </SummaryLayout>
  )
}

export default Image19UWINierinsufficientieSummary
