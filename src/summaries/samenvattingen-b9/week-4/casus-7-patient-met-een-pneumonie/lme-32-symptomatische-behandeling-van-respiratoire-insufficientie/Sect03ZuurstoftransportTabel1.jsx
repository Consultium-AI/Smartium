export default function Sect03ZuurstoftransportTabel1() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Zuurstoftransport is meer dan alleen ademhalen</h3>
      <p>
        Goede zuurstofvoorziening van het lichaam hangt niet alleen af van de longen, maar ook van de hoeveelheid hemoglobine en de cardiac output. Er zijn dus drie componenten nodig voor goed zuurstoftransport:
      </p>
      <p className="font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Drie essentiële onderdelen van goed zuurstoftransport</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Onderdeel</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Betekenis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Goede gaswisseling in de longen</td>
              <td className="px-4 py-3 align-top">Zuurstof moet het bloed kunnen bereiken</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Voldoende hemoglobine</td>
              <td className="px-4 py-3 align-top">Zuurstof moet kunnen worden gebonden en vervoerd</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Genoeg cardiac output</td>
              <td className="px-4 py-3 align-top">Het zuurstofrijke bloed moet de weefsels bereiken</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Dat betekent dat iemand met goede longen toch problemen kan krijgen als er te weinig hemoglobine is of als het hart het bloed niet goed rondpompt.
      </p>
    </div>
  )
}
