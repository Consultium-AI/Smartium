export default function Sect07AdrenalineEnCortisol() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Adrenaline en cortisol</h2>
      <p>
        Naast insuline en glucagon spelen ook <strong className="text-slate-900 dark:text-slate-100">adrenaline</strong> en <strong className="text-slate-900 dark:text-slate-100">cortisol</strong> een belangrijke rol. Deze hormonen beïnvloeden het metabolisme niet alleen indirect via insuline- en glucagonsecretie, maar ook <strong className="text-slate-900 dark:text-slate-100">direct op doelcellen</strong> zoals lever-, vet- en spiercellen.
      </p>
      <p>
        Beide hormonen zorgen ervoor dat de <strong className="text-slate-900 dark:text-slate-100">bloedglucosespiegel stijgt</strong>. Dat past bij hun functie in stress en belasting: het lichaam moet snel extra energie beschikbaar maken.
      </p>
      <p>
        <strong className="text-slate-900 dark:text-slate-100">Cortisol</strong> draagt bij aan verhoging van de bloedglucose door <strong className="text-slate-900 dark:text-slate-100">afbraak van lichaamsweefsel</strong>. Daardoor komen bouwstenen vrij die kunnen worden gebruikt voor glucosevorming.
      </p>
      <p>
        <strong className="text-slate-900 dark:text-slate-100">Adrenaline</strong> zorgt op meerdere manieren voor beschikbaarheid van glucose, ook in spiercellen. Zelfs als er door een lage insulinespiegel minder GLUT4 in het membraan zit, kan adrenaline toch zorgen dat glucose beschikbaar wordt. In de lever bindt adrenaline aan een <strong className="text-slate-900 dark:text-slate-100">Gαs-gekoppelde β-adrenerge receptor</strong>. Daardoor worden metabole paden aangezet die lijken op die van glucagon. De lever haalt de energie voor deze processen uit <strong className="text-slate-900 dark:text-slate-100">vetzuuroxidatie</strong>. Het substraat daarvoor komt uit een ander weefsel, namelijk uit vetweefsel, waar adrenaline <strong className="text-slate-900 dark:text-slate-100">hormoonsensitief lipase</strong> moet activeren om vetzuren vrij te maken.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 6. Samenvatting van adrenaline en cortisol</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Hormoon</th>
              <th className="px-4 py-3 font-semibold">Belangrijk effect</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Adrenaline</td>
              <td className="px-4 py-3 align-top">Verhoogt snel de beschikbaarheid van glucose en energie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Cortisol</td>
              <td className="px-4 py-3 align-top">Verhoogt bloedglucose door afbraak van lichaamsweefsel en beschikbaar maken van bouwstenen</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
