import FormulaBlock from '../FormulaBlock'

export default function Sect02WatIsLogistischeRegressie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Wat is logistische regressie?</h2>
      <p>
        Logistische regressie gebruik je wanneer de uitkomst <strong className="text-slate-900 dark:text-slate-100">binair</strong>{' '}
        is: de uitkomst is dan steeds <strong className="text-slate-900 dark:text-slate-100">ja/nee</strong>,{' '}
        <strong className="text-slate-900 dark:text-slate-100">wel/niet</strong>,{' '}
        <strong className="text-slate-900 dark:text-slate-100">1/0</strong>. Denk bijvoorbeeld aan GORZ wel of niet
        aanwezig, een maagzweer wel of niet aanwezig, of complicaties wel of niet aanwezig.
      </p>
      <p>
        Bij logistische regressie wil je de <strong className="text-slate-900 dark:text-slate-100">kans</strong> op de
        uitkomst voorspellen. De kans ligt altijd tussen <strong className="text-slate-900 dark:text-slate-100">0 en 1</strong>.
        Dat is belangrijk, want een model voor binaire uitkomsten moet dus ook voorspellingen geven die binnen die grenzen
        blijven.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-3">
        <p className="text-slate-800 dark:text-amber-100 m-0">
          Aandachtsvraag: waarom is dit model zo handig?
          <br />
          <strong className="text-slate-900 dark:text-amber-50">Mini-antwoord:</strong> omdat het geschikt is voor een
          binaire uitkomst én meerdere voorspellers tegelijk kan meenemen.
        </p>
      </div>
      <p>Een logistisch regressiemodel wordt vaak geschreven als:</p>
      <FormulaBlock>{String.raw`\[
\ln\left(\frac{p}{1-p}\right)=b_0+b_1X_1+b_2X_2+\dots+b_kX_k
\]`}</FormulaBlock>
      <p>
        Hier is <span className="font-mono text-[0.95em]">{'\\(p\\)'}</span> de kans op de uitkomst. De linkerzijde heet de{' '}
        <strong className="text-slate-900 dark:text-slate-100">logit</strong>: dat is de natuurlijke logaritme van de odds.
      </p>
    </div>
  )
}
