import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Echografie: beeldvorming met geluidsgolven`}</Inline></SubHeading>
      <PBody text={`Echografie gebruikt **hoogfrequente geluidsgolven**. De techniek is snel, veilig en veelzijdig.`} />
    </div>
  )
}
