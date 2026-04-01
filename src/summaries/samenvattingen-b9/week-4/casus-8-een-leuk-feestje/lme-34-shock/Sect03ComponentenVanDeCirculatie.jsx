export default function Sect03ComponentenVanDeCirculatie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">De componenten van de circulatie</h2>
      <p>
        Om shock te begrijpen, is het handig om steeds terug te denken aan het schema van de circulatie. De <span className="font-semibold">bloeddruk</span> is een parameter die je gemakkelijk kunt meten en die een indruk geeft van de circulatie. De bloeddruk wordt bepaald door twee grote onderdelen:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>het <span className="font-semibold">cardiac output</span>;</li>
        <li>de <span className="font-semibold">totale perifere weerstand</span>.</li>
      </ul>
      <p>
        Het <span className="font-semibold">cardiac output</span> is de hoeveelheid bloed die per minuut door het hart wordt rondgepompt. Dat hangt af van:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li>de <span className="font-semibold">hartfrequentie</span>;</li>
        <li>het <span className="font-semibold">slagvolume</span>.</li>
      </ul>
      <p>
        Het <span className="font-semibold">slagvolume</span> wordt bepaald door:
      </p>
      <ul className="list-disc pl-6 space-y-2">
        <li><span className="font-semibold">preload</span>;</li>
        <li><span className="font-semibold">contractiliteit</span>;</li>
        <li><span className="font-semibold">afterload</span>.</li>
      </ul>
      <p>
        <span className="font-semibold">Preload</span> is de mate van vulling van het hart. Die wordt vooral bepaald door de <span className="font-semibold">veneuze return</span>. Die veneuze return hangt weer samen met het bloedvolume, de <span className="font-semibold">venomotore tonus</span> van de venen en de vullingstijd van het hart. Als het hart heel snel klopt, is er minder tijd om te vullen en wordt het slagvolume lager.
      </p>
      <p>
        <span className="font-semibold">Afterload</span> is de weerstand waartegen het hart moet pompen. <span className="font-semibold">Contractiliteit</span> is de kracht waarmee het hart samentrekt.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 1. Belangrijkste onderdelen van de circulatie</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Onderdeel</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Betekenis</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Invloed op</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Bloeddruk</td>
              <td className="px-4 py-3 align-top">Makkelijk te meten maat voor de circulatie</td>
              <td className="px-4 py-3 align-top">Geeft indruk van de algehele circulatie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Cardiac output</td>
              <td className="px-4 py-3 align-top">Aantal liter per minuut dat het hart rondpompt</td>
              <td className="px-4 py-3 align-top">Bloeddruk en perfusie</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Hartfrequentie</td>
              <td className="px-4 py-3 align-top">Aantal hartslagen per minuut</td>
              <td className="px-4 py-3 align-top">Cardiac output</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Slagvolume</td>
              <td className="px-4 py-3 align-top">Hoeveel bloed per slag wordt uitgepompt</td>
              <td className="px-4 py-3 align-top">Cardiac output</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Preload</td>
              <td className="px-4 py-3 align-top">Vulling van het hart</td>
              <td className="px-4 py-3 align-top">Slagvolume</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Contractiliteit</td>
              <td className="px-4 py-3 align-top">Kracht van samentrekken</td>
              <td className="px-4 py-3 align-top">Slagvolume</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Afterload</td>
              <td className="px-4 py-3 align-top">Weerstand waartegen het hart pompt</td>
              <td className="px-4 py-3 align-top">Slagvolume</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">Totale perifere weerstand</td>
              <td className="px-4 py-3 align-top">Weerstand in de bloedvaten</td>
              <td className="px-4 py-3 align-top">Bloeddruk</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
