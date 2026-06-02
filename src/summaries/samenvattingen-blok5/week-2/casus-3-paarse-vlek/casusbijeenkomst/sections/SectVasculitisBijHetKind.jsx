import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed">
        <Inline>{`De eerste casus past bij een vasculitis met huidafwijkingen, gewrichtsklachten, buikpijn en mogelijke nierbetrokkenheid. De combinatie van purpura op de benen en erytrocyten in de urine is hierbij belangrijk.`}</Inline>
      </p>
      <p className="leading-relaxed m-0">
        <Inline>{`Kenmerkend zijn:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`purpura op de onderbenen;`}</Inline></li>
        <li><Inline>{`gewrichtsklachten;`}</Inline></li>
        <li><Inline>{`buikpijn;`}</Inline></li>
        <li><Inline>{`soms koorts;`}</Inline></li>
        <li><Inline>{`mogelijke nierafwijkingen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed">
        <Inline>{`De behandeling en follow-up hangen af van de ernst en van orgaanbetrokkenheid. Omdat er urineafwijkingen zijn, is follow-up nodig en moet de nierfunctie gecontroleerd worden.`}</Inline>
      </p>
    </div>
  )
}
