import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Pathogenese van longfibrose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`ILD kan ontstaan door ontsteking, fibrose of een combinatie van beide. De oorzaak van ontsteking verschilt per ziekte, maar de onderliggende mechanismen lijken vaak op elkaar.`}</Inline></p>
    </div>
  )
}
