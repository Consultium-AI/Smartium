import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Prognose`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Hartfalen is een ernstige diagnose. De overleving bij systolisch hartfalen is in de loop van de tijd verbeterd, mede doordat de oorzaak en behandeling beter bekend zijn. Bij diastolisch hartfalen is de prognose minder verbeterd, omdat de pathofysiologie minder goed begrepen is en de behandeling daardoor minder effectief is.`}</Inline></p>
    </div>
  )
}
