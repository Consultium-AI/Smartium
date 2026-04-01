export default function Sect06BorstdichtheidTabel1() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Borstdichtheid en de ACR-classificatie</h2>
      <p>
        De hoeveelheid klierweefsel in de borst bepaalt hoe goed een mammogram beoordeeld kan worden. Dit wordt ingedeeld
        volgens de ACR-classificatie van borstweefseldichtheid. Dat is belangrijk, omdat dicht klierweefsel de
        betrouwbaarheid van mammografie verlaagt.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. ACR-classificatie van borstdichtheid</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Type
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Beschrijving
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerken
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Klinische relevantie
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top">A</td>
              <td className="px-3 py-3 align-top">Vrijwel volledig vet</td>
              <td className="px-3 py-3 align-top">Mamma bestaat vrijwel geheel uit vetweefsel</td>
              <td className="px-3 py-3 align-top">
                Zeer goed te beoordelen; zeer betrouwbare mammografie; laagste kans op gemiste afwijkingen
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top">B</td>
              <td className="px-3 py-3 align-top">Verspreid klierweefsel</td>
              <td className="px-3 py-3 align-top">Verspreide gebieden van klierweefsel</td>
              <td className="px-3 py-3 align-top">Goede betrouwbaarheid; kleine kans op gemiste afwijkingen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top">C</td>
              <td className="px-3 py-3 align-top">Heterogeen dens klierweefsel</td>
              <td className="px-3 py-3 align-top">Afwisselend dicht en minder dicht weefsel</td>
              <td className="px-3 py-3 align-top">
                Minder goed te beoordelen; verminderde betrouwbaarheid; grotere kans op gemiste afwijkingen
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top">D</td>
              <td className="px-3 py-3 align-top">Dens klierweefsel</td>
              <td className="px-3 py-3 align-top">Compact klierweefsel</td>
              <td className="px-3 py-3 align-top">
                Sterk verminderde gevoeligheid van mammografie; grotere kans op gemiste afwijkingen
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Hoe dichter de borst, hoe moeilijker het wordt om een afwijking te zien. Dat is klinisch belangrijk, omdat bij
        type C en vooral type D een mammografie minder betrouwbaar is.
      </p>
    </div>
  )
}
