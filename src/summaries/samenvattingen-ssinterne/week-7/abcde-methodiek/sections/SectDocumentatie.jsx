import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Documentatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Alles wat relevant is, moet goed worden vastgelegd:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bevindingen`}</Inline></li>
        <li><Inline>{`conclusies`}</Inline></li>
        <li><Inline>{`behandeling`}</Inline></li>
        <li><Inline>{`consulten`}</Inline></li>
        <li><Inline>{`beleidsbeperkingen`}</Inline></li>
        <li><Inline>{`overdracht`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
