export default function Sect05KankerImmuunEditing() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Kanker–immuun editing: hoe tumoren zich aanpassen</h2>
      <p>
        Tumoren ontstaan niet in één stap. Het ontwikkelen van een solide tumor kan jaren tot decennia duren. In die tijd
        verwerven de cellen verschillende eigenschappen, waaronder eigenschappen waardoor zij aan het immuunsysteem kunnen
        ontsnappen. Dat proces heet kanker-immuun editing. Je kunt het zien als een langdurig proces van selectie,
        vergelijkbaar met Darwiniaanse evolutie: de tumorcellen die het beste kunnen overleven in hun omgeving, blijven
        uiteindelijk over.
      </p>
      <p>
        Bij dit proces is er lange tijd een evenwicht tussen tumor en immuunsysteem. Uiteindelijk kunnen de meest
        aangepaste tumorcellen ontsnappen aan immuunsurveillance en ongecontroleerd doorgroeien.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. De drie stappen van kanker-immuun editing</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Stap
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Betekenis
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Eliminatie</td>
              <td className="px-4 py-3 align-top">
                In een vroege fase worden veel tumorcellen nog herkend en vernietigd door het immuunsysteem
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Evenwicht</td>
              <td className="px-4 py-3 align-top">Een vaak langdurige fase waarin tumor en immuunsysteem in balans blijven</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Ontsnapping (escape)</td>
              <td className="px-4 py-3 align-top">Tumorcellen ontsnappen aan immuunsurveillance en groeien onbeperkt verder</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        In de vroege fase worden de meeste ontwikkelende tumorcellen dus geëlimineerd. Daarna kan een evenwicht ontstaan.
        Uiteindelijk ontstaan er tumorcellen die niet meer goed worden herkend of aangepakt.
      </p>
      <p>
        <strong>Aandachtsvraag:</strong> wat is hier het belangrijkste idee? Dat tumorcellen zich aanpassen aan hun
        immunologische omgeving, waardoor de &quot;sterkste&quot; of best aangepaste cellen overblijven.
      </p>
    </div>
  )
}
