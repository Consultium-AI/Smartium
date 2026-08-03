import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Leerdoelen`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na deze e-module kun je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de ontwikkelingen in de markt van wearables en de klinische implicaties schetsen;`}</Inline></li>
        <li><Inline>{`kritisch de literatuur beoordelen, zowel claims van leveranciers als evaluatiestudies.`}</Inline></li>
      </ul>
    </div>
  )
}
