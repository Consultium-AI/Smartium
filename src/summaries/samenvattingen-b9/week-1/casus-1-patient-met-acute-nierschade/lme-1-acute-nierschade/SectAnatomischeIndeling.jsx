export default function SectAnatomischeIndeling() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De anatomische indeling: prerenaal, renaal en postrenaal</h2>
      <p>
        Bij acute nierschade is een anatomische indeling in prerenaal, renaal en postrenaal heel handig. Je kunt het simpel onthouden als:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>prerenaal = probleem met de doorbloeding/perfusie van de nier;</li>
        <li>renaal = probleem in de nier zelf;</li>
        <li>postrenaal = probleem met de afvoer van urine.</li>
      </ul>
      <p>
        Die indeling is niet altijd strak of zwart-wit, maar ze helpt wel enorm bij diagnostiek en behandeling. De vraag die je steeds opnieuw stelt is eigenlijk: krijgt de nier te weinig bloed, is de nier zelf beschadigd, of kan de urine niet weg?
      </p>
      <p className="font-medium text-slate-800 dark:text-slate-200">Tabel 2. Anatomische indeling van acute nierschade</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Categorie</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Waar zit het probleem?</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kernidee</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-medium">Prerenaal</td>
              <td className="px-4 py-3">Vóór de nier / buiten de nier zelf</td>
              <td className="px-4 py-3">De nier krijgt te weinig effectieve doorbloeding of de autoregulatie is verstoord</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-medium">Renaal</td>
              <td className="px-4 py-3">In de nier zelf</td>
              <td className="px-4 py-3">Er is echte intrinsieke nierschade in glomerulus, tubulus, interstitium of microvasculatuur</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-medium">Postrenaal</td>
              <td className="px-4 py-3">Ná de nier</td>
              <td className="px-4 py-3">Er is obstructie van de urineafvoer</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De reden dat deze indeling zo belangrijk is, is dat de behandeling volledig afhangt van de oorzaak.
      </p>
    </div>
  )
}
