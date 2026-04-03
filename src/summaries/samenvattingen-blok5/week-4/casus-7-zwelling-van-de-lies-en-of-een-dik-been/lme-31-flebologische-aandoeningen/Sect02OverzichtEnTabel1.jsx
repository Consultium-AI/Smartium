export default function Sect02OverzichtEnTabel1() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Overzicht van flebologische aandoeningen</h2>
      <p>
        Zwelling van een of twee benen kan verschillende oorzaken hebben. Soms ligt het probleem vooral in het veneuze
        systeem, soms in het lymfestelsel, soms in het subcutane vetweefsel, en soms gaat het om een aangeboren
        vaatafwijking. Juist omdat klachten als zwaarte, pijn of volumetoename op elkaar kunnen lijken, is het belangrijk
        om deze aandoeningen goed van elkaar te onderscheiden.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Globaal overzicht van de vier belangrijkste aandoeningen
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Aandoening
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kernprobleem
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Typische kenmerken
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Chronisch veneuze ziekte
              </td>
              <td className="px-4 py-3 align-top">Veneuze terugstroom schiet tekort, met verhoogde veneuze druk</td>
              <td className="px-4 py-3 align-top">
                Moe en zwaar gevoel, krampen, spataderen, oedeem, huidafwijkingen, soms ulcus
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Lymfoedeem</td>
              <td className="px-4 py-3 align-top">Onvoldoende afvoer via het lymfestelsel</td>
              <td className="px-4 py-3 align-top">Zwelling door ophoping van interstitieel vocht, vaak pijnloos</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Lipoedeem</td>
              <td className="px-4 py-3 align-top">Disproportionele toename van vetweefsel, vooral bij vrouwen</td>
              <td className="px-4 py-3 align-top">Pijn, drukgevoeligheid, blauwe plekken, geringe invloed van afvallen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Vaatmalformaties</td>
              <td className="px-4 py-3 align-top">Aangeboren afwijking van bloed- of lymfevaten</td>
              <td className="px-4 py-3 align-top">Aanwezig vanaf de geboorte en groeit meestal proportioneel mee</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="rounded-xl border-l-4 border-primary-400 bg-primary-50 dark:bg-primary-500/10 p-4 space-y-2">
        <p>
          <strong className="text-primary-900 dark:text-primary-200">
            Korte vraag: Waarom dragen sommige sporters compressiekousen?
          </strong>
          <br />
          <strong className="text-primary-900 dark:text-primary-200">Kort antwoord:</strong> Omdat compressie de
          veneuze terugstroom efficiënter maakt en zo oedeem kan tegengaan.
        </p>
      </div>
    </div>
  )
}
