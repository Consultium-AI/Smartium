export default function Sect04Celdood() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Celdood: niet alleen necrose en apoptose
      </h2>
      <p>
        Een belangrijk uitgangspunt is dat de klassieke indeling in alleen apoptose en necrose niet meer compleet is.
        Apoptose is geprogrammeerde celdood. Necrose is niet-geprogrammeerde celdood. Daarnaast bestaan ook andere vormen
        van celdood, zoals pyroptose, necroptose en ferroptose.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
        Tabel 2. Verschillende vormen van celdood
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Vormen van celdood
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kernidee
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Necrose</td>
              <td className="px-4 py-3 align-top">Niet-geprogrammeerde celdood</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Apoptose</td>
              <td className="px-4 py-3 align-top">Geprogrammeerde celdood</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Pyroptose</td>
              <td className="px-4 py-3 align-top">Ontstekingsbevorderende geprogrammeerde celdood</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Necroptose</td>
              <td className="px-4 py-3 align-top">Andere vorm van geprogrammeerde celdood</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Ferroptose</td>
              <td className="px-4 py-3 align-top">Nog een andere vorm van celdood, met een eigen mechanisme</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Aandacht: welke vorm van celdood hoort bij inflammasoomactivatie?{"  "}Kort antwoord: pyroptose.
      </p>
    </div>
  )
}
