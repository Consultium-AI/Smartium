export default function Sect04UvaUvbEnUvc() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">UVA, UVB en UVC: wat is het verschil?</h2>
      <p>UV-straling wordt verdeeld in drie categorieën op basis van golflengte:</p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 2. UV-soorten en hun kenmerken</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Type UV-straling
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Golflengte
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerken
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">UVC</td>
              <td className="px-4 py-3 align-top">200–290 nm</td>
              <td className="px-4 py-3 align-top">
                Krachtigste vorm van UV-straling, bereikt het aardoppervlak niet of nauwelijks
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">UVB</td>
              <td className="px-4 py-3 align-top">290–315 nm</td>
              <td className="px-4 py-3 align-top">
                Wordt grotendeels tegengehouden door de dampkring; belangrijkste factor bij zonverbranding en huidkanker
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">UVA</td>
              <td className="px-4 py-3 align-top">315–400 nm</td>
              <td className="px-4 py-3 align-top">
                Dringt gemakkelijk door tot het aardoppervlak; minst schadelijke van de drie, maar kan bij hoge dosis ook
                schade geven
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Het licht van de zon bestaat uit infrarood, zichtbaar licht en ultraviolet licht. De dampkring en vooral de
        ozonlaag houden het grootste deel van de UV-straling tegen. UVC bereikt de aarde vrijwel niet, en een groot deel van
        UVB wordt ook al geabsorbeerd. Van de UV-straling die het aardoppervlak bereikt, is meer dan 95% UVA.
      </p>
      <p>Een belangrijk principe is: hoe langer de golflengte, hoe dieper de penetratie in de huid.</p>
      <p>UVA dringt gemakkelijk door tot de dermis en zelfs dieper gelegen lagen.</p>
      <p>UVB wordt grotendeels geabsorbeerd in de epidermis.</p>
      <p>UVC bereikt het huidoppervlak nauwelijks.</p>
      <p>
        <span className="font-semibold">Aandachtsvraag:</span>
        {`  *Welke UV-soort dringt het diepst door in de huid?*  Mini-antwoord: UVA dringt het diepst door.`}
      </p>
    </div>
  )
}
