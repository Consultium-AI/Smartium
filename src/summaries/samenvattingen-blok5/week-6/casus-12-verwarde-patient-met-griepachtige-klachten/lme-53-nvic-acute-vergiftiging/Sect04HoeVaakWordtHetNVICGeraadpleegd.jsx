export default function Sect04HoeVaakWordtHetNVICGeraadpleegd() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hoe vaak wordt het NVIC geraadpleegd?</h2>
      <p>Het NVIC wordt heel vaak geraadpleegd. In 2023 waren er:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>43.612 telefonische raadplegingen;</li>
        <li>204.596 raadplegingen via de website.</li>
      </ul>
      <p>
        De meeste telefonisch gemelde blootstellingen betroffen geneesmiddelen. Dat was 47% van alle telefonische
        meldingen. In 2023 ging het telefonisch over 20.136 blootstellingen aan geneesmiddelen bij mensen, waarvan 308
        blootstellingen aan veterinaire geneesmiddelen, dus 2%.
      </p>
      <p>
        Een opvallend voorbeeld is paracetamol. Daar ging het alleen al om 2648 blootstellingen via de telefoon en 7848
        blootstellingen via de website.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Veelvoorkomende middelen in de top van meldingen in 2023</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Type raadpleging
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Top 3
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Telefonisch</td>
              <td className="px-4 py-3 align-top">1. Cannabisproducten 2. Cocaïne 3. 3-MMC</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Via de website</td>
              <td className="px-4 py-3 align-top">1. MDMA 2. Cocaïne 3. Cannabisproducten</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Deze cijfers laten zien dat intoxicaties in de praktijk heel vaak met geneesmiddelen en drugs te maken hebben.</p>
    </div>
  )
}
