import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Oorzaken van overlijden`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Belangrijke oorzaken van overlijden na longtransplantatie zijn onder andere:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`CLAD`}</Inline></li>
        <li><Inline>{`sepsis`}</Inline></li>
        <li><Inline>{`PTLD`}</Inline></li>
        <li><Inline>{`peroperatieve complicaties`}</Inline></li>
        <li><Inline>{`vaatlijden`}</Inline></li>
        <li><Inline>{`medicatie-gerelateerde problemen`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`CLAD en sepsis zijn hierbij heel belangrijk voor de prognose.`}</Inline></p>
    </div>
  )
}
