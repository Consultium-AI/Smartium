export default function Sect05DeBelangrijksteMedicamenteuzeOpties() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De belangrijkste medicamenteuze opties</h2>
      <p>
        Bij obesitas worden verschillende middelen gebruikt. De belangrijkste zijn <strong className="text-slate-900 dark:text-slate-100">orlistat</strong>, <strong className="text-slate-900 dark:text-slate-100">naltrexon/bupropion</strong>, <strong className="text-slate-900 dark:text-slate-100">liraglutide</strong>, <strong className="text-slate-900 dark:text-slate-100">semaglutide</strong> en <strong className="text-slate-900 dark:text-slate-100">tirzepatide</strong>. Ze verschillen in werking, effect op gewicht, bijwerkingen en vergoeding.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Overzicht van de belangrijkste medicamenteuze obesitasbehandelingen</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Middel</th>
              <th className="px-4 py-3 font-semibold">Werkingsmechanisme</th>
              <th className="px-4 py-3 font-semibold">Gewichtsverlies</th>
              <th className="px-4 py-3 font-semibold">Andere effecten</th>
              <th className="px-4 py-3 font-semibold">Belangrijkste bijwerkingen</th>
              <th className="px-4 py-3 font-semibold">Vergoeding</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Orlistat</td>
              <td className="px-4 py-3 align-top">Remt vetopname in de darm</td>
              <td className="px-4 py-3 align-top">Beperkt; minder dan de GLP-1/GIP-middelen</td>
              <td className="px-4 py-3 align-top">Minder vetabsorptie</td>
              <td className="px-4 py-3 align-top">Maag-darmklachten, vooral vettere ontlasting</td>
              <td className="px-4 py-3 align-top">Afhankelijk van criteria</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Naltrexon/bupropion</td>
              <td className="px-4 py-3 align-top">Werkt centraal op eetlust en beloningssysteem</td>
              <td className="px-4 py-3 align-top">Matig</td>
              <td className="px-4 py-3 align-top">Kan eetlust verminderen</td>
              <td className="px-4 py-3 align-top">Misselijkheid, hoofdpijn, andere centrale bijwerkingen</td>
              <td className="px-4 py-3 align-top">Afhankelijk van criteria</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Liraglutide 3 mg</td>
              <td className="px-4 py-3 align-top">GLP-1-agonist</td>
              <td className="px-4 py-3 align-top">Meer dan orlistat en naltrexon/bupropion</td>
              <td className="px-4 py-3 align-top">Vertraagt maaglediging, vermindert eetlust</td>
              <td className="px-4 py-3 align-top">Maag-darmklachten</td>
              <td className="px-4 py-3 align-top">Afhankelijk van criteria</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Semaglutide 2,4 mg</td>
              <td className="px-4 py-3 align-top">GLP-1-agonist</td>
              <td className="px-4 py-3 align-top">Sterk gewichtsverlies</td>
              <td className="px-4 py-3 align-top">Vermindert eetlust, vertraagt maaglediging</td>
              <td className="px-4 py-3 align-top">Maag-darmklachten</td>
              <td className="px-4 py-3 align-top">Afhankelijk van criteria</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Tirzepatide</td>
              <td className="px-4 py-3 align-top">Werkt op GIP/GLP-1-systeem</td>
              <td className="px-4 py-3 align-top">Zeer sterk gewichtsverlies</td>
              <td className="px-4 py-3 align-top">Sterke invloed op eetlust en stofwisseling</td>
              <td className="px-4 py-3 align-top">Maag-darmklachten</td>
              <td className="px-4 py-3 align-top">Afhankelijk van criteria</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
