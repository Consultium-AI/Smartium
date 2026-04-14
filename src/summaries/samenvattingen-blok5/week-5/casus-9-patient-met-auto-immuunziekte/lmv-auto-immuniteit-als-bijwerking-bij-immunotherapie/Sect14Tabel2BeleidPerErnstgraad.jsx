export default function Sect14Tabel2BeleidPerErnstgraad() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Tabel 2. Beleid per ernstgraad van immuun-gemedieerde bijwerkingen
      </h2>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100/90 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-3 py-2 font-semibold border-b border-slate-200 dark:border-slate-600">Ernstgraad</th>
              <th className="px-3 py-2 font-semibold border-b border-slate-200 dark:border-slate-600">Beleid</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr>
              <td className="px-3 py-2 align-top">Graad 1</td>
              <td className="px-3 py-2 align-top">
                immunotherapie kan doorgaan met nauwkeurige controle; ondersteunende behandeling
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">Graad 2</td>
              <td className="px-3 py-2 align-top">
                overweeg immunotherapie tijdelijk te onderbreken; overweeg corticosteroïden; ondersteunende behandeling
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">Graad 3</td>
              <td className="px-3 py-2 align-top">
                immunotherapie onderbreken; starten met corticosteroïden en afbouwen over 4–6 weken; overweeg extra
                immunosuppressie bij onvoldoende effect; ondersteunende behandeling
              </td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">Graad 4</td>
              <td className="px-3 py-2 align-top">
                immunotherapie definitief stoppen; starten met corticosteroïden en afbouwen over 4–6 weken; overweeg
                extra immunosuppressie bij onvoldoende effect; ondersteunende behandeling
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Bij herstel tot graad 1 of lager kan herstart van behandeling soms worden overwogen. Ook is overleg met een
        passende orgaanspecialist belangrijk, bijvoorbeeld een longarts, endocrinoloog, cardioloog, neuroloog of
        gastro-enteroloog, afhankelijk van welk orgaan betrokken is.
      </p>
    </div>
  )
}
