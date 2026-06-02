import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`De conclusie is **milde hemofilie A**:`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`verlengde APTT`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`factor VIII-deficiëntie`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Hemofilie is X-gebonden recessief en komt daarom vooral bij mannen voor. Vrouwen zijn meestal draagster.`}</Inline></p>
    </div>
  )
}
