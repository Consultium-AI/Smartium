export default function Sect06BehandelingOverzicht() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Behandeling van hypokaliëmie en hyperkaliëmie</h2>
      <p>
        Het grootste gevaar van kaliumstoornissen zijn hartritmestoornissen. Dat is daarom steeds het belangrijkste aandachtspunt in de behandeling.
      </p>
      <p>Er zijn drie grote vragen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Hoe ernstig is de stoornis?</li>
        <li>Zijn er duidelijke symptomen?</li>
        <li>Zijn er ECG-afwijkingen?</li>
      </ul>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 3. Behandeling in grote lijnen</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Situatie</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Beleid</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Milde hypokaliëmie, geen matig-ernstige symptomen</td>
                <td className="px-4 py-3">Dieet aanpassen, orale KCl-drank, eventueel kaliumsparend middel</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Milde hyperkaliëmie, geen matig-ernstige symptomen</td>
                <td className="px-4 py-3">Dieet aanpassen, ionenwisselaars, medicatie aanpassen</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Ernstige hypokaliëmie</td>
                <td className="px-4 py-3">Zo nodig IV-suppletie, onder ritmebewaking</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Ernstige hyperkaliëmie</td>
                <td className="px-4 py-3">Calciumgluconaat, insuline-glucose, ritmebewaking, zo nodig dialyse</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
