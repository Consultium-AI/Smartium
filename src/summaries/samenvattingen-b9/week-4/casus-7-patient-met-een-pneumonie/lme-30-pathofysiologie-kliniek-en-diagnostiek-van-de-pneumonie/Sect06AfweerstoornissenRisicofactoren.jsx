export default function Sect06AfweerstoornissenRisicofactoren() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Waarom afweerstoornissen een pneumonie geven</h2>
      <p>
        Pneumonie ontstaat sneller als een van de verdedigingsmechanismen van de long verstoord is. Dat kan op verschillende niveaus gebeuren: structureel/anatomisch, in de aangeboren afweer of in de verworven afweer.
      </p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 2. Belangrijke risicofactoren voor respiratoire infecties en pneumonie</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Categorie</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Voorbeelden</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Waarom geeft dit meer infectierisico?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Structureel/anatomisch</td>
                <td className="px-4 py-3 align-top">Primaire ciliaire dyskinesie, spierziekte, algemene anesthesie, bronchiectasieën, cystische fibrose</td>
                <td className="px-4 py-3 align-top">Verstoord mucociliair transport, verminderde hoest, slijmophoping, terugkerende infecties</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Aangeboren immuniteit</td>
                <td className="px-4 py-3 align-top">Neutropenie door chemotherapie, diabetes mellitus</td>
                <td className="px-4 py-3 align-top">Minder goede werking van neutrofielen en macrofagen</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Verworven immuniteit</td>
                <td className="px-4 py-3 align-top">IgG-deficiëntie, HIV/AIDS</td>
                <td className="px-4 py-3 align-top">Minder antistofafweer of minder CD4+ T-cellen</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Overige beschadigende factoren</td>
                <td className="px-4 py-3 align-top">Roken/vapen</td>
                <td className="px-4 py-3 align-top">Remt meerdere longafweermechanismen</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Bij algemene anesthesie is de hoestreflex onderdrukt en kan aspiratie gemakkelijker optreden. Daardoor is de kans op respiratoire infecties groter.
      </p>
      <p>
        Bij primaire ciliaire dyskinesie functioneren de cilia niet goed. Het mucociliaire transport raakt ernstig verstoord, waardoor luchtweginfecties makkelijker ontstaan.
      </p>
      <p>
        Bij spierziekten, zoals ALS, kunnen slikstoornissen en een verminderde hoestkracht optreden. Ook dat verhoogt de kans op pneumonie.
      </p>
      <p>
        Neutropenie door chemotherapie betekent dat er te weinig neutrofiele granulocyten zijn. Daardoor neemt de kans op infecties toe.
      </p>
      <p>
        Bij diabetes mellitus kan chronische hyperglykemie leiden tot slechter functioneren van neutrofielen en macrofagen. Ook dat vergroot het infectierisico.
      </p>
      <p>
        Een IgG-deficiëntie vermindert de humorale afweer. Bij HIV/AIDS ontstaat een tekort aan CD4+ T-lymfocyten, waardoor de cellulaire afweer verzwakt.
      </p>
    </div>
  )
}
