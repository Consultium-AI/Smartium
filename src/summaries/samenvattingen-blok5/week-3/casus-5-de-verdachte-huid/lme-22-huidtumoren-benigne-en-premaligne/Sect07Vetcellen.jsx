export default function Sect07Vetcellen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Vetcellen</h2>
      <p>Een tumor uitgaande van vetcellen is een lipoom.</p>
      <p>Een lipoom is meestal:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>asymptomatisch</li>
        <li>subcutaan gelegen</li>
        <li>week en elastisch</li>
        <li>los van onder- en bovenlaag</li>
      </ul>
      <p>Lipomen komen relatief vaak voor.</p>
      <p>
        Als ze oppervlakkig liggen en kleiner zijn dan 5 cm, kunnen ze chirurgisch worden verwijderd. Vaak wordt ook een
        conservatief beleid gevoerd. Liggen ze dieper en/of zijn ze groter dan 5 cm, dan is het verstandig eerst een echo
        te verrichten voordat je tot excisie overgaat.
      </p>
      <div className="rounded-xl border border-amber-200 dark:border-amber-600/40 bg-amber-50 dark:bg-amber-950/65 p-4">
        <p className="text-amber-900 dark:text-amber-100">
          <strong className="text-amber-950 dark:text-amber-50">Aandachtsvraag:</strong> Hoe voelt een lipoom meestal aan?{' '}
          <span className="font-medium">Mini-antwoord: Zacht, elastisch en goed verplaatsbaar onder de huid.</span>
        </p>
      </div>
    </div>
  )
}
