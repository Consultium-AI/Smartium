import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Tabel 4. Hemofilie A in het kort`}</Inline></SubHeading>
      <DataTable rows={[["Onderdeel", "Kenmerk"], ["---", "---"], ["Oorzaak", "Factor VIII-deficiëntie"], ["Overerving", "X-gebonden recessief"], ["Lab", "Verlengde APTT"], ["Klachten", "Bloedingen, gewrichts- en spierbloedingen"], ["Behandeling", "FVIII, eventueel DDAVP"]]} />
    </div>
  )
}
