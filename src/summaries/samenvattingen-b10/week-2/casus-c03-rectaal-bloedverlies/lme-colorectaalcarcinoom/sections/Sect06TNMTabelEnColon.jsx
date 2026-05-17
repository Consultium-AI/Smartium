export default function Sect06TNMTabelEnColon() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">TNM-stadiëring: waarom zo belangrijk?</h2>
      <p>
        CRC wordt gestadieerd volgens de TNM-classificatie van de AJCC. De stadiëring loopt van stadium I tot en met IV en
        bepaalt de behandelmogelijkheden en de prognose.
      </p>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. TNM-stadiëring in het kort</h3>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
              <tr>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">Onderdeel</th>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">Betekenis</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-900/40">
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">T</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Diepte van tumorinvasie</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">N</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Lymfekliermetastasen</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">M</td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                  Metastase op afstand, inclusief M1-klieren
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Stadiëring van coloncarcinoom</h3>
        <p className="mt-4">
          Bij coloncarcinoom is CT-thorax-abdomen standaard voor locoregionale stadiëring. Een CT geeft extra informatie
          naast de coloscopie:
        </p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>
            de ligging van een eventueel obstructieve tumor, bijvoorbeeld rechts, transvers of links;
          </li>
          <li>de grootte en lengte van de tumor;</li>
          <li>of er sprake is van doorgroei door de colonwand heen;</li>
          <li>lokale lymfeklieren en metastasen op afstand;</li>
          <li>complicaties, zoals obstructie of betrokkenheid van andere organen of vaten.</li>
        </ul>
        <p className="mt-4">De T-stadia van coloncarcinoom zijn:</p>
        <ul className="list-disc pl-6 space-y-2 mt-2">
          <li>T1: invasie van de submucosa;</li>
          <li>T2: invasie van de muscularis propria;</li>
          <li>T3: invasie van de subserosa;</li>
          <li>
            T4: invasie in een naburig orgaan of structuur, of perforatie van het viscerale peritoneum.
          </li>
        </ul>
      </div>
    </div>
  )
}
