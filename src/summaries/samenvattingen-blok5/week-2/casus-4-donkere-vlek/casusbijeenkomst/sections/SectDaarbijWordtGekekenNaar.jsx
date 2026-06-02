import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Daarbij wordt gekeken naar:`}</Inline></SubHeading>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`of het doelgebied voldoende dosis krijgt;`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`en of kritieke organen zo weinig mogelijk straling krijgen.`}</Inline></p>
    </div>
  )
}
