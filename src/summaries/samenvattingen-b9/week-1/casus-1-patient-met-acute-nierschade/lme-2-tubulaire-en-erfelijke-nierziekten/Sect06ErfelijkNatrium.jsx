export default function Sect06ErfelijkNatrium() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Erfelijke tubulaire stoornissen</h2>
      <p>
        Binnen de erfelijke nierziekten kun je grofweg drie groepen onderscheiden: ziekten van het natriumtransport, ziekten van het watertransport en cysteuze nierziekten. Andere kanalen, zoals fosfaatkanalen of calciumkanalen en calciumsensingreceptoren, kunnen ook genetisch defect zijn, maar die vallen buiten dit overzicht. Een praktische tip is dat cysteuze nierziekten het gemakkelijkst met echografie zijn te herkennen, omdat de cysten daarin goed zichtbaar zijn.
      </p>

      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Ziekten van het natriumtransport</h3>
      <p>
        Elke tubulus heeft zijn eigen kanaalsysteem voor natriumtransport. Daardoor geven mutaties in verschillende delen van de tubulus ook verschillende ziektebeelden.
      </p>
      <p className="font-medium text-slate-800 dark:text-slate-200">Tabel 3. Belangrijke erfelijke stoornissen van het natriumtransport</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kanaal / plaats</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Ziektebeeld</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kernpunten</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Proximale tubulus – NHE3 en SGLT2</td>
              <td className="px-4 py-3 align-top">NHE3 is de natrium/H+-wisselaar en heeft een centrale rol; ernstige verstoring is niet verenigbaar met het leven. Milde mutaties kunnen congenitale diarree geven. SGLT2-mutaties geven persisterende glucosurie.</td>
              <td className="px-4 py-3 align-top">Verstoring van de proximale terugresorptie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Lis van Henle – NKCC</td>
              <td className="px-4 py-3 align-top">Bartter-syndroom</td>
              <td className="px-4 py-3 align-top">Lage bloeddruk, hypokaliëmie, polyurie, dorst en groeistoornissen; hypercalciurie / hypocalciëmie; meestal ernstiger; autosomaal recessief</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Distale tubulus – NCC</td>
              <td className="px-4 py-3 align-top">Gitelman-syndroom</td>
              <td className="px-4 py-3 align-top">Lage bloeddruk, hypokaliëmie, polyurie, dorst en groeistoornissen; hypocalciurie en vaak meer uitgesproken hypomagnesiëmie; autosomaal recessief</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Verzamelbuis – ENaC</td>
              <td className="px-4 py-3 align-top">Liddle-syndroom, ook pseudohyperaldosteronisme</td>
              <td className="px-4 py-3 align-top">Hypertensie, hypokaliëmie, lage renine en aldosteron; autosomaal dominant</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Bij Bartter en Gitelman staat natriumverlies op de voorgrond, met daardoor lage bloeddruk en hypokaliëmie. Dat komt door activatie van het RAAS, waardoor kaliumverlies toeneemt. Bartter is meestal wat ernstiger dan Gitelman. Beide ziekten hebben vaak hypomagnesiëmie, maar die is bij Gitelman vaak duidelijker. Bij Bartter staat bovendien hypercalciurie / hypocalciëmie op de voorgrond, terwijl Gitelman juist hypocalciurie geeft. De behandeling bestaat uit symptomatische correctie met veel natrium en kalium, of een mineralocorticoïdreceptorantagonist zoals spironolacton om de hypokaliëmie te beperken.
      </p>
      <p>
        Liddle is juist het omgekeerde: daar is er te veel natriumreabsorptie in de verzamelbuis, met hypertensie en hypokaliëmie. Omdat renine en aldosteron laag zijn, spreek je van pseudohyperaldosteronisme. De behandeling bestaat uit directe ENaC-remming met amiloride of triamtereen. Spironolacton heeft hier geen effect, juist omdat aldosteron laag is.
      </p>
    </div>
  )
}
