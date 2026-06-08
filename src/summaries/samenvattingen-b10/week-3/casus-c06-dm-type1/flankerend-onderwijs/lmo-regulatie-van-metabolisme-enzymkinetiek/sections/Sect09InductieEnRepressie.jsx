export default function Sect09InductieEnRepressie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Inductie en repressie</h3>
      <p>
        De langzaamste vorm van regulatie is <strong className="text-slate-900 dark:text-slate-100">inductie of repressie</strong>. Hierbij verandert de hoeveelheid enzym zelf. Als de transcriptie van het gen voor een enzym wordt gestimuleerd, komt er meer enzym beschikbaar en kan de reactie vaker tegelijk plaatsvinden. Daardoor neemt de totale omzetting van substraat naar product toe.
      </p>
      <p>
        Deze regulatie gebeurt onder invloed van hormonen zoals <strong className="text-slate-900 dark:text-slate-100">insuline, glucagon en cortisol</strong>, maar ook onder invloed van cellulaire boodschappers zoals <strong className="text-slate-900 dark:text-slate-100">AMP</strong>. Het effect duurt uren tot dagen voordat het volledig zichtbaar is.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Overzicht van regulatiemechanismen</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Mechanisme</th>
              <th className="px-4 py-3 font-semibold">Wat verandert er?</th>
              <th className="px-4 py-3 font-semibold">Snelheid</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Massawerking</td>
              <td className="px-4 py-3 align-top">substraat- en productverhouding</td>
              <td className="px-4 py-3 align-top">seconden tot minuten</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Allostere regulatie</td>
              <td className="px-4 py-3 align-top">enzymactiviteit via activator/remmer</td>
              <td className="px-4 py-3 align-top">seconden tot minuten</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Covalente modificatie</td>
              <td className="px-4 py-3 align-top">enzym wordt ge(de)fosforyleerd</td>
              <td className="px-4 py-3 align-top">minuten</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Inductie/repressie</td>
              <td className="px-4 py-3 align-top">hoeveelheid enzym</td>
              <td className="px-4 py-3 align-top">uren tot dagen</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
