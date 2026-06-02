import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`Een borstafwijking kan op verschillende manieren worden ontdekt:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`door de patiënt zelf;`}</Inline></li>
        <li><Inline>{`bij lichamelijk onderzoek;`}</Inline></li>
        <li><Inline>{`of via beeldvorming.`}</Inline></li>
      </ul>
    </div>
  )
}
