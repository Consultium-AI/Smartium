export default function Sect04DeDrieGebruikscontexten() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De drie gebruikscontexten</h2>
      <p>Het maakt ethisch veel uit in welke context je een derma-app gebruikt.</p>
      <p>
        Bij <strong>zelftest</strong> gebruikt de patiënt de app zelfstandig. Dat kan autonomie ondersteunen, omdat iemand sneller iets met een verdachte huidafwijking kan doen. Maar hier schuilt ook risico: een patiënt kan een uitslag verkeerd begrijpen, onterecht gerustgesteld raken of juist onnodig angstig worden.
      </p>
      <p>
        Bij <strong>gebruik in de kliniek</strong> kan de app een arts ondersteunen. Dan verandert de ethische vraag. De arts blijft verantwoordelijk, maar krijgt er een extra bron van informatie bij. De kernvraag wordt dan: ondersteunt de app goed klinisch redeneren, of stuurt hij juist in een verkeerde richting?
      </p>
      <p>
        Bij <strong>screening</strong> zouden de maatschappelijke gevolgen nog groter zijn. Dan gaat het niet alleen om individuele patiënten, maar ook om grote aantallen mensen, zorgkosten, overdiagnostiek en rechtvaardige toegang. Hoewel deze stof screening niet centraal uitwerkt, moet je wel kunnen aanduiden dat dit een andere en zwaardere context is.
      </p>

      <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 pt-2">Tabel 1. Drie contexten van gebruik van de derma-app</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="w-full min-w-[36rem] border-collapse text-sm">
          <thead>
            <tr className="bg-slate-100 dark:bg-slate-800/80">
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-center font-semibold text-slate-900 dark:text-slate-100">
                Context
              </th>
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-center font-semibold text-slate-900 dark:text-slate-100">
                Kernvraag
              </th>
              <th className="border border-slate-200 dark:border-slate-600 px-3 py-2 text-center font-semibold text-slate-900 dark:text-slate-100">
                Belangrijk ethisch aandachtspunt
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Zelftest</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Wat doet de patiënt met de uitslag?</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">autonomie, misinterpretatie, onrust</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Kliniek</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Hoe gebruikt de arts de app in besluitvorming?</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">verantwoordelijkheid, vertrouwen, veiligheid</td>
            </tr>
            <tr>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Screening</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">Wat gebeurt er als je grote groepen test?</td>
              <td className="border border-slate-200 dark:border-slate-600 px-3 py-2">rechtvaardigheid, overdiagnostiek, zorgbelasting</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
