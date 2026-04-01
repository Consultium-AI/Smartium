export default function Sect09GroeiVanTumoren() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Groei van tumoren: waarom is dat belangrijk?</h2>
      <p>
        Een tumor kan zich verschillend snel delen. De verdubbelingstijd is de tijd die een tumor nodig heeft om in omvang te
        verdubbelen. Bij kindertumoren gaat dit vaak veel sneller dan bij tumoren op volwassen leeftijd.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Voorbeelden van groeisnelheid</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Tumor
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Verdubbelingstijd
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Tijd tot 40 delingen
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Burkitt-lymfoom</td>
              <td className="px-4 py-3 align-top">1 dag</td>
              <td className="px-4 py-3 align-top">1,3 maand</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Choriocarcinoom</td>
              <td className="px-4 py-3 align-top">1,5 dag</td>
              <td className="px-4 py-3 align-top">2 maanden</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">ALL</td>
              <td className="px-4 py-3 align-top">3 dagen</td>
              <td className="px-4 py-3 align-top">4 maanden</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Hodgkin-lymfoom</td>
              <td className="px-4 py-3 align-top">4 dagen</td>
              <td className="px-4 py-3 align-top">5,3 maanden</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Embryonaal testiscarcinoom</td>
              <td className="px-4 py-3 align-top">5–6 dagen</td>
              <td className="px-4 py-3 align-top">6,6–8 maanden</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Coloncarcinoom</td>
              <td className="px-4 py-3 align-top">80 dagen</td>
              <td className="px-4 py-3 align-top">107 maanden</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Longcarcinoom</td>
              <td className="px-4 py-3 align-top">90 dagen</td>
              <td className="px-4 py-3 align-top">120 maanden</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Mammacarcinoom</td>
              <td className="px-4 py-3 align-top">100 dagen</td>
              <td className="px-4 py-3 align-top">133 maanden</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De kern van dit overzicht is dat kindertumoren veel sneller groeien dan veel tumoren op volwassen leeftijd. Daardoor
        zijn ze vaak gevoeliger voor chemo- en radiotherapie.
      </p>
      <p>
        Die gevoeligheid hangt samen met de snelle celdeling. Behandeling die op delende cellen werkt, heeft dan meer effect.
        Daardoor is de kans op genezing bij kinderen vaak hoger dan bij volwassenen, ondanks dat kanker bij kinderen een
        ernstige ziekte blijft.
      </p>
    </div>
  )
}
