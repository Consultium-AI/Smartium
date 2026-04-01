export default function Sect04DeHuidAlsBarriere() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De huid als barrière</h2>
      <p>
        De huid is niet alleen een omhullend orgaan, maar vooral ook een barrière. Dat betekent dat de huid het lichaam
        beschermt tegen invloeden van buitenaf. Juist daarom is de opname van geneesmiddelen via de huid vaak beperkt.
      </p>
      <p>
        De huid bestaat uit verschillende lagen, en elke laag heeft een eigen functie. De epidermis is hierbij de
        belangrijkste laag voor bescherming tegen invloeden van buitenaf. Binnen de epidermis vormt vooral de stratum
        corneum de belangrijkste barrière.
      </p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Huidlaag
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Ligging / opbouw
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Belangrijkste functie
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Stratum basale</td>
              <td className="px-4 py-3 align-top">Onderste laag van de epidermis, direct tegen de dermis</td>
              <td className="px-4 py-3 align-top">
                Celvernieuwing; bevat stamcellen, melanocyten en Merkelcellen
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Stratum spinosum</td>
              <td className="px-4 py-3 align-top">Direct boven het stratum basale</td>
              <td className="px-4 py-3 align-top">
                Stevigheid en elasticiteit; bevat Langerhanscellen voor immuunafweer
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Stratum granulosum</td>
              <td className="px-4 py-3 align-top">Boven het stratum spinosum</td>
              <td className="px-4 py-3 align-top">Keratinisatie en vorming van een waterbarrière</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Stratum lucidum</td>
              <td className="px-4 py-3 align-top">Alleen aanwezig in dikke huid, zoals handpalmen en voetzolen</td>
              <td className="px-4 py-3 align-top">Extra bescherming en stevigheid op plekken met veel wrijving</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Stratum corneum</td>
              <td className="px-4 py-3 align-top">Buitenste laag van de epidermis</td>
              <td className="px-4 py-3 align-top">
                Fysieke barrière tegen mechanische schade, pathogenen en schadelijke stoffen; voorkomt waterverlies
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De dermis ligt onder de epidermis en vormt zelf niet de primaire barrière, maar speelt wel een belangrijke
        ondersteunende rol. Zo helpt de dermis de huid soepel te houden en beschermt deze tegen uitdroging door onder
        andere de productie van talg en andere oliën. De subcutis ligt daaronder en bestaat vooral uit vetweefsel.
      </p>
    </div>
  )
}
