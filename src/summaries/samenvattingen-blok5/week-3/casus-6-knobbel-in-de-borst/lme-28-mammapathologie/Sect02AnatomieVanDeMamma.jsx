export default function Sect02AnatomieVanDeMamma() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Anatomie van de mamma</h2>
      <p>
        De mamma bestaat uit kliereweefsel, bindweefsel en vetweefsel. Daarnaast horen ook bloedvaten, lymfvaten en huid
        bij de bouw van de borst. Aan de dorsale zijde wordt de mamma begrensd door de musculus pectoralis major. Aan
        de ventrale zijde ligt de huid, met centraal de tepel, omgeven door de areola. De areola is meer gepigmenteerd
        dan de rest van de huid van de mamma.
      </p>
      <p>
        Belangrijk is ook de lymfedrainage van de borst. Die verloopt via de oksel en via de parasternale
        lymfeklierstations. Als een mammacarcinoom uitzaait naar lymfeklieren, gebeurt dat doorgaans naar deze gebieden,
        waarbij de oksel het meest frequent is.
      </p>
      <p>
        Aandachtsvraag: Waarom is die lymfedrainage klinisch belangrijk?{'  '}
        Mini-antwoord: Omdat lymfekliermetastasen vaak eerst in de oksel worden gevonden bij mammacarcinoom.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Belangrijke anatomische kenmerken van de mamma</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Onderdeel
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Weefselopbouw</td>
              <td className="px-4 py-3 align-top">Kliereweefsel, bindweefsel, vetweefsel</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Extra structuren</td>
              <td className="px-4 py-3 align-top">Bloedvaten, lymfvaten, huid</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Dorsale begrenzing</td>
              <td className="px-4 py-3 align-top">Musculus pectoralis major</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Ventrale zijde</td>
              <td className="px-4 py-3 align-top">Huid met tepel en areola</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Lymfedrainage</td>
              <td className="px-4 py-3 align-top">Oksel en parasternal</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Meest frequente plaats van lymfekliermetastasen</td>
              <td className="px-4 py-3 align-top">Oksel</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
