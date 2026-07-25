import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Zuurstoftoediening`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Zuurstof kan op verschillende manieren worden toegediend. De keuze hangt af van de patiënt en van de klinische setting. De belangrijkste vormen zijn:`}</Inline></p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`neusbril;`}</Inline></li>
        <li><Inline>{`zuurstofmasker;`}</Inline></li>
        <li><Inline>{`Venturi-masker;`}</Inline></li>
        <li><Inline>{`non-rebreathing masker;`}</Inline></li>
        <li><Inline>{`high flow nasal cannula.`}</Inline></li>
      </ul>
    </div>
  )
}
