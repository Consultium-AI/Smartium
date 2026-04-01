export default function Sect04KlimaatveranderingDirecteIndirecteEffecten() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Klimaatverandering en gezondheid: directe en indirecte effecten</h2>
      <p>
        Klimaatverandering heeft directe en indirecte gevolgen voor de gezondheid. Directe gevolgen hangen meteen samen met
        hitte of luchtvervuiling. Indirecte gevolgen ontstaan via bijvoorbeeld voedseltekorten, verspreiding van
        infectieziekten, migratie of conflicten.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 2. Belangrijkste gezondheidseffecten van klimaatverandering
      </h3>
      <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 dark:bg-slate-800/80">
            <tr>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Thema</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Kernmechanisme</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Voorbeelden van gevolgen</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            <tr>
              <td className="p-3 align-top">Infectieziekten</td>
              <td className="p-3">Verandering in temperatuur, neerslag, leefgebied en vectoren</td>
              <td className="p-3">Malaria, dengue</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Voeding</td>
              <td className="p-3">Minder voedselzekerheid en lagere voedingswaarde</td>
              <td className="p-3">Ondervoeding, voedingcrisis</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Hitte</td>
              <td className="p-3">Hitte en vochtigheid verhogen risico</td>
              <td className="p-3">Heat exhaustion, heat stroke, sterfte</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Luchtvervuiling</td>
              <td className="p-3">Meer schadelijke luchtcomponenten, zoals ozon aan de grond</td>
              <td className="p-3">Longklachten, astma, COPD-verergering</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Allergieën</td>
              <td className="p-3">Langere pollenperiode en meer pollenproductie</td>
              <td className="p-3">Allergische rhinitis, astma-aanvallen</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Migratie en conflict</td>
              <td className="p-3">Klimaatstress en leefomstandigheden</td>
              <td className="p-3">Gedwongen verplaatsing, conflict</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
