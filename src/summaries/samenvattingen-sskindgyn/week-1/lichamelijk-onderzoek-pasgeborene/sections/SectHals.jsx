import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Hals`}</Inline></SubHeading>
      <PBody text={`Bij de hals let je op asymmetrie en zwellingen. Een **asymmetrische halsstand** kan passen bij **torticollis** en kan wijzen op geboortetrauma of eenzijdige afwijkingen. Je beoordeelt daarbij ook de **sternocleidomastoideus**.`} />
      <p className="leading-relaxed"><Inline>{`Verder let je op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`lymfomen;`}</Inline></li>
        <li><Inline>{`hygroma colli;`}</Inline></li>
        <li><Inline>{`congenitaal struma;`}</Inline></li>
        <li><Inline>{`clavicula-fractuur.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De hals is dus niet alleen een plek om naar stand te kijken, maar ook om te zoeken naar zwellingen of letsels die bij de geboorte zijn ontstaan.`}</Inline></p>
    </div>
  )
}
