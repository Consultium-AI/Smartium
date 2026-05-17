export default function Sect06AfbraakVanEiwitten() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Afbraak van eiwitten</h2>
      <p>
        De afbraak van eiwitten tot peptiden en uiteindelijk aminozuren begint in de maag en gaat verder in de dunne darm, zowel in het lumen als aan het apicale membraan van de enterocyt.
      </p>
      <p>De vertering van eiwitten gebeurt door verschillende typen proteasen:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>Endopeptidasen knippen bindingen ín de peptideketen.</li>
        <li>Aminopeptidasen knippen vanaf het amino-terminale uiteinde.</li>
        <li>Carboxypeptidasen knippen vanaf het carboxy-terminale uiteinde.</li>
      </ul>
      <p>
        Veel van deze enzymen zijn serineproteasen, met Ser, His en Asp in het actieve centrum. De endopeptidasen hebben specifieke splitsingsvoorkeuren:
      </p>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 3. Belangrijkste proteasen en hun voorkeur</h3>
        <div className="overflow-x-auto mt-4 rounded-xl border border-emerald-200/80 dark:border-emerald-600/40">
          <table className="w-full text-sm border-collapse bg-white dark:bg-slate-900/50">
            <thead>
              <tr className="bg-emerald-100 dark:bg-emerald-900/40">
                <th className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 text-left font-semibold text-emerald-900 dark:text-emerald-100">Enzym</th>
                <th className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 text-left font-semibold text-emerald-900 dark:text-emerald-100">Plaats</th>
                <th className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 text-left font-semibold text-emerald-900 dark:text-emerald-100">Type</th>
                <th className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 text-left font-semibold text-emerald-900 dark:text-emerald-100">Voorkeur</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">Pepsine</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Maag</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Endopeptidase</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Phe, Tyr, Glu, Asp</td>
              </tr>
              <tr className="bg-emerald-50/70 dark:bg-emerald-950/30">
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">Trypsine</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Pancreas</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Endopeptidase</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Lys, Arg</td>
              </tr>
              <tr>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">Chymotrypsine</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Pancreas</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Endopeptidase</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Tryp, Phe</td>
              </tr>
              <tr className="bg-emerald-50/70 dark:bg-emerald-950/30">
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">Elastase</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Pancreas</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Endopeptidase</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Ala, Gly, Ser</td>
              </tr>
              <tr>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">Aminopeptidasen</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Darmoppervlak/cytosol enterocyt</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Exopeptidase</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Knippen vanaf de N-zijde</td>
              </tr>
              <tr className="bg-emerald-50/70 dark:bg-emerald-950/30">
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">Carboxypeptidasen</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Pancreas</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Exopeptidase</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Knippen vanaf de C-zijde</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p>De eindproducten van deze afbraak zijn aminozuren, di- en tripeptiden. De enterocyt kan deze vervolgens verder verwerken.</p>
      <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Opname van aminozuren en peptiden</h3>
      <p>
        Op de enterocyt zitten op het apicale membraan meerdere transporters voor aminozuren. Die transporters zijn meestal Na⁺-afhankelijk. Er bestaan verschillende transporters, elk voor een
        bepaalde groep aminozuren. Daarnaast is er PepT1, een speciale apicale transporter voor kleine peptiden, vooral di- en tripeptiden. PepT1 gebruikt de H⁺-gradiënt tussen lumen en
        cytoplasma en is dus ook secundair actief.
      </p>
      <p>
        De tripeptiden worden intracellulair verder afgebroken tot vrije aminozuren. Die vrije aminozuren verlaten de cel vervolgens basolateraal passief naar het interstitium.
      </p>
    </div>
  )
}
