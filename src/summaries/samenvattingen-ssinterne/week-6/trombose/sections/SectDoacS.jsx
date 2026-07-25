import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`DOAC’s`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`DOAC staat voor direct werkend oraal anticoagulans. Deze middelen remmen direct factor Xa of trombine. De belangrijkste middelen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`dabigatran;`}</Inline></li>
        <li><Inline>{`rivaroxaban;`}</Inline></li>
        <li><Inline>{`apixaban;`}</Inline></li>
        <li><Inline>{`edoxaban.`}</Inline></li>
      </ul>
    </div>
  )
}
