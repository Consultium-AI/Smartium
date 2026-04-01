export default function Sect02EssentieleDiagnostiekTabel1() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Essentiële diagnostiek bij acute nierschade</h2>
      <p>
        Acute nierschade betekent dat de nierfunctie in korte tijd achteruitgaat. Juist daarom is een rustige, systematische aanpak zo belangrijk. Met een goede anamnese, lichamelijk onderzoek en een beperkt aantal aanvullende onderzoeken kun je al heel ver komen. De kern is steeds hetzelfde: je wilt snel richting krijgen in de oorzaak én tegelijk inschatten of er nog functionerend nierweefsel aanwezig is.
      </p>
      <p className="font-medium text-slate-800 dark:text-slate-200">Tabel 1. Klinische kern van de diagnostiek bij acute nierschade</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Onderdeel</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Waar let je op?</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Waarom belangrijk?</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-medium">Anamnese</td>
              <td className="px-4 py-3">Klachten, duur en beloop; urineproductie; hematurie en schuimende urine; nierstenen of koliekpijn; recent medicatiegebruik; infecties, koorts en mogelijke blootstellingen</td>
              <td className="px-4 py-3">Geeft vaak al richting aan een postrenale, renale, medicamenteuze of infectieuze oorzaak</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-medium">Lichamelijk onderzoek</td>
              <td className="px-4 py-3">Bloeddruk en orthostase; vullingsstatus; buikonderzoek; huid; catheters</td>
              <td className="px-4 py-3">Helpt een prerenale oorzaak, overvulling, glomerulonefritis/vasculitis of obstructie te herkennen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-medium">Aanvullend onderzoek</td>
              <td className="px-4 py-3">Urineonderzoek, basaal bloedonderzoek en echografie</td>
              <td className="px-4 py-3">De vaste triade die je vrijwel altijd nodig hebt</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De volgorde mag verschillen, maar deze drie onderzoeken horen alle drie terug te komen bij de beoordeling van acute nierschade.
      </p>
    </div>
  )
}
