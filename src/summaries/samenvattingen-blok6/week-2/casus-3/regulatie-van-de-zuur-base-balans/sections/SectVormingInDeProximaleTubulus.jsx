import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Vorming in de proximale tubulus`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In de proximale tubulus wordt uit glutamine NH4+ gevormd. Glutamine komt uit de lever en wordt afgebroken, waarbij NH4+ vrijkomt. Dit NH4+ kan via de Na+/H+-uitwisselaar de urine in worden uitgescheiden.`}</Inline></p>
      <p className="leading-relaxed"><Inline>{`De proximale tubulus is bovendien een plek waar veel ATP beschikbaar is, omdat hier veel transport plaatsvindt, zoals reabsorptie van glucose en bicarbonaat.`}</Inline></p>
    </div>
  )
}
