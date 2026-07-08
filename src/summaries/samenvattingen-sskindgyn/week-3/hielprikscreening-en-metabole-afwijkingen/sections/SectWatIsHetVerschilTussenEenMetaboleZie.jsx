import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Wat is het verschil tussen een metabole ziekte en een voedselallergie?`}</Inline></SubHeading>
      <PBody text={`Een metabole ziekte is een **erfelijke aangeboren ziekte**. De meeste erven **autosomaal recessief** over. Een voedselallergie is iets anders: daarbij is er wel een erfelijke component, maar geen enzymdefect in de omzetting van voedingsbestanddelen.`} />
    </div>
  )
}
