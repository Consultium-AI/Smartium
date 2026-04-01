export default function Sect06BeperktEnMinimaalRisico() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Beperkt risico en minimaal risico</h2>
      <p>
        Bij beperkt risico gaat het om systemen die met mensen in contact komen, zoals chatbots. Daar is vooral belangrijk dat gebruikers weten dat zij met AI te maken hebben. Ook systemen in organisatie, logistiek, planning of communicatie kunnen hieronder vallen, zolang ze geen invloed hebben op medische kernbeslissingen of toegang tot zorg.
      </p>
      <p>Voorbeelden zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>voorspellen van no-shows;</li>
        <li>automatische roosterplanning voor operatiekamers;</li>
        <li>capaciteitsplanning;</li>
        <li>het herschrijven van brieven naar een patiëntvriendelijkere tekst;</li>
        <li>een AI-simulatiepatiënt voor onderwijs.</li>
      </ul>
      <p>
        Bij deze systemen geldt vooral een transparantieplicht: patiënten en gebruikers moeten weten dat AI wordt gebruikt.
      </p>
      <p>
        Bij minimaal risico gaat het om heel eenvoudige toepassingen, zoals spelling- en grammaticacontrole. Daar gelden geen extra verplichtingen.
      </p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 2. Voorbeelden en hun plaats in de risicoklassen</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Voorbeeld</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Risicoklasse</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Waarom?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Social scoring van patiënten</td>
                <td className="px-4 py-3 align-top">Onaanvaardbaar risico</td>
                <td className="px-4 py-3 align-top">Schendt fundamentele rechten</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Gezichtsherkenning in openbare ruimte</td>
                <td className="px-4 py-3 align-top">Onaanvaardbaar risico</td>
                <td className="px-4 py-3 align-top">Niet toegestaan in Europa</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Emotieherkenning op de werkplek</td>
                <td className="px-4 py-3 align-top">Onaanvaardbaar risico</td>
                <td className="px-4 py-3 align-top">Ingrijpend en privacygevoelig</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">ECG-classificatie</td>
                <td className="px-4 py-3 align-top">Hoog risico</td>
                <td className="px-4 py-3 align-top">Ondersteunt diagnostiek</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Detectie van longnoduli</td>
                <td className="px-4 py-3 align-top">Hoog risico</td>
                <td className="px-4 py-3 align-top">Ondersteunt diagnostiek</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Fractuurdetectie op röntgenfoto</td>
                <td className="px-4 py-3 align-top">Hoog risico</td>
                <td className="px-4 py-3 align-top">Ondersteunt diagnostiek</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Voorspellen van overgang van IC naar verpleegafdeling</td>
                <td className="px-4 py-3 align-top">Hoog risico</td>
                <td className="px-4 py-3 align-top">Heeft invloed op zorgbeslissingen</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Automatische intake voor radiotherapie</td>
                <td className="px-4 py-3 align-top">Hoog risico</td>
                <td className="px-4 py-3 align-top">Beïnvloedt therapieplanning</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Echocardiografische analyse</td>
                <td className="px-4 py-3 align-top">Hoog risico</td>
                <td className="px-4 py-3 align-top">Output is bedoeld voor de arts</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Detectie van longembolieën op CT</td>
                <td className="px-4 py-3 align-top">Hoog risico</td>
                <td className="px-4 py-3 align-top">Gebruik in diagnostiek</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Automatisch intekenen bij radiotherapie</td>
                <td className="px-4 py-3 align-top">Hoog risico</td>
                <td className="px-4 py-3 align-top">Beïnvloedt behandelplanning</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Reclasseringssysteem voor recidiverisico</td>
                <td className="px-4 py-3 align-top">Hoog risico</td>
                <td className="px-4 py-3 align-top">Foutieve beslissing kan schade geven</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Chatbot in zorg</td>
                <td className="px-4 py-3 align-top">Beperkt risico</td>
                <td className="px-4 py-3 align-top">Menselijke interactie, dus transparantie nodig</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Spellingcorrectie</td>
                <td className="px-4 py-3 align-top">Minimaal risico</td>
                <td className="px-4 py-3 align-top">Alleen eenvoudige ondersteuning</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">CoronaCheck-app</td>
                <td className="px-4 py-3 align-top">Buiten AI Act</td>
                <td className="px-4 py-3 align-top">De app rekent zelf niets uit, maar toont alleen eerder vastgestelde gegevens</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
