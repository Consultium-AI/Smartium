export default function Sect07Beweging() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Beweging: de U-curve</h2>
      <p>
        Rob beweegt nu nauwelijks. Hij denkt eerst zwart-wit: óf helemaal niets doen, óf meteen topsport. Maar dat is niet de goede richting.
      </p>
      <p>Bij atriumfibrilleren wordt beweging gezien als een U-curve. Dat betekent:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>inactiviteit is ongunstig;</li>
        <li>matig-intensieve, regelmatige beweging is juist goed;</li>
        <li>extreme duursport kan weer ongunstig zijn.</li>
      </ul>
      <p>Het advies is daarom 150–300 minuten per week matig-intensieve activiteit, zoals wandelen, fietsen of zwemmen.</p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Waarom geen marathons?</h3>
      <p>
        Extreme duurtraining, zoals marathontraining, kan bij AF risico geven. Het kan de vagale tonus verhogen en zorgen voor boezemvergroting. Zo’n aanpak is dus niet de oplossing voor iemand als Rob.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Beweging bij atriumfibrilleren</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Bewegingsniveau</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Effect</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Weinig tot geen beweging</td>
              <td className="px-4 py-3 align-top">Ongunstig</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Matig-intensieve regelmatige beweging</td>
              <td className="px-4 py-3 align-top">Aanbevolen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Extreme duursport / marathontraining</td>
              <td className="px-4 py-3 align-top">Risicovol bij AF</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>De boodschap is dus: niet stilzitten, maar ook niet doorschieten.</p>
    </div>
  )
}
