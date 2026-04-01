export default function Sect11Dyslipidemie() {
  return (
    <div className="space-y-6 text-slate-700 dark:text-slate-300 leading-relaxed">
      <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100">Dyslipidemie</h2>
      <p>
        Dyslipidemie is een belangrijke risicofactor voor atherosclerotische hart- en vaatziekten. Het lipidenmetabolisme draait vooral om cholesterol en triglyceriden.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Cholesterol en triglyceriden</h3>
      <p>Cholesterol is belangrijk voor:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>celmembraansynthese en de vloeibaarheid van het celmembraan;</li>
        <li>de synthese van stoffen die betrokken zijn bij celhomeostase;</li>
        <li>de vorming van galzouten, vitamine D en steroïdhormonen.</li>
      </ul>
      <p>Triglyceriden zijn vooral een energiebron en worden opgeslagen als lichaamsvet.</p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Endogene en exogene pathway</h3>
      <p>Cholesterol kan:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>
          door het lichaam zelf worden gemaakt: <span className="font-semibold">endogene pathway</span>;
        </li>
        <li>
          via voeding worden opgenomen: <span className="font-semibold">exogene pathway</span>.
        </li>
      </ul>
      <p>Via de vorming van galzouten wordt cholesterol uiteindelijk uitgescheiden.</p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Lipoproteïnen</h3>
      <p>Cholesterol en triglyceriden zijn niet oplosbaar in water en worden daarom vervoerd met lipoproteïnen.</p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Tabel 5. Belangrijke lipoproteïnen</h3>
      <div className="overflow-x-auto rounded-xl border border-slate-200 dark:border-slate-600">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-slate-100 dark:bg-slate-800/90">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Lipoproteïne</th>
              <th className="px-4 py-3 font-semibold text-slate-900 dark:text-slate-100 border-b border-slate-200 dark:border-slate-600">Apoproteïne</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-200 dark:divide-slate-600">
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">Chylomicronen</td>
              <td className="px-4 py-3 align-top">apoB-48</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">VLDL</td>
              <td className="px-4 py-3 align-top">apoB-100</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">IDL</td>
              <td className="px-4 py-3 align-top">apoB-100</td>
            </tr>
            <tr className="bg-slate-50/80 dark:bg-slate-800/30">
              <td className="px-4 py-3 align-top">LDL</td>
              <td className="px-4 py-3 align-top">apoB-100</td>
            </tr>
            <tr className="bg-white dark:bg-slate-900/40">
              <td className="px-4 py-3 align-top">HDL</td>
              <td className="px-4 py-3 align-top">apoA</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p>
        Chylomicronen zijn het grootst en HDL-deeltjes het kleinst. HDL heeft de grootste dichtheid. De verhouding tussen cholesterol en triglyceriden verschilt per deeltje en daardoor verschilt ook de dichtheid.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">LDL en HDL</h3>
      <p>
        Met name het <span className="font-semibold">LDL-cholesterolgehalte</span> is geassocieerd met hart- en vaatziekten. Een hoog{' '}
        <span className="font-semibold">HDL-cholesterolgehalte</span> beschermt juist tegen hart- en vaatziekten. Het behandeldoel is daarom het verlagen van LDL, of van de totale cholesterol/non-HDL-ratio die in de praktijk wordt gebruikt als vergelijkbare maat.
      </p>
      <p>
        LDL zorgt voor cholesterolafzetting in de vaatwand en draagt bij aan atherosclerose. HDL kan cholesterol deels weer {'\u201C'}opruimen{'\u201D'} via reverse cholesterol transport.
      </p>
      <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100">Oorzaken van dyslipidemie</h3>
      <p>Dyslipidemie kan beïnvloed worden door:</p>
      <ul className="list-disc pl-6 space-y-2">
        <li>obesitas;</li>
        <li>diabetes mellitus;</li>
        <li>hypothyreoïdie;</li>
        <li>nefrotisch syndroom;</li>
        <li>alcohol;</li>
        <li>steroïden;</li>
        <li>antipsychotica.</li>
      </ul>
      <p>
        Er zijn ook erfelijke vormen. De meest voorkomende is <span className="font-semibold">familiaire hypercholesterolemie (FH)</span>, een autosomaal dominant overervende aandoening. Die geeft vaak al op jonge leeftijd atherosclerose.
      </p>
    </div>
  )
}
