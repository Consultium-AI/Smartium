export default function Sect05HoeWordtDeSentinelNodeOpgespoord() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hoe wordt de sentinel node opgespoord?</h2>
      <p>
        Voor de procedure wordt door de nucleair geneeskundige een radioactieve vloeistof ingebracht:
        technetium-99m-nanocolloïd (Tc-99m). Deze stof wordt geïnjecteerd in het litteken van de eerdere excisie van het
        primaire melanoom. Daarna stroomt de stof via de lymfebanen naar de schildwachtklier en hoopt daar op.
      </p>
      <p>
        Met behulp van een lymfescintigrafie of lymfescan kan de locatie van de schildwachtklier in beeld worden gebracht.
        Zo weet de chirurg tijdens de operatie waar gezocht moet worden.
      </p>
      <p>
        Soms wordt daarnaast aan het begin van de operatie ook een blauwe kleurstof geïnjecteerd in het litteken. Daardoor
        kan de sentinel node blauw aankleuren, wat het terugvinden makkelijker maakt.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Belangrijke onderdelen van de procedure</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Onderdeel
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Functie
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Tc-99m-nanocolloïd</td>
              <td className="px-4 py-3 align-top">Radioactieve stof die naar de sentinel node gaat</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Lymfescintigrafie / lymfescan
              </td>
              <td className="px-4 py-3 align-top">Laat zien waar de sentinel node zich bevindt</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Gammaprobe</td>
              <td className="px-4 py-3 align-top">
                Radioactieve sensor die tijdens de operatie de meest radioactieve plek opspoort
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Blauwe kleurstof</td>
              <td className="px-4 py-3 align-top">Kleurt de sentinel node blauw en maakt herkenning makkelijker</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Tijdens de operatie zoekt de chirurg met een gammaprobe naar het meest radioactieve gebied. Een sentinel node die
        duidelijk activiteit geeft met deze probe wordt vaak een ‘hete’ klier genoemd. Dat betekent dus: een klier die een
        pieksignaal geeft op de gammaprobe.
      </p>
      <p>
        Soms zijn er meerdere sentinel nodes. Die hoeven niet allemaal tegelijk even radioactief te zijn of blauw aan te
        kleuren. De chirurg verwijdert zo veel mogelijk hete en/of blauwe klieren, en de patholoog beoordeelt ze
        vervolgens allemaal.
      </p>
    </div>
  )
}
