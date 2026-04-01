export default function Sect07FollowUpEnBeleid() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Waarom follow-up zo belangrijk is</h2>
      <p>
        Na vaststelling van een AAA, vaak als toevalsbevinding, worden diameter en lokalisatie bepaald. Daarnaast wordt gekeken naar klachten, comorbiditeit en operatief risico. Bij kleine, asymptomatische aneurysmata ligt de nadruk op actieve surveillance met periodieke beeldvorming.
      </p>
      <p>Follow-up is nodig om:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>de aneurysmagroei te bewaken;</li>
        <li>tijdig de behandelingsindicatie te bepalen;</li>
        <li>het cardiovasculaire risicomanagement te optimaliseren.</li>
      </ul>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 3. Follow-up en beleid bij AAA</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Maximale AAA-diameter</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Beleid</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Follow-up interval</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Toelichting</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">&lt; 3,0 cm</td>
                <td className="px-4 py-3">Geen AAA</td>
                <td className="px-4 py-3">Geen</td>
                <td className="px-4 py-3">Normale aorta</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">3,0–3,9 cm</td>
                <td className="px-4 py-3">Conservatief</td>
                <td className="px-4 py-3">Echo elke 3 jaar</td>
                <td className="px-4 py-3">Laag ruptuurrisico</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">4,0–4,9 cm</td>
                <td className="px-4 py-3">Conservatief</td>
                <td className="px-4 py-3">Echo jaarlijks</td>
                <td className="px-4 py-3">Toename ruptuurrisico</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">5,0–5,4 cm</td>
                <td className="px-4 py-3">Intensieve follow-up</td>
                <td className="px-4 py-3">Echo of CT elke 3–6 maanden</td>
                <td className="px-4 py-3">Voorbereiding op interventie</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">≥ 5,5 cm (mannen)</td>
                <td className="px-4 py-3">Interventie aanbevolen</td>
                <td className="px-4 py-3">—</td>
                <td className="px-4 py-3">Electieve EVAR of open chirurgie</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">≥ 5,0 cm (vrouwen)</td>
                <td className="px-4 py-3">Interventie aanbevolen</td>
                <td className="px-4 py-3">—</td>
                <td className="px-4 py-3">Vrouwen hebben hoger ruptuurrisico</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Snelle groei</td>
                <td className="px-4 py-3">Interventie</td>
                <td className="px-4 py-3">—</td>
                <td className="px-4 py-3">Bijvoorbeeld &gt;10 mm/jaar of &gt;5 mm/6 maanden</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Symptomatisch AAA</td>
                <td className="px-4 py-3">Interventie</td>
                <td className="px-4 py-3">—</td>
                <td className="px-4 py-3">Pijn, drukklachten</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Geruptureerd AAA</td>
                <td className="px-4 py-3">Spoedinterventie</td>
                <td className="px-4 py-3">—</td>
                <td className="px-4 py-3">EVAR of open, afhankelijk van de situatie</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>
        De echografie is de standaard surveillancetechniek. CT/CTA wordt gebruikt bij twijfel of voor therapeutische planning.
      </p>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandachtsvraag: Wanneer moet je extra alert zijn, ook als de diameter nog niet heel groot is?  Mini-antwoord: Bij snelle groei en bij klachten, omdat dat een aanwijzing kan zijn voor dreigende ruptuur.
        </p>
      </div>
    </div>
  )
}
