export default function Sect03Tabel1KlinischeStadia() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Klinische stadia van eczeem</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Stadium
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Klinisch beeld
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Acuut</td>
              <td className="px-4 py-3 align-top">
                Erytheem, oedeem, papels, vesikels; bij openbarsten van vesikels ontstaat nat eczeem
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Subacuut</td>
              <td className="px-4 py-3 align-top">Minder polymorf, droger en schilferiger</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Chronisch</td>
              <td className="px-4 py-3 align-top">Donkerder roodheid, verdikte huid, diepe groeven, excoriaties en lichenificatie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Rustige fase</td>
              <td className="px-4 py-3 align-top">Soms vooral roodheid en schilfering, vaak monomorf beeld</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
