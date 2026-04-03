export default function Sect02WatIsLineaireRegressie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Wat is lineaire regressie?</h2>
      <p>
        Lineaire regressie gebruik je om de relatie tussen twee variabelen te beschrijven en om een uitkomst te voorspellen. Daarbij noem je:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Y de afhankelijke variabele: de uitkomst die je wilt verklaren of voorspellen;</li>
        <li>X de onafhankelijke variabele: de variabele waarmee je Y probeert te verklaren.</li>
      </ul>
      <p>
        Bij lineaire regressie wordt de verwachte waarde van Y gemodelleerd als een functie van X. Bij een enkelvoudig model gebeurt dat met één verklarende variabele; bij een meervoudig model met meerdere verklarende variabelen.
      </p>
      <p>De algemene vorm van een simpel lineair regressiemodel is:</p>
      <pre className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-600 text-sm font-mono overflow-x-auto whitespace-pre-wrap">
        {`\\[\\hat{Y} = b_0 + b_1X\\]`}
      </pre>
      <p>Hierin is:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>b0 het intercept: de verwachte waarde van Y als X = 0;</li>
        <li>b1 de helling of regressiecoëfficiënt: de gemiddelde verandering in Y als X met één eenheid toeneemt.</li>
      </ul>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandachtspunt: wat zegt de helling precies?</p>
      <p className="mt-2">
        <span className="font-semibold">Mini-antwoord:</span>{' '}de helling geeft aan hoeveel de verwachte waarde van Y gemiddeld verandert als X met 1 stijgt.
        </p>
      </div>
    </div>
  )
}
