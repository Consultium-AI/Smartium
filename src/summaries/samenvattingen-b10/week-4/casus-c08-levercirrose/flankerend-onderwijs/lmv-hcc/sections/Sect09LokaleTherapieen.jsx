export default function Sect09LokaleTherapieen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Lokale therapieën</h3>
      <p>
        Lokale therapieën worden vaak gebruikt als chirurgie niet mogelijk is of als overbrugging naar transplantatie.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">RFA</h3>
      <p>
        RFA staat voor radiofrequency ablation. Hierbij wordt tumorweefsel thermisch vernietigd. Dit is curatief bedoeld bij tumoren kleiner dan 3 cm en wordt percutaan uitgevoerd, vooral wanneer chirurgie geen optie is.
      </p>
      <p>
        Bij laesies kleiner dan 3 cm worden complete responspercentages van 80–90% genoemd. Er zijn wel beperkingen, zoals het heat-sink-fenomeen, lokale recidieven en complicaties zoals perforatie, porta-trombose, abces en naaldtrajectzaaiing.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">TACE</h3>
      <p>
        TACE staat voor transarteriële chemo-embolisatie. Hierbij wordt de arteriële bloedtoevoer naar de tumor onderbroken en wordt lokaal chemotherapie toegediend. Dit is een palliatieve behandeling, vooral voor tumoren groter dan 3 cm, wanneer genezing niet meer mogelijk is of als brug naar transplantatie.
      </p>
      <p>
        De gedachte erachter is dat HCC vooral arterieel wordt doorbloed. Door de voedende arterie te emboliseren, raakt de tumor in de problemen. De techniek en het optimale schema zijn niet volledig vastgelegd. TACE geeft beperkte overlevingswinst en is nooit bewezen superieur aan systemische therapie.
      </p>
      <p>
        Complicaties zijn onder andere post-embolisatiesyndroom met koorts, buikpijn, misselijkheid en braken. Zeldzamere complicaties zijn leverfalen, gastro-intestinale bloeding, galwegschade en abces.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">SIRT</h3>
      <p>
        SIRT staat voor selective internal radiation therapy. Hierbij worden radioactieve microsferen, vaak met yttrium-90, via de arteria hepatica naar de tumor gebracht om daar straling af te geven. Ook dit is een palliatieve behandeling of een brug naar transplantatie.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 5. Lokale therapieën bij HCC</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Behandeling</th>
              <th className="px-4 py-3 font-semibold">Doel</th>
              <th className="px-4 py-3 font-semibold">Typische indicatie</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">RFA</td>
              <td className="px-4 py-3 align-top">Curatief</td>
              <td className="px-4 py-3 align-top">Tumoren &lt;3 cm, wanneer chirurgie niet kan</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">TACE</td>
              <td className="px-4 py-3 align-top">Palliatief / bridge</td>
              <td className="px-4 py-3 align-top">Tumoren &gt;3 cm, niet-curatief</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">SIRT</td>
              <td className="px-4 py-3 align-top">Palliatief / bridge</td>
              <td className="px-4 py-3 align-top">Tumoren &gt;3 cm, niet-curatief</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
