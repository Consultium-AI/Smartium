import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Oorzaken van hartfalen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Voor een goede behandeling is het niet genoeg om alleen te zeggen dat iemand hartfalen heeft. Je moet ook weten waardoor het hartfalen ontstaat. De onderliggende oorzaak bepaalt namelijk mede de behandeling.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De meest voorkomende oorzaken zijn coronair lijden en hypertensie, maar er zijn veel meer mogelijke oorzaken.`}</Inline></p>
    </div>
  )
}
