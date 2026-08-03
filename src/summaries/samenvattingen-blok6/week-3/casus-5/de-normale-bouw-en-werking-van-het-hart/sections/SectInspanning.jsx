import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Inspanning`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Tijdens inspanning stijgt de metabole vraag van de spieren sterk. Het cardiovasculaire systeem reageert met:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hogere hartfrequentie`}</Inline></li>
        <li><Inline>{`hoger slagvolume`}</Inline></li>
        <li><Inline>{`hogere cardiac output`}</Inline></li>
        <li><Inline>{`vasodilatatie in actieve spieren`}</Inline></li>
        <li><Inline>{`vasoconstrictie in minder actieve organen`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De systolische bloeddruk stijgt, terwijl de diastolische druk gelijk kan blijven of licht kan dalen.`}</Inline></p>
    </div>
  )
}
