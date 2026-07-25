import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Klinisch beeld`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De klassieke trias bestaat uit:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`acute cognitieve veranderingen;`}</Inline></li>
        <li><Inline>{`oculaire afwijkingen;`}</Inline></li>
        <li><Inline>{`balansstoornissen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Belangrijk is dat deze volledige triade lang niet altijd aanwezig is. De mortaliteit is bovendien aanzienlijk.`}</Inline></p>
    </div>
  )
}
