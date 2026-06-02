import { Inline } from './SectionShared'

export default function Section() {
  return (
    <div className="space-y-5 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="leading-relaxed m-0">
        <Inline>{`De redenering verloopt in stappen:`}</Inline>
      </p>
      <ol className="list-decimal pl-6 space-y-2.5">
        <li><Inline>{`**Er is een palpabele afwijking.**`}</Inline></li>
        <li><Inline>{`**Er is familiale belasting en jonge leeftijd.**`}</Inline></li>
        <li><Inline>{`**Daarom is borstkanker een reële mogelijkheid.**`}</Inline></li>
        <li>
          <Inline>{`**Beeldvorming is nodig, met aandacht voor de beperkingen van mammografie.**`}</Inline>
        </li>
        <li><Inline>{`**Bij verdachte bevindingen volgt weefseldiagnostiek.**`}</Inline></li>
        <li>
          <Inline>{`**Daarna wordt de behandeling bepaald op basis van tumorstadium en biomarkers.**`}</Inline>
        </li>
      </ol>
    </div>
  )
}
