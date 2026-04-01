export default function Sect06WaaroverWordtDeGGDGebeldEnTabel1() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Waarover wordt de GGD gebeld?</h2>
      <p>De meldingen bij de GGD hebben vooral betrekking op het binnenmilieu. Daar worden als oorzaken vooral genoemd:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>schimmels;</li>
        <li>vocht;</li>
        <li>plaagdieren.</li>
      </ul>
      <p>
        Ongeveer een kwart van de meldingen gaat over het buitenmilieu, met klachten die vooral worden toegeschreven aan de
        directe woonomgeving, lucht en bodem.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Kenmerken van milieugerelateerde gezondheidsklachten</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Onderdeel
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Belangrijkste inhoud
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Binnenmilieu</td>
              <td className="px-4 py-3 align-top">Meeste meldingen; vaak schimmel, vocht en plaagdieren</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Buitenmilieu</td>
              <td className="px-4 py-3 align-top">Ongeveer een kwart van de meldingen; gaat over directe woonomgeving, lucht en bodem</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Meest voorkomende klachten</td>
              <td className="px-4 py-3 align-top">Bezorgdheid, ademhalingsklachten en hinder</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Belangrijke factor</td>
              <td className="px-4 py-3 align-top">Onvoldoende ventilatie kan stoffen laten ophopen in huis</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
