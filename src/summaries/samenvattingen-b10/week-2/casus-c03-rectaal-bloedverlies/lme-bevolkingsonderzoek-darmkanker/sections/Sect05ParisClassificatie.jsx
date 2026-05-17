export default function Sect05ParisClassificatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Vormen van poliepen: de Paris-classificatie</h2>
      <p>
        Een poliep kan verschillende vormen hebben. Die vormen worden beschreven met de Paris-classificatie. Dat is
        vooral handig omdat de vorm iets zegt over hoe de poliep eruitziet tijdens endoscopie.
      </p>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Paris-classificatie van poliepen</h3>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left border-collapse">
            <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
              <tr>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">Paris-type</th>
                <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-semibold">Beschrijving</th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-slate-900/40">
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">
                  <strong className="text-slate-900 dark:text-slate-100">0-Ip</strong>
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">gesteeld / pedunculated</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">
                  <strong className="text-slate-900 dark:text-slate-100">0-Is</strong>
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">sessiel / subpedunculated</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">
                  <strong className="text-slate-900 dark:text-slate-100">0-IIa</strong>
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">vlak verheven</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">
                  <strong className="text-slate-900 dark:text-slate-100">0-IIa + c</strong>
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">vlak verheven met centrale indeuking</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">
                  <strong className="text-slate-900 dark:text-slate-100">0-IIb</strong>
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">vlak</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">
                  <strong className="text-slate-900 dark:text-slate-100">0-IIc</strong>
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">ingezonken / depressief</td>
              </tr>
              <tr>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2 font-medium">
                  <strong className="text-slate-900 dark:text-slate-100">0-III</strong>
                </td>
                <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">geëxcaveerd</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>De meest voorkomende vormen zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>een vlakke poliep;</li>
        <li>een sessiele poliep;</li>
        <li>een gesteelde poliep.</li>
      </ul>
      <p>
        Aandachtspunt: Wat is het verschil tussen vorm en type?{'  '}Kort antwoord: de vorm beschrijft hoe de poliep
        eruitziet, terwijl het type beschrijft wat voor soort weefsel het is.
      </p>
    </div>
  )
}
