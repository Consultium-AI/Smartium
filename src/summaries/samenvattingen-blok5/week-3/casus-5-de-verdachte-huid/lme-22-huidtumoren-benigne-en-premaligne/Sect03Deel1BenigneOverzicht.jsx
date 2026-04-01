export default function Sect03Deel1BenigneOverzicht() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Deel 1: benigne huidtumoren</h2>
      <p>
        Benigne huidtumoren worden ingedeeld op basis van de cel waaruit de tumor ontstaat. De module maakt daarbij
        onderscheid tussen:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>keratinocyten en adnexen</li>
        <li>fibroblasten</li>
        <li>endotheelcellen</li>
        <li>vetcellen</li>
        <li>andere dermale cellen</li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Benigne huidtumoren naar cel van oorsprong
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Cel van oorsprong
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Voorbeelden
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kernkenmerken
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Keratinocyten en adnexen</td>
              <td className="px-4 py-3 align-top">
                Verruca seborrhoica, talgklierhyperplasie, syringomen, naevus sebaceus, epidermale cyste
              </td>
              <td className="px-4 py-3 align-top">Vaak papillomateuze, papuleuze of cystische laesies</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Fibroblasten</td>
              <td className="px-4 py-3 align-top">Keloïd, hypertrofisch litteken, fibroom, dermatofibroom</td>
              <td className="px-4 py-3 align-top">Bindweefselproliferatie; vaak verheven laesies</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Endotheelcellen</td>
              <td className="px-4 py-3 align-top">Angioma senilis, angiokeratomen, granuloma teleangiectaticum</td>
              <td className="px-4 py-3 align-top">Vaak rood van kleur doordat ze bloed bevatten</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Vetcellen</td>
              <td className="px-4 py-3 align-top">Lipoom</td>
              <td className="px-4 py-3 align-top">Subcutane, weke, elastische nodulus</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Andere dermale cellen</td>
              <td className="px-4 py-3 align-top">Xanthelasmata palpebrarum, neurofibromen</td>
              <td className="px-4 py-3 align-top">Bijvoorbeeld geel bij xanthelasma of huidkleurig bij neurofibroom</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
