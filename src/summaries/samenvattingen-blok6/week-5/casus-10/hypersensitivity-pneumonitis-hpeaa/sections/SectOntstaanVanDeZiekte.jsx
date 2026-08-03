import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Ontstaan van de ziekte`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`HP ontstaat door een samenspel van drie dingen:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`genetische aanleg;`}</Inline></li>
        <li><Inline>{`de intensiteit van de blootstelling;`}</Inline></li>
        <li><Inline>{`de duur van de blootstelling.`}</Inline></li>
      </ul>
    </div>
  )
}
