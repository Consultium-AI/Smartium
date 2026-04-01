export default function Sect03FysiologiePleuravochtproductie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Fysiologie van pleuravochtproductie</h2>
      <p>
        Pleuravocht ontstaat door een balans tussen <span className="font-semibold">vorming</span> en <span className="font-semibold">afvoer</span>. In normale omstandigheden is die balans in evenwicht: er wordt ongeveer evenveel pleuravocht geproduceerd als weer geresorbeerd. Daardoor blijft de hoeveelheid vocht in de pleuraholte klein.
      </p>
      <p>De productie van pleuravocht hangt samen met drie belangrijke factoren:</p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>
          <span className="font-semibold">Hydrostatische druk</span>
        </li>
        <li>
          <span className="font-semibold">Colloïd osmotische druk</span>
        </li>
        <li>
          <span className="font-semibold">Permeabiliteit van de pleura</span>
        </li>
      </ol>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Hydrostatische druk</h3>
      <p>
        Hydrostatische druk is de druk waarmee bloed tegen de vaatwand duwt. Als deze druk toeneemt, wordt vocht makkelijker uit de capillairen geperst naar het interstitium en uiteindelijk naar de pleuraholte. Capillairen hebben een dunne wand, waardoor uitwisseling van stoffen en vocht goed mogelijk is.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Colloïd osmotische druk</h3>
      <p>
        De <span className="font-semibold">colloïd osmotische druk</span> is de osmotische druk die ontstaat door eiwitten in het bloed. Deze eiwitten houden vocht juist in de bloedvaten vast. Als de hydrostatische druk hoger is dan de colloïd osmotische druk, treedt vocht uit de capillairen naar buiten.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Permeabiliteit van de pleura</h3>
      <p>
        De <span className="font-semibold">permeabiliteit</span> geeft aan hoe makkelijk stoffen door de pleura kunnen lekken. Als de pleura beschadigd of ontstoken is, neemt de permeabiliteit toe. Dan kunnen ook grotere moleculen, zoals eiwitten, de pleuraholte in komen.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Factoren die pleuravochtproductie beïnvloeden</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Factor</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Effect bij toename/verandering</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Hydrostatische druk</td>
              <td className="px-4 py-3 align-top">Meer vocht uittreding uit capillairen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Colloïd osmotische druk</td>
              <td className="px-4 py-3 align-top">Minder vocht vasthouden in het bloed</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Permeabiliteit van de pleura</td>
              <td className="px-4 py-3 align-top">Meer lekkage van vocht en eiwitten</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De aannname is dat de <span className="font-semibold">meeste pleuravochtproductie</span> plaatsvindt in de <span className="font-semibold">pariëtale pleura</span>, omdat daar de hydrostatische druk gemiddeld hoger is en de capillairen dichter bij de pleuraholte liggen. Pleuravocht dat de pleuraholte bereikt, wordt vervolgens weer afgevoerd via de lymfebanen in de pariëtale pleura.
      </p>
    </div>
  )
}
