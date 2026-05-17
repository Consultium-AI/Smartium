export default function Sect03Tabel1Kernverschillen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Tabel 1. Kernverschillen tussen PBC, PSC en AIH</h2>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Kenmerk</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">PBC</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">PSC</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">AIH</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">Primaire lokalisatie</td>
              <td className="p-3 align-top">Kleine intrahepatische galwegen</td>
              <td className="p-3 align-top">Intra- en extrahepatische galwegen</td>
              <td className="p-3 align-top">Hepatocyten</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Typisch labpatroon</td>
              <td className="p-3 align-top">Cholestatisch: vooral verhoogd AF en GGT</td>
              <td className="p-3 align-top">Cholestatisch: AF en GGT verhoogd, soms licht verhoogde transaminasen</td>
              <td className="p-3 align-top">Hepatitisch: vooral sterk verhoogde ALAT/ASAT</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Belangrijke antistoffen</td>
              <td className="p-3 align-top">AMA</td>
              <td className="p-3 align-top">Geen specifieke antistoffen</td>
              <td className="p-3 align-top">ANA, SMA, anti-LKM, anti-LC1, anti-SLA/LP</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Beeldvorming</td>
              <td className="p-3 align-top">Geen extrahepatische obstructie</td>
              <td className="p-3 align-top">MRCP/MRI toont stricturen en dilataties</td>
              <td className="p-3 align-top">Beeldvorming vooral om andere oorzaken uit te sluiten</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Typische patiënt</td>
              <td className="p-3 align-top">Vooral vrouwen</td>
              <td className="p-3 align-top">Vaak mannen, vaak geassocieerd met IBD</td>
              <td className="p-3 align-top">Vaker vrouwen, ratio ongeveer 3:1</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Eerste behandeling</td>
              <td className="p-3 align-top">Ursodeoxycholzuur</td>
              <td className="p-3 align-top">Ursodeoxycholzuur off-label</td>
              <td className="p-3 align-top">Prednison, vaak later azathioprine of mycofenolaatmofetil</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Monitoring</td>
              <td className="p-3 align-top">Biochemie en leverstijfheidsmetingen</td>
              <td className="p-3 align-top">Biochemie, MRI/MRCP en leverstijfheidsmetingen</td>
              <td className="p-3 align-top">Biochemie inclusief IgG en leverstijfheidsmetingen</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
