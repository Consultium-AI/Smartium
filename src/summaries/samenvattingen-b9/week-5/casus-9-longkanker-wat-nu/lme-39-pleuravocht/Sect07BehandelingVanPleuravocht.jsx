export default function Sect07BehandelingVanPleuravocht() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Behandeling van pleuravocht</h2>
      <p>
        De behandeling hangt altijd af van de <span className="font-semibold">onderliggende oorzaak</span>. Bij pleuravocht door hartfalen wordt meestal behandeld met <span className="font-semibold">diuretica</span> en optimalisatie van de hartfalenmedicatie.
      </p>
      <p>Naast behandeling van de oorzaak zijn er algemene behandelopties.</p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Drainage</h3>
      <p>
        Als een patiënt veel pleuravocht heeft, kan dit benauwdheid geven. Dan kan <span className="font-semibold">drainage</span> nodig zijn, vooral voor symptoomverlichting en soms ook voor diagnostiek. Hiervoor wordt een <span className="font-semibold">thoraxdrain</span> in de borstholte tussen de pleurabladen geplaatst. Via deze drain kan het vocht worden afgevoerd.
      </p>
      <p>
        Bij een <span className="font-semibold">eenmalige drainage</span> kan maximaal ongeveer <span className="font-semibold">1,5 liter</span> per keer worden weggehaald. Als er meer dan 1,5 liter wordt afgezogen, bestaat het risico op <span className="font-semibold">re-expansie-oedeem van de long</span>. De precieze onderliggende pathofysiologie daarvan is niet bekend. Wanneer een thoraxdrain langer blijft zitten, kan er meer pleuravocht worden gedraineerd.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Pleurodese</h3>
      <p>
        <span className="font-semibold">Pleurodese</span> is een procedure waarbij de pleurale ruimte wordt opgeheven om <span className="font-semibold">terugkerende pleurale effusie</span> te voorkomen. Dit gebeurt meestal door het opwekken van intrapleurale ontsteking, gevolgd door fibrine-afzetting en littekenvorming. Daardoor gaan de twee pleurabladen als het ware aan elkaar{' '}
        {'\u201C'}plakken{'\u201D'}, zodat het vocht niet meer terugkomt.
      </p>
      <p>
        De meest gebruikte manier is het inspuiten van <span className="font-semibold">steriele talk</span> via een thoraxdrain.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 5. Behandeling van pleuravocht in hoofdlijnen</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Behandeling</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Doel</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Behandeling onderliggende oorzaak</td>
              <td className="px-4 py-3 align-top">Oorzaak wegnemen of verminderen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Drainage</td>
              <td className="px-4 py-3 align-top">Symptomen verminderen en/of vocht verwijderen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Pleurodese</td>
              <td className="px-4 py-3 align-top">Terugkerende pleuravochtophoping voorkomen</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
