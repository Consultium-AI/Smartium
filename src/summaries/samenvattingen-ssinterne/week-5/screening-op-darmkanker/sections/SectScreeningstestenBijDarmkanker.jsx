import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Screeningstesten bij darmkanker`}</Inline></SubHeading>
      <PBody text={`Voor screening op darmkanker zijn verschillende methoden beschikbaar. Een goede screeningstest moet niet alleen kanker in een vroeg stadium kunnen vinden, maar ook **advanced adenomen** kunnen detecteren.`} />
    </div>
  )
}
