export default function Sect02Inleiding() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Inleiding: drie auto-immuun gemedieerde leverziekten</h2>
      <p>
        Bij auto-immuun gemedieerde leverziekten richt het immuunsysteem zich op onderdelen van de lever of galwegen. Dat geeft chronische ontsteking, schade en uiteindelijk
        risico op fibrose en cirrose. De drie belangrijkste ziektebeelden in deze samenvatting zijn heel verschillend, maar hebben ook duidelijke overeenkomsten.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">PBC</strong> richt zich vooral op de <strong className="text-slate-900 dark:text-slate-100">kleine intrahepatische galwegen</strong>.
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">PSC</strong> geeft ontsteking en sclerose van de{' '}
          <strong className="text-slate-900 dark:text-slate-100">intra- en extrahepatische galwegen</strong>.
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">AIH</strong> richt zich op de <strong className="text-slate-900 dark:text-slate-100">hepatocyten zelf</strong>.
        </li>
      </ul>
      <p>Een handige eerste denkstap is daarom: zit het probleem vooral in de galwegen, of juist in de levercellen?</p>

      <div className="rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-slate-50/80 dark:bg-slate-800/50 p-4 space-y-3 border-l-4 border-indigo-400 dark:border-indigo-500/85">
        <p>
          <strong className="font-semibold text-slate-900 dark:text-slate-100">Aandachtsvraag:</strong> waarom is dat onderscheid zo belangrijk?
        </p>
        <p>
          <strong className="font-semibold text-slate-900 dark:text-slate-100">Mini-antwoord:</strong> omdat klachten, laboratoriumwaarden, beeldvorming, behandeling en
          prognose per ziektebeeld verschillen.
        </p>
      </div>
    </div>
  )
}
