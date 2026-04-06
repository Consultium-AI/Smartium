export default function Sect08TestmethodenTypeIEnTabel3() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Testmethoden bij type I-reacties</h2>
      <p>
        Voor type I-allergie zijn verschillende testmethoden beschikbaar. Sommige testen zoeken naar een algemene
        allergische aanleg, andere richten zich op een specifiek allergeen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 3. Testmethoden bij type I-allergie
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Test
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Toepassing
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Totaal IgE</td>
              <td className="px-4 py-3 align-top">Algemeen beeld van allergische aanleg</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Totaal eosinofielen
              </td>
              <td className="px-4 py-3 align-top">Ondersteunend bij atopie/allergie</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">RAST / Phadiatop</td>
              <td className="px-4 py-3 align-top">Screening, bijvoorbeeld inhalatiemix</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Priktest</td>
              <td className="px-4 py-3 align-top">Snelle huidtest op directe reactie</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Intracutane test</td>
              <td className="px-4 py-3 align-top">Gevoeligere huidtest</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Provocatietesten</td>
              <td className="px-4 py-3 align-top">Nasaal, conjunctivaal, bronchiaal, oraal of cutaan</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Een priktest is een eenvoudige huidtest waarbij een klein beetje allergeen oppervlakkig in de huid wordt
        gebracht. Een intracutane test gaat dieper en is gevoeliger. Daarnaast zijn er provocatietesten, waarbij een
        reactie wordt uitgelokt op de plek waar klachten verwacht worden, bijvoorbeeld neus, ogen, bronchiën, huid of via
        orale toediening.
      </p>
    </div>
  )
}
