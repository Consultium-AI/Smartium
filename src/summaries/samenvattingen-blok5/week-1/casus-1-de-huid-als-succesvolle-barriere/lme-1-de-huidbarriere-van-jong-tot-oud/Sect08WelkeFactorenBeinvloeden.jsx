export default function Sect08WelkeFactorenBeinvloeden() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Welke factoren beïnvloeden de huidbarrière?</h2>
      <p>
        Er zijn factoren die de huidbarrière juist ongunstig beïnvloeden en factoren die haar gunstig ondersteunen.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
        Tabel 3. Ongunstige en gunstige factoren voor de huidbarrière
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Ongunstige factoren
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Gunstige factoren
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">
                Veel water- en zeepcontact, vooral vaak, heet en lang douchen
              </td>
              <td className="px-4 py-3 align-top">Water- en zeepcontact beperken</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Vaak desinfecteren van de huid</td>
              <td className="px-4 py-3 align-top">De huid frequent invetten met een neutrale zalf of emolliens</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Overmatige peelings, zoals retinoïden</td>
              <td className="px-4 py-3 align-top">Emolliens zoals cetomacrogolzalf, koelzalf, vaseline-paraffine</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Afkeer van vette, plakkerige zalven</td>
              <td className="px-4 py-3 align-top">Vette zalven accepteren en consequent gebruiken</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Wat gebeurt er bij veel wassen?</h2>
      <p>
        Veel water- en zeepcontact is ongunstig voor de huidbarrière. Vooral vaak, heet en lang douchen geeft een ongunstig effect. Daardoor kan de huid droger en kwetsbaarder worden.
      </p>
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Wat is het effect van desinfectie en peelings?</h2>
      <p>
        Vaak desinfecteren van de huid kan het microbioom ontregelen. Overmatige peelings, zoals retinoïden, kunnen de barrière eveneens verstoren.
      </p>
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Waarom zijn zalven juist gunstig?</h2>
      <p>Neutrale zalven en emolliens helpen om de huidbarrière te ondersteunen. Voorbeelden zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>cetomacrogolzalf</li>
        <li>koelzalf</li>
        <li>vaseline-paraffine</li>
      </ul>
      <p>Emolliens helpen dus om de huid soepel te houden en de barrière te ondersteunen.</p>
      <p>
        <span className="font-semibold">Aandacht-vraag:</span> Waarom wordt de huid liever ingesmeerd dan vaak gewassen?</p>
      <p className="mt-2">
        <span className="font-semibold">Mini-antwoord:</span>{' '}Omdat vaak wassen de barrière belast, terwijl een neutrale zalf de huid ondersteunt en helpt beschermen.
      </p>
    </div>
  )
}
