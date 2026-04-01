export default function Sect07TeaAndToast() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Tea-and-toast-hyponatriëmie</h2>
      <p>
        Tea-and-toast-hyponatriëmie is een vorm van hyponatriëmie die kan ontstaan bij mensen die weinig eten en dus weinig osmolen binnenkrijgen. De naam verwijst naar een voeding met weinig zout en weinig eiwit, dus weinig opgeloste deeltjes. Denk aan vooral thee en toast: veel vocht, weinig bouwstoffen.
      </p>
      <p>
        Bij deze situatie is het probleem dat de nier water alleen goed kan uitscheiden als er voldoende osmolen zijn. Als de osmole-inname laag is, dan is ook de maximale wateruitscheiding laag.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Waarom is dit vooral een probleem bij oudere mensen?</h3>
      <p>Oudere mensen hebben vaker:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>een verminderde nierfunctie;</li>
        <li>een lagere voedselinname;</li>
        <li>soms minder dorst- of eetlust;</li>
        <li>meer kans op onbedoeld veel drinken op advies van buitenaf.</li>
      </ul>
      <p>
        Daardoor kunnen zij relatief snel in de problemen komen als zij veel water drinken terwijl zij weinig osmolen binnenkrijgen.
      </p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 3. Vergelijking tussen normale situatie en tea-and-toast-situatie</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Situatie</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Gevolg voor wateruitscheiding</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Voldoende osmolen, normale nierfunctie</td>
                <td className="px-4 py-3">veel water kan worden uitgescheiden</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Weinig osmolen, normale nierfunctie</td>
                <td className="px-4 py-3">wateruitscheiding daalt</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Weinig osmolen, verminderde nierfunctie</td>
                <td className="px-4 py-3">wateruitscheiding daalt nog verder</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Veel water drinken ondanks lage uitscheidingscapaciteit</td>
                <td className="px-4 py-3">risico op hyponatriëmie</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Wat is het praktische advies?</h3>
      <p>
        Het advies moet afgestemd worden op de persoon. In plaats van iedereen hetzelfde aantal liters per dag te laten drinken, is het verstandiger om te letten op signalen zoals:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>de kleur van de urine: lichtgeel is meestal goed;</li>
        <li>donkergekleurde urine: meer drinken;</li>
        <li>heel lichte urine: minder drinken;</li>
        <li>lichaamsgewicht: niet onbedoeld afvallen of aankomen.</li>
      </ul>
      <p>
        Als iemand een weegschaal heeft, kan dat ook helpen. Zo voorkom je dat iemand onbedoeld “een hyponatriëmie indrinkt”.
      </p>
    </div>
  )
}
