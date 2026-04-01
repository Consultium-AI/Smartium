export default function Sect02SystemischeTherapieBijKanker() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Systemische therapie bij kanker</h2>
      <p>
        Systemische therapie betekent dat het geneesmiddel het hele lichaam kan bereiken. Dat gebeurt bijvoorbeeld via de
        bloedbaan, zoals bij een infuus, of via orale inname. Het idee is dus dat de behandeling niet alleen op één plek
        werkt, maar door het hele lichaam verspreid wordt. Dat is belangrijk bij kanker, omdat tumorcellen zich vaak al
        kunnen hebben verspreid, ook als dat nog niet zichtbaar is.
      </p>
      <p>
        Bij kanker vallen onder systemische therapie in het algemeen onder andere chemotherapie, anti-hormonale therapie,
        immunotherapie en doelgerichte therapie. Lokaal werkende behandelingen, zoals operatie en radiotherapie, vallen
        hier niet onder.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Belangrijkste vormen van therapie</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Type behandeling
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Voorbeelden
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kernidee
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Systemische therapie</td>
              <td className="px-4 py-3 align-top">
                chemotherapie, anti-hormonale therapie, immunotherapie, doelgerichte therapie
              </td>
              <td className="px-4 py-3 align-top">bereikt het hele lichaam via bloedbaan of tablet</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Lokale therapie</td>
              <td className="px-4 py-3 align-top">operatie, radiotherapie</td>
              <td className="px-4 py-3 align-top">werkt op één plaats of regio</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Bij melanoom liggen de belangrijkste systemische behandelingen vooral bij immunotherapie en doelgerichte therapie.
        Dat zijn ook de twee grote behandelvormen waar deze stof over gaat.
      </p>
    </div>
  )
}
