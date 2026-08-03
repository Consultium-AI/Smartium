import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Toepassingen van echografie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Echografie wordt gebruikt bij:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`abdominale beeldvorming;`}</Inline></li>
        <li><Inline>{`zwangerschapscontroles;`}</Inline></li>
        <li><Inline>{`cardiovasculair onderzoek;`}</Inline></li>
        <li><Inline>{`musculoskeletale beeldvorming;`}</Inline></li>
        <li><Inline>{`geleiding van biopsieën en puncties.`}</Inline></li>
      </ul>
    </div>
  )
}
