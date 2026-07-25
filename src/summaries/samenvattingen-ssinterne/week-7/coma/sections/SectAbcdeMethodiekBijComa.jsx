import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`ABCDE-methodiek bij coma`}</Inline></SubHeading>
      <PBody text={`Bij een comateuze patiënt moet je eerst de patiënt stabiliseren. Dat doe je volgens de **ABCDE-methodiek**. Daarna pas ga je verder met uitgebreid onderzoek naar de oorzaak.`} />
    </div>
  )
}
