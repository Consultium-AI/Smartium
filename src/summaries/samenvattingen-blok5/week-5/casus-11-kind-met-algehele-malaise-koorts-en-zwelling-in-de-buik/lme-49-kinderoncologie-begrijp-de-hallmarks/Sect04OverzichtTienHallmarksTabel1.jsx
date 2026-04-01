export default function Sect04OverzichtTienHallmarksTabel1() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Overzicht van de tien hallmarks</h2>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. De tien hallmarks of cancer</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Hallmark
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Korte uitleg
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">1. Aanhoudende groeisignalen</td>
              <td className="px-4 py-3 align-top">Kankercellen geven zichzelf signalen om te blijven groeien en delen.</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">2. Groeiremmende signalen ontwijken</td>
              <td className="px-4 py-3 align-top">Kankercellen negeren signalen die normaal celdeling afremmen.</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">3. Vernietiging door immuunsysteem ontwijken</td>
              <td className="px-4 py-3 align-top">Kankercellen ontsnappen aan herkenning en vernietiging door afweercellen.</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">4. Oneindig kunnen delen</td>
              <td className="px-4 py-3 align-top">Kankercellen kunnen hun delingsvermogen blijven behouden.</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">5. Tumor stimulerende ontsteking</td>
              <td className="px-4 py-3 align-top">Ontsteking in de omgeving van de tumor helpt de tumor groeien.</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">6. Weefsels binnendringen en uitzaaiing</td>
              <td className="px-4 py-3 align-top">Kankercellen kunnen invasief worden en metastasen vormen.</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">7. Energiehuishouding herprogrammeren</td>
              <td className="px-4 py-3 align-top">Kankercellen gebruiken energie op een andere manier dan normale cellen.</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">8. Celdood weerstaan</td>
              <td className="px-4 py-3 align-top">Kankercellen vermijden apoptose, dus geprogrammeerde celdood.</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">9. Genoominstabiliteit en mutatie</td>
              <td className="px-4 py-3 align-top">Kankercellen hebben een instabiel DNA en stapelen mutaties op.</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                10. Energiehuishouding herprogrammeren / ontstekingsactiviteit als extra invloed
              </td>
              <td className="px-4 py-3 align-top">De tumoromgeving speelt mee in het gedrag van de kanker.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
