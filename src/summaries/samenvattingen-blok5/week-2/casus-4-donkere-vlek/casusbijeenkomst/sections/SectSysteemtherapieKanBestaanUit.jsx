import { Inline, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Systeemtherapie`}</Inline></SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Systeemtherapie kan bestaan uit:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`chemotherapie;`}</Inline></li>
        <li><Inline>{`HER2-gerichte therapie;`}</Inline></li>
        <li><Inline>{`antihormonale therapie.`}</Inline></li>
      </ul>
    </div>
  )
}
