import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Doel van de B`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij de B beoordeel je:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**oxygenatie**: zuurstofvoorziening van de weefsels;`}</Inline></li>
        <li><Inline>{`**ventilatie**: luchtstroom door de longen.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Hypoxie is een van de grootste vitale bedreigingen. Daarom heeft zuurstoftoediening hoge prioriteit. Tachypnoe is vaak een vroeg teken van ziekte.`}</Inline></p>
    </div>
  )
}
