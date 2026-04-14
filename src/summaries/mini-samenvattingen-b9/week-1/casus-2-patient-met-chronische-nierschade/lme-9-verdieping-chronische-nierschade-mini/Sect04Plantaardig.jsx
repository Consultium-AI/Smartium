export default function Sect04Plantaardig() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Richtlijnen goede voeding en plantaardig eten</h3>
      <p className="mb-3">
        Binnen de voedingsadviezen is een meer plantaardig voedingspatroon steeds belangrijker geworden. Een plantaardige voeding bevat relatief minder eiwit, zout, fosfaat, calcium, ijzer, vitamine B2 en vitamine B12, en juist meer kalium, magnesium en vezels.
      </p>
      <p className="mb-2">Er zijn gunstige associaties beschreven met:</p>
      <ul className="list-disc pl-6 space-y-1 mb-3">
        <li>tragere achteruitgang van eGFR;</li>
        <li>minder proteinurie;</li>
        <li>een gunstig effect op de zuurgraad.</li>
      </ul>
      <p className="mb-4">
        De effecten op spiermassa en spierkracht zijn nog niet onderzocht.
      </p>
      <p className="font-medium text-slate-800 dark:text-slate-200">Tabel 2. Belangrijkste voedingsthema’s bij CNS</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Onderdeel</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Kern van het advies</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Belangrijk effect of aandachtspunt</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 font-medium">Eiwit</td>
              <td className="px-4 py-3">Niet te veel en niet te weinig</td>
              <td className="px-4 py-3">Belangrijk voor spiermassa, maar overmaat kan nadelig zijn</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 font-medium">Natrium/zout</td>
              <td className="px-4 py-3">Beperken</td>
              <td className="px-4 py-3">Ondersteunt bloeddrukregulatie en vermindert proteinurie</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 font-medium">Kalium</td>
              <td className="px-4 py-3">Meestal niet streng beperken</td>
              <td className="px-4 py-3">Alleen beperken bij herhaalde hyperkaliëmie</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 font-medium">Fosfaat</td>
              <td className="px-4 py-3">Beperken bij verhoogde serumwaarden</td>
              <td className="px-4 py-3">Vooral bij hyperfosfatemie en om bot- en vaatproblemen te beperken</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 font-medium">Vocht</td>
              <td className="px-4 py-3">Niet standaard extra drinken als behandeling</td>
              <td className="px-4 py-3">Beperken alleen bij specifieke indicaties</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 font-medium">Voedingspatroon</td>
              <td className="px-4 py-3">Meer plantaardig kan gunstig zijn</td>
              <td className="px-4 py-3">Minder zuurbelasting en gunstige associaties met nieruitkomsten</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
