export default function Sect05HemodynamischeGevolgen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hemodynamische gevolgen: atriale kick en slagvolume</h2>
      <p>
        Om te begrijpen waarom AF klachten geeft, moet je eerst naar de normale vulling van de linker ventrikel kijken. Die verloopt in twee fasen:
      </p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>Vroege diastole: passieve vulling via de open AV-kleppen. Dit levert het grootste deel van de vulling.</li>
        <li>Late diastole: de atria trekken samen. Deze contractie heet de atriale kick en perst nog extra bloed de ventrikel in.</li>
      </ol>
      <p>
        Normaal draagt die atriale kick ongeveer 20–30% bij aan het einddiastolisch volume. Bij AF valt deze contractie weg. De ventrikels zijn dan alleen afhankelijk van passieve vulling, waardoor het EDV daalt. Minder vulling betekent minder rek van de ventrikelwand en dus een minder krachtige contractie volgens het Frank-Starling-mechanisme. Het gevolg is een lager slagvolume.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Gevolgen van verlies van de atriale kick</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Stap</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Gevolg</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Verlies van atriale contractie</td>
              <td className="px-4 py-3 align-top">Minder actieve vulling</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Lagere preload / EDV</td>
              <td className="px-4 py-3 align-top">Minder rek van de ventrikelwand</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Minder rek</td>
              <td className="px-4 py-3 align-top">Minder krachtige contractie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Lager slagvolume</td>
              <td className="px-4 py-3 align-top">Dalend cardiac output</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Daar komt nog iets bij: in AF is de ventrikelfrequentie vaak hoog. De totale hartcyclus wordt dan korter, maar vooral ten koste van de diastole. Juist in de diastole vindt vulling en doorbloeding van de hartspier plaats. Als de diastole te kort wordt, neemt de passieve vulling verder af en daalt het slagvolume nog meer.
      </p>
      <p>
        Het netto-effect van een hoge hartfrequentie is dus niet automatisch meer cardiac output. Omdat het slagvolume sterk daalt, kan het hartminuutvolume juist afnemen. Dat kan leiden tot hypotensie, dyspneu en zelfs hartfalen.
      </p>
    </div>
  )
}
