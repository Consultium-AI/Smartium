export default function Sect04Tabel1Begrippen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Begrippen rond voedselallergie</h3>
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
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Atopiesyndroom</td>
              <td className="px-4 py-3 align-top">
                Verzameling van eczeem, voedselallergie, astma en allergische rhinoconjunctivitis
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Sensibilisatie</td>
              <td className="px-4 py-3 align-top">Aanwezigheid van IgE-antistoffen tegen een bepaald allergeen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Allergie</td>
              <td className="px-4 py-3 align-top">
                Overdreven immuunreactie op een onschuldige stof die ook echt klachten geeft bij blootstelling
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                IgE-gemedieerde voedselallergie
              </td>
              <td className="px-4 py-3 align-top">Voedselallergie waarbij IgE-antistoffen een centrale rol spelen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Niet-immuungemedieerde reactie
              </td>
              <td className="px-4 py-3 align-top">
                Reactie op voeding zonder betrokkenheid van het immuunsysteem, bijvoorbeeld lactose-intolerantie
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
