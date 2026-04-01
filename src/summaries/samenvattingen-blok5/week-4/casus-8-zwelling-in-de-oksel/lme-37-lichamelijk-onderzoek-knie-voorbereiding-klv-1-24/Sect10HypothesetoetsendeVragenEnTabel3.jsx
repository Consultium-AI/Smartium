export default function Sect10HypothesetoetsendeVragenEnTabel3() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Hypothesetoetsende vragen en typische diagnosen
      </h2>
      <p>
        Als je de klachten goed hebt uitgevraagd, kun je gerichter vragen stellen om een diagnose te ondersteunen of
        juist minder waarschijnlijk te maken. Bij kniepijn zijn er een aantal typische patronen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 3. Kenmerkende klachten bij veelvoorkomende diagnosen
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Diagnose
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Typische klachten of aanwijzingen
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Meniscusletsel</td>
              <td className="px-3 py-3 align-top">
                Draaibeweging tijdens trauma; slotklachten; blokkeren van de knie; soms plots niet meer kunnen buigen of
                strekken.
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Kruisbandletsel</td>
              <td className="px-3 py-3 align-top">
                Knapperig gevoel of geluid tijdens het trauma; gevoel dat het been “doorzakt”; instabiliteit.
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Fractuur</td>
              <td className="px-3 py-3 align-top">Direct trauma of val; aangedane knie niet kunnen belasten.</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Artrose</td>
              <td className="px-3 py-3 align-top">
                Chronische klacht; startpijn en ochtendstijfheid; pijn vooral bij begin van bewegen en bij belasting.
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Bacteriële artritis</td>
              <td className="px-3 py-3 align-top">
                Koorts; soms eerst prodromale klachten zoals koude rillingen, misselijkheid en malaise; pijnlijke
                ontstoken knie.
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
