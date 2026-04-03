export default function Sect04HuidafwijkingenEnVoetstand() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Huidafwijkingen en voetstand: signalen die je moet herkennen</h2>
      <p>Er zijn een aantal typische afwijkingen van de voet die passen bij het risico op een diabetisch ulcus. Denk aan:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>ulcus</li>
        <li>hallux valgus</li>
        <li>klauwteen</li>
        <li>hamertenen</li>
        <li>eeltvorming</li>
        <li>Charcot-voet / ingezakt voetgewricht</li>
        <li>droge huid</li>
        <li>kloven</li>
        <li>oedeem</li>
        <li>kalknagel / onychomycose</li>
      </ul>
      <p>
        Deze afwijkingen zijn belangrijk omdat ze vaak leiden tot verhoogde druk- en schuifkrachten. Juist op die plekken kan dan eeltvorming ontstaan. Onder eelt kan beschadiging optreden en uiteindelijk kan een ulcus ontstaan.
      </p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 2. Voorbeelden van voetafwijkingen en hun betekenis</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Afwijking</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Betekenis in de diabetische voet</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Ulcus</td>
                <td className="px-4 py-3">Open wond, vaak op een drukpunt</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Hallux valgus</td>
                <td className="px-4 py-3">Standafwijking van de grote teen, kan drukplekken geven</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Klauwteen</td>
                <td className="px-4 py-3">Teenstand waarbij druk op de tenen toeneemt</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Hamertenen</td>
                <td className="px-4 py-3">Standafwijking met verhoogde druk op tenen</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Eeltvorming</td>
                <td className="px-4 py-3">Voorbode van druk en mogelijke wondvorming</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Charcot-voet / ingezakt voetgewricht</td>
                <td className="px-4 py-3">Ernstige standsafwijking met grote drukpunten</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Droge huid / kloven</td>
                <td className="px-4 py-3">Kwetsbare huid, meer kans op beschadiging en infectie</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Oedeem</td>
                <td className="px-4 py-3">Zwelling, kan onderzoek en doorbloeding beïnvloeden</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Kalknagel / onychomycose</td>
                <td className="px-4 py-3">Nagelafwijking die bij voetproblemen past</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandacht-vraag: Waarom is eelt bij een diabetische voet belangrijk?</p>
      <p className="mt-2">
        <span className="font-semibold">Mini-antwoord:</span>{' '}Eelt is een voorbode van een drukplek en kan voorafgaan aan een ulcus.
        </p>
      </div>
    </div>
  )
}
