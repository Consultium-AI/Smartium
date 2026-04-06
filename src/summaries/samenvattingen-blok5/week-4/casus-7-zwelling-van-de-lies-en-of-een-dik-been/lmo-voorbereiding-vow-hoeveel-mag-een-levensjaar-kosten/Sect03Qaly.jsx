export default function Sect03Qaly() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Het meten van gezondheidswinst: de QALY</h2>
      <p>
        Om behandelingen goed met elkaar te vergelijken, heb je een algemene maat nodig voor gezondheidswinst. In deze module
        is dat de QALY, oftewel de quality-adjusted life year. Een QALY combineert twee dingen:
      </p>
      <ul className="list-disc pl-5 space-y-2">
        <li>levensduur</li>
        <li>kwaliteit van leven tijdens die levensduur</li>
      </ul>
      <p>De kwaliteit van leven wordt uitgedrukt in een utiliteit. Dat is een getal dat meestal loopt van 0 tot 1:</p>
      <ul className="list-disc pl-5 space-y-2">
        <li>1 betekent perfecte gezondheid</li>
        <li>0 betekent overlijden</li>
      </ul>
      <p>
        Soms kan een gezondheidstoestand zelfs lager dan 0 scoren. Dat betekent dat die toestand als slechter dan de dood
        wordt ervaren.
      </p>
      <p>De berekening is eenvoudig:</p>
      <p className="font-medium text-slate-900 dark:text-slate-100">QALY = aantal levensjaren × utiliteit</p>
      <p>
        Voorbeeld: iemand leeft nog 5 jaar met een utiliteit van 0,8. Dan is de totale gezondheidswinst: 5 × 0,8 = 4 QALY.
      </p>
      <p>
        Als een behandeling de utiliteit verhoogt van 0,8 naar 0,9 gedurende diezelfde 5 jaar, stijgt de totale winst naar
        4,5 QALY. De behandeling levert dan dus 0,5 extra QALY op.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Voorbeelden van utiliteitswaarden</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600/80">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 bg-slate-50 dark:bg-slate-800/70">
              <th className="px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">Utiliteit</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">Betekenis</th>
              <th className="px-3 py-2 text-left font-semibold text-slate-900 dark:text-slate-100">Voorbeeld</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600/80">
            <tr>
              <td className="px-3 py-2 align-top">&lt; 0</td>
              <td className="px-3 py-2 align-top">toestand slechter dan de dood</td>
              <td className="px-3 py-2 align-top">ondraaglijk, onbehandelbaar lijden</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">0</td>
              <td className="px-3 py-2 align-top">overlijden of toestand gelijkwaardig aan overlijden</td>
              <td className="px-3 py-2 align-top">zeer gevorderde dementie</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">0,25</td>
              <td className="px-3 py-2 align-top">zeer ernstige beperking, sterk afhankelijk</td>
              <td className="px-3 py-2 align-top">cachexie, vergevorderde ALS</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">0,50</td>
              <td className="px-3 py-2 align-top">matige tot ernstige beperking</td>
              <td className="px-3 py-2 align-top">acute hersenbloeding, progressieve MS</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">0,75</td>
              <td className="px-3 py-2 align-top">lichte beperking, grotendeels normaal functioneren</td>
              <td className="px-3 py-2 align-top">stabiele angina pectoris, milde depressie</td>
            </tr>
            <tr>
              <td className="px-3 py-2 align-top">1</td>
              <td className="px-3 py-2 align-top">perfecte gezondheid</td>
              <td className="px-3 py-2 align-top">gezonde jonge of actieve volwassene</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="rounded-xl border border-slate-200 dark:border-slate-600/80 bg-slate-50 dark:bg-slate-800/50 p-4 space-y-2">
        <p className="font-medium text-slate-900 dark:text-slate-100">Aandacht-vraag</p>
        <p>Een patiënt leeft nog 10 jaar met een utiliteit van 0,6. Hoeveel QALY is dat?</p>
        <p>Mini-antwoord: 10 × 0,6 = 6 QALY.</p>
      </div>
    </div>
  )
}
