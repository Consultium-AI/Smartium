export default function Sect02Volksgezondheidsmaten() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Volksgezondheidsmaten</h2>
      <p>
        Om de gezondheidstoestand van een bevolking te beschrijven, worden verschillende maten gebruikt. Die zijn niet
        helemaal los van elkaar, maar ze leggen wel andere accenten. Het is handig om ze in vier groepen te verdelen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Vier groepen volksgezondheidsmaten
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Groep
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Waar gaat het om?
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Voorbeelden
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                1. Ziekten en aandoeningen
              </td>
              <td className="px-3 py-3 align-top">De aan- of afwezigheid van ziekte</td>
              <td className="px-3 py-3 align-top">Incidentie, prevalentie, registraties van ziekten</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                2. Sterfte en doodsoorzaken
              </td>
              <td className="px-3 py-3 align-top">Wie overlijdt, en waaraan</td>
              <td className="px-3 py-3 align-top">Sterftecijfers, doodsoorzaken, levensverwachting, years of life lost</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                3. Functioneren en kwaliteit van leven
              </td>
              <td className="px-3 py-3 align-top">Hoe mensen functioneren en hoe zij hun gezondheid ervaren</td>
              <td className="px-3 py-3 align-top">
                Ervaren gezondheid, lichamelijke beperkingen, handicaps, psychisch welbevinden
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                4. Samengestelde volksgezondheidsmaten
              </td>
              <td className="px-3 py-3 align-top">Een samenvattende maat voor gezondheid</td>
              <td className="px-3 py-3 align-top">Levensverwachting, gezonde levensverwachting, DALY’s</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Deze vier groepen geven samen een breed beeld. Zo zegt sterfte alleen niet alles: sommige aandoeningen
        veroorzaken weinig sterfte maar wel veel beperkingen en dus veel verlies aan kwaliteit van leven.
      </p>
    </div>
  )
}
