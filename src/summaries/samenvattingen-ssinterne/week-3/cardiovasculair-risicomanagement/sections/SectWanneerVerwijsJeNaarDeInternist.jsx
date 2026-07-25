import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wanneer verwijs je naar de internist?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Verwijzing naar de internist is onder andere aangewezen bij:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`therapieresistente hypertensie;`}</Inline></li>
        <li><Inline>{`verdenking op secundaire hypertensie;`}</Inline></li>
        <li><Inline>{`aanhoudende hypertensie na pre-eclampsie;`}</Inline></li>
        <li><Inline>{`verdenking op een hypertensief spoedgeval.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Jonge leeftijd op zichzelf is geen reden voor verwijzing.`}</Inline></p>
    </div>
  )
}
