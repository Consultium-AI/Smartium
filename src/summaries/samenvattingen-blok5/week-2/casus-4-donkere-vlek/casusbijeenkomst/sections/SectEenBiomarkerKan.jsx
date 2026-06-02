import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`Een biomarker kan:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <Inline>{`**prognostisch** zijn: iets zeggen over het natuurlijke beloop van de ziekte;`}</Inline>
        </li>
        <li>
          <Inline>{`**predictief** zijn: iets zeggen over de kans dat een behandeling werkt.`}</Inline>
        </li>
      </ul>
      <p className="leading-relaxed">
        <Inline>{`Beide kunnen gunstig of ongunstig zijn.`}</Inline>
      </p>
    </div>
  )
}
