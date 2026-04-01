export default function Sect05HypothesenToetsenMetRegressie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hypothesen toetsen met regressie</h2>
      <p>Met een steekproef doe je uitspraken over een populatie. Dat gebeurt via hypothesetoetsing.</p>
      <p>Een standaardopzet is:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>nulhypothese (H0): er is geen effect of geen verschil;</li>
        <li>alternatieve hypothese (Ha): er is wel een effect of verschil.</li>
      </ul>
      <p>Bij lineaire regressie toets je vaak de regressiecoëfficiënt van X:</p>
      <pre className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-600 text-sm font-mono overflow-x-auto whitespace-pre-wrap">
        {`\\[H_0: \\beta_1 = 0\\]\\[H_A: \\beta_1 \\neq 0\\]`}
      </pre>
      <p>
        De nulhypothese zegt dan dat er in de populatie geen lineair verband is tussen X en Y. De alternatieve hypothese zegt dat er wel een lineair verband is.
      </p>
    </div>
  )
}
