import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Belangrijke organen die zo veel mogelijk gespaard moeten worden zijn:`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`het hart,`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`de long,`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`de contralaterale mamma.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`Het doel is om schade aan gezond weefsel te beperken.`}</Inline></p>
    </div>
  )
}
