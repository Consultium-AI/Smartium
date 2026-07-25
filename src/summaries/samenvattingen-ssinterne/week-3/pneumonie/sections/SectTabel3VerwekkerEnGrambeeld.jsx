import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Tabel 3. Verwekker en Grambeeld`}</Inline></SubHeading>
      <DataTable rows={[["Verwekker", "Grambeeld"], ["S. aureus", "Gram-positieve coccen"], ["S. pneumoniae", "Gram-positieve coccen"], ["H. influenzae", "Gram-negatieve staaf"], ["Moraxella catarrhalis", "Gram-negatieve duplococ"]]} />
    </div>
  )
}
