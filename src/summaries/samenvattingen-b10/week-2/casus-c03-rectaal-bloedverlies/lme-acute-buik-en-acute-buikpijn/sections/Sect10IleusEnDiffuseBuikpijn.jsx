export default function Sect10IleusEnDiffuseBuikpijn() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Ileus en diffuse buikpijn</h2>
      <p>
        Naast pijn in een specifiek kwadrant kan een patiënt zich ook presenteren met gegeneraliseerde of diffuse buikpijn.
        Een belangrijk en veelvoorkomend beeld hierbij is een ileus.
      </p>
      <p>Een ileus is een belemmering van het darmstelsel en wordt klinisch herkend aan:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>uitblijvende ontlasting;</li>
        <li>braken.</li>
      </ul>
      <p className="mt-4">Er zijn twee vormen:</p>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 6. Twee vormen van ileus</h3>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
              <tr>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">Vorm</th>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">Kenmerken</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-900/40">
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">
                  Mechanische ileus
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Blokkade door stenose, verklevingen (adhesies) of tumor; vaak borborygmi of gootsteengeruis hoorbaar
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">
                  Paralytische ileus
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  De darmen zijn stilgevallen; geen peristaltiek, bijvoorbeeld na operatie, bij intra-abdominaal abces of
                  door sommige medicatie
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Bij beide vormen gaat de buik vaak opzetten, waardoor patiënten een bolle buik kunnen krijgen. Bij een mechanische
        ileus hoor je vaak nog actieve darmgeluiden, terwijl dat bij een paralytische ileus juist nauwelijks het geval is.
      </p>
    </div>
  )
}
