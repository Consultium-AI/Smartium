import { Calendar } from 'lucide-react'
import SummaryLayout from '../../components/SummaryLayout'

const Image07RVPFeedbackSummary = () => {
  const toc = [{ id: 'rvp', title: 'RVP en transmissie', icon: Calendar }]
  return (
    <SummaryLayout
      title="RVP-vaccinatieschema en transmissie"
      description="Het vaccinatieschema van het Rijksvaccinatieprogramma en transmissieroutes."
      caseLabel="Week 5 Casus 10 LME 4: Afbeelding 7"
      tableOfContents={toc}
      practiceLink="/oefenvragen?lme=casus10-lme4-waarom-hoge-vaccinatiegraad-wiskunde-vaccinatie-image07"
    >
      <section id="rvp" className="scroll-mt-24 mb-12">
        <h2 className="text-xl font-bold text-slate-900 mb-4">RVP-ziekten en transmissie</h2>
        <p className="text-slate-700 mb-4">Bijna alle RVP-ziekten worden direct overgedragen. HPV via seksueel contact; hepatitis B via seksueel contact of moeder-op-kind. Tetanus is de uitzondering: via dierbeten of vuil in wonden.</p>
        <p className="text-slate-700 text-sm">Deze e-module richt zich vooral op via fysiek contact en lucht overgedragen ziekten. HPV komt later kort aan bod.</p>
      </section>
    </SummaryLayout>
  )
}

export default Image07RVPFeedbackSummary
