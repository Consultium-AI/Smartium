export default function Sect05GeschiedenisImmunosuppressiva() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Geschiedenis van de immunosuppressiva</h2>
      <p>
        De behandeling van niertransplantatie is sterk afhankelijk van immunosuppressiva. Tegenwoordig vormen tacrolimus, mycofenolaat mofetil en prednison de hoekstenen van de behandeling. In het ErasmusMC stoppen de meeste patiënten na 3 tot 4 maanden met prednison.
      </p>
      <p>
        De ontwikkeling van immunosuppressiva begon echter al veel eerder. In de jaren 70 werd gezocht naar nieuwe middelen, aanvankelijk vooral met het idee om bacteriële infecties te bestrijden. Na de ontdekking en wijdverspreide toepassing van penicilline ontstond namelijk resistentie en was er behoefte aan nieuwe antibacteriële middelen. Uit bodemonderzoek in Hardangervidda in Noorwegen werd uiteindelijk de schimmel Tolypocladium inflatum geïsoleerd. Deze schimmel bleek stoffen te produceren die later bekend werden als ciclosporine A en ciclosporine B.
      </p>
      <p>
        Ciclosporine A bleek niet vooral antibacterieel, maar wel sterk remmend op antistofvorming en cellulaire immuniteit. Daarmee werd het mogelijk om transplantaties met betere resultaten uit te voeren. Later kwam tacrolimus erbij, afkomstig van de bacterie Streptomyces tsukubaensis. Dit middel werd eerst ontwikkeld als FK506 en later wereldwijd ingezet voor transplantatiepatiënten. Daarna kwam ook mycofenolaat mofetil beschikbaar. De ontwikkeling van deze middelen draaide uiteindelijk vooral om het beter benutten van beschikbare immunosuppressie.
      </p>
      <p className="font-medium text-slate-800 dark:text-slate-200">Tabel 2. Belangrijke mijlpalen in de geschiedenis van immunosuppressiva</p>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Middel</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Oorsprong / ontdekking</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Belang</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 font-medium">Ciclosporine A</td>
              <td className="px-4 py-3">Schimmel Tolypocladium inflatum</td>
              <td className="px-4 py-3">Doorbraak in transplantatiegeneeskunde</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 font-medium">Tacrolimus</td>
              <td className="px-4 py-3">Bacterie Streptomyces tsukubaensis</td>
              <td className="px-4 py-3">Belangrijke pijler in moderne transplantatiezorg</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 font-medium">Mycofenolaat mofetil</td>
              <td className="px-4 py-3">Later toegevoegd in de behandeling</td>
              <td className="px-4 py-3">Onderdeel van de huidige combinatiebehandeling</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
