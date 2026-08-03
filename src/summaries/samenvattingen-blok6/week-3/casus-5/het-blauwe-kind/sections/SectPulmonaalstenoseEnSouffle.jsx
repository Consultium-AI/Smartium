import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Pulmonaalstenose en souffle`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Bij Tetralogie van Fallot is er pulmonaalstenose. Dat geeft een souffle, omdat bloed over de vernauwde pulmonalisklep stroomt. Die souffle hoor je in de systole, dus tijdens de ejectiefase van het hart. Het is dus geen diastolisch geruis.`}</Inline></p>
    </div>
  )
}
