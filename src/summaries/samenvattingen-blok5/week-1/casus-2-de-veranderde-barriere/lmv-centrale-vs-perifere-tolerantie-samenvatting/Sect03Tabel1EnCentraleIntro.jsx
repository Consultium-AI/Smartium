export default function Sect03Tabel1EnCentraleIntro() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Centrale en perifere tolerantie in één oogopslag
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Centrale tolerantie
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Perifere tolerantie
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Waar?</td>
              <td className="px-4 py-3 align-top">Primaire lymfoïde organen: beenmerg en thymus</td>
              <td className="px-4 py-3 align-top">Secundaire lymfoïde organen: lymfeklieren, milt en overige weefsels</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Wanneer?</td>
              <td className="px-4 py-3 align-top">Tijdens ontwikkeling en uitrijping van lymfocyten</td>
              <td className="px-4 py-3 align-top">Nadat lymfocyten de primaire organen hebben verlaten</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Belangrijkste doel</td>
              <td className="px-4 py-3 align-top">Sterk autoreactieve cellen vroeg verwijderen of aanpassen</td>
              <td className="px-4 py-3 align-top">Overgebleven autoreactieve cellen onschadelijk maken</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Belangrijke mechanismen
              </td>
              <td className="px-4 py-3 align-top">Vooral deletie/apoptose, bij B-cellen ook receptor editing</td>
              <td className="px-4 py-3 align-top">Anergie en suppressie door regulatoire T-lymfocyten</td>
            </tr>
          </tbody>
        </table>
      </div>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Centrale tolerantie</h3>
      <p>
        Centrale tolerantie vindt plaats op het moment dat T- en B-lymfocyten nog aan het uitrijpen zijn. Het basisidee is
        eenvoudig: cellen die te sterk tegen lichaamseigen antigenen reageren, mogen niet door naar de periferie.
      </p>
    </div>
  )
}
