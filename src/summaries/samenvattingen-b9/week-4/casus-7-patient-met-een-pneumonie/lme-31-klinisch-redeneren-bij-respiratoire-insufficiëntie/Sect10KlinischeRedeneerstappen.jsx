export default function Sect10KlinischeRedeneerstappen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Klinische redeneerstappen: het patroon herkennen</h2>
      <p>
        In de praktijk is het belangrijk om het mechanisme achter respiratoire insufficiëntie te herkennen. Dezelfde klacht, zoals dyspneu of lage saturatie, kan namelijk door verschillende problemen komen. Hieronder staan de belangrijkste patronen op een rij.
      </p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 2. Kernverschillen tussen de belangrijkste mechanismen</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Mechanisme</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kernprobleem</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Typische gevolgen</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Voorbeeld</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top font-semibold">Dode ruimte</td>
                <td className="px-4 py-3 align-top">wel ventilatie, geen perfusie</td>
                <td className="px-4 py-3 align-top">vooral snelle ademhaling om CO₂ en pH te compenseren</td>
                <td className="px-4 py-3 align-top">longembolie</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top font-semibold">Shunt</td>
                <td className="px-4 py-3 align-top">wel perfusie, geen ventilatie</td>
                <td className="px-4 py-3 align-top">desaturatie, zuurstof geeft beperkt effect</td>
                <td className="px-4 py-3 align-top">pneumonie, pneumothorax, longoedeem</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top font-semibold">Diffusiestoornis</td>
                <td className="px-4 py-3 align-top">membraanprobleem</td>
                <td className="px-4 py-3 align-top">slechtere gaswisseling, zuurstof helpt vaak wel</td>
                <td className="px-4 py-3 align-top">fibrose, COPD, silicose, asbestose</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top font-semibold">Hypoventilatie</td>
                <td className="px-4 py-3 align-top">te weinig lucht in alveoli</td>
                <td className="px-4 py-3 align-top">CO₂-stijging en mogelijke shunting</td>
                <td className="px-4 py-3 align-top">spierziekte, propofol</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
