export default function Sect10ClopidogrelKlinischeStudies() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 5. Belangrijke klinische voorbeelden bij clopidogrel</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Studie/voorbeeld</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kern</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Belangrijkste uitkomst</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">TAILOR-PCI</td>
                <td className="px-4 py-3 align-top">Genotypegeleide P2Y12-remmerkeuze vs conventionele therapie</td>
                <td className="px-4 py-3 align-top">Geen significant verschil in samengesteld cardiovasculair eindpunt of bloedingen na 12 maanden</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">POPular Genetics</td>
                <td className="px-4 py-3 align-top">Genotypegeleide DAPT vs conventionele behandeling</td>
                <td className="px-4 py-3 align-top">Even effectief op ernstige cardiovasculaire uitkomsten; minder matig-ernstige/&quot;minor&quot; bloedingen; NNT 37 voor één bloedingsvoorkomen</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">CHANCE-2</td>
                <td className="px-4 py-3 align-top">Ticagrelor + aspirine vs clopidogrel + aspirine bij LOF-dragers met TIA/lichte beroerte</td>
                <td className="px-4 py-3 align-top">Ticagrelor was superieur in het voorkomen van nieuwe beroerte, zonder toename van ernstige of matige bloedingen; totale bloedingen kwamen vaker voor met ticagrelor</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p>
        Wat betekent LOF?  LOF staat voor loss of function: een variant die leidt tot verminderde of afwezige enzymactiviteit.
      </p>
      <p>
        Belangrijk is dat de meerwaarde van farmacogenetica kan verschillen per studie en per specialisme. Sommige vakgebieden passen farmacogenetica proactief toe, terwijl andere daar minder snel gebruik van maken.
      </p>
    </div>
  )
}
