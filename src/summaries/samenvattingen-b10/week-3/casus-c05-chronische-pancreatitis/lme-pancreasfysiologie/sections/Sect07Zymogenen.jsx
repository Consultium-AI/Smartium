export default function Sect07Zymogenen () {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Waarom worden sommige enzymen als zymogeen uitgescheiden?
      </h2>
      <p>
        De pancreas bevat zowel actieve enzymen als <strong className="text-slate-900 dark:text-slate-100">zymogenen</strong>.
        Zymogenen zijn inactieve voorlopers die pas later geactiveerd worden. Dat lijkt omslachtig, maar het heeft een
        duidelijke fysiologische reden:{' '}
        <strong className="text-slate-900 dark:text-slate-100">het voorkomt autodigestie van de pancreas</strong>.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 3. Bescherming tegen autodigestie van de pancreas
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Beschermende factor</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Mechanisme</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">Verpakken van veel verteringsenzymen als zymogenen</td>
              <td className="p-3 align-top">De pro-enzymen hebben nog geen enzymatische activiteit</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Selectief sorteren van secretore eiwitten en opslag in zymogeengranules</td>
              <td className="p-3 align-top">Dit beperkt contact met andere cellulaire compartimenten</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Protease-inhibitoren in de zymogeengranule</td>
              <td className="p-3 align-top">Deze remmen vroegtijdig geactiveerde enzymen</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Condensatie van secretore eiwitten bij lage pH</td>
              <td className="p-3 align-top">Dit beperkt enzymactiviteit</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Niet-digestieve proteasen</td>
              <td className="p-3 align-top">
                Deze zijn niet bedoeld voor vertering, maar helpen onder andere actieve enzymen af te breken
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Een belangrijk voorbeeld is <strong className="text-slate-900 dark:text-slate-100">trypsine-inhibitor</strong>,
        dat voorkomt dat voortijdig geactiveerde proteasen schade aanrichten. Als deze bescherming faalt, kan de pancreas
        zichzelf beschadigen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Aandachtsvraag: waarom worden proteasen als zymogeen uitgescheiden?
      </h3>
      <p>
        <strong className="text-slate-900 dark:text-slate-100">Kort antwoord:</strong> om te voorkomen dat de pancreas
        zichzelf verteert.
      </p>
    </div>
  )
}
