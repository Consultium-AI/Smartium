export default function Sect10DoelvolumeCtvEnPtv() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Doelvolume, CTV en PTV</h2>
      <p>
        Bij radiotherapie moet heel precies worden bepaald welk gebied bestraald moet worden. Daarbij wordt gewerkt met
        marges, zodat zeker is dat alle tumor in het bestralingsveld zit.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Begrippen rond het bestralingsgebied</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Begrip
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Betekenis
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">GTV (Gross Tumor Volume)</td>
              <td className="px-4 py-3 align-top">Palpabele of zichtbare tumor</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">CTV (Clinical Target Volume)</td>
              <td className="px-4 py-3 align-top">GTV + marge voor microscopische uitbreiding</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">PTV (Planning Target Volume)</td>
              <td className="px-4 py-3 align-top">CTV + extra marge om goed te kunnen bestralen</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Het CTV bevat dus de marge voor microscopische uitbreiding van de tumor. Daarnaast kan in het CTV een electief
        gebied worden meegenomen. Electief betekent hier “uit voorzorg”. Dat gebeurt omdat van sommige kankers bekend is
        dat ze kunnen metastaseren, ook als er nog geen zichtbare tumor is in dat gebied.
      </p>
      <p>Het PTV is het CTV plus een extra marge. Die marge is nodig vanwege:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>beweging van organen, afhankelijk van de locatie in het lichaam;</li>
        <li>reproduceerbaarheid van de ligging;</li>
        <li>hoe nauwkeurig de patiënt wordt ingesteld.</li>
      </ul>
      <p>
        Bij de bepaling van het PTV wordt dus rekening gehouden met onzekerheden in houding en in de uitvoering van de
        bestraling.
      </p>
    </div>
  )
}
