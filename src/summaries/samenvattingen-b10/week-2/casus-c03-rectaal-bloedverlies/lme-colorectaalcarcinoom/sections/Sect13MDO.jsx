export default function Sect13MDO() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Bespreking in het MDO</h2>
      <p>
        Na verzamelen van alle informatie volgt bespreking in een multidisciplinair overleg (MDO). Het doel is om een zo
        passend mogelijke behandeling te kiezen voor de patiënt. In zo’n overleg doen meerdere specialisten mee, zoals:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>chirurg,</li>
        <li>oncoloog,</li>
        <li>radioloog,</li>
        <li>radiotherapeut,</li>
        <li>MDL-arts,</li>
        <li>geriater,</li>
        <li>research team bij lopende studies.</li>
      </ul>
      <p>In een MDO weeg je niet alleen de tumor mee, maar ook de patiënt:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          WHO-performance status: hoe goed functioneert iemand lichamelijk in het dagelijks leven?
        </li>
        <li>Comorbiditeit</li>
        <li>Wensen van de patiënt</li>
      </ul>
      <p>
        Ook spelen kwaliteit en kwantiteit van leven mee, en de balans tussen kans op progressie en het risico van
        behandeling.
      </p>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 5. Factoren in de MDO-afweging</h3>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
              <tr>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">
                  Tumor- en patiëntfactoren
                </th>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">Voorbeelden</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-900/40">
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">Tumorstadium</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">T, N, M</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">
                  Proliferatie van ziekte
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Irresectabel, lymfklier- en/of afstandsmetastasen
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">Behandelrisico</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Operatie, chemotherapie, radiotherapie
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">Patiëntfactoren</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Leeftijd, conditie, comorbiditeit, wensen
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">Setting</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Spoed of gepland</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>De mortaliteit van oncologische resectie varieert:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>electieve chirurgie: 30-dagen mortaliteit 2–5%;</li>
        <li>spoedchirurgie, bijvoorbeeld bij ileus: 8–24%.</li>
      </ul>
      <p>Morbide complicaties zijn onder andere:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>naadlekkage,</li>
        <li>ileus door adhesies intra-abdominaal,</li>
        <li>bloeding,</li>
        <li>littekenbreuk waarvoor later operatie nodig kan zijn.</li>
      </ul>
      <p>De mortaliteit van chemotherapie is laag:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>adjuvante chemo: &lt;1% (60-dagen mortaliteit);</li>
        <li>chemo in palliatieve setting: iets hoger, 2–3%.</li>
      </ul>
    </div>
  )
}
