export default function Sect08Tabel3EnLokalisatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 3. Verschil tussen veelvoorkomende huidafwijkingen
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Afwijking
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Petechiën</td>
              <td className="px-4 py-3 align-top">0,5–2 mm, puntvormige bloeding, niet wegdrukbaar</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Purpura</td>
              <td className="px-4 py-3 align-top">rood/paars/blauwrood door erytrocytenextravasatie, niet wegdrukbaar</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Erytheem</td>
              <td className="px-4 py-3 align-top">wegdrukbare roodheid door vasodilatatie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Vesikel</td>
              <td className="px-4 py-3 align-top">vochtgevuld, kleiner dan 1 cm</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Bulla</td>
              <td className="px-4 py-3 align-top">vochtgevuld, groter dan 1 cm</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Hematoom</td>
              <td className="px-4 py-3 align-top">dieper gelokaliseerde bloeding door beschadiging van een groter vat</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Aandachtsvraag: Waarom is purpura bij vasculitis niet wegdrukbaar?{'  '}
        Mini-antwoord: Omdat het geen gevolg is van vaatverwijding, maar van bloed dat buiten de vaatwand is
        terechtgekomen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Waar zie je het vaak?</h3>
      <p>
        Bij kleine vaten vasculitis zie je huidafwijkingen vaak op de onderbenen. Dat komt doordat in de distale
        extremiteiten de bloedstroom minder sterk is, waardoor immuuncomplexen makkelijker neerslaan op de vaatwand.
        Ook de zwaartekracht speelt hierbij een rol. Als een patiënt bedlegerig is, kunnen huidafwijkingen juist op de
        onderrug zichtbaar zijn.
      </p>
    </div>
  )
}
