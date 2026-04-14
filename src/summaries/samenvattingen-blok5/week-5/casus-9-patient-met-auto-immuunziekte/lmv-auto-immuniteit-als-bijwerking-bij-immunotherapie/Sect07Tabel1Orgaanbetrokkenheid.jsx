export default function Sect07Tabel1Orgaanbetrokkenheid() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Tabel 1. Voorbeelden van orgaanbetrokkenheid bij checkpoint-inhibitie
      </h2>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100/90 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-3 py-2 font-semibold border-b border-slate-200 dark:border-slate-600">Orgaansysteem</th>
              <th className="px-3 py-2 font-semibold border-b border-slate-200 dark:border-slate-600">
                Voorbeelden van bijwerkingen
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr>
              <td className="px-3 py-2 align-top">Zenuwstelsel</td>
              <td className="px-3 py-2 align-top">encefalitis, aseptische meningitis, neuropathie</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">Hypofyse / endocrien</td>
              <td className="px-3 py-2 align-top">
                hypofysitis, thyroiditis, hypothyreoïdie, hyperthyreoïdie, auto-immuundiabetes,
                bijnierschorsinsufficiëntie
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">Ogen / slijmvliezen</td>
              <td className="px-3 py-2 align-top">uveïtis, droge mond, mucositis</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">Huid</td>
              <td className="px-3 py-2 align-top">rash, vitiligo, dermatitis</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">Longen</td>
              <td className="px-3 py-2 align-top">pneumonitis</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">Bloed</td>
              <td className="px-3 py-2 align-top">trombocytopenie, anemie</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">Lever</td>
              <td className="px-3 py-2 align-top">hepatitis</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">Hart</td>
              <td className="px-3 py-2 align-top">myocarditis</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">Maag-darmkanaal</td>
              <td className="px-3 py-2 align-top">colitis, enteritis, pancreatitis</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">Nieren</td>
              <td className="px-3 py-2 align-top">nefritis</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">Bewegingsapparaat / vaten</td>
              <td className="px-3 py-2 align-top">artralgie, inflammatoire artritis, vasculitis</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Deze brede verspreiding laat goed zien dat het niet gaat om één vaste ziekte, maar om orgaanspecifieke
        complicaties van een geactiveerd immuunsysteem.
      </p>
    </div>
  )
}
