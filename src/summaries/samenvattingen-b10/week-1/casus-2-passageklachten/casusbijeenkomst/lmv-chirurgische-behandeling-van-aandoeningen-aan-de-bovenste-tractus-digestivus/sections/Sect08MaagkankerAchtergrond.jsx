export default function Sect08MaagkankerAchtergrond() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Maagkanker: achtergrond</h2>
      <p>
        Bij maagkanker is ongeveer 50% van de patiënten bij diagnose al synchroon gemetastaseerd. De meest voorkomende uitzaaiingslocaties zijn:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>buikvlies / peritoneum;</li>
        <li>extra-regionale lymfeklieren;</li>
        <li>lever;</li>
        <li>bot;</li>
        <li>long;</li>
        <li>hersenen.</li>
      </ul>
      <p>Peritoneale metastasen zijn op CT lastig te zien. Daarom is aanvullende diagnostiek belangrijk.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 pt-2">
        Tabel 4. Meest voorkomende metastaselocaties bij maagkanker
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Locatie</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Frequentie</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">Buikvlies / peritoneum</td>
              <td className="p-3 align-top">60%</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Extra-regionale lymfeklieren</td>
              <td className="p-3 align-top">33%</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Lever</td>
              <td className="p-3 align-top">32%</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Bot</td>
              <td className="p-3 align-top">11%</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Long</td>
              <td className="p-3 align-top">9%</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Hersen</td>
              <td className="p-3 align-top">1%</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Overig</td>
              <td className="p-3 align-top">11%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
