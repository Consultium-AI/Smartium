export default function Sect02Risicofactoren() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Risicofactoren voor colorectaalcarcinoom</h2>
      <p>
        Bij CRC is het handig om risicofactoren te verdelen in beïnvloedbare en niet of deels beïnvloedbare factoren. Dat
        maakt meteen duidelijk welke factoren je kunt herkennen, beïnvloeden of meenemen in de beoordeling.
      </p>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Risicofactoren voor CRC</h3>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
              <tr>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">
                  Beïnvloedbare factoren
                </th>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">
                  Niet (of deels) beïnvloedbare factoren
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-900/40">
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Overgewicht</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Familiair voorkomen van CRC
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Zittende leefstijl</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Lynch-syndroom</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Roken</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Inflammatory bowel disease (IBD)
                </td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Alcohol</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Mannelijk geslacht</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Inname van rood en bewerkt vlees
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Leeftijd &gt; 50 jaar</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Hoge bloeddruk</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Metaboolsyndroom</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Lage inname van calcium, vitamine D en foliumzuur
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2" />
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Een aantal niet-beïnvloedbare factoren kun je wel enigszins volgen, bijvoorbeeld door mensen met familiair CRC,
        Lynch of IBD frequenter te surveilleren.
      </p>
      <p>
        Aandachtsvraag: Waarom zijn deze risicofactoren belangrijk?{'  '}Mini-antwoord: Omdat ze helpen inschatten wie
        meer kans heeft op CRC en dus sneller of gerichter diagnostiek nodig heeft.
      </p>
    </div>
  )
}
