import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`De behandeling bestaat uit een combinatie van:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`chirurgie;`}</Inline></li>
        <li><Inline>{`systeemtherapie;`}</Inline></li>
        <li><Inline>{`radiotherapie.`}</Inline></li>
      </ul>
    </div>
  )
}
