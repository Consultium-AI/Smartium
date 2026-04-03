export default function Sect09MedicatieTabel3() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hoe bereik je de behandeldoelen?</h2>
      <p>
        De basis van de behandeling is een gezonde leefstijl. Zonder een goede leefstijl werken medicamenteuze behandelingen minder goed. Een voorbeeld is zoutbeperking: als iemand heel zout blijft eten, werkt een RAAS-remmer minder goed.
      </p>
      <p>
        Je kunt het zien als het bouwen van een huis: zonder fundament kun je geen verdieping bouwen, maar alleen een fundament is nog geen bewoonbaar huis.
      </p>
      <p>Daarna volgt medicamenteuze behandeling. De kern daarvan bestaat uit:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>een zo hoog mogelijke, maar verdraagbare RAAS-remming;</li>
        <li>een SGLT2-remmer;</li>
        <li>bij iedereen van 50 jaar en ouder een statine.</li>
      </ul>
      <p>Voorbeelden van deze medicamenteuze kernbehandeling zijn:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>lisinopril als RAAS-remmer;</li>
        <li>dapagliflozine als SGLT2-remmer;</li>
        <li>atorvastatine als statine.</li>
      </ul>
      <p className="font-medium text-slate-800 dark:text-slate-200">Tabel 3. Kern van de medicamenteuze behandeling</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Middel</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Voorbeeld</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Doel</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 font-medium">RAAS-remmer</td>
              <td className="px-4 py-3">Lisinopril</td>
              <td className="px-4 py-3">Remt progressie en beschermt hart en nieren</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 font-medium">SGLT2-remmer</td>
              <td className="px-4 py-3">Dapagliflozine</td>
              <td className="px-4 py-3">Ondersteunt bescherming van nier en hart</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 font-medium">Statine</td>
              <td className="px-4 py-3">Atorvastatine</td>
              <td className="px-4 py-3">Behandeling van cardiovasculair risico</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Het is bedoeld om deze middelen zo snel mogelijk goed in te zetten, omdat de combinatie een grote invloed heeft op de belangrijkste bedreigingen bij chronische nierschade: hart- en vaatziekten, nierfalen en sterfte. De behandeling werd lang vaak stap voor stap gestart, maar er wordt steeds meer gedacht aan zo snel mogelijk en waar mogelijk gelijktijdig starten om het risico op complicaties snel te verlagen.
      </p>
      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandachtsvraag: Wat is de basis van de behandeling?</p>
      <p className="mt-2">
        <span className="font-semibold">Mini-antwoord:</span>{' '}Eerst leefstijl, daarna de kernmedicatie met RAAS-remming, SGLT2-remming en bij 50+ een statine.
        </p>
      </div>
    </div>
  )
}
