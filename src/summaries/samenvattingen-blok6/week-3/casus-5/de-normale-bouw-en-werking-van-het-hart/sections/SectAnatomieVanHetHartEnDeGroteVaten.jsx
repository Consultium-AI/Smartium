import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Anatomie van het hart en de grote vaten`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Het hart bestaat uit vier ruimtes:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`rechterboezem`}</Inline></li>
        <li><Inline>{`rechterkamer`}</Inline></li>
        <li><Inline>{`linkerboezem`}</Inline></li>
        <li><Inline>{`linkerkamer`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De boezems ontvangen bloed. De kamers pompen bloed weg. De linkerkamer heeft een dikkere wand dan de rechterkamer, omdat hij bloed tegen een veel hogere druk de grote bloedsomloop in moet pompen.`}</Inline></p>
    </div>
  )
}
