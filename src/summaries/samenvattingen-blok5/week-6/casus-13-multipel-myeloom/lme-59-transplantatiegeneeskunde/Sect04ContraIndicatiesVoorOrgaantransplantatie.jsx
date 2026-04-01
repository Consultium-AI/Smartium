export default function Sect04ContraIndicatiesVoorOrgaantransplantatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Contra-indicaties voor orgaantransplantatie</h2>
      <p>
        Ook contra-indicaties verschillen per orgaan en per centrum. Je moet daarbij steeds bedenken dat een transplantatie
        gepaard gaat met een grote operatie en daarna met levenslang gebruik van immuunsuppressiva.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Belangrijke contra-indicaties</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Algemeen of orgaanspecifiek
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Voorbeelden
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Algemeen voor alle organen
              </td>
              <td className="px-4 py-3 align-top">
                Actieve ernstige infecties, uitgezaaide kanker, ernstige verslaving / psychiatrische ziekte
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Nier</td>
              <td className="px-4 py-3 align-top">Ernstige vaatverkalking</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Lever</td>
              <td className="px-4 py-3 align-top">
                Actief alcoholgebruik, ernstige CVA-/bloedingsproblematiek, hartfalen / longfalen
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Hart</td>
              <td className="px-4 py-3 align-top">Falen van een ander orgaan, perifeer vaatlijden</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Long</td>
              <td className="px-4 py-3 align-top">Roken, ook passief, obesitas, perifeer vaatlijden</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Leeftijd is meestal een relatieve contra-indicatie. Daarbij telt vooral de biologische leeftijd en niet alleen de
        kalenderleeftijd. Ook andere patiëntkenmerken spelen mee. Bij long- en harttransplantatie zijn lichaamslengte en
        gewicht belangrijker dan bij niertransplantatie. Obesitas, met name een BMI boven 30 kg/m², is vooral bij
        longtransplantatie een probleem vanwege meer perioperatieve complicaties en slechtere lange-termijnuitkomsten.
        Bij niertransplantatie is het vooral een probleem als buikvet mobilisatie van het vet belemmert.
      </p>
      <div className="rounded-xl border-l-4 border-primary-400 bg-primary-50 dark:bg-primary-500/10 p-4 space-y-2">
        <p>
          <strong className="text-primary-900 dark:text-primary-200">Aandacht-vragetje</strong>
        </p>
        <p>
          Is er altijd één vaste lijst met absolute contra-indicaties?{'  '}
          Nee. Er zijn algemene principes, maar de precieze afweging verschilt per orgaan en per centrum.
        </p>
      </div>
    </div>
  )
}
