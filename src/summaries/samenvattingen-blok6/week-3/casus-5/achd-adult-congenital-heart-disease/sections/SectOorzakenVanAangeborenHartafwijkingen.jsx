import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Oorzaken van aangeboren hartafwijkingen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De oorzaak is vaak niet duidelijk. Er kunnen wel verschillende factoren meespelen:`}</Inline></p>
      <DataTable rows={[["Factoren", "Voorbeelden"], ["Genetische factoren", "erfelijke of spontane genmutaties, chromosoomafwijkingen zoals trisomie 21"], ["Omgevingsfactoren", "maternale infecties zoals rubella, teratogene medicatie, alcohol- en druggebruik, straling"]]} />
    </div>
  )
}
