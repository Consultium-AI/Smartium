export default function Sect04Tabel1RokenTumoren() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Voorbeelden van tumoren die sterk met roken samenhangen</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Tumor</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Mannen (%)</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Vrouwen (%)</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Longcarcinoom</td>
              <td className="px-4 py-3 align-top">87,0</td>
              <td className="px-4 py-3 align-top">70,0</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Larynxcarcinoom</td>
              <td className="px-4 py-3 align-top">83,1</td>
              <td className="px-4 py-3 align-top">69,6</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Lip-, mond- en farynxcarcinoom</td>
              <td className="px-4 py-3 align-top">76,0</td>
              <td className="px-4 py-3 align-top">42,6</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Oesofaguscarcinoom</td>
              <td className="px-4 py-3 align-top">66,3</td>
              <td className="px-4 py-3 align-top">57,0</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Blaascarcinoom</td>
              <td className="px-4 py-3 align-top">39,5</td>
              <td className="px-4 py-3 align-top">22,6</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Niercarcinoom</td>
              <td className="px-4 py-3 align-top">34,7</td>
              <td className="px-4 py-3 align-top">9,6</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Acute myeloïde leukemie</td>
              <td className="px-4 py-3 align-top">31,4</td>
              <td className="px-4 py-3 align-top">8,7</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Pancreascarcinoom</td>
              <td className="px-4 py-3 align-top">30,0</td>
              <td className="px-4 py-3 align-top">18,3</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Colorectaalcarcinoom</td>
              <td className="px-4 py-3 align-top">30,5</td>
              <td className="px-4 py-3 align-top">6,8</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        <span className="font-semibold">Aandachtspunt:</span> waarom zie je de daling in rookgedrag niet meteen terug in longkanker?{' '}
        <br />
        <span className="font-semibold">Mini-antwoord:</span> omdat er een lange tijd zit tussen het begin van roken en het ontstaan van longkanker.
      </p>
    </div>
  )
}
