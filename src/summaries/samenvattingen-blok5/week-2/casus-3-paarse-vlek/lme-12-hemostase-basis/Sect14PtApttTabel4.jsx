export default function Sect14PtApttTabel4() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Secundaire hemostase meten: PT en APTT</h3>
      <p>De secundaire hemostase meet je vooral met:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>PT (protrombinetijd);</li>
        <li>APTT (geactiveerde partiële tromboplastinetijd).</li>
      </ul>
      <p>
        De PT is de tijd die nodig is om plasma te laten stollen na toevoeging van thromboplastine en calcium. PT kun je
        gebruiken:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>voor screening op stollingsfactordeficiënties;</li>
        <li>voor monitoring van antistollingsmedicatie via de INR.</li>
      </ul>
      <p>
        De APTT is de tijd die nodig is om plasma te laten stollen na toevoeging van fosfolipiden en calcium. Het
        APTT-reagens bevat geen tissue factor. APTT kun je gebruiken voor:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>screening op stollingsfactordeficiënties;</li>
        <li>opsporen van autoantistoffen tegen stollingsfactoren;</li>
        <li>monitoring van heparinetherapie;</li>
        <li>opsporen van lupus anticoagulans.</li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 4. Wat betekenen verlengde PT en APTT?</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Uitslag
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Mogelijke oorzaken
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">PT normaal, APTT normaal</td>
              <td className="px-4 py-3 align-top">Geen afwijkingen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">PT verlengd, APTT normaal</td>
              <td className="px-4 py-3 align-top">
                Vitamine K tekort, factor VII deficiëntie, medicatie (coumarines)
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">PT normaal, APTT verlengd</td>
              <td className="px-4 py-3 align-top">
                Heparine, factordeficiëntie VIII/IX/XI/XII, PK of HK, antistoffen tegen stollingsfactoren, lupus
                anticoagulans
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">PT verlengd, APTT verlengd</td>
              <td className="px-4 py-3 align-top">
                Factordeficiëntie II/V/X of fibrinogeen, leverfalen, vitamine K tekort, medicatie (coumarines), verbruik
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Belangrijk is dat je bij een afwijkende uitslag niet alleen aan “stollingsstoornis” denkt, maar ook kijkt welk
        deel van de hemostase waarschijnlijk betrokken is.
      </p>
    </div>
  )
}
