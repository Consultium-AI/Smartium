export default function Sect11KeuzeMethodeTabel2() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Keuze tussen hemodialyse en peritoneale dialyse</h2>
      <p>
        De keuze tussen beide methoden is vaak individueel en kan voor patiënten lastig zijn. De overleving is bij beide methoden ongeveer even goed, of beter gezegd: even slecht. Daarom zijn er andere factoren van belang.
      </p>
      <p className="font-medium text-slate-800 dark:text-slate-200">Tabel 2. Vergelijking tussen hemodialyse en peritoneale dialyse</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kenmerk</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Hemodialyse</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Peritoneale dialyse</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 font-medium">Membraan/filter</td>
              <td className="px-4 py-3">Kunstnier</td>
              <td className="px-4 py-3">Peritoneum</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 font-medium">Toegang</td>
              <td className="px-4 py-3">Centrale lijn of shunt</td>
              <td className="px-4 py-3">Peritoneale katheter</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 font-medium">Meestal waar?</td>
              <td className="px-4 py-3">Ziekenhuis, soms thuis</td>
              <td className="px-4 py-3">Vaak thuis</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 font-medium">Antistolling nodig?</td>
              <td className="px-4 py-3">Ja</td>
              <td className="px-4 py-3">Nee</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 font-medium">Voornaamste problemen</td>
              <td className="px-4 py-3">Infectie, trombose, stenose, bloeding door antistolling</td>
              <td className="px-4 py-3">Peritonitis, katheterproblemen, peritoneale sclerose</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 font-medium">Mate van zelfstandigheid</td>
              <td className="px-4 py-3">Lager, zeker in centrum</td>
              <td className="px-4 py-3">Hoger, patiënt moet zelf meer kunnen</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>Sociaal-economische factoren spelen ook mee, zoals:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>taal;</li>
        <li>behuizing;</li>
        <li>intelligentie;</li>
        <li>netwerk.</li>
      </ul>
      <p>
        Peritoneale dialyse vraagt namelijk meer zelfstandigheid dan hemodialyse in het centrum.
      </p>
      <p>Er kan ook een medische voorkeur zijn voor peritoneale dialyse, bijvoorbeeld bij:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>hartfalen;</li>
        <li>vasculaire toegangsproblemen;</li>
        <li>bloedingscomplicaties.</li>
      </ul>
      <p>Aan de andere kant zijn er medische contra-indicaties voor peritoneale dialyse, zoals:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>meerdere abdominale operaties met adhesies;</li>
        <li>herniatie of atrofie van de buikwand;</li>
        <li>ernstig COPD of longfunctiestoornis;</li>
        <li>ernstig overgewicht;</li>
        <li>inflammatoire darmziekte.</li>
      </ul>
      <p>
        De uiteindelijke keuze wordt gemaakt samen met de patiënt, zorgverleners en naasten.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandachtsvraag: Waarom is peritoneale dialyse niet voor iedereen geschikt?  Kort antwoord: Omdat eerdere buikoperaties, een zwakke buikwand, ernstige longziekte, ernstig overgewicht of inflammatoire darmziekte een probleem kunnen zijn.
        </p>
      </div>
    </div>
  )
}
