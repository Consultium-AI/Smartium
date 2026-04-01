export default function Sect03TweeKlassiekeBenaderingen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Twee klassieke benaderingen van ethische argumentatie</h2>
      <p>
        Een belangrijk deel van de stof gaat over twee klassieke manieren van redeneren in de ethiek: deontologisch en teleologisch. Dit zijn geen ingewikkelde woorden, als je ze eenmaal koppelt aan hun kernidee.
      </p>
      <p>Deontologisch betekent: kijken naar plichten, regels, normen en rechten.</p>
      <p>Teleologisch betekent: kijken naar gevolgen en naar de vraag of een handeling bijdraagt aan een goed doel.</p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 1. Deontologie en teleologie naast elkaar</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Benadering</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kernvraag</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Waar let je op?</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Voorbeeld in transplantatie</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Deontologisch</td>
                <td className="px-4 py-3">Mag dit volgens een norm of plicht?</td>
                <td className="px-4 py-3">Rechten, plichten, toestemming, gelijke behandeling</td>
                <td className="px-4 py-3">Orgaanuitname mag alleen met geïnformeerde toestemming</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Teleologisch</td>
                <td className="px-4 py-3">Leidt dit tot een goede uitkomst?</td>
                <td className="px-4 py-3">Gevolgen, nut, welzijn, opbrengst</td>
                <td className="px-4 py-3">Orgaanuitname is toegestaan als het welzijn van de ontvanger duidelijk groter is dan de schade voor de donor</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Het belangrijkste is dat beide benaderingen in de praktijk relevant zijn. Ze beschrijven elk een andere kant van moreel denken. De ene kijkt meer naar de regel, de andere meer naar het gevolg.
      </p>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandachtsvraag: Wat is het eenvoudigste verschil tussen deontologisch en teleologisch denken?  Mini-antwoord: Deontologie kijkt naar plicht en norm; teleologie kijkt naar het gevolg en de uitkomst.
        </p>
      </div>
    </div>
  )
}
