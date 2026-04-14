export default function Sect07TabelGeneratieveBegrippen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100">Tabel: belangrijke begrippen rond generatieve AI</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="w-full min-w-[36rem] border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-800/80">
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">
                Begrip
              </th>
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">
                Betekenis
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Prompt</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">de opdracht die je aan het model geeft</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Generatieve AI</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">AI die nieuwe content maakt</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Taalmodel</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">model dat met taal werkt en tekst voorspelt/genereren</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">GPT</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Generative Pre-trained Transformer</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Pre-trained</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">vooraf getraind op grote hoeveelheden data</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Transformer</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">architectuur die goed is in taal en context</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
