export default function Sect04Epidemiologie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Epidemiologie en incidentie</h2>
      <p>
        De incidentie van slokdarmkanker is in Nederland de afgelopen jaren duidelijk gestegen. Waar er in 1989 nog geen
        700 diagnoses waren, ligt dat aantal in 2024 rond de 2700. Opvallend is dat deze stijging vooral wordt gezien
        bij <strong className="text-slate-900 dark:text-slate-100">adenocarcinomen</strong> van de slokdarm. Het aantal{' '}
        <strong className="text-slate-900 dark:text-slate-100">plaveiselcelcarcinomen</strong> bleef veel stabieler.
      </p>
      <p>
        Ook is er een duidelijk verschil tussen mannen en vrouwen. De totale incidentie van slokdarmkanker nam bij mannen
        veel sterker toe dan bij vrouwen.
      </p>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 3. Belangrijke epidemiologische trends in Nederland
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Onderwerp
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Trend
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Totale incidentie</td>
                <td className="px-4 py-3 align-top">Sterke stijging in de afgelopen decennia</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Adenocarcinoom</td>
                <td className="px-4 py-3 align-top">Duidelijke toename</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Plaveiselcelcarcinoom</td>
                <td className="px-4 py-3 align-top">Relatief stabiel</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Mannen</td>
                <td className="px-4 py-3 align-top">Sterkere stijging dan bij vrouwen</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p>
        Wereldwijd is het beeld anders. Daar komt{' '}
        <strong className="text-slate-900 dark:text-slate-100">plaveiselcelcarcinoom</strong> veel vaker voor dan
        adenocarcinoom. Adenocarcinoom is wereldwijd minder dominant, maar speelt wel een belangrijke rol in bepaalde
        regio’s, zoals Noordwest-Europa en Noord-Amerika. Bij plaveiselcelcarcinoom is China een zeer groot aandeel in
        de mondiale verdeling.
      </p>
    </div>
  )
}
