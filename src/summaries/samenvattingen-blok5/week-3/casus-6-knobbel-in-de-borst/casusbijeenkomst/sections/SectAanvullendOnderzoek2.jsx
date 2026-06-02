import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Aanvullend onderzoek:`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`bij een ongecompliceerd beeld hebben **labonderzoek en kweken** meestal geen extra waarde`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`bij twijfel aan trombose kan de DVT-beslisregel en eventueel een echo worden gebruikt`}</Inline></p>
    </div>
  )
}
