export default function Sect12BehandelingMetAdrenalineEnTabel3() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Behandeling van anafylaxie</h2>
      <p>De kern van de behandeling is helder: adrenaline intramusculair, hoe eerder hoe beter.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Effecten van adrenaline</h3>
      <p>Adrenaline werkt op meerdere adrenerge receptoren.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Effecten van adrenaline</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Receptor
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Effect
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Beta-1</td>
              <td className="px-4 py-3 align-top">hogere contractiekracht, hogere hartfrequentie, hoger cardiac output</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Beta-2</td>
              <td className="px-4 py-3 align-top">
                afname van vrijgifte van histamine en andere mediatoren, bronchodilatatie
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Alpha-1</td>
              <td className="px-4 py-3 align-top">
                perifere vasoconstrictie, verhoging van de bloeddruk, afname van larynxoedeem
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Deze combinatie maakt adrenaline het centrale geneesmiddel bij anafylaxie.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Toedieningsroute</h3>
      <p>De module noemt twee belangrijke praktische punten:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          de piekconcentratie is hoger en sneller bereikt bij intramusculaire dan bij subcutane toediening
        </li>
        <li>
          de piekconcentratie is hoger en sneller bij toediening in de m. vastus lateralis dan in de bovenarm
        </li>
      </ul>
      <p>Voor kinderen boven 30 kg wordt een dosis van 0,3 mg genoemd.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Auto-injector</h3>
      <p>
        Er worden verschillende adrenaline auto-injectoren getoond. Het praktische doel hiervan is dat patiënten snel
        adrenaline kunnen toedienen wanneer dat nodig is.
      </p>
    </div>
  )
}
