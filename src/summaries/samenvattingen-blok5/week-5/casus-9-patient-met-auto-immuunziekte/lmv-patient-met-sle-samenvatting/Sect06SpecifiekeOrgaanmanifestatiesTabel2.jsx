export default function Sect06SpecifiekeOrgaanmanifestatiesTabel2() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Specifieke orgaanmanifestaties</h2>
      <p>Omdat SLE multisysteemziekte is, is het handig om de manifestaties per orgaansysteem te ordenen.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 2. Specifieke orgaanmanifestaties bij SLE
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/80">
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">
                Orgaan/weefsel
              </th>
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">
                Typische kliniek
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Huid</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Vlindervormig exantheem, vasculitis</td>
            </tr>
            <tr className="bg-slate-50/50 dark:bg-slate-800/30">
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Gewrichten/spieren</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Artritis, artralgie</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Long/pleura</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                Pleuritis, interstitiële longafwijkingen
              </td>
            </tr>
            <tr className="bg-slate-50/50 dark:bg-slate-800/30">
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Bloed</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Antifosfolipidensyndroom, cytopenie</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Brein</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                Neurologische en psychiatrische klachten, zoals hoofdpijn, migraine, epilepsie, psychose
              </td>
            </tr>
            <tr className="bg-slate-50/50 dark:bg-slate-800/30">
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Nieren</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Lupus nefritis</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Hart</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Pericarditis</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
