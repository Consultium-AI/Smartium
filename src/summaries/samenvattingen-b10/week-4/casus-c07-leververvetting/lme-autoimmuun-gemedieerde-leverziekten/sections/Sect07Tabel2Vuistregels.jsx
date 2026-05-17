export default function Sect07Tabel2Vuistregels() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Tabel 2. Handige diagnostische en therapeutische vuistregels</h2>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Vraag</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">PBC</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">PSC</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">AIH</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">Waar denk je aan bij het lab?</td>
              <td className="p-3 align-top">Cholestase, vooral AF en GGT</td>
              <td className="p-3 align-top">Cholestase, vooral AF en GGT</td>
              <td className="p-3 align-top">Hepatitis, vooral ALAT en ASAT</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Welke antistoffen passen?</td>
              <td className="p-3 align-top">AMA</td>
              <td className="p-3 align-top">Geen specifieke antistoffen</td>
              <td className="p-3 align-top">ANA, SMA, LKM, LC1, SLA/LP</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Welke beeldvorming is belangrijk?</td>
              <td className="p-3 align-top">Uitsluiten van obstructie, soms leverstijfheid</td>
              <td className="p-3 align-top">MRCP/MRI cruciaal</td>
              <td className="p-3 align-top">Vooral uitsluiten van andere oorzaken</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Eerste behandeling</td>
              <td className="p-3 align-top">Ursodeoxycholzuur</td>
              <td className="p-3 align-top">Ursodeoxycholzuur off-label</td>
              <td className="p-3 align-top">Prednison</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Belangrijke vervolgstap bij onvoldoende effect</td>
              <td className="p-3 align-top">Bezafibraat</td>
              <td className="p-3 align-top">Beoordeling van stenosen, soms ERCP</td>
              <td className="p-3 align-top">Azathioprine toevoegen</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Belangrijkste follow-up</td>
              <td className="p-3 align-top">Biochemie en leverstijfheid</td>
              <td className="p-3 align-top">Biochemie, MRCP/MRI en leverstijfheid</td>
              <td className="p-3 align-top">Biochemie, IgG en leverstijfheid</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
