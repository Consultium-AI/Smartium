import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Tabel 2. Biologicals bij psoriasis`}</Inline></SubHeading>
      <DataTable rows={[["Doelwit", "Voorbeeld", "Effect"], ["---", "---", "---"], ["TNF-α", "adalimumab", "Remming van ontsteking"], ["IL-17", "secukinumab", "Gerichte remming bij psoriasis"], ["IL-23", "guselkumab", "Gerichte remming van ontsteking"]]} />
    </div>
  )
}
