export default function Sect05GenetischeFactoren() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Genetische factoren bij auto-immuniteit</h2>
      <p>
        Genetische factoren kunnen de kans op auto-immuniteit duidelijk verhogen. Sommige genen zijn
        belangrijk voor centrale tolerantie, andere voor de remming van autoreactieve cellen in de periferie.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Belangrijke genen</h3>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          AIRE: mutaties hierin leiden tot verminderde expressie van lichaamseigen antigenen in de thymus.
          Daardoor verloopt negatieve selectie niet goed.
        </li>
        <li>FAS: betrokken bij het opruimen van autoreactieve T-cellen in de thymus.</li>
        <li>
          FOXP3: essentieel voor de ontwikkeling van regulatoire T-cellen (Tregs). Een defect leidt tot minder
          Tregs en dus minder remming van autoreactieve afweer.
        </li>
      </ul>
      <p>
        AIRE-, FAS- en FOXP3-defecten kunnen leiden tot een gestoord tolerantieproces en verschillende
        auto-immuunverschijnselen. Bij FOXP3 is dat niet alleen belangrijk voor thymus-Tregs, maar ook voor
        perifere Tregs.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">HLA en auto-immuniteit</h3>
      <p>
        HLA-genen hebben een sterke associatie met auto-immuunziekten. Hun invloed wordt vaak uitgedrukt in
        een odds ratio: hoe hoger die is, hoe sterker de samenhang met ziekte. HLA-moleculen bepalen welke
        peptiden aan T-cellen worden gepresenteerd. Sommige HLA-varianten kunnen specifieke auto-antigenen
        beter presenteren, waardoor autoreactieve T-cellen gemakkelijker overleven en activeren.
      </p>
      <p>
        Er speelt ook linkage disequilibrium mee. Dat betekent dat bepaalde combinaties van allelen in een
        haplotype vaker samen voorkomen dan je op basis van de losse frequenties zou verwachten. Daardoor is
        soms lastig aan te wijzen welk gen nu precies de hoofdrol speelt.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Genen en hun rol</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Gen
              </th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">
                Belangrijk effect
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">AIRE</td>
              <td className="px-4 py-3 align-top">
                Minder expressie van zelfantigenen in thymus, gestoorde negatieve selectie
              </td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">FAS</td>
              <td className="px-4 py-3 align-top">Verstoorde verwijdering van autoreactieve T-cellen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">FOXP3</td>
              <td className="px-4 py-3 align-top">Minder ontwikkeling en functie van regulatoire T-cellen</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">HLA-varianten</td>
              <td className="px-4 py-3 align-top">Veranderde presentatie van auto-antigenen aan T-cellen</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">IL-2 receptor</td>
              <td className="px-4 py-3 align-top">Minder remming van autoreactieve T-cellen via Tregs</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top font-semibold text-slate-900 dark:text-slate-100">CTLA-4</td>
              <td className="px-4 py-3 align-top">Minder rem op T-celactivatie</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        CTLA-4 is een co-inhibitoir molecuul op Tregs. Het bindt aan CD80/CD86 op antigeenpresenterende cellen
        en remt zo T-celactivatie. Variatie in CTLA-4 kan dus leiden tot minder remming van autoreactieve
        T-cellen. De IL-2 receptor is ook belangrijk omdat Tregs deze in hoge mate tot expressie brengen;
        via dit systeem wordt proliferatie van autoreactieve T-cellen afgeremd.
      </p>
    </div>
  )
}
