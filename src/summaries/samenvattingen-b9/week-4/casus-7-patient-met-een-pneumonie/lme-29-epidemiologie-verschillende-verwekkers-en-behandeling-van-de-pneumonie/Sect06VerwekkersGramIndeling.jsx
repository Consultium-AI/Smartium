export default function Sect06VerwekkersGramIndeling() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Verwekkers van pneumonie</h2>
      <p>Er zijn veel micro-organismen die een pneumonie kunnen veroorzaken. Bacteriën worden meestal ingedeeld in:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>grampositief</li>
        <li>gramnegatief</li>
        <li>atypisch</li>
      </ul>
      <p>
        Gramkleuring is een manier om bacteriën zichtbaar te maken. Grampositieve bacteriën houden de gramkleuring vast en kleuren paars. Gramnegatieve bacteriën houden die kleuring niet vast en kleuren roze-rood. Deze indeling helpt onder andere bij het kiezen van gerichte antibiotica.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Grampositieve, gramnegatieve en atypische verwekkers</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Groep</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Voorbeelden</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold">Grampositief</td>
              <td className="px-4 py-3 align-top">
                <em>Streptococcus pneumoniae</em>, <em>Staphylococcus aureus</em>
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold">Gramnegatief</td>
              <td className="px-4 py-3 align-top">
                <em>Haemophilus influenzae</em>, <em>Moraxella catarrhalis</em>
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold">Atypisch</td>
              <td className="px-4 py-3 align-top">
                <em>Mycoplasma pneumoniae</em>, <em>Legionella pneumophila</em>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <p>
        De term atypisch komt historisch voort uit pneumoniebeelden die anders waren dan de klassieke, snelle en heftige pneumonie met hoge koorts en rillingen. Later werd de term gebruikt voor micro-organismen die vaak intracellulair zijn en niet gevoelig voor de historisch meest gebruikte antibiotica, namelijk de beta-lactamantibiotica.
      </p>
      <p>De meest voorkomende atypische verwekkers zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li><em>Mycoplasma pneumoniae</em></li>
        <li><em>Legionella pneumophila</em></li>
        <li><em>Chlamydia pneumoniae</em></li>
      </ul>
    </div>
  )
}
