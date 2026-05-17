export default function Sect09EnzymenActiefOfZymogeen () {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Waarom zijn sommige enzymen wél direct actief?
      </h2>
      <p>
        Niet alle pancreasenzymen worden als zymogeen uitgescheiden. Voor sommige enzymen is directe secretie logisch.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 4. Enzymen die actief zijn of als zymogeen worden uitgescheiden
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Enzymgroep</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Secretievorm</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Waarom</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">Proteasen</td>
              <td className="p-3 align-top">Zymogeen</td>
              <td className="p-3 align-top">Ze zouden anders de pancreas zelf kunnen beschadigen</td>
            </tr>
            <tr>
              <td className="p-3 align-top">α-Amylase</td>
              <td className="p-3 align-top">Actief</td>
              <td className="p-3 align-top">Er is weinig tot geen verteerbaar koolhydraat in de pancreas</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Lipasen</td>
              <td className="p-3 align-top">Actief of functioneel afhankelijk van galzouten/colipase</td>
              <td className="p-3 align-top">Ze hebben direct of indirect galzouten nodig voor optimale activiteit</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Een belangrijk inzicht is dus dat <strong className="text-slate-900 dark:text-slate-100">lipasen</strong> niet
        problematisch zijn in de pancreas, omdat hun optimale werking afhankelijk is van galzouten en/of colipase. In
        de pancreas zelf zijn weinig bruikbare vetten aanwezig. Voor{' '}
        <strong className="text-slate-900 dark:text-slate-100">α-amylase</strong> geldt iets vergelijkbaars: daar zijn
        weinig te verteren koolhydraten aanwezig in de klier zelf.
      </p>
    </div>
  )
}
