export default function Sect14Tabel3Clues() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Clues, aanvullend onderzoek en passende diagnostiek</h2>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 3. Clues voor secundaire hypertensie en passend aanvullend onderzoek</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Oorzaak</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Clues in anamnese / lichamelijk onderzoek</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Aanvullend onderzoek</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Parenchymateuze nierziekte</td>
                <td className="px-4 py-3 align-top">Positieve familie-anamnese, bijvoorbeeld cystenieren; eventueel vergrote nier</td>
                <td className="px-4 py-3 align-top">Creatinine, proteïnurie, echo</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Renovasculair</td>
                <td className="px-4 py-3 align-top">Plots begin op jonge leeftijd, vooral bij vrouwen; atherosclerotisch bij vasculair belaste patiënten; eventueel souffle</td>
                <td className="px-4 py-3 align-top">Verergering nierfunctie na ACE-remmer, duplex doppler, CT-A, angiografie</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Primair hyperaldosteronisme</td>
                <td className="px-4 py-3 align-top">Krampen, soms positieve familie-anamnese</td>
                <td className="px-4 py-3 align-top">Hypokaliëmie, CT-bijnier</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Middelengbruik: drop, drugs of medicatie</td>
                <td className="px-4 py-3 align-top">Vraag hier actief naar</td>
                <td className="px-4 py-3 align-top">Drop: hypokaliëmie</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Coarctatio aortae</td>
                <td className="px-4 py-3 align-top">Jonge patiënt</td>
                <td className="px-4 py-3 align-top">Bloeddrukverschil tussen armen en benen; echo doppler</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Feochromocytoom</td>
                <td className="px-4 py-3 align-top">Hartkloppingen, bleekheid, aanvallen; eventueel stigmata van neurofibromatose</td>
                <td className="px-4 py-3 align-top">(Nor)metanefrines, CT-bijnier</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Cushing</td>
                <td className="px-4 py-3 align-top">Gewichtstoename, psychische klachten, habitus, striae</td>
                <td className="px-4 py-3 align-top">Hyperglycemie, 24-uurs urine cortisol</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
