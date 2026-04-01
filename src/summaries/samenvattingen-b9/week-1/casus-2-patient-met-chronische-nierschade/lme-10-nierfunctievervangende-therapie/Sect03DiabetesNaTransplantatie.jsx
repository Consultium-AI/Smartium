export default function Sect03DiabetesNaTransplantatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Diabetes mellitus na niertransplantatie</h2>
      <p>
        Een aanzienlijk deel van de patiënten met nierfalen heeft al diabetes mellitus vóór de transplantatie. Door het nierfalen zelf, met verminderde insulineuitscheiding, maar ook door verlies aan eetlust en cachexie, kan deze bestaande diabetes tijdelijk minder zichtbaar worden. De diabetes lijkt dan als het ware “uit te doven”, maar verdwijnt niet echt. Na de transplantatie kan die weer terugkomen.
      </p>
      <p>
        Daarnaast ontwikkelt een deel van de patiënten juist een nieuwe diabetes mellitus na niertransplantatie. Dit heet diabetes na niertransplantatie.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-2">Risicofactoren en mechanismen</h3>
        <p className="mb-3">Bij het ontstaan van nieuwe diabetes na niertransplantatie spelen meerdere factoren mee. Vooral de volgende factoren zijn belangrijk:</p>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 1. Belangrijke factoren bij diabetes na niertransplantatie</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600 mb-4">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Factor</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Betekenis</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Leeftijd &gt;45 jaar</td>
                <td className="px-4 py-3">Vergroot het risico</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Mannelijk geslacht</td>
                <td className="px-4 py-3">Vergroot het risico</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Hogere BMI</td>
                <td className="px-4 py-3">Vergroot het risico</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Immunosuppressiva</td>
                <td className="px-4 py-3">Vooral tacrolimus en prednison zijn belangrijke boosdoeners</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="mb-2">De mechanismen zijn terug te voeren op twee hoofdlijnen:</p>
        <ul className="list-disc pl-6 space-y-1 mb-3">
          <li>verminderde insulineafgifte;</li>
          <li>insulineresistentie.</li>
        </ul>
        <p>
          Tacrolimus en prednison spelen hierin een belangrijke rol. Deze middelen kunnen dus bijdragen aan het ontstaan van diabetes na transplantatie.
        </p>
      </div>
    </div>
  )
}
