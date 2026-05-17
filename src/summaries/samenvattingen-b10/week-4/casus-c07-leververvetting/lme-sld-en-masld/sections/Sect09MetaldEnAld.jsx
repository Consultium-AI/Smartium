export default function Sect09MetaldEnAld() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">MetALD en alcohol-gerelateerde leverziekte</h2>
      <p>
        Naast MASLD bestaan er andere belangrijke vormen van steatotische leverziekte waarbij <strong className="text-slate-900 dark:text-slate-100">alcoholgebruik</strong>{' '}
        een centrale rol speelt. Het is daarom essentieel om het onderscheid te begrijpen tussen <strong className="text-slate-900 dark:text-slate-100">MASLD</strong>,{' '}
        <strong className="text-slate-900 dark:text-slate-100">MetALD</strong> en <strong className="text-slate-900 dark:text-slate-100">ALD</strong>, omdat dit gevolgen
        heeft voor prognose en beleid.
      </p>
      <p>
        Alcohol is een <strong className="text-slate-900 dark:text-slate-100">sterke en onafhankelijke risicofactor</strong> voor leverbeschadiging. Chronisch
        alcoholgebruik kan leiden tot:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>steatose;</li>
        <li>ontsteking;</li>
        <li>fibrose;</li>
        <li>cirrose.</li>
      </ul>
      <p>
        Daarnaast kan alcohol de schadelijke effecten van metabole risicofactoren <strong className="text-slate-900 dark:text-slate-100">versterken</strong>.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">MetALD</h3>
      <p>
        MetALD beschrijft een situatie waarin zowel <strong className="text-slate-900 dark:text-slate-100">metabole dysfunctie</strong> als{' '}
        <strong className="text-slate-900 dark:text-slate-100">relevant alcoholgebruik</strong> bijdragen aan steatotische leverziekte. In deze context werken alcohol en
        metabole factoren <strong className="text-slate-900 dark:text-slate-100">additief of synergistisch</strong>, wat leidt tot een verhoogd risico op fibroseprogressie.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">ALD</h3>
      <p>
        Bij ALD staat alcoholgebruik als <strong className="text-slate-900 dark:text-slate-100">primaire oorzaak</strong> van de leverziekte centraal. Het beloop hangt
        sterk af van de hoeveelheid en de duur van de alcoholconsumptie.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 6. Indeling op basis van alcoholgebruik en metabole risicofactoren</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Categorie</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Alcoholinname</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Metabole risicofactoren</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">
                <strong className="text-slate-900 dark:text-slate-100">MASLD</strong>
              </td>
              <td className="p-3 align-top">laag</td>
              <td className="p-3 align-top">aanwezig</td>
            </tr>
            <tr>
              <td className="p-3 align-top">
                <strong className="text-slate-900 dark:text-slate-100">MetALD</strong>
              </td>
              <td className="p-3 align-top">matig verhoogd</td>
              <td className="p-3 align-top">aanwezig</td>
            </tr>
            <tr>
              <td className="p-3 align-top">
                <strong className="text-slate-900 dark:text-slate-100">ALD</strong>
              </td>
              <td className="p-3 align-top">hoog</td>
              <td className="p-3 align-top">alcohol staat centraal</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-slate-50/80 dark:bg-slate-800/50 p-4 space-y-3 border-l-4 border-indigo-400 dark:border-indigo-500/85">
        <p>
          <strong className="font-semibold text-slate-900 dark:text-slate-100">Aandacht-vraag:</strong> Waarom moet je alcoholgebruik altijd expliciet navragen?
        </p>
        <p>
          <strong className="font-semibold text-slate-900 dark:text-slate-100">Mini-antwoord:</strong> Omdat het de classificatie, behandeling, counseling en prognose
          beïnvloedt.
        </p>
      </div>
    </div>
  )
}
