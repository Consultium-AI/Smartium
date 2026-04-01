export default function Sect03WaaromBelangrijkVoorDePraktijkEnTabel1() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Waarom is dit belangrijk voor de praktijk?</h2>
      <p>Bij een vermoeden van vergiftiging moet je snel kunnen schakelen. De database helpt je om:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>een stof te herkennen;</li>
        <li>de verwachte klachten en complicaties te begrijpen;</li>
        <li>diagnostiek en eerste behandeling te kiezen;</li>
        <li>een eerste inschatting te maken van de ernst.</li>
      </ul>
      <p>
        Een handige manier van denken is: eerst de acute gevaren inschatten, daarna pas verfijnen. Bij intoxicaties geldt
        dus vaak: behandel eerst wat direct levensbedreigend is.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Belangrijke rollen rond intoxicaties</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Professionele rol
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Taak in de context van intoxicaties
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">NVIC</td>
              <td className="px-4 py-3 align-top">Geeft toxicologisch medisch advies en beheert de databank</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">GGD-arts</td>
              <td className="px-4 py-3 align-top">Beoordeelt meldingen uit de publieke gezondheid en stelt een differentiaaldiagnose op</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">GAGS</td>
              <td className="px-4 py-3 align-top">Adviseert bij incidenten met gevaarlijke stoffen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">SEH / intensivist / internist</td>
              <td className="px-4 py-3 align-top">Behandelt acute en ernstige intoxicaties</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Huisarts / apotheker / psychiater / dierenarts</td>
              <td className="px-4 py-3 align-top">Komt ook met vergiftigingen in aanraking en kan advies nodig hebben</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
