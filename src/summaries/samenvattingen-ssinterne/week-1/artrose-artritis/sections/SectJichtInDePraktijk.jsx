import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Jicht in de praktijk`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij jicht let je op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`zwelling van de weke delen`}</Inline></li>
        <li><Inline>{`calcificaties`}</Inline></li>
        <li><Inline>{`erosies`}</Inline></li>
        <li><Inline>{`typische lokalisatie in **MTP-1**`}</Inline></li>
      </ul>
    </div>
  )
}
