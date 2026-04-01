export default function Sect10Wachtlijsten() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Wachtlijsten en verdelingsvraagstukken</h2>
      <p>
        Omdat donororganen schaars zijn, ontstaat een ander groot ethisch probleem: wie krijgt het orgaan? Daarvoor bestaan wachtlijsten en toewijzingscriteria.
      </p>
      <p>
        De kern van het verdelingsprobleem is rechtvaardigheid. Je moet schaarse medische goederen eerlijk verdelen. Daarbij bestaan verschillende principes.
      </p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 2. Belangrijke toewijzingsprincipes bij donororganen</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Principe</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Betekenis</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Voorbeeld</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">First-come, first-served</td>
                <td className="px-4 py-3">Wie het eerst komt, wie het eerst maalt</td>
                <td className="px-4 py-3">Wachttijd speelt mee</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Sickest first</td>
                <td className="px-4 py-3">De ziekste patiënt krijgt voorrang</td>
                <td className="px-4 py-3">Ernst van de ziekte telt zwaar mee</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Prognosis</td>
                <td className="px-4 py-3">De patiënt die waarschijnlijk het meeste voordeel heeft, krijgt voorrang</td>
                <td className="px-4 py-3">Goede match tussen orgaan en ontvanger</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>In Nederland worden onder meer de volgende criteria genoemd:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>ernst van de ziekte van de ontvanger;</li>
        <li>wachttijd;</li>
        <li>match tussen orgaan en beoogde ontvanger.</li>
      </ul>
      <p>
        Die match gaat bijvoorbeeld over bloedgroep, formaat en weefseltype. Dat is belangrijk, omdat een orgaan anders mogelijk niet goed functioneert of zelfs ongeschikt is. Soms wordt de match ook verbonden aan de prognose: hoe groot is de kans dat het transplantaat goed werkt en hoe lang het meegaat?
      </p>
      <p>
        Belangrijk is dat wachtlijstsystemen niet puur een kwestie van “wie het eerst komt, het eerst maalt” zijn. Wachttijd kan een rol spelen, maar is meestal slechts één van meerdere factoren. Ziekte-ernst en verwachte opbrengst wegen eveneens mee.
      </p>
    </div>
  )
}
