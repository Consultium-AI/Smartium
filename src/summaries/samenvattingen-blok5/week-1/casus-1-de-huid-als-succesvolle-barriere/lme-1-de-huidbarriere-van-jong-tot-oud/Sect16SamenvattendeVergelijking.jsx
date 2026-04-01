export default function Sect16SamenvattendeVergelijking() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Samenvattende vergelijking in één overzicht</h2>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
        Tabel 5. Huidbarrière door de levensfasen heen
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Levensfase
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Belangrijkste kenmerken
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Prematuur</td>
              <td className="px-4 py-3 align-top">
                Dunne huid, onrijpe barrière, hoge TEWL, hogere absorptie, meer kwetsbaarheid
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Neonaat à terme</td>
              <td className="px-4 py-3 align-top">Barrière nog niet volledig volwassen, TEWL eerst verhoogd maar snel dalend</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Kind</td>
              <td className="px-4 py-3 align-top">Dunner dan volwassenen, minder pigment, sneller waterverlies</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Volwassene</td>
              <td className="px-4 py-3 align-top">Volledig ontwikkelde barrière, stabiel microbioom, dikkere epidermis</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Oude leeftijd</td>
              <td className="px-4 py-3 align-top">
                Tragere barrièreherstel, minder lipiden, hogere pH, minder elasticiteit
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
