export default function Sect04MorfologischeVeranderingenOpBeeldvorming() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Morfologische veranderingen op beeldvorming</h2>
      <p>
        Bij chronische pancreatitis zijn er verschillende veranderingen zichtbaar op beeldvorming. Drie belangrijke morfologische kenmerken zijn:
      </p>
      <ol className="list-decimal pl-6 space-y-4">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Verkalking van de pancreas</strong>
          <p className="mt-2">
            In de alvleesklier kunnen kalkafzettingen ontstaan. Dit is een typische aanwijzing voor chronische schade.
          </p>
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Veranderingen van het pancreaskanaal</strong>
          <p className="mt-2">
            Het afvoerkanaal van de pancreas kan onregelmatig worden, vernauwd raken of juist verwijd zijn. Dit past bij de langdurige beschadiging van het weefsel.
          </p>
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">Atrofie van de pancreas</strong>
          <p className="mt-2">
            De alvleesklier kan kleiner worden doordat functionerend weefsel verloren gaat. Dit heet atrofie.
          </p>
        </li>
      </ol>
      <p>
        Deze morfologische veranderingen laten zien dat de pancreas niet alleen ontstoken is, maar ook structureel is aangetast. Juist die blijvende veranderingen maken chronische pancreatitis herkenbaar.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Belangrijke morfologische veranderingen bij chronische pancreatitis
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Verkalking</td>
              <td className="px-4 py-3 align-top">Kalkafzettingen in de pancreas</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Kanaalafwijkingen</td>
              <td className="px-4 py-3 align-top">Onregelmatigheid, vernauwing of verwijding van het pancreaskanaal</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Atrofie</td>
              <td className="px-4 py-3 align-top">Krimp van de pancreas door verlies van weefsel</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
