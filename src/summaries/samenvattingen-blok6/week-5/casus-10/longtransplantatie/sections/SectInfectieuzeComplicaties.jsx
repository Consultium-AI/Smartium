import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Infectieuze complicaties`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bacteriële infecties`}</Inline></li>
        <li><Inline>{`virale infecties`}</Inline></li>
        <li><Inline>{`schimmelinfecties`}</Inline></li>
      </ul>
    </div>
  )
}
