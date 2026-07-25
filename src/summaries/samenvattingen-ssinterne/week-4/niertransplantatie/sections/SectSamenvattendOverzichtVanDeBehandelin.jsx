import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Samenvattend overzicht van de behandelingen`}</Inline></SubHeading>
      <DataTable rows={[["Tabel 7. Kernverschillen tussen de nierfunctievervangende therapieën"], ["Niertransplantatie", "Beste nierfunctie en vaak beste levensverwachting; vereist donor, match en levenslange immuunsuppressie"], ["Hemodialyse", "Bloed wordt buiten het lichaam gezuiverd via een filter; vraagt shunt of katheter"], ["Continue hemofiltratie", "Voor instabiele patiënten; continu en vooral convectie"], ["Peritoneale dialyse", "Peritoneum als filter; geschikt voor thuisbehandeling en kan automatisch ’s nachts"]]} />
    </div>
  )
}
