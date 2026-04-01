export default function Sect09ImmuneCheckpointInhibitie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Immune checkpoint inhibitie</h2>
      <p>
        De recente doorbraak in de behandeling van sommige tumoren is gebaseerd op immuuncheckpoint-remmers. Deze grijpen
        in op de co-stimulatie van T-lymfocyten. Het idee is dat T-cellen niet alleen een antigeensignaal nodig hebben,
        maar ook extra signalen die de activatie versterken of juist remmen.
      </p>
      <p>
        Co-stimulatie betekent: alle signalen die een T-cel ontvangt naast het antigeenspecifieke signaal via de
        T-celreceptor.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 6. Het drie-signalenmodel van T-celactivatie</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Signaal
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Interactie
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Effect
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Signaal 1</td>
              <td className="px-4 py-3 align-top">HLA-antigeenpeptide op APC bindt aan de T-celreceptor (TCR)</td>
              <td className="px-4 py-3 align-top">Antigeenherkenning</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Signaal 2</td>
              <td className="px-4 py-3 align-top">CD80/CD86 op APC bindt aan CD28 op de T-cel</td>
              <td className="px-4 py-3 align-top">Stimulerend</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Remmend signaal</td>
              <td className="px-4 py-3 align-top">CTLA-4 of PD-1 remt de activatie</td>
              <td className="px-4 py-3 align-top">Remmend</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        CD80 en CD86 zijn dus belangrijk voor stimulatie via CD28. CTLA-4 en PD-1 werken remmend. CTLA-4 is daarbij
        bijzonder sterk, omdat het een hogere affiniteit heeft voor CD80/86 dan CD28. Daardoor kan het stimulerende signaal
        worden overheerst door het remmende signaal.
      </p>
      <p>
        Immune checkpoint inhibitie werkt door deze remmende signalen te blokkeren, zodat T-cellen weer beter geactiveerd
        kunnen worden.
      </p>
      <p>
        <strong>Aandachtsvraag:</strong> wat is co-stimulatie precies?
      </p>
      <p>
        Dat zijn alle signalen die een T-cel ontvangt naast het antigeenspecifieke TCR-signaal, en die de activatie kunnen
        versterken of remmen.
      </p>
    </div>
  )
}
