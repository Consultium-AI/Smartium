export default function Sect06LabEnBehandeling() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Laboratoriumonderzoek en behandeling</h2>
      <p>
        Als je bij braken aan hypokaliëmie denkt, wil je niet alleen weten hoe laag het kalium is, maar ook waarom het laag is. Daarom is het logisch om verschillende laboratoriumwaarden te bepalen. Kalium laat zien of er echt sprake is van hypokaliëmie. Chloride is belangrijk, omdat braken juist leidt tot verlies van HCl en chloride. Een bloedgas of bepaling van bicarbonaat laat zien of er metabole alkalose is. De nierfunctie is belangrijk, omdat een goed werkende nier een centrale rol speelt in het ontstaan van het kaliumverlies. Magnesium is extra relevant bij gebruik van protonpompremmers of bij hardnekkige hypokaliëmie.
      </p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 2. Praktische aanpak bij hypokaliëmie door braken</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Onderzoek</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Waarom?</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Waarom belangrijk voor het beleid?</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium align-top">Serumkalium</td>
                <td className="px-4 py-3 align-top">Bevestigt hypokaliëmie</td>
                <td className="px-4 py-3 align-top">Helpt de ernst inschatten</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium align-top">Chloride</td>
                <td className="px-4 py-3 align-top">Past bij verlies van HCl door braken</td>
                <td className="px-4 py-3 align-top">Geeft richting aan de verklaring</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium align-top">Bloedgas / bicarbonaat</td>
                <td className="px-4 py-3 align-top">Toont metabole alkalose</td>
                <td className="px-4 py-3 align-top">Laat zien dat de zuur-basestoornis aanwezig is</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium align-top">Nierfunctie</td>
                <td className="px-4 py-3 align-top">Geeft informatie over de renale reactie</td>
                <td className="px-4 py-3 align-top">Belangrijk voor de vorming van renaal kaliumverlies</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium align-top">Magnesium</td>
                <td className="px-4 py-3 align-top">Vooral relevant bij PPI-gebruik</td>
                <td className="px-4 py-3 align-top">Hypomagnesiëmie kan hypokaliëmie geven</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        De behandeling bestaat niet uit alleen kalium geven. Dat is een veelgemaakte denkfout. Zolang het braken doorgaat en de metabole alkalose blijft bestaan, blijft de nier kalium uitscheiden. De verliezen kunnen dan zo groot zijn dat je er met alleen kaliumsuppletie bijna niet tegenop kunt. Daarom moet je naast kalium ook de oorzaak van het braken aanpakken en de alkalose behandelen. Als er sprake is van hypomagnesiëmie, moet je dat ook corrigeren.
      </p>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandachtsvraag: Is alleen kalium geven genoeg?</p>
      <p className="mt-2">
        <span className="font-semibold">Mini-antwoord:</span>{' '}Nee, de oorzaak van het braken en de alkalose moeten ook worden aangepakt.
        </p>
      </div>
    </div>
  )
}
