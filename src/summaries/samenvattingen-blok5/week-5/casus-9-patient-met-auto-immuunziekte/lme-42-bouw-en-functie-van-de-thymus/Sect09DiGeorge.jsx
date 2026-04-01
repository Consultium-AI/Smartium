export default function Sect09DiGeorge() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">
        Klinische relevantie: DiGeorge-syndroom
      </h2>
      <p>
        Het DiGeorge-syndroom laat zien hoe belangrijk de thymus is. Dit syndroom ontstaat door een
        chromosomale deletie, 22q11.2, met als gevolg een embryonaal defect aan de neurale buis. Daardoor
        ontstaat onder andere een foutieve aanleg van het thymusepitheel.
      </p>
      <p>
        Hierdoor ontwikkelt de thymus zich onvoldoende of op een verkeerde plaats. Het gevolg is een
        verminderd aantal perifere T-cellen, terwijl het aantal B-cellen normaal is. Afhankelijk van de
        ernst van het T-celtekort is de weerstand van deze patiënten meer of minder verlaagd.
      </p>
      <p>De aandoening kan zich op veel manieren uiten. Vaak voorkomende afwijkingen zijn:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>afwijkingen in het gezicht;</li>
        <li>aangeboren hartafwijkingen;</li>
        <li>verstoorde groei en ontwikkeling.</li>
      </ul>
      <p>
        Ook kunnen andere afwijkingen voorkomen, zoals immunologische afwijkingen, endocrinologische
        problemen en afwijkingen van keel-neus-oor of andere orgaansystemen.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">
        Tabel 4. Belangrijke kenmerken bij DiGeorge-syndroom
      </h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Categorie
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Mogelijke afwijkingen
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Immunologisch
              </td>
              <td className="px-4 py-3 align-top">
                Thymushypoplasie of aplasie, cellulaire en humorale afwijkingen
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Hart</td>
              <td className="px-4 py-3 align-top">Aangeboren hartafwijkingen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Gezicht</td>
              <td className="px-4 py-3 align-top">Faciale dysmorfieën</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">
                Groei/ontwikkeling
              </td>
              <td className="px-4 py-3 align-top">Verstoorde groei en ontwikkeling</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">Endocrien</td>
              <td className="px-4 py-3 align-top">Hypoparathyreoïdie, hypocalciëmie</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        De pathofysiologie van dit syndroom laat zien dat epitheelcellen in de thymus een doorslaggevende rol
        spelen bij de differentiatie van T-cellen. Ze zijn niet alleen ondersteunend, maar ook belangrijk
        voor de selectie van ontwikkelende T-cellen.
      </p>
    </div>
  )
}
