export default function Sect11Tabel2BccEnScc() {
  return (
    <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <caption className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
            Tabel 2. BCC en SCC naast elkaar
          </caption>
          <thead className="bg-slate-100 dark:bg-slate-800/80">
            <tr>
              <th className="px-4 py-2 font-semibold text-slate-900 dark:text-slate-100">Kenmerk</th>
              <th className="px-4 py-2 font-semibold text-slate-900 dark:text-slate-100">Basaalcelcarcinoom</th>
              <th className="px-4 py-2 font-semibold text-slate-900 dark:text-slate-100">Plaveiselcelcarcinoom</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr>
              <td className="px-4 py-2 align-top">Frequentie</td>
              <td className="px-4 py-2">Meest voorkomend</td>
              <td className="px-4 py-2">Tweede meest voorkomend</td>
            </tr>
            <tr>
              <td className="px-4 py-2 align-top">Typisch uiterlijk</td>
              <td className="px-4 py-2">Glanzend, teleangiëctasieën</td>
              <td className="px-4 py-2">Keratotisch, ruw, nodulair of ulcererend</td>
            </tr>
            <tr>
              <td className="px-4 py-2 align-top">Groei</td>
              <td className="px-4 py-2">Meestal langzaam, lokaal destructief</td>
              <td className="px-4 py-2">Langzaam tot sneller, invasiever</td>
            </tr>
            <tr>
              <td className="px-4 py-2 align-top">Pijn</td>
              <td className="px-4 py-2">Meestal niet</td>
              <td className="px-4 py-2">Kan wel, soms belangrijk alarmsymptoom</td>
            </tr>
            <tr>
              <td className="px-4 py-2 align-top">Metastasen</td>
              <td className="px-4 py-2">Vrijwel nooit</td>
              <td className="px-4 py-2">Wel mogelijk, vooral naar regionale klieren</td>
            </tr>
            <tr>
              <td className="px-4 py-2 align-top">Belangrijkste risico</td>
              <td className="px-4 py-2">Lokale destructie/recidief</td>
              <td className="px-4 py-2">Metastasering en sterfte</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
