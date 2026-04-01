export default function Sect14PneumonieVerschillendeSettings() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Pneumonie in verschillende settings</h2>
      <p>
        Welke verwekker waarschijnlijk is, hangt niet alleen af van het ziektebeeld, maar ook van waar en hoe de pneumonie is opgelopen.
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>CAP (community-acquired pneumonia): ontstaan buiten het ziekenhuis</li>
        <li>HAP (hospital-acquired pneumonia): ontstaan tijdens ziekenhuisopname</li>
        <li>VAP (ventilator-associated pneumonia): ontstaan bij beademing op de intensive care</li>
        <li>Aspiratiepneumonie: na verslikken; vaak anaerobe verwekkers uit mond- en keelholte</li>
      </ul>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 4. Verdeling van verwekkers bij CAP naar setting</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Verwekker</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Buiten ziekenhuis</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Ziekenhuis</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Intensive care</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3"><em>S. pneumoniae</em></td>
                <td className="px-4 py-3">1–6%</td>
                <td className="px-4 py-3">12–19%</td>
                <td className="px-4 py-3">18%</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3"><em>H. influenzae</em></td>
                <td className="px-4 py-3">1–9%</td>
                <td className="px-4 py-3">4–9%</td>
                <td className="px-4 py-3">8%</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3"><em>Legionella</em> spp.</td>
                <td className="px-4 py-3">0–1%</td>
                <td className="px-4 py-3">0–7%</td>
                <td className="px-4 py-3">1%</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3"><em>S. aureus</em></td>
                <td className="px-4 py-3">0%</td>
                <td className="px-4 py-3">1–4%</td>
                <td className="px-4 py-3">10%</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3"><em>M. catarrhalis</em></td>
                <td className="px-4 py-3">0%</td>
                <td className="px-4 py-3">0–1%</td>
                <td className="px-4 py-3">3%</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3">Enterobacterales</td>
                <td className="px-4 py-3">0%</td>
                <td className="px-4 py-3">1–3%</td>
                <td className="px-4 py-3">12%</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3"><em>Pseudomonas aeruginosa</em></td>
                <td className="px-4 py-3">0%</td>
                <td className="px-4 py-3">0–2%</td>
                <td className="px-4 py-3">6%</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3"><em>M. pneumoniae</em></td>
                <td className="px-4 py-3">1–9%</td>
                <td className="px-4 py-3">1–3%</td>
                <td className="px-4 py-3">0%</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3"><em>Chlamydophila</em> spp.</td>
                <td className="px-4 py-3">1–2%</td>
                <td className="px-4 py-3">0–2%</td>
                <td className="px-4 py-3">0%</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3">Viraal</td>
                <td className="px-4 py-3">37–41%</td>
                <td className="px-4 py-3">2–32%</td>
                <td className="px-4 py-3">11%</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3">Geen pathogeen geïdentificeerd</td>
                <td className="px-4 py-3">37–54%</td>
                <td className="px-4 py-3">48–72%</td>
                <td className="px-4 py-3">26%</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        Belangrijk om te onthouden: dezelfde klachten, zoals koorts, hoesten en een afwijkende X-thorax, kunnen dus toch door heel verschillende micro-organismen veroorzaakt worden, afhankelijk van de context.
      </p>
    </div>
  )
}
