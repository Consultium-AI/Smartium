export default function Sect08Hypoglykemie () {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hypoglykemie</h2>
      <p>
        Naast hyperglykemische ontregelingen bestaat er ook een andere acute noodsituatie:{' '}
        <strong className="text-slate-900 dark:text-slate-100">hypoglykemie</strong>. Bij diabetes kan dit alleen optreden ten gevolge van de behandeling. Het is een belangrijke verklaring waarom in de ABCDE-benadering de gedachte bestaat:{' '}
        <strong className="text-slate-900 dark:text-slate-100">“don’t ever forget glucose”</strong>.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Klachten en verschijnselen</h3>
      <p>Hypoglykemie kan zich uiten met:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>snelle hartslag;</li>
        <li>neurologische symptomen;</li>
        <li>honger;</li>
        <li>visusproblemen;</li>
        <li>transpireren;</li>
        <li>rillen;</li>
        <li>zwak voelen of flauwvallen.</li>
      </ul>
      <p>
        Bij ernstige hypoglykemie kan zelfs een <strong className="text-slate-900 dark:text-slate-100">hypoglykemisch coma</strong> ontstaan.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Behandeling van hypoglykemie</h3>
      <p>
        Hypoglykemie wordt behandeld door <strong className="text-slate-900 dark:text-slate-100">glucose te geven</strong>, eventueel in combinatie met <strong className="text-slate-900 dark:text-slate-100">glucagon</strong>.
      </p>
      <p>De keuze hangt af van het bewustzijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>bij een patiënt die nog veilig kan slikken, kan orale glucose worden gegeven;</li>
        <li>bij verminderde bewustzijn is orale toediening niet veilig;</li>
        <li>
          dan kies je voor <strong className="text-slate-900 dark:text-slate-100">glucose</strong> of{' '}
          <strong className="text-slate-900 dark:text-slate-100">glucagon</strong>.
        </li>
      </ul>
      <p>
        Bij ernstige hypoglykemie met verminderd bewustzijn is orale druivensuiker dus{' '}
        <strong className="text-slate-900 dark:text-slate-100">geen goede keuze</strong>, omdat de patiënt zich kan verslikken.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 4. Behandeling van hypoglykemie in het kort
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Situatie</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Passende behandeling</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">Patiënt is goed wakker en kan veilig slikken</td>
              <td className="p-3 align-top">Glucose oraal, daarna een snack of kleine maaltijd</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Patiënt heeft verminderd bewustzijn</td>
              <td className="p-3 align-top">Glucose of glucagon, niet oraal</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
