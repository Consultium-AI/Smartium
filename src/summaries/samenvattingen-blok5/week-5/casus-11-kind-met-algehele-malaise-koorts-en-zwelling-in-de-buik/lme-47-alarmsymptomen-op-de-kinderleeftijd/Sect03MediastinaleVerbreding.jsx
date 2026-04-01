export default function Sect03MediastinaleVerbreding() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Mediastinale verbreding: als de borstkas te weinig ruimte heeft
      </h2>
      <p>
        Een mediastinum is de ruimte in de borstkas tussen de longen. Daarin liggen belangrijke structuren zoals hart, grote
        vaten, luchtweg en lymfeklieren. Een massa in deze ruimte kan daardoor snel problemen geven, vooral bij een kind.
      </p>
      <p>
        Bij een kind met klachten zoals hoesten, kortademigheid, inspanningstintolerantie en een dikker gezicht moet je
        denken aan een massa in het mediastinum. Een gezwollen gezicht kan passen bij een vena cava superior syndroom: de
        afvoer van bloed uit het bovenlichaam is dan belemmerd.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Tumoren en afwijkingen per compartiment van het mediastinum
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Compartment
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Mogelijke afwijkingen
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Voorste mediastinum</td>
              <td className="px-4 py-3 align-top">
                Thymusafwijkingen, kiemceltumor, leukemie/lymfoom, vaatafwijkingen
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Middelste mediastinum</td>
              <td className="px-4 py-3 align-top">Sarcoïdose, TBC, bronchogene cyste</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Achterste mediastinum</td>
              <td className="px-4 py-3 align-top">Cyste, neuroblastoom</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Deze indeling helpt je om een mediastinale verbreding anatomisch beter te begrijpen. Niet elke massa zit dus op dezelfde
        plek, en de mogelijke oorzaak verschilt per compartiment.
      </p>
      <div className="rounded-xl border border-amber-200 dark:border-amber-600/40 bg-amber-50 dark:bg-amber-950/65 p-4">
        <p className="text-amber-950 dark:text-amber-100">
          <strong className="text-amber-950 dark:text-amber-50">Aandachtsvraag:</strong> Waarom is een mediastinale massa zo
          risicovol onder narcose?{' '}
          <span className="text-amber-900 dark:text-amber-100">
            Mini-antwoord: Door compressie van de trachea en soms ook van de grote vaten kan een kind tijdens narcose snel
            luchtweg- en circulatieproblemen krijgen.
          </span>
        </p>
      </div>
    </div>
  )
}
