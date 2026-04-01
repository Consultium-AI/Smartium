export default function Sect12AntidotumEnBehandeling() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Antidotum en behandeling</h2>
      <p>
        Tegen waterstoffluoride bestaat calciumgluconaat in verschillende vormen. Dat is belangrijk, omdat fluoride bindt
        aan vrij calcium. Daardoor kan hypocalciëmie ontstaan.
      </p>
      <p>De behandeling hangt af van de blootstellingsroute:</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 4. Behandeling bij waterstoffluoride</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Blootstellingsroute
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Behandeling
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Inhalatie</td>
              <td className="px-4 py-3 align-top">
                Vernevelen met calciumgluconaat, 4 ml calciumgluconaatoplossing 2,5%; daarnaast symptomatische behandeling
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Ingestie</td>
              <td className="px-4 py-3 align-top">
                Melk laten drinken om Ca2+-ionen te herstellen; andere calciumoplossingen kunnen ook worden gegeven, zoals
                calciumgluconaat, of calciumcarbonaat om te kauwen
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Dermale blootstelling</td>
              <td className="px-4 py-3 align-top">
                Besmette kleding verwijderen, huid spoelen met water, blootgestelde huid behandelen met calciumgluconaatgel
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Bij verdunde waterstoffluoride blijft een groot deel ongedissocieerd. Daardoor kan het gemakkelijk door lipofiel
        weefsel heen dringen en diep subcutaan weefsel bereiken. Daar vormt het onoplosbare zouten met weefselkationen,
        vooral met calcium. Zo wordt het vrije calcium gebonden en ontstaat hypocalciëmie.
      </p>
      <div className="rounded-xl border-l-4 border-primary-400 bg-primary-50 dark:bg-primary-500/10 p-4 space-y-2">
        <p className="font-semibold text-primary-900 dark:text-primary-200">Aandacht-vragetje</p>
        <p>
          Waarom is calciumgluconaat zo belangrijk?{'  '}Omdat fluoride calcium bindt en daardoor schade en hypocalciëmie
          veroorzaakt. Calciumgluconaat helpt dit tegen te gaan.
        </p>
      </div>
    </div>
  )
}
