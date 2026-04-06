export default function Sect04PrimaireKenmerken() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Primaire kenmerken van vaatschade</h2>
      <p>
        De module noemt drie belangrijke primaire kenmerken. Dit zijn de sterkste aanwijzingen dat het bloedvat zélf het
        doelwit is van het proces.
      </p>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">1. Angiocentrisch of angio-invasief</h3>
        <p>
          Dit betekent dat het ontstekingsinfiltraat echt gecentreerd is rond het bloedvat of zelfs het bloedvat
          binnendringt. Het bloedvat staat dus centraal in het proces.
        </p>
        <p>
          Dat is belangrijk, want daarmee zie je dat het niet zomaar een algemene ontsteking in de buurt van een vat is.
          Het vat zelf is betrokken.
        </p>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">2. Vaatwandonderbreking of vaatwanddestructie</h3>
        <p>
          Hierbij zie je dat de wand van het bloedvat niet meer intact is. De structuur van de vaatwand is beschadigd of
          onderbroken.
        </p>
        <p>Dat wijst op echte schade aan het vat en ondersteunt dus het idee van primaire vasculitis.</p>
      </div>

      <div className="space-y-3">
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">3. Intramuraal of luminaal fibrine: fibrinoïde necrose</h3>
        <p>
          De module noemt ook fibrine in de vaatwand of in het lumen van het vat. Dit wordt samengevat als fibrinoïde
          necrose.
        </p>
        <p>
          Een lastig begrip kort uitgelegd:fibrinoïde necrose betekent dat de vaatwand zodanig beschadigd is geraakt dat
          er een felroze, fibrineachtig aspect ontstaat in en rond het vat. In deze module is dat een belangrijk teken
          van primaire vaatschade.
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <caption className="px-4 py-3 text-left font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
            Tabel 1. Primaire kenmerken van kleine vaten leukocytoclastische vasculitis
          </caption>
          <thead className="bg-slate-100 dark:bg-slate-800/80">
            <tr>
              <th className="px-4 py-2 font-semibold text-slate-900 dark:text-slate-100">Primair kenmerk</th>
              <th className="px-4 py-2 font-semibold text-slate-900 dark:text-slate-100">Betekenis</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr>
              <td className="px-4 py-2 align-top">Angiocentrisch / angio-invasief</td>
              <td className="px-4 py-2">Ontstekingscellen liggen rond of in het bloedvat</td>
            </tr>
            <tr>
              <td className="px-4 py-2 align-top">Vaatwandonderbreking / destructie</td>
              <td className="px-4 py-2">De vaatwand is beschadigd of onderbroken</td>
            </tr>
            <tr>
              <td className="px-4 py-2 align-top">Intramuraal / luminaal fibrine</td>
              <td className="px-4 py-2">Fibrine in of rond het vat, passend bij fibrinoïde necrose</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
