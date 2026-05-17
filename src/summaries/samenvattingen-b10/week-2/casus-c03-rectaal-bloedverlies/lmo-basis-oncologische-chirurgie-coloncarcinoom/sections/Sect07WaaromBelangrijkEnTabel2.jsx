export default function Sect07WaaromBelangrijkEnTabel2() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Waarom deze kennis belangrijk is</h2>
      <p>
        Deze leerstof is belangrijk omdat chirurgische behandeling een groot onderdeel vormt van de behandeling van
        colorectaal carcinoom. Als geneeskundestudent moet je daarom begrijpen dat de operatie niet losstaat van de
        biologie van de tumor. De plaats van de tumor en de manier van verspreiding bepalen mee hoe uitgebreid de
        resectie moet zijn.
      </p>
      <p>
        Dat maakt deze kennis klinisch relevant: als je weet hoe darmtumoren zich gedragen, kun je beter begrijpen
        waarom de chirurg voor een bepaalde benadering kiest.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Van tumorbiologie naar operatie</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/80 text-slate-900 dark:text-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold">Wat je moet weten</th>
              <th className="px-4 py-3 font-semibold">Waarom het belangrijk is</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Kenmerken van darmtumoren</td>
              <td className="px-4 py-3 align-top">Helpt bij het begrijpen van het ziektebeeld.</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Verspreidingspatronen</td>
              <td className="px-4 py-3 align-top">Bepaalt hoe de tumor zich kan uitbreiden.</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Basisprincipes van chirurgie</td>
              <td className="px-4 py-3 align-top">Geeft richting aan de behandeling.</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Uitgebreidheid van resectie</td>
              <td className="px-4 py-3 align-top">Zorgt voor een oncologisch verantwoorde operatie.</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
