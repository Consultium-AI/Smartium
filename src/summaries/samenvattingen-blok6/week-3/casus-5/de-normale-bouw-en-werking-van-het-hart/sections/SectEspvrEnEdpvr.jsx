import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`ESPVR en EDPVR`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De PV-loop wordt begrensd door twee belangrijke relaties:`}</Inline></p>
    </div>
  )
}
