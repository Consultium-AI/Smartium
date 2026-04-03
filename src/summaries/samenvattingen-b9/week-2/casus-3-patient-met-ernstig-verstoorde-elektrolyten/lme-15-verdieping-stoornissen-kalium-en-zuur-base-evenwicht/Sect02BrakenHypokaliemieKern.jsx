export default function Sect02BrakenHypokaliemieKern() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Braken en hypokaliëmie: de kern</h2>
      <p>
        Braken lijkt op het eerste gezicht vooral een verlies van maaginhoud, maar de belangrijkste verklaring voor de hypokaliëmie zit niet in het directe kaliumverlies uit het braaksel. Hypokaliëmie betekent een te laag kaliumgehalte in het bloed. Bij braken verliest de patiënt vooral maagsap met zoutzuur (HCl) en chloride. Daardoor ontstaat metabole alkalose: het lichaam wordt basischer doordat er zuur verloren gaat. Tegelijk gaat er ook vocht en natrium verloren. Juist die combinatie zet een keten van reacties in gang waardoor de nieren uiteindelijk extra kalium gaan uitscheiden.
      </p>
      <p>
        Het is goed om te onthouden dat maagsap maar weinig kalium bevat, ongeveer 5-15 mmol/L, zelfs minder dan speeksel (15-40 mmol/L). Een hypokaliëmie ontstaat meestal pas bij een kaliumtekort van ongeveer 100-200 mmol. Alleen het directe verlies via het braaksel kan dat dus niet goed verklaren. Als direct kaliumverlies de enige oorzaak zou zijn, zou iemand enorm veel moeten hebben gebraakt. Wat braken vooral veroorzaakt, is dus niet een groot kaliumverlies uit de maag zelf, maar een reactie van de nier op het verlies van zuur en vocht.
      </p>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandachtsvraag: Verliest een patiënt met braken vooral kalium via het braaksel?</p>
      <p className="mt-2">
        <span className="font-semibold">Mini-antwoord:</span>{' '}Nee, het grootste probleem is de reactie van de nieren; direct kaliumverlies uit maagsap is klein.
        </p>
      </div>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 1. Van braken naar renaal kaliumverlies</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Stap</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Wat gebeurt er?</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Gevolg</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium align-top">Braken</td>
                <td className="px-4 py-3 align-top">Verlies van maagsap met weinig kalium, maar veel HCl en chloride</td>
                <td className="px-4 py-3 align-top">Zuur- en chlorideverlies</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium align-top">Volumeverlies</td>
                <td className="px-4 py-3 align-top">Vocht- en natriumverlies</td>
                <td className="px-4 py-3 align-top">RAAS geactiveerd, aldosteron stijgt</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium align-top">Nierreactie</td>
                <td className="px-4 py-3 align-top">De nier probeert bicarbonaat uit te scheiden en chloride vast te houden</td>
                <td className="px-4 py-3 align-top">Metabole alkalose wordt gecorrigeerd, maar kaliumverlies neemt toe</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium align-top">Verzamelbuis</td>
                <td className="px-4 py-3 align-top">In het lumen blijft negatieve lading bestaan</td>
                <td className="px-4 py-3 align-top">Kalium en H+ worden makkelijker uitgescheiden</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium align-top">Eindresultaat</td>
                <td className="px-4 py-3 align-top">Aanhoudende renale uitscheiding van kalium</td>
                <td className="px-4 py-3 align-top">Hypokaliëmie</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Onthoud vooral deze keten: braken → HCl-/chlorideverlies → metabole alkalose → RAAS/aldosteron → renaal kaliumverlies.
      </p>
    </div>
  )
}
