export default function Sect02NormaleOpbouwVanBot() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Normale opbouw van bot</h2>
      <p>
        Bot is geen “hard blok”, maar gespecialiseerd bindweefsel. Het bestaat uit drie belangrijke onderdelen: cellen,
        botmatrix en calciumkristallen. Die samen maken bot stevig, maar ook voortdurend veranderlijk.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Belangrijke onderdelen van bot</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Onderdeel
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Osteoblasten</td>
              <td className="px-4 py-3 align-top">Botvormende cellen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Osteocyten</td>
              <td className="px-4 py-3 align-top">Rijpe botcellen in het bot</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Osteoclasten</td>
              <td className="px-4 py-3 align-top">Botafbrekende cellen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Botmatrix</td>
              <td className="px-4 py-3 align-top">Organische basis van het bot</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Calciumkristallen</td>
              <td className="px-4 py-3 align-top">Zorgen voor mineralisatie en stevigheid</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De botmatrix bevat vooral collageen type I en botvormende eiwitten zoals osteonectine, osteocalcine en AF. Deze
        matrix is eerst nog ongemineraliseerd; dan heet hij osteoid. Osteoid is dus de voorloper van hard bot.
      </p>
      <p>
        De mineralisatie gebeurt daarna op een mineralisatiefront. Daarbij worden apatiet- of hydroxyapatietkristallen
        afgezet, met de formule Ca₅(PO₄)₃OH. Belangrijke hulpstoffen hierbij zijn onder andere:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>osteocalcine, dat Ca²⁺ bindt;</li>
        <li>AF, dat PO₄⁻ verhoogt;</li>
        <li>matrixvesikels, die als een lokaal focuspunt voor mineralisatie fungeren.</li>
      </ul>
      <p>Osteoid is nauw verbonden met collageen I. Na ongeveer 10 dagen kan deze matrix mineraliseren.</p>
      <div className="rounded-xl border-l-4 border-primary-400 bg-primary-50 dark:bg-primary-500/10 p-4 space-y-2">
        <p>
          <strong className="text-primary-900 dark:text-primary-200">Aandacht:</strong> wat is osteoid?{'  '}
          <strong className="text-primary-900 dark:text-primary-200">Kort antwoord:</strong> de nog niet gemineraliseerde
          botmatrix.
        </p>
      </div>
    </div>
  )
}
