export default function Sect09DiagnostiekHemofilieATabel2() {
  return (
    <div className="space-y-8 text-slate-700 dark:text-slate-300 leading-relaxed">
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Diagnostiek van verworven hemofilie A</h2>
        <p>Aan verworven hemofilie A moet je denken bij:</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>een bloedende patiënt, vooral een oudere of postpartum vrouw</li>
          <li>recent ontstane bloedingsneiging</li>
          <li>een geïsoleerd verlengde aPTT</li>
          <li>een normale PT</li>
        </ul>
        <p>
          Ook bij een niet-bloedende patiënt zonder antistolling met een geïsoleerd verlengde aPTT kan de diagnose aan de
          orde zijn, vooral als de mengproef past bij een remmer en lupusdiagnostiek negatief is.
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">De mengproef</h3>
        <p>De mengproef is hier belangrijk. Daarbij kijk je of de aPTT corrigeert na mengen met normaal plasma.</p>
        <ul className="list-disc pl-6 space-y-2">
          <li>Wel correctie: denk aan factordeficiëntie</li>
          <li>Geen of zwakke correctie: denk aan een remmer of lupus anticoagulans</li>
        </ul>
        <p>
          Daarna worden factor VIII en antistoffen gemeten. De remmertiter wordt uitgedrukt in Bethesda units (BU).
        </p>
      </div>

      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Tabel 2. Diagnostische rode vlaggen voor verworven hemofilie A
        </h3>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead>
              <tr className="border-b border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/80">
                <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Bevinding</th>
                <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Past bij verworven hemofilie A</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr>
                <td className="p-3 align-top">Nieuwe bloedingsneiging</td>
                <td className="p-3 align-top">Ja</td>
              </tr>
              <tr>
                <td className="p-3 align-top">Positieve familieanamnese</td>
                <td className="p-3 align-top">Nee</td>
              </tr>
              <tr>
                <td className="p-3 align-top">PT</td>
                <td className="p-3 align-top">Normaal</td>
              </tr>
              <tr>
                <td className="p-3 align-top">aPTT</td>
                <td className="p-3 align-top">Verlengd</td>
              </tr>
              <tr>
                <td className="p-3 align-top">Mengproef</td>
                <td className="p-3 align-top">Past bij remmer</td>
              </tr>
              <tr>
                <td className="p-3 align-top">FVIII</td>
                <td className="p-3 align-top">Verlaagd</td>
              </tr>
              <tr>
                <td className="p-3 align-top">Bethesda-titer</td>
                <td className="p-3 align-top">Aanwezig</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-xl border border-amber-200 dark:border-amber-700/50 bg-amber-50/80 dark:bg-amber-950/40 p-5 space-y-2">
        <p className="font-semibold text-amber-900 dark:text-amber-200">
          Aandacht-vraagje: Welke combinatie moet direct aan verworven hemofilie A doen denken?
        </p>
        <p className="text-amber-950 dark:text-amber-100">
          Mini-antwoord: Nieuwe bloedingsneiging met normale PT en geïsoleerd verlengde aPTT.
        </p>
      </div>
    </div>
  )
}
