export default function Sect06HistologieInsulitis() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Histologie en afweer bij insulitis</h2>
      <p>
        De ontsteking in de eilandjes van Langerhans heet insulitis. Dit is een chronische ontsteking met een
        mononucleair infiltraat, dus een infiltraat van vooral mononucleaire cellen. Daarbij zie je vooral:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>CD8+ T-lymfocyten;</li>
        <li>macrofagen;</li>
        <li>CD4+ T-lymfocyten;</li>
        <li>dendritische cellen;</li>
        <li>later ook B-cellen.</li>
      </ul>
      <p>
        Neutrofiele granulocyten passen juist bij acute ontsteking en worden hier niet verwacht.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
        Tabel 2. Belangrijke cellen en antistoffen bij auto-immuun diabetes type 1
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Onderdeel
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Kenmerk
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Belangrijkste effectorcellen
              </td>
              <td className="px-4 py-3 align-top">CD8+ T-lymfocyten</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Overige cellen
              </td>
              <td className="px-4 py-3 align-top">Macrofagen, CD4+ T-lymfocyten, dendritische cellen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Later in het proces
              </td>
              <td className="px-4 py-3 align-top">B-cellen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Auto-antistoffen
              </td>
              <td className="px-4 py-3 align-top">Tegen eilandjes van Langerhans, GAD, IA2 en ZnT-8</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Bij volwassen patiënten met LADA (*latent autoimmune diabetes in adults*) kunnen in het begin nog
        orale glucose-regulerende middelen helpen, maar uiteindelijk worden zij ook insulineafhankelijk.
        Antistoffen tegen GAD komen bij meer dan 80% van de patiënten met LADA voor.
      </p>
    </div>
  )
}
