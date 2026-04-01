export default function Sect10LineaireRegressieDichotomeVariabele() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Lineaire regressie bij een dichotome variabele</h2>
      <p>
        Een bijzonder en belangrijk geval is lineaire regressie met een dichotome onafhankelijke variabele, dus een variabele met alleen 0 en 1 als waarden.
      </p>
      <p>Stel bijvoorbeeld dat je het verschil in systolische bloeddruk wilt onderzoeken tussen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>niet-rokers: X = 0</li>
        <li>rokers: X = 1</li>
      </ul>
      <p>Dan krijg je:</p>
      <pre className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-600 text-sm font-mono overflow-x-auto whitespace-pre-wrap">
        {`\\[Y = b_0 + b_1X\\]`}
      </pre>
      <p>Voor niet-rokers geldt dan:</p>
      <pre className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-600 text-sm font-mono overflow-x-auto whitespace-pre-wrap">
        {`\\[Y = b_0\\]`}
      </pre>
      <p>Voor rokers geldt:</p>
      <pre className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-600 text-sm font-mono overflow-x-auto whitespace-pre-wrap">
        {`\\[Y = b_0 + b_1\\]`}
      </pre>
      <p>Het verschil tussen beide groepen is dus precies b1. Je kunt dit schrijven als:</p>
      <pre className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-600 text-sm font-mono overflow-x-auto whitespace-pre-wrap">
        {`\\[b_1 = \\mu_2 - \\mu_1\\]`}
      </pre>
      <p>
        Daarmee is lineaire regressie met een dichotome variabele wiskundig equivalent aan een Student’s t-toets voor onafhankelijke groepen.
      </p>
      <p>Ook de hypothesetoets is dan hetzelfde:</p>
      <pre className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-600 text-sm font-mono overflow-x-auto whitespace-pre-wrap">
        {`\\[H_0: b_1 = 0\\]`}
      </pre>
      <p>Dat is equivalent aan:</p>
      <pre className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-600 text-sm font-mono overflow-x-auto whitespace-pre-wrap">
        {`\\[H_0: \\mu_1 = \\mu_2\\]`}
      </pre>
      <p>
        De t-waarde, p-waarde en betrouwbaarheidsintervallen zijn dan identiek, mits je dezelfde aannames gebruikt.
      </p>
    </div>
  )
}
