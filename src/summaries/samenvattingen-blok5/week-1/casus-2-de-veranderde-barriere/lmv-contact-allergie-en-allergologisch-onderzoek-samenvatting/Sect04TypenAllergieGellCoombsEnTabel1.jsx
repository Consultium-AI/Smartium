export default function Sect04TypenAllergieGellCoombsEnTabel1() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Typen allergie volgens Gell en Coombs
      </h2>
      <p>
        Allergische reacties worden klassiek ingedeeld volgens Gell en Coombs. In deze indeling worden vier typen
        onderscheiden. Voor de dermatologie en voor deze stof zijn vooral type I en type IV van belang.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Typen allergische reacties volgens Gell en Coombs
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Type
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Mechanisme
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Voorbeeld
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Type I</td>
              <td className="px-4 py-3 align-top">Anafylactisch type</td>
              <td className="px-4 py-3 align-top">Snelle IgE-gemedieerde reactie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Type II</td>
              <td className="px-4 py-3 align-top">Cytotoxie</td>
              <td className="px-4 py-3 align-top">Cytotoxische reactie</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Type III</td>
              <td className="px-4 py-3 align-top">Immuuncomplex-gemedieerd</td>
              <td className="px-4 py-3 align-top">Serumziekte, Arthus-reactie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Type IV</td>
              <td className="px-4 py-3 align-top">Vertraagd type</td>
              <td className="px-4 py-3 align-top">Contactallergie</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Type I is dus de snelle allergische reactie. Type IV is de vertraagde, T-cel-gemedieerde reactie die past bij
        contactallergie.
      </p>
    </div>
  )
}
