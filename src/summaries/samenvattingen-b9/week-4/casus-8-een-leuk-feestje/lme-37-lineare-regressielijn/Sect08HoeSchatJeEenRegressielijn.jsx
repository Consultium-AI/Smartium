export default function Sect08HoeSchatJeEenRegressielijn() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hoe schat je een regressielijn?</h2>
      <p>
        Bij lineaire regressie zoek je een rechte lijn die zo goed mogelijk door een puntenwolk loopt. De lijn die je kiest, moet de data zo goed mogelijk samenvatten.
      </p>
      <p>Voor elk datapunt kun je het residu berekenen:</p>
      <pre className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-600 text-sm font-mono overflow-x-auto whitespace-pre-wrap">
        {`\\[e_i = Y_i - \\hat{Y}_i\\]`}
      </pre>
      <p>Het residu is de verticale afstand tussen de geobserveerde waarde en de door het model voorspelde waarde.</p>
      <p>De “beste” lijn is de lijn waarvoor de som van de gekwadrateerde residuen zo klein mogelijk is:</p>
      <pre className="p-4 rounded-xl bg-slate-100 dark:bg-slate-800/70 border border-slate-200 dark:border-slate-600 text-sm font-mono overflow-x-auto whitespace-pre-wrap">
        {`\\[SSE = \\sum_{i=1}^{n}(Y_i - \\hat{Y}_i)^2\\]`}
      </pre>
      <p>
        Dit heet de methode van de kleinste kwadraten. Door te kwadrateren heffen positieve en negatieve afwijkingen elkaar niet op, en tellen grote afwijkingen zwaarder mee.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Wat betekenen residuen inhoudelijk?</h3>
      <p>Residuen laten zien wat het model niet verklaart. Dat kan komen door:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>meetfout;</li>
        <li>biologische variatie;</li>
        <li>andere, niet-gemeten factoren.</li>
      </ul>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandachtspunt: wat is een residu?  Mini-antwoord: het residu is het verschil tussen de gemeten waarde en de voorspelde waarde van het model.
        </p>
      </div>
    </div>
  )
}
