import { Inline, SubHeading } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <SubHeading><Inline>{`Biomarkers`}</Inline></SubHeading>
      <p className="leading-relaxed m-0">
        <Inline>{`Bij borstkanker zijn de volgende biomarkers essentieel:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`**ER**: oestrogeenreceptor`}</Inline></li>
        <li><Inline>{`**PR**: progesteronreceptor`}</Inline></li>
        <li><Inline>{`**HER2**`}</Inline></li>
      </ul>
      <p className="leading-relaxed">
        <Inline>{`Deze markers zijn belangrijk voor de diagnose, maar vooral ook voor de keuze van de behandeling.`}</Inline>
      </p>
    </div>
  )
}
