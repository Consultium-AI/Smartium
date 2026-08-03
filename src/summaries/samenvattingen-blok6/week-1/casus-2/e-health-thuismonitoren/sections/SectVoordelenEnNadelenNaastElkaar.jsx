import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Voordelen en nadelen naast elkaar`}</Inline></SubHeading>
      <DataTable rows={[["Voordelen", "Nadelen"], ["Minder reizen voor de patiënt", "Geen lichamelijk onderzoek mogelijk"], ["Meer regie voor de patiënt", "Subtiele ziekteverschijnselen kunnen gemist worden"], ["Efficiënter voor arts en ziekenhuis", "Afhankelijk van betrouwbare ICT"], ["Minder onnodige consulten", "Kosten van ICT"]]} />
    </div>
  )
}
