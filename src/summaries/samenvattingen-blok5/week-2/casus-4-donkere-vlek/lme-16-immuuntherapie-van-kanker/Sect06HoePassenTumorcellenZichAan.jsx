export default function Sect06HoePassenTumorcellenZichAan() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Hoe passen tumorcellen zich aan?</h2>
      <p>
        Tumorcellen kunnen zich op allerlei manieren aanpassen om aan het immuunsysteem te ontsnappen. Dat gebeurt via
        genetische en epigenetische veranderingen. Ze veranderen onder andere hun expressie van verschillende moleculen.
      </p>
      <p>Belangrijke veranderingen zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          productie van cytokinen die effectorcellen in de omgeving onderdrukken en juist immuunsuppressieve cellen
          stimuleren;
        </li>
        <li>
          downregulatie van HLA-moleculen, waardoor tumorcellen minder goed herkenbaar zijn voor cytotoxische
          T-lymfocyten;
        </li>
        <li>verandering in differentiatiestadium, vaak de-differentiatie genoemd;</li>
        <li>
          expressie van tumorantigenen, bijvoorbeeld doordat nieuwe antigenen ontstaan door mutaties of doordat bepaalde
          moleculen op een afwijkende plaats tot expressie komen;
        </li>
        <li>
          expressie van costimulatie-moleculen die remmend werken op immuuncellen, zoals PD-L1 en B7-H3.
        </li>
      </ul>
      <p>
        HLA-moleculen zijn belangrijk omdat T-cellen een antigeen alleen goed kunnen herkennen als het via HLA wordt
        gepresenteerd. Als tumorcellen minder HLA tot expressie brengen, worden ze minder zichtbaar voor cytotoxische
        T-cellen.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 4. Belangrijke veranderingen in tumorcellen tijdens immune editing
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Verandering
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Gevolg
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Cytokineproductie</td>
              <td className="px-4 py-3 align-top">Onderdrukking van effectorcellen en stimulatie van immuunsuppressieve cellen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Downregulatie van HLA</td>
              <td className="px-4 py-3 align-top">Minder herkenning door cytotoxische T-lymfocyten</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Verandering in differentiatie</td>
              <td className="px-4 py-3 align-top">Tumorcellen krijgen een ander expressieprofiel</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Expressie van tumorantigenen</td>
              <td className="px-4 py-3 align-top">Nieuwe of afwijkende antigenen kunnen zichtbaar worden</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Expressie van remmende moleculen zoals PD-L1 en B7-H3
              </td>
              <td className="px-4 py-3 align-top">Remming van immuuncellen</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
