export default function Sect10Vuistregel() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Vuistregel voor aantal variabelen</h2>
      <p>
        Logistische regressie werkt het best met voldoende observaties. Een vaak gebruikte vuistregel is:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">10 events per variabele (EPV)</strong>
        </li>
      </ul>
      <p>
        Hierbij is een <strong className="text-slate-900 dark:text-slate-100">event</strong> het kleinste aantal van de
        twee uitkomstcategorieën, dus het aantal 0’s of het aantal 1’s, afhankelijk van welke categorie het kleinst is.
      </p>
      <p>Voorbeelden:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>138 events → ongeveer 13 tot 14 variabelen mogelijk</li>
        <li>50 events → ongeveer 5 variabelen mogelijk</li>
        <li>15 events en 5 voorspellers → EPV = 3, dus te weinig</li>
      </ul>
      <p>Als de EPV te laag is, krijg je instabiele schattingen.</p>
    </div>
  )
}
