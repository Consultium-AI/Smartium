export default function Sect03ImmunologischeTolerantie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Immunologische tolerantie</h2>
      <p>
        Immunologische tolerantie is het niet reageren op lichaamseigen antigenen. Dit geldt voor zowel het
        aangeboren als het verworven immuunsysteem. Er zijn twee belangrijke vormen:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          Centrale tolerantie: in thymus en beenmerg worden onrijpe T- en B-cellen getest. Cellen die sterk
          reageren op lichaamseigen antigenen worden verwijderd of aangepast.
        </li>
        <li>
          Perifere tolerantie: als potentieel autoreactieve lymfocyten toch in de periferie terechtkomen,
          zorgen perifere mechanismen ervoor dat zij niet zomaar schade aanrichten.
        </li>
      </ul>
      <p>
        De thymus en het beenmerg spelen dus een centrale rol in het voorkómen dat autoreactieve cellen
        uitrijpen tot functionele immuuncellen.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Centrale en perifere tolerantie
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Vorm van tolerantie
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Plaats
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Belangrijk idee
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Centrale tolerantie
              </td>
              <td className="px-4 py-3 align-top">Thymus, beenmerg</td>
              <td className="px-4 py-3 align-top">
                Onrijpe lymfocyten die sterk op zelf reageren worden verwijderd of aangepast
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Perifere tolerantie
              </td>
              <td className="px-4 py-3 align-top">Perifere weefsels</td>
              <td className="px-4 py-3 align-top">
                Ontsnapte autoreactieve lymfocyten worden buiten de primaire lymfoïde organen in toom
                gehouden
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Een belangrijk onderdeel van perifere tolerantie is dat sommige lichaamseigen antigenen bewust
        “afgeschermd” zijn op zogenoemde immune privileged sites. Dat zijn plaatsen waar autoreactieve
        lymfocyten nauwelijks of niet goed mee in contact komen. Voorbeelden zijn:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>hersenen</li>
        <li>ogen</li>
        <li>geslachtsorganen</li>
      </ul>
      <div className="rounded-xl border border-amber-200 dark:border-amber-600/40 bg-amber-50 dark:bg-amber-950/65 p-4">
        <p className="text-amber-950 dark:text-amber-100">
          <strong className="text-amber-950 dark:text-amber-50">Aandachtsvraag:</strong> Wat is het nut van
          zo’n afgeschermde locatie?{'  '}
          <strong className="text-amber-950 dark:text-amber-50">Mini-antwoord:</strong> Daardoor komen
          potentieel autoreactieve lymfocyten nauwelijks in contact met die lichaamseigen antigenen.
        </p>
      </div>
    </div>
  )
}
