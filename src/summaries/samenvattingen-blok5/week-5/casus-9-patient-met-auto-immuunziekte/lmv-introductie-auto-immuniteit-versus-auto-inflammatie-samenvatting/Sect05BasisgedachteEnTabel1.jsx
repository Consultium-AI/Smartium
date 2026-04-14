export default function Sect05BasisgedachteEnTabel1() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Auto-immuniteit en auto-inflammatie: de basisgedachte
      </h2>
      <p>
        Volgens deze module wordt auto-immuniteit vooral gedreven door ontregeling van het verworven immuunsysteem.
        Denk dan aan T-cellen, B-cellen, geheugencellen, plasmacellen en auto-antistoffen. De ontsteking is hierbij
        vooral gekoppeld aan herkenning van antigenen en aan reacties tegen lichaamseigen structuren.
      </p>
      <p>
        Auto-inflammatie wordt daarentegen vooral gedreven door ontregeling van het aangeboren immuunsysteem. Hierbij
        spelen onder andere macrofagen, natural killer-cellen, dendritische cellen, neutrofielen, basofielen,
        eosinofielen en mestcellen een rol. De ontsteking is hier minder afhankelijk van een specifieke
        antigeenreactie en meer van ontregeling van algemene ontstekingsmechanismen en cytokineproductie.
      </p>
      <p>Dat levert de klassieke tweedeling op:</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 1. Klassieke vergelijking tussen auto-immuniteit en auto-inflammatie
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-700">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="bg-slate-50 dark:bg-slate-800/80">
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">
                Kenmerk
              </th>
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">
                Auto-immuniteit
              </th>
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">
                Auto-inflammatie
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Vooral ontregeld systeem</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Verworven afweersysteem</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Aangeboren afweersysteem</td>
            </tr>
            <tr className="bg-slate-50/50 dark:bg-slate-800/30">
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Belangrijke spelers</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                T-cellen, B-cellen, plasmacellen, auto-antistoffen
              </td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                Macrofaag, NK-cel, dendritische cel, neutrofiel, basofiel, eosinofiel, mestcel
              </td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Type ontsteking</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Vooral antigeen-afhankelijk</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Vooral antigeen-onafhankelijk</td>
            </tr>
            <tr className="bg-slate-50/50 dark:bg-slate-800/30">
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Klassieke uitkomst</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                Reactie tegen zelf-antigenen
              </td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">
                Ontstekingsactivatie zonder strikte antigeenspecificiteit
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Toch moet je deze tabel niet te hard opvatten. In de praktijk beïnvloeden aangeboren en verworven afweer
        elkaar voortdurend.
      </p>
    </div>
  )
}
