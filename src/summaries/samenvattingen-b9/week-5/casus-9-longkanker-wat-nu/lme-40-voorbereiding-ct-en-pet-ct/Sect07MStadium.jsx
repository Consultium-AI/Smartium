export default function Sect07MStadium() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Het M-stadium: metastasen op afstand</h2>
      <p>
        Het <span className="font-semibold">M-stadium</span> geeft aan of er sprake is van <span className="font-semibold">metastasen op afstand</span>. Er zijn twee hoofdcategorieën:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <span className="font-semibold">M0</span>: geen metastasen op afstand
        </li>
        <li>
          <span className="font-semibold">M1</span>: wel metastasen op afstand
        </li>
      </ul>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 4. M-stadium bij longkanker</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">M-stadium</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Betekenis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">M0</td>
              <td className="px-4 py-3 align-top">Geen metastasen op afstand</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">M1</td>
              <td className="px-4 py-3 align-top">Wel metastasen op afstand</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Bij <span className="font-semibold">M0</span> beperkt de tumor zich tot de long, met of zonder lymfekliermetastasen.
      </p>
      <p>
        Bij <span className="font-semibold">M1</span> zijn er wel metastasen op afstand. De meest voorkomende locaties zijn:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><span className="font-semibold">skelet</span></li>
        <li><span className="font-semibold">lever</span></li>
        <li><span className="font-semibold">hersenen</span></li>
        <li><span className="font-semibold">bijnieren</span></li>
        <li><span className="font-semibold">contralaterale long</span></li>
      </ul>
      <p>De contralaterale long wordt hierbij als metastase beschouwd.</p>
    </div>
  )
}
