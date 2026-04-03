export default function Sect03BasisWaterEnVolumebalans() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De basis van water- en volumebalans</h2>
      <p>
        De nieren kunnen urine sterk verdunnen of juist concentreren, maar er zit een grens aan beide kanten. De laagste urine-osmolaliteit die bereikt kan worden is ongeveer 40 mOsmol/kg, en de hoogste ongeveer 1200 mOsmol/kg. Dat betekent dat de nier een grote flexibiliteit heeft, maar niet alles kan compenseren.
      </p>
      <p>
        Een belangrijk idee is dat je geen vrij water kunt uitscheiden zonder opgeloste deeltjes. Wateruitscheiding vraagt altijd om osmolen in de urine. Daarom is de hoeveelheid opgeloste deeltjes die je binnenkrijgt van belang voor hoeveel water je uiteindelijk kwijt kunt raken.
      </p>
      <p>Wanneer kun je maximaal water uitscheiden?</p>
      <p>Voor maximale wateruitscheiding zijn drie dingen nodig:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>goede nierfunctie / goede GFR;</li>
        <li>geen ADH;</li>
        <li>voldoende osmolen om het water in de urine mee uit te scheiden.</li>
      </ul>
      <p>
        ADH staat voor antidiuretisch hormoon. Het zorgt juist voor waterresorptie in de nier. Als ADH hoog is, houdt het lichaam meer water vast.
      </p>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandachtsvraag: Waarom is ADH zo belangrijk?</p>
      <p className="mt-2">
        <span className="font-semibold">Mini-antwoord:</span>{' '}Omdat ADH ervoor zorgt dat water uit de urine wordt teruggeresorbeerd. Zonder ADH kan de nier juist veel meer water kwijt.
        </p>
      </div>

      <p>Wanneer kun je maximaal water vasthouden?</p>
      <p>
        Om water maximaal vast te houden, heb je in feite alles hierboven nodig, maar dan mét ADH. ADH remt dan de wateruitscheiding en helpt het lichaam water vast te houden.
      </p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 1. Kernvoorwaarden voor wateruitscheiding en waterretentie</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Situatie</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Nodig</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Maximaal water uitscheiden</td>
                <td className="px-4 py-3">goede nierfunctie/GFR, geen ADH, voldoende osmolen</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Maximaal water vasthouden</td>
                <td className="px-4 py-3">goede nierfunctie/GFR, wél ADH, voldoende osmolen</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
