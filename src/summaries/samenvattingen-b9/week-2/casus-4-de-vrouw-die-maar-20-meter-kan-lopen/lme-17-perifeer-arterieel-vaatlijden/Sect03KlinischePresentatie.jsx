export default function Sect03KlinischePresentatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Klinische presentatie en ernst</h2>
      <p>
        PAV kan zich op verschillende manieren uiten. Een belangrijk punt is dat veel patiënten in het begin nauwelijks klachten hebben. De klachten variëren van geen klachten tot kritieke ischemie.
      </p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 1. Fontaine-classificatie van PAV</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Stadium</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Klachten</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">I</td>
                <td className="px-4 py-3">Geen klachten</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">IIa</td>
                <td className="px-4 py-3">Claudicatioklachten, niet invaliderend</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">IIb</td>
                <td className="px-4 py-3">Claudicatioklachten, wel invaliderend</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">III</td>
                <td className="px-4 py-3">Rustpijn</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">IV</td>
                <td className="px-4 py-3">Gangreen, wonden of weefselverlies</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>Daarnaast geldt dat de presentatie heel uiteenlopend kan zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>ongeveer de helft van de patiënten is asymptomatisch;</li>
        <li>een deel heeft klassieke claudicatio intermittens;</li>
        <li>een deel heeft atypische pijn;</li>
        <li>en een klein deel presenteert zich met kritieke ischemie.</li>
      </ul>
      <p>Functionele beperkingen bij PAV zijn onder meer:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>een verminderde loopafstand en loopsnelheid;</li>
        <li>minder uithoudingsvermogen;</li>
        <li>en extra beperking door comorbiditeit, bijvoorbeeld hartfalen, COPD, artrose of neurogene claudicatio.</li>
      </ul>

      <div className="p-4 bg-amber-50 dark:bg-amber-950/40 rounded-xl border border-amber-200 dark:border-amber-600/35">
        <p className="text-amber-900 dark:text-amber-100 text-sm m-0">
          Aandacht-vragetje: kan de enkel-armindex in rust normaal zijn terwijl iemand toch PAV heeft?  Mini-antwoord: ja, dat kan. Vooral bij inspanning kan de afwijking duidelijker worden.
        </p>
      </div>
    </div>
  )
}
