export default function Sect05SecretiePariëtaleCel() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        {'Secretie van maagzuur door de pari\u00E8tale cel'}
      </h2>
      <p>
        De <strong className="text-slate-900 dark:text-slate-100">{'pari\u00E8tale cel'}</strong> is de cel die zoutzuur afscheidt.
        De kern van dit proces is de <strong className="text-slate-900 dark:text-slate-100">H+/K+-ATPase</strong> in de{' '}
        <strong className="text-slate-900 dark:text-slate-100">apicale membraan</strong> van de cel.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Hoe werkt de zoutzuursecretie?</h3>
      <p>
        De {'pari\u00E8tale cel'} splitst koolzuur in <strong className="text-slate-900 dark:text-slate-100">H+</strong> en{' '}
        <strong className="text-slate-900 dark:text-slate-100">bicarbonaat</strong>. Dit gebeurt met behulp van{' '}
        <strong className="text-slate-900 dark:text-slate-100">koolzuuranhydrase</strong>.
      </p>
      <p>Daarna:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          wordt <strong className="text-slate-900 dark:text-slate-100">H+</strong> via de{' '}
          <strong className="text-slate-900 dark:text-slate-100">H+/K+-pomp</strong> naar het maaglumen getransporteerd
          in ruil voor K+;
        </li>
        <li>
          verlaat <strong className="text-slate-900 dark:text-slate-100">K+</strong> de cel weer via{' '}
          <strong className="text-slate-900 dark:text-slate-100">K+-kanalen</strong> aan de apicale zijde, zodat de
          pomp kan blijven werken;
        </li>
        <li>
          wordt <strong className="text-slate-900 dark:text-slate-100">bicarbonaat</strong> aan de basolaterale zijde
          uitgewisseld met <strong className="text-slate-900 dark:text-slate-100">chloride</strong>;
        </li>
        <li>
          verlaat <strong className="text-slate-900 dark:text-slate-100">chloride</strong> de cel vervolgens via een
          chloridekanaal aan de apicale zijde;
        </li>
        <li>
          in het lumen vormen <strong className="text-slate-900 dark:text-slate-100">H+</strong> en{' '}
          <strong className="text-slate-900 dark:text-slate-100">Cl-</strong> samen{' '}
          <strong className="text-slate-900 dark:text-slate-100">zoutzuur</strong>.
        </li>
      </ul>
      <p>
        Deze zuursecretie blijft <strong className="text-slate-900 dark:text-slate-100">elektroneutraal</strong>.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          {'Tabel 2. Belangrijke stappen in de zuursecretie door de pari\u00E8tale cel'}
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Stap
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Wat gebeurt er?
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">1</td>
                <td className="px-4 py-3 align-top">Koolzuur wordt gesplitst in H+ en bicarbonaat</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">2</td>
                <td className="px-4 py-3 align-top">H+ wordt via H+/K+-ATPase naar het lumen getransporteerd</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">3</td>
                <td className="px-4 py-3 align-top">K+ verlaat de cel via K+-kanalen en kan opnieuw worden gebruikt</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">4</td>
                <td className="px-4 py-3 align-top">Bicarbonaat wordt basolateraal uitgewisseld met chloride</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">5</td>
                <td className="px-4 py-3 align-top">Chloride verlaat de cel apicaal</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">6</td>
                <td className="px-4 py-3 align-top">In het lumen vormen H+ en Cl- samen zoutzuur</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-2">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          <strong className="font-semibold">Aandacht-vragetje:</strong> Waarom moet K+ de cel weer uit?
        </p>
        <p className="m-0 mt-2">
          <strong className="font-semibold">Mini-antwoord:</strong>{' '}Zodat er genoeg K+ beschikbaar blijft om de H+/K+-pomp te laten doorgaan.
        </p>
      </div>
    </div>
  )
}
