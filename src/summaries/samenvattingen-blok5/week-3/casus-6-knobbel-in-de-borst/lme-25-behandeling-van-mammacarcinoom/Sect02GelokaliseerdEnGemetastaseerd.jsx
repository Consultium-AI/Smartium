export default function Sect02GelokaliseerdEnGemetastaseerd() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Gelokaliseerd en gemetastaseerd mammacarcinoom</h2>
      <p>
        Bij mammacarcinoom is het belangrijk om eerst te bepalen of er sprake is van gelokaliseerde ziekte of van
        uitzaaiingen op afstand. Dat verschil bepaalt namelijk of de behandeling nog curatief kan zijn of vooral
        palliatief is. Een primaire tumor is niet op afstand uitgezaaid en wordt behandeld met het doel om te genezen.
        Zodra er metastasen op afstand zijn, is de behandeling niet meer curatief.
      </p>
      <p>
        Een lokale metastase is een uitzaaiing in de regio van de tumor, bijvoorbeeld in de okselklieren aan de zijde
        van de tumor. Dat hoort nog bij het primaire mammacarcinoom. Metastasen op afstand zijn uitzaaiingen elders in
        het lichaam, zoals levermetastasen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Verschil tussen lokale metastasen en metastasen op afstand
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Begrip
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Betekenis
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Voorbeeld
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Gevolg voor behandeling
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Lokale metastase</td>
              <td className="px-4 py-3 align-top">Uitzaaiing in de directe regio van de tumor</td>
              <td className="px-4 py-3 align-top">Okselklieren aan de zijde van de tumor</td>
              <td className="px-4 py-3 align-top">Nog onderdeel van primaire ziekte</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Metastasen op afstand</td>
              <td className="px-4 py-3 align-top">Uitzaaiing elders in het lichaam</td>
              <td className="px-4 py-3 align-top">Levermetastasen</td>
              <td className="px-4 py-3 align-top">Behandeling niet meer curatief</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Aandachtsvraag: waarom is dit onderscheid zo belangrijk?{'  '}
        Mini-antwoord: omdat gelokaliseerde ziekte nog met een curatieve behandeling kan worden aangepakt, terwijl
        gemetastaseerde ziekte niet meer curatief is.
      </p>
    </div>
  )
}
