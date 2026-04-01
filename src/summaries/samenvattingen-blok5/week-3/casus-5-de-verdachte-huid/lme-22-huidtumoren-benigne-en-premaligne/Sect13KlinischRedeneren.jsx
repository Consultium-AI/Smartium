export default function Sect13KlinischRedeneren() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Klinisch redeneren bij vergelijkbare huidafwijkingen</h2>
      <p>
        Sommige huidafwijkingen lijken op elkaar. Dan helpt het om niet alleen te kijken, maar ook systematisch te
        vergelijken op PROVOKE.
      </p>
      <p>Bij erythemateuze, schilferende of ruwe laesies is de differentiaaldiagnose breed. Typische onderscheidende eigenschappen zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>(Superficieel groeiend) basaalcelcarcinoom: glanzend</li>
        <li>Eczeem: jeukend</li>
        <li>Mycose: randactiviteit</li>
        <li>Actinische keratose: ruw</li>
        <li>Morbus Bowen: plaque</li>
        <li>Plaveiselcelcarcinoom: pijnlijk</li>
        <li>Psoriasis: positief kaarsvetfenomeen</li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 5. Belangrijke onderscheidende kenmerken
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Diagnose
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Meest onderscheidende eigenschap
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Superficieel groeiend basaalcelcarcinoom</td>
              <td className="px-4 py-3 align-top">Glanzend</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Eczeem</td>
              <td className="px-4 py-3 align-top">Jeukend</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Mycose</td>
              <td className="px-4 py-3 align-top">Randactiviteit</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Actinische keratose</td>
              <td className="px-4 py-3 align-top">Ruw</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Morbus Bowen</td>
              <td className="px-4 py-3 align-top">Plaque</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Plaveiselcelcarcinoom</td>
              <td className="px-4 py-3 align-top">Pijnlijk</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Psoriasis</td>
              <td className="px-4 py-3 align-top">Positief kaarsvetfenomeen</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
