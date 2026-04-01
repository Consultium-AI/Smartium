export default function Sect05EndotheelRustEnNaBeschadiging() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Endotheel in rust en na beschadiging</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Endotheel in rust
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Endotheel na beschadiging
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Barrière tussen bloedbaan en subendotheel</td>
              <td className="px-4 py-3 align-top">Werkt stollingsbevorderend</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Geeft t-PA vrij (tissue-plasminogeen activator)</td>
              <td className="px-4 py-3 align-top">Geeft Von Willebrand factor vrij</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Werkt antistollend</td>
              <td className="px-4 py-3 align-top">Geeft factor VIII vrij</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Factor VIII en Von Willebrand factor zijn beide essentieel in het hemostaseproces.</p>
      <p>
        Aandacht-vraag: Wat verandert er aan het endotheel als het beschadigd raakt?{'  '}
        Mini-antwoord: Het gaat minder antistollend werken en juist stoffen afgeven die stolling bevorderen.
      </p>
    </div>
  )
}
