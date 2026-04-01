export default function Sect13ErnstigeReactieTabel3() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hoe herken je een ernstige reactie?</h2>
      <p>
        Niet elke huidreactie tijdens medicatiegebruik is een allergie. Toch zijn er een aantal alarmsymptomen die je
        serieus moet nemen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 3. Alarmsymptomen en mogelijke ernstige diagnosen
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Alarmsymptoom / patroon
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Denk aan
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Plotseling begin, meerdere orgaansystemen, bloeddrukdaling</td>
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Anafylactische shock</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Inspiratoire piepen, kuchen, heesheid, slijmvliesklachten</td>
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Larynxoedeem</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Pijnlijke huid, atypische schietschijflaesies, mucosale erosies</td>
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">SJS/TEN</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">
                Koorts {'>'} 38,5 °C, huidbetrokkenheid {'>'} 50%, lymfadenopathie, eosinofilie, transaminasen ↑,
                proteïnurie
              </td>
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">HSS / DRESS / DHIS</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Papels, infiltraten, necrose, purpura, hypocomplementemie</td>
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Vasculitis</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Een milde of matige vertraagde reactie geeft vaak een gegeneraliseerd maculopapuleus exantheem, meestal tussen 6
        uur en 8 weken na start van het medicijn, vaak tussen 1 en 10 dagen. De patiënt is dan meestal niet ziek en
        heeft geen alarmsymptomen.
      </p>
      <p>
        Een ernstige vertraagde reactie gaat juist gepaard met huiduitslag plus alarmsymptomen. Dan moet je denken aan
        ernstige cutane medicatiereacties zoals DRESS, AGEP, SJS of TEN.
      </p>
    </div>
  )
}
