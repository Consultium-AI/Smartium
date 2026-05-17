export default function Sect06Screening() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Screening: waarom en bij wie?</h2>
      <p>
        SLD is veel voorkomend, maar slechts een deel van de patiënten ontwikkelt ernstige leverziekte. Daarom is <strong className="text-slate-900 dark:text-slate-100">massascreening van de algemene bevolking</strong> niet zinvol. Dat zou leiden tot:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          veel <strong className="text-slate-900 dark:text-slate-100">fout-positieve uitslagen</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">onnodige ongerustheid</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">overbelasting van de zorg</strong>.
        </li>
      </ul>
      <p>
        Screening richt zich daarom niet op het opsporen van simpele steatose, maar op het vinden van{' '}
        <strong className="text-slate-900 dark:text-slate-100">klinisch relevante fibrose</strong>.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Wie komt in aanmerking voor screening?</h3>
      <p>Screening wordt aanbevolen bij patiënten met een verhoogd risico op fibrose, zoals:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          <strong className="text-slate-900 dark:text-slate-100">type 2 diabetes mellitus</strong>;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">obesitas</strong> of viscerale adipositas;
        </li>
        <li>
          <strong className="text-slate-900 dark:text-slate-100">metabool syndroom</strong>;
        </li>
        <li>
          een combinatie van metabole risicofactoren.
        </li>
      </ul>
      <p>Deze groepen hebben een aantoonbaar verhoogde kans op fibroseprogressie.</p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 4. Waarom gericht screenen?</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Waarom geen massascreening?</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Waarom wel risicogroep-screening?</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">Veel fout-positieven</td>
              <td className="p-3 align-top">Meer kans op het vinden van klinisch relevante fibrose</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Onnodige ongerustheid</td>
              <td className="p-3 align-top">Minder onnodige diagnostiek</td>
            </tr>
            <tr>
              <td className="p-3 align-top">Overbelasting van de zorg</td>
              <td className="p-3 align-top">Gerichte inzet van zorgcapaciteit</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
