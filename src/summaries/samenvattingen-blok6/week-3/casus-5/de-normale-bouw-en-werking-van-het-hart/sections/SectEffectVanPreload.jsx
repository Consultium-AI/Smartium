import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Effect van preload`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Meer preload geeft een groter EDV. Daardoor wordt de lus breder en neemt het slagvolume toe.`}</Inline></p>
    </div>
  )
}
