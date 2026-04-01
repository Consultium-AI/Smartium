export default function Sect04DrieHoofdoorzaken() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De drie hoofdoorzaken van cardiovasculaire syncope</h2>
      <p>De drie hoofdcategorieën van cardiovasculaire syncope zijn vasculair, obstructief en aritmisch.</p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 1. De drie hoofdoorzaken van cardiovasculaire syncope</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Categorie</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kernmechanisme</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kenmerkende voorbeelden</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Vasculair (reflex)</td>
              <td className="px-4 py-3 align-top">
                De bloeddruk “zakt weg” door een reflex, vaak met vasodilatatie en bradycardie
              </td>
              <td className="px-4 py-3 align-top">Vasovagale syncope, carotissinussyndroom, orthostatische hypotensie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Obstructief (blokkade)</td>
              <td className="px-4 py-3 align-top">Een fysieke blokkade in of nabij het hart belemmert de cardiac output</td>
              <td className="px-4 py-3 align-top">
                Aortastenose, hypertrofische cardiomyopathie, massale longembolie, atriaal myxoom
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Aritmie (pomp-falen)</td>
              <td className="px-4 py-3 align-top">Het hart klopt te traag of te snel om effectief bloed rond te pompen</td>
              <td className="px-4 py-3 align-top">
                Stokes-Adams-aanval, diepe sinusbradycardie, supraventriculaire tachycardie, ventriculaire tachycardie, torsades de pointes
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
