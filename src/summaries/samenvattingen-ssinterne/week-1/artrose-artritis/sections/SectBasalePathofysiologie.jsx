import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Basale pathofysiologie`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`Om radiologische afwijkingen goed te begrijpen, is het handig om de basis van de pathofysiologie te kennen.`}</Inline></p>
    </div>
  )
}
