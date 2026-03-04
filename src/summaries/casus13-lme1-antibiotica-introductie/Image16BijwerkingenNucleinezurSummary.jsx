import { AlertTriangle } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image16BijwerkingenNucleinezurSummary = ({ standalone = true }) => {
  const toc = [{ id: 'bijwerkingen', title: 'Bijwerkingen nucleïnezuursyntheseremmers', icon: AlertTriangle }]
  return (
    <SummaryLayout
      standalone={standalone}
      title="Bijwerkingen nucleïnezuursyntheseremmers"
      description="Belangrijke bijwerkingen van ciprofloxacin, nitrofurantoïne en metronidazol."
      caseLabel="Week 7 Casus 13 LME 1: Afbeelding 16"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus13-lme1-antibiotica-introductie-image16"
    >
      <section id="bijwerkingen" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">Bijwerkingen en bijzonderheden</h2>
        <p className="text-slate-700 mb-4 leading-relaxed">
          Een antibioticum heeft vaak ook enkele, soms bijzondere, bijwerkingen. Het is belangrijk deze goed te kennen.
        </p>
        <div className="space-y-4">
          <div className="p-4 bg-red-50 rounded-lg border border-red-200">
            <h4 className="font-bold text-red-800 mb-1">Ciprofloxacin</h4>
            <p className="text-red-700 text-sm">Achillespeesruptuur – komt bij andere antibiotica niet voor</p>
          </div>
          <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
            <h4 className="font-bold text-amber-800 mb-1">Nitrofurantoïne</h4>
            <p className="text-amber-700 text-sm">Leverfalen – zeldzaam maar ernstige bijwerking</p>
          </div>
          <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
            <h4 className="font-bold text-orange-800 mb-1">Metronidazol</h4>
            <p className="text-orange-700 text-sm">Braken en rood gelaat bij combinatie met alcohol – gelijktijdig gebruik wordt afgeraden</p>
          </div>
        </div>
      </section>
    </SummaryLayout>
  )
}

export default Image16BijwerkingenNucleinezurSummary
