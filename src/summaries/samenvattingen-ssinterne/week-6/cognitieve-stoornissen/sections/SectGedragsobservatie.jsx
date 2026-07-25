import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Gedragsobservatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Je let op:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`bewustzijn en aandacht;`}</Inline></li>
        <li><Inline>{`psychomotoriek;`}</Inline></li>
        <li><Inline>{`agitatie;`}</Inline></li>
        <li><Inline>{`hallucinatoir gedrag;`}</Inline></li>
        <li><Inline>{`head turning.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Daarna volgt een volledig lichamelijk onderzoek, zeker als de presentatie atypisch is. Bij cognitieve stoornissen moet je breed kijken.`}</Inline></p>
    </div>
  )
}
