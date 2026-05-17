export default function Sect08ZoutEnWatertransportInDeDunneDarm() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Zout- en watertransport in de dunne darm</h2>
      <p>
        Een goede hydratatie van het darmlumen is essentieel voor passage, vertering en opname. Dagelijks passeert ongeveer 9 liter water de darm. Slechts een klein deel verlaat het lichaam via
        de feces; ongeveer 98% wordt weer opgenomen. Verstoring van deze balans kan leiden tot obstipatie of diarree.
      </p>
      <p>
        De dunne darm is georganiseerd in crypten en villi. De crypt is het secretoire deel: daar vindt secretie van zout en water plaats. De villus is het absorptieve deel: daar worden zout en
        water opgenomen. Zo ontstaat een recirculatiemodel.
      </p>
      <p>
        Aan de cryptkant zit op het apicale membraan het CFTR-kanaal. Dat is een chloridekanaal. Als CFTR actief is, verlaat Cl⁻ de cel en volgt Na⁺ en water via het “lek-epitheel”. Daardoor
        ontstaat isotone zout- en watersecretie.
      </p>
      <p>
        Aan de villuskant worden Na⁺ en Cl⁻ weer opgenomen met specifieke transporters. Samen met NaCl wordt ook water iso-osmotisch opgenomen. Daarbij zijn de apicale transporters en de
        basolaterale Na/K-ATPase op elkaar afgestemd. Daardoor loopt opname in de villus en secretie in de crypt normaal netjes in evenwicht.
      </p>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 4. Zout- en watertransport in crypt en villus</h3>
        <div className="overflow-x-auto mt-4 rounded-xl border border-emerald-200/80 dark:border-emerald-600/40">
          <table className="w-full text-sm border-collapse bg-white dark:bg-slate-900/50">
            <thead>
              <tr className="bg-emerald-100 dark:bg-emerald-900/40">
                <th className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 text-left font-semibold text-emerald-900 dark:text-emerald-100">
                  Deel van het epitheel
                </th>
                <th className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 text-left font-semibold text-emerald-900 dark:text-emerald-100">Hoofdfunctie</th>
                <th className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 text-left font-semibold text-emerald-900 dark:text-emerald-100">
                  Belangrijke transporters
                </th>
                <th className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 text-left font-semibold text-emerald-900 dark:text-emerald-100">Effect</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">Crypt</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Secretie</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">CFTR</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Cl⁻-secretie, water volgt</td>
              </tr>
              <tr className="bg-emerald-50/70 dark:bg-emerald-950/30">
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">Villus</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Absorptie</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Na⁺/Cl⁻-opname, Na/K-ATPase</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Opname van zout en water</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p>
        Bij activatie van CFTR in de crypt wordt secretie gestimuleerd en wordt opname in de villus geremd. Bij remming van CFTR of verstoring van dit systeem kan het omgekeerde gebeuren.
      </p>
    </div>
  )
}
