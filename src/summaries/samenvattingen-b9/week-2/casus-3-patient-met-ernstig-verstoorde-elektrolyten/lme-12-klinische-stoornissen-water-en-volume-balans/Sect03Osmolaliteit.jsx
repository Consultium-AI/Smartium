export default function Sect03Osmolaliteit() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Osmolaliteit, effectieve osmolaliteit en toniciteit</h2>
      <p>
        Osmolaliteit staat centraal in de regulatie van de waterbalans. Het betekent: het aantal opgeloste deeltjes in een vloeistof, uitgedrukt in mmol/kg water. Die opgeloste deeltjes kunnen water aantrekken. Dat is van belang, omdat het celmembraan een semipermeabel membraan is: water kan er wel doorheen, opgeloste deeltjes niet.
      </p>
      <p>
        De normale plasma-osmolaliteit ligt rond 285–290 mosmol/kg water. In sommige berekeningen wordt ook kalium meegenomen, maar de bijdrage daarvan is klein.
      </p>
      <p>De osmolaliteit kun je vereenvoudigd benaderen met:</p>
      <p className="font-mono text-slate-800 dark:text-slate-200 bg-slate-100 dark:bg-slate-800/50 px-3 py-2 rounded-lg">
        2 × natrium + glucose + ureum (+ alcohol)
      </p>
      <p>Hierbij geldt:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>natrium levert veruit de grootste bijdrage;</li>
        <li>glucose draagt ook duidelijk bij;</li>
        <li>ureum draagt mee aan de osmolaliteit;</li>
        <li>alcoholen kunnen soms ook meespelen;</li>
        <li>andere stoffen, zoals albumine, hemoglobine en creatinine, dragen in de praktijk nauwelijks bij.</li>
      </ul>
      <p>Welke deeltjes doen mee?</p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 1. Deeltjes die wel of nauwelijks bijdragen aan de osmolaliteit</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Deeltje</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Bijdrage aan osmolaliteit</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Natrium en andere elektrolyten</td>
                <td className="px-4 py-3">Ja, belangrijkste bijdrage</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Glucose</td>
                <td className="px-4 py-3">Ja</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Ureum</td>
                <td className="px-4 py-3">Ja</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Alcoholen</td>
                <td className="px-4 py-3">Soms</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Albumine</td>
                <td className="px-4 py-3">Nauwelijks</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Hemoglobine</td>
                <td className="px-4 py-3">Nauwelijks</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Creatinine</td>
                <td className="px-4 py-3">Nauwelijks</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Waarom is ureum een bijzonder geval? Ureum kan wel door het celmembraan heen, omdat het klein is. Daardoor trekt het niet hetzelfde water aan als stoffen die niet door het membraan kunnen. Daarom is ureum wel onderdeel van de osmolaliteit, maar minder belangrijk voor de waterverplaatsing. Voor dat laatste gebruik je liever de term effectieve osmolaliteit of toniciteit.
      </p>
      <p>
        Toniciteit is dus in feite hetzelfde idee als effectieve osmolaliteit: het gaat om de deeltjes die echt water verschuiven tussen de compartimenten.
      </p>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandachtvraag: Waarom telt ureum minder mee voor de waterverplaatsing?</p>
      <p className="mt-2">
        <span className="font-semibold">Mini-antwoord:</span>{' '}Omdat ureum door het celmembraan heen kan en daardoor minder een blijvend osmotisch effect geeft.
        </p>
      </div>
    </div>
  )
}
