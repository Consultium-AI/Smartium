export default function Sect04Mediatoren() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Mediatoren van migratie en proliferatie
      </h2>
      <p>
        De route van thymocyten door de thymus wordt niet willekeurig afgelegd. Verschillende moleculen
        sturen deze migratie en rijping.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
        Tabel 2. Belangrijke mediatoren tijdens thymusmigratie en -groei
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Mediator
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Bron
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Rol
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Chemokinen
              </td>
              <td className="px-4 py-3 align-top">Stromale cellen in de thymus</td>
              <td className="px-4 py-3 align-top">Leiden thymocyten door de thymus</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">CXCL12</td>
              <td className="px-4 py-3 align-top">Stromale cellen in subcapsulaire gebieden van de cortex</td>
              <td className="px-4 py-3 align-top">
                Stuurt de vroegste voorlopercellen door de cortex tot net onder het kapsel
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">IL-7</td>
              <td className="px-4 py-3 align-top">Corticale epitheelcellen</td>
              <td className="px-4 py-3 align-top">
                Stimuleert sterke proliferatie van prothymocyten in de cortex
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                P-selectine
              </td>
              <td className="px-4 py-3 align-top">Endotheelcellen</td>
              <td className="px-4 py-3 align-top">Speelt een rol bij het binnenkomen van prothymocyten</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">PSGL-1</td>
              <td className="px-4 py-3 align-top">Prothymocyten</td>
              <td className="px-4 py-3 align-top">Ligand dat kan binden aan P-selectine</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De belangrijkste richtinggevende signalen bij de migratie zijn dus chemokinen. Groeifactoren en
        HLA-moleculen spelen geen rol bij de migratie zelf. Wel is IL-7 belangrijk voor de proliferatie in
        de cortex. Bovendien helpt P-selectine bij de toetreding van prothymocyten tot de thymus, doordat het
        bindt aan PSGL-1 op de voorlopercellen.
      </p>
      <div className="rounded-xl border border-amber-200 dark:border-amber-600/40 bg-amber-50 dark:bg-amber-950/65 p-4">
        <p className="text-amber-950 dark:text-amber-100">
          <strong className="text-amber-950 dark:text-amber-50">Aandachtsvraag:</strong> Welke factor laat
          thymocyten in de cortex sterk prolifereren?{' '}
          <span className="text-amber-900 dark:text-amber-100">
            Kort antwoord: IL-7, geproduceerd door corticale epitheelcellen.
          </span>
        </p>
      </div>
    </div>
  )
}
