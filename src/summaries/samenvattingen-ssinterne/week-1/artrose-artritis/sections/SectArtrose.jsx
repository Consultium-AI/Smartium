import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Artrose`}</Inline></SubHeading>
      <PBody text={`Artrose, ook wel **osteoarthritis**, is in de kern een aandoening waarbij **kraakbeenverlies** centraal staat. Op een röntgenfoto zie je dat terug als **afname van de gewrichtsspleet**.`} />
    </div>
  )
}
