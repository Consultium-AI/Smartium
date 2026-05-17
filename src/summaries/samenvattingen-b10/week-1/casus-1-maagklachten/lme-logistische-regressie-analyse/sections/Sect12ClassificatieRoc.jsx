export default function Sect12ClassificatieRoc() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Classificatie, sensitiviteit, specificiteit en ROC
      </h2>
      <p>
        Een predictiemodel kan ook als <strong className="text-slate-900 dark:text-slate-100">classifier</strong> worden
        gebruikt. Dan kies je een <strong className="text-slate-900 dark:text-slate-100">cut-off</strong> of drempelwaarde{' '}
        <span className="font-mono text-[0.95em]">{'\\(c\\)'}</span>.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          als <span className="font-mono text-[0.95em]">{'\\(p \\geq c\\)'}</span>: positief
        </li>
        <li>
          als <span className="font-mono text-[0.95em]">{'\\(p < c\\)'}</span>: negatief
        </li>
      </ul>
      <p>
        Vaak wordt standaard <span className="font-mono text-[0.95em]">{'\\(c=0{,}5\\)'}</span> gebruikt, maar dit kun je
        aanpassen.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Confusion matrix</h3>
      <div>
        <p className="font-semibold text-slate-900 dark:text-slate-100">
          <strong>Tabel 2. Uitkomsten van een classificatiemodel</strong>
        </p>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600" />
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Werkelijk ja
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Werkelijk nee
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 align-top bg-slate-50/90 dark:bg-slate-800/50">
                  Voorspeld ja
                </th>
                <td className="px-4 py-3 align-top">True positive (TP)</td>
                <td className="px-4 py-3 align-top">False positive (FP)</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 align-top bg-slate-50/90 dark:bg-slate-800/50">
                  Voorspeld nee
                </th>
                <td className="px-4 py-3 align-top">False negative (FN)</td>
                <td className="px-4 py-3 align-top">True negative (TN)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Sensitiviteit en specificiteit</h3>
      <ul className="list-disc pl-6 space-y-4">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Sensitiviteit</strong> ={' '}
          <span className="font-mono text-[0.95em]">{'\\(TP/(TP+FN)\\)'}</span>
          <br />Dit is het vermogen om echte zieken goed te herkennen.
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Specificiteit</strong> ={' '}
          <span className="font-mono text-[0.95em]">{'\\(TN/(TN+FP)\\)'}</span>
          <br />Dit is het vermogen om gezonde mensen goed als gezond aan te merken.
        </li>
      </ul>
      <p>Een hoge sensitiviteit betekent weinig missers.</p>
      <p>Een hoge specificiteit betekent weinig vals-positieven.</p>
      <p>Als je de cut-off verlaagt:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>de sensitiviteit stijgt</li>
        <li>de specificiteit daalt</li>
      </ul>
      <p>
        Bij aandoeningen waarbij een gemiste diagnose gevaarlijk is, zoals appendicitis, is een hogere sensitiviteit vaak
        belangrijker.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">ROC-curve en AUC</h3>
      <p>
        Om de discriminatie te beoordelen gebruik je de <strong className="text-slate-900 dark:text-slate-100">ROC-curve</strong>:
        receiver operating characteristic curve.
      </p>
      <p>
        De curve laat zien hoe sensitiviteit verandert tegenover{' '}
        <span className="font-mono text-[0.95em]">{'\\(1-\\)'}</span>specificiteit bij verschillende afkapwaarden.
      </p>
      <p>
        De <strong className="text-slate-900 dark:text-slate-100">AUC</strong> is de area under the curve:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>AUC = 0,5: geen discriminatie</li>
        <li>AUC = 1: perfecte discriminatie</li>
      </ul>
      <p>
        De AUC heeft ook een probabilistische interpretatie: het is de kans dat het model een persoon met de uitkomst een
        hogere voorspelde kans geeft dan een persoon zonder de uitkomst.
      </p>
    </div>
  )
}
