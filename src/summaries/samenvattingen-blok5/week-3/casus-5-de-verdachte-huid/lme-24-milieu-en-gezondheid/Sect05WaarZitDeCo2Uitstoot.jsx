export default function Sect05WaarZitDeCo2Uitstoot() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Waar zit de CO₂-uitstoot in?</h2>
      <p>
        Bij het in kaart brengen van de milieubelasting van de zorg kijkt men niet alleen naar CO₂, maar ook naar
        landgebruik, watergebruik, grondstoffengebruik en afvalproductie. CO₂ is dus een handige graadmeter om
        prioriteiten te stellen, maar het vertelt niet alles. Het zegt bijvoorbeeld niets volledig over
        grondstoffenschaarste of biodiversiteitsverlies.
      </p>
      <p>
        Uit de analyses komen duidelijke hotspots naar voren. Die verschillen per type zorgorganisatie, maar een paar
        categorieën springen vrijwel altijd eruit: energie, vervoer, chemische producten en medicijnen, disposables,
        voeding en huisvesting.
      </p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">
        Tabel 2. Belangrijkste CO₂-hotspots per type zorgorganisatie
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Onderdeel
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Academisch ziekenhuis
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Gehandicaptenzorg
              </th>
              <th className="px-3 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Ouderenzorg
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top">Geneesmiddelen en medicijnen</td>
              <td className="px-3 py-3 align-top">28%</td>
              <td className="px-3 py-3 align-top">2%</td>
              <td className="px-3 py-3 align-top">3%</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top">Elektriciteit, gas en warmte</td>
              <td className="px-3 py-3 align-top">25%</td>
              <td className="px-3 py-3 align-top">48%</td>
              <td className="px-3 py-3 align-top">41%</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top">Mobiliteit</td>
              <td className="px-3 py-3 align-top">8%</td>
              <td className="px-3 py-3 align-top">21%</td>
              <td className="px-3 py-3 align-top">9%</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top">Disposables</td>
              <td className="px-3 py-3 align-top">8%</td>
              <td className="px-3 py-3 align-top">&lt;1%</td>
              <td className="px-3 py-3 align-top">1%</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top">Implantaten</td>
              <td className="px-3 py-3 align-top">8%</td>
              <td className="px-3 py-3 align-top">n.v.t.</td>
              <td className="px-3 py-3 align-top">n.v.t.</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top">Diagnostiek</td>
              <td className="px-3 py-3 align-top">8%</td>
              <td className="px-3 py-3 align-top">n.v.t.</td>
              <td className="px-3 py-3 align-top">n.v.t.</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top">ICT-apparatuur</td>
              <td className="px-3 py-3 align-top">5%</td>
              <td className="px-3 py-3 align-top">2%</td>
              <td className="px-3 py-3 align-top">1%</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top">Huisvesting</td>
              <td className="px-3 py-3 align-top">4%</td>
              <td className="px-3 py-3 align-top">10%</td>
              <td className="px-3 py-3 align-top">16%</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top">Voeding</td>
              <td className="px-3 py-3 align-top">3%</td>
              <td className="px-3 py-3 align-top">15%</td>
              <td className="px-3 py-3 align-top">21%</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-3 py-3 align-top">Medische apparaten</td>
              <td className="px-3 py-3 align-top">3%</td>
              <td className="px-3 py-3 align-top">n.v.t.</td>
              <td className="px-3 py-3 align-top">n.v.t.</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-3 py-3 align-top">Overig / afval / tekstiel / incontinentiemateriaal</td>
              <td className="px-3 py-3 align-top">kleine bijdragen</td>
              <td className="px-3 py-3 align-top">kleine bijdragen</td>
              <td className="px-3 py-3 align-top">kleine bijdragen</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Hieruit blijkt dat de belangrijkste bronnen per sector verschillen. In een academisch ziekenhuis zijn medicijnen en
        chemische producten vaak heel belangrijk, terwijl in langdurige zorg energie, voeding en huisvesting relatief
        zwaarder wegen.
      </p>
    </div>
  )
}
