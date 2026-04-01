export default function Sect13Gradering() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Gradering</h3>
      <p>De gradering van het mammacarcinoom is gebaseerd op:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>De mate van buisvorming</li>
        <li>De mate van atypie</li>
        <li>Het aantal mitose-figuren</li>
      </ul>
      <p>Op basis hiervan wordt de tumor ingedeeld in:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Graad 1: goed gedifferentieerd</li>
        <li>Graad 2: matig gedifferentieerd</li>
        <li>Graad 3: slecht gedifferentieerd</li>
      </ul>
      <p>
        Dit hangt sterk samen met de prognose: een graad 3 carcinoom heeft een slechtere prognose dan een graad 1
        carcinoom. Ook de diameter speelt daarbij uiteraard een rol.
      </p>
      <p>
        Links zijn goed gedifferentieerde carcinomen te zien met veel buizen en weinig atypie; rechts slecht
        gedifferentieerde carcinomen met weinig buizen en veel atypie.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 6. Gradering en betekenis</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Graad
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Differentiatie
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Graad 1</td>
              <td className="px-4 py-3 align-top">Goed gedifferentieerd</td>
              <td className="px-4 py-3 align-top">Veel buisvorming, weinig atypie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Graad 2</td>
              <td className="px-4 py-3 align-top">Matig gedifferentieerd</td>
              <td className="px-4 py-3 align-top">Tussenvorm</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Graad 3</td>
              <td className="px-4 py-3 align-top">Slecht gedifferentieerd</td>
              <td className="px-4 py-3 align-top">Weinig buisvorming, veel atypie</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
