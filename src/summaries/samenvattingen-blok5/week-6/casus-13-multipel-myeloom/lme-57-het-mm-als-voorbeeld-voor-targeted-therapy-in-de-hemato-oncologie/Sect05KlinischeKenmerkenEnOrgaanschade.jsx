export default function Sect05KlinischeKenmerkenEnOrgaanschade() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Klinische kenmerken en orgaanschade</h2>
      <p>
        Multipel myeloom kan zich op verschillende manieren uiten. De klachten passen vaak in een patroon van
        botproblemen, bloedarmoede, nierproblemen, hypercalciëmie en infecties.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 2. Belangrijkste orgaanschade en klinische kenmerken bij multipel myeloom
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Uitleg
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Botletsels / osteolytische lesies
              </td>
              <td className="px-4 py-3 align-top">afbraak van bot, vaak zichtbaar op röntgenfoto’s</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Botpijn</td>
              <td className="px-4 py-3 align-top">pijn door botafbraak en botbeschadiging</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Bloedarmoede / anemie
              </td>
              <td className="px-4 py-3 align-top">minder rode bloedcellen, waardoor moeheid ontstaat</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Nierschade / eiwit in urine
              </td>
              <td className="px-4 py-3 align-top">nierproblemen door onder meer lichte ketens</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Hypercalciëmie</td>
              <td className="px-4 py-3 align-top">hoog calciumgehalte in het bloed</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Verhoogd risico op infecties
              </td>
              <td className="px-4 py-3 align-top">door verstoring van de antistofproductie</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Andere tekenen</td>
              <td className="px-4 py-3 align-top">
                vergrote lever, amyloïdose of zelfs weinig zichtbare afwijkingen
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Een kernpunt bij multipel myeloom is dat de myeloomcel botafbraak stimuleert. De myeloomplasmacel zet de
        osteoclast aan, waardoor bot wordt afgebroken, en zet de osteoblast uit, waardoor botvorming vermindert. Zo
        ontstaan botlesies en wordt het skelet verzwakt.
      </p>
      <div className="rounded-xl border-l-4 border-primary-400 bg-primary-50 dark:bg-primary-500/10 p-4 space-y-2">
        <p>
          <strong className="text-primary-900 dark:text-primary-200">Aandachtsvraag:</strong> Waarom ontstaan bij
          multipel myeloom zo vaak botproblemen?{'  '}
          <strong className="text-primary-900 dark:text-primary-200">Kort antwoord:</strong> Omdat de myeloomcel
          botafbraak stimuleert en botopbouw remt.
        </p>
      </div>
    </div>
  )
}
