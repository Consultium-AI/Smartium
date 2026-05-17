export default function Sect09VoedingLeefstijlGastroparese() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Voedings- en leefstijladviezen bij gastroparese
      </h2>
      <p>
        Bij gastroparese is het uitgangspunt dat de patiënt zo goed mogelijk zélf blijft eten en drinken. Tegelijk helpt een
        aangepast eetpatroon om klachten te verminderen. In de casus wordt daarom samen met de patiënte gekeken naar wat zij thuis kan oppakken, eventueel met begeleiding van een diëtist.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Adviezen bij gastroparese</h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Te gebruiken / aan te raden
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Te vermijden / af te raden
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Frequente, kleine maaltijden per dag</td>
                <td className="px-4 py-3 align-top">
                  Koffie, alcohol, koolzuurhoudende dranken en pittige kruiden
                </td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">
                  Magere of halfvolle producten, zoals 20-30+ kaas en magere yoghurt
                </td>
                <td className="px-4 py-3 align-top">Even gaan liggen of uitrusten na het eten</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Rustig wandelen na het eten</td>
                <td className="px-4 py-3 align-top">Grof volkorenbrood of volkorenmuesli</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Zachtgekookte groente en fruit</td>
                <td className="px-4 py-3 align-top">Veel water drinken tijdens het eten</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Kip, tofu en vis</td>
                <td className="px-4 py-3 align-top">Skinny jeans dragen</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top" />
                <td className="px-4 py-3 align-top">Patat en snacks eten</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        De kern is dat voedsel bij gastroparese zo licht mogelijk verteerbaar moet zijn. Kleine maaltijden zijn beter
        dan grote porties. Ook zachte, minder vetrijke producten passen beter. Na het eten direct gaan liggen is juist
        ongunstig, omdat dat de klachten kan verergeren. Rustig bewegen, zoals een wandeling, is wel passend.
      </p>
    </div>
  )
}
