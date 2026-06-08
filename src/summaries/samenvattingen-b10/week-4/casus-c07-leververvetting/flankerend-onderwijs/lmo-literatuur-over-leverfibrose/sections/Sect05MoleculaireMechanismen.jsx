export default function Sect05MoleculaireMechanismen() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Moleculaire mechanismen</h2>
      <p>
        Op moleculair niveau draait leverfibrose om signalen die cellen aanzetten tot verandering. Ontstekingsmediatoren en andere signaalmoleculen zorgen ervoor dat cellen in de lever anders gaan functioneren. Daardoor wordt de balans tussen schade, herstel en afbraak verstoord.
      </p>
      <p>
        De kern van dit proces is dat de lever niet meer terugkeert naar de normale toestand, maar in een toestand van voortdurende activatie blijft. De moleculaire signalen houden de fibrose in stand en versterken elkaar vaak. Zo ontstaat een zichzelf onderhoudend proces.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Kern van het fibroseproces</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Onderdeel</th>
              <th className="px-4 py-3 font-semibold">Wat gebeurt er?</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Leverbeschadiging</td>
              <td className="px-4 py-3 align-top">De lever raakt herhaald of langdurig beschadigd</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Ontsteking</td>
              <td className="px-4 py-3 align-top">Er ontstaat een inflammatoire reactie met signaalstoffen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Celactivatie</td>
              <td className="px-4 py-3 align-top">Cellen in de lever worden geactiveerd en gaan anders werken</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Bindweefselvorming</td>
              <td className="px-4 py-3 align-top">Er wordt meer extracellulaire matrix en littekenweefsel gevormd</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Voortbestaan van fibrose</td>
              <td className="px-4 py-3 align-top">Bij aanhoudende schade blijft het proces doorgaan</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
