export default function Sect06Tabel1Verschillen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De drie aandoeningen naast elkaar</h2>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Belangrijkste verschillen tussen PBC, PSC en AIH</h3>
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
              <td className="p-3 align-top">Doelwit</td>
              <td className="p-3 align-top">
                Kleine <strong className="text-slate-900 dark:text-slate-100">intrahepatische galwegen</strong>
              </td>
              <td className="p-3 align-top">
                <strong className="text-slate-900 dark:text-slate-100">Intra- en extrahepatische galwegen</strong>
              </td>
              <td className="p-3 align-top">
                <strong className="text-slate-900 dark:text-slate-100">Hepatocyten</strong>
              </td>
            </tr>
            <tr>
              <td className="p-3 align-top">Typische patiënt</td>
              <td className="p-3 align-top">
                Vooral <strong className="text-slate-900 dark:text-slate-100">vrouwen</strong>
              </td>
              <td className="p-3 align-top">
                Vaak geassocieerd met <strong className="text-slate-900 dark:text-slate-100">IBD</strong>; vaker mannen
              </td>
              <td className="p-3 align-top">
                Vooral <strong className="text-slate-900 dark:text-slate-100">vrouwen</strong>, vaak 15–40 jaar
              </td>
            </tr>
            <tr>
              <td className="p-3 align-top">Labpatroon</td>
              <td className="p-3 align-top">
                <strong className="text-slate-900 dark:text-slate-100">Cholestatisch</strong>: ALP en GGT verhoogd
              </td>
              <td className="p-3 align-top">
                <strong className="text-slate-900 dark:text-slate-100">Cholestatisch</strong>: ALP en GGT verhoogd
              </td>
              <td className="p-3 align-top">
                <strong className="text-slate-900 dark:text-slate-100">Hepatitisch</strong>: ALAT/ASAT sterk verhoogd, IgG verhoogd
              </td>
            </tr>
            <tr>
              <td className="p-3 align-top">Belangrijke antistoffen</td>
              <td className="p-3 align-top">
                <strong className="text-slate-900 dark:text-slate-100">AMA</strong>
              </td>
              <td className="p-3 align-top">Geen specifieke antistoffen</td>
              <td className="p-3 align-top">
                <strong className="text-slate-900 dark:text-slate-100">ANA, SMA, LKM, LC1, SLA/LP</strong>
              </td>
            </tr>
            <tr>
              <td className="p-3 align-top">Beeldvorming</td>
              <td className="p-3 align-top">Om obstructie uit te sluiten</td>
              <td className="p-3 align-top">
                <strong className="text-slate-900 dark:text-slate-100">MRCP/MRI</strong> essentieel
              </td>
              <td className="p-3 align-top">Beeldvorming vooral om andere oorzaken uit te sluiten</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Eerste behandeling</td>
              <td className="p-3 align-top">
                <strong className="text-slate-900 dark:text-slate-100">UDCA 13–15 mg/kg/dag</strong>
              </td>
              <td className="p-3 align-top">
                Geen curatieve medicatie; <strong className="text-slate-900 dark:text-slate-100">UDCA off-label 15–20 mg/kg/dag</strong>
              </td>
              <td className="p-3 align-top">
                <strong className="text-slate-900 dark:text-slate-100">Prednison</strong>, daarna vaak <strong className="text-slate-900 dark:text-slate-100">azathioprine</strong>
              </td>
            </tr>
            <tr>
              <td className="p-3 align-top">Belangrijke follow-up</td>
              <td className="p-3 align-top">Biochemie + leverstijfheid</td>
              <td className="p-3 align-top">Biochemie + MRCP/MRI + leverstijfheid</td>
              <td className="p-3 align-top">Biochemie + IgG + leverstijfheid</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Belangrijke complicaties</td>
              <td className="p-3 align-top">Fibrose, cirrose, leverfalen</td>
              <td className="p-3 align-top">Strictures, cirrose, cholangiocarcinoom</td>
              <td className="p-3 align-top">Cirrose, leverfalen, HCC</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
