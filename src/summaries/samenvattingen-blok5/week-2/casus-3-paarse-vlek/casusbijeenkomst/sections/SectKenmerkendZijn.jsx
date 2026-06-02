import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Kenmerkend zijn:`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`purpura op de onderbenen;`}</Inline></li>
        <li><Inline>{`gewrichtsklachten;`}</Inline></li>
        <li><Inline>{`buikpijn;`}</Inline></li>
        <li><Inline>{`soms koorts;`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`mogelijke nierafwijkingen.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De behandeling en follow-up hangen af van de ernst en van orgaanbetrokkenheid. Omdat er urineafwijkingen zijn, is follow-up nodig en moet de nierfunctie gecontroleerd worden.`}</Inline></p>
    </div>
  )
}
