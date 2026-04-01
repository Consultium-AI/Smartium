export default function Sect06Risicofactoren() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Risicofactoren</h2>
      <p>
        Er zijn verschillende risicofactoren voor het krijgen van een necrotiserende wekedeleninfectie. Die factoren
        vergroten de kans op het ontstaan van de infectie.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Belangrijke risicofactoren</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Risicofactor
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Toelichting
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Intraveneus drugsgebruik
              </td>
              <td className="px-3 py-3 align-top">Geeft een ingang voor bacteriën</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Trauma of chirurgische ingreep
              </td>
              <td className="px-3 py-3 align-top">Doorbreking van de huid kan een port d’entrée vormen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Diabetes mellitus</td>
              <td className="px-3 py-3 align-top">Verhoogt de kans op infectie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Obesitas</td>
              <td className="px-3 py-3 align-top">Geeft verhoogd risico</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Chronische nierinsufficiëntie
              </td>
              <td className="px-3 py-3 align-top">Geeft verhoogd risico</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">HIV-infectie</td>
              <td className="px-3 py-3 align-top">Verminderde afweer</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Alcoholabusus</td>
              <td className="px-3 py-3 align-top">Verhoogde kans op infectie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Insectenbeten</td>
              <td className="px-3 py-3 align-top">Doorbreking van de huid</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Gastro-intestinale perforatie
              </td>
              <td className="px-3 py-3 align-top">Kan een ingang voor ziekteverwekkers geven</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Veel van deze factoren hebben te maken met een verlaagde afweer of met een doorbreking van de huid. Een recente
        huiddoorbraak door bijvoorbeeld een insect, trauma, een vervuilde naald of een operatie kan een gemakkelijke
        ingang zijn voor bacteriën.
      </p>
      <p>
        Belangrijk is ook dat niet alleen duidelijk zieke of kwetsbare patiënten een necrotiserende wekedeleninfectie
        kunnen krijgen; ook ogenschijnlijk gezonde patiënten kunnen dit oplopen.
      </p>
    </div>
  )
}
