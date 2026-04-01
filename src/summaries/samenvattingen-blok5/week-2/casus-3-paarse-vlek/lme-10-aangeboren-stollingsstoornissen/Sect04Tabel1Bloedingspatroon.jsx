export default function Sect04Tabel1Bloedingspatroon() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Bloedingspatroon dat past bij hemofilie en Von Willebrandziekte
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Aandoening
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Typische bloedingen
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Hemofilie</td>
              <td className="px-4 py-3 align-top">
                Vooral <strong>gewrichtsbloedingen</strong>, <strong>spierbloedingen</strong>, bloedingen na operaties
                en soms hersenbloedingen
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Von Willebrandziekte
              </td>
              <td className="px-4 py-3 align-top">
                Vooral <strong>slijmvliesgerelateerde bloedingen</strong>, zoals neusbloedingen, tandvleesbloedingen en
                overvloedige menstruatie
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Bij hypermenorroe of hevige menstruele bloedverlies is het lastig om goed uit te vragen hoeveel bloedverlies er
        precies is. Daarom helpt het om aanvullend te vragen naar:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>duur van de menstruatie;</li>
        <li>anemie door ijzergebrek of transfusies;</li>
        <li>reden voor orale anticonceptie;</li>
        <li>school- of werkverzuim;</li>
        <li>hoe vaak verschonen nodig is;</li>
        <li>hoeveel maandverbanden of tampons per dag nodig zijn;</li>
        <li>aanwezigheid van stolsels.</li>
      </ul>
      <p>
        Bij een menstruatie die langer dan 7 dagen duurt, vaak doorlekken geeft of impact heeft op dagelijks functioneren,
        moet je dus denken aan overvloedig bloedverlies.
      </p>
    </div>
  )
}
