import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Relatie met voeding`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Ook de relatie met voeding helpt. Een hypoglycemie kort na eten past eerder bij:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`hereditaire fructose-intolerantie,`}</Inline></li>
        <li><Inline>{`galactosemie,`}</Inline></li>
        <li><Inline>{`hyperinsulinisme.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Een hypoglycemie na vasten wijst meer in de richting van een stoornis in de vastenstofwisseling.`}</Inline></p>
    </div>
  )
}
