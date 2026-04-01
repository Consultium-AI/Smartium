export default function Sect09InterpretatieB0EnB1() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Interpretatie van b0 en b1</h2>
      <p>In een regressiemodel zoals:</p>
      <pre className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-600 text-sm font-mono overflow-x-auto whitespace-pre-wrap">
        {`\\[\\hat{Y} = 95 + 0.75 \\times \\text{leeftijd}\\]`}
      </pre>
      <p>betekent dit:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>b0 = 95: de geschatte interceptwaarde;</li>
        <li>b1 = 0.75: de geschatte regressiecoëfficiënt van leeftijd.</li>
      </ul>
      <p>
        De helling van 0.75 betekent dat de systolische bloeddruk volgens dit model gemiddeld met 0.75 mmHg toeneemt per extra levensjaar.
      </p>
      <p>
        Het intercept is de verwachte waarde van Y als X = 0. Soms is dat inhoudelijk heel relevant, maar soms ook niet. Als X = 0 in de praktijk niet voorkomt, is het intercept vooral een wiskundig onderdeel van het model.
      </p>
    </div>
  )
}
