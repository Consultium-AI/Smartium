export default function Sect07BiologicalsMonoklonaleAntistoffen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Biologicals: gerichte immuunmodulatie
      </h2>
      <p>
        Met meer inzicht in ontstekingsprocessen zijn biologicals ontwikkeld: eiwitten of antilichamen die heel gericht
        ingrijpen in het immuunsysteem, vaak op het niveau van cytokinen of hun receptoren. Dat maakt ze effectiever en
        specifieker dan veel oudere middelen, maar ook deze middelen kunnen duidelijke bijwerkingen geven.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Monoklonale antistoffen: naamgeving en herkomst
      </h3>
      <p>
        Monoklonale antistoffen die bij de mens worden gebruikt, kunnen verschillende herkomst hebben. Dat zie je vaak
        terug in de naam.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 2. Herkomst van monoklonale antistoffen
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Naamdeel
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Betekenis
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Voorbeeld
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">o</td>
              <td className="px-4 py-3 align-top">afkomstig van muizen</td>
              <td className="px-4 py-3 align-top">muromonab</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">xi</td>
              <td className="px-4 py-3 align-top">chimeer: variabele delen van muis, constante delen mens</td>
              <td className="px-4 py-3 align-top">rituximab, cetuximab</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">zu</td>
              <td className="px-4 py-3 align-top">
                gehumaniseerd: grotendeels menselijk, alleen bindingsregio’s uit de muis
              </td>
              <td className="px-4 py-3 align-top">pertuzumab, alemtuzumab, pembrolizumab</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">u</td>
              <td className="px-4 py-3 align-top">volledig humaan</td>
              <td className="px-4 py-3 align-top">golimumab</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">tu</td>
              <td className="px-4 py-3 align-top">staat voor antitumoractiviteit, dus immunomodulerend</td>
              <td className="px-4 py-3 align-top">toepassing in oncologie</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Een chimeer antistof heeft dus muis-variabele gebieden en een menselijk constant deel. Een gehumaniseerd antistof
        is nog verder aangepast en lijkt al veel meer op een menselijk eiwit. Dat is gunstig, omdat de patiënt dan minder
        snel zelf antistoffen tegen het geneesmiddel maakt.
      </p>
    </div>
  )
}
