export default function Sect02ExocrieneOpbouw () {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        De exocriene pancreas: opbouw en hoofdtaak
      </h2>
      <p>
        De exocriene pancreas is een belangrijk orgaan in de vertering van voedsel. De klier bestaat grofweg uit twee
        soorten functionele onderdelen:{' '}
        <strong className="text-slate-900 dark:text-slate-100">acinaire cellen</strong> en{' '}
        <strong className="text-slate-900 dark:text-slate-100">ductale epitheelcellen</strong>. Samen zorgen zij ervoor
        dat de pancreasafscheiding goed past bij de vertering in het darmkanaal.
      </p>
      <p>
        De <strong className="text-slate-900 dark:text-slate-100">acinaire cellen</strong> maken vooral{' '}
        <strong className="text-slate-900 dark:text-slate-100">(pro-)enzymen</strong> en scheiden deze uit. Dat zijn
        stoffen die nodig zijn voor de afbraak van koolhydraten, vetten en eiwitten. De{' '}
        <strong className="text-slate-900 dark:text-slate-100">ductale epitheelcellen</strong> zorgen vooral voor de
        afgifte van <strong className="text-slate-900 dark:text-slate-100">bicarbonaat</strong>, waardoor het
        pancreassap een <strong className="text-slate-900 dark:text-slate-100">hoge pH</strong> krijgt. Daardoor wordt
        de zure maaginhoud in het duodenum geneutraliseerd en wordt de darmwand beschermd.
      </p>
      <p>
        De pancreas is georganiseerd in <strong className="text-slate-900 dark:text-slate-100">acini</strong>. Meerdere
        acini vormen samen een <strong className="text-slate-900 dark:text-slate-100">lobulus</strong>. De afscheiding
        loopt via een vertakt buizensysteem: van de acini via de{' '}
        <strong className="text-slate-900 dark:text-slate-100">intercalated ducts</strong> naar de grotere intra- en
        interlobulaire ducti, en uiteindelijk via de ductus pancreaticus naar de{' '}
        <strong className="text-slate-900 dark:text-slate-100">papil van Vater</strong> in het duodenum.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Belangrijkste celtypen van de exocriene pancreas
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Celtype</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Belangrijkste functie</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Belangrijkste producten</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">Acinaire cel</td>
              <td className="p-3 align-top">Maakt verteringsenzymen en pro-enzymen</td>
              <td className="p-3 align-top">α-amylase, lipase, peptidasen als zymogenen, chloride</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Ductale epitheelcel</td>
              <td className="p-3 align-top">Zorgt voor hoog bicarbonaatgehalte en waterige secretie</td>
              <td className="p-3 align-top">Bicarbonaat, chloride, water</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Centroacinair/ductaal begin</td>
              <td className="p-3 align-top">Overgang tussen acinus en ductus</td>
              <td className="p-3 align-top">Start van ductale secreetstroom</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-2">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          <strong className="font-semibold">Aandachtsvraag:</strong> waarom is de pancreasafscheiding zo belangrijk
          voor de darm?
        </p>
        <p className="m-0 mt-2">
          <strong className="font-semibold">Kort antwoord:</strong> omdat de enzymen pas goed werken in de darm en
          omdat bicarbonaat de zure maaginhoud neutraliseert en de darmwand beschermt.
        </p>
      </div>
    </div>
  )
}
