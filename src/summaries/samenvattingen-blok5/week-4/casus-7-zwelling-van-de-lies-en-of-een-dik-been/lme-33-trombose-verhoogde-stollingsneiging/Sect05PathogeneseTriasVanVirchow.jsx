export default function Sect05PathogeneseTriasVanVirchow() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Pathogenese: de trias van Virchow</h2>
      <p>
        De ontstaanswijze van trombose kan goed worden uitgelegd met de trias van Virchow. Daarbij spelen drie processen een rol:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>endotheelbeschadiging;</li>
        <li>stase of turbulentie in de bloedstroom;</li>
        <li>hypercoagulabiliteit: een verhoogde stollingsneiging.</li>
      </ul>
      <p>
        Denk je nu: <em>waarom juist deze drie?</em>
        {'  '}
        Mini-antwoord: omdat ze elk de kans vergroten dat er in een vat een stolsel ontstaat.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Trias van Virchow met voorbeelden</h3>
      <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 dark:bg-slate-800/80">
            <tr>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Categorie</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Betekenis</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Voorbeelden uit de stof</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            <tr>
              <td className="p-3 align-top font-semibold text-slate-900 dark:text-slate-100">Hypercoagulabele toestand</td>
              <td className="p-3 align-top">Verhoogde stollingsneiging</td>
              <td className="p-3">Sepsis, maligniteit, trombofilie, zwangerschap en peri-partumperiode</td>
            </tr>
            <tr>
              <td className="p-3 align-top font-semibold text-slate-900 dark:text-slate-100">Vasculaire wandbeschadiging</td>
              <td className="p-3 align-top">Beschadiging van de bloedvatwand</td>
              <td className="p-3">Trauma of operatie, venapunctie, hartklepaandoening of -prothese, atherosclerose</td>
            </tr>
            <tr>
              <td className="p-3 align-top font-semibold text-slate-900 dark:text-slate-100">Circulatoire stase</td>
              <td className="p-3 align-top">Trage bloedstroom</td>
              <td className="p-3">
                Veneuze insufficiëntie of spataderen, disfunctie linker hartkamer, immobiliteit of verlamming, atriumfibrilleren
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Er zijn ook bekende deficiënties of mutaties in stollingsfactoren van de secundaire hemostase die de tromboseneiging verhogen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>antitrombine-deficiëntie;</li>
        <li>proteïne C-deficiëntie;</li>
        <li>proteïne S-deficiëntie;</li>
        <li>factor V Leiden-mutatie;</li>
        <li>prothrombinegenvariant.</li>
      </ul>
      <p>
        Deze afwijkingen zorgen ervoor dat de rem op de vorming van fibrine vermindert. Daardoor wordt sneller een stolsel gevormd.
      </p>
    </div>
  )
}
