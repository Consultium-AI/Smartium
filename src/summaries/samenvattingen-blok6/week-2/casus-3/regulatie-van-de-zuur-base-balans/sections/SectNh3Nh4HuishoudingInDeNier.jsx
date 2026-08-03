import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`NH3/NH4+-huishouding in de nier`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`NH3 speelt een centrale rol bij de buffering van H+ in de urine. De vorming en het gebruik van NH3 zijn slim verdeeld over verschillende delen van het nefron.`}</Inline></p>
    </div>
  )
}
