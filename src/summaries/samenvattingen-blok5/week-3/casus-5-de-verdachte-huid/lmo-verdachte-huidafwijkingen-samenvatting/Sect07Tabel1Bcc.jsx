export default function Sect07Tabel1Bcc() {
  return (
    <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <caption className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
            Tabel 1. Basaalcelcarcinoom in het kort
          </caption>
          <thead className="bg-slate-100 dark:bg-slate-800/80">
            <tr>
              <th className="px-4 py-2 font-semibold text-slate-900 dark:text-slate-100">Kenmerk</th>
              <th className="px-4 py-2 font-semibold text-slate-900 dark:text-slate-100">Typisch voor BCC</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr>
              <td className="px-4 py-2 align-top">Groeisnelheid</td>
              <td className="px-4 py-2">Meestal langzaam</td>
            </tr>
            <tr>
              <td className="px-4 py-2 align-top">Uiterlijk</td>
              <td className="px-4 py-2">Glanzend, huidkleurig/roze, vaak teleangiëctasieën</td>
            </tr>
            <tr>
              <td className="px-4 py-2 align-top">Belangrijke varianten</td>
              <td className="px-4 py-2">Nodulair, ulcererend, oppervlakkig, gepigmenteerd, morphea-type</td>
            </tr>
            <tr>
              <td className="px-4 py-2 align-top">Risicofactor</td>
              <td className="px-4 py-2">Vooral cumulatieve UV-blootstelling</td>
            </tr>
            <tr>
              <td className="px-4 py-2 align-top">Metastasen</td>
              <td className="px-4 py-2">Vrijwel nooit</td>
            </tr>
            <tr>
              <td className="px-4 py-2 align-top">Belangrijkste probleem</td>
              <td className="px-4 py-2">Lokale destructie en recidief</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
