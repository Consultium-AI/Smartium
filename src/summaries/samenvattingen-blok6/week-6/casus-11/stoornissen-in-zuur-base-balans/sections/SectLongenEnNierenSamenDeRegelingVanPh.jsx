import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Longen en nieren: samen de regeling van pH`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De longen en nieren werken samen om de zuur-base balans te bewaren.`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`De **longen** regelen vooral de hoeveelheid CO₂. Omdat CO₂ een vluchtig zuur is, kan het via de ademhaling worden verwijderd.`}</Inline></li>
        <li><Inline>{`De **nieren** regelen vooral de hoeveelheid bicarbonaat en de uitscheiding van niet-vluchtig zuur.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De normale waarden in arterieel bloed zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`pH: 7,35–7,45`}</Inline></li>
        <li><Inline>{`pCO₂: 35–45 mmHg`}</Inline></li>
        <li><Inline>{`bicarbonaat: 22–26 mM`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De setpoints die vaak worden gebruikt zijn ongeveer:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**24 mM HCO₃⁻**`}</Inline></li>
        <li><Inline>{`**40 mmHg pCO₂**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`De longen en nieren zijn dus geen losse systemen, maar twee gekoppelde regelkringen.`}</Inline></p>
    </div>
  )
}
