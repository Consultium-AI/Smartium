export default function Sect03DeAbcdeMethode() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        De ABCDE-methode: zelf een moedervlek beoordelen
      </h2>
      <p>
        Zonder app kun je een huidplekje ook leren beoordelen met de ABCDE-methode. Deze methode is bedoeld voor
        verdachte moedervlekken en wordt niet alleen door artsen gebruikt, maar ook door patiënten en mensen uit de
        algemene bevolking.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. De ABCDE-methode in het kort</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Letter
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Betekenis
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Waar let je op?
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">A</td>
              <td className="px-4 py-3 align-top">Asymmetrie</td>
              <td className="px-4 py-3 align-top">Het moedervlekje is niet symmetrisch</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">B</td>
              <td className="px-4 py-3 align-top">Border / rand</td>
              <td className="px-4 py-3 align-top">De rand is grillig</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">C</td>
              <td className="px-4 py-3 align-top">Colour / kleur</td>
              <td className="px-4 py-3 align-top">Er zijn meerdere kleurtinten</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">D</td>
              <td className="px-4 py-3 align-top">Diameter</td>
              <td className="px-4 py-3 align-top">Groter dan 5 mm</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">E</td>
              <td className="px-4 py-3 align-top">Evolving / veranderende vorm</td>
              <td className="px-4 py-3 align-top">Vorm en/of kleur verandert, of er is jeuk of bloeding</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>De ABCDE-regel helpt dus om op een eenvoudige manier verdachte plekjes te herkennen.</p>
      <div className="rounded-xl border-l-4 border-primary-400 bg-primary-50 dark:bg-primary-500/10 p-4 space-y-2">
        <p>
          <strong className="text-primary-900 dark:text-primary-200">Aandachtspunt: wat is het doel van de ABCDE-methode?</strong>{' '}
          <strong className="text-primary-900 dark:text-primary-200">Mini-antwoord:</strong> verdachte huidafwijkingen
          eerder herkennen, zodat huidkanker beter opgemerkt kan worden.
        </p>
      </div>
    </div>
  )
}
