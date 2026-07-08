import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Fenobarbital`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Fenobarbital kan de cognitieve ontwikkeling negatief beïnvloeden. Stoppen met fenobarbital kan leiden tot verbetering van het IQ.`}</Inline></p>
    </div>
  )
}
