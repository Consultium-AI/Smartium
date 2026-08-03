import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Effect van contractiliteit`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Meer contractiliteit betekent dat de ventrikel krachtiger samentrekt. Daardoor daalt het ESV, stijgt het slagvolume en stijgt de ejectiefractie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
