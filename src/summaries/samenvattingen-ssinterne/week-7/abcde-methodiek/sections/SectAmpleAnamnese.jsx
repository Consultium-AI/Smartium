import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`AMPLE-anamnese`}</Inline></SubHeading>
      <PBody text={`Na stabilisatie volgt de anamnese. Een snelle manier is **AMPLE**:`} />
      <DataTable rows={[["Letter", "Betekenis"], ["A", "Allergies"], ["M", "Medication and intoxications"], ["P", "Previous diseases / illnesses / pregnancy"], ["L", "Last meal"], ["E", "Event"]]} />
      <p className="leading-relaxed"><Inline>{`Als de patiënt zelf niet kan antwoorden, vraag je het aan familie of omstanders.`}</Inline></p>
    </div>
  )
}
