export default function Sect04SmalcomplexTachycardieen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Smalcomplex tachycardieën</h2>
      <p>
        Smalcomplex tachycardieën zijn vaak supraventriculair. De belangrijkste diagnoses zijn <span className="font-semibold">atriale tachycardie</span>, <span className="font-semibold">atriumflutter</span>, <span className="font-semibold">AVNRT</span> en{' '}
        <span className="font-semibold">AVRT</span>.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Belangrijke smalcomplex tachycardieën</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Ritme</th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Mechanisme</th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">ECG-kenmerk</th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Typische behandeling</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top">**Atriale tachycardie**</td>
              <td className="px-3 py-3 align-top">Ectopische atriale focus, vaak automaticiteit of triggered activity</td>
              <td className="px-3 py-3 align-top">P-toppen vóór elk QRS, afwijkende as/morfologie</td>
              <td className="px-3 py-3 align-top">Rate control, soms ablaties</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top">**Atriumflutter**</td>
              <td className="px-3 py-3 align-top">Macro re-entry rond tricuspidalisregio</td>
              <td className="px-3 py-3 align-top">Zaagtandpatroon, atriumfrequentie rond 300/min</td>
              <td className="px-3 py-3 align-top">Cardioversie, rate control, ablatie</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top">**AVNRT**</td>
              <td className="px-3 py-3 align-top">Micro re-entry in AV-knoop</td>
              <td className="px-3 py-3 align-top">Regelmatig smal complex, P-top vaak verborgen</td>
              <td className="px-3 py-3 align-top">Vagaal, adenosine, ablatie slow pathway</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top">**AVRT**</td>
              <td className="px-3 py-3 align-top">Re-entry via extra verbinding tussen boezem en kamer</td>
              <td className="px-3 py-3 align-top">Smal of breed afhankelijk van variant</td>
              <td className="px-3 py-3 align-top">Adenosine bij stabiel smal complex, ablatie Bundel van Kent</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
