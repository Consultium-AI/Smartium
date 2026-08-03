import { Inline, PBody, DataTable, SubHeading, VraagjeBox } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading level={2}><Inline>{`Waarom staat er soms NE in plaats van NA?`}</Inline></SubHeading>
      <p className="leading-relaxed"><Inline>{`In sommige schema’s staat NE in plaats van NA. NE staat voor norepinefrine, en dat is een synoniem voor noradrenaline. De term norepinefrine wordt vooral in Amerika gebruikt. Beide namen verwijzen naar de bijnier, het orgaan waar adrenaline wordt gemaakt.`}</Inline></p>
    </div>
  )
}
