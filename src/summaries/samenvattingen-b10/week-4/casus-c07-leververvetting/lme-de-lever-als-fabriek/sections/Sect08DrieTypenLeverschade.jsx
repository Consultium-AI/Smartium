export default function Sect08DrieTypenLeverschade() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Drie typen leverschade</h2>
      <p>
        Geneesmiddel-geïnduceerde leverschade wordt vaak ingedeeld in drie typen:{' '}
        <strong className="text-slate-900 dark:text-slate-100">hepatocellulair</strong>,{' '}
        <strong className="text-slate-900 dark:text-slate-100">cholestatisch</strong> en{' '}
        <strong className="text-slate-900 dark:text-slate-100">gemengd</strong>.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 4. Drie typen leverschade</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Type</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Kenmerken</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Voorbeelden</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">Hepatocellulair</td>
              <td className="p-3 align-top">
                Levercelnecrose en ontsteking; ALAT/ASAT sterk verhoogd, ALK/GGT licht verhoogd
              </td>
              <td className="p-3 align-top">Isoniazide, groene thee, nitrofurantoïne, methyldopa</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Cholestatisch</td>
              <td className="p-3 align-top">
                Galstase, portale ontsteking en aangedane galwegen; ALAT/ASAT minimaal verhoogd, ALK/GGT sterk verhoogd,
                bilirubine verhoogd
              </td>
              <td className="p-3 align-top">Amoxicilline/clavulaanzuur, ciprofloxacine</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Gemengd</td>
              <td className="p-3 align-top">Combinatie van hepatocellulair en cholestatisch</td>
              <td className="p-3 align-top">Combinatiebeeld</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        De <strong className="text-slate-900 dark:text-slate-100">R-ratio</strong> helpt om de schade in te delen:
      </p>
      <pre className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-600 text-sm font-mono overflow-x-auto whitespace-pre-wrap">
        {`\\[
R\\text{-ratio} = \\frac{\\text{verhoging ALAT / ASAT boven normaalwaarde}}{\\text{verhoging ALK boven normaalwaarde}}
\\]`}
      </pre>
      <p>Interpretatie:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">R &gt; 5</strong> = hepatocellulair
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">R &lt; 2</strong> = cholestatisch
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">2 &lt; R &lt; 5</strong> = gemengd
        </li>
      </ul>
    </div>
  )
}
