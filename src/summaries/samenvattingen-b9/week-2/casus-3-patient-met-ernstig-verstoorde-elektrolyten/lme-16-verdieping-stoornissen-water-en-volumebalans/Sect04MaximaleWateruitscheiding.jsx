export default function Sect04MaximaleWateruitscheiding() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Maximale wateruitscheiding: hoeveel kan de nier eigenlijk kwijt?</h2>
      <p>
        De nier kan per dag verrassend veel water uitscheiden, maar er is een grens. Gezonde nieren zijn in staat om water sterk te verdunnen, maar zelfs dan is er een maximale diurese. Uit experimenten blijkt dat die maximaal ongeveer 750 mL per uur kan zijn. Omgerekend is dat ongeveer 18 liter per dag bij een normale GFR van 125 mL/min.
      </p>
      <p>Een handige vuistregel is:</p>
      <p className="font-mono text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/50 px-3 py-2 rounded-lg">
        maximale diurese ≈ 10% van de GFR
      </p>
      <p>Dat helpt om grof te schatten hoeveel water iemand per uur of per dag kan uitscheiden.</p>
      <p>Wat betekent dat in de praktijk?</p>
      <p>
        Als iemand een normale nierfunctie heeft en per dag 600 osmolen eet of drinkt, dan kan die persoon maximaal ongeveer 18 liter water per dag uitscheiden. Bij maximale verdunning van 40 mOsmol/kg is dat zelfs nog iets anders te berekenen: 600 / 40 = 15 liter. Om aan de theoretische maximale uitscheiding te komen, moet iemand dus genoeg osmolen binnenkrijgen.
      </p>
      <p>Als iemand minder osmolen binnenkrijgt, wordt de maximale wateruitscheiding lager. Bijvoorbeeld:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>bij 200 osmolen inname en maximale verdunning van 200 mOsmol/kg kan nog maar 1 liter water worden uitgescheiden;</li>
        <li>er zijn dan simpelweg te weinig deeltjes om meer water te kunnen verwijderen.</li>
      </ul>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandachtsvraag: Wat gebeurt er als iemand weinig eet en weinig osmolen binnenkrijgt?</p>
      <p className="mt-2">
        <span className="font-semibold">Mini-antwoord:</span>{' '}Dan kan de nier minder water kwijt, ook al zou die normaal veel meer kunnen uitscheiden.
        </p>
      </div>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Verminderde nierfunctie maakt het probleem groter</h3>
      <p>Bij een gestoorde nierfunctie is de capaciteit om water uit te scheiden lager. Dat komt doordat:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>de GFR lager is;</li>
        <li>de nier minder goed kan verdunnen en concentreren.</li>
      </ul>
      <p>
        Bij een eGFR van 35 mL/min en maximale verdunning van 200 mOsmol/kg wordt de maximale wateruitscheiding ongeveer 600 / 200 = 3 liter per dag. De theoretische vuistregel van 10% van de GFR zou hier nog op ongeveer 5 liter per dag uitkomen, maar in de praktijk is de verdunningscapaciteit limiterend.
      </p>
      <p>
        Als de nierfunctie nog slechter wordt, bijvoorbeeld een eGFR van 10 mL/min, dan daalt de maximale wateruitscheiding nog verder, tot ongeveer 1,4 liter per dag.
      </p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 2. Voorbeelden van maximale wateruitscheiding</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Situatie</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Uitkomst</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Normale nierfunctie, 600 osmolen/dag</td>
                <td className="px-4 py-3">ongeveer 15–18 liter/dag</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">eGFR 35 mL/min, maximale verdunning 200 mOsmol/kg</td>
                <td className="px-4 py-3">ongeveer 3 liter/dag</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">eGFR 35 mL/min, 200 osmolen/dag</td>
                <td className="px-4 py-3">ongeveer 1 liter/dag</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">eGFR 10 mL/min</td>
                <td className="px-4 py-3">ongeveer 1,4 liter/dag</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
