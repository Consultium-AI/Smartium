export default function Sect10AtrialeRemodeling() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Wat gebeurt er als je niets doet? Atrial remodeling</h2>
      <p>
        Als atriumfibrilleren en de bijbehorende risicofactoren niet worden aangepakt, kan het hart zich aanpassen aan de ritmestoornis. Dat heet atriale remodeling. De boezems veranderen dan geleidelijk van goed en veerkrachtig naar verwijd, kwetsbaar en uiteindelijk beschadigd.
      </p>
      <p>Dat proces kun je zien als een soort verloop:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>in het begin is atriumfibrilleren paroxysmaal: de aanvallen komen en gaan;</li>
        <li>later wordt het persistent: de aanvallen blijven hangen;</li>
        <li>uiteindelijk kan het permanent worden.</li>
      </ul>
      <p>
        Dan verschuift de focus van genezen naar schadebeperking. Daarom is leefstijltherapie zo belangrijk in een vroeg stadium.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 4. Verloop van atriale remodeling</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Stadium</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kenmerk</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Paroxysmaal</td>
              <td className="px-4 py-3 align-top">Aanvallen komen en gaan; hartweefsel nog redelijk gezond</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Persistent</td>
              <td className="px-4 py-3 align-top">Aanvallen blijven hangen; boezem rekt uit en verliest elasticiteit</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Permanent</td>
              <td className="px-4 py-3 align-top">Structuur is blijvend aangepast; herstel naar oude vorm is fysiek onmogelijk</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>De kern is: hoe eerder je ingrijpt, hoe groter de kans dat het hart nog goed te beïnvloeden is.</p>
    </div>
  )
}
