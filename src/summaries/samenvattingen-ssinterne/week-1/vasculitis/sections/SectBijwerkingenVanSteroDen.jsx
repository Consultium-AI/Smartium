import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Bijwerkingen van steroïden`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hoge doseringen steroïden geven risico op osteoporose en fracturen. Daarom krijgen patiënten die starten met hoge doseringen steroïden direct:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`een bisfosfonaat;`}</Inline></li>
        <li><Inline>{`calcium;`}</Inline></li>
        <li><Inline>{`vitamine D.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Bij frequente relapses of bijwerkingen van steroïden kan methotrexaat worden overwogen.`}</Inline></p>
    </div>
  )
}
