export default function Sect03IndicatiesVoorOrgaantransplantatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Indicaties voor orgaantransplantatie</h2>
      <p>
        De belangrijkste indicatie is dus onomkeerbaar orgaanfalen. Welke ziekte daar precies achter zit, verschilt per
        orgaan.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Veelvoorkomende indicaties per orgaan
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Orgaan
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Voorbeelden van indicaties
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Nier</td>
              <td className="px-4 py-3 align-top">
                Diabetes mellitus type 2, atherosclerose, cystenieren, IgA-nefropathie
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Lever</td>
              <td className="px-4 py-3 align-top">
                Hepatocellulair carcinoom, auto-immuun leverziekten (PSC/PBC/auto-immuun hepatitis), alcoholische
                levercirrose, acuut leverfalen
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Hart</td>
              <td className="px-4 py-3 align-top">Hartinfarct, hypertensie, cardiomyopathie, kleplijden</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Long</td>
              <td className="px-4 py-3 align-top">
                Interstitiële longziekte, COPD, cystic fibrosis, pulmonale arteriële hypertensie
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De redenen voor orgaanfalen zijn niet stabiel door de tijd. Zo zijn er minder mensen met diabetes mellitus type
        1 die nierfalen ontwikkelen, neemt leververvetting en obesitas toe, en is het aantal patiënten met cystic fibrosis
        dat longfalen ontwikkelt juist sterk gedaald door goede behandeling.
      </p>
    </div>
  )
}
