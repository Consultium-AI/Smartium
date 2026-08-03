import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na het bestuderen van deze stof kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`het concept van sarcoïdose als een multi-orgaanziekte uitleggen`}</Inline></li>
        <li><Inline>{`de epidemiologie en demografie van sarcoïdose beschrijven`}</Inline></li>
        <li><Inline>{`het concept van granulomateuze ontsteking uitleggen`}</Inline></li>
        <li><Inline>{`de verschillende klinische uitingsvormen van sarcoïdose beschrijven`}</Inline></li>
      </ul>
    </div>
  )
}
