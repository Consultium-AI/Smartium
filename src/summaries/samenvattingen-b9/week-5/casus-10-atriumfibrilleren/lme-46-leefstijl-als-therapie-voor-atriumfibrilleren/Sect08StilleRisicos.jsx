export default function Sect08StilleRisicos() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De stille risico’s: bloeddruk en slaapapneu</h2>
      <p>
        Sommige risicofactoren vallen minder op, maar zijn wel belangrijk. Dat zijn onder andere hypertensie en obstructieve slaapapneu (OSAS).
      </p>
      <p>
        Robs vrouw vertelt dat hij ’s nachts hard snurkt en soms stopt met ademen. Zijn bloeddruk is gemeten op 145/90 mmHg. Dat zijn signalen die niet genegeerd mogen worden.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Hypertensie</h3>
      <p>
        Een goede bloeddrukinstelling is cruciaal om atriale beschadiging te remmen. Het doel is een systolische bloeddruk van 120–129 mmHg. Hoge bloeddruk draagt bij aan schade aan de boezems en daarmee aan het in stand houden van atriumfibrilleren.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">OSAS</h3>
      <p>
        OSAS komt vaak voor bij patiënten met atriumfibrilleren. Het wordt genoemd bij meer dan 50% van de AF-patiënten. OSAS kan de kans vergroten dat een behandeling, zoals ablatie, minder goed werkt. Daarom zijn screening en behandeling belangrijk, bijvoorbeeld met CPAP. Dit is een sterke aanbeveling.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Stille risicofactoren</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Risicofactor</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Waarom belangrijk?</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Aanpak</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Hypertensie</td>
              <td className="px-4 py-3 align-top">Verergert atriale beschadiging</td>
              <td className="px-4 py-3 align-top">Goede bloeddrukcontrole, systolisch 120–129 mmHg</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">OSAS</td>
              <td className="px-4 py-3 align-top">Verhoogt kans op mislukken van behandeling</td>
              <td className="px-4 py-3 align-top">Screenen en behandelen, bijvoorbeeld met CPAP</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Deze factoren zijn “stil”, maar kunnen de behandeling wel sterk beïnvloeden.</p>
    </div>
  )
}
