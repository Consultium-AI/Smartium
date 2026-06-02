import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Tabel 3. Typische kenmerken van IgA-vasculitis`}</Inline></SubHeading>
      <DataTable rows={[["Kenmerk", "Uitleg"], ["---", "---"], ["Huid", "Palpabele purpura, vooral onderbenen"], ["Gewrichten", "Arthralgie of artritis, vaak knieën en enkels"], ["Buik", "Buikpijn, soms bloedingen"], ["Nieren", "Hematurie, proteïnurie, creatinine-stijging, hypertensie"], ["Histologie", "Kleine-vatenvasculitis met IgA-deposities"]]} />
    </div>
  )
}
