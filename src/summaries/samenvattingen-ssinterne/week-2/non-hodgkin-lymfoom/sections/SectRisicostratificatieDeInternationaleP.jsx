import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Risicostratificatie: de Internationale Prognostische Index`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Na stadiëring wordt ook de prognose ingeschat met de Internationale Prognostische Index, afgekort IPI. Hierbij spelen vijf ongunstige factoren een rol:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`leeftijd > 60 jaar;`}</Inline></li>
        <li><Inline>{`LDH > 1 keer normaal;`}</Inline></li>
        <li><Inline>{`performance status ≥ 2;`}</Inline></li>
        <li><Inline>{`stadium III of IV;`}</Inline></li>
        <li><Inline>{`meer dan 1 extranodale lokalisatie.`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Hoe meer van deze factoren aanwezig zijn, hoe ongunstiger de prognose.`}</Inline></p>
    </div>
  )
}
