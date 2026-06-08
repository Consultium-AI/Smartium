export default function Sect06LichaamssamenstellingEnNutrientenreserves() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Lichaamssamenstelling en nutriëntenreserves</h2>
      <p>
        Het tweede domein gaat over wat het lichaam daadwerkelijk heeft opgebouwd en opgeslagen. Hier kijk je naar de <strong className="text-slate-900 dark:text-slate-100">lichaamssamenstelling</strong>: dus hoe het lichaam is opgebouwd uit bijvoorbeeld spiermassa en vetmassa. Ook kijk je naar <strong className="text-slate-900 dark:text-slate-100">nutriëntenreserves</strong>, oftewel de voorraad van voedingsstoffen in het lichaam.
      </p>
      <p>
        Dit is belangrijk, omdat ondervoeding niet alleen betekent dat iemand afvalt. Het betekent ook dat het lichaam reserves gaat aanspreken. Vooral spiermassa is klinisch relevant, omdat verlies daarvan gevolgen heeft voor kracht, herstel en functioneren.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Wat zegt lichaamssamenstelling?</h3>
      <p>
        Lichaamssamenstelling helpt om te begrijpen of gewichtsverlies vooral komt door verlies van spiermassa, vetmassa of beide. Dat maakt de beoordeling veel preciezer dan alleen een gewicht of BMI.
      </p>
      <p>
        Een patiënt kan bijvoorbeeld nog een redelijk gewicht hebben, maar toch veel spiermassa kwijt zijn. Dan is er alsnog sprake van een probleem in de voedingsstatus.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Nutriëntenreserves</h3>
      <p>
        Nutriëntenreserves zijn de voorraden van voedingsstoffen die het lichaam kan gebruiken wanneer de inname tijdelijk onvoldoende is. Als deze reserves afnemen, is dat een teken dat het lichaam in een kwetsbare toestand komt.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Voorbeelden van wat je in dit domein beoordeelt</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Onderdeel</th>
              <th className="px-4 py-3 font-semibold">Betekenis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Spiermassa</td>
              <td className="px-4 py-3 align-top">Geeft aan hoeveel functioneel weefsel aanwezig is</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Vetmassa</td>
              <td className="px-4 py-3 align-top">Geeft aan hoeveel energiereserve aanwezig is</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Nutriëntenreserves</td>
              <td className="px-4 py-3 align-top">Laat zien hoeveel voorraad het lichaam nog heeft</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
