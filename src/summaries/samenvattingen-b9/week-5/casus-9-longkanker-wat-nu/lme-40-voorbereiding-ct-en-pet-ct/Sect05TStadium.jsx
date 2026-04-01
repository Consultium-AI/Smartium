export default function Sect05TStadium() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Het T-stadium: primaire longtumor</h2>
      <p>
        Het <span className="font-semibold">T-stadium</span> beschrijft de <span className="font-semibold">grootte van de primaire tumor</span> en de mate van <span className="font-semibold">lokale invasie</span>. Hoe groter de tumor en/of hoe meer omliggende structuren zijn aangedaan, hoe hoger het T-stadium.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 2. T-stadium bij longkanker</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">T-stadium</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Grootte / criterium</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kenmerk</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">T1</td>
              <td className="px-4 py-3 align-top">≤ 3 cm</td>
              <td className="px-4 py-3 align-top">Omgeven door long, niet in de hoofdbronchus</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">T2</td>
              <td className="px-4 py-3 align-top">{'>'} 3–5 cm</td>
              <td className="px-4 py-3 align-top">Ingroei in viscerale pleura en/of tumor bij hoofdbronchus zonder invasie van de carina</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">T3</td>
              <td className="px-4 py-3 align-top">{'>'} 5–7 cm</td>
              <td className="px-4 py-3 align-top">Ingroei in thoraxwand en/of pericard, of tweede tumor in dezelfde kwab</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">T4</td>
              <td className="px-4 py-3 align-top">{'>'} 7 cm</td>
              <td className="px-4 py-3 align-top">Ingroei in mediastinum, hart, carina, oesofagus en/of wervel</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">T1</h3>
      <p>
        T1 is een tumor van <span className="font-semibold">3 cm of kleiner</span>, zonder lokale invasie. De tumor ligt in het longweefsel en is niet in de hoofdbronchus gelegen.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">T2</h3>
      <p>
        T2 betreft een tumor van <span className="font-semibold">meer dan 3 tot 5 cm</span> of een tumor met ingroei in de <span className="font-semibold">viscerale pleura</span> of in de <span className="font-semibold">hoofdbronchus</span>, zolang er geen invasie van de <span className="font-semibold">carina</span> is.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">T3</h3>
      <p>
        T3 is een tumor van <span className="font-semibold">meer dan 5 tot 7 cm</span> of een tumor met ingroei in de <span className="font-semibold">thoraxwand</span> of het <span className="font-semibold">pericard</span>. Ook een <span className="font-semibold">aparte tumor in dezelfde kwab</span> valt hieronder.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">T4</h3>
      <p>
        T4 is een tumor van <span className="font-semibold">meer dan 7 cm</span> of een tumor met doorgroei in omliggende structuren zoals het <span className="font-semibold">mediastinum</span>, <span className="font-semibold">hart</span>, <span className="font-semibold">carina</span>, <span className="font-semibold">oesofagus</span> of een <span className="font-semibold">wervel</span>. Ook een aparte tumor in een <span className="font-semibold">andere ipsilaterale kwab</span> hoort hierbij.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Praktische meetregel</h3>
      <p>
        Bij de T-classificatie meet je de <span className="font-semibold">langste diameter van de solide component</span>. De locatie en de mate van invasie zijn net zo belangrijk als de grootte.
      </p>
    </div>
  )
}
