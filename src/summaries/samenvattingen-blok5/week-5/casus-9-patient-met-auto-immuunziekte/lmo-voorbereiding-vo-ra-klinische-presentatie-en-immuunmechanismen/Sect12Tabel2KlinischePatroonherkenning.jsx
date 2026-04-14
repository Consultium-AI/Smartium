export default function Sect12Tabel2KlinischePatroonherkenning() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Tabel 2. Klinische patroonherkenning bij gewrichtsklachten</h2>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100/90 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-3 py-2 font-semibold border-b border-slate-200 dark:border-slate-600">Vraag</th>
              <th className="px-3 py-2 font-semibold border-b border-slate-200 dark:border-slate-600">Waar let je op?</th>
              <th className="px-3 py-2 font-semibold border-b border-slate-200 dark:border-slate-600">Waarom belangrijk?</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr>
              <td className="px-3 py-2 align-top">Inflammatoir of niet?</td>
              <td className="px-3 py-2 align-top">Stijfheid, rustpijn, warmte, zwelling</td>
              <td className="px-3 py-2 align-top">Stuurt je richting artritis of mechanische oorzaak</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">Hoeveel gewrichten?</td>
              <td className="px-3 py-2 align-top">Mono / oligo / poly</td>
              <td className="px-3 py-2 align-top">Vernauwt de differentiaaldiagnose</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">Waar zitten de klachten?</td>
              <td className="px-3 py-2 align-top">Perifeer of axiaal</td>
              <td className="px-3 py-2 align-top">Helpt bij patroonherkenning</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">Hoe lang bestaat het?</td>
              <td className="px-3 py-2 align-top">Acuut of chronisch</td>
              <td className="px-3 py-2 align-top">Belangrijk voor diagnostische richting</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
