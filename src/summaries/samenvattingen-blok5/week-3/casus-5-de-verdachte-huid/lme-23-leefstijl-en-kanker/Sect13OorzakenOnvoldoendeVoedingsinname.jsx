export default function Sect13OorzakenOnvoldoendeVoedingsinname() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Oorzaken van onvoldoende voedingsinname bij kanker</h2>
      <p>
        Onvoldoende voedingsinname kan verschillende oorzaken hebben. Vaak spelen meerdere factoren tegelijk. De
        belangrijkste zijn:
      </p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Oorzaak
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Toelichting
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Anorexie / gebrek aan eetlust</td>
              <td className="px-4 py-3 align-top">
                Snel verzadigd gevoel, smaak- en reukverandering, afkeer van bepaalde voedingsmiddelen
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Obstructie en functieverlies</td>
              <td className="px-4 py-3 align-top">
                Problemen in hoofd-halsgebied of tumoren in buik/darm kunnen passage, spijsvertering en opname verstoren
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Problemen met het spijsverteringskanaal</td>
              <td className="px-4 py-3 align-top">Misselijkheid, braken, diarree, obstipatie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Pijn, benauwdheid en vermoeidheid</td>
              <td className="px-4 py-3 align-top">Eten kost dan meer moeite en energie</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Verhoogde behoefte</td>
              <td className="px-4 py-3 align-top">Wondgenezing, koorts en herstel na behandeling vragen extra voeding</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Psychosociale stress</td>
              <td className="px-4 py-3 align-top">Emoties, stress, angst, pijn en vermoeidheid kunnen de eetlust verlagen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Zelfzorgproblemen</td>
              <td className="px-4 py-3 align-top">Vooral bij ouderen kan dit leiden tot maaltijden overslaan</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
