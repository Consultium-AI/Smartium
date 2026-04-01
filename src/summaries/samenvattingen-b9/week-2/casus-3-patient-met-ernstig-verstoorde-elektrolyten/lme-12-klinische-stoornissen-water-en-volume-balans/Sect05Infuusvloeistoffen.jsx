export default function Sect05Infuusvloeistoffen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Infuusvloeistoffen: waarom zijn ze hypo-, iso- of hypertoon?</h2>
      <p>
        Bij infuusvloeistoffen spreek je in de praktijk vooral over toniciteit. Het gaat dus niet alleen om hoeveel deeltjes erin zitten, maar vooral om wat het effect op waterverplaatsing is.
      </p>
      <p>
        Een belangrijke vraag is bijvoorbeeld: waarom is glucose 5% een hypotone vloeistof, terwijl de glucoseconcentratie en de osmolaliteit ongeveer vergelijkbaar zijn met die van serum?
      </p>
      <p>
        Dat komt doordat glucose in het lichaam uiteindelijk wordt gemetaboliseerd tot water en koolstofdioxide. De koolstofdioxide wordt uitgeademd, waardoor er netto vooral water overblijft. Daardoor daalt de osmolaliteit/toniciteit van het lichaam. Als de nieren het extra water goed kunnen uitscheiden, is dat effect minder problematisch. Als dat niet lukt, kan het bijdragen aan hyponatriëmie of, in een andere context, aan de correctie van hypernatriëmie.
      </p>
      <p>Hetzelfde idee geldt in mindere mate voor een infuus met 0,45% NaCl of “slap zout”.</p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 2. Voorbeelden van infuusvloeistoffen en hun toniciteit</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Infuusvloeistof</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Toniciteit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">0,9% NaCl</td>
                <td className="px-4 py-3">Isotoon</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">0,45% NaCl</td>
                <td className="px-4 py-3">Hypotoon</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">5% glucose</td>
                <td className="px-4 py-3">Hypotoon</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">2,5% glucose / 0,45% NaCl</td>
                <td className="px-4 py-3">Hypotoon</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Ringer-lactaat</td>
                <td className="px-4 py-3">Isotoon</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Plasma-Lyte</td>
                <td className="px-4 py-3">Isotoon</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Sterofundin</td>
                <td className="px-4 py-3">Isotoon</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>Dus heel simpel gezegd:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>isotone vloeistoffen blijven meer in het extracellulaire compartiment;</li>
        <li>hypotone vloeistoffen geven relatief meer water aan de cellen.</li>
      </ul>
    </div>
  )
}
