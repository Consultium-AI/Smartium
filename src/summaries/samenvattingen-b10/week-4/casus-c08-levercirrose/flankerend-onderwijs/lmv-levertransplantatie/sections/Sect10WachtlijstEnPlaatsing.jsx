export default function Sect10WachtlijstEnPlaatsing() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Wachtlijst en plaatsing</h2>
      <p>De plaats op de wachtlijst hangt af van:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">bloedgroep</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">status</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">MELD-score</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">exceptiepunten</strong>.
        </li>
      </ul>
      <p>
        De <strong className="text-slate-900 dark:text-slate-100">MELD-score</strong> is een belangrijk systeem om de ernst van leverziekte te schatten en de volgorde op de wachtlijst te bepalen. De score is gebaseerd op bilirubine, INR en creatinine. Als iemand recent gedialyseerd is, wordt creatinine op 4,0 gezet. Waarden lager dan 1 worden voor de berekening op 1 gezet.
      </p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">MELD</th>
              <th className="px-4 py-3 font-semibold">LabMELD verloopt na</th>
              <th className="px-4 py-3 font-semibold">Labdata niet ouder dan</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">&gt; 25</td>
              <td className="px-4 py-3 align-top">7 dagen</td>
              <td className="px-4 py-3 align-top">48 uur</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">18–24</td>
              <td className="px-4 py-3 align-top">30 dagen</td>
              <td className="px-4 py-3 align-top">7 dagen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">11–18</td>
              <td className="px-4 py-3 align-top">90 dagen</td>
              <td className="px-4 py-3 align-top">14 dagen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">&lt; 10</td>
              <td className="px-4 py-3 align-top">365 dagen</td>
              <td className="px-4 py-3 align-top">30 dagen</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Tijdens de wachttijd wordt de patiënt opgevolgd met aandacht voor:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>behandeling en preventie van cirrosecomplicaties;</li>
        <li>locoregionale behandeling van HCC;</li>
        <li>uitbreiding van HCC buiten de lever;</li>
        <li>vaccinatie, bijvoorbeeld tegen VZV;</li>
        <li>behandeling van HBV en soms HCV;</li>
        <li>herbeoordeling van de MELD-score;</li>
        <li>psychosociale ondersteuning;</li>
        <li>voorlichting;</li>
        <li>verbetering van conditie en voedingstoestand.</li>
      </ul>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Kans op transplantatie</h3>
      <p>
        Niet iedereen op de wachtlijst krijgt uiteindelijk een transplantatie. Een belangrijk deel van de patiënten haalt het niet; ongeveer <strong className="text-slate-900 dark:text-slate-100">18%</strong> komt niet tot transplantatie. Dat onderstreept hoe belangrijk selectie, timing en follow-up zijn.
      </p>
    </div>
  )
}
