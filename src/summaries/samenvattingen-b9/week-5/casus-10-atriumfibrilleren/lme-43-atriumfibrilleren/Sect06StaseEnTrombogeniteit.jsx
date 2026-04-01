export default function Sect06StaseEnTrombogeniteit() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Stase en trombogeniteit</h2>
      <p>
        Door het wegvallen van de atriale contractie stroomt het bloed slechter door, vooral in het linker hartoor (left atrial appendage). Daar ontstaat stase, oftewel bloedstilstand. Volgens de triade van Virchow is stase een belangrijke factor voor trombusvorming. De andere twee factoren zijn endotheelbeschadiging en hypercoagulabiliteit.
      </p>
      <p>
        In AF kunnen lokaal stollingsfactoren geactiveerd raken, waardoor fibrine-rijke trombi ontstaan. Als zo’n trombus losschiet, kan die via de linker ventrikel en de aorta naar de hersenen emboliseren. Dat veroorzaakt vaak een ischemisch CVA. AF verhoogt het risico op een beroerte sterk.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Triade van Virchow bij AF</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Component</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Betekenis bij AF</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Stase</td>
              <td className="px-4 py-3 align-top">Slechte doorstroming in vooral het linker hartoor</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Endotheelbeschadiging</td>
              <td className="px-4 py-3 align-top">Wandbeschadiging door atriale dilatatie en rek</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Hypercoagulabiliteit</td>
              <td className="px-4 py-3 align-top">Verhoogde stollingsneiging, vaak bij inflammatoire toestand</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
