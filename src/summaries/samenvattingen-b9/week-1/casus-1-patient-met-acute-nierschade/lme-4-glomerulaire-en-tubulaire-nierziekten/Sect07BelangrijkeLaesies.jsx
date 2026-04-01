export default function Sect07BelangrijkeLaesies() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Belangrijke laesies om te herkennen</h2>
      <p>
        Naast de technieken moet je drie laesies kunnen herkennen in het nierbiopt, namelijk glomerulosclerose, tubulaire atrofie en crescentische glomerulonefritis. Deze patronen worden vooral op lichtmicroscopie beoordeeld.
      </p>
      <p className="font-medium text-slate-800 dark:text-slate-200">Tabel 4. Drie laesies om te herkennen in het nierbiopt</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Laesie</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Herkenningspunt in het biopt</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 font-medium">Glomerulosclerose</td>
              <td className="px-4 py-3">Sclerose van de glomerulus</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 font-medium">Tubulaire atrofie</td>
              <td className="px-4 py-3">Atrofie van de tubuli</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 font-medium">Crescentische glomerulonefritis</td>
              <td className="px-4 py-3">Halfmaanvorming in de glomerulus</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Dit zijn belangrijke schadepatronen die je in het nierbiopt moet kunnen benoemen.
      </p>
    </div>
  )
}
