export default function Sect08SldPatiententraject() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Het SLD-patiëntentraject</h2>
      <p>
        SLD is geen momentopname, maar een <strong className="text-slate-900 dark:text-slate-100">chronisch ziekteproces</strong>. Het patiëntentraject beschrijft hoe
        patiënten zich door het zorgsysteem bewegen, afhankelijk van risico en ziekte-ernst.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Eerste lijn</h3>
      <p>In de eerste lijn vindt vaak de eerste risicosignalering plaats, bijvoorbeeld bij patiënten met diabetes of obesitas. De nadruk ligt hier op:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>het herkennen van risicofactoren;</li>
        <li>een eerste risicostratificatie;</li>
        <li>leefstijladvies.</li>
      </ul>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tweede en derde lijn</h3>
      <p>Patiënten met verhoogd risico worden verwezen voor verdere diagnostiek. In specialistische zorg wordt:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>de ernst van fibrose beoordeeld;</li>
        <li>het behandelbeleid bepaald;</li>
        <li>monitoring ingezet.</li>
      </ul>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Monitoring en follow-up</h3>
      <p>
        Bij patiënten zonder gevorderde fibrose ligt de nadruk op periodieke herbeoordeling en leefstijlinterventies. Follow-up is bedoeld om progressie{' '}
        <strong className="text-slate-900 dark:text-slate-100">tijdig te signaleren</strong> en interventies zo nodig aan te passen.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 5. Fasen in het SLD-patiëntentraject</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200/90 dark:border-slate-600/80 bg-white/60 dark:bg-slate-900/40">
        <table className="min-w-full text-sm border-collapse">
          <thead>
            <tr className="border-b border-slate-200 dark:border-slate-600 text-left bg-slate-50/90 dark:bg-slate-800/60">
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Fase</th>
              <th className="p-3 font-semibold text-slate-900 dark:text-slate-100">Kern</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200/80 dark:divide-slate-600/70">
            <tr>
              <td className="p-3 align-top">
                <strong className="text-slate-900 dark:text-slate-100">Eerste lijn</strong>
              </td>
              <td className="p-3 align-top">Risicosignalering, eerste stratificatie, leefstijladvies</td>
            </tr>
            <tr>
              <td className="p-3 align-top">
                <strong className="text-slate-900 dark:text-slate-100">Verwijzing</strong>
              </td>
              <td className="p-3 align-top">Verdere diagnostiek bij verhoogd risico</td>
            </tr>
            <tr>
              <td className="p-3 align-top">
                <strong className="text-slate-900 dark:text-slate-100">Specialistische zorg</strong>
              </td>
              <td className="p-3 align-top">Fibrose beoordelen, beleid bepalen, monitoring starten</td>
            </tr>
            <tr>
              <td className="p-3 align-top">
                <strong className="text-slate-900 dark:text-slate-100">Follow-up</strong>
              </td>
              <td className="p-3 align-top">Periodieke herbeoordeling en leefstijlbegeleiding</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
