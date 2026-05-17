export default function Sect03OorzakenVanLevercirrose() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Oorzaken van levercirrose</h2>
      <p>
        De oorzaken van cirrose zijn divers, maar in Nederland spelen alcohol en overgewicht / NASH de belangrijkste rol.
        NASH staat voor niet-alcoholische steatohepatitis.
      </p>
      <p>
        De leverziekten en cirrose nemen in Nederland toe. Het gaat vaak om aandoeningen die deel uitmaken van een
        breder, multisysteem ziektebeeld.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 1. Belangrijkste oorzaken en uitlokkende factoren van cirrose
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Oorzaakgroep
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Voorbeelden
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Virale infectie</td>
                <td className="px-4 py-3 align-top">virale hepatitis</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Alcohol</td>
                <td className="px-4 py-3 align-top">alcoholische leverziekte</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Metabool / vetgerelateerd</td>
                <td className="px-4 py-3 align-top">NASH, overgewicht</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Auto-immuun</td>
                <td className="px-4 py-3 align-top">auto-immuunziekten van de lever</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Cholestatisch</td>
                <td className="px-4 py-3 align-top">cholestatische aandoeningen</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Metabool</td>
                <td className="px-4 py-3 align-top">metabole leverziekten</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Daarnaast spelen genetische en omgevingsfactoren mee, zoals genetische polymorfismen, epigenetische kenmerken en
        cofactors zoals obesitas en alcohol.
      </p>
    </div>
  )
}
