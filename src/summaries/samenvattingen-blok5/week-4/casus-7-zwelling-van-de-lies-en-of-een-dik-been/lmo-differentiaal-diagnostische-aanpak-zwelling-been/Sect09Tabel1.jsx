export default function Sect09Tabel1() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Lymfoedeem, lipoedeem en veneus oedeem naast elkaar</h2>
      <p className="font-medium text-slate-900 dark:text-slate-100">Tabel 1. Klinische verschillen tussen drie veelvoorkomende oorzaken</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600/80">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/70">
              <th className="px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">Kenmerk</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">Veneus oedeem</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">Lymfoedeem</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">Lipoedeem</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600/80">
            <tr>
              <td className="px-3 py-2 align-top font-medium">Lateralisatie</td>
              <td className="px-3 py-2 align-top">vaak unilateraal of asymmetrisch bilateraal</td>
              <td className="px-3 py-2 align-top">uni- of bilateraal</td>
              <td className="px-3 py-2 align-top">vrijwel altijd bilateraal</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top font-medium">Beloop over de dag</td>
              <td className="px-3 py-2 align-top">erger bij staan/zitten, beter bij elevatie</td>
              <td className="px-3 py-2 align-top">minder typisch dagritme</td>
              <td className="px-3 py-2 align-top">minder afhankelijk van hoogleggen</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top font-medium">Pijn</td>
              <td className="px-3 py-2 align-top">zwaar/moe/zeurend</td>
              <td className="px-3 py-2 align-top">meestal pijnloos</td>
              <td className="px-3 py-2 align-top">vaak pijnlijk en drukgevoelig</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top font-medium">Voeten</td>
              <td className="px-3 py-2 align-top">kunnen meedoen</td>
              <td className="px-3 py-2 align-top">vaak duidelijk betrokken</td>
              <td className="px-3 py-2 align-top">meestal gespaard</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top font-medium">Huid</td>
              <td className="px-3 py-2 align-top">varices, pigment, eczeem, ulcera</td>
              <td className="px-3 py-2 align-top">huidverdikking, Stemmer positief</td>
              <td className="px-3 py-2 align-top">disproportionele vetverdeling</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top font-medium">Pitting</td>
              <td className="px-3 py-2 align-top">vaak wel</td>
              <td className="px-3 py-2 align-top">vroeg soms wel, later vaak niet</td>
              <td className="px-3 py-2 align-top">vaak niet of minder duidelijk</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
