export default function Sect09AanvullendePrognoseTabel4() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Aanvullende prognostische factoren</h2>
      <p>
        Naast de TNM-classificatie zijn er extra factoren die belangrijk zijn voor de prognose en de behandelbehandeling.
      </p>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 4. Aanvullende prognostische factoren
        </h3>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
              <tr>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">Tumorspecifiek</th>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">Betekenis</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-900/40">
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">EMVI</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Extramurale vene-invasie; tumorcellen in bloedvaten buiten de muscularis propria
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">
                  Histologische factoren
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Zoals radicaliteit, angio-invasie, tumor budding en differentiatie
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">MMR-deficiëntie</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Mismatch repair-deficiëntie</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
