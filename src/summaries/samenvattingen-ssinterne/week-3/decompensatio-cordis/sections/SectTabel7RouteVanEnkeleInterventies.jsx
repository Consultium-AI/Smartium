import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 7. Route van enkele interventies`}</Inline></SubHeading>
      <DataTable rows={[["Ingrepen", "Route"], ["Mitral clip", "vena femoralis → vena cava inferior → rechteratrium → linkeratrium → mitralisklep → linkerventrikel"], ["TAVI", "arteria femoralis → aorta abdominalis → aorta thoracalis → aortaboog → aortaklep → linkerventrikel"]]} />
    </div>
  )
}
