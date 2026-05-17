export default function Sect07DiabetischeGastroparese() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Diabetische gastroparese: vertraagde maagontlediging
      </h2>
      <p>
        Bij de tweede casus speelt een andere belangrijke oorzaak van refluxachtige klachten:{' '}
        <strong className="text-slate-900 dark:text-slate-100">gastroparese</strong>. Gastroparese betekent{' '}
        <strong className="text-slate-900 dark:text-slate-100">vertraagde maagontlediging</strong>. De maag werkt dan
        trager, waardoor voedsel langer in de maag blijft.
      </p>
      <p>Dat kan leiden tot klachten zoals:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>misselijkheid;</li>
        <li>braken;</li>
        <li>een vol gevoel in de maag;</li>
        <li>pijn bij eten of drinken;</li>
        <li>refluxklachten of zuurbranden.</li>
      </ul>
      <p>
        Bij een ontregelde diabetes kan gastroparese verergeren. Andersom kan een verstoorde glucosehuishouding ook
        leiden tot vertraagde maaglediging en refluxoesofagitis.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 2. Klachten en hun mogelijke betekenis bij de patiënte met ontregelde diabetes
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Klacht of aanwijzing
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Past vooral bij
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">{'Bloedsuiker > 25 mmol/l'}</td>
                <td className="px-4 py-3 align-top">Metabole ontregeling</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Niet goed innemen van medicatie</td>
                <td className="px-4 py-3 align-top">Metabole ontregeling</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Veel dorst</td>
                <td className="px-4 py-3 align-top">Metabole ontregeling</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Misselijkheid en braken</td>
                <td className="px-4 py-3 align-top">Gastroparese of refluxoesofagitis</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Pijn bij eten en drinken</td>
                <td className="px-4 py-3 align-top">Refluxoesofagitis</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Vol gevoel in de maag</td>
                <td className="px-4 py-3 align-top">Gastroparese</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Traumatische ervaring met sonde</td>
                <td className="px-4 py-3 align-top">Psychische belasting</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Stress door dreigend ontslag</td>
                <td className="px-4 py-3 align-top">Psychische belasting</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Eten en drinken lukt niet meer</td>
                <td className="px-4 py-3 align-top">
                  Zowel lichamelijke als psychische factoren kunnen meespelen
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        De klachten in deze casus passen niet bij één enkele oorzaak, maar bij een combinatie van factoren. Toch wordt
        vooral de <strong className="text-slate-900 dark:text-slate-100">
          metabole ontregeling door stress en onvoldoende medicatie-inname
        </strong>{' '}
        als belangrijke oorzaak gezien. De hoge bloedsuiker, dorst en misselijkheid horen daar goed bij. Tegelijk kan
        de verstoorde diabetesregeling de maagontlediging vertragen en zo reflux en refluxoesofagitis uitlokken.
      </p>
    </div>
  )
}
