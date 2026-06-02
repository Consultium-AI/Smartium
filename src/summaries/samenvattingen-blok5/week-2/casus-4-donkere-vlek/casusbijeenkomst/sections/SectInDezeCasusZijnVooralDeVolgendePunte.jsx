import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`In deze casus zijn vooral de volgende punten belangrijk:`}</Inline>
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><Inline>{`de afwijking is palpabel;`}</Inline></li>
        <li><Inline>{`er is geen pijn;`}</Inline></li>
        <li><Inline>{`inspectie laat geen duidelijke afwijkingen zien;`}</Inline></li>
        <li><Inline>{`de oksels moeten ook beoordeeld worden;`}</Inline></li>
        <li><Inline>{`de familiale belasting maakt de verdenking sterker.`}</Inline></li>
      </ul>
    </div>
  )
}
