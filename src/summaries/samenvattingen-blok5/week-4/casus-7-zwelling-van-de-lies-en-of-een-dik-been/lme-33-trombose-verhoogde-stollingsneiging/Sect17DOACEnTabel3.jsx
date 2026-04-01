export default function Sect17DOACEnTabel3() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Directe orale anticoagulantia (DOAC)</h3>
      <p>DOAC’s werken door directe remming van een stollingsfactor:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>dabigatran remt trombine;</li>
        <li>rivaroxaban, apixaban en edoxaban remmen factor Xa.</li>
      </ul>
      <p>Het zijn tabletten en de werking is voorspelbaar.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Vergelijking van DOAC’s en VKA</h3>
      <div className="overflow-x-auto rounded-lg border border-slate-200 dark:border-slate-700">
        <table className="w-full text-left text-sm min-w-[720px]">
          <thead className="bg-slate-100 dark:bg-slate-800/80">
            <tr>
              <th className="p-2 font-semibold text-slate-900 dark:text-slate-100">Kenmerk</th>
              <th className="p-2 font-semibold text-slate-900 dark:text-slate-100">Dabigatran</th>
              <th className="p-2 font-semibold text-slate-900 dark:text-slate-100">Rivaroxaban</th>
              <th className="p-2 font-semibold text-slate-900 dark:text-slate-100">Apixaban</th>
              <th className="p-2 font-semibold text-slate-900 dark:text-slate-100">Edoxaban</th>
              <th className="p-2 font-semibold text-slate-900 dark:text-slate-100">VKA</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-700">
            <tr>
              <td className="p-2 align-top font-semibold text-slate-900 dark:text-slate-100">Aangrijpingspunt</td>
              <td className="p-2 align-top">Trombine</td>
              <td className="p-2 align-top">Factor Xa</td>
              <td className="p-2 align-top">Factor Xa</td>
              <td className="p-2 align-top">Factor Xa</td>
              <td className="p-2 align-top">Vitamine K-afhankelijke stolling</td>
            </tr>
            <tr>
              <td className="p-2 align-top font-semibold text-slate-900 dark:text-slate-100">Dosering</td>
              <td className="p-2">2dd</td>
              <td className="p-2">1dd</td>
              <td className="p-2">2dd</td>
              <td className="p-2">1dd</td>
              <td className="p-2">Variabel</td>
            </tr>
            <tr>
              <td className="p-2 align-top font-semibold text-slate-900 dark:text-slate-100">Bioavailability</td>
              <td className="p-2">6,5%</td>
              <td className="p-2">80%</td>
              <td className="p-2">66%</td>
              <td className="p-2">62%</td>
              <td className="p-2">-</td>
            </tr>
            <tr>
              <td className="p-2 align-top font-semibold text-slate-900 dark:text-slate-100">Belangrijke interactie</td>
              <td className="p-2 align-top">p-gp</td>
              <td className="p-2 align-top">CYP3A4, p-gp</td>
              <td className="p-2 align-top">CYP3A4</td>
              <td className="p-2 align-top">CYP3A4, p-gp</td>
              <td className="p-2 align-top">Veel interacties</td>
            </tr>
            <tr>
              <td className="p-2 align-top font-semibold text-slate-900 dark:text-slate-100">Halfwaardetijd</td>
              <td className="p-2 align-top">9–13 uur</td>
              <td className="p-2 align-top">7–11 uur</td>
              <td className="p-2 align-top">8–15 uur</td>
              <td className="p-2 align-top">10–14 uur</td>
              <td className="p-2 align-top">Fenprocoumon 150 uur, acenocoumarol 14 uur</td>
            </tr>
            <tr>
              <td className="p-2 align-top font-semibold text-slate-900 dark:text-slate-100">Renale klaring</td>
              <td className="p-2">80%</td>
              <td className="p-2">33%</td>
              <td className="p-2">25%</td>
              <td className="p-2">35%</td>
              <td className="p-2">-</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De grootste verschillen tussen de DOAC’s zitten in de renale klaring. De effectiviteit van VKA en DOAC’s is gelijk. DOAC’s geven echter minder bloedingen dan VKA’s. Er is van één middel binnen deze groep een antidotum beschikbaar.
      </p>
    </div>
  )
}
