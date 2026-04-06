export default function Sect11KernlogicaTabel3() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Overzicht van de kernlogica</h2>
      <p>
        De module draait uiteindelijk om het correct interpreteren van bevindingen. Niet alles wat op vasculitis lijkt, is
        ook echt primaire vasculitis. Daarom moet je onderscheid maken tussen kenmerken die harder bewijs geven en
        kenmerken die meer ondersteunend zijn.
      </p>

      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <caption className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
            Tabel 3. Praktische denkwijze
          </caption>
          <thead className="bg-slate-100 dark:bg-slate-800/80">
            <tr>
              <th className="px-4 py-2 font-semibold text-slate-900 dark:text-slate-100">Vraag</th>
              <th className="px-4 py-2 font-semibold text-slate-900 dark:text-slate-100">Waar let je op?</th>
              <th className="px-4 py-2 font-semibold text-slate-900 dark:text-slate-100">Betekenis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr>
              <td className="px-4 py-2 align-top">Is er vaatschade?</td>
              <td className="px-4 py-2 align-top">
                Angiocentrisme, destructie, fibrine, leukocytoclasie, erytrocytenextravasatie
              </td>
              <td className="px-4 py-2 align-top">Er zijn kenmerken die passen bij vasculitisachtig letsel</td>
            </tr>
            <tr>
              <td className="px-4 py-2 align-top">Zijn de kenmerken primair?</td>
              <td className="px-4 py-2 align-top">Vooral vaatwanddestructie en fibrinoïde necrose</td>
              <td className="px-4 py-2 align-top">Sterke aanwijzing voor primaire vasculitis</td>
            </tr>
            <tr>
              <td className="px-4 py-2 align-top">Kan het secundair zijn?</td>
              <td className="px-4 py-2 align-top">Context zoals ulcus, neutrofiele dermatose, insectensteek, herpes</td>
              <td className="px-4 py-2 align-top">Dan kan het beeld een secundair verschijnsel zijn</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
