export default function Sect03VerschillendeTypenInsuline() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Verschillende typen insuline</h2>
      <p>
        Insulinepreparaten verschillen in hoe snel ze beginnen te werken, wanneer ze het sterkst werken en hoe lang ze actief blijven. Dat noemen we het farmacokinetische en farmacodynamische profiel. Juist dat profiel bepaalt wanneer je een bepaald preparaat gebruikt.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Hoofdtypen insuline en hun klinische betekenis</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Type insuline</th>
              <th className="px-4 py-3 font-semibold">Kenmerk</th>
              <th className="px-4 py-3 font-semibold">Klinische inzet</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Snelwerkende insuline</td>
              <td className="px-4 py-3 align-top">Werkt snel en kort</td>
              <td className="px-4 py-3 align-top">Rond maaltijden, als bolusinsuline</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Kortwerkende insuline</td>
              <td className="px-4 py-3 align-top">Werkt minder snel dan snelwerkend, maar nog steeds relatief kort</td>
              <td className="px-4 py-3 align-top">Ook rond maaltijden, afhankelijk van schema</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Middellangwerkende insuline</td>
              <td className="px-4 py-3 align-top">Geeft een meer uitgesproken basiswerking</td>
              <td className="px-4 py-3 align-top">Voor basale dekking, maar met minder vlak profiel</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Langwerkende insuline</td>
              <td className="px-4 py-3 align-top">Werkt langdurig en relatief gelijkmatig</td>
              <td className="px-4 py-3 align-top">Basale insuline, vaak 1x per dag</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Zeer langwerkende insuline</td>
              <td className="px-4 py-3 align-top">Nog langer en vaak stabieler profiel</td>
              <td className="px-4 py-3 align-top">Basale insuline bij behoefte aan langdurige dekking</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De praktische keuze hangt dus niet alleen af van de naam van het preparaat, maar vooral van de vraag: <strong className="text-slate-900 dark:text-slate-100">moet deze insuline een maaltijdpiek opvangen of juist een continue basis leveren?</strong>
      </p>
    </div>
  )
}
