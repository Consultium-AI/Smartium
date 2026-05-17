export default function Sect09ComplicatiesVanCirrose() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Complicaties van cirrose</h2>
      <p>De belangrijkste complicaties zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>portale hypertensie en decompensatie;</li>
        <li>ascites;</li>
        <li>spontane bacteriële peritonitis;</li>
        <li>hepatische encefalopathie;</li>
        <li>varicesbloeding;</li>
        <li>hepatorenaal syndroom;</li>
        <li>hepatocellulair carcinoom.</li>
      </ul>
      <p>Ook navelbreuk, infecties, ondervoeding en sarcopenie horen bij het beeld.</p>

      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
          Levercomplicaties en behandeling in het kort
        </h3>
        <div className="mt-4 overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
          <table className="min-w-full text-sm text-left">
            <thead className="bg-slate-100 dark:bg-slate-800/90">
              <tr>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Complicatie
                </th>
                <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                  Kern van de aanpak
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Ascites</td>
                <td className="px-4 py-3 align-top">zoutbeperking, spironolacton, furosemide</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Refractaire ascites</td>
                <td className="px-4 py-3 align-top">grote-volumeparacentese, TIPS, ascitespomp, levertransplantatie</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">SBP</td>
                <td className="px-4 py-3 align-top">intraveneuze antibiotica, albumine, profylaxe met norfloxacine</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Hepatische encefalopathie</td>
                <td className="px-4 py-3 align-top">lactulose, rifaximine, uitlokkende factor behandelen</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Varicesbloeding</td>
                <td className="px-4 py-3 align-top">endoscopische en medicamenteuze behandeling, zo nodig TIPS</td>
              </tr>
              <tr className="bg-slate-50/80 dark:bg-slate-800/30">
                <td className="px-4 py-3 align-top">Navelbreuk</td>
                <td className="px-4 py-3 align-top">beleid is niet altijd duidelijk; wait-and-see of electief herstel</td>
              </tr>
              <tr className="bg-white dark:bg-slate-900/40">
                <td className="px-4 py-3 align-top">Hepatocellulair carcinoom</td>
                <td className="px-4 py-3 align-top">surveillance en verdere behandeling volgens context</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}
