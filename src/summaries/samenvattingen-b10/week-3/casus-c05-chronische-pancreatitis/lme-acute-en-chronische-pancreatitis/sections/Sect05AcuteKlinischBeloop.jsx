export default function Sect05AcuteKlinischBeloop () {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Klinische presentatie en beloop</h3>
      <p>
        Patiënten presenteren zich meestal met <strong className="text-slate-900 dark:text-slate-100">plots ontstane, hevige bovenbuikpijn</strong>. De pijn zit vaak in het epigastrium en straalt karakteristiek uit naar de rug. De pijn kan continu aanwezig zijn en erger worden bij liggen op de rug; vooroverbuigen geeft soms verlichting.
      </p>
      <p>Misselijkheid en braken komen vaak voor. Afhankelijk van de ernst kunnen patiënten ook koorts, zweten en tekenen van circulatoire instabiliteit hebben. Het beeld kan sterk variëren: sommige patiënten hebben relatief milde klachten, terwijl anderen snel ernstig ziek worden.</p>
      <p>Het ziektebeloop kent grofweg twee fasen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Vroege fase</strong>: meestal de eerste week, met een centrale rol voor SIRS. Ontstekingsmediatoren kunnen leiden tot stoornissen in de circulatie en in de functie van organen zoals longen en nieren.
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Late fase</strong>: weken tot maanden later, vooral bij ernstige acute pancreatitis. Dan kunnen persisterend orgaanfalen en lokale complicaties optreden.
        </li>
      </ul>
      <p>
        <strong className="text-slate-900 dark:text-slate-100">Tabel 2. Ernst van acute pancreatitis volgens de Revised Atlanta Classification</strong>
      </p>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Ernst</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Definitie</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">Mild</td>
              <td className="p-3 align-top">Geen lokale of systemische complicaties en geen orgaanfalen</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Matig ernstig</td>
              <td className="p-3 align-top">Lokale of systemische complicaties en/of kortdurend orgaanfalen van minder dan 48 uur</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Ernstig</td>
              <td className="p-3 align-top">Lokale of systemische complicaties met persisterend, vaak multiorgaanfalen van langer dan 48 uur</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Lokale complicaties zijn bijvoorbeeld <strong className="text-slate-900 dark:text-slate-100">(peri)pancreatische vochtcollecties</strong>, <strong className="text-slate-900 dark:text-slate-100">splenische of portale trombose</strong>, <strong className="text-slate-900 dark:text-slate-100">intestinale ischemie</strong> en <strong className="text-slate-900 dark:text-slate-100">maaguitgangsobstructie</strong>. Systemische complicaties zijn vooral het gevolg van de ontstekingsreactie van het hele lichaam en uiten zich met orgaanfalen.</p>
    </div>
  )
}
