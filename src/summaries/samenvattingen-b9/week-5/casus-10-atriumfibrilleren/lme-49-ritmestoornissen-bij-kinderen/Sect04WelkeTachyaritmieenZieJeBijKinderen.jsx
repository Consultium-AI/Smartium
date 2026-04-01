export default function Sect04WelkeTachyaritmieenZieJeBijKinderen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Welke tachyaritmieën zie je bij kinderen?</h2>
      <p>
        Tachyaritmieën kun je indelen op basis van waar ze ontstaan en op basis van het ECG. Dan kijk je vooral of het een smalcomplex of breedcomplex tachycardie is. Hieronder staat het overzicht van een aantal veelvoorkomende ritmestoornissen.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
        Tabel 3. Tachyaritmieën bij kinderen en volwassenen
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Ritmestoornis
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Voorkomen bij kind versus volwassene
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Cirkeltachycardie</td>
              <td className="px-4 py-3 align-top">Frequent bij kind en volwassene</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Ectopische atriale tachycardie</td>
              <td className="px-4 py-3 align-top">Zeldzaam bij kind en volwassene</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Atriumflutter</td>
              <td className="px-4 py-3 align-top">Bij kind zeldzaam, vooral als het voorkomt bij neonaten; bij volwassene regelmatig</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Atriumfibrilleren</td>
              <td className="px-4 py-3 align-top">Bij kind heel zeldzaam; bij volwassene heel frequent, vooral boven 65 jaar</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Ventrikeltachycardie</td>
              <td className="px-4 py-3 align-top">Bij kind zeldzaam; bij volwassene regelmatig</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Bij kinderen zijn cirkeltachycardieën dus de belangrijkste supraventriculaire ritmestoornissen om aan te denken. Atriumflutter en atriumfibrilleren zie je veel minder vaak, en bij kinderen moet je bij een breedcomplex tachycardie altijd ook aan een ventriculaire tachycardie denken.
      </p>
    </div>
  )
}
