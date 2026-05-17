export default function SectInleidingTractusDigestivus() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">INLEIDING (1)</h2>
      <p>
        Een bloeding uit de tractus digestivus (TD-bloeding) is een veelvoorkomende en potentieel levensbedreigende acute presentatie binnen de gastro-enterologie. De bloeding ontstaat wanneer er bloedverlies optreedt vanuit het lumen van het maag-darmkanaal. Klinisch kan dit zich presenteren met hematemesis, melena of rectaal bloedverlies, afhankelijk van de locatie van de bloeding en de passagesnelheid door de darm.
      </p>
      <p>Er wordt onderscheid gemaakt tussen:</p>
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-slate-50/80 dark:bg-slate-900/55 p-4 space-y-3">
          <h3 className="font-bold text-slate-900 dark:text-slate-100">1. Hoge tractus digestivus bloeding</h3>
          <p>Bron ligt proximaal van het ligament van Treitz. De belangrijkste anatomische structuren betrokken bij hoge bloedingen zijn: slokdarm, maag en duodenum.</p>
        </div>
        <div className="rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-slate-50/80 dark:bg-slate-900/55 p-4 space-y-3">
          <h3 className="font-bold text-slate-900 dark:text-slate-100">2. Lage tractus digestivus bloeding</h3>
          <p>Bron ligt distaal van het ligament van Treitz.</p>
          <p>Lage bloedingen ontstaan meestal vanuit: colon, rectum, terminale ileum.</p>
        </div>
      </div>
      <p>
        Deze indeling is klinisch relevant omdat etiologie, diagnostiek en behandeling verschillen tussen beide categorieën. In de praktijk kan de presentatie echter overlappen; bijvoorbeeld kan een zeer snelle hoge bloeding zich manifesteren als helderrood bloedverlies per anum.
      </p>
      <p>
        Bloedingen in de dunne darm zijn zeldzaam. In voorkomende gevallen kan een enteroscopie worden uitgevoerd. Er wordt in zo’n geval gebruik gemaakt van een endoscoop met een overtube. Op zowel de endoscoop als de overtube zit een ballon die kan worden opgeblazen.
      </p>
      <p>In de volgende tabel is samengevat hoe de diverse locaties bereikt kunnen worden.</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="bg-primary-900 text-white dark:bg-primary-950">
              <th className="p-3 text-left font-semibold border border-white/15"> </th>
              <th className="p-3 text-left font-semibold border border-white/15">Slokdarm, maag en duodenum</th>
              <th className="p-3 text-left font-semibold border border-white/15">Dunne darm</th>
              <th className="p-3 text-left font-semibold border border-white/15">Dikke darm</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="p-3 text-left font-bold text-red-600 dark:text-red-400 bg-slate-50 dark:bg-slate-800/60 border border-slate-200 dark:border-slate-600 align-top">
                Endoscopie
              </th>
              <td className="p-3 border border-slate-200 dark:border-slate-600 align-top">Gastroscopie</td>
              <td className="p-3 border border-slate-200 dark:border-slate-600 align-top">
                Enteroscopie
                <br />
                1. Dubbel-ballon
                <br />
                2. Spiraal
              </td>
              <td className="p-3 border border-slate-200 dark:border-slate-600 align-top">Colonoscopie</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
