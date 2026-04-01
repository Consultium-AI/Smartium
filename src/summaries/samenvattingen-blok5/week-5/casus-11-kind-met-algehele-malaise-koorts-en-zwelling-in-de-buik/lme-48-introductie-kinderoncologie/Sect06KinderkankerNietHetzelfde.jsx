export default function Sect06KinderkankerNietHetzelfde() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Kinderkanker is niet hetzelfde als volwassen kanker</h2>
      <p>
        Een belangrijk deel van deze stof is het verschil tussen kinderkanker en volwassen kanker. Een kind is dus geen
        kleine volwassene. Dat zie je op meerdere punten terug.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 2. Verschillen tussen kinderkanker en volwassen kanker
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Onderdeel
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kinderen
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Volwassenen
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Frequentie</td>
              <td className="px-4 py-3 align-top">zeldzamer</td>
              <td className="px-4 py-3 align-top">veel vaker</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Soorten kanker</td>
              <td className="px-4 py-3 align-top">vooral leukemieën, lymfomen, embryonale tumoren, sarcomen</td>
              <td className="px-4 py-3 align-top">vooral carcinomen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Ontstaan van kanker</td>
              <td className="px-4 py-3 align-top">
                oorzaak vaak onbekend, meerdere genetische &quot;hits&quot; nodig
              </td>
              <td className="px-4 py-3 align-top">externe factoren spelen vaak grotere rol</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Groei</td>
              <td className="px-4 py-3 align-top">vaak sneller</td>
              <td className="px-4 py-3 align-top">vaak langzamer</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Behandeling</td>
              <td className="px-4 py-3 align-top">vaak gevoeliger voor chemo- en radiotherapie</td>
              <td className="px-4 py-3 align-top">minder gevoelig, mede door andere factoren</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Overleving</td>
              <td className="px-4 py-3 align-top">gemiddeld beter</td>
              <td className="px-4 py-3 align-top">gemiddeld lager</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Context</td>
              <td className="px-4 py-3 align-top">zeldzame ziekte, gespecialiseerde zorg nodig</td>
              <td className="px-4 py-3 align-top">vaker in algemene oncologische zorg</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De belangrijkste boodschap is dus dat kinderkanker een eigen patroon heeft. De diagnostiek, behandeling en organisatie
        van zorg moeten daar ook op aansluiten.
      </p>
    </div>
  )
}
