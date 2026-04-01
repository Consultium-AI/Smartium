export default function Sect09Raas() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">RAAS: langzamere regeling via de nieren</h2>
      <p>
        Naast de snelle baroreceptorreflex speelt de nier een belangrijke rol in de regeling van de bloeddruk en het circulerend volume via het <span className="font-semibold">RAAS</span>: het renine-angiotensine-aldosteronsysteem.
      </p>
      <p>
        Bij een lage bloeddruk scheidt de nier <span className="font-semibold">renine</span> uit. Dat zet een keten in gang:
      </p>
      <ol className="list-decimal pl-6 space-y-2">
        <li>
          renine leidt tot de vorming van <span className="font-semibold">angiotensine I</span>;
        </li>
        <li>
          via ACE ontstaat <span className="font-semibold">angiotensine II</span>;
        </li>
        <li>angiotensine II heeft meerdere effecten.</li>
      </ol>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Effecten van het RAAS</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Effect</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Gevolg</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">
                Stimulatie van de bijnier tot <span className="font-semibold">aldosteron</span>
              </td>
              <td className="px-4 py-3 align-top">Reabsorptie van natrium en water in de nieren</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">
                Stimulatie van de hypofyse tot <span className="font-semibold">ADH/vasopressine</span>
              </td>
              <td className="px-4 py-3 align-top">Waterretentie en vasoconstrictie</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">
                Activatie van het <span className="font-semibold">sympathisch zenuwstelsel</span>
              </td>
              <td className="px-4 py-3 align-top">Verhoging van de circulatoire compensatie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">
                <span className="font-semibold">Vasoconstrictie</span>
              </td>
              <td className="px-4 py-3 align-top">Verhoging van de bloeddruk</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Het doel van deze reactie is herstel van de bloeddruk én herstel van de bloedstroom. Veneuze vasoconstrictie, toename van de hartfrequentie en vochtretentie zijn gericht op een toename van de veneuze return. Arteriële vasoconstrictie is meer gericht op herstel van de bloeddruk.
      </p>
    </div>
  )
}
