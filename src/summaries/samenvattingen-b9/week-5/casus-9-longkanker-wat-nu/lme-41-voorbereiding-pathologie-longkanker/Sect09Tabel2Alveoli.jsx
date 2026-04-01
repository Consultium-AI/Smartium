export default function Sect09Tabel2Alveoli() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Tabel 2. Belangrijke cellen in de alveoli</h2>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Celform</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kenmerk / functie</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Pneumocyt type 1</td>
              <td className="px-4 py-3 align-top">Bedekt groot deel van het alveolaire oppervlak; belangrijk voor gaswisseling</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Pneumocyt type 2</td>
              <td className="px-4 py-3 align-top">Maakt surfactant; kan uitgroeien tot type 1</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Alveolaire macrofaag</td>
              <td className="px-4 py-3 align-top">Ruimt deeltjes en celresten op</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Mesotheelcel</td>
              <td className="px-4 py-3 align-top">Bekleedt seroze vliezen zoals pleura en peritoneum</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
