export default function Sect05OorzakenMaligneMetTabel2() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Maligne oorzaken</h2>
      <p>Maligne oorzaken bestaan uit hematologische aandoeningen en metastasen van solide tumoren.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Maligne oorzaken van lymfklierzwelling</h3>
      <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 dark:bg-slate-800/80">
            <tr>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Groep</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Voorbeelden</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            <tr>
              <td className="p-3 align-top">Hematologisch</td>
              <td className="p-3">Non-Hodgkinlymfoom, Hodgkinlymfoom, chronische lymfatische leukemie, acute lymfatische leukemie</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Metastasen van solide tumoren</td>
              <td className="p-3">
                Mond-keelholte, oesofagus, maag-darmkanaal, schildklier, larynx, pancreas, galblaas, huid, prostaat, testis, ovaria
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
