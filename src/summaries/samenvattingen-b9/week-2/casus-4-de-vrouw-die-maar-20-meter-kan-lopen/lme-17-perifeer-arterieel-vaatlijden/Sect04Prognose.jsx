export default function Sect04Prognose() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Prognose van claudicatio en kritieke ischemie</h2>
      <p>
        De prognose verschilt duidelijk tussen claudicatio en kritieke ischemie. Bij claudicatio blijft het beeld vaak stabiel, maar een deel van de patiënten verslechtert. Kritieke ischemie heeft een veel slechtere prognose.
      </p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 2. Prognose bij PAV</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Situatie</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Verloop</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Claudicatio</td>
                <td className="px-4 py-3">75% stabiel, 20% progressieve claudicatio, 5% kritieke ischemie</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Kritieke ischemie</td>
                <td className="px-4 py-3">25% amputatie, 50% levend met 2 benen, 25% cardiovasculaire sterfte</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>De 5-jaarssterfte is:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>20% bij claudicatio;</li>
        <li>50% bij kritieke ischemie.</li>
      </ul>
      <p>Ook is PAV klinisch belangrijk omdat patiënten, vergeleken met leeftijdsgenoten, een verhoogd risico hebben op:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>ischemische hartziekte;</li>
        <li>beroerte;</li>
        <li>en overlijden.</li>
      </ul>
    </div>
  )
}
