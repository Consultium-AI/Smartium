export default function Sect08PremaligneCorrea() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Pre-maligne veranderingen in de maag en de Correa-cascade
      </h2>
      <p>
        Voor het intestinale type maagcarcinoom verloopt de maligne transformatie via de Correa-cascade. Chronische atrofische
        gastritis kan overgaan in gastrische intestinale metaplasie, daarna in dysplasie en uiteindelijk in adenocarcinoom.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 5. De Correa-cascade</h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Stadium
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Beschrijving
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Chronische atrofische gastritis</td>
                <td className="px-4 py-3 align-top">Begin van het proces</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Intestinale metaplasie</td>
                <td className="px-4 py-3 align-top">Vervanging door intestinaal type slijmvlies</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Dysplasie</td>
                <td className="px-4 py-3 align-top">Laaggradig tot hooggradig</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Adenocarcinoom</td>
                <td className="px-4 py-3 align-top">Eindstadium van de cascade</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        De prevalentie van premaligne maagaandoeningen wereldwijd is niet gering: atrofie 25%, intestinale metaplasie 16% en
        dysplasie 2%. De prevalentie verschilt wereldwijd tussen landen met een hoge en lage H. pylori-prevalentie. De
        prevalentie is daarbij hetzelfde tussen symptomatische en asymptomatische patiënten.
      </p>
      <p>
        Het jaarlijkse risico op neoplastische progressie van atrofische gastritis en gastrische intestinale metaplasie ligt
        tussen 0,1 en 0,25%. Dat risico hangt samen met factoren zoals een positieve familieanamnese voor maagkanker en het
        persisteren van H. pylori-infectie.
      </p>
    </div>
  )
}
