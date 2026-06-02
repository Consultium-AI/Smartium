import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Beeldvorming`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De primaire diagnostiek is een mammogram. Daarmee kun je de borstafwijking beoordelen en inschatten hoe verdacht deze is.`}</Inline></p>
    </div>
  )
}
