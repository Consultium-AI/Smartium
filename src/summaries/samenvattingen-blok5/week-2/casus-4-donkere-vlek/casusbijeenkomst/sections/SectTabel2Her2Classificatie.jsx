import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Tabel 2. HER2-classificatie`}</Inline></SubHeading>
      <DataTable rows={[["Uitslag", "Betekenis"], ["---", "---"], ["0", "HER2-negatief"], ["1+", "HER2-low"], ["2+", "Equivocal, dan volgt ISH"], ["3+", "HER2-positief"]]} />
    </div>
  )
}
