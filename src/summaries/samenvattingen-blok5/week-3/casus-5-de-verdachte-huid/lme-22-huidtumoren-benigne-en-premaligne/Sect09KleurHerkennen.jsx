export default function Sect09KleurHerkennen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Kleur herkennen</h2>
      <p>De kleur van een huidafwijking helpt bij de diagnose. Denk daarbij aan de K van PROVOKE.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Typische kleur per diagnose</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Diagnose
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Typische kleur
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Angiokeratoom</td>
              <td className="px-4 py-3 align-top">Rood</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Dermatofibroom</td>
              <td className="px-4 py-3 align-top">Huidkleurig of bruin</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Xanthelasmata palpebrarum</td>
              <td className="px-4 py-3 align-top">Geel</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Naevus sebaceus</td>
              <td className="px-4 py-3 align-top">Rood of geel</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Neurofibroom</td>
              <td className="px-4 py-3 align-top">Huidkleurig</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Verruca seborrhoica</td>
              <td className="px-4 py-3 align-top">Huidkleurig, bruin of grijs</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Keloïd</td>
              <td className="px-4 py-3 align-top">Huidkleurig of rood</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="rounded-xl border border-amber-200 dark:border-amber-600/40 bg-amber-50 dark:bg-amber-950/65 p-4">
        <p className="text-amber-900 dark:text-amber-100">
          <strong className="text-amber-950 dark:text-amber-50">Aandachtsvraag:</strong> Waarom is kleur zo nuttig?{' '}
          <span className="font-medium">
            Mini-antwoord: Omdat veel huidtumoren een karakteristieke kleur hebben die helpt bij herkenning.
          </span>
        </p>
      </div>
    </div>
  )
}
