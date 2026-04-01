export default function Sect03VormenEnAnatomischeLigging() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Vormen van aneurysmata en anatomische ligging</h2>
      <p>
        Er bestaan verschillende vormen van aneurysmata. De belangrijkste indeling is die tussen fusiform, sacculair en vals aneurysma. Ook het aneurysma dissecans wordt genoemd, al is dat strikt genomen geen klassiek aneurysma maar wel een acute aortapathologie.
      </p>

      <div>
        <p className="font-medium text-slate-800 dark:text-slate-200 mb-2">Tabel 1. Vormen van aneurysmata</p>
        <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Vorm</th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kenmerk</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Sacculair aneurysma</td>
                <td className="px-4 py-3">Lokale, asymmetrische uitstulping van de vaatwand; alle drie de vaatwandlagen zijn betrokken. Wordt vaak gezien bij focale wandzwakte.</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Fusiform aneurysma</td>
                <td className="px-4 py-3">Symmetrische, spoelvormige verwijding over een langer segment van het vat. Dit is de meest voorkomende vorm bij AAA.</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 font-medium">Aneurysma dissecans (aortadissectie)</td>
                <td className="px-4 py-3">Scheur in de intima waardoor bloed tussen de vaatwandlagen stroomt en een vals lumen vormt. Geen klassiek aneurysma, maar wel een acute aortapathologie.</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 font-medium">Vals aneurysma / pseudo-aneurysma / aneurysma spurium</td>
                <td className="px-4 py-3">Geen echte vaatwandverwijding; er is een volledige wandruptuur waarbij bloed wordt ingesloten door omringend weefsel. Vaak traumatisch of iatrogeen van oorsprong.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <p>Qua ligging van een AAA worden drie typen onderscheiden:</p>
      <ul className="list-disc pl-6 space-y-1">
        <li>Suprarenaal</li>
        <li>Juxtarenaal</li>
        <li>Infrarenaal</li>
      </ul>
      <p>Dit onderscheid is vooral belangrijk voor de behandeling.</p>
    </div>
  )
}
