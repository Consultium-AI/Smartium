export default function Sect12AannamesVanLineaireRegressie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Aannames van lineaire regressie</h2>
      <p>Bij lineaire regressie maak je enkele aannames:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Lineariteit: de relatie tussen X en Y kan (ongeveer) worden beschreven met een rechte lijn;</li>
        <li>Onafhankelijkheid: uitkomsten/observaties zijn onafhankelijk van elkaar;</li>
        <li>Constante variantie: de spreiding van de fouten is voor alle waarden van X ongeveer gelijk;</li>
        <li>Normaliteit van de fouten: de fouten ε, en dus bij benadering de residuen, volgen een normale verdeling.</li>
      </ul>
      <p>
        Deze aannames kun je conceptueel beoordelen met bijvoorbeeld een residuplot en een normaliteitscontrole.
      </p>
    </div>
  )
}
