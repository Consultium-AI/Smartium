export default function Sect11Rsquared() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">R-squared: hoe goed past het model?</h2>
      <p>
        Een lijn kunnen tekenen betekent nog niet dat het model ook echt goed past. Daarom gebruik je R-squared, oftewel R².
      </p>
      <p>R² laat zien welk deel van de variantie in Y wordt verklaard door X binnen het lineaire model:</p>
      <pre className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-600 text-sm font-mono overflow-x-auto whitespace-pre-wrap">
        {`\\[R^2 = \\frac{\\text{verklaarde variantie}}{\\text{totale variantie}}\\]`}
      </pre>
      <p>Omdat het een proportie is, ligt R² tussen 0 en 1:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>R² = 0: X verklaart geen enkele variatie in Y;</li>
        <li>R² = 1: alle punten liggen exact op de regressielijn.</li>
      </ul>
      <p>Hoe hoger R², hoe beter het lineaire model de variatie in Y beschrijft.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Relatie tussen correlatie en R²</h3>
      <p>Bij enkelvoudige lineaire regressie geldt:</p>
      <pre className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-600 text-sm font-mono overflow-x-auto whitespace-pre-wrap">
        {`\\[R^2 = r^2\\]`}
      </pre>
      <p>Dat betekent:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>correlatie meet de sterkte en richting van de lineaire samenhang;</li>
        <li>R² meet hoeveel variatie in Y door X wordt verklaard.</li>
      </ul>
      <p>
        Let op: het teken van de relatie zit in r, maar gaat verloren in R², omdat R² altijd positief is.
      </p>
    </div>
  )
}
