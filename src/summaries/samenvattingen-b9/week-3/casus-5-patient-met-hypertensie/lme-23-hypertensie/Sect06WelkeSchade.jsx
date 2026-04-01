export default function Sect06WelkeSchade() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Welke schade kan hypertensie geven?</h2>
      <p>Hypertensie kan op korte en lange termijn schade veroorzaken. Het onderscheid is belangrijk.</p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Korte termijn: hypertensief spoedgeval</h3>
      <p>
        Bij een hypertensief spoedgeval stijgt de bloeddruk tot extreme hoogten met orgaanschade als gevolg. Voorbeelden zijn:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>hersenbloeding</li>
        <li>aortadissectie</li>
        <li>hypertensieve retinopathie</li>
      </ul>
      <p>Dit zijn acute complicaties en daar leer je later meer over.</p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Lange termijn: chronische orgaanschade</h3>
      <p>Chronische hypertensie kan allerlei organen beschadigen. Denk aan:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>erectiestoornissen</li>
        <li>herseninfarct</li>
        <li>linkerventrikelhypertrofie, uiteindelijk leidend tot hartfalen</li>
        <li>hartinfarct</li>
        <li>perifeer vaatlijden</li>
        <li>aneurysmatisch vaatlijden</li>
        <li>nefropathie</li>
      </ul>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 3. Langetermijnschade geordend naar type vaatprobleem</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Type schade</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Voorbeelden</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Microvasculair</td>
                <td className="px-4 py-3 align-top">Nefropathie, erectiestoornissen</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Macrovasculair</td>
                <td className="px-4 py-3 align-top">Herseninfarct, perifeer vaatlijden, hartinfarct, aneurysmatisch vaatlijden</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Combinatie/overig</td>
                <td className="px-4 py-3 align-top">Hartfalen</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>Bij hypertensie zie je dus schade in kleine vaten, grote vaten of allebei.</p>
    </div>
  )
}
