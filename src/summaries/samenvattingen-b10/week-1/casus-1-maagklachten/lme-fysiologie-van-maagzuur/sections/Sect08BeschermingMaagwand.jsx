export default function Sect08BeschermingMaagwand() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Bescherming van de maagwand tegen maagzuur
      </h2>
      <p>
        De maagwand wordt beschermd door een <strong className="text-slate-900 dark:text-slate-100">slijmlaag</strong>.
        Mucuscellen scheiden <strong className="text-slate-900 dark:text-slate-100">mucus</strong> en{' '}
        <strong className="text-slate-900 dark:text-slate-100">bicarbonaat</strong> af. Daardoor ontstaat een
        beschermende laag aan het oppervlak van de maagwand, zodat het maagzuur de epitheelcellen niet kan bereiken.
      </p>
      <p>
        <strong className="text-slate-900 dark:text-slate-100">Prostaglandine E2</strong> heeft een beschermende
        werking. Het zorgt voor:
      </p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>
          meer <strong className="text-slate-900 dark:text-slate-100">mucussecretie</strong>;
        </li>
        <li>
          meer <strong className="text-slate-900 dark:text-slate-100">bicarbonaatsecretie</strong>;
        </li>
        <li>
          minder <strong className="text-slate-900 dark:text-slate-100">HCl-secretie</strong>;
        </li>
        <li>
          meer <strong className="text-slate-900 dark:text-slate-100">lokale doorbloeding</strong>;
        </li>
        <li>
          meer <strong className="text-slate-900 dark:text-slate-100">celproliferatie</strong>.
        </li>
      </ol>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">NSAIDs en maagulcera</h3>
      <p>
        NSAIDs kunnen maagbeschadiging veroorzaken. In het zure maaglumen worden ze geprotoneerd. Het niet-geïoniseerde
        NSAID kan dan de mucuscellen binnendringen. In de cel, waar de pH hoger is, wordt het weer geïoniseerd en blijft
        het vastzitten. Daardoor hoopt het zich op en ontstaat <strong className="text-slate-900 dark:text-slate-100">celschade</strong>.
      </p>
      <p>
        Bovendien remmen NSAIDs de vorming van prostaglandinen via{' '}
        <strong className="text-slate-900 dark:text-slate-100">COX-1</strong>. Daardoor neemt de beschermende werking
        van PGE2 af. Het gevolg is minder mucus, minder bicarbonaat en minder bescherming van de maagwand. Daarom
        kunnen <strong className="text-slate-900 dark:text-slate-100">maagbeschermers</strong> nodig zijn bij gebruik
        van NSAIDs.
      </p>
    </div>
  )
}
