export default function Sect11BehandelingCOIntoxicatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Behandeling van CO-intoxicatie</h2>
      <p>
        De behandeling is gericht op het zo snel mogelijk verdringen van CO van hemoglobine en het herstellen van
        zuurstoftoevoer naar de weefsels.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Behandelopties bij CO-intoxicatie</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Open lucht / uit de bron halen</td>
              <td className="px-4 py-3 align-top">eerste stap bij vermoedelijke blootstelling</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">100% zuurstof via gezichtsmasker, 10–15 L/min</td>
              <td className="px-4 py-3 align-top">versnelt verdringing van CO</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Hyperbare zuurstof</td>
              <td className="px-4 py-3 align-top">bij ernstige intoxicatie en in specifieke situaties, zoals zwangerschap</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        In gewone lucht, met 21% O2 en 1 atmosfeer, is de halfwaardetijd van CO-Hb ongeveer 250–320 minuten. Met 10–15
        L/min 100% O2 via een gezichtsmasker wordt dat 75–90 minuten. Met hyperbare zuurstof daalt de halfwaardetijd naar
        19–23 minuten.
      </p>
      <p>
        Bij inademing van 100% O2 op 3 atmosfeer is de hoeveelheid opgelost zuurstof in het bloed ongeveer 4,5 mL per 100
        mL bloed. Dat is ongeveer 15 keer hoger dan bij inademing van lucht met 21% O2 bij 1 atmosfeer. Alleen al die
        opgeloste zuurstof kan ongeveer voldoen aan de zuurstofbehoefte in rust.
      </p>
    </div>
  )
}
