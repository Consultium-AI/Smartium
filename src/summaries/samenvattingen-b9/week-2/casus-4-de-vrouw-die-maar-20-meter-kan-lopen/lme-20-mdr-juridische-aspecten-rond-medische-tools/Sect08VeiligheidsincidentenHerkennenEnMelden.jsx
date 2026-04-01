export default function Sect08VeiligheidsincidentenHerkennenEnMelden() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Veiligheidsincidenten herkennen en melden</h2>
      <p>
        Bij het gebruik van medische hulpmiddelen kunnen incidenten optreden. Dat kan komen door het hulpmiddel zelf, maar ook door fout gebruik. Het is belangrijk dat je zulke problemen herkent.
      </p>
      <p>Voorbeelden van incidenten zijn:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>defecten;</li>
        <li>gebruikersfouten;</li>
        <li>bijwerkingen;</li>
        <li>bijna-incidenten.</li>
      </ul>
      <p>
        Een bijna-incident betekent dat een defect of gebruikersfout wordt opgemerkt voordat de patiënt schade oploopt. Ook dat is belangrijk om te melden, omdat zo een groter probleem mogelijk kan worden voorkomen.
      </p>
      <p>Waarom melden zo belangrijk is:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>het vergroot de veiligheid;</li>
        <li>het kan voorkomen dat hetzelfde opnieuw gebeurt;</li>
        <li>de fabrikant kan het hulpmiddel verbeteren.</li>
      </ul>
      <p>De hoofdlijnen van melden zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>zorg dat het defecte hulpmiddel niet meer gebruikt kan worden;</li>
        <li>meld het incident via de interne VIM-procedure, oftewel Veilig Incident Melden;</li>
        <li>meld het bij de leverancier;</li>
        <li>meld het bij de IGJ alleen als het om een ernstig incident gaat.</li>
      </ul>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 3. Wat doe je bij een incident met een medisch hulpmiddel?</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Stap</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Handeling</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">1</td>
                <td className="px-4 py-3">Hulpmiddel buiten gebruik stellen</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">2</td>
                <td className="px-4 py-3">Intern melden via VIM</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">3</td>
                <td className="px-4 py-3">Leverancier informeren</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">4</td>
                <td className="px-4 py-3">IGJ melden bij ernstig incident</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
