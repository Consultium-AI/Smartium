export default function Sect04KlassiekeTekenenVanOntsteking() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De klassieke tekenen van ontsteking</h2>
      <p>
        Bij autoinflammatie ontstaan vaak gewone ontstekingsverschijnselen, ook al is er geen infectie. De
        klassieke kenmerken van ontsteking zijn:
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Klassieke kenmerken van ontsteking
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Latijn
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Betekenis
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Calor</td>
              <td className="px-4 py-3 align-top">warmte</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Dolor</td>
              <td className="px-4 py-3 align-top">pijn</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Rubor</td>
              <td className="px-4 py-3 align-top">roodheid</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Tumor</td>
              <td className="px-4 py-3 align-top">zwelling</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Functio laesa</td>
              <td className="px-4 py-3 align-top">functieverlies</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Deze vijf kenmerken zijn heel herkenbaar en helpen om ontsteking in het lichaam te begrijpen. Bij
        autoinflammatie kunnen ze dus optreden zonder dat er sprake is van een bacteriële of virale infectie.
      </p>
    </div>
  )
}
