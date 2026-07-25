import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Doel van de E`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij de E onderzoek je de patiënt van top tot teen en let je op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bijkomende verwondingen of afwijkingen;`}</Inline></li>
        <li><Inline>{`lichaamstemperatuur;`}</Inline></li>
        <li><Inline>{`voorkomen van hypothermie.`}</Inline></li>
      </ul>
    </div>
  )
}
