export default function Sect03OpbouwVanDeHuid() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De opbouw van de huid</h2>
      <p>De huid bestaat uit verschillende lagen. De volgorde vanaf de buitenkant is:</p>
      <p className="font-medium text-slate-900 dark:text-slate-100">epidermis → dermis → subcutis</p>
      <p>
        In de histologie worden vooral epidermis en dermis tot de huid gerekend. Dermatologen en chirurgen beschouwen ook
        de subcutis als onderdeel van de huid.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Lagen van de huid</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Laag
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerken
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Belang
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Epidermis</td>
              <td className="px-4 py-3 align-top">Buitenste laag, epitheel, opgebouwd uit keratinocyten</td>
              <td className="px-4 py-3 align-top">Belangrijke barrière tegen de buitenwereld</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Dermis</td>
              <td className="px-4 py-3 align-top">Bindweefsellaag onder de epidermis</td>
              <td className="px-4 py-3 align-top">Ondersteuning, structuur en plaats van veel immuuncellen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Subcutis / hypodermis</td>
              <td className="px-4 py-3 align-top">Onder de dermis, bindweefsel met relatief veel vetcellen</td>
              <td className="px-4 py-3 align-top">
                Dieper gelegen laag; door sommige disciplines ook tot de huid gerekend
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De epidermis bestaat uit gespecialiseerde epitheelcellen: de keratinocyten. Deze worden voortdurend van onderaf
        aangevuld vanuit de stratum basale, waar celdeling plaatsvindt. De buitenste laag, het stratum corneum, is de
        belangrijkste laag voor de mechanische barrièrefunctie van de huid.
      </p>
      <p>
        Het stratum corneum bestaat uit dode epitheelcellen die gevuld zijn met keratine en aan elkaar zijn geplakt met
        lipiden. Daardoor is deze laag relatief waterafstotend. Dat is belangrijk: zo blijft water beter binnen en worden
        invloeden van buitenaf beter tegengehouden.
      </p>
      <p>
        <span className="font-semibold">Aandachtsvraag:</span>
        {` Waaruit bestaat de belangrijkste barrièrelaag van de epidermis?</p>
      <p className="mt-2">
        <span className="font-semibold">Mini-antwoord:</span>{' '}Uit dode epitheelcellen, keratine, lipiden en eiwitten.`}
      </p>
    </div>
  )
}
