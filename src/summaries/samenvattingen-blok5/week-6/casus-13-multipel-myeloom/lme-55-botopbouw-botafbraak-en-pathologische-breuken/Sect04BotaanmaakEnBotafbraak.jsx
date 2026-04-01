export default function Sect04BotaanmaakEnBotafbraak() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Botaanmaak en botafbraak</h2>
      <p>
        Bot wordt gedurende het leven steeds opnieuw aangepast. Dit heet remodelling: de vervanging en omvorming van bot
        tijdens het leven. Hierbij horen botafbraak en botaanmaak altijd bij elkaar.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Remodelling in één oogopslag</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Stap
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Cel die overheerst
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Wat gebeurt er?
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Resorptie</td>
              <td className="px-4 py-3 align-top">Osteoclast</td>
              <td className="px-4 py-3 align-top">Oud bot wordt afgebroken</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Formatie</td>
              <td className="px-4 py-3 align-top">Osteoblast</td>
              <td className="px-4 py-3 align-top">Nieuw bot wordt gevormd</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Mineralisatie</td>
              <td className="px-4 py-3 align-top">Osteoblast/ matrix</td>
              <td className="px-4 py-3 align-top">Osteoid wordt hard bot</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Omvorming</td>
              <td className="px-4 py-3 align-top">Beide samen</td>
              <td className="px-4 py-3 align-top">Oud bot wordt vervangen door nieuw bot</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De combinatie van resorptie en formatie wordt ook wel de bone-modelling unit (BMU) genoemd. Bij remodelling is
        dus niet alleen afbraak belangrijk, maar ook de daaropvolgende opbouw. Die twee processen zijn aan elkaar
        gekoppeld.
      </p>
      <p>
        In bot zie je soms cementlijnen. Deze lijnen markeren eerdere zones van remodelling. Ze zijn dus eigenlijk sporen
        van oud bot dat eerder is vervangen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Corticaal en trabeculair bot</h3>
      <p>Remodelling vindt zowel plaats in corticaal bot als in trabeculair bot.</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Trabeculair bot: remodelling gebeurt aan het oppervlak van de trabekels.</li>
        <li>Corticaal bot: er ontstaat een resorptiegebied dat daarna weer wordt opgevuld.</li>
      </ul>
      <p>Op beide plaatsen geldt hetzelfde basisprincipe: eerst resorptie, daarna formatie.</p>
    </div>
  )
}
