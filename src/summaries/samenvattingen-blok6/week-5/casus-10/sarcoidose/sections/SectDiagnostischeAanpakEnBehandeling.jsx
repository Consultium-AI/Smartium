import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Diagnostische aanpak en behandeling`}</Inline></SubHeading>
      <PBody text={`Sarcoïdose wordt meestal gediagnosticeerd en behandeld door **longartsen, reumatologen en dermatologen**.`} />
    </div>
  )
}
