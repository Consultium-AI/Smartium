export default function Sect07Maagzuurremmers() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Vergelijking van maagzuurremmers</h2>
      <p>
        Maagzuurremmers worden veel gebruikt. Er zijn twee belangrijke groepen:{' '}
        <strong className="text-slate-900 dark:text-slate-100">H2-receptorantagonisten</strong> en{' '}
        <strong className="text-slate-900 dark:text-slate-100">protonpompremmers (PPI&apos;s)</strong>.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">H2-receptorantagonisten</h3>
      <p>
        Deze middelen remmen de <strong className="text-slate-900 dark:text-slate-100">H2-receptor</strong> op de{' '}
        {'pari\u00E8tale cel'}. Ze werken dus via de{' '}
        <strong className="text-slate-900 dark:text-slate-100">basolaterale zijde</strong>. Daardoor remmen ze het
        signaal dat tot zuursecretie leidt.
      </p>
      <p>Ze zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          ineffectief in de <strong className="text-slate-900 dark:text-slate-100">cefale fase</strong>;
        </li>
        <li>
          werkzaam op de signaalroute van histamine;
        </li>
        <li>ook van invloed op de intrinsic factor-secretie.</li>
      </ul>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Protonpompremmers</h3>
      <p>
        PPI&apos;s, zoals <strong className="text-slate-900 dark:text-slate-100">omeprazol</strong>, remmen direct
        de <strong className="text-slate-900 dark:text-slate-100">H+/K+-ATPase</strong>. Ze werken via de{' '}
        <strong className="text-slate-900 dark:text-slate-100">apicale zijde</strong> van de{' '}
        {'pari\u00E8tale cel'}. Ze zijn prodrugs: ze worden pas actief in het zure milieu van de secretoire vesikels van
        de {'pari\u00E8tale cel'}. Daardoor is hun werking sterk bij lage pH. De pomp wordt pas weer functioneel als er
        nieuwe protonpompen worden aangemaakt.
      </p>
      <p>PPI&apos;s werken:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          ook in de <strong className="text-slate-900 dark:text-slate-100">cefale fase</strong>;
        </li>
        <li>
          direct op de eindstap van de zuursecretie;
        </li>
        <li>niet of nauwelijks op de intrinsic factor-secretie.</li>
      </ul>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          {'Tabel 5. Verschil tussen H2-antagonisten en PPI\u2019s'}
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Eigenschap
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  H2-antagonist
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  PPI
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Aangrijpingspunt</td>
                <td className="px-4 py-3 align-top">H2-receptor</td>
                <td className="px-4 py-3 align-top">H+/K+-ATPase</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Locatie van werking</td>
                <td className="px-4 py-3 align-top">basolateraal</td>
                <td className="px-4 py-3 align-top">apicaal</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Effect op intrinsic factor</td>
                <td className="px-4 py-3 align-top">remt</td>
                <td className="px-4 py-3 align-top">geen effect</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Effect in cefale fase</td>
                <td className="px-4 py-3 align-top">ineffectief</td>
                <td className="px-4 py-3 align-top">ook effectief</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Afhankelijk van pH</td>
                <td className="px-4 py-3 align-top">nee</td>
                <td className="px-4 py-3 align-top">ja, werking sterker bij lage pH</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
