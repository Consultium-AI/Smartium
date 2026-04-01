export default function Sect04KlinischBeeld() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Klinisch beeld: hoe zien erysipelas en cellulitis eruit?</h2>
      <p>
        De klassieke huidafwijking bij erysipelas is een scherp begrensde, felrode en oedemateuze roodheid. Cellulitis is meestal onscherp begrensd en vaak wat minder fel rood dan erysipelas.
      </p>
      <p>Er zijn ook andere huidbeelden die je kunt tegenkomen en die helpen bij de differentiaaldiagnose:</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Verschillende huidbeelden bij roodheid van het been</h3>
      <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
        <table className="w-full text-left text-sm">
          <thead className="bg-slate-100 dark:bg-slate-800/80">
            <tr>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Ziektebeeld</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Kenmerken</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            <tr>
              <td className="p-3 align-top">Erysipelas</td>
              <td className="p-3">Scherp begrensd, felrood, oedemateus</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Lymfangitis</td>
              <td className="p-3">Erythemateuze streep in het verlengde van de lymfebanen</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Cellulitis</td>
              <td className="p-3">Onscherp begrensd, klassiek minder fel rood dan erysipelas</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Stase dermatitis</td>
              <td className="p-3">
                Scherp begrensd, roodheid met vaak ook hyperpigmentatie en schilfering; bilateraal voorkomen kan een aanwijzing zijn
              </td>
            </tr>
            <tr>
              <td className="p-3 align-top">Tinea pedis</td>
              <td className="p-3">
                Erythematosquameuze laesies op voetzool, voetranden en tussen de tenen met soms vorming van kloofjes en onychomycose
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Aandachtsvraag: wat past het best bij een scherp begrensd, felrood en gezwollen onderbeen?
        {'  '}
        Mini-antwoord: erysipelas.
      </p>
    </div>
  )
}
