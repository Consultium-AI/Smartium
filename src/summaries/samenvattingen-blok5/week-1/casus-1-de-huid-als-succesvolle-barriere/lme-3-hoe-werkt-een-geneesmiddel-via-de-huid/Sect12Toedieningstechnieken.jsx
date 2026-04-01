export default function Sect12Toedieningstechnieken() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Toedieningstechnieken</h2>
      <p>
        Door de beperkte bioavailability van geneesmiddelen via de transdermale route zijn er verschillende technieken
        ontwikkeld om opname via de huid te verbeteren. De meest gebruikte manier van medicatietoediening via de huid
        blijft echter de conventionele naaldinjectie.
      </p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Techniek
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Conventionele naaldinjectie
              </td>
              <td className="px-4 py-3 align-top">
                Klassieke naald die de huidbarrière doorbreekt; kan subcutaan of intramusculair worden gegeven
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Naaldvrije pneumatische injectie
              </td>
              <td className="px-4 py-3 align-top">
                Geneesmiddel wordt onder hoge druk door de huid gespoten; vrijwel pijnloos
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Micronaaldsystemen</td>
              <td className="px-4 py-3 align-top">
                Rijen kleine naaldjes dringen slechts de bovenste huidlagen binnen en geven het geneesmiddel hoog in de huid
                af
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Fractionele ablatieve laser
              </td>
              <td className="px-4 py-3 align-top">
                Kleine laserstralen creëren microdefecten in de huid waardoor opname verbetert
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Conventionele injectie</h3>
      <p>
        Een conventionele naaldinjectie is een klassieke naald waarmee de huidbarrière wordt gepenetreerd. De naald
        passeert de huid tot in de subcutis bij een subcutane injectie of tot in de spierlaag bij een intramusculaire
        injectie. Een voordeel is dat verschillende hoeveelheden geneesmiddel kunnen worden toegediend. Een nadeel is dat
        injecteren pijnlijk kan zijn, vooral bij herhaald gebruik. Ook kan er naaldangst zijn.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Naaldvrije pneumatische injectie</h3>
      <p>
        Bij deze techniek wordt het geneesmiddel onder hoge druk door de huid gespoten, zonder naald. Een belangrijk
        voordeel is dat deze methode vrijwel pijnloos is. Deze techniek is relatief nieuw en wordt nog verder ontwikkeld.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Micronaaldsystemen</h3>
      <p>
        Hierbij worden rijen kleine naaldjes in de huid gedrukt. Deze naaldjes dringen slechts de bovenste huidlagen
        binnen en geven het geneesmiddel hoog in de huid af.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Fractionele ablatieve laser</h3>
      <p>
        Bij fractionele ablatieve lasertherapie worden rijen zeer kleine laserstralen gebruikt om huidkolommen te
        verdampen. Daardoor ontstaan minuscule openingen, waardoor een op de huid aangebracht medicament beter kan
        doordringen. Deze gecontroleerde beschadiging verstoort de barrière van de huid, zodat geneesmiddelen gemakkelijker
        kunnen binnendringen. Deze technieken zijn vooral geschikt voor lage doseringen geneesmiddelen.
      </p>
    </div>
  )
}
