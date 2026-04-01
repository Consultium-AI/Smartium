export default function Sect08Behandeling() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Behandeling</h2>
      <p>
        De behandeling hangt af van het type orgaanschade. In de meeste gevallen hoeft de bloeddruk eerst slechts beperkt verlaagd te worden. Te snelle of te grote bloeddrukdaling kan namelijk de orgaanschade juist verergeren, doordat in gebieden met gestoorde autoregulatie ischemie ontstaat. De genoemde bloeddrukdoelen zijn daarom geen absolute minima, maar de maximaal gewenste daling binnen een bepaalde tijd.
      </p>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm font-semibold mb-2">Aandacht-vraag</p>
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Waarom moet de bloeddruk niet meteen naar een normale waarde?  Omdat een te snelle daling de doorbloeding van organen kan verslechteren. Bij chronische hypertensie is de autoregulatie verschoven, waardoor een plots lagere druk ischemie kan geven.
        </p>
      </div>

      <p>
        Bij een hypertensief spoedgeval start behandeling direct. Zonder acute orgaanschade kan vaak iets langer worden gewacht. De voorkeur gaat in de acute situatie uit naar intraveneuze behandeling in plaats van een tablet.
      </p>
      <p>Naast medicatie zijn ook niet-medicamenteuze maatregelen belangrijk:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>pijn behandelen;</li>
        <li>zo nodig delirium behandelen;</li>
        <li>zorgen voor een comfortabele, rustige omgeving.</li>
      </ul>
      <p>
        Therapie-ontrouw komt vaak voor, ongeveer bij 1/3 van de patiënten die zich op de spoed presenteren. Bespreek dit met de patiënt en denk aan het meten van spiegels van antihypertensiva in het bloed wanneer dat relevant is.
      </p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 3. Hoofdlijnen van de behandeling per klinisch beeld</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Klinische presentatie</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Tijd en streefwaarde</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Eerste keus</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Alternatief</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Hypertensief spoedgeval met retinopathie</td>
                <td className="px-4 py-3 align-top">Enkele uren, MAP -25%</td>
                <td className="px-4 py-3 align-top">Labetalol</td>
                <td className="px-4 py-3 align-top">Nicardipine, urapidil, nitroprusside</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Hypertensieve encefalopathie</td>
                <td className="px-4 py-3 align-top">Onmiddellijk, MAP -25%</td>
                <td className="px-4 py-3 align-top">Labetalol, nicardipine</td>
                <td className="px-4 py-3 align-top">Nitroprusside</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Acuut herseninfarct, BD ≥220/120 mmHg en geen indicatie trombolyse</td>
                <td className="px-4 py-3 align-top">1 uur, MAP -15%</td>
                <td className="px-4 py-3 align-top">Labetalol, nicardipine</td>
                <td className="px-4 py-3 align-top">Nitroprusside</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Acuut herseninfarct met indicatie trombolyse en BD &gt;185/110 mmHg, indien bloeddrukverlaging gewenst</td>
                <td className="px-4 py-3 align-top">1 uur, MAP -15%</td>
                <td className="px-4 py-3 align-top">Labetalol, nicardipine</td>
                <td className="px-4 py-3 align-top">Nitroprusside</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Acute hersenbloeding &lt;6 uur na onset en SBD ≥150 mmHg</td>
                <td className="px-4 py-3 align-top">Onmiddellijk, SBD 140 mmHg</td>
                <td className="px-4 py-3 align-top">Nicardipine, labetalol</td>
                <td className="px-4 py-3 align-top">—</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Acute hersenbloeding &gt;6 uur na onset en SBD ≥180 mmHg</td>
                <td className="px-4 py-3 align-top">Binnen enkele uren, SBD 140 mmHg</td>
                <td className="px-4 py-3 align-top">Nicardipine, labetalol</td>
                <td className="px-4 py-3 align-top">—</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Acuut coronair syndroom</td>
                <td className="px-4 py-3 align-top">Onmiddellijk, SBD &lt;140 mmHg</td>
                <td className="px-4 py-3 align-top">Nitroglycerine in combinatie met orale bètablokkade</td>
                <td className="px-4 py-3 align-top">—</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Acuut hypertensief hartfalen met longoedeem</td>
                <td className="px-4 py-3 align-top">Onmiddellijk, MAP -25% en SBD &lt;140 mmHg als dat eerder bereikt wordt</td>
                <td className="px-4 py-3 align-top">Nitroglycerine en niet-invasieve ventilatie</td>
                <td className="px-4 py-3 align-top">Nitroprusside</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Acute aortadissectie/-ruptuur</td>
                <td className="px-4 py-3 align-top">Onmiddellijk, SBD 100-110 mmHg en hartslag 60/min</td>
                <td className="px-4 py-3 align-top">Esmolol of metoprolol, en clevidipine of nitroprusside</td>
                <td className="px-4 py-3 align-top">Labetalol, esmolol of metoprolol en nicardipine</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Bij de behandeling moet ook worden gedacht aan de onderliggende oorzaak en aan de context van de patiënt. De klinische urgentie wordt dus bepaald door de combinatie van bloeddruk, klachten en tekenen van eindorgaanschade.
      </p>
    </div>
  )
}
