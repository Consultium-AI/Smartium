import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`Er zijn twee hoofdopties:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**mammasparende chirurgie**`}</Inline></li>
        <li><Inline>{`**ablatieve chirurgie**`}</Inline></li>
      </ul>
      <p className="leading-relaxed"><Inline>{`Uit studies blijkt geen verschil in uitkomsten tussen mammasparend en niet-mammasparend, maar de keuze hangt wel af van de operabiliteit, de resectabiliteit van de tumor en de situatie van de patiënt.`}</Inline></p>
    </div>
  )
}
