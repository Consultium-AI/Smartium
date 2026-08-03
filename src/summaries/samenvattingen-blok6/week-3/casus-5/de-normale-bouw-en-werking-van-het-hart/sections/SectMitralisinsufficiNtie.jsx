import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Mitralisinsufficiëntie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`De mitralisklep sluit niet goed, waardoor bloed tijdens systole teruglekt naar het linkeratrium. Daardoor is er volumeoverbelasting en een inefficiënte ejectie.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`---`}</Inline></p>
    </div>
  )
}
