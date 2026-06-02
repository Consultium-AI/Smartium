import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Radiotherapie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Radiotherapie speelt een belangrijke rol, maar niet altijd op dezelfde manier.`}</Inline></p>
    </div>
  )
}
