import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`CT-scan: dwarsdoorsneden met röntgenstraling`}</Inline></SubHeading>
      <PBody text={`CT staat voor **Computed Tomography**. Deze techniek gebruikt ook röntgenstraling, maar maakt veel gedetailleerdere beelden dan een gewone röntgenfoto.`} />
    </div>
  )
}
