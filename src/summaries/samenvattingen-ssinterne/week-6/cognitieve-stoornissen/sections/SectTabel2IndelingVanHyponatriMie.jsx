import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 2. Indeling van hyponatriëmie`}</Inline></SubHeading>
      <DataTable rows={[["Stap", "Mogelijkheden"], ["Serum-osmolaliteit", "Isotoon, hypotoon, hypertoon"], ["Bij hypotone hyponatriëmie en urine-osmolaliteit < 100", "Primaire polydipsie, low solute intake, bierpotomanie"], ["Bij urine-natrium laag", "Past vaak bij lage zoutinname of volumedepletie"], ["Extracellulair volume", "Hypovolemie, euvolemie of hypervolemie"]]} />
    </div>
  )
}
