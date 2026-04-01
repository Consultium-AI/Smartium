export default function Sect12MicrobiologischeDiagnostiek() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Microbiologische diagnostiek</h2>
      <p>
        Alleen op basis van klachten en beeldvorming kun je niet met zekerheid zeggen welke verwekker de pneumonie veroorzaakt. Daarom is microbiologische diagnostiek belangrijk, vooral omdat de uitslag invloed kan hebben op het antibioticabeleid.
      </p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 4. Belangrijke microbiologische onderzoeken</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Onderzoek</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Wat wordt onderzocht?</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Belangrijke kenmerken</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Sputumkweek</td>
                <td className="px-4 py-3 align-top">Sputum wordt op kweek gezet</td>
                <td className="px-4 py-3 align-top">Patiënt spuugt opgehoest sputum in een steriel potje</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Bloedkweek</td>
                <td className="px-4 py-3 align-top">Bloed wordt in kweekflessen gezet</td>
                <td className="px-4 py-3 align-top">Groeie van bacteriën in bloed kan de verwekker bevestigen</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Urine-pneumokokken-antigeentest</td>
                <td className="px-4 py-3 align-top">Antigeen van <em>Streptococcus pneumoniae</em> in urine</td>
                <td className="px-4 py-3 align-top">Handig omdat urine makkelijk te verkrijgen is; sensitiviteit en specificiteit variëren</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Urine-legionella-antigeentest</td>
                <td className="px-4 py-3 align-top">Antigeen van <em>Legionella</em> in urine</td>
                <td className="px-4 py-3 align-top">Belangrijke test bij ernstige CAP of bij risicofactoren voor legionella</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Bij een sputumkweek wordt sputum dat de patiënt ophoest in een steriel potje opgevangen en vervolgens op kweekmedia gezet. Bij een bloedkweek wordt bloed afgenomen in speciale flesjes die daarna worden geïncubeerd om bacteriegroei aan te tonen.
      </p>
      <p>
        De urine-antigeentesten zijn belangrijk omdat antigenen van bacteriën, zoals die van pneumokokken, via de nieren uitgescheiden kunnen worden. In de urine kan de concentratie dan hoger zijn dan in het bloed. Urine en bloed zijn bovendien makkelijk af te nemen.
      </p>
      <p>
        De pneumokokken urine-antigeentest wordt gebruikt bij patiënten met een ernstige invasieve pneumokokkeninfectie. De sensitiviteit ligt ongeveer tussen 65 en 80%, en de specificiteit tussen 97 en 100%. Bij mildere pneumonie ligt de sensitiviteit lager. Een belangrijk nadeel is dat pneumokokkenantigeen nog weken na een infectie in de urine aantoonbaar kan blijven. Bij jonge kinderen is de test niet geschikt, omdat dragerschap kan leiden tot fout-positieve uitslagen.
      </p>
      <p>
        De Legionella urine-antigeentest heeft een sensitiviteit van ongeveer 70% en een hoge specificiteit van ongeveer 95%. Legionella is moeilijk te kweken, waardoor deze urine-antigeentest in de praktijk een van de belangrijkste diagnostische testen is. De test wordt vooral gebruikt bij ernstige CAP of wanneer legionella waarschijnlijker is, bijvoorbeeld na recente reis, tijdens een legionella-uitbraak in een ziekenhuis, of bij therapiefalen onder een bèta-lactamantibioticum.
      </p>
      <p>
        Laboratoriumonderzoek kan de diagnose ondersteunen, vooral wanneer er tekenen van inflammatie in het bloed zijn, zoals leukocytose of een verhoogd CRP.
      </p>
    </div>
  )
}
