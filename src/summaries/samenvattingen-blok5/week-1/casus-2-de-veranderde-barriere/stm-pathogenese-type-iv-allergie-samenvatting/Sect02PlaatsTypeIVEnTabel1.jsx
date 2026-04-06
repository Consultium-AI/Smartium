export default function Sect02PlaatsTypeIVEnTabel1() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        De plaats van type IV allergie binnen de klassieke indeling
      </h2>
      <p>
        Allergische of overgevoeligheidsreacties worden klassiek in vier typen ingedeeld. In deze module ligt de nadruk op
        type IV, maar het helpt om eerst kort te zien waar dit type past binnen het grotere geheel.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Overzicht van de klassieke typen allergische reacties
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Type
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Hoofdmechanisme
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kernpunt
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Type I</td>
              <td className="px-4 py-3 align-top">IgE-gemedieerde mestcelactivatie</td>
              <td className="px-4 py-3 align-top">snelle reactie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Type II</td>
              <td className="px-4 py-3 align-top">Antistof-gemedieerd</td>
              <td className="px-4 py-3 align-top">antistoffen richten zich tegen cellen of weefsels</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Type III</td>
              <td className="px-4 py-3 align-top">Immuuncomplex-gemedieerd</td>
              <td className="px-4 py-3 align-top">afzetting van immuuncomplexen veroorzaakt ontsteking</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Type IV</td>
              <td className="px-4 py-3 align-top">T-cel-gemedieerd</td>
              <td className="px-4 py-3 align-top">vertraagde reactie door activatie van T-lymfocyten</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Type IV wordt ook wel vertraagd-type overgevoeligheid genoemd, of delayed-type hypersensitivity (DTH). Anders dan
        bij type I staat hier dus niet de mestcel centraal, maar vooral de T-lymfocyt.
      </p>
    </div>
  )
}
