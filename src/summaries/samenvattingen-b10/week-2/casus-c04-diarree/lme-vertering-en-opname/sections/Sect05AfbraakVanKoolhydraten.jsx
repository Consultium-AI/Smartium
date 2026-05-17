export default function Sect05AfbraakVanKoolhydraten() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Afbraak van koolhydraten</h2>
      <p>
        Koolhydraten in de voeding bestaan grotendeels uit zetmeel, daarnaast uit sacharose en lactose. Zetmeel is een polymeer van glucose. Sacharose is een dimeer van glucose en fructose, en
        lactose is een dimeer van glucose en galactose.
      </p>
      <p>De afbraak van koolhydraten gebeurt in stappen:</p>
      <ol className="list-decimal pl-6 space-y-4">
        <li>
          Zetmeel wordt door amylase afgebroken tot kleinere brokstukken, zoals maltose, maltotriose en α-limit dextrinen.
        </li>
        <li>
          Op het apicale membraan van de enterocyt worden deze vervolgens verder gesplitst door membraangebonden enzymen:
          <ul className="list-disc pl-6 mt-2 space-y-2">
            <li>lactase: splitst lactose;</li>
            <li>glucoamylase: splitst vooral 2G- en 3G-fragmenten;</li>
            <li>
              sucrase-isomaltase: heeft twee functies:
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>sucrase-activiteit: splitst sacharose in glucose en fructose;</li>
                <li>isomaltase-activiteit: splitst α-limit dextrinen in vrije glucose.</li>
              </ul>
            </li>
          </ul>
        </li>
      </ol>
      <p>
        Daarna worden de monosachariden opgenomen. De belangrijkste transporters zijn SGLT1 en GLUT5 aan de apicale zijde, en GLUT2 aan de basolaterale zijde.
      </p>
      <div>
        <h3 className="text-lg font-semibold text-slate-900 dark:text-slate-100">Tabel 2. Belangrijkste koolhydraattransporters</h3>
        <div className="overflow-x-auto mt-4 rounded-xl border border-emerald-200/80 dark:border-emerald-600/40">
          <table className="w-full text-sm border-collapse bg-white dark:bg-slate-900/50">
            <thead>
              <tr className="bg-emerald-100 dark:bg-emerald-900/40">
                <th className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 text-left font-semibold text-emerald-900 dark:text-emerald-100">Transporter</th>
                <th className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 text-left font-semibold text-emerald-900 dark:text-emerald-100">Locatie</th>
                <th className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 text-left font-semibold text-emerald-900 dark:text-emerald-100">Substraat</th>
                <th className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 text-left font-semibold text-emerald-900 dark:text-emerald-100">Mechanisme</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">SGLT1</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Apicaal</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Glucose, galactose</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Secundair actief via Na⁺-gradiënt</td>
              </tr>
              <tr className="bg-emerald-50/70 dark:bg-emerald-950/30">
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">GLUT5</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Apicaal</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Fructose</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Passief</td>
              </tr>
              <tr>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">GLUT2</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Basolateraal</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Glucose, galactose, fructose</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Passief</td>
              </tr>
              <tr className="bg-emerald-50/70 dark:bg-emerald-950/30">
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top font-medium text-slate-900 dark:text-slate-100">Na/K-ATPase</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Basolateraal</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Na⁺ uit, K⁺ in</td>
                <td className="border border-emerald-200 dark:border-emerald-600/50 px-3 py-2 align-top">Houdt Na⁺-gradiënt in stand</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <p>
        SGLT1 gebruikt de natriumgradiënt om glucose en galactose tegen hun concentratiegradiënt in de cel op te nemen. Dat heet secundair actief transport. GLUT5 neemt fructose passief op.
        GLUT2 zorgt ervoor dat de monosachariden basolateraal het interstitium in kunnen.
      </p>
      <p>
        De laatste stappen van de koolhydraatafbraak vinden dus vlak aan het celoppervlak plaats, dicht bij de transporters. Daardoor worden de monosachariden direct opgenomen en blijft de
        osmotische belasting in het lumen relatief laag.
      </p>
    </div>
  )
}
