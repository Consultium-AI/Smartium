export default function Sect10BetrokkenDisciplines() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Betrokken disciplines</h2>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Belangrijke betrokken disciplines bij longkanker</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Discipline</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Rol</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Longarts / pneumoloog</td>
              <td className="px-4 py-3 align-top">Klinische beoordeling, bronchoscopie, EBUS</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Radioloog</td>
              <td className="px-4 py-3 align-top">Beeldvorming beoordelen, CT-geleide puncties</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Nucleair geneeskundige</td>
              <td className="px-4 py-3 align-top">PET-scan en stadiëring</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Patholoog</td>
              <td className="px-4 py-3 align-top">Weefseldiagnose, subtype, immunohistochemie</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Thoraxchirurg</td>
              <td className="px-4 py-3 align-top">Operatieve behandeling, VATS, resectie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Radiotherapeut</td>
              <td className="px-4 py-3 align-top">Bestraling, inclusief stereotactische radiotherapie</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Internist-oncoloog</td>
              <td className="px-4 py-3 align-top">Systemische behandeling, chemotherapie, immunotherapie</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
