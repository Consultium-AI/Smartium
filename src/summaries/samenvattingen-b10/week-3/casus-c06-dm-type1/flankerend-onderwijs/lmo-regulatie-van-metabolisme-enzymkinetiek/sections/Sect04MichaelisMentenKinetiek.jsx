export default function Sect04MichaelisMentenKinetiek() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Michaelis-Menten kinetiek</h3>
      <p>
        Veel enzymen in het lichaam volgen <strong className="text-slate-900 dark:text-slate-100">Michaelis-Menten kinetiek</strong>. Daarbij meet je de initiële reactiesnelheid bij verschillende substraatconcentraties. Uit die relatie kun je de <strong className="text-slate-900 dark:text-slate-100">Michaelis-Menten constante, K_m</strong>, afleiden.
      </p>
      <p>
        De <strong className="text-slate-900 dark:text-slate-100">K_m</strong> is de substraatconcentratie waarbij de initiële reactiesnelheid (<strong className="text-slate-900 dark:text-slate-100">V_i</strong>) de helft is van de maximale initiële reactiesnelheid (<strong className="text-slate-900 dark:text-slate-100">V_max</strong>). Hoe lager de K_m, hoe hoger de affiniteit van het enzym voor het substraat.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Begrippen bij Michaelis-Menten kinetiek</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Begrip</th>
              <th className="px-4 py-3 font-semibold">Betekenis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">V_i</td>
              <td className="px-4 py-3 align-top">initiële reactiesnelheid</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">V_max</td>
              <td className="px-4 py-3 align-top">maximale initiële reactiesnelheid</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">K_m</td>
              <td className="px-4 py-3 align-top">substraatconcentratie waarbij V_i = 1/2 V_max</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Lage K_m</td>
              <td className="px-4 py-3 align-top">hoge affiniteit voor het substraat</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>De relatie kan worden samengevat met de formule:</p>
      <p className="font-semibold text-slate-900 dark:text-slate-100">V_i = V_max [S] / (K_m + [S])</p>
      <p>Hierin is [S] de substraatconcentratie.</p>
      <p>
        Een klassiek voorbeeld is de omzetting van glucose naar glucose-6-fosfaat. Dit gebeurt in verschillende weefsels door verschillende enzymen. <strong className="text-slate-900 dark:text-slate-100">Glucokinase</strong> heeft een K_m van ongeveer 5 mM, terwijl <strong className="text-slate-900 dark:text-slate-100">hexokinase</strong> een K_m heeft van minder dan 0,2 mM. Hexokinase heeft dus een hogere affiniteit voor glucose dan glucokinase.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-2">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          <strong className="font-semibold">Aandachtsvraag:</strong> wat zegt een lage K_m ook alweer?
        </p>
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0 mt-2">
          <strong className="font-semibold">Mini-antwoord:</strong> dat het enzym al bij een lage substraatconcentratie goed werkt.
        </p>
      </div>
    </div>
  )
}
