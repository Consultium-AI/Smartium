import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Sympathicus`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Sympathische stimulatie via β1-receptoren:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`verhoogt de helling van de spontane depolarisatie in de SA-knoop`}</Inline></li>
        <li><Inline>{`verhoogt de hartfrequentie`}</Inline></li>
        <li><Inline>{`versnelt de AV-geleiding`}</Inline></li>
        <li><Inline>{`verhoogt de contractiliteit`}</Inline></li>
      </ul>
    </div>
  )
}
