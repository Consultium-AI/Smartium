export default function Sect13AanvullendOnderzoek() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Aanvullend onderzoek: wanneer wel en wanneer niet?</h2>
      <p>
        Aanvullende diagnostische onderzoeken hebben geen meerwaarde als je als arts daarvoor geen aanleiding ziet en ook geen nieuwe informatie verwacht. Patiënten zijn niet eerder overtuigd
        of gerustgesteld als extra diagnostiek geen afwijkingen oplevert.
      </p>
      <p>
        Daar komt bij dat onnodige diagnostiek het risico heeft dat er incidentele bevindingen worden gevonden die niets met de oorspronkelijke klacht te maken hebben, maar wel weer
        vervolgonderzoek oproepen. Zo kunnen opnieuw ongerustheid en medische aandacht ontstaan.
      </p>
      <p>
        In de casus was er al eerder veel onderzoek gedaan, zonder aanwijzingen voor een onderliggende ziekte zoals kanker. Er waren geen alarmsymptomen en de specialist besloot daarom geen
        nieuw aanvullend onderzoek te starten.
      </p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 4. Redenen om terughoudend te zijn met extra onderzoek</h3>
        <div className="overflow-x-auto mt-4 rounded-xl border border-emerald-200/80 dark:border-emerald-600/40">
          <table className="w-full text-sm border-collapse bg-white dark:bg-slate-900/50">
            <thead>
              <tr className="bg-emerald-100 dark:bg-emerald-900/40">
                <th className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 text-left font-semibold text-emerald-900 dark:text-emerald-100">
                  Reden
                </th>
                <th className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 text-left font-semibold text-emerald-900 dark:text-emerald-100">
                  Uitleg
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  Geen nieuwe informatie verwacht
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Onderzoek voegt dan weinig toe</td>
              </tr>
              <tr className="bg-emerald-50/70 dark:bg-emerald-950/30">
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  Geen medische aanwijzing
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Er is geen reden om verder te zoeken</td>
              </tr>
              <tr>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  Kans op incidentele bevindingen
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Deze kunnen onterecht nieuwe onrust geven</td>
              </tr>
              <tr className="bg-emerald-50/70 dark:bg-emerald-950/30">
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">
                  Herhaalde onzekerheid
                </td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">
                  Vervolgonderzoek kan de klachtbeleving juist versterken
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
