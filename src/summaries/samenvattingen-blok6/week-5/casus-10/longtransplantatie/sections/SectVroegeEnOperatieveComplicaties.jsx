import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Vroege en operatieve complicaties`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`nabloeding`}</Inline></li>
        <li><Inline>{`problemen met de anastomose, dus de verbinding tussen luchtweg en donorlong`}</Inline></li>
      </ul>
    </div>
  )
}
