export default function Sect06KlinischePresentatieEnTabel2() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Klinische presentatie van anafylaxie</h2>
      <p>
        De presentatie hangt samen met welk orgaansysteem is aangedaan. De schaal van Ring en Messmer beschrijft de ernst van
        de reactie.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 2. Ernst van anafylaxie volgens Ring en Messmer
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Graad
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerken
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">I</td>
              <td className="px-4 py-3 align-top">jeuk, flushing, urticaria, angio-oedeem</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">II</td>
              <td className="px-4 py-3 align-top">
                klachten van graad I plus misselijkheid of krampen, rhinorroe, heesheid, dyspneu, tachycardie
              </td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">III</td>
              <td className="px-4 py-3 align-top">
                larynxoedeem, bronchospasme, cyanose, circulatoire shock, ernstig braken of defecatie
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">IV</td>
              <td className="px-4 py-3 align-top">respiratoire arrest en/of circulatoire arrest</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De klachten kunnen per leeftijdsgroep verschillen. Bij jonge kinderen komen huidklachten vaak voor. In de getoonde
        tabel kwamen urticaria voor bij 88% van de peuters, 78% van de kleuters, 64% van basisschoolkinderen en 59% van
        adolescenten. Respiratoire klachten werden juist relatief vaker gezien bij adolescenten. Misselijkheid en braken
        kwamen relatief vaker voor bij jongere kinderen.
      </p>
      <p>
        Dat betekent dat anafylaxie bij kinderen en volwassenen niet altijd precies hetzelfde oogt. De arts moet dus niet
        alleen zoeken naar “het klassieke beeld”, maar ook naar variatie in presentatie.
      </p>
    </div>
  )
}
