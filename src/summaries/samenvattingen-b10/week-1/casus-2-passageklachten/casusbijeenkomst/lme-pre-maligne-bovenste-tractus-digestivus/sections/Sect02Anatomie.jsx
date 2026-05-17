export default function Sect02Anatomie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Anatomie van slokdarm en maag</h2>
      <p>
        De bovenste tractus digestivus loopt van slokdarm naar maag en bevat een aantal belangrijke herkenningspunten. Denk
        hierbij aan de bovenste slokdarmsfincter, de slokdarm zelf, het gebied rond de gastro-oesofageale junctie, het
        diafragma en in de maag aan fundus, corpus, antrum en pylorus.
      </p>
      <p>
        De overgang tussen slokdarm en maag is klinisch belangrijk. Hier zie je normaal een scherpe overgang van
        plaveiselepitheel naar cilindrisch epitheel. Die overgang ligt bij de gastro-oesofageale junctie, ook wel de Z-lijn
        genoemd. De top van de maagplooien helpt mee om die junctie te markeren. De onderste slokdarmsfincter ligt normaal
        ter hoogte van het diafragma en vormt samen met dit spierblad een belangrijke barrière tegen reflux.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35 space-y-3">
        <p className="text-slate-800 dark:text-amber-100 m-0">
          <strong className="text-slate-900 dark:text-amber-50">Aandachtsvraag:</strong> welk epitheel bekleedt de normale
          slokdarm?
          <br />
          <strong className="text-slate-900 dark:text-amber-50">Antwoord:</strong> plaveiselepitheel.
        </p>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 1. Belangrijke anatomische en histologische uitgangspunten
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Onderdeel
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Normale situatie
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Slokdarm</td>
                <td className="px-4 py-3 align-top">Plaveiselepitheel</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Maag</td>
                <td className="px-4 py-3 align-top">Cilindrisch epitheel</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Gastro-oesofageale junctie</td>
                <td className="px-4 py-3 align-top">Overgang van plaveisel- naar cilindrisch epitheel</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Onderste slokdarmsfincter</td>
                <td className="px-4 py-3 align-top">Refluxbarrière, samenhang met diafragma</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Maagdelen</td>
                <td className="px-4 py-3 align-top">Fundus, corpus, antrum en pylorus</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
