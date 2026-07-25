import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Monitoring`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Belangrijke parameters zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hartfrequentie`}</Inline></li>
        <li><Inline>{`ECG-ritme`}</Inline></li>
        <li><Inline>{`bloeddruk`}</Inline></li>
        <li><Inline>{`urineproductie`}</Inline></li>
        <li><Inline>{`eventueel CVP en cardiac output`}</Inline></li>
      </ul>
      <PBody text={`De bloeddruk is een belangrijke parameter, maar een **late** maat voor shock. Daarom moet je altijd ook naar het klinisch beeld kijken.`} />
    </div>
  )
}
