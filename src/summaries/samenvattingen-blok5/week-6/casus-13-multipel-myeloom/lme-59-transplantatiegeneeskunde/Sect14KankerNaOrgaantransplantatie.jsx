export default function Sect14KankerNaOrgaantransplantatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Kanker na orgaantransplantatie</h2>
      <p>
        Na transplantatie is er ook een verhoogd risico op kanker. Daar spelen twee dingen in mee: de immuunsuppressie
        zelf en de onderliggende aandoening die tot orgaanfalen heeft geleid. Denk bijvoorbeeld aan iemand met veel
        alcoholgebruik of aan een patiënt die al eerder immuunsuppressiva gebruikte.
      </p>
      <p>Het risico neemt toe:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>naarmate de tijd na transplantatie langer wordt</li>
        <li>door cumulatieve blootstelling aan immuunsuppressiva</li>
        <li>door hogere leeftijd</li>
      </ul>
      <p>
        Jongeren hebben een relatief hoger risico dan ouderen, maar in absolute zin blijft hun kans laag. De meeste
        kankers komen daarom voor bij oudere transplantatie-ontvangers. Huidkanker is het meest voorkomend, vooral
        plaveiselcelcarcinoom en basaalcelcarcinoom.
      </p>
      <p>
        Veel virussen hebben oncogene eigenschappen en virus-geassocieerde tumoren komen daarom vaker voor na
        transplantatie.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 7. Voorbeelden van virus-geassocieerde maligniteiten
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Virus
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Geassocieerde kanker
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Hepatitis B-virus (HBV)
              </td>
              <td className="px-4 py-3 align-top">Hepatocellulair carcinoom</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Hepatitis C-virus (HCV)
              </td>
              <td className="px-4 py-3 align-top">Hepatocellulair carcinoom</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Humaan T-lymphotroop virus (HTLV)
              </td>
              <td className="px-4 py-3 align-top">Adult T-celleukemie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">HPV type 16 en 18</td>
              <td className="px-4 py-3 align-top">
                Cervix-, anus-, penis-, vulva-, vagina- en oropharynxcarcinoom
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">HHV-8</td>
              <td className="px-4 py-3 align-top">Kaposi-sarcoom, Castleman disease</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Merkel-cell polyomavirus (MCV)
              </td>
              <td className="px-4 py-3 align-top">Merkel-cellcarcinoom</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Epstein-Barrvirus (EBV)
              </td>
              <td className="px-4 py-3 align-top">Burkitt-lymfoom, non-Hodgkinlymfoom</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
