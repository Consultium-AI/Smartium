export default function Sect02HuidkankerAlgemeen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Huidkanker in het algemeen</h2>
      <p>
        Huidkanker hoort bij de meest voorkomende vormen van kanker. De incidentie zal de komende jaren naar verwachting
        blijven stijgen. De belangrijkste vormen zijn het basaalcelcarcinoom, het cutaan plaveiselcelcarcinoom en het
        melanoom. Binnen deze groep komt het basaalcelcarcinoom het vaakst voor, daarna het cutaan plaveiselcelcarcinoom,
        en daarna het melanoom.
      </p>
      <p>
        De incidentie verschilt per land. In grote delen van Afrika en Azië is de incidentie laag. Dat heeft twee
        belangrijke redenen: donkere huidkleuren beschermen tegen het krijgen van keratinocytenhuidkanker, en de
        registratie van huidkanker is daar minder compleet dan bijvoorbeeld in Europa, Noord-Amerika en Australië.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Incidentie van de belangrijkste huidkankers in Nederland
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Type huidkanker
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Aantal per jaar in Nederland
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Melanoom</td>
              <td className="px-4 py-3 align-top">ca. 8.000</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Cutaan plaveiselcelcarcinoom</td>
              <td className="px-4 py-3 align-top">ca. 15.000</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Basaalcelcarcinoom</td>
              <td className="px-4 py-3 align-top">ca. 52.000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Het basaalcelcarcinoom is daarmee met afstand de meest voorkomende maligniteit. Ongeveer 1 op de 5 Nederlanders
        krijgt in zijn of haar leven een basaalcelcarcinoom. Een derde van de patiënten krijgt bovendien meerdere
        basaalcelcarcinomen.
      </p>
      <div className="rounded-xl border border-amber-200 dark:border-amber-600/40 bg-amber-50 dark:bg-amber-950/65 p-4">
        <p className="text-amber-900 dark:text-amber-100">
          <strong className="text-amber-950 dark:text-amber-50">Aandachtvraag:</strong> Welke huidkanker komt het vaakst
          voor? <em className="not-italic font-medium">*Kort antwoord: het basaalcelcarcinoom.*</em>
        </p>
      </div>
    </div>
  )
}
