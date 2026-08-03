import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Longtransplantatie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij ernstige chronische HP met uitgebreide fibrose kan longtransplantatie uiteindelijk de laatste behandeloptie zijn.`}</Inline></p>
    </div>
  )
}
