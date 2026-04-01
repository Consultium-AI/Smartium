export default function Sect03Tabel1Pretransplantatie() {
  return (
    <div className="space-y-4 text-slate-700 dark:text-slate-300 leading-relaxed">
      <p className="font-medium text-slate-800 dark:text-slate-200">Tabel 1. Belangrijke onderdelen van de pretransplantatiescreening</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Onderdeel</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Doel</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 font-medium">Bloedgroep</td>
              <td className="px-4 py-3">Vaststellen van compatibiliteit</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 font-medium">HLA-typering en anti-HLA-antistoffen</td>
              <td className="px-4 py-3">Inschatten van immunologisch risico</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 font-medium">Screening van andere organen</td>
              <td className="px-4 py-3">Nagaan of de patiënt de operatie aankan</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 font-medium">Beoordeling recidief nierziekte</td>
              <td className="px-4 py-3">Inschatten of de oorspronkelijke nierziekte kan terugkomen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 font-medium">Chirurgische beoordeling</td>
              <td className="px-4 py-3">Bepalen of de operatie technisch goed uitvoerbaar is</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
