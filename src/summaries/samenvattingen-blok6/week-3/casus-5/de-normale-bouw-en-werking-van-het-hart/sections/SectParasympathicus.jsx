import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Parasympathicus`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Parasympathische stimulatie via M2-receptoren:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`verlaagt de hartfrequentie`}</Inline></li>
        <li><Inline>{`vertraagt de AV-geleiding`}</Inline></li>
        <li><Inline>{`verlengt de refractaire periode in de AV-knoop`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De parasympathicus werkt vooral remmend op de SA- en AV-knoop.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
